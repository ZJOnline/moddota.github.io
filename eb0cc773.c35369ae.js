(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=(n(0),n(191));n(183),n(184),n(192),n(193),n(194),n(195);const r={title:"AbilityDuration tooltips",author:"Noya",steamId:"76561198046984233",date:"15.12.2014"},o={id:"abilities/abilityduration-tooltips",isDocsHomePage:!1,title:"AbilityDuration tooltips",description:'TL;DR: AbilityDuration is a fairly useless keyvalue because whoever coded it forgot to make an automatic tooltip like with AbilityDamage. Use a "duration" AbilitySpecial and connect it with lua instead.',source:"@site/_articles/abilities/abilityduration-tooltips.md",permalink:"/abilities/abilityduration-tooltips",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/abilityduration-tooltips.md",sidebar:"tutorials",previous:{title:"Passing AbilitySpecial values into Lua",permalink:"/abilities/passing-abilityspecial-values-into-lua"},next:{title:"Simple Custom Ability",permalink:"/abilities/simple-custom-ability"}},l=[],c={rightToc:l};function u({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TL;DR:")," AbilityDuration is a fairly useless keyvalue because whoever coded it forgot to make an automatic tooltip like with ",Object(i.b)("inlineCode",{parentName:"p"},"AbilityDamage"),'. Use a "duration" AbilitySpecial and connect it with lua instead.'),Object(i.b)("p",null,"Imagine you want to have an ability apply a modifier for some seconds, duration changing with levels."),Object(i.b)("p",null,"You can fall for the trap and do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"AbilityDuration" "3 2 2"\n')),Object(i.b)("p",null,'And then have your modifier refer to %AbilityDuration in the "Duration" modifier key. All fine for now.'),Object(i.b)("p",null,"But when when you want to indicate that your ability lasts for said duration, this AbilityDuration doesn't generate a ",Object(i.b)("strong",{parentName:"p"},'"DURATION:"')," tooltip by itself, so you have 3 options:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Option 1."),' Write "Last 3 seconds at level 1 and then 2 at level 2 and 3" in the _Description. '),Object(i.b)("p",null,"This is bad for the reasons explained before."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Option 2*."),' Have a "duration" AbilitySpecial in addition to the "AbilityDuration" and keep both values syncronized. '),Object(i.b)("p",null,"Suboptimal but decent solution, as it allows you to use ability:GetAbilityDuration() which takes takes its value from AbilityDuration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Option 3.")," Remove AbilityDuration, only keep the AbilitySpecial. Best way as far as I can tell."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"AbilitySpecial"\n{\n    "01"\n    {\n        "var_type" "FIELD_INTEGER"\n        "duration" "3 2 2"\n    }\n}\n')),Object(i.b)("p",null,"And then do this in a Lua Script if needed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function HowToTooltip(event)\n   local ability = event.ability\n   local duration = ability:GetLevelSpecialValueFor("duration", (ability:GetLevel() - 1))\n   local damage = ability:GetAbilityDamage()\nend\n')),Object(i.b)("p",null,"Has the same results and works for every scenario."))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(190),o=n(187),l=n(90),c=n.n(l);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[m,y]=Object(a.useState)(l);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=b&&f(b,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},184:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";var a=n(0),i=n(34);t.a=function(){return Object(a.useContext)(i.a)}},186:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},187:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(185),i=n(186);function r(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:r="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(i.a)(e))return e;const l=r+e.replace(/^\//,"");return n?o+l:l}},189:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},190:function(e,t,n){"use strict";var a=n(0),i=n(189);t.a=function(){return Object(a.useContext)(i.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(f,l(l({ref:t},u),{},{components:n})):i.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),i=n(184),r=n(183),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function u({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in c),{language:t,element:e}});return l.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:c[e]}))},n.map(({language:e,element:t})=>l.a.createElement(i.a,{key:e,value:e},t)))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(188),i=n(0),r=n.n(i);function o({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);