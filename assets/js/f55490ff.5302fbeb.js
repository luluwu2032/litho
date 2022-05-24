"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8731],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>p});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=t.createContext({}),p=function(e){return function(n){var a=m(n.components);return t.createElement(e,o({},n,{components:a}))}},m=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=m(a),c=l,h=p["".concat(i,".").concat(c)]||p[c]||u[c]||o;return a?t.createElement(h,s(s({ref:n},d),{},{components:a})):t.createElement(h,s({ref:n},d))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14313:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>s,contentTitle:()=>r,metadata:()=>d,toc:()=>p,default:()=>c});var t=a(87462),l=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"lazycollections-working-with-updates",title:"Working with Updates"},r=void 0,d={unversionedId:"kotlin/lazycollections/lazycollections-working-with-updates",id:"kotlin/lazycollections/lazycollections-working-with-updates",isDocsHomePage:!1,title:"Working with Updates",description:"A lazy collection is updated by changing the changing the prop/state values from which it is generated. To ensure correctness and performance you must:",source:"@site/../docs/kotlin/lazycollections/lazycollections-working-with-updates.mdx",sourceDirName:"kotlin/lazycollections",slug:"/kotlin/lazycollections/lazycollections-working-with-updates",permalink:"/docs/kotlin/lazycollections/lazycollections-working-with-updates",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/lazycollections/lazycollections-working-with-updates.mdx",tags:[],version:"current",frontMatter:{id:"lazycollections-working-with-updates",title:"Working with Updates"}},p=[{value:"Child Identity",id:"child-identity",children:[],level:2},{value:"Avoiding Unnecessary Layouts",id:"avoiding-unnecessary-layouts",children:[{value:"Using Classes Without <code>equals()</code> as Props",id:"using-classes-without-equals-as-props",children:[],level:3},{value:"Using Lambdas as Props",id:"using-lambdas-as-props",children:[],level:3},{value:"Debugging unnecessary layouts",id:"debugging-unnecessary-layouts",children:[],level:3}],level:2}],m={toc:p};function c(e){var n=e.components,a=(0,l.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A lazy collection is updated by changing the changing the prop/state values from which it is generated. To ensure correctness and performance you must:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#child-identity"},"Provide ids")," for any children that can be updated."),(0,o.mdx)("li",{parentName:"ol"},"Make sure props of children don't unnecessarily change, leading to ",(0,o.mdx)("a",{parentName:"li",href:"#avoiding-unecessary-layouts"},"unnecessary layouts"),".")),(0,o.mdx)("h2",{id:"child-identity"},"Child Identity"),(0,o.mdx)("p",null,"When the data backing a lazy collection is updated, children may have been added, removed, changed position, or had their content updated. The lazy collection will determine what has changed and apply the minimal changeset. This is done by comparing items from the old and new lists using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," parameter specified on the children."),(0,o.mdx)("p",null,"By default, an 'id' is generated for each child based on its position and type. This is only sufficient for simple static lists. If the list is expected to be updated, you should provide an id that is consistent across renders."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_id_example end=end_id_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_id_example",end:"end_id_example"},"child(id = friend.id, component = Text(friend.name))\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"An ",(0,o.mdx)("inlineCode",{parentName:"strong"},"id")," must be unique and immutable.")," Breaking this contract may lead to occasional ",(0,o.mdx)("inlineCode",{parentName:"p"},"IndexOutOfBoundsException")," exceptions during layout."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"You should always provide an ",(0,o.mdx)("inlineCode",{parentName:"strong"},"id")," when adding items in a loop.")," Using the loop index is unacceptable as items may change positions. Instead, use an id from the data model."),(0,o.mdx)("h2",{id:"avoiding-unnecessary-layouts"},"Avoiding Unnecessary Layouts"),(0,o.mdx)("p",null,"During a list update, if a child with the same ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," is found in the old and new lists then the lazy collection automatically detects if the content has changed. If an update has not occurred, the subtree will be re-used as-is, otherwise it is re-created."),(0,o.mdx)("p",null,"Content changes are detected by checking the equality of the component's props. ",(0,o.mdx)("strong",{parentName:"p"},"If any component prop does not implement an ",(0,o.mdx)("inlineCode",{parentName:"strong"},"equals()")," then it cannot be reused"),". It is common for classes to not implement ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()")," such as Drawables, Lambdas, and data models. A little bit more work is required to avoid unnecessary layouts when these are used."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},(0,o.mdx)("strong",{parentName:"p"},"The behaviour will be functionally correct by default.")," If you use props that do not provide an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()")," the UI will still use the most up-to-date prop and state values. However, there will be unnecessary layouts which will impact performance."))),(0,o.mdx)("h3",{id:"using-classes-without-equals-as-props"},"Using Classes Without ",(0,o.mdx)("inlineCode",{parentName:"h3"},"equals()")," as Props"),(0,o.mdx)("p",null,"If a component accepts a prop that does not implement an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()")," then it will never be reused."),(0,o.mdx)("p",null,"Consider the following example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_name_list_unnecessary_update end=end_name_list_unnecessary_update",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_name_list_unnecessary_update",end:"end_name_list_unnecessary_update"},'class Name(val firstName: String, val secondName: String)\n\nclass NameComponent(val name: Name) : KComponent() {\n  override fun ComponentScope.render(): Component = Text("${name.firstName} ${name.secondName}")\n}\n\nclass NameList_UnnecessaryUpdate : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    child(NameComponent(Name("Mark", "Zuckerberg")))\n  }\n}\n')),(0,o.mdx)("p",null,"In the above example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"NameComponent")," will be laid out on any update because it takes a prop of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"Name")," that does not implement an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()"),"."),(0,o.mdx)("p",null,"Unnecessary layouts can be avoided using two methods:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Add an ",(0,o.mdx)("inlineCode",{parentName:"li"},"equals()")," to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Name")," class, such as by making it a ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," class. This approach will not be possible if you're using an object provided by a framework you don't control."),(0,o.mdx)("li",{parentName:"ol"},"Manually specify the dependencies that, if changed, should trigger an update.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_name_list_fixed end=end_name_list_fixed",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_name_list_fixed",end:"end_name_list_fixed"},'class NameList_Fixed : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    // Option 1. Convert to a prop with an `equals()` implementation\n    child(NameComponentWithEquals(NameWithEquals("Mark", "Zuckerberg")))\n\n    // Option 2. Manually specify dependencies (in this case empty)\n    child(deps = arrayOf()) { NameComponent(Name("Mark", "Zuckerberg")) }\n  }\n}\n')),(0,o.mdx)("p",null,"By manually specifying the dependencies, ",(0,o.mdx)("inlineCode",{parentName:"p"},"NameComponent")," is only be laid out once and re-used whenever the Example is updated."),(0,o.mdx)("p",null,"Consider the following example, which uses an Android ",(0,o.mdx)("inlineCode",{parentName:"p"},"Drawable"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_drawable_unnecessary_update end=end_drawable_unnecessary_update",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_drawable_unnecessary_update",end:"end_drawable_unnecessary_update"},'class Drawable_UnnecessaryUpdate : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    child(Text("text", style = Style.background(ColorDrawable(Color.RED))))\n  }\n}\n')),(0,o.mdx)("p",null,"In the above example, the Text component will be unnecessarily laid out on every update to Example because ColorDrawable does not implement an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()"),"."),(0,o.mdx)("p",null,"Here, Unnecessary layouts can be avoided using two techniques:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Use a drawable that implements equality such as Litho\u2019s ComparableColorDrawable."),(0,o.mdx)("li",{parentName:"ol"},"Manually specify the dependencies that, if changed, will trigger an update.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_drawable_fixed end=end_drawable_fixed",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_drawable_fixed",end:"end_drawable_fixed"},'class Drawable_Fixed : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    // Option 1. Use a `ComparableDrawable` wrapper\n    child(Text("text", style = Style.background(drawableColor(Color.RED))))\n\n    // Option 2. Manually specify dependencies (in this case empty).\n    child(deps = arrayOf()) { Text("text", style = Style.background(ColorDrawable(Color.RED))) }\n  }\n}\n')),(0,o.mdx)("h3",{id:"using-lambdas-as-props"},"Using Lambdas as Props"),(0,o.mdx)("p",null,"Lambdas do not provide an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()"),", for example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"{} == {}")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),". This means that using a lambda as a prop may cause unnecessary layouts."),(0,o.mdx)("p",null,"Furthermore, lambdas capture values when they are created. For example, in the folling lambda, ",(0,o.mdx)("inlineCode",{parentName:"p"},"{ val time = Calendar.getInstance().time }"),", the value ",(0,o.mdx)("inlineCode",{parentName:"p"},"time")," will contain the time the lambda was created not the time when it was invoked. This means it is not possible to prevent updates using ",(0,o.mdx)("inlineCode",{parentName:"p"},"deps")," as the lambda needs to be regenerated to capture the latest state and prop values."),(0,o.mdx)("p",null,"To use a lambda in a Lazy Collection, wrap it in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCallback")," hook.  This provides equality across layouts, allowing the component to be reused, and the lambda is guaranteed to use the latest prop and state values"),(0,o.mdx)("p",null,"Consider the following example where a lambda is passed to a component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_lambda_unnecessary_update end=end_lambda_unnecessary_update",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_lambda_unnecessary_update",end:"end_lambda_unnecessary_update"},'class Lambda_UnnecessaryUpdate(val name: String) : KComponent() {\n  override fun ComponentScope.render(): Component = LazyList {\n    child(Text("text", style = Style.onClick { println("Hello $name") }))\n  }\n}\n')),(0,o.mdx)("p",null,"In the above example, the Text will be laid out on any update to Example because the lambda props will never be equal. This can be fixed using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCallback")," hook:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_lambda_fixed end=end_lambda_fixed",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_lambda_fixed",end:"end_lambda_fixed"},'class Lambda_Fixed(val name: String) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val callBack = useCallback { _: ClickEvent -> println("Hello $name") }\n    return LazyList { child(Text("text", style = Style.onClick(callBack))) }\n  }\n}\n')),(0,o.mdx)("p",null,"Consider another example, this time displaying a shopping list:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt start=start_shopping_list_example end=end_shopping_list_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/ApplyingUpdates.kt",start:"start_shopping_list_example",end:"end_shopping_list_example"},'class ShoppingList : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val shoppingList = listOf("Apples", "Cheese", "Bread")\n\n    // Create a state containing the items that should be shown with a checkmark: \u2611\n    // Initially empty\n    val checkedItems = useState { setOf<String>() }\n\n    // Create a callback to toggle the checkmark for an item\n    // States should always use immutable data, so a new Set is created\n    val toggleChecked = useCallback { item: String ->\n      checkedItems.update {\n        it.toMutableSet().apply { if (contains(item)) remove(item) else add(item) }.toSet()\n      }\n    }\n\n    return LazyList {\n      shoppingList.forEach {\n        val isChecked = checkedItems.value.contains(it)\n        child(id = it, component = ShoppingListItem(it, isChecked, toggleChecked))\n      }\n    }\n  }\n}\n\nclass ShoppingListItem(\n    private val item: String,\n    private val isChecked: Boolean,\n    private val toggleSelected: (String) -> Unit,\n) : KComponent() {\n  override fun ComponentScope.render(): Component =\n      Text("${if (isChecked) "\u2611" else "\u2610"} $item", style = Style.onClick { toggleSelected(item) })\n}\n')),(0,o.mdx)("p",null,"Each shopping list item requires a lambda to toggle a checkmark. If an unwrapped lambda was used, then no component would ever be reused as lambda does not provide an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()"),". Instead, wrap the lambda in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCallback")," hook. This provides equality across renders and ensure that changes are applied to the latest version of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"checkedItems")," state."),(0,o.mdx)("h3",{id:"debugging-unnecessary-layouts"},"Debugging unnecessary layouts"),(0,o.mdx)("p",null,"In debug builds, you can enable the ",(0,o.mdx)("inlineCode",{parentName:"p"},"overlayRenderCount")," parameter on your lazy collection. This will overlay the render count onto each list item enabling you to see if items are being re-drawn when they have not changed. Simple, static items should only be rendered once. Items should only be re-rendered if their props have changed. If re-renders are being triggered by other items changing, you will likely need to take steps to deal with a prop that does not implement an ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals()"),"."))}c.isMDXComponent=!0}}]);