(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{16:function(n,e,t){},18:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var o=t(8),c=t(2),i=(t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function r(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var s=t(0),a=t(5),d=function(n){return document.body.classList.add(n)},l=function(n){return document.body.classList.remove(n)};var u=t(4),f=t.n(u),h=t(7),b=t(9),j=t(10),p=t(1),w=function(){var n=Object(a.a)((function(n){return n.toggleNightMode})),e=Object(a.b)((function(n){return n.nightMode}));return Object(p.jsxs)("div",{className:f.a.wrapper+" ".concat(e?f.a.dark:""),children:[Object(p.jsx)("div",{className:f.a.with_icon,id:f.a.sun_icon,children:Object(p.jsx)(h.Icon,{icon:b.a,width:22})}),Object(p.jsx)("div",{className:f.a.switch,onClick:function(){n()},children:Object(p.jsx)("div",{className:f.a.circle})}),Object(p.jsx)("div",{className:f.a.with_icon,id:f.a.moon_icon,children:Object(p.jsx)(h.Icon,{icon:j.a,width:18})})]})},m=(t(18),Object(s.lazy)((function(){return t.e(5).then(t.bind(null,187))}))),g=Object(s.lazy)((function(){return Promise.all([t.e(2),t.e(6)]).then(t.bind(null,189))})),v=Object(s.lazy)((function(){return t.e(4).then(t.bind(null,188))})),O=function(){var n,e=Object(a.b)((function(n){return n.nightMode}));return n="".concat(e?"dark":"light"),Object(s.useEffect)((function(){return n instanceof Array?n.map(d):d(n),function(){n instanceof Array?n.map(l):l(n)}}),[n]),Object(p.jsx)("main",{className:"main",children:Object(p.jsxs)(s.Suspense,{fallback:Object(p.jsx)("div",{className:"fallback",children:"Loading..."}),children:[Object(p.jsx)(w,{}),Object(p.jsx)(m,{}),Object(p.jsx)(g,{}),Object(p.jsx)(v,{})]})})},_=Object(c.d)(Object(c.f)({nightMode:!1,todos:[],addTodo:Object(c.b)((function(n,e){n.todos.push(e)})),removeTodo:Object(c.b)((function(n,e){n.todos=n.todos.filter((function(n){return n.id!==e.id}))})),totalTodos:Object(c.c)((function(n){return n.todos.length})),completedTodos:Object(c.c)((function(n){return n.todos.filter((function(n){return n.isCompleted})).length})),setCompleted:Object(c.b)((function(n,e){n.todos.map((function(n){return n.id===e.id&&(n.isCompleted=!n.isCompleted),n}))})),toggleNightMode:Object(c.b)((function(n){n.nightMode=!n.nightMode}))},{storage:"localStorage"}));Object(o.render)(Object(p.jsx)(c.a,{store:_,children:Object(p.jsx)(O,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/todo-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/todo-app","/service-worker.js");i?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):r(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):r(e,n)}))}}()},4:function(n,e,t){n.exports={wrapper:"switchmodes_wrapper__3RGbc",with_icon:"switchmodes_with_icon__3zN2E",switch:"switchmodes_switch__vsYiC",circle:"switchmodes_circle__1yfFS",sun_icon:"switchmodes_sun_icon__jUi0f",dark:"switchmodes_dark__2LCh4",moon_icon:"switchmodes_moon_icon__1HCK3"}},5:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));var o=t(2),c=Object(o.e)(),i=c.useStoreActions,r=(c.useStoreDispatch,c.useStoreState)}},[[19,1,3]]]);
//# sourceMappingURL=main.6413233a.chunk.js.map