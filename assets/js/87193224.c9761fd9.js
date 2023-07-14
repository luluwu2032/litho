"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7712,1534,5701,2586,2793,2138,5425,3156,2875],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,c=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),y=f[0],v=f[1],g=h({queryString:s,groupId:c}),b=g[0],k=g[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),C=x[0],w=x[1],N=function(){var e=null!=b?b:C;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&v(N)}),[N]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),w(e)}),[k,w,p]),tabValues:p}}var y=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;n=null!=(o=u[l])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.default)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=f(e);return r.createElement("div",{className:(0,o.default)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function x(e){var t=(0,y.default)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(23746),l=n(7694),i=n(13618),s="0.47.0",c="0.48.0-SNAPSHOT",u="0.10.5",p="0.142.0",d=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.L)().isDarkTheme?i.Z:l.Z;return r.createElement(o.ZP,(0,a.Z)({},o.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("pre",{className:t,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",l({token:e,key:t}))})))})))}))}},29612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(74866),n(85162),n(7772),n(44996)),i=["components"],s={id:"use-state",title:"useState"},c=void 0,u={unversionedId:"mainconcepts/use-state",id:"mainconcepts/use-state",title:"useState",description:"useState is a hook that allows a component to persist and update a single value across renders and is the most common hook you'll encounter.",source:"@site/../docs/mainconcepts/use-state.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-state",permalink:"/docs/mainconcepts/use-state",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-state.mdx",tags:[],version:"current",frontMatter:{id:"use-state",title:"useState"},sidebar:"mainSidebar",previous:{title:"Introduction to Hooks",permalink:"/docs/mainconcepts/hooks-intro"},next:{title:"useEffect",permalink:"/docs/mainconcepts/use-effect"}},p={},d=[{value:"Declaring and Using State",id:"declaring-and-using-state",level:2},{value:"Updating State",id:"updating-state",level:2},{value:"Value vs. Lambda variants",id:"value-vs-lambda-variants",level:3},{value:"Using state in child components",id:"using-state-in-child-components",level:2},{value:"Batching Updates",id:"batching-updates",level:2}],m={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," is a hook that allows a component to persist and update a single value across renders and is the most common hook you'll encounter."),(0,o.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,o.mdx)("h2",{id:"declaring-and-using-state"},"Declaring and Using State"),(0,o.mdx)("p",null,"Declare state with ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),", passing an initial value. ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," will always return a ",(0,o.mdx)("inlineCode",{parentName:"p"},"State<T>")," holding whatever the current value of that state is. On the first render, this is the initial value, however in subsequent renders it will include any updates that have been commited for that state variable."),(0,o.mdx)("p",null,"The following code shows an example of a component that renders a counter that increments when it is clicked. ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," is used to track the value of that counter over time:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{3,6}","{3,6}":!0},'class CounterComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val clicks = useState { 0 }\n    return Text(\n        style = Style.onClick { clicks.update { c -> c + 1 } },\n        text = "Clicks: ${clicks.value}")\n  }\n}\n')),(0,o.mdx)("h2",{id:"updating-state"},"Updating State"),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("inlineCode",{parentName:"p"},"update")," causes the re-render to be ",(0,o.mdx)("strong",{parentName:"p"},"async by default"),". If you need to perform a synchronous state update (that is, one which will cause a re-render synchronously on the current thread), use ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateSync"),".")),(0,o.mdx)("p",null,"To update state, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"update")," method on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"State<T>")," returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),". This will trigger a render pass with the new state value:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt",start:"start_example",end:"end_example"},"class CheckboxComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isChecked = useState { false }\n\n    return Column(style = Style.onClick { isChecked.update { currValue -> !currValue } }) {\n      child(\n          Image(\n              drawable =\n                  drawableRes(\n                      if (isChecked.value) {\n                        android.R.drawable.checkbox_on_background\n                      } else {\n                        android.R.drawable.checkbox_off_background\n                      })))\n    }\n  }\n}\n")),(0,o.mdx)("h3",{id:"value-vs-lambda-variants"},"Value vs. Lambda variants"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"update")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateSync")," have two variants:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Value variant")," - takes a determined value, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"myState.update(1)"),"."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Lambda variant")," - takes a lambda receiving the old value which can be used to compute a new value, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"myState.update { c -> c + 1 }"),".")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"The basic rule of thumb is: use the lambda variant when you need to perform an update that depends on the old state value.")," This is because ",(0,o.mdx)("inlineCode",{parentName:"p"},"value")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"State")," is a snapshot of that state for the current render and may not reflect any renders that have occurred since (or are currently occuring on other threads)."),(0,o.mdx)("p",null,"For example, if your state update increments a counter, then using the function version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"update")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"count -> count + 1")," enables you to account for updates that are in flight but not yet applied (such as if the user has tapped a button triggering the update multiple times in succession)."),(0,o.mdx)("h2",{id:"using-state-in-child-components"},"Using state in child components"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Avoid passing a State directly to the child component"),". Instead, pass a lambda to the child which it can invoke to notify the parent to update the state:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{3,5} file=sample/src/main/java/com/facebook/samples/litho/kotlin/state/StateParentChildComponent.kt start=start_example_parent end=end_example_parent","{3,5}":!0,file:"sample/src/main/java/com/facebook/samples/litho/kotlin/state/StateParentChildComponent.kt",start:"start_example_parent",end:"end_example_parent"},'class StateParentChildComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val clicks = useState { 0 }\n    return Column {\n      child(ChildComponent { clicks.update { c -> c + 1 } })\n      child(Text(text = "Counter: ${clicks.value}"))\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"And then in the child component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{1,4} file=sample/src/main/java/com/facebook/samples/litho/kotlin/state/ChildComponent.kt start=start_example_child end=end_example_child","{1,4}":!0,file:"sample/src/main/java/com/facebook/samples/litho/kotlin/state/ChildComponent.kt",start:"start_example_child",end:"end_example_child"},'class ChildComponent(private val onIncrementCounter: () -> Unit) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Text(\n        style = Style.onClick { onIncrementCounter() },\n        text = "Tap to increment the parent!",\n    )\n  }\n}\n')),(0,o.mdx)("h2",{id:"batching-updates"},"Batching Updates"),(0,o.mdx)("p",null,"Litho has an internal mechanism where it batches state updates to avoid the scenario of doing one layout re-calculation per state update (and corresponding mount) and, therefore\nbecome more performant."),(0,o.mdx)("p",null,"Internally, Litho achieves this by leveraging the lifecycle of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Choreographer")," API and how it breaks down its different work phases. Whenever the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Choregrapher")," receives a VSYNC signal,\nit starts a cycle to prepare the next Frame. In this cycle, it goes through 3 main phases:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Input handling"),(0,o.mdx)("li",{parentName:"ol"},"Animation (which layouts, measures, and draws)"),(0,o.mdx)("li",{parentName:"ol"},"Traversals")),(0,o.mdx)("p",null,"When Litho enqueues a new state update, it will schedule its layout calculation on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Choreographer"),"'s next animation phase. This way, any subsequent state update enqueued before the next animation phase will\nbe taken into account in the following layout calculation (and not re-schedule any more work)."),(0,o.mdx)("img",{src:(0,l.default)("/images/batched_updates.png"),alt:"Batched Updates Process",className:"white-background"}))}f.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>l});var a=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(67294),l={Prism:a.Z,theme:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],s=[i];l>-1;){for(;(o=a[l]++)<r[l];){var d=void 0,m=t[l],h=n[l][o];if("string"==typeof h?(m=l>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var f=d.split(c),y=f.length;i.push({types:m,content:f[0]});for(var v=1;v<y;v++)u(i),s.push(i=[]),i.push({types:m,content:f[v]})}else l++,t.push(m),n.push(d),a.push(0),r.push(d.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(i),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);