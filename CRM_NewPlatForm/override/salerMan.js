/*
干掉原网页的.wrapper(body下包裹整个显示内容的div);
然后创建一个自定义DOM结构，添加到body上；
分别需要添加的DOM id : 
销量与销售额：
todayQty\todayAmt\monthQty\monthAmt\yearQty\yearAmt\
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
        ".headerSum{display: flex; width: 30%; margin: 0 auto;padding: 10px}"+
        ".fakeWrapper:first-child .headerSum i{display: block;height: 20px;width: 20px;background-size: 19px;background-repeat: no-repeat;padding-right: 5px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAABHlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu0AAACFQYDnAAAAYnRSTlMAAhw+V2p3fXx2aFU7GgEPRHOAcEEMCk17RwgtJgNMf0YFW1RaUkIkenEGXQ5eeXIwaXgiMhE9G04XUGAzVmNnDWEELEMdGUUebikrJTcYPy80fnQUZTxiEgsJSRA6LihIa5XHcxwAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6ElEQVQ4y42VeVfaQBTFHyoJVAzkuoBYmgarBpWmQaG41K1utBX3LXb9/l+ik5AZkpiJ3r/mnPmdN3l33twQhZUZGR3LKmou/2a8MKGRTMWSjpAmp6YTsZmyipgqs9Xn3FweCdLfxrDaOyTLeB/5VLMOqeZroXofkKKFYc0yUrUo+kjnYCwFviT2C0vxZbBlY9kHJQ2vmP5uQxy+qkpObJoC/OgZX5J+20qGgygQabaMUz+JinCIRmIdilVrjbR1MwDRpk6Ea3zu8tUG1TaxZQbgNn0JcztssDp+0d09qjZhYz/wrkvZ8GUdEOv0aw6oL1Mxi/E1sbVPQ7eNjkYT9qFGR/lyho51nGinYrNHwkXrG9H3CpuWA5oh+mHhjGgI6gK0+6SdG9bFFnYYd3kFFKNgcPT1NJnzUDe8kevdlDybImCPN+PQ3i3zjjl8B1whexcD77k9zrENhYNqszoXA7vc8JZldEoc7NcoDm6LK2RNC3AwzBHwgQ9Fq09poCPGbLCSggUxuOmgP7iDpzD56LqbqDy020/AT9f9BZy6Ln92i2mPKzx8g8dFv1/g+HN9MQAOh5FST+NCkfLqkGI1ZafHYs8zTkni9D+viubc34Ro9sL+JBL2DUnY+7+Po9Gxf4qqKs6z38d/wClxQWUiY5EAAAAASUVORK5CYII=);}"+   
        ".fakeWrapper:first-child .headerSum span{font-size: 18px;font-weight:500;color: #000000}"+
         
        ".header{display: flex;justify-content: space-around;align-items: center;padding: 10px 0px 20px 0px}" +
        ".fakeWrapper .header >span:first-child{font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #4796ed}" +
        ".fakeWrapper .header >span:nth-child(2){font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #e7350d}" +
         ".fakeWrapper .header >span:last-child{font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #ffbe00}" + 
        ".content > div{display: flex; justify-content: flex-start; align-items: center; padding-bottom: 20px}" +
        ".content-item{display: flex; flex-direction: column; align-items: center; width: 33%}" +
  
        ".fakeWrapper:last-child .content-item:first-child h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#4796ed;}" +
        ".fakeWrapper:last-child .content-item:nth-child(2) h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#e7350d;}" +
        ".fakeWrapper:last-child .content-item:last-child h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#33333;}" +  
        ".content-item span{font-size: 10px; color: #999; display: block; text-align: center}" +
        "#cardIframe1{-webkit-border-radius:none;border-radius:none;-webkit-box-shadow:none;box-shadow:none;}";
      var cssText = document.createTextNode(cssString);
      style.appendChild(cssText);
      document.head.appendChild(style);
      //创建销量和销售额内容块
      var fakeWrapper_sales = document.createElement('div');
      fakeWrapper_sales.className = 'fakeWrapper';
      wrapper.appendChild(fakeWrapper_sales);
      //创建"销量汇总"部分DOM
      var headerSum = document.createElement('div');
      headerSum.className = 'headerSum'
      var headerSum_i = document.createElement('i');
      var headerSum_span = document.createElement('span');
      var headerSum_text = document.createTextNode('销量汇总');
      headerSum_span.appendChild(headerSum_text);
      headerSum.appendChild(headerSum_i);
      headerSum.appendChild(headerSum_span);
      fakeWrapper_sales.appendChild(headerSum);
      //创建标题部分DOM
      var header = document.createElement('div');
      header.className = 'header';
      var header_span = document.createElement('span');
      var header_span1 = document.createElement('span');
      var header_span2 = document.createElement('span');
      var header_text = document.createTextNode('今日销量');
      var header_text1 = document.createTextNode('本周销量');
      var header_text2 = document.createTextNode('本月销量');
      //将标题文本挂到span中
      header_span.appendChild(header_text);
      header_span1.appendChild(header_text1);
      header_span2.appendChild(header_text2);
      header.appendChild(header_span);
      header.appendChild(header_span1);
      header.appendChild(header_span2);
      //把标题部分DOM挂载到fakeWrapper_sales
      fakeWrapper_sales.appendChild(header);
      //创建内容部分
      var content = document.createElement('div');
      content.className = 'content';
      //分别创建两个div，挂到content上，数据呈两行展示
      var content_row_0 = document.createElement('div');
      content.appendChild(content_row_0);
      //创建3个div，3个一组挂在content_row_0上
      //本日销量
      var div0 = document.createElement('div');
      div0.className = 'content-item';
      var h20 = document.createElement('h2');
      h20.id = 'dayQty';
      var span0 = document.createElement('span');
      var span_text = document.createTextNode('销量(台)');
      span0.appendChild(span_text);
      div0.appendChild(h20);
      div0.appendChild(span0);
      //本周销量
      var div1 = document.createElement('div');
      div1.className = 'content-item';
      var h21 = document.createElement('h2');
      h21.id = 'weekQty';
      var span1 = document.createElement('span');
      var span_text = document.createTextNode('销量(台)');
      span1.appendChild(span_text);
      div1.appendChild(h21);
      div1.appendChild(span1);
      //本月销量
      var div2 = document.createElement('div');
      div2.className = 'content-item';
      var h22 = document.createElement('h2');
      h22.id = 'monthQty';
      var span2 = document.createElement('span');
      var span_text = document.createTextNode('销量(台)');
      span2.appendChild(span_text);
      div2.appendChild(h22);
      div2.appendChild(span2);
      content_row_0.appendChild(div0);
      content_row_0.appendChild(div1);
      content_row_0.appendChild(div2);
      
      //分别创建两个div，挂到content上，数据呈两行展示
      var content_row_1 = document.createElement('div');
      content.appendChild(content_row_1);
      //创建3个div，3个一组挂在content_row_1上
      //今日销售额
      var divAmt0 = document.createElement('div');
      divAmt0.className = 'content-item';
      var h2Amt0 = document.createElement('h2');
      h2Amt0.id = 'dayAmt';
      var spanAmt0 = document.createElement('span');
      var span_text = document.createTextNode('销售额(万元)');
      spanAmt0.appendChild(span_text);
      divAmt0.appendChild(h2Amt0);
      divAmt0.appendChild(spanAmt0);
      //本周销售额
      var divAmt1 = document.createElement('div');
      divAmt1.className = 'content-item';
      var h2Amt1 = document.createElement('h2');
      h2Amt1.id = 'weekAmt';
      var spanAmt1 = document.createElement('span');
      var span_text = document.createTextNode('销售额(万元)');
      spanAmt1.appendChild(span_text);
      divAmt1.appendChild(h2Amt1);
      divAmt1.appendChild(spanAmt1);
      //本月销售额
      var divAmt2 = document.createElement('div');
      divAmt2.className = 'content-item';
      var h2Amt2 = document.createElement('h2');
      h2Amt2.id = 'monthAmt';
      var spanAmt2 = document.createElement('span');
      var span_text = document.createTextNode('销售额(万元)');
      spanAmt2.appendChild(span_text);
      divAmt2.appendChild(h2Amt2);
      divAmt2.appendChild(spanAmt2);
      content_row_1.appendChild(divAmt0);
      content_row_1.appendChild(divAmt1);
      content_row_1.appendChild(divAmt2);
      
      //把内容部分DOM挂载到fakeWrapper_sales
      fakeWrapper_sales.appendChild(content);
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
         * 销售总览
         */
        // table的展开和收起点击事件
        var tr_minH = 7;
        window.displayTable = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 7.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("收起");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("展开");
            }
        };
        
        window.displayTable2 = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 5.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("收起");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("展开");
            }
        };

        function tableSH(id, len) {
            var table_minHeight = parseInt($("#" + id).find("thead th").height()) + parseInt($("#" + id).find("tbody td").height()) * len;

            if ($("#" + id).find("tbody tr").length <= len) {
//				console.log("tableSH--1");
                $("#"+id).parent().parent().find(".content").height('auto');
                $("#"+id).parent().parent().find(".btn-display").hide();
            } else {
//				console.log("tableSH--2");
                $("#" + id).parent().height(table_minHeight).css("overflow", "hidden");
                $("#" + id).parent().next(".btn-display").show().addClass("Up");
            }
        }

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

        $(function () {

            // 为适配不同分辨率，动态计算高度
            var mapW = $(".spaceDimen .chart").width();
            var mapH = $(".spaceDimen .chart").height(mapW * 0.84);
            var barLineW = $(".timeDimen .trend").width();
            var barLineH = $(".timeDimen .trend").height(barLineW * 0.5);

            //右边与左边对齐，超出部分滚动条
            var leftH = $(".lefth").height();
            var rightHu = $(".businessDimen .u-title").height();
            var rightH1 = $('.businessDimen:nth-child(1)').height();
            var rightH3 = leftH - rightHu - rightH1 - 48;
            $('.businessDimen:nth-child(2) .m-box').css("max-height", rightH3);
            $('.businessDimen:nth-child(2) .m-box').css("overflow-y", "scroll");

            $(".m-body").height(parseInt($("body").height()) - parseInt($(".m-body").css("top")) - 10);

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

            laydate({
                elem: '#selDay',
                isclear: false,
                // min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
                max: laydate.now(), //+1代表明天，+2代表后天，以此类推
                choose: function(datas){ //选择日期完毕的回调
                	$("#date").text($("#selDay").val());
                    init();
                }
            });
            
            $("body").delegate("#laydate_today","click", function(){
                $("#date").text($("#selDay").val());
                init();
            });
          
            $("#orderLogic").change(function(){
            	$("#orderLogic_hidden").text($("#orderLogic").val());
                init();
            });
            
            $("#cycleType").change(function(){
            	$("#cycleType_hidden").text($("#cycleType").val());
                init();
            });
            
            init();
            
            $(".lefth").append('<div id="dragbar"></div>');
        	  $("#dragbar").height($(".lefth").height());

	          bindResize(document.getElementById('dragbar'),$('.lefth'),$('.righth'),$('.m-boxs'));
            //月度趋势图控件
            lineBarTag();
        });

        function init() {
        	
        	//订单取数逻辑
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// 周期类型：本日,本周,本月
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
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
            
        	// 当前的月份
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
          
          //后添加的逻辑，修改时间显示问题
          	//后添加的逻辑，修改时间显示问题
          	var selDate = $("#selDay")[0].value;
            var newDate = date.getFullYear() + '-' + month + '-' + strDate;
          	var oldDate = $("#date").text();
          	if(selDate == "" && oldDate == ""){
              $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            }
            if(selDate == "" && oldDate !=""){
              $("#selDay").val(oldDate);
            }
            if(selDate != "" && selDate != newDate){
              $("#selDay").val(selDate);
            }
            
            //面包屑导航
        	//breadcrumb("业务人员","saler");
          var firstkey = getFirstParamKey();
            
            if(firstkey =="customerName"){
            	breadcrumb("客户","customer");
            }else if(firstkey =="storeName"){
            	breadcrumb("门店","storeName");
            }else if(firstkey =="modelName"){
            	breadcrumb("机型","modelName");
            }else{
            	breadcrumb("业务人员","saler");
            }
            
            var orderLogic = $("#orderLogic").val();
        	var cycleType = $("#cycleType").val();
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
          	var customerName = $("#customerName").text();//客户
            var modelName = $("#modelName").text().replace(/\+/g,'%2B');//机型
            var storeName = $("#storeName").text();
            
            if("day"==cycleType)
        		$("#tren").html("日别趋势图");
        	else if("week"==cycleType)
        		$("#tren").html("周别趋势图");
        	else if("month"==cycleType)
        		$("#tren").html("月度趋势图");
          else if("year"==cycleType)
        		$("#tren").html("年度趋势图");
            
            initTags(null);

            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) 
                + "&customerName=" + encodeURIComponent(customerName)+ "&modelName=" + encodeURIComponent(modelName)
                + "&storeName=" + encodeURIComponent(storeName)
                ,
                async: false,
                success: function (response) {
                    //console.log(response);

                    /*$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt);
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt);
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt);
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt);*/
                	
                	$("#dayQty").html(numChange(response.dayQty));
                    $("#dayAmt").html(toQfw_new(response.dayAmt.toFixed(2),true));
                    $("#monthQty").html(numChange(response.monthQty));
                    $("#monthAmt").html(toQfw_new(response.monthAmt.toFixed(2),true));
                    $("#weekQty").html(numChange(response.weekQty));
                    $("#weekAmt").html(toQfw_new(response.weekAmt.toFixed(2),true));
                    $("#yearQty").html(numChange(response.yearQty));
                    $("#yearAmt").html(toQfw_new(response.yearAmt.toFixed(2),true));

                    // 全国地图
                    var mapDatas = response.cityValues;
                    // 省份名称
                    //var provinceName = response.provinceName;
                    var BDmapName = response.provinceName;
                    var BDdatas = response.geoInfos;
                    
                    // 获取百度地图
                    if(BDmapName && BDdatas && BDdatas.length>0) {
                        getBDMap(BDmapName, BDdatas, "map");
                    } else {
                        getBDMap(BDmapName, [], "map");
                    }

                    // 月度趋势图
                    var LineDatas = [{
                        name: '销量',
                        data: response.trenQtys
                    }, {
                        name: '销售额(万元)',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                    // 事业部表格
                    var bizUnits = response.department;
                    var positionVersion = $("#positionVersion").text();
                    if(bizUnits) {
                    	$("#bizUnitTable").empty();
                    	//bizUnits = departmentbak(bizUnits);
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < bizUnits.length; i++) {
                            if(bizUnits[i].level==1){
                            	if("" != bizUnits[i].department){//去掉事业部为空的模块 2018/09/04
                            		firstLevel.push(bizUnits[i]);
                            	}
                            }else{
                            	secondLevel.push(bizUnits[i]);
                            }
                        }
                        
	                    for (var i = 0; i < firstLevel.length; i++) {
                          var dep_url = getLink("bizUnitName",firstLevel[i].department,"07");
	                        html += '<div class="businessDimen">';
	                        html += '    <div class="u-title">';
	                        html += '        <i class="icon-line"></i>';
	                        html += '        <h2><a href="'+dep_url+'" title="' + firstLevel[i].department + '">'+firstLevel[i].department+'</a></h2>'
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
	                        html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table u-table-b" id="sale-table' + i + '">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th>项目</th><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '                <tbody>';
	                        	
	                        for (var j = 0; j < secondLevel.length; j++) {
	                        	if(secondLevel[j].department==firstLevel[i].department){
	                        		var url = getLink("projectName",secondLevel[j].projectName,"07");
	                        		html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
	                        	}
	                        }
	                        html += '                </tbody>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
	                        html += '    </div>';
	                        html += '</div>';
	                    }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>机型销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                    // 项目表格
                    var projectName = response.projectName;
                    if(projectName) {
                    	$("#bizUnitTable").empty();
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < projectName.length; i++) {
                            if(projectName[i].level==1){
                            	firstLevel.push(projectName[i]);
                            }else{
                            	secondLevel.push(projectName[i]);
                            }
                        }
    for (var i = 0; i < firstLevel.length; i++) {
                        	html += '<div class="businessDimen">';
                        	html += '    <div class="u-title">';
                        	html += '        <i class="icon-line"></i>';
                        	html += '        <h2>'+firstLevel[i].projectName+'</h2>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
                        	html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '            </table>';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	//html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                    <tr><th code="modelName">机型</th><th code="qty">销量（台）</th><th code="amt">销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';

                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName){
                        			var url = getLink("modelName",secondLevel[j].modelName,"07");//style="text-decoration:none;"
                                 	html += '<tr><td><a href="'+url+'" title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td>';
                                    html += '<td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        			//html += '        <tr><td title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        		}
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';

                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';

                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);
                    tableSH("sale-table5", tr_minH);

                    // 机型表格
                    var models = response.modelName;
                    $("#modelTable").empty();
                    if(models) {
                        for (var i = 0; i < models.length; i++) {
                        	var url = getLink("modelName",models[i].name,"07");//
                         	var html = '<tr><td><a href="'+url+'" title="'+models[i].name+'" style="text-decoration:none;letter-spacing:normal">'+models[i].name+'</td>';
                            html += '<td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt.toFixed(2) + '</td></tr>';
                            //var html = '<tr><td>' + models[i].name + '</td><td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt + '</td></tr>';
                            $("#modelTable").append(html);
                        }
                    }
                    tableSH("model-table", tr_minH-2);

                    // 客户表格
                    var customerName = response.customerName;
                    $("#custTable").empty();
                    if(customerName) {
                        for (var i = 0; i < customerName.length; i++) {
                            //var html = '<tr><td>' + customerName[i].name + '</td><td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt + '</td></tr>';
                            var url = getLink("customerName",customerName[i].name,"07");//style="text-decoration:none;"
                        	var html = '<tr><td><a href="'+url+'" title="'+customerName[i].name+'">'+customerName[i].name+'</td>';
                            html += '<td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt.toFixed(2) + '</td></tr>';
                        	$("#custTable").append(html);
                        }
                    }

                    tableSH("cust-table", tr_minH-2);

                    // 门店表格
                    var storeName = response.storeName;
                    $("#storeTable").empty();
                    if(storeName) {
                        for (var i = 0; i < storeName.length; i++) {
                            var url = getLink("storeName",storeName[i].name,"07");//style="text-decoration:none;"
                        	var html = '<tr><td><a href="'+url+'" title="'+storeName[i].name+'">'+storeName[i].name+'</td>';
                            html += '<td>' + storeName[i].reachQty + '</td><td>' + storeName[i].reachAmt.toFixed(2) + '</td></tr>';
                            $("#storeTable").append(html);
                        }
                    }
                    tableSH("store-table", tr_minH-2);

        	        tableDrag("sale-table0");
        	        tableDrag("sale-table1");
        	        tableDrag("sale-table2");
        	        tableDrag("sale-table3");
        	        tableDrag("model-table");
        	        tableDrag("cust-table");
        	        tableDrag("sale-table");
                    /**点击排序*/
                    clickThSortCommon();
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

        }
        
      
      	window.timeSaleInit = function() {
        	
        	//订单取数逻辑
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// 周期类型：本日,本周,本月
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
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
            
        	// 当前的月份
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
          
          //后添加的逻辑，修改时间显示问题
          	//后添加的逻辑，修改时间显示问题
          	var selDate = $("#selDay")[0].value;
            var newDate = date.getFullYear() + '-' + month + '-' + strDate;
          	var oldDate = $("#date").text();
          	if(selDate == "" && oldDate == ""){
              $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            }
            if(selDate == "" && oldDate !=""){
              $("#selDay").val(oldDate);
            }
            if(selDate != "" && selDate != newDate){
              $("#selDay").val(selDate);
            }
            
            //面包屑导航
        	//breadcrumb("业务人员","saler");
          var firstkey = getFirstParamKey();
            
            if(firstkey =="customerName"){
            	breadcrumb("客户","customer");
            }else if(firstkey =="storeName"){
            	breadcrumb("门店","storeName");
            }else if(firstkey =="modelName"){
            	breadcrumb("机型","modelName");
            }else{
            	breadcrumb("业务人员","saler");
            }
            
            var orderLogic = $("#orderLogic").val();
        	var cycleType = $("#cycleType").val();
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
          	var customerName = $("#customerName").text();//客户
            var modelName = $("#modelName").text().replace(/\+/g,'%2B');//机型
            var storeName = $("#storeName").text();
            
            if("day"==cycleType)
        		$("#tren").html("日别趋势图");
        	else if("week"==cycleType)
        		$("#tren").html("周别趋势图");
        	else if("month"==cycleType)
        		$("#tren").html("月度趋势图");
          else if("year"==cycleType)
        		$("#tren").html("年度趋势图");
            
            initTags(null);

            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName) 
                + "&customerName=" + encodeURIComponent(customerName)+ "&modelName=" + encodeURIComponent(modelName)
                + "&storeName=" + encodeURIComponent(storeName)
                ,
                async: false,
                success: function (response) {
                    //console.log(response);

                    /*$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt);
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt);
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt);
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt);*/
                	
                	$("#dayQty").html(numChange(response.dayQty));
                    $("#dayAmt").html(toQfw_new(response.dayAmt.toFixed(2),true));
                    $("#monthQty").html(numChange(response.monthQty));
                    $("#monthAmt").html(toQfw_new(response.monthAmt.toFixed(2),true));
                    $("#weekQty").html(numChange(response.weekQty));
                    $("#weekAmt").html(toQfw_new(response.weekAmt.toFixed(2),true));
                    $("#yearQty").html(numChange(response.yearQty));
                    $("#yearAmt").html(toQfw_new(response.yearAmt.toFixed(2),true));

                    // 全国地图
                    var mapDatas = response.cityValues;
                    // 省份名称
                    //var provinceName = response.provinceName;
                    var BDmapName = response.provinceName;
                    var BDdatas = response.geoInfos;
                    
                    // 获取百度地图
                    if(BDmapName && BDdatas && BDdatas.length>0) {
                        getBDMap(BDmapName, BDdatas, "map");
                    } else {
                        getBDMap(BDmapName, [], "map");
                    }

                    // 月度趋势图
                    var LineDatas = [{
                        name: '销量',
                        data: response.trenQtys
                    }, {
                        name: '销售额(万元)',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                    // 事业部表格
                    var bizUnits = response.department;
                    var positionVersion = $("#positionVersion").text();
                    if(bizUnits) {
                    	$("#bizUnitTable").empty();
                    	//bizUnits = departmentbak(bizUnits);
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < bizUnits.length; i++) {
                            if(bizUnits[i].level==1){
                            	if("" != bizUnits[i].department){//去掉事业部为空的模块 2018/09/04
                            		firstLevel.push(bizUnits[i]);
                            	}
                            }else{
                            	secondLevel.push(bizUnits[i]);
                            }
                        }
                        
	                    for (var i = 0; i < firstLevel.length; i++) {
                          var dep_url = getLink("bizUnitName",firstLevel[i].department,"07");
	                        html += '<div class="businessDimen">';
	                        html += '    <div class="u-title">';
	                        html += '        <i class="icon-line"></i>';
	                        html += '        <h2><a href="'+dep_url+'" title="' + firstLevel[i].department + '">'+firstLevel[i].department+'</a></h2>'
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
	                        html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table u-table-b" id="sale-table' + i + '">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th>项目</th><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '                <tbody>';
	                        	
	                        for (var j = 0; j < secondLevel.length; j++) {
	                        	if(secondLevel[j].department==firstLevel[i].department){
	                        		var url = getLink("projectName",secondLevel[j].projectName,"07");
	                        		html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
	                        	}
	                        }
	                        html += '                </tbody>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
	                        html += '    </div>';
	                        html += '</div>';
	                    }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>机型销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                    // 项目表格
                    var projectName = response.projectName;
                    if(projectName) {
                    	$("#bizUnitTable").empty();
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < projectName.length; i++) {
                            if(projectName[i].level==1){
                            	firstLevel.push(projectName[i]);
                            }else{
                            	secondLevel.push(projectName[i]);
                            }
                        }
    for (var i = 0; i < firstLevel.length; i++) {
                        	html += '<div class="businessDimen">';
                        	html += '    <div class="u-title">';
                        	html += '        <i class="icon-line"></i>';
                        	html += '        <h2>'+firstLevel[i].projectName+'</h2>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
                        	html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '            </table>';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	//html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                    <tr><th code="modelName">机型</th><th code="qty">销量（台）</th><th code="amt">销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';

                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName){
                        			var url = getLink("modelName",secondLevel[j].modelName,"07");//style="text-decoration:none;"
                                 	html += '<tr><td><a href="'+url+'" title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td>';
                                    html += '<td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        			//html += '        <tr><td title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        		}
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';

                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';

                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);
                    tableSH("sale-table5", tr_minH);

                    // 机型表格
                    var models = response.modelName;
                    $("#modelTable").empty();
                    if(models) {
                        for (var i = 0; i < models.length; i++) {
                        	var url = getLink("modelName",models[i].name,"07");//
                         	var html = '<tr><td><a href="'+url+'" title="'+models[i].name+'" style="text-decoration:none;letter-spacing:normal">'+models[i].name+'</td>';
                            html += '<td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt.toFixed(2) + '</td></tr>';
                            //var html = '<tr><td>' + models[i].name + '</td><td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt + '</td></tr>';
                            $("#modelTable").append(html);
                        }
                    }
                    tableSH("model-table", tr_minH-2);

                    // 客户表格
                    var customerName = response.customerName;
                    $("#custTable").empty();
                    if(customerName) {
                        for (var i = 0; i < customerName.length; i++) {
                            //var html = '<tr><td>' + customerName[i].name + '</td><td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt + '</td></tr>';
                            var url = getLink("customerName",customerName[i].name,"07");//style="text-decoration:none;"
                        	var html = '<tr><td><a href="'+url+'" title="'+customerName[i].name+'">'+customerName[i].name+'</td>';
                            html += '<td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt.toFixed(2) + '</td></tr>';
                        	$("#custTable").append(html);
                        }
                    }

                    tableSH("cust-table", tr_minH-2);

                    // 门店表格
                    var storeName = response.storeName;
                    $("#storeTable").empty();
                    if(storeName) {
                        for (var i = 0; i < storeName.length; i++) {
                            var url = getLink("storeName",storeName[i].name,"07");//style="text-decoration:none;"
                        	var html = '<tr><td><a href="'+url+'" title="'+storeName[i].name+'">'+storeName[i].name+'</td>';
                            html += '<td>' + storeName[i].reachQty + '</td><td>' + storeName[i].reachAmt.toFixed(2) + '</td></tr>';
                            $("#storeTable").append(html);
                        }
                    }
                    tableSH("store-table", tr_minH-2);

        	        tableDrag("sale-table0");
        	        tableDrag("sale-table1");
        	        tableDrag("sale-table2");
        	        tableDrag("sale-table3");
        	        tableDrag("model-table");
        	        tableDrag("cust-table");
        	        tableDrag("sale-table");
                    /**点击排序*/
                    clickThSortCommon();
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

        }
      
        // 配置：百度地图
        function getBDMap(mapName, datas, Id) {
            console.log(mapName);
            console.log(datas);
						document.getElementById("map").setAttribute('option',JSON.stringify(datas));//2018/02/11
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
            if(datas[0].data){
	            for (var j = 0; j < datas[0].data.length; j++) {
	                timeDatas.push((datas[0].data[j].time).substring(5));
	                salesValReach.push(datas[0].data[j].value);
	                sumValReach.push(datas[1].data[j].value);
	            }
            }

            var option = {
                color: ["#2c81ff", "#ed9429"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    show: true,
                    containLabel: true,
                    top: 60,
                    left: 10,
                    right: 10,
                    bottom: 30
                },
                legend: {
                    itemGap: 40, //图例每项之间的间隔
                    itemWidth: 18,
                    itemHeight: 5,
                    top: 20,
                    //right: 90,
                  	display: 'block',
                    margin: "0 auto",
                  	width: '70%',
                    data: legendDatas
                },
                xAxis: [{
                    type: 'category',
                    data: timeDatas,
                    boundaryGap: false, //x轴刻度从原点开始
                    axisPointer: {
                        type: 'line'
                    },
                    axisTick: { //坐标轴刻度相关设置。
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#dfdfdf'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: legendDatas[0].name,
                    //min: 4300,
                    min: 0,
                    splitNumber: 9,
                    position: 'left',
                    axisTick: { //是否显示坐标轴刻度
                        show: false
                    },
                    axisLine: {
                        lineStyle: { //坐标轴线的颜色
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: { //坐标轴刻度相关设置
                            color: '#666'
                        }
                    },
                    splitLine: { //坐标轴在grid区域中的分隔线
                        lineStyle: {
                            color: '#dfdfdf'
                        }
                    }
                }, {
                    type: 'value',
                    name: legendDatas[1].name,
                    //min: 280,
                    //max: 370,
                    min: 0,
                    splitNumber: 9,
                    position: 'right',
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
                    symbol: 'circle',
                    symbolSize: 7,
                    yAxisIndex: 0,
                    label: {
                        normal: {
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
                    symbol: 'circle',
                    symbolSize: 7,
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    label: {
                        normal: {
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
          	document.getElementById("lines").setAttribute('option',JSON.stringify(option));//2018/02/11
        }

        /***/ })
    /******/ ]);
//# sourceMappingURL=headLeader.map