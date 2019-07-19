/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	$('#loginButton').on('click', function (e) {
	    login();
	});

	//清空帐密cookie
	function clearCookie() {
	    var dateStr = new Date(0).toUTCString();
	    document.cookie = 'loginName=0;expires=' + dateStr;
	    document.cookie = 'password=0;expires=' + dateStr;
	}

	var isLogining = '0';
	function login() {
    debugger;
	    if (isLogining == '1') {
	        return;
	    }
	    isLogining = '1';
	    if (loginValidatioin()) {
	        var layerWaitingIndex = layer.load();
	        var param = getLoginParam();
	        var password = $("#password").val();
	        var loginName = $("#loginName").val();
	        setMaxDigits(130); //设置数值数据的长度,要在new RSAKeyPair()之前使用
	        var encryptPublicKey = new RSAKeyPair(param.publicExponent, "", param.modulus); // 加密公钥
	        var passText = encryptedString(encryptPublicKey, encodeURIComponent(password));
	        var body = { "loginName": loginName, "password": passText, "token": param.token };
	        $.ajax({
	            type: "POST",
	            url: Constant.SERVER_ROOT + '/pttlCrm/login/loginIn',
	            dataType: "json",
	            data: body,
	            success: function success(data) {
	                layer.close(layerWaitingIndex);
	                if (data.loginFlag) {
	                    //登录成功缓存菜单
	                    cacheSystemMenu(data.listMenu);
	                    var loginUrl = Constant.LOCAL_SERVER_ROOT + '/pttlCrm/res/index.html';
	                    if ('' + Constant.LOCAL_SERVER_ROOT == "http://localhost:3000") {
	                        loginUrl = '' + Constant.LOCAL_SERVER_ROOT;
	                    }
	                    if (isPC()) {
	                        $.ajax({ type: "POST", url: Constant.SERVER_ROOT + '/pttlCrm/login/addPcLoginLog' });
	                    }

	                    $.ajax({ type: "POST",
	                        url: Constant.PTDATASHOW_SERVER_ROOT + '/login/crmLogin',
	                        dataType: "json",
	                        data: { "filter_userId": loginName, "encoder": data.encoder }
	                    });

	                    window.location.href = loginUrl;
	                } else {
	                    var message = "用戶名或密码错误或者登陆超时！";
	                    if (typeof data.message != "undefined" && typeof data.message != "null") {
	                        message = data.message;
	                    }
	                    layer.open({
	                        icon: 2,
	                        title: '信息',
	                        content: message
	                    });
	                    setTimeout(function () {
	                        window.location.reload();
	                    }, 2000);
	                }
	                isLogining = '0';
	                //清空帐密cookie
	                clearCookie();
	            },
	            error: function error(data) {
	                layer.close(layerWaitingIndex);
	                layer.open({
	                    icon: 2,
	                    title: '信息',
	                    content: 'get data error'
	                });
	                isLogining = '0';
	                //清空帐密cookie
	                clearCookie();
	            }
	        });
	    } else {
	        isLogining = '0';
	    }
	}
	$(document).ready(function () {
	    $("body").keydown(function () {
	        if (event.keyCode == "13") {
	            //keyCode=13是回车键
	            login();
	        }
	    });
	});
	//校验登录名 密码
	function loginValidatioin() {
	    var name = $("#loginName").val();
	    var p = $("#password").val();
	    if ($.trim(name) == "") {
	        $("#loginName").focus();
	        layer.open({
	            icon: 2,
	            title: '信息',
	            content: '用户名不能为空！'
	        });
	        return false;
	    }
	    if ($.trim(p) == "") {
	        $("#password").focus();
	        layer.open({
	            icon: 2,
	            title: '信息',
	            content: '密码不能为空！'
	        });
	        return false;
	    }
	    return true;
	}

	/** 缓存菜单数据 */
	function cacheSystemMenu(listMenu) {
	    var menuStr = JSON.stringify(listMenu);
	    var listMenuForMobile = encodeURIComponent(menuStr);

	    var storage = window.localStorage;
	    storage.setItem("listMenuForMobile", listMenuForMobile);
	}

	/** 判断调用端 */
	function isPC() {
	    var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
	    return flag;
	}

	$(function () {
	    //loginIsNotOverTime();
	});
	//单位 秒
	var globalI = 0;
	// 单位 秒
	var clearID;
	/**
	 * 设置超时时间
	 */
	function loginIsNotOverTime() {
	    clearID = setInterval(function () {
	        globalI++;
	        if (globalI >= 12 * 5) {
	            //设置超时为5分钟
	            globalI = 0;
	            clearInterval(clearID);
	            var loginHtml = Constant.SERVER_ROOT + '/pttlCrm/login';
	            if ('' + Constant.LOCAL_SERVER_ROOT == "http://localhost:3000") {
	                loginHtml = Constant.LOCAL_SERVER_ROOT + '/page/login/login.html';
	            }
	            window.location.href = loginHtml;
	        }
	    }, 5000); //1000毫秒
	    $(document).mousemove(function (e) {
	        globalI = 0;
	    });
	    $(document).keypress(function (e) {
	        globalI = 0;
	    });
	}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USERNAME = exports.USERNAME = ''; //用户名
	var MENU_MOUNT = exports.MENU_MOUNT = '#clientMenu'; //菜单挂载点
	var MAIN_MOUNT = exports.MAIN_MOUNT = '#mainContainer'; //index主容器挂载位置
	var HEADER_MOUNT = exports.HEADER_MOUNT = '#brandHeader'; //挂载头位置
	var FIRST_LEVEL_IFRAME_NAME = exports.FIRST_LEVEL_IFRAME_NAME = 'firstLevelIframeContainer'; //一级页面挂载位置
	var SECOND_LEVEL_IFRAME_NAME = exports.SECOND_LEVEL_IFRAME_NAME = 'sencondLevelIframeContainer'; //二级页面挂载位置
	var MAIN_MENU_MOUNT = exports.MAIN_MENU_MOUNT = '#menu'; //首页挂载位置
	var MAIN_MENU_OPEN_STATUS = exports.MAIN_MENU_OPEN_STATUS = true; //首页菜单，默认打开状态
	var MENU_NAVIGATOR = exports.MENU_NAVIGATOR = '#menuNavigator'; //头部导航菜单
	var USERNAMEANDENCODER = exports.USERNAMEANDENCODER = 'USERNAMEANDENCODER';

	var SYSTEM_MENU = exports.SYSTEM_MENU = "";
	var SYSTEM_MOBILE_MENU = exports.SYSTEM_MOBILE_MENU = "";
	var CURRENT_USER = exports.CURRENT_USER = "";

	//本地
	//export const SERVER_ROOT = 'http://192.168.1.223:8080'; //服务端根路径
	//export const LOCAL_SERVER_ROOT = 'http://localhost:3000'; //本地服务端根路径
	//export const PTDATASHOW_SERVER_ROOT = 'http://192.168.1.224:8080/ptDataShow';

	//UAT/SIT
	//export const SERVER_ROOT = 'http://192.168.1.224:8080'; //服务端根路径
	//export const LOCAL_SERVER_ROOT = 'http://192.168.1.224:8080'; //本地服务端根路径
	//export const PTDATASHOW_SERVER_ROOT = 'http://192.168.1.224:8080/ptDataShow';

	//生产 nginx
	//export const SERVER_ROOT = 'http://192.168.220.82:8080'; //服务端根路径
	//export const LOCAL_SERVER_ROOT = 'http://192.168.220.82:8080'; //本地服务端根路径
	//export const PTDATASHOW_SERVER_ROOT = 'http://192.168.1.202/ptDataShow';

	//生产 228
	var SERVER_ROOT = exports.SERVER_ROOT = ''; //服务端根路径
	var LOCAL_SERVER_ROOT = exports.LOCAL_SERVER_ROOT = ''; //本地服务端根路径
	var PTDATASHOW_SERVER_ROOT = exports.PTDATASHOW_SERVER_ROOT = 'http://192.168.220.82:8080/ptDataShow';

	// var _dgt = _dgt || [];
	// window._dgt = _dgt;
	// (function () {
	//     _dgt.push(['setSiteId', '4f81f635b5871938']);
	//     var d = document, g = d.createElement('script'),
	//     s = d.getElementsByTagName('script')[0];
	//     g.type = 'text/javascript'; g.async = true;g.defer = true;
	//     g.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'shujike.cn/dgt.js';
	//     s.parentNode.insertBefore(g, s);
	// })();

/***/ })
/******/ ]);
//# sourceMappingURL=login.map