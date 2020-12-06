(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=(n(0),n(191));n(183),n(184),n(192),n(193),n(194),n(195);const r={title:"The importance of AbilitySpecial values",author:"Noya",steamId:"76561198046984233",date:"12.12.2014"},o={id:"abilities/the-importance-of-abilityspecial-values",isDocsHomePage:!1,title:"The importance of AbilitySpecial values",description:'To specify numeric values, you can put in a number or you can use %name formatting to grab values out of the "AbilitySpecial" block of the ability. The advantage to using the %name syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips.',source:"@site/_articles/abilities/the-importance-of-abilityspecial-values.md",permalink:"/abilities/the-importance-of-abilityspecial-values",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/the-importance-of-abilityspecial-values.md",sidebar:"tutorials",previous:{title:"Item KeyValues",permalink:"/abilities/item-keyvalues"},next:{title:"Passing AbilitySpecial values into Lua",permalink:"/abilities/passing-abilityspecial-values-into-lua"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To specify numeric values, you can put in a number or you can use ",Object(i.b)("inlineCode",{parentName:"em"},"%name"),' formatting to grab values out of the "AbilitySpecial" block of the ability. The advantage to using the ',Object(i.b)("inlineCode",{parentName:"em"},"%name")," syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips.")),Object(i.b)("p",null,"When coding abilities or items, ",Object(i.b)("strong",{parentName:"p"},"do not")," fall into the trap of replacing the use of AbilitySpecial variables with a constant (i.e. writing ",Object(i.b)("inlineCode",{parentName:"p"},'"Duration" "12"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE"\t"-30"')," or doing similar assignations in lua scripts), thinking it will only be used once. "),Object(i.b)("p",null,"There's ",Object(i.b)("strong",{parentName:"p"},"2 problems")," with doing this"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tooltips are hard"),Object(i.b)("p",{parentName:"li"},"If you don't use AbilitySpecial for each variable, when you get to making the tooltips, you'll find pretty much impossible to make quality dota-styled strings because your spell description needs to have direct copies of the values you've put in the ability. To make this worse, if you ever make a change to an static number in your datadriven ability, you will also need to update the addon_english.txt ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Consistency between Lua & Key Values"),Object(i.b)("p",{parentName:"li"},"Changing a key value won't only affect the datadriven but also the scripts and its easy to make a change and forget to extend this change to the .lua file. Doing proper references to the Specials also eliminates this problem."))),Object(i.b)("br",null),"**TL;DR**: Use as many AbilitySpecial values as possible, then modifying/balancing your abilities can be done just by changing these variables and it will extend to the rest of the game mode.",Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Related"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddota.com/forums/discussion/17/how-to-get-abilityspecial-values-into-lua"}),"How to get AbilitySpecial values into Lua")))}s.isMDXComponent=!0},183:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(190),o=n(187),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:f,setTabGroupChoices:m}=Object(r.a)(),[d,y]=Object(a.useState)(l);if(null!=b){const e=f[b];null!=e&&e!==d&&p.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=b&&m(b,e)},g=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},184:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";var a=n(0),i=n(34);t.a=function(){return Object(a.useContext)(i.a)}},186:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},187:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(185),i=n(186);function r(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:r="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(i.a)(e))return e;const l=r+e.replace(/^\//,"");return n?o+l:l}},189:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},190:function(e,t,n){"use strict";var a=n(0),i=n(189);t.a=function(){return Object(a.useContext)(i.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),i=n(184),r=n(183),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in c),{language:t,element:e}});return l.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:c[e]}))},n.map(({language:e,element:t})=>l.a.createElement(i.a,{key:e,value:e},t)))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(188),i=n(0),r=n.n(i);function o({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);