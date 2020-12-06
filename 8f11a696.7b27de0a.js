(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),o=(n(0),n(191)),a=(n(183),n(184),n(192));n(193),n(194),n(195);const r={title:"Extracting and Compiling VTEX files",author:"HMFD",steamId:"76561198053730418",date:"21.01.2015"},l={id:"assets/extracting-and-compiling-vtex-files",isDocsHomePage:!1,title:"Extracting and Compiling VTEX files",description:"Hello everybody. Recently, I've been looking through the .VTEX files used by most of the sprites and particle effects in-game, but I couldn't find any extensive documentation about it. Therefore, I decided to write this little guide in case anybody else finds it useful.",source:"@site/_articles/assets/extracting-and-compiling-vtex-files.md",permalink:"/assets/extracting-and-compiling-vtex-files",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/extracting-and-compiling-vtex-files.md",sidebar:"tutorials",previous:{title:"Custom Sounds",permalink:"/assets/custom-sounds"},next:{title:"Custom Minimap Icons",permalink:"/assets/custom-minimap-icons"}},c=[{value:"Extracting from VTEX",id:"extracting-from-vtex",children:[]},{value:"Compiling to VTEX",id:"compiling-to-vtex",children:[]},{value:"Download",id:"download",children:[]},{value:"Bonus GIF",id:"bonus-gif",children:[]}],s={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hello everybody. Recently, I've been looking through the .VTEX files used by most of the sprites and particle effects in-game, but I couldn't find any extensive documentation about it. Therefore, I decided to write this little guide in case anybody else finds it useful."),Object(o.b)("h3",{id:"extracting-from-vtex"},"Extracting from VTEX"),Object(o.b)("p",null,"1) Extracting images from compiled VTEX files (.VTEX_C) is actually quite simple, but we need those files first. If you haven't already extracted them, you can find them in pak01_dir.vpk, which is located in your dota_ugc\\game\\dota_imported folder. Use a tool like GCFScape to open and extract the files that you need."),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/xsQnBg9.png",alt:"img"}))),Object(o.b)("p",null,"2) Next, go to your dota_ugc\\game\\bin\\win64 directory (the tools aren't present in the win32 directory, for some reason). Type the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"resourceinfo.exe -i <your vtex_c file> -debug tga -mip\n")),Object(o.b)("p",null,"This extracts the various mip maps and stores them as individual TGA images. If everything goes well, you should get something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/HrXehTo.png",alt:"img"}))),Object(o.b)("p",null,'Additionally, you should also have one or more TGA images in your win64 directory, depending on how many mip levels the texture has. Open the one with "_mip0", as this is the base (original) image.'),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/nKUPQQG.png",alt:"img"}))),Object(o.b)("p",null,"3) There is no step 3. Congratulations. You have successfully extracted the underlying TGA image from a compiled VTEX file. Easy, right?"),Object(o.b)("h3",{id:"compiling-to-vtex"},"Compiling to VTEX"),Object(o.b)("p",null,"1) Compiling to VTEX is also quite easy. First, put all of the TGA images you plan on using in the same directory. If you are only compiling one image, then this is not a problem. For this example though, I will be changing several of the icons in the original msg_01.vtex file."),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/j4T6CW8.png",alt:"img"}))),Object(o.b)("p",null,"2) Next, we need to create a VTEX file. VTEX files are ASCII data files which describe the properties of the texture, the inputs, and the outputs. If you created your mod from an empty template, you should find some examples of VTEX files in the dota_ugc\\content\\dota_addons","\\","(modname)\\materials\\particle directory. Open one of them up and it should look something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/FkcOxgM.png",alt:"img"}))),Object(o.b)("p",null,'Simply replace the filename in the highlighted line ("m_fileName", under "CDmeInputTexture") with the name of your TGA image and you\'re set.'),Object(o.b)("p",null,"2b) If you're creating a texture with sequences however, you must create a .MKS file first. Like VTEX files, MKS files are ASCII data files, although these files describe how and which sprites to render in-game. Refer to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Animated_Particles"}),"Valve Developer Wiki")," for more information on MKS files and animated particles in general. Note that you do NOT need to compile the MKS files with mksheet.exe first."),Object(o.b)("p",null,"Once you have the .mks file, replace the filename as mentioned above with the name of the MKS file instead."),Object(o.b)("p",null,"3) Go back to dota_ugc\\game\\bin\\win64, and type the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"resourcecompiler -i <your vtex file>\n")),Object(o.b)("p",null,"If everything goes well, you should see something like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/qQyXGI9.png",alt:"img"}))),Object(o.b)("p",null,"You should also see a .VTEX_C file somewhere in your dota_ugc\\game\\dota_addons","\\","(modname)\\materials folder, which you can now freely use all throughout your mod."),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/xCQSs0C.png",alt:"img"}))),Object(o.b)("h3",{id:"download"},"Download"),Object(o.b)("p",null,"If you want to use the example .VTEX_C file created by this tutorial to use in your mod, you can download it ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.mediafire.com/download/fgce2192os392on/iw_msg_01.zip"}),"here"),". For comparison:"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/AQT6Foz.png",alt:"img"}))," ",Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/JpsmJxS.png",alt:"img"}))),Object(o.b)("h3",{id:"bonus-gif"},"Bonus GIF"),Object(o.b)(a.a,{id:"AmpleNaiveKiwi",mdxType:"Gfycat"}))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(190),r=n(187),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[b,h]=Object(i.useState)(l);if(null!=m){const e=d[m];null!=e&&e!==b&&p.some(t=>t.value===e)&&h(e)}const g=e=>{h(e),null!=m&&f(m,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},184:function(e,t,n){"use strict";var i=n(0),o=n.n(i);t.a=function(e){return o.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";var i=n(0),o=n(34);t.a=function(){return Object(i.useContext)(o.a)}},186:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))},187:function(e,t,n){"use strict";function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(185),o=n(186);function a(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:a="/",url:r}={}}=Object(i.a)();if(!e)return e;if(t)return a+e;if(!Object(o.a)(e))return e;const l=a+e.replace(/^\//,"");return n?r+l:l}},189:function(e,t,n){"use strict";var i=n(0);const o=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},190:function(e,t,n){"use strict";var i=n(0),o=n(189);t.a=function(){return Object(i.useContext)(o.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(r,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),o=n.n(i);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),o=n.n(i);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(3),o=n(184),a=n(183),r=n(0),l=n.n(r);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(i.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(i.a)(t in c),{language:t,element:e}});return l.a.createElement(a.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:c[e]}))},n.map(({language:e,element:t})=>l.a.createElement(o.a,{key:e,value:e},t)))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(188),o=n(0),a=n.n(o);function r({path:e,controls:t=!1}){return a.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.a.createElement("source",{src:Object(i.a)(e),type:"video/mp4"}))}}}]);