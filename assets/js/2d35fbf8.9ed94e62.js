"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3560],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,g=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58331:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"trigger-events",title:"Triggering events with Handles"},l=void 0,p={unversionedId:"codegen/trigger-events",id:"codegen/trigger-events",isDocsHomePage:!1,title:"Triggering events with Handles",description:"You can trigger Events on components using a Handle. A Handle is a unique identifier that can be shared with other components by passing it as a @Prop. Use new Handle() to create a new Handle and assign it to a component using the .handle(..) method in the component's builder.",source:"@site/../docs/codegen/trigger-events.md",sourceDirName:"codegen",slug:"/codegen/trigger-events",permalink:"/docs/codegen/trigger-events",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/trigger-events.md",tags:[],version:"current",frontMatter:{id:"trigger-events",title:"Triggering events with Handles"},sidebar:"mainSidebar",previous:{title:"Events for Specs",permalink:"/docs/codegen/events-for-specs"},next:{title:"Code generation",permalink:"/docs/codegen/code-generation"}},s=[{value:"Trigger custom events",id:"trigger-custom-events",children:[],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"You can trigger Events on components using a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Handle"),". A ",(0,o.mdx)("inlineCode",{parentName:"p"},"Handle")," is a unique identifier that can be shared with other components by passing it as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop"),". Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"new Handle()")," to create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"Handle")," and assign it to a component using the ",(0,o.mdx)("inlineCode",{parentName:"p"},".handle(..)")," method in the component's builder."),(0,o.mdx)("p",null,"In the following LayoutSpec we apply a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Handle")," (passed in as a @Prop) to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"TextInput")," component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class TextInputContainerComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop Handle textInputHandle) {\n    return Column.create(c).child(TextInput.create(c).handle(textInputHandle)).build();\n  }\n}\n")),(0,o.mdx)("p",null,"Components with a reference to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TextInput"),"'s handle can now manipulate it directly."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class ClearTextTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle textInputHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Clear")\n                .clickHandler(ClearTextTriggerExampleComponent.onClearClick(c, textInputHandle)))\n        .child(TextInputContainerComponent.create(c).textInputHandle(textInputHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClearClick(ComponentContext c, @Param Handle textInputHandle) {\n    // Clear the TextInput inside TextInputContainerComponent\n    TextInput.setText(c, textInputHandle, "");\n  }\n}\n')),(0,o.mdx)("h2",{id:"trigger-custom-events"},"Trigger custom events"),(0,o.mdx)("p",null,"You can trigger your own custom events."),(0,o.mdx)("p",null,"Declare your event class."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@Event\npublic class CustomEvent {\n  public int increaseBy;\n}\n")),(0,o.mdx)("p",null,"Create a trigger for your event inside your spec using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnTrigger")," annotation. This method will have access to event's parameters using @FromTrigger, as well as the components Props and State."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class ComponentWithCustomEventTriggerComponentSpec {\n\n  ...\n\n  @OnTrigger(CustomEvent.class)\n  static void triggerCustomEvent(ComponentContext c, @FromTrigger int increaseBy) {\n    // Add custom event behavior\n  }\n}\n")),(0,o.mdx)("p",null,"Usages of your component must be assigned a Handle. The event can be triggered anywhere we have a reference to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Handle"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class CustomEventTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle textInputHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Trigger custom event")\n                .clickHandler(CustomEventTriggerExampleComponent.onClick(c, textInputHandle)))\n        .child(ComponentWithCustomEventTriggerComponent.create(c).handle(textInputHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c, @Param Handle textInputHandle) {\n    ComponentWithCustomEventTriggerComponent.triggerCustomEvent(c, textInputHandle, 2);\n  }\n}\n')))}u.isMDXComponent=!0}}]);