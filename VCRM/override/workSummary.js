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

	var _ajaxUtils = __webpack_require__(5);

	var ajaxUtils = _interopRequireWildcard(_ajaxUtils);

	var _StringUtils = __webpack_require__(8);

	var StringUtils = _interopRequireWildcard(_StringUtils);

	var _layerUtils = __webpack_require__(1);

	var layerUtils = _interopRequireWildcard(_layerUtils);

	var _backfill = __webpack_require__(171);

	var backfill = _interopRequireWildcard(_backfill);

	var _dateUtils = __webpack_require__(12);

	var dateUtils = _interopRequireWildcard(_dateUtils);

	var _viewer = __webpack_require__(16);

	var viewer = _interopRequireWildcard(_viewer);

	var _CommonUtils = __webpack_require__(2);

	var commonUtils = _interopRequireWildcard(_CommonUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	$(document).ready(function () {
		//window.receiveMsg = function (data) {
			$("body").animate({ scrollTop: '0px' }, 100); //滚动到顶部
			iframeUtils.showSecondIframe();
			//先初始化数据
			getDepartmentHtml(); //分业务部门的静态html页面
			$("#ContactAlert").append(getTreeHtml()); //加载@人树形静态html页面
			treeClick(); //@人树形 的点击事件
			doAction();
		//};

		//日期
		$("#workSummaryPlanTime").unbind().click(function (e) {
			dateUtils.timeClick("workSummaryPlanTime", "dd", function () {
				changeInput();
			}, { isShowWeek: true, firstDayOfWeek: 1 });
		});

		$("#workSummaryPlanType").on("change", function () {
			changeInput();
		});

		//关闭
		$('#close,#closeIfram').on('click', function () {
			iframeUtils.hideSecondIframe();
			commonUtils.getTopWin().$('iframe[name^=' + Constant.SECOND_LEVEL_IFRAME_NAME + ']').remove();
		});

		//业务部门总结-点击弹窗
		$(".work-con .work-tit a").click(function () {
			getDepartmentHtml();
			$(".pop-box").show();
		});
		//弹窗取消
		$(".pop-box .qx").click(function () {
			$(".pop-box").hide();
		});

		//业务部门总结 确定
		$("#confirmOperatingDepartment").click(function () {
			var businessD = [];
			$("#businessDepartment input[type='checkbox']:checked").each(function () {
				var m = new Object();
				//m.huaweiFD=华为FD
				m.code = $(this).attr("code");
				m.name = $(this).attr("val");
				businessD.push(m);
			});
			getTextareaHtml(businessD);
			$(".pop-box").hide(); //隐藏弹窗
		});

		//保存
		$("#save,#draft").click(function () {
			saveWorkTask($(this).attr("status"));
		});

		//图片上传
		$("#formUploadify").attr("action", Constant.SERVER_ROOT + '/pttlCrm/store/uploadFile');
		$("#importFile").on("change", function (e) {
			if (StringUtils.getValue($("#importFile").val()) != "") {
				formSubmit();
			}
		});
	});

	function changeInput() {
		var body = {};
		body.planType = StringUtils.getValue($("#workSummaryPlanType").val());
		body.planTime = StringUtils.getValue($("#workSummaryPlanTime").val());
		ajaxUtils.sendAjax("crm/workSummary/getWorkTime", body, null, function (data) {
			if (StringUtils.getValue(data.data) != "") {
				$("#workSummaryPlanTime").attr("planTime", data.data);
				$("#workSummaryPlanTimeLable span").html(data.data);
				if (!isNotEditOrSave()) {
					$("#save,#draft").hide();
				} else {
					$("#save,#draft").show();
				}
				doAction();
			} else {
				$("#save,#draft").hide();
				clearWorkSummaryHtml();
				layerUtils.info($("#workSummaryPlanType").val() + "下，该日期不可选择！");
			}
		});
	}

  //后添加的
  window.changeInputTime = function(){
    var body = {};
		body.planType = StringUtils.getValue($("#workSummaryPlanType").val());
		body.planTime = StringUtils.getValue($("#workSummaryPlanTime").val());
		ajaxUtils.sendAjax("crm/workSummary/getWorkTime", body, null, function (data) {
			if (StringUtils.getValue(data.data) != "") {
				$("#workSummaryPlanTime").attr("planTime", data.data);
				$("#workSummaryPlanTimeLable span").html(data.data);
				if (!isNotEditOrSave()) {
					$("#save,#draft").hide();
				} else {
					$("#save,#draft").show();
				}
				doAction();
			} else {
				$("#save,#draft").hide();
				clearWorkSummaryHtml();
				layerUtils.info($("#workSummaryPlanType").val() + "下，该日期不可选择！");
			}
		});
  }
	/**
	 * 分业务部门总结
	 * @param {*} textareaList 
	 */
	function getTextareaHtml(textareaList) {
		var html = "";
		for (var i = 0; i < textareaList.length; i++) {
			var item = textareaList[i];
			if ($("#textareaDivs div." + item.code + "").length > 0) {
				var context = $("#textareaDivs div." + item.code + " textarea").val();
				html += '<div class="con-box ' + item.code + '"><span>' + item.name + '</span><textarea autoHeight="true" name="' + item.code + '" val="' + item.name + '">' + context + '</textarea>\n\t\t\t<a href="javascript:;">\u5220\u9664</a></div>';
				//html += $("#textareaDivs div."+item.code+"").clone(true)[0].outerHTML;
			} else {
				html += '<div class="con-box ' + item.code + '"><span>' + item.name + '</span><textarea autoHeight="true" name="' + item.code + '" val="' + item.name + '"></textarea>\n\t\t\t<a href="javascript:;">\u5220\u9664</a></div>';
			}
		}
		$("#textareaDivs").html(html);
		$('textarea[autoHeight]').autoHeight();
		$("#textareaDivs div a").unbind().click(function () {
			$(this).parent().remove();
		});
	}

	/**
	 * 初始化页面数据
	 */
	var timeListMap; //计划时间
	function doAction() {

		var cWidth = $("#ContactAlert").css("width");
		var oWidth = $(window).width();
		$("#ContactAlert").animate({
			// right: "-" + cWidth
			left: oWidth
		});

		var body = {};
		body.planType = StringUtils.getValue($("#workSummaryPlanType").val());
		body.planTime = StringUtils.getValue($("#workSummaryPlanTime").attr("planTime"));
		ajaxUtils.sendAjax("crm/workSummary/getWorkSummary", body, null, function (data) {
			if (null != data) {
				//初始化时间 筛选条件
				if (data.time) {
					$("#workSummaryPlanTime").val(data.today);
					timeListMap = data.time;
					//let typeOption = "";
					//let timeOption = "";
					for (var key in data.time) {
						//typeOption += "<option value='"+key+"'>"+key+"</option>";
						if (key == "日报") {
							var times = data.time[key];
							if (times && null != times) {
								for (var i = 0; i < times.length; i++) {
									if (i == 0) {
										$("#workSummaryPlanTime").attr("planTime", times[i]);
										$("#workSummaryPlanTimeLable span").html(times[i]);
									}
									//timeOption += "<option value='"+times[i]+"'>"+times[i]+"</option>";
								}
							}
						}
					}
					/* $("#workSummaryPlanType").html(typeOption);
	    $("#workSummaryPlanTime").html(timeOption); */

					/* $("#workSummaryPlanType").on("change",function(){//#workSummaryPlanTime
	    	 if($(this).attr("name")=="planType"){
	    		let timeOption = "";
	    		let times = timeListMap[$(this).val()];
	    		if(times && null != times){
	    			for(let i=0;i<times.length;i++){
	    				timeOption += "<option value='"+times[i]+"'>"+times[i]+"</option>";
	    			}
	    		}
	    		$("#workSummaryPlanTime").html(timeOption);
	    	}
	    	//是否显示保存按钮
	    	if(isNotEditOrSave()){
	    		$("#save").show();
	    	}else{
	    		$("#save").hide();
	    	}
	    	doAction();
	    }) */
				}

				//初始化textarea
				if (data.workSummary && data.workSummary.length > 0) {
					var workSummaryBean = data.workSummary[0];

					//草稿并且满足规则
					if (StringUtils.getValue(workSummaryBean.status) == "草稿" && isNotEditOrSave()) {
						$("#draft").show();
					} else {
						$("#draft").hide();
					}

					$("#workSummaryId").val(StringUtils.getValue(workSummaryBean.id));
					$("textarea[name='summary']").val(StringUtils.globReplace(workSummaryBean.summary)); //总结内容
					$("textarea[name='question']").val(StringUtils.globReplace(workSummaryBean.question)); //问题及所需资源
					getInitWorkSummaryHtml(workSummaryBean);
				} else {
					if (isNotEditOrSave()) {
						$("#save,#draft").show();
					} else {
						$("#save,#draft").hide();
					}
					clearWorkSummaryHtml();
				}

				//lable 标签
				if (data.lable) {
					getInitLableHtml(data.lable, data.workSummary);
				}
			} else {
				clearWorkSummaryHtml();
			}
			//console.info(data);
		});
	}
	/**
	 * 清空所有
	 */
	function clearWorkSummaryHtml() {
		$("#workSummaryId").val("");
		$("textarea").val("");
		$("#textareaDivs").html("");
		$("#imgsDiv").html("");
		$("#ContactUsers").html("");
	}

	/**
	 * @param {*初始化textarea} workSummary 
	 */
	function getInitWorkSummaryHtml(workTask) {
		var html = "";
		var name = "";
		for (var code in workTask) {
			if (code == "huaweiFD") {
				name = "华为FD业务事业部";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}
			if (code == "huaweiPJ") {
				name = "融合及配件业务事业部";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}
			if (code == "huaweiStore") {
				name = "华为体验店业务事业部";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}

			if (code == "samsung") {
				name = "三星业务事业部";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}
			if (code == "distribution") {
				name = "大客户业务部";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}
			if (code == "others") {
				name = "其他";
				html += getInitTextareaHtml_child(code, name, workTask[code]);
			}

			//图片
			if (code == "imgList") {
				var imgHtml = "";
				var imgList = workTask.imgList;
				if (imgList && imgList.length > 0) {
					for (var i = 0; i < imgList.length; i++) {
						var item = imgList[i];
						var fileNme = StringUtils.getSplitStr(item.imgName, '/');
						fileNme = StringUtils.getSplitStr(item.imgUrl, '\\');
						imgHtml += '<div class="img" imgName="' + item.imgName + '" imgUrl="' + item.imgUrl + '">\n\t\t\t\t\t<img src="' + Constant.SERVER_ROOT + '/pttlCrm/sys/file/showImag?path=' + encodeURI(encodeURI(item.imgUrl)) + '" />\n\t\t\t\t\t<span>' + item.imgName + '</span><a class="del" fileName="' + fileNme + '" href="javascript:;"></a></div>';
					}
				}
				$("#imgsDiv").html(imgHtml);
				//删除图片
				$("#imgsDiv .img a.del").unbind().click(function () {
					$(this).parent().remove();
					//这里暂时先不删除      
					//ajaxUtils.sendAjax("store/deleteFile",{fileName:$(this).attr("fileName")});
				});
				//查看图片
				$("#imgsDiv .img img").unbind().click(function () {
					viewer.displayImg($(this).attr("src"));
				});
			}

			if (code == "contactList") {
				var atNameList = workTask.contactList;
				$("#ContactUsers").html(getAtName(atNameList)); //@人
				$("#ContactUsers i.chate-del").on("click", function () {
					$(this).parent().remove();
				});
			}
		}
		$("#textareaDivs").html(html);
		$('textarea[autoHeight]').autoHeight();
		$("#textareaDivs div a").unbind().click(function () {
			$(this).parent().remove();
		});
	}
	function getInitTextareaHtml_child(code, name, value) {
		if (StringUtils.getValue(value) == "") {
			$("#businessDepartment input[type='checkbox'][code='" + code + "']").prop("checked", false);
			return "";
		} else {
			$("#businessDepartment input[type='checkbox'][code='" + code + "']").prop("checked", true);
			var temp = '<div class="con-box ' + code + '"><span>' + name + '</span>\n\t\t<textarea autoHeight="true" name="' + code + '" val="' + name + '">' + StringUtils.globReplace(value) + '</textarea>\n\t\t<a href="javascript:;">\u5220\u9664</a></div>';
			return temp;
		}
	}
	/**
	 * 
	 * @param {*初始化lable} lableList 
	 */
	function getInitLableHtml(lableList, workSummaryList) {
		var lableHtml = "";
		var workLableList = [];
		if (null != workSummaryList && workSummaryList.length > 0) {
			workLableList = workSummaryList[0].lableList;
		}
		if (null != lableList && lableList.length > 0) {
			outer: for (var i = 0; i < lableList.length; i++) {
				var lable = lableList[i];

				var flag = false; //默认不选中 有属性unchecked
				inter: for (var j = 0; j < workLableList.length; j++) {
					var workLable = workLableList[j];
					var workLableName = workLable.lableName;
					if (lable.LABLENAME == workLableName) {
						flag = true;
						break inter;
					}
				}
				if (flag) {
					lableHtml += "<span>" + lable.LABLENAME + "</span>";
				} else {
					lableHtml += "<span class='unchecked'>" + lable.LABLENAME + "</span>";
				}
			}
		}
		$("#lableTabs").html(lableHtml + '<a href="javascript:;" class="more">更多</a>');
		moreLable();
		$("#lableTabs span").unbind().click(function () {
			$(this).toggleClass("unchecked");
		});
	}

	/**
	 * 保存
	 */
	var saveWorkTaskFlag = true;
	function saveWorkTask(status) {
		var blankFlag = 0; //为空的标识
		if (saveWorkTaskFlag) {
			saveWorkTaskFlag = false;
			var body = { status: status };
			body.planType = $("#workSummaryPlanType").val(); //计划类型	
			body.planTime = $("#workSummaryPlanTime").attr("planTime"); //计划时间
			var flag = true;
			$("textarea").each(function () {
				var val = StringUtils.wrongCharacter($(this).val());
				if (val.length > 1000) {
					flag = false;
					saveWorkTaskFlag = true;
					layerUtils.info($(this).attr("val") + ",超过1000字符，不可保存！");
					return false;
				} else {
					if (val != "") {
						blankFlag++;
					}
					body[$(this).attr("name")] = val;
				}
			});
			if (flag) {

				//分业务部门总结
				var businessList = [];
				$("#textareaDivs textarea").each(function () {
					var val = StringUtils.wrongCharacter($(this).val());
					if (val != "") {
						var m = {};
						m.name = $(this).attr("val"); //名称
						m.code = $(this).attr("name"); //编码
						m.remark = val; //备注
						businessList.push(m);
					}
				});
				if (StringUtils.getValue($("textarea[name='summary']").val()) != "") {
					var summaryMap = {};
					summaryMap.name = ""; //总结内容
					summaryMap.remark = StringUtils.wrongCharacter($("textarea[name='summary']").val());
					summaryMap.code = "workSummary"; //编码
					businessList.push(summaryMap);
				}
				body.businessList = businessList;

				//标签list
				var lableList = [];
				$("#lableTabs span:not(.unchecked)").each(function () {
					blankFlag++;
					var m = {};
					m.lableName = StringUtils.getValue($(this).html());
					lableList.push(m);
				});
				body.lableList = lableList;

				//图片list
				var imgList = [];
				$("#imgsDiv .img").each(function () {
					blankFlag++;
					var m = {};
					m.imgName = StringUtils.getValue($(this).attr("imgName"));
					m.imgUrl = StringUtils.getValue($(this).attr("imgUrl"));
					imgList.push(m);
				});
				body.imgList = imgList;

				//没填内容、没选标签、没传图片，只选了个@人员，应不允许提交
				if (blankFlag == 0) {
					layerUtils.info("内容不可以为空！");
					saveWorkTaskFlag = true;
					return;
				}
				//@人
				var contactList = []; //contactList;
				$("#ContactUsers span").each(function () {
					var m = {};
					m.salesmanId = $(this).attr("val");
					contactList.push(m);
				});
				body.contactList = contactList;

				if (status == "提交" && contactList.length == 0) {
					layerUtils.info("请选择汇报对象！");
					saveWorkTaskFlag = true;
					return;
				}

				var service = "crm/workSummary/addWorkSummary";
				if ($("#workSummaryId").val() != "") {
					body.id = $("#workSummaryId").val();
					service = "crm/workSummary/updateWorkSummary";
				}
				ajaxUtils.sendAjax(service, { "workSummary": body }, null, function (data) {
					saveWorkTaskFlag = true;
					if (null != data) {
						if (data.result == "true") {
              window.submitReportStatus = 'completed';//后添加
							layerUtils.info("保存成功！", { time: 1000 });
							iframeUtils.hideSecondIframe(); //关闭页面
						} else if (data.msg) {
							//layerUtils.info(data.msg);
						} else {
							layerUtils.info("保存失败！");
						}
					}
				});
			}
		}
	}

	//图片上传
	function formSubmit() {
		var name = $("#importFile").val();
		if (StringUtils.getValue(name) != "" && name.lastIndexOf(".") > -1) {
			name = name.substring(name.lastIndexOf(".") + 1, name.length);
			if (name.toUpperCase() == "PNG" || name.toUpperCase() == "JPG" || name.toUpperCase() == "JPEG" || name.toUpperCase() == "GIF") {
				$("#formUploadify").submit();
				getExcelSessionResult();
			} else {
				layerUtils.info("请选择图片文件");
			}
		}
	}
	var iframeLoadFlag; //防止load方法重复加载的标识
	function getExcelSessionResult() {
		iframeLoadFlag = true;
		$("#formTargertIframe").load(function () {
			$("#importFile").val("");
			if (iframeLoadFlag) {
				iframeLoadFlag = false;
				//let c = $("iframe[name='formTargertIframe']").contents();
				//let result = JSON.parse($(c[0]).find("pre").html());
				var c = $("iframe[name='formTargertIframe']")[0].contentDocument;
				var result = JSON.parse(c.querySelector('pre').textContent);
				if (null != result && result.status == 'true') {
					var html = '<div class="img" imgName="' + result.name + '" imgUrl="' + result.url + '">\n\t\t\t\t<img src="' + Constant.SERVER_ROOT + '/pttlCrm/sys/file/showImag?path=' + encodeURI(encodeURI(result.url)) + '" />\n\t\t\t\t<span>' + result.name + '</span><a class="del" fileName="' + result.fileName + '" href="javascript:;"></a></div>';
					$("#imgsDiv").append(html);
					//删除图片
					$("#imgsDiv .img a.del").unbind().click(function () {
						$(this).parent().remove();
						ajaxUtils.sendAjax("store/deleteFile", { fileName: $(this).attr("fileName") });
					});
					//查看图片
					$("#imgsDiv .img img").unbind().click(function () {
						viewer.displayImg($(this).attr("src"));
					});
				} else {
					layerUtils.error("图片格式错误,不允许上传!");
				}
				/* $.ajax({
	       type: 'POST',
	       url: `${Constant.SERVER_ROOT}/pttlCrm/homepage/getExcelResutl`,
	       data: { sessionKey: "importExcelKey" },
	       dataType: 'json',
	       success: function(result) {
	           if(null == result){
	               let c = $("iframe[name='formTargertIframe']").contents();
	               result = JSON.parse($(c[0]).find("pre").html());
	           }
	           successCallback(result, null);
	       }
	   }); */
			}
		});
	}

	//被@人
	function getAtName(list) {
		var temp = '\n        ' + (list == null ? "" : list.map(function (item) {
			return '\n\t\t\t\t<span val="' + item.salesmanId + '" val1="' + item.atName + '">\n\t\t\t\t\t<i class="icon chate-del" val="' + item.salesmanId + '"></i>' + item.atName + '\n\t\t\t\t</span>   \n            ';
		}).join('')) + '\n    ';
		return temp;
	}

	//@人的点击事件
	function treeClick() {
		var cWidth = $("#ContactAlert").css("width");
		var oWidth = $(window).width();
		$("#ContactAlert").animate({
			// right: "-" + cWidth
			left: oWidth
		});
		$("#DisplayContact").unbind().click(function () {
			$("#search-lists").hide();
			$("#contactSearch").val("");
			backfill.load();
			/* if(!$("#DisplayContact").hasClass("initFlag")){
	      $("#DisplayContact").addClass("initFlag");
	      backfill.load();
	  } */
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
		$("#ContactAlert .search label").unbind("click").click(function () {
			$("#ContactAlert .search input").focus();
		});
		$("#contactSearch").unbind().focus(function () {
			$(this).siblings("label").hide();
		}).blur(function () {
			var flag = $(this).val() == "" ? true : false;
			if (flag) {
				$(this).siblings("label").show();
				$("#search-lists").html("");
			}
		});
		//点击搜索
		$("#icon-search").unbind().on("click", function () {
			backfill.searchNameList('contactSearch', 'search-lists');
		});

		//按回车搜索
		$("#contactSearch").unbind().keydown(function () {
			if (event.keyCode == "13") {
				//keyCode=13是回车键
				backfill.searchNameList('contactSearch', 'search-lists');
			}
		});
	}
	// <label for="contactSearch"></label>
	function getTreeHtml() {
		var temp = '\n        <div class="header clearfix">\n            <i class="icon icon-back" id="ContactClose"></i>\n            <div class="search">\n               \n                <input type="text" name="contactSearch" id="contactSearch" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9">\n                <i class="icon icon-search" id="icon-search"></i>\n                <div class="search-lists" id="search-lists">\n                </div>\n            </div>\n        </div>\n        <div class="body">\n            <div class="content" id="contentBody"></div>\n        </div>\n        <div class="footer clearfix">\n\t\t\t\n        </div>\n\t';
		/*
	 	<a href="javascript:;" class="btn" id="ContactSure">确定<em></em></a>
	 	<i id="coor">//</i> 
	 */
		return temp;
	}

	/**
	 * 加载分业务部门总结
	 */
	function getDepartmentHtml() {
		var temp = '\n\t\t<li><label><input type="checkbox" code="huaweiFD" val="\u534E\u4E3AFD\u4E1A\u52A1\u4E8B\u4E1A\u90E8"/><i></i>\u534E\u4E3AFD\u4E1A\u52A1\u4E8B\u4E1A\u90E8</label></li>\n\t\t<li><label><input type="checkbox" code="huaweiPJ" val="\u878D\u5408\u53CA\u914D\u4EF6\u4E1A\u52A1\u4E8B\u4E1A\u90E8"/><i></i>\u878D\u5408\u53CA\u914D\u4EF6\u4E1A\u52A1\u4E8B\u4E1A\u90E8</label></li>\n\t\t<li><label><input type="checkbox" code="huaweiStore" val="\u534E\u4E3A\u4F53\u9A8C\u5E97\u4E1A\u52A1\u4E8B\u4E1A\u90E8"/><i></i>\u534E\u4E3A\u4F53\u9A8C\u5E97\u4E1A\u52A1\u4E8B\u4E1A\u90E8</label></li>\n\t\t<li><label><input type="checkbox" code="samsung" val="\u4E09\u661F\u4E1A\u52A1\u4E8B\u4E1A\u90E8"/><i></i>\u4E09\u661F\u4E1A\u52A1\u4E8B\u4E1A\u90E8</label></li>\n\t\t<li><label><input type="checkbox" code="distribution" val="\u5927\u5BA2\u6237\u4E1A\u52A1\u90E8"/><i></i>\u5927\u5BA2\u6237\u4E1A\u52A1\u90E8</label></li>\n\t\t<li><label><input type="checkbox" code="others" val="\u5176\u4ED6"/><i></i>\u5176\u4ED6</label></li>\n\t';
		$("#businessDepartment").html(temp);
		$("#textareaDivs textarea").each(function () {
			var name = $(this).attr("name");
			$("#businessDepartment input[type='checkbox'][code='" + name + "']").prop("checked", true);
		});
	}

	/**
	 * 是否可编辑
	 */
	function isNotEditOrSave() {
		var str = StringUtils.getValue($("#workSummaryPlanTime").attr("planTime"));
		if (timeListMap && str) {
			for (var key in timeListMap) {
				var times = timeListMap[key];
				if (times && null != times) {
					for (var i = 0; i < times.length; i++) {
						if (times[i] == str) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}

	/**
	 * //标签更多
	 */
	function moreLable() {
		var tabSpan = $("#lableTabs span");
		for (var i = 0; i < tabSpan.length; i++) {
			if (tabSpan.eq(i).position().top > 90) {
				tabSpan.eq(i).hide().addClass("moretags");
				tabSpan.eq(i - 1).hide().addClass("moretags");
				$("#lableTabs .more").css("display", "inline-block");
			} else {
				$("#lableTabs .more").hide();
			}
		}
		$("#lableTabs").unbind().on("click", ".more", function () {
			if ($(this).html() == "更多") {
				$("#lableTabs .moretags").show();
				$(this).html("收起");
			} else {
				$("#lableTabs .moretags").hide();
				$(this).html("更多");
			}
		});
	}

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
	//export const SERVER_ROOT = 'http://192.168.220.82:8080'; //服务端根路径
	//export const LOCAL_SERVER_ROOT = 'http://192.168.220.82:8080'; //本地服务端根路径
	//export const PTDATASHOW_SERVER_ROOT = 'http://192.168.1.202/ptDataShow';

	//生产 228
	var SERVER_ROOT = exports.SERVER_ROOT = ''; //服务端根路径
	var LOCAL_SERVER_ROOT = exports.LOCAL_SERVER_ROOT = ''; //本地服务端根路径
	var PTDATASHOW_SERVER_ROOT = exports.PTDATASHOW_SERVER_ROOT = 'http://192.168.220.82:8080/ptDataShow'; //'https://vcrm-uat.pttl.com:8080/ptDataShow';

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
				} else {
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
        } else {
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
	    var pageSize = page.pageSize; //显示多少条记录
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

/***/ 12:
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

/***/ 16:
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

/***/ 171:
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
	                /* let cWidth = $("#ContactAlert").css("width");
	                $("#ContactAlert").animate({
	                    right: "-" + cWidth
	                }); */
	            });
	            // 3
	            /* //let mainH = $("#ContactAlert").outerHeight();
	            let mainH = $(".work-box").outerHeight();
	            let headerH = $("#ContactAlert .header").outerHeight();
	            let footerH = $("#ContactAlert .footer").outerHeight();
	            let bodyMtop = parseInt($("#ContactAlert .body").css("margin-top"));
	            let bodyH = mainH - headerH - footerH - bodyMtop;
	            $("#ContactAlert .body").height(bodyH);//outerHeight
	            $("#ContactAlert .body").css("padding","0");
	             */
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

/***/ })

/******/ });
//# sourceMappingURL=workSummary.map