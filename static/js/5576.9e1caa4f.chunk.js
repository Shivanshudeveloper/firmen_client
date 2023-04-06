"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5576],{17547:function(n,e,i){i.d(e,{Z:function(){return j}});var r=i(1413),s=i(45987),t=i(64554),l=i(36314),o=i(20890),c=i(93517),a=i(50533),d=i(11087),x=i(80184);function u(n){var e=n.link,i=n.activeLast,s=n.disabled,l=e.name,o=e.href,c=e.icon,u=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},s&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(t.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),l]});return o?(0,x.jsx)(a.Z,{component:d.rU,to:o,sx:u,children:h}):(0,x.jsxs)(t.Z,{sx:u,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function j(n){var e=n.links,i=n.action,d=n.heading,j=n.moreLink,m=n.activeLast,p=n.sx,f=(0,s.Z)(n,h),g=e[e.length-1].name;return(0,x.jsxs)(t.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,x.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(t.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,x.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,x.jsx)(Z,{})},f),{},{children:e.map((function(n){return(0,x.jsx)(u,{link:n,activeLast:m,disabled:n.name===g},n.name||"")}))}))]}),i&&(0,x.jsxs)(t.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!j&&(0,x.jsx)(t.Z,{sx:{mt:2},children:j.map((function(n){return(0,x.jsx)(a.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function Z(){return(0,x.jsx)(t.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},5576:function(n,e,i){i.r(e),i.d(e,{default:function(){return Q}});var r=i(6907),s=i(64554),t=i(10524),l=i(16002),o=i(38072),c=i(17547),a=i(29439),d=i(72791),x=i(24518),u=i(5574),h=i(65661),j=i(39157),Z=i(51691),m=i(48550),p=i(97123),f=i(80184);function g(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],s=function(){r(!1)};return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"outlined",color:"warning",onClick:function(){r(!0)},children:"Form Dialogs"}),(0,f.jsxs)(u.Z,{open:i,onClose:s,children:[(0,f.jsx)(h.Z,{children:"Subscribe"}),(0,f.jsxs)(j.Z,{children:[(0,f.jsx)(Z.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,f.jsx)(m.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(x.Z,{onClick:s,color:"inherit",children:"Cancel"}),(0,f.jsx)(x.Z,{onClick:s,variant:"contained",children:"Subscribe"})]})]})]})}function v(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],s=function(){r(!1)};return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{color:"info",variant:"outlined",onClick:function(){r(!0)},children:"Open alert dialog"}),(0,f.jsxs)(u.Z,{open:i,onClose:s,children:[(0,f.jsx)(h.Z,{children:"Use Google's location service?"}),(0,f.jsx)(j.Z,{children:(0,f.jsx)(Z.Z,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(x.Z,{onClick:s,children:"Disagree"}),(0,f.jsx)(x.Z,{onClick:s,autoFocus:!0,children:"Agree"})]})]})]})}var b=i(93433);function C(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],s=(0,d.useState)("paper"),t=(0,a.Z)(s,2),l=t[0],o=t[1],c=function(n){return function(){r(!0),o(n)}},m=function(){r(!1)},g=(0,d.useRef)(null);return(0,d.useEffect)((function(){if(i){var n=g.current;n&&n.focus()}}),[i]),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"outlined",onClick:c("paper"),sx:{mr:2},children:"scroll=paper"}),(0,f.jsx)(x.Z,{variant:"outlined",onClick:c("body"),children:"scroll=body"}),(0,f.jsxs)(u.Z,{open:i,onClose:m,scroll:l,children:[(0,f.jsx)(h.Z,{sx:{pb:2},children:"Subscribe"}),(0,f.jsx)(j.Z,{dividers:"paper"===l,children:(0,f.jsx)(Z.Z,{id:"scroll-dialog-description",ref:g,tabIndex:-1,children:(0,b.Z)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(x.Z,{onClick:m,children:"Cancel"}),(0,f.jsx)(x.Z,{variant:"contained",onClick:m,children:"Subscribe"})]})]})]})}var k=i(20890),y=i(90493),S=i(76278),w=i(20653),F=i(60220),D=i(49900),W=i(73609),_=["username@gmail.com","user02@gmail.com"];function L(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],t=(0,d.useState)(_[1]),l=(0,a.Z)(t,2),o=l[0],c=l[1],j=function(n){r(!1),c(n)};return(0,f.jsxs)(s.Z,{sx:{textAlign:"center"},children:[(0,f.jsxs)(k.Z,{variant:"subtitle1",component:"div",children:["Selected: ",o]}),(0,f.jsx)("br",{}),(0,f.jsx)(x.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Open simple dialog"}),(0,f.jsxs)(u.Z,{open:i,onClose:function(){return j(o)},children:[(0,f.jsx)(h.Z,{id:"simple-dialog-title",children:"Set backup account"}),(0,f.jsxs)(y.Z,{children:[_.map((function(n){return(0,f.jsxs)(S.Z,{onClick:function(){return j(n)},children:[(0,f.jsx)(w.Z,{children:(0,f.jsx)(F.Z,{sx:{color:"info.main",backgroundColor:"info.lighter"},children:(0,f.jsx)(W.Z,{icon:"eva:person-fill"})})}),(0,f.jsx)(D.Z,{primary:n})]},n)})),(0,f.jsxs)(S.Z,{autoFocus:!0,onClick:function(){return j("addAccount")},children:[(0,f.jsx)(w.Z,{children:(0,f.jsx)(F.Z,{children:(0,f.jsx)(W.Z,{icon:"eva:plus-fill"})})}),(0,f.jsx)(D.Z,{primary:"Add account"})]})]})]})]})}var T=i(68096),A=i(30829),G=i(58406),I=i(23786),M=i(85523),R=i(89891);function U(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],t=(0,d.useState)(!0),l=(0,a.Z)(t,2),o=l[0],c=l[1],m=(0,d.useState)("sm"),g=(0,a.Z)(m,2),v=g[0],b=g[1],C=function(){r(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Max Width Dialog"}),(0,f.jsxs)(u.Z,{open:i,maxWidth:v,onClose:C,fullWidth:o,children:[(0,f.jsx)(h.Z,{children:"Optional sizes"}),(0,f.jsxs)(j.Z,{children:[(0,f.jsx)(Z.Z,{children:"You can set my maximum width and whether to adapt or not."}),(0,f.jsxs)(s.Z,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[(0,f.jsxs)(T.Z,{sx:{mt:2,minWidth:120},children:[(0,f.jsx)(A.Z,{htmlFor:"max-width",children:"maxWidth"}),(0,f.jsxs)(G.Z,{autoFocus:!0,value:v,onChange:function(n){b(n.target.value)},label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[(0,f.jsx)(I.Z,{value:!1,children:"false"}),(0,f.jsx)(I.Z,{value:"xs",children:"xs"}),(0,f.jsx)(I.Z,{value:"sm",children:"sm"}),(0,f.jsx)(I.Z,{value:"md",children:"md"}),(0,f.jsx)(I.Z,{value:"lg",children:"lg"}),(0,f.jsx)(I.Z,{value:"xl",children:"xl"})]})]}),(0,f.jsx)(M.Z,{control:(0,f.jsx)(R.Z,{checked:o,onChange:function(n){c(n.target.checked)}}),label:"Full width",sx:{mt:1}})]})]}),(0,f.jsx)(p.Z,{children:(0,f.jsx)(x.Z,{onClick:C,variant:"contained",children:"Close"})})]})]})}var q=i(1413),P=i(55931),E=i(84395),O=i(34663),B=i(13400),z=i(94721),H=(0,d.forwardRef)((function(n,e){return(0,f.jsx)(P.Z,(0,q.Z)({direction:"up",ref:e},n))}));function V(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],s=function(){r(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,{variant:"outlined",color:"error",onClick:function(){r(!0)},children:"Full Screen Dialogs"}),(0,f.jsxs)(u.Z,{fullScreen:!0,open:i,onClose:s,TransitionComponent:H,children:[(0,f.jsx)(E.Z,{position:"relative",children:(0,f.jsxs)(O.Z,{children:[(0,f.jsx)(B.Z,{color:"inherit",edge:"start",onClick:s,children:(0,f.jsx)(W.Z,{icon:"eva:close-fill"})}),(0,f.jsx)(k.Z,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),(0,f.jsx)(x.Z,{autoFocus:!0,color:"inherit",onClick:s,children:"Save"})]})}),(0,f.jsxs)(y.Z,{children:[(0,f.jsx)(S.Z,{children:(0,f.jsx)(D.Z,{primary:"Phone ringtone",secondary:"Titania"})}),(0,f.jsx)(z.Z,{}),(0,f.jsx)(S.Z,{children:(0,f.jsx)(D.Z,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var Y=(0,d.forwardRef)((function(n,e){return(0,f.jsx)(P.Z,(0,q.Z)({direction:"up",ref:e},n))}));function J(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],s=function(){r(!1)};return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"outlined",color:"success",onClick:function(){r(!0)},children:"Transitions Dialogs"}),(0,f.jsxs)(u.Z,{open:i,TransitionComponent:Y,keepMounted:!0,onClose:s,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[(0,f.jsx)(h.Z,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),(0,f.jsx)(j.Z,{children:(0,f.jsx)(Z.Z,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(x.Z,{color:"inherit",onClick:s,children:"Disagree"}),(0,f.jsx)(x.Z,{variant:"contained",onClick:s,children:"Agree"})]})]})]})}var K=i(55497),N={display:"flex",alignItems:"center",justifyContent:"center"};function Q(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Dialog | Minimal UI"})}),(0,f.jsx)(s.Z,{sx:{pt:6,pb:1,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(t.Z,{children:(0,f.jsx)(c.Z,{heading:"Dialog",links:[{name:"Components",href:o.ko.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})})}),(0,f.jsx)(t.Z,{sx:{my:10},children:(0,f.jsxs)(l.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,f.jsx)(K.g,{title:"Simple",sx:N,children:(0,f.jsx)(L,{})}),(0,f.jsx)(K.g,{title:"Alerts",sx:N,children:(0,f.jsx)(v,{})}),(0,f.jsx)(K.g,{title:"Transitions",sx:N,children:(0,f.jsx)(J,{})}),(0,f.jsx)(K.g,{title:"Form",sx:N,children:(0,f.jsx)(g,{})}),(0,f.jsx)(K.g,{title:"Full Screen",sx:N,children:(0,f.jsx)(V,{})}),(0,f.jsx)(K.g,{title:"Max Width Dialog",sx:N,children:(0,f.jsx)(U,{})}),(0,f.jsx)(K.g,{title:"Scrolling Content Dialogs",sx:N,children:(0,f.jsx)(C,{})})]})})]})}},55497:function(n,e,i){i.d(e,{_:function(){return x},g:function(){return d}});var r=i(1413),s=i(12065),t=i(35527),l=i(9585),o=i(64554),c=i(20890),a=i(80184);function d(n){var e=n.title,i=n.sx,c=n.children;return(0,a.jsxs)(t.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,s.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,a.jsx)(l.Z,{title:e}),(0,a.jsx)(o.Z,{sx:(0,r.Z)({p:5,minHeight:180},i),children:c})]})}function x(n){var e=n.title;return(0,a.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}}]);
//# sourceMappingURL=5576.9e1caa4f.chunk.js.map