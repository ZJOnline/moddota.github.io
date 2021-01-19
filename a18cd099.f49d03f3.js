(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(2),o=(n(0),n(193));n(185),n(186),n(194),n(195),n(196),n(197);const r={title:"Combining KV files using #base",author:"Perry",steamId:"76561198046986723",date:"06.04.2016"},a={id:"tools/combining-kv-files-using-base",isDocsHomePage:!1,title:"Combining KV files using #base",description:"Having one kv file containing every unit or ability definition as is default in the mod interface can become very annoying very quickly. Splitting up this one file into several smaller KV files makes it easier to keep an overview and manage your files. Usually people would use modkit for this, but:",source:"@site/_articles/tools/combining-kv-files-using-base.md",permalink:"/tools/combining-kv-files-using-base",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/combining-kv-files-using-base.md",sidebar:"tutorials",previous:{title:"Setting Up Your Addon With GitHub",permalink:"/tools/setting-up-your-addon-with-github"},next:{title:"Contribute",permalink:"/contribute"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Credits for pointing out this is part of the KV spec:",id:"credits-for-pointing-out-this-is-part-of-the-kv-spec",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Having one kv file containing every unit or ability definition as is default in the mod interface can become very annoying very quickly. Splitting up this one file into several smaller KV files makes it easier to keep an overview and manage your files. Usually people would use modkit for this, but:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/stephenfournier/Dota-2-ModKit"}),"ModKit")," is not needed to combine KV files")),Object(o.b)("p",null,"Thanks to some detective work done in #steamdb and some testing on my part, we discovered dota KV has a working #base directive, which tells the engine to combine another KV file with the current one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This method works for:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Unit/Ability definition files (like npc_units_custom.txt or npc_abilities_custom.txt)."),Object(o.b)("li",{parentName:"ul"},"Custom key value files loaded into lua with LoadKeyValues."),Object(o.b)("li",{parentName:"ul"},"Localisation files (addon_english.txt)")),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"Assume we start with one file at path ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/npc/npc_abilities_custom.txt")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'"DOTAAbilities"\n{\n    "Ability1"\n    {\n        "SomeProperty1"    "1"\n        "SomeProperty2"    "2"\n    }\n\n    "Ability2"\n    {\n        "SomeProperty1"    "1"\n        "SomeProperty2"    "2"\n    }\n}\n')),Object(o.b)("p",null,"Now let's say we want to split this up into two files, we can create another file ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/npc/abilities_2.txt"),". This file has to have a root element just like the other files, we can just copy DOTAAbilities. Also copy the content to be separated so this is the result:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'"DOTAAbilities"\n{\n    "Ability2"\n    {\n        "SomeProperty1"    "1"\n        "SomeProperty2"    "2"\n    }\n}\n')),Object(o.b)("p",null,"Now edit the main file to include this new abilities_2.txt file by adding ",Object(o.b)("inlineCode",{parentName:"p"},'#base "[relativePath]"'),", this results in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'#base "abilities_2.txt"\n"DOTAAbilities"\n{\n    "Ability1"\n    {\n        "SomeProperty1"    "1"\n        "SomeProperty2"    "2"\n    }\n}\n')),Object(o.b)("p",null,"When loading this KV file, the engine will now automatically add the contents of abilities_2.txt to npc_abilities_custom.txt by combining the two root objects in both files. This means that the name of the root object does not matter, so instead of ",Object(o.b)("inlineCode",{parentName:"p"},'"DOTAAbilities"')," you could have ",Object(o.b)("inlineCode",{parentName:"p"},'"MYOTHERFILE"'),", or even just empty string ",Object(o.b)("inlineCode",{parentName:"p"},'""'),". You should not have identical keys in both root objects, but if you do then the ones defined later (think of #base happening before the rest of the file) will override already defined ones."),Object(o.b)("p",null,"This also supports directories. Keep in mind all paths are relative. Say I create ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/npc/customAbilities/ability1.txt"),", I can include this from ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/npc/npc_abilities_custom.txt")," using ",Object(o.b)("inlineCode",{parentName:"p"},'#base "customAbilities/ability1.txt"'),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PS:")," Other extensions are also allowed, you could name your included files *.kv"),Object(o.b)("h2",{id:"credits-for-pointing-out-this-is-part-of-the-kv-spec"},"Credits for pointing out this is part of the KV spec:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"XMPPwocky"),Object(o.b)("li",{parentName:"ul"},"xPaw"),Object(o.b)("li",{parentName:"ul"},"Netshroud")))}c.isMDXComponent=!0},185:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(192),a=n(189),l=n(90),s=n.n(l);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[m,h]=Object(i.useState)(l);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&h(e)}const y=e=>{h(e),null!=b&&f(b,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},186:function(e,t,n){"use strict";var i=n(0),o=n.n(i);t.a=function(e){return o.a.createElement("div",null,e.children)}},187:function(e,t,n){"use strict";var i=n(0),o=n(34);t.a=function(){return Object(i.useContext)(o.a)}},188:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))},189:function(e,t,n){"use strict";function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(187),o=n(188);function r(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:r="/",url:a}={}}=Object(i.a)();if(!e)return e;if(t)return r+e;if(!Object(o.a)(e))return e;const l=r+e.replace(/^\//,"");return n?a+l:l}},191:function(e,t,n){"use strict";var i=n(0);const o=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},192:function(e,t,n){"use strict";var i=n(0),o=n(191);t.a=function(){return Object(i.useContext)(o.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(f,l(l({ref:t},c),{},{components:n})):o.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),o=n.n(i);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),o=n.n(i);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(3),o=n(186),r=n(185),a=n(0),l=n.n(a);const s={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t,titles:n}){Object(i.a)("string"==typeof t||void 0===t);const a=l.a.Children.toArray(e).map((e,t)=>{var i,o;const r=e.props.children.props.className.replace(/language-/,"");return{language:r,languageName:null!==(i=null!==(o=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==o?o:s[r])&&void 0!==i?i:r,element:e}});return l.a.createElement(r.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:a[0].language,values:a.map(({language:e,languageName:t})=>({value:e,label:t}))},a.map(({language:e,element:t})=>l.a.createElement(o.a,{key:e,value:e},t)))}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(190),o=n(0),r=n.n(o);function a({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(i.a)(e),type:"video/mp4"}))}}}]);