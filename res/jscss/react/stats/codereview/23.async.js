(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"2UF0":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("57cG");var _switch=_interopRequireDefault(__webpack_require__("tWoQ"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_locale=__webpack_require__("TJP2"),_Charts=__webpack_require__("KTCi"),_dataSet=_interopRequireDefault(__webpack_require__("QLqA")),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_home=_interopRequireDefault(__webpack_require__("hrR8")),Title=_typography.default.Title,requestProfileId;function TimesTOh(e){return parseInt(e/3600)}window.onresize=function(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}})};var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a",killSnalysis:!1,modeSnalysis:!1},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Main",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.profile_id&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var a="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,a);var r=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(r,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){var e=this,t=_react.default.createElement(_icon.default,{type:"loading"}),a=window.innerHeight-64;function r(e){return"undefined"==typeof e.extra?_react.default.createElement(_card.default,{title:e.title,bordered:!1,hoverable:!1,style:{height:210,margin:5}},e.content):_react.default.createElement(_card.default,{title:e.title,style:{height:210,margin:5},bordered:!1,hoverable:!1,extra:_react.default.createElement("a",{href:e.extraURL},e.extra)},e.content)}if(a<100&&(a="auto"),"undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){if("undefined"==typeof window.resulted||"undefined"==typeof window.resulted.profile_id){try{window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}catch(e){window.Fthis.props.history.replace("/search/?profileid=")}return null}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto",background:"#fff"}},_react.default.createElement(Title,{level:2,style:{margin:20}},(0,_locale.formatMessage)({id:"\u6838\u5fc3\u6570\u636e"})),_react.default.createElement(_row.default,{style:{margin:20,background:"#fff"}},_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u51fb\u6740/\u6b7b\u4ea1"}),hoverable:!0,style:{margin:2,height:220,cursor:"auto !important"},contentHeight:60,total:_react.default.createElement("div",{style:{height:50,lineHeight:"50px"}},function(){try{return window.resulted["generalpvp_kills:infinite"]>0&&window.resulted["generalpvp_death:infinite"]>0?(window.resulted["generalpvp_kills:infinite"]/window.resulted["generalpvp_death:infinite"]).toFixed(3):0}catch(e){return"ERR"}}()),footer:_react.default.createElement(_row.default,{style:{height:50,lineHeight:"50px"}},_react.default.createElement(_col.default,{span:12},_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u603b\u51fb\u6740\u6570"}),value:window.resulted["generalpvp_kills:infinite"]||0})),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u603b\u6b7b\u4ea1\u6570"}),value:window.resulted["generalpvp_death:infinite"]||0})))},_react.default.createElement(_row.default,{style:{lineHeight:"30px"}},_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u573a\u5747\u51fb\u6740"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},function(){try{return window.resulted["generalpvp_kills:infinite"]>0&&window.resulted["generalpvp_matchplayed:infinite"]>0?(window.resulted["generalpvp_kills:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2):0}catch(e){return"ERR"}}())),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},(0,_locale.formatMessage)({id:"\u573a\u5747\u6b7b\u4ea1"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},function(){try{return window.resulted["generalpvp_death:infinite"]>0&&window.resulted["generalpvp_matchplayed:infinite"]>0?(window.resulted["generalpvp_death:infinite"]/window.resulted["generalpvp_matchplayed:infinite"]).toFixed(2):0}catch(e){return"ERR"}}())),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u56de\u5408\u51fb\u6740\u6570"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},function(){try{return window.resulted["generalpvp_kills:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_kills:infinite"]/resulted.generalpvp_roundplayed).toFixed(3):0}catch(e){return"ERR"}}())),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},(0,_locale.formatMessage)({id:"\u56de\u5408\u6b7b\u4ea1\u7387"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},function(){try{return window.resulted["generalpvp_death:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_death:infinite"]/resulted.generalpvp_roundplayed*100).toFixed(1)+"%":0}catch(e){return"ERR"}}()))))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u80dc\u7387"}),hoverable:!0,style:{margin:2,height:220},contentHeight:60,total:_react.default.createElement("div",{style:{height:50,lineHeight:"50px"}},(window.resulted["generalpvp_matchwon:infinite"]/(window.resulted["generalpvp_matchwon:infinite"]+window.resulted["generalpvp_matchlost:infinite"])*100).toFixed(2)+"%"),footer:_react.default.createElement(_row.default,{style:{height:50,lineHeight:"50px"}},_react.default.createElement(_col.default,{span:12},_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u603b\u80dc\u5229"}),value:(window.resulted["generalpvp_matchwon:infinite"]||0)+(0,_locale.formatMessage)({id:"\u573a"})})),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u603b\u8d1f\u8d25"}),value:(window.resulted["generalpvp_matchlost:infinite"]||0)+(0,_locale.formatMessage)({id:"\u573a"})})))},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u80dc\u573a\u5747\u56de\u5408"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_matchwon:infinite"]>0?(window.resulted["operatorpvp_roundwon"]/window.resulted["generalpvp_matchwon:infinite"]).toFixed(1):0)),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},(0,_locale.formatMessage)({id:"\u8d1f\u573a\u5747\u56de\u5408"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_matchlost:infinite"]>0?(window.resulted["operatorpvp_roundlost"]/window.resulted["generalpvp_matchlost:infinite"]).toFixed(1):0)),_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u80dc\u5229\u56de\u5408\u6570"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["operatorpvp_roundwon"])),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},(0,_locale.formatMessage)({id:"\u8d1f\u8d25\u56de\u5408\u6570"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["operatorpvp_roundlost"]))))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u5165\u5751\u65f6\u95f4"}),hoverable:!0,style:{margin:2,height:108},total:function(){return window.userinfo&&window.userinfo.prime?"undefined"!=typeof window.resulted.firstTry?_react.default.createElement("span",null,new Date(window.resulted.firstTry).toLocaleString()):_react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u9700\u8981\u66f4\u65b0\u6570\u636e"})):_react.default.createElement(_button.default,{type:"link",onClick:r6sgF.askForPrime},(0,_locale.formatMessage)({id:"\u70b9\u51fb\u67e5\u770b"}))}()},function(){try{if(window.userinfo&&window.userinfo.prime&&"undefined"!=typeof window.resulted.firstTry)return _react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u8d5b\u5b63"}),window.R6dateToSeasonId(window.resulted.firstTry)," ",(0,_locale.formatMessage)({id:R6seasonIdToSeasonName(window.R6dateToSeasonId(window.resulted.firstTry))}))}catch(e){console.error(e)}}())),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u6e38\u620f\u751f\u6daf"}),hoverable:!0,style:{margin:2,height:108},total:function(){try{return TimesTOh(window.resulted["generalpvp_timeplayed:infinite"]||0)+" "+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"})}catch(e){}}})),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:12},_react.default.createElement(_card.default,{style:{margin:5},hoverable:!0},_react.default.createElement("div",{style:{fontSize:24}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u51fb\u6740\u7ec4\u6210"})),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},_react.default.createElement(_switch.default,{checked:this.state.killSnalysis,onChange:function(t){e.setState({killSnalysis:t})}})))),_react.default.createElement(_Charts.Pie,{className:"AntdPie",hasLegend:!0,subTitle:(0,_locale.formatMessage)({id:"\u603b\u51fb\u6740"}),total:_react.default.createElement("span",null,function(){try{return window.resulted["generalweapontypepvp_kills"]+window.resulted["gadgetpvp_kills"]}catch(e){return 0}}()),data:function(){try{var e=[];if(Fthis.state.killSnalysis){var t=0,a=0,r=0;for(var l in window.siegeLib.temp.openameToOpeId){var n=window.siegeLib.temp.openameToOpeId[l],i=void 0;if(window.resulted["operatorpvp_kills:"+n+":infinite"]>0){i=parseInt(window.resulted["operatorpvp_kills:"+n+":infinite"]);var d=R6opeIdToCategory(n);"ATK"==d?t+=i:"DEF"==d?a+=i:r+=i}}window.resulted["generalpvp_kills:infinite"],r=window.resulted["generalpvp_kills:infinite"]-t-a,e.push({x:(0,_locale.formatMessage)({id:"atk"}),y:t},{x:(0,_locale.formatMessage)({id:"def"}),y:a},{x:(0,_locale.formatMessage)({id:"oth"}),y:r})}else{for(var o in window.resulted["weapontypepvp_kills"]){var s=R6weapIdToWeapName(o);"ERR"==s&&(s="OTHER");var u=window.resulted["weapontypepvp_kills"][o];e.push({x:(0,_locale.formatMessage)({id:s}),y:u})}e.push({x:(0,_locale.formatMessage)({id:"gadget"}),y:window.resulted["gadgetpvp_kills"]})}return e=e.sort(function(e,t){var a=e["y"],r=t["y"];return a<r?1:a>r?-1:0}),e}catch(e){return[]}}(),height:360}))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:12},_react.default.createElement(_card.default,{style:{margin:5},hoverable:!0},_react.default.createElement("div",{style:{fontSize:24}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:12},(0,_locale.formatMessage)({id:"\u573a\u6b21\u7ec4\u6210"})),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right"}},_react.default.createElement(_switch.default,{checked:this.state.modeSnalysis,onChange:function(t){e.setState({modeSnalysis:t})}})))),_react.default.createElement(_Charts.Pie,{className:"AntdPie",hasLegend:!0,subTitle:function(){return Fthis.state.modeSnalysis?(0,_locale.formatMessage)({id:"\u603b\u56de\u5408\u6570"}):(0,_locale.formatMessage)({id:"\u603b\u573a\u6b21"})}(),total:_react.default.createElement("span",null,function(){return Fthis.state.modeSnalysis?window.resulted["generalpvp_roundplayed"]:window.resulted["generalpvp_matchplayed:infinite"]}()),data:function(){try{var e;if(Fthis.state.modeSnalysis){resulted.operatorpvp_roundlostDEF,resulted.operatorpvp_roundwonDEF,resulted.operatorpvp_roundlostATK,resulted.operatorpvp_roundwonATK,resulted.generalpvp_roundplayed;var t=0,a=0,r=0,l=0;resulted.generalpvp_roundplayed>0&&resulted.generalpvp_roundplayed,resulted.operatorpvp_roundlostDEF>0&&(t=resulted.operatorpvp_roundlostDEF),resulted.operatorpvp_roundwonDEF>0&&(a=resulted.operatorpvp_roundwonDEF),resulted.operatorpvp_roundlostATK>0&&(r=resulted.operatorpvp_roundlostATK),resulted.operatorpvp_roundwonATK>0&&(l=resulted.operatorpvp_roundwonATK);e=[{x:(0,_locale.formatMessage)({id:"\u9632\u5b88\u80dc\u5229"}),y:a},{x:(0,_locale.formatMessage)({id:"\u9632\u5b88\u5931\u8d25"}),y:t},{x:(0,_locale.formatMessage)({id:"\u8fdb\u653b\u6210\u529f"}),y:r},{x:(0,_locale.formatMessage)({id:"\u8fdb\u653b\u5931\u8d25"}),y:l}]}else{var n=0,i=0,d=0,o=0,s=0,u=0,_=0;window.resulted["generalpvp_matchplayed:infinite"]>0&&(n=window.resulted["generalpvp_matchplayed:infinite"]),window.resulted["plantbombpvp_matchwon:infinite"]>0&&(i=window.resulted["plantbombpvp_matchwon:infinite"]),window.resulted["plantbombpvp_matchlost:infinite"]>0&&(d=window.resulted["plantbombpvp_matchlost:infinite"]),window.resulted["rescuehostagepvp_matchwon:infinite"]>0&&(o=window.resulted["rescuehostagepvp_matchwon:infinite"]),window.resulted["rescuehostagepvp_matchlost:infinite"]>0&&(s=window.resulted["rescuehostagepvp_matchlost:infinite"]),window.resulted["secureareapvp_matchwon:infinite"]>0&&(u=window.resulted["secureareapvp_matchwon:infinite"]),window.resulted["secureareapvp_matchlost:infinite"]>0&&(_=window.resulted["secureareapvp_matchlost:infinite"]);var c=n-i-d-o-s-u-_;e=[{x:(0,_locale.formatMessage)({id:"\u70b8\u5f39\u80dc\u5229"}),y:i},{x:(0,_locale.formatMessage)({id:"\u70b8\u5f39\u8d1f\u8d25"}),y:d},{x:(0,_locale.formatMessage)({id:"\u4eba\u8d28\u80dc\u5229"}),y:o},{x:(0,_locale.formatMessage)({id:"\u4eba\u8d28\u8d1f\u8d25"}),y:s},{x:(0,_locale.formatMessage)({id:"\u4fdd\u5168\u80dc\u5229"}),y:u},{x:(0,_locale.formatMessage)({id:"\u4fdd\u5168\u8d1f\u8d25"}),y:_},{x:(0,_locale.formatMessage)({id:"\u5176\u4ed6"}),y:c}]}return e}catch(e){}}(),height:360}))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u6551\u52a9\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted.generalpvp_roundplayed>0&&window.resulted["generalpvp_revive:infinite"]>0?(window.resulted["generalpvp_revive:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u6551\u52a9"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_revive:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u52a9\u653b\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["generalpvp_killassists:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_killassists:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u52a9\u653b"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_killassists:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u7206\u5934\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["generalpvp_headshot:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_headshot:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u7206\u5934"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_headshot:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u5899\u52a0\u56fa\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u5899\u58c1:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u5899\u58c1:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u52a0\u56fa\u5899"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u5899\u58c1:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u9762(\u5899)"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u969c\u788d\u90e8\u7f72\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u90e8\u7f72\u9632\u5fa1:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u90e8\u7f72\u9632\u5fa1:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u969c\u788d\u90e8\u7f72"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u90e8\u7f72\u9632\u5fa1:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u969c\u788d\u6467\u6bc1\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u9632\u5b88\u6467\u6bc1:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u9632\u5b88\u6467\u6bc1:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u969c\u788d\u6467\u6bc1"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u9632\u5b88\u6467\u6bc1:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u8fd1\u6218\u51fb\u6740\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["generalpvp_meleekills:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_meleekills:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u8fd1\u6218\u51fb\u6740"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_meleekills:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u7a7f\u900f\u51fb\u6740\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["generalpvp_penetrationkills:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["generalpvp_penetrationkills:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u7a7f\u900f\u51fb\u6740"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["generalpvp_penetrationkills:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u81f4\u76f2\u51fb\u6740\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u778e\u5b50\u51fb\u6740:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u778e\u5b50\u51fb\u6740:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u81f4\u76f2\u51fb\u6740"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u778e\u5b50\u51fb\u6740:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u81ea\u6740\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u81ea\u6740:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u81ea\u6740:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u81ea\u6740"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u81ea\u6740:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u5012\u5730\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u5012\u4e0b:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u5012\u4e0b:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u5012\u5730"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u5012\u4e0b:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"})))),_react.default.createElement(_col.default,{span:24,md:12,lg:12,xl:8},_react.default.createElement(_Charts.ChartCard,{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u7834\u7a97\u7a81\u5165\u7387"}),hoverable:!0,style:{margin:2,height2:108},total:function(){try{return window.resulted["Gr6sg_\u7834\u7a97\u800c\u5165:infinite"]>0&&window.resulted["generalpvp_roundplayed"]>0?(window.resulted["Gr6sg_\u7834\u7a97\u800c\u5165:infinite"]/window.resulted.generalpvp_roundplayed*100).toFixed(2)+"%":0}catch(e){return"ERR"}}()},(0,_locale.formatMessage)({id:"\u603b\u8ba1\u7834\u7a97\u7a81\u5165"}),_react.default.createElement(_Trend.default,{style:{marginLeft:8,color:"rgba(0,0,0,.85)"}},window.resulted["Gr6sg_\u7834\u7a97\u800c\u5165:infinite"]||0," ",(0,_locale.formatMessage)({id:"\u6b21"}))))),_react.default.createElement(_row.default,null,function(){if(!window.userinfo||!window.userinfo.prime)return _react.default.createElement(_col.default,{span:24},_react.default.createElement("div",null,_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))}()))}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:20,md:18},_react.default.createElement("span",null,_react.default.createElement("h1",{style:{marginLeft:20}},"WildXBird"),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u6b21\u6570"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"})))),_react.default.createElement("h1",{style:{height:20}}," "),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:t,title:"\u516d\u53f7\u6218\u573a\u8bc4\u5206",id:"test"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:t,title:"\u6392\u4f4d\u6218\u7ee9"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:t,title:"\u7efc\u5408\u6570\u636e"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:t,title:"\u5e72\u5458\u80fd\u529b"}))),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(r,{content:t,title:"\u8d5e\u52a9\u5546\u5e7f\u544a",id:"Advertisment1"}))),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},"22",_react.default.createElement(r,{content:t,title:"\u516d\u53f7\u6218\u573a\u8bc4\u5206",id:"test"}))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default},hrR8:function(e,t,a){}}]);