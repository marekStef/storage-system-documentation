"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[880],{3517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=n(4848),r=n(8453);const i={sidebar_position:0},a="Walkthrough",o={id:"example-apps/calendar-pro/walkthrough",title:"Walkthrough",description:"Calendar is one of the example apps highlighting the current possibilities of the system. It allows the user to perform normal crud operations.",source:"@site/docs/example-apps/calendar-pro/walkthrough.md",sourceDirName:"example-apps/calendar-pro",slug:"/example-apps/calendar-pro/walkthrough",permalink:"/storageSystemDocs/docs/example-apps/calendar-pro/walkthrough",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/example-apps/calendar-pro/walkthrough.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"exampleAppsSidebar",previous:{title:"Calendar Pro",permalink:"/storageSystemDocs/docs/category/calendar-pro"},next:{title:"Activity Tracker",permalink:"/storageSystemDocs/docs/category/activity-tracker"}},c={},h=[{value:"Profiles",id:"profiles",level:2},{value:"User Setup",id:"user-setup",level:2},{value:"Calendar Settings",id:"calendar-settings",level:2},{value:"Procesing of Windows Opened Apps",id:"procesing-of-windows-opened-apps",level:2},{value:"Processing of User Location from Location Tracker",id:"processing-of-user-location-from-location-tracker",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"walkthrough",children:"Walkthrough"}),"\n",(0,s.jsx)(t.p,{children:"Calendar is one of the example apps highlighting the current possibilities of the system. It allows the user to perform normal crud operations."}),"\n",(0,s.jsx)(t.p,{children:"The app is highly responsive and allows multiple events to be overlayed."}),"\n",(0,s.jsx)(t.p,{children:"Not only does the app allow the user a comfortable management of their time but it also processes data generated from other apps, namely the location tracker ( android app ) and Windows Apps Tracker."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Architecture",src:n(2554).A+"",width:"1912",height:"1449"}),"\r\n",(0,s.jsx)(t.img,{alt:"Architecture",src:n(469).A+"",width:"1188",height:"1163"})]}),"\n",(0,s.jsx)(t.h2,{id:"profiles",children:"Profiles"}),"\n",(0,s.jsx)(t.p,{children:"This is the profile the calendar needs to register at the initialisation process."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="CalendarPro.com_CalendarEventProfile"',children:'{\r\n    "title": "Event",\r\n    "type": "object",\r\n    "properties": {\r\n        "id": {\r\n            "type": "string",\r\n            "description": "Unique identifier for the event."\r\n        },\r\n        "startTime": {\r\n            "type": "string",\r\n            "format": "date-time",\r\n            "description": "The start time of the event."\r\n        },\r\n        "endTime": {\r\n            "type": "string",\r\n            "format": "date-time",\r\n            "description": "The end time of the event."\r\n        },\r\n        "color": {\r\n            "type": "string",\r\n            "description": "A string representing the color associated with the event."\r\n        },\r\n        "title": {\r\n            "type": "string",\r\n            "description": "The title of the event."\r\n        },\r\n        "description": {\r\n            "type": "string",\r\n            "description": "A detailed description of the event."\r\n        }\r\n    },\r\n    "required": [\r\n        "startTime",\r\n        "endTime",\r\n        "title",\r\n        "description",\r\n        "color"\r\n    ],\r\n    "additionalProperties": false\r\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"user-setup",children:"User Setup"}),"\n",(0,s.jsxs)(t.p,{children:["When the user wants to start using this calendar, they need to first locate ",(0,s.jsx)(t.strong,{children:"Storage System"}),". Once it's located, the setup process allows the user to type in ",(0,s.jsx)(t.code,{children:"Association Token"})," which the user gets after creating new ",(0,s.jsx)(t.strong,{children:"App Holder"})," (either in the ",(0,s.jsx)(t.strong,{children:"Control Centre"})," or by using raw api endpoints)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(163).A+"",width:"2218",height:"1715"})}),"\n",(0,s.jsxs)(t.p,{children:["If the app has been already set up in the system, user can just copy needed tokens from the storage system. All necessary information is in the ",(0,s.jsx)(t.strong,{children:"Control Centre"})," app."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(520).A+"",width:"1322",height:"1197"})}),"\n",(0,s.jsx)(t.h2,{id:"calendar-settings",children:"Calendar Settings"}),"\n",(0,s.jsx)(t.p,{children:"In the Calendar Settings, there are multiple things to modify."}),"\n",(0,s.jsxs)(t.p,{children:["Firstly, the user can toggle the switch for using ",(0,s.jsx)(t.code,{children:"View Instance"})," for fetching calendar events instead of using the raw token for calendar events. The difference is that if the raw token (obtained after requesting permission for a given profile) is used, the calendar needs to request all events (which is ineffective as the user is only interesting in the currently displayed week). View Instance is on the other hand passed dynamically information about which week to fetch and only the neccessary information is therefore being sent back from the backend system."]}),"\n",(0,s.jsxs)(t.p,{children:["Secondly, there is a switch for showing windows apps. As you may know, one of our example apps gathers information about the currently opened apps on the Windows operating system. More on that ",(0,s.jsx)(t.a,{href:"#procesing-of-windows-opened-apps",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Thirdly, there is a switch for showing location gathered from the Location Tracker Android app. More on that ",(0,s.jsx)(t.a,{href:"#processing-of-user-location-from-location-tracker",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(4016).A+"",width:"1912",height:"1449"})}),"\n",(0,s.jsx)(t.h2,{id:"procesing-of-windows-opened-apps",children:"Procesing of Windows Opened Apps"}),"\n",(0,s.jsx)(t.p,{children:"Calendar app highlights the possibility of the storage system. There may be multiple apps generating large quanta of data about the user while other apps are processing those pieces of data."}),"\n",(0,s.jsx)(t.p,{children:"Calendar allows the user to setup displaying of Windows Opened apps by first allowing the user to set it up. When the user toggles the Windows Apps Showing in the Calendar's settings, a new button \"Windows Opened Apps\" appears below the month's minimap."}),"\n",(0,s.jsx)(t.p,{children:"This button takes the user to a new screen used for setting it all up and then creating categories for various apps."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(1750).A+"",width:"1550",height:"850"})}),"\n",(0,s.jsxs)(t.p,{children:["Setup requires the user to create new ",(0,s.jsx)(t.strong,{children:"View Template"})," in the system. It instructs the user to download the necessary code. After the user verifies the code does not do any harm ( of course it does not do any harm ) and creates the template, they need to copy the template's id and paste it here."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(2939).A+"",width:"1912",height:"1449"})}),"\n",(0,s.jsx)(t.p,{children:"User can now create new categories, assign unlimited amount of colours to them and then assign individual apps to the categories."}),"\n",(0,s.jsx)(t.p,{children:"Now, when the user navigates to the main week's view, they can see how productive/lazy they are as the calendar shows hourly stats about which apps were opened on the computer."}),"\n",(0,s.jsx)(t.p,{children:"By hovering over the left vertical colourful bar ( shown on the picture below - look where the pointer is ), the category name appear with a nice smooth animation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(8761).A+"",width:"1912",height:"1449"})}),"\n",(0,s.jsx)(t.p,{children:"Calendar also displays data about location tracking."}),"\n",(0,s.jsx)(t.h2,{id:"processing-of-user-location-from-location-tracker",children:"Processing of User Location from Location Tracker"}),"\n",(0,s.jsx)(t.p,{children:'Setup is similar to the setup of Windows Apps. "Your Locations" button appears below the month\'s minimap.'}),"\n",(0,s.jsx)(t.p,{children:"When the setup is successfull and the user navigates back to the main Week's view, new hidden buttons appear. The user needs to hover over the day's name for the little location button to appear (look at the photo below)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(2619).A+"",width:"1912",height:"1449"})}),"\n",(0,s.jsx)(t.p,{children:"When the user clicks on the button, new location modal appears showing a map of all locations data from that given day."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(2063).A+"",width:"1912",height:"1449"})}),"\n",(0,s.jsx)(t.p,{children:"That's all from Calendar app for now!"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},520:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/calendar-existing-setup-e7021faf105d5baedd6cef565f155bac.png"},163:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/calendar-initial-setup-d5c749f4a5c76429f7c87eb26927eaa8.png"},4016:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/calendar-settings-b29b912e496af29fc48c43f51d667374.png"},469:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/event-details-1a3922540f7cf0e175da17fa1f57a81c.png"},2063:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/location-modal-973e197417e9aafa344ac1479e9a1cb2.png"},2619:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/week-view-location-button-hower-5656dd76f4df0667a7053e661ea349a0.png"},8761:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/week-view-windows-apps-hower-a9db74b24b0af6eb71cb431ce82910db.png"},2554:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/week-view-75af5d18334d05594b49ab6bb13dc065.png"},2939:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/windows-apps-categories-settings-bcfba290a03324581c922ef6b596d8b8.png"},1750:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/windows-apps-setup-dc03a24f61c17247cba2958dc42ddcfd.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);