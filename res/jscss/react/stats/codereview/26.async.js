(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{q4U1:function(module,exports,__webpack_require__){"use strict";(function(process){var _interopRequireWildcard=__webpack_require__("CKcX"),_interopRequireDefault=__webpack_require__("u+rM");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("f4VT");var _list=_interopRequireDefault(__webpack_require__("FBh+"));__webpack_require__("S/i1");var _switch=_interopRequireDefault(__webpack_require__("B/w0"));__webpack_require__("rPaR");var _alert=_interopRequireDefault(__webpack_require__("5xkg"));__webpack_require__("Lksa");var _button=_interopRequireDefault(__webpack_require__("3Axj"));__webpack_require__("OleL");var _input=_interopRequireDefault(__webpack_require__("8NA/"));__webpack_require__("pck6");var _icon=_interopRequireDefault(__webpack_require__("sU1J"));__webpack_require__("fRYZ");var _modal=_interopRequireDefault(__webpack_require__("OixL")),_classCallCheck2=_interopRequireDefault(__webpack_require__("Pjwa")),_createClass2=_interopRequireDefault(__webpack_require__("2cji")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("sp3j")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("vZkh")),_inherits2=_interopRequireDefault(__webpack_require__("+KCP"));__webpack_require__("uDgD");var _steps=_interopRequireDefault(__webpack_require__("7xBH"));__webpack_require__("fJBB");var _typography=_interopRequireDefault(__webpack_require__("rTB7")),_react=_interopRequireWildcard(__webpack_require__("uqIC")),Title=_typography.default.Title,Text=_typography.default.Text,Step=_steps.default.Step,thisInProgress=!1,goFirstPage=!1,thisInErrorPage=!1,thisInError="\u610f\u6599\u4e4b\u5916\u7684\u9519\u8bef",this1PButtonLoading=!1;function ONpushInfo(){this1PButtonLoading=!0,window.Fthis.setState({services:{Done:(new Date).getTime()}});var Authorization=Base64.encode(document.getElementById("Vemail").value+":"+document.getElementById("Vpasscode").value),REQUUEST=new XMLHttpRequest;REQUUEST.open("POST","https://w1.r6sg.club/",!0),REQUUEST.send('{"UserID": "'+window.getCookie("UserID")+'","TokenID": "'+window.getCookie("TokenID")+'","Token": "'+window.getCookie("Token")+'","APP_ID": "UBIConnect", "Authorization": "'+Authorization+'"}'),REQUUEST.onreadystatechange=function(){if(4==REQUUEST.readyState){if(REQUUEST.status>=200&&REQUUEST.status<300){var returnt;try{returnt=JSON.parse(REQUUEST.responseText)}catch(e){return this1PButtonLoading=!1,alert("\u5bf9\u65b9\u8fd4\u56de\u4e86\u610f\u6599\u4e4b\u5916\u56de\u7b54\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21"),void window.Fthis.setState({services:{Done:(new Date).getTime()}})}if("undefined"!=typeof returnt.error)return alert(returnt.message),this1PButtonLoading=!1,void window.Fthis.setState({services:{Done:(new Date).getTime()}});if(this1PButtonLoading=!1,thisInProgress=!1,goFirstPage=!1,thisInErrorPage=!1,delete window.userinfo,eval(window.needjs),"undefined"!=typeof process)return void window.Fthis.props.history.replace("/App/R6BOX");window.Fthis.setState({services:{Done:(new Date).getTime()}})}else{var content="\u670d\u52a1\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u7a0d\u7b49\u7247\u523b\u518d\u8bd5\u3002";try{content=JSON.parse(REQUUEST.responseText).error}catch(e){}this1PButtonLoading=!1,alert(content)}window.Fthis.setState({services:{Done:(new Date).getTime()}})}}}function ONgoFirstPage(){goFirstPage=!0,window.Fthis.setState({services:{Done:(new Date).getTime()}})}-1!=window.userinfo.ProfileID.indexOf("-")&&1!=window.userinfo.authentication&&(thisInErrorPage=!0,thisInError="\u7528\u6237\u672a\u63d0\u4ea4\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5c06\u4e0d\u80fd\u4f7f\u7528R6\u76d2\u5b50\u7b49\u9ad8\u7ea7\u529f\u80fd"),-1==window.userinfo.ProfileID.indexOf("-")&&(goFirstPage=!0);var switched=new ButtonFUNCTION,ServiceList=function(e){function t(e){var r;return(0,_classCallCheck2.default)(this,t),r=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(t).call(this,e)),r.state={services:[{}],view:"type_a"},r}return(0,_inherits2.default)(t,e),(0,_createClass2.default)(t,[{key:"render",value:function(){window.Fthis=this,window.FModal=_modal.default;var e=[];return e.push({id:"zh2",title:"\u4ed6\u4eba\u53ef\u4ee5\u67e5\u8be2\u6211\u7684\u6218\u7ee9",description:"\u5173\u95ed\u540e\u4ed6\u4eba\u5c06\u4e0d\u80fd\u5728\u67e5\u8be2\u60a8\u7684\u6570\u636e"}),e.push({id:"jb2",title:"\u4e3b\u52a8\u663e\u793a\u6218\u7ee9",description:"\u8bbf\u95ee \u516d\u53f7\u6218\u573a \u9996\u9875\u65f6\u81ea\u52a8\u8df3\u8f6c\u5230\u60a8\u7684\u6218\u7ee9\u4fe1\u606f\u9875"}),goFirstPage?_react.default.createElement("div",{style:{maxWidth:1024}},_react.default.createElement(_steps.default,{current:0},_react.default.createElement(Step,{title:"\u5b89\u5168\u68c0\u67e5",icon:_react.default.createElement(_icon.default,{type:"schedule"})}),_react.default.createElement(Step,{title:"\u9a8c\u8bc1\u8d26\u53f7",icon:_react.default.createElement(_icon.default,{type:"api"})}),_react.default.createElement(Step,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:_react.default.createElement(_icon.default,{type:"smile-o"})})),_react.default.createElement(Text,{style:{padding:"5px 0"}},"\u8bf7\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\u4ee5\u4fbf\u6211\u4eec\u9a8c\u8bc1\u60a8\u5bf9\u8d26\u53f7\u7684\u6240\u6709\u6743"),_react.default.createElement("br",null),_react.default.createElement(Text,{style:{padding:"5px 0"},mark:!0},"\u4ee5\u4e0b\u6240\u6709\u9879\u76ee\u5747\u4e3a\u5fc5\u586b\u9879\u76ee"),_react.default.createElement("br",null),_react.default.createElement("div",{style:{padding:"10px 0"}},_react.default.createElement(Text,{style:{padding:"5px 0"}},"UPLAY\u767b\u5f55\u90ae\u7bb1"),_react.default.createElement("br",null),_react.default.createElement("div",{style:{padding:"5px 0",minWidth:300}},_react.default.createElement(_input.default,{id:"Vemail",placeholder:"example@example.com",style:{maxWidth:300}}))),_react.default.createElement("div",{style:{padding:"10px 0"}},_react.default.createElement(Text,{style:{padding:"5px 0"}},"UPLAY\u767b\u5f55\u5bc6\u7801"),_react.default.createElement("br",null),_react.default.createElement("div",{style:{padding:"5px 0",minWidth:300}},_react.default.createElement(_input.default.Password,{id:"Vpasscode",placeholder:"\u767b\u5f55\u5bc6\u7801",style:{maxWidth:300}}),_react.default.createElement("br",null),_react.default.createElement(Text,{type:"warning"},"\u5efa\u8bae\u5f00\u542f\u4e24\u6b65\u9a8c\u8bc1\u4ee5\u52a0\u5f3a\u8d26\u53f7\u5b89\u5168\u6027"))),_react.default.createElement(_button.default,{type:"primary",style:{maxWidth:300},onClick:function(e){return ONpushInfo()},loading:this1PButtonLoading},"\u63d0\u4ea4\u9a8c\u8bc1\u7533\u8bf7")):thisInErrorPage?_react.default.createElement("div",{style:{maxWidth:1024}},_react.default.createElement(_steps.default,{current:1,status:"error"},_react.default.createElement(Step,{title:"\u5b89\u5168\u68c0\u67e5",icon:_react.default.createElement(_icon.default,{type:"schedule"})}),_react.default.createElement(Step,{title:"\u9a8c\u8bc1\u8d26\u53f7",icon:_react.default.createElement(_icon.default,{type:"exclamation-circle"})}),_react.default.createElement(Step,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:_react.default.createElement(_icon.default,{type:"smile-o"})})),_react.default.createElement("div",{style:{padding:10}},_react.default.createElement(_alert.default,{message:"\u8d44\u6599\u4e0d\u5168",description:thisInError,type:"warning",showIcon:!0})),_react.default.createElement(_button.default,{block:!0,onClick:function(e){return ONgoFirstPage()}},"\u8865\u5168\u4fe1\u606f")):-1!=window.userinfo.ProfileID.indexOf("-")?_react.default.createElement("div",{style:{maxWidth:1024}},_react.default.createElement(_steps.default,{current:2},_react.default.createElement(Step,{title:"\u5b89\u5168\u68c0\u67e5",icon:_react.default.createElement(_icon.default,{type:"schedule"})}),_react.default.createElement(Step,{title:"\u9a8c\u8bc1\u8d26\u53f7",icon:_react.default.createElement(_icon.default,{type:"api"})}),_react.default.createElement(Step,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:_react.default.createElement(_icon.default,{type:"smile-o"})})),_react.default.createElement(_list.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return _react.default.createElement(_list.default.Item,{actions:e.actions,extra:_react.default.createElement(_switch.default,{onChange:function(t){return switched.onChanged(e.id)},loading:switched.getLoading(e.id),disabled:switched.getDisabled(e.id),defaultChecked:switched.getState(e.id)})},_react.default.createElement(_list.default.Item.Meta,{title:e.title,description:e.description}))}})):_react.default.createElement("div",{style:{maxWidth:1024}},"error")}}]),t}(_react.PureComponent),_default=ServiceList;exports.default=_default}).call(this,__webpack_require__("YKxW"))}}]);