"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5192],{21365:function(n,e,i){i.d(e,{SA:function(){return r.SA},ZP:function(){return t.Z}});var r=i(10114),t=i(34965)},38875:function(n,e,i){i.d(e,{Z:function(){return Z}});var r=i(1413),t=i(45987),s=i(57829),a=i(42832),o=i(61113),c=i(3404),l=i(90891),d=i(2135),x=i(46417);function h(n){var e=n.link,i=n.activeLast,t=n.disabled,a=e.name,o=e.href,c=e.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),u=(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return o?(0,x.jsx)(l.Z,{component:d.rU,to:o,sx:h,children:u}):(0,x.jsxs)(s.Z,{sx:h,children:[" ",u," "]})}var u=["links","action","heading","moreLink","activeLast","sx"];function Z(n){var e=n.links,i=n.action,d=n.heading,Z=n.moreLink,j=n.activeLast,p=n.sx,f=(0,t.Z)(n,u),g=e[e.length-1].name;return(0,x.jsxs)(s.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,x.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(s.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,x.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,x.jsx)(m,{})},f),{},{children:e.map((function(n){return(0,x.jsx)(h,{link:n,activeLast:j,disabled:n.name===g},n.name||"")}))}))]}),i&&(0,x.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!Z&&(0,x.jsx)(s.Z,{sx:{mt:2},children:Z.map((function(n){return(0,x.jsx)(l.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function m(){return(0,x.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},35192:function(n,e,i){i.r(e),i.d(e,{default:function(){return b}});var r=i(29439),t=i(93433),s=i(47313),a=i(65964),o=i(57829),c=i(47825),l=i(42832),d=i(94429),x=i(98492),h=i(61113),u=i(41872),Z=i(48175),m=i(21365),j=i(8730),p=i(38875),f=i(16769),g=i(46417),v=(0,t.Z)(Array(4)).map((function(n,e){return{id:m.ZP.id(e),value:"panel".concat(e+1),heading:"Accordion ".concat(e+1),subHeading:m.ZP.text.title(e),detail:m.ZP.text.description(e)}}));function b(){var n=(0,s.useState)(!1),e=(0,r.Z)(n,2),i=e[0],t=e[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.ql,{children:(0,g.jsx)("title",{children:" MUI Components: Accordion | Minimal UI"})}),(0,g.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(p.Z,{heading:"Accordion",links:[{name:"Components",href:Z.ko.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})})}),(0,g.jsx)(c.Z,{sx:{my:10},children:(0,g.jsxs)(l.Z,{spacing:5,children:[(0,g.jsx)(f.g,{title:"Simple",children:v.map((function(n,e){return(0,g.jsxs)(d.Z,{disabled:3===e,children:[(0,g.jsx)(x.Z,{expandIcon:(0,g.jsx)(j.Z,{icon:"eva:arrow-ios-downward-fill"}),children:(0,g.jsx)(h.Z,{variant:"subtitle1",children:n.heading})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(h.Z,{children:n.detail})})]},n.value)}))}),(0,g.jsx)(f.g,{title:"Controlled",children:v.map((function(n,e){return(0,g.jsxs)(d.Z,{disabled:3===e,expanded:i===n.value,onChange:(r=n.value,function(n,e){t(!!e&&r)}),children:[(0,g.jsxs)(x.Z,{expandIcon:(0,g.jsx)(j.Z,{icon:"eva:arrow-ios-downward-fill"}),children:[(0,g.jsx)(h.Z,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:n.heading}),(0,g.jsx)(h.Z,{sx:{color:"text.secondary"},children:n.subHeading})]}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(h.Z,{children:n.detail})})]},n.value);var r}))})]})})]})}},16769:function(n,e,i){i.d(e,{_:function(){return x},g:function(){return d}});var r=i(1413),t=i(17551),s=i(70501),a=i(54641),o=i(57829),c=i(61113),l=i(46417);function d(n){var e=n.title,i=n.sx,c=n.children;return(0,l.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,t.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,l.jsx)(a.Z,{title:e}),(0,l.jsx)(o.Z,{sx:(0,r.Z)({p:5,minHeight:180},i),children:c})]})}function x(n){var e=n.title;return(0,l.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}}]);