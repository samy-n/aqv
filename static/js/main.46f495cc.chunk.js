(this.webpackJsonpaqv=this.webpackJsonpaqv||[]).push([[0],{230:function(e,t,a){},234:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(2),i=a.n(c),o=a(106),r=a.n(o),l=(a(230),a(22)),d=a(211),s=a(55),u=a(32),j=a.n(u),f=a(188),b=a(41),h=a(153),p=a(152),x=a(117);a(370);x.a.initializeApp({apiKey:"AIzaSyDmoUrjYrMEuIeqkp5WjG-slLHKwRkh7O0",authDomain:"deepblue-aqv.firebaseapp.com",projectId:"deepblue-aqv",storageBucket:"deepblue-aqv.appspot.com",messagingSenderId:"935017759812",appId:"1:935017759812:web:c758e09ce2ad5b7ef26811",measurementId:"G-3KVGE9ZKM8"});var O=x.a.firestore(),m=(x.a,a(234),a(377)),g=a(379),v=a(208),y=a(209),k=a(88),w=a(212),C=a(206),S=function(e){var t=e.setTooltipContent,a=Object(c.useState)("air_quality"),i=Object(l.a)(a,2),o=i[0],r=i[1],d=Object(c.useState)([]),u=Object(l.a)(d,2),x=u[0],S=u[1],q=Object(c.useState)([]),_=Object(l.a)(q,2),I=_[0],A=_[1],E=Object(c.useState)([]),K=Object(l.a)(E,2),z=K[0],L=K[1],W=Object(c.useState)([]),M=Object(l.a)(W,2),F=M[0],D=M[1],G=function(e){Q(e.target.name,e.target.value)},Q=function(e,t){if(""!==t){var a=[],n=O.collection("wards");n.doc("2q0Z3Lumg7zlyEIvj9kK").collection("data").get().then((function(e){e.forEach((function(e){"air_quality"===e.id||"social_demo"===e.id||"health"===e.id?a.push():a.push(e.id)}))})),n.get().then((function(c){var i=[];c.forEach((function(a){var c=null;"social_demo"===e||"health"===e?c=n.doc(a.id).collection("data").doc(e).collection("year").doc(t):(c=n.doc(a.id).collection("data").doc(e),n.doc(a.id).collection("data").doc("social_demo").collection("year").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.id)})),I!==t&&A(t)})),n.doc(a.id).collection("data").doc("health").collection("year").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.id)})),z!==t&&L(t)}))),c.get().then((function(e){i.push(e.data())}))})),S(i),T(e),a===F&&a===[]||D(a)}))}},T=function(e){r(e)};Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("air_quality","Air Quality");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=Object(c.useState)({coordinates:[72.8777,19.089]}),H=Object(l.a)(B,2),Z=H[0],R=H[1],U=Object(c.useState)(1),V=Object(l.a)(U,2),J=V[0],N=V[1];var P={};switch(o){case"social_demo":P.domain=[1e5,1e6],P.attr="population";break;case"health":P.domain=[20,100],P.attr="malaria";break;case"air_quality":default:P.domain=[100,250],P.attr="AQI"}var Y=h.a().domain(P.domain).range(["#ffedea","#ffcec5","#ffad9f","#ff8a75","#ff5533","#e2492d","#be3d26","#9a311f","#782618"]),X=["#ff6600","#ff66ff","#00ffff","#ffcccc","#ffff00","#ffffff","#00ccff","#66ff66"];return Object(n.jsx)("div",{style:{border:"2px black solid"},children:x?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{style:{padding:"5px 10px",position:"fixed",top:"40%",backgroundColor:"#eee8",border:"1px solid black"},children:[Object(n.jsxs)("h4",{style:{margin:"5px"},children:["Zoom: ",J,"x"]}),Object(n.jsx)("input",{type:"range",max:3,min:.5,step:.5,value:J,onChange:function(e){N(+e.target.value)}})]}),Object(n.jsxs)("div",{style:{position:"fixed",backgroundColor:"#aaab",top:0,left:0,borderBottom:"1px solid #222",padding:".5em",width:"100%"},children:[Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(n.jsxs)("div",{className:"Holder",children:[Object(n.jsx)("label",{for:"1",children:"Social Demo"}),Object(n.jsxs)("select",{id:"1",name:"social_demo",onChange:function(e){return G(e)},onClick:function(e){return G(e)},children:[Object(n.jsx)("option",{defaultValue:"",disabled:!0,children:"Select"}),I!==[]?I.map((function(e){return Object(n.jsx)("option",{value:e,children:e})})):null]})]}),Object(n.jsxs)("div",{className:"Holder",children:[Object(n.jsx)("label",{for:"2",children:"Health"}),Object(n.jsxs)("select",{id:"2",name:"health",onChange:function(e){return G(e)},children:[Object(n.jsx)("option",{defaultValue:"",disabled:!0,children:"Select"}),z!==[]?z.map((function(e){return Object(n.jsx)("option",{value:e,children:e})})):null]})]}),Object(n.jsx)("input",{style:{fontSize:"1em",fontWeight:"bold",backgroundColor:"#3399ff",borderRadius:"10px",border:"1px solid black",padding:".6em 1em",color:"white"},id:"3",type:"button",name:"air_quality",onClick:function(e){return G(e)},value:"Air Quality"}),F!==[]?F.map((function(e,t){return Object(n.jsx)("input",{value:e.toUpperCase(),name:e,type:"button",style:{fontSize:"1em",fontWeight:"bold",backgroundColor:"#3399ff",borderRadius:"10px",border:"1px solid black",padding:".6em 1em",color:"white"},onClick:function(e){return G(e)}},e+t)})):null]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h2",{style:{margin:0,padding:0,textAlign:"center",textTransform:"uppercase"},children:o})]}),Object(n.jsx)(b.ComposableMap,{"data-tip":"",projectionConfig:{center:[72.8777,19.089],scale:9e4,translate:[530,310]},width:1060,height:800,style:{border:"1px solid black"},children:Object(n.jsx)(b.ZoomableGroup,{zoom:J,center:Z.coordinates,onMoveEnd:function(e){R(e)},children:Object(n.jsx)(b.Geographies,{geography:"./mumbai_wards.json",children:function(e){var a=e.geographies;return Object(n.jsxs)(n.Fragment,{children:[a.map((function(e){var a=x.find((function(t){return t.ward===e.properties.name}));return Object(n.jsx)(b.Geography,{geography:e,onMouseEnter:function(){if("air_quality"===o){if(t("Loading"),a){var e=[];e.push(a);var c=Object(s.a)({},e[0]);t(Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("h2",{children:["Ward: ",null===a||void 0===a?void 0:a.ward]}),Object(n.jsxs)("h3",{children:["AQI: ",null===a||void 0===a?void 0:a.AQI]}),Object(n.jsxs)(m.a,{width:500,height:400,data:e,children:[Object(n.jsx)(g.a,{strokeDasharray:"3 3"}),Object(n.jsx)(v.a,{dataKey:"ward",fontSize:"16px"}),Object(n.jsx)(y.a,{}),Object(n.jsx)(k.a,{}),Object.keys(c).sort().map((function(e,t){return Object(n.jsx)(w.a,{dataKey:e,fill:X[t],children:Object(n.jsx)(C.a,{fill:"#fff",datakey:"ward",content:c[e],fontWeight:"bold",strokeWidth:".5px",stroke:"black"})})}))]})]}))}}else if("health"===o){if(t("Loading"),a){var i=[];i.push(a);var r=Object(s.a)({},i[0]);t(Object(n.jsxs)(m.a,{width:500,height:400,data:i,children:[Object(n.jsx)(g.a,{strokeDasharray:"3 3"}),Object(n.jsx)(v.a,{dataKey:"ward",fontSize:"16px"}),Object(n.jsx)(y.a,{}),Object(n.jsx)(k.a,{}),Object.keys(r).sort().map((function(e,t){return Object(n.jsx)(w.a,{dataKey:e,fill:X[t],children:Object(n.jsx)(C.a,{fill:"#fff",datakey:"ward",content:r[e],fontWeight:"bold",strokeWidth:".3px",stroke:"black"})})}))]}))}}else if(t("Loading"),a){var l=[];l.push(a),t(function(e){var t;return t=Object(s.a)({},e[0]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Ward:",t.ward]}),Object.keys(t).sort().map((function(e,a){return"ward"!==e?Object(n.jsxs)("h4",{children:[e.toUpperCase(),":",t[e]]}):null}))]})}(l))}},onMouseLeave:function(){t("")},style:{hover:{fill:"#459CAF",outline:"none"}},fill:"air_quality"===o||"social_demo"===o?Y(a?a[P.attr]:"#eee"):"#aaa"},e.rsmKey)})),a.map((function(e){var t=Object(p.a)(e),a=x.find((function(t){return t.ward===e.properties.name}));return Object(n.jsx)("g",{children:Object(n.jsx)(b.Marker,{coordinates:t,children:Object(n.jsx)("text",{y:"2",fontSize:8,textAnchor:"middle",style:{userSelect:"none"},children:null===a||void 0===a?void 0:a.ward})})},e.rsmKey)}))]})}})})})]}):Object(n.jsx)("h2",{children:"Loading"})})},q=(a(368),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{setTooltipContent:i}),Object(n.jsx)(d.a,{children:a})]})}),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,383)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),_()}},[[369,1,2]]]);
//# sourceMappingURL=main.46f495cc.chunk.js.map