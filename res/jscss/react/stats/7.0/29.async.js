(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{qkQR:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("B40R");var _badge=_interopRequireDefault(__webpack_require__("43HQ"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W")),_defineProperty2=_interopRequireDefault(__webpack_require__("3CjV"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_g2React=_interopRequireDefault(__webpack_require__("a6n9")),_g=__webpack_require__("1zR+"),_locale=__webpack_require__("TJP2"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text;function getData(){if("undefined"==typeof window.leaderboardData){var e=new XMLHttpRequest;e.open("GET","https://promotion.r6sground.cn/!leaderboard/index.txt",!0),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&e.status>=200&&e.status<300)try{window.leaderboardData=JSON.parse(e.responseText);var t=function(e){window.leaderboardData[e]["level"]="?",window.leaderboardData[e]["KD"]="?",window.leaderboardData[e]["MMR"]=0;var t=new XMLHttpRequest;t.open("GET","https://promotion.r6sground.cn/"+window.leaderboardData[e].profileid+"/min.txt",!0),t.send(),t.onreadystatechange=function(){if(4==t.readyState&&t.status>=200&&t.status<300)try{var a=JSON.parse(t.responseText);window.leaderboardData[e]["level"]=a.level,0==a.death&&(a.death=1),window.leaderboardData[e]["KD"]=(a.kills/a.death).toFixed(2),2500==a.rank_apac_mmr&&(a.rank_apac_mmr=0),2500==a.rank_emea_mmr&&(a.rank_emea_mmr=0),2500==a.rank_ncsa_mmr&&(a.rank_ncsa_mmr=0),window.leaderboardData[e]["MMR"]=Math.max(a.rank_apac_mmr,a.rank_emea_mmr,a.rank_ncsa_mmr),window.Fthis.setState({services:{Done:!0}})}catch(e){PROmotionOnError(e)}}};for(var a in leaderboardData)t(a);window.Fthis.setState({services:{Done:!0}})}catch(e){PROmotionOnError(e)}}}else window.Fthis.setState({services:{Done:!0}})}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){if("undefined"!=typeof window.needjs)eval(window.needjs),getData();else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),getData())}}}},{key:"render",value:function(){window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"});return window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize(),"undefined"!=typeof this.state.services.Done||"true"==this.state.services.Done?_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto",background:"white"}},_react.default.createElement("div",{style:(0,_defineProperty2.default)({padding:24},"padding",window.PaperMargin)},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u9ad8\u73a9\u6392\u884c\u699c"}))),_react.default.createElement(_list.default,{className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:window.leaderboardData,renderItem:function(e){return _react.default.createElement(_list.default.Item,{onClick:function(){window.Fthis.props.history.push("/search/?profileid="+e.profileid)},actions:[_react.default.createElement(_avatar.default,{size:64,src:IconMMR(mmrtolevel(e.MMR),seasonidToRankVer())})]},_react.default.createElement(_list.default.Item.Meta,{avatar:_react.default.createElement(_badge.default,{count:e.sort},_react.default.createElement(_avatar.default,{shape:"square",size:64,src:ProfileIdtoAvatarImg(e.useridMain)})),title:e.UsernameOnPlatform,description:(0,_locale.formatMessage)({id:"\u7b49\u7ea7"})+" "+e.level+" "+(0,_locale.formatMessage)({id:"\u6218\u635f"})+" "+e.KD}),_react.default.createElement("div",{style:{height:80}}))}}),_react.default.createElement(_typography.default,null,_react.default.createElement(Paragraph,null,(0,_locale.formatMessage)({id:"\u53ea\u6709\u57282019\u5e747\u670827\u65e5\u4e4b\u540e\u5728\u672c\u7ad9\u4ea7\u751f\u8fc7\u6570\u636e,\u5e76\u4e14\u7b49\u7ea7\u8d85\u8fc7100\u7684\u73a9\u5bb6\u624d\u4f1a\u88ab\u8ba1\u5165\u6392\u884c\u699c\uff0c\u6392\u540d\u4f9d\u636e\u662f\u5c40\u5747\u8d21\u732e\uff0c\u6392\u884c\u699c\u6bcf\u4e2a\u8d5b\u5b63\u4f1a\u91cd\u7f6e\u3002"}))))):_react.default.createElement("div",null,e)}},{key:"componentWillUnmount",value:function(){this.state.services=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);