(window["webpackJsonpattendence-management"]=window["webpackJsonpattendence-management"]||[]).push([[11],{404:function(e,t,a){"use strict";a.r(t);var n=a(92),c=a.n(n),l=a(93),r=a(11),s=a(12),i=a(13),o=a(14),m=a(0),d=a.n(m),u=a(18),p=a(81),h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.apiCall=Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/list");case 2:a=t.sent,e.setState({data:a.data});case 4:case"end":return t.stop()}}),t)}))),e.ListStudents=function(t){return t.map((function(t){return d.a.createElement("tr",{key:t._id},d.a.createElement("td",{className:"py-1",style:{color:"white"}},t.rollno),d.a.createElement("td",{style:{color:"white"}}," ",t.name," "),d.a.createElement("td",null,d.a.createElement(u.a,{to:"/analytics/".concat(e.props.match.params.semname,"/").concat(e.props.match.params.subname,"/").concat(t._id),className:"btn btn-success"},"View Data")," "))}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"card-title",style:{fontSize:"20px"}},"Students List"),d.a.createElement("div",{className:"table-responsive"},d.a.createElement("table",{className:"table table-striped"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{style:{color:"white"}}," Roll No "),d.a.createElement("th",{style:{color:"white"}}," Name "),d.a.createElement("th",{style:{color:"white"}}," Analytics "))),d.a.createElement("tbody",null,this.ListStudents(this.state.data))))))))))}}]),a}(d.a.Component);t.default=h},81:function(e,t,a){"use strict";var n=a(101),c=a.n(n);t.a=c.a.create({baseURL:"http://localhost:8081"})}}]);
//# sourceMappingURL=11.43936e39.chunk.js.map