"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2261],{3905:(n,e,t)=>{t.r(e),t.d(e,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(){return i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i.apply(this,arguments)}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=o.createContext({}),p=function(n){return function(e){var t=m(e.components);return o.createElement(n,i({},e,{components:t}))}},m=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=m(n.components);return o.createElement(c.Provider,{value:e},n.children)},h="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,r=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),p=m(t),d=a,h=p["".concat(r,".").concat(d)]||p[d]||y[d]||i;return t?o.createElement(h,s(s({ref:e},c),{},{components:t})):o.createElement(h,s({ref:e},c))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[h]="string"==typeof n?n:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74273:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],s={id:"transition-key-types",title:"Transition Key Scoping"},l=void 0,c={unversionedId:"animations/transition-key-types",id:"animations/transition-key-types",title:"Transition Key Scoping",description:"Within the other pages of the 'Animations' section, a common approach is used when defining transitions: assigning transition keys and creating transitions within a single component declaration.",source:"@site/../docs/animations/transition-key-types.md",sourceDirName:"animations",slug:"/animations/transition-key-types",permalink:"/docs/animations/transition-key-types",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-key-types.md",tags:[],version:"current",frontMatter:{id:"transition-key-types",title:"Transition Key Scoping"},sidebar:"mainSidebar",previous:{title:"More Ways to Define Transitions",permalink:"/docs/animations/transition-definitions"},next:{title:"Handling Visibility",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling"}},p={},m=[],d={toc:m},h="wrapper";function y(n){var e=n.components,t=(0,a.Z)(n,r);return(0,i.mdx)(h,(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Within the other pages of the 'Animations' section, a common approach is used when defining transitions: assigning transition keys and creating transitions within a single component declaration."),(0,i.mdx)("p",null,"There are situations where this approach is not suitable, such as when the transition key is assigned within one component while the transitions themselves are defined in another."),(0,i.mdx)("p",null,"If an attempt to try to do everything using the same approach contained in the other pages of the Animations section is taken, it won't work. It will look like there are no transitions defined, as shown in the following two components:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=not_working_start end=not_working_end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"not_working_start",end:"not_working_end"},"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=not_working_start end=not_working_end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"not_working_start",end:"not_working_end"},'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')),(0,i.mdx)("p",null,"The reason it won't work is that, ",(0,i.mdx)("strong",{parentName:"p"},"by default, transition keys are only visible within the scope of the component declaration in which they are used"),"."),(0,i.mdx)("p",null,"The scope of transition keys is determined by the ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html"},"TransitionKeyType"),", for which there are two options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#LOCAL"},"LOCAL")," - the default type; only visible within the component where it's used."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#GLOBAL"},"GLOBAL")," - makes a transition key visible through the whole tree of components. The drawback here is that the keys should be unique within the tree. It usually takes extra effort to use several components of the same type that assign the ",(0,i.mdx)("inlineCode",{parentName:"li"},"GLOBAL")," transition keys within one tree to avoid transition key collisions.")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Litho throws an exception when a transition key collision occurs, which may not be trivial to debug and resolve in the case of ",(0,i.mdx)("inlineCode",{parentName:"p"},"GLOBAL")," transition keys. It's recommended that you use ",(0,i.mdx)("inlineCode",{parentName:"p"},"LOCAL")," transition keys and assign those keys within the same component that defined them.")),(0,i.mdx)("p",null,"There are two ways to change the transition key type:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Use ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html#transitionKeyType-com.facebook.litho.Transition.TransitionKeyType-"},"Component.Builder#transitionKeyType()")," when assigning a key to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component"),"."),(0,i.mdx)("li",{parentName:"ol"},"When creating a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition"),", use a version of ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-com.facebook.litho.Transition.TransitionKeyType-java.lang.String-"},"Transition.create()")," that takes the ",(0,i.mdx)("inlineCode",{parentName:"li"},"TransitionKeyType")," argument along with the key itself.")),(0,i.mdx)("p",null,"The following components are the ones shown at the top of this page but amended to include ",(0,i.mdx)("inlineCode",{parentName:"p"},"TransitionKeyType.GLOBAL"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=start_working end=end_working",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"start_working",end:"end_working"},"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(\n            Transition.TransitionKeyType.GLOBAL, GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=start_working end=end_working",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"start_working",end:"end_working"},'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKeyType(Transition.TransitionKeyType.GLOBAL)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')))}y.isMDXComponent=!0}}]);