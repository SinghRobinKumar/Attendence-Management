(window["webpackJsonpattendence-management"]=window["webpackJsonpattendence-management"]||[]).push([[7],{100:function(e,t,a){"use strict";var n=a(110);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(127);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},127:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},420:function(e,t,a){"use strict";a.r(t);var n=a(92),r=a.n(n),c=a(93),s=a(11),l=a(12),o=a(13),u=a(14),m=a(0),i=a.n(m),d=a(81),p=a(100),b=function(e){var t=Object(m.useState)(""),a=Object(p.a)(t,2),n=(a[0],a[1]),r=Object(m.useState)(""),c=Object(p.a)(r,2),s=(c[0],c[1]);if(!e.data)return i.a.createElement("div",{class:"spinner-border",role:"status"},i.a.createElement("span",{class:"visually-hidden"},"Loading..."));return e.data.map((function(t){return i.a.createElement("tr",{key:t._id},i.a.createElement("td",{className:"py-1"},t.rollno),i.a.createElement("td",null," ",t.name," "),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return function(t){d.a.post("/update",{params:{id:t._id,semname:e.semname,subname:e.subname,week:"Week1",present:!0,date:new Date}}),n("yes"),s("")}(t)}},"Present")),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return function(t){d.a.post("/update",{params:{id:t._id,semname:e.semname,subname:e.subname,week:"Week1",present:!1,date:new Date}}),s("yes"),n("")}(t)}},"Absent")))}))},f=a(18),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.apiCall=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/list");case 2:a=t.sent,e.setState({data:a.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-9"},i.a.createElement("h3",{className:"page-title"},this.props.match.params.subname)),i.a.createElement("div",{className:"col-3"},i.a.createElement(f.a,{className:"btn btn-primary",to:"/add-student/".concat(this.props.match.params.semname,"/").concat(this.props.match.params.subname)},"Add Student"))),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Roll No "),i.a.createElement("th",null," Name "),i.a.createElement("th",null," Present "),i.a.createElement("th",null," Absent "))),i.a.createElement("tbody",null,i.a.createElement(b,{subname:this.props.match.params.subname,semname:this.props.match.params.semname,data:this.state.data})))))))))}}]),a}(i.a.Component);t.default=h},81:function(e,t,a){"use strict";var n=a(101),r=a.n(n);t.a=r.a.create({baseURL:"http://localhost:8081"})}}]);
//# sourceMappingURL=7.0652d4c1.chunk.js.map