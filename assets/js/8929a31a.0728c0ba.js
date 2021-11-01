(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1915],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,b=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2866:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=r(4034),n=r(9973),o=(r(7294),r(3905)),l=["components"],i={id:"scoreboard",title:"Scoreboard",sidebar_label:"Scoreboard"},p=void 0,d={unversionedId:"thebridge/placeholders/scoreboard",id:"thebridge/placeholders/scoreboard",isDocsHomePage:!1,title:"Scoreboard",description:"---",source:"@site/docs/thebridge/placeholders/scoreboard.md",sourceDirName:"thebridge/placeholders",slug:"/thebridge/placeholders/scoreboard",permalink:"/thebridge/placeholders/scoreboard",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/thebridge/placeholders/scoreboard.md",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614471297,formattedLastUpdatedAt:"2/28/2021",frontMatter:{id:"scoreboard",title:"Scoreboard",sidebar_label:"Scoreboard"},sidebar:"thebridge",previous:{title:"PlaceholderAPI",permalink:"/thebridge/placeholders/placeholderapi"},next:{title:"DeveloperApi",permalink:"/thebridge/development/api"}},c=[],s={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Find your variable for the ingame scoreboard"),(0,o.kt)("p",null,"These are the ",(0,o.kt)("strong",{parentName:"p"},"internal")," placeholders for TheBridge. They are included with the plugin, so you do not have to download them."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%MIN","_","PLAYERS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Minimum players size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%PLAYERS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Size of all players in arena")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%PLAYERS","_","LEFT%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Size of alive players in arena")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%TIME%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Current arena timer ","(","ex. 10 seconds before start",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%FORMATTED","_","TIME%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns time formatted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%ARENA","_","NAME%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns arena name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%ARENA","_","ID%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns arena id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASES%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns all bases formatted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASE","_","COLOR%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns players base color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASE%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns base name ","(","color name",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASE","_","FORMATTED%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns base name colored like you want ","(","See Bases.Color",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASE","_","PLAYERS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns players on team")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%BASE","_","YOU%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns Scoreboard.Bases.Inside if you are on that base")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%FORMATTED","_","POINTS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"It multiplies and set colors for the points ","(","See Scoreboard.Mode",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%MODE","_","VALUE%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns the value player needs to win")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%MODE%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns the mode that player plays")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%RESET","_","BLOCKS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns after how many rounds the blocks got reset")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%ONLYIFRESETBLOCKS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Hides the line if resetblocks is disabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%LOCAL","_","KILLS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns kills at that round")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%LOCAL","_","SCORED","_","POINTS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns mode points at that round")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"%LOCAL","_","DEATHS%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Returns deaths at that round")))),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/wiki/placeholderapi-placeholders/"},(0,o.kt)("strong",{parentName:"a"},"placeholders")," "),"from ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/placeholderapi.6245/"},(0,o.kt)("strong",{parentName:"a"},"PlaceholderAPI")),"."))}m.isMDXComponent=!0}}]);