(this.webpackJsonpjacksius=this.webpackJsonpjacksius||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(6),c=n.n(a),o=(n(20),n(4)),i=n(7),u=n(8),p=n(10),h=n(11),l=n(9),d=(n(21),n(3)),f=n.n(d),j=n(2),k=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).temperature="",e}return Object(p.a)(n,[{key:"onResize",value:function(){f()("#temperature").css({"font-size":"".concat((f()(window).height()||100)/3,"px")})}},{key:"render",value:function(){return this.loadJacksius().then(),f()(window).on("resize",this.onResize),Object(j.jsx)("p",{id:"temperature",children:"..."})}},{key:"loadJacksius",value:function(){var e=Object(i.a)(Object(o.a)().mark((function e(){var t,n,r=this;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new XMLHttpRequest,n="",t.onreadystatechange=function(){4===t.readyState&&200===t.status&&(n=t.responseText,f()("#temperature").text("".concat(n,"\xb0J")),r.onResize())},t.open("GET","https://cors-anywhere.herokuapp.com/https://pst.klgrth.io/paste/ystsq/download",!0),t.setRequestHeader("Access-Control-Allow-Origin","https://pst.klgrth.io"),t.setRequestHeader("Vary","Origin"),t.send(null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(s.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.createRoot(document.getElementById("jacksius")).render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})})),b()}},[[23,1,2]]]);
//# sourceMappingURL=main.11d7fa82.chunk.js.map