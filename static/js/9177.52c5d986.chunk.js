"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9177],{38875:function(n,t,e){e.d(t,{Z:function(){return m}});var r=e(1413),i=e(45987),o=e(57829),a=e(42832),c=e(61113),l=e(3404),s=e(90891),u=e(2135),d=e(46417);function h(n){var t=n.link,e=n.activeLast,i=n.disabled,a=t.name,c=t.href,l=t.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!e&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),f=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return c?(0,d.jsx)(s.Z,{component:u.rU,to:c,sx:h,children:f}):(0,d.jsxs)(o.Z,{sx:h,children:[" ",f," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function m(n){var t=n.links,e=n.action,u=n.heading,m=n.moreLink,v=n.activeLast,g=n.sx,p=(0,i.Z)(n,f),Z=t[t.length-1].name;return(0,d.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(x,{})},p),{},{children:t.map((function(n){return(0,d.jsx)(h,{link:n,activeLast:v,disabled:n.name===Z},n.name||"")}))}))]}),e&&(0,d.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",e," "]})]}),!!m&&(0,d.jsx)(o.Z,{sx:{mt:2},children:m.map((function(n){return(0,d.jsx)(s.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function x(){return(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},89177:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(65964),i=e(24193),o=e(57829),a=e(47825),c=e(82403),l=e(48175),s=e(41034),u=e(38875),d=e(16769),h=e(46417),f={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function m(){var n=(0,s.Ds)(),t=n.enqueueSnackbar,e=n.closeSnackbar,m=function(n,r){t("This is an ".concat(n),{variant:n,anchorOrigin:r,action:function(t){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{size:"small",color:"default"!==n?n:"primary",onClick:function(){console.log("I belong to snackbar with key ".concat(t))},children:"Alert"}),(0,h.jsx)(i.Z,{size:"small",color:"inherit",onClick:function(){return e(t)},children:"Dismiss"})]})}})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.ql,{children:(0,h.jsx)("title",{children:" Extra Components: Snackbar | Minimal UI"})}),(0,h.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(u.Z,{heading:"Snackbar",links:[{name:"Components",href:l.ko.components},{name:"Snackbar"}],moreLink:["https://mui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),(0,h.jsx)(a.Z,{sx:{my:10},children:(0,h.jsxs)(c.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,h.jsxs)(d.g,{title:"Simple",sx:f,children:[(0,h.jsx)(i.Z,{variant:"contained",color:"inherit",onClick:function(){return t("This is an default",{variant:"default"})},children:"Default"}),(0,h.jsx)(i.Z,{variant:"contained",color:"info",onClick:function(){return t("This is an info",{variant:"info"})},children:"Info"}),(0,h.jsx)(i.Z,{variant:"contained",color:"success",onClick:function(){return t("This is an success",{})},children:"Success"}),(0,h.jsx)(i.Z,{variant:"contained",color:"warning",onClick:function(){return t("This is an warning",{variant:"warning"})},children:"Warning"}),(0,h.jsx)(i.Z,{variant:"contained",color:"error",onClick:function(){return t("This is an error",{variant:"error"})},children:"Error"})]}),(0,h.jsxs)(d.g,{title:"With Close",sx:f,children:[(0,h.jsx)(i.Z,{variant:"contained",color:"inherit",onClick:function(){return t("This is an default",{variant:"default"})},children:"Default"}),(0,h.jsx)(i.Z,{variant:"contained",color:"info",onClick:function(){return t("This is an info",{variant:"info"})},children:"Info"}),(0,h.jsx)(i.Z,{variant:"contained",color:"success",onClick:function(){return t("This is an success",{variant:"success"})},children:"Success"}),(0,h.jsx)(i.Z,{variant:"contained",color:"warning",onClick:function(){return t("This is an warning",{variant:"warning"})},children:"Warning"}),(0,h.jsx)(i.Z,{variant:"contained",color:"error",onClick:function(){return t("This is an error",{variant:"error"})},children:"Error"})]}),(0,h.jsxs)(d.g,{title:"With Action",sx:f,children:[(0,h.jsx)(i.Z,{variant:"contained",color:"inherit",onClick:function(){return m("default")},children:"Default"}),(0,h.jsx)(i.Z,{variant:"contained",color:"info",onClick:function(){return m("info")},children:"Info"}),(0,h.jsx)(i.Z,{variant:"contained",color:"success",onClick:function(){return m("success")},children:"Success"}),(0,h.jsx)(i.Z,{variant:"contained",color:"warning",onClick:function(){return m("warning")},children:"Warning"}),(0,h.jsx)(i.Z,{variant:"contained",color:"error",onClick:function(){return m("error")},children:"Error"})]}),(0,h.jsxs)(d.g,{title:"anchorOrigin",sx:f,children:[(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default")},children:"Top Right"}),(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),(0,h.jsx)(i.Z,{variant:"text",color:"inherit",onClick:function(){return m("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})]})})]})}},16769:function(n,t,e){e.d(t,{_:function(){return d},g:function(){return u}});var r=e(1413),i=e(17551),o=e(70501),a=e(54641),c=e(57829),l=e(61113),s=e(46417);function u(n){var t=n.title,e=n.sx,l=n.children;return(0,s.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,i.Fq)(n.palette.grey[500],.04)}},children:[t&&(0,s.jsx)(a.Z,{title:t}),(0,s.jsx)(c.Z,{sx:(0,r.Z)({p:5,minHeight:180},e),children:l})]})}function d(n){var t=n.title;return(0,s.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},82403:function(n,t,e){e.d(t,{ZP:function(){return y}});var r=e(93433),i=e(29439),o=e(63366),a=e(87462),c=e(21921),l=e(1168),s=e(17592),u=e(77342),d=e(54929),h=e(86886),f=e(13019),m=e(47472),x=e(83061),v=e(47313),g=e(32298);function p(n){return(0,g.Z)("MuiMasonry",n)}(0,e(77430).Z)("MuiMasonry",["root"]);var Z=e(46417),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],k=function(n){return Number(n.replace("px",""))},b={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(n,t){return[t.root]}})((function(n){var t=n.ownerState,e=n.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},i={};if(t.isSSR){for(var o={},c=k(e.spacing(t.defaultSpacing)),l=1;l<=t.defaultColumns;l+=1)o["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(l%t.defaultColumns,")")]={order:l};return i.height=t.defaultHeight,i.margin=-c/2,i["& > *"]=(0,a.Z)({},r["& > *"],o,{margin:c/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,a.Z)({},r,i)}var s=(0,d.P$)({values:t.spacing,breakpoints:e.breakpoints.values}),u=(0,h.hB)(e);r=(0,f.Z)(r,(0,d.k9)({theme:e},s,(function(n){var e;if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n){var r=Number(n);e=(0,h.NA)(u,r)}else e=n;return(0,a.Z)({margin:"calc(0px - (".concat(e," / 2))"),"& > *":{margin:"calc(".concat(e," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof e?Math.ceil(t.maxColumnHeight+k(e)):"calc(".concat(t.maxColumnHeight,"px + ").concat(e,")")})})));var m=(0,d.P$)({values:t.columns,breakpoints:e.breakpoints.values});return r=(0,f.Z)(r,(0,d.k9)({theme:e},m,(function(n){var t=Number(n),e="".concat((100/t).toFixed(2),"%"),r="string"===typeof s&&!Number.isNaN(Number(s))||"number"===typeof s?(0,h.NA)(u,Number(s)):"0px";return{"& > *":{width:"calc(".concat(e," - ").concat(r,")")}}}))),"object"===typeof s&&(r=(0,f.Z)(r,(0,d.k9)({theme:e},s,(function(n,t){if(t){var e=Number(n),r=Object.keys(m).pop(),i=(0,h.NA)(u,e),o="object"===typeof m?m[t]||m[r]:m,a="".concat((100/o).toFixed(2),"%");return{"& > *":{width:"calc(".concat(a," - ").concat(i,")")}}}return null})))),r})),y=v.forwardRef((function(n,t){var e=(0,u.Z)({props:n,name:"MuiMasonry"}),s=e.children,d=e.className,h=e.component,f=void 0===h?"div":h,g=e.columns,y=void 0===g?4:g,w=e.spacing,N=void 0===w?1:w,S=e.defaultColumns,M=e.defaultHeight,T=e.defaultSpacing,R=(0,o.Z)(e,j),E=v.useRef(),z=v.useState(),L=(0,i.Z)(z,2),_=L[0],H=L[1],I=!_&&M&&void 0!==S&&void 0!==T,W=v.useState(I?S-1:0),B=(0,i.Z)(W,2),F=B[0],A=B[1],O=(0,a.Z)({},e,{spacing:N,columns:y,maxColumnHeight:_,defaultColumns:S,defaultHeight:M,defaultSpacing:T,isSSR:I}),D=function(n){var t=n.classes;return(0,c.Z)({root:["root"]},p,t)}(O),P=v.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(n){if(E.current&&n&&0!==n.length){var t=E.current,e=E.current.firstChild,i=t.clientWidth,o=e.clientWidth;if(0!==i&&0!==o){var a=window.getComputedStyle(e),c=k(a.marginLeft),s=k(a.marginRight),u=Math.round(i/(o+c+s)),d=new Array(u).fill(0),h=!1;t.childNodes.forEach((function(n){if(n.nodeType===Node.ELEMENT_NODE&&"line-break"!==n.dataset.class&&!h){var t=window.getComputedStyle(n),e=k(t.marginTop),i=k(t.marginBottom),o=k(t.height)?Math.ceil(k(t.height))+e+i:0;if(0!==o){for(var a=0;a<n.childNodes.length;a+=1){var c=n.childNodes[a];if("IMG"===c.tagName&&0===c.clientHeight){h=!0;break}}if(!h){var l=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[l]+=o;var s=l+1;n.style.order=s}}else h=!0}})),h||l.flushSync((function(){H(Math.max.apply(Math,(0,r.Z)(d))),A(u>0?u-1:0)}))}}})));v.useEffect((function(){var n=P.current;if(void 0!==n)return E.current&&E.current.childNodes.forEach((function(t){n.observe(t)})),function(){return n?n.disconnect():{}}}),[y,N,s]);var q=(0,m.Z)(t,E),G=new Array(F).fill("").map((function(n,t){return(0,Z.jsx)("span",{"data-class":"line-break",style:(0,a.Z)({},b,{order:t+1})},t)}));return(0,Z.jsxs)(C,(0,a.Z)({as:f,className:(0,x.Z)(D.root,d),ref:q,ownerState:O},R,{children:[s,G]}))}))}}]);