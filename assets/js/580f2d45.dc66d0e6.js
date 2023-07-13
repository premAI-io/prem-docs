"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[6293],{71378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),r=a(58219),m=a(9487),l=a(41429),n=a(5397),o=a(4667),p=a(9472),c=(a(62316),a(85162));const d={id:"stats-by-service-v-1-stats-service-id-get",title:"Stats By Service",description:"Stats By Service",sidebar_label:"Stats By Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"stats_by_service_v1_stats__service_id__get",parameters:[{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ContainerStatsResponse",required:["id","cpu_percentage","memory_usage","memory_limit","memory_percentage","storage_percentage","storage_usage","storage_limit"],type:"object",properties:{id:{title:"Id",type:"string"},cpu_percentage:{title:"Cpu Percentage",type:"number"},memory_usage:{title:"Memory Usage",type:"number"},memory_limit:{title:"Memory Limit",type:"number"},memory_percentage:{title:"Memory Percentage",type:"number"},storage_percentage:{title:"Storage Percentage",type:"number"},storage_usage:{title:"Storage Usage",type:"number"},storage_limit:{title:"Storage Limit",type:"number"}}}}}},400:{description:"Failed to get stats or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Stats By Service",method:"get",path:"/v1/stats/{service_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Stats By Service",description:{type:"text/plain"},url:{path:["v1","stats",":service_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"service_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},y=void 0,g={unversionedId:"prem-daemon/api/stats-by-service-v-1-stats-service-id-get",id:"prem-daemon/api/stats-by-service-v-1-stats-service-id-get",title:"Stats By Service",description:"Stats By Service",source:"@site/docs/prem-daemon/api/stats-by-service-v-1-stats-service-id-get.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/stats-by-service-v-1-stats-service-id-get",permalink:"/docs/prem-daemon/api/stats-by-service-v-1-stats-service-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stats-by-service-v-1-stats-service-id-get",title:"Stats By Service",description:"Stats By Service",sidebar_label:"Stats By Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"stats_by_service_v1_stats__service_id__get",parameters:[{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ContainerStatsResponse",required:["id","cpu_percentage","memory_usage","memory_limit","memory_percentage","storage_percentage","storage_usage","storage_limit"],type:"object",properties:{id:{title:"Id",type:"string"},cpu_percentage:{title:"Cpu Percentage",type:"number"},memory_usage:{title:"Memory Usage",type:"number"},memory_limit:{title:"Memory Limit",type:"number"},memory_percentage:{title:"Memory Percentage",type:"number"},storage_percentage:{title:"Storage Percentage",type:"number"},storage_usage:{title:"Storage Usage",type:"number"},storage_limit:{title:"Storage Limit",type:"number"}}}}}},400:{description:"Failed to get stats or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Stats By Service",method:"get",path:"/v1/stats/{service_id}",info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Stats By Service",description:{type:"text/plain"},url:{path:["v1","stats",":service_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"service_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Stats All",permalink:"/docs/prem-daemon/api/stats-all-v-1-stats-all-get"},next:{title:"Stats",permalink:"/docs/prem-daemon/api/stats-v-1-stats-get"}},u={},v=[{value:"Stats By Service",id:"stats-by-service",level:2}],b={toc:v},k="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"stats-by-service"},"Stats By Service"),(0,s.kt)("p",null,"Stats By Service"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Service Id",type:"string"},name:"service_id",in:"path"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"cpu_percentage",required:!0,schemaName:"Cpu Percentage",qualifierMessage:void 0,schema:{title:"Cpu Percentage",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"memory_usage",required:!0,schemaName:"Memory Usage",qualifierMessage:void 0,schema:{title:"Memory Usage",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"memory_limit",required:!0,schemaName:"Memory Limit",qualifierMessage:void 0,schema:{title:"Memory Limit",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"memory_percentage",required:!0,schemaName:"Memory Percentage",qualifierMessage:void 0,schema:{title:"Memory Percentage",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"storage_percentage",required:!0,schemaName:"Storage Percentage",qualifierMessage:void 0,schema:{title:"Storage Percentage",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"storage_usage",required:!0,schemaName:"Storage Usage",qualifierMessage:void 0,schema:{title:"Storage Usage",type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"storage_limit",required:!0,schemaName:"Storage Limit",qualifierMessage:void 0,schema:{title:"Storage Limit",type:"number"},mdxType:"SchemaItem"})))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "id": "string",\n  "cpu_percentage": 0,\n  "memory_usage": 0,\n  "memory_limit": 0,\n  "memory_percentage": 0,\n  "storage_percentage": 0,\n  "storage_usage": 0,\n  "storage_limit": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Failed to get stats or service not found.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"string"))),(0,s.kt)(c.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"integer"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);