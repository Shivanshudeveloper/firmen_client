"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7523,2165,7172,6154],{17547:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),a=n(45987),o=n(64554),i=n(36314),s=n(20890),l=n(93517),c=n(50533),u=n(11087),d=n(80184);function p(e){var t=e.link,n=e.activeLast,a=e.disabled,i=t.name,s=t.href,l=t.icon,p=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,d.jsx)(c.Z,{component:u.rU,to:s,sx:p,children:m}):(0,d.jsxs)(o.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,n=e.action,u=e.heading,h=e.moreLink,v=e.activeLast,Z=e.sx,x=(0,a.Z)(e,m),g=t[t.length-1].name;return(0,d.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},Z),children:[(0,d.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(f,{})},x),{},{children:t.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:v,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,d.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,d.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},32619:function(e,t,n){n.d(t,{Z:function(){return h},t:function(){return i}});var r=n(13967),a=n(53861),o=n(58309);function i(e){var t=(0,r.Z)(),n=(0,a.z)(),i=t.breakpoints.up("xl"===n?"lg":n),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][i]?t.typography[e][i]:t.typography[e],l=(0,o.cv)(s.fontSize),c=Number(t.typography[e].lineHeight)*l,u=t.typography[e];return{fontSize:l,lineHeight:c,fontWeight:u.fontWeight,letterSpacing:u.letterSpacing}}var s=n(1413),l=n(45987),c=n(72791),u=n(50533),d=n(20890),p=n(80184),m=["asLink","variant","line","persistent","children","sx"],h=(0,c.forwardRef)((function(e,t){var n=e.asLink,r=e.variant,a=void 0===r?"body1":r,o=e.line,c=void 0===o?2:o,h=e.persistent,f=void 0!==h&&h,v=e.children,Z=e.sx,x=(0,l.Z)(e,m),g=i(a).lineHeight,b=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:c,WebkitBoxOrient:"vertical"},f&&{height:g*c}),Z);return n?(0,p.jsx)(u.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:t,variant:a,sx:(0,s.Z)({},b)},x),{},{children:v})):(0,p.jsx)(d.Z,(0,s.Z)((0,s.Z)({ref:t,variant:a,sx:(0,s.Z)({},b)},x),{},{children:v}))}))},17523:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(6907),a=n(16002),o=n(64554),i=n(10524),s=n(57621),l=n(9585),c=n(39504),u=n(38072),d=n(32619),p=n(17547),m=n(80184);function h(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.ql,{children:(0,m.jsx)("title",{children:" Extra Components: Text Max Line | Minimal UI"})}),(0,m.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,m.jsx)(i.Z,{children:(0,m.jsx)(p.Z,{heading:"TextMaxLine",links:[{name:"Components",href:u.ko.components},{name:"TextMaxLine"}]})})}),(0,m.jsx)(i.Z,{sx:{my:10},children:(0,m.jsxs)(a.ZP,{columns:3,spacing:3,children:[(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"1 Line"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{line:1,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"2 Line"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"3 Line"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{line:3,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"4 Line"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{line:4,children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"As Link"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{asLink:!0,line:3,href:"#",color:"primary",sx:{maxWidth:300},children:"Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor."})})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(l.Z,{title:"Persistent"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(d.Z,{persistent:!0,line:3,href:"#",sx:{bgcolor:"background.neutral"},children:"Donec posuere vulputate arcu."})})]})]})})]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return w}});var r=n(93433),a=n(29439),o=n(63366),i=n(87462),s=n(94419),l=n(54164),c=n(66934),u=n(31402),d=n(51184),p=n(45682),m=n(82466),h=n(47563),f=n(28182),v=n(72791),Z=n(21217);function x(e){return(0,Z.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var g=n(80184),b=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},j={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,c.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var o={},s=y(n.spacing(t.defaultSpacing)),l=1;l<=t.defaultColumns;l+=1)o["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(l%t.defaultColumns,")")]={order:l};return a.height=t.defaultHeight,a.margin=-s/2,a["& > *"]=(0,i.Z)({},r["& > *"],o,{margin:s/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(s,"px)")}),(0,i.Z)({},r,a)}var c=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),u=(0,p.hB)(n);r=(0,m.Z)(r,(0,d.k9)({theme:n},c,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var r=Number(e);n=(0,p.NA)(u,r)}else n=e;return(0,i.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+y(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var h=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return r=(0,m.Z)(r,(0,d.k9)({theme:n},h,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="string"===typeof c&&!Number.isNaN(Number(c))||"number"===typeof c?(0,p.NA)(u,Number(c)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"===typeof c&&(r=(0,m.Z)(r,(0,d.k9)({theme:n},c,(function(e,t){if(t){var n=Number(e),r=Object.keys(h).pop(),a=(0,p.NA)(u,n),o="object"===typeof h?h[t]||h[r]:h,i="".concat((100/o).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(a,")")}}}return null})))),r})),w=v.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),c=n.children,d=n.className,p=n.component,m=void 0===p?"div":p,Z=n.columns,w=void 0===Z?4:Z,N=n.spacing,S=void 0===N?1:N,k=n.defaultColumns,M=n.defaultHeight,P=n.defaultSpacing,R=(0,o.Z)(n,b),L=v.useRef(),H=v.useState(),T=(0,a.Z)(H,2),B=T[0],I=T[1],q=!B&&M&&void 0!==k&&void 0!==P,A=v.useState(q?k-1:0),_=(0,a.Z)(A,2),z=_[0],F=_[1],E=(0,i.Z)({},n,{spacing:S,columns:w,maxColumnHeight:B,defaultColumns:k,defaultHeight:M,defaultSpacing:P,isSSR:q}),W=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},x,t)}(E),O=v.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(L.current&&e&&0!==e.length){var t=L.current,n=L.current.firstChild,a=t.clientWidth,o=n.clientWidth;if(0!==a&&0!==o){var i=window.getComputedStyle(n),s=y(i.marginLeft),c=y(i.marginRight),u=Math.round(a/(o+s+c)),d=new Array(u).fill(0),p=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!p){var t=window.getComputedStyle(e),n=y(t.marginTop),a=y(t.marginBottom),o=y(t.height)?Math.ceil(y(t.height))+n+a:0;if(0!==o){for(var i=0;i<e.childNodes.length;i+=1){var s=e.childNodes[i];if("IMG"===s.tagName&&0===s.clientHeight){p=!0;break}}if(!p){var l=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[l]+=o;var c=l+1;e.style.order=c}}else p=!0}})),p||l.flushSync((function(){I(Math.max.apply(Math,(0,r.Z)(d))),F(u>0?u-1:0)}))}}})));v.useEffect((function(){var e=O.current;if(void 0!==e)return L.current&&L.current.childNodes.forEach((function(t){e.observe(t)})),function(){return e?e.disconnect():{}}}),[w,S,c]);var D=(0,h.Z)(t,L),G=new Array(z).fill("").map((function(e,t){return(0,g.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},j,{order:t+1})},t)}));return(0,g.jsxs)(C,(0,i.Z)({as:m,className:(0,f.Z)(W.root,d),ref:D,ownerState:E},R,{children:[c,G]}))}))},93517:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(72791),c=(n(78457),n(28182)),u=n(94419),d=n(57271),p=n(66934),m=n(31402),h=n(20890),f=n(12065),v=n(74223),Z=n(80184),x=(0,v.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=n(95080),b=["slots","slotProps"],y=(0,p.ZP)(g.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,f._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(t.palette.grey[600],.12)})})})),j=(0,p.ZP)(x)({width:24,height:16});var C=function(e){var t=e.slots,n=void 0===t?{}:t,r=e.slotProps,a=void 0===r?{}:r,o=(0,s.Z)(e,b),l=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(y,(0,i.Z)({focusRipple:!0},o,{ownerState:l,children:(0,Z.jsx)(j,(0,i.Z)({as:n.CollapsedIcon,ownerState:l},a.collapsedIcon))}))})},w=n(75878),N=n(21217);function S(e){return(0,N.Z)("MuiBreadcrumbs",e)}var k=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(k.li),t.li),t.root]}})({}),R=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),L=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function H(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,Z.jsx)(L,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var T=l.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,p=n.className,h=n.component,f=void 0===h?"nav":h,v=n.slots,x=void 0===v?{}:v,g=n.slotProps,b=void 0===g?{}:g,y=n.expandText,j=void 0===y?"Show path":y,w=n.itemsAfterCollapse,N=void 0===w?1:w,k=n.itemsBeforeCollapse,L=void 0===k?1:k,T=n.maxItems,B=void 0===T?8:T,I=n.separator,q=void 0===I?"/":I,A=(0,s.Z)(n,M),_=l.useState(!1),z=(0,a.Z)(_,2),F=z[0],E=z[1],W=(0,i.Z)({},n,{component:f,expanded:F,expandText:j,itemsAfterCollapse:N,itemsBeforeCollapse:L,maxItems:B,separator:q}),O=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,t)}(W),D=(0,d.Z)({elementType:x.CollapsedIcon,externalSlotProps:b.collapsedIcon,ownerState:W}),G=l.useRef(null),U=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:O.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(P,(0,i.Z)({ref:t,component:f,color:"text.secondary",className:(0,c.Z)(O.root,p),ownerState:W},A,{children:(0,Z.jsx)(R,{className:O.ol,ref:G,ownerState:W,children:H(F||B&&U.length<=B?U:function(e){return L+N>=e.length?e:[].concat((0,r.Z)(e.slice(0,L)),[(0,Z.jsx)(C,{"aria-label":j,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:D},onClick:function(){E(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-N,e.length)))}(U),O.separator,q,W)})}))}))},39504:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),a=n(63366),o=n(72791),i=n(28182),s=n(94419),l=n(66934),c=n(31402),u=n(75878),d=n(21217);function p(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var m=n(80184),h=["className","component"],f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardContent"}),o=n.className,l=n.component,u=void 0===l?"div":l,d=(0,a.Z)(n,h),v=(0,r.Z)({},n,{component:u}),Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(v);return(0,m.jsx)(f,(0,r.Z)({as:u,className:(0,i.Z)(Z.root,o),ownerState:v,ref:t},d))}))},9585:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(4942),a=n(63366),o=n(87462),i=n(72791),s=n(28182),l=n(94419),c=n(20890),u=n(31402),d=n(66934),p=n(75878),m=n(21217);function h(e){return(0,m.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=n(80184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,o.Z)((n={},(0,r.Z)(n,"& .".concat(f.title),t.title),(0,r.Z)(n,"& .".concat(f.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCardHeader"}),r=n.action,i=n.avatar,d=n.className,p=n.component,m=void 0===p?"div":p,f=n.disableTypography,j=void 0!==f&&f,C=n.subheader,w=n.subheaderTypographyProps,N=n.title,S=n.titleTypographyProps,k=(0,a.Z)(n,Z),M=(0,o.Z)({},n,{component:m,disableTypography:j}),P=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),R=N;null==R||R.type===c.Z||j||(R=(0,v.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},S,{children:R})));var L=C;return null==L||L.type===c.Z||j||(L=(0,v.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:L}))),(0,v.jsxs)(x,(0,o.Z)({className:(0,s.Z)(P.root,d),as:m,ref:t,ownerState:M},k,{children:[i&&(0,v.jsx)(g,{className:P.avatar,ownerState:M,children:i}),(0,v.jsxs)(y,{className:P.content,ownerState:M,children:[R,L]}),r&&(0,v.jsx)(b,{className:P.action,ownerState:M,children:r})]}))}))},57621:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(87462),a=n(63366),o=n(72791),i=n(28182),s=n(94419),l=n(66934),c=n(31402),u=n(35527),d=n(75878),p=n(21217);function m(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var h=n(80184),f=["className","raised"],v=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),Z=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCard"}),o=n.className,l=n.raised,u=void 0!==l&&l,d=(0,a.Z)(n,f),p=(0,r.Z)({},n,{raised:u}),Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},m,t)}(p);return(0,h.jsx)(v,(0,r.Z)({className:(0,i.Z)(Z.root,o),elevation:u?8:void 0,ref:t,ownerState:p},d))}))}}]);
//# sourceMappingURL=7523.1d126a8b.chunk.js.map