/*
干掉原网页的.wrapper(body下包裹整个显示内容的div);
然后创建一个自定义DOM结构，添加到body上；
分别需要添加的DOM id : 
销量与销售额：
todayQty\todayAmt\monthQty\monthAmt\yearQty\yearAmt\
客户与门店拜访：
clientCount\vistClientCount\storeCount\vistStoreCount\saleManCount
*/
debugger;
window.addEventListener('DOMContentLoaded', function() {
  var wrapperOrigin = document.querySelector('.g-main');
  var wrapper = document.createElement('div');
  if (wrapper) {
    wrapper.style.background = '#F7F7F7';
    wrapper.style.height = '100vh';
    wrapper.style.padding = '0';
    var href = wrapper.ownerDocument.defaultView.document.location.href;
    //如果匹配的地址正确，则将.wrapper里面的html清空
    if (href && href.indexOf('configType') != -1) {
      wrapperOrigin.style.display = "none";
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
        ".content-item span{font-size: 10px; color: #999; display: block; text-align: center}" +
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
      document.body.insertBefore(wrapper, wrapperOrigin);
    }
  }
}, false);
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
         * 业务总览-办事处
         */
        window.displayTable = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 4;

            if ($(e).hasClass("Up")) {
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".content").height("auto").css("overflow", "auto");
                $(e).find("span").text("收起");
            } else if ($(e).hasClass("Down")) {
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
            
            $(".m-body").height(parseInt($("body").height())-parseInt($(".m-body").css("top"))-20);
            
            // 初始化当前日期
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            if($("#date").html()!="") {
                $("#selDay").val($("#date").html());
            } else {
                $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            }

            init();

            laydate({
                elem: '#selDay',
                // min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
                max: laydate.now(), //+1代表明天，+2代表后天，以此类推
                choose: function(datas){ //选择日期完毕的回调
                    //alert('得到：'+datas);
                    init();
                }
            });

            $("#planTypeSelect").change(function () {
                init();
            });
        });

        function tableSH(id, len) {
            var table_minHeight = parseInt($("#" + id).find("thead th").height()) + parseInt($("#" + id).find("tbody td").height()) * len;

            if ($("#" + id).find("tbody tr").length <= len) {
                $("#"+id).parent().parent().find(".content").height('auto');
                $("#"+id).parent().parent().find(".btn-display").hide();
                $("#" + id).parent().next(".btn-display").removeClass('Up');
                $("#" + id).parent().next(".btn-display").removeClass('Down');
            } else {
                $("#" + id).parent().height(table_minHeight).css("overflow", "hidden");
                $("#" + id).parent().next(".btn-display").show().addClass("Up");
            }
        }

        function init() {

            // 年计划或月计划
            var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }

            //面包屑导航
            breadcrumb("办事处","officeMaster");

            // 当前的月份
            var date = $("#selDay").val();

            var configType = $("#configType").text();
            var loginName = $("#loginName").text();
            var encoder = $("#encoder").text();
            var type = $("#type").text();
            var branchName = $("#branchName").text();
            var projectName = $("#projectName").text();
            var bizUnitName = $("#bizUnitName").text();
            var officeName = $("#officeName").text();
            var salerName = $("#salerName").text();
          	var modelName = $("#modelName").text();
            var drill = $("#drill").text();

            $.ajax({
                url: "/ptDataShow/salesPlan/salesOverviewData?isYear=" + isYear + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) 
                + "&modelName=" + encodeURIComponent(modelName) + "&drill=" + drill,
                async: false,
                success: function (response) {
                    // console.log(response);
                    // 刷新头部的汇总数据
                    $("#totalTargetQty").html(toThousands(response.totalTargetQty));
                    $("#totalAuditQty").html(toThousands(response.totalAuditQty));
                    $("#totalReachQty").html(toThousands(response.totalReachQty));
                    $("#totalReachQtyRate").html(response.totalReachQtyRate);
                    $("#totalTargetAmt").html(toThousands(response.totalTargetAmt));
                    $("#totalAuditAmt").html(toThousands(response.totalAuditAmt));
                    $("#totalReachAmt").html(toThousands(response.totalReachAmt));
                    $("#totalReachAmtRate").html(response.totalReachAmtRate);

                    if (configType != '02') {

                        $(".bizUnitProject").remove();
                        $(".projectAjax").remove();
                        $("#modelTable").empty();
                        $("#clientTable").empty();
                        $("#storeTable").empty();
                        $("#salesManTable").empty();

                        if(response.rank.value){

                            // 销售人员排行
                            $("#branchName").text(response.rank.branchName);
                            $("#officeName").text(response.rank.value.name);
                            $("#rankName").html(response.rank.value.branchName+"—"+response.rank.value.name);

                            //数据中的达成率添加%
                            response = addPercentSigns(response);

                            //销量达成排名悬浮窗
                            $("#rankQty").html(suspBySalesCountReach(response.rank));

                            //销售额达成排名悬浮窗
                            $("#rankAmt").html(suspBySalesAmountReach(response.rank));

                            // TODO 获取经纬度
                            // 百度地图数据（data:坐标、门店名称、地址、销量、金额）
                            //var BDmapName = '四川省';
                            var BDmapName = response.geoProvince;
                            /*                        var BDdatas = [{
                             name: "四川省内江市威远县诚泰南大街华为体验店",
                             address: "四川xxxx",
                             salesNums: 684,
                             sumNums: 99934,
                             value: [104.674516, 29.532623]
                             }, {
                             name: "四川省广安市华蓥市山水华蓥广场华为体验店",
                             address: "四川xxxx",
                             salesNums: 6841,
                             sumNums: 19934,
                             value: [106.783346, 30.390927]
                             }, {
                             name: "四川省成都市都江堰市幸福大道城汇华为体验店",
                             address: "四川xxxx",
                             salesNums: 1841,
                             sumNums: 12934,
                             value: [103.632697, 30.999129]
                             }, {
                             name: "四川省攀枝花市米易县未来通讯桥东街体验店",
                             address: "四川xxxx",
                             salesNums: 1841,
                             sumNums: 12934,
                             value: [102.11372, 26.891967]
                             }];*/
                            var BDdatas = response.geoInfos;

                            // 获取百度地图
                            if(BDmapName && BDdatas) {
                                getBDMap(BDmapName, BDdatas, "map");
                            } else {
                                getBDMap(BDmapName, [], "map");
                            }

                            // 事业部项目层级
                            if(response.bizUnits) {
                                var bizUnits = response.bizUnits;
                                for (var k = 0; k < bizUnits.length; k++) {
                                    var barData = [{ name: "目标销量", value: bizUnits[k].targetQty }, { name: "销量达成", value: bizUnits[k].reachQty }, { name: "目标销售额", value: bizUnits[k].targetAmt }, { name: "销售额达成", value: bizUnits[k].reachAmt }];
                                    var deptSalesCountReachRankA;
                                    var deptSalesAmountReachRankA;
                                    for(var i in response.ranks){
                                        if(response.ranks[i].value.department == bizUnits[k].name){
                                            deptSalesCountReachRankA = suspByDeptSalesCountReach(response.ranks[i]);
                                            deptSalesAmountReachRankA = suspByDeptSalesAmountReach(response.ranks[i]);
                                            break;
                                        }
                                    }
                                    var salesRank = '<ul class="sales-rank"><li><span>'+bizUnits[k].name+'</span></li><li><span>销量达成</span>'+deptSalesCountReachRankA+'</li><li><span>销售额达成</span>'+deptSalesAmountReachRankA+'</li></ul>';
                                    // 图表HTML
                                    var barMap = '<div class="chart chart-bars" style="height:138px;" id="bizUnit' + k + '"></div>';
                                    // 表格HTML
                                    var tableHtml = '<div class="content"><table style="word-wrap:break-word; word-break:break-all"  class="table u-table-b" id="bizUnit'+ k +'"><thead><tr><th>项目</th><th class="sort">目标销量</th><th class="sort">销量达成</th><th class="sort">销量达成率</th><th class="sort">目标销售额(万)</th><th class="sort">销售额达成(万)</th><th class="sort">销售额达成率</th></tr></thead><tbody>';
                                    //tableHtml = tableHtml + '<tr><td title="合计">合计</td><td>' + bizUnits[k].targetQty + '</td><td>' + bizUnits[k].reachQty + '</td><td>' + bizUnits[k].reachQtyRate + '%</td><td>'
                                    //    + bizUnits[k].targetAmt + '</td><td>' + bizUnits[k].reachAmt + '</td><td>' + bizUnits[k].reachAmtRate + '%</td></tr>';

                                    var projects = bizUnits[k].subValues;
                                    for(var j =0; j< projects.length ;j++) {
                                        var link = '#';
                                        if(isYear!='1') {
                                            link = '/ptDataShow/salesPlan/salesOverview?type=06&projectName='+ encodeURIComponent(projects[j].name) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text()) + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneProject";
                                        }
                                        tableHtml = tableHtml + '<tr><td title="' + projects[j].name +'"><a href="'+ link +'" title="' + projects[j].name + '">' + projects[j].name + '</a></td><td>' + toThousands(projects[j].targetQty) + '</td><td>' + toThousands(projects[j].reachQty) + '</td><td>' + projects[j].reachQtyRate + '%</td><td>'
                                            + toThousands(projects[j].targetAmt) + '</td><td>' + toThousands(projects[j].reachAmt) + '</td><td>' + projects[j].reachAmtRate + '%</td></tr>';
                                    }
                                    tableHtml = tableHtml + '</tbody></table></div>';

                                    // 整体区域HTML
                                    var html = '<div class="m-box bizUnitProject">' + salesRank + barMap + tableHtml + '<a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a></div>';
                                    $("#projectRankPlaceHolder").before(html);
                                    getBars(barData,  bizUnits[k].name, 'bizUnit' + k);
                                    tableSH("bizUnit" + k, 4);
                                }
                            }else if(response.ranks) {
                                // 项目
                                for(var i =0; i< response.ranks.length; i++) {
                                    var rank =  response.ranks[i];
                                    if(!rank.value) {
                                        continue;
                                    }
                                    var projectSalesCountReachRankA = suspByProjectSalesCountReach(rank);
                                    var projectSalesAmountReachRankA = suspByProjectSalesAmountReach(rank);
                                    var salesRank = '<ul class="sales-rank clearfix"><li><span>'+rank.value.projectName+'</span></li><li><span>销量达成</span>'+projectSalesCountReachRankA+'</li><li><span>销售额达成</span>'+projectSalesAmountReachRankA+'</li></ul>';

                                    var barHtml = '<div class="m-box projectAjax">'+salesRank+'<div class="chart chart-bars" id="project-' + i + '"></div></div>';

                                    // $("#projectRankPlaceHolder").before(rankHtml);
                                    $("#projectRankPlaceHolder").before(barHtml);

                                    var hw_barsDatas = [{ name: "目标销量", value: rank.value.targetQty }, { name: "销量达成", value: rank.value.reachQty }, { name: "目标销售额", value: rank.value.targetAmt }, { name: "销售额达成", value: rank.value.reachAmt }];
                                    getBars(hw_barsDatas, rank.value.projectName, "project-" + i);
                                }
                            }

                        }

                        // 机型列表 modelTable
                        if(response.modelName) {
                            for(var i =0; i< response.modelName.length ;i++) {
                                var model = response.modelName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=06&projectName='+ encodeURIComponent($("#projectName").text())
                                + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text()) + '&branchName=' + encodeURIComponent(branchName)
                                + "&officeName=" + encodeURIComponent($("#officeName").text())
                                + "&modelName=" + encodeURIComponent(model.name)
                                + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneModel";
                                var html = '<tr><td><a href="'+link+'" title="' + model.name + '">' + model.name + '</a></td><td>' + toThousands(model.targetQty) + '</td><td>' + toThousands(model.reachQty) + '</td><td>' + model.reachQtyRate + '%</td><td>'
                                    + toThousands(model.targetAmt) + '</td><td>' + toThousands(model.reachAmt) + '</td><td>' + model.reachAmtRate + '%</td></tr>';
                                $("#modelTable").append(html);
                            }
                        }
                        tableSH("model-table", 5);

                        // 客户列表
                        if(response.customerName) {
                            for(var i =0; i< response.customerName.length ;i++) {
                                var client = response.customerName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&salerName=' + encodeURIComponent(salerName) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                + "&branchName=" + encodeURIComponent($("#branchName").text()) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                + "&officeName=" + encodeURIComponent(officeName)
                                + "&modelName=" + encodeURIComponent(modelName) + "&drill=oneCust"
								+ "&custName=" + encodeURIComponent(client.name);
                                var html = '<tr><td><a href="'+link+'" title="' + client.name + '">' + client.name + '</a></td><td>' + toThousands(client.targetQty) + '</td><td>' + toThousands(client.reachQty) + '</td><td>' + client.reachQtyRate + '%</td><td>'
                                    + toThousands(client.targetAmt) + '</td><td>' + toThousands(client.reachAmt) + '</td><td>' + client.reachAmtRate + '%</td></tr>';
                                $("#clientTable").append(html);
                            }
                        }
                        tableSH("client-table", 5);

                        // 门店列表
                        if(response.storeName) {
                            for(var i =0; i< response.storeName.length ;i++) {
                                var store = response.storeName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&salerName=' + encodeURIComponent(salerName) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                + "&branchName=" + encodeURIComponent($("#branchName").text()) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                + "&officeName=" + encodeURIComponent(officeName) 
                                + "&modelName=" + encodeURIComponent(modelName) + "&drill=oneStore"
								+ "&storeName=" + encodeURIComponent(store.name);
                                var html = '<tr><td><a href="'+link+'" title="' + store.name + '">' + store.name + '</a></td><td>' + toThousands(store.targetQty) + '</td><td>' + toThousands(store.reachQty) + '</td><td>' + store.reachQtyRate + '%</td><td>'
                                    + toThousands(store.targetAmt) + '</td><td>' + toThousands(store.reachAmt) + '</td><td>' + store.reachAmtRate + '%</td></tr>';
                                $("#storeTable").append(html);
                            }
                        }
                        tableSH("store-table", 5);

                        // 业务人员
                        if(response.salerName) {
                            for(var i =0; i< response.salerName.length ;i++) {
                                var saler = response.salerName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=07&salerName=' + encodeURIComponent(saler.id) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                    + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                    + "&modelName=" + encodeURIComponent(modelName)
                                    + "&officeName=" + encodeURIComponent(officeName) + "&drill=" + encodeURIComponent($("#drill").text());
                                // if($("#drill").text() == '0') {
                                //     link = '#';
                                // }
                                var html = '<tr><td><a href="'+link+'" title="' + saler.name + '">' + saler.name + '</a></td><td>' + toThousands(saler.targetQty) + '</td><td>' + toThousands(saler.reachQty) + '</td><td>' + saler.reachQtyRate + '%</td><td>'
                                    + toThousands(saler.targetAmt) + '</td><td>' + toThousands(saler.reachAmt) + '</td><td>' + saler.reachAmtRate + '%</td></tr>';
                                $("#salesManTable").append(html);
                            }
                        }
                        tableSH("salesMan-table", 5);

                        // 时间维度周别和月度
                        var barLineDatas = [{
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

                        // 周别
                        var LineDatas = [{
                            name: '销量达成(万)',
                            data: response.weekQtys
                        }, {
                            name: '销售额达成(千万)',
                            data: response.weekAmts
                        }];
                        getLines(LineDatas, "lines");

                    }
									//选择维度为年时，表格无数据，隐藏表格
        	        $(".u-table-b").each(function(){
        	        	if($(this).find("tbody tr").length==0){
        	        		$(this).hide();
        	        	}else{
        	        		$(this).show();
        	        	}
        	        });
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

            // data:地图数据(value:销量数据，sum:销售额数据)
           // var mapDatas = [{ name: "朝阳市", value: 31100, sum: 3432, company: "朝阳办事处" }, { name: "铁岭市", value: 200, sum: 3414, company: "铁岭办事处" }, { name: "锦州市", value: 300, sum: 1432, company: "锦州办事处" }, { name: "本溪市", value: 100, sum: 342, company: "本溪办事处" }];

            // 省份名称
           // var provinceName = '辽宁省';
            // 地图初始化
           // getMap(mapDatas, provinceName, "map");

            // data:销售达成月度趋势图
/*            var barLineDatas = [{
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
            }];*/
            //getBarLines(barLineDatas, "barLines");

            // data:销售达成月度趋势图
/*            var LineDatas = [{
                name: '销量(万)',
                data: [{ time: '近8周', value: 46 }, { time: '近7周', value: 86 }, { time: '近6周', value: 78 }, { time: '近5周', value: 88 }, { time: '近4周', value: 84 }, { time: '近3周', value: 52 }, { time: '近2周', value: 12 }, { time: '近1周', value: 44 }]
            }, {
                name: '销售额(千万)',
                data: [{ time: '近8周', value: 12 }, { time: '近7周', value: 16 }, { time: '近6周', value: 26 }, { time: '近5周', value: 38 }, { time: '近4周', value: 84 }, { time: '近3周', value: 24 }, { time: '近2周', value: 90 }, { time: '近1周', value: 44 }]
            }];*/
            //getLines(LineDatas, "lines");

            // data:业务维度数据
            //var hw_barsDatas = [{ name: "目标销量", value: 600 }, { name: "销量达成", value: 600 }, { name: "目标销售额", value: 300 }, { name: "销售额达成", value: 200 }];
            //var sx_barsDatas = [{ name: "目标销量", value: 400 }, { name: "销量达成", value: 250 }, { name: "目标销售额", value: 200 }, { name: "销售额达成", value: 100 }];
            //var fx_barsDatas = [{ name: "目标销量", value: 350 }, { name: "销量达成", value: 200 }, { name: "目标销售额", value: 150 }, { name: "销售额达成", value: 90 }];
            //var dkh_barsDatas = [{ name: "目标销量", value: 700 }, { name: "销量达成", value: 550 }, { name: "目标销售额", value: 350 }, { name: "销售额达成", value: 200 }];
            //getBars(hw_barsDatas, '华为业务群', 'barsHW');
            //getBars(sx_barsDatas, '三星事业部', 'barsSX');
            //getBars(fx_barsDatas, '分销事业部', 'barsFX');
        }
      
      
      window.timeInit = function() {

            // 年计划或月计划
            var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }

            //面包屑导航
            breadcrumb("办事处","officeMaster");

            // 当前的月份
            var date = $("#selDay").val();

            var configType = $("#configType").text();
            var loginName = $("#loginName").text();
            var encoder = $("#encoder").text();
            var type = $("#type").text();
            var branchName = $("#branchName").text();
            var projectName = $("#projectName").text();
            var bizUnitName = $("#bizUnitName").text();
            var officeName = $("#officeName").text();
            var salerName = $("#salerName").text();
          	var modelName = $("#modelName").text();
            var drill = $("#drill").text();

            $.ajax({
                url: "/ptDataShow/salesPlan/salesOverviewData?isYear=" + isYear + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) 
                + "&modelName=" + encodeURIComponent(modelName) + "&drill=" + drill,
                async: false,
                success: function (response) {
                    // console.log(response);
                    // 刷新头部的汇总数据
                    $("#totalTargetQty").html(toThousands(response.totalTargetQty));
                    $("#totalAuditQty").html(toThousands(response.totalAuditQty));
                    $("#totalReachQty").html(toThousands(response.totalReachQty));
                    $("#totalReachQtyRate").html(response.totalReachQtyRate);
                    $("#totalTargetAmt").html(toThousands(response.totalTargetAmt));
                    $("#totalAuditAmt").html(toThousands(response.totalAuditAmt));
                    $("#totalReachAmt").html(toThousands(response.totalReachAmt));
                    $("#totalReachAmtRate").html(response.totalReachAmtRate);

                    if (configType != '02') {

                        $(".bizUnitProject").remove();
                        $(".projectAjax").remove();
                        $("#modelTable").empty();
                        $("#clientTable").empty();
                        $("#storeTable").empty();
                        $("#salesManTable").empty();

                        if(response.rank.value){

                            // 销售人员排行
                            $("#branchName").text(response.rank.branchName);
                            $("#officeName").text(response.rank.value.name);
                            $("#rankName").html(response.rank.value.branchName+"—"+response.rank.value.name);

                            //数据中的达成率添加%
                            response = addPercentSigns(response);

                            //销量达成排名悬浮窗
                            $("#rankQty").html(suspBySalesCountReach(response.rank));

                            //销售额达成排名悬浮窗
                            $("#rankAmt").html(suspBySalesAmountReach(response.rank));

                            // TODO 获取经纬度
                            // 百度地图数据（data:坐标、门店名称、地址、销量、金额）
                            //var BDmapName = '四川省';
                            var BDmapName = response.geoProvince;
                            /*                        var BDdatas = [{
                             name: "四川省内江市威远县诚泰南大街华为体验店",
                             address: "四川xxxx",
                             salesNums: 684,
                             sumNums: 99934,
                             value: [104.674516, 29.532623]
                             }, {
                             name: "四川省广安市华蓥市山水华蓥广场华为体验店",
                             address: "四川xxxx",
                             salesNums: 6841,
                             sumNums: 19934,
                             value: [106.783346, 30.390927]
                             }, {
                             name: "四川省成都市都江堰市幸福大道城汇华为体验店",
                             address: "四川xxxx",
                             salesNums: 1841,
                             sumNums: 12934,
                             value: [103.632697, 30.999129]
                             }, {
                             name: "四川省攀枝花市米易县未来通讯桥东街体验店",
                             address: "四川xxxx",
                             salesNums: 1841,
                             sumNums: 12934,
                             value: [102.11372, 26.891967]
                             }];*/
                            var BDdatas = response.geoInfos;

                            // 获取百度地图
                            if(BDmapName && BDdatas) {
                                getBDMap(BDmapName, BDdatas, "map");
                            } else {
                                getBDMap(BDmapName, [], "map");
                            }

                            // 事业部项目层级
                            if(response.bizUnits) {
                                var bizUnits = response.bizUnits;
                                for (var k = 0; k < bizUnits.length; k++) {
                                    var barData = [{ name: "目标销量", value: bizUnits[k].targetQty }, { name: "销量达成", value: bizUnits[k].reachQty }, { name: "目标销售额", value: bizUnits[k].targetAmt }, { name: "销售额达成", value: bizUnits[k].reachAmt }];
                                    var deptSalesCountReachRankA;
                                    var deptSalesAmountReachRankA;
                                    for(var i in response.ranks){
                                        if(response.ranks[i].value.department == bizUnits[k].name){
                                            deptSalesCountReachRankA = suspByDeptSalesCountReach(response.ranks[i]);
                                            deptSalesAmountReachRankA = suspByDeptSalesAmountReach(response.ranks[i]);
                                            break;
                                        }
                                    }
                                    var salesRank = '<ul class="sales-rank"><li><span>'+bizUnits[k].name+'</span></li><li><span>销量达成</span>'+deptSalesCountReachRankA+'</li><li><span>销售额达成</span>'+deptSalesAmountReachRankA+'</li></ul>';
                                    // 图表HTML
                                    var barMap = '<div class="chart chart-bars" style="height:138px;" id="bizUnit' + k + '"></div>';
                                    // 表格HTML
                                    var tableHtml = '<div class="content"><table style="word-wrap:break-word; word-break:break-all"  class="table u-table-b" id="bizUnit'+ k +'"><thead><tr><th>项目</th><th class="sort">目标销量</th><th class="sort">销量达成</th><th class="sort">销量达成率</th><th class="sort">目标销售额(万)</th><th class="sort">销售额达成(万)</th><th class="sort">销售额达成率</th></tr></thead><tbody>';
                                    //tableHtml = tableHtml + '<tr><td title="合计">合计</td><td>' + bizUnits[k].targetQty + '</td><td>' + bizUnits[k].reachQty + '</td><td>' + bizUnits[k].reachQtyRate + '%</td><td>'
                                    //    + bizUnits[k].targetAmt + '</td><td>' + bizUnits[k].reachAmt + '</td><td>' + bizUnits[k].reachAmtRate + '%</td></tr>';

                                    var projects = bizUnits[k].subValues;
                                    for(var j =0; j< projects.length ;j++) {
                                        var link = '#';
                                        if(isYear!='1') {
                                            link = '/ptDataShow/salesPlan/salesOverview?type=06&projectName='+ encodeURIComponent(projects[j].name) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text()) + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneProject";
                                        }
                                        tableHtml = tableHtml + '<tr><td title="' + projects[j].name +'"><a href="'+ link +'" title="' + projects[j].name + '">' + projects[j].name + '</a></td><td>' + toThousands(projects[j].targetQty) + '</td><td>' + toThousands(projects[j].reachQty) + '</td><td>' + projects[j].reachQtyRate + '%</td><td>'
                                            + toThousands(projects[j].targetAmt) + '</td><td>' + toThousands(projects[j].reachAmt) + '</td><td>' + projects[j].reachAmtRate + '%</td></tr>';
                                    }
                                    tableHtml = tableHtml + '</tbody></table></div>';

                                    // 整体区域HTML
                                    var html = '<div class="m-box bizUnitProject">' + salesRank + barMap + tableHtml + '<a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a></div>';
                                    $("#projectRankPlaceHolder").before(html);
                                    getBars(barData,  bizUnits[k].name, 'bizUnit' + k);
                                    tableSH("bizUnit" + k, 4);
                                }
                            }else if(response.ranks) {
                                // 项目
                                for(var i =0; i< response.ranks.length; i++) {
                                    var rank =  response.ranks[i];
                                    if(!rank.value) {
                                        continue;
                                    }
                                    var projectSalesCountReachRankA = suspByProjectSalesCountReach(rank);
                                    var projectSalesAmountReachRankA = suspByProjectSalesAmountReach(rank);
                                    var salesRank = '<ul class="sales-rank clearfix"><li><span>'+rank.value.projectName+'</span></li><li><span>销量达成</span>'+projectSalesCountReachRankA+'</li><li><span>销售额达成</span>'+projectSalesAmountReachRankA+'</li></ul>';

                                    var barHtml = '<div class="m-box projectAjax">'+salesRank+'<div class="chart chart-bars" id="project-' + i + '"></div></div>';

                                    // $("#projectRankPlaceHolder").before(rankHtml);
                                    $("#projectRankPlaceHolder").before(barHtml);

                                    var hw_barsDatas = [{ name: "目标销量", value: rank.value.targetQty }, { name: "销量达成", value: rank.value.reachQty }, { name: "目标销售额", value: rank.value.targetAmt }, { name: "销售额达成", value: rank.value.reachAmt }];
                                    getBars(hw_barsDatas, rank.value.projectName, "project-" + i);
                                }
                            }

                        }

                        // 机型列表 modelTable
                        if(response.modelName) {
                            for(var i =0; i< response.modelName.length ;i++) {
                                var model = response.modelName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=06&projectName='+ encodeURIComponent($("#projectName").text())
                                + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text()) + '&branchName=' + encodeURIComponent(branchName)
                                + "&officeName=" + encodeURIComponent($("#officeName").text())
                                + "&modelName=" + encodeURIComponent(model.name)
                                + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneModel";
                                var html = '<tr><td><a href="'+link+'" title="' + model.name + '">' + model.name + '</a></td><td>' + toThousands(model.targetQty) + '</td><td>' + toThousands(model.reachQty) + '</td><td>' + model.reachQtyRate + '%</td><td>'
                                    + toThousands(model.targetAmt) + '</td><td>' + toThousands(model.reachAmt) + '</td><td>' + model.reachAmtRate + '%</td></tr>';
                                $("#modelTable").append(html);
                            }
                        }
                        tableSH("model-table", 5);

                        // 客户列表
                        if(response.customerName) {
                            for(var i =0; i< response.customerName.length ;i++) {
                                var client = response.customerName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&salerName=' + encodeURIComponent(salerName) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                + "&branchName=" + encodeURIComponent($("#branchName").text()) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                + "&officeName=" + encodeURIComponent(officeName)
                                + "&modelName=" + encodeURIComponent(modelName) + "&drill=oneCust"
								+ "&custName=" + encodeURIComponent(client.name);
                                var html = '<tr><td><a href="'+link+'" title="' + client.name + '">' + client.name + '</a></td><td>' + toThousands(client.targetQty) + '</td><td>' + toThousands(client.reachQty) + '</td><td>' + client.reachQtyRate + '%</td><td>'
                                    + toThousands(client.targetAmt) + '</td><td>' + toThousands(client.reachAmt) + '</td><td>' + client.reachAmtRate + '%</td></tr>';
                                $("#clientTable").append(html);
                            }
                        }
                        tableSH("client-table", 5);

                        // 门店列表
                        if(response.storeName) {
                            for(var i =0; i< response.storeName.length ;i++) {
                                var store = response.storeName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&salerName=' + encodeURIComponent(salerName) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                + "&branchName=" + encodeURIComponent($("#branchName").text()) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                + "&officeName=" + encodeURIComponent(officeName) 
                                + "&modelName=" + encodeURIComponent(modelName) + "&drill=oneStore"
								+ "&storeName=" + encodeURIComponent(store.name);
                                var html = '<tr><td><a href="'+link+'" title="' + store.name + '">' + store.name + '</a></td><td>' + toThousands(store.targetQty) + '</td><td>' + toThousands(store.reachQty) + '</td><td>' + store.reachQtyRate + '%</td><td>'
                                    + toThousands(store.targetAmt) + '</td><td>' + toThousands(store.reachAmt) + '</td><td>' + store.reachAmtRate + '%</td></tr>';
                                $("#storeTable").append(html);
                            }
                        }
                        tableSH("store-table", 5);

                        // 业务人员
                        if(response.salerName) {
                            for(var i =0; i< response.salerName.length ;i++) {
                                var saler = response.salerName[i];
                                var link = '/ptDataShow/salesPlan/salesOverview?type=07&salerName=' + encodeURIComponent(saler.id) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                                    + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                                    + "&modelName=" + encodeURIComponent(modelName)
                                    + "&officeName=" + encodeURIComponent(officeName) + "&drill=" + encodeURIComponent($("#drill").text());
                                // if($("#drill").text() == '0') {
                                //     link = '#';
                                // }
                                var html = '<tr><td><a href="'+link+'" title="' + saler.name + '">' + saler.name + '</a></td><td>' + toThousands(saler.targetQty) + '</td><td>' + toThousands(saler.reachQty) + '</td><td>' + saler.reachQtyRate + '%</td><td>'
                                    + toThousands(saler.targetAmt) + '</td><td>' + toThousands(saler.reachAmt) + '</td><td>' + saler.reachAmtRate + '%</td></tr>';
                                $("#salesManTable").append(html);
                            }
                        }
                        tableSH("salesMan-table", 5);

                        // 时间维度周别和月度
                        var barLineDatas = [{
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

                        // 周别
                        var LineDatas = [{
                            name: '销量达成(万)',
                            data: response.weekQtys
                        }, {
                            name: '销售额达成(千万)',
                            data: response.weekAmts
                        }];
                        getLines(LineDatas, "lines");

                    }
									//选择维度为年时，表格无数据，隐藏表格
        	        $(".u-table-b").each(function(){
        	        	if($(this).find("tbody tr").length==0){
        	        		$(this).hide();
        	        	}else{
        	        		$(this).show();
        	        	}
        	        });
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

            // data:地图数据(value:销量数据，sum:销售额数据)
           // var mapDatas = [{ name: "朝阳市", value: 31100, sum: 3432, company: "朝阳办事处" }, { name: "铁岭市", value: 200, sum: 3414, company: "铁岭办事处" }, { name: "锦州市", value: 300, sum: 1432, company: "锦州办事处" }, { name: "本溪市", value: 100, sum: 342, company: "本溪办事处" }];

            // 省份名称
           // var provinceName = '辽宁省';
            // 地图初始化
           // getMap(mapDatas, provinceName, "map");

            // data:销售达成月度趋势图
/*            var barLineDatas = [{
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
            }];*/
            //getBarLines(barLineDatas, "barLines");

            // data:销售达成月度趋势图
/*            var LineDatas = [{
                name: '销量(万)',
                data: [{ time: '近8周', value: 46 }, { time: '近7周', value: 86 }, { time: '近6周', value: 78 }, { time: '近5周', value: 88 }, { time: '近4周', value: 84 }, { time: '近3周', value: 52 }, { time: '近2周', value: 12 }, { time: '近1周', value: 44 }]
            }, {
                name: '销售额(千万)',
                data: [{ time: '近8周', value: 12 }, { time: '近7周', value: 16 }, { time: '近6周', value: 26 }, { time: '近5周', value: 38 }, { time: '近4周', value: 84 }, { time: '近3周', value: 24 }, { time: '近2周', value: 90 }, { time: '近1周', value: 44 }]
            }];*/
            //getLines(LineDatas, "lines");

            // data:业务维度数据
            //var hw_barsDatas = [{ name: "目标销量", value: 600 }, { name: "销量达成", value: 600 }, { name: "目标销售额", value: 300 }, { name: "销售额达成", value: 200 }];
            //var sx_barsDatas = [{ name: "目标销量", value: 400 }, { name: "销量达成", value: 250 }, { name: "目标销售额", value: 200 }, { name: "销售额达成", value: 100 }];
            //var fx_barsDatas = [{ name: "目标销量", value: 350 }, { name: "销量达成", value: 200 }, { name: "目标销售额", value: 150 }, { name: "销售额达成", value: 90 }];
            //var dkh_barsDatas = [{ name: "目标销量", value: 700 }, { name: "销量达成", value: 550 }, { name: "目标销售额", value: 350 }, { name: "销售额达成", value: 200 }];
            //getBars(hw_barsDatas, '华为业务群', 'barsHW');
            //getBars(sx_barsDatas, '三星事业部', 'barsSX');
            //getBars(fx_barsDatas, '分销事业部', 'barsFX');
        }

        //销量达成率排名悬浮窗
        function suspBySalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "办事处全部销量达成率分公司内排名（包括所有事业部和项目）";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //销售额达成率排名悬浮窗
        function suspBySalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "办事处全部销售额达成率分公司内排名（包括所有事业部和项目）";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //事业部——销量达成率排名悬浮窗
        function suspByDeptSalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "办事处该事业部下销量达成率分公司内排名";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //事业部——销售额达成率排名悬浮窗
        function suspByDeptSalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "办事处该事业部下销售额达成率分公司内排名";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //项目——销量达成率排名悬浮窗
        function suspByProjectSalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "办事处该项目下销量达成率分公司内排名";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //项目——销售额达成率排名悬浮窗
        function suspByProjectSalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "办事处该项目下销售额达成率分公司内排名";
            var suspListName = [$("#planTypeSelect").val() == 'month' ? "月份" : "年份","办事处","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }


        // 配置：百度地图
        function getBDMap(mapName, datas, Id) {
						console.log(mapName);
            console.log(datas);
          	document.getElementById("map").setAttribute('option',JSON.stringify(datas));
            document.getElementById("map").setAttribute('optionName',mapName);
            var BDmap = new BMap.Map(Id, {
                enableMapClick: false
            }); // 创建Map实例

            BDmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            if(datas && datas.length>0) {
                BDmap.centerAndZoom(new BMap.Point(datas[0].value[0], datas[0].value[1]), 11);
            } else {
                BDmap.centerAndZoom(mapName, 10); // 初始化地图,用城市名设置地图中心点
            }

            if(datas && datas.length>0) {
                for (var i = 0; i < datas.length; i++) {
                    var point = new BMap.Point(datas[i].value[0], datas[i].value[1]);
                    var newIcon;
                    if(datas[i].type=='person'){
                    	newIcon = new BMap.Icon("/ptDataShow/images/mark-person.png", new BMap.Size(24, 24));
                    }else if(datas[i].type=='store'){
                    	newIcon = new BMap.Icon("/ptDataShow/images/mark-store.png", new BMap.Size(24, 24));
                    }else if(datas[i].type=='client'){
                        newIcon = new BMap.Icon("/ptDataShow/images/mark-client.png", new BMap.Size(24, 24));
                    }
                    var marker = new BMap.Marker(point, {
                        icon: newIcon
                    });
                    BDmap.addOverlay(marker);
                    var sContent = inforContent(datas, i);

                    var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象(注：为去掉“隐藏百度地图默认图片样式”,需要先初始化下，此代码务必保留！)

                    // 监听点击事件
                    addClickHandler(BDmap, sContent, marker, point);
                }
            }
        }

        // 百度地图信息窗内容
        function inforContent(datas, index) {
            var loginName = $("#loginName").text();
            var encoder = $("#encoder").text();
            var link = '/ptDataShow/salesPlan/salesOverview?type=07&salerName=' + encodeURIComponent(datas[index].name) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()
                + "&branchName=" + encodeURIComponent($("#branchName").text()) + "&projectName=" + encodeURIComponent($("#projectName").text()) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text())
                + "&officeName=" + encodeURIComponent($("#officeName").text()) + "&drill=" + encodeURIComponent($("#drill").text());
            // if($("#drill").text() == '0'){
            //     link = '#';
            // }
            var content = '<div class="popup-bd"><div class="box"><h6 class="title" title="' + datas[index].name + '"><a href="' +link + '" style="color:#fff">'  + datas[index].name + '</a></h6><div class="address clearfix"><h6><i class="icon-markads"></i>地址：</h6>' + '<p title="' + datas[index].address + '">' + datas[index].address + '</p></div>' + '<div class="content"><div class="one a"><span>销量：</span><b>' + toQfw(datas[index].salesNums) + '</b></div>' + '<div class="one b"><span>金额：</span><b>' + toQfw(datas[index].sumNums) + '</b>' + '</div></div></div></div>';
            return content;
        }

        function addClickHandler(BDmap, content, marker, point) {
            marker.addEventListener("click", function (e) {
                var infoWindow = new BMap.InfoWindow(content); // 创建信息窗口对象
                BDmap.openInfoWindow(infoWindow, point); // 开启信息窗口
                // 隐藏百度地图默认图片样式
                $("img[src='http://api0.map.bdimg.com/images/iw3.png']").hide();
                $("img[src='http://api0.map.bdimg.com/images/iw_close1d3.gif']").hide();
            });
        }

        // 配置：地图
        function getMap(datas, provinceName, Id) {
            var chart = echarts.init(document.getElementById(Id));
            window.onresize = chart.resize;

            var storeNum = getMaxValue(datas);
            var visual = numToShow(storeNum);

            $("#" + Id).parent().find(".u-visualmap").remove();
            $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>销量</h6></div>');

            // 省份地图初始化
            $.get('/js/lib/echarts/province/' + provinceName + '/' + provinceName + '.json', function (data) {
                echarts.registerMap('mapProvince', data);
                //chart.setOption(option);
              	document.getElementById("map").setAttribute('option',JSON.stringify(option))//zyt
            });

            // 海南省地图过小，需扩大地图倍数单独处理
            var zoomChange = 1;
            var centerChange = [];
            if (provinceName == '海南省') {
                zoomChange = 8;
                centerChange = [109.80, 19.224584];
            }

            var option = {
                title: {
                    text: provinceName + '销售达成数据展示图',
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
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
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
                    type: 'piecewise',
                    splitNumber: 4, // 实际为5色块，maxOpen会自动加载一个模块，故4色块；
                    pieces: [{ gt: visual[0] }, { gt: visual[0] * 0.25, lte: visual[0] }, { gt: visual[0] * 0.1, lte: visual[0] * 0.25 }, { gt: 1, lte: visual[0] * 0.1 }, { lt: 1 }],
                    maxOpen: true,
                    itemWidth: 25,
                    itemHeight: 13,
                    itemGap: 2,
                    left: '8%',
                    bottom: '6%',
                    inRange: {
                        color: ['#aae6fa', '#78dcfa', '#50c8fa', '#01aafa', '#116ed8']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: 'mapProvince',
                    type: 'map',
                    map: 'mapProvince',
                    zoom: zoomChange,
                    center: centerChange,
                    roam: false,
                    left: 'center',
                    top: '8%',
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
                        if (!params) {
                            return;
                        }
                        var tipTime = params[0].name;
                        var t1Name = "";
                        if (params[0] && params[0].seriesName) {
                            t1Name = params[0].seriesName;
                        }
                        var t1Value = "";
                        if (params[0] && params[0].value) {
                            t1Value = params[0].value;
                        }
                        var t2Name = "";
                        if (params[1] && params[1].seriesName) {
                            t2Name = params[1].seriesName;
                        }
                        var t2Value = "";
                        if (params[1] && params[1].value) {
                            t2Value = params[1].value;
                        }
                        var t3Name = "";
                        if(params[2] && params[2].seriesName){
                            t3Name = params[2].seriesName;
                        }
                        var t3Value = "";
                        if(params[2] && params[2].value){
                            t3Value = params[2].value;
                        }
                        var t4Name = "";
                        if(params[3] && params[3].seriesName){
                            t4Name = params[3].seriesName;
                        }
                        var t4Value = "";
                        if (params[3] && params[3].value) {
                            t4Value = params[3].value;
                        }
                        var content = tipTime + "<br/>" + "<span class='tipCr0'></span>" + t1Name + "：" + t1Value + "<br/>" + "<span class='tipCr1'></span>" + t2Name + "：" + t2Value + "<br/>" + "<span class='tipCr2'></span>" + t3Name + "：" + t3Value + "%<br/>" + "<span class='tipCr3'></span>" + t4Name + "：" + t4Value + "%<br/>";
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
                }, {
                    type: 'value',
                    name: '达成率',
                    position: 'right',
                    min: 0,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
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
                            show: true,
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
                            show: true,
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

                }]
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
            var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }
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
            if (isYear == '1') {  // 年计划不显示时间轴
            	var selYearStr = $("#selDay").val().substring(0, 4);
            	var curYear = year;
            	if (curYear != selYearStr) {
                    days = 0;
                }else {
                	days = getYearDayCount();
                }
            	day = Math.ceil(( new Date() - new Date(new Date().getFullYear().toString()))/(24*60*60*1000));
            } else { // 月计划如果不是当月也不显示时间轴
                var selYearMonthStr = $("#selDay").val().substring(0, 7);
                var curMonthStr = month;
                if (month < 10) {
                    curMonthStr = "0" + month;
                }
                var curYearMonthStr = year + "-" + curMonthStr;
                if (curYearMonthStr != selYearMonthStr) {
                    days = 0;
                }
            }
            var option = {
                color: ["#43caff", '#2c81ff', '#ed9429', '#ed694f', '#ed694f'],
                // title: {
                //     text: titleText + '销售达成',
                //     textStyle: {
                //         color: '#333',
                //         fontSize: 16,
                //         fontWeight: 'normal'
                //     },
                //     top: '8px',
                //     left: 'center'
                // },
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
                    top: 0,
                    right: 5,
                    data: legendDatas
                },
                grid: {
                    containLabel: true,
                    top: 15,
                    left: 12,
                    right: 48,
                    bottom: 0,
                    height: '110%'
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
                            formatter: function(params){
                                return toThousands(params.value);
                            }
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
                            formatter: function(params){
                                return toThousands(params.value);
                            }
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
                            formatter: function(params){
                                return toThousands(params.value);
                            }
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
                            formatter: function(params){
                                return toThousands(params.value);
                            }
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
                                    if(isYear == '1'){
                                    	if (days && days > 0) {
                                    		return (day / days * 100).toFixed(2) + "%";
                                    	}else {
                                    		return 0;
                                    	}
                                    }else {
                                    	if (days && days > 0) {
                                    		return (params.value / days * 100).toFixed(2) + "%";
                                    	}else {
                                    		return 0;
                                    	}
                                    }
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
            }else if("bizUnit2" == Id){
               document.getElementById("bizUnit2").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("bizUnit2").setAttribute('titleText',titleText);
            }else if("bizUnit3" == Id){
              document.getElementById("bizUnit3").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("bizUnit3").setAttribute('titleText',titleText)
            }else if("bizUnit4" == Id){
               document.getElementById("bizUnit4").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit4").setAttribute('titleText',titleText);
            }else if("bizUnit5" == Id){
               document.getElementById("bizUnit5").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("bizUnit5").setAttribute('titleText',titleText);
            }else if("bizUnit6" == Id){
              document.getElementById("bizUnit6").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("bizUnit6").setAttribute('titleText',titleText)
            }else if("bizUnit7" == Id){
              document.getElementById("bizUnit7").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("bizUnit7").setAttribute('titleText',titleText)
            }else if("bizUnit8" == Id){
               document.getElementById("bizUnit8").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit8").setAttribute('titleText',titleText);
            }else if("bizUnit9" == Id){
               document.getElementById("bizUnit9").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("bizUnit9").setAttribute('titleText',titleText);
            }else if("bizUnit10" == Id){
              document.getElementById("bizUnit10").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("bizUnit10").setAttribute('titleText',titleText)
            }
          
          	if("project-0" == Id){
              document.getElementById("project-0").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("project-0").setAttribute('titleText',titleText);
            }else if("project-1" == Id){
               document.getElementById("project-1").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-1").setAttribute('titleText',titleText);
            }else if("project-2" == Id){
               document.getElementById("project-2").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("project-2").setAttribute('titleText',titleText);
            }else if("project-3" == Id){
              document.getElementById("project-3").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("project-3").setAttribute('titleText',titleText)
            }else if("project-4" == Id){
               document.getElementById("project-4").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-4").setAttribute('titleText',titleText);
            }else if("project-5" == Id){
               document.getElementById("project-5").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-5").setAttribute('titleText',titleText);
            }else if("project-6" == Id){
              document.getElementById("project-6").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("project-6").setAttribute('titleText',titleText)
            }else if("project-7" == Id){
              document.getElementById("project-7").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("project-7").setAttribute('titleText',titleText)
            }else if("project-8" == Id){
               document.getElementById("project-8").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-8").setAttribute('titleText',titleText);
            }else if("project-9" == Id){
               document.getElementById("project-9").setAttribute('datas',JSON.stringify(datas));//zyt
              document.getElementById("project-9").setAttribute('titleText',titleText);
            }else if("project-10" == Id){
              document.getElementById("project-10").setAttribute('datas',JSON.stringify(datas));
              document.getElementById("project-10").setAttribute('titleText',titleText)
            }
          
//             chart.on('click', function(params) {
//                 var loginName = $("#loginName").text();
//                 var encoder = $("#encoder").text();

//                 var isYear = '0';
//                 if ($("#planTypeSelect").val() == 'month') {
//                     isYear = '0';
//                 } else if ($("#planTypeSelect").val() == 'year') {
//                     isYear = '1';
//                 }
//                 if(isYear!='1') {
//                     var link = "";
//                     if(Id.indexOf("bizUnit") != -1){
//                         link = '/ptDataShow/salesPlan/salesOverview?type=06&bizUnitName=' + encodeURIComponent(titleText) + "&branchName=" + encodeURIComponent($("#branchName").text())+ "&officeName=" + encodeURIComponent($("#officeName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()+ "&modelName=" + encodeURIComponent(modelName) + "&drill=bizUnit";
//                     }else if(Id.indexOf("project") != -1){
//                         link = '/ptDataShow/salesPlan/salesOverview?type=06&projectName=' + encodeURIComponent(titleText) + "&branchName=" + encodeURIComponent($("#branchName").text())+ "&officeName=" + encodeURIComponent($("#officeName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val()+ "&modelName=" + encodeURIComponent(modelName) + "&drill=oneProject";
//                     }
//                     window.location.href = link;
//                 }
//             });
            chart.on('click', function(params) {
            	if(Id.indexOf("bizUnit") != -1){
            		var link = getLinkNew("06","bizUnitName",titleText,"bizUnit");
                    window.location.href = link;
                }else if(Id.indexOf("project") != -1){
                	var link = getLinkNew("06","bizUnitName",titleText,"oneProject");
                    window.location.href = link;
                }
            });
        }

        /***/ })
    /******/ ]);
//# sourceMappingURL=bsOfficeView.map