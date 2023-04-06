"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6107],{17547:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(1413),n=r(45987),a=r(64554),o=r(36314),s=r(20890),l=r(93517),c=r(50533),u=r(11087),d=r(80184);function p(e){var t=e.link,r=e.activeLast,n=e.disabled,o=t.name,s=t.href,l=t.icon,p=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},n&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),o]});return s?(0,d.jsx)(c.Z,{component:u.rU,to:s,sx:p,children:h}):(0,d.jsxs)(a.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(e){var t=e.links,r=e.action,u=e.heading,m=e.moreLink,g=e.activeLast,v=e.sx,f=(0,n.Z)(e,h),b=t[t.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,i.Z)({mb:5},v),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(l.Z,(0,i.Z)((0,i.Z)({separator:(0,d.jsx)(x,{})},f),{},{children:t.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:g,disabled:e.name===b},e.name||"")}))}))]}),r&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!m&&(0,d.jsx)(a.Z,{sx:{mt:2},children:m.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},32619:function(e,t,r){r.d(t,{Z:function(){return m},t:function(){return o}});var i=r(13967),n=r(53861),a=r(58309);function o(e){var t=(0,i.Z)(),r=(0,n.z)(),o=t.breakpoints.up("xl"===r?"lg":r),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][o]?t.typography[e][o]:t.typography[e],l=(0,a.cv)(s.fontSize),c=Number(t.typography[e].lineHeight)*l,u=t.typography[e];return{fontSize:l,lineHeight:c,fontWeight:u.fontWeight,letterSpacing:u.letterSpacing}}var s=r(1413),l=r(45987),c=r(72791),u=r(50533),d=r(20890),p=r(80184),h=["asLink","variant","line","persistent","children","sx"],m=(0,c.forwardRef)((function(e,t){var r=e.asLink,i=e.variant,n=void 0===i?"body1":i,a=e.line,c=void 0===a?2:a,m=e.persistent,x=void 0!==m&&m,g=e.children,v=e.sx,f=(0,l.Z)(e,h),b=o(n).lineHeight,Z=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:c,WebkitBoxOrient:"vertical"},x&&{height:b*c}),v);return r?(0,p.jsx)(u.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:t,variant:n,sx:(0,s.Z)({},Z)},f),{},{children:g})):(0,p.jsx)(d.Z,(0,s.Z)((0,s.Z)({ref:t,variant:n,sx:(0,s.Z)({},Z)},f),{},{children:g}))}))},36107:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var i=r(6907),n=r(64554),a=r(10524),o=r(61889),s=r(20890),l=r(36314),c=r(35527),u=r(38072),d=r(17547),p=r(32619),h=r(80184),m=[{label:"h1. Heading",variant:"h1"},{label:"h2. Heading",variant:"h2"},{label:"h3. Heading",variant:"h3"},{label:"h4. Heading",variant:"h4"},{label:"h5. Heading",variant:"h5"},{label:"h6. Heading",variant:"h6"},{label:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle1"},{label:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle2"},{label:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body1"},{label:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body2"},{label:"caption text",variant:"caption"},{label:"overline text",variant:"overline"},{label:"Button",variant:"button"}];function x(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.ql,{children:(0,h.jsx)("title",{children:" Foundations: Typography | Minimal UI"})}),(0,h.jsx)(n.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(d.Z,{heading:"Typography",links:[{name:"Components",href:u.ko.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})})}),(0,h.jsxs)(a.Z,{sx:{my:10},children:[(0,h.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,h.jsx)(s.Z,{variant:"h6",paragraph:!0,children:"Default Text"})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,md:9,children:(0,h.jsx)(l.Z,{spacing:3,children:m.map((function(e){return(0,h.jsx)(g,{font:e},e.variant)}))})})]}),(0,h.jsx)(n.Z,{sx:{height:40}}),(0,h.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,h.jsx)(s.Z,{variant:"h6",paragraph:!0,children:"Colors Text"})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,md:9,children:(0,h.jsxs)(l.Z,{spacing:3,children:[["primary","secondary","disabled"].map((function(e){return(0,h.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,h.jsxs)(s.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"text.".concat(e)},children:["text ",e]}),(0,h.jsx)(s.Z,{gutterBottom:!0,variant:"body2",sx:{color:"text.".concat(e)},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)})),["primary","secondary","info","warning","error"].map((function(e){return(0,h.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,h.jsx)(s.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"".concat(e,".main")},children:e}),(0,h.jsx)(s.Z,{gutterBottom:!0,variant:"body2",sx:{color:"".concat(e,".main")},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)}))]})})]})]})]})}function g(e){var t=e.font,r=t.variant,i=t.label,n=(0,p.t)(r),a=n.fontSize,o=n.lineHeight,l=n.fontWeight,u=n.letterSpacing,d=void 0===u?0:u;return(0,h.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,h.jsx)(s.Z,{variant:r,gutterBottom:!0,children:i}),(0,h.jsxs)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:["size: ",a," / l-height: ",o," / weight:",l," / letterSpacing: ",d]})]})}},93517:function(e,t,r){r.d(t,{Z:function(){return H}});var i=r(93433),n=r(29439),a=r(4942),o=r(87462),s=r(63366),l=r(72791),c=(r(78457),r(28182)),u=r(94419),d=r(57271),p=r(66934),h=r(31402),m=r(20890),x=r(12065),g=r(74223),v=r(80184),f=(0,g.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=r(95080),Z=["slots","slotProps"],y=(0,p.ZP)(b.Z)((function(e){var t=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,x._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(t.palette.grey[600],.12)})})})),j=(0,p.ZP)(f)({width:24,height:16});var k=function(e){var t=e.slots,r=void 0===t?{}:t,i=e.slotProps,n=void 0===i?{}:i,a=(0,s.Z)(e,Z),l=e;return(0,v.jsx)("li",{children:(0,v.jsx)(y,(0,o.Z)({focusRipple:!0},a,{ownerState:l,children:(0,v.jsx)(j,(0,o.Z)({as:r.CollapsedIcon,ownerState:l},n.collapsedIcon))}))})},C=r(75878),w=r(21217);function S(e){return(0,w.Z)("MuiBreadcrumbs",e)}var P=(0,C.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),q=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,p.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(P.li),t.li),t.root]}})({}),L=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,t,r,i){return e.reduce((function(n,a,o){return o<e.length-1?n=n.concat(a,(0,v.jsx)(R,{"aria-hidden":!0,className:t,ownerState:i,children:r},"separator-".concat(o))):n.push(a),n}),[])}var H=l.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),a=r.children,p=r.className,m=r.component,x=void 0===m?"nav":m,g=r.slots,f=void 0===g?{}:g,b=r.slotProps,Z=void 0===b?{}:b,y=r.expandText,j=void 0===y?"Show path":y,C=r.itemsAfterCollapse,w=void 0===C?1:C,P=r.itemsBeforeCollapse,R=void 0===P?1:P,H=r.maxItems,_=void 0===H?8:H,z=r.separator,M=void 0===z?"/":z,T=(0,s.Z)(r,q),N=l.useState(!1),W=(0,n.Z)(N,2),F=W[0],A=W[1],E=(0,o.Z)({},r,{component:x,expanded:F,expandText:j,itemsAfterCollapse:w,itemsBeforeCollapse:R,maxItems:_,separator:M}),Q=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,t)}(E),O=(0,d.Z)({elementType:f.CollapsedIcon,externalSlotProps:Z.collapsedIcon,ownerState:E}),U=l.useRef(null),D=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,v.jsx)("li",{className:Q.li,children:e},"child-".concat(t))}));return(0,v.jsx)(B,(0,o.Z)({ref:t,component:x,color:"text.secondary",className:(0,c.Z)(Q.root,p),ownerState:E},T,{children:(0,v.jsx)(L,{className:Q.ol,ref:U,ownerState:E,children:I(F||_&&D.length<=_?D:function(e){return R+w>=e.length?e:[].concat((0,i.Z)(e.slice(0,R)),[(0,v.jsx)(k,{"aria-label":j,slots:{CollapsedIcon:f.CollapsedIcon},slotProps:{collapsedIcon:O},onClick:function(){A(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,i.Z)(e.slice(e.length-w,e.length)))}(D),Q.separator,M,E)})}))}))}}]);
//# sourceMappingURL=6107.a386171d.chunk.js.map