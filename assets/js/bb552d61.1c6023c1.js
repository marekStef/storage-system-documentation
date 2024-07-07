"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2620],{40257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(74848),s=t(28453);const i={sidebar_position:3},r="Code Execution",c={id:"main-system/python-execution-service/code-execution",title:"Code Execution",description:"For code exectuion, Python Execution Service has the following endpoint:",source:"@site/docs/main-system/python-execution-service/code-execution.md",sourceDirName:"main-system/python-execution-service",slug:"/main-system/python-execution-service/code-execution",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/code-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/python-execution-service/code-execution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSystemSidebar",previous:{title:"Code Registration",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/code-registration"},next:{title:"Setup",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/setup"}},d={},a=[{value:"<strong>/executeSourceCode/</strong> <em>(POST)</em>",id:"executesourcecode-post",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"code-execution",children:"Code Execution"}),"\n",(0,o.jsxs)(n.p,{children:["For code exectuion, ",(0,o.jsx)(n.code,{children:"Python Execution Service"})," has the following endpoint:"]}),"\n",(0,o.jsxs)(n.h3,{id:"executesourcecode-post",children:[(0,o.jsxs)(n.strong,{children:["/executeSourceCode/",":sourceCodeId"]})," ",(0,o.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sourceCodeId"})," is the id obtained when registering a source code"]}),"\n",(0,o.jsx)(n.li,{children:"body needs to contain the following:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="Example body of the executeSourceCode request"',children:'{\r\n    "parametersForMainEntry": {"marek": "hey"}\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"parametersForMainEntry"})," must be object and this requirement is being proactively checked. ",(0,o.jsx)(n.code,{children:"parametersForMainEntry"})," is the only object which will be passed to the entry function of the source code."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To read more about which entry function it is and how the source code needs to look, head over ",(0,o.jsx)(n.a,{href:"./requirements-on-source-code",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"There are multiple kinds of responses:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"source code successfully executed"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="200 OK Response"',children:'{\r\n    "message": \'Code execution result\', \r\n    "result": // anything your entry function returns\r\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"syntax error in the source code"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="400 Bad Request"',children:"{ \r\n    \"message\": 'There is a syntax error. Code could not be loaded'\r\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"source code does not exist"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="400 Bad Request"',children:"{ \r\n    message: 'Given source code does not exist' \r\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);