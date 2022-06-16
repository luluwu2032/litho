"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4088],{3905:(e,i,n)=>{n.r(i),n.d(i,{MDXContext:()=>o,MDXProvider:()=>s,mdx:()=>u,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=n(67294);function l(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function t(){return t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.apply(this,arguments)}function d(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?d(Object(n),!0).forEach((function(i){l(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function m(e,i){if(null==e)return{};var n,a,l=function(e,i){if(null==e)return{};var n,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){return function(i){var n=c(i.components);return a.createElement(e,t({},i,{components:n}))}},c=function(e){var i=a.useContext(o),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},s=function(e){var i=c(e.components);return a.createElement(o.Provider,{value:i},e.children)},x={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},h=a.forwardRef((function(e,i){var n=e.components,l=e.mdxType,t=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=c(n),s=l,h=p["".concat(d,".").concat(s)]||p[s]||x[s]||t;return n?a.createElement(h,r(r({ref:i},o),{},{components:n})):a.createElement(h,r({ref:i},o))}));function u(e,i){var n=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var t=n.length,d=new Array(t);d[0]=h;var r={};for(var m in i)hasOwnProperty.call(i,m)&&(r[m]=i[m]);r.originalType=e,r.mdxType="string"==typeof e?e:l,d[1]=r;for(var o=2;o<t;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69832:(e,i,n)=>{n.r(i),n.d(i,{frontMatter:()=>r,contentTitle:()=>m,metadata:()=>o,toc:()=>p,default:()=>s});var a=n(87462),l=n(63366),t=(n(67294),n(3905)),d=["components"],r={id:"common-props",title:"Common Props"},m=void 0,o={unversionedId:"common-props",id:"common-props",isDocsHomePage:!1,title:"Common Props",description:"This page contains a detailed API reference for the Litho's component common props. It assumes you\u2019re familiar with fundamental Litho concepts, such as LayoutSpecs, Props, and State. If you\u2019re not, read them first.",source:"@site/../docs/common-props.md",sourceDirName:".",slug:"/common-props",permalink:"/docs/common-props",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/common-props.md",tags:[],version:"current",frontMatter:{id:"common-props",title:"Common Props"}},p=[{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"AccessibilityRole",id:"accessibilityrole",children:[],level:3},{value:"AccessibilityRoleDescription",id:"accessibilityroledescription",children:[],level:3},{value:"AlignSelf",id:"alignself",children:[],level:3},{value:"Alpha",id:"alpha",children:[],level:3},{value:"AspectRatio",id:"aspectratio",children:[],level:3},{value:"Background",id:"background",children:[],level:3},{value:"Border",id:"border",children:[],level:3},{value:"ClickHandler",id:"clickhandler",children:[],level:3},{value:"Clickable",id:"clickable",children:[],level:3},{value:"ClipChildren",id:"clipchildren",children:[],level:3},{value:"ClipToOutline",id:"cliptooutline",children:[],level:3},{value:"ContentDescription",id:"contentdescription",children:[],level:3},{value:"DispatchPopulateAccessibilityEventHandler",id:"dispatchpopulateaccessibilityeventhandler",children:[],level:3},{value:"DuplicateParentState",id:"duplicateparentstate",children:[],level:3},{value:"EnabledState",id:"enabledstate",children:[],level:3},{value:"Flex",id:"flex",children:[],level:3},{value:"FlexBasisPercent",id:"flexbasispercent",children:[],level:3},{value:"FlexBasisPx",id:"flexbasispx",children:[],level:3},{value:"FlexGrow",id:"flexgrow",children:[],level:3},{value:"FlexShrink",id:"flexshrink",children:[],level:3},{value:"FocusChangeHandler",id:"focuschangehandler",children:[],level:3},{value:"FocusState",id:"focusstate",children:[],level:3},{value:"FocusedHandler",id:"focusedhandler",children:[],level:3},{value:"Foreground",id:"foreground",children:[],level:3},{value:"FullImpressionHandler",id:"fullimpressionhandler",children:[],level:3},{value:"HeightPercent",id:"heightpercent",children:[],level:3},{value:"HeightPx",id:"heightpx",children:[],level:3},{value:"ImportantForAccessibility",id:"importantforaccessibility",children:[],level:3},{value:"InterceptTouchHandler",id:"intercepttouchhandler",children:[],level:3},{value:"InvisibleHandler",id:"invisiblehandler",children:[],level:3},{value:"IsReferenceBaseline",id:"isreferencebaseline",children:[],level:3},{value:"LayoutDirection",id:"layoutdirection",children:[],level:3},{value:"LongClickHandler",id:"longclickhandler",children:[],level:3},{value:"MarginAutos",id:"marginautos",children:[],level:3},{value:"MarginPercents",id:"marginpercents",children:[],level:3},{value:"Margins",id:"margins",children:[],level:3},{value:"MaxHeightPercent",id:"maxheightpercent",children:[],level:3},{value:"MaxHeightPx",id:"maxheightpx",children:[],level:3},{value:"MaxWidthPercent",id:"maxwidthpercent",children:[],level:3},{value:"MaxWidthPx",id:"maxwidthpx",children:[],level:3},{value:"MinHeightPercent",id:"minheightpercent",children:[],level:3},{value:"MinHeightPx",id:"minheightpx",children:[],level:3},{value:"MinWidthPercent",id:"minwidthpercent",children:[],level:3},{value:"MinWidthPx",id:"minwidthpx",children:[],level:3},{value:"OnInitializeAccessibilityEventHandler",id:"oninitializeaccessibilityeventhandler",children:[],level:3},{value:"OnInitializeAccessibilityNodeInfoHandler",id:"oninitializeaccessibilitynodeinfohandler",children:[],level:3},{value:"OnPopulateAccessibilityEventHandler",id:"onpopulateaccessibilityeventhandler",children:[],level:3},{value:"OnRequestSendAccessibilityEventHandler",id:"onrequestsendaccessibilityeventhandler",children:[],level:3},{value:"OutlineProvider",id:"outlineprovider",children:[],level:3},{value:"PaddingPercents",id:"paddingpercents",children:[],level:3},{value:"Paddings",id:"paddings",children:[],level:3},{value:"PerformAccessibilityActionHandler",id:"performaccessibilityactionhandler",children:[],level:3},{value:"PositionPercents",id:"positionpercents",children:[],level:3},{value:"PositionType",id:"positiontype",children:[],level:3},{value:"Positions",id:"positions",children:[],level:3},{value:"Rotation",id:"rotation",children:[],level:3},{value:"RotationX",id:"rotationx",children:[],level:3},{value:"RotationY",id:"rotationy",children:[],level:3},{value:"Scale",id:"scale",children:[],level:3},{value:"SelectedState",id:"selectedstate",children:[],level:3},{value:"SendAccessibilityEventHandler",id:"sendaccessibilityeventhandler",children:[],level:3},{value:"SendAccessibilityEventUncheckedHandler",id:"sendaccessibilityeventuncheckedhandler",children:[],level:3},{value:"ShadowElevation",id:"shadowelevation",children:[],level:3},{value:"StateListAnimator",id:"statelistanimator",children:[],level:3},{value:"StateListAnimatorRes",id:"statelistanimatorres",children:[],level:3},{value:"TouchExpansions",id:"touchexpansions",children:[],level:3},{value:"TouchHandler",id:"touchhandler",children:[],level:3},{value:"TransitionKey",id:"transitionkey",children:[],level:3},{value:"TransitionKeyType",id:"transitionkeytype",children:[],level:3},{value:"UnfocusedHandler",id:"unfocusedhandler",children:[],level:3},{value:"UseHeightAsBaseline",id:"useheightasbaseline",children:[],level:3},{value:"ViewTag",id:"viewtag",children:[],level:3},{value:"ViewTags",id:"viewtags",children:[],level:3},{value:"VisibilityChangedHandler",id:"visibilitychangedhandler",children:[],level:3},{value:"VisibleHandler",id:"visiblehandler",children:[],level:3},{value:"VisibleHeightRatio",id:"visibleheightratio",children:[],level:3},{value:"VisibleWidthRatio",id:"visiblewidthratio",children:[],level:3},{value:"WidthPercent",id:"widthpercent",children:[],level:3},{value:"WidthPx",id:"widthpx",children:[],level:3}],level:2}],c={toc:p};function s(e){var i=e.components,n=(0,l.Z)(e,d);return(0,t.mdx)("wrapper",(0,a.Z)({},c,n,{components:i,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,"This page contains a detailed API reference for the Litho's component common props. It assumes you\u2019re familiar with fundamental Litho concepts, such as LayoutSpecs, Props, and State. If you\u2019re not, read them first."),(0,t.mdx)("h2",{id:"props"},"Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#accessibilityrole"},(0,t.mdx)("inlineCode",{parentName:"a"},"AccessibilityRole"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#accessibilityroledescription"},(0,t.mdx)("inlineCode",{parentName:"a"},"AccessibilityRoleDescription"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#alignself"},(0,t.mdx)("inlineCode",{parentName:"a"},"AlignSelf"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#alpha"},(0,t.mdx)("inlineCode",{parentName:"a"},"Alpha"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#aspectratio"},(0,t.mdx)("inlineCode",{parentName:"a"},"AspectRatio"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#background"},(0,t.mdx)("inlineCode",{parentName:"a"},"Background"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#border"},(0,t.mdx)("inlineCode",{parentName:"a"},"Border"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#clickhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"ClickHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#clickable"},(0,t.mdx)("inlineCode",{parentName:"a"},"Clickable"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#clipchildren"},(0,t.mdx)("inlineCode",{parentName:"a"},"ClipChildren"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#cliptooutline"},(0,t.mdx)("inlineCode",{parentName:"a"},"ClipToOutline"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#contentdescription"},(0,t.mdx)("inlineCode",{parentName:"a"},"ContentDescription"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#dispatchpopulateaccessibilityeventhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"DispatchPopulateAccessibilityEventHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#duplicateparentstate"},(0,t.mdx)("inlineCode",{parentName:"a"},"DuplicateParentState"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#enabledstate"},(0,t.mdx)("inlineCode",{parentName:"a"},"EnabledState"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#flex"},(0,t.mdx)("inlineCode",{parentName:"a"},"Flex"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#flexbasispercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"FlexBasisPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#flexbasispx"},(0,t.mdx)("inlineCode",{parentName:"a"},"FlexBasisPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#flexgrow"},(0,t.mdx)("inlineCode",{parentName:"a"},"FlexGrow"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#flexshrink"},(0,t.mdx)("inlineCode",{parentName:"a"},"FlexShrink"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#focuschangehandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"FocusChangeHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#focusstate"},(0,t.mdx)("inlineCode",{parentName:"a"},"FocusState"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#focusedhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"FocusedHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#foreground"},(0,t.mdx)("inlineCode",{parentName:"a"},"Foreground"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#fullimpressionhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"FullImpressionHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#heightpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"HeightPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#heightpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"HeightPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#importantforaccessibility"},(0,t.mdx)("inlineCode",{parentName:"a"},"ImportantForAccessibility"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#intercepttouchhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"InterceptTouchHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#invisiblehandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"InvisibleHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#isreferencebaseline"},(0,t.mdx)("inlineCode",{parentName:"a"},"IsReferenceBaseline"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#layoutdirection"},(0,t.mdx)("inlineCode",{parentName:"a"},"LayoutDirection"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#longclickhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"LongClickHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#marginautos"},(0,t.mdx)("inlineCode",{parentName:"a"},"MarginAutos"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#marginpercents"},(0,t.mdx)("inlineCode",{parentName:"a"},"MarginPercents"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#margins"},(0,t.mdx)("inlineCode",{parentName:"a"},"Margins"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#maxheightpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"MaxHeightPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#maxheightpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"MaxHeightPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#maxwidthpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"MaxWidthPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#maxwidthpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"MaxWidthPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#minheightpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"MinHeightPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#minheightpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"MinHeightPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#minwidthpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"MinWidthPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#minwidthpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"MinWidthPx"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#oninitializeaccessibilityeventhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"OnInitializeAccessibilityEventHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#oninitializeaccessibilitynodeinfohandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"OnInitializeAccessibilityNodeInfoHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#onpopulateaccessibilityeventhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"OnPopulateAccessibilityEventHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#onrequestsendaccessibilityeventhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"OnRequestSendAccessibilityEventHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#outlineprovider"},(0,t.mdx)("inlineCode",{parentName:"a"},"OutlineProvider"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#paddingpercents"},(0,t.mdx)("inlineCode",{parentName:"a"},"PaddingPercents"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#paddings"},(0,t.mdx)("inlineCode",{parentName:"a"},"Paddings"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#performaccessibilityactionhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"PerformAccessibilityActionHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#positionpercents"},(0,t.mdx)("inlineCode",{parentName:"a"},"PositionPercents"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#positiontype"},(0,t.mdx)("inlineCode",{parentName:"a"},"PositionType"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#positions"},(0,t.mdx)("inlineCode",{parentName:"a"},"Positions"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#rotation"},(0,t.mdx)("inlineCode",{parentName:"a"},"Rotation"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#rotationx"},(0,t.mdx)("inlineCode",{parentName:"a"},"RotationX"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#rotationy"},(0,t.mdx)("inlineCode",{parentName:"a"},"RotationY"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#scale"},(0,t.mdx)("inlineCode",{parentName:"a"},"Scale"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#selectedstate"},(0,t.mdx)("inlineCode",{parentName:"a"},"SelectedState"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#sendaccessibilityeventhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"SendAccessibilityEventHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#sendaccessibilityeventuncheckedhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"SendAccessibilityEventUncheckedHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#shadowelevation"},(0,t.mdx)("inlineCode",{parentName:"a"},"ShadowElevation"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#statelistanimator"},(0,t.mdx)("inlineCode",{parentName:"a"},"StateListAnimator"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#statelistanimatorres"},(0,t.mdx)("inlineCode",{parentName:"a"},"StateListAnimatorRes"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#touchexpansions"},(0,t.mdx)("inlineCode",{parentName:"a"},"TouchExpansions"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#touchhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"TouchHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#transitionkey"},(0,t.mdx)("inlineCode",{parentName:"a"},"TransitionKey"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#transitionkeytype"},(0,t.mdx)("inlineCode",{parentName:"a"},"TransitionKeyType"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#unfocusedhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"UnfocusedHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#useheightasbaseline"},(0,t.mdx)("inlineCode",{parentName:"a"},"UseHeightAsBaseline"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#viewtag"},(0,t.mdx)("inlineCode",{parentName:"a"},"ViewTag"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#viewtags"},(0,t.mdx)("inlineCode",{parentName:"a"},"ViewTags"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#visibilitychangedhandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"VisibilityChangedHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#visiblehandler"},(0,t.mdx)("inlineCode",{parentName:"a"},"VisibleHandler"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#visibleheightratio"},(0,t.mdx)("inlineCode",{parentName:"a"},"VisibleHeightRatio"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#visiblewidthratio"},(0,t.mdx)("inlineCode",{parentName:"a"},"VisibleWidthRatio"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#widthpercent"},(0,t.mdx)("inlineCode",{parentName:"a"},"WidthPercent"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#widthpx"},(0,t.mdx)("inlineCode",{parentName:"a"},"WidthPx")))),(0,t.mdx)("h2",{id:"reference"},"Reference"),(0,t.mdx)("h3",{id:"accessibilityrole"},"AccessibilityRole"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"accessibilityroledescription"},"AccessibilityRoleDescription"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"alignself"},"AlignSelf"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"alpha"},"Alpha"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"aspectratio"},"AspectRatio"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"background"},"Background"),(0,t.mdx)("p",null,"Sets the background of the component; pass a\n",(0,t.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/drawable/ComparableDrawable.html"},"ComparableDrawable")," to make\nsubsequent mounting more efficient."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"MyComponent.create(c)\n  .background(new ComparableGradientDrawable())\n")),(0,t.mdx)("p",null,"Use the utility methods to set a background color or use an android resource id."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"Component#backgroundAttr(@AttrRes int)")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"Component#backgroundColor(@ColorInt int)")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"Component#backgroundRes(@DrawableRes int)")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"Component#background(Drawable)")," ",(0,t.mdx)("em",{parentName:"li"},"(deprecated)"))),(0,t.mdx)("h3",{id:"border"},"Border"),(0,t.mdx)("p",null," Sets a border on the component."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"MyComponent.create(c)\n .border(\n   Border.create(c)\n     .color(YogaEdge.LEFT, Color.RED)\n     .color(YogaEdge.TOP, 0xFFFFFF00)\n     .color(YogaEdge.RIGHT, 0xFFFFFFFF)\n     .color(YogaEdge.BOTTOM, 0xFFFF00FF)\n     .widthDip(YogaEdge.ALL, 4)\n     .build()\n )\n")),(0,t.mdx)("p",null," See: ",(0,t.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/yoga/YogaEdge.html"},"YogaEdge"),", ",(0,t.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Border.Builder.html"},"Border")),(0,t.mdx)("h3",{id:"clickhandler"},"ClickHandler"),(0,t.mdx)("p",null,"Sets a click handler on the component."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"MyComponent.create(c)\n  .clickHandler(RootComponent.onSomeEvent(c))\n")),(0,t.mdx)("p",null,"See: ",(0,t.mdx)("a",{parentName:"p",href:"/docs/events-touch-handling"},"Event Handling")," docs for more info."),(0,t.mdx)("h3",{id:"clickable"},"Clickable"),(0,t.mdx)("p",null,"Defines whether this component reacts to click events. The default value is inherited from its\nAndroid View."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"MyComponent.create(c)\n  .clickable(true)\n")),(0,t.mdx)("h3",{id:"clipchildren"},"ClipChildren"),(0,t.mdx)("p",null,"Defines whether a children of given component are limited to draw inside of its bounds or not. The\ndefault value of this property is ",(0,t.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"MyComponent.create(c)\n  .clipChildren(true)\n")),(0,t.mdx)("h3",{id:"cliptooutline"},"ClipToOutline"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"contentdescription"},"ContentDescription"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"dispatchpopulateaccessibilityeventhandler"},"DispatchPopulateAccessibilityEventHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"duplicateparentstate"},"DuplicateParentState"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"enabledstate"},"EnabledState"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"flex"},"Flex"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"flexbasispercent"},"FlexBasisPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"flexbasispx"},"FlexBasisPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"flexgrow"},"FlexGrow"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"flexshrink"},"FlexShrink"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"focuschangehandler"},"FocusChangeHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"focusstate"},"FocusState"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"focusedhandler"},"FocusedHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"foreground"},"Foreground"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"fullimpressionhandler"},"FullImpressionHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"heightpercent"},"HeightPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"heightpx"},"HeightPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"importantforaccessibility"},"ImportantForAccessibility"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"intercepttouchhandler"},"InterceptTouchHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"invisiblehandler"},"InvisibleHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"isreferencebaseline"},"IsReferenceBaseline"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"layoutdirection"},"LayoutDirection"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"longclickhandler"},"LongClickHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"marginautos"},"MarginAutos"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"marginpercents"},"MarginPercents"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"margins"},"Margins"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"maxheightpercent"},"MaxHeightPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"maxheightpx"},"MaxHeightPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"maxwidthpercent"},"MaxWidthPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"maxwidthpx"},"MaxWidthPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"minheightpercent"},"MinHeightPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"minheightpx"},"MinHeightPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"minwidthpercent"},"MinWidthPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"minwidthpx"},"MinWidthPx"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"oninitializeaccessibilityeventhandler"},"OnInitializeAccessibilityEventHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"oninitializeaccessibilitynodeinfohandler"},"OnInitializeAccessibilityNodeInfoHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"onpopulateaccessibilityeventhandler"},"OnPopulateAccessibilityEventHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"onrequestsendaccessibilityeventhandler"},"OnRequestSendAccessibilityEventHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"outlineprovider"},"OutlineProvider"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"paddingpercents"},"PaddingPercents"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"paddings"},"Paddings"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"performaccessibilityactionhandler"},"PerformAccessibilityActionHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"positionpercents"},"PositionPercents"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"positiontype"},"PositionType"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"positions"},"Positions"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"rotation"},"Rotation"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"rotationx"},"RotationX"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"rotationy"},"RotationY"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"scale"},"Scale"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"selectedstate"},"SelectedState"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"sendaccessibilityeventhandler"},"SendAccessibilityEventHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"sendaccessibilityeventuncheckedhandler"},"SendAccessibilityEventUncheckedHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"shadowelevation"},"ShadowElevation"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"statelistanimator"},"StateListAnimator"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"statelistanimatorres"},"StateListAnimatorRes"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"touchexpansions"},"TouchExpansions"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"touchhandler"},"TouchHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"transitionkey"},"TransitionKey"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"transitionkeytype"},"TransitionKeyType"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"unfocusedhandler"},"UnfocusedHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"useheightasbaseline"},"UseHeightAsBaseline"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"viewtag"},"ViewTag"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"viewtags"},"ViewTags"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"visibilitychangedhandler"},"VisibilityChangedHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"visiblehandler"},"VisibleHandler"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"visibleheightratio"},"VisibleHeightRatio"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"visiblewidthratio"},"VisibleWidthRatio"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"widthpercent"},"WidthPercent"),(0,t.mdx)("p",null," {...}"),(0,t.mdx)("h3",{id:"widthpx"},"WidthPx"),(0,t.mdx)("p",null," {...}"))}s.isMDXComponent=!0}}]);