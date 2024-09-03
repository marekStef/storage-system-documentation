"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1534],{34612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(74848),r=t(28453);const s={sidebar_position:1},o="Schemas",i={id:"main-system/data-storage/schemas",title:"Schemas",description:"DataStorage component needs to have access to the database and it registers exactly one schema:",source:"@site/docs/main-system/data-storage/schemas.md",sourceDirName:"main-system/data-storage",slug:"/main-system/data-storage/schemas",permalink:"/storage-system-documentation/docs/main-system/data-storage/schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/data-storage/schemas.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSystemSidebar",previous:{title:"Introduction",permalink:"/storage-system-documentation/docs/main-system/data-storage/introduction"},next:{title:"Events Handling",permalink:"/storage-system-documentation/docs/main-system/data-storage/events-handling"}},d={},c=[{value:"Event Schema",id:"event-schema",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"schemas",children:"Schemas"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DataStorage"})," component needs to have access to the database and it registers exactly one schema:"]}),"\n",(0,a.jsx)(n.h3,{id:"event-schema",children:"Event Schema"}),"\n",(0,a.jsx)(n.p,{children:"As we already mentioned previously, we didn't want to put a lot of constraints on the structure of the event (as a unit of data)."}),"\n",(0,a.jsx)(n.p,{children:"Therefore the only needed fields in the event are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"metadata.source (can be any string) - to know whose event this is"}),"\n",(0,a.jsx)(n.li,{children:"metadata.profile (can be any string) - to know what's the structure of the event"}),"\n",(0,a.jsx)(n.li,{children:"payload (as long as it's an object it can contain anything and is in the 3rd party app's hands)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="EventSchema"',children:"const mongoose = require('mongoose');\r\n\r\nconst EventSchema = new mongoose.Schema({\r\n  metadata: {\r\n    identifier: {\r\n      type: String,\r\n    },\r\n    createdDate: {\r\n      type: Date,\r\n      default: Date.now\r\n    },\r\n    profile: {\r\n        type: String,\r\n        // highlight-start\r\n        required: true\r\n        // highlight-end\r\n    },\r\n    source: {\r\n      type: String,\r\n        // highlight-start\r\n        required: true\r\n        // highlight-end\r\n    },\r\n    acceptedDate: {\r\n      type: Date,\r\n      required: true,\r\n      default: Date.now\r\n    }\r\n  },\r\n  payload: {\r\n    type: Object,\r\n    // highlight-start\r\n    required: true\r\n    // highlight-end\r\n  }\r\n});\r\n\r\nconst Event = mongoose.model('Event', EventSchema);\r\n\r\nmodule.exports = Event;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Event consists of ",(0,a.jsx)(n.code,{children:"metadata"})," and ",(0,a.jsx)(n.code,{children:"payload"}),". Metadata consists of some predefined values such as when the event was created, by whom, which profile (described below) it abides to and so on. Payload is in the given app's hands and can contain basically anything since even binary data can be encoded to text (we are aware this form of saving a binary data is highly inefficient)."]}),"\n",(0,a.jsx)(n.p,{children:"This is what event looks like in the database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="Event"',children:'{\r\n  "_id": { // db specific\r\n    "$oid": "65f873d9b9d71eb79545adc4"\r\n  },\r\n  "metadata": {\r\n    "identifier": "f42c444f-0c09-46c3-af72-50a77c0a5282",\r\n    "createdDate": {\r\n      "$date": "2024-03-18T17:03:21.011Z"\r\n    },\r\n    "profile": "CalendarPro.com_CalendarEventProfile",\r\n    "source": "kalendar",\r\n    "acceptedDate": {\r\n      "$date": "2024-03-18T17:03:21.086Z"\r\n    }\r\n  },\r\n  "payload": {\r\n    "startTime": "2024-03-19T14:10:00.000Z",\r\n    "endTime": "2024-03-19T17:15:00.000Z",\r\n    "title": "ahoj",\r\n    "description": "ako sa mas",\r\n    "color": "#9b2226"\r\n  },\r\n  "__v": 0 // db specific\r\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"Now that you know about this schema and have a thorough understanding of what a unit of data in the system looks like, have a look on the endpoints (very short reading)."})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);