"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2286],{26253:function(e,n,t){t.d(n,{cU:function(){return C},i5:function(){return y},A0:function(){return u},ZP:function(){return M}});var i=t(44021),r=t(1413),o=t(17592),s=t(57829),a=t(42832),l=t(46417),d=(0,o.ZP)(s.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var n=e.rounded;return{zIndex:9,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},n&&{"& span":{width:16,borderRadius:6}})}}})),c=(0,o.ZP)("span")((function(e){var n=e.theme;return{width:8,height:8,borderRadius:"50%",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.short})}}));function u(e){var n=(null===e||void 0===e?void 0:e.rounded)||!1,t=null===e||void 0===e?void 0:e.sx;return{appendDots:function(i){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d,(0,r.Z)((0,r.Z)({component:"ul",rounded:n,sx:t},e),{},{children:i}))})},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(c,{sx:{bgcolor:"currentColor"}})})}}}var h=t(45987),m=t(17551),x=t(19860),p=t(47131),v=t(8730);function f(e){var n=e.icon,t=void 0===n?"eva:arrow-ios-forward-fill":n,i=e.isRTL;return(0,l.jsx)(v.Z,{icon:t,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},i&&{transform:" scaleX(1)"})})}function Z(e){var n=e.icon,t=void 0===n?"eva:arrow-ios-forward-fill":n,i=e.isRTL;return(0,l.jsx)(v.Z,{icon:t,sx:(0,r.Z)({width:20,height:20},i&&{transform:" scaleX(-1)"})})}var g=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(p.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var n=e.filled,t=e.shape,i=e.hasChildren,o=e.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===t&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!n&&{opacity:.48,"&:hover":{opacity:1}}),n&&{color:(0,m.Fq)(o.palette.common.white,.8),backgroundColor:(0,m.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),i&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function y(e){var n=e.shape,t=void 0===n?"circular":n,i=e.filled,o=void 0!==i&&i,s=e.icon,d=e.onNext,c=e.onPrevious,u=e.children,m=e.leftButtonProps,p=e.rightButtonProps,v=e.sx,y=(0,h.Z)(e,g),b="rtl"===(0,x.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({sx:v},y),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:t,hasChildren:!!u,onClick:c},m),{},{sx:(0,r.Z)({left:16},null===m||void 0===m?void 0:m.sx),children:(0,l.jsx)(f,{icon:s,isRTL:b})})),u,(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:t,hasChildren:!!u,onClick:d},p),{},{sx:(0,r.Z)({right:16},null===p||void 0===p?void 0:p.sx),children:(0,l.jsx)(Z,{icon:s,isRTL:b})}))]})):(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:v},y),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:t,onClick:c},m),{},{children:(0,l.jsx)(f,{icon:s,isRTL:b})})),(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:t,onClick:d},p),{},{children:(0,l.jsx)(Z,{icon:s,isRTL:b})}))]}))}var b=t(61113),w=t(50769),k=["index","total","onNext","onPrevious","icon","sx"],D=(0,o.ZP)(s.Z)((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},(0,w.Ls)({opacity:.48,color:n.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:n.spacing(2),right:n.spacing(2),padding:n.spacing(.25),color:n.palette.common.white,borderRadius:n.shape.borderRadius})})),P=(0,o.ZP)(p.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function C(e){var n=e.index,t=e.total,i=e.onNext,o=e.onPrevious,s=e.icon,a=e.sx,d=(0,h.Z)(e,k),c="rtl"===(0,x.Z)().direction;return(0,l.jsxs)(D,(0,r.Z)((0,r.Z)({sx:a},d),{},{children:[(0,l.jsx)(P,{color:"inherit",onClick:o,children:(0,l.jsx)(f,{icon:s,isRTL:c})}),(0,l.jsxs)(b.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[n+1,"/",t]}),(0,l.jsx)(P,{color:"inherit",onClick:i,children:(0,l.jsx)(Z,{icon:s,isRTL:c})})]}))}var M=i.Z},42286:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var i=t(65964),r=t(19536),o=t(4942),s=t(23166),a=t(17592),l=t(47825),d=t(42832),c=t(61113),u=t(55410),h=t(46417),m=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)",padding:n.spacing(10,0)},n.breakpoints.up("md"),{height:560,padding:0})})),x=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({textAlign:"center"},n.breakpoints.up("md"),{bottom:80,textAlign:"left",position:"absolute"})}));function p(){return(0,h.jsx)(m,{children:(0,h.jsx)(l.Z,{component:u.NM,children:(0,h.jsxs)(x,{children:[(0,h.jsx)(u.gH,{text:"Who",sx:{color:"primary.main"},variants:(0,u.EU)().inRight}),(0,h.jsx)("br",{}),(0,h.jsxs)(d.Z,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[(0,h.jsx)(u.gH,{text:"we"}),(0,h.jsx)(u.gH,{text:"are?"})]}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,h.jsxs)(c.Z,{variant:"h4",sx:{mt:5,color:"common.white",fontWeight:"fontWeightMedium"},children:["Let's work together and",(0,h.jsx)("br",{})," make awesome site easily"]})})]})})})}var v=t(19860),f=t(17551),Z=t(9019),g=t(57829),j=t(24193),y=t(79176),b=t(66281),w=t(76221),k=t(69904),D=t(59063),P=t(8730),C=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({textAlign:"center",paddingTop:n.spacing(20),paddingBottom:n.spacing(10)},n.breakpoints.up("md"),{textAlign:"left"})}));function M(){var e=(0,v.Z)(),n=(0,b.Z)("up","md"),t="light"===e.palette.mode,i="-40px 40px 80px ".concat((0,f.Fq)(t?e.palette.grey[500]:e.palette.common.black,.48));return(0,h.jsx)(C,{children:(0,h.jsx)(l.Z,{component:u.DG,children:(0,h.jsxs)(Z.ZP,{container:!0,spacing:3,children:[n&&(0,h.jsx)(Z.ZP,{item:!0,xs:12,md:6,lg:7,sx:{pr:{md:7}},children:(0,h.jsxs)(Z.ZP,{container:!0,spacing:3,alignItems:"flex-end",children:[(0,h.jsx)(Z.ZP,{item:!0,xs:6,children:(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(D.Z,{alt:"our office 1",src:"/assets/images/about/what_1.jpg",ratio:"3/4",sx:{borderRadius:2,boxShadow:i}})})}),(0,h.jsx)(Z.ZP,{item:!0,xs:6,children:(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(D.Z,{alt:"our office 2",src:"/assets/images/about/what_2.jpg",ratio:"1/1",sx:{borderRadius:2}})})})]})}),(0,h.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,h.jsx)(c.Z,{variant:"h2",sx:{mb:3},children:"What is minimal?"})}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,h.jsx)(c.Z,{sx:{color:"light"===e.palette.mode?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),(0,h.jsx)(g.Z,{sx:{my:5},children:k.u4.map((function(e){return(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,h.jsx)(U,{progress:e})},e.label)}))}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inRight,children:(0,h.jsx)(j.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:(0,h.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",width:24}),children:"Check out our work"})})]})]})})})}function U(e){var n=e.progress,t=n.label,i=n.value;return(0,h.jsxs)(g.Z,{sx:{mt:3},children:[(0,h.jsxs)(g.Z,{sx:{mb:1.5,display:"flex",alignItems:"center"},children:[(0,h.jsxs)(c.Z,{variant:"subtitle2",children:[t,"\xa0-\xa0"]}),(0,h.jsx)(c.Z,{variant:"body2",sx:{color:"text.secondary"},children:(0,w.f2)(i)})]}),(0,h.jsx)(y.Z,{variant:"determinate",value:i,sx:{"& .MuiLinearProgress-bar":{bgcolor:"grey.700"},"&.MuiLinearProgress-determinate":{bgcolor:"divider"}}})]})}var R=t(1413),T=t(47313),E=t(73428),I=t(47131),S=t(26253);function L(){var e=(0,T.useRef)(null),n=(0,v.Z)(),t={infinite:!1,arrows:!1,slidesToShow:4,rtl:Boolean("rtl"===n.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return(0,h.jsxs)(l.Z,{component:u.DG,sx:{pb:10,textAlign:"center"},children:[(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inDown,children:(0,h.jsx)(c.Z,{component:"p",variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(c.Z,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(c.Z,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),(0,h.jsx)(g.Z,{sx:{position:"relative"},children:(0,h.jsx)(S.i5,{filled:!0,shape:"rounded",onNext:function(){var n;null===(n=e.current)||void 0===n||n.slickNext()},onPrevious:function(){var n;null===(n=e.current)||void 0===n||n.slickPrev()},leftButtonProps:{sx:(0,R.Z)({left:24},k.Zd.length<5&&{display:"none"})},rightButtonProps:{sx:(0,R.Z)({right:24},k.Zd.length<5&&{display:"none"})},children:(0,h.jsx)(S.ZP,(0,R.Z)((0,R.Z)({ref:e},t),{},{children:k.Zd.map((function(e){return(0,h.jsx)(g.Z,{component:s.m.div,variants:(0,u.EU)().in,sx:{px:1.5,py:10},children:(0,h.jsx)(W,{member:e})},e.id)}))}))})}),(0,h.jsx)(j.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:(0,h.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",width:24}),sx:{mx:"auto"},children:"View all team members"})]})}function W(e){var n=e.member,t=n.name,i=n.role,r=n.avatar;return(0,h.jsxs)(E.Z,{children:[(0,h.jsx)(c.Z,{variant:"subtitle1",sx:{mt:2,mb:.5},children:t}),(0,h.jsx)(c.Z,{variant:"body2",sx:{mb:2,color:"text.secondary"},children:i}),(0,h.jsx)(g.Z,{sx:{px:1},children:(0,h.jsx)(D.Z,{alt:t,src:r,ratio:"1/1",sx:{borderRadius:2}})}),(0,h.jsx)(d.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:k._I.map((function(e){return(0,h.jsx)(I.Z,{sx:{color:e.color,"&:hover":{bgcolor:(0,f.Fq)(e.color,.08)}},children:(0,h.jsx)(P.Z,{icon:e.icon})},e.name)}))})]},t)}function X(){return(0,h.jsxs)(l.Z,{component:u.DG,sx:{mt:10},children:[(0,h.jsxs)(g.Z,{sx:{mb:10,borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,h.jsx)(D.Z,{src:"/assets/images/about/vision.jpg",alt:"about-vision"}),(0,h.jsx)(d.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{bottom:{xs:24,md:40},width:1,opacity:.48,position:"absolute"},children:["ibm","lya","spotify","netflix","hbo","amazon"].map((function(e){return(0,h.jsx)(s.m.div,{variants:(0,u.EU)().in,children:(0,h.jsx)(D.Z,{alt:e,src:"/assets/icons/brands/ic_brand_".concat(e,".svg"),sx:{m:{xs:1.5,md:2.5},height:{xs:24,md:40}}})},e)}))})]}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(c.Z,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})}var _=t(70501),B=t(55942),N=t(90891),A=t(50769),z=t(75868),F=[{name:"Jenny Wilson",rating:5,dateCreate:new Date,content:"Excellent Work! Thanks a lot!"},{name:"Cody Fisher",rating:5,dateCreate:new Date,content:"It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job."},{name:"Marvin McKinney",rating:5,dateCreate:new Date,content:"Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !"},{name:"Darrell Steward",rating:5,dateCreate:new Date,content:"Amazing, really good code quality and gives you a lot of examples for implementations."},{name:"Jacob Jones",rating:5,dateCreate:new Date,content:"Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!"},{name:"Bessie Cooper",rating:5,dateCreate:new Date,content:"CEO of Codealy.io here. We\u2019ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!"}],q=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,R.Z)((0,R.Z)({},(0,A.v3)({color:(0,f.Fq)(n.palette.grey[900],.8),imgUrl:"/assets/images/about/testimonials.jpg"})),{},(0,o.Z)({textAlign:"center",padding:n.spacing(10,0)},n.breakpoints.up("md"),{padding:0,height:840,textAlign:"left",overflow:"hidden"}))}));function O(){var e=(0,b.Z)("up","md");return(0,h.jsx)(q,{children:(0,h.jsxs)(l.Z,{component:u.DG,sx:{position:"relative",height:1},children:[(0,h.jsxs)(Z.ZP,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[(0,h.jsx)(Z.ZP,{item:!0,xs:10,md:4,children:(0,h.jsxs)(g.Z,{sx:{maxWidth:{md:360}},children:[(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(c.Z,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"},children:"Testimonials"})}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsxs)(c.Z,{variant:"h2",sx:{mb:3,color:"common.white"},children:["Who love ",(0,h.jsx)("br",{}),"my work"]})}),(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(c.Z,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you\u2019re satisfied with and use it every day. This is why we\u2019re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!e&&(0,h.jsx)(g.Z,{sx:{mt:3,display:"flex",justifyContent:"center"},children:(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(H,{})})})]})}),(0,h.jsx)(Z.ZP,{item:!0,xs:12,md:7,lg:6,sx:{right:{md:24},position:{md:"absolute"}},children:(0,h.jsxs)(Z.ZP,{container:!0,spacing:e?3:0,alignItems:"center",children:[(0,h.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:F.slice(0,3).map((function(e){return(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(G,{testimonial:e})},e.name)}))}),(0,h.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:F.slice(3,6).map((function(e){return(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inUp,children:(0,h.jsx)(G,{testimonial:e})},e.name)}))})]})})]}),e&&(0,h.jsx)(g.Z,{sx:{bottom:60,position:"absolute"},children:(0,h.jsx)(s.m.div,{variants:(0,u.EU)().inLeft,children:(0,h.jsx)(H,{})})})]})})}function G(e){var n=e.testimonial,t=(0,v.Z)(),i=n.name,r=n.rating,o=n.dateCreate,s=n.content;return(0,h.jsxs)(_.Z,{sx:(0,R.Z)({mt:3,p:3,color:"common.white"},(0,A.Ls)({color:t.palette.common.white,opacity:.04})),children:[(0,h.jsx)(c.Z,{variant:"subtitle1",gutterBottom:!0,children:i}),(0,h.jsx)(c.Z,{gutterBottom:!0,component:"div",variant:"caption",sx:{color:"grey.500"},children:(0,z.Mu)(o)}),(0,h.jsx)(B.Z,{value:r,readOnly:!0,size:"small"}),(0,h.jsx)(c.Z,{variant:"body2",sx:{mt:1.5},children:s})]})}function H(){return(0,h.jsxs)(N.Z,{href:"#",variant:"subtitle2",sx:{display:"flex",alignItems:"center"},children:["Read more testimonials",(0,h.jsx)(P.Z,{icon:"ic:round-arrow-right-alt",sx:{ml:1}})]})}function Y(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.ql,{children:(0,h.jsx)("title",{children:" About us | Minimal UI"})}),(0,h.jsx)(p,{}),(0,h.jsx)(M,{}),(0,h.jsx)(X,{}),(0,h.jsx)(r.Z,{orientation:"vertical",sx:{my:10,mx:"auto",width:2,height:40}}),(0,h.jsx)(L,{}),(0,h.jsx)(O,{})]})}},75868:function(e,n,t){t.d(n,{DY:function(){return d},IO:function(){return l},Mu:function(){return s},zM:function(){return a}});var i=t(89600),r=t(42026),o=t(46102);function s(e,n){var t=n||"dd MMM yyyy";return e?(0,i.Z)(new Date(e),t):""}function a(e,n){var t=n||"dd MMM yyyy p";return e?(0,i.Z)(new Date(e),t):""}function l(e){return e?(0,r.Z)(new Date(e)):""}function d(e){return e?(0,o.Z)(new Date(e),{addSuffix:!0}):""}},73428:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(87462),r=t(63366),o=t(47313),s=t(83061),a=t(21921),l=t(17592),d=t(77342),c=t(70501),u=t(77430),h=t(32298);function m(e){return(0,h.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var x=t(46417),p=["className","raised"],v=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),f=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCard"}),o=t.className,l=t.raised,c=void 0!==l&&l,u=(0,r.Z)(t,p),h=(0,i.Z)({},t,{raised:c}),f=function(e){var n=e.classes;return(0,a.Z)({root:["root"]},m,n)}(h);return(0,x.jsx)(v,(0,i.Z)({className:(0,s.Z)(f.root,o),elevation:c?8:void 0,ref:n,ownerState:h},u))}))},51166:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(49294);function r(e){return(0,i.Z)({},e)}},46102:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(73149),r=t(7781),o=t(409),s=t(75377),a=t(48883),l=t(93601),d=t(51166),c=t(49294),u=t(5025),h=t(34800),m=1440,x=2520,p=43200,v=86400;function f(e,n){return(0,h.Z)(1,arguments),function(e,n,t){var f,Z;(0,h.Z)(2,arguments);var g=(0,i.j)(),j=null!==(f=null!==(Z=null===t||void 0===t?void 0:t.locale)&&void 0!==Z?Z:g.locale)&&void 0!==f?f:a.Z;if(!j.formatDistance)throw new RangeError("locale must contain formatDistance property");var y=(0,r.Z)(e,n);if(isNaN(y))throw new RangeError("Invalid time value");var b,w,k=(0,c.Z)((0,d.Z)(t),{addSuffix:Boolean(null===t||void 0===t?void 0:t.addSuffix),comparison:y});y>0?(b=(0,l.Z)(n),w=(0,l.Z)(e)):(b=(0,l.Z)(e),w=(0,l.Z)(n));var D,P=(0,s.Z)(w,b),C=((0,u.Z)(w)-(0,u.Z)(b))/1e3,M=Math.round((P-C)/60);if(M<2)return null!==t&&void 0!==t&&t.includeSeconds?P<5?j.formatDistance("lessThanXSeconds",5,k):P<10?j.formatDistance("lessThanXSeconds",10,k):P<20?j.formatDistance("lessThanXSeconds",20,k):P<40?j.formatDistance("halfAMinute",0,k):P<60?j.formatDistance("lessThanXMinutes",1,k):j.formatDistance("xMinutes",1,k):0===M?j.formatDistance("lessThanXMinutes",1,k):j.formatDistance("xMinutes",M,k);if(M<45)return j.formatDistance("xMinutes",M,k);if(M<90)return j.formatDistance("aboutXHours",1,k);if(M<m){var U=Math.round(M/60);return j.formatDistance("aboutXHours",U,k)}if(M<x)return j.formatDistance("xDays",1,k);if(M<p){var R=Math.round(M/m);return j.formatDistance("xDays",R,k)}if(M<v)return D=Math.round(M/p),j.formatDistance("aboutXMonths",D,k);if((D=(0,o.Z)(w,b))<12){var T=Math.round(M/p);return j.formatDistance("xMonths",T,k)}var E=D%12,I=Math.floor(D/12);return E<3?j.formatDistance("aboutXYears",I,k):E<9?j.formatDistance("overXYears",I,k):j.formatDistance("almostXYears",I+1,k)}(e,Date.now(),n)}},42026:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(93601),r=t(34800);function o(e){return(0,r.Z)(1,arguments),(0,i.Z)(e).getTime()}}}]);