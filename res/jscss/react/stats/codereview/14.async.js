(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"9Fvw":function(e,t,a){},XzUG:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("XNzj");var _row=_interopRequireDefault(__webpack_require__("G5Xh"));__webpack_require__("QxUn");var _col=_interopRequireDefault(__webpack_require__("nicQ"));__webpack_require__("dgI1");var _card=_interopRequireDefault(__webpack_require__("ks0U"));__webpack_require__("yh/O");var _icon=_interopRequireDefault(__webpack_require__("KzDW")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("g5g9");var _typography=_interopRequireDefault(__webpack_require__("NU4G")),_react=_interopRequireWildcard(__webpack_require__("i9FB")),_reactDom=_interopRequireDefault(__webpack_require__("+q+N")),_locale=__webpack_require__("lzHo"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_reactAdsense=_interopRequireDefault(__webpack_require__("9L8s")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_home=_interopRequireDefault(__webpack_require__("9Fvw")),Title=_typography.default.Title,OperatorList={"1:1":"recruit","1:2":"recruit","1:4":"recruit","1:5":"recruit","2:1":"SMOKE","2:2":"CASTLE","2:3":"DOC","2:4":"GLAZ","2:5":"BLITZ","2:6":"BUCK","2:7":"BLACKBEARD","2:8":"CAPITAO","2:9":"HIBANA","2:A":"JACKAL","2:B":"YING","2:C":"ELA","2:D":"DOKKAEBI","2:F":"MAESTRO","3:1":"MUTE","3:2":"ASH","3:3":"ROOK","3:4":"FUZE","3:5":"IQ","3:6":"FROST","3:7":"VALKYRIE","3:8":"CAVEIRA","3:9":"ECHO","3:A":"MIRA","3:B":"LESION","3:C":"ZOFIA","3:D":"VIGIL","3:E":"LION","3:F":"ALIBI","4:1":"SLEDGE","4:2":"PULSE","4:3":"TWITCH","4:4":"KAPKAN","4:5":"JAGER","4:E":"FINKA","5:1":"THATCHER","5:2":"THERMITE","5:3":"MONTAGNE","5:4":"TACHANKA","5:5":"BANDIT","2:10":"MAVERICK","3:10":"CLASH","3:11":"KAID","2:11":"NOMAD","2:12":"MOZZIE","3:12":"GRIDLOCK"},OperatorListF={SMOKE:"0",CASTLE:"0",DOC:"0",ELA:"0",MAESTRO:"0",MUTE:"0",ROOK:"0",FROST:"0",VALKYRIE:"0",CAVEIRA:"0",ECHO:"0",MIRA:"0",LESION:"0",VIGIL:"0",ALIBI:"0",PULSE:"0",KAPKAN:"0",JAGER:"0",TACHANKA:"0",BANDIT:"0",CLASH:"0",KAID:"0",MOZZIE:"0"},requestProfileId;function opeidtoname(e){for(var t in OperatorList)if(t==e)return OperatorList[t]}function openametoid(e){for(var t in OperatorList)if(OperatorList[t]==e)return t}function TimesTOh(e){return parseInt(e/3600)}function FetchOpeInfo(e,t,a,r){for(var l in a)if(r){if(t+":"+e+":infinite"==l)return a[l]}else if(t+":"+e==l)return a[l]}window.onresize=function(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}})};var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Main",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var a="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,a);var r=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(r,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){var e=_react.default.createElement(_icon.default,{type:"loading"}),t=window.innerHeight-64;function a(e){return"undefined"==typeof e.extra?_react.default.createElement(_card.default,{title:e.title,bordered:!1,hoverable:!1,style:{height:210,margin:5}},e.content):_react.default.createElement(_card.default,{title:e.title,style:{height:210,margin:5},bordered:!1,hoverable:!1,extra:_react.default.createElement("a",{href:e.extraURL},e.extra)},e.content)}return t<100&&(t="auto"),"undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done?_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(Title,{level:2,style:{margin:20}},(0,_locale.formatMessage)({id:"\u6838\u5fc3\u6570\u636e"})),_react.default.createElement(_row.default,{style:{margin:20,background:"#fff"}},_react.default.createElement("span",{className:"FullCard"},_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u6218\u635f"}),"  ",(window.resulted["generalpvp_kills:infinite"]/window.resulted["generalpvp_death:infinite"]).toFixed(3))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u80dc\u7387"}),"  ",(window.resulted["generalpvp_matchwon:infinite"]/(window.resulted["generalpvp_matchwon:infinite"]+window.resulted["generalpvp_matchlost:infinite"])*100).toFixed(2)," %")),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u7206\u5934\u7387"}),"  ",(window.resulted["generalpvp_headshot:infinite"]/window.resulted["generalpvp_kills:infinite"]*100).toFixed(2)," %")),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u7b49\u7ea7"}),"  ",window.resulted["level"]," ",(0,_locale.formatMessage)({id:"\u7ea7"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u70b8\u5f39\u573a\u6b21"}),"  ",window.resulted["plantbombpvp_matchplayed:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u70b8\u5f39\u80dc\u573a"}),"  ",window.resulted["plantbombpvp_matchwon:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u70b8\u5f39\u8d1f\u573a"}),"  ",window.resulted["plantbombpvp_matchlost:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u70b8\u5f39\u6700\u9ad8"}),"  ",window.resulted["plantbombpvp_bestscore:infinite"]," ",(0,_locale.formatMessage)({id:"\u5206"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4eba\u8d28\u573a\u6b21"}),"  ",window.resulted["rescuehostagepvp_matchplayed:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4eba\u8d28\u80dc\u573a"}),"  ",window.resulted["rescuehostagepvp_matchwon:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4eba\u8d28\u8d1f\u573a"}),"  ",window.resulted["rescuehostagepvp_matchlost:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4eba\u8d28\u6700\u9ad8"}),"  ",window.resulted["rescuehostagepvp_bestscore:infinite"]," ",(0,_locale.formatMessage)({id:"\u5206"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4fdd\u5168\u573a\u6b21"}),"  ",window.resulted["secureareapvp_matchplayed:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4fdd\u5168\u80dc\u573a"}),"  ",window.resulted["secureareapvp_matchwon:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4fdd\u5168\u8d1f\u573a"}),"  ",window.resulted["secureareapvp_matchlost:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u4fdd\u5168\u6700\u9ad8"}),"  ",window.resulted["secureareapvp_bestscore:infinite"]," ",(0,_locale.formatMessage)({id:"\u5206"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u6e38\u73a9\u65f6\u95f4"}),"  ",TimesTOh(window.resulted["generalpvp_timeplayed:infinite"])," ",(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u53c2\u4e0e\u573a\u6b21"}),"  ",window.resulted["generalpvp_matchplayed:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u573a\u5747\u51fb\u6740"}),"  ",(window.resulted["generalpvp_kills:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u573a\u5747\u6b7b\u4ea1"}),"  ",(window.resulted["generalpvp_death:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u51fb\u6740"}),"  ",window.resulted["generalpvp_kills:infinite"]," ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u6b7b\u4ea1"}),"  ",window.resulted["generalpvp_death:infinite"]," ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u80dc\u5229"}),"  ",window.resulted["generalpvp_matchwon:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u5931\u8d25"}),"  ",window.resulted["generalpvp_matchlost:infinite"]," ",(0,_locale.formatMessage)({id:"\u573a"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u73b0\u6bb5\u4f4d\u5206"}),"  ",window.resulted.rankmmr)),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u73b0\u6bb5\u4f4d"}),"    ",(0,_locale.formatMessage)({id:FrinendlyMMR(window.resulted.ranksmmr)}))))),_react.default.createElement(Title,{level:2,style:{margin:20}},(0,_locale.formatMessage)({id:"\u6218\u7565\u6570\u636e"})),_react.default.createElement(_row.default,{style:{margin:20,background:"#fff"}},_react.default.createElement("span",{className:"FullCard"},_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u6551\u52a9\u961f\u53cb"}),"  ",window.resulted["generalpvp_revive:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u573a\u5747\u6551\u52a9"}),"  ",(window.resulted["generalpvp_revive:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2)," ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u52a9\u653b\u51fb\u6740"}),"  ",window.resulted["generalpvp_killassists:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u573a\u5747\u52a9\u653b"}),"  ",(window.resulted["generalpvp_killassists:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2),"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u7206\u5934\u51fb\u6740"}),"  ",window.resulted["generalpvp_headshot:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u573a\u5747\u7206\u5934"}),"  ",(window.resulted["generalpvp_headshot:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2)," ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u5c40\u5747\u52a0\u56fa"}),"  ",(window.resulted["Gr6sg_\u5899\u58c1:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2),"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u5899\u58c1\u52a0\u56fa"}),"  ",window.resulted["Gr6sg_\u5899\u58c1:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u969c\u788d\u90e8\u7f72"}),"  ",window.resulted["Gr6sg_\u90e8\u7f72\u9632\u5fa1:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u969c\u788d\u6467\u6bc1"}),"  ",window.resulted["Gr6sg_\u9632\u5b88\u6467\u6bc1:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("hr",{style:{background:"#E8E8E8",border:"none",height:1}})),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u8fd1\u6218\u51fb\u6740"})," ",window.resulted["generalpvp_meleekills:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u5c40\u5747\u7a7f\u900f"}),"  ",(window.resulted["generalpvp_penetrationkills:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2),"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u7a7f\u900f\u51fb\u6740"}),"  ",window.resulted["generalpvp_penetrationkills:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u778e\u5b50\u620f\u6cd5"}),"  ",window.resulted["Gr6sg_\u778e\u5b50\u51fb\u6740:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u81ea\u6740"}),"  ",window.resulted["Gr6sg_\u81ea\u6740:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u5012\u5730\u672a\u6b7b"}),"  ",window.resulted["Gr6sg_\u5012\u4e0b:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))),_react.default.createElement(_col.default,{span:12,md:8,lg:6},_react.default.createElement(_card.default,{style:{height:34,margin:0},bordered:!1,hoverable:!1},(0,_locale.formatMessage)({id:"\u7834\u7a97\u7a81\u5165"}),"  ",window.resulted["Gr6sg_\u7834\u7a97\u800c\u5165:infinite"],"  ",(0,_locale.formatMessage)({id:"\u6b21"}))))),_react.default.createElement("h1",{style:{height:20}}," "),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(_reactLoadScript.default,{url:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))):_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:20,md:18},_react.default.createElement("span",null,_react.default.createElement("h1",{style:{marginLeft:20}},"WildXBird"),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u6b21\u6570"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"})))),_react.default.createElement("h1",{style:{height:20}}," "),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:"\u516d\u53f7\u6218\u573a\u8bc4\u5206",id:"test"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:"\u6392\u4f4d\u6218\u7ee9"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:"\u7efc\u5408\u6570\u636e"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(a,{content:e,title:"\u5e72\u5458\u80fd\u529b"}))),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(a,{content:e,title:"\u8d5e\u52a9\u5546\u5e7f\u544a",id:"Advertisment1"}))),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},"22",_react.default.createElement(a,{content:e,title:"\u516d\u53f7\u6218\u573a\u8bc4\u5206",id:"test"}))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);