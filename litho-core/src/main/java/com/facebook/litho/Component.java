/*
 * Copyright 2014-present Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho;

import static android.support.annotation.Dimension.DP;
import static com.facebook.litho.ComponentKeyUtils.getKeyForChildPosition;

import android.animation.AnimatorInflater;
import android.animation.StateListAnimator;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.support.annotation.AttrRes;
import android.support.annotation.ColorInt;
import android.support.annotation.DimenRes;
import android.support.annotation.Dimension;
import android.support.annotation.DrawableRes;
import android.support.annotation.GuardedBy;
import android.support.annotation.Px;
import android.support.annotation.StringRes;
import android.support.annotation.StyleRes;
import android.support.annotation.VisibleForTesting;
import android.util.SparseArray;
import android.util.SparseIntArray;
import android.view.ViewOutlineProvider;
import com.facebook.infer.annotation.ReturnsOwnership;
import com.facebook.infer.annotation.ThreadConfined;
import com.facebook.infer.annotation.ThreadSafe;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.config.ComponentsConfiguration;
import com.facebook.litho.drawable.ComparableColorDrawable;
import com.facebook.litho.drawable.ComparableDrawable;
import com.facebook.litho.drawable.ComparableResDrawable;
import com.facebook.litho.drawable.DefaultComparableDrawable;
import com.facebook.litho.reference.DrawableReference;
import com.facebook.litho.reference.Reference;
import com.facebook.yoga.YogaAlign;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaEdge;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaPositionType;
import com.facebook.yoga.YogaWrap;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.BitSet;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import javax.annotation.Nullable;

/**
 * Represents a unique instance of a component. To create new {@link Component} instances, use the
 * {@code create()} method in the generated subclass which returns a builder that allows you to set
 * values for individual props. {@link Component} instances are immutable after creation.
 */
public abstract class Component extends ComponentLifecycle
    implements Cloneable, HasEventDispatcher, HasEventTrigger, Equivalence<Component> {

  private static final AtomicInteger sIdGenerator = new AtomicInteger(1);

  boolean mIsNestedTreeResolutionExperimentEnabled =
      ComponentsConfiguration.isNestedTreeResolutionExperimentEnabled;

  private int mId = sIdGenerator.getAndIncrement();
  @Nullable private String mOwnerGlobalKey;
  private String mGlobalKey;
  @Nullable private String mKey;
  private boolean mHasManualKey;

  @GuardedBy("this")
  private AtomicBoolean mLayoutVersionGenerator = new AtomicBoolean();

  /**
   * Whether this Component should split the layout calculation of its direct children on multiple
   * background threads.
   */
  protected boolean mSplitChildrenLayoutInThreadPool;

  @ThreadConfined(ThreadConfined.ANY)
  private @Nullable ComponentContext mScopedContext;

  private boolean mIsLayoutStarted = false;

  // If we have a cachedLayout, onPrepare and onMeasure would have been called on it already.
  @ThreadConfined(ThreadConfined.ANY)
  @GuardedBy("this")
  public @Nullable ConcurrentHashMap<Long, InternalNode> mThreadIdToLastMeasuredLayout;

  @Nullable private CommonPropsHolder mCommonPropsHolder;

  /**
   * Holds onto how many direct component children of each type this Component has. Used for
   * automatically generating unique global keys for all sibling components of the same type.
   */
  @Nullable private SparseIntArray mChildCounters;

  @Nullable private Set<String> mManualKeys;

  /**
   * Holds an event handler with its dispatcher set to the parent component, or - in case that this
   * is a root component - a default handler that reraises the exception.
   */
  @Nullable private EventHandler<ErrorEvent> mErrorEventHandler;

  // Keep hold of the layout that we resolved during will render in order to use it again in
  // createLayout.
  @Nullable private InternalNode mLayoutCreatedInWillRender;

  /**
   * Holds a list of working range related data. {@link LayoutState} will use it to update {@link
   * LayoutState#mWorkingRangeContainer} when calculate method is finished.
   */
  @Nullable List<WorkingRangeContainer.Registration> mWorkingRangeRegistrations;

  /** Holds an identifying name of the component, set at construction time. */
  private final String mSimpleName;

  protected Component(String simpleName) {
    this(simpleName, null);
  }

  /**
   * This constructor should be called only if working with a manually crafted "special" Component.
   * This should NOT be used in general use cases. Use the standard {@link #Component(String)}
   * instead.
   */
  protected Component(String simpleName, Object type) {
    super(type);
    mSimpleName = simpleName;
  }

  /** Should only be used by logging to provide more readable messages. */
  public final String getSimpleName() {
    final Component delegate = getSimpleNameDelegate();
    if (delegate == null) {
      return mSimpleName;
    }

    return mSimpleName + "(" + getFirstNonSimpleNameDelegate(delegate).getSimpleName() + ")";
  }

  /**
   * @return the Component this Component should delegate its getSimpleName calls to. See {@link
   *     LayoutSpec#simpleNameDelegate()}
   */
  protected @Nullable Component getSimpleNameDelegate() {
    return null;
  }

  /**
   * Compares this component to a different one to check if they are the same
   *
   * <p>This is used to be able to skip rendering a component again. We avoid using the {@link
   * Object#equals(Object)} so we can optimize the code better over time since we don't have to
   * adhere to the contract required for a equals method.
   *
   * @param other the component to compare to
   * @return true if the components are of the same type and have the same props
   */
  @Override
  public boolean isEquivalentTo(Component other) {
    if (this == other) {
      return true;
    }
    if (other == null || getClass() != other.getClass()) {
      return false;
    }
    if (getId() == other.getId()) {
      return true;
    }

    return ComponentUtils.hasEquivalentFields(this, other);
  }

  protected @Nullable StateContainer getStateContainer() {
    return null;
  }

  public ComponentContext getScopedContext() {
    return mScopedContext;
  }

  public void setScopedContext(ComponentContext scopedContext) {
    mScopedContext = scopedContext;

    if (mLayoutCreatedInWillRender != null) {
      assertSameBaseContext(scopedContext, mLayoutCreatedInWillRender.getContext());
    }
  }

  // TODO(t30797526): Remove
  private static void assertSameBaseContext(
      ComponentContext scopedContext, ComponentContext willRenderContext) {
    if (scopedContext.getAndroidContext() != willRenderContext.getAndroidContext()) {
      final ComponentsLogger logger = scopedContext.getLogger();
      if (logger != null) {
        logger.emitMessage(
            ComponentsLogger.LogLevel.ERROR,
            "Found mismatching base contexts between the Component's Context ("
                + scopedContext.getAndroidContext()
                + ") and the Context used in willRender ("
                + willRenderContext.getAndroidContext()
                + ")!");
      }
    }
  }

  synchronized void markLayoutStarted() {
    if (mIsLayoutStarted) {
      throw new IllegalStateException("Duplicate layout of a component: " + this);
    }
    mIsLayoutStarted = true;
  }

  // Get an id that is identical across cloned instances, but otherwise unique
  protected int getId() {
    return mId;
  }

  @Nullable
  String getOwnerGlobalKey() {
    return mOwnerGlobalKey;
  }

  /**
   * Get a key that is unique to this component within its tree.
   * @return
   */
  String getGlobalKey() {
    return mGlobalKey;
  }

  /**
   * Set a key for this component that is unique within its tree.
   *
   * @param key
   */
  // thread-safe because the one write is before all the reads
  @ThreadSafe(enableChecks = false)
  void setGlobalKey(String key) {
    mGlobalKey = key;
  }

  /** @return if has a manually set key */
  boolean hasManualKey() {
    return mHasManualKey;
  }

  /**
   *
   * @return a key that is local to the component's parent.
   */
  String getKey() {
    if (mKey == null && !mHasManualKey) {
      mKey = Integer.toString(getTypeId());
    }
    return mKey;
  }

  /**
   * Set a key that is local to the parent of this component.
   * @param key key
   */
  void setKey(String key) {
    mHasManualKey = true;
    mKey = key;
  }

  /**
   * Generate a global key for the given component that is unique among all of this component's
   * children of the same type. If a manual key has been set on the child component using the .key()
   * method, return the manual key.
   *
   * <p>TODO: (T38237241) remove the usage of the key handler post the nested tree experiment
   *
   * @param component the child component for which we're finding a unique global key
   * @param key the key of the child component as determined by its lifecycle id or manual setting
   * @return a unique global key for this component relative to its siblings.
   */
  private String generateUniqueGlobalKeyForChild(Component component, String key) {
    final String childKey = ComponentKeyUtils.getKeyWithSeparator(getGlobalKey(), key);
    final KeyHandler keyHandler = mScopedContext.getKeyHandler();

    /* Null check is for testing only, the keyHandler should never be null here otherwise. */
    if (keyHandler == null) {
      return childKey;
    }

    if (mIsNestedTreeResolutionExperimentEnabled) {
      /*
       Instead of relying on the KeyHandler to hold all registered keys and check for duplicates
       against it; this implementation checks if the key (read child type) is unique within it's
       parent. Which will recursively ensure that all global keys are unique.

       This will also calculate the global keys for the descendants of a nested tree correctly if
       it is resolved again, which causes clashes with the KeyHandler because the keys were
       already registered during measure pass.
      */

      if (component.mHasManualKey) { // if the component has a manual key
        if (mManualKeys == null) {
          mManualKeys = new HashSet<>();
        }
        if (mManualKeys.contains(childKey)) { // if it is a duplicate
          logDuplicateManualKeyWarning(component, key); // log a warning and generate a unique key
        } else {
          mManualKeys.add(childKey);
          getChildCountAndIncrement(component); // to avoid subsequent clash with a generated key
          return childKey; // return it
        }
      }

      int childCount = getChildCountAndIncrement(component);

      if (childCount == 0) { // if first child of type then return the child key
        return childKey;
      } else { // if NOT first child of type append the child count to the child key
        return getKeyForChildPosition(childKey, childCount);
      }

    } else if (keyHandler.hasKey(childKey)) { // If the key is duplicate append it with child count

      // The component has a manual key set on it but that key is a duplicate
      if (component.mHasManualKey) {
        logDuplicateManualKeyWarning(component, key); // log a warning and generate a key
      }

      return getKeyForChildPosition(childKey, getChildCountAndIncrement(component));
    } else { // If the key is unique return it
      return childKey;
    }
  }

  /**
   * Returns the number of children of a given type {@code this} component has and then increments
   * it by 1.
   *
   * @param component the child component
   * @return the number of children of {@param component} type
   */
  private int getChildCountAndIncrement(Component component) {
    if (mChildCounters == null) {
      mChildCounters = new SparseIntArray();
    }

    final int typeId = component.getTypeId();
    final int count = mChildCounters.get(typeId, 0);
    mChildCounters.put(typeId, count + 1);

    return count;
  }

  private void logDuplicateManualKeyWarning(Component component, String key) {
    final ComponentsLogger logger = mScopedContext.getLogger();
    if (logger != null) {
      logger.emitMessage(
          ComponentsLogger.LogLevel.WARNING,
          "The manual key "
              + key
              + " you are setting on this "
              + component.getSimpleName()
              + " is a duplicate and will be changed into a unique one. "
              + "This will result in unexpected behavior if you don't change it.");
    }
  }

  public Component makeShallowCopy() {
    try {
      final Component component = (Component) super.clone();

      if (mIsNestedTreeResolutionExperimentEnabled) {
        component.mGlobalKey = null;
      }

      component.mIsLayoutStarted = false;
      component.mHasManualKey = false;
      component.mLayoutVersionGenerator = new AtomicBoolean();
      component.mScopedContext = null;
      component.mChildCounters = null;
      component.mManualKeys = null;

      return component;
    } catch (CloneNotSupportedException e) {
      // This class implements Cloneable, so this is impossible
      throw new RuntimeException(e);
    }
  }

  Component makeShallowCopyWithNewId() {
    final Component component = makeShallowCopy();
    component.mId = sIdGenerator.incrementAndGet();
    return component;
  }

  @Nullable
  InternalNode getCachedLayout() {
    return mThreadIdToLastMeasuredLayout == null
        ? null
        : mThreadIdToLastMeasuredLayout.get(Thread.currentThread().getId());
  }

  /**
   * Only use if absolutely needed! This removes the cached layout so this component will be
   * remeasured even if it has alread been measured with the same size specs.
   */
  public void clearCachedLayout() {
    if (getCachedLayout() != null) {
      mThreadIdToLastMeasuredLayout.remove(Thread.currentThread().getId());
    }
  }

  void reset() {
    mIsLayoutStarted = false;
  }

  /**
   * Measure a component with the given {@link SizeSpec} constrain.
   *
   * @param c {@link ComponentContext}.
   * @param widthSpec Width {@link SizeSpec} constrain.
   * @param heightSpec Height {@link SizeSpec} constrain.
   * @param outputSize Size object that will be set with the measured dimensions.
   */
  public void measure(ComponentContext c, int widthSpec, int heightSpec, Size outputSize) {
    InternalNode lastMeasuredLayout = getCachedLayout();
    if (lastMeasuredLayout == null
        || !MeasureComparisonUtils.isMeasureSpecCompatible(
            lastMeasuredLayout.getLastWidthSpec(), widthSpec, lastMeasuredLayout.getWidth())
        || !MeasureComparisonUtils.isMeasureSpecCompatible(
            lastMeasuredLayout.getLastHeightSpec(), heightSpec, lastMeasuredLayout.getHeight())) {
      clearCachedLayout();

      lastMeasuredLayout =
          LayoutState.createAndMeasureTreeForComponent(c, this, widthSpec, heightSpec);

      // We just want to make sure this isn't initialized on multiple threads
      synchronized (this) {
        if (mThreadIdToLastMeasuredLayout == null) {
          mThreadIdToLastMeasuredLayout = new ConcurrentHashMap<>(2);
        }
      }
      mThreadIdToLastMeasuredLayout.put(Thread.currentThread().getId(), lastMeasuredLayout);

      // This component resolution won't be deferred nor onMeasure called if it's a layout spec.
      // In that case it needs to manually save the latest saze specs.
      // The size specs will be checked during the calculation (or collection) of the main tree.
      if (Component.isLayoutSpec(this)) {
        lastMeasuredLayout.setLastWidthSpec(widthSpec);
        lastMeasuredLayout.setLastHeightSpec(heightSpec);
        lastMeasuredLayout.setLastMeasuredWidth(lastMeasuredLayout.getWidth());
        lastMeasuredLayout.setLastMeasuredHeight(lastMeasuredLayout.getHeight());
      }
    }

    outputSize.width = lastMeasuredLayout.getWidth();
    outputSize.height = lastMeasuredLayout.getHeight();
  }

  protected void copyInterStageImpl(Component component) {

  }

  static boolean isHostSpec(@Nullable Component component) {
    return (component instanceof HostComponent);
  }

  static boolean isLayoutSpec(@Nullable Component component) {
    return (component != null && component.getMountType() == MountType.NONE);
  }

  static boolean isMountSpec(@Nullable Component component) {
    return (component != null && component.getMountType() != MountType.NONE);
  }

  static boolean isMountDrawableSpec(@Nullable Component component) {
    return (component != null && component.getMountType() == MountType.DRAWABLE);
  }

  static boolean isMountViewSpec(@Nullable Component component) {
    return (component != null && component.getMountType() == MountType.VIEW);
  }

  static boolean isLayoutSpecWithSizeSpec(@Nullable Component component) {
    return (isLayoutSpec(component) && component.canMeasure());
  }

  static boolean isNestedTree(@Nullable Component component) {
    return (isLayoutSpecWithSizeSpec(component)
        || (component != null && component.getCachedLayout() != null));
  }

  private static Component getFirstNonSimpleNameDelegate(Component component) {
    Component current = component;
    while (current.getSimpleNameDelegate() != null) {
      current = current.getSimpleNameDelegate();
    }
    return current;
  }

  /**
   * @return whether the given component will render because it returns non-null from its resolved
   *     onCreateLayout, based on its current props and state. Returns true if the resolved layout
   *     is non-null, otherwise false.
   * @deprecated Using willRender is regarded as an anti-pattern, since it will load all classes
   *     into memory in order to potentially decide not to use any of them.
   */
  @Deprecated
  public static boolean willRender(ComponentContext c, Component component) {
    if (component == null) {
      return false;
    }

    final ComponentContext scopedContext = component.getScopedContext();
    if (scopedContext != null) {
      assertSameBaseContext(scopedContext, c);
    }

    if (component.mLayoutCreatedInWillRender != null) {
      return willRender(component.mLayoutCreatedInWillRender);
    }

    component.mLayoutCreatedInWillRender = Layout.create(c, component);
    return willRender(component.mLayoutCreatedInWillRender);
  }

  private static boolean willRender(InternalNode node) {
    if (node == null || ComponentContext.NULL_LAYOUT.equals(node)) {
      return false;
    }

    if (node.isNestedTreeHolder()) {
      // Components using @OnCreateLayoutWithSizeSpec are lazily resolved after the rest of the tree
      // has been measured (so that we have the proper measurements to pass in). This means we can't
      // eagerly check the result of OnCreateLayoutWithSizeSpec.
      throw new IllegalArgumentException(
          "Cannot check willRender on a component that uses @OnCreateLayoutWithSizeSpec! "
              + "Try wrapping this component in one that uses @OnCreateLayout if possible.");
    }

    return true;
  }

  InternalNode consumeLayoutCreatedInWillRender() {
    final InternalNode layout = mLayoutCreatedInWillRender;
    mLayoutCreatedInWillRender = null;
    return layout;
  }

  @VisibleForTesting(otherwise = VisibleForTesting.PRIVATE)
  InternalNode getLayoutCreatedInWillRenderForTesting() {
    return mLayoutCreatedInWillRender;
  }

  /** Called to install internal state based on a component's parent context. */
  @VisibleForTesting(otherwise = VisibleForTesting.PACKAGE_PRIVATE)
  protected void updateInternalChildState(ComponentContext parentContext) {
    updateInternalChildState(parentContext, false);
  }

  /** Called to install internal state based on a component's parent context. */
  @VisibleForTesting(otherwise = VisibleForTesting.PACKAGE_PRIVATE)
  protected void updateInternalChildState(
      ComponentContext parentContext, boolean shouldForwardSplitLayoutStatus) {

    if (ComponentsConfiguration.isDebugModeEnabled || ComponentsConfiguration.useGlobalKeys) {

      // allow overriding global key if the NestedTreeResolution Experiment is disabled
      if (!mIsNestedTreeResolutionExperimentEnabled || getGlobalKey() == null) {
        String globalKey = generateKey(parentContext);
        setGlobalKey(globalKey);

        final KeyHandler keyHandler = parentContext.getKeyHandler();
        // This is for testing, the keyHandler should never be null here otherwise.
        if (!mIsNestedTreeResolutionExperimentEnabled && keyHandler != null) {
          keyHandler.registerKey(this);
        }
      }
    }

    applyStateUpdates(parentContext);
    generateErrorEventHandler(parentContext);
    setSplitLayoutOnThreadPoolStatus(parentContext, shouldForwardSplitLayoutStatus);

    // Needed for tests, mocks can run into this.
    if (mLayoutVersionGenerator != null) {
      mLayoutVersionGenerator.set(true);
    }
  }

  private void setSplitLayoutOnThreadPoolStatus(
      ComponentContext parentContext, boolean shouldForwardSplitLayoutStatus) {
    mSplitChildrenLayoutInThreadPool =
        SplitBackgroundLayoutConfiguration.canSplitChildrenLayouts(parentContext, this);

    final Component parent = parentContext.getComponentScope();
    if (parent == null) {
      return;
    }

    /**
     * For parent components that enable split layout but wrap their children in a Row or Column,
     * forward this flag to the Row or Column to split the layout of their children.
     */
    if (shouldForwardSplitLayoutStatus) {
      mSplitChildrenLayoutInThreadPool = parent.mSplitChildrenLayoutInThreadPool;
    }
  }

  private String generateKey(ComponentContext parentContext) {
    final Component parentScope = parentContext.getComponentScope();
    final String key = getKey();
    final String globalKey;

    if (parentScope == null) {
      globalKey = key;
    } else {
      if (parentScope.getGlobalKey() == null) {
        final ComponentsLogger logger = parentContext.getLogger();
        if (logger != null) {
          logger.emitMessage(
              ComponentsLogger.LogLevel.ERROR,
              "Trying to generate parent-based key for component "
                  + getSimpleName()
                  + " , but parent "
                  + parentScope.getSimpleName()
                  + " has a null global key \"."
                  + " This is most likely a configuration mistake, check the value of ComponentsConfiguration.useGlobalKeys.");
        }

        globalKey = "null" + key;
      } else {
        globalKey = parentScope.generateUniqueGlobalKeyForChild(this, key);
      }
    }

    return globalKey;
  }

  private void generateErrorEventHandler(ComponentContext parentContext) {
    if (ComponentsConfiguration.enableOnErrorHandling && mErrorEventHandler == null) {
      HasEventDispatcher parentEventDispatcherProvider = parentContext.getComponentScope();

      // We have no parent, which means we're sitting at the root of the hierarchy. Since we cannot
      // pass the event on any further, we reraise it.
      if (parentEventDispatcherProvider == null) {
        parentEventDispatcherProvider = new DefaultErrorEventDispatcher();
      }

      mErrorEventHandler =
          new EventHandler<>(
              parentEventDispatcherProvider,
              ERROR_EVENT_HANDLER_ID,
              new Object[] {parentContext});
    }
  }

  /**
   * Prepares a component for calling any pending state updates on it by setting the TreeProps which
   * the component requires from its parent, setting a scoped component context and applies the
   * pending state updates.
   *
   * @param c component context
   */
  private void applyStateUpdates(ComponentContext c) {
    setScopedContext(ComponentContext.withComponentScope(c, this));
    populateTreeProps(getScopedContext().getTreeProps());
    if (hasState()) {
      c.getStateHandler().applyStateUpdatesForComponent(this);
    }
  }

  /**
   * If this component instance had its layout created on a different thread, we need to create a
   * copy to create its layout on this thread, otherwise we'll end up accessing the internal data
   * structures of the same instance on different threads. This can happen when the component is
   * passed as a prop and the same instance can be used in layout calculations on main and
   * background threads. https://github.com/facebook/litho/issues/360
   */
  Component getThreadSafeInstance() {
    // Needed for tests, mocks can run into this.
    if (mLayoutVersionGenerator == null) {
      return this;
    }

    final boolean shouldCreateNewInstance = mLayoutVersionGenerator.getAndSet(true);

    return shouldCreateNewInstance ? makeShallowCopy() : this;
  }

  @Override
  public void recordEventTrigger(EventTriggersContainer container) {
    // Do nothing by default
  }

  /**
   * Indicate that this component implements its own {@link #resolve(ComponentContext)} logic
   * instead of going through {@link #createComponentLayout(ComponentContext)}.
   */
  protected boolean canResolve() {
    return false;
  }

  CommonPropsCopyable getCommonPropsCopyable() {
    return mCommonPropsHolder;
  }

  public CommonProps getCommonProps() {
    return mCommonPropsHolder;
  }

  private CommonPropsHolder getOrCreateCommonPropsHolder() {
    if (mCommonPropsHolder == null) {
      mCommonPropsHolder = new CommonPropsHolder();
    }

    return mCommonPropsHolder;
  }

  @Deprecated
  @Override
  public EventDispatcher getEventDispatcher() {
    return this;
  }

  /**
   * @return The error handler dispatching to either the parent component if available, or reraising
   *     the exception. Null if the component isn't initialized.
   */
  @Nullable
  EventHandler<ErrorEvent> getErrorHandler() {
    return mErrorEventHandler;
  }

  /** Store a working range information into a list for later use by {@link LayoutState}. */
  protected static void registerWorkingRange(
      String name, WorkingRange workingRange, Component component) {
    if (component.mWorkingRangeRegistrations == null) {
      component.mWorkingRangeRegistrations = new ArrayList<>();
    }
    component.mWorkingRangeRegistrations.add(
        new WorkingRangeContainer.Registration(name, workingRange, component));
  }

  public boolean hasBackgroundSet() {
    return mCommonPropsHolder != null && mCommonPropsHolder.getBackground() != null;
  }

  public boolean hasClickHandlerSet() {
    return mCommonPropsHolder != null
        && mCommonPropsHolder.getNullableNodeInfo() != null
        && mCommonPropsHolder.getNullableNodeInfo().getClickHandler() != null;
  }

  /**
   * @param <T> the type of this builder. Required to ensure methods defined here in the abstract
   *     class correctly return the type of the concrete subclass.
   */
  public abstract static class Builder<T extends Builder<T>> {

    @Nullable private ComponentContext mContext;
    private Component mComponent;
    protected ResourceResolver mResourceResolver;

    protected void init(
        ComponentContext c,
        @AttrRes int defStyleAttr,
        @StyleRes int defStyleRes,
        Component component) {
      mResourceResolver = new ResourceResolver(c);
      mComponent = component;
      mContext = c;

      mComponent.mIsNestedTreeResolutionExperimentEnabled =
          mContext.isNestedTreeResolutionExperimentEnabled();

      final Component owner = getOwner();
      if (owner != null) {
        mComponent.mOwnerGlobalKey = owner.getGlobalKey();
      }

      if (defStyleAttr != 0 || defStyleRes != 0) {
        mComponent.getOrCreateCommonPropsHolder().setStyle(defStyleAttr, defStyleRes);
        component.loadStyle(c, defStyleAttr, defStyleRes);
      }
    }

    /**
     * @return the {@link ComponentContext} for this {@link Builder}, useful for Kotlin DSL. Will be
     *     null if the Builder was already used to {@link #build()} a component.
     */
    @Nullable
    public ComponentContext getContext() {
      return mContext;
    }

    public abstract T getThis();

    /** Set a key on the component that is local to its parent. */
    public T key(@Nullable String key) {
      if (key == null) {
        final ComponentsLogger logger = mContext.getLogger();
        if (logger != null) {
          final String componentName =
              mContext.getComponentScope() != null
                  ? mContext.getComponentScope().getSimpleName()
                  : "unknown component";
          final String message =
              "Setting a null key from "
                  + componentName
                  + " which is usually a mistake! If it is not, explicitly set the String 'null'";
          logger.emitMessage(ComponentsLogger.LogLevel.ERROR, message);
        }
        key = "null";
      }
      mComponent.setKey(key);
      return getThis();
    }

    protected void release() {
      mContext = null;
      mComponent = null;
      mResourceResolver = null;
    }

    /**
     * Checks that all the required props are supplied, and if not throws a useful exception
     *
     * @param requiredPropsCount expected number of props
     * @param required the bit set that identifies which props have been supplied
     * @param requiredPropsNames the names of all props used for a useful error message
     */
    protected static void checkArgs(
        int requiredPropsCount, BitSet required, String[] requiredPropsNames) {
      if (required != null && required.nextClearBit(0) < requiredPropsCount) {
        List<String> missingProps = new ArrayList<>();
        for (int i = 0; i < requiredPropsCount; i++) {
          if (!required.get(i)) {
            missingProps.add(requiredPropsNames[i]);
          }
        }
        throw new IllegalStateException(
            "The following props are not marked as optional and were not supplied: "
                + Arrays.toString(missingProps.toArray()));
      }
    }

    @ReturnsOwnership
    public abstract Component build();

    /**
     * The RTL/LTR direction of components and text. Determines whether {@link YogaEdge#START} and
     * {@link YogaEdge#END} will resolve to the left or right side, among other things. INHERIT
     * indicates this setting will be inherited from this component's parent.
     *
     * <p>Default: {@link YogaDirection#INHERIT}
     */
    public T layoutDirection(@Nullable YogaDirection layoutDirection) {
      mComponent.getOrCreateCommonPropsHolder().layoutDirection(layoutDirection);
      return getThis();
    }

    /**
     * Controls how a child aligns in the cross direction, overriding the alignItems of the parent.
     * See <a
     * href="https://yogalayout.com/docs/align-items">https://yogalayout.com/docs/align-items</a>
     * for more information.
     *
     * <p>Default: {@link YogaAlign#AUTO}
     */
    public T alignSelf(@Nullable YogaAlign alignSelf) {
      mComponent.getOrCreateCommonPropsHolder().alignSelf(alignSelf);
      return getThis();
    }

    /**
     * Controls how this component will be positioned within its parent. See <a
     * href="https://yogalayout.com/docs/absolute-relative-layout">https://yogalayout.com/docs/absolute-relative-layout</a>
     * for more details.
     *
     * <p>Default: {@link YogaPositionType#RELATIVE}
     */
    public T positionType(@Nullable YogaPositionType positionType) {
      mComponent.getOrCreateCommonPropsHolder().positionType(positionType);
      return getThis();
    }

    /**
     * Sets flexGrow, flexShrink, and flexBasis at the same time.
     *
     * <p>When flex is a positive number, it makes the component flexible and it will be sized
     * proportional to its flex value. So a component with flex set to 2 will take twice the space
     * as a component with flex set to 1.
     *
     * <p>When flex is 0, the component is sized according to width and height and it is inflexible.
     *
     * <p>When flex is -1, the component is normally sized according width and height. However, if
     * there's not enough space, the component will shrink to its minWidth and minHeight.
     *
     * <p>See <a href="https://yogalayout.com/docs/flex">https://yogalayout.com/docs/flex</a> for
     * more information.
     *
     * <p>Default: 0
     */
    public T flex(float flex) {
      mComponent.getOrCreateCommonPropsHolder().flex(flex);
      return getThis();
    }

    /**
     * If the sum of childrens' main axis dimensions is less than the minimum size, how much should
     * this component grow? This value represents the "flex grow factor" and determines how much
     * this component should grow along the main axis in relation to any other flexible children.
     * See <a href="https://yogalayout.com/docs/flex">https://yogalayout.com/docs/flex</a> for more
     * information.
     *
     * <p>Default: 0
     */
    public T flexGrow(float flexGrow) {
      mComponent.getOrCreateCommonPropsHolder().flexGrow(flexGrow);
      return getThis();
    }

    /**
     * The FlexShrink property describes how to shrink children along the main axis in the case that
     * the total size of the children overflow the size of the container on the main axis. See <a
     * href="https://yogalayout.com/docs/flex">https://yogalayout.com/docs/flex</a> for more
     * information.
     *
     * <p>Default: 1
     */
    public T flexShrink(float flexShrink) {
      mComponent.getOrCreateCommonPropsHolder().flexShrink(flexShrink);
      return getThis();
    }

    /**
     * The FlexBasis property is an axis-independent way of providing the default size of an item on
     * the main axis. Setting the FlexBasis of a child is similar to setting the Width of that child
     * if its parent is a container with FlexDirection = row or setting the Height of a child if its
     * parent is a container with FlexDirection = column. The FlexBasis of an item is the default
     * size of that item, the size of the item before any FlexGrow and FlexShrink calculations are
     * performed. See <a
     * href="https://yogalayout.com/docs/flex">https://yogalayout.com/docs/flex</a> for more
     * information.
     *
     * <p>Default: 0
     */
    public T flexBasisPx(@Px int flexBasis) {
      mComponent.getOrCreateCommonPropsHolder().flexBasisPx(flexBasis);
      return getThis();
    }

    /**
     * @see #flexBasisPx
     * @param percent a value between 0 and 100.
     */
    public T flexBasisPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().flexBasisPercent(percent);
      return getThis();
    }

    /** @see #flexBasisPx */
    public T flexBasisAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return flexBasisPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    /** @see #flexBasisPx */
    public T flexBasisAttr(@AttrRes int resId) {
      return flexBasisAttr(resId, 0);
    }

    /** @see #flexBasisPx */
    public T flexBasisRes(@DimenRes int resId) {
      return flexBasisPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    /** @see #flexBasisPx */
    public T flexBasisDip(@Dimension(unit = DP) float flexBasis) {
      return flexBasisPx(mResourceResolver.dipsToPixels(flexBasis));
    }

    public T importantForAccessibility(int importantForAccessibility) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .importantForAccessibility(importantForAccessibility);
      return getThis();
    }

    public T duplicateParentState(boolean duplicateParentState) {
      mComponent.getOrCreateCommonPropsHolder().duplicateParentState(duplicateParentState);
      return getThis();
    }

    public T marginPx(@Nullable YogaEdge edge, @Px int margin) {
      mComponent.getOrCreateCommonPropsHolder().marginPx(edge, margin);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T marginPercent(@Nullable YogaEdge edge, float percent) {
      mComponent.getOrCreateCommonPropsHolder().marginPercent(edge, percent);
      return getThis();
    }

    public T marginAuto(@Nullable YogaEdge edge) {
      mComponent.getOrCreateCommonPropsHolder().marginAuto(edge);
      return getThis();
    }

    public T marginAttr(@Nullable YogaEdge edge, @AttrRes int resId, @DimenRes int defaultResId) {
      return marginPx(edge, mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T marginAttr(@Nullable YogaEdge edge, @AttrRes int resId) {
      return marginAttr(edge, resId, 0);
    }

    public T marginRes(@Nullable YogaEdge edge, @DimenRes int resId) {
      return marginPx(edge, mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T marginDip(@Nullable YogaEdge edge, @Dimension(unit = DP) float margin) {
      return marginPx(edge, mResourceResolver.dipsToPixels(margin));
    }

    public T paddingPx(@Nullable YogaEdge edge, @Px int padding) {
      mComponent.getOrCreateCommonPropsHolder().paddingPx(edge, padding);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T paddingPercent(@Nullable YogaEdge edge, float percent) {
      mComponent.getOrCreateCommonPropsHolder().paddingPercent(edge, percent);
      return getThis();
    }

    public T paddingAttr(@Nullable YogaEdge edge, @AttrRes int resId, @DimenRes int defaultResId) {
      return paddingPx(edge, mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T paddingAttr(@Nullable YogaEdge edge, @AttrRes int resId) {
      return paddingAttr(edge, resId, 0);
    }

    public T paddingRes(@Nullable YogaEdge edge, @DimenRes int resId) {
      return paddingPx(edge, mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T paddingDip(@Nullable YogaEdge edge, @Dimension(unit = DP) float padding) {
      return paddingPx(edge, mResourceResolver.dipsToPixels(padding));
    }

    public T border(@Nullable Border border) {
      mComponent.getOrCreateCommonPropsHolder().border(border);
      return getThis();
    }

    /**
     * When used in combination with {@link #positionType} of {@link YogaPositionType#ABSOLUTE},
     * allows the component to specify how it should be positioned within its parent. See <a
     * href="https://yogalayout.com/docs/absolute-relative-layout">https://yogalayout.com/docs/absolute-relative-layout</a>
     * for more information.
     */
    public T positionPx(@Nullable YogaEdge edge, @Px int position) {
      mComponent.getOrCreateCommonPropsHolder().positionPx(edge, position);
      return getThis();
    }

    /**
     * @see #positionPx
     * @param percent a value between 0 and 100.
     */
    public T positionPercent(@Nullable YogaEdge edge, float percent) {
      mComponent.getOrCreateCommonPropsHolder().positionPercent(edge, percent);
      return getThis();
    }

    /** @see #positionPx */
    public T positionAttr(@Nullable YogaEdge edge, @AttrRes int resId, @DimenRes int defaultResId) {
      return positionPx(edge, mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    /** @see #positionPx */
    public T positionAttr(@Nullable YogaEdge edge, @AttrRes int resId) {
      return positionAttr(edge, resId, 0);
    }

    /** @see #positionPx */
    public T positionRes(@Nullable YogaEdge edge, @DimenRes int resId) {
      return positionPx(edge, mResourceResolver.resolveDimenSizeRes(resId));
    }

    /** @see #positionPx */
    public T positionDip(@Nullable YogaEdge edge, @Dimension(unit = DP) float position) {
      return positionPx(edge, mResourceResolver.dipsToPixels(position));
    }

    public T widthPx(@Px int width) {
      mComponent.getOrCreateCommonPropsHolder().widthPx(width);
      return getThis();
    }

    /**
     * Sets the width of the Component to be a percentage of its parent's width. Note that if the
     * parent has unspecified width (e.g. it is an HScroll), then setting this will have no effect.
     *
     * @param percent a value between 0 and 100.
     */
    public T widthPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().widthPercent(percent);
      return getThis();
    }

    public T widthRes(@DimenRes int resId) {
      return widthPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T widthAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return widthPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T widthAttr(@AttrRes int resId) {
      return widthAttr(resId, 0);
    }

    public T widthDip(@Dimension(unit = DP) float width) {
      return widthPx(mResourceResolver.dipsToPixels(width));
    }

    public T minWidthPx(@Px int minWidth) {
      mComponent.getOrCreateCommonPropsHolder().minWidthPx(minWidth);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T minWidthPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().minWidthPercent(percent);
      return getThis();
    }

    public T minWidthAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return minWidthPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T minWidthAttr(@AttrRes int resId) {
      return minWidthAttr(resId, 0);
    }

    public T minWidthRes(@DimenRes int resId) {
      return minWidthPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T minWidthDip(@Dimension(unit = DP) float minWidth) {
      return minWidthPx(mResourceResolver.dipsToPixels(minWidth));
    }

    public T maxWidthPx(@Px int maxWidth) {
      mComponent.getOrCreateCommonPropsHolder().maxWidthPx(maxWidth);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T maxWidthPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().maxWidthPercent(percent);
      return getThis();
    }

    public T maxWidthAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return maxWidthPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T maxWidthAttr(@AttrRes int resId) {
      return maxWidthAttr(resId, 0);
    }

    public T maxWidthRes(@DimenRes int resId) {
      return maxWidthPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T maxWidthDip(@Dimension(unit = DP) float maxWidth) {
      return maxWidthPx(mResourceResolver.dipsToPixels(maxWidth));
    }

    public T heightPx(@Px int height) {
      mComponent.getOrCreateCommonPropsHolder().heightPx(height);
      return getThis();
    }

    /**
     * Sets the height of the Component to be a percentage of its parent's height. Note that if the
     * parent has unspecified height (e.g. it is a RecyclerView), then setting this will have no
     * effect.
     *
     * @param percent a value between 0 and 100.
     */
    public T heightPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().heightPercent(percent);
      return getThis();
    }

    public T heightRes(@DimenRes int resId) {
      return heightPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T heightAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return heightPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T heightAttr(@AttrRes int resId) {
      return heightAttr(resId, 0);
    }

    public T heightDip(@Dimension(unit = DP) float height) {
      return heightPx(mResourceResolver.dipsToPixels(height));
    }

    public T minHeightPx(@Px int minHeight) {
      mComponent.getOrCreateCommonPropsHolder().minHeightPx(minHeight);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T minHeightPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().minHeightPercent(percent);
      return getThis();
    }

    public T minHeightAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return minHeightPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T minHeightAttr(@AttrRes int resId) {
      return minHeightAttr(resId, 0);
    }

    public T minHeightRes(@DimenRes int resId) {
      return minHeightPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T minHeightDip(@Dimension(unit = DP) float minHeight) {
      return minHeightPx(mResourceResolver.dipsToPixels(minHeight));
    }

    public T maxHeightPx(@Px int maxHeight) {
      mComponent.getOrCreateCommonPropsHolder().maxHeightPx(maxHeight);
      return getThis();
    }

    /** @param percent a value between 0 and 100. */
    public T maxHeightPercent(float percent) {
      mComponent.getOrCreateCommonPropsHolder().maxHeightPercent(percent);
      return getThis();
    }

    public T maxHeightAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return maxHeightPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T maxHeightAttr(@AttrRes int resId) {
      return maxHeightAttr(resId, 0);
    }

    public T maxHeightRes(@DimenRes int resId) {
      return maxHeightPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T maxHeightDip(@Dimension(unit = DP) float maxHeight) {
      return maxHeightPx(mResourceResolver.dipsToPixels(maxHeight));
    }

    public T aspectRatio(float aspectRatio) {
      mComponent.getOrCreateCommonPropsHolder().aspectRatio(aspectRatio);
      return getThis();
    }

    public T isReferenceBaseline(boolean isReferenceBaseline) {
      mComponent.getOrCreateCommonPropsHolder().isReferenceBaseline(isReferenceBaseline);
      return getThis();
    }

    public T touchExpansionPx(@Nullable YogaEdge edge, @Px int touchExpansion) {
      mComponent.getOrCreateCommonPropsHolder().touchExpansionPx(edge, touchExpansion);
      return getThis();
    }

    public T touchExpansionAttr(
        @Nullable YogaEdge edge, @AttrRes int resId, @DimenRes int defaultResId) {
      return touchExpansionPx(edge, mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T touchExpansionAttr(@Nullable YogaEdge edge, @AttrRes int resId) {
      return touchExpansionAttr(edge, resId, 0);
    }

    public T touchExpansionRes(@Nullable YogaEdge edge, @DimenRes int resId) {
      return touchExpansionPx(edge, mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T touchExpansionDip(
        @Nullable YogaEdge edge, @Dimension(unit = DP) float touchExpansion) {
      return touchExpansionPx(edge, mResourceResolver.dipsToPixels(touchExpansion));
    }

    /**
     * @deprecated use {@link #background(ComparableDrawable)} more efficient diffing of drawables.
     * @see ComparableDrawable
     */
    @Deprecated
    public T background(@Nullable Reference<? extends Drawable> background) {
      /**
       * We want to test the effect of not using References so if we come into this method with an
       * actual reference (that is not a DrawableReference) we turn it into a DrawableReference to
       * force it to behave as a proper Drawable. This is actually going to be slightly worse for
       * memory than just having a reference to the Drawable directly.
       */
      if (ComponentsConfiguration.dontUseReferences
          && background != null
          && !(background instanceof DrawableReference)) {
        final Drawable backgroundDrawable =
            Reference.acquire(getContext().getAndroidContext(), background);

        if (backgroundDrawable != null) {
          background =
              DrawableReference.create(DefaultComparableDrawable.create(backgroundDrawable));
        }
      }

      mComponent.getOrCreateCommonPropsHolder().background(background);
      return getThis();
    }

    /**
     * Set the background of this component. The background drawable must extend {@link *
     * ComparableDrawable} for more efficient diffing while when drawables are remounted or updated.
     * * If the drawable does not extend {@link ComparableDrawable} then create a new class which *
     * extends {@link ComparableDrawable} and implement the * {@link
     * ComparableDrawable#isEquivalentTo(ComparableDrawable)}.
     *
     * @see ComparableDrawable
     */
    public T background(@Nullable ComparableDrawable background) {
      return background(background != null ? DrawableReference.create(background) : null);
    }

    /**
     * @deprecated use {@link #background(ComparableDrawable)} more efficient diffing of drawables.
     * @see ComparableDrawable
     */
    @Deprecated
    public T background(@Nullable Drawable background) {
      if (background instanceof ComparableDrawable) {
        return background((ComparableDrawable) background);
      }
      return background(background != null ? DefaultComparableDrawable.create(background) : null);
    }

    public T backgroundAttr(@AttrRes int resId, @DrawableRes int defaultResId) {
      return backgroundRes(mResourceResolver.resolveResIdAttr(resId, defaultResId));
    }

    public T backgroundAttr(@AttrRes int resId) {
      return backgroundAttr(resId, 0);
    }

    public T backgroundRes(@DrawableRes int resId) {
      if (resId == 0) {
        return background((ComparableDrawable) null);
      }

      return background(ComparableResDrawable.create(mContext.getAndroidContext(), resId));
    }

    public T backgroundColor(@ColorInt int backgroundColor) {
      return background(ComparableColorDrawable.create(backgroundColor));
    }

    /**
     * Set the foreground of this component. The foreground drawable must extend {@link
     * ComparableDrawable} for more efficient diffing while when drawables are remounted or updated.
     * If the drawable does not extend {@link ComparableDrawable} then create a new class which
     * extends {@link ComparableDrawable} and implement the {@link
     * ComparableDrawable#isEquivalentTo(ComparableDrawable)}.
     *
     * @see ComparableDrawable
     */
    public T foreground(@Nullable ComparableDrawable foreground) {
      mComponent.getOrCreateCommonPropsHolder().foreground(foreground);
      return getThis();
    }

    /**
     * @deprecated use {@link #foreground(ComparableDrawable)} more efficient diffing of drawables.
     */
    @Deprecated
    public T foreground(@Nullable Drawable foreground) {
      if (foreground instanceof ComparableDrawable) {
        return foreground((ComparableDrawable) foreground);
      }
      return foreground(foreground != null ? DefaultComparableDrawable.create(foreground) : null);
    }

    public T foregroundAttr(@AttrRes int resId, @DrawableRes int defaultResId) {
      return foregroundRes(mResourceResolver.resolveResIdAttr(resId, defaultResId));
    }

    public T foregroundAttr(@AttrRes int resId) {
      return foregroundAttr(resId, 0);
    }

    public T foregroundRes(@DrawableRes int resId) {
      if (resId == 0) {
        return foreground(null);
      }

      return foreground(ComparableResDrawable.create(mContext.getAndroidContext(), resId));
    }

    public T foregroundColor(@ColorInt int foregroundColor) {
      return foreground(ComparableColorDrawable.create(foregroundColor));
    }

    public T wrapInView() {
      mComponent.getOrCreateCommonPropsHolder().wrapInView();
      return getThis();
    }

    public T clickHandler(@Nullable EventHandler<ClickEvent> clickHandler) {
      mComponent.getOrCreateCommonPropsHolder().clickHandler(clickHandler);
      return getThis();
    }

    public T longClickHandler(@Nullable EventHandler<LongClickEvent> longClickHandler) {
      mComponent.getOrCreateCommonPropsHolder().longClickHandler(longClickHandler);
      return getThis();
    }

    public T focusChangeHandler(@Nullable EventHandler<FocusChangedEvent> focusChangeHandler) {
      mComponent.getOrCreateCommonPropsHolder().focusChangeHandler(focusChangeHandler);
      return getThis();
    }

    public T touchHandler(@Nullable EventHandler<TouchEvent> touchHandler) {
      mComponent.getOrCreateCommonPropsHolder().touchHandler(touchHandler);
      return getThis();
    }

    public T interceptTouchHandler(
        @Nullable EventHandler<InterceptTouchEvent> interceptTouchHandler) {
      mComponent.getOrCreateCommonPropsHolder().interceptTouchHandler(interceptTouchHandler);
      return getThis();
    }

    public T focusable(boolean isFocusable) {
      mComponent.getOrCreateCommonPropsHolder().focusable(isFocusable);
      return getThis();
    }

    public T enabled(boolean isEnabled) {
      mComponent.getOrCreateCommonPropsHolder().enabled(isEnabled);
      return getThis();
    }

    public T selected(boolean isSelected) {
      mComponent.getOrCreateCommonPropsHolder().selected(isSelected);
      return getThis();
    }

    public T visibleHeightRatio(float visibleHeightRatio) {
      mComponent.getOrCreateCommonPropsHolder().visibleHeightRatio(visibleHeightRatio);
      return getThis();
    }

    public T visibleWidthRatio(float visibleWidthRatio) {
      mComponent.getOrCreateCommonPropsHolder().visibleWidthRatio(visibleWidthRatio);
      return getThis();
    }

    public T visibleHandler(@Nullable EventHandler<VisibleEvent> visibleHandler) {
      mComponent.getOrCreateCommonPropsHolder().visibleHandler(visibleHandler);
      return getThis();
    }

    public T focusedHandler(@Nullable EventHandler<FocusedVisibleEvent> focusedHandler) {
      mComponent.getOrCreateCommonPropsHolder().focusedHandler(focusedHandler);
      return getThis();
    }

    public T unfocusedHandler(@Nullable EventHandler<UnfocusedVisibleEvent> unfocusedHandler) {
      mComponent.getOrCreateCommonPropsHolder().unfocusedHandler(unfocusedHandler);
      return getThis();
    }

    public T fullImpressionHandler(
        @Nullable EventHandler<FullImpressionVisibleEvent> fullImpressionHandler) {
      mComponent.getOrCreateCommonPropsHolder().fullImpressionHandler(fullImpressionHandler);
      return getThis();
    }

    public T invisibleHandler(@Nullable EventHandler<InvisibleEvent> invisibleHandler) {
      mComponent.getOrCreateCommonPropsHolder().invisibleHandler(invisibleHandler);
      return getThis();
    }

    public T visibilityChangedHandler(
        @Nullable EventHandler<VisibilityChangedEvent> visibilityChangedHandler) {
      mComponent.getOrCreateCommonPropsHolder().visibilityChangedHandler(visibilityChangedHandler);
      return getThis();
    }

    public T contentDescription(@Nullable CharSequence contentDescription) {
      mComponent.getOrCreateCommonPropsHolder().contentDescription(contentDescription);
      return getThis();
    }

    public T contentDescription(@StringRes int stringId) {
      return contentDescription(mContext.getAndroidContext().getResources().getString(stringId));
    }

    public T contentDescription(@StringRes int stringId, Object... formatArgs) {
      return contentDescription(
          mContext.getAndroidContext().getResources().getString(stringId, formatArgs));
    }

    public T viewTag(@Nullable Object viewTag) {
      mComponent.getOrCreateCommonPropsHolder().viewTag(viewTag);
      return getThis();
    }

    public T viewTags(@Nullable SparseArray<Object> viewTags) {
      mComponent.getOrCreateCommonPropsHolder().viewTags(viewTags);
      return getThis();
    }

    /**
     * Shadow elevation and outline provider methods are only functional on {@link
     * android.os.Build.VERSION_CODES#LOLLIPOP} and above.
     */
    public T shadowElevationPx(float shadowElevation) {
      mComponent.getOrCreateCommonPropsHolder().shadowElevationPx(shadowElevation);
      return getThis();
    }

    public T shadowElevationAttr(@AttrRes int resId, @DimenRes int defaultResId) {
      return shadowElevationPx(mResourceResolver.resolveDimenSizeAttr(resId, defaultResId));
    }

    public T shadowElevationAttr(@AttrRes int resId) {
      return shadowElevationAttr(resId, 0);
    }

    public T shadowElevationRes(@DimenRes int resId) {
      return shadowElevationPx(mResourceResolver.resolveDimenSizeRes(resId));
    }

    public T shadowElevationDip(@Dimension(unit = DP) float shadowElevation) {
      return shadowElevationPx(mResourceResolver.dipsToPixels(shadowElevation));
    }

    public T outlineProvider(@Nullable ViewOutlineProvider outlineProvider) {
      mComponent.getOrCreateCommonPropsHolder().outlineProvider(outlineProvider);
      return getThis();
    }

    public T clipToOutline(boolean clipToOutline) {
      mComponent.getOrCreateCommonPropsHolder().clipToOutline(clipToOutline);
      return getThis();
    }

    /**
     * Ports {@link android.view.ViewGroup#setClipChildren(boolean)} into components world. However,
     * there is no guarantee that child of this component would be translated into direct view child
     * in the resulting view hierarchy.
     *
     * @param clipChildren true to clip children to their bounds. False allows each child to draw
     *     outside of its own bounds within the parent, it doesn't allow children to draw outside of
     *     the parent itself.
     */
    public T clipChildren(boolean clipChildren) {
      if (ComponentsConfiguration.disableAllClipProps) {
        return getThis();
      }

      mComponent.getOrCreateCommonPropsHolder().clipChildren(clipChildren);
      return getThis();
    }

    public T testKey(@Nullable String testKey) {
      mComponent.getOrCreateCommonPropsHolder().testKey(testKey);
      return getThis();
    }

    public T accessibilityRole(@Nullable @AccessibilityRole.AccessibilityRoleType String role) {
      mComponent.getOrCreateCommonPropsHolder().accessibilityRole(role);
      return getThis();
    }

    public T accessibilityRoleDescription(CharSequence roleDescription) {
      mComponent.getOrCreateCommonPropsHolder().accessibilityRoleDescription(roleDescription);
      return getThis();
    }

    public T accessibilityRoleDescription(@StringRes int stringId) {
      return accessibilityRoleDescription(mContext.getResources().getString(stringId));
    }

    public T accessibilityRoleDescription(@StringRes int stringId, Object... formatArgs) {
      return accessibilityRoleDescription(mContext.getResources().getString(stringId, formatArgs));
    }

    public T dispatchPopulateAccessibilityEventHandler(
        @Nullable
            EventHandler<DispatchPopulateAccessibilityEventEvent>
                dispatchPopulateAccessibilityEventHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .dispatchPopulateAccessibilityEventHandler(dispatchPopulateAccessibilityEventHandler);
      return getThis();
    }

    public T onInitializeAccessibilityEventHandler(
        @Nullable
            EventHandler<OnInitializeAccessibilityEventEvent>
                onInitializeAccessibilityEventHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .onInitializeAccessibilityEventHandler(onInitializeAccessibilityEventHandler);
      return getThis();
    }

    public T onInitializeAccessibilityNodeInfoHandler(
        @Nullable
            EventHandler<OnInitializeAccessibilityNodeInfoEvent>
                onInitializeAccessibilityNodeInfoHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .onInitializeAccessibilityNodeInfoHandler(onInitializeAccessibilityNodeInfoHandler);
      return getThis();
    }

    public T onPopulateAccessibilityEventHandler(
        @Nullable
            EventHandler<OnPopulateAccessibilityEventEvent> onPopulateAccessibilityEventHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .onPopulateAccessibilityEventHandler(onPopulateAccessibilityEventHandler);
      return getThis();
    }

    public T onRequestSendAccessibilityEventHandler(
        @Nullable
            EventHandler<OnRequestSendAccessibilityEventEvent>
                onRequestSendAccessibilityEventHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .onRequestSendAccessibilityEventHandler(onRequestSendAccessibilityEventHandler);
      return getThis();
    }

    public T performAccessibilityActionHandler(
        @Nullable EventHandler<PerformAccessibilityActionEvent> performAccessibilityActionHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .performAccessibilityActionHandler(performAccessibilityActionHandler);
      return getThis();
    }

    public T sendAccessibilityEventHandler(
        @Nullable EventHandler<SendAccessibilityEventEvent> sendAccessibilityEventHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .sendAccessibilityEventHandler(sendAccessibilityEventHandler);
      return getThis();
    }

    public T sendAccessibilityEventUncheckedHandler(
        @Nullable
            EventHandler<SendAccessibilityEventUncheckedEvent>
                sendAccessibilityEventUncheckedHandler) {
      mComponent
          .getOrCreateCommonPropsHolder()
          .sendAccessibilityEventUncheckedHandler(sendAccessibilityEventUncheckedHandler);
      return getThis();
    }

    public T transitionKey(@Nullable String key) {
      mComponent.getOrCreateCommonPropsHolder().transitionKey(key);
      if (mComponent.getOrCreateCommonPropsHolder().getTransitionKeyType() == null) {
        // If TransitionKeyType isn't set, set to default type
        transitionKeyType(Transition.DEFAULT_TRANSITION_KEY_TYPE);
      }
      return getThis();
    }

    public T transitionKeyType(Transition.TransitionKeyType type) {
      if (type == null) {
        throw new IllegalArgumentException("TransitionKeyType must not be null");
      }
      mComponent.getOrCreateCommonPropsHolder().transitionKeyType(type);
      return getThis();
    }

    /** Sets the alpha (opacity) of this component. */
    public T alpha(float alpha) {
      mComponent.getOrCreateCommonPropsHolder().alpha(alpha);
      return getThis();
    }

    /**
     * Sets the scale (scaleX and scaleY) on this component. This is mostly relevant for animations
     * and being able to animate size changes. Otherwise for non-animation usecases, you should use
     * the standard layout properties to control the size of your component.
     */
    public T scale(float scale) {
      mComponent.getOrCreateCommonPropsHolder().scale(scale);
      return getThis();
    }

    /**
     * Sets the degree that this component is rotated around the pivot point. Increasing the value
     * results in clockwise rotation. By default, the pivot point is centered on the component.
     */
    public T rotation(float rotation) {
      mComponent.getOrCreateCommonPropsHolder().rotation(rotation);
      return getThis();
    }

    /**
     * Ports {@link android.view.View#setStateListAnimator(android.animation.StateListAnimator)}
     * into components world. However, since the aforementioned view's method is available only on
     * API 21 and above, calling this method on lower APIs will have no effect. On the legit
     * versions, on the other hand, calling this method will lead to the component being wrapped
     * into a view
     */
    public T stateListAnimator(@Nullable StateListAnimator stateListAnimator) {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        mComponent.getOrCreateCommonPropsHolder().stateListAnimator(stateListAnimator);
      }
      return getThis();
    }

    /**
     * Ports {@link android.view.View#setStateListAnimator(android.animation.StateListAnimator)}
     * into components world. However, since the aforementioned view's method is available only on
     * API 21 and above, calling this method on lower APIs will have no effect. On the legit
     * versions, on the other hand, calling this method will lead to the component being wrapped
     * into a view
     */
    public T stateListAnimatorRes(@DrawableRes int resId) {
      if (Build.VERSION.SDK_INT >= 26) {
        // We cannot do it on the versions prior to Android 8.0 since there is a possible race
        // condition when loading state list animators, thus we will avoid doing it off the UI
        // thread
        return stateListAnimator(
            AnimatorInflater.loadStateListAnimator(mContext.getAndroidContext(), resId));
      }
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        mComponent.getOrCreateCommonPropsHolder().stateListAnimatorRes(resId);
      }
      return getThis();
    }

    /**
     * When set to true, overrides the default behaviour of baseline calculation and uses height of
     * component as baseline. By default the baseline of a component is the baseline of first child
     * of component (If the component does not have any child then baseline is height of the
     * component)
     */
    public T useHeightAsBaseline(boolean useHeightAsBaseline) {
      mComponent.getOrCreateCommonPropsHolder().useHeightAsBaseline(useHeightAsBaseline);
      return getThis();
    }

    private Component getOwner() {
      return mContext.getComponentScope();
    }
  }

  public abstract static class ContainerBuilder<T extends ContainerBuilder<T>> extends Builder<T> {
    public abstract T child(@Nullable Component child);

    public abstract T child(@Nullable Component.Builder<?> child);

    /**
     * The AlignSelf property has the same options and effect as AlignItems but instead of affecting
     * the children within a container, you can apply this property to a single child to change its
     * alignment within its parent. See <a
     * href="https://yogalayout.com/docs/align-content">https://yogalayout.com/docs/align-content</a>
     * for more information.
     *
     * <p>Default: {@link YogaAlign#AUTO}
     */
    public abstract T alignContent(@Nullable YogaAlign alignContent);

    /**
     * The AlignItems property describes how to align children along the cross axis of their
     * container. AlignItems is very similar to JustifyContent but instead of applying to the main
     * axis, it applies to the cross axis. See <a
     * href="https://yogalayout.com/docs/align-items">https://yogalayout.com/docs/align-items</a>
     * for more information.
     *
     * <p>Default: {@link YogaAlign#STRETCH}
     */
    public abstract T alignItems(@Nullable YogaAlign alignItems);

    /**
     * The JustifyContent property describes how to align children within the main axis of a
     * container. For example, you can use this property to center a child horizontally within a
     * container with FlexDirection = Row or vertically within one with FlexDirection = Column. See
     * <a
     * href="https://yogalayout.com/docs/justify-content">https://yogalayout.com/docs/justify-content</a>
     * for more information.
     *
     * <p>Default: {@link YogaJustify#FLEX_START}
     */
    public abstract T justifyContent(@Nullable YogaJustify justifyContent);

    /**
     * The FlexWrap property is set on containers and controls what happens when children overflow
     * the size of the container along the main axis. If a container specifies {@link YogaWrap#WRAP}
     * then its children will wrap to the next line instead of overflowing.
     *
     * <p>The next line will have the same FlexDirection as the first line and will appear next to
     * the first line along the cross axis - below it if using FlexDirection = Column and to the
     * right if using FlexDirection = Row. See <a
     * href="https://yogalayout.com/docs/flex-wrap">https://yogalayout.com/docs/flex-wrap</a> for
     * more information.
     *
     * <p>Default: {@link YogaWrap#NO_WRAP}
     */
    public abstract T wrap(@Nullable YogaWrap wrap);

    /** Set this to true if you want the container to be laid out in reverse. */
    public abstract T reverse(boolean reverse);
  }

  /** An event handler to be used for the root of the hierarchy that reraises error events. */
  private static class DefaultErrorEventDispatcher implements HasEventDispatcher {

    @Override
    public EventDispatcher getEventDispatcher() {
      return new EventDispatcher() {
        @Override
        public @Nullable Object dispatchOnEvent(EventHandler eventHandler, Object eventState) {
          if (eventHandler.id == ERROR_EVENT_HANDLER_ID) {
            throw new RuntimeException(((ErrorEvent) eventState).exception);
          }
          return null;
        }
      };
    }
  }
}
