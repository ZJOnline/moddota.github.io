(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(2),i=(a(0),a(191)),r=(a(183),a(184),a(192));a(193),a(194),a(195);const l={title:"MDL to VMDL Conversion",author:"Noya",steamId:"76561198046984233",date:"28.05.2015"},o={id:"assets/models/mdl-to-vmdl-conversion",isDocsHomePage:!1,title:"MDL to VMDL Conversion",description:"This guide will go through the process of making a .vmdl file (Source 2 Model) from a .mdl file and other model-related files from Source 1. The Wyvern Hatchling courier will be used as example, but the same process applies to heroes, buildings and any Valve Dota model.",source:"@site/_articles/assets/models/mdl-to-vmdl-conversion.md",permalink:"/assets/models/mdl-to-vmdl-conversion",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/mdl-to-vmdl-conversion.md",sidebar:"tutorials",previous:{title:"Importing custom models",permalink:"/assets/models/importing-custom-models"},next:{title:"Adding Hitbox to Models without a Bone",permalink:"/assets/models/adding-hitbox-to-models-without-a-bone"}},s=[{value:"Required Tools",id:"required-tools",children:[]},{value:"1. Acquire the <strong>model</strong> and <strong>material</strong> files from the main game VPK (<em>pak01_dir.vpk</em>) using GCFScape.",id:"1-acquire-the-model-and-material-files-from-the-main-game-vpk-pak01_dirvpk-using-gcfscape",children:[]},{value:"2. Use Crowbar to decompile the model files into meshes (.smd)",id:"2-use-crowbar-to-decompile-the-model-files-into-meshes-smd",children:[]},{value:"3. Use VTFEdit to generate color TGAs out of the VTF files acquired in step 1.",id:"3-use-vtfedit-to-generate-color-tgas-out-of-the-vtf-files-acquired-in-step-1",children:[]},{value:"4. Move the generated files to your addons <strong>/content/</strong> folder.",id:"4-move-the-generated-files-to-your-addons-content-folder",children:[]},{value:"5. Generate a .vmat file from the TGA files.",id:"5-generate-a-vmat-file-from-the-tga-files",children:[]},{value:"6. Make a New VMDL from the Mesh file (.smd)",id:"6-make-a-new-vmdl-from-the-mesh-file-smd",children:[]},{value:"7. Add a Material Remap for the missing textures, using the .vmat file from step 5.",id:"7-add-a-material-remap-for-the-missing-textures-using-the-vmat-file-from-step-5",children:[]},{value:"8. Add the Animations on the _anims folder and make Activities for them.",id:"8-add-the-animations-on-the-_anims-folder-and-make-activities-for-them",children:[]},{value:"9. Add the Hitboxes",id:"9-add-the-hitboxes",children:[]}],c={rightToc:s};function m({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will go through the process of making a ",Object(i.b)("strong",{parentName:"p"},".vmdl file")," (Source 2 Model) from a ",Object(i.b)("strong",{parentName:"p"},".mdl file")," and other model-related files from Source 1. The Wyvern Hatchling courier will be used as example, but the same process applies to heroes, buildings and any Valve Dota model."),Object(i.b)(r.a,{id:"JauntyQuickArcticwolf",mdxType:"Gfycat"}),Object(i.b)("h3",{id:"required-tools"},"Required Tools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.valvesoftware.com/wiki/GCFScape"}),"GCFScape")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://steamcommunity.com/groups/CrowbarTool/discussions/0/617328415069203029/"}),"Crowbar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.valvesoftware.com/wiki/VTFEdit"}),"VTFEdit")),Object(i.b)("li",{parentName:"ul"},"Workshop Tools (Material and Model Editor)")),Object(i.b)("h3",{id:"1-acquire-the-model-and-material-files-from-the-main-game-vpk-pak01_dirvpk-using-gcfscape"},"1. Acquire the ",Object(i.b)("strong",{parentName:"h3"},"model")," and ",Object(i.b)("strong",{parentName:"h3"},"material")," files from the main game VPK (",Object(i.b)("em",{parentName:"h3"},"pak01_dir.vpk"),") using GCFScape."),Object(i.b)("p",null,"The following file types are required:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},".mdl"),Object(i.b)("li",{parentName:"ul"},".vvd"),Object(i.b)("li",{parentName:"ul"},".dx90.vtx"),Object(i.b)("li",{parentName:"ul"},".vtf")),Object(i.b)("p",null,"Model files will be in a subfolder of the ",Object(i.b)("em",{parentName:"p"},"/models/")," folder:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3ayn/10871a9310.png",alt:"img"}))),Object(i.b)("p",null,"Right-click extract into a folder of your choice."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aCO/4887dee9a8.png",alt:"img"}))),Object(i.b)("p",null,"Color Material files are located in the  the ",Object(i.b)("em",{parentName:"p"},"materials/models/")," folder. In this example this courier has 3 associated color files, one for each skin, so we'll get "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aCw/5df098fb34.png",alt:"img"}))),Object(i.b)("p",null,"Finally we should have these:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aF1/ac40c1028e.png",alt:"img"}))),Object(i.b)("h3",{id:"2-use-crowbar-to-decompile-the-model-files-into-meshes-smd"},"2. Use Crowbar to decompile the model files into meshes (.smd)"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aHy/2c37903006.png",alt:"img"}))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aIq/aa87bc8d72.png",alt:"img"}))),Object(i.b)("p",null,"Result on the output folder:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3byq/f3640f6f4b.png",alt:"img"}))),Object(i.b)("h3",{id:"3-use-vtfedit-to-generate-color-tgas-out-of-the-vtf-files-acquired-in-step-1"},"3. Use VTFEdit to generate color TGAs out of the VTF files acquired in step 1."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aJa/775179ec38.jpg",alt:"img"}))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3aKg/33590b10c1.jpg",alt:"img"}))),Object(i.b)("p",null,"Do File-> Export."),Object(i.b)("p",null,"Result (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.irfanview.com/"}),"IrfanView")," is an oldschool image viewer that can open TGAs just fine):"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3bEp/1176075e01.png",alt:"img"}))),Object(i.b)("h3",{id:"4-move-the-generated-files-to-your-addons-content-folder"},"4. Move the generated files to your addons ",Object(i.b)("strong",{parentName:"h3"},"/content/")," folder."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Move the decompiled files generated in step 2 to ",Object(i.b)("strong",{parentName:"li"},"/content/models/"))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3cT8/8962d8e943.png",alt:"img"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Move the TGA files generated in step 3 to ",Object(i.b)("strong",{parentName:"li"},"/content/materials/"))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3cQg/76e8c16b46.png",alt:"img"}))),Object(i.b)("p",null,"Create new folders on each or just drop the files over the respective directories. Make sure to use the content folder (not the /game/). ",Object(i.b)("br",null),"The location of the reference mesh in /content/models/ will determine the location where the .vmdl file will be saved."),Object(i.b)("h3",{id:"5-generate-a-vmat-file-from-the-tga-files"},"5. Generate a .vmat file from the TGA files."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the Material Editor"),Object(i.b)("li",{parentName:"ul"},"File -> New Material"),Object(i.b)("li",{parentName:"ul"},"Without doing anything yet, ",Object(i.b)("strong",{parentName:"li"},"Save")," the empty material with the name of the TGA you want to make a .vmat for. ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://puu.sh/i3d02/b647383364.png",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"Browse and find the TGA to use ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://puu.sh/i3d8I/b8d0e0b25d.png",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"The file should be visible by default with the _color. extension ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/Bbu4VtP.jpg",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"Save the final material. ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/Jbw6kyq.jpg",alt:"img"})))),Object(i.b)("h3",{id:"6-make-a-new-vmdl-from-the-mesh-file-smd"},"6. Make a New VMDL from the Mesh file (.smd)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the Model Editor"),Object(i.b)("li",{parentName:"ul"},"New VMDL from Mesh File (Ctrl+M) ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://puu.sh/i3gPC/eb6efe93f2.jpg",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"Select the reference .smd file generated in step 2. ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/Q7VH7Nq.png",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"If everything went well you should get a red error mesh: ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/MQmf1IM.jpg",alt:"img"})))),Object(i.b)("h3",{id:"7-add-a-material-remap-for-the-missing-textures-using-the-vmat-file-from-step-5"},"7. Add a Material Remap for the missing textures, using the .vmat file from step 5."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"On the menus, Model -> Add Material Remap ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/NgZbK7n.png",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"Select the Material Remap List and collapse the properties on the Property Editor ",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://i.imgur.com/oRNgV71.png",alt:"img"}))),Object(i.b)("li",{parentName:"ul"},"Search Material, select on from the drop down list. These are missing materials which have to be remaped to the the .vmat made earlier."),Object(i.b)("li",{parentName:"ul"},"Ctrl+S to save the model, now the model comes together with the texture to take shape:")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/o22c9Iy.jpg",alt:"img"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IF the model shows as ",Object(i.b)("strong",{parentName:"li"},"Error"),", something went wrong. Make sure to delete the auto-compiled models and materials of the same name on the /game/ folders, which are now corrupted. Make sure everything is using the proper names and directories, sometimes the Model/Material editor feel like not working and doing Volvo things.")),Object(i.b)("h3",{id:"8-add-the-animations-on-the-_anims-folder-and-make-activities-for-them"},"8. Add the Animations on the _anims folder and make Activities for them."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/5BvFhPg.png",alt:"img"}))),Object(i.b)("p",null,"Select all of them."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/GPPJld3.png",alt:"img"}))),Object(i.b)("p",null,"The Animations will now preview when you click over them, the model will move, but for game to use the animations it needs an Activity (the ACT_DOTA_name strings)."),Object(i.b)("p",null,"On the Sequences window (Do Tools-> View Sequences if it doesn't show up), make sure ",Object(i.b)("strong",{parentName:"p"},"Activity")," is selected. It will show an empty list between brackets []"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3xPr/4ac46797fe.png",alt:"img"}))),Object(i.b)("p",null,"Now, select each animation you want to have a activity for."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3yr7/447456fe3a.png",alt:"img"}))),Object(i.b)("p",null,"On the Property Editor, there is a an Activities element which will have 0 items by default. Click on the ",Object(i.b)("strong",{parentName:"p"},"+")," to add one."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3yyc/2bde52de31.png",alt:"img"}))),Object(i.b)("p",null,"Add a Name to it, try to use the ACT_DOTA_name that better adjusts to the activity description"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3yxi/2cbd4d5b16.png",alt:"img"}))),Object(i.b)("p",null,"Finally, we have usable animations:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3yyc/2bde52de31.png",alt:"img"}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This is also useful to be able to have access to some of the ACT_DOTA_ACTIVITY+",Object(i.b)("strong",{parentName:"p"},"string")," activities that some of the Taunt and Alternative animations use which currently can't be used for abilities and other purposes (as it just ignores the ",Object(i.b)("strong",{parentName:"p"},"+string")," part). ",Object(i.b)("br",null),'Knowing this, it\'s possible to assign some unused activity string like "ACT_DOTA_MINI_TAUNT" and force its usage trough the ',Object(i.b)("inlineCode",{parentName:"p"},"OverrideAnimation")," KV."),Object(i.b)("h3",{id:"9-add-the-hitboxes"},"9. Add the Hitboxes"),Object(i.b)("p",null,"Go to Model->Hitboxes->Auto Populate and accept the list of all bones."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3yki/3624cba10a.png",alt:"img"}))),Object(i.b)("p",null,"If you enable Display-> Hitboxes and Hitbox Names you should see something like these:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://puu.sh/i3ymK/0c24d9b35c.png",alt:"img"}))),Object(i.b)("hr",null),Object(i.b)("p",null,"Final result is the finished model with all its animations (hopefully):"),Object(i.b)(r.a,{id:"FirmEthicalHylaeosaurus",mdxType:"Gfycat"}),Object(i.b)("hr",null))}m.isMDXComponent=!0},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(190),l=a(187),o=a(90),s=a.n(o);const c=37,m=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:u,groupId:b}=e,{tabGroupChoices:p,setTabGroupChoices:d}=Object(r.a)(),[h,f]=Object(n.useState)(o);if(null!=b){const e=p[b];null!=e&&e!==h&&u.some(t=>t.value===e)&&f(e)}const g=e=>{f(e),null!=b&&d(b,e)},O=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},184:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}},185:function(e,t,a){"use strict";var n=a(0),i=a(34);t.a=function(){return Object(n.useContext)(i.a)}},186:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},187:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(185),i=a(186);function r(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:r="/",url:l}={}}=Object(n.a)();if(!e)return e;if(t)return r+e;if(!Object(i.a)(e))return e;const o=r+e.replace(/^\//,"");return a?l+o:o}},189:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},190:function(e,t,a){"use strict";var n=a(0),i=a(189);t.a=function(){return Object(n.useContext)(i.a)}},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,d=u["".concat(l,".").concat(p)]||u[p]||b[p]||r;return a?i.a.createElement(d,o(o({ref:t},c),{},{components:a})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);function r({id:e,aspectRatio:t=4/3,hd:a="0"}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${a}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);function r({id:e,playlistId:t,aspectRatio:a=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},i.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(3),i=a(184),r=a(183),l=a(0),o=a.n(l);const s={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(n.a)("string"==typeof t||null===t);const a=o.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(n.a)(t in s),{language:t,element:e}});return o.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:a[0].language,values:a.map(({language:e})=>({value:e,label:s[e]}))},a.map(({language:e,element:t})=>o.a.createElement(i.a,{key:e,value:e},t)))}},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(188),i=a(0),r=a.n(i);function l({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(n.a)(e),type:"video/mp4"}))}}}]);