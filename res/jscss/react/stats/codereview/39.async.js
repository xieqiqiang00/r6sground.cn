(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"B/Fy":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("PX3s");var _tabs=_interopRequireDefault(__webpack_require__("SXFb"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_locale=__webpack_require__("TJP2"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_bizcharts=__webpack_require__("zEoY"),Title=_typography.default.Title,TabPane=_tabs.default.TabPane,requestProfileId;window.onresize=function(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}})};var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidCatch",value:function(e,t){console.debug(e),console.debug(t)}},{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Perspect",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var r="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,r);var a=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(a,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){_react.default.createElement(_icon.default,{type:"loading"});if(("undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done)&&"undefined"!=typeof resulted&&"undefined"!=typeof resulted.Rcompetition){var e=_bizcharts.Guide.Line,t=window.innerHeight-64-110,r="100%",a="0";window.innerHeight,window.innerWidth;var o=[],i=0,n=100,l=0,s=100,_=[],p=0;for(var d in window.OperatorList)if("undefined"!=typeof window.resulted["operatorpvp_timeplayed:"+d+":infinite"]){var c={};c.key=d,c.icon=_react.default.createElement(_avatar.default,{src:openametoicon(opeidtoname(d),d)}),c.name=opeidtoname(d),c.wl=EasyopeInfoFetch(d,"wl")+"%",c.mmr=parseInt(EasyopeInfoFetch(d,"operatorpvp_mmr")),c.round=EasyopeInfoFetch(d,"operatorpvp_roundwon")+EasyopeInfoFetch(d,"operatorpvp_roundlost"),c.won=EasyopeInfoFetch(d,"operatorpvp_roundwon"),p+=c.round,c.time=TimesTOh(EasyopeInfoFetch(d,"operatorpvp_timeplayed"))+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}),c.kd=EasyopeInfoFetch(d,"kd"),c.kill=EasyopeInfoFetch(d,"operatorpvp_kills"),c.death=EasyopeInfoFetch(d,"operatorpvp_death"),c.kpr=(EasyopeInfoFetch(d,"operatorpvp_kills")/(EasyopeInfoFetch(d,"operatorpvp_roundwon")+EasyopeInfoFetch(d,"operatorpvp_roundlost"))).toFixed(2),c.dpr=(EasyopeInfoFetch(d,"operatorpvp_death")/(EasyopeInfoFetch(d,"operatorpvp_roundwon")+EasyopeInfoFetch(d,"operatorpvp_roundlost"))).toFixed(2),c.won=EasyopeInfoFetch(d,"operatorpvp_roundwon"),c.lost=EasyopeInfoFetch(d,"operatorpvp_roundlost"),c.spc=parseInt(EasyopeInfoFetch(d,"operatorpvp_timeplayed")/EasyopeInfoFetch(d,"operatorpvp_death"))+"\u79d2",c.vspc=((EasyopeInfoFetch(d,"operatorpvp_roundwon")+EasyopeInfoFetch(d,"operatorpvp_roundlost"))/EasyopeInfoFetch(d,"operatorpvp_death")).toFixed(2),c.skill=EasyopeInfoFetch(d,"operatorpvp_skills"),_.push(c)}for(var u in _)try{var f={};if(f.x=parseFloat((_[u].round/p*100).toFixed(2)),!(f.x>.3))continue;f.y=parseFloat((_[u].won/_[u].round*100).toFixed(2)),f.z=_[u].kd,f.r=_[u].round,f.name=_[u].name.toUpperCase(),f.country=_[u].name.toUpperCase(),f.x>i&&(i=f.x),f.x<n&&(n=f.x),f.y>l&&(l=f.y),f.y<s&&(s=f.y),o.push(f)}catch(e){}var w={x:{alias:(0,_locale.formatMessage)({id:"\u4e0a\u573a\u7387(P/R) %"}),tickInterval:(i/6).toFixed(1),nice:!1,max:i+i/10,min:0},y:{alias:(0,_locale.formatMessage)({id:"\u80dc\u7387(W/L) %"}),tickInterval:parseInt((l-s)/8),nice:!1,max:l+l/20,min:s},z:{alias:(0,_locale.formatMessage)({id:"\u6218\u635f\u7387(K/D)"})},r:{alias:(0,_locale.formatMessage)({id:"\u56de\u5408\u6570(Round)"})}},m=[],h=[];for(var v in h.push({}),resulted.Rcompetition){var y={};y=resulted.Rcompetition[v],y.rID=v,h.push(y)}var b=["generalpvp_kills:infinite","generalpvp_death:infinite","generalpvp_matchwon:infinite","generalpvp_matchlost:infinite"],q={};for(var g in b)q[b[g]]=window.resulted[b[g]];for(var k in h)if(!(k>100||0==k))try{var x=h[k].opev3;for(var E in b)parseFloat(x[b[E]]+0)!=x[b[E]]&&(x[b[E]]=0),0!=k&&-1==b[E].indexOf("mmr")&&(q[b[E]]=q[b[E]]-x[b[E]]);var F={};F.KD=(q["generalpvp_kills:infinite"]/q["generalpvp_death:infinite"]).toFixed(4),F.WL=(q["generalpvp_matchwon:infinite"]/q["generalpvp_matchlost:infinite"]).toFixed(4);var I=resulted.Rcompetition[h[k].rID].mmr.apac,R=resulted.Rcompetition[h[k].rID].mmr.emea,D=resulted.Rcompetition[h[k].rID].mmr.ncsa;for(var P in F.MMR=Math.max(I,R,D).toFixed(0),F.MMR>0||(F.MMR=null),F){var C={};C.RC=100-k,C.type=P,C.temperature=parseFloat(F[P]),m.push(C)}}catch(e){console.debug(e)}(0,_locale.formatMessage)({id:"\u4e0a\u573a\u7387(P/R) %"}),(0,_locale.formatMessage)({id:"\u80dc\u7387(W/L) %"});return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"hidden",padding:15,background:"white"}},_react.default.createElement(_tabs.default,{defaultActiveKey:"1",onChange:0,tabBarExtraContent:!1},_react.default.createElement(TabPane,{tab:(0,_locale.formatMessage)({id:"\u4e0a\u573a\u80dc\u7387"}),key:"1"},_react.default.createElement("div",{style:{transform:"rotate("+a+"deg)"}},_react.default.createElement(_bizcharts.Chart,{height:t,width:r,data:o,padding:[20,0,48,48],scale:w,plotBackground:{stroke:"#ccc",lineWidth:1},background:{fill:"#fff"},forceFit:!0},_react.default.createElement(_bizcharts.Axis,{name:"x",title:{offset:32},label:{formatter:function(e){return e+" %"}},grid:{lineStyle:{stroke:"#d9d9d9",lineWidth:1,lineDash:[2,2]}}}),_react.default.createElement(_bizcharts.Axis,{name:"y",title:{offset:32},label:{formatter:function(e){if(e>0)return e+" "}}}),_react.default.createElement(_bizcharts.Tooltip,{title:"name"}),_react.default.createElement(_bizcharts.Geom,{type:"point",position:"x*y",color:"#1890ff",style:{ineWidth:0,stroke:"#1890ff"},shape:["name",function(e){return["image",openametoicon(e.toLowerCase())]}],size:48,tooltip:"x*y*z*r",opacity:0}),_react.default.createElement(_bizcharts.Guide,null,_react.default.createElement(e,{start:["min",50],end:["max",50],text:{content:(0,_locale.formatMessage)({id:"\u5747\u8861\u7684\u80dc\u7387"}),position:"end",style:{textAlign:"end"}}}),_react.default.createElement(e,{start:[2.38,"min"],end:[2.38,"max"],text:{content:(0,_locale.formatMessage)({id:"\u5747\u8861\u7684\u4e0a\u573a\u7387"}),position:"end",autoRotate:!1,style:{textAlign:"start"}}}))))),_react.default.createElement(TabPane,{tab:(0,_locale.formatMessage)({id:"\u6570\u636e\u8d8b\u52bf"}),key:"2"},_react.default.createElement("div",null,_react.default.createElement(_bizcharts.Chart,{height:t,width:r,data:m,scale:{temperature:{tickCount:10}},forceFit:!0},_react.default.createElement(_bizcharts.Legend,null),_react.default.createElement(_bizcharts.Axis,{name:"RC"}),_react.default.createElement(_bizcharts.Axis,{name:"temperature",title:{offset:32}}),_react.default.createElement(_bizcharts.Tooltip,{crosshairs:{type:"y"}}),_react.default.createElement(_bizcharts.Geom,{type:"line",position:"RC*time",size:2,color:"type"}),_react.default.createElement(_bizcharts.Geom,{type:"line",position:"RC*temperature",size:2,color:"type"}),_react.default.createElement(_bizcharts.Geom,{type:"point",position:"RC*temperature",size:4,shape:"circle",color:"type"}))))))}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto",padding:30}},(0,_locale.formatMessage)({id:"\u7a0d\u5b89\u52ff\u8e81"}))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);