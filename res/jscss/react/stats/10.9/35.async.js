(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{q4U1:function(e,t,a){"use strict";var n=a("fbTi"),l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("QKdE");var d=l(a("2Vcd"));a("57cG");var i=l(a("tWoQ"));a("5hX3");var u=l(a("wjJH"));a("ESh5");var r=l(a("CtjU")),o=l(a("43Yg")),c=l(a("/tCh")),f=l(a("scpF")),s=l(a("O/V9")),p=l(a("8aBX"));a("yPdm");var m=l(a("Al2M"));a("08VQ");var h,v=l(a("5+Er")),y=n(a("FQm9")),E=(v.default.Title,v.default.Text),w=m.default.Step,g=new ButtonFUNCTION,k=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,f.default)(this,(0,s.default)(t).call(this,e)),a.state={services:[{}],view:"type_a"},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentDidMount",value:function(){var e=this;if(window.Fthis=this,"undefined"==typeof h||null==h){var t=new XMLHttpRequest;t.open("POST","https://promotion.r6sground.cn/user/accountPeek/",!0),t.withCredentials=!0,t.send(),t.onreadystatechange=function(){t.readyState==XMLHttpRequest.DONE&&200==t.status&&(h=JSON.parse(t.responseText),e.setState({services:{Done:(new Date).valueOf()}}))}}}},{key:"render",value:function(){if(window.Fthis=this,window.FModal=r.default,"undefined"==typeof this.state.services.Done)return y.default.createElement("div",null,y.default.createElement(u.default,{type:"loading"}));var e=[];return e.push({id:"zh2",title:"\u4ed6\u4eba\u53ef\u4ee5\u67e5\u8be2\u6211\u7684\u6218\u7ee9",description:"\u5173\u95ed\u540e\u4ed6\u4eba\u5c06\u4e0d\u80fd\u518d\u67e5\u8be2\u60a8\u7684\u6570\u636e"}),e.push({id:"jb2",title:"\u81ea\u52a8\u8df3\u8f6c\u5230\u6211\u7684\u6218\u7ee9",description:"\u5f53\u6211\u6253\u5f00\u516d\u53f7\u6218\u573a\u7684\u524d\u53f0\u9996\u9875\u65f6\uff0c\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u6211\u7684\u4e2a\u4eba\u6218\u7ee9\u9875"}),y.default.createElement("div",{style:{maxWidth:1024}},y.default.createElement(m.default,{current:2},y.default.createElement(w,{title:"\u5b89\u5168\u68c0\u67e5",icon:y.default.createElement(u.default,{type:"schedule"})}),y.default.createElement(w,{title:"\u9a8c\u8bc1\u8d26\u53f7",icon:y.default.createElement(u.default,{type:"api"})}),y.default.createElement(w,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:y.default.createElement(u.default,{type:"smile-o"})})),y.default.createElement("div",{style:{height:10}}),y.default.createElement(E,{strong:!0},"\u5f53\u524d\u4f60\u7684\u8d26\u6237\u662f: ",h.uplay),y.default.createElement(d.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return y.default.createElement(d.default.Item,{actions:e.actions,extra:y.default.createElement(i.default,{style:{margin:5},onChange:function(t){return g.onChanged(e.id)},loading:g.getLoading(e.id),disabled:g.getDisabled(e.id),defaultChecked:g.getState(e.id)})},y.default.createElement(d.default.Item.Meta,{title:e.title,description:e.description}))}}),y.default.createElement("div",{style:{height:10}}),"\u82e5\u4f60\u7684Uplay\u8d26\u6237\u90ae\u7bb1\u6216\u5bc6\u7801\u5df2\u7ecf\u66f4\u6539\uff0c\u8bf7\u8f6c\u5230\u201c\u9000\u51fa\u767b\u5f55\u201d\u9875\u9762\u6ce8\u9500\u767b\u5f55\uff0c\u7136\u540e\u4f7f\u7528\u65b0\u7684\u90ae\u7bb1\u548c\u5bc6\u7801\u767b\u5f55\u3002")}},{key:"componentWillUnmount",value:function(){h=null}}]),t}(y.PureComponent),C=k;t.default=C}}]);