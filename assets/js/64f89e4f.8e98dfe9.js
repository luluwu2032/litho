"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7182],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>s});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){return function(n){var t=d(n.components);return o.createElement(e,r({},n,{components:t}))}},d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),c=a,h=s["".concat(i,".").concat(c)]||s[c]||u[c]||r;return t?o.createElement(h,m(m({ref:n},p),{},{components:t})):o.createElement(h,m({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>p,toc:()=>d});var o=t(83117),a=t(80102),r=(t(67294),t(3905)),i=["components"],m={id:"migrating-from-mountspecs",title:"Migrating from MountSpecs"},l=void 0,p={unversionedId:"mountablecomponents/migrating-from-mountspecs",id:"mountablecomponents/migrating-from-mountspecs",title:"Migrating from MountSpecs",description:"This page outlines the process of migrating from MountSpecs to Mountable Components.",source:"@site/../docs/mountablecomponents/migrating-from-mountspecs.mdx",sourceDirName:"mountablecomponents",slug:"/mountablecomponents/migrating-from-mountspecs",permalink:"/docs/mountablecomponents/migrating-from-mountspecs",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mountablecomponents/migrating-from-mountspecs.mdx",tags:[],version:"current",frontMatter:{id:"migrating-from-mountspecs",title:"Migrating from MountSpecs"}},s={},d=[{value:"Migrating parts belonging to Mountable Component <code>render()</code> method",id:"migrating-parts-belonging-to-mountable-component-render-method",level:2},{value:"Migrating Props and Common Props",id:"migrating-props-and-common-props",level:3},{value:"Migrating State and some other lifecycle methods",id:"migrating-state-and-some-other-lifecycle-methods",level:3},{value:"Migrating Accessibility",id:"migrating-accessibility",level:3},{value:"Migrating event handling",id:"migrating-event-handling",level:3},{value:"Migrating @OnPrepare and @OnLoadStyle lifecycle methods",id:"migrating-onprepare-and-onloadstyle-lifecycle-methods",level:3},{value:"Migrating parts belonging to the <code>Mountable</code> object",id:"migrating-parts-belonging-to-the-mountable-object",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This page outlines the process of migrating from ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs"},"MountSpecs")," to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-component"},"Mountable Components"),"."),(0,r.mdx)("p",null,"Unlike MountSpecs, Mountable Components consist of two separate pieces:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"MountableComponent.render()")," - a method that returns a ",(0,r.mdx)("inlineCode",{parentName:"li"},"Mountable")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Style")," that will be applied to it."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Mountable")," - an object that hosts the logic for measuring, creation, and setting properties on the mount content (a view or a drawable).")),(0,r.mdx)("p",null,"The following two sections contain information on how to migrate MountSpec static lifecycle methods into a Mountable Component ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Mountable")," it returns. The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-cheatsheet"},"Cheatsheet")," can also be consulted for a set of links for the migration of individual aspects of existing code."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Before you start migrating your MountSpec, make sure to go through the setup steps outlined ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro"},"here"),".")),(0,r.mdx)("h2",{id:"migrating-parts-belonging-to-mountable-component-render-method"},"Migrating parts belonging to Mountable Component ",(0,r.mdx)("inlineCode",{parentName:"h2"},"render()")," method"),(0,r.mdx)("p",null,"The subsections below outline how to migrate the parts of a MountSpec that will be hosted by the Mountable Component. This includes Props and Common Props, useState and other ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/hooks-for-spec-developers"},"Hooks"),", Accessibility, Event Handling, and some other MountSpec static lifecycle methods."),(0,r.mdx)("h3",{id:"migrating-props-and-common-props"},"Migrating Props and Common Props"),(0,r.mdx)("p",null,"Similar to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro/#props"},"KComponents"),", Props are now just ",(0,r.mdx)("inlineCode",{parentName:"p"},"val")," properties on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountableComponent"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@PropDefaults")," become default values of those ",(0,r.mdx)("inlineCode",{parentName:"p"},"val")," properties."),(0,r.mdx)("p",null,"Common Props can be set using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object which the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountableComponent")," returns from ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountableRenderResult")," object. You can find more information on ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," and how to work with it ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro/#common-props"},"here"),"."),(0,r.mdx)("h3",{id:"migrating-state-and-some-other-lifecycle-methods"},"Migrating State and some other lifecycle methods"),(0,r.mdx)("p",null,"As with KComponents, most of the APIs implemented with lifecycle methods in the Mount Specs API (such as @OnCreateInitialState and @OnAttached) have hooks equivalents in the Kotlin API."),(0,r.mdx)("p",null,"Those Hooks can be used in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountableComponent"),"."),(0,r.mdx)("p",null,"More information on how to migrate Hooks can be found ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/hooks-for-spec-developers"},"here"),"."),(0,r.mdx)("h3",{id:"migrating-accessibility"},"Migrating Accessibility"),(0,r.mdx)("p",null,"Accessibility for Mountable Components is implemented using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object. You can find out more about how to implement A11Y for Mountable Components ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/accessibility"},"here"),"."),(0,r.mdx)("h3",{id:"migrating-event-handling"},"Migrating event handling"),(0,r.mdx)("p",null,"Event Handling migration works in the same way as for KComponents (for details, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/event-handling"},"Event Handling")," page)."),(0,r.mdx)("h3",{id:"migrating-onprepare-and-onloadstyle-lifecycle-methods"},"Migrating @OnPrepare and @OnLoadStyle lifecycle methods"),(0,r.mdx)("p",null,"MountableComponents do not provide a ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," lifecycle method to move heavy operations off the UI thread before the layout calculation is performed. Instead, such operations should take place in the Mountable Component's ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method: the result can be passed to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Mountable")," as its ",(0,r.mdx)("inlineCode",{parentName:"p"},"val")," property. Therefore, in MountableComponents, there's no equivalent of ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#inter-stage-inputs-and-outputs"},"inter-stage inputs and outputs"),"."),(0,r.mdx)("p",null,"Similar to ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnPrepare"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnLoadStyle")," lifecycle method's content should also migrate to be a part of MountableComponent's ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method."),(0,r.mdx)("h2",{id:"migrating-parts-belonging-to-the-mountable-object"},"Migrating parts belonging to the ",(0,r.mdx)("inlineCode",{parentName:"h2"},"Mountable")," object"),(0,r.mdx)("p",null,"The subsections below outline how to migrate the parts of a MountSpec that will be hosted by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Mountable"),". This includes logic to measure, create (and optionally pool), and bind the content, as well as ",(0,r.mdx)("inlineCode",{parentName:"p"},"DynamicValues")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Controllers")," - a mechanism that replaces ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnTrigger")," static lifecycle method."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"\ud83d\udea7\xa0\xa0\xa0UNDER CONSTRUCTION")))}u.isMDXComponent=!0}}]);