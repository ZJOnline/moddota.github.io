(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=(n(0),n(191)),r=(n(183),n(184),n(192));n(193),n(194),n(195);const s={title:"Invisibility Ability Example",author:"Noya",steamId:"76561198046984233",date:"19.12.2014"},o={id:"abilities/datadriven/invisibility-ability-example",isDocsHomePage:!1,title:"Invisibility Ability Example",description:"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects.",source:"@site/_articles/abilities/datadriven/invisibility-ability-example.md",permalink:"/abilities/datadriven/invisibility-ability-example",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/invisibility-ability-example.md",sidebar:"tutorials",previous:{title:"Channeling Animations",permalink:"/abilities/datadriven/channeling-animations"},next:{title:"Illusion Ability Example",permalink:"/abilities/datadriven/illusion-ability-example"}},l=[],c={rightToc:l};function u({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects."),Object(i.b)(r.a,{id:"MajesticDimpledIrishwaterspaniel",mdxType:"Gfycat"}),Object(i.b)("p",null,"(Some effects might not be from this example, as this video shows the Assassin hero, find it in the repository later on)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"KV:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' "assassin_walk_the_shadows"\n {\n  // General\n  //--------------------------------------------------------------------------------------------------\n  "BaseClass" "ability_datadriven"\n  "AbilityTextureName"  "assassin_skill1"\n  "MaxLevel" "7"\n  "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"\n  \n  // Stats\n  //--------------------------------------------------------------------------------------------------\n  "AbilityCastPoint"    "0"\n  "AbilityCooldown" "5"\n  "AbilityManaCost" "6 8 11 14 18 22 26 30"\n     \n     // Damage.\n     //-----------------------------------------------------------------------------------------------\n     "AbilityDamage" "25 150 300 600 1100 2000 3300 5000"\n     "AbilityUnitDamageType"    "DAMAGE_TYPE_PHYSICAL"\n\n     // Special\n     "AbilitySpecial"\n      {\n      "01"\n       {\n    "var_type"  "FIELD_INTEGER"\n    "duration"  "25"\n       }\n      "02"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_movespeed"    "35"\n       }\n      "03"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_damage"   "150 300 525 840 1260 1900 3000 4500"\n       }\n      "04"\n       {\n       "var_type"   "FIELD_FLOAT"\n       "stun_duration"  "3.25"\n       }\n      }\n\n     "precache"\n     {\n      "particle"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n      "soundfile"   "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts"\n     }\n\n     //----------------------------------------------------------------------------------------------\n  "OnSpellStart"\n  {\n   "FireSound"\n   {\n    "EffectName"    "Hero_TemplarAssassin.Meld"\n    "Target" "CASTER"\n   }\n   "RunScript"\n   {\n    "ScriptFile"    "abilities/assassin.lua"\n    "Function"  "walk_the_shadows_cast"\n   }\n  }\n  "Modifiers"\n   {\n   "assassin_walk_the_shadows_buff"\n    {\n    "IsBuff"    "1"\n    "Duration" "%duration"\n    "EffectName"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n    "EffectAttachType"  "follow_origin"\n    "OnCreated"\n    {\n     "FireEffect"\n     {\n      "EffectName"  "particles/units/heroes/hero_bounty_hunter/bounty_hunter_windwalk_smoke.vpcf"\n      "EffectAttachType" "follow_origin"\n      "Target" "CASTER"\n     }\n    }\n    "Properties"\n     {\n     "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%bonus_movespeed"\n     }\n    "States"\n     {\n     "MODIFIER_STATE_INVISIBLE" "MODIFIER_STATE_VALUE_ENABLED"\n     "MODIFIER_STATE_NO_UNIT_COLLISION" "MODIFIER_STATE_VALUE_ENABLED"\n     }\n    "OnAttackLanded"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_attack"\n      }\n     "Stun"\n      {\n      "Target"  "TARGET"\n      "Duration"    "%stun_duration"\n      }\n     }\n    "OnAbilityExecuted"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_interrupt"\n      }\n     }\n    }\n   }\n  \n }\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Lua Scripts:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function walk_the_shadows_cast( event )\n  event.ability:ApplyDataDrivenModifier(event.caster, event.caster, "assassin_walk_the_shadows_buff", nil)\n  event.caster:AddNewModifier(event.caster, event.ability, "modifier_invisible", {duration = 25}) \n  \nend\n\nfunction walk_the_shadows_interrupt( event )\n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n event.caster:RemoveModifierByName("modifier_invisible")\nend\n\nfunction walk_the_shadows_attack( event )\n \n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n \n ApplyDamage({ victim = event.target, attacker = event.caster, damage = event.ability:GetAbilityDamage(), damage_type = event.ability:GetAbilityDamageType(), ability = event.ability   })\n\nend\n')),Object(i.b)("p",null,'The line that takes care of applying the "transparency" is AddNewModifier with modifier_invisible.'),Object(i.b)("p",null,"Credits to my buddy ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/igo95862"}),"igo")," that made this ability for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Aleteh/TBR3"}),"The Black Road project")," which is still WIP but there are some interesting stuff we made already."))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(190),s=n(187),o=n(90),l=n.n(o);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:p,groupId:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(r.a)(),[m,y]=Object(a.useState)(o);if(null!=d){const e=f[d];null!=e&&e!==m&&p.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=d&&b(d,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},184:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";var a=n(0),i=n(34);t.a=function(){return Object(a.useContext)(i.a)}},186:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},187:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(185),i=n(186);function r(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:r="/",url:s}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(i.a)(e))return e;const o=r+e.replace(/^\//,"");return n?s+o:o}},189:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},190:function(e,t,n){"use strict";var a=n(0),i=n(189);t.a=function(){return Object(a.useContext)(i.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?i.a.createElement(b,o(o({ref:t},c),{},{components:n})):i.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(3),i=n(184),r=n(183),s=n(0),o=n.n(s);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=o.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in l),{language:t,element:e}});return o.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:l[e]}))},n.map(({language:e,element:t})=>o.a.createElement(i.a,{key:e,value:e},t)))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(188),i=n(0),r=n.n(i);function s({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);