(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{nC5E:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("fnRy");var _spin=_interopRequireDefault(__webpack_require__("Denl"));__webpack_require__("yh/O");var _icon=_interopRequireDefault(__webpack_require__("KzDW")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("5jMC");var _datePicker=_interopRequireDefault(__webpack_require__("2OcF")),_react=_interopRequireWildcard(__webpack_require__("i9FB")),MonthPicker=_datePicker.default.MonthPicker,RangePicker=_datePicker.default.RangePicker,WeekPicker=_datePicker.default.WeekPicker;function fetchTeam(teamId){"undefined"==typeof window.Team&&(window.Team={}),"undefined"!=typeof window.Team[teamId]&&delete window.Team[teamId];var xhr=new XMLHttpRequest;xhr.open("GET","https://promotion.r6sground.cn/Team/main.txt",!1),xhr.send(),xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status?(window.i=xhr.responseText,eval(xhr.responseText),this.setState({services:{Done:(new Date).getTime()}})):"404"==xhr.status?window.Fthis.props.history.replace("/Stats/error?error=\u8be5\u6218\u961f\u4e0d\u5b58\u5728"):window.Fthis.props.history.replace("/Stats/error?error=\u8bf7\u6c42\u6218\u961f\u4fe1\u606f\u65f6\u51fa\u9519")}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.urlFix=function(){var e;e=window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),console.log(e),"myTeam"==e&&("undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.user_ID&&""!=window.userinfo.user_ID&&"0"!=window.userinfo.user_ID||window.Fthis.props.history.replace("/account/settings?goback=/Team"));var t="/Team/"+e;history.replaceState(null,null,t)},"undefined"!=typeof window.needjs)eval(window.needjs),this.setState({services:{Done:(new Date).getTime()}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),_this2.setState({services:{Done:(new Date).getTime()}}))}}}},{key:"render",value:function(){window.Fthis=this;_react.default.createElement(_icon.default,{type:"loading"});var e=_react.default.createElement(_icon.default,{type:"loading",style:{fontSize:24},spin:!0});return _react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:25}},_react.default.createElement(_spin.default,{indicator:e}),"mm"))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);