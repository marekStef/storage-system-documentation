"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5199],{5568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_position:5},o="Events Handling",a={id:"main-system/auth-service/events-handling",title:"Events Handling",description:"Even though you probably know that Data Storage component is responsible for handling events, this Auth Service component adds additional layer of security by introducing authentication and authorisation for events handling.",source:"@site/docs/main-system/auth-service/events-handling.md",sourceDirName:"main-system/auth-service",slug:"/main-system/auth-service/events-handling",permalink:"/storageSystemDocs/docs/main-system/auth-service/events-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/auth-service/events-handling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mainSystemSidebar",previous:{title:"Permissions",permalink:"/storageSystemDocs/docs/main-system/auth-service/permissions"},next:{title:"Views Handling",permalink:"/storageSystemDocs/docs/main-system/auth-service/views-handling"}},c={},d=[{value:"Events Uploading",id:"events-uploading",level:2},{value:"Modification of Event",id:"modification-of-event",level:2},{value:"Deletion of Event",id:"deletion-of-event",level:2},{value:"Fetching All Events For Given Access Token",id:"fetching-all-events-for-given-access-token",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"events-handling",children:"Events Handling"}),"\n",(0,s.jsxs)(n.p,{children:["Even though you probably know that ",(0,s.jsx)(n.strong,{children:"Data Storage"})," component is responsible for handling events, this ",(0,s.jsx)(n.strong,{children:"Auth Service"})," component adds additional layer of security by introducing authentication and authorisation for events handling."]}),"\n",(0,s.jsxs)(n.p,{children:["When everything's fine, this component delegates your request to save the events to the ",(0,s.jsx)(n.strong,{children:"Data Storage"})," component."]}),"\n",(0,s.jsxs)(n.p,{children:["A new 3rd app's developer doesn't have to understand the endpoints of ",(0,s.jsx)(n.strong,{children:"Data Storage"})," but it's these components that are of crucial importance for them."]}),"\n",(0,s.jsx)(n.h2,{id:"events-uploading",children:"Events Uploading"}),"\n",(0,s.jsxs)(n.p,{children:["To upload a new set of events, you need to hit this endpoint of auth service: ",(0,s.jsx)(n.strong,{children:"/app/api/uploadNewEvents"})," ",(0,s.jsx)(n.em,{children:"(POST)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Example request body"',children:'{\r\n    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjYwNDc5YTBjMzAyMGY4NzdjMWFiMWQxIiwiYXBwSWQiOiI2NjA0MmU5MGMzMDIwZjg3N2MxYWIxMzkiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjdUMTk6NTU6MTIuMjA5WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMTU2OTMxMiwiZXhwIjoxMTE3ODg0OTMxMn0.QohWLv3Ez2yK4SYsKtFmCSx2bny7y9jhXiZOGfmsEZc",\r\n    "profileCommonForAllEventsBeingUploaded": "application.com/first_profile",\r\n    "events": [\r\n        {\r\n            "metadata": {\r\n                "profile": "application.com/first_profile"\r\n            },\r\n            "payload": {\r\n                "latitude": 50.08804,\r\n                "longitude": 14.42076\r\n            }\r\n            \r\n        }\r\n    ]\r\n    \r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When the app hasn't been approved the permission request, ",(0,s.jsx)(n.code,{children:"403 - Forbidden"})," response is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="403 - Forbidden response"',children:'{\r\n    "message": "Access permission is not active or has been revoked"\r\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["To get more information about what happend, the third party app can query more information about that token using endpoint introduced in ",(0,s.jsx)(n.a,{href:"./permissions",children:"permissions"})]})]}),"\n",(0,s.jsx)(n.p,{children:"When the token is active, this is the response body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="201 - Created response"',children:'{\r\n    "message": "Events were created successfully",\r\n    "events": [\r\n        {\r\n            "metadata": {\r\n                "identifier": "a52034d9-263e-422a-9774-eeb9f01a3abf",\r\n                "profile": "application.com/first_profile",\r\n                "source": "testing",\r\n                "createdDate": "2024-04-02T22:08:28.551Z",\r\n                "acceptedDate": "2024-04-02T22:08:28.551Z"\r\n            },\r\n            "payload": {\r\n                "latitude": 50.08804,\r\n                "longitude": 14.42076\r\n            },\r\n            "_id": "660c81dccba57a70e98c1120",\r\n            "__v": 0\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, ",(0,s.jsx)(n.code,{children:"events"})," field is returned, now containing ",(0,s.jsx)(n.code,{children:"_id"})," as well."]}),"\n",(0,s.jsx)(n.h2,{id:"modification-of-event",children:"Modification of Event"}),"\n",(0,s.jsxs)(n.p,{children:["To modify a particular event, you can use ",(0,s.jsx)(n.strong,{children:"/app/api/modifyEvent"})," ",(0,s.jsx)(n.em,{children:"(PUT)"})," endpoint."]}),"\n",(0,s.jsxs)(n.p,{children:["The request body needs to contain ",(0,s.jsx)(n.code,{children:"accessToken"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title=""',children:'{\r\n    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjYwNDc5YTBjMzAyMGY4NzdjMWFiMWQxIiwiYXBwSWQiOiI2NjA0MmU5MGMzMDIwZjg3N2MxYWIxMzkiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjdUMTk6NTU6MTIuMjA5WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMTU2OTMxMiwiZXhwIjoxMTE3ODg0OTMxMn0.QohWLv3Ez2yK4SYsKtFmCSx2bny7y9jhXiZOGfmsEZc",\r\n    "eventId": "660c81dccba57a70e98c1120",\r\n    "modifiedEvent": {\r\n            "metadata": {\r\n                "profile": "application.com/first_profile"\r\n            },\r\n            "payload": {\r\n                "latitude": 50.0880433333,\r\n                "longitude": 14.42076\r\n            }\r\n            \r\n        }\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That's because when the app wants to modify the event, but uses access token which does not allow modifying a given event, this is returned:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="403 - Forbidden response"',children:'{\r\n    "message": "No modify permission for this event"\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise ",(0,s.jsx)(n.code,{children:"200 - OK"})," response is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="200 - OK respose"',children:'{\r\n    "message": "Event updated successfully.",\r\n    "event": {\r\n        "metadata": {\r\n            "profile": "application.com/first_profile",\r\n            "source": "testing",\r\n            "createdDate": "2024-04-02T22:17:53.515Z",\r\n            "acceptedDate": "2024-04-02T22:17:53.515Z"\r\n        },\r\n        "_id": "660c81dccba57a70e98c1120",\r\n        "payload": {\r\n            "latitude": 50.0880433333,\r\n            "longitude": 14.42076\r\n        },\r\n        "__v": 0\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"deletion-of-event",children:"Deletion of Event"}),"\n",(0,s.jsxs)(n.p,{children:["To completely cover CRUD operations, ",(0,s.jsx)(n.strong,{children:"/app/api/deleteEvent"})," ",(0,s.jsx)(n.em,{children:"(DELETE)"})," endpoint comes to help you."]}),"\n",(0,s.jsx)(n.p,{children:"This is the request body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Request body of the delete event"',children:'{\r\n    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmODVlNmU3MmQzY2I1YTE0OGE5NzFmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhaG9qLmNvbS9maXJzdF9wcm9maWxlIiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjp0cnVlLCJtb2RpZnkiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0xOFQxNTozMTo1OC4xMTVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzEwNzc1OTE4LCJleHAiOjExMTc4MDU1OTE4fQ.YxSUEYNCVRRRT-h7bmKrEULWyXgimd8W9-zFSLINknI",\r\n    "eventId": "65f8682db9d71eb79545adbf"\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Again, ",(0,s.jsx)(n.code,{children:"accessToken"})," is checked to see, whether it has necessary permission to delete such event."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="200 - Ok response"',children:'{\r\n    "message": "Event deleted successfully."\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or the token hasn't been activated ( permission approved ):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="403 - Forbidden response"',children:'{\r\n    "message": "Access permission is not active or has been revoked"\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or the event is not found:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="404 - Event Not Found"',children:'{\r\n    "message": "Event not found."\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fetching-all-events-for-given-access-token",children:"Fetching All Events For Given Access Token"}),"\n",(0,s.jsxs)(n.p,{children:["To fetch all events for a given access token, you can use the following auth service endpoint: ",(0,s.jsx)(n.strong,{children:"/app/api/getAllEventsForGivenAccessToken?accessToken=[token]"})," ",(0,s.jsx)(n.em,{children:"(GET)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For this example request ",(0,s.jsx)(n.code,{children:"{{AUTH_SERVER_URL}}/app/api/getAllEventsForGivenAccessToken?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjYwNDc5YTBjMzAyMGY4NzdjMWFiMWQxIiwiYXBwSWQiOiI2NjA0MmU5MGMzMDIwZjg3N2MxYWIxMzkiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjdUMTk6NTU6MTIuMjA5WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMTU2OTMxMiwiZXhwIjoxMTE3ODg0OTMxMn0.QohWLv3Ez2yK4SYsKtFmCSx2bny7y9jhXiZOGfmsEZc"})]}),"\n",(0,s.jsx)(n.p,{children:"we get this response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="200 - OK - Fetching events response"',children:'{\r\n    "events": [\r\n        {\r\n            "metadata": {\r\n                "identifier": "5a76865a-ba90-4483-9b2c-c6f9962dbadd",\r\n                "profile": "application.com/first_profile",\r\n                "source": "testing",\r\n                "createdDate": "2024-04-02T22:26:40.220Z",\r\n                "acceptedDate": "2024-04-02T22:26:40.220Z"\r\n            },\r\n            "_id": "660c8620cba57a70e98c1127",\r\n            "payload": {\r\n                "latitude": 50.08804,\r\n                "longitude": 14.42076\r\n            },\r\n            "__v": 0\r\n        }\r\n    ],\r\n    "count": 1\r\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you wish to avoid overburdening the network with an excessively large data flow of events, you can create a ",(0,s.jsx)(n.code,{children:"View"})," which the app will access through endpoint and this ",(0,s.jsx)(n.code,{children:"View"})," will basically be your custom code running in the system and returning data it wants to return. To read an intro to views, head ",(0,s.jsx)(n.a,{href:"/docs/intro/#",children:"here"})," and to look at ",(0,s.jsx)(n.code,{children:"View"}),"s in more detail, head over ",(0,s.jsx)(n.a,{href:"../view-manager/introduction",children:"here"})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);