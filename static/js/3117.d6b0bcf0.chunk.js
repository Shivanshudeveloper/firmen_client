"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3117],{17547:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(1413),i=t(45987),s=t(64554),a=t(36314),o=t(20890),l=t(93517),c=t(50533),d=t(11087),x=t(80184);function u(n){var e=n.link,t=n.activeLast,i=n.disabled,a=e.name,o=e.href,l=e.icon,u=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,x.jsxs)(x.Fragment,{children:[l&&(0,x.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return o?(0,x.jsx)(c.Z,{component:d.rU,to:o,sx:u,children:h}):(0,x.jsxs)(s.Z,{sx:u,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(n){var e=n.links,t=n.action,d=n.heading,m=n.moreLink,p=n.activeLast,j=n.sx,Z=(0,i.Z)(n,h),f=e[e.length-1].name;return(0,x.jsxs)(s.Z,{sx:(0,r.Z)({mb:5},j),children:[(0,x.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(s.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,x.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,x.jsx)(g,{})},Z),{},{children:e.map((function(n){return(0,x.jsx)(u,{link:n,activeLast:p,disabled:n.name===f},n.name||"")}))}))]}),t&&(0,x.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,x.jsx)(s.Z,{sx:{mt:2},children:m.map((function(n){return(0,x.jsx)(c.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function g(){return(0,x.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},63117:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(29439),i=t(72791),s=t(6907),a=t(66934),o=t(13967),l=t(35527),c=t(64554),d=t(10524),x=t(36314),u=t(20890),h=t(61889),m=t(88970),g=t(85523),p=t(61419),j=t(38072),Z=t(17547),f=t(55497),b=t(80184),v=["1col","2col","3col","4col","6col","12col"],y=(0,a.ZP)(l.Z)((function(n){var e=n.theme;return{padding:e.spacing(5),border:"solid 1px ".concat(e.palette.divider),borderRadius:1.5*Number(e.shape.borderRadius),backgroundColor:e.palette.grey["light"===e.palette.mode?100:800]}}));function k(){var n=(0,o.Z)(),e=(0,i.useState)(2),t=(0,r.Z)(e,2),a=t[0],k=t[1],S=(0,i.useState)(3),w=(0,r.Z)(S,2),_=w[0],C=w[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.ql,{children:(0,b.jsx)("title",{children:" Foundations: Grid | Minimal UI"})}),(0,b.jsx)(c.Z,{sx:{pt:6,pb:1,bgcolor:"light"===n.palette.mode?"grey.200":"grey.800"},children:(0,b.jsx)(d.Z,{children:(0,b.jsx)(Z.Z,{heading:"Grid",links:[{name:"Components",href:j.ko.components},{name:"Grid"}]})})}),(0,b.jsx)(d.Z,{sx:{my:10},children:(0,b.jsxs)(x.Z,{spacing:5,children:[(0,b.jsx)(f.g,{title:"Spacing",children:(0,b.jsxs)(y,{variant:"outlined",children:[(0,b.jsxs)(u.Z,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",(0,b.jsx)("strong",{children:n.spacing(Number(a))})]}),(0,b.jsx)(h.ZP,{container:!0,spacing:a,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return(0,b.jsx)(h.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{sx:{height:80,boxShadow:n.customShadows.z8}})},e)}))}),(0,b.jsx)(m.Z,{row:!0,name:"spacing",value:a.toString(),onChange:function(n){k(Number(n.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map((function(n){return(0,b.jsx)(g.Z,{value:n.toString(),label:n.toString(),control:(0,b.jsx)(p.Z,{})},n)}))})]})}),(0,b.jsx)(f.g,{title:"Column",children:(0,b.jsxs)(y,{variant:"outlined",children:[(0,b.jsx)(h.ZP,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return(0,b.jsx)(h.ZP,{item:!0,xs:_,children:(0,b.jsxs)(l.Z,{sx:{py:3,textAlign:"center",boxShadow:n.customShadows.z8},children:["xs = ",_]})},e)}))}),(0,b.jsx)(m.Z,{row:!0,name:"column",value:_.toString(),onChange:function(n){C(Number(n.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((function(n,e){return(0,b.jsx)(g.Z,{value:n.toString(),label:v[e],control:(0,b.jsx)(p.Z,{})},n)}))})]})})]})})]})}},55497:function(n,e,t){t.d(e,{_:function(){return x},g:function(){return d}});var r=t(1413),i=t(12065),s=t(35527),a=t(9585),o=t(64554),l=t(20890),c=t(80184);function d(n){var e=n.title,t=n.sx,l=n.children;return(0,c.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,i.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,c.jsx)(a.Z,{title:e}),(0,c.jsx)(o.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:l})]})}function x(n){var e=n.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}}]);
//# sourceMappingURL=3117.d6b0bcf0.chunk.js.map