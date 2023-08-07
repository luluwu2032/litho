"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{95239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(87462),n=a(67294),o=a(86010),i=a(1119),l=a(39960),c=a(52263),m=a(44996);const s={heroBanner:"heroBanner_UJJx",heroInner:"heroInner_VWeJ",heroImage:"heroImage_ba0c",heroTitle:"heroTitle_ohkl",buttons:"buttons_pzbO",button:"button_hqdx",ytVideoIframe:"ytVideoIframe_naZ6",featureContent:"featureContent_WbGR",featureText:"featureText_jiyO",darkFeature:"darkFeature_LoNW",lightFeature:"lightFeature_kxoL",featureBody:"featureBody_lNq2",featureTitle:"featureTitle_bNEx",featureImage:"featureImage_yA8i",banner:"banner_wvwv"};var u=[{title:n.createElement(n.Fragment,null,"Declarative"),alt:"Declarative",imageUrl:"images/home-code.png",description:n.createElement(n.Fragment,null,"Litho uses a declarative API to define UI components. You simply describe the layout for your UI based on a set of immutable inputs and the framework takes care of the rest. With code generation, Litho can perform optimisations for your UI under the hood, while keeping your code simple and easy to maintain."),dark:!1},{title:n.createElement(n.Fragment,null,"Asynchronous layout"),alt:"Asynchronous layout",imageUrl:"images/home-async.png",description:n.createElement(n.Fragment,null,"Litho can measure and layout your UI ahead of time without blocking the UI thread. By decoupling its layout system from the traditional Android View system, Litho can drop the UI thread constraint imposed by Android."),dark:!0},{title:n.createElement(n.Fragment,null,"Flatter view hierarchies"),alt:"Flatter view hierarchies",imageUrl:"images/home-flat-not-flat.png",description:n.createElement(n.Fragment,null,"Litho uses ",n.createElement("a",{href:"https://yogalayout.com/docs"},"Yoga")," for layout and automatically reduces the number of ViewGroups that your UI contains. This, in addition to Litho's text optimizations, allows for much smaller view hierarchies and improves both memory and scroll performance."),dark:!1},{title:n.createElement(n.Fragment,null,"Fine-grained recycling"),alt:"Fine-grained recycling",imageUrl:"images/home-incremental-mount.png",description:n.createElement(n.Fragment,null,"With Litho, each UI item such as text, image, or video is recycled individually. As soon as an item goes off screen, it can be reused anywhere in the UI and pieced together with other items to create new UI elements. Such recycling reduces the need of having multiple view types and improves memory usage and scroll performance."),dark:!0}];function d(e){var t=e.imageUrl,a=e.alt,r=e.title,i=e.description,l=e.dark,c=(0,m.default)(t);return n.createElement("section",{className:(0,o.default)(l&&s.darkFeature,!l&&s.lightFeature)},n.createElement("div",{className:s.featureContent},n.createElement("img",{className:s.featureImage,src:c,alt:a}),n.createElement("div",{className:s.featureText},n.createElement("h3",{className:s.featureTitle},r),n.createElement("p",{className:s.featureBody},i))))}function h(){return n.createElement("div",{className:"container text--center margin-bottom--xl margin-top--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h2",null,"Check it out in the intro video"),n.createElement("div",{className:s.ytVideo},n.createElement("iframe",{className:s.ytVideoIframe,src:"https://www.youtube.com/embed/RFI-fuiMRK4",title:"Explain Like I'm 5: Litho",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))}const f=function(){var e=(0,c.default)().siteConfig,t=void 0===e?{}:e;return n.createElement(i.Z,{description:"Home page of Litho: A declarative UI framework for Android"},n.createElement("div",{className:s.heroBanner},n.createElement("div",{className:s.heroInner},n.createElement("img",{className:s.heroImage,src:(0,m.default)("images/logo.svg")}),n.createElement("div",{className:s.heroTitle},"Litho: "+t.tagline),n.createElement("div",{className:s.buttons},n.createElement(l.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/mainconcepts/components-basics")},"GET STARTED"),n.createElement(l.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/intro")},"LEARN MORE"),n.createElement(l.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/tutorial/overview")},"TUTORIAL")))),n.createElement("main",null,n.createElement("div",null,n.createElement("div",{className:s.banner},"Support Ukraine \ud83c\uddfa\ud83c\udde6"," ",n.createElement(l.default,{to:"https://opensource.facebook.com/support-ukraine"},"Help Provide Humanitarian Aid to Ukraine"),".")),n.createElement(h,null),u&&u.length>0&&u.map((function(e,t){return n.createElement(d,(0,r.Z)({key:t},e))}))))}}}]);