"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1347],{21365:function(t,e,i){i.d(e,{SA:function(){return n.SA},ZP:function(){return r.Z}});var n=i(10114),r=i(34965)},26253:function(t,e,i){i.d(e,{cU:function(){return k},i5:function(){return y},A0:function(){return p},ZP:function(){return S}});var n=i(44021),r=i(1413),o=i(17592),a=i(57829),s=i(42832),l=i(46417),c=(0,o.ZP)(a.Z,{shouldForwardProp:function(t){return"rounded"!==t}})((function(t){var e=t.rounded;return{zIndex:9,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},e&&{"& span":{width:16,borderRadius:6}})}}})),h=(0,o.ZP)("span")((function(t){var e=t.theme;return{width:8,height:8,borderRadius:"50%",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})}}));function p(t){var e=(null===t||void 0===t?void 0:t.rounded)||!1,i=null===t||void 0===t?void 0:t.sx;return{appendDots:function(n){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,(0,r.Z)((0,r.Z)({component:"ul",rounded:e,sx:i},t),{},{children:n}))})},customPaging:function(){return(0,l.jsx)(s.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(h,{sx:{bgcolor:"currentColor"}})})}}}var d=i(45987),u=i(17551),x=i(19860),m=i(47131),f=i(8730);function Z(t){var e=t.icon,i=void 0===e?"eva:arrow-ios-forward-fill":e,n=t.isRTL;return(0,l.jsx)(f.Z,{icon:i,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},n&&{transform:" scaleX(1)"})})}function g(t){var e=t.icon,i=void 0===e?"eva:arrow-ios-forward-fill":e,n=t.isRTL;return(0,l.jsx)(f.Z,{icon:i,sx:(0,r.Z)({width:20,height:20},n&&{transform:" scaleX(-1)"})})}var v=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(m.Z,{shouldForwardProp:function(t){return"filled"!==t&&"hasChildren"!==t&&"shape"!==t}})((function(t){var e=t.filled,i=t.shape,n=t.hasChildren,o=t.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===i&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!e&&{opacity:.48,"&:hover":{opacity:1}}),e&&{color:(0,u.Fq)(o.palette.common.white,.8),backgroundColor:(0,u.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),n&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function y(t){var e=t.shape,i=void 0===e?"circular":e,n=t.filled,o=void 0!==n&&n,a=t.icon,c=t.onNext,h=t.onPrevious,p=t.children,u=t.leftButtonProps,m=t.rightButtonProps,f=t.sx,y=(0,d.Z)(t,v),b="rtl"===(0,x.Z)().direction;return!!p?(0,l.jsxs)(s.Z,(0,r.Z)((0,r.Z)({sx:f},y),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:i,hasChildren:!!p,onClick:h},u),{},{sx:(0,r.Z)({left:16},null===u||void 0===u?void 0:u.sx),children:(0,l.jsx)(Z,{icon:a,isRTL:b})})),p,(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:i,hasChildren:!!p,onClick:c},m),{},{sx:(0,r.Z)({right:16},null===m||void 0===m?void 0:m.sx),children:(0,l.jsx)(g,{icon:a,isRTL:b})}))]})):(0,l.jsxs)(s.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:f},y),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:i,onClick:h},u),{},{children:(0,l.jsx)(Z,{icon:a,isRTL:b})})),(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:i,onClick:c},m),{},{children:(0,l.jsx)(g,{icon:a,isRTL:b})}))]}))}var b=i(61113),M=i(50769),w=["index","total","onNext","onPrevious","icon","sx"],P=(0,o.ZP)(a.Z)((function(t){var e=t.theme;return(0,r.Z)((0,r.Z)({},(0,M.Ls)({opacity:.48,color:e.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:e.spacing(2),right:e.spacing(2),padding:e.spacing(.25),color:e.palette.common.white,borderRadius:e.shape.borderRadius})})),C=(0,o.ZP)(m.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function k(t){var e=t.index,i=t.total,n=t.onNext,o=t.onPrevious,a=t.icon,s=t.sx,c=(0,d.Z)(t,w),h="rtl"===(0,x.Z)().direction;return(0,l.jsxs)(P,(0,r.Z)((0,r.Z)({sx:s},c),{},{children:[(0,l.jsx)(C,{color:"inherit",onClick:o,children:(0,l.jsx)(Z,{icon:a,isRTL:h})}),(0,l.jsxs)(b.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[e+1,"/",i]}),(0,l.jsx)(C,{color:"inherit",onClick:n,children:(0,l.jsx)(g,{icon:a,isRTL:h})})]}))}var S=n.Z},38875:function(t,e,i){i.d(e,{Z:function(){return x}});var n=i(1413),r=i(45987),o=i(57829),a=i(42832),s=i(61113),l=i(3404),c=i(90891),h=i(2135),p=i(46417);function d(t){var e=t.link,i=t.activeLast,r=t.disabled,a=e.name,s=e.href,l=e.icon,d=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),u=(0,p.jsxs)(p.Fragment,{children:[l&&(0,p.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return s?(0,p.jsx)(c.Z,{component:h.rU,to:s,sx:d,children:u}):(0,p.jsxs)(o.Z,{sx:d,children:[" ",u," "]})}var u=["links","action","heading","moreLink","activeLast","sx"];function x(t){var e=t.links,i=t.action,h=t.heading,x=t.moreLink,f=t.activeLast,Z=t.sx,g=(0,r.Z)(t,u),v=e[e.length-1].name;return(0,p.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},Z),children:[(0,p.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,p.jsxs)(o.Z,{sx:{flexGrow:1},children:[h&&(0,p.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:h}),!!e.length&&(0,p.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,p.jsx)(m,{})},g),{},{children:e.map((function(t){return(0,p.jsx)(d,{link:t,activeLast:f,disabled:t.name===v},t.name||"")}))}))]}),i&&(0,p.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!x&&(0,p.jsx)(o.Z,{sx:{mt:2},children:x.map((function(t){return(0,p.jsx)(c.Z,{noWrap:!0,href:t,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:t},t)}))})]})}function m(){return(0,p.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},49317:function(t,e,i){i.d(e,{Z:function(){return x},t:function(){return a}});var n=i(19860),r=i(66281),o=i(69043);function a(t){var e=(0,n.Z)(),i=(0,r.z)(),a=e.breakpoints.up("xl"===i?"lg":i),s=("h1"===t||"h2"===t||"h3"===t||"h4"===t||"h5"===t||"h6"===t)&&e.typography[t][a]?e.typography[t][a]:e.typography[t],l=(0,o.cv)(s.fontSize),c=Number(e.typography[t].lineHeight)*l,h=e.typography[t];return{fontSize:l,lineHeight:c,fontWeight:h.fontWeight,letterSpacing:h.letterSpacing}}var s=i(1413),l=i(45987),c=i(47313),h=i(90891),p=i(61113),d=i(46417),u=["asLink","variant","line","persistent","children","sx"],x=(0,c.forwardRef)((function(t,e){var i=t.asLink,n=t.variant,r=void 0===n?"body1":n,o=t.line,c=void 0===o?2:o,x=t.persistent,m=void 0!==x&&x,f=t.children,Z=t.sx,g=(0,l.Z)(t,u),v=a(r).lineHeight,j=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:c,WebkitBoxOrient:"vertical"},m&&{height:v*c}),Z);return i?(0,d.jsx)(h.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:e,variant:r,sx:(0,s.Z)({},j)},g),{},{children:f})):(0,d.jsx)(p.Z,(0,s.Z)((0,s.Z)({ref:e,variant:r,sx:(0,s.Z)({},j)},g),{},{children:f}))}))},91347:function(t,e,i){i.r(e),i.d(e,{_products:function(){return dt},default:function(){return pt}});var n=i(1413),r=i(93433),o=i(65964),a=i(57829),s=i(47825),l=i(75908),c=i(61113),h=i(42832),p=i(73428),d=i(48175),u=i(36974),x=i(21365),m=i(59063),f=i(8730),Z=i(38875),g=i(45987),v=i(29439),j=i(75192),y=i.n(j),b=i(47313),M=i(58467),w=i(2135),P=i(24193),C=i(46923),k=i(89840),S=i(74748),L=i(83213),R=i(47131),W=i(19536),A=i(48310),T=i(90891),B=i(34344),E=i(53261),I=i(46417),z=["icon","title","hasSub"];function F(t){var e=t.data,i=(0,M.TH)().pathname,n=(0,b.useState)(!1),r=(0,v.Z)(n,2),o=r[0],a=r[1];(0,b.useEffect)((function(){o&&s()}),[i]);var s=function(){a(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P.Z,{variant:"contained",onClick:function(){a(!0)},startIcon:(0,I.jsx)(f.Z,{icon:"eva:menu-2-fill"}),children:"Menu Mobile"}),(0,I.jsx)(C.ZP,{open:o,onClose:s,ModalProps:{keepMounted:!0},PaperProps:{sx:{pb:5,width:u.w$.W_BASE}},children:(0,I.jsxs)(E.Z,{children:[(0,I.jsx)(B.Z,{sx:{mx:2.5,my:3}}),(0,I.jsxs)(c.Z,{variant:"h6",sx:{px:2,mb:2,display:"flex",alignItems:"center"},children:[(0,I.jsx)(f.Z,{icon:"eva:list-fill",sx:{mr:1}})," Categories"]}),e.map((function(t){return(0,I.jsx)(H,{parent:t,pathname:i},t.title)}))]})})]})}var D=(0,b.forwardRef)((function(t,e){var i=t.icon,r=t.title,o=t.hasSub,a=(0,g.Z)(t,z);return(0,I.jsxs)(k.Z,(0,n.Z)((0,n.Z)({ref:e,sx:{textTransform:"capitalize",height:44}},a),{},{children:[(0,I.jsx)(S.Z,{sx:{width:22,height:22},children:i}),(0,I.jsx)(L.Z,{primaryTypographyProps:{typography:"body2"},children:r}),o&&(0,I.jsx)(f.Z,{icon:"eva:arrow-ios-forward-fill"})]}))}));function H(t){var e=t.parent,i=t.pathname,n=e.title,r=e.icon,o=e.path,s=e.children,l=(0,b.useState)(!1),p=(0,v.Z)(l,2),d=p[0],x=p[1];(0,b.useEffect)((function(){d&&m()}),[i]);var m=function(){x(!1)};return s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{title:n,icon:r,onClick:function(){x(!0)},hasSub:!0}),(0,I.jsxs)(C.ZP,{open:d,onClose:m,BackdropProps:{invisible:!0},ModalProps:{keepMounted:!0},PaperProps:{sx:{width:u.w$.W_DASHBOARD-12,borderRight:function(t){return"solid 1px ".concat(t.palette.divider)}}},children:[(0,I.jsxs)(h.Z,{direction:"row",alignItems:"center",px:1,py:1.5,children:[(0,I.jsx)(R.Z,{onClick:m,children:(0,I.jsx)(f.Z,{icon:"eva:arrow-ios-back-fill"})}),(0,I.jsx)(c.Z,{noWrap:!0,variant:"subtitle1",sx:{ml:1,textTransform:"capitalize"},children:n})]}),(0,I.jsx)(W.Z,{}),(0,I.jsx)(E.Z,{children:(0,I.jsx)(h.Z,{spacing:5,py:3,children:s.map((function(t){var e=t.subheader,i=t.items;return(0,I.jsxs)(A.Z,{disablePadding:!0,children:[(0,I.jsx)(c.Z,{component:"div",variant:"overline",sx:{px:2.5,mb:1,color:"text.secondary"},noWrap:!0,children:e}),i.map((function(t){return(0,I.jsxs)(k.Z,{component:w.OL,to:t.path,sx:{px:1.5},children:[(0,I.jsx)(S.Z,{sx:{mr:.5,width:u.Wm.NAV_ITEM,height:u.Wm.NAV_ITEM,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,I.jsx)(a.Z,{sx:{width:4,height:4,bgcolor:"currentColor",borderRadius:"50%"}})}),(0,I.jsx)(L.Z,{primary:t.title,primaryTypographyProps:{noWrap:!0,typography:"body2"}})]},t.title)}))]},e)}))})})]})]}):(0,I.jsx)(T.Z,{to:o,component:w.OL,color:"inherit",underline:"none",sx:{bgcolor:"red"},children:(0,I.jsx)(D,{title:n,icon:r})})}D.propTypes={hasSub:y().bool,icon:y().node,title:y().string};var _=i(82403),O=i(70501),N=["tags"];function q(t){var e=t.tags,i=(0,g.Z)(t,N);return(0,I.jsxs)(a.Z,(0,n.Z)((0,n.Z)({},i),{},{children:[(0,I.jsx)(c.Z,{variant:"caption",fontWeight:"fontWeightBold",children:"Hot Products:"}),"\xa0",e.map((function(t,e){return(0,I.jsx)(T.Z,{component:w.rU,to:t.path,underline:"none",variant:"caption",sx:{color:"text.secondary",transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:0===e?t.name:", ".concat(t.name," ")},t.name)}))]}))}var G=i(19860),V=i(49317),U=i(26253);function $(t){var e=t.products,i=t.numberShow,r=t.sx,o=(0,G.Z)(),s=(0,b.useRef)(null),l=(0,n.Z)({dots:!0,arrows:!1,slidesToShow:i,slidesToScroll:i,rtl:Boolean("rtl"===o.direction)},(0,U.A0)());return(0,I.jsx)(a.Z,{sx:(0,n.Z)({position:"relative"},r),children:(0,I.jsx)(U.i5,{filled:!0,onNext:function(){var t;null===(t=s.current)||void 0===t||t.slickNext()},onPrevious:function(){var t;null===(t=s.current)||void 0===t||t.slickPrev()},leftButtonProps:{size:"small",sx:{top:56,left:-8}},rightButtonProps:{size:"small",sx:{top:56,right:-8}},children:(0,I.jsx)(U.ZP,(0,n.Z)((0,n.Z)({ref:s},l),{},{children:e.map((function(t){return(0,I.jsx)(a.Z,{sx:{px:1,textAlign:"center"},children:(0,I.jsxs)(T.Z,{component:w.OL,to:t.path,color:"inherit",underline:"none",sx:{display:"block",transition:o.transitions.create("all"),"&:hover":{color:"primary.main"}},children:[(0,I.jsx)(m.Z,{alt:t.image,src:t.image,ratio:"1/1",disabledEffect:!0,sx:{borderRadius:1,mb:1}}),(0,I.jsx)(V.Z,{line:2,variant:"caption",sx:{fontWeight:"fontWeightMedium"},children:t.name})]})},t.name)}))}))})})}var X=["data"],K=["title","path","open","hasSub"],J=4,Q=64;function Y(t){var e=t.data,i=(0,g.Z)(t,X);return(0,I.jsx)(h.Z,(0,n.Z)((0,n.Z)({direction:"row",spacing:J},i),{},{children:e.map((function(t){return(0,I.jsx)(tt,{parent:t},t.title)}))}))}function tt(t){var e=t.parent,i=e.title,n=e.path,r=e.more,o=e.products,a=e.tags,s=e.children,l=(0,b.useState)(!1),p=(0,v.Z)(l,2),d=p[0],u=p[1],x=function(){u(!0)},m=function(){u(!1)};return s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(et,{onMouseEnter:x,onMouseLeave:m,path:n,title:i,open:d,hasSub:!0}),d&&(0,I.jsxs)(O.Z,{onMouseEnter:x,onMouseLeave:m,sx:{p:3,width:"100%",position:"absolute",borderRadius:2,top:Q,left:8*-J,zIndex:function(t){return t.zIndex.modal},boxShadow:function(t){return t.customShadows.z20}},children:[(0,I.jsx)(_.ZP,{columns:3,spacing:2,children:s.map((function(t){return(0,I.jsxs)(h.Z,{spacing:1.25,sx:{mb:2.5},children:[(0,I.jsx)(c.Z,{variant:"subtitle1",sx:{fontWeight:"fontWeightBold"},noWrap:!0,children:t.subheader}),t.items.map((function(t){return(0,I.jsx)(T.Z,{noWrap:!0,underline:"none",component:w.OL,to:t.path,sx:{fontSize:13,typography:"body2",color:"text.primary",transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:t.title},t.title)}))]},t.subheader)}))}),!!r&&!!a&&!!o&&(0,I.jsxs)(h.Z,{spacing:3,children:[(0,I.jsx)(T.Z,{component:w.OL,to:null===r||void 0===r?void 0:r.path,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:null===r||void 0===r?void 0:r.title}),(0,I.jsx)(W.Z,{}),(0,I.jsx)($,{products:o,numberShow:8}),(0,I.jsx)(W.Z,{}),(0,I.jsx)(q,{tags:a})]})]})]}):(0,I.jsx)(et,{path:n,title:i})}function et(t){var e=t.title,i=t.path,r=void 0===i?"":i,o=t.open,a=t.hasSub,s=(0,g.Z)(t,K),l={color:"primary.main"};return(0,I.jsxs)(T.Z,(0,n.Z)((0,n.Z)({component:w.OL,to:r,underline:"none",color:"inherit",variant:"subtitle2",sx:(0,n.Z)({display:"flex",cursor:"pointer",alignItems:"center",textTransform:"capitalize",height:Q,lineHeight:"".concat(Q,"px"),transition:function(t){return t.transitions.create("all")},"&:hover":l},o&&l)},s),{},{children:[e,a&&(0,I.jsx)(f.Z,{icon:"eva:chevron-down-fill",sx:{ml:1}})]}))}var it=i(17551),nt=i(60194),rt=["data"],ot=["path","title","open","hasSub"],at=800,st=40;function lt(t){var e=t.data,i=(0,g.Z)(t,rt);return(0,I.jsx)(A.Z,(0,n.Z)((0,n.Z)({disablePadding:!0},i),{},{children:e.map((function(t){return(0,I.jsx)(ct,{parent:t},t.title)}))}))}function ct(t){var e=t.parent,i=e.title,n=e.path,r=e.more,o=e.products,a=e.tags,s=e.children,l=(0,b.useState)(!1),p=(0,v.Z)(l,2),d=p[0],x=p[1],m=function(){x(!0)},f=function(){x(!1)};return s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ht,{onMouseEnter:m,onMouseLeave:f,path:n,title:i,open:d,hasSub:!0}),d&&(0,I.jsxs)(O.Z,{onMouseEnter:m,onMouseLeave:f,sx:{p:3,top:-62,borderRadius:2,position:"absolute",left:u.w$.W_BASE,width:at,boxShadow:function(t){return t.customShadows.z20}},children:[(0,I.jsx)(_.ZP,{columns:3,spacing:2,children:s.map((function(t){return(0,I.jsxs)(h.Z,{spacing:1.25,sx:{mb:2.5},children:[(0,I.jsx)(c.Z,{variant:"subtitle1",noWrap:!0,children:t.subheader}),t.items.map((function(t){return(0,I.jsx)(T.Z,{component:w.OL,to:t.path,noWrap:!0,underline:"none",sx:{fontSize:13,typography:"body2",color:"text.primary",transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:t.title},t.title)}))]},t.subheader)}))}),!!r&&!!o&&!!a&&(0,I.jsxs)(h.Z,{spacing:3,children:[(0,I.jsx)(T.Z,{component:w.OL,to:r.path,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:r.title}),(0,I.jsx)(W.Z,{}),(0,I.jsx)($,{products:o,numberShow:6,sx:{"& .controlsArrows":{mt:5}}}),(0,I.jsx)(W.Z,{}),(0,I.jsx)(q,{tags:a})]})]})]}):(0,I.jsx)(ht,{path:n,title:i})}function ht(t){var e=t.path,i=void 0===e?"":e,r=t.title,o=t.open,a=t.hasSub,s=(0,g.Z)(t,ot),l={color:"primary.main",bgcolor:function(t){return(0,it.Fq)(t.palette.primary.main,t.palette.action.hoverOpacity)}};return(0,I.jsxs)(nt.ZP,(0,n.Z)((0,n.Z)({component:w.OL,to:i,sx:(0,n.Z)({pl:2.5,pr:1.5,height:st,cursor:"pointer",color:"text.primary",typography:"subtitle2",textTransform:"capitalize",justifyContent:"space-between",transition:function(t){return t.transitions.create("all")},"&:hover":l},o&&l)},s),{},{children:[r,a&&(0,I.jsx)(f.Z,{icon:"eva:chevron-right-fill",sx:{ml:1}})]}))}function pt(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(o.ql,{children:(0,I.jsx)("title",{children:" Extra Components: Mega Menu | Minimal UI"})}),(0,I.jsx)(a.Z,{sx:{pt:6,pb:1,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:(0,I.jsx)(s.Z,{children:(0,I.jsx)(Z.Z,{heading:"Mega Menu",links:[{name:"Components",href:d.ko.components},{name:"Mega Menu"}]})})}),(0,I.jsx)(l.Z,{position:"static",color:"transparent",sx:{boxShadow:function(t){return t.customShadows.z8}},children:(0,I.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",position:"relative"},children:[(0,I.jsx)(c.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Menu Horizon"}),(0,I.jsx)(Y,{data:mt})]})}),(0,I.jsxs)(s.Z,{sx:{my:10},children:[(0,I.jsx)(F,{data:mt}),(0,I.jsxs)(h.Z,{direction:"row",spacing:3,mt:5,children:[(0,I.jsxs)(p.Z,{sx:{width:u.w$.W_BASE,flexShrink:0,overflow:"unset",zIndex:9},children:[(0,I.jsxs)(c.Z,{variant:"h6",sx:{p:2,display:"flex",alignItems:"center"},children:[(0,I.jsx)(f.Z,{icon:"eva:list-fill",width:24,sx:{mr:1}})," Menu Vertical"]}),(0,I.jsx)(lt,{data:mt})]}),(0,I.jsx)(m.Z,{alt:"any photo",src:x.ZP.image.cover(18),ratio:"21/9",sx:{borderRadius:1}})]})]})]})}var dt=(0,r.Z)(Array(10)).map((function(t,e){return{name:x.ZP.text.title(e),image:x.ZP.image.cover(e),path:"#"}})),ut={width:"100%",height:"100%"},xt=[{name:"Paper Cup",path:"#"},{name:"Lotion Pump",path:"#"},{name:"Brush Cutter",path:"#"},{name:"Display Rack",path:"#"},{name:"Glass Bottle",path:"#"}],mt=[{title:"Parent 1",path:"#",icon:(0,I.jsx)(f.Z,(0,n.Z)({icon:"eva:file-fill"},ut)),more:{title:"More Categories",path:"#"},products:dt,tags:xt,children:[{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]},{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking Machinery",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]}]},{title:"Parent 2",path:"#",icon:(0,I.jsx)(f.Z,(0,n.Z)({icon:"eva:file-fill"},ut)),more:{title:"More Categories",path:"#"},products:dt,tags:xt,children:[{subheader:"Cellphone & Accessories",items:[{title:"Mobile Phone Charger",path:"#"},{title:"Power Bank",path:"#"},{title:"Mobile Phone LCD",path:"#"},{title:"Bluetooth Headset",path:"#"},{title:"Mobile Phone",path:"#"}]},{subheader:"Audio & Video",items:[{title:"Display & Accessories",path:"#"},{title:"Audio & Sets",path:"#"},{title:"Professional Audio",path:"#"},{title:"LCD Display",path:"#"},{title:"LCD Module",path:"#"},{title:"Video",path:"#"},{title:"TV & Parts",path:"#"},{title:"Amplifier",path:"#"},{title:"Portable Audio Appliance",path:"#"},{title:"Home Theatre System",path:"#"},{title:"HDMI Cable",path:"#"},{title:"Radio",path:"#"}]},{subheader:"Household Appliances",items:[{title:"Air Conditioner, Purifier & Humidifier",path:"#"},{title:"Refrigerator, Freezer & Parts",path:"#"},{title:"Water Heater & Components",path:"#"},{title:"Electrical Fan & Exhaust Fan",path:"#"},{title:"Household Water Treatment Equipment",path:"#"},{title:"Solar Water Heater",path:"#"},{title:"Photographic Apparatus",path:"#"},{title:"Gas Burner & Gas Stove",path:"#"},{title:"Entertainment Electronics",path:"#"},{title:"Electrical Kettle",path:"#"},{title:"Food Blender",path:"#"},{title:"Dehumidifier",path:"#"}]},{subheader:"Digital Devices",items:[{title:"Battery & Charger",path:"#"},{title:"Wearable Devices",path:"#"},{title:"Digital Photo Frame",path:"#"},{title:"Digital Camera",path:"#"},{title:"Smart Glasses",path:"#"}]}]},{title:"Parent 3",path:"#",icon:(0,I.jsx)(f.Z,(0,n.Z)({icon:"eva:file-fill"},ut))},{title:"Parent 4",path:"#",icon:(0,I.jsx)(f.Z,(0,n.Z)({icon:"eva:file-fill"},ut))}]}}]);