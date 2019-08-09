$(function() {
	inintCss();//初始化样式
	initClickFn();//初始化点击事件
	initAllData();//初始化数据
});

//根据条件 初始化所有数据
function initAllData(){
	var param = {};//globalClone(bigCustomerViewMap.searchParam);
	param.timeFlag = $("#timeFlag").val();//时间类型
	var time = $("#timeShow").val();//"2018-07-27";//时间
	param.day = time;
	sendAjax("smartLife/getParam",param,function(result){
		param = $.extend({},param,result);
		inintSelectOption(globalClone(param));
		delete param["isSeries"];
		delete param["noSeries"];
		delete param["materialtype"];
		getAllData(param);//分步初始化所有数据
	});
}

window.timeInit = function(){
  var param = {};//globalClone(bigCustomerViewMap.searchParam);
	param.timeFlag = $("#timeFlag").val();//时间类型
	var time = $("#timeShow").val();//"2018-07-27";//时间
	param.day = time;
	sendAjax("smartLife/getParam",param,function(result){
		param = $.extend({},param,result);
		inintSelectOption(globalClone(param));
		delete param["isSeries"];
		delete param["noSeries"];
		delete param["materialtype"];
		getAllData(param);//分步初始化所有数据
	});
}
//始化所有数据
function getAllData(paramMap){
	var param = paramMap;//getSearchParam(paramMap);//获取参数
	//param = $.extend({},bigCustomerViewMap.permissionParam1,param);//拼接权限数据
	getTitleData(param);//初始化标头数据
	getMaterialtypeRate(param);//品类份额占比
	getMaterialtypeChat(param);//品类份额趋势
	getProductSeriesChart(param);//产品系列占比趋势
	getTop10IsPhone(param);
	getTop10NoPhone(param);
}


/**
 * 初始化事件
 */
function initClickFn(){
	//日期类型 改变事件
	$("#timeFlag").on("change",function(){
		initAllData();
	})
	
	
	//默认今天
	var dateToday = new Date();
	var monthT = (dateToday.getMonth()+1);
	monthT =(monthT<10 ? "0"+monthT:monthT);
	var dayT = (dateToday.getDate());
	dayT =(dayT<10 ? "0"+dayT:dayT);
	$("#timeShow").val(dateToday.getFullYear()+"-"+monthT+"-"+dayT);
	
	//日期插件
	$("#timeShow").datepicker({
        language: "zh-CN",
        //startView:1,
        autoclose: true,//选中之后自动隐藏日期选择框
        clearBtn: true,//清除按钮
        todayBtn: 'linked',//今日按钮 false true
        format: "yyyy-mm-dd",
        todayHighlight:true //今天高亮显示
    }).on('changeDate',function(ev){
    	initAllData();
	});
}


/**
 * 初始化样式
 */
function inintCss(){
	//为适配不同分辨率，动态计算高度
	var ringW = $(".m-body .chart").width();
	var ringH = $(".m-body .chart").height(0.59 * ringW);
	var duidieW = $(".m-body .chart-b").width();
	var duidieH = $(".m-body .chart-b").height(duidieW * 0.22);
}		