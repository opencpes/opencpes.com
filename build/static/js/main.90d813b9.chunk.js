(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(15),s=a(38),l=a(45),m=a(17),p=a(29),d=(a(94),a(39)),u=a(201),g=a(232),b=(a(50),Object(u.a)(function(e){return{root:{display:"flex"}}}),Object(u.a)(function(e){return{root:{display:"flex"}}}),Object(u.a)(function(e){return{root:{display:"flex"}}}),Object(n.createContext)()),f=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(b.Provider,{value:Object(n.useReducer)(t,a)},c)},E=function(){return Object(n.useContext)(b)},h=(Object(u.a)(function(e){return{root:{display:"flex"}}}),a(52)),w=a.n(h),v=a(202),x=(Object(u.a)(function(e){return{root:{maxWidth:"1140px",margin:"30px auto",padding:e.spacing(3,2)},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"})}}),a(233)),y=Object(u.a)(function(e){return{location:{marginTop:e.spacing(25),display:"flex",width:400,marginLeft:"auto",marginRight:"auto",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")},override:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"}}}),O=function(e){var t=y();return r.a.createElement("div",{className:t.location},r.a.createElement(x.a,{className:t.progress}))},j=Object(u.a)(function(e){return{root:{maxWidth:"1140px",margin:"30px auto",padding:e.spacing(3,2)},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"})}}),S=function(e){var t=E(),a=Object(m.a)(t,2);Object(d.a)(a[0]);a[1];var c=r.a.useState(null),i=Object(m.a)(c,2),o=i[0],s=i[1],l=j();Object(g.a)();return Object(n.useEffect)(function(){fetch(e.markDown).then(function(e){return e.text()}).then(function(e){s(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.drawerHeader}),r.a.createElement(v.a,{className:l.root},o?r.a.createElement(w.a,{source:o}):r.a.createElement(O,null)))},k=a(234),N=a(235),P=a(55),C=a(236),B=a(82),D=a.n(B),G=a(243),H=a(239),F=a(238),I=a(240),L=a(241),W=a(84),_=a.n(W),q=a(85),A=a.n(q),R=a(4),Q=Object(u.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},menu_item:{marginRight:"20px",color:"#fff",fontWeight:"600",textDecoration:"none"}}}),V=Object(p.e)(function(e){var t=E(),a=Object(m.a)(t,2),c=a[0],i=(c.isLogin,c.userData,c.drawerState),s=(c.isDefaultPipeline,c.skipNum,c.customPipelineID,c.andOr,a[1],r.a.useState(null)),d=Object(m.a)(s,2),u=d[0],b=(d[1],r.a.useState(!1)),f=Object(m.a)(b,2),h=f[0],w=f[1],v=r.a.useState(!1),x=Object(m.a)(v,2),y=(x[0],x[1],Q()),O=Object(g.a)(),j=[{slug:"/privacy-guarantees",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/privacy-guarantees.md",render:S},{slug:"/validating-opencpes",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/validating-opencpes.md",render:S},{slug:"/getting-started",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/getting-started.md",render:S},{slug:"/cpe-providers",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/cpe-providers.md",render:S},{slug:"/certification-providers",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/certification-providers.md",render:S},{slug:"/faq",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/faq.md",render:S},{slug:"/codex/source-code",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/codex/source-code.md",render:S},{slug:"/codex/technical-details",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/codex/technical-details.md",render:S},{slug:"/codex/cybercv-wallet-details",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/codex/cybercv-wallet.md",render:S},{slug:"/",md:"https://raw.githubusercontent.com/opencpes/opencpes.com/master/public/md/pages/temphome.md",render:S}];Boolean(u);return Object(n.useEffect)(function(){w(i)},[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.root},r.a.createElement(k.a,{position:"fixed",className:Object(R.a)(y.appBar,Object(l.a)({},y.appBarShift,h))},r.a.createElement(N.a,null,r.a.createElement(P.a,{variant:"h6",color:"inherit",className:y.title},"OpenCPEs"),r.a.createElement(o.b,{to:"/",variant:"body2",className:y.menu_item},"Home"),r.a.createElement(o.b,{to:"/getting-started",variant:"body2",className:y.menu_item},"Get Started"),r.a.createElement(o.b,{to:"/validating-opencpes",variant:"body2",className:y.menu_item},"Validating OpenCPEs"),r.a.createElement(o.b,{to:"/faq",variant:"body2",className:y.menu_item},"FAQ"),r.a.createElement(C.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){w(!0)},edge:"start",className:Object(R.a)(y.menuButton,h&&y.hide)},r.a.createElement(D.a,null)))),r.a.createElement(G.a,{className:y.drawer,variant:"persistent",anchor:"left",open:h,classes:{paper:y.drawerPaper}},r.a.createElement("div",{className:y.drawerHeader},r.a.createElement(C.a,{onClick:function(){w(!1)}},"ltr"===O.direction?r.a.createElement(_.a,null):r.a.createElement(A.a,null))),r.a.createElement(F.a,null),r.a.createElement("div",{className:y.toolbar}),r.a.createElement(F.a,null),r.a.createElement(H.a,{dense:!0},r.a.createElement(I.a,{button:!0,key:"Home",component:o.b,to:"/"},r.a.createElement(L.a,{primary:"Home"})),r.a.createElement(I.a,{button:!0,key:"Getting Started",component:o.b,to:"/getting-started"},r.a.createElement(L.a,{primary:"Getting Started"})),r.a.createElement(I.a,{button:!0,key:"Validating OpenCPEs",component:o.b,to:"/validating-opencpes"},r.a.createElement(L.a,{primary:"Validating OpenCPEs"})),r.a.createElement(I.a,{button:!0,key:"FAQ",component:o.b,to:"/faq"},r.a.createElement(L.a,{primary:"FAQ"})),r.a.createElement(I.a,{button:!0,key:"Privacy Guarantees",component:o.b,to:"/privacy-guarantees"},r.a.createElement(L.a,{primary:"Privacy Guarantees"})),r.a.createElement(I.a,{button:!0,key:"CPE Providers",component:o.b,to:"/cpe-providers"},r.a.createElement(L.a,{primary:"CPE Providers"})),r.a.createElement(I.a,{button:!0,key:"Certification Providers",component:o.b,to:"/certification-providers"},r.a.createElement(L.a,{primary:"Certification Providers"})),r.a.createElement(I.a,{button:!0,key:"Codex",component:o.b,to:"/codex"},r.a.createElement(L.a,{primary:"Codex"}))),r.a.createElement(F.a,null)),r.a.createElement("main",{id:"main",className:Object(R.a)(y.content,Object(l.a)({},y.contentShift,h))},r.a.createElement(p.c,null,j.map(function(e,t){return r.a.createElement(p.a,{key:t,path:e.slug,render:function(t){return r.a.createElement(e.render,Object.assign({markDown:e.md},t))}})})))),r.a.createElement("footer",null))}),J=function(){return r.a.createElement("div",{className:"GlobalState"},r.a.createElement(f,{initialState:{drawerState:!1},reducer:function(e,t){switch(t.type){case"setDrawerState":return Object(s.a)({},e,{drawerState:t.drawerState});default:return e}}},r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(198);var T=a(242);i.a.render(r.a.createElement(o.a,{basename:"/"},r.a.createElement(T.a,null),r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a(199)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.90d813b9.chunk.js.map