(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7359],{78236:function(e,n,t){"use strict";t.r(n);var r=t(74165),i=t(93433),c=t(15861),a=t(4942),s=t(29439),o=t(1413),l=t(72791),d=t(36314),u=t(20890),h=t(39157),x=t(90493),p=t(49900),Z=t(46112),j=t(13400),f=t(94721),m=t(48550),v=t(61889),g=t(57064),y=t(57621),b=t(39504),C=t(24518),k=t(41286),w=t(27247),S=t(5574),P=t(66443),A=t(76278),I=(t(97242),t(31243)),_=t(33805),F=t(65661),E=t(97123),B=t(53540),D=t(78703),O=t.n(D),T=t(78316),L=t(38072),M=t(57689),U=t(90796),W=t(75985),N=t(80184),z=function(e){var n=O().sanitize(e,{USE_PROFILES:{html:!0}});return(0,B.ZP)(n)};var H=["itadmin","admin"];n.default=function(){var e=(0,T.E)().user,n=(0,M.s0)(),t=new Date,B=t.getHours(),D=B<=12?0:B<=17?1:2,O="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],", ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate()),G=(0,l.useState)(""),J=(0,s.Z)(G,2),R=J[0],V=J[1],q=["news","blog","policy"],K={};q.forEach((function(e){return K[e]=[]}));var Q=(0,l.useState)(K),X=(0,s.Z)(Q,2),Y=X[0],$=X[1],ee=(0,l.useState)([]),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],ie=function(n){q.forEach((function(n){I.Z.get("".concat(_.BC,"/services/").concat(n,"/").concat(e.company,"?adminId=").concat("","&limit=").concat(5)).then((function(e){$((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},n,e.data))}))}))})),I.Z.get("".concat(_.BC,"/services/").concat(n,"/").concat(e.company,"?adminId=").concat("","&limit=").concat(5)).then((function(e){re(e.data)}))};(0,l.useEffect)((function(){if(e){ke();q.forEach((function(n){I.Z.get("".concat(_.BC,"/services/").concat(n,"/").concat(e.company,"?adminId=").concat("","&limit=").concat(5)).then((function(e){$((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},n,e.data))}))}))}))}}),[e]);var ce,ae=l.useState(!1),se=(0,s.Z)(ae,2),oe=se[0],le=se[1],de=l.useState(null),ue=(0,s.Z)(de,2),he=ue[0],xe=ue[1],pe=function(e,n){le(!0),e.content=n,xe(e)},Ze=function(){le(!1),re([])},je=(0,l.useState)({service:null}),fe=(0,s.Z)(je,2),me=fe[0],ve=fe[1],ge=(0,l.useState)([]),ye=(0,s.Z)(ge,2),be=ye[0],Ce=ye[1],ke=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!H.includes(e.role)){n.next=4;break}I.Z.get("".concat(_.BC,"/project/").concat(e.company)).then((function(e){Ce(e.data)})),n.next=13;break;case 4:if("manager"!==e.role){n.next=8;break}I.Z.get("".concat(_.BC,"/project/").concat(e.company,"?managerId=").concat(e.email)).then((function(e){Ce(e.data)})),n.next=13;break;case 8:if(t=e.firestore.projects){n.next=11;break}return n.abrupt("return");case 11:Ce([]),t.map((function(n){I.Z.get("".concat(_.BC,"/project/").concat(e.company,"?managerId=").concat(n)).then((function(e){Ce((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e.data))}))}))}));case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),we=(0,l.useState)(null),Se=(0,s.Z)(we,2),Pe=Se[0],Ae=Se[1],Ie=function(){localStorage.removeItem(Pe.service),Ae(null)},_e=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,a.Z)({subject:Pe.subject},n,Pe["".concat(n,"Ans")]),e.prev=1,e.next=4,I.Z.patch("".concat(_.BC,"/services/").concat(n,"/").concat(Pe._id),{payload:t});case 4:1===e.sent.data&&(W.Am.success("".concat(n," updated")),ie(n),Ie()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),W.Am.error("Error, try again !");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(S.Z,{open:oe,onClose:Ze,scroll:"paper",fullWidth:!0,maxWidth:"lg",children:["detailed info"===R?(0,N.jsx)(N.Fragment,{children:he&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(F.Z,{id:"scroll-dialog-title",children:(0,N.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,N.jsx)("div",{children:he.subject}),(0,N.jsx)("div",{children:(0,N.jsxs)(u.Z,{variant:"overline",children:["Published: ",new Date(he.createdOn).toDateString()]})})]})}),(0,N.jsx)(h.Z,{dividers:!0,sx:{height:"600px"},children:(0,N.jsx)("div",{id:"scroll-dialog-description",children:z(he[he.content])})})]})}):(0,N.jsx)(N.Fragment,{children:R&&te&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(F.Z,{id:"scroll-dialog-title",children:["All ",R.charAt(0).toUpperCase()+R.slice(1)]}),(0,N.jsx)(h.Z,{dividers:!0,sx:{height:"600px"},children:(0,N.jsx)(x.Z,{sx:{p:"0px"},children:0!==te.length?te.map((function(n,t){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(A.Z,{alignItems:"flex-start",sx:{p:"0px"},onClick:function(){ve({service:R}),V("detailed info"),pe(n,R)},children:[(0,N.jsx)(p.Z,{primaryTypographyProps:{overflow:"clip",padding:"8px"},secondaryTypographyProps:{overflow:"clip"},primary:n.subject.slice(0,50)+(n.subject.length>50?"....":"")}),H.includes(e.role)&&(0,N.jsx)(Z.Z,{children:(0,N.jsxs)(d.Z,{direction:"row",spacing:2,alignItems:"flex-end",children:[(0,N.jsx)(j.Z,{onClick:function(e){e.stopPropagation();var t=(0,o.Z)({},n);t.service=R,t["".concat(R,"Ans")]=n[R],Ae(t),Ze()},color:"info",component:"label",children:(0,N.jsx)(k.Z,{})}),(0,N.jsx)(j.Z,{onClick:(i=null===n||void 0===n?void 0:n._id,function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),t=R,e.next=4,I.Z.delete("".concat(_.BC,"/services/").concat(t,"/").concat(i));case 4:1===e.sent.data&&ie(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),color:"error",component:"label",children:(0,N.jsx)(w.Z,{})})]})})]},t),(0,N.jsx)(f.Z,{component:"li"})]});var i})):null})})]})}),(0,N.jsxs)(E.Z,{children:[me.service&&(0,N.jsx)(C.Z,{onClick:function(){V(me.service),ve((function(e){return(0,o.Z)((0,o.Z)({},e),{},{service:null})}))},children:"Back"}),(0,N.jsx)(C.Z,{onClick:Ze,children:"Close"})]})]}),(0,N.jsxs)(S.Z,{maxWidth:"lg",fullWidth:!0,fullScreen:!0,open:Pe,onClose:Ie,scroll:"paper",children:[(0,N.jsxs)(F.Z,{children:["Edit ",null===Pe||void 0===Pe?void 0:Pe.service]}),(0,N.jsxs)(h.Z,{children:[Pe&&(0,N.jsxs)(d.Z,{spacing:2,m:"auto",children:[(0,N.jsxs)("div",{children:[(0,N.jsx)(u.Z,{variant:"p",children:"Subject"}),(0,N.jsx)(m.Z,{type:"text",variant:"outlined",fullWidth:!0,value:Pe.subject,onChange:function(e){Ae((function(n){return(0,o.Z)((0,o.Z)({},n),{},{subject:e.target.value})}))}})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)(u.Z,{variant:"p",children:Pe.service.charAt(0).toUpperCase()+Pe.service.slice(1)}),(0,N.jsx)(U.Z,{id:Pe.service,value:Pe,setValue:(ce=Pe.service,function(e){Ae((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},"".concat(ce,"Ans"),e))}))})})]})]}),(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),(0,N.jsx)(C.Z,{sx:{mr:2},onClick:Ie,children:"Close"}),(0,N.jsxs)(C.Z,{variant:"contained",onClick:function(){_e(null===Pe||void 0===Pe?void 0:Pe.service)},children:["Update ",null===Pe||void 0===Pe?void 0:Pe.service]})]})]}),e&&(0,N.jsxs)(u.Z,{variant:"h4",children:["Good ",["Morning","Afternoon","Evening"][D],", ",e.displayName]}),(0,N.jsxs)(v.ZP,{container:!0,colspacing:2,children:[(0,N.jsx)(v.ZP,{item:!0,xs:2.5,children:(0,N.jsx)(u.Z,{children:O})}),(0,N.jsxs)(v.ZP,{item:!0,xs:!0,p:2,children:[(0,N.jsx)(v.ZP,{container:!0,spacing:2,children:q.map((function(n){return(0,N.jsx)(v.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,N.jsx)(y.Z,{variant:"outlined",sx:{height:"300px"},children:(0,N.jsxs)(b.Z,{children:[(0,N.jsx)(u.Z,{fullWidth:!0,sx:{cursor:"pointer"},onMouseOver:function(e){e.target.style.textDecoration="underline"},onMouseLeave:function(e){e.target.style.textDecoration=""},color:"primary",onClick:function(t){V(n),function(n){le(!0);var t="admin"===e.firestore.role?e.uid:"";I.Z.get("".concat(_.BC,"/services/").concat(n,"/").concat(e.company,"?adminId=").concat(t,"&limit=").concat("")).then((function(e){re(e.data)}))}(n)},children:n.charAt(0).toUpperCase()+n.slice(1)}),(0,N.jsx)("hr",{}),(0,N.jsx)(x.Z,{sx:{p:"0px"},children:0!==Y[n].length?Y[n].map((function(e){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(A.Z,{alignItems:"flex-start",sx:{p:"0px"},onClick:function(){V("detailed info"),pe(e,n)},children:(0,N.jsx)(p.Z,{primaryTypographyProps:{overflow:"clip",padding:"8px"},secondaryTypographyProps:{overflow:"clip"},primary:e.subject.slice(0,30)+(e.subject.length>30?"....":"")})}),(0,N.jsx)(f.Z,{component:"li"})]})})):null})]})})})}))}),(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),(0,N.jsx)(u.Z,{variant:"h4",children:"Project Feeds"}),(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(A.Z,{divider:!0,children:(0,N.jsxs)(v.ZP,{container:!0,children:[(0,N.jsx)(v.ZP,{item:!0,xs:4,children:(0,N.jsx)(d.Z,{direction:"row",children:(0,N.jsx)(p.Z,{primary:"Project Name",secondary:" "})})}),(0,N.jsx)(v.ZP,{item:!0,xs:5,children:(0,N.jsx)(d.Z,{direction:"row",children:(0,N.jsx)(p.Z,{primary:"Assignee"})})}),(0,N.jsx)(v.ZP,{item:!0,xs:3,children:(0,N.jsx)(d.Z,{direction:"row",children:(0,N.jsx)(p.Z,{primary:"Last Activity"})})})]})}),be&&be.map((function(e,t){if(!(t>=8))return(0,N.jsx)(A.Z,{divider:!0,onClick:function(){n("".concat(L.vB.general.projectview,"?id=").concat(e._id,"&title=").concat(e.name))},children:(0,N.jsxs)(v.ZP,{container:!0,children:[(0,N.jsx)(v.ZP,{item:!0,xs:4,children:(0,N.jsxs)(d.Z,{direction:"row",children:[(0,N.jsx)(g.Z,{children:(0,N.jsx)(P.Z,{})}),"\xa0\xa0\xa0",(0,N.jsx)(p.Z,{primary:e.name,secondary:e.desc})]})}),(0,N.jsx)(v.ZP,{item:!0,xs:5,children:(0,N.jsxs)(d.Z,{direction:"row",children:[(0,N.jsx)(g.Z,{children:(0,N.jsx)(P.Z,{})}),"\xa0\xa0\xa0",(0,N.jsx)(p.Z,{primary:e.managerId})]})}),(0,N.jsx)(v.ZP,{item:!0,xs:3,children:(0,N.jsxs)(d.Z,{direction:"row",children:[(0,N.jsx)(g.Z,{children:(0,N.jsx)(P.Z,{})}),"\xa0\xa0\xa0",(0,N.jsx)(p.Z,{primary:new Date(e.createdOn).toLocaleString()})]})})]})})}))]})]})]})]})}},90796:function(e,n,t){"use strict";t(72791);var r=t(28187),i=t.n(r),c=(t(80729),t(60908)),a=t(30777),s=t(95395),o=t(19719),l=t(8432),d=t(48773),u=t(9092),h=t(77425),x=t(28467),p=t(80177),Z=t(76920),j=t(32286),f=t(29889),m=t(12267),v=t(71918),g=t(80184);n.Z=function(e){var n=e.id,t=e.value,r=e.setValue;return(0,g.jsx)(i(),{id:n,autoFocus:!0,lang:"en",setOptions:{showPathLabel:!1,minHeight:"50vh",maxHeight:"50vh",placeholder:"Enter your text here ...",plugins:[c.Z,a.Z,s.Z,o.Z,l.Z,d.Z,u.Z,h.Z,x.Z,p.Z,Z.Z,j.Z,f.Z,m.Z,v.Z],buttonList:[["undo","redo"],["font","fontSize","formatBlock"],["paragraphStyle"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor"],["removeFormat"],"/",["outdent","indent"],["align","horizontalRule","list","lineHeight"],["table","link","image"],["fullScreen"]],formats:["p","div","h1","h2","h3","h4","h5","h6"],font:["Arial","Calibri","Comic Sans","Courier","Garamond","Georgia","Impact","Lucida Console","Palatino Linotype","Segoe UI","Tahoma","Times New Roman","Trebuchet MS"]},setDefaultStyle:"font-family: Arial; font-size: 16px;",setContents:localStorage.getItem(n)||t["".concat(n,"Ans")],value:t["".concat(n,"Ans")],onChange:function(e){r(e),localStorage.setItem(n,e)}})}},97699:function(e,n,t){var r={"./ckb.js":82871,"./da.js":59651,"./de.js":64639,"./en.js":75213,"./es.js":47068,"./fr.js":78488,"./he.js":93179,"./index.js":87488,"./it.js":63577,"./ja.js":10916,"./ko.js":19920,"./lv.js":39985,"./nl.js":14076,"./pl.js":71676,"./pt_br.js":3204,"./ro.js":59575,"./ru.js":70123,"./se.js":52372,"./ua.js":63854,"./zh_cn.js":79602};function i(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id=97699}}]);
//# sourceMappingURL=7359.9142fcb5.chunk.js.map