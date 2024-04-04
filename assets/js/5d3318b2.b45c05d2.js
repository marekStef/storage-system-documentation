"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2033],{9941:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=n(4848),r=n(8453);const t={sidebar_position:4},o="Permissions",a={id:"main-system/auth-service/permissions",title:"Permissions",description:"Before continuing, your app needs to have profiles sorted out. In other words, if it needs to work with a completely new type of events, it first needs to notify the system of that new type of event. If the app just wants to process some existing events, you already should know, you don't need to do anything.",source:"@site/docs/main-system/auth-service/permissions.md",sourceDirName:"main-system/auth-service",slug:"/main-system/auth-service/permissions",permalink:"/storageSystemDocs/docs/main-system/auth-service/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/auth-service/permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSystemSidebar",previous:{title:"Profile Registration",permalink:"/storageSystemDocs/docs/main-system/auth-service/profle-registration"},next:{title:"Events Handling",permalink:"/storageSystemDocs/docs/main-system/auth-service/events-handling"}},p={},c=[{value:"Requesting New Permission <em>(application part)</em>",id:"requesting-new-permission-application-part",level:2},{value:"Checking Permission Status",id:"checking-permission-status",level:2},{value:"Getting Unapproved Permissions Requests <em>(admin part)</em>",id:"getting-unapproved-permissions-requests-admin-part",level:2},{value:"Getting Unapproved Permissions Requests For Given App <em>(admin part)</em>",id:"getting-unapproved-permissions-requests-for-given-app-admin-part",level:2},{value:"Approving Permission Request <em>(admin part)</em>",id:"approving-permission-request-admin-part",level:2},{value:"Revokig Permission Request <em>(admin part)</em>",id:"revokig-permission-request-admin-part",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsx)(s.p,{children:"Before continuing, your app needs to have profiles sorted out. In other words, if it needs to work with a completely new type of events, it first needs to notify the system of that new type of event. If the app just wants to process some existing events, you already should know, you don't need to do anything."}),"\n",(0,i.jsxs)(s.h2,{id:"requesting-new-permission-application-part",children:["Requesting New Permission ",(0,i.jsx)(s.em,{children:"(application part)"})]}),"\n",(0,i.jsxs)(s.p,{children:["When you app wants to access raw events, it needs to specify which profile it wants to access and what rights the app wants. Events are bound to profiles so that's the reason why ",(0,i.jsx)(s.code,{children:"profile"})," name must be specified in every event."]}),"\n",(0,i.jsx)(s.p,{children:"When the app requests to access a profile ( we mean a set of events having that particular profile in the metadata) which does not exist, this is totally fine and the app will get an empty list of events. The idea is that in future, such profile may be created, rendering the set of events of that particular type non-empty."}),"\n",(0,i.jsxs)(s.p,{children:["The app needs to hit this endpoint: ",(0,i.jsx)(s.strong,{children:"/app/api/requestNewPermission"})," ",(0,i.jsx)(s.em,{children:"(POST)"})," with the following body (as example):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="Body of a new permission request"',children:'{\r\n    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1ZmFlMDk0N2E5MGI0YTUyNjNhNDk4MCIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcGxpY2F0aW9uIiwibmFtZURlZmluZWRCeUFwcCI6ImFwcGxpY2F0aW9uLmNvbSIsImlhdCI6MTcxMDk0MDcxMywiZXhwIjoxMTE3ODIyMDcxM30.3zHTC0_igQKfzjF8uZadJLkmd4qRXY_hePd_M6pmPj0",\r\n    "permissionsRequest": {\r\n        "profile": "application.com/first_profile",\r\n        "read": true,\r\n        "create": true,\r\n        "modify": true,\r\n        "delete": true\r\n    },\r\n    "optionalMessage": "This is optional message for the permission from the app"\r\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Optional message can be left out. This is just an opportunity for the app to state its reason behind this permission request. This message is shown in the admin frontend ",(0,i.jsx)(s.code,{children:"Control Centre"})," component."]}),"\n",(0,i.jsx)(s.p,{children:"There are multiple possible responses:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["everything ok, ",(0,i.jsx)(s.code,{children:"generatedAccessToken"})," is returned."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="201 - Created response"',children:'{\r\n    "message": "Permissions requested successfully",\r\n    // highlight-start\r\n    "generatedAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWZiM2UxYjI3YjQxNjE0NTk0Mjc3IiwiYXBwSWQiOiI2NWZhZTA5NDdhOTBiNGE1MjYzYTQ5ODAiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjBUMTU6MDU6MzQuNDE3WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMDk0NzEzNCwiZXhwIjoxMTE3ODIyNzEzNH0.30tA0SPYMcYMdVg15Mqll6bcFOnE41u9rRGcF5kIY5M"\r\n    // highlight-end\r\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["Just as with ",(0,i.jsx)(s.code,{children:"jwtTokenForPermissionRequestsAndProfiles"}),", your app needs to remember ",(0,i.jsx)(s.code,{children:"generatedAccessToken"})," which will be used once the app decides to manipulate or processs events in some way."]})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["invalid ",(0,i.jsx)(s.code,{children:"jwtTokenForPermissionRequestsAndProfiles"})]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="401 - Unauthorised response"',children:'{\r\n    "message": "Invalid or expired JWT token"\r\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Remeber, this was just a permission request which needs to be approved. Unless it's approved, the app cannot do anything about it. However, the app has an option to check for permission status (access token status) and so can notify its user that they should take an action if they want to fully use their new app. Or maybe the user will find out the app wants to access some other irrelevant data it should have no access to!"}),"\n",(0,i.jsx)(s.h2,{id:"checking-permission-status",children:"Checking Permission Status"}),"\n",(0,i.jsxs)(s.p,{children:["To check the permission status, there is this endpoint ",(0,i.jsx)(s.strong,{children:"/app/api/checkAccessTokenStatus?accessToken=[token]"})," ",(0,i.jsx)(s.em,{children:"(GET)"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"So for the result above, the request looks like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="demo request"',children:"[AUTH SERVICE URL]/app/api/checkAccessTokenStatus?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWZiM2UxYjI3YjQxNjE0NTk0Mjc3IiwiYXBwSWQiOiI2NWZhZTA5NDdhOTBiNGE1MjYzYTQ5ODAiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjBUMTU6MDU6MzQuNDE3WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMDk0NzEzNCwiZXhwIjoxMTE3ODIyNzEzNH0.30tA0SPYMcYMdVg15Mqll6bcFOnE41u9rRGcF5kIY5M\n"})}),"\n",(0,i.jsx)(s.p,{children:"And the response is following:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="response - 200"',children:'{\r\n    "isActive": true,\r\n    "isRevoked": false\r\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"So if the access token is not active, your app can notify user that they need to approve this permission."}),"\n",(0,i.jsxs)(s.h2,{id:"getting-unapproved-permissions-requests-admin-part",children:["Getting Unapproved Permissions Requests ",(0,i.jsx)(s.em,{children:"(admin part)"})]}),"\n",(0,i.jsxs)(s.p,{children:["For getting a full list of unapproved permissions, admin can hit this endpoint (it is paginated): ",(0,i.jsx)(s.strong,{children:"/admin/api/permissions/getUnapprovedPermissionsRequests?pageIndex=2&limit=100"})," ",(0,i.jsx)(s.em,{children:"(GET)"})]}),"\n",(0,i.jsx)(s.p,{children:"The response is the following:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="response - 200"',children:'{\r\n    "status": "success",\r\n    "data": {\r\n        "permissions": [\r\n            {\r\n                // highlight-start\r\n                "_id": "65faf9c8f9b73ae41344361f",\r\n                // highlight-end\r\n                "app": {\r\n                    "_id": "65f85d8f72d3cb5a148a96f6",\r\n                    "nameDefinedByUser": "My New App",\r\n                    "dateOfAssociationByApp": "2024-03-18T15:28:29.331Z",\r\n                    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1Zjg1ZDhmNzJkM2NiNWExNDhhOTZmNiIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcCIsIm5hbWVEZWZpbmVkQnlBcHAiOiJhaG9qLmNvbSIsImlhdCI6MTcxMDc3NTcwOSwiZXhwIjoxMTE3ODA1NTcwOX0.EKgX4SevCgdCUq3QbpWbSahb47sbJL9o9hGGtfQIY10",\r\n                    "dateOfRegistration": "2024-03-18T15:28:15.541Z",\r\n                    "__v": 0,\r\n                    "nameDefinedByApp": "ahoj.com"\r\n                },\r\n                "optionalMessage": "This is optional message for the permission from the app",\r\n                "permission": {\r\n                    "profile": "ahoj.com/first_profile",\r\n                    "read": true,\r\n                    "create": true,\r\n                    "modify": true,\r\n                    "delete": true,\r\n                    "_id": "65faf9c8f9b73ae413443620"\r\n                },\r\n                "createdDate": "2024-03-20T14:59:20.695Z",\r\n                "approvedDate": null,\r\n                "isActive": false,\r\n                "revokedDate": null,\r\n                "expirationDate": null,\r\n                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWY5YzhmOWI3M2FlNDEzNDQzNjFmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhaG9qLmNvbS9maXJzdF9wcm9maWxlIiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjp0cnVlLCJtb2RpZnkiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0yMFQxNDo1OToyMC42OTVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzEwOTQ2NzYwLCJleHAiOjExMTc4MjI2NzYwfQ.yHg2A8plYpxhusRTqTFXwmhNj3sz0722mB5pRJCKyqY",\r\n                "__v": 0\r\n            },\r\n            {\r\n                // highlight-start\r\n                "_id": "65fafb2f1b27b4161459426f",\r\n                // highlight-end\r\n                "app": {\r\n                    "_id": "65f85d8f72d3cb5a148a96f6",\r\n                    "nameDefinedByUser": "My New App",\r\n                    "dateOfAssociationByApp": "2024-03-18T15:28:29.331Z",\r\n                    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1Zjg1ZDhmNzJkM2NiNWExNDhhOTZmNiIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcCIsIm5hbWVEZWZpbmVkQnlBcHAiOiJhaG9qLmNvbSIsImlhdCI6MTcxMDc3NTcwOSwiZXhwIjoxMTE3ODA1NTcwOX0.EKgX4SevCgdCUq3QbpWbSahb47sbJL9o9hGGtfQIY10",\r\n                    "dateOfRegistration": "2024-03-18T15:28:15.541Z",\r\n                    "__v": 0,\r\n                    "nameDefinedByApp": "ahoj.com"\r\n                },\r\n                "optionalMessage": "This is optional message for the permission from the app",\r\n                "permission": {\r\n                    "profile": "application.com/first_profile",\r\n                    "read": true,\r\n                    "create": true,\r\n                    "modify": true,\r\n                    "delete": true,\r\n                    "_id": "65fafb2f1b27b41614594270"\r\n                },\r\n                "createdDate": "2024-03-20T15:05:19.114Z",\r\n                "approvedDate": null,\r\n                "isActive": false,\r\n                "revokedDate": null,\r\n                "expirationDate": null,\r\n                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWZiMmYxYjI3YjQxNjE0NTk0MjZmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhcHBsaWNhdGlvbi5jb20vZmlyc3RfcHJvZmlsZSIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWV9LCJjcmVhdGVkRGF0ZSI6IjIwMjQtMDMtMjBUMTU6MDU6MTkuMTE0WiIsImFwcHJvdmVkRGF0ZSI6bnVsbCwiZXhwaXJhdGlvbkRhdGUiOm51bGwsImlhdCI6MTcxMDk0NzExOSwiZXhwIjoxMTE3ODIyNzExOX0.xKHy4xRcK-Kwysesp9wh7YdgBucAvrJgRiuZDW9QoHY",\r\n                "__v": 0\r\n            }\r\n        ],\r\n        "totalItems": 2,\r\n        "totalPages": 1,\r\n        "currentPage": 0\r\n    }\r\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["This endpoint, as mentioned before, is utilised by the ",(0,i.jsx)(s.strong,{children:"Control Centre"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"getting-unapproved-permissions-requests-for-given-app-admin-part",children:["Getting Unapproved Permissions Requests For Given App ",(0,i.jsx)(s.em,{children:"(admin part)"})]}),"\n",(0,i.jsxs)(s.p,{children:["For getting a full list of unapproved permissions for a given app, admin can hit this endpoint (it is paginated): ",(0,i.jsxs)(s.strong,{children:["/admin/api/permissions/getUnapprovedPermissionsRequests/",":appHolderId"]})," ",(0,i.jsx)(s.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"appHolderId"})," is the id you get when you register a new app holder ",(0,i.jsx)(s.a,{href:"/docs/main-system/auth-service/new-app-setup",children:"(look here)"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["For this request ",(0,i.jsx)(s.code,{children:"/admin/api/permissions/getUnapprovedPermissionsRequests/65f85d8f72d3cb5a148a96f6"})," the following is the response:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="response - 200"',children:'{\r\n    "status": "success",\r\n    "permissions": [\r\n        {\r\n            // highlight-start\r\n            "_id": "65f85e6e72d3cb5a148a971f",\r\n            // highlight-end\r\n            "app": {\r\n                "_id": "65f85d8f72d3cb5a148a96f6",\r\n                "nameDefinedByUser": "My New App",\r\n                "dateOfAssociationByApp": "2024-03-18T15:28:29.331Z",\r\n                "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1Zjg1ZDhmNzJkM2NiNWExNDhhOTZmNiIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcCIsIm5hbWVEZWZpbmVkQnlBcHAiOiJhaG9qLmNvbSIsImlhdCI6MTcxMDc3NTcwOSwiZXhwIjoxMTE3ODA1NTcwOX0.EKgX4SevCgdCUq3QbpWbSahb47sbJL9o9hGGtfQIY10",\r\n                "dateOfRegistration": "2024-03-18T15:28:15.541Z",\r\n                "__v": 0,\r\n                "nameDefinedByApp": "ahoj.com"\r\n            },\r\n            "permission": {\r\n                "profile": "ahoj.com/first_profile",\r\n                "read": true,\r\n                "create": true,\r\n                "modify": true,\r\n                "delete": true,\r\n                "_id": "65f85e6e72d3cb5a148a9720"\r\n            },\r\n            "createdDate": "2024-03-18T15:31:58.115Z",\r\n            "approvedDate": "2024-03-18T15:32:24.954Z",\r\n            "isActive": true,\r\n            "revokedDate": null,\r\n            "expirationDate": null,\r\n            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmODVlNmU3MmQzY2I1YTE0OGE5NzFmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhaG9qLmNvbS9maXJzdF9wcm9maWxlIiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjp0cnVlLCJtb2RpZnkiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0xOFQxNTozMTo1OC4xMTVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzEwNzc1OTE4LCJleHAiOjExMTc4MDU1OTE4fQ.YxSUEYNCVRRRT-h7bmKrEULWyXgimd8W9-zFSLINknI",\r\n            "optionalMessage": "This is optional message for the permission from the app",\r\n            "__v": 0\r\n        },\r\n        {\r\n            // highlight-start\r\n            "_id": "65faf9c8f9b73ae41344361f",\r\n            // highlight-end\r\n            "app": {\r\n                "_id": "65f85d8f72d3cb5a148a96f6",\r\n                "nameDefinedByUser": "My New App",\r\n                "dateOfAssociationByApp": "2024-03-18T15:28:29.331Z",\r\n                "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1Zjg1ZDhmNzJkM2NiNWExNDhhOTZmNiIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcCIsIm5hbWVEZWZpbmVkQnlBcHAiOiJhaG9qLmNvbSIsImlhdCI6MTcxMDc3NTcwOSwiZXhwIjoxMTE3ODA1NTcwOX0.EKgX4SevCgdCUq3QbpWbSahb47sbJL9o9hGGtfQIY10",\r\n                "dateOfRegistration": "2024-03-18T15:28:15.541Z",\r\n                "__v": 0,\r\n                "nameDefinedByApp": "ahoj.com"\r\n            },\r\n            "permission": {\r\n                "profile": "ahoj.com/first_profile",\r\n                "read": true,\r\n                "create": true,\r\n                "modify": true,\r\n                "delete": true,\r\n                "_id": "65faf9c8f9b73ae413443620"\r\n            },\r\n            "createdDate": "2024-03-20T14:59:20.695Z",\r\n            "approvedDate": null,\r\n            "isActive": false,\r\n            "revokedDate": null,\r\n            "expirationDate": null,\r\n            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWY5YzhmOWI3M2FlNDEzNDQzNjFmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhaG9qLmNvbS9maXJzdF9wcm9maWxlIiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjp0cnVlLCJtb2RpZnkiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0yMFQxNDo1OToyMC42OTVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzEwOTQ2NzYwLCJleHAiOjExMTc4MjI2NzYwfQ.yHg2A8plYpxhusRTqTFXwmhNj3sz0722mB5pRJCKyqY",\r\n            "optionalMessage": "This is optional message for the permission from the app",\r\n            "__v": 0\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"approving-permission-request-admin-part",children:["Approving Permission Request ",(0,i.jsx)(s.em,{children:"(admin part)"})]}),"\n",(0,i.jsxs)(s.p,{children:["To approve a permission, there is ",(0,i.jsx)(s.strong,{children:"/admin/api/permissions/approvePermissionRequest"})," ",(0,i.jsx)(s.em,{children:"(PUT)"})," endpoint for it."]}),"\n",(0,i.jsxs)(s.p,{children:["You specify which permission request to approve by specifying ",(0,i.jsx)(s.code,{children:"permissionId"}),". As you can see, each ",(0,i.jsx)(s.code,{children:"permission"})," object in the ",(0,i.jsx)(s.code,{children:"permissions"})," list in the responses above contains ",(0,i.jsx)(s.code,{children:"_id"}),". This is the needed id."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="Body of the request"',children:'{\r\n    "permissionId": "65ec875616c7c86638272a48"\r\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"And there are multiple responses types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"permission was approved"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="response - 200"',children:'{\r\n    "message": "Permission request approved successfully",\r\n    "data": {\r\n        "_id": "65faf9c8f9b73ae41344361f",\r\n        "app": "65f85d8f72d3cb5a148a96f6",\r\n        "permission": {\r\n            "profile": "ahoj.com/first_profile",\r\n            "read": true,\r\n            "create": true,\r\n            "modify": true,\r\n            "delete": true,\r\n            "_id": "65faf9c8f9b73ae413443620"\r\n        },\r\n        "createdDate": "2024-03-20T14:59:20.695Z",\r\n        "approvedDate": "2024-03-20T15:58:55.477Z",\r\n        "isActive": true,\r\n        "revokedDate": null,\r\n        "expirationDate": null,\r\n        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjVmYWY5YzhmOWI3M2FlNDEzNDQzNjFmIiwiYXBwSWQiOiI2NWY4NWQ4ZjcyZDNjYjVhMTQ4YTk2ZjYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhaG9qLmNvbS9maXJzdF9wcm9maWxlIiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjp0cnVlLCJtb2RpZnkiOnRydWUsImRlbGV0ZSI6dHJ1ZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0yMFQxNDo1OToyMC42OTVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzEwOTQ2NzYwLCJleHAiOjExMTc4MjI2NzYwfQ.yHg2A8plYpxhusRTqTFXwmhNj3sz0722mB5pRJCKyqY",\r\n        "optionalMessage": "This is optional message for the permission from the app",\r\n        "__v": 0\r\n    }\r\n}\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"permissionId"})," not found"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="404 - not found"',children:'{\r\n    "message": "Permission request not found"\r\n}\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"revokig-permission-request-admin-part",children:["Revokig Permission Request ",(0,i.jsx)(s.em,{children:"(admin part)"})]}),"\n",(0,i.jsxs)(s.p,{children:["If you find yourself in need of revoking a permission, this endpoint ",(0,i.jsx)(s.strong,{children:"/admin/api/permissions/revokePermission"})," ",(0,i.jsx)(s.em,{children:"(PUT)"})," is there to save you."]}),"\n",(0,i.jsxs)(s.p,{children:["Interface is similar to ",(0,i.jsx)(s.a,{href:"#approving-permission-request-admin-part",children:"approving of permission request"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="body of the request"',children:'{\r\n    "permissionId": "65c634fd1b6deae674c26af1"\r\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"And responses are similar as well."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:"Congratulations! Your app has now all permissions it needs! \ud83c\udf89\ud83c\udf89\ud83c\udf89"})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var i=n(6540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);