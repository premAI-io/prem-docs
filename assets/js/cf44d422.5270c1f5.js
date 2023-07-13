"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[96],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="APIs",c={unversionedId:"prem-app/usage/chat/api",id:"prem-app/usage/chat/api",title:"APIs",description:"Each service exposes certain APIs. If one of the Prem services is running in your infrastructure, you can check the swagger at http/docs. For what concerns the Chat services, we expose same endpoints as Chat OpenAI Models do with some small differences based on the service that you are running.",source:"@site/docs/prem-app/usage/chat/api.md",sourceDirName:"prem-app/usage/chat",slug:"/prem-app/usage/chat/api",permalink:"/docs/prem-app/usage/chat/api",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/blob/main/docs/prem-app/usage/chat/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Chat",permalink:"/docs/category/chat"},next:{title:"LangChain",permalink:"/docs/prem-app/usage/chat/langchain"}},s={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apis"},"APIs"),(0,a.kt)("p",null,"Each service exposes certain APIs. If one of the Prem services is running in your infrastructure, you can check the swagger at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://{localhost|ip}:{port}/docs"),". For what concerns the Chat services, we expose same endpoints as Chat OpenAI Models do with some small differences based on the service that you are running."))}m.isMDXComponent=!0}}]);