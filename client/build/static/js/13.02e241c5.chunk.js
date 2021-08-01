(window["webpackJsonpattendence-management"]=window["webpackJsonpattendence-management"]||[]).push([[13],{416:function(e,t,a){"use strict";a.r(t);var n=a(92),r=a.n(n),c=a(93),s=a(11),l=a(12),o=a(13),i=a(14),u=a(0),m=a.n(u),p=a(81),d=a(72),f=function(e){var t=[];return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement(d.a,null,m.a.createElement(d.a.Toggle,{variant:"success",id:"dropdown-basic"},"Weeks"),m.a.createElement(d.a.Menu,null,e.data.map((function(t){return m.a.createElement(d.a.Item,{key:t._id,onClick:function(){return e.getWeekData(t.WeekData,t.Week)}},t.Week)}))))),m.a.createElement("div",{className:"col-6"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return function(a){a.map((function(e){e.WeekData.map((function(e){t.push(e)}))})),e.getWeekData(t,"Semester")}(e.data)}},"Semester")))},v=a(417),h=a(401),b=a(386),k=a(400),E=a(214),g=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={present:[],absent:0},e.COLORS=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF"],e.CustomTooltip=function(e){var t=e.active,a=e.payload;e.label;return t?m.a.createElement("div",{className:"custom-tooltip",style:{backgroundColor:"#ffff",padding:"5px",border:"1px solid #cccc"}},m.a.createElement("label",null,"".concat(a[0].name," : ").concat(a[0].value,"%"))):null},e.pieData=function(){return[{name:"Present",value:e.props.pieData.present},{name:"Absent",value:e.props.pieData.absent}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"ui grid center container aligned grid",style:{marginTop:"50px"}},m.a.createElement(v.a,{width:730,height:300},m.a.createElement(h.a,{data:this.pieData(),color:"#000000",dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,fill:"#8884d8"},this.pieData().map((function(t,a){return m.a.createElement(b.a,{key:"cell-".concat(a),fill:e.COLORS[a%e.COLORS.length]})}))),m.a.createElement(k.a,{content:m.a.createElement(this.CustomTooltip,null)}),m.a.createElement(E.a,null)))}}]),a}(m.a.Component),w=function(e){if(!e.records)return m.a.createElement("div",null,"Loading...");var t=0,a=0;e.records.map((function(e){return!0===e.present?t+=1:a+=1,1}));var n=function(e,t){return parseFloat(e/t*100).toFixed(2)},r={present:parseFloat(n(t,e.records.length)),absent:parseFloat(n(a,e.records.length))};return r?m.a.createElement("div",null,m.a.createElement(g,{pieData:r})):m.a.createElement("div",null,"No data")},D=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={data:[],percentage:{}},e.percentage={present:0,absent:0},e.apiCall=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.records;case 2:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"render",value:function(){return this.props.records?m.a.createElement("div",null,m.a.createElement("h3",null,this.props.week),m.a.createElement(w,{records:this.state.data})):m.a.createElement("div",null,"No Records")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.records!==t.records?{data:e.records}:null}}]),a}(m.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={data:[],subjectData:[],weekData:[],weekName:"",present:0,absent:0},e.apiCall=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/single",{params:{id:a}});case 2:n=t.sent,e.setState({data:n.data.attendence}),e.fetchExactData(e.state.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchExactData=function(t){t.map((function(t){t.SemesterName===e.props.match.params.semname&&t.Subjects.map((function(t){t.SubjectName===e.props.match.params.subname&&(e.setState({subjectData:t.Subject}),e.setState({weekData:t.Subject[0].WeekData,weekName:t.Subject[0].Week}))}))}))},e.getDataFromComponent=function(t,a){e.setState({weekData:t,weekName:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.apiCall(this.props.match.params.id)}},{key:"render",value:function(){return this.state.subjectData?m.a.createElement("div",null,m.a.createElement("div",{className:"row",style:{height:"60px"}},m.a.createElement(f,{data:this.state.subjectData,getWeekData:this.getDataFromComponent})),m.a.createElement("div",{className:"row"},m.a.createElement(D,{records:this.state.weekData,week:this.state.weekName}))):m.a.createElement("div",null,"No Subject Data")}}]),a}(m.a.Component);t.default=j},81:function(e,t,a){"use strict";var n=a(101),r=a.n(n);t.a=r.a.create({baseURL:"http://localhost:8081"})}}]);
//# sourceMappingURL=13.02e241c5.chunk.js.map