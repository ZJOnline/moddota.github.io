(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(193));n(185),n(186),n(194),n(195),n(196),n(197);const i={title:"Passing AbilitySpecial values into Lua",author:"Noya",steamId:"76561198046984233",date:"12.12.2014"},o={id:"abilities/passing-abilityspecial-values-into-lua",isDocsHomePage:!1,title:"Passing AbilitySpecial values into Lua",description:'Given this "AbilitySpecial" block in the ability:',source:"@site/_articles/abilities/passing-abilityspecial-values-into-lua.md",permalink:"/abilities/passing-abilityspecial-values-into-lua",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/passing-abilityspecial-values-into-lua.md",sidebar:"tutorials",previous:{title:"The importance of AbilitySpecial values",permalink:"/abilities/the-importance-of-abilityspecial-values"},next:{title:"AbilityDuration tooltips",permalink:"/abilities/abilityduration-tooltips"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Given this "AbilitySpecial" block in the ability:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"AbilitySpecial"\n{\n    "01"\n    {\n        "var_type"  "FIELD_INTEGER"\n        "radius"    "300"\n    }\n    "02"\n    {\n        "var_type"  "FIELD_INTEGER"\n        "mana_per_second"   "5 10 15 20"\n    }\n}\n')),Object(r.b)("p",null,"There are 2 functions to connect these with ua. ",Object(r.b)("inlineCode",{parentName:"p"},"GetSpecialValueFor")," and ",Object(r.b)("inlineCode",{parentName:"p"},"GetLevelSpecialValueFor"),". Both are applied over an ability."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'local event.ability = ability\nlocal radius = ability:GetSpecialValueFor("radius") \nlocal mana_per_second = ability:GetLevelSpecialValueFor("mana_per_second", (ability:GetLevel() - 1))\n')),Object(r.b)("p",null,"The first one can be used ",Object(r.b)("strong",{parentName:"p"},"only for single level values"),". If you use ",Object(r.b)("inlineCode",{parentName:"p"},"GetSpecialValueFor")," (no ",Object(r.b)("inlineCode",{parentName:"p"},"Level"),') on "mana_per_second" it will only get the value for the first level.'),Object(r.b)("p",null,"The second one is the most common and should be ",Object(r.b)("strong",{parentName:"p"},"used every time")," to avoid mistakes. "),Object(r.b)("p",null,"Note the use of ",Object(r.b)("inlineCode",{parentName:"p"},"(ability:GetLevel() - 1)")," as the second parameter (which tells the script which level to take). This is needed because ability levels are 1-indexed but ",Object(r.b)("inlineCode",{parentName:"p"},"GetLevelSpecialValueFor")," is 0-indexed."))}s.isMDXComponent=!0},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(192),o=n(189),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[m,v]=Object(a.useState)(l);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&v(e)}const y=e=>{v(e),null!=b&&f(b,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},187:function(e,t,n){"use strict";var a=n(0),r=n(34);t.a=function(){return Object(a.useContext)(r.a)}},188:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},189:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(187),r=n(188);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(r.a)(e))return e;const l=i+e.replace(/^\//,"");return n?o+l:l}},191:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},192:function(e,t,n){"use strict";var a=n(0),r=n(191);t.a=function(){return Object(a.useContext)(r.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,l(l({ref:t},s),{},{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,aspectRatio:t=4/3,hd:n="0"}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),r=n(186),i=n(185),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){Object(a.a)("string"==typeof t||void 0===t);const o=l.a.Children.toArray(e).map((e,t)=>{var a,r;const i=e.props.children.props.className.replace(/language-/,"");return{language:i,languageName:null!==(a=null!==(r=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==r?r:c[i])&&void 0!==a?a:i,element:e}});return l.a.createElement(i.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:o[0].language,values:o.map(({language:e,languageName:t})=>({value:e,label:t}))},o.map(({language:e,element:t})=>l.a.createElement(r.a,{key:e,value:e},t)))}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(190),r=n(0),i=n.n(r);function o({path:e,controls:t=!1}){return i.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},i.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);