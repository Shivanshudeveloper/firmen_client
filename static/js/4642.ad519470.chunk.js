(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4642],{57867:function(e,n,t){"use strict";var a=t(1413),r=(t(72791),t(61889)),s=t(20890),c=t(68096),i=t(58406),l=t(23786),o=t(48550),u=t(7792),d=t(36571),h=t(53106),x=t(80184);n.Z=function(e){var n=e.empTask,t=e.employeeList,Z=e.handleEmpTask;return(0,x.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,x.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,x.jsx)(s.Z,{variant:"p",children:"Select Employee"}),(0,x.jsx)("br",{}),(0,x.jsx)(c.Z,{fullWidth:!0,children:(0,x.jsxs)(i.Z,{fullWidth:!0,id:"demo-simple-select",value:n.employee,onChange:Z("employee"),children:[t?(0,x.jsx)(l.Z,{value:"None",children:"None"}):(0,x.jsx)(l.Z,{value:"None",children:"No employee found"}),t&&t.map((function(e,n){return(0,x.jsx)(l.Z,{value:e.email,children:e.email},e.email)}))]})})]}),(0,x.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,x.jsx)(s.Z,{variant:"p",children:"Task Name"}),(0,x.jsx)(o.Z,{variant:"outlined",fullWidth:!0,type:"text",value:n.task,onChange:Z("task")})]}),(0,x.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,x.jsx)(s.Z,{variant:"p",children:"Source Name"}),(0,x.jsx)(o.Z,{variant:"outlined",fullWidth:!0,type:"text",value:n.source,onChange:Z("source")})]}),(0,x.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,x.jsx)(s.Z,{variant:"p",children:"Source URL (If applicable *)"}),(0,x.jsx)(o.Z,{variant:"outlined",fullWidth:!0,type:"text",value:n.url,onChange:Z("url")})]}),(0,x.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,x.jsx)(s.Z,{variant:"p",children:"Due Date"}),(0,x.jsx)("br",{}),(0,x.jsx)(d._,{dateAdapter:u.y,children:(0,x.jsx)(h.M,{disablePast:!0,openTo:"year",views:["year","month","day"],value:n.due,onChange:Z("due"),renderInput:function(e){return(0,x.jsx)(o.Z,(0,a.Z)({},e))}})})]})]})}},56054:function(e,n,t){"use strict";t.r(n);var a=t(4942),r=t(1413),s=t(74165),c=t(15861),i=t(29439),l=t(72791),o=t(5574),u=t(65661),d=t(39157),h=t(48550),x=t(97123),Z=t(24518),p=t(61889),f=t(20890),m=t(88970),j=t(85523),g=t(61419),v=t(35527),k=t(39281),y=t(79836),b=t(56890),w=t(35855),C=t(53994),S=t(53382),_=t(81918),A=t(42419),T=t(68096),N=t(64554),P=(t(49348),t(26467)),W=t(78316),B=t(57867),D=t(31243),E=t(33805),R=t(75985),F=t(57689),I=t(80184);n.default=function(){var e=(0,W.E)().user,n=(0,F.TH)(),t=new URLSearchParams(n.search).get("goalId");if(!t)return(0,I.jsx)(I.Fragment,{children:"Bad Request"});var L=l.useState(null),U=(0,i.Z)(L,2),O=U[0],J=U[1],M=l.useState(!1),q=(0,i.Z)(M,2),H=q[0],z=q[1],G=l.useState([]),K=(0,i.Z)(G,2),Q=K[0],V=K[1],X=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){var t,a;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.RZ.collection(P.hJ).where("projects","array-contains",e.email).get();case 2:t=n.sent,a=[],t.forEach((function(n){var t=n.data();n.id!==e.uid&&(t.uid=n.id,a.push(t))})),V(a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,l.useEffect)((function(){e&&(D.Z.get("".concat(E.BC,"/manager/emptask/").concat(e.company,"?key=goal&value=").concat(t)).then((function(e){se(e.data)})),X())}),[e]);var Y=(0,l.useState)(null),$=(0,i.Z)(Y,2),ee=$[0],ne=$[1];(0,l.useEffect)((function(){D.Z.get("".concat(E.BC,"/project/getgoal/").concat(t)).then((function(e){ne(e.data)}))}),[]);var te=(0,l.useState)([]),ae=(0,i.Z)(te,2),re=ae[0],se=ae[1],ce=function(){D.Z.get("".concat(E.BC,"/manager/emptask/").concat(e.company,"?key=goal&value=").concat(t)).then((function(e){se(e.data)}))};(0,l.useEffect)((function(){t&&ce()}),[]);var ie=l.useState(!1),le=(0,i.Z)(ie,2),oe=le[0],ue=le[1],de=function(e){J(e),ue(!0)},he=function(){ue(!1)},xe=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){var a,c;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("tasks"!==O){n.next=8;break}return a=(0,r.Z)((0,r.Z)({},fe),{},{managerId:e.uid,company:e.company,manager:e.displayName,goal:t}),n.next=4,D.Z.post("".concat(E.BC,"/manager/emptask"),{formData:a});case 4:"Created"===(c=n.sent).data?(R.Am.success("Task Assigned to ".concat(a.employee)),ce()):(console.log(c.data),R.Am.error("Some error occured, try again later !")),n.next=9;break;case 8:"resources"===O&&be();case 9:he();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Ze=(0,l.useState)({employee:"None",task:"",source:"",url:"",tag:" ",due:(new Date).toLocaleDateString()}),pe=(0,i.Z)(Ze,2),fe=pe[0],me=pe[1],je=(0,l.useState)({url:"",name:""}),ge=(0,i.Z)(je,2),ve=ge[0],ke=ge[1],ye=function(e){return function(n){ke((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,n.target.value))}))}},be=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ve.url&&ve.name){e.next=2;break}return e.abrupt("return");case 2:return n=ve,e.next=5,D.Z.patch("".concat(E.BC,"/project/goal/").concat(t),{payload:n});case 5:"Updated"===(a=e.sent).data?(D.Z.get("".concat(E.BC,"/project/getgoal/").concat(t)).then((function(e){ne(e.data)})),R.Am.success("Resource Added"),ke({url:"",name:""})):(console.log(a.data),R.Am.error("Some error occured"));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:n},e.next=3,D.Z.patch("".concat(E.BC,"/project/goal/").concat(t),{payload:a});case 3:1===(r=e.sent).data?D.Z.get("".concat(E.BC,"/project/getgoal/").concat(t)).then((function(e){ne(e.data)})):(console.log(r.data),R.Am.error("Some error occured !"));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(o.Z,{open:oe,onClose:he,fullWidth:!0,maxWidth:"sm","aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:["resources"===O?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.Z,{id:"alert-dialog-title",variant:"h3",children:"Add resources"}),(0,I.jsxs)(d.Z,{children:[(0,I.jsx)(h.Z,{label:"Name",fullWidth:!0,type:"text",variant:"outlined",value:ve.name,onChange:ye("name")}),(0,I.jsx)(h.Z,{label:"URL",fullWidth:!0,sx:{mb:2,mt:2},type:"text",variant:"outlined",value:ve.url,onChange:ye("url")})]})]}):null,"tasks"===O?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.Z,{id:"alert-dialog-title",variant:"h3",children:"Add Tasks"}),(0,I.jsx)(d.Z,{children:(0,I.jsx)(B.Z,{empTask:fe,employeeList:Q,handleEmpTask:function(e){return function(n){var t;t="due"===e?n:n.target.value,me((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},e,t))}))}}})})]}):null,(0,I.jsxs)(x.Z,{children:[(0,I.jsx)(Z.Z,{onClick:he,children:"Cancel"}),(0,I.jsx)(Z.Z,{onClick:xe,autoFocus:!0,children:"resources"===O?"Create Resource":"Add Task"})]})]}),(0,I.jsxs)(p.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,I.jsx)(p.ZP,{item:!0,xs:12,children:(0,I.jsx)(f.Z,{sx:{float:"left"},variant:"h3",children:null===ee||void 0===ee?void 0:ee.name})}),(0,I.jsxs)(p.ZP,{item:!0,xs:12,children:[(0,I.jsx)(T.Z,{children:(0,I.jsxs)(m.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:H,onChange:function(e){return z(JSON.parse(e.target.value))},children:[(0,I.jsx)(j.Z,{value:!1,control:(0,I.jsx)(g.Z,{}),label:"In-Progress"}),(0,I.jsx)(j.Z,{value:!0,control:(0,I.jsx)(g.Z,{}),label:"Completed"})]})}),(0,I.jsx)("br",{}),(0,I.jsx)("br",{}),(0,I.jsx)(f.Z,{variant:"h4",sx:{float:"left"},children:"Tasks"}),(0,I.jsx)(Z.Z,{variant:"contained",startIcon:(0,I.jsx)(A.Z,{}),sx:{float:"right"},onClick:function(){return de("tasks")},children:"Add Tasks"}),0==H||1==H?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(v.Z,{sx:{p:4,borderRadius:2,mt:8},children:(0,I.jsx)(k.Z,{component:v.Z,children:(0,I.jsxs)(y.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,I.jsx)(b.Z,{children:(0,I.jsxs)(w.Z,{children:[(0,I.jsx)(C.Z,{sx:{width:"25%"},align:"center",children:"Task"}),(0,I.jsx)(C.Z,{sx:{width:"15%"},align:"center",children:"Assigned By"}),(0,I.jsx)(C.Z,{sx:{width:"15%"},align:"center",children:"Assigned To"}),(0,I.jsx)(C.Z,{sx:{width:"10%"},align:"center",children:"Due Date"}),(0,I.jsx)(C.Z,{sx:{width:"10%"},align:"center",children:"Source"})]})}),(0,I.jsx)(S.Z,{children:re.map((function(e){if(e.status===H)return(0,I.jsxs)(w.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,I.jsx)(C.Z,{align:"center",scope:"row",children:(0,I.jsx)(f.Z,{sx:{pt:1},variant:"h6",children:e.task})}),(0,I.jsx)(C.Z,{align:"center",variant:"h6",children:e.manager}),(0,I.jsx)(C.Z,{align:"center",variant:"h6",children:"None"===e.employee?"-":e.employee}),(0,I.jsx)(C.Z,{align:"center",children:(0,I.jsx)(f.Z,{sx:{pt:1},variant:"h6",children:e.due})}),(0,I.jsx)(C.Z,{align:"center",children:(0,I.jsx)(f.Z,{sx:{pt:1},variant:"h6",children:(0,I.jsx)("a",{href:"".concat(e.url),target:"blank",children:e.source})})})]},e._id)}))})]})})})}):null,(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.Z,{variant:"h4",sx:{float:"left"},children:"Resources"}),(0,I.jsx)(Z.Z,{variant:"contained",startIcon:(0,I.jsx)(A.Z,{}),sx:{float:"right"},onClick:function(){return de("resources")},children:"Add resources"}),(0,I.jsx)(v.Z,{sx:{p:4,borderRadius:2,mt:4},children:(0,I.jsx)(N.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:null===ee||void 0===ee?void 0:ee.resources.map((function(e){return(0,I.jsx)(_.Z,{label:e.name,clickable:!0,onClick:function(){window.open(e.url,"_blank")},onDelete:function(){we(e._id)}},e._id)}))})})]})]})]})]})}},13411:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=13411,e.exports=n},62183:function(){},13024:function(){},62715:function(){},13611:function(){},28353:function(){},1210:function(){},43454:function(){}}]);
//# sourceMappingURL=4642.ad519470.chunk.js.map