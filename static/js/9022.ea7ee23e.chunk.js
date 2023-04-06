"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9022],{38875:function(e,r,t){t.d(r,{Z:function(){return m}});var o=t(1413),n=t(45987),a=t(57829),s=t(42832),i=t(61113),l=t(3404),c=t(90891),d=t(2135),u=t(46417);function p(e){var r=e.link,t=e.activeLast,n=e.disabled,s=r.name,i=r.href,l=r.icon,p=(0,o.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},n&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return i?(0,u.jsx)(c.Z,{component:d.rU,to:i,sx:p,children:x}):(0,u.jsxs)(a.Z,{sx:p,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function m(e){var r=e.links,t=e.action,d=e.heading,m=e.moreLink,f=e.activeLast,v=e.sx,Z=(0,n.Z)(e,x),g=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,o.Z)({mb:5},v),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,o.Z)((0,o.Z)({separator:(0,u.jsx)(h,{})},Z),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,u.jsx)(a.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},49022:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var o=t(65964),n=t(47825),a=t(57829),s=t(48175),i=t(69904),l=t(50152),c=t(38875),d=t(17592),u=t(17551),p=t(73428),x=t(63585),m=t(61113),h=t(42832),f=t(47131),v=t(19536),Z=t(76221),g=t(59063),j=t(8730),b=t(1032),y=t(46417),C=(0,d.ZP)("div")((function(e){var r=e.theme;return{top:0,left:0,zIndex:8,width:"100%",height:"100%",position:"absolute",backgroundColor:(0,u.Fq)(r.palette.grey[900],.64)}}));function w(e){var r=e.user,t=r.name,o=r.cover,n=r.role,s=r.follower,l=r.totalPosts,c=r.avatarUrl,d=r.following;return(0,y.jsxs)(p.Z,{sx:{textAlign:"center"},children:[(0,y.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,y.jsx)(b.Z,{src:"/assets/shape_avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,y.jsx)(x.Z,{alt:t,src:c,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,y.jsx)(C,{}),(0,y.jsx)(g.Z,{src:o,alt:o,ratio:"16/9"})]}),(0,y.jsx)(m.Z,{variant:"subtitle1",sx:{mt:6,mb:.5},children:t}),(0,y.jsx)(m.Z,{variant:"body2",sx:{color:"text.secondary"},children:n}),(0,y.jsx)(h.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mt:1,mb:3},children:i._I.map((function(e){return(0,y.jsx)(f.Z,{sx:{color:e.color,"&:hover":{bgcolor:(0,u.Fq)(e.color,.08)}},children:(0,y.jsx)(j.Z,{icon:e.icon})},e.name)}))}),(0,y.jsx)(v.Z,{sx:{borderStyle:"dashed"}}),(0,y.jsxs)(a.Z,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,y.jsx)(m.Z,{variant:"subtitle1",children:(0,Z.v1)(s)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,y.jsx)(m.Z,{variant:"subtitle1",children:(0,Z.v1)(d)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,y.jsx)(m.Z,{variant:"subtitle1",children:(0,Z.v1)(l)})]})]})]})}function k(){var e=(0,l.K$)().themeStretch;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.ql,{children:(0,y.jsx)("title",{children:" User: Cards | Minimal UI"})}),(0,y.jsxs)(n.Z,{maxWidth:!e&&"lg",children:[(0,y.jsx)(c.Z,{heading:"User Cards",links:[{name:"Dashboard",href:s.vB.root},{name:"User",href:s.vB.user.root},{name:"Cards"}]}),(0,y.jsx)(a.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:i.oe.map((function(e){return(0,y.jsx)(w,{user:e},e.id)}))})]})]})}},3404:function(e,r,t){t.d(r,{Z:function(){return N}});var o=t(93433),n=t(29439),a=t(4942),s=t(87462),i=t(63366),l=t(47313),c=(t(20478),t(83061)),d=t(21921),u=t(55229),p=t(17592),x=t(77342),m=t(61113),h=t(17551),f=t(54750),v=t(46417),Z=(0,f.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(38743),j=["slots","slotProps"],b=(0,p.ZP)(g.Z)((function(e){var r=e.theme;return(0,s.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,s.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,s.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),y=(0,p.ZP)(Z)({width:24,height:16});var C=function(e){var r=e.slots,t=void 0===r?{}:r,o=e.slotProps,n=void 0===o?{}:o,a=(0,i.Z)(e,j),l=e;return(0,v.jsx)("li",{children:(0,v.jsx)(b,(0,s.Z)({focusRipple:!0},a,{ownerState:l,children:(0,v.jsx)(y,(0,s.Z)({as:t.CollapsedIcon,ownerState:l},n.collapsedIcon))}))})},w=t(77430),k=t(32298);function I(e){return(0,k.Z)("MuiBreadcrumbs",e)}var S=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),P=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,p.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(S.li),r.li),r.root]}})({}),M=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,r,t,o){return e.reduce((function(n,a,s){return s<e.length-1?n=n.concat(a,(0,v.jsx)(_,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(s))):n.push(a),n}),[])}var N=l.forwardRef((function(e,r){var t=(0,x.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,p=t.className,m=t.component,h=void 0===m?"nav":m,f=t.slots,Z=void 0===f?{}:f,g=t.slotProps,j=void 0===g?{}:g,b=t.expandText,y=void 0===b?"Show path":b,w=t.itemsAfterCollapse,k=void 0===w?1:w,S=t.itemsBeforeCollapse,_=void 0===S?1:S,N=t.maxItems,L=void 0===N?8:N,z=t.separator,T=void 0===z?"/":z,F=(0,i.Z)(t,P),U=l.useState(!1),A=(0,n.Z)(U,2),q=A[0],W=A[1],E=(0,s.Z)({},t,{component:h,expanded:q,expandText:y,itemsAfterCollapse:k,itemsBeforeCollapse:_,maxItems:L,separator:T}),D=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},I,r)}(E),G=(0,u.Z)({elementType:Z.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:E}),H=l.useRef(null),K=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,v.jsx)("li",{className:D.li,children:e},"child-".concat(r))}));return(0,v.jsx)(R,(0,s.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(D.root,p),ownerState:E},F,{children:(0,v.jsx)(M,{className:D.ol,ref:H,ownerState:E,children:B(q||L&&K.length<=L?K:function(e){return _+k>=e.length?e:[].concat((0,o.Z)(e.slice(0,_)),[(0,v.jsx)(C,{"aria-label":y,slots:{CollapsedIcon:Z.CollapsedIcon},slotProps:{collapsedIcon:G},onClick:function(){W(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-k,e.length)))}(K),D.separator,T,E)})}))}))},73428:function(e,r,t){t.d(r,{Z:function(){return v}});var o=t(87462),n=t(63366),a=t(47313),s=t(83061),i=t(21921),l=t(17592),c=t(77342),d=t(70501),u=t(77430),p=t(32298);function x(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=t(46417),h=["className","raised"],f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),v=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),a=t.className,l=t.raised,d=void 0!==l&&l,u=(0,n.Z)(t,h),p=(0,o.Z)({},t,{raised:d}),v=function(e){var r=e.classes;return(0,i.Z)({root:["root"]},x,r)}(p);return(0,m.jsx)(f,(0,o.Z)({className:(0,s.Z)(v.root,a),elevation:d?8:void 0,ref:r,ownerState:p},u))}))}}]);