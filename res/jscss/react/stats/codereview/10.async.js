(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"+5hs":function(e,t,r){},"STA+":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("dMhr");var _tag=_interopRequireDefault(__webpack_require__("eJcY"));__webpack_require__("enMo");var _input=_interopRequireDefault(__webpack_require__("1HgO"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactRouter=__webpack_require__("bFZZ"),_locale=__webpack_require__("TJP2"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_home=_interopRequireDefault(__webpack_require__("+5hs")),Title=_typography.default.Title,Search=_input.default.Search,Paragraph=_typography.default.Paragraph,OperatorList={"1:1":"recruit","1:2":"recruit","1:4":"recruit","1:5":"recruit","2:1":"SMOKE","2:2":"CASTLE","2:3":"DOC","2:4":"GLAZ","2:5":"BLITZ","2:6":"BUCK","2:7":"BLACKBEARD","2:8":"CAPITAO","2:9":"HIBANA","2:A":"JACKAL","2:B":"YING","2:C":"ELA","2:D":"DOKKAEBI","2:F":"MAESTRO","3:1":"MUTE","3:2":"ASH","3:3":"ROOK","3:4":"FUZE","3:5":"IQ","3:6":"FROST","3:7":"VALKYRIE","3:8":"CAVEIRA","3:9":"ECHO","3:A":"MIRA","3:B":"LESION","3:C":"ZOFIA","3:D":"VIGIL","3:E":"LION","3:F":"ALIBI","4:1":"SLEDGE","4:2":"PULSE","4:3":"TWITCH","4:4":"KAPKAN","4:5":"JAGER","4:E":"FINKA","5:1":"THATCHER","5:2":"THERMITE","5:3":"MONTAGNE","5:4":"TACHANKA","5:5":"BANDIT","2:10":"MAVERICK","3:10":"CLASH","3:11":"KAID","2:11":"NOMAD","2:12":"MOZZIE","3:12":"GRIDLOCK"},OperatorListF={SMOKE:"0",CASTLE:"0",DOC:"0",ELA:"0",MAESTRO:"0",MUTE:"0",ROOK:"0",FROST:"0",VALKYRIE:"0",CAVEIRA:"0",ECHO:"0",MIRA:"0",LESION:"0",VIGIL:"0",ALIBI:"0",PULSE:"0",KAPKAN:"0",JAGER:"0",TACHANKA:"0",BANDIT:"0",CLASH:"0",KAID:"0",MOZZIE:"0"},SearchContent;function opeidtoname(e){for(var t in OperatorList)if(t==e)return OperatorList[t]}function openametoid(e){for(var t in OperatorList)if(OperatorList[t]==e)return t}function TimesTOh(e){return parseInt(e/3600)}function FetchOpeInfo(e,t,r,a){for(var n in r)if(a){if(t+":"+e+":infinite"==n)return console.log(r[n]),r[n]}else if(t+":"+e==n)return r[n]}var SearchContentloading=!1,boxOnSearchXHR=new XMLHttpRequest;function boxOnChange(){var e=document.getElementById("mainSearchBox").value;if(""!=e&&36!=e.length){var t=e;boxOnSearchXHR.abort(),boxOnSearchXHR.open("GET","https://promotion.r6sground.cn/!globalsearch/"+t+".txt",!0),boxOnSearchXHR.withCredentials=!1,boxOnSearchXHR.send(),SearchContentloading=!0;var r=(new Date).getTime();window.Fthis.setState({services:{Done:r}}),boxOnSearchXHR.onreadystatechange=function(){if(boxOnSearchXHR.readyState==XMLHttpRequest.DONE){var e,r=[];try{try{e=JSON.parse(boxOnSearchXHR.responseText)["hits"]}catch(e){return}for(var a in e)if("u"==a.substring(0,1))r.push({pin:a,pinType:"user",href:"/search/?profileid="+e[a].pid,id:e[a].pid,pid:e[a].pid,uplayMainId:e[a].uplayMainId,name:e[a].name,type:e[a].type});else if("p"==a.substring(0,1)){continue}SearchContent=[];var n="0";for(var i in r)if("u"==r[i].pin.substring(0,1)){SearchContent.push(r[i]),n=r[i].pin;break}for(var o in r)r[o].pin!=n&&SearchContent.push(r[o])}catch(e){console.debug(e),PROmotionOnError(e)}SearchContent.push({href:"/search/?username="+t+"&platform=1",id:1,pid:"06cf6417-becd-4442-a065-8876c5f2dda1",uplayMainId:"06cf6417-becd-4442-a065-8876c5f2dda1",name:"\u6ca1\u770b\u5230\u4f60\u7684\u8d26\u6237\uff1f",type:"\u70b9\u51fb\u8fd9\u91cc\u8fdb\u5b8c\u5168\u5339\u914d(PC)"}),SearchContent.push({href:"/search/?username="+t+"&platform=2",id:2,pid:"06cf6417-becd-4442-a065-8876c5f2dda1",uplayMainId:"06cf6417-becd-4442-a065-8876c5f2dda1",name:"\u6ca1\u770b\u5230\u4f60\u7684\u8d26\u6237\uff1f",type:"\u70b9\u51fb\u8fd9\u91cc\u8fdb\u5b8c\u5168\u5339\u914d(PS4)"}),SearchContent.push({href:"/search/?username="+t+"&platform=3",id:3,pid:"06cf6417-becd-4442-a065-8876c5f2dda1",uplayMainId:"06cf6417-becd-4442-a065-8876c5f2dda1",name:"\u6ca1\u770b\u5230\u4f60\u7684\u8d26\u6237\uff1f",type:"\u70b9\u51fb\u8fd9\u91cc\u8fdb\u5b8c\u5168\u5339\u914d(Xbox)"}),SearchContentloading=!1;var _=(new Date).getTime();window.Fthis.setState({services:{Done:_}});var c=function(e){try{var t=document.getElementById("userid-"+SearchContent[e].id);console.log(t),t.onclick=function(){window.Fthis.props.history.push(SearchContent[e].href)}}catch(e){PROmotionOnError(e)}};for(var u in SearchContent)c(u)}}}}function boxOnSearch(e){""!=e?36!=e.length?window.Fthis.props.history.push("search?username="+e):window.Fthis.props.history.push("/search/?username="+e):window.Fthis.props.history.push("search?username=0")}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if("r6sground.cn"==window.location.host||"r6sground.com"==window.location.host?window.host="https://"+window.location.host:window.host="https://r6sground.cn",console.log(window.host),"undefined"!=typeof window.needjs){eval(window.needjs);var timestamp=(new Date).getTime();this.setState({services:{Done:timestamp}})}else{var xhr=new XMLHttpRequest;xhr.open("GET",window.host+"/r6sg-app/res/need.js/",!0),xhr.withCredentials=!1,xhr.send(),xhr.onreadystatechange=function(){if(xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status){window.needjs=xhr.responseText,eval(xhr.responseText);var _timestamp2=(new Date).getTime();_this2.setState({services:{Done:_timestamp2}})}}}if("undefined"!=typeof window.feedcontent){var _timestamp3=(new Date).getTime();this.setState({services:{Done:_timestamp3}})}}},{key:"render",value:function(){window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"}),t=window.host+"/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/logo-large.png";window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="0px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="0px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize();var r=[];r.push({href:"#",id:0,title:"\u8bf7\u5728\u4e0a\u9762\u7684\u641c\u7d22\u6846\u5185\u8f93\u5165\u5339\u914d\u5b57",pic:"https://cdn.jsdelivr.net/gh/xieqiqiang00/r6sground.cn/empty.png"});var a=_react.default.createElement(_list.default,{itemLayout:"vertical",size:"large",dataSource:r,loading:SearchContentloading,renderItem:function(e){return _react.default.createElement("div",{id:"article-"+e.id},_react.default.createElement(_list.default.Item,{key:e.title,extra:_react.default.createElement("img",{style:{borderRadius:5,maxWidth:250},alt:"logo",src:e.pic})},_react.default.createElement(_list.default.Item.Meta,{title:_react.default.createElement("a",{href:e.href},e.title),description:e.description}),e.content))}}),n=window.innerHeight-64;return n<100&&(n="auto"),"undefined"!=typeof this.state.services.Done?_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto",padding:window.PaperMargin,background:"white"}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("div",{id:"logo-home-main",style:{backgroundImage:"url("+t+")",height:150,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}))),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement(Search,{id:"mainSearchBox",placeholder:(0,_locale.formatMessage)({id:"\u8f93\u5165\u6635\u79f0\u6765\u67e5\u8be2\u73a9\u5bb6"}),enterButton:(0,_locale.formatMessage)({id:"\u641c\u7d22"}),autoComplete:"off",size:"large",onClick:function(e){window.innerHeight<650?document.getElementById("logo-home-main").style.display="none":document.getElementById("logo-home-main").style.display=""},onChange:function(e){return boxOnChange(e)},onSearch:function(e){return boxOnSearch(e)}}))),_react.default.createElement(_row.default,null,_react.default.createElement(_list.default,{split:!0,itemLayout:"vertical",locale:{emptyText:a},size:"small",dataSource:SearchContent,renderItem:function(e){return _react.default.createElement("div",{id:"userid-"+e.id},_react.default.createElement(_list.default.Item,{key:e.id},_react.default.createElement(_list.default.Item.Meta,{avatar:function(){if("undefined"!=typeof e.uplayMainId)return _react.default.createElement(_avatar.default,{src:ProfileIdtoAvatarImg(e.uplayMainId,"min"),size:64,shape:"square"})}(),title:e.name,description:e.type})))}}))):_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},e)}},{key:"componentDidUpdate",value:function(){if(window.Fthis=this,"undefined"!=typeof window.feedcontent){var e=function(e){if("publish"!=window.feedcontent.posts[e].status)return"continue";try{var t=document.getElementById("article-"+window.feedcontent.posts[e].id);t.onclick=function(){window.Fthis.props.history.push(window.feedcontent.posts[e].url.replace("https://r6sground.cn",""))}}catch(e){}};for(var t in window.feedcontent.posts)e(t)}}},{key:"componentWillUnmount",value:function(){SearchContent=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);