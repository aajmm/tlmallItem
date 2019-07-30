/*
干掉原网页的.wrapper(body下包裹整个显示内容的div);
然后创建一个自定义DOM结构，添加到body上；
分别需要添加的DOM id : 
销量与销售额：
todayQty\todayAmt\monthQty\monthAmt\yearQty\yearAmt\
客户与门店拜访：
clientCount\vistClientCount\storeCount\vistStoreCount\saleManCount
*/
window.addEventListener('DOMContentLoaded',function(){
  var wrapperOrigin = document.querySelector('.g-main');
  var wrapper = document.createElement('div');
  if(wrapper){
    wrapper.style.background = '#F7F7F7';
    wrapper.style.height='100vh';
    wrapper.style.padding = '0';
    var href = wrapper.ownerDocument.defaultView.document.location.href;
    //如果匹配的地址正确，则将.wrapper里面的html清空
    if(href && href.indexOf('configType') != -1){
      wrapperOrigin.innerHTML = '';
      /*
      // 创建style
      */
      var style = document.createElement('style');
      style.setAttribute("type", "text/css");
      var cssString = ".fakeWrapper{background: #fff; border-radius: 8px; padding: 5px 0 10px 0;}" + 
          ".fakeWrapper:last-child{margin-top: 10px; border-radius: 8px;}" +
          ".header{padding: 10px 10px 10px 0}" +
          ".fakeWrapper:first-child .header span{font-size: 12px;color:#fff;background:#4796ed;border-radius:0 10px 10px 0;padding-left:10px;padding:2px;width:72px;display:block;}" + 
          ".fakeWrapper:last-child .header span{font-size: 12px;color:#fff;background:#e7350d;border-radius:0 10px 10px 0;padding-left:10px;padding:2px;width:72px;display:block;}" + 
          ".content > div{display: flex; justify-content: flex-start; align-items: center; margin: 0 20px; padding-bottom: 10px}" +
          ".content-item{display: flex; flex-direction: column; align-items: center; width: 33%}" +
          ".fakeWrapper:first-child .content-item h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#4796ed;}" +
          ".fakeWrapper:last-child .content-item h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#e7350d;}" +
          ".content-item span{font-size: 10px; color: #999; display: block; text-align: center}"+
          "#cardIframe1{-webkit-border-radius:none;border-radius:none;-webkit-box-shadow:none;box-shadow:none;}";
      var cssText = document.createTextNode(cssString);
      style.appendChild(cssText);
      document.head.appendChild(style);
      //创建本月销量和本月销售额内容块
      var fakeWrapper_sales = document.createElement('div');
      fakeWrapper_sales.className = 'fakeWrapper';
      wrapper.appendChild(fakeWrapper_sales);
      //创建标题部分DOM
      var header = document.createElement('div');
      header.className = 'header';
      var header_span = document.createElement('span');
      var header_text = document.createTextNode('本月销量');
      //将标题文本挂到span中
      header_span.appendChild(header_text);
      header.appendChild(header_span);
      //把标题部分DOM挂载到fakeWrapper_sales
      fakeWrapper_sales.appendChild(header);

      //创建内容部分
      var content = document.createElement('div');
      content.className = 'content';
      //分别创建两个div，挂到content上，数据呈两行展示
      var content_row_0 = document.createElement('div');
      content.appendChild(content_row_0);
      //创建3个div，3个一组挂在content_row_0上
      //目标销量
      var div0 = document.createElement('div');
      div0.className = 'content-item';
      var h20 = document.createElement('h2');
      h20.id = 'totalTargetQty';
      var span0 = document.createElement('span');
      var span_text = document.createTextNode('目标销量(万台)');
      span0.appendChild(span_text);
      div0.appendChild(h20);
      div0.appendChild(span0);
      //销量达成
      var div1 = document.createElement('div');
      div1.className = 'content-item';
      var h21 = document.createElement('h2');
      h21.id = 'totalReachQty';
      var span1 = document.createElement('span');
      var span_text = document.createTextNode('销量达成(万台)');
      span1.appendChild(span_text);
      div1.appendChild(h21);
      div1.appendChild(span1);
      //销量达成率
      var div2 = document.createElement('div');
      div2.className = 'content-item';
      var h22 = document.createElement('h2');
      h22.id = 'totalReachQtyRate';
      var span2 = document.createElement('span');
      var span_text = document.createTextNode('销量达成率(%)');
      span2.appendChild(span_text);
      div2.appendChild(h22);
      div2.appendChild(span2);


      content_row_0.appendChild(div0);
      content_row_0.appendChild(div1);
      content_row_0.appendChild(div2);


      //把内容部分DOM挂载到fakeWrapper_sales
      fakeWrapper_sales.appendChild(content);

      //创建本月销售额
      var fakeWrapper_client = document.createElement('div');
      fakeWrapper_client.className = 'fakeWrapper';
      wrapper.appendChild(fakeWrapper_client);
      //创建标题部分DOM
      var header_client = document.createElement('div');
      header_client.className = 'header';
      var header_client_span = document.createElement('span');
      var header_client_text = document.createTextNode('本月销售额');
      //将标题文本挂到span中
      header_client_span.appendChild(header_client_text);
      header_client.appendChild(header_client_span);
      //把标题部分DOM挂载到fakeWrapper_sales
      fakeWrapper_client.appendChild(header_client);
      //创建内容部分
      var content_client = document.createElement('div');
      content_client.className = 'content';
      //分别创建两个div，挂到content_client上，数据呈两行展示
      var content_client_row_0 = document.createElement('div');
      content_client.appendChild(content_client_row_0);
      //创建3个div，3个一组挂在content_client_row_0上
      //目标销售额
      var div0_client = document.createElement('div');
      div0_client.className = 'content-item';
      var h20_client = document.createElement('h2');
      h20_client.id = 'totalTargetAmt';
      var span0_client = document.createElement('span');
      var span_client_text = document.createTextNode('目标销售额(万元)');
      span0_client.appendChild(span_client_text);
      div0_client.appendChild(h20_client);
      div0_client.appendChild(span0_client);
      //销售额达成
      var div1_client = document.createElement('div');
      div1_client.className = 'content-item';
      var h21_client = document.createElement('h2');
      h21_client.id = 'totalReachAmt';
      var span1_client = document.createElement('span');
      var span_client_text = document.createTextNode('销售额达成(万元)');
      span1_client.appendChild(span_client_text);
      div1_client.appendChild(h21_client);
      div1_client.appendChild(span1_client);
      //销售额达成率
      var div2_client = document.createElement('div');
      div2_client.className = 'content-item';
      var h22_client = document.createElement('h2');
      h22_client.id = 'totalReachAmtRate';
      var span2_client = document.createElement('span');
      var span_client_text = document.createTextNode('销售额达成率(%)');
      span2_client.appendChild(span_client_text);
      div2_client.appendChild(h22_client);
      div2_client.appendChild(span2_client);


      content_client_row_0.appendChild(div0_client);
      content_client_row_0.appendChild(div1_client);
      content_client_row_0.appendChild(div2_client);


      //把内容部分DOM挂载到fakeWrapper_client
      //debugger;
      fakeWrapper_client.appendChild(content_client);

      document.body.insertBefore(wrapper,wrapperOrigin);
     
    }
  }
},false);

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
/***/ (function(module, exports) {

	"use strict";

	/**
	 * 业务总览-总部领导
	 */

	window.displayTable = function (e) {
	    var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 4;

	    if ($(e).hasClass("Up")) {
	        console.log("1");
	        $(e).addClass("Down").removeClass("Up");
	        $(e).siblings(".content").height("auto").css("overflow", "auto");
	        $(e).find("span").text("收起");
	    } else if ($(e).hasClass("Down")) {
	        console.log("2");
	        $(e).addClass("Up").removeClass("Down");
	        $(e).siblings(".content").height(table_minHeight).css("overflow", "hidden");
	        $(e).find("span").text("展开");
	    }
	};
	// 方法：数字千分位转换
	function toQfw(num) {
	    var str_num = num.toString();
	    var result = "";
	    while (str_num.length > 3) {
	        result = "," + str_num.slice(-3) + result;
	        str_num = str_num.slice(0, str_num.length - 3);
	    }
	    return str_num + result;
	};

	// 获取地图数据最大值
	function getMaxValue(data) {
	    var vals = [],
	        MaxValue = 0;

	    if (data.length == 0) {
	        MaxValue = 1000;
	    } else {
	        for (var i = 0; i < data.length; i++) {
	            vals.push(data[i].value);
	        }
	        MaxValue = Math.max.apply(Math, vals);
	    }
	    return MaxValue;
	}

	function numToShow(num) {
	    var visualMaxUnit = '',
	        oMax = 0,
	        arr = [];
	    var numStr = num.toString();
	    var numLen = numStr.length;
	    var tempNum = numStr.substring(0, 1);

	    numStr = tempNum * Math.pow(10, numLen - 1);
	    oMax = parseInt(numStr);

	    if (numLen > 0 && numLen < 5) {
	        visualMaxUnit = oMax;
	    } else if (numLen >= 5 && numLen < 9) {
	        visualMaxUnit = oMax / Math.pow(10, 4) + "万";
	    } else if (numLen >= 9) {
	        visualMaxUnit = oMax / Math.pow(10, 9) + "亿";
	    }

	    arr.push(oMax);
	    arr.push(visualMaxUnit);
	    return arr;
	}

	$(function () {
	    // 为适配不同分辨率，动态计算高度
	    var mapW = $(".spaceDimen .chart").width();
	    var mapH = $(".spaceDimen .chart").height(mapW * 0.84);
	    var barLineW = $(".timeDimen .l-chart").width();
	    var barLineH = $(".timeDimen .l-chart,.timeDimen .r-chart").height(barLineW * 1.18);
/*
		tableSH("HW-table", 4);
		tableSH("SX-table", 4);
		tableSH("FX-table", 4);
		tableSH("DKH-table", 4);
*/

	    // date
		var date = new Date();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		$("#currentDate").html(date.getFullYear() + '-' + month + '-' + strDate);

	    init('0');

		$("#planTypeSelect").change(function () {
			var value = $("#planTypeSelect").val();
			if (value == 'month') {
				init('0');
			} else if (value == 'year') {
				init('1');
			}
		});

	});

		function tableSH(id, len) {
			var table_minHeight = parseInt($("#" + id).find("thead th").height()) + parseInt($("#" + id).find("tbody td").height()) * len;

			if ($("#" + id).find("tbody tr").length <= len) {
				$("#" + id).parent().height('auto');
				$("#" + id).parent().next(".btn-display").hide();
			} else {
				$("#" + id).parent().height(table_minHeight).css("overflow", "hidden");
				$("#" + id).parent().next(".btn-display").show().addClass("Up");
			}
		}

	function init(isYear) {

		// 替换为后台数据
		var mapDatas = [];
		var mapTotal = [];
		var barLineDatas = [];
		$.ajax({
			url: "/ptDataShow/salesPlan/salesOverviewData?isYear=" + isYear ,
			async: false,
			success: function (response) {

				// 刷新头部的汇总数据
				$("#totalTargetQty").html(response.totalTargetQty);
				$("#totalAuditQty").html(response.totalAuditQty);
				$("#totalReachQty").html(response.totalReachQty);
				$("#totalReachQtyRate").html(response.totalReachQtyRate);
				$("#totalTargetAmt").html(response.totalTargetAmt);
				$("#totalAuditAmt").html(response.totalAuditAmt);
				$("#totalReachAmt").html(response.totalReachAmt);
				$("#totalReachAmtRate").html(response.totalReachAmtRate);

				mapDatas = response.provinces;
				mapTotal = [{ name: "销量", value: response.totalBranchReachQty }, { name: "销售额", value: response.totalBranchReachAmt }];
				barLineDatas = [{
					name: '销量达成(万)',
					data: response.monthReachQtys
				}, {
					name: '销售额达成(千万)',
					data: response.monthReachAmts
				}, {
					name: '销量达成率',
					data: response.monthReachQtyRates
				}, {
					name: '销售额达成率',
					data: response.monthReachAmtRates
				}];
				getBarLines(barLineDatas, "barLines");

				// 分公司列表
				var branches = response.branches;
				$("#branchTable").empty();
				for (var i = 0; i < branches.length; i++) {
					var html = '<tr><td><a href="#">' + branches[i].name + '</a></td><td>' + branches[i].targetQty + '</td><td>' + branches[i].reachQty + '</td><td>' + branches[i].reachQtyRate + '%</td><td>'
					+ branches[i].targetAmt + '</td><td>' + branches[i].reachAmt + '</td><td>' + branches[i].reachAmtRate + '%</td></tr>';
					$("#branchTable").append(html);
				}
				tableSH("brandFirm-table", 4);

				// 事业部和项目
				var bizUnits = response.bizUnits;
				$(".bizUnitProjectBox").remove();
				for (var k = 0; k < bizUnits.length; k++) {
					var barData = [{ name: "目标销量", value: bizUnits[k].targetQty }, { name: "销量达成", value: bizUnits[k].reachQty }, { name: "目标销售额", value: bizUnits[k].targetAmt }, { name: "销售额达成", value: bizUnits[k].reachAmt }];
					// 图表HTML
					var barMap = '<div class="chart chart-bars" id="bizUnit' + k + '"></div>';
					// 表格HTML
					var tableHtml = '<div class="content"><table class="table u-table-b" id="bizUnit'+ k +'"><thead><tr><th>项目</th><th>目标销量</th><th>销量达成</th><th>销量达成率</th><th>目标销售额</th><th>销售额达成</th><th>销售额达成率</th></tr></thead><tbody>';
					tableHtml = tableHtml + '<tr><td>合计</td><td>' + bizUnits[k].targetQty + '</td><td>' + bizUnits[k].reachQty + '</td><td>' + bizUnits[k].reachQtyRate + '%</td><td>'
						+ bizUnits[k].targetAmt + '</td><td>' + bizUnits[k].reachAmt + '</td><td>' + bizUnits[k].reachAmtRate + '%</td></tr>';

					var projects = bizUnits[k].subValues;
					for(var j =0; j< projects.length ;j++) {
						tableHtml = tableHtml + '<tr><td>' + projects[j].name +'</td><td>' + projects[j].targetQty + '</td><td>' + projects[j].reachQty + '</td><td>' + projects[j].reachQtyRate + '%</td><td>'
							+ projects[j].targetAmt + '</td><td>' + projects[j].reachAmt + '</td><td>' + projects[j].reachAmtRate + '%</td></tr>';
					}
					tableHtml = tableHtml + '</tbody></table></div>';

					// 整体区域HTML
					var html = '<div class="m-box bizUnitProject">' + barMap + tableHtml + '<a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a></div>';
					$("#bizUnitProjectBox").append(html);
					getBars(barData,  bizUnits[k].name, 'bizUnit' + k);
					tableSH("bizUnit" + k, 4);
				}

				// 周别
				var LineDatas = [{
					name: '销量达成(万)',
					data: response.weekQtys
				}, {
					name: '销售额达成(千万)',
					data: response.weekAmts
				}];
				getLines(LineDatas, "lines");

			},
			error: function () {
				console.log("Error:获取后台数据失败！");
			}
		});


	    // data:地图数据(value:销量数据，sum:销售额数据)
	    //var mapDatas = [{ name: "北京市", value: 3111400, sum: 34324, company: "北京分公司" }, { name: "山东省", value: 200, sum: 3414, company: "山东分公司" }, { name: "辽宁省", value: 300, sum: 14324, company: "辽宁分公司" }, { name: "广东省", value: 100, sum: 34240, company: "广东分公司" }];

		// mapTotal：太力总部统计数据
	    //var mapTotal = [{ name: "销量", value: 890000 }, { name: "销售额", value: 890000 }];

	    // 地图初始化
	    getMap(mapDatas, mapTotal, "map");

	    // data:销售达成月度趋势图 
/*	    var barLineDatas = [{
	        name: '销量达成(万)',
	        data: [{ time: '2017-2', value: 52 }, { time: '2017-3', value: 46 }, { time: '2017-4', value: 86 }, { time: '2017-5', value: 78 }, { time: '2017-6', value: 88 }, { time: '2017-7', value: 84 }]
	    }, {
	        name: '销售额达成(千万)',
	        data: [{ time: '2017-2', value: 62 }, { time: '2017-3', value: 56 }, { time: '2017-4', value: 76 }, { time: '2017-5', value: 68 }, { time: '2017-6', value: 98 }, { time: '2017-7', value: 94 }]
	    }, {
	        name: '销量达成率',
	        data: [{ time: '2017-2', value: 52 }, { time: '2017-3', value: 46 }, { time: '2017-4', value: 86 }, { time: '2017-5', value: 78 }, { time: '2017-6', value: 88 }, { time: '2017-7', value: 84 }]
	    }, {
	        name: '销售额达成率',
	        data: [{ time: '2017-2', value: 12 }, { time: '2017-3', value: 16 }, { time: '2017-4', value: 26 }, { time: '2017-5', value: 48 }, { time: '2017-6', value: 38 }, { time: '2017-7', value: 24 }]
	    }];
	    getBarLines(barLineDatas, "barLines"); */


	    // data:销售达成月度趋势图 
/*	    var LineDatas = [{
	        name: '销量达成(万)',
	        data: [{ time: '近8周', value: 46 }, { time: '近7周', value: 86 }, { time: '近6周', value: 78 }, { time: '近5周', value: 88 }, { time: '近4周', value: 84 }, { time: '近3周', value: 52 }, { time: '近2周', value: 12 }, { time: '近1周', value: 44 }]
	    }, {
	        name: '销售额达成(千万)',
	        data: [{ time: '近8周', value: 12 }, { time: '近7周', value: 16 }, { time: '近6周', value: 26 }, { time: '近5周', value: 38 }, { time: '近4周', value: 84 }, { time: '近3周', value: 24 }, { time: '近2周', value: 90 }, { time: '近1周', value: 44 }]
	    }];
	    getLines(LineDatas, "lines");*/

	    // data:业务维度数据
	    //var hw_barsDatas = [{ name: "目标销量", value: 600 }, { name: "销量达成", value: 600 }, { name: "目标销售额", value: 300 }, { name: "销售额达成", value: 200 }];
	    //var sx_barsDatas = [{ name: "目标销量", value: 400 }, { name: "销量达成", value: 250 }, { name: "目标销售额", value: 200 }, { name: "销售额达成", value: 100 }];
	    //var fx_barsDatas = [{ name: "目标销量", value: 350 }, { name: "销量达成", value: 200 }, { name: "目标销售额", value: 150 }, { name: "销售额达成", value: 90 }];
	    //var dkh_barsDatas = [{ name: "目标销量", value: 700 }, { name: "销量达成", value: 550 }, { name: "目标销售额", value: 350 }, { name: "销售额达成", value: 200 }];
	    //getBars(hw_barsDatas, '华为业务群销售达成', 'barsSX');
	    //getBars(sx_barsDatas, '三星事业部销售达成', 'barsSX');
	    //getBars(fx_barsDatas, '分销事业部销售达成', 'barsFX');
	    //getBars(dkh_barsDatas, '大客户事业部销售达成', 'barsDKH');

	}

	// 配置：中国地图
	function getMap(datas, totalDatas, Id) {
	    var chart = echarts.init(document.getElementById(Id));
	    //window.onresize = chart.resize;

	    var storeNum = getMaxValue(datas);
	    var visual = numToShow(storeNum);

	    $("#" + Id).parent().find(".u-visualmap").remove();
	    $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>销量</h6></div>');

	    $("#" + Id).parent().find(".totalContent").remove();
	    $("#" + Id).parent().append('<div class="u-box-infors">' + '<div class="title">太力总部</div>' + '<div class="content">' + '<div class="a"><span>销量：</span><b>' + toQfw(totalDatas[0].value) + ' 台</b></div>' + '<div class="b"><span>销售额：</span><b>' + toQfw(totalDatas[1].value) + ' 元</b></div>' + '</div></div>');

	    var option = {
	        title: {
	            text: '全国销售达成数据展示图',
	            textStyle: {
	                color: '#333',
	                fontSize: 16,
	                fontWeight: 'normal'
	            },
	            top: '8px',
	            left: 'center'
	        },
	        tooltip: {
	            trigger: 'item',
	            padding: 0,
	            borderColor: 'red',
	            backgroundColor: 'black',
	            formatter: function formatter(params) {
	                try {
	                    var tip = '<div class="m-tooltip">' + '<div class="title">' + params.data.company + '</div>' + '<div class="content">' + '<div class="a"><span>销量</span><b>' + toQfw(params.value) + '</b></div>' + '<div class="b"><span>销售额</span><b> ' + toQfw(params.data.sum) + '</b></div></div></div>';
	                    return tip;
	                } catch (e) {
	                    return;
	                }
	            }
	        },
	        visualMap: {
	            type: 'continuous',
	            min: 0,
              max: 10000,
	            left: 'center',
	            // bottom: '1%',
	            orient:'horizontal',
              text: ['10000','销量  0'], 
              calculable: false,
	            inRange: {
	                color: ['#aae6fa', '#78dcfa', '#50c8fa', '#01aafa', '#116ed8']
	            },
	            textStyle: {
	                color: 'grey'
	            }
	        },
	        series: [{
	            name: "chinaMap",
	            type: 'map',
	            mapType: 'china',
	            zoom: 1,
	           // roam: false,
	            left: 'center',
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        color: '#333'
	                    }
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    borderWidth: 2,
	                    borderColor: '#fff',
	                    shadowColor: 'rgba(142, 47, 0, 0.75)',
	                    shadowBlur: 3,
	                    areaColor: null
	                }
	            },
	            data: datas
	        }]
	    };

	    // 载入配置显示地图
	    chart.setOption(option);
     document.getElementById("map").setAttribute('option',JSON.stringify(option))//zyt
	}

	// 配置：柱状折线图
	function getBarLines(datas, Id) {
	    var chart = echarts.init(document.getElementById(Id));
	    window.onresize = chart.resize;

	    var legendDatas = [],
	        timeDatas = [],
	        salesVal = [],
	        salesValReach = [],
	        sumVal = [],
	        sumValReach = [];

	    for (var i in datas) {
	        legendDatas.push(datas[i].name);
	    }

	    for (var j = 0; j < datas[0].data.length; j++) {
	        timeDatas.push(datas[0].data[j].time);
	        salesVal.push(datas[0].data[j].value);
	        salesValReach.push(datas[1].data[j].value);
	        sumVal.push(datas[2].data[j].value);
	        sumValReach.push(datas[3].data[j].value);
	    }

	    var option = {
	        color: ["#2c81ff", "#ed9429", "#43caff", "#ed694f"],
	        title: {
	            text: '销售达成月度趋势图',
	            textStyle: {
	                color: '#333',
	                fontSize: 16,
	                fontWeight: 'normal'
	            },
	            top: '8px',
	            left: 'center'
	        },
	        tooltip: {
	            trigger: 'axis',
	            formatter: function formatter(params) {
	                // console.log(params);
	                var tipTime = params[0].name;
	                var content = tipTime + "<br/>" + "<span class='tipCr0'></span>" + params[0].seriesName + "：" + params[0].value + "<br/>" + "<span class='tipCr1'></span>" + params[1].seriesName + "：" + params[1].value + "<br/>" + "<span class='tipCr2'></span>" + params[2].seriesName + "：" + params[2].value + "%<br/>" + "<span class='tipCr3'></span>" + params[3].seriesName + "：" + params[3].value + "%<br/>";

	                return content;
	            }
	        },
	        grid: {
	            containLabel: true,
	            top: 105,
	            left: 10,
	            right: 10,
	            bottom: 26
	        },
	        legend: {
	            itemGap: 8,
	            itemWidth: 18,
	            itemHeight: 5,
	            top: 45,
	            data: legendDatas
	        },
	        xAxis: [{
	            type: 'category',
	            data: timeDatas,
	            axisPointer: {
	                type: 'shadow'
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
                  show:false,
	                lineStyle: {
	                    color: '#dfdfdf'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#666'
	                }
	            }
	        }],
	        yAxis: [{
	            type: 'value',
	            name: '达成',
	            min: 0,
	            position: 'left',
	            axisTick: {
	                show: false
	            },
	            axisLine: {
                  show:false,
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#666'
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: '#dfdfdf'
	                }
	            }
	        }, {
	            type: 'value',
	            name: '达成率',
	            position: 'right',
	            min: 0,
	            axisTick: {
	                show: false
	            },
	            axisLine: {
                  show:false,
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
	            axisLabel: {
	                formatter: '{value}%',
	                textStyle: {
	                    color: '#666'
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: '#dfdfdf'
	                }
	            }
	        }],
	        series: [{
	            name: legendDatas[0],
	            type: 'bar',
	            yAxisIndex: 0,
	            barGap: 0,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'outside',
	                    textStyle: {
	                        color: '#333'
	                    }
	                }
	            },
	            data: salesVal
	        }, {
	            name: legendDatas[1],
	            type: 'bar',
	            yAxisIndex: 0,
	            barGap: 0,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'outside',
	                    textStyle: {
	                        color: '#333'
	                    }
	                }
	            },
	            data: salesValReach
	        }, {
	            name: legendDatas[2],
	            type: 'line',
	            yAxisIndex: 1,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'top',
	                    textStyle: {
	                        color: '#43caff'
	                    },
	                    formatter: '{c}%'
	                }
	            },
	            data: sumVal,
	            tooltip: {
	                formatter: '{c}%'
	            }
	        }, {
	            name: legendDatas[3],
	            type: 'line',
	            yAxisIndex: 1,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'top',
	                    textStyle: {
	                        color: '#d33722'
	                    },
	                    formatter: '{c}%'
	                }
	            },
	            data: sumValReach,
	            tooltip: {
	                formatter: '{c}%'
	            }

	        }
                  ]
	    };

	    //chart.setOption(option);
    	document.getElementById("barLines").setAttribute('option',JSON.stringify(option))//zyt
	}

	// 配置：折线图
	function getLines(datas, Id) {
	    var chart = echarts.init(document.getElementById(Id));
	    window.onresize = chart.resize;

	    var legendDatas = [],
	        timeDatas = [],
	        salesValReach = [],
	        sumValReach = [];

	    for (var i in datas) {
	        legendDatas.push({ name: datas[i].name, icon: 'rect' });
	    }

	    for (var j = 0; j < datas[0].data.length; j++) {
	        timeDatas.push(datas[0].data[j].time);
	        salesValReach.push(datas[0].data[j].value);
	        sumValReach.push(datas[1].data[j].value);
	    }

	    var option = {
	        color: ["#2c81ff", "#ed9429"],
	        title: {
	            text: '销售达成周别趋势图',
	            textStyle: {
	                color: '#333',
	                fontSize: 16,
	                fontWeight: 'normal'
	            },
	            top: '8px',
	            left: 'center'
	        },
	        tooltip: {
	            trigger: 'axis'
	        },
	        grid: {
	            containLabel: true,
	            top: 105,
	            left: 10,
	            right: 10,
	            bottom: 26
	        },
	        legend: {
	            itemGap: 8,
	            itemWidth: 18,
	            itemHeight: 5,
	            top: 45,
	            right: 5,
	            data: legendDatas
	        },
	        xAxis: [{
	            type: 'category',
	            data: timeDatas,
	            axisPointer: {
	                type: 'shadow'
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                lineStyle: {
	                    color: '#dfdfdf'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#666'
	                }
	            }
	        }],
	        yAxis: [{
	            type: 'value',
	            name: '达成',
	            min: 0,
	            position: 'left',
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#666'
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    color: '#dfdfdf'
	                }
	            }
	        }],
	        series: [{
	            name: legendDatas[0].name,
	            type: 'line',
	            yAxisIndex: 0,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                        color: '#2c81ff'
	                    }
	                }
	            },
	            data: salesValReach
	        }, {
	            name: legendDatas[1].name,
	            type: 'line',
	            yAxisIndex: 0,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                        color: '#ed9429'
	                    }
	                }
	            },
	            data: sumValReach
	        }]
	    };

	    //chart.setOption(option);
    	document.getElementById("lines").setAttribute('option',JSON.stringify(option))//zyt
	}

	// 配置：多柱状图
	function getBars(datas, titleText, Id) {
	    var chart = echarts.init(document.getElementById(Id));
	    window.onresize = chart.resize;

	    var legendDatas = [];
	    for (var i in datas) {
	        legendDatas.push(datas[i].name);
	    }
	    // 时间线
	    var nowTime = new Date(),
	        month = nowTime.getMonth() + 1,
	        year = nowTime.getFullYear(),
	        nowDate = nowTime.getDate();
	    // 当月天数
	    var day = new Date(year, month, 0);
	    var days = day.getDate();
	    var option = {
	        color: ["#43caff", '#2c81ff', '#ed9429', '#ed694f', '#ed694f'],
	        title: {
	            text: titleText + "销售达成",
	            textStyle: {
	                color: '#333',
	                fontSize: 16,
	                fontWeight: 'normal'
	            },
	            top: '8px',
	            left: 'center'
	        },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: {
	                type: 'shadow'
	            },
	            confine: true
	        },
	        legend: {
	            itemGap: 10,
	            itemWidth: 18,
	            itemHeight: 5,
	            top: 45,
	            right: 5,
	            data: legendDatas
	        },
	        grid: {
	            containLabel: true,
	            top: 60,
	            left: 12,
	            right: 48,
	            bottom: 0,
	            height: '80%'
	        },
	        xAxis: [{
	            type: 'value',
	            position: 'top',
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                show: false,
	                textStyle: {
	                    color: "red"
	                }
	            },
	            max: 'dataMax'
	        }, {
	            type: 'value',
	            position: 'bottom',
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                show: false,
	                textStyle: {
	                    color: "red"
	                }
	            },
	            max: 'dataMax'
	        }, {
	            type: 'value',
	            position: 'bottom',
	            offset: 1,
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                show: false,
	                textStyle: {
	                    color: "red"
	                }
	            },
	            max: 'dataMax'
	        }],
	        yAxis: {
	            type: 'category',
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisLabel: {
	                show: true
	            },
	            data: [titleText]
	        },
	        series: [{
	            name: '目标销量',
	            type: 'bar',
	            xAxisIndex: 0,
	            barGap: '0',
	            barWidth: 20,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff'
	                    },
	                    offset: [0, -2],
	                    position: 'inside',
	                    formatter: '{c}'
	                }
	            },
	            data: [datas[0].value]
	        }, {
	            name: '销量达成',
	            type: 'bar',
	            xAxisIndex: 0,
	            barGap: '0',
	            barWidth: 20,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff'
	                    },
	                    offset: [0, -2],
	                    position: 'inside',
	                    formatter: '{c}'
	                }
	            },
	            markPoint: {
	                data: [{
	                    type: 'max',
	                    name: '占比'
	                }],
	                label: {
	                    normal: {
	                        color: "red"
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: 'rgba(0,0,0,0)',
	                        label: {
	                            show: true,
	                            textStyle: {
	                                color: "#666"
	                            },
	                            offset: [23, 26],
	                            formatter: function formatter(params) {
	                                return (params.value / datas[0].value * 100).toFixed(2) + "%";
	                            }
	                        }
	                    }

	                }
	            },
	            data: [datas[1].value]
	        }, {
	            name: '目标销售额',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '0',
	            barWidth: 20,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff'
	                    },
	                    offset: [0, -2],
	                    position: 'inside',
	                    formatter: '{c}'
	                }
	            },
	            data: [datas[2].value]
	        }, {
	            name: '销售额达成',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '0',
	            barWidth: 20,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff'
	                    },
	                    offset: [0, -2],
	                    position: 'inside',
	                    formatter: '{c}'
	                }
	            },
	            markPoint: {
	                data: [{
	                    type: 'max',
	                    name: '占比'
	                }],
	                label: {
	                    normal: {
	                        color: "red"
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: 'rgba(0,0,0,0)',
	                        label: {
	                            show: true,
	                            textStyle: {
	                                color: "#666"
	                            },
	                            offset: [23, 26],
	                            formatter: function formatter(params) {
	                                return (params.value / datas[2].value * 100).toFixed(2) + "%";
	                            }
	                        }
	                    }

	                }
	            },
	            data: [datas[3].value]
	        }, {
	            name: '时间进度',
	            type: 'line',
	            xAxisIndex: 2,
	            data: [days],
	            tooltip: {
	                show: false,
	                formatter: function formatter(params) {
	                    console.log("ok");
	                    console.log(params);
	                }
	            },
	            itemStyle: {
	                normal: {
	                    opacity: 0
	                }
	            },
	            markLine: {
	                symbol: ['none', 'none'],
	                silent: true,
	                label: {
	                    normal: {
	                        position: 'end',
	                        formatter: function formatter(params) {
	                            return (params.value / days * 100).toFixed(2) + "%";
	                        }
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        type: 'solid'
	                    }
	                },
	                data: [{
	                    name: '当月时间进度',
	                    xAxis: nowDate,
	                    tooltip: {
	                        show: false
	                    }
	                }]
	            }

	        }]
	    };
	    //chart.setOption(option);
    	if("bizUnit0" == Id){
        document.getElementById("bizUnit0").setAttribute('datas',JSON.stringify(datas));//zyt
        document.getElementById("bizUnit0").setAttribute('titleText',titleText);
      }else if("bizUnit1" == Id){
         document.getElementById("bizUnit1").setAttribute('datas',JSON.stringify(datas));//zyt
         document.getElementById("bizUnit1").setAttribute('titleText',titleText);
      }else{
         document.getElementById("bizUnit2").setAttribute('datas',JSON.stringify(datas));//zyt
        document.getElementById("bizUnit2").setAttribute('titleText',titleText);
			}
	}

/***/ })
/******/ ]);
//# sourceMappingURL=headLeaderView.map