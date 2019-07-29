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

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _iframeUtils = __webpack_require__(10);

	var iframeUtils = _interopRequireWildcard(_iframeUtils);

	var _newPlan = __webpack_require__(86);

	var newPlan = _interopRequireWildcard(_newPlan);

	var _newStorePlan = __webpack_require__(88);

	var newStorePlan = _interopRequireWildcard(_newStorePlan);

	var _newTempVisit = __webpack_require__(87);

	var newTempVisit = _interopRequireWildcard(_newTempVisit);

	var _newTempStoreVisit = __webpack_require__(89);

	var newTempStoreVisit = _interopRequireWildcard(_newTempStoreVisit);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var visitPlanList = null;
	$(document).ready(function () {
		window.receiveMsg = function (data) {
			iframeUtils.showSecondIframe();
			$("#planRowId").val(data.planRowId);
			$("#planEaiId").val(data.planEaiId);
			$('#chooseCustomerCodes').val(data.chooseCustomerCodes);
			$('#chooseStoreCodes').val(data.chooseStoreCodes);
			$("#chooseVisitInfo").val(data.chooseVisitInfo);
			$('#currentSelectDay').val(data.currentSelectDay);
			$('#dayPlanContent').val(data.workPlan);

			visitPlanList = data.visitPlanList;

			/** 查看计划不允许保存 */
			if (data.buttonName == '查看') {
				$('#addDayPlanOkBtn').attr("style", "display:none;");
				$('#addDayPlanCancleBtn').html("返回");
			} else {
				$('#addDayPlanOkBtn').attr("style", "");
				$('#addDayPlanCancleBtn').html("取消");
			}

			if (data.workPlan != undefined && data.workPlan != '') {
				$("#dayPlanContent").css("background", "none");
			}

			if (data.isTemp == '1') {
				$('#customerOrStorePopList').attr('style', 'display:none;');
				$('#tempCustomerOrStorePopList').attr('style', '');
				newTempVisit.load();
			} else {
				$('#customerOrStorePopList').attr('style', '');
				$('#tempCustomerOrStorePopList').attr('style', 'display:none;');
				newPlan.load();
			}
			$('#listType').val("customer");

			//选中复选框，其他客户可编辑
			$("#tempOtherCustomerCheckBox").unbind().click(function () {
				if ($(this).prop("checked")) {
					$("#tempPlanOtherCustomer").prop("readonly", "");
				} else {
					$("#tempPlanOtherCustomer").prop("readonly", "readonly");
				}
			});
		};

		//返回
		$('#addDayPlanCancleBtn,#addTempDayPlanCancleBtn,#customerOrStorePopClose,#tempCustomerOrStorePopClose').unbind().on('click', function () {
			$("#visitCustomerListBtn").attr("class", "active");
			$("#visitStoreListBtn").attr("class", "");
			iframeUtils.hideSecondIframe();
		});

		//当textarea失去焦点，内容为空时，背景图也为空
		$("#dayPlanContent").unbind().blur(function () {
			if ($("#dayPlanContent").val() != "") {
				$("#dayPlanContent").css("background", "none");
			}
		});

		/** 加载制定拜访计划客户列表 #newPlanAddButton */
		$('#visitCustomerListBtn').click(function (e) {
			//清空搜索内容
			$("#visitCustomerListBtn").attr("class", "active");
			$("#visitStoreListBtn").attr("class", "");
			$("#newPlanListSearchText").val("");

			//设置客户与门店切换按钮样式
			$("#visitStoreListBtn").attr("class", "");
			$(this).attr("class", "active");

			//清空列表
			$('#newPlanList').html("");

			newPlan.load();
			$('#listType').val("customer");
		});

		/** 加载制定拜访计划门店列表 */
		$('#visitStoreListBtn').click(function () {
			//设置客户与门店切换按钮样式
			$("#visitCustomerListBtn").attr("class", "");
			$(this).attr("class", "active");
			//清空搜索内容
			$("#newPlanListSearchText").val("");
			//清空列表
			// $('#newPlanList').html("");
			newStorePlan.load();
			$('#listType').val("store");
		});

		//门店或客户搜索
		function searchContentForCustomerOrStore() {
			if ($('#listType').val() == 'store') {
				newStorePlan.load('1');
			} else {
				newPlan.load('1');
			}
		}
		//回车事件
		$("#newPlanListSearchText").unbind().keydown(function () {
			if (event.keyCode == "13") {
				searchContentForCustomerOrStore();
			}
		});
		//按钮事件
		$('#newPlanListSearch').unbind().click(function () {
			searchContentForCustomerOrStore();
		});

		/** 加载临时拜访计划客户列表 */
		$('#tempVisitCustomerListBtn').click(function () {
			//清空搜索内容
			$(this).attr("class", "active");
			$("#tempVisitStoreListBtn").attr("class", "");
			$("#newTempVisitSearchText").val("");

					//设置客户与门店切换按钮样式
			$("#tempVisitStoreListBtn").attr("class", "");
			$(this).attr("class", "active");
			//清空列表
			// $('#newTempVisit').html("");

			newTempVisit.load();
			$('#listType').val("customer");
		});

		/** 加载临时拜访计划门店列表 */
		$('#tempVisitStoreListBtn').click(function () {
			//设置客户与门店切换按钮样式
			$(this).attr("class", "active");
			$("#tempVisitCustomerListBtn").attr("class", "");

				//清空搜索内容
			$("#newTempVisitSearchText").val("");
			//清空列表
			// $('#newTempVisit').html("");

			newTempStoreVisit.load();
			$('#listType').val("store");
		});

		//门店或客户搜索
		function searchTempContentForCustomerOrStore() {
			if ($('#listType').val() == 'store') {
				newTempStoreVisit.load('1');
			} else {
				newTempVisit.load('1');
			}
		}
		//回车事件
		$("#newTempVisitSearchText").unbind().keydown(function () {
			if (event.keyCode == "13") {
				searchTempContentForCustomerOrStore();
			}
		});
		//按钮事件
		$('#newTempVisitSearch').unbind().click(function () {
			searchTempContentForCustomerOrStore();
		});

		/** 新增拜访计划 */
		var editPlanTag = '0';
		$('#addDayPlanOkBtn').unbind().click(function () {
			if (editPlanTag == '1') {
				return;
			}
			editPlanTag = '1';
			var planRowId = $("#planRowId").val();
			var planEaiId = $("#planEaiId").val();
			var planDate = $("#currentSelectDay").val();
			var planComment = StringUtils.wrongCharacter($("#dayPlanContent").val());
			var listType = $("#listType").val();
			var cusInfo = $("#chooseVisitInfo").val();
			if (planComment == '') {
				layerUtils.error("请输入计划内容!");
				editPlanTag = '0';
				return;
			}
			var temp = planComment.replace(/[^\u4e00-\u9fa5]/gi, "");
			if (planComment.length - temp.length + temp.length * 3 > 1500) {
				var msg = planRowId == '' ? "工作计划内容长度超限,不允许添加!" : "工作计划内容长度超限,不允许修改!";
				layerUtils.error(msg);
				editPlanTag = '0';
				return;
			}

			layerUtils.waitingOpen(); //打开加载层
			$.ajax({
				type: "POST",
				url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addCustomerVisitPlan',
				data: { planComment: planComment, cusInfo: cusInfo, planEaiId: planEaiId, planRowId: planRowId, planDate: planDate, listType: listType },
				dataType: "json",
				success: function success(data) {
					if (data.status == 'true') {
						visitPlanList.referenceHtml(); //刷新页面
						//inintWorkPlan(planDate);
            window.show = "true"; //后添加的
						$("#addDayPlanCancleBtn").click();
						$('#newPlanCustomerList').html("");
						$('#newPlanStoreList').html("");
						$("#dayPlanContent").val("");
						$("#chooseVisitInfo").val("");
						$("#chooseCustomerCodes").val("");
						$("#chooseStoreCodes").val("");

						//zhuge.track('新增拜访计划');
					} else if (data.message != '') {
						layerUtils.error(data.message);
					} else {
						layerUtils.error("添加失败!");
					}
					layerUtils.waitingClose(); //关闭加载层
					editPlanTag = '0';
				},
				error: function error(e) {
					console.error(e);
					layerUtils.waitingClose(); //关闭加载层
					editPlanTag = '0';
				}
			});
		});
    
    //工作计划提交 后添加的
    window.Show = function () {
			if (editPlanTag == '1') {
				return;
			}
			editPlanTag = '1';
			var planRowId = $("#planRowId").val();
			var planEaiId = $("#planEaiId").val();
			var planDate = $("#currentSelectDay").val();
			var planComment = StringUtils.wrongCharacter($("#dayPlanContent").val());
			var listType = $("#listType").val();
			var cusInfo = $("#chooseVisitInfo").val();
			if (planComment == '') {
				layerUtils.error("请输入计划内容!");
				editPlanTag = '0';
				return;
			}
			var temp = planComment.replace(/[^\u4e00-\u9fa5]/gi, "");
			if (planComment.length - temp.length + temp.length * 3 > 1500) {
				var msg = planRowId == '' ? "工作计划内容长度超限,不允许添加!" : "工作计划内容长度超限,不允许修改!";
				layerUtils.error(msg);
				editPlanTag = '0';
				return;
			}
			layerUtils.waitingOpen(); //打开加载层
			$.ajax({
				type: "POST",
				url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addCustomerVisitPlan',
				data: { planComment: planComment, cusInfo: cusInfo, planEaiId: planEaiId, planRowId: planRowId, planDate: planDate, listType: listType },
				dataType: "json",
				success: function success(data) {
          
					if (data.status == 'true') {
						visitPlanList.referenceHtml(); //刷新页面
						//inintWorkPlan(planDate);
						$("#addDayPlanCancleBtn").click();
            $('#newPlanCustomerList').html("");
						$('#newPlanStoreList').html("");
						$("#dayPlanContent").val("");
						$("#chooseVisitInfo").val("");
						$("#chooseCustomerCodes").val("");
						$("#chooseStoreCodes").val("");
						// zhuge.track('新增拜访计划');
					} else if (data.message != '') {
						layerUtils.error(data.message);
					} else {
						layerUtils.error("添加失败!");
					}
					layerUtils.waitingClose(); //关闭加载层
          editPlanTag = '0';
				},
				error: function error(e) {
					console.error(e);
					layerUtils.waitingClose(); //关闭加载层
					editPlanTag = '0';
				}
			});
		};

		var clickCountTemp = 0;
		/** 新增临时拜访计划 */
		$('#addTempDayPlanOkBtn').unbind().click(function (e) {
			clickCountTemp++;
			e.preventDefault();
			if (clickCountTemp > 1) {
				return;
			} else {
				var actionDate = $("#currentSelectDay").val();
				var listType = $("#listType").val();
				var cusInfo = "";
				if (listType == 'customer') {
					$("#newTempCustomerVisit input[name='newCustomerTempPlanChk']:checked").each(function () {
						cusInfo += $(this).val() + ",";
					});
				} else {
					$("#newTempStoreVisit input[name='newStoreTempPlanChk']:checked").each(function () {
						cusInfo += $(this).val() + ",";
					});
				}
				var otherCustomer = $("#tempPlanOtherCustomer").val();
				if (cusInfo == "" && otherCustomer == "") {
					layerUtils.info("请选择！");
					clickCountTemp = 0;
					return;
				}
				if (otherCustomer.length * 3 > 150) {
					layerUtils.info("手填客户名称长度超限,不允许添加!");
					clickCountTemp = 0;
					return;
				}

				if (cusInfo != "" && otherCustomer != "") {
					otherCustomer = "";
					layerUtils.info("已经选择，不支持手填！");
					clickCountTemp = 0;
					return;
				}

				layerUtils.waitingOpen(); //打开加载层
				var obj_a = $(this);
				$.ajax({
					type: "POST",
					url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addTempCustomerVisitPlan',
					data: { cusInfo: cusInfo, actionDate: actionDate, listType: listType, otherCustomer: otherCustomer },
					dataType: "json",
					success: function success(data) {
						clickCountTemp = 0;
						layerUtils.waitingClose(); //关闭加载层
						if (data.status == 'true') {
							visitPlanList.referenceHtml(); //刷新页面
							$("#addTempDayPlanCancleBtn").click();
							$('#newTempCustomerVisit').html("");
							$('#newTempStoreVisit').html("");
							$("#tempPlanOtherCustomer").val("");
							$("#chooseCustomerCodes").val("");
							$("#chooseStoreCodes").val("");

							//zhuge.track('新增临时拜访计划');
						} else {
							layerUtils.error("添加失败!");
						}
					},
					error: function error(e) {
						clickCountTemp = 0;
						layerUtils.waitingClose(); //关闭加载层
					}
				});
			}
		});
  //临时拜访提交 后添加的
	window.tempShow = function (e) {
			clickCountTemp++;
			//e.preventDefault();
			if (clickCountTemp > 1) {
				return;
			} else {
				var actionDate = $("#currentSelectDay").val();
				var listType = $("#listType").val();
				var cusInfo = "";
				if (listType == 'customer') {
					$("#newTempCustomerVisit input[name='newCustomerTempPlanChk']:checked").each(function () {
						cusInfo += $(this).val() + ",";
					});
				} else {
					$("#newTempStoreVisit input[name='newStoreTempPlanChk']:checked").each(function () {
						cusInfo += $(this).val() + ",";
					});
				}

				var otherCustomer = $("#tempPlanOtherCustomer").val();
				if (cusInfo == "" && otherCustomer == "") {
					layerUtils.info("请选择！");
					clickCountTemp = 0;
					return;
				}
        if (otherCustomer.length * 3 > 150) {
					layerUtils.info("手填客户名称长度超限,不允许添加!");
					clickCountTemp = 0;
					return;
				}

				if (cusInfo != "" && otherCustomer != "") {
					otherCustomer = "";
					//$("#tempPlanOtherCustomer").val("");
					layerUtils.info("已经选择，不支持手填！");
					clickCountTemp = 0;
					return;
				}
				layerUtils.waitingOpen(); //打开加载层
				var obj_a = $(this);
				$.ajax({
					type: "POST",
					url: Constant.SERVER_ROOT + '/pttlCrm/visit/customerVisitPlan/addTempCustomerVisitPlan',
					data: { cusInfo: cusInfo, actionDate: actionDate, listType: listType, otherCustomer: otherCustomer },
					dataType: "json",
					success: function success(data) {
						clickCountTemp = 0;
						layerUtils.waitingClose(); //关闭加载层
						if (data.status == 'true') {
							visitPlanList.referenceHtml(); //刷新页面
							$("#addTempDayPlanCancleBtn").click();
              $('#newTempCustomerVisit').html("");
							$('#newTempStoreVisit').html("");
							$("#tempPlanOtherCustomer").val("");
							$("#chooseCustomerCodes").val("");
							$("#chooseStoreCodes").val("");
							// zhuge.track('新增临时拜访计划');
						} else {
							layerUtils.error("添加失败!");
						}
					},
					error: function error(e) {
						clickCountTemp = 0;
						layerUtils.waitingClose(); //关闭加载层
					}
				});
			}
		}
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
	    localStorage.setItem("layerLoading", "1"); //放入session
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
	    localStorage.removeItem("layerLoading"); //删除名称为“layerLoading”的信息。
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
	//export const SERVER_ROOT = 'http://192.168.1.227'; //服务端根路径
	//export const LOCAL_SERVER_ROOT = 'http://192.168.1.227'; //本地服务端根路径
	//export const PTDATASHOW_SERVER_ROOT = 'http://192.168.1.202/ptDataShow';

	//生产 228
	var SERVER_ROOT = exports.SERVER_ROOT = ''; //服务端根路径
	var LOCAL_SERVER_ROOT = exports.LOCAL_SERVER_ROOT = ''; //本地服务端根路径
	var PTDATASHOW_SERVER_ROOT = exports.PTDATASHOW_SERVER_ROOT = 'http://192.168.1.227/ptDataShow'; //'https://vcrm-uat.pttl.com:8080/ptDataShow';


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

/***/ 4:
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.submitExcleGlobal = exports.sendAjaxNoWaiting = exports.sendAjax = undefined;

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
				}else {
					var pageSize = $('#' + pageDivId + " #page_selectPageNum option:selected").val();
					body.pageSize = isNaN(pageSize) ? body.pageSize : pageSize;
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
	/**
	 * ajax进行封装 不带加载
	 * @param {*} service 请求路劲  类的命名空间+"/"+方法名的命名空间
	 * @param {*} body    请求参数，如果有分页需要添加分页参数
	 * @param {*} pageDivId 分页的div
	 * @param {*} callback 回调函数
	 * @param {*} Fn       当前需要分页的函数
	 */
	var sendAjaxNoWaiting = exports.sendAjaxNoWaiting = function sendAjaxNoWaiting(service, body, pageDivId, callback, Fn) {
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
				}else {
					var pageSize = $('#' + pageDivId + " #page_selectPageNum option:selected").val();
					body.pageSize = isNaN(pageSize) ? body.pageSize : pageSize;
				}
			}
			param = getJsonString(objextUtil.clone(body)); //保留原来的  克隆一个提交参数
		}
		$.ajax({
			type: 'POST',
			url: Constant.SERVER_ROOT + '/pttlCrm/' + service,
			data: param,
			dataType: 'json',
			success: function success(result) {
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

/***/ 6:
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

/***/ 7:
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
    	pageHtml += getSelectOptionHtml(pageSize);
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
         //跳页
	        $('#' + data.pageId + " li.skip_right_goto").unbind("click").on("click", function (e) {
	            gotoPageNum(this, data.pageId, fn);
	        });
         //选择页码
	        $('#' + data.pageId + " #page_selectPageNum").unbind("change").on("change", function (e) {
	            fn(parseInt($(this).val()), 1);
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
  
	//获取分页的 select条目
	function getSelectOptionHtml(pageSize) {
	    var option = "<li>显示<select id='page_selectPageNum'>";
	    if (pageSize == 10) option += "<option value='10' selected='selected'>10</option>";else option += "<option value='10'>10</option>";
	    if (pageSize == 20) option += "<option value='20' selected='selected'>20</option>";else option += "<option value='20'>20</option>";
	    if (pageSize == 50) option += "<option value='50' selected='selected'>50</option>";else option += "<option value='50'>50</option>";
	    if (pageSize == 100) option += "<option value='100' selected='selected'>100</option>";else option += "<option value='100'>100</option>";
	    if (pageSize == 200) option += "<option value='200' selected='selected'>200</option>";else option += "<option value='200'>200</option>";
	    option += "</select>行</li>";
	    return option;
	}

/***/ }),

/***/ 8:
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
	 * xmpFalg在div中显示标签
	 */
	var globReplace = exports.globReplace = function globReplace(str, replaceStr, resultStr, typeStr, xmpFalg) {
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
		if (xmpFalg) {
			str = str.replace(/&/g, "&amp;"); //
			str = str.replace(/ /g, "&nbsp;"); //空格
			str = str.replace(/>/g, "&gt;"); //大于
			str = str.replace(/</g, "&lt;"); //小于
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

/***/ 10:
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @description 新建Plan模块
	 */
	var load = exports.load = function load(isSearch) {
	    $('#newPlanCustomerList').attr("style", "");
	    $('#planCustomerPage').attr("style", "margin: -20px; width: 100%;");
	    $('#newPlanStoreList').attr("style", "display:none");
	    $('#planStorePage').attr("style", "display:none");
	    if ($('#newPlanCustomerList').html() == '' || isSearch == '1') {
	        doAction(10, 1);
	    }
	};

	function doAction(pageSize, pageNum) {
	    var body = { isTemp: "0", "pageSize": pageSize, "pageNum": pageNum, "customerName": $("#newPlanListSearchText").val() };
	    body.planRowId = $("#planRowId").val();
	    body.planDate = $("#currentSelectDay").val();
	    ajaxUtils.sendAjax("cust/myReport/getCustomerVisitList", body, "planCustomerPage", function (data) {
	        //
	        $('#newPlanCustomerList').html(render(data.data));

	        //客户选中的数量 
	        var custNum = 0;
	        $.each($('#chooseCustomerCodes').val().split(','), function (index, value) {
	            if (value != undefined && value != '') {
	                $("#cList_" + value).attr("checked", "checked");
	                custNum++;
	            }
	        });
	        $("#visitCustomerListBtn").attr("num", custNum);

	        //门店选中的数量 
	        var storeNum = 0;
	        $.each($('#chooseStoreCodes').val().split(','), function (index, value) {
	            if (value != undefined && value != '') {
	                $("#cList_" + value).attr("checked", "checked");
	                storeNum++;
	            }
	        });
	        $("#visitStoreListBtn").attr("num", storeNum);

	        $("input[name='newCustomerPlanChk']").unbind().click(function () {
	            var visitInfo = $('#chooseVisitInfo').val();
	            var customerInfo = $(this).attr("value");

	            var chooseCustomerCodes = $('#chooseCustomerCodes').val();
	            var customerCode = customerInfo.split(":")[4];
	            if ($(this).is(':checked')) {
	                $('#chooseVisitInfo').val(visitInfo + "," + customerInfo);
	                $("#visitCustomerListBtn").attr("num", parseInt($("#visitCustomerListBtn").attr("num")) + 1); //选中的数量
	                if (customerCode != undefined) {
	                    $('#chooseCustomerCodes').val(chooseCustomerCodes + "," + customerCode);
	                }
	            } else {
	                $('#chooseVisitInfo').val(visitInfo.replace("," + customerInfo, ''));
	                $("#visitCustomerListBtn").attr("num", parseInt($("#visitCustomerListBtn").attr("num")) - 1); //选中的数量
	                if (customerCode != undefined) {
	                    $('#chooseCustomerCodes').val(chooseCustomerCodes.replace(customerCode + ",", ''));
	                }
	            }
	        });
	    }, doAction);
	}

	function render(customerVisitList) {
	    //
	    var temp = '\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>\u9009\u62E9</th>\n                    <th>\u5BA2\u6237\u540D\u79F0</th>\n                    <th>\u62DC\u8BBF\u4EBA\u5458</th>\n                    <th>\u62DC\u8BBF\u8981\u6C42(\u6B21/\u6708)</th>\n                    <th>\u5DF2\u62DC\u8BBF\u6B21\u6570</th>\n                </tr>\n            </thead>\n            <tbody id="newPlanListContent">\n                ' + (customerVisitList == null ? '' : customerVisitList.map(function (item) {
	        return '\n                        <tr>\n                            <td>\n                                <label>\n                                    <input id="cList_' + item.customerCode + '" name="newCustomerPlanChk" type="checkbox" \n                                        value="' + item.userId + ':' + (item.frequency == null ? '0' : item.frequency) + ':' + (item.period == null ? '0' : item.period) + ':' + (item.visitCount == null ? '0' : item.visitCount) + ':' + item.customerCode + ':customer"/>\n                                    <i></i>\n                                </label>\n                            </td>\n                            <td>' + item.customerName + '</td>\n                            <td>' + item.salesManName + '</td>\n                            ' + getFrequencyAndPeriodForCustomer(item.frequency, item.period) + '\n                            <td>\u5DF2\u62DC\u8BBF\u6B21\u6570\uFF1A<b>' + item.visitCount + '</b></td>\n                        </tr>\n                    ';
	    }).join('')) + '\n            </tbody>\n        </table>\n    ';
	    return temp;
	}

	function getFrequencyAndPeriodForCustomer(frequency, period) {
	    if (period == null || period == "0") {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A</td>';
	    } else {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A<b>' + frequency + '</b>\u6B21/' + period + '</td>';
	    }
	}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/** 临时Plan模块 */
	var load = exports.load = function load(isSearch) {
	    $('#newTempStoreVisit').attr("style", "display:none");
	    $('#planTempStorePage').attr("style", "display:none");
	    $('#newTempCustomerVisit').attr("style", "");
	    $('#planTempCustomerPage').attr("style", "margin: -20px; width: 100%;");
	    if ($('#newTempCustomerVisit').html() == '' || isSearch == '1') {
	        doAction(10, 1);
	    }
	};

	function doAction(pageSize, pageNum) {
	    var body = { isTemp: 1, customerName: $("#newTempVisitSearchText").val(), planRowId: $("#planRowId").val(), "pageSize": pageSize, "pageNum": pageNum };
	    $("#tempPlanOtherCustomer").prop("readonly", "");
	    ajaxUtils.sendAjax("cust/myReport/getCustomerVisitList", body, "planTempCustomerPage", function (data) {
	        $('#newTempCustomerVisit').html(render(data.data));
	        $("#newTempCustomerVisit input[name='newCustomerTempPlanChk']").click(function () {
	            $("#tempOtherCustomerCheckBox").prop("checked", "");
	            $("#tempPlanOtherCustomer").val("");
	            $("#tempPlanOtherCustomer").prop("readonly", "readonly");

	            $("#tempVisitCustomerListBtn").attr("num", "1"); //选中的数量 
	        });

	        //选中临时拜访文本框，取消临时列表单选
	        $("#tempPlanOtherCustomer").unbind().click(function () {
	            $("#tempOtherCustomerCheckBox").prop("checked", "checked");
	            $("#tempPlanOtherCustomer").prop("readonly", "");
	            $("#newTempCustomerVisit input[name='newCustomerTempPlanChk']:checked").each(function () {
	                $(this).prop("checked", "");
	            });
	            $("#tempVisitCustomerListBtn").attr("num", "0");
	        });
	    }, doAction);
	}

	function render(customerVisitList) {
	    var temp = '\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>\u9009\u62E9</th>\n                    <th>\u5BA2\u6237\u540D\u79F0</th>\n                    <th>\u62DC\u8BBF\u4EBA\u5458</th>\n                    <th>\u62DC\u8BBF\u8981\u6C42(\u6B21/\u6708)</th>\n                    <th>\u5DF2\u62DC\u8BBF\u6B21\u6570</th>\n                </tr>\n            </thead>\n            <tbody id="newPlanTempListContent">\n                ' + (customerVisitList == null ? '' : customerVisitList.map(function (item) {
	        return '\n                        <tr>\n                            <td>\n                                <label>\n                                    <input val="' + item.customerName + '" id="tcList_' + item.customerCode + '" name="newCustomerTempPlanChk" type=\'radio\' \n                                        value="' + item.userId + ':' + (item.frequency == null ? '0' : item.frequency) + ':' + (item.period == null ? '0' : item.period) + ':' + (item.visitCount == null ? '0' : item.visitCount) + ':' + item.customerCode + ':customer"/>\n                                    <i></i>\n                                </label>\n                            </td>\n                            <td>' + item.customerName + '</td>\n                            <td>' + item.salesManName + '</td>\n                            ' + getFrequencyAndPeriodForTempCustomer(item.frequency, item.period) + '\n                            <td>\u5DF2\u62DC\u8BBF\u6B21\u6570\uFF1A<b>' + (item.visitCount == null ? '0' : item.visitCount) + '</b></td>\n                        </tr>\n                    ';
	    }).join('')) + '\n            </tbody>\n        </table>\n    ';
	    return temp;
	}

	function getFrequencyAndPeriodForTempCustomer(frequency, period) {
	    if (period == null || period == "0") {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A</td>';
	    } else {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A<b>' + frequency + '</b>\u6B21/' + period + '</td>';
	    }
	}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _constant = __webpack_require__(3);

	var Constant = _interopRequireWildcard(_constant);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @description 新建Plan模块
	 */
	var load = exports.load = function load(isSearch) {
	    $('#newPlanCustomerList').attr("style", "display:none");
	    $('#planCustomerPage').attr("style", "display:none");
	    $('#newPlanStoreList').attr("style", "");
	    $('#planStorePage').attr("style", "margin: -20px; width: 100%;");
	    if ($('#newPlanStoreList').html() == '' || isSearch == '1') {
	        doAction(10, 1);
	    }
	};

	function doAction(pageSize, pageNum) {
	    var body = { isTemp: "0", "pageSize": pageSize, "pageNum": pageNum, storeName: $("#newPlanListSearchText").val() };
	    body.planRowId = $("#planRowId").val();
	    body.planDate = $("#currentSelectDay").val();
	    ajaxUtils.sendAjax("visit/storeVisit/getStoreVisitList", body, "planStorePage", function (data) {
	        $('#newPlanStoreList').html(render(data.data));

	        //客户选中的数量 
	        var custNum = 0;
	        $.each($('#chooseCustomerCodes').val().split(','), function (index, value) {
	            if (value != undefined && value != '') {
	                $("#cList_" + value).attr("checked", "checked");
	                custNum++;
	            }
	        });
	        $("#visitCustomerListBtn").attr("num", custNum);

	        //门店选中的数量 
	        var storeNum = 0;
	        $.each($('#chooseStoreCodes').val().split(','), function (index, value) {
	            if (value != undefined && value != '') {
	                $("#cList_" + value).attr("checked", "checked");
	                storeNum++;
	            }
	        });
	        $("#visitStoreListBtn").attr("num", storeNum);

	        $("input[name='newStorePlanChk']").unbind().click(function () {
	            var visitInfo = $('#chooseVisitInfo').val();
	            var storeInfo = $(this).attr("value");

	            var chooseStoreCodes = $('#chooseStoreCodes').val();
	            var storeCode = storeInfo.split(":")[4];
	            if ($(this).is(':checked')) {
	                $('#chooseVisitInfo').val(visitInfo + "," + storeInfo);
	                $("#visitStoreListBtn").attr("num", parseInt($("#visitStoreListBtn").attr("num")) + 1); //选中的数量
	                if (storeCode != undefined) {
	                    $('#chooseStoreCodes').val(chooseStoreCodes + "," + storeCode);
	                }
	            } else {
	                $('#chooseVisitInfo').val(visitInfo.replace("," + storeInfo, ''));
	                $("#visitStoreListBtn").attr("num", parseInt($("#visitStoreListBtn").attr("num")) - 1); //选中的数量
	                if (storeCode != undefined) {
	                    $('#chooseStoreCodes').val(chooseStoreCodes.replace(storeCode + ",", ''));
	                }
	            }
	        });
	    }, doAction);
	}

	function render(storeVisitList) {
	    var temp = '\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>\u9009\u62E9</th>\n                    <th>\u95E8\u5E97\u540D\u79F0</th>\n                    <th>\u62DC\u8BBF\u4EBA\u5458</th>\n                    <th>\u62DC\u8BBF\u8981\u6C42(\u6B21/\u6708)</th>\n                    <th>\u5DF2\u62DC\u8BBF\u6B21\u6570</th>\n                </tr>\n            </thead>\n            <tbody id="newStorePlanListContent">\n                ' + (storeVisitList == null ? '' : storeVisitList.map(function (item) {
	        return '\n                        <tr>\n                            <td>\n                                <label>\n                                    <input id="cList_' + item.storeCode + '" name="newStorePlanChk" type=\'checkbox\' \n                                        value="' + item.storeId + ':' + (item.frequency == null ? '0' : item.frequency) + ':' + (item.period == null ? '0' : item.period) + ':' + (item.visitCount == null ? '0' : item.visitCount) + ':' + item.storeCode + ':store"/>\n                                    <i></i>\n                                </label>\n                            </td>\n                            <td>' + item.storeName + '</td>\n                            <td>' + item.salesManName + '</td>\n                            ' + getFrequencyAndPeriodForStore(item.frequency, item.period) + '\n                            <td>\u5DF2\u62DC\u8BBF\u6B21\u6570\uFF1A<b>' + item.visitCount + '</b></td>\n                        </tr>\n                    ';
	    }).join('')) + '\n            </tbody>\n        </table>\n    ';
	    return temp;
	}

	function getFrequencyAndPeriodForStore(frequency, period) {
	    if (period == null || period == "0") {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A</td>';
	    } else {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A<b>' + frequency + '</b>\u6B21/' + period + '</td>';
	    }
	}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @description 临时Plan模块
	 */
	var load = exports.load = function load(isSearch) {
	    $('#newTempStoreVisit').attr("style", "");
	    $('#planTempStorePage').attr("style", "margin: -20px; width: 100%;");
	    $('#newTempCustomerVisit').attr("style", "display:none");
	    $('#planTempCustomerPage').attr("style", "display:none");
	    if ($('#newTempStoreVisit').html() == '' || isSearch == '1') {
	        doAction(10, 1);
	    }
	};

	function doAction(pageSize, pageNum) {
	    var body = { isTemp: 1, storeName: $("#newTempVisitSearchText").val(), "pageSize": pageSize, "pageNum": pageNum };
	    body.planRowId = $("#planRowId").val();
	    body.planDate = $("#currentSelectDay").val();
	    $("#tempPlanOtherCustomer").prop("readonly", "");
      ajaxUtils.sendAjax("visit/storeVisit/getStoreVisitList", body, "planTempStorePage", function (data) {
          $('#newTempStoreVisit').html(render(data.data));
          $("#newTempStoreVisit input[name='newStoreTempPlanChk']").click(function () {
	            $("#tempOtherCustomerCheckBox").prop("checked", "");
	            $("#tempPlanOtherCustomer").val("");
	            $("#tempPlanOtherCustomer").prop("readonly", "readonly");

	            $("#tempVisitStoreListBtn").attr("num", "1"); //选中的数量 
	        });

	        //选中临时拜访文本框，取消临时列表单选
	        $("#tempPlanOtherCustomer").unbind().click(function () {
	            $("#tempOtherCustomerCheckBox").prop("checked", "checked");
	            $("#tempPlanOtherCustomer").prop("readonly", "");
	            $("#newTempStoreVisit input[name='newStoreTempPlanChk']:checked").each(function () {
	                $(this).prop("checked", "");
	            });
	            $("#tempVisitStoreListBtn").attr("num", "0"); //选中的数量 
	        });
	    }, doAction);
	}

	function render(storeVisitList) {
	    var temp = '\n        <table class="table">\n            <thead>\n                <tr>\n                    <th>\u9009\u62E9</th>\n                    <th>\u95E8\u5E97\u540D\u79F0</th>\n                    <th>\u62DC\u8BBF\u4EBA\u5458</th>\n                    <th>\u62DC\u8BBF\u8981\u6C42(\u6B21/\u6708)</th>\n                    <th>\u5DF2\u62DC\u8BBF\u6B21\u6570</th>\n                </tr>\n            </thead>\n            <tbody id="newStorePlanTempListContent">\n                ' + (storeVisitList == null ? '' : storeVisitList.map(function (item) {
	        return '\n                        <tr>\n                            <td>\n                                <label>\n                                    <input val="' + item.storeName + '" id="tcList_' + item.storeCode + '" name="newStoreTempPlanChk" type=\'radio\' \n                                        value="' + item.storeId + ':' + (item.frequency == null ? '0' : item.frequency) + ':' + (item.period == null ? '0' : item.period) + ':' + (item.visitCount == null ? '0' : item.visitCount) + ':' + item.storeCode + ':store"/>\n                                    <i></i>\n                                </label>\n                            </td>\n                            </td>\n                            <td>' + item.storeName + '</td>\n                            <td>' + item.salesManName + '</td>\n                            ' + getFrequencyAndPeriodForTempStore(item.frequency, item.period) + '\n                            <td>\u5DF2\u62DC\u8BBF\u6B21\u6570\uFF1A<b>' + (item.visitCount == null ? '0' : item.visitCount) + '</b></td>\n                        </tr>\n                    ';
	    }).join('')) + '\n            </tbody>\n        </table>\n    ';
	    return temp;
	}

	function getFrequencyAndPeriodForTempStore(frequency, period) {
	    if (period == null || period == "0") {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A</td>';
	    } else {
	        return '<td>\u62DC\u8BBF\u8981\u6C42\uFF1A<b>' + frequency + '</b>\u6B21/' + period + '</td>';
	    }
	}

/***/ })

/******/ });
//# sourceMappingURL=newPlanPop.map