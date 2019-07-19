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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _loadHtml = __webpack_require__(147);

	var loadHtml = _interopRequireWildcard(_loadHtml);

	var _StringUtils = __webpack_require__(7);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _dataUtils = __webpack_require__(10);

	var dataUtils = _interopRequireWildcard(_dataUtils);

	var _constant = __webpack_require__(3);

	var constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	$(function () {

	    $(".atme-main .header2").hide();
	    var user = dataUtils.getTopWindowData(constant.USERNAMEANDENCODER);
	    if (user && StringUtils.getValue(user.position) != "") {
	        if (user.position == "总部领导" || user.position == "分公司分总" || user.position == "事业部总经理" || user.position == "产品经理") {
	            $(".atme-main .header2").show();
	        } else {
	            $(".atme-main .header2").remove();
	        }
	    }

	    //默认根据参数选择加载哪个table页面
	    var requestParam = StringUtils.getRequestParam();
	    if (requestParam && StringUtils.getValue(requestParam.reportId) == "workReport") {
	        $(".atme-main .header2").addClass("header1");
	        $(".atme-main .header2").siblings().removeClass("header1");
	        loadHtml.getWorkReportHtml();
	    } else {
	        //workAtme
	        $(".atme-main .header2").siblings().addClass("header1");
	        $(".atme-main .header2").removeClass("header1");
	        loadHtml.getWorkAtmeHtml();
	    }
	    //点击表头事件
	    $(".atme-main .header").click(function () {
	        $(this).addClass("header1");
	        $(this).siblings().removeClass("header1");
	        if ($(this).hasClass("header2")) {
	            //总结报表
	            loadHtml.getWorkReportHtml();
	        } else {
	            //汇报给我的总结
	            loadHtml.getWorkAtmeHtml();
	        }
	    });
	});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.confirm = exports.waitingClose = exports.waitingOpen = exports.error = exports.success = exports.info = exports.layer = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

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

/***/ 2:
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

/***/ 3:
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

	var _dgt = _dgt || [];
	window._dgt = _dgt;
	(function () {
	    _dgt.push(['setSiteId', '4f81f635b5871938']);
	    var d = document,
	        g = d.createElement('script'),
	        s = d.getElementsByTagName('script')[0];
	    g.type = 'text/javascript';g.async = true;g.defer = true;
	    g.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'shujike.cn/dgt.js';
	    s.parentNode.insertBefore(g, s);
	})();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.submitExcleGlobal = exports.sendAjax = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _objectUtil = __webpack_require__(5);

	var objextUtil = _interopRequireWildcard(_objectUtil);

	var _page = __webpack_require__(6);

	var page = _interopRequireWildcard(_page);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _StringUtils = __webpack_require__(7);

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
	};

/***/ }),

/***/ 5:
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

/***/ 6:
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

/***/ 7:
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

/***/ 9:
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

/***/ 10:
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

/***/ 24:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 时间工具类
	 */

	/**
	 * 时间比较大小
	 */
	var compareDate = exports.compareDate = function compareDate(DateOne, DateTwo) {
	    //开始时间， 结束时间
	    var OneMonth = DateOne.substring(5, DateOne.lastIndexOf("-"));
	    var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf("-") + 1);
	    var OneYear = DateOne.substring(0, DateOne.indexOf("-"));
	    var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf("-"));
	    var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf("-") + 1);
	    var TwoYear = DateTwo.substring(0, DateTwo.indexOf("-"));
	    if (Date.parse(OneMonth + "/" + OneDay + "/" + OneYear) <= Date.parse(TwoMonth + "/" + TwoDay + "/" + TwoYear)) {
	        return true;
	    } else {
	        return false;
	    }
	};

	/**
	 * my97 点击事件
	 * @param {*} obj 
	 * @param {*} dty 
	 * @param {*} callBack 
	 */
	var timeClick = exports.timeClick = function timeClick(obj, dty, callBack, params) {
	    var dnm = obj;
	    var dataFmt = '';
	    var minDate = '';
	    var maxDate = '';
	    if (dty == 'mn') {
	        dataFmt = 'yyyy年MM月';
	    } else if (dty == 'dd') {
	        dataFmt = 'yyyy-MM-dd';
	    } else if (dty == 'm-n') {
	        dataFmt = 'yyyy-MM';
	    }
	    var param = { el: dnm, dateFmt: dataFmt, onpicked: function onpicked() {
	            if (typeof callBack != "undefined" && null != callBack) {
	                callBack();
	            }
	        }
	    };
	    param = $.extend({}, param, params);
	    WdatePicker(param);
	};
	/**
	* my97 点击事件 周
	* @param {*} obj 
	* @param {*} dty 
	* @param {*} callBack 
	*/
	var weekClick = exports.weekClick = function weekClick(obj, callBack) {
	    var dnm = obj;
	    WdatePicker({ el: dnm, firstDayOfWeek: 1, isShowWeek: true, onpicked: function onpicked() {
	            $dp.$(dnm + '_1').value = $dp.cal.getP('W', 'WW');
	            if (typeof callBack != "undefined" && null != callBack) {
	                callBack();
	            }
	        } });
	};

	/**
	 * 获取当前日期  2018-01-17
	 */
	var getNowFormatDate = exports.getNowFormatDate = function getNowFormatDate(type) {
	    var date = new Date();
	    var seperator1 = "-";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }

	    //type 为mm 返回月 
	    if (type && "mm" == type) {
	        return date.getFullYear() + seperator1 + month; //年月
	    }

	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
	    return currentdate;
	};

	/**
	 * 格式为yyyy-mm-dd的日期，如：2018-01-17 
	 * @param {*获取上个月} date 
	 * type 为 day 返回2018-01-17  为mm 返回2018-01   默认返回日
	 */
	var getPreMonth = exports.getPreMonth = function getPreMonth(date, type) {
	    var arr = date.split('-');
	    var year = arr[0]; //获取当前日期的年份  
	    var month = arr[1]; //获取当前日期的月份  
	    var day = arr[2]; //获取当前日期的日  
	    var days = new Date(year, month, 0);
	    days = days.getDate(); //获取当前日期中月的天数  
	    var year2 = year;
	    var month2 = parseInt(month) - 1;
	    if (month2 == 0) {
	        year2 = parseInt(year2) - 1;
	        month2 = 12;
	    }
	    var day2 = day;
	    var days2 = new Date(year2, month2, 0);
	    days2 = days2.getDate();
	    if (day2 > days2) {
	        day2 = days2;
	    }
	    if (month2 < 10) {
	        month2 = '0' + month2;
	    }
	    //type 为mm 返回月 
	    if (type && "mm" == type) {
	        return year2 + '-' + month2; //年月
	    }
	    var t2 = year2 + '-' + month2 + '-' + day2;
	    return t2;
	};

	/** 
	 * 获取下一个月 
	 * 
	 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25 
	 */
	var getNextMonth = exports.getNextMonth = function getNextMonth(date, type) {
	    var arr = date.split('-');
	    var year = arr[0]; //获取当前日期的年份  
	    var month = arr[1]; //获取当前日期的月份  
	    var day = arr[2]; //获取当前日期的日  
	    var days = new Date(year, month, 0);
	    days = days.getDate(); //获取当前日期中的月的天数  
	    var year2 = year;
	    var month2 = parseInt(month) + 1;
	    if (month2 == 13) {
	        year2 = parseInt(year2) + 1;
	        month2 = 1;
	    }
	    var day2 = day;
	    var days2 = new Date(year2, month2, 0);
	    days2 = days2.getDate();
	    if (day2 > days2) {
	        day2 = days2;
	    }
	    if (month2 < 10) {
	        month2 = '0' + month2;
	    }

	    //type 为mm 返回月 
	    if (type && "mm" == type) {
	        return year2 + '-' + month2; //年月
	    }

	    var t2 = year2 + '-' + month2 + '-' + day2;
	    return t2;
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////
	//获取当前日期在当前年第几周函数封装，例如2013-08-15 是当前年的第32周
	////////////////////////////////////////////////////////////////////////////////////////////////////
	var getWeekNUm = exports.getWeekNUm = function getWeekNUm() {
	    var totalDays = 0;
	    var now = new Date();
	    var years = now.getYear();
	    if (years < 1000) years += 1900;
	    var days = new Array(12);
	    days[0] = 31;
	    days[2] = 31;
	    days[3] = 30;
	    days[4] = 31;
	    days[5] = 30;
	    days[6] = 31;
	    days[7] = 31;
	    days[8] = 30;
	    days[9] = 31;
	    days[10] = 30;
	    days[11] = 31;

	    //判断是否为闰年，针对2月的天数进行计算
	    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
	        days[1] = 29;
	    } else {
	        days[1] = 28;
	    }

	    if (now.getMonth() == 0) {
	        totalDays = totalDays + now.getDate();
	    } else {
	        var curMonth = now.getMonth();
	        for (var count = 1; count <= curMonth; count++) {
	            totalDays = totalDays + days[count - 1];
	        }
	        totalDays = totalDays + now.getDate() + 2;
	    }
	    //得到第几周
	    var week = Math.round(totalDays / 7);
	    if (week < 10) {
	        week = "0" + week;
	    }
	    return week;
	};

	var getWeekNUmByDate = exports.getWeekNUmByDate = function getWeekNUmByDate(time) {
	    var totalDays = 0;
	    var now = new Date(time.replace(new RegExp(/(-)/g), '/'));
	    var years = now.getYear();
	    if (years < 1000) years += 1900;
	    var days = new Array(12);
	    days[0] = 31;
	    days[2] = 31;
	    days[3] = 30;
	    days[4] = 31;
	    days[5] = 30;
	    days[6] = 31;
	    days[7] = 31;
	    days[8] = 30;
	    days[9] = 31;
	    days[10] = 30;
	    days[11] = 31;

	    //判断是否为闰年，针对2月的天数进行计算
	    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
	        days[1] = 29;
	    } else {
	        days[1] = 28;
	    }

	    if (now.getMonth() == 0) {
	        totalDays = totalDays + now.getDate();
	    } else {
	        var curMonth = now.getMonth();
	        for (var count = 1; count <= curMonth; count++) {
	            totalDays = totalDays + days[count - 1];
	        }
	        totalDays = totalDays + now.getDate() + 2;
	    }
	    //得到第几周
	    var week = Math.round(totalDays / 7);
	    if (week < 10) {
	        week = "0" + week;
	    }
	    return week;
	};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getWorkReportHtml = exports.getWorkAtmeHtml = undefined;

	var _dateUtils = __webpack_require__(24);

	var dateUtils = _interopRequireWildcard(_dateUtils);

	var _atMeSearch = __webpack_require__(148);

	var atMeSearch = _interopRequireWildcard(_atMeSearch);

	var _reportSearch = __webpack_require__(149);

	var reportSearch = _interopRequireWildcard(_reportSearch);

	var _iframeUtils = __webpack_require__(9);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * 汇报给我的总结
	 */
	var getWorkAtmeHtml = exports.getWorkAtmeHtml = function getWorkAtmeHtml() {
	    var temp = '\n        <div class="head-center" id="searchHead">\n            <div class="outstore out">\n                <span>\u4E0A\u62A5\u65F6\u95F4\uFF1A</span> <i class="icon"></i> \n                <input type="text" class="form-control date start" id="startTime" name="startTime" readonly="readonly"> \n                <span class="crossbar">\u2014</span> <i class="icon"></i> \n                <input type="text" class="form-control date end" id="endTime" name="endTime" readonly="readonly">\n            </div>\n            <select class="select" id="selectSearch">\n                <option value="salesmanName">\u4E0A\u62A5\u4EBA</option>\n                <option value="position">\u4EBA\u5458\u89D2\u8272</option>\n            </select>\n            <input type="text" class="search" value="" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9" id="searchInput">\n            <input type="button" id="queryBtnSearch" class="search-btn" value="\u641C\u7D22">\n            <div class="outstore"></div>\n            <a href="javascript:;" id="exportExcel" class="export"><i class="icon"></i>\u5BFC\u51FA</a>\n        </div>\n    \n        <div class="head-bottom">\n            <div class="option-box" id="muilSelectOption">\n                <div class="option-con">\n                    <div class="option-list clearfix none"><div class="option-l no-under"><span>\u4E0A\u62A5\u65F6\u95F4</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="time">\n                                <span class="all act"></span>\n                                <span class="" val="three">\u8FD1\u4E09\u5929</span>\n                                <span class="" val="week">\u8FD1\u4E00\u5468</span>\n                                <span class="" val="month">\u8FD1\u4E00\u6708</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="option-list clearfix none">\n                        <div class="option-l "><span>\u603B\u7ED3\u7C7B\u578B</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="planType">\n                                <span class="all act">\u5168\u90E8</span>\n                                <span class="" val="\u65E5\u62A5">\u65E5\u62A5</span>\n                                <span class="" val="\u5468\u62A5">\u5468\u62A5</span>\n                                <span class="" val="\u6708\u62A5">\u6708\u62A5</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="option-list clearfix none">\n                        <div class="option-l "><span>\u67E5\u9605\u72B6\u6001</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="readFlag">\n                                <span class="all act" val="\u5168\u90E8">\u5168\u90E8</span>\n                                <span class="" val="\u5DF2\u8BFB">\u5DF2\u8BFB</span>\n                                <span class="" val="\u672A\u8BFB">\u672A\u8BFB</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="option-list clearfix none">\n                        <div class="option-l "><span>\u5F52\u5C5E\u7EC4\u7EC7</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="branchName">\n                                <span class="all act">\u5168\u90E8</span>\n                            </div>\n                        </div>\n                        <div class="option-btn">\n                            <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                        </div>\n                    </div>\n                        <div class="option-list clearfix none">\n                        <div class="option-l "><span>\u4EBA\u5458\u89D2\u8272</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="position">\n                                <span class="all act">\u5168\u90E8</span>\n                            </div>\n                        </div>\n                        <div class="option-btn">\n                            <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                        </div>\n                    </div>\n                    <div class="option-list clearfix none">\n                        <div class="option-l "><span>\u4E0A\u62A5\u4EBA</span></div>\n                        <div class="option-r">\n                            <div class="option-r-c" name="salesmanId">\n                                <span class="all act">\u5168\u90E8</span>\n                            </div>\n                        </div>\n                        <div class="option-btn">\n                            <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="btn-box"> <input type="button" value="\u786E\u5B9A" class="sure-btn" id="searchBtn2">\n                 <input type="button" value="\u6E05\u7A7A\u7B5B\u9009" class="clear-btn" id="clearBtn2"></div>\n            </div>\n            <div class="more">\n                <a href="javascript:;" id="zhanKai" class=""><i class="icon"></i></a>\n                <!--\u5F53\u7BAD\u5934\u5411\u4E0B\u65F6\u6DFB\u52A0\u7C7B\u540Darrow-bottom\uFF0C\u7BAD\u5934\u5411\u4E0A\u65F6\u53BB\u6389\u7C7B\u540Darrow-bottom-->\n            </div>\n        </div>\t\n    \n        <div class="m-body">\n            <div class="content">\n                <table class="con-table tags-table">\n                    <thead id="thead">\n                        <tr>\n                            <td name="a.plantype">\u603B\u7ED3\u7C7B\u578B</td>\n                            <td name="b.readflag">\u67E5\u8BE2\u72B6\u6001</td>\n                            <td name="c.branch_name">\u5F52\u5C5E\u7EC4\u7EC7</td>\n                            <td name="c.salesman_name">\u4E0A\u62A5\u4EBA</td>\n                            <td name="c.position">\u4EBA\u5458\u89D2\u8272</td>\n                            <td name="a.createTime">\u4E0A\u62A5\u65F6\u95F4</td>\n                            <td>\u64CD\u4F5C</td>\n                        </tr>\n                    </thead>\n                    <tbody id="tbody"></tbody>\n                </table>\n            </div>\n            <div id="page"></div>\n        </div>\n        ';
	    $("#changeTab").html(temp);
	    tbHeight();
	    atMeSearch.doAction();
	};

	/**
	 * 初始化基础的点击事件
	 */
	function initBaseClick() {

	    //初始化时间
	    $("#searchHead input.date").unbind().click(function (e) {
	        dateUtils.timeClick($(this).attr("id"), "dd", function () {});
	    });

	    //筛选点击展开收缩箭头
	    $('#zhanKai').unbind().click(function () {
	        $(this).toggleClass('arrow-bottom');
	        if ($(this).hasClass("arrow-bottom")) {
	            $("#muilSelectOption").hide();
	            tbHeight();
	        } else {
	            $("#muilSelectOption").show();
	            tbHeight();
	        }
	    });
	}

	/**
	 * 总结报表
	 */
	var getWorkReportHtml = exports.getWorkReportHtml = function getWorkReportHtml() {
	    var temp = '\n    <div class="head-center" id="searchHead">\n        <div class="outstore out">\n            <span>\u4E0A\u62A5\u65F6\u95F4\uFF1A</span> <i class="icon"></i> \n            <input type="text" class="form-control date start" id="startTime" name="startTime" readonly="readonly"> \n            <span class="crossbar">\u2014</span> <i class="icon"></i> \n            <input type="text" class="form-control date end" id="endTime" name="endTime" readonly="readonly">\n        </div>\n\n        <select class="select" id="selectSearch">\n            <option value="salesmanName">\u4E0A\u62A5\u4EBA</option>\n            <option value="atmeName">\u6C47\u62A5\u5BF9\u8C61</option>\n            <option value="position">\u4EBA\u5458\u89D2\u8272</option>\n        </select>\n        <input type="text" class="search" value="" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9" id="searchInput">\n        <input type="button" id="queryBtnSearch" class="search-btn" value="\u641C\u7D22">\n        <div class="outstore"></div>\n        <a href="javascript:;" id="exportExcel" class="export"><i class="icon"></i>\u5BFC\u51FA</a>\n    </div>\n\n    <div class="head-bottom">\n        <div class="option-box" id="muilSelectOption">\n            <div class="option-con">\n                <div class="option-list clearfix none">\n                    <div class="option-l no-under"><span>\u4E0A\u62A5\u65F6\u95F4</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="time">\n                            <span class="all act"></span>\n                            <span class="" val="three">\u8FD1\u4E09\u5929</span>\n                            <span class="" val="week">\u8FD1\u4E00\u5468</span>\n                            <span class="" val="month">\u8FD1\u4E00\u6708</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u603B\u7ED3\u7C7B\u578B</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="planType">\n                            <span class="all act">\u5168\u90E8</span>\n                            <span class="" val="\u65E5\u62A5">\u65E5\u62A5</span>\n                            <span class="" val="\u5468\u62A5">\u5468\u62A5</span>\n                            <span class="" val="\u6708\u62A5">\u6708\u62A5</span>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u5F52\u5C5E\u7EC4\u7EC7</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="branchName">\n                            <span class="all act">\u5168\u90E8</span>\n                        </div>\n                    </div>\n                    <div class="option-btn">\n                        <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                    </div>\n                </div>\n                    <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u4EBA\u5458\u89D2\u8272</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="position">\n                            <span class="all act">\u5168\u90E8</span>\n                        </div>\n                    </div>\n                    <div class="option-btn">\n                        <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                    </div>\n                </div>\n                <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u4E0A\u62A5\u4EBA</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="salesmanId">\n                            <span class="all act">\u5168\u90E8</span>\n                        </div>\n                    </div>\n                    <div class="option-btn">\n                        <div class="bt">\u66F4\u591A&nbsp;&nbsp;&gt;</div>\n                    </div>\n                </div>\n                <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u95EE\u9898\u6807\u7B7E</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="lableName">\n                            <span class="all act">\u5168\u90E8</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="option-list clearfix none">\n                    <div class="option-l "><span>\u4E1A\u52A1\u90E8\u95E8</span></div>\n                    <div class="option-r">\n                        <div class="option-r-c" name="business">\n                            <span class="all act" val="\u5168\u90E8">\u5168\u90E8</span>\n                            <span class="" val="huaweiFD" name="\u534E\u4E3AFD">\u534E\u4E3AFD</span>\n                            <span class="" val="huaweiPJ" name="\u534E\u4E3A\u914D\u4EF6\u4E0E\u878D\u5408">\u534E\u4E3A\u914D\u4EF6\u4E0E\u878D\u5408</span>\n                            <span class="" val="huaweiStore" name="\u534E\u4E3A\u4F53\u9A8C\u5E97">\u534E\u4E3A\u4F53\u9A8C\u5E97</span>\n                            <span class="" val="huaweiSB" name="\u534E\u4E3A\u7701\u5305">\u534E\u4E3A\u7701\u5305</span>\n                            <span class="" val="samsung" name="\u4E09\u661F\u4E1A\u52A1\u4E8B\u4E1A\u90E8">\u4E09\u661F\u4E1A\u52A1\u4E8B\u4E1A\u90E8</span>\n                            <span class="" val="distribution" name="\u5206\u9500\u4E1A\u52A1\u4E8B\u4E1A\u90E8">\u5206\u9500\u4E1A\u52A1\u4E8B\u4E1A\u90E8</span>\n                            <span class="" val="others" name="\u5176\u4ED6">\u5176\u4ED6</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="btn-box"> <input type="button" value="\u786E\u5B9A" class="sure-btn" id="searchBtn2"> \n            <input type="button" value="\u6E05\u7A7A\u7B5B\u9009" class="clear-btn" id="clearBtn2"></div>\n        </div>\n        <div class="more">\n            <a href="javascript:;" id="zhanKai" class=""><i class="icon"></i></a>\n            <!--\u5F53\u7BAD\u5934\u5411\u4E0B\u65F6\u6DFB\u52A0\u7C7B\u540Darrow-bottom\uFF0C\u7BAD\u5934\u5411\u4E0A\u65F6\u53BB\u6389\u7C7B\u540Darrow-bottom-->\n        </div>\n    </div>\n\n    <div class="m-body">\n        <div class="content">\n            <table class="con-table tags-table">\n                <thead id="thead">\n                    <tr>\n                        <td name="a.plantype">\u603B\u7ED3\u7C7B\u578B</td>\n                        <td name="c.branch_name">\u5F52\u5C5E\u7EC4\u7EC7</td>\n                        <td name="b.name">\u4E1A\u52A1\u90E8\u95E8</td>\n                        <td name="b.remark">\u603B\u7ED3\u5185\u5BB9</td>\n                        <td name="a.question">\u95EE\u9898\u53CA\u6240\u9700\u8D44\u6E90</td>\n                        <td class="no">\u95EE\u9898\u6807\u7B7E</td>\n                        <td name="c.salesman_name">\u4E0A\u62A5\u4EBA</td>\n                        <td name="c.position">\u4EBA\u5458\u89D2\u8272</td>\n                        <td class="no">\u6C47\u62A5\u5BF9\u8C61</td>\n                        <td name="a.updatetime">\u4E0A\u62A5\u65F6\u95F4</td>\n                    </tr>\n                </thead>\n                <tbody id="tbody"></tbody>\n            </table>\n        </div>\n        <div id="page"></div>\n    </div>\n    ';
	    $("#changeTab").html(temp);
	    tbHeight();
	    reportSearch.doAction();
	};

	//汇报给我的总结
	function tbHeight() {
	    $(".atme-main").height(parseInt(parseInt($("body").height()) - 70));
	    var tHeight = $(".atme-main").height() - $(".atme-main .head-center").height() - $(".atme-main .head-bottom").height() - 40;
	    $(".atme-main .content .tags-table tbody").css("max-height", tHeight - 65);
	    initBaseClick();
	    //隐藏弹出层
	    $("body").click(function (e) {
	        if (!$(this).hasClass("view")) {
	            iframeUtils.hideSecondIframe();
	        }
	    });
	}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.doAction = undefined;

	var _StringUtils = __webpack_require__(7);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _ajaxUtils = __webpack_require__(4);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	var _iframeUtils = __webpack_require__(9);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var orderBySql = "";
	var doAction = exports.doAction = function doAction() {

		//搜索
		$("#searchBtn2,#queryBtnSearch").click(function () {
			if (!$('#zhanKai').hasClass("arrow-bottom")) {
				$('#zhanKai').click();
			}
			//加载表格
			inintTable(10, 1);
		});
		//清空
		$("#clearBtn2").click(function () {
			clearGlobal();
			//加载表格
			inintTable(10, 1);
		});

		//导出
		$("#exportExcel").click(function () {
			var param = getSearchParam();
			param.exportExcel = "true";
			ajaxUtils.submitExcleGlobal("crm/workSummary/exportExcelAtme", param);
		});

		//点击表头排序
		$("#thead td:not(.no)").click(function () {
			$(this).toggleClass("desc");
			var name = $(this).attr("name");
			var desc = $(this).hasClass("desc") ? "desc" : "";
			orderBySql = name + " " + desc;
			inintTable(10, 1);
		});

		inintData();
	};
	/**
	 * 初始化数据
	 */
	function inintData() {
		var body = getSearchParam();
		body.reportId = "workAtme";
		ajaxUtils.sendAjax("crm/workSummary/getBranchList", body, null, function (data) {
			if (null != data) {
				getSearchSpanHtml(data.branchList, "branchName", "BRANCH_NAME", "BRANCH_ID"); //归属组织
				getSearchSpanHtml(data.positionList, "position", "POSITION", "POSITION_ID"); //人员角色
				getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
			}
			clickSpan();
		});
		//加载表格
		inintTable(10, 1);
	}
	//初始化搜索条件
	function getSearchSpanHtml(list, name, showName, val) {
		var temp = '<span class="all act">全部</span>';
		if (null != list) {
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				var textName = showName == "BRANCH_NAME" ? StringUtils.getSplitStr(item[showName], '_') : StringUtils.getValue(item[showName]);
				temp += "<span class='' val='" + item[val] + "'>" + textName + "</span>";
			}
		}
		$(".option-r-c[name='" + name + "']").html(temp);
	}
	//点击事件  联动刷新
	function clickSpan() {
		$(".head-bottom .option-con .option-r-c span").unbind().click(function () {

			if ($(this).parent().attr("name") == "time") {
				//单选 上报时间
				$(this).toggleClass("act");
				$(this).siblings().removeClass("act");
			} else {
				if ($(this).siblings().hasClass("act")) {
					$(this).siblings(".all").removeClass("act");
				} else {
					$(this).siblings(".all").addClass("act");
				}
				if ($(this).hasClass("all")) {
					$(this).siblings().removeClass("act");
					$(this).attr("class", "all act");
				} else {
					$(this).toggleClass("act");
				}
			}

			if ($(this).parent().attr("name") == "branchName") {
				//归属组织
				var body = getSearchParam();
				body.type = "branchName";
				body.reportId = "workAtme";
				ajaxUtils.sendAjax("crm/workSummary/getBranchList", body, null, function (data) {
					if (null != data) {
						getSearchSpanHtml(data.positionList, "position", "POSITION", "POSITION_ID"); //人员角色
						getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
					}
					clickSpan();
				});
			} else if ($(this).parent().attr("name") == "position") {
				//人员角色
				var _body = getSearchParam();
				_body.type = "position";
				_body.reportId = "workAtme";
				ajaxUtils.sendAjax("crm/workSummary/getBranchList", _body, null, function (data) {
					if (null != data) {
						getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
					}
					clickSpan();
				});
			}
		});

		//更多
		$(".option-btn .bt").unbind().click(function () {
			if ($(this).hasClass("m")) {
				$(this).removeClass("m");
				$(this).html("更多&nbsp;&nbsp;>");
				$(this).parent().prev().css("height", "40px");
			} else {
				$(this).addClass("m");
				$(this).html("收起&nbsp;&nbsp;∨");
				$(this).parent().prev().css("height", "auto");
			}
		});
	}

	//加载表格
	function inintTable(pageSize, pageNum) {
		var body = getSearchParam();
		body.pageSize = pageSize;
		body.pageNum = pageNum;
		body.orderBySql = orderBySql;
		ajaxUtils.sendAjax("crm/workSummary/getWorkAtmeList", body, "page", function (data) {
			$("#tbody").html(render(data.data));
			$("#tbody a.view").unbind().click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).parent().siblings(".read").html("已读");
				var param = { "viewId": $(this).attr("val") };
				iframeUtils.createIframe('' + Constant.SECOND_LEVEL_IFRAME_NAME, e.target.href, '#contentContainer', param);
			});
		}, inintTable);
	}
	function render(list) {
		var temp = '    \n    ' + (list == null ? "" : list.map(function (item) {
			return '\n            <tr>\n\t\t\t\t<td>' + item.PLANTYPE + '</td>\n\t\t\t\t<td class="read">' + item.READFLAG + '</td>\n\t\t\t\t<td>' + StringUtils.getSplitStr(item.BRANCH_NAME, '_') + '</td>\n\t\t\t\t<td>' + item.SALESMAN_NAME + '</td>\n\t\t\t\t<td>' + item.POSITION + '</td>\n\t\t\t\t<td>' + item.CREATETIME + '</td>\n\t\t\t\t<td><a val="' + item.ID + '" class="view" href="./workAtmeView.html">\u67E5\u770B\u660E\u7EC6</a></td>\n\t\t\t</tr>\n            ';
		}).join('')) + '\n    ';
		return temp;
	}

	/**
	 * 
	 * @param {*获取参数} divId 
	 * @param {*} flag 
	 */
	function getSearchParam() {
		var param = {};
		//多选
		param.startTime = StringUtils.getValue($("#startTime").val()); //上报时间
		param.endTime = StringUtils.getValue($("#endTime").val()); //上报时间
		param[$("#selectSearch").val()] = StringUtils.getValue($("#searchInput").val());
		$(".option-r-c").each(function (i, ob) {
			var arrayList = [];
			if ($(this).attr("name") == "time") {
				if ($(ob).find("span.act:not(.all)").length > 0) {
					param[$(ob).attr("name")] = $(ob).find("span.act:not(.all)").attr("val");
				}
			} else {
				if ($(ob).find("span.act:not(.all)").length > 0) {
					$(ob).find("span.act:not(.all)").each(function (j, obj) {
						arrayList.push($(obj).attr("val")); //$(obj).html()
					});
					param[$(ob).attr("name") + "_in"] = arrayList; //.join(",");
				}
			}
		});
		if (StringUtils.getValue(param.startTime) != "" || StringUtils.getValue(param.endTime) != "") {
			delete param.time;
		}
		return $.extend({}, param, StringUtils.getRequestParam());
	}

	/**
	 * 清空
	 */
	function clearGlobal(divId) {
		if (divId) {
			$("#" + divId).find("input[type='text']").each(function (i, o) {
				//select
				$(o).val("");
			});
		}
		$("span.act:not(.all)").removeClass("act");
		$("span.all").addClass("act");
		orderBySql = "";
	}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.doAction = undefined;

	var _StringUtils = __webpack_require__(7);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _ajaxUtils = __webpack_require__(4);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	var _iframeUtils = __webpack_require__(9);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var orderBySql = "";
	var doAction = exports.doAction = function doAction() {

		//搜索
		$("#searchBtn2,#queryBtnSearch").click(function () {
			if (!$('#zhanKai').hasClass("arrow-bottom")) {
				$('#zhanKai').click();
			}
			//加载表格
			inintTable(10, 1);
		});
		//清空
		$("#clearBtn2").click(function () {
			clearGlobal();
			//加载表格
			inintTable(10, 1);
		});

		//导出
		$("#exportExcel").click(function () {
			var param = getSearchParam();
			param.exportExcel = "true";
			ajaxUtils.submitExcleGlobal("crm/workSummary/exportExcelReport", param);
		});

		//点击表头排序
		$("#thead td:not(.no)").click(function () {
			$(this).toggleClass("desc");
			var name = $(this).attr("name");
			var desc = $(this).hasClass("desc") ? "desc" : "";
			orderBySql = name + " " + desc;
			inintTable(10, 1);
		});

		inintData();
	};
	/**
	 * 初始化数据
	 */
	function inintData() {
		var body = getSearchParam();
		body.reportId = "workReport";
		ajaxUtils.sendAjax("crm/workSummary/getBranchList", body, null, function (data) {
			if (null != data) {
				getSearchSpanHtml(data.branchList, "branchName", "BRANCH_NAME", "BRANCH_ID"); //归属组织
				getSearchSpanHtml(data.positionList, "position", "POSITION", "POSITION_ID"); //人员角色
				getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
				getSearchSpanHtml(data.lableList, "lableName", "LABLENAME", "LABLENAME"); //上报人
			}
			clickSpan();
		});
		//加载表格
		inintTable(10, 1);
	}
	//初始化搜索条件
	function getSearchSpanHtml(list, name, showName, val) {
		var temp = '<span class="all act">全部</span>';
		if (null != list) {
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				var textName = showName == "BRANCH_NAME" ? StringUtils.getSplitStr(item[showName], '_') : StringUtils.getValue(item[showName]);
				temp += "<span class='' val='" + item[val] + "'>" + textName + "</span>";
			}
		}
		$(".option-r-c[name='" + name + "']").html(temp);
	}
	//点击事件  联动刷新
	function clickSpan() {
		$(".head-bottom .option-con .option-r-c span").unbind().click(function () {

			if ($(this).parent().attr("name") == "time") {
				//单选 上报时间
				$(this).toggleClass("act");
				$(this).siblings().removeClass("act");
			} else {
				if ($(this).siblings().hasClass("act")) {
					$(this).siblings(".all").removeClass("act");
				} else {
					$(this).siblings(".all").addClass("act");
				}
				if ($(this).hasClass("all")) {
					$(this).siblings().removeClass("act");
					$(this).attr("class", "all act");
				} else {
					$(this).toggleClass("act");
				}
			}

			if ($(this).parent().attr("name") == "branchName") {
				//归属组织
				var body = getSearchParam();
				body.type = "branchName";
				body.reportId = "workReport";
				ajaxUtils.sendAjax("crm/workSummary/getBranchList", body, null, function (data) {
					if (null != data) {
						getSearchSpanHtml(data.positionList, "position", "POSITION", "POSITION_ID"); //人员角色
						getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
					}
					clickSpan();
				});
			} else if ($(this).parent().attr("name") == "position") {
				//人员角色
				var _body = getSearchParam();
				_body.type = "position";
				_body.reportId = "workReport";
				ajaxUtils.sendAjax("crm/workSummary/getBranchList", _body, null, function (data) {
					if (null != data) {
						getSearchSpanHtml(data.salesmanList, "salesmanId", "SALESMAN_NAME", "SALESMAN_ID"); //上报人
					}
					clickSpan();
				});
			}
		});

		//更多
		$(".option-btn .bt").unbind().click(function () {
			if ($(this).hasClass("m")) {
				$(this).removeClass("m");
				$(this).html("更多&nbsp;&nbsp;>");
				$(this).parent().prev().css("height", "40px");
			} else {
				$(this).addClass("m");
				$(this).html("收起&nbsp;&nbsp;∨");
				$(this).parent().prev().css("height", "auto");
			}
		});
	}

	//加载表格
	function inintTable(pageSize, pageNum) {
		var body = getSearchParam();
		body.pageSize = pageSize;
		body.pageNum = pageNum;
		body.orderBySql = orderBySql;
		ajaxUtils.sendAjax("crm/workSummary/getWorkReportList", body, "page", function (data) {
			$("#tbody").html(render(data.data));
			$("#tbody a.view").unbind().click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				var param = { "viewId": $(this).attr("val") };
				iframeUtils.createIframe('' + Constant.SECOND_LEVEL_IFRAME_NAME, e.target.href, '#contentContainer', param);
			});
		}, inintTable);
	}
	function render(list) {
		/*总结类型  归属组织  业务部门  总结内容  问题及所需资源  问题标签  上报人  人员角色  汇报对象  上报时间*/
		var temp = '    \n    ' + (list == null ? "" : list.map(function (item) {
			return '\n            <tr>\n\t\t\t\t<td>' + item.PLANTYPE + '</td>\n                <td>' + StringUtils.getSplitStr(item.BRANCH_NAME, '_') + '</td>\n                <td>' + StringUtils.getValue(item.BUSINESSNAME) + '</td>\n                <td>' + StringUtils.globReplace(item.REMARK) + '</td>\n                <td>' + StringUtils.globReplace(item.QUESTION) + '</td>\n                <td>' + StringUtils.getValue(item.LABLENAMES) + '</td>\n\t\t\t\t<td>' + item.SALESMAN_NAME + '</td>\n                <td>' + item.POSITION + '</td>\n                <td>' + item.ATMENAMES + '</td>\n\t\t\t\t<td>' + item.CREATETIME + '</td>\n\t\t\t</tr>\n            ';
		}).join('')) + '\n    ';
		return temp;
	}

	/**
	 * 
	 * @param {*获取参数} divId 
	 * @param {*} flag 
	 */
	function getSearchParam() {
		var param = {};
		//多选
		param.startTime = StringUtils.getValue($("#startTime").val()); //上报时间
		param.endTime = StringUtils.getValue($("#endTime").val()); //上报时间
		param[$("#selectSearch").val()] = StringUtils.getValue($("#searchInput").val());
		$(".option-r-c").each(function (i, ob) {
			var arrayList = [];
			if ($(this).attr("name") == "time") {
				if ($(ob).find("span.act:not(.all)").length > 0) {
					param[$(ob).attr("name")] = $(ob).find("span.act:not(.all)").attr("val");
				}
			} else {
				if ($(ob).find("span.act:not(.all)").length > 0) {
					$(ob).find("span.act:not(.all)").each(function (j, obj) {
						arrayList.push($(obj).attr("val")); //$(obj).html()
					});
					param[$(ob).attr("name") + "_in"] = arrayList; //.join(",");
				}
			}
		});
		if (StringUtils.getValue(param.startTime) != "" || StringUtils.getValue(param.endTime) != "") {
			delete param.time;
		}
		return $.extend({}, param, StringUtils.getRequestParam());
	}

	/**
	 * 清空
	 */
	function clearGlobal(divId) {
		if (divId) {
			$("#" + divId).find("input[type='text']").each(function (i, o) {
				//select
				$(o).val("");
			});
		}
		$("span.act:not(.all)").removeClass("act");
		$("span.all").addClass("act");
		orderBySql = "";
	}

/***/ })

/******/ });
//# sourceMappingURL=workAtme.map