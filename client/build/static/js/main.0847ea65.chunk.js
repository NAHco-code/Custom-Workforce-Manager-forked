(this.webpackJsonpfleets=this.webpackJsonpfleets||[]).push([[0],{224:function(e,a,t){},280:function(e,a,t){e.exports=t.p+"static/media/logo-w-name.de49358b.PNG"},281:function(e,a,t){e.exports=t.p+"static/media/view-details-color-vibrant.8aede932.PNG"},282:function(e,a,t){e.exports=t.p+"static/media/three-leaves-schedule.c38fb0e4.PNG"},294:function(e,a,t){e.exports=t.p+"static/media/logo.a761838b.PNG"},308:function(e,a,t){e.exports=t(480)},313:function(e,a,t){},347:function(e,a){},349:function(e,a){},388:function(e,a){},389:function(e,a){},480:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(26),i=t.n(c),l=(t(313),t(33)),o=t.n(l),s=t(53),m=t(21),d=(t(224),t(561)),u=t(535),p=t(528),f=t(562),b=t(533),E=t(560),h=t(525),g=t(483),v=t(557),w=t(527),j=t(279),y=t.n(j),N=t(131),x=t(526),O=t(41),k=t.n(O),C={getCurrentUser:function(){return k.a.get("/api/user/current/")},getJobs:function(){return k.a.get("/api/jobs/")},getJobByUser:function(e){return k.a.get("/api/jobs/"+e)},getJobById:function(e){return k.a.get("/api/jobs/"+e)},createJob:function(e){return k.a.post("/api/jobs",e)},updateJob:function(e,a){return k.a.put("/api/jobs"+e,a)},getServices:function(){return k.a.get("/api/services")},postPurchase:function(e){return k.a.post("/api/purchases",e)},getPurchases:function(e){return k.a.get("/api/purchases",e)}};function S(){return r.a.createElement(N.a,{id:"copyright",variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"MKCWB Group")," ",(new Date).getFullYear(),".")}var D=Object(x.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/900x1600/?landscaping,gardening,garden-house)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),B=function(e){var a=e.setUser,t=D(),c=Object(n.useState)(""),i=Object(m.a)(c,2),l=i[0],h=i[1],j=Object(n.useState)(""),x=Object(m.a)(j,2),O=x[0],C=x[1],B=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,k()({method:"POST",data:{username:l,password:O},withCredentials:!0,url:"/auth/login"}).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{container:!0,component:"main",className:t.root},r.a.createElement(p.a,null),r.a.createElement(w.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),r.a.createElement(w.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0,id:"login-page"},r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(y.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5",id:"sign-in-txt"},"Sign in"),r.a.createElement("form",{onSubmit:B,id:"sign-in-form",className:t.form,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return h(e.target.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return C(e.target.value)}}),r.a.createElement(b.a,{control:r.a.createElement(E.a,{value:"remember"}),label:"Remember me",id:"remember-me"}),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",onClick:B,className:t.submit,id:"sign-in-btn"},"Sign In"),r.a.createElement(v.a,{mt:5},r.a.createElement(S,null))))))},A=t(39),P=t(84),I=t(6),T=t(544),F=t(545),W=t(534),R=t(546),J=t(565),q=t(547),G=t(548),L=t(484),_=t(539),H=t(537),U=t(540),z=t(538),M=t(541),Q=t(542),V=t(543),K=t(536),Y=t(532),X=t(78);function Z(e){var a=function(){var a=Object(s.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),console.log("route hit"),a.next=4,k()({method:"GET",withCredentials:!0,url:"/auth/logout"}).then((function(a){return e.setUser(null)})).catch((function(e){return console.log(e)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{id:"menu-wrapper"},r.a.createElement(K.a,null),r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement(X.b,{to:"/dashboard",className:"menu-link"},r.a.createElement(L.a,{className:"menu-li"},r.a.createElement(H.a,{className:"nav-menu-icon"},r.a.createElement(z.a,{id:"dashboard-icon"})),r.a.createElement(_.a,{className:"nav-menu-txt",primary:"Dashboard"}))))),r.a.createElement(K.a,null),r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement(U.a,{inset:!0}),r.a.createElement(X.b,{to:"/crews",hidden:e.linkHidden,className:"menu-link"},r.a.createElement(L.a,{className:"menu-li"},r.a.createElement(H.a,{className:"nav-menu-icon"},r.a.createElement(M.a,{id:"crews-icon"})),r.a.createElement(_.a,{className:"nav-menu-txt",primary:"Crews"}))),r.a.createElement(X.b,{to:"/createjob",hidden:e.linkHidden,className:"menu-link"},r.a.createElement(L.a,{className:"menu-li"},r.a.createElement(H.a,{className:"nav-menu-icon"},r.a.createElement(Q.a,{id:"newjob-icon"})),r.a.createElement(_.a,{className:"nav-menu-txt",primary:"New Job"}))),r.a.createElement(u.a,{id:"log-out",onClick:a,className:"menu-button"},r.a.createElement(L.a,{className:"menu-li"},r.a.createElement(H.a,{className:"nav-menu-icon"},r.a.createElement(V.a,{id:"logout-icon"})),r.a.createElement(_.a,{className:"nav-menu-txt",primary:"Log Out"}))))))}var $=t(139),ee=t.n($),ae=t(207),te=t.n(ae),ne=t(280),re=t.n(ne),ce=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24,display:"flex"},toolbarIcon:Object(P.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:135,width:"calc(100% - ".concat(135,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:135,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(A.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ie(e){var a=ce(),t=r.a.useState(!1),n=Object(m.a)(t,2),c=n[0],i=n[1],l=(Object(I.a)(a.paper,a.fixedHeight),ee()());return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement(T.a,{position:"absolute",className:Object(I.a)(a.appBar,c&&a.appBarShift)},r.a.createElement(F.a,{className:a.toolbar},r.a.createElement(W.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},id:"menu-icon",className:Object(I.a)(a.menuButton,c&&a.menuButtonHidden)},r.a.createElement(R.a,{badgeContent:0,color:"secondary"},r.a.createElement(q.a,null))),r.a.createElement(N.a,{className:"app-bar-items",id:"current-date",variant:"h9"},r.a.createElement(te.a,{format:"ll"},l)),r.a.createElement(N.a,{className:"app-bar-items",id:"current-time",variant:"h9"},r.a.createElement(te.a,{format:"h:MMa"},l)))),r.a.createElement(J.a,{id:"menu-drawer",variant:"temporary",classes:{paper:Object(I.a)(a.drawerPaper,!c&&a.drawerPaperClose)},open:c},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(W.a,{id:"menu-header",onClick:function(){i(!1)}},r.a.createElement("img",{src:re.a,alt:"",id:"menu-logo"}),r.a.createElement(G.a,{color:"primary"}))),r.a.createElement(Z,e)))}var le={getForecast:function(){return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.96&lon=-82.99&units=imperial&appid=54c7f1b6568fcc4d72410e2cea13a78a")}},oe=Object(x.a)((function(e){return{root:{display:"flex"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function se(e){var a=oe(),t=Object(n.useState)({}),c=Object(m.a)(t,2),i=c[0],l=c[1];Object(n.useEffect)((function(){le.getForecast().then((function(e){return e.json()})).then((function(e){return l({current:e.current,temp:e.current.temp,feelslike:e.current.feels_like,wind:e.current.wind_speed,uvi:e.current.uvi,descr:e.current.weather[0].description,icon:e.current.weather[0].icon,hourly:e.hourly,main:e.current.weather[0].main,humidity:e.current.humidity})}))}),[]);var o="http://openweathermap.org/img/w/".concat(i.icon,".png");return r.a.createElement(g.a,{elevation:3,className:a.paper,id:"module-weather"},r.a.createElement("div",{className:"weather-text",id:""},r.a.createElement("span",{id:"feels-like"},"Feels like"),r.a.createElement("span",{id:"main-temp-disp"},i.feelslike,"\xb0")),r.a.createElement("div",{className:"weather-text",id:"weather-summary"},r.a.createElement("img",{src:o,alt:"",className:"weatherIcon"}),r.a.createElement("div",{className:"weatherDescr"},r.a.createElement("span",{className:"weather-params",id:"high-low"},i.feelslike,"\xb0/",i.temp,"\xb0"),r.a.createElement("br",null),r.a.createElement("div",{className:"weather-params"},"Humidity: ",i.humidity,"%",r.a.createElement("br",null),"Wind: ",i.wind,"m/h",r.a.createElement("br",null),"UV index: ",i.uvi))))}var me=t(549),de=t(550),ue=t(551),pe=t(552),fe=t(553),be=t(554),Ee=t(281),he=t.n(Ee),ge=[{id:"client",label:"Client",minWidth:113},{id:"address",label:"Address",minWidth:113},{id:"crew",label:"Assigned Crew",minWidth:113}],ve=Object(x.a)((function(e){var a;return{root:{width:"100%"},listFont:(a={color:"#D1D9E3",fontSize:"0.7rem"},Object(A.a)(a,e.breakpoints.up("md"),{fontSize:"1rem"}),Object(A.a)(a,e.breakpoints.up("lg"),{fontSize:"2rem"}),a)}}));function we(e){var a=e.user,t=ve(),c=r.a.useState(0),i=Object(m.a)(c,2),l=i[0],o=(i[1],r.a.useState(10)),s=Object(m.a)(o,2),d=s[0],u=(s[1],r.a.useState([])),p=Object(m.a)(u,2),f=p[0],b=p[1];console.log(a),Object(n.useEffect)((function(){C.getJobs().then((function(e){var t=e.data.filter((function(e){return e.crewAssignedToo===a.username})).sort((function(e,a){return+(e.dailyPosition>a.dailyPosition)||+(e.dailyPosition===a.dailyPosition)-1||+(e.updatedAt<a.updatedAt)||+(e.updatedAt===a.updatedAt)-1})).map((function(e){return a=e._id,t=e.client.name,n=e.client.location,r=e.crewAssignedToo,{id:a,client:t,address:n,crew:r};var a,t,n,r}));b(t)}))}),[]);return r.a.createElement(g.a,{className:t.root,id:"component-jobslist"},r.a.createElement(me.a,{className:t.container},r.a.createElement(de.a,{stickyHeader:!0,"aria-label":"sticky table",id:"jobslist"},r.a.createElement(ue.a,null,r.a.createElement(pe.a,null)),r.a.createElement(fe.a,null,f.slice(l*d,l*d+d).map((function(e,a){return console.log(e),r.a.createElement(pe.a,{hover:!0,role:"checkbox",tabIndex:-1,key:a,className:"jobslist-row"},ge.map((function(a){e[a.id];return r.a.createElement(be.a,{className:t.listFont,key:a.id},"Client"===a.label?e.client:"Address"===a.label?e.address.streetAddress+", "+e.address.city:e.crew)})),r.a.createElement(be.a,null,r.a.createElement(X.b,{to:"/jobdetail/"+e.id},r.a.createElement("img",{alt:"",src:he.a,className:"detail-button"}))))}))))))}function je(){return r.a.createElement(N.a,{id:"copyright",variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"/"},"MKCWB Group")," ",(new Date).getFullYear(),".")}var ye=t(282),Ne=t.n(ye);function xe(){return r.a.createElement("div",null,r.a.createElement("img",{src:Ne.a,alt:"",id:"schedule-img"}))}var Oe=Object(x.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},button:{margin:e.spacing(2)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function ke(e){var a=e.user,t=Oe();return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,null),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(se,{id:"module-weather"}),r.a.createElement(g.a,{className:t.paper,id:"module-activejobs"},r.a.createElement(N.a,{variant:"h5",className:"module-header",id:"active"},"Active"),r.a.createElement(we,{user:a})),r.a.createElement(g.a,{className:t.paper,id:"module-completedjobs"},r.a.createElement(N.a,{variant:"h5",className:"module-header",id:"completed"},"Completed")),r.a.createElement(je,null)))}var Ce=Object(x.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},button:{margin:e.spacing(2)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));var Se=function(e){var a=e.user,t=Ce();return console.log(a),r.a.createElement("div",{className:t.root},r.a.createElement(p.a,null),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(se,{id:"module-weather"}),r.a.createElement(g.a,{className:t.paper,id:"module-schedule"},r.a.createElement(N.a,{variant:"h5",className:"module-header",id:"this-week"},"This Week"),r.a.createElement(xe,null)),r.a.createElement(g.a,{className:t.paper,id:"module-activejobs"},r.a.createElement(N.a,{variant:"h5",className:"module-header",id:"active"},"Active"),r.a.createElement(we,{user:a,inputDisabled:"true"})),r.a.createElement(g.a,{className:t.paper,id:"module-completedjobs"},r.a.createElement(N.a,{variant:"h5",className:"module-header",id:"completed"},"Completed")),r.a.createElement(je,null)))},De=t(556),Be=t(531),Ae=t(564),Pe=t(530),Ie=t(40),Te=t(296),Fe=t(559),We=t(566),Re=t(208),Je=t(19);var qe=function(e){var a=e.data;console.log(a);var t=Je.e.create({companyInfo:{paddingTop:10,paddingLeft:45,paddingBottom:20},billingInfo:{paddingTop:10,paddingLeft:45,paddingBottom:20},invoiceInfo:{}});return console.log(a.data.client.location.streetAddress),r.a.createElement(Je.g,null,r.a.createElement(Je.g,{style:t.companyInfo},r.a.createElement(Je.f,null,"Three Leaves Co."),r.a.createElement(Je.f,null,"123 Landscaping Way"),r.a.createElement(Je.f,null,"Dublin, OH 43016"),r.a.createElement(Je.f,null,"United States")),r.a.createElement(Je.g,{style:t.billingInfo},r.a.createElement(Je.f,null,"Billed To:"),r.a.createElement(Je.f,null,a.data.client.name),r.a.createElement(Je.f,null,a.data.client.location.streetAddress),r.a.createElement(Je.f,null,a.data.client.location.city,", ",a.data.client.location.state," ",a.data.client.location.zipcode)))};var Ge=function(e){e.data;var a=Je.e.create({table:{flexDirection:"row",flexWrap:"wrap",marginTop:24,borderWidth:1,borderColor:"#bff0fd"},tableWrapper:{flexDirection:"row",borderBottomColor:"#bff0fd",backgroundColor:"#bff0fd",borderBottomWidth:1,alignItems:"center",height:24,textAlign:"center",fontStyle:"bold",flexGrow:1},description:{width:"60%",borderRightColor:"#90e5fc",borderRightWidth:1},qty:{width:"10%",borderRightColor:"#90e5fc",borderRightWidth:1},rate:{width:"15%",borderRightColor:"#90e5fc",borderRightWidth:1},amount:{width:"15%"}}),t=Object(n.useState)([]),c=Object(m.a)(t,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){C.getPurchases().then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),console.log(i),r.a.createElement(Je.g,{style:a.table},r.a.createElement(Je.g,{style:a.tableWrapper},r.a.createElement(Je.f,{style:a.description},"Item Description"),r.a.createElement(Je.f,{style:a.qty},"Qty"),r.a.createElement(Je.f,{style:a.rate},"Rate"),r.a.createElement(Je.f,{style:a.amount},"Amount")))};var Le=function(e){var a=e.data,t=Je.e.create({notes:{paddingRight:45,paddingBottom:10,paddingTop:10,paddingLeft:45},notesBox:{backgroundColor:"#d3d3d3",padding:4}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je.g,{style:t.notes},r.a.createElement(Je.f,null,"Notes:"),r.a.createElement(Je.g,{style:t.notesBox},r.a.createElement(Je.f,null,a.data.notes))))},_e=t(294),He=t.n(_e);var Ue=function(e){var a=e.formObject,t=Je.e.create({page:{fontFamily:"Helvetica",fontSize:11,paddingTop:30,paddingLeft:60,paddingRight:60,lineHeight:1.5,flexDirection:"column"},logo:{paddingTop:20,width:74,height:66,marginLeft:"auto",marginRight:"auto"}});return r.a.createElement(Je.a,null,r.a.createElement(Je.d,{size:"A4",style:t.page},r.a.createElement(Je.b,{style:t.logo,src:He.a}),r.a.createElement(qe,{data:a}),r.a.createElement(Ge,{data:a}),r.a.createElement(Le,{data:a})))};var ze=function(e){var a=e.formObject;return console.log(a),r.a.createElement(n.Fragment,null,r.a.createElement(Je.c,{width:"300vw",height:"300vw",className:"app"},r.a.createElement(Ue,{formObject:a})))},Me=["in","children","onEnter","onExited"],Qe=Object(x.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),Ve=r.a.forwardRef((function(e,a){var t=e.in,n=e.children,c=e.onEnter,i=e.onExited,l=Object(Te.a)(e,Me),o=Object(Re.useSpring)({from:{opacity:0},to:{opacity:t?1:0},onStart:function(){t&&c&&c()},onRest:function(){!t&&i&&i()}});return r.a.createElement(Re.animated.div,Object.assign({ref:a,style:o},l),n)}));function Ke(e){var a=e.open,t=e.handleClose,n=e.formObject,c=Qe();return r.a.createElement("div",null,r.a.createElement(Fe.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:c.modal,open:a,onClose:t,closeAfterTransition:!0,BackdropComponent:We.a,BackdropProps:{timeout:500}},r.a.createElement(Ve,{in:a},r.a.createElement("div",{className:c.paper},r.a.createElement(ze,{formObject:n})))))}var Ye=t(67),Xe=t(558),Ze=t(555),$e=Object(x.a)((function(e){return{table:{width:"70vw"},formControl:{margin:e.spacing(1),width:"20vw"}}})),ea=0;function aa(e){var a=e.row,t=e.handleDataChange,c=e.deleteRow,i=e.serviceEl,l=e.quantityEl,o=$e(),s=a.index,d=Object(n.useState)([]),p=Object(m.a)(d,2),b=p[0],E=p[1],h=Object(n.useState)([]),g=Object(m.a)(h,2),v=g[0],w=g[1];Object(n.useEffect)((function(){C.getServices().then((function(e){e.data.length>0&&w(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(pe.a,{component:"tr"},r.a.createElement(be.a,{component:"td"},r.a.createElement(Be.a,{className:o.formControl},r.a.createElement(Ae.a,{shrink:!0,id:"serviceLabel"},"Service"),r.a.createElement(Xe.a,{ref:i,name:"service",labelId:"serviceLabel",id:"service",variant:"filled",onChange:function(e){E(Object(P.a)(Object(P.a)({},b),{},{service:e.target.value})),console.log(b),t(Object(P.a)(Object(P.a)({},b),{},{index:s}))}},v.map((function(e){return r.a.createElement(Ze.a,{key:e.name,value:JSON.stringify(e)},e.name)}))))),r.a.createElement(be.a,{component:"td"},r.a.createElement(Be.a,{className:o.formControl},r.a.createElement(Ae.a,{shrink:!0,id:"serviceQtyLabel"},"Qty"),r.a.createElement(f.a,{ref:l,name:"quantity",id:"qty",type:"number",align:"right",variant:"filled"}))),r.a.createElement(be.a,{variant:"contained",color:"secondary",component:"td"},r.a.createElement(u.a,{type:"button",variant:"contained",color:"secondary",className:"btn btn-remove ",onClick:function(){c(s)}},"\xd7")))}var ta=function(e){var a=e.jobData,t=$e(),c=Object(n.useRef)(null),i=Object(n.useRef)(null),l=Object(n.useState)([{index:0,service:{},quantity:""}]),o=Object(m.a)(l,2),s=o[0],d=o[1],p=function(e){s[e.index]=e,console.log(e)},f=function(e){if(s.length>1){var a=Object(Ye.a)(s),t=a.findIndex((function(a){return a.index==e}));t>-1&&(a.splice(t,1),d(a))}};return r.a.createElement(me.a,null,r.a.createElement(de.a,{component:"table",className:t.table,"aria-label":"services rendered"},r.a.createElement(ue.a,{id:"service-table-head"},r.a.createElement(pe.a,null,r.a.createElement(be.a,{className:"service-table-header"},"Select Service"),r.a.createElement(be.a,{className:"service-table-header"},"Qty."),r.a.createElement(be.a,{className:"service-table-header"},"Delete"))),r.a.createElement(fe.a,null,s.map((function(e,a){if(e)return r.a.createElement(aa,{serviceEl:i,quantityEl:c,key:a,row:e,handleDataChange:p,deleteRow:f})})))),r.a.createElement("div",{id:"service-button-wrapper"},r.a.createElement(u.a,{id:"save-btn",variant:"contained",onClick:function(e){e.preventDefault(),console.log(i.current.children[1].value,c.current.children[0].children[0].value),console.log(a);var t=JSON.parse(i.current.children[1].value),n={service_id:t.name,price:t.price,quantity:c.current.children[0].children[0].value,job_id:a._id};C.postPurchase(n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Save"),r.a.createElement(u.a,{id:"add-serv-btn",onClick:function(){ea=parseFloat(ea)+1;var e=Object(Ye.a)(s);e[ea]={index:ea,service:{},price:0,quantity:0},d(e)}},"+ Add Service")))},na=Object(x.a)((function(e){var a;return{root:{display:"flex",flexDirection:"row","& > *":{margin:e.spacing(2)}},input:(a={width:"100%",margin:e.spacing(1,2,1,0)},Object(A.a)(a,e.breakpoints.up("md"),{width:"100%"}),Object(A.a)(a,e.breakpoints.up("lg"),{width:"100%"}),a),TextField:{width:"100%",margin:e.spacing(1,2,1,0)},button:{margin:e.spacing(2),width:"100%"},container:{margin:e.spacing(2)},break:{flexBasis:"100%",height:0}}}));function ra(e){var a,t,c,i=na(),l=Object(n.useState)({}),d=Object(m.a)(l,2),p=d[0],b=d[1],E=Object(n.useState)({}),h=Object(m.a)(E,2),g=h[0],v=h[1],w=(Object(Ie.g)(),function(e){var a=e.target,t=a.name,n=a.value;b(Object(P.a)(Object(P.a)({},p),{},Object(A.a)({},t,n)))});Object(n.useEffect)((function(){e.id&&C()}),[]),Object(n.useEffect)((function(){e.id&&S()}),[]);var j=r.a.useState(!1),y=Object(m.a)(j,2),x=y[0],O=y[1],C=function(){var a=Object(s.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k()({method:"GET",url:"/api/jobs/".concat(e.id)}).then((function(e){var a;b((a={type:e.data[0].client.type,name:e.data[0].client.name,location:e.data[0].client.location.streetAddress,phone:e.data[0].client.phone,email:e.data[0].client.email,quote:e.data[0].quote_date},Object(A.a)(a,"quote",e.data[0].quote_price),Object(A.a)(a,"start",e.data[0].start_date),Object(A.a)(a,"end",e.data[0].end_date),Object(A.a)(a,"description",e.data[0].description),Object(A.a)(a,"notes",e.data[0].notes),a))})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),S=function(){var a=Object(s.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k()({method:"GET",url:"/api/jobs/".concat(e.id)}).then((function(e){console.log(e.data),v({data:e.data[0]})})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return console.log(g),r.a.createElement("div",{className:i.root,id:"jobsform"},r.a.createElement("form",{className:"form-flex",name:"job-details"},r.a.createElement(Be.a,{className:i.formControl},r.a.createElement(Ae.a,{shrink:!0,className:i.formControl,htmlFor:"clientName"}," Client Name"),r.a.createElement(Pe.a,{id:"clientName",label:"Client Name",name:"name",variant:"filled",className:i.input,value:p.name,onChange:w,disabled:e.inputDisabled})),r.a.createElement("div",{className:i.break}),r.a.createElement("hr",{className:"jobform-divider"}),r.a.createElement("div",{className:i.break}),r.a.createElement(Be.a,null,r.a.createElement(Ae.a,{shrink:!0,htmlFor:"contactPhone"},"Contact Phone"),r.a.createElement(Pe.a,{id:"contactPhone",name:"phone",onChange:w,className:i.input,variant:"standard",value:p.phone,disabled:e.inputDisabled})),r.a.createElement(Be.a,null,r.a.createElement(Ae.a,{shrink:!0,htmlFor:"contactEmail"},"Contact Email"),r.a.createElement(Pe.a,{id:"contactEmail",name:"email",onChange:w,className:i.input,variant:"standard",label:"Contact Email",value:p.email,disabled:e.inputDisabled})),r.a.createElement("div",{className:i.break}),r.a.createElement("hr",{className:"jobform-divider"}),r.a.createElement("div",{className:i.break}),r.a.createElement(Be.a,null,r.a.createElement(Ae.a,{shrink:!0,htmlFor:"jobLocation"},"Site Location"),r.a.createElement(f.a,(a={variant:"filled",id:"jobLocation",name:"location",onChange:w,className:i.TextField,placeholder:"123 Lawncare Lane, Greenville, OH 45331"},Object(A.a)(a,"variant","filled"),Object(A.a)(a,"value",p.location),Object(A.a)(a,"disabled",e.inputDisabled),a))),r.a.createElement("div",{className:i.break}),r.a.createElement(Be.a,null,r.a.createElement(Ae.a,{shrink:!0,htmlFor:"Description"},"Job Description"),r.a.createElement(f.a,(t={variant:"filled",id:"Description",name:"description",onChange:w,className:i.TextField,multiline:!0,rows:4,placeholder:"Describe Approved Work"},Object(A.a)(t,"variant","filled"),Object(A.a)(t,"value",p.description),Object(A.a)(t,"disabled",e.inputDisabled),t))),r.a.createElement("div",{className:i.break}),r.a.createElement(N.a,{variant:"body1"},"Notes:"),r.a.createElement(Be.a,null,r.a.createElement(f.a,{id:"notes",name:"notes",onChange:w,className:i.TextField,multiline:!0,rows:4,placeholder:"Directions, special considerations, etc.",variant:"filled",value:p.notes})),r.a.createElement(ta,{jobData:g}),r.a.createElement("div",{className:i.break})," ","Administrator"===(null===(c=e.user)||void 0===c?void 0:c.type)&&r.a.createElement(u.a,{id:"add-job-btn",className:i.button,variant:"contained",onClick:function(a){a.preventDefault(),e.APIFunction({client:{type:p.type,name:p.name,location:{streetAddress:p.location},phone:p.phone,email:p.email},quote_date:p.quote,start_date:p.start,end_date:p.end,quote_price:p.price,description:p.description,notes:p.notes}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Add Job"),r.a.createElement(u.a,{id:"invoice-btn",className:i.button,variant:"contained",onClick:function(){O(!0)}},"Create Invoice"),r.a.createElement(Ke,{open:x,handleClose:function(){O(!1)},formObject:g})))}var ca=Object(x.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{},button:{margin:e.spacing(2),width:"7rem"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function ia(e){var a=ca();return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(De.a,{maxWidth:"lg",className:a.container},r.a.createElement(g.a,{className:a.paper,id:"new-job-page"},r.a.createElement(N.a,{variant:"h5",id:"new-job-title"},"New Job"),r.a.createElement(ra,Object.assign({},e,{APIFunction:C.createJob,setDisable:!1,setDefaultValue:""}))),r.a.createElement(je,null))))}var la=t(36),oa=t(48),sa=t(49),ma=t(50),da=(n.Component,Object(x.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},button:{margin:e.spacing(2),width:"7rem"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}})));function ua(e){var a=da(),t=r.a.useState({}),c=Object(m.a)(t,2),i=c[0],l=c[1],o=Object(Ie.h)().id;ee()().format("h:mm a");Object(n.useEffect)((function(){C.getJobById(o).then((function(e){return l(e.data)}))}),[]);return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(De.a,{maxWidth:"lg",className:a.container},r.a.createElement(g.a,{className:a.paper,id:"job-detail-page"},r.a.createElement(N.a,{variant:"h5"}),r.a.createElement(ra,Object.assign({id:o},e,{job:i})),r.a.createElement(u.a,{id:"job-complete-btn",variant:"contained",onClick:function(e){e.preventDefault(),k.a.put("/api/jobs/"+o,{completed:!0})}},"Mark Job Complete")),r.a.createElement(je,null))))}var pa=t(295);var fa=function(e){var a=e.job;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"job",id:a._id},r.a.createElement("div",{className:"job-header"},r.a.createElement("h2",{className:"job-client-name"},a.client.name),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("h3",{className:"job-client-type"},a.client.type," ",r.a.createElement("span",{className:"client-location"},"- ",a.client.location.city)))),r.a.createElement("div",{className:"description-wrapper"},r.a.createElement("h4",null,a.description))))};var ba=function(e){var a=e.crew,t=Object(n.useState)([]),c=Object(m.a)(t,2),i=c[0],l=c[1],o=Object(n.useRef)(null);if(null!==o.current)new pa.a(o.current,{group:"shared",animation:150,onEnd:function(e){var a=e.item,t=function(e){console.log(e),fetch("/api/jobs/".concat(a.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))};!function(){var n={_id:a.id,dailyPosition:e.newIndex+1,crewAssignedToo:e.to.id};t(n)}()}});return Object(n.useEffect)((function(){C.getJobs().then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list"},r.a.createElement("h2",{className:"crew-header"},a),r.a.createElement("div",{ref:o,className:"job-list",id:a},i.filter((function(e){return e.crewAssignedToo===a})).sort((function(e,a){return+(e.dailyPosition>a.dailyPosition)||+(e.dailyPosition===a.dailyPosition)-1||+(e.updatedAt<a.updatedAt)||+(e.updatedAt===a.updatedAt)-1})).map((function(e){return r.a.createElement(fa,{job:e,key:e._id})})))))},Ea=Object(x.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{margin:e.spacing(2)},button:{margin:e.spacing(2)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}}));function ha(){var e=Ea();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement("div",{className:"crewListWrapper"},["Crew #1","Crew #2","Crew #3","Crew #4"].map((function(e,a){return r.a.createElement(ba,{crew:e,key:a})}))),r.a.createElement("div",{className:"unassigned-Wrapper"},r.a.createElement(ba,{crew:"Unassigned Jobs"})),r.a.createElement(je,null)))}var ga=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:"/auth/user"}).then((function(e){c(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(t),r.a.createElement(X.a,null,!t&&r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{exact:!0,path:"/"},r.a.createElement(B,{setUser:c})),r.a.createElement(Ie.a,{to:"/"})),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{linkHidden:"Administrator"!==t.type,setUser:c}),r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{exact:!0,path:["/","/dashboard"]},"Administrator"===t.type?r.a.createElement(ke,{user:t}):r.a.createElement(Se,{user:t})),r.a.createElement(Ie.b,{exact:!0,path:"/createjob"},"Administrator"===t.type?r.a.createElement(ia,{user:t}):""," "),r.a.createElement(Ie.b,{exact:!0,path:"/crews"},"Administrator"===t.type?r.a.createElement(ha,null):""," "),r.a.createElement(Ie.b,{exact:!0,path:"/jobdetail/:id"},r.a.createElement(ua,{inputDisabled:"Employee"===t.type})),r.a.createElement(Ie.b,{exact:!0,path:"/form"},r.a.createElement(ze,null)),r.a.createElement(Ie.b,{exact:!0,path:"/jobdetail",component:function(){return r.a.createElement(ua,{user:t})}}),r.a.createElement(Ie.a,{to:"/"}))))};i.a.render(r.a.createElement(ga,null),document.getElementById("root"))}},[[308,1,2]]]);
//# sourceMappingURL=main.0847ea65.chunk.js.map