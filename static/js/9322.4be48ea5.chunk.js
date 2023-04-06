"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9322],{17547:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(1413),r=t(45987),s=t(64554),a=t(36314),o=t(20890),c=t(93517),l=t(50533),d=t(11087),u=t(80184);function h(e){var n=e.link,t=e.activeLast,r=e.disabled,a=n.name,o=n.href,c=n.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return o?(0,u.jsx)(l.Z,{component:d.rU,to:o,sx:h,children:x}):(0,u.jsxs)(s.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function m(e){var n=e.links,t=e.action,d=e.heading,m=e.moreLink,f=e.activeLast,j=e.sx,p=(0,r.Z)(e,x),b=n[n.length-1].name;return(0,u.jsxs)(s.Z,{sx:(0,i.Z)({mb:5},j),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(s.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(Z,{})},p),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:f,disabled:e.name===b},e.name||"")}))}))]}),t&&(0,u.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,u.jsx)(s.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,u.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},59322:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var i=t(93433),r=t(29439),s=t(1413),a=t(72791),o=t(6907),c=t(66934),l=t(35527),d=t(76278),u=t(64554),h=t(10524),x=t(90493),m=t(57064),Z=t(49900),f=t(94721),j=t(79834),p=t(56125),b=t(20653),g=t(60220),v=t(94454),y=t(46112),w=t(13400),S=t(89891),k=t(16002),N=t(38072),C=t(73609),I=t(17547),M=t(55497),L=t(80184),R=(0,c.ZP)(l.Z)((function(e){var n=e.theme;return{width:"100%",border:"solid 1px ".concat(n.palette.divider)}}));function A(e){return(0,L.jsx)(d.Z,(0,s.Z)({component:"a"},e))}function P(){var e=(0,a.useState)(!0),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=(0,a.useState)(1),l=(0,r.Z)(c,2),P=l[0],F=l[1],O=(0,a.useState)([0]),_=(0,r.Z)(O,2),G=_[0],H=_[1],E=(0,a.useState)(["wifi"]),B=(0,r.Z)(E,2),T=B[0],W=B[1],z=function(e,n){F(n)},D=function(e){return function(){var n=G.indexOf(e),t=(0,i.Z)(G);-1===n?t.push(e):t.splice(n,1),H(t)}},J=function(e){return function(){var n=T.indexOf(e),t=(0,i.Z)(T);-1===n?t.push(e):t.splice(n,1),W(t)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(o.ql,{children:(0,L.jsx)("title",{children:" MUI Components: List | Minimal UI"})}),(0,L.jsx)(u.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,L.jsx)(h.Z,{children:(0,L.jsx)(I.Z,{heading:"List",links:[{name:"Components",href:N.ko.components},{name:"Lists"}],moreLink:["https://mui.com/components/lists"]})})}),(0,L.jsx)(h.Z,{sx:{my:10},children:(0,L.jsxs)(k.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,L.jsx)(M.g,{title:"Simple",children:(0,L.jsxs)(R,{children:[(0,L.jsxs)(x.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-inbox",width:24})}),(0,L.jsx)(Z.Z,{primary:"Inbox"})]}),(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-drafts",width:24})}),(0,L.jsx)(Z.Z,{primary:"Drafts"})]})]}),(0,L.jsx)(f.Z,{}),(0,L.jsxs)(x.Z,{component:"nav","aria-label":"secondary mailbox folders",children:[(0,L.jsx)(d.Z,{children:(0,L.jsx)(Z.Z,{primary:"Trash"})}),(0,L.jsx)(A,{href:"#simple-list",children:(0,L.jsx)(Z.Z,{primary:"Spam"})})]})]})}),(0,L.jsx)(M.g,{title:"Nested",children:(0,L.jsx)(R,{children:(0,L.jsxs)(x.Z,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,L.jsx)(j.Z,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-send",width:24})}),(0,L.jsx)(Z.Z,{primary:"Sent mail"})]}),(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-drafts",width:24})}),(0,L.jsx)(Z.Z,{primary:"Drafts"})]}),(0,L.jsxs)(d.Z,{onClick:function(){s(!t)},children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-inbox",width:24})}),(0,L.jsx)(Z.Z,{primary:"Inbox"}),t?(0,L.jsx)(C.Z,{icon:"ic:round-expand-less",width:24}):(0,L.jsx)(C.Z,{icon:"ic:round-expand-more",width:24})]}),(0,L.jsx)(p.Z,{in:t,unmountOnExit:!0,children:(0,L.jsx)(x.Z,{component:"div",disablePadding:!0,children:(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-star-border",width:24})}),(0,L.jsx)(Z.Z,{primary:"Starred"})]})})})]})})}),(0,L.jsx)(M.g,{title:"Folder",children:(0,L.jsx)(R,{children:(0,L.jsxs)(x.Z,{children:[(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(b.Z,{children:(0,L.jsx)(g.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-image",width:24})})}),(0,L.jsx)(Z.Z,{primary:"Photos",secondary:"Jan 9, 2014"})]}),(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(b.Z,{children:(0,L.jsx)(g.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-work",width:24})})}),(0,L.jsx)(Z.Z,{primary:"Work",secondary:"Jan 7, 2014"})]}),(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(b.Z,{children:(0,L.jsx)(g.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-beach-access",width:24})})}),(0,L.jsx)(Z.Z,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),(0,L.jsx)(M.g,{title:"Selected",children:(0,L.jsxs)(R,{children:[(0,L.jsxs)(x.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,L.jsxs)(d.Z,{selected:0===P,onClick:function(e){return z(0,0)},children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-inbox",width:24})}),(0,L.jsx)(Z.Z,{primary:"Inbox"})]}),(0,L.jsxs)(d.Z,{selected:1===P,onClick:function(e){return z(0,1)},children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:round-drafts",width:24})}),(0,L.jsx)(Z.Z,{primary:"Drafts"})]})]}),(0,L.jsx)(f.Z,{}),(0,L.jsxs)(x.Z,{component:"nav","aria-label":"secondary mailbox folder",children:[(0,L.jsx)(d.Z,{selected:2===P,onClick:function(e){return z(0,2)},children:(0,L.jsx)(Z.Z,{primary:"Trash"})}),(0,L.jsx)(d.Z,{selected:3===P,onClick:function(e){return z(0,3)},children:(0,L.jsx)(Z.Z,{primary:"Spam"})})]})]})}),(0,L.jsx)(M.g,{title:"Controls",children:(0,L.jsx)(R,{children:(0,L.jsx)(x.Z,{children:[0,1,2,3].map((function(e){var n="checkbox-list-label-".concat(e);return(0,L.jsxs)(d.Z,{role:void 0,dense:!0,onClick:D(e),children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(v.Z,{edge:"start",checked:-1!==G.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,L.jsx)(Z.Z,{id:n,primary:"Line item ".concat(e+1)}),(0,L.jsx)(y.Z,{children:(0,L.jsx)(w.Z,{edge:"end",children:(0,L.jsx)(C.Z,{icon:"ic:round-mode-comment",width:24})})})]},e)}))})})}),(0,L.jsx)(M.g,{title:"Switch",children:(0,L.jsx)(R,{children:(0,L.jsxs)(x.Z,{subheader:(0,L.jsx)(j.Z,{children:"Settings"}),children:[(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-wifi",width:24})}),(0,L.jsx)(Z.Z,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),(0,L.jsx)(y.Z,{children:(0,L.jsx)(S.Z,{edge:"end",onChange:J("wifi"),checked:-1!==T.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(m.Z,{children:(0,L.jsx)(C.Z,{icon:"ic:baseline-bluetooth",width:24})}),(0,L.jsx)(Z.Z,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),(0,L.jsx)(y.Z,{children:(0,L.jsx)(S.Z,{edge:"end",onChange:J("bluetooth"),checked:-1!==T.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})]})})]})}},55497:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var i=t(1413),r=t(12065),s=t(35527),a=t(9585),o=t(64554),c=t(20890),l=t(80184);function d(e){var n=e.title,t=e.sx,c=e.children;return(0,l.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,l.jsx)(a.Z,{title:n}),(0,l.jsx)(o.Z,{sx:(0,i.Z)({p:5,minHeight:180},t),children:c})]})}function u(e){var n=e.title;return(0,l.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},16002:function(e,n,t){t.d(n,{ZP:function(){return S}});var i=t(93433),r=t(29439),s=t(63366),a=t(87462),o=t(94419),c=t(54164),l=t(66934),d=t(31402),u=t(51184),h=t(45682),x=t(82466),m=t(47563),Z=t(28182),f=t(72791),j=t(21217);function p(e){return(0,j.Z)("MuiMasonry",e)}(0,t(75878).Z)("MuiMasonry",["root"]);var b=t(80184),g=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],v=function(e){return Number(e.replace("px",""))},y={flexBasis:"100%",width:0,margin:0,padding:0},w=(0,l.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(n.isSSR){for(var s={},o=v(t.spacing(n.defaultSpacing)),c=1;c<=n.defaultColumns;c+=1)s["&:nth-of-type(".concat(n.defaultColumns,"n+").concat(c%n.defaultColumns,")")]={order:c};return r.height=n.defaultHeight,r.margin=-o/2,r["& > *"]=(0,a.Z)({},i["& > *"],s,{margin:o/2,width:"calc(".concat((100/n.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),(0,a.Z)({},i,r)}var l=(0,u.P$)({values:n.spacing,breakpoints:t.breakpoints.values}),d=(0,h.hB)(t);i=(0,x.Z)(i,(0,u.k9)({theme:t},l,(function(e){var t;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var i=Number(e);t=(0,h.NA)(d,i)}else t=e;return(0,a.Z)({margin:"calc(0px - (".concat(t," / 2))"),"& > *":{margin:"calc(".concat(t," / 2)")}},n.maxColumnHeight&&{height:"number"===typeof t?Math.ceil(n.maxColumnHeight+v(t)):"calc(".concat(n.maxColumnHeight,"px + ").concat(t,")")})})));var m=(0,u.P$)({values:n.columns,breakpoints:t.breakpoints.values});return i=(0,x.Z)(i,(0,u.k9)({theme:t},m,(function(e){var n=Number(e),t="".concat((100/n).toFixed(2),"%"),i="string"===typeof l&&!Number.isNaN(Number(l))||"number"===typeof l?(0,h.NA)(d,Number(l)):"0px";return{"& > *":{width:"calc(".concat(t," - ").concat(i,")")}}}))),"object"===typeof l&&(i=(0,x.Z)(i,(0,u.k9)({theme:t},l,(function(e,n){if(n){var t=Number(e),i=Object.keys(m).pop(),r=(0,h.NA)(d,t),s="object"===typeof m?m[n]||m[i]:m,a="".concat((100/s).toFixed(2),"%");return{"& > *":{width:"calc(".concat(a," - ").concat(r,")")}}}return null})))),i})),S=f.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiMasonry"}),l=t.children,u=t.className,h=t.component,x=void 0===h?"div":h,j=t.columns,S=void 0===j?4:j,k=t.spacing,N=void 0===k?1:k,C=t.defaultColumns,I=t.defaultHeight,M=t.defaultSpacing,L=(0,s.Z)(t,g),R=f.useRef(),A=f.useState(),P=(0,r.Z)(A,2),F=P[0],O=P[1],_=!F&&I&&void 0!==C&&void 0!==M,G=f.useState(_?C-1:0),H=(0,r.Z)(G,2),E=H[0],B=H[1],T=(0,a.Z)({},t,{spacing:N,columns:S,maxColumnHeight:F,defaultColumns:C,defaultHeight:I,defaultSpacing:M,isSSR:_}),W=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},p,n)}(T),z=f.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(R.current&&e&&0!==e.length){var n=R.current,t=R.current.firstChild,r=n.clientWidth,s=t.clientWidth;if(0!==r&&0!==s){var a=window.getComputedStyle(t),o=v(a.marginLeft),l=v(a.marginRight),d=Math.round(r/(s+o+l)),u=new Array(d).fill(0),h=!1;n.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var n=window.getComputedStyle(e),t=v(n.marginTop),r=v(n.marginBottom),s=v(n.height)?Math.ceil(v(n.height))+t+r:0;if(0!==s){for(var a=0;a<e.childNodes.length;a+=1){var o=e.childNodes[a];if("IMG"===o.tagName&&0===o.clientHeight){h=!0;break}}if(!h){var c=u.indexOf(Math.min.apply(Math,(0,i.Z)(u)));u[c]+=s;var l=c+1;e.style.order=l}}else h=!0}})),h||c.flushSync((function(){O(Math.max.apply(Math,(0,i.Z)(u))),B(d>0?d-1:0)}))}}})));f.useEffect((function(){var e=z.current;if(void 0!==e)return R.current&&R.current.childNodes.forEach((function(n){e.observe(n)})),function(){return e?e.disconnect():{}}}),[S,N,l]);var D=(0,m.Z)(n,R),J=new Array(E).fill("").map((function(e,n){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,a.Z)({},y,{order:n+1})},n)}));return(0,b.jsxs)(w,(0,a.Z)({as:x,className:(0,Z.Z)(W.root,u),ref:D,ownerState:T},L,{children:[l,J]}))}))},20653:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(63366),r=t(87462),s=t(72791),a=t(28182),o=t(94419),c=t(66199),l=t(66934),d=t(31402),u=t(75878),h=t(21217);function x(e){return(0,h.Z)("MuiListItemAvatar",e)}(0,u.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var m=t(80184),Z=["className"],f=(0,l.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"flex-start"===t.alignItems&&n.alignItemsFlexStart]}})((function(e){var n=e.ownerState;return(0,r.Z)({minWidth:56,flexShrink:0},"flex-start"===n.alignItems&&{marginTop:8})})),j=s.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),l=t.className,u=(0,i.Z)(t,Z),h=s.useContext(c.Z),j=(0,r.Z)({},t,{alignItems:h.alignItems}),p=function(e){var n=e.alignItems,t=e.classes,i={root:["root","flex-start"===n&&"alignItemsFlexStart"]};return(0,o.Z)(i,x,t)}(j);return(0,m.jsx)(f,(0,r.Z)({className:(0,a.Z)(p.root,l),ownerState:j,ref:n},u))}))},46112:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(63366),r=t(87462),s=t(72791),a=t(28182),o=t(94419),c=t(66934),l=t(31402),d=t(66199),u=t(75878),h=t(21217);function x(e){return(0,h.Z)("MuiListItemSecondaryAction",e)}(0,u.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var m=t(80184),Z=["className"],f=(0,c.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.disableGutters&&n.disableGutters]}})((function(e){var n=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},n.disableGutters&&{right:0})})),j=s.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiListItemSecondaryAction"}),c=t.className,u=(0,i.Z)(t,Z),h=s.useContext(d.Z),j=(0,r.Z)({},t,{disableGutters:h.disableGutters}),p=function(e){var n=e.disableGutters,t=e.classes,i={root:["root",n&&"disableGutters"]};return(0,o.Z)(i,x,t)}(j);return(0,m.jsx)(f,(0,r.Z)({className:(0,a.Z)(p.root,c),ownerState:j,ref:n},u))}));j.muiName="ListItemSecondaryAction";var p=j}}]);
//# sourceMappingURL=9322.4be48ea5.chunk.js.map