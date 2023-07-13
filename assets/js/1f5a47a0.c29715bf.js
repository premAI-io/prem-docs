"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[713],{34549:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var s=i(87462),a=(i(67294),i(3905)),r=i(58219),l=i(9487),p=i(41429),o=i(5397),n=i(4667),m=i(9472),c=(i(62316),i(85162));const d={id:"stop-service-v-1-stop-service-service-id-get",title:"Stop Service",description:"Stop Service",sidebar_label:"Stop Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"stop_service_v1_stop_service__service_id__get",parameters:[{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Stop Service",method:"get",path:"/v1/stop-service/{service_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Stop Service",description:{type:"text/plain"},url:{path:["v1","stop-service",":service_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"service_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},y=void 0,v={unversionedId:"prem-daemon/api/stop-service-v-1-stop-service-service-id-get",id:"prem-daemon/api/stop-service-v-1-stop-service-service-id-get",title:"Stop Service",description:"Stop Service",source:"@site/docs/prem-daemon/api/stop-service-v-1-stop-service-service-id-get.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/stop-service-v-1-stop-service-service-id-get",permalink:"/docs/prem-daemon/api/stop-service-v-1-stop-service-service-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stop-service-v-1-stop-service-service-id-get",title:"Stop Service",description:"Stop Service",sidebar_label:"Stop Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"stop_service_v1_stop_service__service_id__get",parameters:[{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Stop Service",method:"get",path:"/v1/stop-service/{service_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Stop Service",description:{type:"text/plain"},url:{path:["v1","stop-service",":service_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"service_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Stop All Services",permalink:"/docs/prem-daemon/api/stop-all-services-v-1-stop-all-services-get"},next:{title:"System Prune",permalink:"/docs/prem-daemon/api/system-prune-v-1-system-prune-get"}},u={},g=[{value:"Stop Service",id:"stop-service",level:2}],k={toc:g},f="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,s.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"stop-service"},"Stop Service"),(0,a.kt)("p",null,"Stop Service"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SchemaTabs"},(0,a.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,a.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Failed to stop container or service not found.")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SchemaTabs"},(0,a.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,a.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.default,{label:"422",value:"422",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SchemaTabs"},(0,a.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"anyOf"),(0,a.kt)(m.default,{mdxType:"SchemaTabs"},(0,a.kt)(c.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,a.kt)("p",null,"string"))),(0,a.kt)(c.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,a.kt)("p",null,"integer"))))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(n.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);