"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5179],{75179:function(a,e,i){i.r(e);var n=i(4942),t=i(1413),r=i(29439),s=i(47313),o=i(61113),l=i(9019),u=i(63585),d=i(42832),c=i(24631),h=i(1550),m=i(88797),p=i(51405),g=i(24193),f=(i(27026),i(15366)),x=(i(16031),i(31387)),y=i(12865),b=i(46417),j=["None","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];e.default=function(){var a=(0,y.E)().user,e=f.ZP.auth().currentUser,i=(0,s.useRef)(),v=(0,s.useState)(100),N=(0,r.Z)(v,2),Z=N[0],S=N[1],C=(0,s.useState)(null),w=(0,r.Z)(C,2),k=w[0],P=w[1],B=(0,s.useState)({firstName:"",lastName:"",phoneNumber:"",state:"",country:""}),M=(0,r.Z)(B,2),A=M[0],L=M[1],G=function(a){return function(e){var i;i="phoneNumber"===a?e:e.target.value,L((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},a,i))}))}};return(0,s.useEffect)((function(){a&&L((function(e){return(0,t.Z)((0,t.Z)({},e),{},{country:a.firestore.country||"None",state:a.firestore.state})}))}),[a]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{variant:"h2",children:"Profile"}),a&&(0,b.jsxs)(l.ZP,{container:!0,sx:{marginTop:6},children:[(0,b.jsx)(l.ZP,{item:!0,xs:4,sx:{padding:2},children:(0,b.jsxs)("center",{children:[(0,b.jsx)(u.Z,{alt:"profile user",src:k||a.photoURL,sx:{width:100,height:100}}),100===Z?(0,b.jsxs)(o.Z,{variant:"p",sx:{color:"blue",cursor:"pointer"},onClick:function(a){i.current.click()},children:[(0,b.jsx)("input",{style:{display:"none"},type:"file",ref:i,onChange:function(i){!function(i){var n=i[0],t=(new Date).getTime()+n.name,r=f.tO.ref().child("/ProfilePictures/".concat(t)).put(n);r.on("state_changed",(function(a){var e=Math.floor(a.bytesTransferred/a.totalBytes*100);S(e)}),(function(a){console.log(a)}),(function(){r.snapshot.ref.getDownloadURL().then((function(i){e.updateProfile({photoURL:i}).then((function(){P(i),f.RZ.collection(f.hJ).doc(a.uid).update({photoURL:i})})).catch((function(a){return console.log(a)}))}))}))}(i.target.files)},value:a.profilePic}),"Update Picture"]}):(0,b.jsxs)(b.Fragment,{children:["Uploading: ",Z,"%"]}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(o.Z,{variant:"h5",children:a.displayName})]})}),(0,b.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,b.jsxs)(d.Z,{direction:"row",spacing:2,children:[(0,b.jsxs)("div",{style:{width:"50%"},children:[(0,b.jsxs)(o.Z,{variant:"p",children:["First Name ",(0,b.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,b.jsx)(c.Z,{type:"text",variant:"outlined",placeholder:a.displayName.split(" ")[0],fullWidth:!0,value:A.firstName,onChange:G("firstName")})]}),(0,b.jsxs)("div",{style:{width:"50%"},children:[(0,b.jsxs)(o.Z,{variant:"p",children:["Last Name ",(0,b.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,b.jsx)(c.Z,{type:"text",variant:"outlined",placeholder:a.displayName.split(" ")[1],fullWidth:!0,value:A.lastName,onChange:G("lastName")})]})]}),(0,b.jsx)("br",{}),(0,b.jsx)(d.Z,{direction:"row",spacing:2,children:(0,b.jsxs)("div",{style:{width:"100%"},children:[(0,b.jsx)(o.Z,{variant:"p",children:"Email Address"}),(0,b.jsx)(c.Z,{type:"text",variant:"outlined",value:a.email,fullWidth:!0,disabled:!0})]})}),(0,b.jsx)("br",{}),(0,b.jsxs)(d.Z,{direction:"row",spacing:2,children:[(0,b.jsxs)("div",{style:{width:"50%"},children:[(0,b.jsxs)(o.Z,{variant:"p",children:["State ",(0,b.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,b.jsx)(c.Z,{type:"text",variant:"outlined",fullWidth:!0,value:A.state,onChange:G("state")})]}),(0,b.jsxs)("div",{style:{width:"50%"},children:[(0,b.jsx)(o.Z,{variant:"p",children:"Country"}),(0,b.jsx)("br",{}),(0,b.jsx)(h.Z,{fullWidth:!0,children:(0,b.jsx)(m.Z,{fullWidth:!0,id:"demo-simple-select",value:A.country,onChange:G("country"),children:j.map((function(a,e){return(0,b.jsx)(p.Z,{value:a,children:a},e+a)}))})})]})]}),(0,b.jsx)("br",{}),(0,b.jsx)(g.Z,{id:"submit-button",variant:"contained",sx:{float:"right"},onClick:function(){var i;i=A.firstName&&A.lastName?A.firstName+" "+A.lastName:a.displayName,delete A.firstName,delete A.lastName,A.displayName=i,Object.keys(A).forEach((function(e){""===A[e]&&(A[e]=a[e])})),e.updateProfile({displayName:i}).then((function(){console.log(A),f.RZ.collection(f.hJ).doc(a.uid).update(A).then((function(){x.Am.success("Profile Updated",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0}),L({firstName:"",lastName:"",phoneNumber:"",state:"",country:""}),window.location.href="/dashboard/profilesettings"}))})).catch((function(a){console.log(a)}))},children:"Save Details"})]})]})]})}}}]);