(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{188:function(e,t,a){e.exports=a(414)},210:function(e,t){},212:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},312:function(e,t){},405:function(e,t,a){},410:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(184),r=a.n(l),s=a(16),o=a(46),m=a(36),i=a(47),u=a.n(i),p=a(109),d=a(73),b=a(74),g=a.n(b),f=function(e){var t,a=(t=e.getAttribute("data-nav"))&&null!==t?new URL(t).searchParams.get("page"):null;if(a&&null!==a)return a};function E(){var e=JSON.parse(localStorage.getItem("counter"))||{},t=new Date,a=e.username;if(0===Object.keys(e).length||"luke skywalker"===e.username.toLowerCase())return localStorage.setItem("counter",JSON.stringify({count:1,time:t.getTime(),username:a})),!0;var n,c,l=(n=e.time,c=t,console.log(n),console.log(c),(c-n)/6e4);if(console.log(l),!(l>1))return e.count<17&&(localStorage.setItem("counter",JSON.stringify({count:e.count+1,time:t.getTime(),username:a})),!0);localStorage.setItem("counter",JSON.stringify({count:1,time:t.getTime(),username:a}))}a(405);var h=function(e){var t=e.results;return c.a.createElement("div",{key:t.name,className:"plant-cards card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-box-body"},c.a.createElement("p",null,c.a.createElement("span",null,"Population:")," ",c.a.createElement("span",{className:"text-green bold"},t.population)),c.a.createElement("div",{className:"width-100 diamter-water common-card "},c.a.createElement("p",{className:"width-100 "},c.a.createElement("span",null,"Diameter: ")," ",c.a.createElement("span",{className:"text-red bold"},t.diameter)),c.a.createElement("p",{className:"width-100 "},c.a.createElement("span",null,"Gravity: "),c.a.createElement("span",{className:"text-red bold"},t.gravity))),c.a.createElement("div",{className:"width-100 climate-rotation common-card"},c.a.createElement("p",{className:"width-100"},c.a.createElement("span",null,"Climate: ")," ",c.a.createElement("span",{className:"text-red bold"},t.climate)),c.a.createElement("p",{className:"width-100"},c.a.createElement("span",null,"Rotation period: "),c.a.createElement("span",{className:"text-red bold"},t.rotation_period)))),c.a.createElement("div",{className:"card-box-name"},c.a.createElement("p",null,t.name))),c.a.createElement("div",{className:"planet-img gradient".concat(Math.floor(3*Math.random())),style:{width:"".concat(18*t.population.length,"px"),height:"".concat(18*t.population.length,"px")}}),c.a.createElement("div",{className:"opacity-body"}))};function v(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(1),m=Object(s.a)(r,2),i=m[0],b=m[1],v=Object(n.useState)(null),N=Object(s.a)(v,2),O=N[0],y=N[1],j=Object(n.useState)(null),S=Object(s.a)(j,2),w=S[0],x=S[1],k=Object(n.useState)(""),I=Object(s.a)(k,2),C=I[0],L=I[1],J=Object(n.useState)("none"),T=Object(s.a)(J,2),M=T[0],P=T[1],D=Object(n.useState)(""),A=Object(s.a)(D,2),G=A[0],U=A[1],B=Object(n.useState)(""),R=Object(s.a)(B,2),_=R[0],q=R[1],F=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E()){e.next=6;break}return l([]),U("Maximum Api request limit reached. Please try after a minute."),e.abrupt("return",!1);case 6:U("");case 7:return P("block"),e.prev=8,e.next=11,g.a.get("https://swapi.co/api/planets/?page=".concat(n,"&format=json&search=").concat(t));case 11:c=e.sent,r=c.count/10,0!==a.length?(s=[].concat(Object(p.a)(a),Object(p.a)(c.results)),l(s)):l(c.results),y(c.count),x(r>i?c.next:"done"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),console.log("Error",e.t0);case 21:P("none");case 22:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){F(C,i),q(JSON.parse(localStorage.getItem("counter")).username)}),[C,i]);var W=function(e,t,a){var n;return function(){var c=this,l=arguments,r=function(){n=null,a||e.apply(c,l)},s=a&&!n;clearTimeout(n),n=setTimeout(r,t),s&&e.apply(c,l)}}((function(e){l([]),L(e.value),b(1)}),1e3);return c.a.createElement("div",{className:"planetContainer col-md-12 npr"},c.a.createElement("header",{className:"col-md-12 col-xs-12"},c.a.createElement("h1",{className:"col-md-5 title pull-left"},"Galactic Empire: Planets"),c.a.createElement("div",{className:"text-red col-md-4 pull-left",style:{padding:"15px"}},"Welcome ",_.toUpperCase()),c.a.createElement("div",{className:"col-md-3 pull-left"},c.a.createElement(o.b,{to:{pathname:"/login",state:{logout:!0}}},c.a.createElement("button",{type:"button",className:"btn btn-danger transparent pull-right"},"Sign Out")))),c.a.createElement("input",{type:"search",className:"searchBar col-md-3 pull-left",onChange:function(e){return W(e.target)},placeholder:"Search Planets"}),c.a.createElement("button",{type:"button",className:"loadmore-btn btn btn-success transparent pull-left","data-pointer":M,onClick:function(e){return b(f(e.target))},"data-nav":w},"block"===M?"loading...":"Load More"),c.a.createElement("p",{className:"count col-md-2 pull-left text-white"},"Showing: ",a.length," of ",O||0),c.a.createElement("div",{className:"planet-list col-md-12 col-xs-12 style-2 scrollbar"},""!==G?c.a.createElement("div",{class:"alert alert-danger"},G):"",a.map((function(e,t){return c.a.createElement(h,{key:e.name+t,results:e})})),0===a.length&&"none"===M?c.a.createElement("p",{style:{color:"#fff"}},"No record found"):"",c.a.createElement("div",{className:"spinner",style:{display:"".concat(M)}})))}var N=a(416),O=a(418),y=a(417);a(410);function j(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),p=i[0],b=i[1],f=Object(n.useState)(!1),E=Object(s.a)(f,2),h=E[0],v=E[1],j=Object(n.useState)(!1),S=Object(s.a)(j,2),w=S[0],x=S[1],k=Object(n.useState)(!1),I=Object(s.a)(k,2),C=I[0],L=I[1],J=Object(m.g)();if(h)return c.a.createElement(m.a,{to:"/planets"});function T(){return(T=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(!0),e.prev=2,e.next=5,g.a.get("https://swapi.co/api/people/?search=".concat(l,"&format=json"));case 5:a=e.sent,l.toLowerCase()===a.results[0].name.toLowerCase()&&p===a.results[0].birth_year?(n=new Date,localStorage.setItem("user",JSON.stringify({isLoggedIn:!0,username:l})),localStorage.setItem("counter",JSON.stringify({count:1,time:n.getTime(),username:l})),v(!0)):x(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x(!0);case 12:L(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return J.state&&!0===J.state.logout&&localStorage.removeItem("user"),c.a.createElement("div",{className:"Login"},c.a.createElement("h1",{className:"col-md-5 title"},"Galactic Empire"),c.a.createElement("h2",{className:"col-md-12 login-title text-white"},"Login to database"),c.a.createElement("form",{onSubmit:function(e){return T.apply(this,arguments)}},c.a.createElement("h5",{className:"col-md-12 login-title"},"May the force be with you"),c.a.createElement(N.a,{controlId:"username"},c.a.createElement("label",{className:"text-white"},"Username (case-insensitive)"),c.a.createElement(O.a,{autoFocus:!0,type:"text",value:l,onChange:function(e){return r(e.target.value)}})),c.a.createElement(N.a,{controlId:"password"},c.a.createElement("label",{className:"text-white"},"Password"),c.a.createElement(O.a,{value:p,onChange:function(e){return b(e.target.value)},type:"password"})),c.a.createElement(y.a,{block:!0,className:"btn-success",disabled:!(l.length>0&&p.length>0),type:"submit"},C?"Loading...":"Login"),w?c.a.createElement("div",{style:{marginTop:"20px"},className:"alert alert-danger alert-dismissible fade show"},"Invalid Credentials"):""))}var S=a(18);function w(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){(JSON.parse(localStorage.getItem("user"))||{}).isLoggedIn&&l(!0)}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(o.a,{history:S.a},a?c.a.createElement(m.a,{to:"/planets"}):c.a.createElement(m.a,{to:"/login"}),c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/login"},c.a.createElement(j,null)),c.a.createElement(m.b,{exact:!0,path:"/planets"},c.a.createElement(v,null)))))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.9fcf9864.chunk.js.map