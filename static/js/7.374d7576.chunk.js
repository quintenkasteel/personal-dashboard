(this["webpackJsonppersonal-dashboard"]=this["webpackJsonppersonal-dashboard"]||[]).push([[7],{206:function(n,e){},208:function(n,e){},233:function(n,e){},235:function(n,e){},251:function(n,e,t){"use strict";t.r(e);var a=t(196),r=t.n(a),i=t(198),o=t(1),u=t(2),c=t(4),l=t(3),s=t(25),f=t(0),h=t.n(f),p=t(22);function v(){var n=Object(s.a)(["\nfont-size: 0.8rem;\noverflow: hidden;\ndisplay: -webkit-box;\n-webkit-line-clamp: 2;\n-webkit-box-orient: vertical;\n"]);return v=function(){return n},n}function m(){var n=Object(s.a)(["\nposition: relative;\npadding: 10px;\nwidth: 80%;\n"]);return m=function(){return n},n}function d(){var n=Object(s.a)(["\nfont-size: 1rem;\nfont-weight: bold;\nmax-height: 35px;\nmargin-bottom: 3px;\n"]);return d=function(){return n},n}function b(){var n=Object(s.a)(["\nposition: absolute;\nheight: 100%;\nobject-fit: cover;\nwidth: 100%;\ntop: 0;\nleft: 0%;\n"]);return b=function(){return n},n}function w(){var n=Object(s.a)(["\nheight: auto;\nwidth: 20%;\nposition: relative;\n"]);return w=function(){return n},n}function g(){var n=Object(s.a)(["\nheight: 100%;\n"]);return g=function(){return n},n}function E(){var n=Object(s.a)(["\nposition: relative;\ndisplay: flex;\nflex-flow: row nowrap;\nmargin: 10px 0;\n"]);return E=function(){return n},n}function x(){var n=Object(s.a)(["\noverflow-y: auto;\noverflow-x: hidden;\nheight: 100%;\n"]);return x=function(){return n},n}var j=new(t(199)),k=p.a.div(x()),O=p.a.div(E()),y=p.a.a(g()),S=p.a.div(w()),C=p.a.img(b()),D=p.a.h3(d()),F=p.a.div(m()),R=p.a.p(v()),K=function(n){Object(c.a)(t,n);var e=Object(l.a)(t);function t(n){var a;return Object(o.a)(this,t),(a=e.call(this,n)).componentDidMount=function(){a.RSS_FEED()},a.RSS_FEED=Object(i.a)(r.a.mark((function n(){var e;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://cors-anywhere.herokuapp.com/",n.next=3,j.parseURL("https://cors-anywhere.herokuapp.com/"+a.state.url);case 3:e=n.sent,a.setState({items:e.items});case 5:case"end":return n.stop()}}),n)}))),a.handleKey=function(n){13===(n.keyCode||n.which)&&a.setState((function(n){return{items:[],url:n.value}}),(function(){a.RSS_FEED()}))},a.handleChange=function(n){a.setState({value:n.target.value})},a.state={items:[],url:"http://feeds.bbci.co.uk/news/rss.xml",value:""},a}return Object(u.a)(t,[{key:"render",value:function(){var n=this.state.items;return h.a.createElement(h.a.Fragment,null,h.a.createElement("input",{type:"text",value:this.state.value,onKeyUp:this.handleKey,onChange:this.handleChange}),h.a.createElement(k,null,n!==[]?n.map((function(n,e){return h.a.createElement(y,{href:n.link,key:n+e},h.a.createElement(O,null,function(n){for(var e=[],t=n,a=/<img[^>]+src="?([^"\s]+)"?\s*\/>/g;""===a.exec(t);)return e.push(""[1]);return e!==[]?h.a.createElement(S,null,h.a.createElement(C,{src:e})):null}(n.content),h.a.createElement(F,null,h.a.createElement(D,null,n.title),h.a.createElement(R,null,n.contentSnippet))))})):h.a.createElement("p",null,"loading....")))}}]),t}(h.a.Component);e.default=K}}]);
//# sourceMappingURL=7.374d7576.chunk.js.map