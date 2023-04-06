"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3213],{86996:function(e,n,i){i.r(n),i.d(n,{default:function(){return u}});var r=i(65964),t=i(47825),a=i(61113),s=i(9019),o=i(57829),l=i(66281),c=i(48525),d=i(46417);function u(){var e=(0,l.Z)("up","md");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.ql,{children:(0,d.jsx)("title",{children:" Payment | Minimal UI"})}),(0,d.jsxs)(t.Z,{sx:{pt:15,pb:10,minHeight:1},children:[(0,d.jsx)(a.Z,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),(0,d.jsx)(a.Z,{align:"center",sx:{color:"text.secondary",mb:5},children:"Professional plan is right for you."}),(0,d.jsxs)(s.ZP,{container:!0,spacing:e?3:5,children:[(0,d.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,d.jsxs)(o.Z,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:{md:5},borderRadius:2,border:function(e){return{md:"dashed 1px ".concat(e.palette.divider)}}},children:[(0,d.jsx)(c.Wz,{}),(0,d.jsx)(c.A6,{})]})}),(0,d.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,d.jsx)(c.U3,{})})]})]})]})}},48525:function(e,n,i){i.d(n,{Wz:function(){return z},A6:function(){return A},ug:function(){return M},U3:function(){return N}});var r=i(1413),t=i(29439),a=i(47313),s=i(42832),o=i(61113),l=i(54299),c=i(70501),d=i(83929),u=i(74268),x=i(57829),p=i(24631),Z=i(24193),h=i(8730),v=i(45987),f=i(94469),m=i(33604),j=i(96467),g=i(41727),b=i(47131),y=i(4117),w=i(22608),C=i(46417),S=["onClose"];function M(e){var n=e.onClose,i=(0,v.Z)(e,S),o=(0,a.useState)(null),l=(0,t.Z)(o,2),c=l[0],d=l[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(f.Z,(0,r.Z)((0,r.Z)({maxWidth:"xs",onClose:n},i),{},{children:[(0,C.jsx)(m.Z,{children:" Add new card "}),(0,C.jsx)(j.Z,{sx:{overflow:"unset"},children:(0,C.jsxs)(s.Z,{spacing:3,children:[(0,C.jsx)(p.Z,{fullWidth:!0,label:"Name on card"}),(0,C.jsx)(p.Z,{fullWidth:!0,label:"Card number"}),(0,C.jsxs)(s.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,C.jsx)(p.Z,{label:"MM/YY"}),(0,C.jsx)(p.Z,{label:"CVV",InputProps:{endAdornment:(0,C.jsx)(g.Z,{position:"end",children:(0,C.jsx)(b.Z,{size:"small",edge:"end",onClick:function(e){d(e.currentTarget)},children:(0,C.jsx)(h.Z,{icon:"eva:info-fill"})})})}})]})]})}),(0,C.jsxs)(y.Z,{children:[(0,C.jsx)(Z.Z,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"}),(0,C.jsx)(Z.Z,{variant:"contained",onClick:n,children:"Add"})]})]})),(0,C.jsx)(w.Z,{open:c,onClose:function(){d(null)},arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}var k=[{value:"paypal",title:"Paypal",icons:["/assets/icons/payments/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",icons:["/assets/icons/payments/ic_mastercard.svg","/assets/icons/payments/ic_visa.svg"]}],P=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}];function A(){var e=(0,a.useState)("paypal"),n=(0,t.Z)(e,2),i=n[0],r=n[1],c=(0,a.useState)(!1),d=(0,t.Z)(c,2),u=d[0],x=d[1],p=function(){x(!0)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(s.Z,{spacing:5,children:[(0,C.jsx)(o.Z,{variant:"h6",children:"Payment Method"}),(0,C.jsx)(l.Z,{value:i,onChange:function(e){r(e.target.value)},children:(0,C.jsx)(s.Z,{spacing:3,children:k.map((function(e){return(0,C.jsx)(_,{option:e,isSelected:i===e.value,hasChild:"credit_card"===e.value,isCreditMethod:"credit_card"===e.value&&"credit_card"===i,onOpen:p},e.title)}))})})]}),(0,C.jsx)(M,{open:u,onClose:function(){x(!1)}})]})}function _(e){var n=e.option,i=e.hasChild,t=e.isSelected,a=e.isCreditMethod,o=e.onOpen,l=n.value,v=n.title,f=n.icons;return(0,C.jsxs)(c.Z,{variant:"outlined",sx:(0,r.Z)((0,r.Z)({display:"flex",alignItems:"center",position:"relative",transition:function(e){return e.transitions.create("all")}},i&&{flexWrap:"wrap"}),t&&{boxShadow:function(e){return e.customShadows.z20}}),children:[(0,C.jsx)(d.Z,{value:l,control:(0,C.jsx)(u.Z,{checkedIcon:(0,C.jsx)(h.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:v,sx:{py:2,pl:2.5,flexGrow:1,mr:0}}),(0,C.jsx)(s.Z,{spacing:1,direction:"row",alignItems:"center",sx:{position:"absolute",right:20,top:24},children:f.map((function(e){return(0,C.jsx)(x.Z,{component:"img",src:e},e)}))}),a&&(0,C.jsxs)(s.Z,{alignItems:"flex-start",sx:{px:3,width:1},children:[(0,C.jsx)(p.Z,{select:!0,fullWidth:!0,label:"Card",SelectProps:{native:!0},children:P.map((function(e){return(0,C.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,C.jsx)(Z.Z,{size:"small",startIcon:(0,C.jsx)(h.Z,{icon:"eva:plus-fill"}),onClick:o,sx:{my:3},children:"Add new card"})]})]})}var I=i(67426),W=i(19536),D=i(32703),R=i(86259),T=["sx"];function N(e){var n=e.sx,i=(0,v.Z)(e,T);return(0,C.jsxs)(x.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({p:5,borderRadius:2,bgcolor:"background.neutral"},n)},i),{},{children:[(0,C.jsx)(o.Z,{variant:"h6",sx:{mb:5},children:"Summary"}),(0,C.jsxs)(s.Z,{spacing:2.5,children:[(0,C.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",children:[(0,C.jsx)(o.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Subscription"}),(0,C.jsx)(R.Z,{color:"error",children:"PREMIUM"})]}),(0,C.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",children:[(0,C.jsx)(o.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Billed Monthly"}),(0,C.jsx)(I.Z,{defaultChecked:!0})]}),(0,C.jsxs)(s.Z,{spacing:1,direction:"row",justifyContent:"flex-end",children:[(0,C.jsx)(o.Z,{variant:"h5",children:"$"}),(0,C.jsx)(o.Z,{variant:"h2",children:"9.99"}),(0,C.jsx)(o.Z,{component:"span",sx:{mb:1,alignSelf:"center",color:"text.secondary"},children:"/mo"})]}),(0,C.jsx)(W.Z,{sx:{borderStyle:"dashed"}}),(0,C.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,C.jsx)(o.Z,{variant:"h6",children:"Total Billed"}),(0,C.jsx)(o.Z,{variant:"h6",children:"$9.99*"})]}),(0,C.jsx)(W.Z,{sx:{borderStyle:"dashed"}})]}),(0,C.jsx)(o.Z,{component:"div",variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),(0,C.jsx)(D.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),(0,C.jsxs)(s.Z,{alignItems:"center",spacing:1,children:[(0,C.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,C.jsx)(h.Z,{icon:"eva:shield-fill",sx:{color:"primary.main"}}),(0,C.jsx)(o.Z,{variant:"subtitle2",children:"Secure credit card payment"})]}),(0,C.jsx)(o.Z,{variant:"caption",sx:{color:"text.secondary",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]}))}function z(){return(0,C.jsxs)("div",{children:[(0,C.jsx)(o.Z,{variant:"h6",children:"Billing Address"}),(0,C.jsxs)(s.Z,{spacing:3,mt:5,children:[(0,C.jsx)(p.Z,{fullWidth:!0,label:"Person name"}),(0,C.jsx)(p.Z,{fullWidth:!0,label:"Phone number"}),(0,C.jsx)(p.Z,{fullWidth:!0,label:"Email"}),(0,C.jsx)(p.Z,{fullWidth:!0,label:"Address"})]})]})}},4117:function(e,n,i){i.d(n,{Z:function(){return v}});var r=i(63366),t=i(87462),a=i(47313),s=i(83061),o=i(21921),l=i(17592),c=i(77342),d=i(77430),u=i(32298);function x(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var p=i(46417),Z=["className","disableSpacing"],h=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,!i.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,t.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=a.forwardRef((function(e,n){var i=(0,c.Z)({props:e,name:"MuiDialogActions"}),a=i.className,l=i.disableSpacing,d=void 0!==l&&l,u=(0,r.Z)(i,Z),v=(0,t.Z)({},i,{disableSpacing:d}),f=function(e){var n=e.classes,i={root:["root",!e.disableSpacing&&"spacing"]};return(0,o.Z)(i,x,n)}(v);return(0,p.jsx)(h,(0,t.Z)({className:(0,s.Z)(f.root,a),ownerState:v,ref:n},u))}))},96467:function(e,n,i){i.d(n,{Z:function(){return m}});var r=i(4942),t=i(63366),a=i(87462),s=i(47313),o=i(83061),l=i(21921),c=i(17592),d=i(77342),u=i(77430),x=i(32298);function p(e){return(0,x.Z)("MuiDialogContent",e)}(0,u.Z)("MuiDialogContent",["root","dividers"]);var Z=i(93174),h=i(46417),v=["className","dividers"],f=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,i.dividers&&n.dividers]}})((function(e){var n=e.theme,i=e.ownerState;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},i.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((n.vars||n).palette.divider),borderBottom:"1px solid ".concat((n.vars||n).palette.divider)}:(0,r.Z)({},".".concat(Z.Z.root," + &"),{paddingTop:0}))})),m=s.forwardRef((function(e,n){var i=(0,d.Z)({props:e,name:"MuiDialogContent"}),r=i.className,s=i.dividers,c=void 0!==s&&s,u=(0,t.Z)(i,v),x=(0,a.Z)({},i,{dividers:c}),Z=function(e){var n=e.classes,i={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(i,p,n)}(x);return(0,h.jsx)(f,(0,a.Z)({className:(0,o.Z)(Z.root,r),ownerState:x,ref:n},u))}))},33604:function(e,n,i){var r=i(87462),t=i(63366),a=i(47313),s=i(83061),o=i(21921),l=i(61113),c=i(17592),d=i(77342),u=i(93174),x=i(63909),p=i(46417),Z=["className","id"],h=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=a.forwardRef((function(e,n){var i=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=i.className,c=i.id,v=(0,t.Z)(i,Z),f=i,m=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},u.a,n)}(f),j=a.useContext(x.Z).titleId,g=void 0===j?c:j;return(0,p.jsx)(h,(0,r.Z)({component:"h2",className:(0,s.Z)(m.root,l),ownerState:f,ref:n,variant:"h6",id:null!=c?c:g},v))}));n.Z=v},93174:function(e,n,i){i.d(n,{a:function(){return a}});var r=i(77430),t=i(32298);function a(e){return(0,t.Z)("MuiDialogTitle",e)}var s=(0,r.Z)("MuiDialogTitle",["root"]);n.Z=s}}]);