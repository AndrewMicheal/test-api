(this.webpackJsonptestapi=this.webpackJsonptestapi||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(13),i=n.n(r),s=(n(24),n(25),n(4)),o=n.n(s),l=n(14),u=n(15),h=n(16),j=n(19),b=n(18),d=n(17),p=n.n(d),m=n(0),O=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={libary:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new p.a("https://quiet-sierra-33480.herokuapp.com/api/getCats");case 2:e=t.sent,n=e.data,this.setState({libary:n.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.libary),Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:this.state.libary.length>0?this.state.libary.map((function(t,e){return Object(m.jsxs)("div",{className:"col-md-4 my-4",children:[Object(m.jsx)("img",{src:t.image,height:"300px",className:"w-100",alt:""}),Object(m.jsx)("span",{children:t.id}),Object(m.jsx)("h2",{children:t.name})]},e)})):Object(m.jsx)("h2",{children:"Loading....."})})})})})}}]),n}(a.Component);var f=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};n(46);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.5cb2089a.chunk.js.map