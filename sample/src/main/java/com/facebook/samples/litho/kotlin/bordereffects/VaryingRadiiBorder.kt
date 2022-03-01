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

package com.facebook.samples.litho.kotlin.bordereffects

import android.graphics.Color
import com.facebook.litho.Component
import com.facebook.litho.ComponentScope
import com.facebook.litho.KComponent
import com.facebook.litho.Row
import com.facebook.litho.Style
import com.facebook.litho.dp
import com.facebook.litho.flexbox.border
import com.facebook.litho.widget.Border
import com.facebook.litho.widget.BorderEdge
import com.facebook.litho.widget.BorderRadius
import com.facebook.litho.widget.Text

class VaryingRadiiBorder : KComponent() {
  override fun ComponentScope.render(): Component {

    return Row(
        style =
            Style.border(
                Border(
                    edgeAll = BorderEdge(width = 3f.dp),
                    edgeTop = BorderEdge(color = NiceColor.GREEN),
                    edgeBottom = BorderEdge(color = NiceColor.BLUE),
                    edgeLeft = BorderEdge(color = Color.BLACK),
                    edgeRight = BorderEdge(NiceColor.RED),
                    radius =
                        BorderRadius(
                            topLeft = 10f.dp,
                            topRight = 5f.dp,
                            bottomLeft = 30f.dp,
                            bottomRight = 20f.dp),
                ))) { child(Text("This component has varying corner radii", textSize = 20f.dp)) }
  }
}