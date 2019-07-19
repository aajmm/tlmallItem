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

	var _header = __webpack_require__(62);

	var header = _interopRequireWildcard(_header);

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _report = __webpack_require__(63);

	var report = _interopRequireWildcard(_report);

	var _sign = __webpack_require__(68);

	var sign = _interopRequireWildcard(_sign);

	var _signOut = __webpack_require__(69);

	var signOut = _interopRequireWildcard(_signOut);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	$(document).ready(function () {
	    window.receiveMsg = function (data) {
	        iframeUtils.showSecondIframe();
	        loadPage(data);
	    };
	    function loadPage(data) {
	        header.load(data);
	        var typeName = data.typeName;
	        var eleMenus = $("#signOrReportPop li a").unbind().bind("click", function (event) {
	            var target = event.target;
	            var query = this.href.split("?")[1];
	            var title = target.textContent;
	            var clickType = data.clickType;
	            $(this).parent().addClass("z-act");
	            $(this).parent().siblings().removeClass("z-act");
	            if (clickType != null && typeof clickType != "undefined" && clickType.length == 3) {
	                switch (title) {
	                    case '签到':
	                        sign.load(data);
	                        break;
	                    case '签出':
	                        signOut.load(data);
	                        break;
	                    case '报告':
	                        report.load(data);
	                    default:
	                        break;
	                }
	            }
	            return;
	        });
	        //默认样式样式
	        $("#header .sign li").each(function () {
	            if ($(this).attr("val") == typeName) {
	                $(this).addClass("z-act");
	                $(this).siblings().removeClass("z-act");
	                return false;
	            }
	        });
	        //初始化执行的函数
	        if (typeName == "签到") {
	            sign.load(data);
	        } else if (typeName == "签出") {
	            signOut.load(data);
	        } else {
	            //报告
	            report.load(data);
	        }
	    }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.confirm = exports.waitingClose = exports.waitingOpen = exports.error = exports.success = exports.info = exports.layer = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

	var _dataUtils = __webpack_require__(4);

	var dataUtils = _interopRequireWildcard(_dataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var layer = exports.layer = commonUtils.getTopWin().layer;
	/**
	 * 提示
	 * @param {*} str 
	 */
	var info = exports.info = function info(str, obj) {
	    var time = 0;
	    var offset = 't';
	    var shade = 0.3;
	    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
	        if (obj.time) {
	            time = obj.time;
	        }
	        if (obj.offset) {
	            offset = obj.offset;
	        }
	        if (typeof obj.shade != 'undefined') {
	            shade = obj.shade;
	        }
	    }
	    layer.open({
	        icon: 0,
	        title: '信息',
	        content: str,
	        time: time,
	        offset: offset,
	        shade: shade
	    });
	};

	/**
	 * 
	 * @param {*成功} str 
	 */
	var success = exports.success = function success(str, obj) {
	    var time = 0;
	    var offset = 't';
	    var shade = 0;
	    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
	        if (obj.time) {
	            time = obj.time;
	        }
	        if (obj.offset) {
	            offset = obj.offset;
	        }
	        if (typeof obj.shade != 'undefined') {
	            shade = obj.shade;
	        }
	    }
	    layer.open({
	        icon: 1,
	        title: '信息',
	        content: str,
	        time: time,
	        offset: offset,
	        shade: shade
	    });
	};
	/**
	 * 失败
	 * @param {*} str 
	 */
	var error = exports.error = function error(str, obj) {
	    var time = 0;
	    var offset = 'auto';
	    var shade = 0.3;
	    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
	        if (obj.time) {
	            time = obj.time;
	        }
	        if (obj.offset) {
	            offset = obj.offset;
	        }
	        if (typeof obj.shade != 'undefined') {
	            shade = obj.shade;
	        }
	    }
	    layer.open({
	        icon: 2,
	        title: '信息',
	        content: str,
	        time: time,
	        offset: offset,
	        shade: shade
	    });
	};

	/**
	 * 加载数据层打开
	 */
	var layerWaitingIndex;
	var waitingOpen = exports.waitingOpen = function waitingOpen(code) {
	    var c = 0;
	    if (code) {
	        c = parseInt(code);
	    }
	    if (!layer) {
	        layerWaitingIndex = window.layer.load(c);
	    } else {
	        layerWaitingIndex = layer.load(c);
	        commonUtils.getTopWin().document.documentElement.classList.add('loading');
	    }
	    dataUtils.setTopWindowData("loading", "loading");
	};
	/**
	 * 加载数据层关闭
	 */
	var waitingClose = exports.waitingClose = function waitingClose() {
	    if (!layer) {
	        window.layer.close(layerWaitingIndex);
	    } else {
	        layer.close(layerWaitingIndex);
	        commonUtils.getTopWin().document.documentElement.classList.remove('loading');
	    }
	    dataUtils.clearTopWindowData("loading");
	};

	/**
	 * 删除
	 * @param {*} callBack 
	 * @param {*} str 
	 */
	var confirm = exports.confirm = function confirm(callBack, str, title) {
	    var infos = "确定删除？删除后数据无法恢复！";
	    if (str) {
	        infos = str;
	    }
	    var titles = "删除";
	    if (title) {
	        titles = title;
	    }
	    if (!layer) {
	        window.layer.confirm(infos, { icon: 3, title: titles }, function (index) {
	            if (callBack && typeof callBack == "function") {
	                callBack();
	            }
	            layer.close(index);
	        });
	    } else {
	        layer.confirm(infos, { icon: 3, title: titles }, function (index) {
	            if (callBack && typeof callBack == "function") {
	                callBack();
	            }
	            layer.close(index);
	        });
	    }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.closeMenu = exports.openMenu = exports.getTopWin = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	try {
	    window.getTopWin = function () {
	        //    if(window.parent){
	        //         return window.parent;
	        //     }else{
	        //         return window;
	        //     }
	        return top;
	    };
	} catch (e) {
	    console.warn('\u6B63\u5C1D\u8BD5\u4FEE\u6539window\u4E0B\u4E0D\u53EF\u6539\u7684getTopWin\uFF0C\u9519\u8BEF\u4E3A\uFF1A' + e);
	}

	/**
	 * @description 获取顶层窗口
	 */
	var getTopWin = exports.getTopWin = function getTopWin() {
	    return window.getTopWin();
	};

	var openMenu = exports.openMenu = function openMenu() {
	    var topWin = getTopWin();
	    topWin.$('.main-container .sidebar-container').show();
	    topWin.$('#sidebarGroove').removeClass("sidebar-groovee");
	    topWin.$('#sidebarGroove').addClass("sidebar-groove");
	    //topWin.$('.main-container').css('margin-left', '0');
	    //topWin.$('#contentContainer').css('flex', '0 1 89%');2
	};

	var closeMenu = exports.closeMenu = function closeMenu() {
	    var topWin = getTopWin();
	    topWin.$('.main-container .sidebar-container').hide();
	    topWin.$('#sidebarGroove').removeClass("sidebar-groove");
	    topWin.$('#sidebarGroove').addClass("sidebar-groovee");
	    //topWin.$('.main-container').css('margin-left', '-11%');
	    //topWin.$('#contentContainer').css('flex', '0 1 100%');
	};

/***/ }),
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearIframe = exports.clearAllData = exports.getTopWindowData = exports.clearTopWindowData = exports.setTopWindowData = exports.topWindow = undefined;

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * 跨页面存取值
	 */
	var topWindow = exports.topWindow = commonUtils.getTopWin().document;

	var $parent = commonUtils.getTopWin().$;

	/**
	 * 存值
	 * @param {*} key 
	 * @param {*} obj 
	 */
	var setTopWindowData = exports.setTopWindowData = function setTopWindowData(key, obj) {
	    if ($parent) {
	        if (key && obj) {
	            $parent(topWindow).find("#contentContainer").data(key, obj);
	        }
	    }
	};

	/**
	 * 清空
	 * @param {*} key 
	 */
	var clearTopWindowData = exports.clearTopWindowData = function clearTopWindowData(key) {
	    if ($parent) {
	        if (key) {
	            $parent(topWindow).find("#contentContainer").data(key, "");
	        }
	    }
	};

	/**
	 * 取值
	 * @param {*} key 
	 */
	var getTopWindowData = exports.getTopWindowData = function getTopWindowData(key) {
	    if ($parent) {
	        if (key) {
	            return $parent(topWindow).find("#contentContainer").data(key);
	        }
	    } else {
	        return "";
	    }
	};

	/**
	 * 清除所有
	 */
	var clearAllData = exports.clearAllData = function clearAllData() {
	    if ($parent) {
	        var userInfoEncoder = getTopWindowData("USERNAMEANDENCODER");
	        $parent(topWindow).find("#contentContainer").removeData();
	        setTopWindowData("USERNAMEANDENCODER", userInfoEncoder);
	    }
	};

	/**
	 * 
	 * @param {*清理iframe} id 
	 */
	var clearIframe = exports.clearIframe = function clearIframe(id) {
	    var jId = "sencondLevelIframeContainer"; //
	    if (id && typeof id == 'string') {
	        jId = id;
	    }
	    doClearIframe(jId);
	};
	function doClearIframe(id) {
	    $parent(topWindow).find("iframe[name='" + id + "']").attr("src", "about:blank");
	    $parent(topWindow).find("iframe[name='" + id + "']").remove();
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.submitExcleGlobal = exports.sendAjax = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _objectUtil = __webpack_require__(6);

	var objextUtil = _interopRequireWildcard(_objectUtil);

	var _page = __webpack_require__(7);

	var page = _interopRequireWildcard(_page);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * ajax进行封装
	 * @param {*} service 请求路劲  类的命名空间+"/"+方法名的命名空间
	 * @param {*} body    请求参数，如果有分页需要添加分页参数
	 * @param {*} pageDivId 分页的div
	 * @param {*} callback 回调函数
	 * @param {*} Fn       当前需要分页的函数
	 */
	var sendAjax = exports.sendAjax = function sendAjax(service, body, pageDivId, callback, Fn) {
		var param = void 0;
		if (body == null) {
			param = new Object();
		} else {
			if (typeof body.pageNum == "undefined" && typeof body.pageSize == "undefined") {
				//没有分页
			} else {
				if (typeof body.pageNum != "undefined" && (typeof body.pageSize == "undefined" || body.pageSize == null)) {
					alert("分页参数错误，请检查！");
					return;
				} else if ((typeof body.pageNum == "undefined" || body.pageNum == null) && typeof body.pageSize != "undefined") {
					alert("分页参数错误，请检查！");
					return;
				}
			}
			param = getJsonString(objextUtil.clone(body)); //保留原来的  克隆一个提交参数
		}
		if (layerUtils.layer) {
			layerUtils.waitingOpen(); //打开加载层
		}
		$.ajax({
			type: 'POST',
			url: Constant.SERVER_ROOT + '/pttlCrm/' + service,
			data: param,
			dataType: 'json',
			success: function success(result) {
				if (layerUtils.layer) {
					layerUtils.waitingClose(); //关闭加载层
				}
				if (null != result && typeof result.isHaveSession == "string" && result.isHaveSession == "no") {
					//没有登陆信息  跳转到登陆页面
					//alert("用户未登陆，或者登陆超时，请重新登陆！");
					var loginHtml = Constant.SERVER_ROOT + '/pttlCrm/login';
					if ('' + Constant.LOCAL_SERVER_ROOT == "http://localhost:3000") {
						loginHtml = Constant.LOCAL_SERVER_ROOT + '/page/login/login.html';
					}
					window.location.href = loginHtml;
				} else if (null != result && typeof result.Error == "string") {
					layerUtils.info(result.Error);
				} else {
					if (callback) {
						callback(result);
					}
					//是否存在分页
					if (typeof pageDivId != "undefined" && pageDivId != null && pageDivId != "") {
						page.page({ fn: Fn, page: result.page, pageId: pageDivId });
					}
				}
			},
			error: function error(e) {
				if (layerUtils.layer) {
					layerUtils.waitingClose(); //关闭加载层
				}
				//console.error(e);
			}
		});
	};
	//参数中的对象 转为 json字符串
	function getJsonString(body) {
		for (var key in body) {
			if (_typeof(body[key]) == "object" || typeof body[key] == "function") {
				if (body[key] instanceof Function || body[key] instanceof Date) {
					//body[key] = "";
					delete body[key];
				} else {
					body[key] = JSON.stringify(body[key]);
				}
			} else if (typeof body[key] == "string") {
				body[key] = StringUtils.wrongCharacter(body[key]);
			}
		}
		return body;
	}

	/**
	 * 获取项目根目录
	 * @returns
	 */
	function getRootPath() {
		// 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
		var curWwwPath = window.document.location.href;
		// 获取主机地址之后的目录，如： uimcardprj/meun.jsp
		var pathName = window.document.location.pathname;
		var pos = curWwwPath.indexOf(pathName);
		// 获取主机地址，如： http://localhost:8083
		var localhostPaht = curWwwPath.substring(0, pos);
		// 获取带"/"的项目名，如：/uimcardprj
		var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
		return localhostPaht + projectName;
	}

	/**
	 * 提交form
	 * @param service
	 * @param obj
	 */
	var submitExcleGlobal = exports.submitExcleGlobal = function submitExcleGlobal(service, obj, method, enctype) {
		layerUtils.confirm(function () {
			var $form = $("#submitExcelGlobal");
			var type = "get";
			var enctypeHtml = "";
			if (method && typeof method == "string") {
				type = method;
			}
			/*if(enctype){
	  	enctypeHtml = 'enctype="application/json"';
	  }*/
			service = Constant.SERVER_ROOT + '/pttlCrm/' + service;
			if ($form && $form.length == 0) {
				var form = '<form action="' + service + '" method="' + type + '" id="submitExcelGlobal" ' + enctypeHtml + ' target="iframeGloable">';
				form += '</form>';
				form += '<iframe name="iframeGloable" id="iframeGloable" style="display:none"></iframe>';
				$("body").append(form);
			}
			var inputHtml = "";
			if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
				for (var key in obj) {
					inputHtml += '<input type="hidden" name="' + key + '" value=\'' + obj[key] + '\'/>';
				}
			}
			$("#submitExcelGlobal").html(inputHtml);
			$("#submitExcelGlobal").submit();
		}, "敏感数据，不许外传！", "提示信息");
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 
	 * @param {*克隆一个对象} obj 
	 */
	var clone = exports.clone = function clone(obj) {
		var o = void 0;
		switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
			case 'undefined':
				break;
			case 'string':
				o = obj + '';break;
			case 'number':
				o = obj - 0;break;
			case 'boolean':
				o = obj;break;
			case 'object':
				if (obj === null) {
					o = null;
				} else {
					if (obj instanceof Array) {
						o = [];
						for (var i = 0, len = obj.length; i < len; i++) {
							o.push(clone(obj[i]));
						}
					} else {
						o = {};
						for (var k in obj) {
							o[k] = clone(obj[k]);
						}
					}
				}
				break;
			default:
				o = obj;break;
		}
		return o;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 分页
	 * fn查询列表的函数  page分页参数  pageId分页的div的id
	 * @param {*{fn:doAction,page:data.page,pageId:"orderPage"};} data 
	 */
	var page = exports.page = function page(data) {
	    var commpnPage = $("#" + data.pageId).parent().hasClass("commpnPage");
	    if (!commpnPage) {
	        $("#" + data.pageId).wrap("<div class='commpnPage'></div>");
	    }
	    $("#" + data.pageId).css("width", "100%");
	    inintPage(data);
	};

	/**
	 * 分页
	 * @param {*} page 
	 */
	function inintPage(data) {
	    var page = data.page;
	    var pageCount = page.pageCount; //总页数
	    var currentPage = page.pageNum; //当前页码
	    var totalCount = page.totalCount; //总记录条数
	    if (totalCount == 0) {
	        $("#" + data.pageId).html("");
	        return;
	    }
	    var pageSize = page.pageSize;
	    var fn = data.fn;
	    if (!pageSize) {
	        pageSize = 10;
	    }
	    var pageHtml = "<li class='skip skip_count'><span>共" + pageCount + "页</span><span>到第</span><input type='number' class='skip-num' min='1'/><span>页</span></li>";
	    pageHtml += "<li class='skip_right_goto' val='" + pageCount + "' val1='" + pageSize + "'><a class='skip-right-icon'></a></li>";
	    var options = {
	        bootstrapMajorVersion: 2, //版本
	        currentPage: currentPage, //当前页数
	        numberOfPages: 5, //显示页码数标个数
	        totalPages: pageCount, //总页数
	        //图标的更改显示可以在这里修改。
	        itemTexts: function itemTexts(type, page, current) {
	            switch (type) {
	                case "first":
	                    return "<<"; //"";
	                case "prev":
	                    return "<";
	                case "next":
	                    return ">";
	                case "last":
	                    return ">>";
	                case "page":
	                    return page;
	            }
	        }, //点击事件，用于通过Ajax来刷新整个list列表
	        onPageClicked: function onPageClicked(event, originalEvent, type, page) {
	            //单击当前页码触发的事件。若需要与后台发生交互事件可在此通过ajax操作。page为目标页数。
	            if (fn) {
	                fn(pageSize, page);
	            }
	        },
	        pageHtml: pageHtml
	    };
	    $('#' + data.pageId).bootstrapPaginator(options);
	    var liCount = $('#' + data.pageId + " li.skip_right_goto");
	    if (typeof liCount != "undefined" && liCount.length > 0) {
	        $('#' + data.pageId + " li.skip_right_goto").unbind("click").on("click", function (e) {
	            gotoPageNum(this, data.pageId, fn);
	        });
	    }
	}
	/**
	 * 跳转到第几页
	 */
	function gotoPageNum(obj, pageId, fn) {
	    var pageCount = $(obj).attr("val");
	    var pageNum = $('#' + pageId + " li.skip_count input.skip-num").val();
	    if (null != pageNum && pageNum != "" && isNumber(pageNum) && pageNum >= 0) {
	        pageNum = parseInt(pageNum);
	        if (parseInt(pageNum) > parseInt(pageCount)) {
	            pageNum = pageCount;
	        }
	    } else {
	        $('#' + pageId + " li.skip_count input.skip-num").val("");
	        return;
	    }
	    if (fn) {
	        var pageSize = $(obj).attr("val1");
	        if (null == pageSize || pageSize == "") {
	            pageSize = 10;
	        }
	        fn(parseInt(pageSize), pageNum);
	    }
	}
	/**
	 * 判断数值类型，包括整数和浮点数
	 */
	function isNumber(str) {
	    if (isDouble(str) || isInteger(str)) return true;
	    return false;
	}
	/**
	 * 匹配integer
	 */
	function isInteger(str) {
	    if (str == null || str == "") return false;
	    var result = str.match(/^[-\+]?\d+$/);
	    if (result == null) return false;
	    return true;
	}
	/**
	 * 匹配double或float
	 */
	function isDouble(str) {
	    if (str == null || str == "") return false;
	    var result = str.match(/^[-\+]?\d+(\.\d+)?$/);
	    if (result == null) return false;
	    return true;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 如果为null 或者undefind 转为""
	 * @param str
	 * @returns
	 */
	var getValue = exports.getValue = function getValue(str) {
		if (typeof str == "undefined" || null == str || str == "null" || (typeof str === "undefined" ? "undefined" : _typeof(str)) == "object") {
			return "";
		} else {
			return trim(str);
		}
	};
	/**
	 * 去前后空格
	 * @param {*} str
	 */
	function trim(str) {
		if (typeof str != "undefined" && str != null && typeof str == "string") {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		} else if (typeof str == "number") {
			return str;
		} else {
			return "";
		}
	}

	/**
	 * 按照指定的字符串截取  指定字符串的位置到该字符串的最后
	 * @param {} str 
	 * @param {*} splitStr 
	 */
	var getSplitStr = exports.getSplitStr = function getSplitStr(str, splitStr) {
		if (str != null && str != "" && typeof str != "undefined") {
			return str.substring(str.lastIndexOf(splitStr) + 1, str.length);
		} else {
			return "";
		}
	};

	/**
	 * 
	 * @param {*去除非法字符} str 
	 */
	var wrongCharacter = exports.wrongCharacter = function wrongCharacter(str) {
		var strVal = getValue(str);
		strVal = strVal.replace(/\n/g, "ltbrgt"); //回车
		strVal = strVal.replace(/\>/g, "bigDY"); //大于
		strVal = strVal.replace(/\</g, "littleXY"); //小于
		strVal = strVal.replace(/\'/g, "danQM"); //单引号
		strVal = strVal.replace(/\"/g, "doubleQM"); //双引号
		//strVal= strVal.replace(/\s/g,"");//空格
		strVal = strVal.replace(/\;/g, "fenH"); //分号
		strVal = strVal.replace(/\&/g, "@and"); //&
		strVal = strVal.replace(/\javascript/g, ""); //分号
		strVal = strVal.replace(/\jscript/g, ""); //分号
		strVal = strVal.replace(/\vbscript/g, ""); //分号
		strVal = strVal.replace(/\eval/g, ""); //分号
		strVal = strVal.replace(/\\/g, "/"); //反斜杠
		return strVal;
	};

	/**
	 * str等待操作的字符串
	 * replaceStr需要替换的字符串
	 * resultStr需要替换成的字符串
	 * typeStr正则的参数 "g"、"i" 和 "m"
	 * @param {*还原替换的回车} str 
	 * 参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，
	 * 分别用于指定全局匹配、区分大小写的匹配和多行匹配。
	 * ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
	 */
	var globReplace = exports.globReplace = function globReplace(str, replaceStr, resultStr, typeStr) {
		str = getValue(str);
		str = str.replace(/doubleQM/g, "\""); //双引号替换
		str = str.replace(/bigDY/g, ">"); //大于
		str = str.replace(/littleXY/g, "<"); //小于
		str = str.replace(/danQM/g, "'"); //大于
		str = str.replace(/fenH/g, ";"); //分号
		str = str.replace(/@and/g, "&"); //&

		var rStr = "ltbrgt"; //回车  默认替换的
		if (replaceStr && typeof replaceStr == "string") {
			rStr = replaceStr;
		}
		var tStr = "g";
		if (typeStr && typeof typeStr == "string") {
			tStr = typeStr;
		}
		var r = new RegExp(rStr, tStr);
		var rightStr = "\n";
		if (resultStr && typeof resultStr == "string") {
			rightStr = resultStr;
		}
		return str.replace(r, rightStr);
	};
	/**
	 * 将参数转化为对象
	 * @param {} str 
	 * @param {*} splitStr 
	 */
	var stringToObject = exports.stringToObject = function stringToObject(str) {
		if (str != null && str != "" && typeof str != "undefined") {
			var obj = {};
			var params = str.split("&");
			for (var i = 0; i < params.length; i++) {
				var item = params[i].split("=");
				obj[item[0]] = item[1];
			}
			return obj;
		} else {
			return "";
		}
	};

	/**
	 * 分析url中的参数  
	 * 将参数转为对象
	 * @returns {}
	 */
	var getRequestParam = exports.getRequestParam = function getRequestParam() {
		var requestUrl = window.location.href;
		var obj = {};
		if (requestUrl != null && requestUrl != "" && typeof requestUrl != "undefined") {
			var urlArray = requestUrl.split("?");
			if (urlArray.length == 2) {
				var params = urlArray[1].split("&");
				for (var i = 0; i < params.length; i++) {
					var item = params[i].split("=");
					obj[item[0]] = item[1];
				}
			}
		}
		return obj;
	};

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.closeFullScreen = exports.openFullScreen = exports.hideSecondIframe = exports.showSecondIframe = exports._postMsgToIframe = exports.createIframe = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _createIframe(name, targetUrl, mount, data) {
	    var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	    var topWin = commonUtils.getTopWin();
	    if (topWin.frames[name]) {
	        var childrenWin = topWin.frames[name];
	        if (!childrenWin.frameElementUrl) {
	            childrenWin.frameElementUrl = targetUrl;
	            childrenWin.receiveMsg = null;
	            postMsgToIframe(name, data, targetUrl);
	        } else {
	            if (childrenWin.frameElementUrl == targetUrl) {
	                if (force) {
	                    postMsgToIframe(name, data, targetUrl);
	                } else {
	                    postMsgToIframe(name, data);
	                }
	            } else {
	                childrenWin.frameElementUrl = targetUrl;
	                childrenWin.receiveMsg = null;
	                postMsgToIframe(name, data, targetUrl);
	            }
	        }
	    } else {
	        var doc = topWin.document;
	        var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
	        var mountEl = doc.querySelector(mount);

	        var iframe = void 0;
	        try {
	            iframe = document.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
	        } catch (e) {
	            iframe = document.createElement('iframe');
	            iframe.name = name;
	            iframe.src = targetUrl;
	            iframe.classList.add('content-main-region');
	        }
	        if (iframe) {
	            mountEl.appendChild(iframe);
	            iframe.contentWindow.frameElementUrl = targetUrl;
	        }
	        postMsg(name, data);
	    }
	}
	window.createIframe = _createIframe;
	/**
	 * @description 创建iframe
	 * @param {*} name iframe名称
	 * @param {*} targetUrl 目标地址
	 * @param {*} mount 挂载点
	 * @param {*} data 传送数据
	 */
	var createIframe = exports.createIframe = function createIframe(name, targetUrl, mount, data, force) {
	    window.createIframe(name, targetUrl, mount, data, force); //@todo 这个方法务必不能动，否则适配会受到很大影响
	};
	/**
	 * @description 向其他窗口传数据
	 * @param {*} name iframe名称
	 * @param {*} data 传送数据
	 * @param {*} flag 传送iframe对象是否已经DOMContentLoaded加载完毕，如果加载完毕，证明窗口receiveMsg已经装哉进去，可以进行穿入数据
	 */
	function _postMsg(name, data) {
	    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	    var topWin = commonUtils.getTopWin();

	    if (topWin.frames[name] && topWin.frames[name].receiveMsg) {
	        topWin.frames[name].receiveMsg(data);
	        flag = true;
	    }
	    if (!flag) {
	        setTimeout(postMsg.bind(this, name, data, flag), 100);
	    }
	}

	window.postMsg = _postMsg;

	/**
	 * @description 传送数据到指定name的iframe，前提iframe务必有receiveMsg方法
	 * @param {*} name iframe名称
	 * @param {*} data 
	 */
	var _postMsgToIframe = exports._postMsgToIframe = function _postMsgToIframe(name, data, targetUrl) {
	    var topWin = commonUtils.getTopWin();
	    var childWin = topWin.frames[name];
	    if (targetUrl) {
	        childWin.location.href = targetUrl;
	        childWin.frameElementUrl = targetUrl;
	    }
	    postMsg(name, data);
	};

	window.postMsgToIframe = _postMsgToIframe;

	var showSecondIframe = exports.showSecondIframe = function showSecondIframe() {
	    var topWin = commonUtils.getTopWin();
	    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
	        topWin.$('iframe[name^=' + Constant.SECOND_LEVEL_IFRAME_NAME + ']').css('left', '15%');
	        commonUtils.closeMenu();
	    }
	};

	var hideSecondIframe = exports.hideSecondIframe = function hideSecondIframe() {
	    var topWin = commonUtils.getTopWin();
	    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
	        topWin.$('iframe[name^=' + Constant.SECOND_LEVEL_IFRAME_NAME + ']').css('left', '100%');
	        commonUtils.openMenu();
	    }
	};

	var openFullScreen = exports.openFullScreen = function openFullScreen() {
	    var topWin = commonUtils.getTopWin();
	    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
	        topWin.$('iframe[name^=' + Constant.SECOND_LEVEL_IFRAME_NAME + ']').css({ 'left': '0%', 'width': '100%' });
	    }
	};

	var closeFullScreen = exports.closeFullScreen = function closeFullScreen() {
	    var topWin = commonUtils.getTopWin();
	    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
	        topWin.$('iframe[name^=' + Constant.SECOND_LEVEL_IFRAME_NAME + ']').css({ 'left': '15%', 'width': '85%' });
	    }
	};

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.displayImg = exports.Viewer = exports.$parent = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var $parent = exports.$parent = commonUtils.getTopWin().$;
	var Viewer = exports.Viewer = commonUtils.getTopWin().Viewer;

	var displayImg = exports.displayImg = function displayImg(array, index) {
	    var srcArray = [];
	    if (typeof array == 'string') {
	        srcArray.push(array);
	    } else if ((typeof array === 'undefined' ? 'undefined' : _typeof(array)) == 'object') {
	        srcArray = array;
	    }
	    var imgs = '';
	    for (var i in srcArray) {
	        imgs += '<li style="display: none;"><img data-original="' + srcArray[i] + '" src="' + srcArray[i] + '"></li>';
	    }
	    $parent(commonUtils.getTopWin().document).find('.docs-pictures').html(imgs);
	    var viewer = new Viewer(commonUtils.getTopWin().document.getElementById("docs-pictures"), {
	        url: 'data-original'
	    });
	    if (!index) {
	        index = 0;
	    }
	    $parent(commonUtils.getTopWin().document).find("#docs-pictures li:eq(" + index + ") img").click();
	};

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var pushState = exports.pushState = function pushState(href) {
	    if (history.pushState && href) {
	        history.pushState({ title: href }, null, href);
	    } else {
	        console.error("\u786E\u4FDDhistoryManager\u4F20\u5165\u7684href=" + href + "\u662F\u5426\u6B63\u786E");
	    }
	};
	//@todo 浏览器返回前进暂时不考虑
	// var fnHashTrigger = function (target) {
	//     var query = location.href.split("?")[1], eleTarget = target || null;
	//     if (typeof query == "undefined") {
	//         if (eleTarget = eleMenus.get(0)) {
	//             // 如果没有查询字符，则使用第一个导航元素的查询字符内容
	//             history.replaceState(null, document.title, location.href.split("#")[0] + "?" + eleTarget.href.split("?")[1]) + location.hash;
	//             fnHashTrigger(eleTarget);
	//         }
	//     } else {
	//         eleMenus.each(function () {
	//             if (eleTarget === null && this.href.split("?")[1] === query) {
	//                 eleTarget = this;
	//             }
	//         });

	//         if (!eleTarget) {
	//             // 如果查询序列没有对应的导航菜单，去除查询然后执行回调
	//             history.replaceState(null, document.title, location.href.split("?")[0]);
	//             fnHashTrigger();
	//         } else {
	//             $(eleTarget).trigger("click");
	//         }
	//     }
	// };
	// if (history.pushState) {
	//     window.addEventListener("popstate", function () {
	//         fnHashTrigger();
	//     });

	//     // 默认载入
	//     fnHashTrigger();
	// }

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @description brand模块
	 */
	var load = exports.load = function load(data) {
	    doAction(data);
	};

	function doAction(data) {
	    $("#header").html(render(data));
	    if (data.xPlanDate != null) {
	        var xpd = data.xPlanDate.split('/');
	        if (xpd.length == 3) {
	            $("#planDate").html(xpd[2] + "-" + xpd[0] + "-" + xpd[1]);
	        }
	    }
	    $("#planCreateDate").html(data.created);
	    $('#CloseReportPopRoot').unbind().on('click', function () {
	        iframeUtils.hideSecondIframe();
	    });
	}

	function render(data) {
	    var temp = '\n        <h1 class="title" id="headCustomer"></h1>\n        <div class="infors">\n            <span>\u8BA1\u5212\u65F6\u95F4\uFF1A<em id="planDate"></em></span>\n            <span>\u521B\u5EFA\u65E5\u671F\uFF1A<em id="planCreateDate"></em></span>\n        </div>\n        <div id="signOrReportPop" class="m-nav">\n            <ul class="sign">\n                <li val="\u7B7E\u5230"><a href="javascript:;">\u7B7E\u5230</a></li>\n                <li val="\u7B7E\u51FA"><a href="javascript:;">\u7B7E\u51FA</a></li>\n                ' + (data.lastName == "报告" ? '<li class="z-act" val="报告"><a href="javascript:;">报告</a></li>' : "") + '                \n            </ul>\n        </div>\n        <div id="CloseReportPopRoot"></div>\n    ';
	    return temp;
	}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _upload = __webpack_require__(64);

	var upload = _interopRequireWildcard(_upload);

	var _backfill = __webpack_require__(65);

	var backfill = _interopRequireWildcard(_backfill);

	var _report = __webpack_require__(66);

	var report = _interopRequireWildcard(_report);

	var _save = __webpack_require__(67);

	var reportSave = _interopRequireWildcard(_save);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var load = exports.load = function load(data) {
	    $("#body").html(render()); //加载静态页面

	    //删除上传的图片
	    $(".img-box .del").on('click', function () {
	        $(this).parent(".img").remove();
	    });

	    /** 加载标签 */
	    $.ajax({
	        url: Constant.SERVER_ROOT + '/pttlCrm/cust/myReport/getBusinessTagList',
	        data: { rowId: data.row_Id, actionEaiId: data.acitonEaiId },
	        dataType: 'json',
	        type: 'post',
	        success: function success(item) {
	            $("#headCustomer").html(item.customerName);
	            $("#huaweiFDTags").html(getBusinessTags(item.huaweiFDList));
	            $("#huaweiExperienceStoreTags").html(getBusinessTags(item.huaweiExperienceStoreList));
	            $("#huaweiFuseTags").html(getBusinessTags(item.huaweiFuseList));
	            $("#samsungDivisonTags").html(getBusinessTags(item.samsungDivisonList));
	            $("#fenXiaoDivisonTags").html(getBusinessTags(item.fenXiaoDivisonList));
	            $("#otherInforTags").html(getBusinessTags(item.otherInforList));
	            //标签
	            $(".tags-box button").on('click', function () {
	                $(this).toggleClass("activ");
	            });
	        }
	    });

	    $(window).resize(function () {
	        initReportCss();
	    });
	    initReportCss(); //初始化样式
	    if (data.clickType[2] == "false") {
	        //不可用
	        $("#customerReportPopBtnSuccess").remove();
	        $("#customerReportPopBtnPrimary").remove();
	        //关闭
	        $('#CloseReportPopRoot').unbind().on('click', function () {
	            iframeUtils.hideSecondIframe();
	        });
	        $('#customerReportPopBack').unbind().on('click', function () {
	            iframeUtils.hideSecondIframe();
	        });
	        report.load(data, true);
	    } else {
	        if (data.statusR && data.dateR && data.statusR != "草稿" && data.dateR != "") {
	            $("#customerReportPopBtnSuccess").remove(); //移除草稿
	        }
	        $("#ContactAlert").html(getTreeHtml()); //加载树形
	        initFn(data); //初始化数据
	    }
	};
	function initReportCss() {
	    // 输入禁用状态下去掉边框样式
	    $(".lists-one textarea:disabled").parent().css("border", 0);
	    // 动态计算需要滚动内容的高度
	    var popInforsH = $("body").height() - parseInt($(".m-popBox>#header").height()) - parseInt($(".m-popBox>#body").outerHeight() - $(".m-popBox>#body").height());
	    $(".m-popBox>#body>.content>.center").css("max-height", popInforsH);
	    //$(".m-popBox>#body>.content>.center").height(popInforsH);
	}
	function render() {
	    var temp = '\n        <div class="content">\n            <div class="center">\n                <!--\u62A5\u544A-->\n                <div class="m-report-infors">\n                    <div class="content" id="reportContent">\n                        <div class="header clearfix">\n                            <span>\u62DC\u8BBF\u5BF9\u8C61\uFF1A</span>\n                            <input type="text" id="VisitTarget" name="VisitTarget" maxlength=\'50\'/>\n                            <span>\u804C\u52A1\uFF1A</span>\n                            <input type="text" id="TargetPosition" name="TargetPosition" maxlength=\'50\'/>\n                            <span>\u62DC\u8BBF\u65F6\u957F\uFF1A</span>\n                            <select id="VisitTime" name="VisitTime" style="width:120px;height:30px;">\n                                <option value="">--\u8BF7\u9009\u62E9--</option>\n                                <option value="10\u5206\u949F">10\u5206\u949F</option>\n                                <option value="30\u5206\u949F">30\u5206\u949F</option>\n                                <option value="60\u5206\u949F">60\u5206\u949F</option>\n                                <option value="60\u5206\u949F\u4EE5\u4E0A">60\u5206\u949F\u4EE5\u4E0A</option>\n                            </select>\n                            <!--<a href="javascript:;" class="inform-coll">\u4FE1\u606F\u91C7\u96C6</a>-->\n                        </div>\n                        <div class="body clearfix" id="reportImportContent">\n                            <div class="lists-one">\n                                <h6>\u534E\u4E3AFD\u4E1A\u52A1\u4E8B\u4E1A\u90E8</h6>\n                                <textarea name="huaweiFD" id="huaweiFD" autoHeight="true"></textarea>\n                                <div class="tags-box" id="huaweiFDTags"></div>\n                            </div>\n                            <div class="lists-one">\n                                <h6>\u534E\u4E3A\u4F53\u9A8C\u5E97\u4E1A\u52A1\u4E8B\u4E1A\u90E8</h6>\n                                <textarea name="HuaweiExperienceStore" id="HuaweiExperienceStore" autoHeight="true"></textarea>\n                                <div class="tags-box" id="huaweiExperienceStoreTags"></div>\n                            </div>\n                            <div class="lists-one">\n                                <h6>\u878D\u5408\u53CA\u914D\u4EF6\u4E1A\u52A1\u4E8B\u4E1A\u90E8</h6>\n                                <textarea name="HuaweiFuse" id="HuaweiFuse" autoHeight="true"></textarea>\n                                <div class="tags-box" id="huaweiFuseTags"></div>\n                            </div>\n                            <div class="lists-one">\n                                <h6>\u4E09\u661F\u4E1A\u52A1\u4E8B\u4E1A\u90E8</h6>\n                                <textarea name="SamsungDivison" id="SamsungDivison" autoHeight="true"></textarea>\n                                <div class="tags-box" id="samsungDivisonTags"></div>\n                            </div>\n                            <div class="lists-one">\n                                <h6>\u5927\u5BA2\u6237\u4E1A\u52A1\u90E8</h6>\n                                <textarea name="FenXiaoDivison" id="FenXiaoDivison" autoHeight="true"></textarea>\n                                <div class="tags-box" id="fenXiaoDivisonTags"></div>\n                            </div>\n                            <div class="lists-one">\n                                <h6>\u5176\u4ED6\u4FE1\u606F</h6>\n                                <textarea name="OtherInfor" id="OtherInfor" autoHeight="true"></textarea>\n                                <div class="tags-box" id="otherInforTags"></div>\n                            </div>\n\n                            <div class="m-uploading">\n                                <h6 class="title">\u4E0A\u4F20\u7167\u7247</h6>\n                                <div class="imagesBox" style="height:auto;">\n                                    <div class="uploadBtn" id="filePicker"></div>\n                                    <div class="images" id="fileList">\n                                        <!--.temp\u5360\u4F4D\u7528\u7684-->\n                                        <div class="temp"></div>\n                                    </div>\n                                </div>\n                                <a href="javascript:;" class="textBtn"></a>\n                            </div>\n                        \n                            <div class="lists-one lists-one1">\n                                <h6 class="title">\u6C47\u62A5</h6>\n                                <div class="chate-open">\n                                    <a href="javascript:;" id="DisplayContact"><em>+</em>\u9009\u62E9\u5BF9\u8C61</a>\n                                </div>\n                                <div class="chate-box" id="ContactUsers">\n                                    <!-- <span><i class="icon chate-del"></i>\u7956\u5927\u5BFF</span> -->\n                                </div>\n                            </div>\n\n                        </div>\n\n\n                        <div class="footer">\n                            <div class="m-btns m-btns-rd">\n                                <!--\u7981\u7528\u72B6\u6001\uFF0C\u6DFB\u52A0\u7C7B\u540Ddisabled-->\n                                <a href="javascript:;" class="u-btn u-btn-success"\n                                    id="customerReportPopBtnSuccess">\u4FDD\u5B58\u8349\u7A3F</a>\n                                <a href="javascript:;" class="u-btn u-btn-primary"\n                                    id="customerReportPopBtnPrimary">\u786E\u8BA4</a>\n                                <a href="javascript:;" class="u-btn u-btn-default" id="customerReportPopBack">\u8FD4\u56DE</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="m-contact" id="ContactAlert"><span id="dragtop"></span><span id="dragright"></span><span id="dragbottom"></span><span id="dragleft"></span></div>\n    ';
	    return temp;
	}
	function initFn(data) {
	    var dataTemp = data;
	    report.load(data);
	    upload.load(data.acitonEaiId); //row_Id
	    var cWidth = $("#ContactAlert").css("width");
	    var oWidth = $(window).width();
	    $("#ContactAlert").animate({
	        left: oWidth
	    });
	    $("#DisplayContact").click(function () {
	        $("#search-lists").hide();
	        $("#contactSearch").val("");
	        backfill.load();
         /**
	        if (!$("#DisplayContact").hasClass("initFlag")) {
	            $("#DisplayContact").addClass("initFlag");
	            backfill.load();
	        }
          **/
	        $('.m-contact').slideDown();
	        // let flag = $("#ContactAlert").css("right") == 0 ? false : true;
	        var flag = $("#ContactAlert").css("left") == oWidth + "px" ? true : false;
	        if (flag) {
	            $("#ContactAlert").animate({
	                // right: "0px"
	                left: oWidth - parseInt(cWidth) + "px"
	            });
	        } else {
	            return false;
	        }
	    });
	    /* 8、搜索框：
	    * （1）focus:隐藏提示文字
	    * （2）blur:如果有用户输入的内容就隐藏提示问题，否则显示提示文字
	    * （3）搜索内容列表：点击之后隐藏，跳转到相应用户行,添加提示搜索到名称的效果
	    */
	    // 8-(1)(2)
	    $("#ContactAlert .search label").click(function () {
	        $("#ContactAlert .search input").focus();
	    });
	    $("#contactSearch").focus(function () {
	        $(this).siblings("label").hide();
	    }).blur(function () {
	        var flag = $(this).val() == "" ? true : false;
	        if (flag) {
	            $(this).siblings("label").show();
	            $("#search-lists").html("");
	        }
	    });
	    //点击搜索
	    $("#icon-search").on("click", function () {
	        backfill.searchNameList('contactSearch', 'search-lists');
	    });

	    //按回车搜索
	    $("#contactSearch").unbind().keydown(function () {
	        if (event.keyCode == "13") {
	            //keyCode=13是回车键
	            backfill.searchNameList('contactSearch', 'search-lists');
	        }
	    });

	    //关闭
	    $('#CloseReportPopRoot').unbind().on('click', function () {
	        iframeUtils.hideSecondIframe();
	    });
	    $('#customerReportPopBack').unbind().on('click', function () {
	        iframeUtils.hideSecondIframe();
	    });

	    //保存草稿
	    $("#customerReportPopBtnSuccess").unbind().on("click", function () {
	        dataTemp.ReportStatus = "草稿";
	        reportSave.load(dataTemp);
	    });
	    //确认
	    $("#customerReportPopBtnPrimary").unbind().on("click", function () {
	        dataTemp.ReportStatus = "已提交";
	        reportSave.load(dataTemp);
	    });
	}

	function getTreeHtml() {
	    var temp = '\n        <div class="header clearfix">\n            <i class="icon icon-back" id="ContactClose"></i>\n            <div class="search">\n                <input type="text" name="contactSearch" id="contactSearch" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9">\n                <i class="icon icon-search" id="icon-search"></i>\n                <div class="search-lists" id="search-lists">\n                </div>\n            </div>\n        </div>\n        <div class="body">\n            <div class="content" id="contentBody"></div>\n        </div>\n        <div class="footer clearfix"></div>\n    ';
	    return temp;
	}

	function getBusinessTags(list) {
	    var temp = '\n            ' + (list == null ? "" : list.map(function (item) {
	        return '<button class=\'' + (item.isChoose == '1' ? 'activ' : '') + '\'>' + item.name + '</button>';
	    }).join('')) + '\n        ';
	    return temp;
	}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var load = exports.load = function load(row_Id) {
	    upLoadFun(row_Id);
	};

	function upLoadFun(row_Id) {
	    /*
	        1、初始进来：
	        ~如果有图片，且图片多余特定宽度，
	            --隐藏多余图片，显示“更多”；
	            --点击“更多”，显示所有图片，“更多”改为“收回”；
	        ~如果没有上传图片，.textBtn隐藏；
	        
	        2、上传图片：
	        --“收回”隐藏；
	        --上传图片，当.images高度超过file-item高度，就显示“收回”；
	        --点击“收回”，.images高度设置为file-item高度，隐藏多余图片，“收回”改为“更多”；
	          3、“收回”和“更多”点击事件相互切换
	    */
	    var $list = $("#fileList"),
	        $wh = $(".m-upload .file-item img").css('width'),
	        thumbnailWidth = $wh,
	        thumbnailHeight = $wh;
	    var $imagesBoxH = parseInt($(".m-uploading .imagesBox").css("height"));

	    // 初始判断
	    var $imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
	    if ($(".file-item").length == 0) {
	        $(".m-uploading .imagesBox").height("auto");
	    }
	    if (parseInt($(".m-uploading .images").height()) > $imagesH) {
	        console.log("more");
	        $(".m-uploading .textBtn").show().addClass("more").html("更多");
	    } else {
	        $(".m-uploading .textBtn").hide();
	    }

	    // 显示或隐藏上传图片，“更多”和“收回”切换事件
	    $(".m-uploading .textBtn").click(function () {
	        var $this = $(this);
	        if ($this.hasClass('more')) {
	            $this.html("收回").removeClass("more").addClass("less");
	            $this.siblings(".imagesBox").height("auto");
	        } else if ($this.hasClass('less')) {
	            $this.html("更多").removeClass("less").addClass("more");
	            $this.siblings(".imagesBox").height($imagesBoxH);
	        }
	    });

	    // 初始化Web Uploader
	    var uploader = WebUploader.create({

	        // 选完文件后，是否自动上传。
	        auto: true,

	        // swf文件路径
	        swf: './js/lib/webuploader/Uploader.swf',

	        // 文件接收服务端。
	        server: Constant.SERVER_ROOT + "/pttlCrm/sys/file/upload",

	        // 选择文件的按钮。可选。
	        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	        pick: '#filePicker',

	        formData: {
	            roleId: row_Id
	        },
	        // 只允许选择图片文件。
	        accept: {
	            title: 'Images',
	            extensions: 'gif,jpg,jpeg,bmp,png',
	            mimeTypes: 'image/jpg,image/jpeg,image/png'
	        }
	    });

	    /*uploader.on('uploadAccept',function(ret){
	        debugger; 
	        let asdhjak = ret;
	        alert(ret); 
	    });*/
	    uploader.on('uploadSuccess', function (file, response) {
	        $('#' + file.id).find('p.state').text('已上传');
	        var hiddenli = "<div id = \"" + file.id + "_picture\">" + response.rowId + "</div>";
	        $list.append(hiddenli);
	    });

	    // 当有文件添加进来的时候
	    uploader.on('fileQueued', function (file) {
	        var $li = $('<div id="' + file.id + '" class="file-item thumbnail">' + '<img title="' + file.name + '">' + '<div class="info" title="' + file.name + '">' + file.name + '</div>' + '</div>'),
	            $btns = $('<div class="file-panel"><span class="cancel">删除</span></div>').appendTo($li),
	            $img = $li.find('img');

	        // $list为容器jQuery实例
	        $list.append($li);

	        // 创建缩略图
	        // 如果为非图片文件，可以不用调用此方法。
	        // thumbnailWidth x thumbnailHeight 为 100 x 100
	        uploader.makeThumb(file, function (error, src) {
	            if (error) {
	                $img.replaceWith('<span>不能预览</span>');
	                return;
	            }

	            $img.attr('src', src);
	        }, thumbnailWidth, thumbnailHeight);

	        // (禁止删除！)上传图片之后判断
	        var imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
	        if (parseInt($(".m-uploading .images").height()) > imagesH) {
	            $(".m-uploading .imagesBox").height("auto");
	            $(".m-uploading .textBtn").show().addClass("less").html("收回").removeClass("more");
	        } else {
	            $(".m-uploading .textBtn").hide();
	        }

	        $btns.on('click', 'span', function () {
	            var index = $(this).index();
	            switch (index) {
	                case 0:
	                    uploader.removeFile(file, $imagesBoxH);
	                    return;
	            }
	        });
	    });
	    uploader.onFileDequeued = function (file) {
	        removeFile(file, $imagesBoxH);
	    };
	}

	// 负责view的销毁
	function removeFile(file, $imagesBoxH) {
	    console.log($imagesBoxH);
	    var $li = $('#' + file.id);
	    $li.off().find('.file-panel').off().end().remove();
	    var imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
	    console.log(parseInt($(".m-uploading .images").height()));
	    if (parseInt($(".m-uploading .images").height()) > imagesH) {
	        $(".m-uploading .textBtn").show();
	    } else {
	        $(".m-uploading .textBtn").hide();
	    }
	    delFile(file);
	}

	function delFile(file) {
	    $.ajax({
	        url: Constant.SERVER_ROOT + "/pttlCrm/sys/file/delImg",
	        data: { 'rowId': $("#" + file.id + "_picture")[0].innerHTML },
	        dataType: 'json',
	        type: 'get',
	        success: function success(data) {
	            $("#" + file.id + "_picture").remove();
	        },
	        error: function error(e) {
	            console.error(e);
	        }
	    });
		}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.searchNameList = exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * 回填数据
	 * @param {*} data 
	 */
	var load = exports.load = function load() {
	    doAction();
	};
	/**
	 * 搜索
	 * @param {*} id 
	 * @param {*} id2 
	 */
	var searchNameList = exports.searchNameList = function searchNameList(id, id2) {
	    searchName(id, id2);
	};
	//填写数据
	function doAction() {
	    $.ajax({
	        url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerPositonView/getBranch',
	        data: {},
	        dataType: 'json',
	        type: 'post',
	        success: function success(data) {
	            $("#contentBody").html(render(data));
	            $("#ContactClose").unbind("click").click(function () {
	                $('.m-contact').slideUp();
	            });
	            //通讯录高度
	            $("#ContactAlert").height($(window).height());
	            var alertH = $("#ContactAlert").height() - $("#ContactAlert .header").height() - $("#ContactAlert .footer").height() - 22;
	            $("#ContactAlert .body").height(alertH);

	            showSalesMen(); //展开联系人
	        },
	        error: function error(e) {
	            console.error(e);
	        }
	    });
	}
	function render(list) {
	    var temp = '\n        ' + (list == null ? "" : list.map(function (item) {
	        return '\n            <div class="box" id="box_' + item.BRANCHID + '">\n                <div class="title clearfix">\n                    <i class="icon icon-displayArrow"></i>\n                    <i class="img-folder" id="' + item.BRANCHID + '"></i>\n                    <span class="area-name">' + getCustomerName(item.BRANCHNAME) + '</span>\n                </div>\n                <div class="lists">\n                                      \n                </div>\n            </div>\n        ';
	    }).join('')) + '\n    ';
	    return temp;
	}
	function getCustomerName(str) {
	    if (str != null && str != "" && typeof str != "undefined") {
	        return str.substring(str.lastIndexOf("_") + 1, str.length);
	    } else {
	        return "";
	    }
	}

	function showSalesMen() {
	    var empIds = [];
	    $("#ContactUsers span").each(function () {
	        empIds.push($(this).attr("val"));
	    });
	    $("#ContactAlert .box>.title").click(function () {
	        var branchId = $(this).find(".img-folder").attr("id");
	        var $this = $(this);
	        var flag = $this.siblings(".lists").css("display") == "none" ? true : false;
	        if (flag) {
	            $this.parent().addClass("z-act");
	            $this.siblings(".lists").slideDown(400);
	        } else {
	            $this.parent().removeClass("z-act");
	            $this.siblings(".lists").slideUp(400);
	            //$("#box_"+branchId).find(".lists").html("");
	            return;
	        }
	        if ($(this).parent().find("div.lists .lists-one").length > 0) {
	            return;
	        }
	        $.ajax({
	            url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerPositonView/getSaleMan',
	            data: { "branchId": branchId },
	            dataType: 'json',
	            type: 'get',
	            success: function success(data) {
	                $("#box_" + branchId).find(".lists").html(renderName(data[0].salesManList));
	                var urlIcheck = Constant.SERVER_ROOT + '/pttlCrm/res/js/lib/iCheck/js/jquery.icheck.js';
	                if ('' + Constant.LOCAL_SERVER_ROOT == "http://localhost:3000") {
	                    urlIcheck = Constant.LOCAL_SERVER_ROOT + '/js/lib/iCheck/js/jquery.icheck.js';
	                }
	                $.getScript(urlIcheck, function () {
	                    //动态加载js,成功后，并执行回调函数  
	                    setTimeout(function () {
	                        initAlertClick();
	                        for (var i = 0; i < empIds.length; i++) {
	                            var id = empIds[i];
	                            var $checkboxs = $("#box_" + branchId + " input[type='checkbox'][id='id" + id + "']");
	                            if ($checkboxs.length > 0) {
	                                $checkboxs.iCheck('check');
	                            }
	                        }
	                    }, 10);
	                });
	            },
	            error: function error(e) {
	                console.error(e);
	            }
	        });
	    });
	    $("#ContactAlert .box>.title")[0].click(); //点击第一个
	}

	function renderName(list) {
	    var temp = '\n        ' + (list == null ? "" : list.map(function (item) {
	        return '\n            <div class="lists-one">\n                <input type="checkbox" class="primary" id="id' + item.SALESMANID + '" val="' + item.SALESMANID + '" val1="' + item.SALESMANNAME + '">\n                <label for="id' + item.SALESMANID + '"><i class="img-user"></i><span>' + item.SALESMANNAME + '</span></label>\n            </div>\n         ';
	    }).join('')) + '\n    ';
	    return temp;
	}
	//点击确定函数选中的
	function backFillHtml() {
	    var name = [];
	    var id = [];
	    $("#contentBody input[type='checkbox']:checked").each(function (i, obj) {
	        var m = {};
	        m.name = $(obj).attr("val1");
	        m.id = $(obj).attr("val");
	        name.push(m);
	    });
	    //$("#ContactUsers").html(backDiv(name));
	    //delChecked();    
	}
	//重新注册 删除选中的元素
	function delChecked() {
	    $("#ContactUsers i.chate-del").unbind("click").on("click", function () {
	        var val = $(this).attr("val");
	        $(this).parent().remove();
	        var $checkboxs = $("#ContactAlert .body input[type='checkbox'][id='id" + val + "']");
	        $checkboxs.iCheck('uncheck');
	    });
	}
	function backDiv(salasmanName, salasmanId) {
	    var temp = '\n        <span val="' + salasmanId + '" val1="' + salasmanName + '">\n            <i class="icon chate-del" val="' + salasmanId + '"></i>' + salasmanName + '\n        </span> \n    ';
	    return temp;
	}
	//初始化弹出层函数
	function initAlertClick() {
	    /*
	       * 联系人 浮层弹出框
	       * 
	       * (注：checkbox用了iCheck插件，相关点击和判断事件请参考http://www.bootcss.com/p/icheck/)
	       */
	    // 记录确定按钮显示已选中的联系人的个数
	    //let contactSum = $("#ContactAlert .body input[type='checkbox']:checked").length;
	    $("#ContactAlert .body input[type='checkbox']").on('ifChanged', function (event) {
	        var salasmanName = $(this).attr("val1");
	        var salasmanId = $(this).attr("val");
	        if ($(this).is(':checked')) {
	            //选中
	            if ($("#ContactUsers span[val='" + salasmanId + "']").length == 0) {
	                $("#ContactUsers").append(backDiv(salasmanName, salasmanId));
	                delChecked();
	            }
	        } else {
	            //不选中
	            $("#ContactUsers span[val='" + salasmanId + "']").remove();
	        }
	    });

	    // 7(1)确定之后，将已选中的人员按顺序填写到相应框中；如果没有选中任何人，填写为空；
	    /* $("#ContactSure").click(function() {
	        $("#ContactClose").click();
	        backFillHtml();
	    }); */
	}

	//搜索
	function searchName(id, id2) {
	    $("#" + id2).show();
	    var name = $("#" + id).val();
	    if (typeof name != "undefined" && name != null && name != "") {
	        if (name.length < 2) {
	            //alert("请至少输入两个字进行查询！");
	            layerUtils.info("请至少输入两个字进行查询！");
	            return;
	        }
	        $.ajax({
	            url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerPositonView/getSaleMan',
	            data: { name: name },
	            dataType: 'json',
	            type: 'post',
	            success: function success(data) {
	                if (null != data && data.length > 0) {
	                    $("#" + id2).html(renderSearch(data[0].salesManList));
	                    clickSearchA();
	                }
	            },
	            error: function error(e) {
	                console.error(e);
	            }
	        });
	    }
	}
	function renderSearch(list) {
	    var temp = '\n     ' + (list == null ? "" : list.map(function (item) {
	        return '\n            <a href="javascript:;" val="' + item.SALESMANID + '" val1="' + item.SALESMANNAME + '" val2="' + item.BRANCHID + '">\n                ' + item.SALESMANNAME + '<span style="display:inline-block;color:#808281">' + item.BRANCHNAME + '</span>\n            </a>\n        ';
	    }).join('')) + '\n    ';
	    return temp;
	}
	function clickSearchA() {
	    // 8-(3)
	    $("#search-lists a").click(function () {
	        clickSearchBox(this);
	    });
	}

	function clickSearchBox(obj) {
	    var branchId = $(obj).attr("val2");
	    var empIds = [];
	    $("#ContactUsers span").each(function () {
	        empIds.push($(this).attr("val")); //$(this).attr("val2")+":"+
	    });
	    var $this = $("#box_" + branchId + " div.title");
	    var flag = false;
	    if ($this.siblings(".lists").css("display") == "none" || $this.siblings(".lists").css("display") == "undefined") {
	        flag = true;
	    }
	    if (flag) {
	        $this.parent().addClass("z-act");
	        $this.siblings(".lists").slideDown(400);

	        if ($this.parent().find("div.lists .lists-one").length > 0) {
	            clickSearchA1(obj);
	            return;
	        }

	        $.ajax({
	            url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerPositonView/getSaleMan',
	            data: { "branchId": branchId },
	            dataType: 'json',
	            type: 'get',
	            success: function success(data) {
	                $("#box_" + branchId).find(".lists").html(renderName(data[0].salesManList));
	                var urlIcheck = Constant.SERVER_ROOT + '/pttlCrm/res/js/lib/iCheck/js/jquery.icheck.js';
	                if ('' + Constant.LOCAL_SERVER_ROOT == "http://localhost:3000") {
	                    urlIcheck = Constant.LOCAL_SERVER_ROOT + '/js/lib/iCheck/js/jquery.icheck.js';
	                }
	                $.getScript(urlIcheck, function () {
	                    //动态加载js,成功后，并执行回调函数  
	                    setTimeout(function () {
	                        initAlertClick();
	                        for (var i = 0; i < empIds.length; i++) {
	                            var id = empIds[i];
	                            var $checkboxs = $("#box_" + branchId + " input[type='checkbox'][id='id" + id + "']");
	                            if ($checkboxs.length > 0) {
	                                $checkboxs.iCheck('check');
	                            }
	                        }
	                        clickSearchA1(obj);
	                    }, 10);
	                });
	            },
	            error: function error(e) {
	                console.error(e);
	            }
	        });
	    } else {
	        clickSearchA1(obj);
	    }
	}
	function clickSearchA1(obj) {
	    var branchId = $(obj).attr("val2");
	    var username = $(obj).attr("val");
	    var namesLen = $("#box_" + branchId + " .lists-one").length;
	    $(obj).parent().hide();
	    $("#ContactAlert .search input").val($(obj).attr("val1")).siblings("label").hide();
	    for (var i = 0; i < namesLen; i++) {
	        if ($("#box_" + branchId + " .lists-one").eq(i).find("input[val='" + username + "']").attr("val") == username) {
	            var itop = $("#id" + username).parent().parent().position().top;
	            $("#ContactAlert .body").scrollTo("#id" + username, 400); //引用scrollTo插件
	            $("#box_" + branchId + " .lists-one").eq(i).addClass("z-tipAct");
	            $("#box_" + branchId + " .lists-one").eq(i).iCheck('check');
	            return;
	        }
	    }
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _historyManager = __webpack_require__(27);

	var historyManager = _interopRequireWildcard(_historyManager);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _viewer = __webpack_require__(13);

	var viewer = _interopRequireWildcard(_viewer);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * 报告数据加载
	 * @param {*} data 
	 */
	var load = exports.load = function load(data) {
	    historyManager.pushState(Constant.LOCAL_SERVER_ROOT + '/pttlCrm/cust/myReport/getMyReportByRowId');
	    doAction(data);
	};

	//加载数据
	function doAction(data) {
	    $.ajax({
	        url: Constant.SERVER_ROOT + '/pttlCrm/cust/myReport/getMyReportByRowId',
	        data: { rowId: data.row_Id, AcitonEAIId: data.acitonEaiId },
	        dataType: 'json',
	        type: 'post',
	        success: function success(result) {
	            if (result.actionStatus == "true") {
	                var item = result.myReport;
	                if (null == item.asgnDtStr || "" == item.asgnDtStr) {
	                    $("#customerReportPopBtnPrimary").remove();
	                }

	                $("#VisitTarget").val(StringUtils.globReplace(item.visitTarget)); //拜访对象
	                $("#TargetPosition").val(StringUtils.globReplace(item.targetPosition)); //职务
	                $("#VisitTime").val(StringUtils.globReplace(item.visitTime)); //拜访时长

	                $("#huaweiFD").val(StringUtils.globReplace(item.huaweiFD)); //华为FD
	                $("#HuaweiExperienceStore").val(StringUtils.globReplace(item.huaweiExperienceStore)); //华为体验店
	                $("#HuaweiFuse").val(StringUtils.globReplace(item.huaweiFuse)); //华为融合
                /****
	                $("#HuaweiProvincePackage").val(StringUtils.globReplace(item.huaweiProvincePackage)); 
                  **/
                  //华为省包
	                $("#SamsungDivison").val(StringUtils.globReplace(item.xCommentsSanXing)); //三星事业部
	                $("#FenXiaoDivison").val(StringUtils.globReplace(item.xCommentsFenxiao)); //大客户业务部
	                $("#OtherInfor").val(StringUtils.globReplace(item.xCommentsOther)); //其他信息

	                if (result.reportManStatus == "true") {
	                    var atNameList = result.reportManList;
	                    $("#ContactUsers").html(getAtName(atNameList)); //@人
	                    $("#ContactUsers i.chate-del").on("click", function () {
	                        $(this).parent().remove();
	                    });
	                } else {
	                    $("#ContactUsers").html(""); //@人 
	                }
	                if (result.attachmentStatus == "true") {
	                    $("#fileList").append(getActionAtt(result.attachmentList));
	                    //图片删除
	                    $(".file-panel .cancel").click(function () {
	                        var $obj = $(this);
	                        var param = { 'rowId': $(this).attr("val") };
	                        $.ajax({
	                            url: Constant.SERVER_ROOT + '/pttlCrm/sys/file/delImg',
	                            data: param,
	                            dataType: 'json',
	                            type: 'get',
	                            success: function success(data) {
	                                $obj.parent().parent().remove();
	                            },
	                            error: function error(e) {
	                                console.error(e);
	                            }
	                        });
	                    });
	                    $("#fileList img").click(function () {
	                        viewer.displayImg($(this).attr("src"));
	                    });
	                } else {}
	                //$("#fileList").html('<div class="temp"></div>'); 

	                ///////
	                if (data.clickType[2] == "false") {
	                    //不可用
	                    $("#reportContent input").attr("disabled", "disabled");
	                    $("#reportContent select").attr("disabled", "disabled");
	                    $("#reportContent textarea").attr("disabled", "disabled");
	                    $(".file-panel .cancel").remove();
	                    $("#ContactUsers .user i.icon-close").remove();
	                }
	            } else {
	                $("#VisitTarget").val(""); //拜访对象
	                $("#TargetPosition").val(""); //职务
	                $("#VisitTime").val(""); //拜访时长

	                $("#huaweiFD").val(""); //华为FD
	                $("#HuaweiExperienceStore").val(""); //华为体验店
	                $("#HuaweiFuse").val(""); //华为融合
                /***
	                $("#HuaweiProvincePackage").val(""); //华为省包
                  ***/
	                $("#SamsungDivison").val(""); //三星事业部
	                $("#FenXiaoDivison").val(""); //分销事业部
	                $("#OtherInfor").val(""); //其他信息  
	                $("#ContactUsers").html(""); //@人 
	            }
	        },
	        error: function error(e) {
	            console.error(e);
	        }
	    });
	}
	//被@人
	function getAtName(list) {
	    var temp = '\n        ' + (list == null ? "" : list.map(function (item) {
	        return '\n\t\t\t\t<span val="' + item.empId + '" val1="' + item.atName + '">\n\t\t\t\t\t<i class="icon chate-del" val="' + item.empId + '"></i>' + item.atName + '\n\t\t\t\t</span>   \n            ';
	    }).join('')) + '\n    ';
	    return temp;
	}
	//附件 图片
	function getActionAtt(list) {
	    var temp = '\n    ' + (list == null ? "" : list.map(function (item) {
	        return '\n               <div id="" class="file-item">\n                    <img src="' + Constant.SERVER_ROOT + '/pttlCrm/sys/file/showImag?path=' + encodeURI(encodeURI(item.path)) + '"\n                    val="' + item.path + '">\n                    <div class="info" title="\u56FE">' + item.fileName + '</div>\n                    <div class="file-panel"><span val="' + item.rowId + '" class="cancel">\u5220\u9664</span></div>\n                </div>\n            ';
	    }).join('')) + '         \n    ';
	    return temp;
	}
	//图片名称
	function getPictureName(str) {
	    if (str != null && str != "" && typeof str != "undefined") {
	        return str.substring(str.lastIndexOf("\\") + 1, str.length);
	    } else {
	        return "";
	    }
	}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _objectUtil = __webpack_require__(6);

	var objectUtil = _interopRequireWildcard(_objectUtil);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * 报告  保存、确定
	 * @param {*} data 
	 */
	var load = exports.load = function load(data) {
	    doAction(data);
	};

	var reportSubmit = '0';
	function doAction(data) {
    	window.writeReportStatus = 'loading';//后添加
	    var content = "";
	    $("#reportImportContent textarea").each(function () {
	        var textVal = StringUtils.wrongCharacter($(this).val());
	        data[$(this).attr("name")] = textVal;
	        content += textVal;
	    });
	    /***data["VisitTarget"] = $("#VisitTarget").val();
	    data["TargetPosition"] = $("#TargetPosition").val();
	    data["VisitTime"] = $("#VisitTime").val();***/
			var visitTarget = $("#VisitTarget").val();
      if(visitTarget == ""){
          layerUtils.info("请填写拜访对象！");
          return ;
      } 
      if(visitTarget.length > 50){
          layerUtils.info("拜访对象数据长度超限！");
          return;
      } 
      data["VisitTarget"] = visitTarget;

      var targetPosition = $("#TargetPosition").val();
      if(targetPosition == ""){
          layerUtils.info("请填写职务！");
          return ;
      } 
      if(targetPosition.length > 50){
          layerUtils.info("职务数据长度超限！");
          return;
      }
      data["TargetPosition"] = targetPosition;

      var visitTime = $("#VisitTime").val();
      if(visitTime == ""){
          layerUtils.info("请填写拜访时长！");
          return ;
      } 
      data["VisitTime"] = visitTime;

      var msg = "";
      var deptId = ['huaweiFD','HuaweiExperienceStore','HuaweiFuse','SamsungDivison','FenXiaoDivison','OtherInfor'];
      for (var i=0;i<deptId.length;i++){ 
          var temp = data[deptId[i]].replace(/[^\u4e00-\u9fa5]/gi,"");
          if(((data[deptId[i]].length - temp.length) + temp.length * 3) > 1500){
              if(deptId[i] == 'huaweiFD'){msg = "华为FD内容长度超限!";}
              if(deptId[i] == 'HuaweiExperienceStore'){msg = "华为体验店内容长度超限!";}
              if(deptId[i] == 'HuaweiFuse'){msg = "华为融合内容长度超限!";}
              if(deptId[i] == 'SamsungDivison'){msg = "三星内容长度超限!";}
              if(deptId[i] == 'FenXiaoDivison'){msg = "大客户业务部内容长度超限!";}
              if(deptId[i] == 'OtherInfor'){msg = "其他信息内容长度超限!";}
              break;
          }
      }
      if(msg != ""){
          layerUtils.error(msg);
          return;
      }

	    if (content == "") {
	        layerUtils.info("请至少填写一个内容！");
	        return;
	    }
	    data.AcitonEAIId = data.acitonEaiId; //row_Id
	    data.ActionStatus = "已完成";
	    var empIds = [];
	    $("#ContactUsers span").each(function () {
	        empIds.push($(this).attr("val")); //$(this).attr("val2")+":"+
	    });
	    //
	    data.empIds = empIds.join(",");
	    data.msg = "有新报告了";

	    //获取标签数据
	    var huaweiFDTags = "";
	    $("#huaweiFDTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            huaweiFDTags += $(this).text() + ",";
	        }
	    });
	    data.huaweiFDTags = huaweiFDTags;
	    var huaweiExperienceStoreTags = "";
	    $("#huaweiExperienceStoreTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            huaweiExperienceStoreTags += $(this).text() + ",";
	        }
	    });
	    data.huaweiExperienceStoreTags = huaweiExperienceStoreTags;
	    var huaweiFuseTags = "";
	    $("#huaweiFuseTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            huaweiFuseTags += $(this).text() + ",";
	        }
	    });
	    data.huaweiFuseTags = huaweiFuseTags;
	    var samsungDivisonTags = "";
	    $("#samsungDivisonTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            samsungDivisonTags += $(this).text() + ",";
	        }
	    });
	    data.samsungDivisonTags = samsungDivisonTags;
	    var fenXiaoDivisonTags = "";
	    $("#fenXiaoDivisonTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            fenXiaoDivisonTags += $(this).text() + ",";
	        }
	    });
	    data.fenXiaoDivisonTags = fenXiaoDivisonTags;
	    var otherInforTags = "";
	    $("#otherInforTags button").each(function () {
	        if ($(this).attr('class') == 'activ') {
	            otherInforTags += $(this).text() + ",";
	        }
	    });
	    data.otherInforTags = otherInforTags;

	    var param = objectUtil.clone(data); //克隆一个对象   原因  函数不能传递到后台
	    var referenceParentHtmlFn = data.fn;
	    delete param.fn;
	    delete param.clickType;
	    delete param.clickType1;

	    if (reportSubmit == '1') {
	        return;
	    }
	    reportSubmit = '1';
	    ajaxUtils.sendAjax("visit/customerVisitPlan/addOrUpdateCustomerReport", param, null, function (reslult) {
	        if (reslult.status == "true") {
            	window.writeReportStatus = 'completed';//后添加
	            //if(data.ReportStatus == "已提交"){
	            referenceParentHtmlFn("报告", data.row_Id); //刷新父页面
	            //}
            	if(data.ReportStatus == "已提交"){
                	layerUtils.success('提交成功！', { time: 1000 });//后添加
	            }else if(data.ReportStatus == "草稿"){
                  layerUtils.success('保存成功！', { time: 1000 });//后添加     
             	}else{
                
              }
            	
	            iframeUtils.hideSecondIframe(); //关闭
	        }else if(reslult.message != null && reslult.message != ''){
            layerUtils.error(reslult.message);
          } else {
                layerUtils.error("保存失败！");
            }
	        reportSubmit = '0';
	    });
	}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _objectUtil = __webpack_require__(6);

	var objectUtil = _interopRequireWildcard(_objectUtil);

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _historyManager = __webpack_require__(27);

	var historyManager = _interopRequireWildcard(_historyManager);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var load = exports.load = function load(data) {
	    $("#body").html(render()); //加载静态页面
	    $(window).resize(function () {
	        initReportCss();
	    });
	    initReportCss();
	    //返回
	    $('.customersign-unactive').unbind().on('click', function () {
	        iframeUtils.hideSecondIframe();
	    });
	    //客户或门店经纬度地址
	    $("#csLongitude").val(data.longitude);
	    $("#csLatitude").val(data.latitude);
	    $("#csAddress").val(data.address);
	    if (data.clickType[0] == "false") {
	        //签到不可用
        	$(".customersign-active").remove();//后添加
          $(".customersign-remarktextarea2 .remarktextimg").remove();//后添加
	        doLookAction(data);
	    } else {
	        //签到可用
	        inintPageHtmlFn();//PC注释掉 移动端要解开
	        initMap();
	        $("#longitude").attr("style", "display:none;"); //签到经度
	        $("#latitude").attr("style", "display:none;"); //签到纬度
	        $("#address").attr("style", "display:none;"); //地址
        	
        	//签到 后添加
          $(".customersign-active").unbind('click').on('click', function() {
              if ($("#address").html() == "") {
                  layerUtils.info("请等待地图加载完毕！");
                  return;
              }
              doAction(data);
          });
        
       	// $(".customersign-active").unbind('click').on('click', function() {
         	// if ($("#address").html() == "") {
         	// layerUtils.info("请等待地图加载完毕！");
         	// return;
         	// }
         	// doAction(data);
         	// });
	    }

	    /** PC端 禁用签到 */
	    $(".customersign-active").attr("style", "display:none;");
	    $(".customersign-remarktextarea2 .remarktextimg").remove();
	    $("#remarktextname").attr("disabled", "disabled");

	    historyManager.pushState(Constant.LOCAL_SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addCustomerSignIn');
	};
	/**
	 * 
	 * @param {*查看} data 
	 */
	function doLookAction(data) {
	    var body = { rowId: data.row_Id, AcitonEAIId: data.acitonEaiId };
	    ajaxUtils.sendAjax("visit/customerVisitPlan/getCustomerSignIn", body, null, function (result) {
	        if (null != result && result.length > 0) {
	            var signMap = result[0];
	            $("#signTime").html(signMap.assignTime); //签到时间
	            $("#address").html(signMap.assignAddress); //签到地址

	            if (signMap.assignLongitude == null && signMap.assignLatitude == null) {
	                initMap();
	                $("#longitude").attr("style", "display:none;"); //签到经度
	                $("#latitude").attr("style", "display:none;"); //签到纬度
	                $("#address").attr("style", "display:none;"); //地址
	                return;
	            }

	            $("#longitude").html(signMap.assignLongitude); //签到经度
	            $("#latitude").html(signMap.assignLatitude); //签到纬度
	            $("#remarktextname").val(StringUtils.globReplace(signMap.assignComments, "ltbrgt")); //签到备注
	            $("#remarktextname").attr("disabled", "disabled");
	            //地图显示
	            var map = new BMap.Map("allmap");
	            var point = new BMap.Point(signMap.assignLongitude, signMap.assignLatitude);
	            map.centerAndZoom(point, 12);
	            var mk = new BMap.Marker(point);
	            map.addOverlay(mk);
	            map.panTo(point);
	            showPosition(point, true); //百度地图WebAPI 坐标转地址
           		 map.enableScrollWheelZoom(true);
	        } else {
	            initMap();
	        }
	    });
	}
	/**
	 * 签到
	 * @param {*} data 
	 */
	var signInOutScope = '0';
	function doAction(data) {
    	window.signStatus = 'loading';//后添加
	    $("#customersign-content .customersign-mapcontent-textbottomspan").each(function () {
	        data[$(this).attr("name")] = $(this).html();
	    });
	    data.AssignComments = StringUtils.wrongCharacter($("#remarktextname").val());
	    data.AcitonEAIId = data.acitonEaiId;
	    data.ActionStatus = "已签到";
	    var param = objectUtil.clone(data); //克隆一个对象   原因  函数不能传递到后台
	    var referenceParentHtmlFn = data.fn;
	    delete param.fn;
	    delete param.clickType;
	    delete param.clickType1;

	    /** 检查签到范围 */
	    var reg = new RegExp("^L");
	    if (param.AssignComments == '' && !reg.test(param.acitonEaiId)) {
	        ajaxUtils.sendAjax("visit/customerVisitPlan/getCustomerSignInMileage", param, null, function (reslult) {
	            if (reslult.status == "true") {
	                signIn(param, referenceParentHtmlFn, data);
	            } else {
	                signInOutScope = '1';
                	window.closeModel();
	                layerUtils.info("当前签到位置与客户地址距离超过500米,请填写备注信息！");
                	
	                return;
	            }
	        });
	    } else {
	        signIn(param, referenceParentHtmlFn, data);
	    }
	}

	var signSubmit = '0';
	function signIn(param, referenceParentHtmlFn, data) {
	    if (signSubmit == '1') {
	        return;
	    }
	    signSubmit = '1';
	    param.signInOutScope = signInOutScope;
	    ajaxUtils.sendAjax("visit/customerVisitPlan/addCustomerSignIn", param, null, function (reslult) {
	        if (reslult.status == "true") {
            	window.signStatus = 'completed';//后添加
	            layerUtils.success("签到成功！", { time: 1000 });
	            referenceParentHtmlFn("签到", data.row_Id); //刷新父页面
	            iframeUtils.hideSecondIframe(); //关闭
	        } else {
	            layerUtils.info("签到失败！");
	        }
	        signSubmit = '0';
	    });
	}

	//初始化页面高度
	function initReportCss() {
	    // 输入禁用状态下去掉边框样式
	    $(".lists-one textarea:disabled").parent().css("border", 0);
	    // 动态计算需要滚动内容的高度
	    var popInforsH = $("body").height() - parseInt($(".m-popBox>.header").height()) - parseInt($(".m-popBox>.body").css("padding")) * 2 - 2;
	    //$(".m-popBox>.body>.content>.center").height(popInforsH);
	    $("#customersign-content").css("max-height", popInforsH);
	    //$("#customersign-content").height(popInforsH);
	}
	function render() {
	    var temp = '\n        <div class="content">\n            <div id="customersign-content" >\n                <div class="customersign-map" id="allmap">\n\n                </div>\n                <div class="customersign-mapcontent">\n                    <div class="customersign-mapcontent-text">\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u5230\u65F6\u95F4</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignTime" id="signTime"></span>\n                        </div>\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u5230\u5730\u5740</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignAddress" id="address"></span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u5230\u7ECF\u5EA6</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignLongitude" id="longitude"></span>\n                            <input type="hidden" id="csLongitude" name="csLongitude" value=""/>\n                        </div>\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u5230\u7EAC\u5EA6</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignLatitude" id="latitude"></span>\n                            <input type="hidden" id="csLatitude" name="csLatitude" value=""/>\n                            <input type="hidden" id="csAddress" name="csAddress" value=""/>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="customersign-remark">\n                    <div class="customersign-remarktext">\n                        <span>\u5907\u6CE8</span>\n                    </div>\n                    <div class="customersign-remarktextarea2 customersign-remarktextarea">\n                        <span class="remarktextimg"></span>\n                        <textarea id="remarktextname"></textarea>\n                    </div>\n                </div>\n                <div class="customersigin-mapbutton">\n                    <span class="customersign-active" style="cursor:pointer;">\u7B7E\u5230</span>\n                    <span class="customersign-unactive" style="cursor:pointer;">\u8FD4\u56DE</span>\n                </div>\n            </div>\n        </div>\n    ';
	    return temp;
	}
	//初始化地图 坐标
	function initMap() {
	    var map = new BMap.Map("allmap");

	    var point = new BMap.Point(116.318347, 39.989747);
	    map.centerAndZoom(point, 12);

	    // let geolocation = new BMap.Geolocation();
	    // geolocation.getCurrentPosition(function (r) {
	    //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
	    //         let mk = new BMap.Marker(point);
	    //         map.addOverlay(mk);
	    //         map.panTo(point);

	    //         alert('您的位置：'+point.lng+','+point.lat);
	    //     } else {
	    //         alert('failed' + this.getStatus());
	    //     }
	    //     showPosition(r);
	    // }, {enableHighAccuracy: true})
	    var mk = new BMap.Marker(point);
	    map.addOverlay(mk);
	    map.panTo(point);
	    showPosition(point);
    map.enableScrollWheelZoom(true);
	    // $.ajax({
	    //         url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/getLocation`,
	    //         dataType: 'json',
	    //         type: 'get',
	    //         success: function (data) {
	    //             let result = JSON.parse(data.result);
	    //             let map = new BMap.Map("allmap");
	    //             let point = new BMap.Point(result.content.point.x, result.content.point.y);
	    //             map.centerAndZoom(point, 12);
	    //             let mk = new BMap.Marker(point);
	    //             map.addOverlay(mk);
	    //             map.panTo(point);
	    //             showPosition(point);
	    //         },
	    //         error: function (e) {
	    //             console.error(e);
	    //         }
	    //     });
	}

	//百度地图WebAPI 坐标转地址
	function showPosition(point, flag) {
	    // ak = appkey 访问次数流量有限制 
	    var url = 'http://api.map.baidu.com/geocoder/v2/?ak=d7bod7ejOdqMwrxWRLvCjGCVFafi1LcG&callback=?&location=' + point.lat + ',' + point.lng + '&output=json&pois=1';
	    $.getJSON(url, function (res) {
	        if (!flag) {
	            //alert(res.result.pois[0].addr);
	            $("#address").html(res.result.pois[0].addr + res.result.pois[0].name);
	            $("#longitude").html(res.result.location.lng);
	            $("#latitude").html(res.result.location.lat);
	        }
	    });
	}
	//初始化页面函数
	function inintPageHtmlFn() {
	    //格式化时间
	    Date.prototype.format = function (fmt) {
	        var o = {
	            "M+": this.getMonth() + 1, //月份
	            "d+": this.getDate(), //日
	            "h+": this.getHours(), //小时
	            "m+": this.getMinutes(), //分
	            "s+": this.getSeconds(), //秒
	            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	            "S": this.getMilliseconds() //毫秒
	        };
	        if (/(y+)/.test(fmt)) {
	            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	        }
	        for (var k in o) {
	            if (new RegExp("(" + k + ")").test(fmt)) {
	                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	            }
	        }
	        return fmt;
	    };
	    $("#signTime").html(new Date().format("yyyy-MM-dd hh:mm:ss"));
	    $(".customersign-remarktextarea textarea").focus(function () {
	        $(this).siblings(".remarktextimg").hide();
	    });
	    $("#remarktextname").blur(function () {
	        var remarktextname = $("#remarktextname").val();
	        if ($.trim(remarktextname) == "") {
	            $(this).siblings(".remarktextimg").show();
	        }
	    });
	    $(".customersign-remarktextarea .remarktextimg #remarktextname").click(function () {
	        $(this).siblings("textarea").focus();
	    });
	}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _objectUtil = __webpack_require__(6);

	var objectUtil = _interopRequireWildcard(_objectUtil);

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _historyManager = __webpack_require__(27);

	var historyManager = _interopRequireWildcard(_historyManager);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var load = exports.load = function load(data) {
	    $("#body").html(render()); //加载静态页面
	    $(window).resize(function () {
	        initReportCss();
	    });
	    initReportCss();
	    //返回
	    $(".customersign-unactive").unbind().on('click', function () {
	        iframeUtils.hideSecondIframe();
	    });
	    //客户或门店经纬度地址
	    $("#csLongitude").val(data.longitude);
	    $("#csLatitude").val(data.latitude);
	    $("#csAddress").val(data.address);
	    if (data.clickType[1] == "false") {
	        //签退不可用
        	$(".customersign-active").remove();//后添加
        	$(".customersign-remarktextarea .remarktextimg").remove();//后添加
	        doLookAction(data);
	    } else {
	        //签到退可用
	        inintPageHtmlFn();//PC端注释掉 移动端要解开  
	        initMap();
	        $("#longitude").attr("style", "display:none;"); //签到经度
	        $("#latitude").attr("style", "display:none;"); //签到纬度
	        $("#address").attr("style", "display:none;"); //地址
        	
        	//签退 后添加
        	$("#csLongitude").val(data.longitude);
          $("#csLatitude").val(data.latitude);
          $("#csAddress").val(data.address);
          $(".customersign-active").unbind().on('click', function() {
              if ($("#address").html() == "") {
                  layerUtils.info("请等待定位加载完毕");
                  return;
              }
              doAction(data);
          });
	    }

	    /** PC端 禁用签退 */
	    $(".customersign-active").attr("style", "display:none;");
	    $(".customersign-remarktextarea .remarktextimg").remove();
	    $("#remarktextname").attr("disabled", "disabled");

	    historyManager.pushState(Constant.LOCAL_SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addCustomerSignOut');
	};
	/**
	 * 
	 * @param {*查看} data 
	 */
	function doLookAction(data) {
	    var body = { rowId: data.row_Id, AcitonEAIId: data.acitonEaiId };
	    ajaxUtils.sendAjax("visit/customerVisitPlan/getCustomerSignOut", body, null, function (result) {
	        if (null != result && result.length > 0) {
	            var signMap = result[0];

	            $("#signTime").html(signMap.assignOutTime); //签退时间
	            $("#address").html(signMap.assignOutAddress); //签退地址

	            if (signMap.assignOutLatitude == null && signMap.assignOutLongitude == null) {
	                initMap();
	                $("#longitude").attr("style", "display:none;"); //签到经度
	                $("#latitude").attr("style", "display:none;"); //签到纬度
	                $("#address").attr("style", "display:none;"); //地址
	                return;
	            }
	            $("#longitude").html(signMap.assignOutLongitude); //签退经度
	            $("#latitude").html(signMap.assignOutLatitude); //签退纬度
	            $("#remarktextname").val(StringUtils.globReplace(signMap.assignOutComments, "ltbrgt")); //签退备注
							$("#remarktextname").attr("disabled", "disabled");//后添加
	            //地图显示
	            var map = new BMap.Map("allmap");
	            var point = new BMap.Point(signMap.assignOutLongitude, signMap.assignOutLatitude);
	            map.centerAndZoom(point, 12);
	            var mk = new BMap.Marker(point);
	            map.addOverlay(mk);
	            map.panTo(point);
	            showPosition(point, true); //百度地图WebAPI 坐标转地址
           		 map.enableScrollWheelZoom(true);
	        } else {
	            initMap();
	        }
	    });
	}

	/**
	 * 签退
	 * @param {*} data 
	 */
	var signOutOutScope = '0';
	function doAction(data) {
    	window.signOutStatus = 'loading';//后添加
	    $("#customersign-content .customersign-mapcontent-textbottomspan").each(function () {
	        data[$(this).attr("name")] = $(this).html();
	    });
	    data.AssignOutComments = StringUtils.wrongCharacter($("#remarktextname").val());
	    data.AcitonEAIId = data.acitonEaiId;
	    data.ActionStatus = "已签退";
	    var param = objectUtil.clone(data); //克隆一个对象   原因  函数不能传递到后台
	    var referenceParentHtmlFn = data.fn;
	    delete param.fn;
	    delete param.clickType;
	    delete param.clickType1;

	    /** 检查签到范围 */
	    var reg = new RegExp("^L");
	    if (param.AssignOutComments == '' && !reg.test(param.acitonEaiId)) {
	        ajaxUtils.sendAjax("visit/customerVisitPlan/getCustomerSignOutMileage", param, null, function (reslult) {
	            if (reslult.status == "true") {
	                signOut(param, referenceParentHtmlFn, data);
	            } else {
	                signOutOutScope = '1';
                	window.closeModel();
	                layerUtils.info("当前签出位置与签到地址距离超过500米,请填写备注信息！");
	                return;
	            }
	        });
	    } else {
	        signOut(param, referenceParentHtmlFn, data);
	    }
	}

	var signOutSubmit = '0';
	function signOut(param, referenceParentHtmlFn, data) {
	    if (signOutSubmit == '1') {
	        return;
	    }
	    signOutSubmit = '1';
	    param.signOutOutScope = signOutOutScope;
	    ajaxUtils.sendAjax("visit/customerVisitPlan/addCustomerSignOut", param, null, function (reslult) {
	        if (reslult.status == "true") {
            	window.signOutStatus = 'completed';//后添加
	            layerUtils.success("签出成功！", { time: 1000 });
	            referenceParentHtmlFn("签出", data.row_Id); //刷新父页面
	            iframeUtils.hideSecondIframe(); //关闭
	        } else {
	            layerUtils.info("签出失败！");
	        }
	        signOutSubmit = '0';
	    });
	}

	//初始化页面高度
	function initReportCss() {
	    // 输入禁用状态下去掉边框样式
	    $(".lists-one textarea:disabled").parent().css("border", 0);
	    // 动态计算需要滚动内容的高度
	    var popInforsH = $("body").height() - parseInt($(".m-popBox>.header").height()) - parseInt($(".m-popBox>.body").css("padding")) * 2 - 2;
	    //$(".m-popBox>.body>.content>.center").height(popInforsH);
	    $("#customersign-content").css("max-height", popInforsH);
	    //$("#customersign-content").height(popInforsH);
	}

	//页面html
	function render() {
	    var temp = '\n        <div class="content">\n            <div id="customersign-content">\n                <div class="customersign-map" id="allmap">\n\n                </div>\n                <div class="customersign-mapcontent">\n                    <div class="customersign-mapcontent-text">\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u51FA\u65F6\u95F4</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignOutTime" id="signTime"></span>\n                        </div>\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u51FA\u5730\u5740</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignOutAddress" id="address"></span>\n                        </div>\n                    </div>\n                    <div class="">\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u9000\u7ECF\u5EA6</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignOutLongitude" id="longitude"></span>\n                            <input type="hidden" id="csLongitude" name="csLongitude" value=""/>\n                        </div>\n                        <div class="customersign-mapcontent-textdiv">\n                            <span class="customersign-mapcontent-texttopspan">\u7B7E\u9000\u7EAC\u5EA6</span>\n                            <span class="customersign-mapcontent-textbottomspan" name="AssignOutLatitude" id="latitude"></span>\n                            <input type="hidden" id="csLatitude" name="csLatitude" value=""/>\n                            <input type="hidden" id="csAddress" name="csAddress" value=""/>\n                        </div>\n                    </div>\n                </div>\n                <div class="customersign-remark">\n                    <div class="customersign-remarktext">\n                        <span>\u5907\u6CE8</span>\n                    </div>\n                    <div class="customersign-remarktextarea">\n                        <span class="remarktextimg"></span>\n                        <textarea id="remarktextname"></textarea>\n                    </div>\n                </div>\n                <div class="customersigin-mapbutton">\n                    <span class="customersign-active" style="cursor:pointer;">\u7B7E\u51FA</span>\n                    <span class="customersign-unactive" style="cursor:pointer;">\u8FD4\u56DE</span>\n                </div>\n            </div>\n        </div>\n    ';
	    return temp;
	}
	//初始化地图 坐标
	function initMap() {
	    var map = new BMap.Map("allmap");

	    var point = new BMap.Point(116.318347, 39.989747);
	    map.centerAndZoom(point, 12);

	    var mk = new BMap.Marker(point);
	    map.addOverlay(mk);
	    map.panTo(point);
	    showPosition(point);
map.enableScrollWheelZoom(true);
	    // $.ajax({
	    //         url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/getLocation`,
	    //         dataType: 'json',
	    //         type: 'get',
	    //         success: function (data) {
	    //             let result = JSON.parse(data.result);
	    //             let map = new BMap.Map("allmap");
	    //             let point = new BMap.Point(result.content.point.x, result.content.point.y);
	    //             map.centerAndZoom(point, 12);
	    //             let mk = new BMap.Marker(point);
	    //             map.addOverlay(mk);
	    //             map.panTo(point);
	    //             showPosition(point);
	    //         },
	    //         error: function (e) {
	    //             console.error(e);
	    //         }
	    //     });
	}

	//百度地图WebAPI 坐标转地址
	function showPosition(point, flag) {
	    // ak = appkey 访问次数流量有限制 
	    var url = 'http://api.map.baidu.com/geocoder/v2/?ak=d7bod7ejOdqMwrxWRLvCjGCVFafi1LcG&callback=?&location=' + point.lat + ',' + point.lng + '&output=json&pois=1';
	    $.getJSON(url, function (res) {
	        if (!flag) {
	            //alert(res.result.pois[0].addr);
	            $("#address").html(res.result.pois[0].addr + res.result.pois[0].name);
	            $("#longitude").html(res.result.location.lng);
	            $("#latitude").html(res.result.location.lat);
	        }
	    });
	}
	//页面函数
	function inintPageHtmlFn() {
	    //格式化时间
	    Date.prototype.format = function (fmt) {
	        var o = {
	            "M+": this.getMonth() + 1, //月份
	            "d+": this.getDate(), //日
	            "h+": this.getHours(), //小时
	            "m+": this.getMinutes(), //分
	            "s+": this.getSeconds(), //秒
	            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	            "S": this.getMilliseconds() //毫秒
	        };
	        if (/(y+)/.test(fmt)) {
	            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	        }
	        for (var k in o) {
	            if (new RegExp("(" + k + ")").test(fmt)) {
	                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	            }
	        }
	        return fmt;
	    };
	    $("#signTime").html(new Date().format("yyyy-MM-dd hh:mm:ss"));
	    $(".customersign-remarktextarea textarea").focus(function () {
	        $(this).siblings(".remarktextimg").hide();
	    });
	    $("#remarktextname").blur(function () {
	        var remarktextname = $("#remarktextname").val();
	        if ($.trim(remarktextname) == '' || $.trim(remarktextname) == "") {
	            $(this).siblings(".remarktextimg").show();
	        }
	        $(this).siblings("textarea").focus();
	    });
	}

/***/ })
/******/ ]);
//# sourceMappingURL=customerVisitInfo.map