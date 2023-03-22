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

import android.util.Pair;
import androidx.annotation.Nullable;
import com.facebook.infer.annotation.Nullsafe;
import java.util.List;
import java.util.concurrent.Callable;

@Nullsafe(Nullsafe.Mode.LOCAL)
public class ResolveFuture<State, RenderContext>
    extends ThreadInheritingPriorityFuture<Pair<Node<RenderContext>, State>> {

  private final int mVersion;

  public ResolveFuture(
      final RenderState.ResolveFunc<State, RenderContext> resolveFunc,
      ResolveContext resolveContext,
      @Nullable Node<RenderContext> committedTre,
      @Nullable State committedState,
      List<StateUpdateReceiver.StateUpdate<State>> stateUpdatesToApply,
      int version) {
    super(
        new Callable<Pair<Node<RenderContext>, State>>() {
          @Override
          public Pair<Node<RenderContext>, State> call() throws Exception {
            return resolveFunc.resolve(
                resolveContext, committedTre, committedState, stateUpdatesToApply);
          }
        },
        "ResolveFuture");
    mVersion = version;
  }

  public int getVersion() {
    return mVersion;
  }
}
