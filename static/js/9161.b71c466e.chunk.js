"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9161,920],{3404:function(t,e,n){n.d(e,{Z:function(){return j}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(47313),c=(n(20478),n(83061)),u=n(21921),d=n(55229),f=n(17592),m=n(77342),h=n(61113),p=n(17551),v=n(54750),Z=n(46417),g=(0,v.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=n(38743),w=["slots","slotProps"],b=(0,f.ZP)(x.Z)((function(t){var e=t.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(e.spacing(1)," * 0.5)"),marginRight:"calc(".concat(e.spacing(1)," * 0.5)")},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})})),C=(0,f.ZP)(g)({width:24,height:16});var S=function(t){var e=t.slots,n=void 0===e?{}:e,r=t.slotProps,a=void 0===r?{}:r,o=(0,s.Z)(t,w),l=t;return(0,Z.jsx)("li",{children:(0,Z.jsx)(b,(0,i.Z)({focusRipple:!0},o,{ownerState:l,children:(0,Z.jsx)(C,(0,i.Z)({as:n.CollapsedIcon,ownerState:l},a.collapsedIcon))}))})},M=n(77430),y=n(32298);function k(t){return(0,y.Z)("MuiBreadcrumbs",t)}var R=(0,M.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),I=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],D=(0,f.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(t,e){return[(0,o.Z)({},"& .".concat(R.li),e.li),e.root]}})({}),N=(0,f.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(t,e){return e.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),X=(0,f.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(t,e){return e.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(t,e,n,r){return t.reduce((function(a,o,i){return i<t.length-1?a=a.concat(o,(0,Z.jsx)(X,{"aria-hidden":!0,className:e,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var j=l.forwardRef((function(t,e){var n=(0,m.Z)({props:t,name:"MuiBreadcrumbs"}),o=n.children,f=n.className,h=n.component,p=void 0===h?"nav":h,v=n.slots,g=void 0===v?{}:v,x=n.slotProps,w=void 0===x?{}:x,b=n.expandText,C=void 0===b?"Show path":b,M=n.itemsAfterCollapse,y=void 0===M?1:M,R=n.itemsBeforeCollapse,X=void 0===R?1:R,j=n.maxItems,A=void 0===j?8:j,B=n.separator,T=void 0===B?"/":B,_=(0,s.Z)(n,I),F=l.useState(!1),L=(0,a.Z)(F,2),z=L[0],E=L[1],H=(0,i.Z)({},n,{component:p,expanded:z,expandText:C,itemsAfterCollapse:y,itemsBeforeCollapse:X,maxItems:A,separator:T}),W=function(t){var e=t.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,e)}(H),Y=(0,d.Z)({elementType:g.CollapsedIcon,externalSlotProps:w.collapsedIcon,ownerState:H}),q=l.useRef(null),O=l.Children.toArray(o).filter((function(t){return l.isValidElement(t)})).map((function(t,e){return(0,Z.jsx)("li",{className:W.li,children:t},"child-".concat(e))}));return(0,Z.jsx)(D,(0,i.Z)({ref:e,component:p,color:"text.secondary",className:(0,c.Z)(W.root,f),ownerState:H},_,{children:(0,Z.jsx)(N,{className:W.ol,ref:q,ownerState:H,children:P(z||A&&O.length<=A?O:function(t){return X+y>=t.length?t:[].concat((0,r.Z)(t.slice(0,X)),[(0,Z.jsx)(S,{"aria-label":C,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:Y},onClick:function(){E(!0);var t=q.current.querySelector("a[href],button,[tabindex]");t&&t.focus()}},"ellipsis")],(0,r.Z)(t.slice(t.length-y,t.length)))}(O),W.separator,T,H)})}))}))},73428:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(87462),a=n(63366),o=n(47313),i=n(83061),s=n(21921),l=n(17592),c=n(77342),u=n(70501),d=n(77430),f=n(32298);function m(t){return(0,f.Z)("MuiCard",t)}(0,d.Z)("MuiCard",["root"]);var h=n(46417),p=["className","raised"],v=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),Z=o.forwardRef((function(t,e){var n=(0,c.Z)({props:t,name:"MuiCard"}),o=n.className,l=n.raised,u=void 0!==l&&l,d=(0,a.Z)(n,p),f=(0,r.Z)({},n,{raised:u}),Z=function(t){var e=t.classes;return(0,s.Z)({root:["root"]},m,e)}(f);return(0,h.jsx)(v,(0,r.Z)({className:(0,i.Z)(Z.root,o),elevation:u?8:void 0,ref:e,ownerState:f},d))}))},32600:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(63366),a=n(87462),o=n(47313),i=n(83061),s=n(21921),l=n(51195),c=n(17592),u=n(77342),d=n(77430),f=n(32298);function m(t){return(0,f.Z)("MuiListItemAvatar",t)}(0,d.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var h=n(46417),p=["className"],v=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,"flex-start"===n.alignItems&&e.alignItemsFlexStart]}})((function(t){var e=t.ownerState;return(0,a.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})})),Z=o.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiListItemAvatar"}),c=n.className,d=(0,r.Z)(n,p),f=o.useContext(l.Z),Z=(0,a.Z)({},n,{alignItems:f.alignItems}),g=function(t){var e=t.alignItems,n=t.classes,r={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return(0,s.Z)(r,m,n)}(Z);return(0,h.jsx)(v,(0,a.Z)({className:(0,i.Z)(g.root,c),ownerState:Z,ref:e},d))}))},84488:function(t,e,n){n.d(e,{Z:function(){return X}});var r=n(30168),a=n(63366),o=n(87462),i=n(47313),s=n(83061),l=n(30686),c=n(21921);function u(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(t){return parseFloat(t)}var f=n(17551),m=n(17592),h=n(77342),p=n(77430),v=n(32298);function Z(t){return(0,v.Z)("MuiSkeleton",t)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,x,w,b,C,S,M,y,k=n(46417),R=["animation","className","component","height","style","variant","width"],I=(0,l.F4)(C||(C=g||(g=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),D=(0,l.F4)(S||(S=x||(x=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),N=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=u(e.shape.borderRadius)||"px",a=d(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,f.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,l.iv)(M||(M=w||(w=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,l.iv)(y||(y=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),D,(n.vars||n).palette.action.hover)})),X=i.forwardRef((function(t,e){var n=(0,h.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,l=n.className,u=n.component,d=void 0===u?"span":u,f=n.height,m=n.style,p=n.variant,v=void 0===p?"text":p,g=n.width,x=(0,a.Z)(n,R),w=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(x.children)}),b=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,o=t.width,i=t.height,s={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,c.Z)(s,Z,e)}(w);return(0,k.jsx)(N,(0,o.Z)({as:d,ref:e,className:(0,s.Z)(b.root,l),ownerState:w},x,{style:(0,o.Z)({width:g,height:f},m)}))}))},51166:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(49294);function a(t){return(0,r.Z)({},t)}},46102:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(73149),a=n(7781),o=n(409),i=n(75377),s=n(48883),l=n(93601),c=n(51166),u=n(49294),d=n(5025),f=n(34800),m=1440,h=2520,p=43200,v=86400;function Z(t,e){return(0,f.Z)(1,arguments),function(t,e,n){var Z,g;(0,f.Z)(2,arguments);var x=(0,r.j)(),w=null!==(Z=null!==(g=null===n||void 0===n?void 0:n.locale)&&void 0!==g?g:x.locale)&&void 0!==Z?Z:s.Z;if(!w.formatDistance)throw new RangeError("locale must contain formatDistance property");var b=(0,a.Z)(t,e);if(isNaN(b))throw new RangeError("Invalid time value");var C,S,M=(0,u.Z)((0,c.Z)(n),{addSuffix:Boolean(null===n||void 0===n?void 0:n.addSuffix),comparison:b});b>0?(C=(0,l.Z)(e),S=(0,l.Z)(t)):(C=(0,l.Z)(t),S=(0,l.Z)(e));var y,k=(0,i.Z)(S,C),R=((0,d.Z)(S)-(0,d.Z)(C))/1e3,I=Math.round((k-R)/60);if(I<2)return null!==n&&void 0!==n&&n.includeSeconds?k<5?w.formatDistance("lessThanXSeconds",5,M):k<10?w.formatDistance("lessThanXSeconds",10,M):k<20?w.formatDistance("lessThanXSeconds",20,M):k<40?w.formatDistance("halfAMinute",0,M):k<60?w.formatDistance("lessThanXMinutes",1,M):w.formatDistance("xMinutes",1,M):0===I?w.formatDistance("lessThanXMinutes",1,M):w.formatDistance("xMinutes",I,M);if(I<45)return w.formatDistance("xMinutes",I,M);if(I<90)return w.formatDistance("aboutXHours",1,M);if(I<m){var D=Math.round(I/60);return w.formatDistance("aboutXHours",D,M)}if(I<h)return w.formatDistance("xDays",1,M);if(I<p){var N=Math.round(I/m);return w.formatDistance("xDays",N,M)}if(I<v)return y=Math.round(I/p),w.formatDistance("aboutXMonths",y,M);if((y=(0,o.Z)(S,C))<12){var X=Math.round(I/p);return w.formatDistance("xMonths",X,M)}var P=y%12,j=Math.floor(y/12);return P<3?w.formatDistance("aboutXYears",j,M):P<9?w.formatDistance("overXYears",j,M):w.formatDistance("almostXYears",j+1,M)}(t,Date.now(),e)}},42026:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(93601),a=n(34800);function o(t){return(0,a.Z)(1,arguments),(0,r.Z)(t).getTime()}}}]);