"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6561,4957,8723,8e3],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,i({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,y=p["".concat(r,".").concat(u)]||p[u]||m[u]||i;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(87462),a=n(67294),i=n(72389),r=n(79443);const l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),c=n(86010);const p="tabItem_1uMI";function d(e){var t,n,o,i=e.lazy,r=e.block,d=e.defaultValue,u=e.values,m=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.duplicates)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),x=b.tabGroupChoices,k=b.setTabGroupChoices,w=(0,a.useState)(g),T=w[0],N=w[1],j=[],C=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=x[m];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&N(O)}var V=function(e){var t=e.currentTarget,n=j.indexOf(t),o=v[n].value;o!==T&&(C(t),N(o),null!=m&&k(m,o))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=j.indexOf(e.currentTarget)+1;n=j[o]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":r},y)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.default)("tabs__item",p,{"tabs__item--active":T===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:V,onClick:V},null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,i.default)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},79443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(67294).createContext)(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(82924);const i=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),a=n(67294),i=n(24544),r=n(7694),l=n(13618),s="0.41.1",c="0.41.2-SNAPSHOT",p="0.9.0",d="0.46.0",u=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),m=(0,u.Z)().isDarkTheme?l.Z:r.Z;return a.createElement(i.ZP,(0,o.Z)({},i.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,r=e.getTokenProps;return a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.createElement("span",r({token:e,key:t}))})))})))}))}},5221:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>u,toc:()=>m,default:()=>h});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(55064),l=n(58215),s=n(75960),c=["components"],p={id:"project-setup",title:"Setting up the project"},d=void 0,u={unversionedId:"tutorial/project-setup",id:"tutorial/project-setup",isDocsHomePage:!1,title:"Setting up the project",description:"To add Litho to your project you'll need to configure it with correct settings and dependencies.",source:"@site/../docs/tutorial/project-setup.mdx",sourceDirName:"tutorial",slug:"/tutorial/project-setup",permalink:"/docs/tutorial/project-setup",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/project-setup.mdx",tags:[],version:"current",frontMatter:{id:"project-setup",title:"Setting up the project"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/tutorial/overview"},next:{title:"Components and Props",permalink:"/docs/tutorial/first-components"}},m=[{value:"Add Litho core dependencies",id:"add-litho-core-dependencies",children:[],level:2},{value:"Add Sections dependencies",id:"add-sections-dependencies",children:[],level:2},{value:"Wire up native libs",id:"wire-up-native-libs",children:[],level:2}],y={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.mdx)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"To add Litho to your project you'll need to configure it with correct settings and dependencies."),(0,i.mdx)("p",null,"We publish Litho artifacts to Bintray's JCenter and first you need to make sure you have the JCenter\nrepository in your root ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"repositories {\n  jcenter()\n}\n")),(0,i.mdx)("h2",{id:"add-litho-core-dependencies"},"Add Litho core dependencies"),(0,i.mdx)(r.Z,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.mdx)(s.Z,{language:"groovy",code:"\ndependencies {\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n  \n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n  \n  // Testing Litho\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"})),(0,i.mdx)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Kotlin support for Litho is experimental at this point."))),(0,i.mdx)(s.Z,{language:"groovy",code:"\ndependencies {\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n  \n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n  \n  // Testing Litho\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}),(0,i.mdx)("p",null,"Don't forget that in order to use dependencies with annotation processors, you need to apply Kotlin\nKAPT plugin at the top of your application's ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'kotlin-kapt'\n")))),(0,i.mdx)("h2",{id:"add-sections-dependencies"},"Add Sections dependencies"),(0,i.mdx)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can\ninclude Sections by adding the following additional dependencies to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.mdx)(r.Z,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.mdx)(s.Z,{language:"groovy",code:"\ndependencies {\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n  \n  annotationProcessor 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"})),(0,i.mdx)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.mdx)(s.Z,{language:"groovy",code:"\ndependencies {\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n  \n  kapt 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}))),(0,i.mdx)("h2",{id:"wire-up-native-libs"},"Wire up native libs"),(0,i.mdx)("p",null,"As a last step, you need to initialize ",(0,i.mdx)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader"),"\nto help load native libraries provided by the underlying layout engine, ",(0,i.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),".\nYour custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),(0,i.mdx)(r.Z,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApplication.java"',title:'"MyApplication.java"'},"public class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n  }\n}\n"))),(0,i.mdx)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApplication.kt"',title:'"MyApplication.kt"'},"class MyApplication: Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n  }\n}\n")))),(0,i.mdx)("h1",{id:"testing-your-setup"},"Testing your setup"),(0,i.mdx)("p",null,"Now you can test this config by adding a simple UI created with Litho - a built-in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text"),' widget\nthat displays "Hello World!" text - to an activity.'),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Don't worry about all the unfamiliar classes and red ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," \u2013 we will explain everything in the next\nstep of this tutorial."))),(0,i.mdx)(r.Z,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:'title="MyActivity.java"',title:'"MyActivity.java"'},'import com.facebook.litho.ComponentContext;\nimport com.facebook.litho.LithoView;\nimport com.facebook.litho.widget.Text;\n\npublic class MyActivity extends AppCompatActivity {\n\n  @Override\n  public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final ComponentContext c = new ComponentContext(this);\n\n    final LithoView lithoView = LithoView.create(\n          this /* context */,\n          Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50f)\n            .build());\n\n    setContentView(lithoView);\n  }\n}\n'))),(0,i.mdx)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyActivity.kt"',title:'"MyActivity.kt"'},'import com.facebook.litho.ComponentContext\nimport com.facebook.litho.LithoView\nimport com.facebook.litho.widget.Text\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val c = ComponentContext(this)\n\n    val lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50f)\n            .build())\n\n    setContentView(lithoView)\n  }\n}\n')))),(0,i.mdx)("p",null,"That's it, if you build and run the app you should see \"Hello World!\" displayed on the screen. Setup\nis complete, let's go to the next page to understand what we've just done."))}h.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>y,lG:()=>r});var o=n(87410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i=n(67294),r={Prism:o.default,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,i=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(i.style=r.plain),void 0!==a&&(i.style=void 0!==i.style?s({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return i[n[0]];var r=o?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[r].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,i=e.token,r=s({},m(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==a&&(r.style=void 0!==r.style?s({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var i=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,i=this.getThemeDict(this.props),r=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],i=0,r=0,l=[],s=[l];r>-1;){for(;(i=o[r]++)<a[r];){var u=void 0,m=t[r],y=n[r][i];if("string"==typeof y?(m=r>0?m:["plain"],u=y):(m=d(m,y.type),y.alias&&(m=d(m,y.alias)),u=y.content),"string"==typeof u){var h=u.split(c),v=h.length;l.push({types:m,content:h[0]});for(var f=1;f<v;f++)p(l),s.push(l=[]),l.push({types:m,content:h[f]})}else r++,t.push(m),n.push(u),o.push(0),a.push(u.length)}r--,t.pop(),n.pop(),o.pop(),a.pop()}return p(l),s}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);