(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{KeTj:function(e,t,a){"use strict";var n=a("fbTi"),l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("VIk5");var r=l(a("X+Ft"));a("ESh5");var i=l(a("CtjU")),d=l(a("43Yg")),s=l(a("/tCh")),u=l(a("scpF")),c=l(a("O/V9")),o=l(a("8aBX"));a("08VQ");var f=l(a("5+Er")),p=n(a("FQm9")),h=(f.default.Title,f.default.Text),m="";function v(){try{m="";var e=new XMLHttpRequest;e.open("GET","https://r6sground.cn/cdn-trace/",!1),e.send();var t=e.responseText.split(" ");for(var a in t)t[a]=t[t[a].split("=")[0]]=t[a].split("=")[1],delete t[a];for(var n in t)m=m+"<br/>"+n+":"+t[n];m=m.replace("<br/>",""),console.log(t),window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){try{m=e.message,window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){}}}var w=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,u.default)(this,(0,c.default)(t).call(this,e)),a.state={services:[{}],view:"type_a"},a}return(0,o.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return window.Fthis=this,window.FModal=i.default,p.default.createElement("div",{style:{maxWidth:1024}},p.default.createElement(h,{style:{padding:"5px 0"},mark:!0},"DEVELOPER ONLY"),p.default.createElement("br",null),p.default.createElement("div",{style:{height:15}}),p.default.createElement(r.default,{type:"primary",style:{maxWidth:300},onClick:function(e){return Exception()},loading:0},"Exception"),p.default.createElement("div",{style:{height:15}}),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),p.default.createElement("div",{style:{height:5}}),p.default.createElement(r.default,{type:"primary",style:{maxWidth:300},onClick:function(e){return v()},loading:0},"CDN Trace"))}}]),t}(p.PureComponent),y=w;t.default=y}}]);