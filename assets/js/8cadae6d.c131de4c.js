"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[8131],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,g=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"chainlit-langchain-prem",title:"Talk to your Data with ChainLit and Langchain",authors:["tiero","filippopedrazzinfp"],tags:["llm","self-hosted","prem","open-source","langchain","chainlit","vicuna-7b","chroma","vector-store"]},o=void 0,l={permalink:"/blog/chainlit-langchain-prem",editUrl:"https://github.com/premAI-io/dev-portal/blog/2023-07-05-chainlit-langchain-qa/index.md",source:"@site/blog/2023-07-05-chainlit-langchain-qa/index.md",title:"Talk to your Data with ChainLit and Langchain",description:"Build a chatbot that talks to your data with Prem using LangChain, Chainlit, Chroma Vector Store and Vicuna 7B model, self-hosted on your MacOS laptop.",date:"2023-07-05T00:00:00.000Z",formattedDate:"July 5, 2023",tags:[{label:"llm",permalink:"/blog/tags/llm"},{label:"self-hosted",permalink:"/blog/tags/self-hosted"},{label:"prem",permalink:"/blog/tags/prem"},{label:"open-source",permalink:"/blog/tags/open-source"},{label:"langchain",permalink:"/blog/tags/langchain"},{label:"chainlit",permalink:"/blog/tags/chainlit"},{label:"vicuna-7b",permalink:"/blog/tags/vicuna-7-b"},{label:"chroma",permalink:"/blog/tags/chroma"},{label:"vector-store",permalink:"/blog/tags/vector-store"}],readingTime:3.54,hasTruncateMarker:!0,authors:[{name:"Marco Argentieri",title:"Bitcoin wizard",url:"https://github.com/tiero",imageURL:"https://github.com/tiero.png",key:"tiero"},{name:"Filippo Pedrazzini",title:"Core contributor @ PremAI",url:"https://github.com/filopedraz",imageURL:"https://github.com/filopedraz.png",key:"filippopedrazzinfp"}],frontMatter:{slug:"chainlit-langchain-prem",title:"Talk to your Data with ChainLit and Langchain",authors:["tiero","filippopedrazzinfp"],tags:["llm","self-hosted","prem","open-source","langchain","chainlit","vicuna-7b","chroma","vector-store"]},nextItem:{title:"Serving Falcon 7B Instruct with FastAPI and Docker",permalink:"/blog/serving-falcon-7b-fastapi-docker"}},c={authorsImageUrls:[void 0,void 0]},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Build a chatbot that talks to your data with ",(0,r.kt)("a",{parentName:"p",href:"https://premai.io"},"Prem")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"LangChain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Chainlit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Chroma")," Vector Store and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vicuna 7B")," model, self-hosted on your MacOS laptop."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ChainLit x Langchain Screenshot",src:a(27025).Z,width:"1100",height:"716"})))}u.isMDXComponent=!0},27025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chainlit-langchain-60bd0afe8bcd5f8f975edbc2bd902087.gif"}}]);