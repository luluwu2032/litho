/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.rendercore;

import android.content.Context;
import androidx.annotation.Nullable;
import com.facebook.infer.annotation.Nullsafe;

/**
 * Defines a class that can provide mountable content and have it be pooled.
 *
 * <p>Instances must implement at least createContent method to allocate the RenderUnit content
 * (View or Drawable).
 */
@Nullsafe(Nullsafe.Mode.LOCAL)
public interface ContentAllocator {

  /** Default size of the content pool. */
  public static final int DEFAULT_MAX_PREALLOCATION = 3;

  /** Allocates the mountable content (View or Drawable). */
  Object createContent(Context context);

  /** Creates a mount-content that can be pooled. This is typically a View or Drawable subclass. */
  default Object createPoolableContent(Context context) {
    return createContent(context);
  }

  /**
   * Returns an object defining the type of the mount-content. Typically the mount-content's Class.
   */
  default Object getPoolableContentType() {
    return getClass();
  }

  /** Return true if pooling should be disabled for this mount content. */
  default boolean isRecyclingDisabled() {
    return false;
  }

  /**
   * Creates an ItemPool for this mountable content. Returning null will generate a default pool.
   */
  @Nullable
  default MountItemsPool.ItemPool createRecyclingPool() {
    return null;
  }

  /**
   * This API informs the framework to fill the content pool for this Mountable ahead of time. The
   * default value is {@code false}, i.e. content is not pre-allocated. Pre-allocation of the
   * content can improve performance in some circumstances where creating the content is expensive.
   *
   * @return {@code true} to preallocate the content, otherwise {@code false}
   *     <p>Experimental. Currently for Litho team internal use only.
   */
  default boolean canPreallocate() {
    return false;
  }

  /**
   * This API informs the framework about the size of the content pool. The default is 3.
   *
   * <p>Experimental. Currently for Litho team internal use only.
   */
  default int poolSize() {
    return DEFAULT_MAX_PREALLOCATION;
  }

  /**
   * Creates the content pool the framework should use for this Mountable.
   *
   * <p>Experimental. Currently for Litho team internal use only.
   */
  default MountItemsPool.ItemPool onCreateMountContentPool() {
    return new MountItemsPool.DefaultItemPool(this, poolSize());
  }
}