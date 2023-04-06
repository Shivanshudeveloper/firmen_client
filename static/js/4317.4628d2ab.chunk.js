"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4317],{84317:function(e,n,r){r.r(n),r.d(n,{default:function(){return Fe}});var t=r(29439),i=r(6907),o=r(72791),a=r(45812),s=r.n(a),l=r(61134),c=r(10524),u=r(36314),d=r(20890),p=r(20647),x=r(18829),h=r(38072),f=r(80362),g=r(17547),m=r(79125),j=r(1413),v=r(81260),Z=r(13967),b=r(81918),y=r(64554),w=r(24518),C=r(73609),k=r(80184);function F(e){var n=e.isFiltered,r=e.onResetFilter,t=(0,Z.Z)(),i=(0,l.Gc)(),o=i.watch,a=i.setValue,s=o(),c=s.gender,d=s.category,p=s.colors,x=s.priceRange,h=s.rating,f=x[0],g=x[1];return(0,k.jsxs)(u.Z,{flexGrow:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!c.length&&(0,k.jsx)(R,{label:"Gender:",children:c.map((function(e){return(0,k.jsx)(b.Z,{label:e,size:"small",onDelete:function(){return function(e){var n=c.filter((function(n){return n!==e}));a("gender",n)}(e)},sx:{m:.5}},e)}))}),"All"!==d&&(0,k.jsx)(R,{label:"Category:",children:(0,k.jsx)(b.Z,{size:"small",label:d,onDelete:function(){a("category","All")},sx:{m:.5}})}),!!p.length&&(0,k.jsx)(R,{label:"Colors:",children:p.map((function(e){return(0,k.jsx)(b.Z,{size:"small",label:(0,k.jsx)(y.Z,{sx:{width:20,height:20,bgcolor:e,borderRadius:"50%",border:"solid 1px ".concat(t.palette.divider)}}),onDelete:function(){return function(e){var n=p.filter((function(n){return n!==e}));a("colors",n)}(e)},sx:{m:.5,color:t.palette.getContrastText(e),"& .MuiChip-label":{pl:.25}}},e)}))}),(0!==f||200!==g)&&(0,k.jsx)(R,{label:"Price:",children:(0,k.jsx)(b.Z,{size:"small",label:"$".concat(f," - ").concat(g),onDelete:function(){a("priceRange",[0,200])},sx:{m:.5}})}),!!h&&(0,k.jsx)(R,{label:"Rating:",children:(0,k.jsx)(b.Z,{size:"small",label:(0,v.G)(h),onDelete:function(){a("rating","")},sx:{m:.5}})}),n&&(0,k.jsx)(w.Z,{color:"error",size:"small",onClick:r,startIcon:(0,k.jsx)(C.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}function R(e){var n=e.label,r=e.children,t=e.sx;return(0,k.jsxs)(u.Z,{direction:"row",alignItems:"stretch",sx:(0,j.Z)({m:.5,borderRadius:1,overflow:"hidden",border:function(e){return"solid 1px ".concat(e.palette.divider)}},t),children:[(0,k.jsx)(u.Z,{component:"span",direction:"row",alignItems:"center",sx:{px:1,typography:"subtitle2",color:"text.secondary",bgcolor:"background.neutral",borderRight:function(e){return"solid 1px ".concat(e.palette.divider)}},children:n}),(0,k.jsx)(u.Z,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:r})]})}var I=r(74165),S=r(15861),A=r(31282),P=r(11087),z=r(57621),B=r(49877),D=r(50533),W=r(7870),_=r(84954),O=r(58008),G=r(25963);function M(e){var n=e.product,r=n.id,t=n.name,i=n.cover,o=n.price,a=n.colors,s=n.status,l=n.available,c=n.sizes,d=n.priceSale,f=(0,p.I0)(),g=h.vB.eCommerce.view((0,A.o)(t)),m=function(){var e=(0,S.Z)((0,I.Z)().mark((function e(){var n;return(0,I.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={id:r,name:t,cover:i,available:l,price:o,colors:[a[0]],size:c[0],quantity:1};try{f((0,x.Xq)(n))}catch(s){console.error(s)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)(z.Z,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[(0,k.jsxs)(y.Z,{sx:{position:"relative",p:1},children:[s&&(0,k.jsx)(_.Z,{variant:"filled",color:"sale"===s?"error":"info",sx:{top:16,right:16,zIndex:9,position:"absolute",textTransform:"uppercase"},children:s}),(0,k.jsx)(B.Z,{color:"warning",size:"medium",className:"add-cart-btn",onClick:m,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:function(e){return e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter})}},children:(0,k.jsx)(C.Z,{icon:"ic:round-add-shopping-cart"})}),(0,k.jsx)(O.Z,{alt:t,src:i,ratio:"1/1",sx:{borderRadius:1.5}})]}),(0,k.jsxs)(u.Z,{spacing:2.5,sx:{p:3},children:[(0,k.jsx)(D.Z,{component:P.rU,to:g,color:"inherit",variant:"subtitle2",noWrap:!0,children:t}),(0,k.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(G.ZQ,{colors:a}),(0,k.jsxs)(u.Z,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[d&&(0,k.jsx)(y.Z,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:(0,W.e_)(d)}),(0,k.jsx)(y.Z,{component:"span",children:(0,W.e_)(o)})]})]})]})]})}var T=r(93433),q=r(45987),$=r(48576),E=["products","loading"];function L(e){var n=e.products,r=e.loading,t=(0,q.Z)(e,E);return(0,k.jsx)(y.Z,(0,j.Z)((0,j.Z)({gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}},t),{},{children:(r?(0,T.Z)(Array(12)):n).map((function(e,n){return e?(0,k.jsx)(M,{product:e},e.id):(0,k.jsx)($.JJ,{},n)}))}))}var V=r(23786),H=r(229),N=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High - Low"},{value:"priceAsc",label:"Price: Low - High"}];function Q(e){return{featured:"Featured",newest:"Newest",priceDesc:"Price: High - Low",priceAsc:"Price: Low - High"}[e]}function U(){var e=(0,l.Gc)().control,n=(0,o.useState)(null),r=(0,t.Z)(n,2),i=r[0],a=r[1],s=function(e){a(e.currentTarget)},c=function(){a(null)};return(0,k.jsx)(l.Qr,{name:"sortBy",control:e,render:function(e){var n=e.field;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(w.Z,{disableRipple:!0,color:"inherit",onClick:s,endIcon:(0,k.jsx)(C.Z,{icon:i?"eva:chevron-up-fill":"eva:chevron-down-fill"}),sx:{fontWeight:"fontWeightMedium"},children:["Sort By:",(0,k.jsx)(y.Z,{component:"span",sx:{color:"text.secondary",ml:.5},children:Q(n.value)})]}),(0,k.jsx)(H.Z,{open:i,onClose:c,children:N.map((function(e){return(0,k.jsx)(V.Z,{selected:e.value===n.value,onClick:function(){c(),n.onChange(e.value)},children:e.label},e.value)}))})]})}})}var K=r(12065),J=r(73974),X=r(13400),Y=r(94721),ee=r(88970),ne=r(85523),re=r(61419),te=r(18316),ie=r(29472),oe=r(4110),ae=r(33805),se=r(72422),le=[{label:"Men",value:"Men"},{label:"Women",value:"Women"},{label:"Kids",value:"Kids"}],ce=[{label:"All",value:"All"},{label:"Shose",value:"Shose"},{label:"Apparel",value:"Apparel"},{label:"Accessories",value:"Accessories"}],ue=["up4Star","up3Star","up2Star","up1Star"],de=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function pe(e){var n=e.open,r=e.onOpen,t=e.onClose,i=e.isDefault,o=e.onResetFilter,a=(0,l.Gc)().control,s=(0,T.Z)(Array(21)).map((function(e,n){var r=10*n,t=0===n?"$".concat(r):"".concat(r);return{value:r,label:n%4?"":t}}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w.Z,{disableRipple:!0,color:"inherit",endIcon:(0,k.jsx)(C.Z,{icon:"ic:round-filter-list"}),onClick:r,children:"Filters"}),(0,k.jsxs)(J.ZP,{anchor:"right",open:n,onClose:t,BackdropProps:{invisible:!0},PaperProps:{sx:{width:ae.w$.W_BASE}},children:[(0,k.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pl:2,pr:1,py:2},children:[(0,k.jsx)(d.Z,{variant:"subtitle1",children:"Filters"}),(0,k.jsx)(X.Z,{onClick:t,children:(0,k.jsx)(C.Z,{icon:"eva:close-fill"})})]}),(0,k.jsx)(Y.Z,{}),(0,k.jsx)(se.Z,{children:(0,k.jsxs)(u.Z,{spacing:3,sx:{p:2.5},children:[(0,k.jsxs)(u.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{variant:"subtitle1",children:" Gender "}),(0,k.jsx)(f.s2,{name:"gender",options:le,sx:{width:1}})]}),(0,k.jsxs)(u.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{variant:"subtitle1",children:" Category "}),(0,k.jsx)(f.km,{name:"category",options:ce,row:!1})]}),(0,k.jsxs)(u.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{variant:"subtitle1",children:" Color "}),(0,k.jsx)(l.Qr,{name:"colors",control:a,render:function(e){var n=e.field;return(0,k.jsx)(G.b8,{selected:n.value,colors:de,onChangeColor:function(e){return n.onChange((r=n.value,t=e,r.includes(t)?r.filter((function(e){return e!==t})):[].concat((0,T.Z)(r),[t])));var r,t},sx:{maxWidth:144}})}})]}),(0,k.jsxs)(u.Z,{spacing:1,sx:{pb:2},children:[(0,k.jsx)(d.Z,{variant:"subtitle1",sx:{flexGrow:1},children:"Price"}),(0,k.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,k.jsx)(xe,{type:"min"}),(0,k.jsx)(xe,{type:"max"})]}),(0,k.jsx)(f.kk,{name:"priceRange",step:10,min:0,max:200,marks:s,getAriaValueText:function(e){return"$".concat(e)},valueLabelFormat:function(e){return"$".concat(e)},sx:{alignSelf:"center",width:"calc(100% - 20px)"}})]}),(0,k.jsxs)(u.Z,{spacing:1,children:[(0,k.jsx)(d.Z,{variant:"subtitle1",children:"Rating"}),(0,k.jsx)(l.Qr,{name:"rating",control:a,render:function(e){var n=e.field;return(0,k.jsx)(ee.Z,(0,j.Z)((0,j.Z)({},n),{},{children:ue.map((function(e,r){return(0,k.jsx)(ne.Z,{value:e,control:(0,k.jsx)(re.Z,{disableRipple:!0,color:"default",icon:(0,k.jsx)(te.Z,{readOnly:!0,value:4-r}),checkedIcon:(0,k.jsx)(te.Z,{readOnly:!0,value:4-r}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:(0,j.Z)({my:.5,borderRadius:1,"&:hover":{opacity:.48}},n.value.includes(e)&&{bgcolor:"action.selected"})},e)}))}))}})]})]})}),(0,k.jsx)(y.Z,{sx:{p:2.5},children:(0,k.jsx)(ie.Z,{color:"error",variant:"dot",anchorOrigin:{vertical:"top",horizontal:"left"},invisible:i,sx:{width:1},children:(0,k.jsx)(w.Z,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",onClick:o,startIcon:(0,k.jsx)(C.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})})})]})]})}function xe(e){var n=e.type,r=(0,l.Gc)(),t=r.control,i=r.setValue;return(0,k.jsx)(l.Qr,{name:"priceRange",control:t,render:function(e){var r=e.field,t="min"===n,o=r.value[0],a=r.value[1];return(0,k.jsxs)(u.Z,{direction:"row",spacing:.5,alignItems:"center",sx:{width:1},children:[(0,k.jsx)(d.Z,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightBold"},children:"".concat(n," ($)")}),(0,k.jsx)(oe.Z,{disableUnderline:!0,fullWidth:!0,size:"small",value:t?o:a,onChange:function(e){return t?r.onChange([Number(e.target.value),a]):r.onChange([o,Number(e.target.value)])},onBlur:function(){return function(e){var n=e[0],r=e[1];n<0&&i("priceRange",[0,r]),n>200&&i("priceRange",[200,r]),r<0&&i("priceRange",[n,0]),r>200&&i("priceRange",[n,200])}(r.value)},inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{pr:1,py:.5,borderRadius:.75,typography:"body2",bgcolor:function(e){return(0,K.Fq)(e.palette.grey[500],.12)},"& .MuiInput-input":{p:0,textAlign:"right"}}})]})}})}var he=r(34004),fe=r.n(he),ge=r(79085),me=r.n(ge),je=r(57689),ve=r(84648),Ze=r(63466),be=r(89731),ye=r(89910),we=r(20169);function Ce(){var e=(0,je.s0)(),n=(0,o.useState)(""),r=(0,t.Z)(n,2),i=r[0],a=r[1],s=(0,o.useState)([]),l=(0,t.Z)(s,2),c=l[0],u=l[1],p=function(){var e=(0,S.Z)((0,I.Z)().mark((function e(n){var r;return(0,I.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a(n),!n){e.next=7;break}return e.next=5,be.Z.get("/api/products/search",{params:{query:n}});case 5:r=e.sent,u(r.data.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),x=function(n){e(h.vB.eCommerce.view((0,A.o)(n)))},f=function(e){"Enter"===e.key&&x(i)};return(0,k.jsx)(ve.Z,{size:"small",autoHighlight:!0,popupIcon:null,options:c,onInputChange:function(e,n){return p(n)},getOptionLabel:function(e){return e.name},noOptionsText:(0,k.jsx)(we.Z,{query:i}),isOptionEqualToValue:function(e,n){return e.id===n.id},componentsProps:{popper:{sx:{width:"280px !important"}},paper:{sx:{"& .MuiAutocomplete-option":{px:"8px !important"}}}},renderInput:function(e){return(0,k.jsx)(ye.yM,(0,j.Z)((0,j.Z)({},e),{},{width:220,placeholder:"Search...",onKeyUp:f,InputProps:(0,j.Z)((0,j.Z)({},e.InputProps),{},{startAdornment:(0,k.jsx)(Ze.Z,{position:"start",children:(0,k.jsx)(C.Z,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})})}))},renderOption:function(e,n,r){var t=r.inputValue,i=n.name,o=n.cover,a=me()(i,t),s=fe()(i,a);return(0,k.jsxs)("li",(0,j.Z)((0,j.Z)({},e),{},{children:[(0,k.jsx)(O.Z,{alt:o,src:o,sx:{width:48,height:48,borderRadius:1,flexShrink:0,mr:1.5}}),(0,k.jsx)(D.Z,{underline:"none",onClick:function(){return x(i)},children:s.map((function(e,n){return(0,k.jsx)(d.Z,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},n)}))})]}))}})}var ke=r(84598);function Fe(){var e=(0,m.K$)().themeStretch,n=(0,p.I0)(),r=(0,p.v9)((function(e){return e.product})),a=r.products,j=r.checkout,v=(0,o.useState)(!1),Z=(0,t.Z)(v,2),b=Z[0],y=Z[1],w=(0,l.cI)({defaultValues:{gender:[],category:"All",colors:[],priceRange:[0,200],rating:"",sortBy:"featured"}}),C=w.reset,R=w.watch,I=w.formState.dirtyFields,S=!I.gender&&!I.category&&!I.colors&&!I.priceRange&&!I.rating||!1,A=function(e,n){var r=n.gender,t=n.category,i=n.colors,o=n.priceRange,a=n.rating,l=n.sortBy,c=o[0],u=o[1];"featured"===l&&(e=s()(e,["sold"],["desc"]));"newest"===l&&(e=s()(e,["createdAt"],["desc"]));"priceDesc"===l&&(e=s()(e,["price"],["desc"]));"priceAsc"===l&&(e=s()(e,["price"],["asc"]));r.length&&(e=e.filter((function(e){return r.includes(e.gender)})));"All"!==t&&(e=e.filter((function(e){return e.category===t})));i.length&&(e=e.filter((function(e){return e.colors.some((function(e){return i.includes(e)}))})));0===c&&200===u||(e=e.filter((function(e){return e.price>=c&&e.price<=u})));a&&(e=e.filter((function(e){var n=function(e){return"up4Star"===e?4:"up3Star"===e?3:"up2Star"===e?2:1};return e.totalRating>n(a)})));return e}(a,R());(0,o.useEffect)((function(){n((0,x.Xp)())}),[n]);var P=function(){C()};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.ql,{children:(0,k.jsx)("title",{children:" Ecommerce: Shop | Minimal UI"})}),(0,k.jsx)(f.ZP,{methods:w,children:(0,k.jsxs)(c.Z,{maxWidth:!e&&"lg",children:[(0,k.jsx)(g.Z,{heading:"Shop",links:[{name:"Dashboard",href:h.vB.root},{name:"E-Commerce",href:h.vB.eCommerce.root},{name:"Shop"}]}),(0,k.jsxs)(u.Z,{spacing:2,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:2},children:[(0,k.jsx)(Ce,{}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[(0,k.jsx)(pe,{isDefault:S,open:b,onOpen:function(){y(!0)},onClose:function(){y(!1)},onResetFilter:P}),(0,k.jsx)(U,{})]})]}),(0,k.jsx)(u.Z,{sx:{mb:3},children:!S&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(d.Z,{variant:"body2",gutterBottom:!0,children:[(0,k.jsx)("strong",{children:A.length}),"\xa0Products found"]}),(0,k.jsx)(F,{isFiltered:!S,onResetFilter:P})]})}),(0,k.jsx)(L,{products:A,loading:!a.length&&S}),(0,k.jsx)(ke.Z,{totalItems:j.totalItems})]})})]})}}}]);
//# sourceMappingURL=4317.4628d2ab.chunk.js.map