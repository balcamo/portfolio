(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),c=a.n(r),o=(a(96),a(97),a(98),a(99),a(26)),i=a(27),s=a(31),m=a(28),u=a(32),d=a(3),E=a(29),p=a(21),h=a(48),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(a)),a.state={dropdownOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.l,{pills:!0},l.a.createElement(d.m,null,l.a.createElement(d.n,{href:"/"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home ")),l.a.createElement(d.h,{nav:!0,isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(d.k,{nav:!0,caret:!0},l.a.createElement("span",{className:"fa fa-suitcase fa-lg"}),"Equipment",l.a.createElement("b",{className:"caret"})),l.a.createElement(d.j,null,l.a.createElement(d.i,{href:"/equip/1"},"Well 1"),l.a.createElement(d.i,null,"Well 2"),l.a.createElement(d.i,null,"Well 3"),l.a.createElement(d.i,null,"Well 4"),l.a.createElement(d.i,null,"Well 5"),l.a.createElement(d.i,null,"well 6"),l.a.createElement(d.i,null,"Well 7"),l.a.createElement(d.i,null,"Well 8"),l.a.createElement(d.i,null,"Well 9"),l.a.createElement(d.i,{divider:!0}),l.a.createElement(d.i,null,"Booster 1"),l.a.createElement(d.i,null,"Booster 2"),l.a.createElement(d.i,null,"Booster 3"),l.a.createElement(d.i,null,"Booster 4"),l.a.createElement(d.i,null,"Booster 5"),l.a.createElement(d.i,{divider:!0}),l.a.createElement(d.i,null,"Reservior 1"),l.a.createElement(d.i,null,"Reservior 2"),l.a.createElement(d.i,null,"Reservior 3"),l.a.createElement(d.i,null,"Reservior 4"),l.a.createElement(d.i,null,"Reservior 5"))),l.a.createElement(d.m,null,l.a.createElement(d.n,{href:"#"},l.a.createElement("span",{className:"fa fa-map-o fa-lg"})," Maps")),l.a.createElement(d.m,null,l.a.createElement(d.n,{href:"#"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," ???"))))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"This is going to be the maintenance log!"))},v=a(89),y=a(2),N=a.n(y);var g=function(e){var t=e.equipment.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",{className:"equipList"},l.a.createElement(d.c,{color:"primary",onClick:function(){e.open=!e.open}},e.name),l.a.createElement(d.c,{type:"button",className:"edit"},l.a.createElement("i",{className:"fa fa-edit"})," "),l.a.createElement(d.g,{isOpen:e.open},l.a.createElement(d.d,null,function(e){if(null!=e){var t=e.map(function(e){return l.a.createElement("p",null,e.name,": ",e.prop)});return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.f,null,l.a.createElement("h5",null,l.a.createElement("b",null,"Info")," "),l.a.createElement("div",{className:"row equipInfo"},t)))}return l.a.createElement("div",null)}(e.properties),l.a.createElement(d.e,null,l.a.createElement(d.r,{striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Maintenance Task"),l.a.createElement("th",{scope:"col"},"Who did the Work"),l.a.createElement("th",{scope:"col"},"Last Service Date"),l.a.createElement("th",{scope:"col"},"Next Service Date"),l.a.createElement("th",{scope:"col"},"Notes"))),function(e){if(null!=e){console.log(e);var t=e.map(function(e){return l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(d.c,null,e.type)),l.a.createElement("td",null,e.person),l.a.createElement("td",null,e.previousDate),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.notes))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("tbody",null,t))}return l.a.createElement("div",null)}(e.services),l.a.createElement("button",{className:"btn btn-secondary"},"Add Service")))))))});return null!=t?l.a.createElement("div",null,l.a.createElement("div",{className:"card "},t),l.a.createElement("button",{className:"btn btn-secondary"},"Add Equipment")):l.a.createElement("div",null)};var w=function(e){var t=Object(n.useState)(e.tab),a=Object(v.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(E.b,{to:"/"},"Home")),l.a.createElement(d.b,{active:!0},e.equip.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.equip.name))),l.a.createElement("div",{className:"row row-content"},l.a.createElement(d.l,{tabs:!0},l.a.createElement(d.m,null,l.a.createElement(d.n,{className:N()({active:"1"===r}),onClick:function(){c("1")}},"Well House")),l.a.createElement(d.m,null,l.a.createElement(d.n,{className:N()({active:"2"===r}),onClick:function(){c("2")}},"Chlorinator"))),l.a.createElement(d.p,{activeTab:r},l.a.createElement(d.q,{tabId:"1"},l.a.createElement(g,{equipment:e.equip.equipment})),l.a.createElement(d.q,{tabId:"2"},l.a.createElement("div",{className:"accordion equipList",id:"chlorinatorEquipment"},l.a.createElement("h1",null,"Chlorinator"),l.a.createElement("div",{className:"card "},l.a.createElement("div",{className:"card-header",id:"motor1"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"accordion","data-target":"#motor1Collapse","aria-controls":"motor1Collapse"},"Motor"),l.a.createElement("button",{type:"button",className:"edit"},l.a.createElement("i",{className:"fa fa-edit"})," "))),l.a.createElement("div",{id:"motor1Collapse",className:"collapse show","aria-labelledby":"motor1","data-parent":"#Well1Equipment"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,l.a.createElement("b",null,"Info")," "),l.a.createElement("div",{className:"row equipInfo"},l.a.createElement("p",{className:"col"},"Horse pwr: boop"),l.a.createElement("p",{className:"col"},"Oil Type: 20w"),l.a.createElement("p",{className:"col"},"serial number:yyyyyyyyyyy"),l.a.createElement("p",{className:"col"},"Grease Type:abc")),l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Maintenance Task"),l.a.createElement("th",{scope:"col"},"Who did the Work"),l.a.createElement("th",{scope:"col"},"Last Service Date"),l.a.createElement("th",{scope:"col"},"Next Service Date"),l.a.createElement("th",{scope:"col"},"Notes"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{type:"button",className:"btn","data-target":"#oilModal"},"Oil Change")),l.a.createElement("th",null,"Brady"),l.a.createElement("th",null,"May 30, 2018"),l.a.createElement("th",null,"May 30, 2019"),l.a.createElement("th",null,"Send oil out to be checked")),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{type:"button",className:"btn","data-target":"#oilModal"},"Grease stuffing box")),l.a.createElement("th",null,"Brady"),l.a.createElement("th",null,"May 30, 2018"),l.a.createElement("th",null,"May 30, 2019"),l.a.createElement("th",null,"Send oil out to be checked")))),l.a.createElement("button",{className:"btn btn-secondary",id:"motorService"},"Add Service")))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"chlorinator"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"accordion","data-target":"#chlorinatorCollapse","aria-controls":"chlorinatorCollapse"},"Pump 350hp"))),l.a.createElement("div",{id:"chlorinatorCollapse",className:"collapse","aria-labelledby":"chlorinator","data-parent":"#Well1Equipment"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,l.a.createElement("b",null,"Info")," "),l.a.createElement("div",{className:"row equipInfo"},l.a.createElement("p",{className:"col"},"Horse pwr: 350"),l.a.createElement("p",{className:"col"},"Date installed: 05/30/2016"),l.a.createElement("p",{className:"col"},"serial number:xxxxxxxxxxx"),l.a.createElement("p",{className:"col"},"Grease Type:???")),l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Maintenance Task"),l.a.createElement("th",{scope:"col"},"Who did the Work"),l.a.createElement("th",{scope:"col"},"Last Service Date"),l.a.createElement("th",{scope:"col"},"Next Service Date"),l.a.createElement("th",{scope:"col"},"Notes"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Filter Change"),l.a.createElement("th",null,"Brady"),l.a.createElement("th",null,"March 10, 2019"),l.a.createElement("th",null,"August 30, 2019"),l.a.createElement("th",null,"Check the seals")))),l.a.createElement("button",{className:"btn btn-secondary"},"Add Service")))),l.a.createElement("button",{className:"btn btn-secondary",id:"addWellEquip"},"Add Equipment"))))),l.a.createElement("div",{className:"modal fade",role:"dialog",id:"oilModal"},l.a.createElement("div",{className:"modal-dialog modal-lg align-content-center"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",null,"Well House 1: Motor")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null,"This will be where data is updated"))))),l.a.createElement("div",{className:"modal fade",role:"dialog",id:"wellEquipForm"},l.a.createElement("div",{className:"modal-dialog modal-lg align-content-center"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",null,"Add Equipment for Well House 1")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null))))))},O="http://localhost:3002/",q=function(){return{type:"LOCATIONS_LOADING"}},j=function(e){return{type:"LOCATIONS_FAILED",payload:e}},k=function(e){return{type:"ADD_LOCATIONS",payload:e}},S=function(){return{type:"EQUIPMENT_LOADING"}},T=function(e){return{type:"EQUIPMENT_FAILED",payload:e}},W=function(e){return{type:"ADD_EQUIPMENT",payload:e}},C=function(e){return{type:"ADD_SERVICE",payload:e}},I=a(15),D=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchLocations(),this.props.fetchEquipment()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(d.o,{light:!0},l.a.createElement(f,null)),l.a.createElement(E.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/equip/:id",render:function(t){var a=t.match;return l.a.createElement(w,{equip:e.state.equipList.filter(function(e){return e.id===parseInt(a.params.id,10)})[0],tab:"1",addEquipment:e.props.addEquipment})}}),l.a.createElement(p.a,{path:"/",render:b}))))}}]),t}(n.Component),M=Object(p.e)(Object(I.connect)(function(e){return{locations:e.locations,equipment:e.comments,services:e.promotions}},function(e){return{postService:function(t,a,n,l){return e(function(e,t,a,n){return function(l){var r={dishId:e,rating:t,author:a,comment:n};return r.date=(new Date).toISOString(),fetch(O+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return l(C(e))}).catch(function(e){console.log("post service",e.message),alert("Your service could not be posted\nError: "+e.message)})}}(t,a,n,l))},fetchEquipment:function(){e(function(e){return e(S()),fetch(O+"locations").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(W(t))}).catch(function(t){return e(T(t.message))})})},fetchLocations:function(){e(function(e){return e(q()),fetch(O+"locations").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(k(t))}).catch(function(t){return e(j(t.message))})})}}})(D)),A=a(90),x=a(16),L=[{id:1,name:"Well House 1",location:"to get from gis",equipment:[{id:1,name:"motor",open:!0,properties:[{name:"Horse Power",prop:"this"},{name:"Oil Type",prop:"this"},{name:"Serial Number",prop:"this"},{name:"Grease Type",prop:"this"}],services:[{id:"1",type:"Oil Channge",date:"09-01-05",previousDate:"09-01-02",person:"Brady",notes:"send out oil"},{id:"2",type:"boop",date:"09-01-21",previousDate:"09-01-22",person:"who dis?",notes:""}]},{id:2,name:"Meter Flow",open:!1,properties:[{}],services:[{}]}],chlorinatorEquipment:[{id:1,name:"motor",properties:[{name:"Horse Power",prop:"this"},{name:"Oil Type",prop:"this"},{name:"Serial Number",prop:"this"},{name:"Grease Type",prop:"this"}],services:[{id:"1",type:"poop",date:"09-01-02",person:"who dat?"},{id:"2",type:"boop",date:"09-01-22",person:"who dis?"}]},{id:2,name:"Meter Flow",properties:[{}],services:[{}]}]},{id:2,name:"Well House 2",location:"to get from gis",equipment:[{id:1,motor:[{horsePower:"",oilType:"",serial:"",greaseType:"",services:[{id:"",type:"",date:"",person:""}]}]},{id:2,flowMeter:[{}]}],chlorinatorService:[]}],B=a(86),H=a.n(B),P=a(87),F=a.n(P),G=a(88),R={name:"",horsePower:"",oilType:"",serial:"",greaseType:""},_={serviceName:"",name:"",notes:""},U=(a(150),Object(x.createStore)(Object(x.combineReducers)(Object(A.a)({equipList:L},Object(G.createForms)({newService:_,newEquip:R}))),Object(x.applyMiddleware)(H.a,F.a))),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(I.Provider,{store:U},l.a.createElement(E.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(M,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(34),V={tenant:"ebba2929-765b-48f7-8c03-9b450ed099ba",clientId:"47ad89ca-350f-470e-a8f7-d39d5ca1df5c",endpoints:{api:"47ad89ca-350f-470e-a8f7-d39d5ca1df5c"},apiUrl:"https://bermuda.verawaterandpower.com",cacheLocation:"localStorage"},Y=new Q.AuthenticationContext(V);Object(Q.withAdalLogin)(Y,V.endpoints.api);Object(Q.runWithAdal)(Y,function(){c.a.render(l.a.createElement(J,null),document.getElementById("root"))},!1),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(152)},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.54a25241.chunk.js.map