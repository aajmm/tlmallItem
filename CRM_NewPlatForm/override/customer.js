debugger
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
         * 业务总览-分总、办事处
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
        //模块宽度拖拽
    	function bindResize(el,Lbox,Rbox,LRwrap) {
    	//鼠标的 X 和 Y 轴坐标
    	var x = 0;
    	$(el).mousedown(function (e) {
    	//按下元素后，计算当前鼠标与对象计算后的坐标
    	x = e.clientX - el.offsetWidth - Lbox.width();
    	el.setCapture ? (
    	el.setCapture(),
    	el.onmousemove = function (ev) {
    		mouseMove(ev || event);
    	},
    	el.onmouseup = mouseUp
    	) : (
    	$(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
    	);
    	e.preventDefault();
    	});
    	//移动事件
    	function mouseMove(e) {
    		if(e.clientX>290 && e.clientX<1280){
    			Lbox.width(e.clientX - x); 
    			Rbox.width(LRwrap.width()-e.clientX  + x - 15);
    		}
    		reloadW();
    		init();
    	}
    	//停止事件
    	function mouseUp() {
    	el.releaseCapture ? (
    	el.releaseCapture(),
    	el.onmousemove = el.onmouseup = null
    	) : (
    	$(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
    	);
    	}
    	}
    	
    	//table拖拽
		function tableDrag(tableId){
			var tTD;
			var table = document.getElementById(tableId);
			if(table){
				if(table.rows) {
					for (var i = 0; i < table.rows[0].cells.length; i++) {
						table.rows[0].cells[i].onmousedown = function() {
							tTD = this;
							if (event.offsetX > tTD.offsetWidth - 10) {
								tTD.mouseDown = true;
								tTD.oldX = event.x;
								tTD.oldWidth = tTD.offsetWidth;
							}
						};
						table.rows[0].cells[i].onmouseup = function() {
							if (tTD == undefined) tTD = this;
							tTD.mouseDown = false;
							tTD.style.cursor = 'default';
						};
						table.rows[0].cells[i].onmousemove = function() {
							if (event.offsetX > this.offsetWidth - 10)
								this.style.cursor = 'col-resize';
							else
								this.style.cursor = 'default';
							if (tTD == undefined) tTD = this;
							if (tTD.mouseDown != null && tTD.mouseDown == true) {
								tTD.style.cursor = 'default';
								if (tTD.oldWidth + (event.x - tTD.oldX) > 0)
									tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
								tTD.style.width = tTD.width;
								tTD.style.cursor = 'col-resize';
								table = tTD;
								while (table.tagName != 'TABLE') table = table.parentElement;
								for (var j = 0; j < table.rows.length; j++) {
									table.rows[j].cells[tTD.cellIndex].width = tTD.width;
								}
							}
						};
					}
				}
			}
		}

    	function reloadW(){
            // 为适配不同分辨率，动态计算高度
            var mapW = $(".spaceDimen .chart").width();
            var mapH = $(".spaceDimen .chart").height(mapW * 0.84);
            var barLineW = $(".timeDimen .l-chart").width();
            var barLineH = $(".timeDimen .l-chart,.timeDimen .r-chart").height(barLineW * 1.18);

            $(".m-body").height(parseInt($("body").height())-parseInt($(".m-body").css("top"))-20);
    	}
        $(function () {
        	reloadW();
            //tableSH("bsPersonnel-table", 4);
            //tableSH("salesReach-table", 4);
            //tableSH("HW-table", 4);
            //tableSH("SX-table", 4);
            //tableSH("FX-table", 4);
            //tableSH("typeSales-table", 4);

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
            $(".lefth").append('<div id="dragbar"></div>');
        	$("#dragbar").height($(".lefth").height());

	        bindResize(document.getElementById('dragbar'),$('.lefth'),$('.righth'),$('.m-boxs'));
            laydate({
                elem: '#selDay',
                isclear: false,
                // min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
                max: laydate.now(), //+1代表明天，+2代表后天，以此类推
                choose: function(datas){ //选择日期完毕的回调
                    //alert('得到：'+datas);
                    init();
                }
            });

            $("body").delegate("#laydate_today","click", function(){
                init();
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

/*        function tableSH(id, len) {
            var table_minHeight = parseInt($("#" + id).find("thead th").height()) + parseInt($("#" + id).find("tbody td").height()) * len;

            if ($("#" + id).find("tbody tr").length <= len) {
                $("#" + id).parent().height('auto');
                $("#" + id).parent().next(".btn-display").hide();
            } else {
                $("#" + id).parent().height(table_minHeight).css("overflow", "hidden");
                $("#" + id).parent().next(".btn-display").show().addClass("Up");
            }
        }*/



        function init() {

        	//导出明细数据
            //exportDetailDatas();
        	
            // 年计划或月计划
            var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }

            //面包屑导航
            breadcrumb("客户门店","cust");

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
            var custName = $("#custName").text();
            var storeName = $("#storeName").text();
            var modelName = $("#modelName").text();
            var drill = $("#drill").text();
            $.ajax({
                url: "/ptDataShow/salesPlan/salesOverviewData?isYear=" + isYear + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                 + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                 + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) + "&drill=" + drill
                 + "&custName=" + encodeURIComponent(custName)+ "&storeName=" + encodeURIComponent(storeName)
                 + "&modelName=" + encodeURIComponent(modelName),
                async: false,
                success: function (response) {
                    console.log(response);
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

                        if(response.rank){

                            // 销售人员排行
//                            $("#branchName").text(response.rank.branchName);
//                            $("#officeName").text(response.rank.value.officeName);
//                            $("#rankName").html(response.rank.value.branchName+"—"+response.rank.value.officeName+"—"+response.rank.value.name);

                            //数据中的达成率添加%
                            response = addPercentSigns(response);

                            //销量达成排名悬浮窗
//                            $("#rankQty").html(suspBySalesCountReach(response.rank));

                            //销售额达成排名悬浮窗
//                            $("#rankAmt").html(suspBySalesAmountReach(response.rank));

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
                                    var deptSalesCountReachRankA="";
                                    var deptSalesAmountReachRankA="";
                                    for(var i in response.ranks){
//                                        if(response.ranks[i].value.department == bizUnits[k].name){
//                                            deptSalesCountReachRankA = suspByDeptSalesCountReach(response.ranks[i]);
//                                            deptSalesAmountReachRankA = suspByDeptSalesAmountReach(response.ranks[i]);
//                                            break;
//                                        }
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
                                            link = '/ptDataShow/salesPlan/salesOverview?type=08&projectName='+ encodeURIComponent(projects[j].name) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text())
                                                + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text())
                                                + "&salerName=" + encodeURIComponent($("#salerName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneProject"
                                                + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text())
                                                + "&modelName=" + encodeURIComponent($("#modelName").text());
                                        }
                                        tableHtml = tableHtml + '<tr><td title="' + projects[j].name +'"><a href="'+ link +'" title="' + projects[j].name + '">' + projects[j].name + '</a></td><td>' + toThousands(projects[j].targetQty) + '</td><td>' + toThousands(projects[j].reachQty) + '</td><td>' + projects[j].reachQtyRate + '%</td><td>'
                                            + toThousands(projects[j].targetAmt) + '</td><td>' + toThousands(projects[j].reachAmt) + '</td><td>' + projects[j].reachAmtRate + '%</td></tr>';
                                    }
                                    tableHtml = tableHtml + '</tbody></table></div>';

                                    // 整体区域HTML
                                    var html = '<div class="m-box bizUnitProject">' + salesRank + barMap + tableHtml + '<a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a></div>';
                                    $("#projectRankPlaceHolder").before(html);
                        	        //产品销售达成
                        	        if(isYear=="1" && $("#projectRankPlaceHolder tbody tr").length == 0){
                        	        	$("#projectRankPlaceHolder").hide();
                        	        }else{
                        	        	$("#projectRankPlaceHolder").show();
                        	        }
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
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&projectName='+ encodeURIComponent($("#projectName").text()) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text())
                                + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text())
                                + "&salerName=" + encodeURIComponent($("#salerName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneModel"
                                + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text())
                                + "&modelName=" + encodeURIComponent(model.name);
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
                                var html = '<tr><td><a href="#" title="' + client.name + '">' + client.name + '</a></td><td>' + toThousands(client.targetQty) + '</td><td>' + toThousands(client.reachQty) + '</td><td>' + client.reachQtyRate + '%</td><td>'
                                    + toThousands(client.targetAmt) + '</td><td>' + toThousands(client.reachAmt) + '</td><td>' + client.reachAmtRate + '%</td></tr>';
                                $("#clientTable").append(html);
                            }
                        }
                        tableSH("client-table", 5);

                        // 门店列表
                        if(response.storeName) {
                            for(var i =0; i< response.storeName.length ;i++) {
                                var store = response.storeName[i];
                                var html = '<tr><td><a href="#" title="' + store.name + '">' + store.name + '</a></td><td>' + toThousands(store.targetQty) + '</td><td>' + toThousands(store.reachQty) + '</td><td>' + store.reachQtyRate + '%</td><td>'
                                    + toThousands(store.targetAmt) + '</td><td>' + toThousands(store.reachAmt) + '</td><td>' + store.reachAmtRate + '%</td></tr>';
                                $("#storeTable").append(html);
                            }
                        }
                        tableSH("store-table", 5);


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
                        //导出
                        var monthReachQtys = response.monthReachQtys;
                    	var monthReachAmts = response.monthReachAmts;
                    	var monthReachQtyRates = response.monthReachQtyRates;
                    	var monthReachAmtRates = response.monthReachAmtRates;
                        $("#barLines_export").unbind("click").click(function(){
                        	var columns = [{"display":"月别","name":"month"},
                        	               {"display":"销量达成(万)","name":"qty"},
                        	               {"display":"销售额达成(千万)","name":"amt"},
                        	               {"display":"销量达成率","name":"qtyRate"},
                        	               {"display":"销售额达成率","name":"amtRate"}];
            				var exportList = [];
            				for(var i=0;i<monthReachQtys.length;i++){
            					var tObj = {};
            					tObj.month = "\t"+monthReachQtys[i].time+"\t";
            					tObj.qty = monthReachQtys[i].value;
            					tObj.amt = monthReachAmts[i].value;
            					tObj.qtyRate = monthReachQtyRates[i].value+"%";
            					tObj.amtRate = monthReachAmtRates[i].value+"%";
            					exportList.push(tObj);
            				}
            				downExcel(columns,exportList,"销售达成月度趋势");
                        })
                        
                        // 周别
                        var LineDatas = [{
                            name: '销量达成(万)',
                            data: response.weekQtys
                        }, {
                            name: '销售额达成(千万)',
                            data: response.weekAmts
                        }];
                        getLines(LineDatas, "lines");
                        //导出
                        var weekQtys = response.weekQtys;
                    	var weekAmts = response.weekAmts;
                        $("#lines_export").unbind("click").click(function(){
                        	var columns = [{"display":"周期","name":"week"},{"display":"销量达成(万)","name":"qty"},{"display":"销售额达成(千万)","name":"amt"}];
            				var exportList = [];
            				for(var i=0;i<weekQtys.length;i++){
            					var tObj = {};
            					tObj.week = weekQtys[i].time;
            					tObj.qty = weekQtys[i].value;
            					tObj.amt = weekAmts[i].value;;
            					exportList.push(tObj);
            				}
            				downExcel(columns,exportList,"销售达成周别趋势");
                        })

                    }
                    tableDrag("bizUnit0");
                    tableDrag("bizUnit1");
                    tableDrag("bizUnit2");
                    tableDrag("bizUnit3");
                    tableDrag("bizUnit4");
                    tableDrag("client-table");
        	        tableDrag("store-table");
        	        tableDrag("model-table");
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
            }];
            getBarLines(barLineDatas, "barLines");*/

            // data:销售达成月度趋势图
/*            var LineDatas = [{
                name: '销量(万)',
                data: [{ time: '近8周', value: 46 }, { time: '近7周', value: 86 }, { time: '近6周', value: 78 }, { time: '近5周', value: 88 }, { time: '近4周', value: 84 }, { time: '近3周', value: 52 }, { time: '近2周', value: 12 }, { time: '近1周', value: 44 }]
            }, {
                name: '销售额(千万)',
                data: [{ time: '近8周', value: 12 }, { time: '近7周', value: 16 }, { time: '近6周', value: 26 }, { time: '近5周', value: 38 }, { time: '近4周', value: 84 }, { time: '近3周', value: 24 }, { time: '近2周', value: 90 }, { time: '近1周', value: 44 }]
            }];
            getLines(LineDatas, "lines");*/

            // data:业务维度数据
/*            var hw_barsDatas = [{ name: "目标销量", value: 600 }, { name: "销量达成", value: 600 }, { name: "目标销售额", value: 300 }, { name: "销售额达成", value: 200 }];
            var sx_barsDatas = [{ name: "目标销量", value: 400 }, { name: "销量达成", value: 250 }, { name: "目标销售额", value: 200 }, { name: "销售额达成", value: 100 }];
            var fx_barsDatas = [{ name: "目标销量", value: 350 }, { name: "销量达成", value: 200 }, { name: "目标销售额", value: 150 }, { name: "销售额达成", value: 90 }];
            var dkh_barsDatas = [{ name: "目标销量", value: 700 }, { name: "销量达成", value: 550 }, { name: "目标销售额", value: 350 }, { name: "销售额达成", value: 200 }];
            getBars(hw_barsDatas, '华为业务群', 'barsHW');
            getBars(sx_barsDatas, '三星事业部', 'barsSX');
            getBars(fx_barsDatas, '分销事业部', 'barsFX');*/
        }
      window.timeInit = function() {

        	//导出明细数据
          //  exportDetailDatas();
        	
            // 年计划或月计划
            var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }

            //面包屑导航
            breadcrumb("客户门店","cust");

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
            var custName = $("#custName").text();
            var storeName = $("#storeName").text();
            var modelName = $("#modelName").text();
            var drill = $("#drill").text();
            $.ajax({
                url: "/ptDataShow/salesPlan/salesOverviewData?isYear=" + isYear + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                 + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                 + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) + "&drill=" + drill
                 + "&custName=" + encodeURIComponent(custName)+ "&storeName=" + encodeURIComponent(storeName)
                 + "&modelName=" + encodeURIComponent(modelName),
                async: false,
                success: function (response) {
                    console.log(response);
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

                        if(response.rank){

                            // 销售人员排行
//                            $("#branchName").text(response.rank.branchName);
//                            $("#officeName").text(response.rank.value.officeName);
//                            $("#rankName").html(response.rank.value.branchName+"—"+response.rank.value.officeName+"—"+response.rank.value.name);

                            //数据中的达成率添加%
                            response = addPercentSigns(response);

                            //销量达成排名悬浮窗
//                            $("#rankQty").html(suspBySalesCountReach(response.rank));

                            //销售额达成排名悬浮窗
//                            $("#rankAmt").html(suspBySalesAmountReach(response.rank));

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
                                    var deptSalesCountReachRankA="";
                                    var deptSalesAmountReachRankA="";
                                    for(var i in response.ranks){
//                                        if(response.ranks[i].value.department == bizUnits[k].name){
//                                            deptSalesCountReachRankA = suspByDeptSalesCountReach(response.ranks[i]);
//                                            deptSalesAmountReachRankA = suspByDeptSalesAmountReach(response.ranks[i]);
//                                            break;
//                                        }
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
                                            link = '/ptDataShow/salesPlan/salesOverview?type=08&projectName='+ encodeURIComponent(projects[j].name) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text())
                                                + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text())
                                                + "&salerName=" + encodeURIComponent($("#salerName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneProject"
                                                + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text())
                                                + "&modelName=" + encodeURIComponent($("#modelName").text());
                                        }
                                        tableHtml = tableHtml + '<tr><td title="' + projects[j].name +'"><a href="'+ link +'" title="' + projects[j].name + '">' + projects[j].name + '</a></td><td>' + toThousands(projects[j].targetQty) + '</td><td>' + toThousands(projects[j].reachQty) + '</td><td>' + projects[j].reachQtyRate + '%</td><td>'
                                            + toThousands(projects[j].targetAmt) + '</td><td>' + toThousands(projects[j].reachAmt) + '</td><td>' + projects[j].reachAmtRate + '%</td></tr>';
                                    }
                                    tableHtml = tableHtml + '</tbody></table></div>';

                                    // 整体区域HTML
                                    var html = '<div class="m-box bizUnitProject">' + salesRank + barMap + tableHtml + '<a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a></div>';
                                    $("#projectRankPlaceHolder").before(html);
                        	        //产品销售达成
                        	        if(isYear=="1" && $("#projectRankPlaceHolder tbody tr").length == 0){
                        	        	$("#projectRankPlaceHolder").hide();
                        	        }else{
                        	        	$("#projectRankPlaceHolder").show();
                        	        }
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
                                var link = '/ptDataShow/salesPlan/salesOverview?type=08&projectName='+ encodeURIComponent($("#projectName").text()) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").text())
                                + '&branchName=' + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent($("#officeName").text())
                                + "&salerName=" + encodeURIComponent($("#salerName").text()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneModel"
                                + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text())
                                + "&modelName=" + encodeURIComponent(model.name);
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
                                var html = '<tr><td><a href="#" title="' + client.name + '">' + client.name + '</a></td><td>' + toThousands(client.targetQty) + '</td><td>' + toThousands(client.reachQty) + '</td><td>' + client.reachQtyRate + '%</td><td>'
                                    + toThousands(client.targetAmt) + '</td><td>' + toThousands(client.reachAmt) + '</td><td>' + client.reachAmtRate + '%</td></tr>';
                                $("#clientTable").append(html);
                            }
                        }
                        tableSH("client-table", 5);

                        // 门店列表
                        if(response.storeName) {
                            for(var i =0; i< response.storeName.length ;i++) {
                                var store = response.storeName[i];
                                var html = '<tr><td><a href="#" title="' + store.name + '">' + store.name + '</a></td><td>' + toThousands(store.targetQty) + '</td><td>' + toThousands(store.reachQty) + '</td><td>' + store.reachQtyRate + '%</td><td>'
                                    + toThousands(store.targetAmt) + '</td><td>' + toThousands(store.reachAmt) + '</td><td>' + store.reachAmtRate + '%</td></tr>';
                                $("#storeTable").append(html);
                            }
                        }
                        tableSH("store-table", 5);


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
                        //导出
                        var monthReachQtys = response.monthReachQtys;
                    	var monthReachAmts = response.monthReachAmts;
                    	var monthReachQtyRates = response.monthReachQtyRates;
                    	var monthReachAmtRates = response.monthReachAmtRates;
                        $("#barLines_export").unbind("click").click(function(){
                        	var columns = [{"display":"月别","name":"month"},
                        	               {"display":"销量达成(万)","name":"qty"},
                        	               {"display":"销售额达成(千万)","name":"amt"},
                        	               {"display":"销量达成率","name":"qtyRate"},
                        	               {"display":"销售额达成率","name":"amtRate"}];
            				var exportList = [];
            				for(var i=0;i<monthReachQtys.length;i++){
            					var tObj = {};
            					tObj.month = "\t"+monthReachQtys[i].time+"\t";
            					tObj.qty = monthReachQtys[i].value;
            					tObj.amt = monthReachAmts[i].value;
            					tObj.qtyRate = monthReachQtyRates[i].value+"%";
            					tObj.amtRate = monthReachAmtRates[i].value+"%";
            					exportList.push(tObj);
            				}
            				downExcel(columns,exportList,"销售达成月度趋势");
                        })
                        
                        // 周别
                        var LineDatas = [{
                            name: '销量达成(万)',
                            data: response.weekQtys
                        }, {
                            name: '销售额达成(千万)',
                            data: response.weekAmts
                        }];
                        getLines(LineDatas, "lines");
                        //导出
                        var weekQtys = response.weekQtys;
                    	var weekAmts = response.weekAmts;
                        $("#lines_export").unbind("click").click(function(){
                        	var columns = [{"display":"周期","name":"week"},{"display":"销量达成(万)","name":"qty"},{"display":"销售额达成(千万)","name":"amt"}];
            				var exportList = [];
            				for(var i=0;i<weekQtys.length;i++){
            					var tObj = {};
            					tObj.week = weekQtys[i].time;
            					tObj.qty = weekQtys[i].value;
            					tObj.amt = weekAmts[i].value;;
            					exportList.push(tObj);
            				}
            				downExcel(columns,exportList,"销售达成周别趋势");
                        })

                    }
                    tableDrag("bizUnit0");
                    tableDrag("bizUnit1");
                    tableDrag("bizUnit2");
                    tableDrag("bizUnit3");
                    tableDrag("bizUnit4");
                    tableDrag("client-table");
        	        tableDrag("store-table");
        	        tableDrag("model-table");
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
            }];
            getBarLines(barLineDatas, "barLines");*/

            // data:销售达成月度趋势图
/*            var LineDatas = [{
                name: '销量(万)',
                data: [{ time: '近8周', value: 46 }, { time: '近7周', value: 86 }, { time: '近6周', value: 78 }, { time: '近5周', value: 88 }, { time: '近4周', value: 84 }, { time: '近3周', value: 52 }, { time: '近2周', value: 12 }, { time: '近1周', value: 44 }]
            }, {
                name: '销售额(千万)',
                data: [{ time: '近8周', value: 12 }, { time: '近7周', value: 16 }, { time: '近6周', value: 26 }, { time: '近5周', value: 38 }, { time: '近4周', value: 84 }, { time: '近3周', value: 24 }, { time: '近2周', value: 90 }, { time: '近1周', value: 44 }]
            }];
            getLines(LineDatas, "lines");*/

            // data:业务维度数据
/*            var hw_barsDatas = [{ name: "目标销量", value: 600 }, { name: "销量达成", value: 600 }, { name: "目标销售额", value: 300 }, { name: "销售额达成", value: 200 }];
            var sx_barsDatas = [{ name: "目标销量", value: 400 }, { name: "销量达成", value: 250 }, { name: "目标销售额", value: 200 }, { name: "销售额达成", value: 100 }];
            var fx_barsDatas = [{ name: "目标销量", value: 350 }, { name: "销量达成", value: 200 }, { name: "目标销售额", value: 150 }, { name: "销售额达成", value: 90 }];
            var dkh_barsDatas = [{ name: "目标销量", value: 700 }, { name: "销量达成", value: 550 }, { name: "目标销售额", value: 350 }, { name: "销售额达成", value: 200 }];
            getBars(hw_barsDatas, '华为业务群', 'barsHW');
            getBars(sx_barsDatas, '三星事业部', 'barsSX');
            getBars(fx_barsDatas, '分销事业部', 'barsFX');*/
        }

        //销量达成率排名悬浮窗
        function suspBySalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "销售人员全部销量达成率分公司内排名（包括所有事业部和项目）";
            var suspListName = ["月份","办事处","销售人员","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //销售额达成率排名悬浮窗
        function suspBySalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "销售人员全部销售额达成率分公司内排名（包括所有事业部和项目）";
            var suspListName = ["月份","办事处","销售人员","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //事业部——销量达成率排名悬浮窗
        function suspByDeptSalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "销售人员该事业部下销量达成率分公司内排名";
            var suspListName = ["月份","办事处","销售人员","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //事业部——销售额达成率排名悬浮窗
        function suspByDeptSalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "销售人员该事业部下销售额达成率分公司内排名";
            var suspListName = ["月份","办事处","销售人员","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //项目——销量达成率排名悬浮窗
        function suspByProjectSalesCountReach(rank) {
            var suspTitle = "销量达成排名";
            var suspDesc = "销售人员该项目下销量达成率分公司内排名";
            var suspListName = ["月份","办事处","销售人员","销量达成率","排名"];
            var allData = rank.qtyRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachQtyRate","qtyRank"];
            var showValue = '第' + rank.value.qtyRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }

        //项目——销售额达成率排名悬浮窗
        function suspByProjectSalesAmountReach(rank) {
            var suspTitle = "销售额达成排名";
            var suspDesc = "销售人员该项目下销售额达成率分公司内排名";
            var suspListName = ["月份","办事处","销售人员","销售额达成率","排名"];
            var allData = rank.amtRankDatas;
            var row = rank.value;
            var scriptByRank = null;
            var suspListCode = ["month","officeName","name","reachAmtRate","amtRank"];
            var showValue = '第' + rank.value.amtRank + '位';
            var susp = getSuspAhtml(suspTitle, suspDesc, suspListName, allData, row, scriptByRank, suspListCode, showValue);

            return susp;
        }


        // 配置：百度地图
        function getBDMap(mapName, datas, Id) {

						document.getElementById("map").setAttribute('option',JSON.stringify(datas));
            document.getElementById("map").setAttribute('optionName',mapName);
            var BDmap = new BMap.Map(Id, {
                enableMapClick: false
            }); // 创建Map实例


            BDmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            if(datas && datas.length>0){
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
            var content = '<div class="popup-bd"><div class="box"><h6 class="title" title="' + datas[index].name + '">' + datas[index].name + '</h6><div class="address clearfix"><h6><i class="icon-markads"></i>地址：</h6>' + '<p title="' + datas[index].address + '">' + datas[index].address + '</p></div>' + '<div class="content"><div class="one a"><span>销量：</span><b>' + toQfw(datas[index].salesNums) + '</b></div>' + '<div class="one b"><span>金额：</span><b>' + toQfw(datas[index].sumNums) + '</b>' + '</div></div></div></div>';

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
          document.getElementById("barLines").setAttribute('option',JSON.stringify(option))
        	chart.resize({
        		width:$(".timeDimen .l-chart").width(),
        		height:$(".timeDimen .l-chart").height()
        	});
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

            // chart.setOption(option);
          document.getElementById("lines").setAttribute('option',JSON.stringify(option))
        	chart.resize({
        		width:$(".timeDimen .r-chart").width(),
        		height:$(".timeDimen .r-chart").height()
        	});
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
                days = 0;
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
                //     text: titleText + "销售达成",
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
            // chart.setOption(option);
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
               document.getElementById("bizUnit6").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit6").setAttribute('titleText',titleText);      
            }else if("bizUnit7" == Id){
               document.getElementById("bizUnit7").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit7").setAttribute('titleText',titleText);
            }else if("bizUnit8" == Id){
               document.getElementById("bizUnit8").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit8").setAttribute('titleText',titleText);
            }else if("bizUnit9" == Id){
               document.getElementById("bizUnit9").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit9").setAttribute('titleText',titleText);      
            }else if("bizUnit10" == Id){
               document.getElementById("bizUnit10").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit10").setAttribute('titleText',titleText);
            }else if("bizUnit11" == Id){
               document.getElementById("bizUnit11").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit11").setAttribute('titleText',titleText);
            }else if("bizUnit12" == Id){
               document.getElementById("bizUnit12").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit12").setAttribute('titleText',titleText);      
            }else if("bizUnit13" == Id){
               document.getElementById("bizUnit13").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit13").setAttribute('titleText',titleText);
            }else if("bizUnit14" == Id){
               document.getElementById("bizUnit14").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit14").setAttribute('titleText',titleText);
            }else if("bizUnit15" == Id){
               document.getElementById("bizUnit15").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit15").setAttribute('titleText',titleText);      
            }else if("bizUnit16" == Id){
               document.getElementById("bizUnit16").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit16").setAttribute('titleText',titleText);
            }else if("bizUnit17" == Id){
               document.getElementById("bizUnit17").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit17").setAttribute('titleText',titleText);
            }else if("bizUnit18" == Id){
               document.getElementById("bizUnit18").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit18").setAttribute('titleText',titleText);      
            }else if("bizUnit19" == Id){
               document.getElementById("bizUnit19").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit19").setAttribute('titleText',titleText);
            }else if("bizUnit20" == Id){
               document.getElementById("bizUnit20").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("bizUnit20").setAttribute('titleText',titleText);      
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
               document.getElementById("project-6").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-6").setAttribute('titleText',titleText);      
            }else if("project-7" == Id){
               document.getElementById("project-7").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-7").setAttribute('titleText',titleText);
            }else if("project-8" == Id){
               document.getElementById("project-8").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-8").setAttribute('titleText',titleText);
            }else if("project-9" == Id){
               document.getElementById("project-9").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-9").setAttribute('titleText',titleText);      
            }else if("project-10" == Id){
               document.getElementById("project-10").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-10").setAttribute('titleText',titleText);
            }else if("project-11" == Id){
               document.getElementById("project-11").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-11").setAttribute('titleText',titleText);
            }else if("project-12" == Id){
               document.getElementById("project-12").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-12").setAttribute('titleText',titleText);      
            }else if("project-13" == Id){
               document.getElementById("project-13").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-13").setAttribute('titleText',titleText);
            }else if("project-14" == Id){
               document.getElementById("project-14").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-14").setAttribute('titleText',titleText);
            }else if("project-15" == Id){
               document.getElementById("project-15").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-15").setAttribute('titleText',titleText);      
            }else if("project-16" == Id){
               document.getElementById("project-16").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-16").setAttribute('titleText',titleText);
            }else if("project-17" == Id){
               document.getElementById("project-17").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-17").setAttribute('titleText',titleText);
            }else if("project-18" == Id){
               document.getElementById("project-18").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-18").setAttribute('titleText',titleText);      
            }else if("project-19" == Id){
               document.getElementById("project-19").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-19").setAttribute('titleText',titleText);
            }else if("project-20" == Id){
               document.getElementById("project-20").setAttribute('datas',JSON.stringify(datas));//zyt
               document.getElementById("project-20").setAttribute('titleText',titleText);      
            }

            chart.on('click', function(params) {
                var loginName = $("#loginName").text();
                var encoder = $("#encoder").text();

                var isYear = '0';
                if ($("#planTypeSelect").val() == 'month') {
                    isYear = '0';
                } else if ($("#planTypeSelect").val() == 'year') {
                    isYear = '1';
                }
                if(isYear!='1') {
                    var link = "";
                    if(Id.indexOf("bizUnit") != -1){
                        link = '/ptDataShow/salesPlan/salesOverview?type=08&bizUnitName=' + encodeURIComponent(titleText) + "&branchName=" + encodeURIComponent($("#branchName").text())
                            + "&officeName=" + encodeURIComponent($("#officeName").text())
                            + "&modelName=" + encodeURIComponent($("#modelName").text())
                            + "&salerName=" + encodeURIComponent($("#salerName").text())
                            + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=bizUnit"
                            + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text());;
                    }else if(Id.indexOf("project") != -1){
                        link = '/ptDataShow/salesPlan/salesOverview?type=08&projectName=' + encodeURIComponent(titleText) + "&branchName=" + encodeURIComponent($("#branchName").text())
                            + "&officeName=" + encodeURIComponent($("#officeName").text()) 
                            + "&modelName=" + encodeURIComponent($("#modelName").text()) 
                            + "&salerName=" + encodeURIComponent($("#salerName").text())
                            + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + "&drill=oneProject"
                            + "&custName=" + encodeURIComponent($("#custName").text()) + "&storeName=" + encodeURIComponent($("#storeName").text());;
                    }
                    window.location.href = link;
                }
            });
        	chart.resize({
        		width:$(".businessDimen .chart-bars").width(),
        		height:$(".businessDimen .chart-bars").height()
        	});
        }

        /***/ })
    /******/ ]);
//# sourceMappingURL=bStaffView.map