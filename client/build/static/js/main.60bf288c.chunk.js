(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t){e.exports={footageCalc:function(e,t){return((e/=12)*(t/=12)).toFixed(2)},priceCalc:function(e,t){return(e*t).toFixed(2)}}},24:function(e){e.exports=JSON.parse('{"domain":"dev-zqib3417.auth0.com","clientId":"ZUR3avWf50u7aNEmryEVAXrksr4bCe7E"}')},36:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/contrast-texture.11649eec.jpg"},43:function(e,t,a){e.exports=a(78)},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(37),c=a.n(s),r=(a(48),a(14));a(49);var i=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",{className:"logo"},"Custom Studio Frames"),l.a.createElement("div",{className:"buttons is-centered"},l.a.createElement("button",{className:"button is-Link"},l.a.createElement(r.b,{to:"/login"},"Login")),l.a.createElement("button",{className:" button is-Link"},l.a.createElement(r.b,{to:"/"},"Catalog")),l.a.createElement("button",{className:"button is-Link"},l.a.createElement(r.b,{to:"/shopart"},"Art")),l.a.createElement("button",{className:"button is-Link"},l.a.createElement(r.b,{to:"/cart"},"Cart"))),l.a.createElement("br",null))},o=a(13),u=a(6),m=a(7),d=a(9),h=a(8),p=a(10),f=a(40),E={height:"100%",width:"100%",zoom:"-500",backgroundImage:'url("'.concat(a.n(f).a,'")')};var v=function(e){return l.a.createElement("div",{style:E,className:"column banner"},l.a.createElement("h1",{className:"title"},e.title),l.a.createElement("p",null,e.subtext))};a(54);var g=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},e.series," / ",e.finish),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,"Depth: ",e.depth," inches"),l.a.createElement("div",null,"Width: ",e.width," inches"),l.a.createElement("div",null,"Price/FT: $",e.price,".00"),l.a.createElement("br",null),l.a.createElement("button",{className:"button is-info is-small",onClick:e.handleView,sku:e.sku,series:e.series,finish:e.finish,depth:e.depth,width:e.width,price:e.price},"Create Quote")),l.a.createElement("div",{className:"card-footer"},"SKU: ",e.sku))};var b=function(e){return l.a.createElement("div",{className:"section"},e.children)},N=(a(55),a(5)),k=a.n(N),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={frameData:[],specData:[]},a.handleView=function(e){var t=e.target.attributes.getNamedItem("sku").value;window.location.href="/quoteSpec/".concat(t)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("/api/frames").then((function(t){e.setState({frameData:t.data})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(b,null,l.a.createElement("div",{className:"columns is-vcentered"},l.a.createElement(v,{title:"Catalog",subtext:" Find an estimate for your customized frame quickly and easily."})),l.a.createElement("br",null),this.state.frameData.map((function(t){return l.a.createElement("div",{className:"column is-half is-pulled-left"},l.a.createElement(g,{key:t._id,series:t.series,finish:t.finish,depth:t.depth,width:t.width,price:t.price,sku:t.sku,handleView:e.handleView}))})))}}]),t}(n.Component);var w=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"cart card-header"},e.series," ",e.finish),l.a.createElement("div",{className:"cart card-content"},l.a.createElement("div",null,"SKU: ",e.sku),l.a.createElement("div",null,"Length: ",e.length," inches"),l.a.createElement("div",null,"Height: ",e.height," inches"),l.a.createElement("div",null,"Cost: $",e.cost,".00")),l.a.createElement("div",{className:"cart card-footer"},l.a.createElement("button",{className:"button del is-med",onClick:e.deleteCart,value:e.value,itemsku:e.itemsku},"Remove")))},y=(a(72),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={userID:"5e61ac00fc8f4e67c8568f12",cart:[]},a.deleteCart=function(e){e.preventDefault();var t=e.target.value,n=e.target.itemsku;console.log("deleting item ID: ",t,n),k.a.delete("/api/cart/list/"+t).then((function(e){console.log("post delete: ",e);var n=a.state.cart.filter((function(e){return e._id!==t}));a.setState({cart:n})}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.userID;k.a.get("/api/cart/list/"+t).then((function(t){e.setState({cart:t.data})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(b,null,l.a.createElement("div",{ClassName:"container"},l.a.createElement(v,{title:"Cart",subtext:"Review items and checkout."}),l.a.createElement("div",{className:"is-centered buff"},l.a.createElement("a",{className:"is-pulled-right is-primary",href:"/"},"Back to Catalogue")),this.state.cart.map((function(t){return l.a.createElement(w,{key:t._id,value:t._id,series:t.series,finish:t.finish,sku:t.sku,length:t.length,height:t.height,cost:t.cost,deleteCart:e.deleteCart})}))),l.a.createElement("div",null))}}]),t}(n.Component)),C=a(15),j=a.n(C),S=a(19),O=a(16),D=a(41),M=a(42),R=a.n(M),F=function(){return window.history.replaceState({},document.title,window.location.pathname)},L=l.a.createContext(),U=function(){var e=Object(n.useContext)(L),t=e.isAuthenticated,a=e.loginWithRedirect,s=e.logout;return l.a.createElement("div",{className:""},!t&&l.a.createElement("button",{onClick:function(){return a({})}},"Log in"),t&&l.a.createElement("button",{onClick:function(){return s()}},"Log out"))};var P=function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-4 is-offset-4"},l.a.createElement("h3",{class:"title has-text-black"},"Login"),l.a.createElement("hr",{class:"login-hr"}),l.a.createElement("form",null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-med",type:"text",placeholder:"Email",autofocus:""}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-med",type:"password",placeholder:"Password"}))),l.a.createElement("button",{className:"button is-block is-success is-med is-fullwidth"},"Login ",l.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}))),l.a.createElement("hr",{class:"login-hr"}),l.a.createElement("p",{class:"has-text-black"},"New User? ",l.a.createElement("a",{href:"/signUp"},"Sign Up Here")))))},I=(a(76),a(23)),A=a.n(I);var Q=function(e){return l.a.createElement("div",{className:"modal ".concat(e.RFQModal)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{style:{width:"450px"},className:"quote modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Your Requested Quote")),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("p",null,"Total footage: ",e.totalMeasure," Feet"),l.a.createElement("p",null,"Total Price: $",e.cost)),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button is-success",type:"submit",onClick:e.handleCart},"Move to Cart"),l.a.createElement("button",{className:"button",onClick:e.handleExit},"Cancel"))))};var W=function(e){return l.a.createElement("div",{className:"modal ".concat(e.RejModal)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{style:{width:"300px"},className:"quote modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},e.heading)),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("p",null,e.text1)),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button",onClick:e.handleExit},"Ok"))))};var q=function(e){return l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Please select dimensions in Inches"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Height"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{type:"number",name:"height",id:"height",value:e.height,placeholder:"Please Enter a Height",onChange:e.handleHeight}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Length"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{type:"number",name:"length",id:"length",value:e.length,placeholder:"Please Enter a Length",onChange:e.handleLength}))),l.a.createElement("input",{className:"button is-success",placeholder:"Calculate",onClick:e.handleQuoteRequest}))},T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={userID:"5e61ac00fc8f4e67c8568f12",specData:{},height:Number,length:Number,totalMeasure:Number,cost:Number,RFQModal:"",RejModal:""},a.handleHeight=function(e){a.setState({height:e.target.value})},a.handleLength=function(e){a.setState({length:e.target.value})},a.handleQuoteRequest=function(e){e.preventDefault(),a.setState({totalMeasure:A.a.footageCalc(a.state.length,a.state.height)},(function(){a.setState({cost:A.a.priceCalc(a.state.totalMeasure,a.state.specData.price)}),a.callModals()}))},a.callModals=function(){"NaN"!==a.state.totalMeasure&&"NaN"!==a.state.cost?a.setState({RFQModal:"is-active"}):a.setState({RejModal:"is-active"})},a.handleCart=function(e){e.preventDefault();var t={userID:a.state.userID,frameID:a.state.specData._id,sku:a.state.specData.sku,series:a.state.specData.series,finish:a.state.specData.finish,height:a.state.height,length:a.state.length,totalMeasure:a.state.totalMeasure,cost:a.state.cost};console.log("Adding to Cart: ",t);var n="/api/cart/list/".concat(a.state.userID);k.a.post(n,t).then((function(e){console.log("response from server",e),a.setState({RFQModal:""})}))},a.handleExit=function(){a.setState({RFQModal:""},(function(){a.setState({RejModal:""})}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.sku;k.a.get("/api/frames/quoteSpec/"+t).then((function(t){e.setState({specData:t.data[0]},(function(){console.log(e.state.specData)}))}))}},{key:"render",value:function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("h1",{className:"is-size-3 has-text-centered banner"},'Calculate Quote: "',this.state.specData.series,'" ',this.state.specData.sku),l.a.createElement("br",null),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-half v-centered left-pad"},l.a.createElement("label",{className:"title"},"Specs"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"SKU: ",this.state.specData.sku),l.a.createElement("div",null,"Price per Foot: $",this.state.specData.price,".00"),l.a.createElement("div",null,"Finish: ",this.state.specData.finish),l.a.createElement("div",null,"Depth: ",this.state.specData.depth," inches"),l.a.createElement("div",null,"Width: ",this.state.specData.width," inches")),l.a.createElement("div",{className:"column is-half"},l.a.createElement(q,{height:this.state.height,handleHeight:this.handleHeight,length:this.state.length,handleLength:this.handleLength,handleQuoteRequest:this.handleQuoteRequest})))),l.a.createElement(Q,{RFQModal:this.state.RFQModal,totalMeasure:this.state.totalMeasure,cost:this.state.cost,handleCart:this.handleCart,handleExit:this.handleExit}),l.a.createElement(W,{RejModal:this.state.RejModal,heading:"Error",text1:"Please make sure all fields are filled out.",handleExit:this.handleExit})))}}]),t}(n.Component);a(36);var H=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal ".concat(e.successModal)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card is-small"},l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("p",null,"Welcome ",e.firstName)),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button is-success",onClick:e.handleExit},"Continue")))))};var _=function(e){return l.a.createElement("div",{className:"modal ".concat(e.errorType)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("p",null,e.text1),l.a.createElement("p",null,e.text2)),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button is-danger",onClick:e.handleErrorExit},"OK"))))},V=(a(77),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",password:"",successModal:"",errorModal:"",emailRej:"",errorEmailUse:{}},a.submitForm=function(e){e.preventDefault();var t={firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,password:a.state.password};""!==t.password?(console.log(t),k.a.post("/api/users/signUp",{newUserData:t}).then((function(e){e.data.acceptance?a.setState({successModal:"is-active"}):e.data.email&&a.setState({errorEmailUse:e.data},(function(){a.setState({emailRej:"is-active"})}))})).catch((function(e){console.log(e),a.setState({errorModal:"is-active"})}))):a.setState({errorModal:"is-active"})},a.handleExit=function(){a.setState({successModal:""})},a.handleErrorExit=function(){a.setState({errorModal:""},(function(){a.setState({emailRej:""})}))},a.handleFirstName=function(e){e.preventDefault(),a.setState({firstName:e.target.value})},a.handleLastName=function(e){e.preventDefault(),a.setState({lastName:e.target.value})},a.handleEmail=function(e){e.preventDefault(),a.setState({email:e.target.value})},a.handlePassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-8 is-offset-2"},l.a.createElement("h3",{className:"title has-text-black"},"Sign Up New User"),l.a.createElement("hr",{className:"login-hr"}),l.a.createElement("form",null,l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"field is-half is-pulled-left"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{value:this.state.firstName,id:"firstName",className:"input is-med",type:"text",placeholder:"First Name",autoFocus:"",onChange:this.handleFirstName}))),l.a.createElement("div",{className:"field is-half is-pulled-right"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{value:this.state.lastName,className:"input is-med",type:"text",placeholder:"Last Name",autoFocus:"",onChange:this.handleLastName})))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"field is-half is-pulled-left"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{value:this.state.email,className:"input is-med",type:"text",placeholder:"Email Address",autoFocus:"",onChange:this.handleEmail}))),l.a.createElement("div",{className:"field is-half is-pulled-right"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{value:this.state.password,className:"input is-med",type:"password",placeholder:"Password",onChange:this.handlePassword})))),l.a.createElement("button",{className:"button is-block is-success is-med is-fullwidth",type:"submit",onClick:this.submitForm},"Sign Up",l.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}))),l.a.createElement("hr",{className:"login-hr"}),l.a.createElement("p",{className:"has-text-black"},"Already have a Login? ",l.a.createElement("a",{href:"/Login"},"Login Here")))),l.a.createElement(H,{successModal:this.state.successModal,firstName:this.state.firstName,handleExit:this.handleExit}),l.a.createElement(_,{errorType:this.state.errorModal,text1:"Please complete all fields.",handleErrorExit:this.handleErrorExit}),l.a.createElement(_,{errorType:this.state.emailRej,text1:this.state.errorEmailUse.email,text2:this.state.errorEmailUse.message,handleErrorExit:this.handleErrorExit}))}}]),t}(n.Component)),$=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={results:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){k.a.get("")}},{key:"render",value:function(){return l.a.createElement(b,null,l.a.createElement(v,{title:"Shop Artwork and Design",subtext:"Find art to fill your frames or just browse for inspiration"}))}}]),t}(n.Component);var z=function(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(U,null),l.a.createElement(o.a,{exact:!0,path:"/",component:x}),l.a.createElement(o.a,{exact:!0,path:"/login",component:P}),l.a.createElement(o.a,{exact:!0,path:"/cart",component:y}),l.a.createElement(o.a,{exact:!0,path:"/shopart",component:$}),l.a.createElement(o.a,{exact:!0,path:"/signUp",component:V}),l.a.createElement(o.a,{path:"/quoteSpec/:sku",component:T}),l.a.createElement(o.a,{path:"/list/:id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(24),B=a(2),J=Object(B.a)();c.a.render(l.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,s=void 0===a?F:a,c=Object(D.a)(e,["children","onRedirectCallback"]),r=Object(n.useState)(),i=Object(O.a)(r,2),o=i[0],u=i[1],m=Object(n.useState)(),d=Object(O.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(),E=Object(O.a)(f,2),v=E[0],g=E[1],b=Object(n.useState)(!0),N=Object(O.a)(b,2),k=N[0],x=N[1],w=Object(n.useState)(!1),y=Object(O.a)(w,2),C=y[0],M=y[1];Object(n.useEffect)((function(){(function(){var e=Object(S.a)(j.a.mark((function e(){var t,a,n,l,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(c);case 2:if(t=e.sent,g(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,s(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(l=e.sent,u(l),!l){e.next=19;break}return e.next=17,t.getUser();case 17:r=e.sent,p(r);case 19:x(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(S.a)(j.a.mark((function e(){var t,a,n=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},M(!0),e.prev=2,e.next=5,v.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,M(!1),e.finish(10);case 13:return e.next=15,v.getUser();case 15:a=e.sent,p(a),u(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(S.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,v.handleRedirectCallback();case 3:return e.next=5,v.getUser();case 5:t=e.sent,x(!1),u(!0),p(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(L.Provider,{value:{isAuthenticated:o,user:h,loading:k,popupOpen:C,loginWithPopup:U,handleRedirectCallback:P,getIdTokenClaims:function(){return v.getIdTokenClaims.apply(v,arguments)},loginWithRedirect:function(){return v.loginWithRedirect.apply(v,arguments)},getTokenSilently:function(){return v.getTokenSilently.apply(v,arguments)},getTokenWithPopup:function(){return v.getTokenWithPopup.apply(v,arguments)},logout:function(){return v.logout.apply(v,arguments)}}},t)}),{domain:K.domain,client_id:K.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){J.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.60bf288c.chunk.js.map