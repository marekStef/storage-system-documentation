"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1430],{9279:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(4848),i=s(8453);const o={sidebar_position:2},r="Architecture of the storage backend system",a={id:"main-system/introduction/architecture-of-the-storage-backend-system",title:"Architecture of the storage backend system",description:"We can see the architecture of the main storage backend system.",source:"@site/docs/main-system/introduction/architecture-of-the-storage-backend-system.md",sourceDirName:"main-system/introduction",slug:"/main-system/introduction/architecture-of-the-storage-backend-system",permalink:"/storageSystemDocs/docs/main-system/introduction/architecture-of-the-storage-backend-system",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/introduction/architecture-of-the-storage-backend-system.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSystemSidebar",previous:{title:"Parts of the project",permalink:"/storageSystemDocs/docs/main-system/introduction/parts-of-the-project"},next:{title:"Data Storage",permalink:"/storageSystemDocs/docs/category/data-storage"}},c={},d=[{value:"Auth Service",id:"auth-service",level:3},{value:"Data Storage",id:"data-storage",level:3},{value:"View Manager",id:"view-manager",level:3},{value:"Execution Services",id:"execution-services",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture-of-the-storage-backend-system",children:"Architecture of the storage backend system"}),"\n",(0,n.jsx)(t.p,{children:"We can see the architecture of the main storage backend system."}),"\n",(0,n.jsx)(t.p,{children:"There are multiple running components, each having a different set of responsibilities. We won't talk in-depth about them here but the sole purpose of this section is to give you a broad idea of the system."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture",src:s(7004).A+"",width:"1615",height:"1052"})}),"\n",(0,n.jsx)(t.h3,{id:"auth-service",children:"Auth Service"}),"\n",(0,n.jsxs)(t.p,{children:["As you can see in the picture abpve, most of the communication between outside world and the storage system goes through the ",(0,n.jsx)(t.code,{children:"Auth Service"}),". That's because the ",(0,n.jsx)(t.code,{children:"Auth Service"})," is the component responsible of authenticating individual 3rd party apps and authorising them to process only data they are allowed to."]}),"\n",(0,n.jsx)(t.p,{children:"The whole storage system also needs to be controlled and managed by someone - by a main user - admin. Therefore the auth storage prevents the standard 3rd party apps from accessing admin routes."}),"\n",(0,n.jsx)(t.h3,{id:"data-storage",children:"Data Storage"}),"\n",(0,n.jsx)(t.p,{children:"This component is the main component for persistent storage of events within our system architecture. It is designed to facilitate the most fundamental operations related to event management, such as storing, manipulating, and deleting events, without any regard for their individual meaning, importance, or structural differences."}),"\n",(0,n.jsx)(t.p,{children:"It was designed for flexibility and modularity, providing a seamless way for being pretty easily swapped as long as the interface is kept the same in terms of the endpoints the component exposes. We are currently using MongoDB as the main database for storing events. We think it suites this project well as the database is object oriented. This database system offers a blend of efficiency and scalability that is well-suited to our system's needs."}),"\n",(0,n.jsx)(t.p,{children:"MongoDB's ability to store events in their native format eliminates the need for complex serialization processes, thereby simplifying data storage and retrieval operations."}),"\n",(0,n.jsx)(t.p,{children:"This component is not limited to MongoDB alone and could basically utilise any other form of database technology. Smart databases which create indexes dynamically based on the query statistics. These smart databases can optimize data access and retrieval processes, significantly improving system performance and responsiveness, especially as the number of events stored has the potential to rise rapidly."}),"\n",(0,n.jsx)(t.h3,{id:"view-manager",children:"View Manager"}),"\n",(0,n.jsxs)(t.p,{children:["View Manager is a component responsible for handling ",(0,n.jsx)(t.strong,{children:"View Templates"})," and ",(0,n.jsx)(t.strong,{children:"View Instances"}),". We will talk more about it later (read the whole ",(0,n.jsx)(t.strong,{children:"View Manager"})," section) but for now it's sufficient to know what they are from the ",(0,n.jsx)(t.a,{href:"./architecture-of-the-storage-backend-system",children:"Aspects of system and vocabulary"}),". This component is able to save the templates ( by delegating the actual source code to the particular execution service ). So it's not the ",(0,n.jsx)(t.strong,{children:"View Manager"})," that saves the code. This way it's more flexible and open to different handlings of different source codes based on the programming language and technology used. This also allows for the execution services to be implemented using various technologies based on the code they will be executing."]}),"\n",(0,n.jsxs)(t.p,{children:["It's crucial to emphasize that executing third-party source code poses significant risks and requires the utmost caution. This project is not about being able to execute a 3rd party source code securely. As a result, applications are not permitted to directly register the ",(0,n.jsx)(t.code,{children:"View Template"}),"'s source code on their own. Instead, they may instruct the user towards downloading the source code from the locations they point to but it's ultimately the user - admin who needs to take a cautious action and register the source code through admin endpoint only. As of now, it's ",(0,n.jsx)(t.strong,{children:"Control Centre"})," frontend component who has the privillege to do that among other things (for in-depth tour of ",(0,n.jsx)(t.strong,{children:"Control Centre"})," click ",(0,n.jsx)(t.a,{href:"../control-centre/introduction",children:"here"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"execution-services",children:"Execution Services"}),"\n",(0,n.jsxs)(t.p,{children:["We have provided two execution services for our project, namely ",(0,n.jsx)(t.strong,{children:"Javascript Execution Service"})," and ",(0,n.jsx)(t.strong,{children:"Python Execution Service"}),". However, the architecture is designed to accommodate additional execution services as needed. All that needs to be changed is ",(0,n.jsx)(t.code,{children:"src/constants/viewsRelated.js"})," code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="src/constants/viewsRelated.js"',children:"const allowedRuntimes = [\r\n    'javascript',\r\n    'python'\r\n]\r\n\r\nconst runtimeUrlMapping = {\r\n    javascript: process.env.JAVASCRIPT_EXECUTION_SERVICE_URI,\r\n    python: process.env.PYTHON_EXECUTION_SERVICE_URI\r\n};\r\n\r\nconst getExecutionServiceUrlBasedOnSelectedRuntime = runtime => {\r\n    return runtimeUrlMapping[runtime] || null;\r\n}\r\n\r\n// rest of the file\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To integrate a new service, simply extend the ",(0,n.jsx)(t.code,{children:"allowedRuntimes"})," array and the ",(0,n.jsx)(t.code,{children:"runtimeUrlMapping"})," mapping object with the new runtime's identifier and its corresponding service URI."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"At this point, you should possess a comprehensive understanding of the backend architecture, enabling you to begin delving into specific components of the system individually. Looking forward to our next interaction discussing this project!"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7004:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/architecture-1d841b633cc0e175111d1029d42daebd.svg"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);