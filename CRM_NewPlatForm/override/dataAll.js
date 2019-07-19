/**
 * 加载标题数据
 * titile
 */
function getTitleData(param){
	sendAjax("smartLife/getTitleData",param,function(response){
		$("#dayQty").html(toQfw(response.dayQty));
        $("#dayAmt").html(toQfw(response.dayAmt.toFixed(2),true));
        $("#weekQty").html(toQfw(response.weekQty));
        $("#weekAmt").html(toQfw(response.weekAmt.toFixed(2),true));
        $("#monthQty").html(toQfw(response.monthQty));
        $("#monthAmt").html(toQfw(response.monthAmt.toFixed(2),true));
        $("#yearQty").html(toQfw(response.yearQty));
        $("#yearAmt").html(toQfw(response.yearAmt.toFixed(2),true));
        $("#orderCount").html(toQfw(response.orderCount));//订单数量
	});
}

/**
 * 品类份额占比  饼图
 * @param param
 */
function getMaterialtypeRate(param){
	sendAjax("smartLife/getMaterialtypeRate",param,function(response){
		if(null != response && response.data && response.data.length > 0){
			var list = response.data.sort(compareSort("volume",true));
			var otherQty = 0;//其他总量
			var otherAmt = 0;
			var countQty = 0;//总量
			for(var i=0;i<list.length;i++){
				list[i].sales = list[i].sales.toFixed(0);
				if(i>5){
					otherQty += Number(list[i].volume);
					otherAmt = accAdd(otherAmt,list[i].sales);
				}
				countQty += Number(list[i].volume);
			}
			if(list.length > 6){
				list = list.slice(0,6);
				list.push({"volume":otherQty,"sales":otherAmt.toFixed(0),"name":"其他"});
			}
      document.getElementById("ring").setAttribute('flag',true);
			getRing(list, "ring");//饼图
			//导出
			$("#materialTypeRateExport").unbind("click").click(function(){
				var columns = [{"display":"品类","name":"name"},{"display":"销量","name":"volume"},{"display":"占比","name":"rate"}];
				var exportList = [];
				for(var i=0;i<list.length;i++){
					var tObj = {};
					tObj.name = list[i].name;
					tObj.volume = list[i].volume;
					tObj.rate = countQty==0?0:((list[i].volume / countQty * 100).toFixed(2)) + "%";
					exportList.push(tObj);
				}
				downExcel(columns,exportList,"品类份额占比");
			});
		}else{
			var myChart = echarts.init(document.getElementById("ring"));
			myChart.clear();
      document.getElementById("ring").setAttribute('flag',false);
		}
	});
}

/**
 * 品类份额趋势
 */
function getMaterialtypeChat(param){
	sendAjax("smartLife/getMaterialtypeChat",param,function(response){
		setLineChart(response,"lines");
		$("#materialTypeExport").unbind("click").click(function(){
			var columns = [{"display":"日期","name":"time"},{"display":"品类","name":"name"},{"display":"销量（台）","name":"qty"}];
			downExcel(columns,response.list.sort(compareSort("time")),"品类份额趋势");
		});
	});
}

/**
 * 产品系列占比趋势
 */
function getProductSeriesChart(param1){
	var param = globalClone(param1);
	param.filter_materialtype = $("#materialtypeSelect").val();
	sendAjax("smartLife/getProductSeriesChart",param,function(response){
		setLineChart(response,"barline",$("#qtyOramtySelect").val());
		$("#productSeriesExport").unbind("click").click(function(){
			var key = $("#qtyOramtySelect").val();
			var keyName = "qty"==key?"销量":"销售额";
			var columns = [{"display":"日期","name":"time"},{"display":"产品系列","name":"name"},{"display":keyName,"name":key}];
			downExcel(columns,response.list.sort(compareSort("time")),"产品系列占比-"+$("#materialtypeSelect").val());
		});
	})
}

function setLineChart(response,lineType,pkey){
	var key = "qty";
	if(pkey) key = pkey;
	if(null != response && response.listCount.length > 0){
		var listCount = response.listCount.sort(compareSort(key,true));//时间段内  品类分组的总数
		var list = response.list.sort(compareSort("time"));//时间段内  品类、日期分组的总数
		var countList = [];//排名前6的品牌类型
		for(var i=0;i<listCount.length;i++){
			if(i<6)	
				countList.push(listCount[i].name);//品类名称  排名前6的
			else break;
		}
		
		var timeList = [];//所有时间
		var otherList = [];//其他数据集合
		for(var j=0;j<list.length;j++){
			timeList.push(list[j]["time"]);
			if(!arryContains(countList,list[j].name)){
				otherList.push(list[j]);
			}
		}
		timeList = arrayUnique(timeList);//去重复
		
		var timeFlag = $("#timeFlag").val();
		
		var linesData = [];//折线图 所需要的数据
		for(var i=0;i<countList.length;i++){
			var rMap = {"name":countList[i]};//品类名称
			rMap.data = [];
			for(var j=0;j<list.length;j++){
				if(list[j].name == countList[i]){
					var lMap = {};
					lMap.time = list[j]["time"];
					lMap.value = Number(list[j][key]);
					rMap.data.push(lMap);
				}
			}
			var data1 = [];
			for(var t=0,tLen=timeList.length; t<tLen;t++){
				var time0 = timeList[t];
				var lMap = {};
				lMap.time = time0;
				lMap.value = 0;
				for(var j=0;j<rMap.data.length;j++){
					if(rMap.data[j].time == time0){
						lMap.value = rMap.data[j].value;
					}
				}
				if("week"==timeFlag){
					lMap.time = time0.substring(time0.indexOf("-")+1);
				}
				data1.push(lMap);
			}
			rMap.data = data1;
			linesData.push(rMap);
		}
		
		//其他
		if(listCount.length > 6){
			var rMap = {"name":"其他"};
			rMap.data = [];
			for(var i=0;i<timeList.length;i++){
				var lMap = {"time":timeList[i]};
				var lQty = 0;
				for(var j=0;j<otherList.length;j++){
					if(otherList[j]["time"] == timeList[i]){
						lQty += Number(otherList[j][key]);
					}
				}
				lMap.value = lQty;
				rMap.data.push(lMap);
			}
			
			var data1 = [];
			for(var t=0,tLen=timeList.length; t<tLen;t++){
				var time0 = timeList[t];
				var lMap = {};
				lMap.time = time0;
				lMap.value = 0;
				for(var j=0;j<rMap.data.length;j++){
					if(rMap.data[j].time == time0){
						lMap.value = rMap.data[j].value;
					}
				}
				if("week"==timeFlag){
					lMap.time = time0.substring(time0.indexOf("-")+1);
				}
				data1.push(lMap);
			}
			rMap.data = data1;
			
			linesData.push(rMap);
		}
		if(lineType == "lines"){
			getLines(linesData, "lines");//折线图
		}else if(lineType == "barline"){
			getBarLine(linesData, "barline");//堆积柱形图
		}
	}else{
		var myChart = echarts.init(document.getElementById(lineType));
		myChart.clear();	
	}
}

/**
 * TOP10产品（手机类） 
 * @param param
 */
function getTop10IsPhone(param){
	sendAjax("smartLife/getTop10IsPhone",param,function(response){
		$("#top10IsPhone tbody").html(getTop10PhoneHtml(response.sort(compareSort("qty",true))));
		$("#top10IsPhone_export").unbind().click(function(){
			exportTopExcel("top10IsPhone","TOP10产品（手机类） ");
		})
		clickTheadSort("top10IsPhone",response);//点击标题排序
	});
}

/**
 * TOP10产品（非手机类） 
 * @param param
 */
function getTop10NoPhone(param){
	sendAjax("smartLife/getTop10NoPhone",param,function(response){
		$("#top10NoPhone tbody").html(getTop10PhoneHtml(response.sort(compareSort("qty",true))));
		$("#top10NoPhone_export").unbind().click(function(){
			exportTopExcel("top10NoPhone","TOP10产品（非手机类） ");
		})
		clickTheadSort("top10NoPhone",response);//点击标题排序
	});
}
//拼接table
function getTop10PhoneHtml(list){
	var html = "";
	if(list){
		for(var i=0;i<list.length;i++){
			html += "<tr>";
			html += "<td>"+list[i].name+"</td>";
			html += "<td>"+toQfw(list[i].qty)+"</td>";
			html += "<td>"+toQfw(list[i].amt.toFixed(2),true)+"</td>";
			html += "</tr>";
		}
	}
	return html;
}
//导出excel
function exportTopExcel(id,title){
	var columns = [{"display":"机型","name":"name"},{"display":"销量（台）","name":"qty"},{"display":"销售额（万）","name":"amt"}];
	var data = [];
	$("#"+id+" tbody tr").each(function(){
		var trMap = {};
		trMap.name = $(this).find("td:eq(0)").text();
		trMap.qty = $(this).find("td:eq(1)").text();
		trMap.amt = $(this).find("td:eq(2)").text();
		data.push(trMap);
	})
	downExcel(columns,data,title);
}
//点击标题排序
function clickTheadSort(id,data){
	$("#"+id+" thead tr:eq(0) th").unbind().click(function(){
		$(this).toggleClass("sort");
		var sortFlag = !$(this).hasClass("sort");
		data = data.sort(compareSort($(this).attr("code"),sortFlag));
		$("#"+id+" tbody").html(getTop10PhoneHtml(data));
	})
}


/**
 * 初始化select框
 */
function inintSelectOption(data){
	//品类
	if(data && data.materialtype){
		var optionHtml = "<option value='手机'>手机</option>";
		for(var i=0,len=data.materialtype.length; i<len; i++){
			var name = data.materialtype[i].name;
			if(getValue(name) != "" && getValue(name) != "手机"){
				optionHtml += "<option value='"+name+"'>"+name+"</option>";
			}
		}
		delete data["materialtype"];
		$("#materialtypeSelect").html(optionHtml);
		//产品系列占比趋势
		$("#materialtypeSelect").unbind().change(function(){
			getProductSeriesChart(data);
		});
	}
	
	
	$("#qtyOramtySelect").unbind().change(function(){
		getProductSeriesChart(data);
	})
	
	//TOP10产品（手机类） 
	if(data && data.isSeries){
		var optionHtml = "<option value=''>全部</option>";
		for(var i=0,len=data.isSeries.length; i<len; i++){
			var name = data.isSeries[i].name;
			if(getValue(name) != ""){
				optionHtml += "<option value='"+name+"'>"+name+"</option>";
			}
		}
		delete data["isSeries"];
		$("#top10IsPhone_select").html(optionHtml);
		$("#top10IsPhone_select").unbind().change(function(){
			if($(this).val() != ""){
				data.filter_productseriesname = $(this).val(); 
			}else{
				delete data["filter_productseriesname"];
			}
			getTop10IsPhone(data);
		})
	}
	
	//TOP10产品（非手机类） 
	if(data && data.noSeries){
		var optionHtml = "<option value=''>全部</option>";
		for(var i=0,len=data.noSeries.length; i<len; i++){
			var name = data.noSeries[i].name;
			if(getValue(name) != ""){
				optionHtml += "<option value='"+name+"'>"+name+"</option>";
			}
		}
		delete data["noSeries"];
		$("#top10NoPhone_select").html(optionHtml);
		$("#top10NoPhone_select").unbind().change(function(){
			if($(this).val() != ""){
				data.filter_productseriesname = $(this).val(); 
			}else{
				delete data["filter_productseriesname"];
			}
			getTop10NoPhone(data);
		})
	}
}

