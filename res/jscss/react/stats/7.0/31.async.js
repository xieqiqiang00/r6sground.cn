(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{tvIf:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH"));__webpack_require__("ye9w");var _notification2=_interopRequireDefault(__webpack_require__("ZnsJ")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("yPdm");var _steps=_interopRequireDefault(__webpack_require__("Al2M")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),Step=_steps.default.Step;window.globalConfig={};var \u521d\u59cb\u5316=!1;function Ffresh(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}}),setTimeout(function(){Cfunction()},400)}function Cfunction(){if(console.log("componentDidMount"),console.log(nowsetp),console.log(Fstatus),"error"!=Fstatus)if(0==nowsetp){console.log("nowsetp");try{window.opLog=[],window.opLog.push("\u521d\u59cb\u5316\u5b8c\u6210"),eval("window.child_process = require('child_process')"),eval("window.iconv = require('iconv-lite')"),eval("window.ipcRenderer = require('electron').ipcRenderer"),eval("window.fs = require('fs')"),eval("window.os = require('os')"),eval("window.shell = require('electron').shell"),eval("window.session = require('electron')"),eval("window.HAR = require('request')"),eval("window.WebSocketServer = require('ws').Server"),eval("window.regedit = require('regedit')"),eval("window.currentProcesses = require('current-processes')");try{window.globalConfig.globalConfig,window.opLog.opLog,window.child_process.child_process,window.iconv.iconv,window.ipcRenderer.ipcRenderer,window.fs.fs,window.os.os,window.shell.shell,window.session.session,window.HAR.HAR,window.WebSocketServer.WebSocketServer,window.regedit.regedit,window.currentProcesses.currentProcesses}catch(e){return window.PROmotionOnError(e),Fstatus="error",Ffresh(),void alert("\u88c5\u8f7d\u4f9d\u8d56\u65f6\u51fa\u9519\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u5b89\u88c5\u672c\u7a0b\u5e8f\r\n\u9519\u8bef\u4fe1\u606f\uff1a"+e)}window.regedit.list(["HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Uplay"],function(e,t){try{var r=t["HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Uplay"].values.InstallLocation.value;window.globalConfig["UplayInstallLocation"]=r}catch(e){return window.PROmotionOnError(e),Fstatus="error",Ffresh(),void alert("\u8bfb\u53d6Uplay\u914d\u7f6e\u6587\u4ef6\u65f6\u51fa\u9519\uff0c\u8bf7\u6b63\u786e\u5b89\u88c5Uplay\u3002\r\n\u9519\u8bef\u4fe1\u606f\uff1a"+e)}try{var o=new XMLHttpRequest;o.open("HEAD","https://r6sground.cn/",!0),o.withCredentials=!1,o.send(),o.onreadystatechange=function(){if(4==o.readyState)return o.status>=200&&o.status<300?(o.getResponseHeader("appver"),localStorage.appver,localStorage.appver=o.getResponseHeader("appver"),nowsetp=1,void Ffresh()):(Fstatus="error",void Ffresh())}}catch(e){return Fstatus="error",Ffresh(),void alert("\u68c0\u67e5\u66f4\u65b0\u65f6\u51fa\u9519\r\n\u9519\u8bef\u4fe1\u606f\uff1a"+e)}}),window.opLog.push("\u5168\u90e8\u7ec4\u4ef6\u6210\u529f\u52a0\u8f7d")}catch(e){return window.PROmotionOnError(e),Fstatus="error",void Ffresh()}}else if(1==nowsetp){var Dataxhr=new XMLHttpRequest;Dataxhr.open("HEAD","https://promotion.r6sground.cn/handshake",!0),Dataxhr.withCredentials=!1,Dataxhr.send(),Dataxhr.onreadystatechange=function(){if(4==Dataxhr.readyState)return Dataxhr.status>=200&&Dataxhr.status<300&&"done"==Dataxhr.getResponseHeader("handshake")?(window.opLog.push("\u4e0ePROmotion\u5b8c\u6210\u63e1\u624b"),nowsetp=2,void Ffresh()):(Fstatus="error",void Ffresh())}}else if(2==nowsetp){var _Dataxhr=new XMLHttpRequest;_Dataxhr.open("GET","https://r6sground.cn/r6sg-app/api/playerinfo/",!0),_Dataxhr.withCredentials=!0,_Dataxhr.send(),_Dataxhr.onreadystatechange=function(){try{if(4==_Dataxhr.readyState){if(_Dataxhr.status>=200&&_Dataxhr.status<300){try{var e=JSON.parse(_Dataxhr.responseText);if(window.userinfo=e,0==e.user_ID){try{document.getElementsByTagName("header")[0].style.display="none",document.getElementsByTagName("aside")[0].style.display="none"}catch(e){}return void window.Fthis.props.history.replace("/account/settings/?goback=/App/R6BOX/setup")}if(36==e.ProfileID.length&&1==e.authentication){window.opLog.push("\u5f53\u524d\u7528\u6237\u662f"+e.LastUsernameOnPlatform);var t=0;try{fs.accessSync(window.globalConfig.UplayInstallLocation.replace("\\","\\\\")+"savegames\\"+window.userinfo.ProfileID+"\\1843",fs.F_OK),t="steam"}catch(e){}try{fs.accessSync(window.globalConfig.UplayInstallLocation.replace("\\","\\\\")+"savegames\\"+window.userinfo.ProfileID+"\\635",fs.F_OK),t="uplay"}catch(e){}return 0==t?(alert("\u65e0\u6cd5\u5224\u5b9a\u6e38\u620f\u662fSteam\u7248\u8fd8\u662fUplay\u7248\r\n\u76ee\u524d\u5df2\u5c06\u5e73\u53f0\u8bbe\u7f6e\u4e3aSteam"),t="steam"):(window.globalConfig.ProgrammePlatformType=t,window.opLog.push("\u5f53\u524d\u7248\u672c\u662f"+window.globalConfig.ProgrammePlatformType)),nowsetp=3,void Ffresh()}return void window.Fthis.props.history.replace("/account/settings/uplay?goback=/App/R6BOX/setup")}catch(e){window.PROmotionOnError(error)}return Fstatus="error",void Ffresh()}return window.PROmotionOnError(error),Fstatus="error",void Ffresh()}}catch(e){window.PROmotionOnError(e)}}}else if(3==nowsetp){var _Dataxhr2=new XMLHttpRequest;_Dataxhr2.open("POST","https://promotion.r6sground.cn/TicketFetch/",!0),_Dataxhr2.withCredentials=!0,_Dataxhr2.send(),_Dataxhr2.onreadystatechange=function(){if(4==_Dataxhr2.readyState)try{var e=JSON.parse(_Dataxhr2.responseText);if(e.profileId!=window.userinfo.ProfileID)return alert("\u83b7\u53d6\u6388\u6743\u5931\u8d25\r\n\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u4fee\u6539\u4e86Uplay\u5bc6\u7801\uff08\u8bf7\u524d\u5f80\u516d\u53f7\u6218\u573a\u5b98\u7f51\u91cd\u65b0\u7ed1\u5b9aUplay\uff09\uff0c\u5728\u77ed\u65f6\u95f4\u5185\u5f02\u5e38\u7684\u53cd\u590d\u767b\u5f55\uff08\u906d\u5230\u80b2\u78a7\u6682\u65f6\u5c01\u7981\u4fdd\u62a4\uff09\uff0c\u6216\u8005\u662f\u80b2\u78a7\u6216\u8005\u516d\u53f7\u6218\u573a\u7684\u670d\u52a1\u5668\u6682\u65f6\u51fa\u73b0\u4e86\u95ee\u9898\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u6211\u4eec\u65e0\u6cd5\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7ee7\u7eed\u64cd\u4f5c\uff0c\u60a8\u53ef\u4ee5\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002"),console.log("B"),Fstatus="error",void Ffresh();window.opLog.push("Uplay\u9274\u6743\u901a\u8fc7"),console.log(e),window.userTicket="Ubi_v1 t="+e.ticket,window.userinfo.platformType=e.platformType,window.R6PlatformType="Uplay";var t="https://public-ubiservices.ubi.com/v2/profiles?userId="+window.userinfo.ProfileID;window.HAR({url:t,method:"GET",json:!0,timeout:15e3,headers:{"content-type":"application/json",Connection:"keep-alive","Ubi-AppId":"39baebad-39e5-4552-8c25-2c9b919064e2",Authorization:window.userTicket},body:JSON.stringify("")},function(e,t,r){console.log("body"),console.log(r);try{if("undefined"!=typeof t&&200==t.statusCode){for(var o in window.opLog.push("\u4e0e Ubisoft \u7684\u8bd5\u67e5\u8be2\u6210\u529f"),console.log(t),t.body.profiles)if("steam"==t.body.profiles[o].platformType){window.R6PlatformType="Steam",window.opLog.push("\u7528\u6237\u5b58\u5728Steam\u8eab\u4efd\uff0c\u5df2\u6807\u8bb0\u4e3aSteam\u7248R6");break}return nowsetp=4,void Ffresh()}Fstatus="error",Ffresh(),window.Fnotification["info"]({message:"\u80b2\u78a7\u8fd4\u56de\u4e86\u610f\u6599\u4e4b\u5916\u7684\u7ed3\u679c("+t.statusCode+")",description:"\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u4fee\u6539\u4e86Uplay\u5bc6\u7801\uff08\u8bf7\u524d\u5f80\u516d\u53f7\u6218\u573a\u5b98\u7f51\u91cd\u65b0\u7ed1\u5b9aUplay\uff09\uff0c\u5728\u77ed\u65f6\u95f4\u5185\u5f02\u5e38\u7684\u53cd\u590d\u767b\u5f55\uff08\u906d\u5230\u80b2\u78a7\u6682\u65f6\u5c01\u7981\u4fdd\u62a4\uff09\uff0c\u6216\u8005\u662f\u80b2\u78a7\u7684\u670d\u52a1\u5668\u6682\u65f6\u51fa\u73b0\u4e86\u95ee\u9898\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u6211\u4eec\u65e0\u6cd5\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7ee7\u7eed\u64cd\u4f5c\uff0c\u60a8\u53ef\u4ee5\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",duration:30})}catch(e){return window.PROmotionOnError(e),console.warn(e),Fstatus="error",void Ffresh()}})}catch(e){return window.PROmotionOnError(e),console.warn(e),alert("\u83b7\u53d6\u6388\u6743\u65f6\u51fa\u9519\r\n\u9519\u8bef\u4fe1\u606f\uff1a"+e),Fstatus="error",void Ffresh()}}}else if(4==nowsetp)try{try{document.getElementsByTagName("header")[0].style.display=""}catch(e){window.PROmotionOnError(e)}try{document.getElementsByTagName("aside")[0].style.display=""}catch(e){window.PROmotionOnError(e)}window.isApp=!0,window.Fthis.props.history.replace("/App/R6BOX"),window.opLog.push("\u751f\u6210\u4e3b\u754c\u9762")}catch(e){return window.PROmotionOnError(e),alert("\u5185\u90e8\u9519\u8bef\u3002\r\n\u9519\u8bef\u4fe1\u606f\uff1a"+err),Fstatus="error",void Ffresh()}}var nowsetp=0,Fstatus="process",ServiceList=function(e){function t(e){var r;return(0,_classCallCheck2.default)(this,t),r=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(t).call(this,e)),r.state={services:[{}],view:"type_a"},r}return(0,_inherits2.default)(t,e),(0,_createClass2.default)(t,[{key:"componentDidMount",value:function(){Ffresh()}},{key:"render",value:function(){console.log(nowsetp),window.Fthis=this,window.Fnotification=_notification2.default;try{document.getElementsByTagName("header")[0].style.display="none",document.getElementsByTagName("aside")[0].style.display="none"}catch(e){}var e=(window.innerHeight-64-500)/2;e<10?e="0px":e+="px";var t=(window.innerWidth-64-500)/2;t<10?t="0px":t+="px";var r=e+" "+t;console.log(r);var o={0:void 0,1:void 0,2:void 0,3:void 0,4:void 0};return"error"!=Fstatus&&(o[nowsetp]=_react.default.createElement(_icon.default,{type:"loading"})),_react.default.createElement("div",{style:{padding:r,overflow:"auto",WebkitAppRegion:"drag","-webkit-user-select":"none"}},_react.default.createElement(_steps.default,{direction:"vertical",current:nowsetp,status:Fstatus},_react.default.createElement(Step,{title:"\u73af\u5883\u68c0\u67e5",description:"\u786e\u4fdd\u5f53\u524d\u8f6f\u4ef6\u7248\u672c\u53ef\u7528",icon:o[0]}),_react.default.createElement(Step,{title:"\u8fde\u63a5\u5230\u516d\u53f7\u6218\u573a",description:"\u68c0\u67e5\u516d\u53f7\u6218\u573a\u670d\u52a1\u5668\u72b6\u6001",icon:o[1]}),_react.default.createElement(Step,{title:"\u767b\u5f55 \u516d\u53f7\u6218\u573a",description:"\u662f\u5426\u7ed1\u5b9a\u4e86 Uplay \u8d26\u6237",icon:o[2]}),_react.default.createElement(Step,{title:"\u767b\u5f55 Ubisoft",description:"\u5c1d\u8bd5\u8fde\u63a5\u80b2\u78a7\u6570\u636e\u670d\u52a1\u5668",icon:o[3]}),_react.default.createElement(Step,{title:"\u542f\u52a8\u8f6f\u4ef6",description:"\u6700\u540e\u7684\u51c6\u5907",icon:o[4]})),_react.default.createElement(_button.default,{type:"danger",block:!0,style:{WebkitAppRegion:"no-drag"},onClick:function(){window.close()}},"\u653e\u5f03\u542f\u52a8"))}},{key:"componentDidUpdate",value:function(){}}]),t}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);