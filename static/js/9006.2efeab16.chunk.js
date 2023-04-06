"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9006,2165],{17547:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),o=t(45987),a=t(64554),i=t(36314),s=t(20890),l=t(93517),c=t(50533),d=t(11087),u=t(80184);function p(e){var r=e.link,t=e.activeLast,o=e.disabled,i=r.name,s=r.href,l=r.icon,p=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:m}):(0,u.jsxs)(a.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,t=e.action,d=e.heading,h=e.moreLink,Z=e.activeLast,f=e.sx,v=(0,o.Z)(e,m),g=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,n.Z)({mb:5},f),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(x,{})},v),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:Z,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(a.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},29006:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(93433),o=t(29439),a=t(72791),i=t(6907),s=t(64554),l=t(10524),c=t(36314),d=t(57621),u=t(9585),p=t(85523),m=t(89891),h=t(39504),x=t(20890),Z=t(38072),f=t(7870),v=t(73609),g=t(17547),j=t(72977),b=t(80184);function y(){var e=(0,a.useState)(!1),r=(0,o.Z)(e,2),t=r[0],y=r[1],C=(0,a.useState)([]),w=(0,o.Z)(C,2),R=w[0],k=w[1],S=(0,a.useState)(null),M=(0,o.Z)(S,2),P=M[0],N=M[1],U=(0,a.useState)(null),I=(0,o.Z)(U,2),L=I[0],T=I[1],B=(0,a.useCallback)((function(e){var r=e[0];r&&N(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),A=(0,a.useCallback)((function(e){var r=e[0];r&&T(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),_=(0,a.useCallback)((function(e){k([].concat((0,n.Z)(R),(0,n.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))))}),[R]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" Extra Components: Upload | Minimal UI"})}),(0,b.jsx)(s.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(g.Z,{heading:"Upload",links:[{name:"Components",href:Z.ko.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),(0,b.jsx)(l.Z,{sx:{my:10},children:(0,b.jsxs)(c.Z,{spacing:5,children:[(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Multi File",action:(0,b.jsx)(p.Z,{control:(0,b.jsx)(m.Z,{checked:t,onChange:function(e){return y(e.target.checked)}}),label:"Show Thumbnail"})}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{multiple:!0,thumbnail:t,files:R,onDrop:_,onRemove:function(e){var r=R.filter((function(r){return r!==e}));k(r)},onRemoveAll:function(){k([])},onUpload:function(){return console.log("ON UPLOAD")}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Single File"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{file:P,onDrop:B,onDelete:function(){return N(null)}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Avatar"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.ab,{file:L,onDrop:A,helperText:(0,b.jsxs)(x.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,b.jsx)("br",{})," max size of ",(0,f.oe)(3145728)]})})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Box"}),(0,b.jsx)(h.Z,{children:(0,b.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,b.jsx)(j.un,{}),(0,b.jsx)(j.un,{placeholder:(0,b.jsxs)(c.Z,{spacing:.5,alignItems:"center",children:[(0,b.jsx)(v.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,b.jsx)(x.Z,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}},93517:function(e,r,t){t.d(r,{Z:function(){return L}});var n=t(93433),o=t(29439),a=t(4942),i=t(87462),s=t(63366),l=t(72791),c=(t(78457),t(28182)),d=t(94419),u=t(57271),p=t(66934),m=t(31402),h=t(20890),x=t(12065),Z=t(74223),f=t(80184),v=(0,Z.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(95080),j=["slots","slotProps"],b=(0,p.ZP)(g.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,x._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(r.palette.grey[600],.12)})})})),y=(0,p.ZP)(v)({width:24,height:16});var C=function(e){var r=e.slots,t=void 0===r?{}:r,n=e.slotProps,o=void 0===n?{}:n,a=(0,s.Z)(e,j),l=e;return(0,f.jsx)("li",{children:(0,f.jsx)(b,(0,i.Z)({focusRipple:!0},a,{ownerState:l,children:(0,f.jsx)(y,(0,i.Z)({as:t.CollapsedIcon,ownerState:l},o.collapsedIcon))}))})},w=t(75878),R=t(21217);function k(e){return(0,R.Z)("MuiBreadcrumbs",e)}var S=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(S.li),r.li),r.root]}})({}),N=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),U=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,r,t,n){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,f.jsx)(U,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):o.push(a),o}),[])}var L=l.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,p=t.className,h=t.component,x=void 0===h?"nav":h,Z=t.slots,v=void 0===Z?{}:Z,g=t.slotProps,j=void 0===g?{}:g,b=t.expandText,y=void 0===b?"Show path":b,w=t.itemsAfterCollapse,R=void 0===w?1:w,S=t.itemsBeforeCollapse,U=void 0===S?1:S,L=t.maxItems,T=void 0===L?8:L,B=t.separator,A=void 0===B?"/":B,_=(0,s.Z)(t,M),O=l.useState(!1),H=(0,o.Z)(O,2),z=H[0],D=H[1],q=(0,i.Z)({},t,{component:x,expanded:z,expandText:y,itemsAfterCollapse:R,itemsBeforeCollapse:U,maxItems:T,separator:A}),F=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(q),E=(0,u.Z)({elementType:v.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:q}),G=l.useRef(null),W=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:F.li,children:e},"child-".concat(r))}));return(0,f.jsx)(P,(0,i.Z)({ref:r,component:x,color:"text.secondary",className:(0,c.Z)(F.root,p),ownerState:q},_,{children:(0,f.jsx)(N,{className:F.ol,ref:G,ownerState:q,children:I(z||T&&W.length<=T?W:function(e){return U+R>=e.length?e:[].concat((0,n.Z)(e.slice(0,U)),[(0,f.jsx)(C,{"aria-label":y,slots:{CollapsedIcon:v.CollapsedIcon},slotProps:{collapsedIcon:E},onClick:function(){D(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-R,e.length)))}(W),F.separator,A,q)})}))}))},39504:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(87462),o=t(63366),a=t(72791),i=t(28182),s=t(94419),l=t(66934),c=t(31402),d=t(75878),u=t(21217);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=t(80184),h=["className","component"],x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),a=t.className,l=t.component,d=void 0===l?"div":l,u=(0,o.Z)(t,h),Z=(0,n.Z)({},t,{component:d}),f=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},p,r)}(Z);return(0,m.jsx)(x,(0,n.Z)({as:d,className:(0,i.Z)(f.root,a),ownerState:Z,ref:r},u))}))},9585:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4942),o=t(63366),a=t(87462),i=t(72791),s=t(28182),l=t(94419),c=t(20890),d=t(31402),u=t(66934),p=t(75878),m=t(21217);function h(e){return(0,m.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=t(80184),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,a.Z)((t={},(0,n.Z)(t,"& .".concat(x.title),r.title),(0,n.Z)(t,"& .".concat(x.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),n=t.action,i=t.avatar,u=t.className,p=t.component,m=void 0===p?"div":p,x=t.disableTypography,y=void 0!==x&&x,C=t.subheader,w=t.subheaderTypographyProps,R=t.title,k=t.titleTypographyProps,S=(0,o.Z)(t,f),M=(0,a.Z)({},t,{component:m,disableTypography:y}),P=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(M),N=R;null==N||N.type===c.Z||y||(N=(0,Z.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},k,{children:N})));var U=C;return null==U||U.type===c.Z||y||(U=(0,Z.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:U}))),(0,Z.jsxs)(v,(0,a.Z)({className:(0,s.Z)(P.root,u),as:m,ref:r,ownerState:M},S,{children:[i&&(0,Z.jsx)(g,{className:P.avatar,ownerState:M,children:i}),(0,Z.jsxs)(b,{className:P.content,ownerState:M,children:[N,U]}),n&&(0,Z.jsx)(j,{className:P.action,ownerState:M,children:n})]}))}))},57621:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(87462),o=t(63366),a=t(72791),i=t(28182),s=t(94419),l=t(66934),c=t(31402),d=t(35527),u=t(75878),p=t(21217);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var h=t(80184),x=["className","raised"],Z=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),f=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),a=t.className,l=t.raised,d=void 0!==l&&l,u=(0,o.Z)(t,x),p=(0,n.Z)({},t,{raised:d}),f=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(p);return(0,h.jsx)(Z,(0,n.Z)({className:(0,i.Z)(f.root,a),elevation:d?8:void 0,ref:r,ownerState:p},u))}))}}]);
//# sourceMappingURL=9006.2efeab16.chunk.js.map