//首次加载该js 清除sessionStorage
if(getParam("a")=="1" || getParam("firstFlag")=="true"){
	sessionStorage.clear();
}

function initTags(clickButten){
	
	var parms = {};
	  parms.type = $("#type").text();
    var cycleType = $("#cycleType").val();
    var orderLogic = $("#orderLogic").val();
    
    var date=$("#selDay").val();
    var loginName=$("#loginName").text();
    
  	/** 4月13添加参数loginName **/
    parms.loginName = loginName;
  
    if($("#branchName").text())
    	parms.branchName=$("#branchName").text();
    if($("#projectName").text())
    	parms.projectName=$("#projectName").text();
    if($("#bizUnitName").text())
    	parms.department=$("#bizUnitName").text();
    if($("#officeName").text())
    	parms.officeName=$("#officeName").text();
    if($("#salerName").text())
    	parms.salesman_id=$("#salerName").text();
    
    if(clickButten==null || clickButten<1)
	    ajaxData_2143(parms);
    
    if(clickButten==null || clickButten<2)
	    ajaxData_2145(parms);
    
    if(clickButten==null || clickButten<3)
	    ajaxData_2144(parms);
    
    if(clickButten==null || clickButten<4)
	    ajaxData_2146(parms);
}


//销售总览控件--部门
function ajaxData_2143(parms) {
	
	parms.interfaceId = 2143;
	
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var rows = data.Rows;
			var html = '<option value="" selected="selected" ></option>';
			for(var i in rows){
			if(rows[i].departmentId&&rows[i].department && rows[i].department != "电信业务事业部")
					html += '<option value="'+rows[i].departmentId+'">'+rows[i].department+'</option>';
			}
			$("#departmentId").html(html);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

//销售总览控件--项目
function ajaxData_2145(parms) {
	
	parms.interfaceId = 2145;
	
	if($("#departmentId").val())
	    parms.departmentId = $("#departmentId").val();
	
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var rows = data.Rows;
			var html = '<option value="" selected="selected" ></option>';
			for(var i in rows){
				if(rows[i].projectId&&rows[i].projectName)
				    html += '<option value="'+rows[i].projectId+'">'+rows[i].projectName+'</option>';
			}
			$("#projectId").html(html);

		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

//销售总览控件--颜色


function getLink(key,value,type){
	if(!key || !value)
		return '#';
	
    var loginName = $("#loginName").text();
    var encoder = $("#encoder").text();
    var cycleType = $("#cycleType").val();
    var orderLogic = $("#orderLogic").val();
    
    var branchName = $("#branchName").text();
    var projectName = $("#projectName").text();
    var bizUnitName = $("#bizUnitName").text();
    var officeName = $("#officeName").text();
    var salerName = $("#salerName").text();
    
    var customerName = $("#customerName").text();
    var modelName = $("#modelName").text().replace(/\+/g,'%2B');//机型
    var storeName = $("#storeName").text();
    
    var link = "/ptDataShow/salesAll/salesOverview";
    link += "?" + key + "=" + encodeURIComponent(value);
    link += "&type=" + type;
    link += "&filter_userId=" + loginName;
    link += '&encoder=' + encoder;
    link += '&date=' + $("#selDay").val(); 
    link += '&cycleType=' + cycleType;
    link += '&orderLogic=' + orderLogic; 
    if(key=='projectName') {
      link += '&drill=项目';
    }else if(key=='bizUnitName') {
      link += '&drill=事业部';
    }
    
    if(branchName && key!='branchName')
    	link += '&branchName=' + branchName;
    if(projectName && key!='projectName')
    	link += '&projectName=' + projectName;
    if(bizUnitName && key!='bizUnitName')
    	link += '&bizUnitName=' + bizUnitName;
    if(officeName && key!='officeName')
    	link += '&officeName=' + officeName;
    if(salerName && key!='salerName')
    	link += '&salerName=' + salerName;
    if(customerName && key!='customerName')
    	link += '&customerName=' + encodeURIComponent(customerName);
    if(modelName && key!='modelName')
    	link += '&modelName=' + encodeURIComponent(modelName);
    if(storeName && key!='storeName')
    	link += '&storeName=' + encodeURIComponent(storeName);
    
    return link;
}
function getLinkForSearch(key,value,type){
	if(!key || !value)
		return '#';
	
	var loginName = $("#loginName").text();
	var encoder = $("#encoder").text();
	var cycleType = $("#cycleType").val();
	var orderLogic = $("#orderLogic").val();
	
	var link = "/ptDataShow/salesAll/salesOverview";
	link += "?" + key + "=" + encodeURIComponent(value);
	link += "&type=" + type;
	link += "&filter_userId=" + loginName;
	link += '&encoder=' + encoder;
	link += '&date=' + $("#selDay").val(); 
	link += '&cycleType=' + cycleType;
	link += '&orderLogic=' + orderLogic; 
	return link;
}


//销售总览控件--机型
function ajaxData_2144(parms) {
	
	parms.interfaceId = 2144;
    
	if($("#departmentId").val())
	    parms.departmentId = $("#departmentId").val();
	if($("#projectId").val())
	    parms.projectId = $("#projectId").val();
	
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var rows = data.Rows;
			var html = '<option value="" selected="selected" ></option>';
			for(var i in rows){
				if(rows[i].modelId&&rows[i].modelName)
				    html += '<option value="'+rows[i].modelId+'">'+rows[i].modelName+'</option>';
			}
			$("#modelId").html(html);

		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

//销售总览控件--颜色
function ajaxData_2146(parms) {
	
	parms.interfaceId = 2146;
	
	if($("#departmentId").val())
	    parms.departmentId = $("#departmentId").val();
	if($("#projectId").val())
	    parms.projectId = $("#projectId").val();
	if($("#modelId").val())
	    parms.modelId = $("#modelId").val();
	
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var rows = data.Rows;
			var html = '<option value="" selected="selected" ></option>';
			for(var i in rows){
				if(rows[i].materialColor)
				    html += '<option value="'+rows[i].materialColor+'">'+rows[i].materialColor+'</option>';
			}
			$("#materialColor").html(html);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

/** 
 * 获取指定的URL参数值 
 * URL:http://www.quwan.com/index?name=tyler 
 * 参数：paramName URL参数 
 * 调用方法:getParam("name") 
 * 返回值:tyler 
 */ 
function getParam(paramName) {
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue 
}

/**
 * 获取点一个参数
 */
function getFirstParamKey(){
	var key = "";
	var url = window.location.search; 
	if ( url.indexOf("?") == 0 && url.indexOf("=") > 1) { 
		var strs = url.substr(1).split("&"); 
		key = strs[0].substring(0,(strs[0].indexOf("=")));
    } 
	return key;
}

/*改url*/
function changeURLPar(destiny, par, par_value) {
	var pattern = par+'=([^&]*)';
	var replaceText = par+'='+par_value;
	if (destiny.match(pattern)) {
		//var tmp = '/\\'+par+'=[^&]*/';
		var tmp = par + '=' + getParam(par);
		if(par_value)
		    tmp = destiny.replace(tmp, replaceText);
		return (tmp);
	} else {
		if (destiny.match('[\?]')){
			return destiny+'&'+ replaceText;
		} else {
			return destiny+'?'+replaceText;
		}
	}
	return destiny+'\n'+par+'\n'+par_value;
} 

//面包屑
function breadcrumb(role,roleCode){
	var map = {};
	map.level = $("#type").text();
	map.url = location.href;
	if($("#drill").text()){
		map.role = role+$("#drill").text();
		map.roleCode = roleCode+'Project';
	}else{
		map.role = role;
		map.roleCode = roleCode;
	}
	
	map.url = changeURLPar(map.url, "date", $("#selDay").val());
	map.url = changeURLPar(map.url, "orderLogic", $("#orderLogic").val());
	map.url = changeURLPar(map.url, "cycleType", $("#cycleType").val());
	
	sessionStorage.setItem(map.roleCode,JSON.stringify(map));
	
	if(sessionStorage.getItem("path")&&sessionStorage.getItem("path").indexOf(map.roleCode)==-1)
		sessionStorage.setItem("path",sessionStorage.getItem("path")+"-"+map.roleCode);
	else{
		var path = sessionStorage.getItem("path")?sessionStorage.getItem("path"):"";
		if(path)
		    path = path.substr(0,sessionStorage.getItem("path").indexOf(map.roleCode));
		    
		sessionStorage.setItem("path",path + map.roleCode);
	}
	
	var path = sessionStorage.getItem("path").split("-");
	
	for(var i in path){
		var session = JSON.parse(sessionStorage.getItem(path[i]));
		if(i==0)
			$(".breadcrumb").html('<li><a href="'+session.url+'">'+session.role+'</a></li>');
		else
		    $(".breadcrumb").append('<li><a href="'+session.url+'">'+session.role+'</a></li>');
	}
	
}

//月度趋势图控件
function lineBarTag(){
	$("#departmentId,#projectId,#modelId,#materialColor").change(function(){
		showLineBar();
	})
}

function showLineBar(){
	var filter_departmentId  = $("#departmentId").val();
	var filter_projectId  = $("#projectId").val();
	var filter_modelId  = $("#modelId").val();
	var filter_materialColor  = $("#materialColor").val();
	
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
    
	 $.ajax({
         url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic 
         +"&cycleType=" + cycleType 
         + "&date=" + date 
         + "&type=" + type 
         + "&filter_userId=" + loginName 
         + '&encoder=' + encoder
         + "&branchName=" + encodeURIComponent(branchName) 
         + "&projectName=" + encodeURIComponent(projectName) 
         + "&bizUnitName=" + encodeURIComponent(bizUnitName)
         + "&officeName=" + encodeURIComponent(officeName) 
         + "&salerName=" + encodeURIComponent(salerName)
         + "&filter_departmentId=" + encodeURIComponent(filter_departmentId)
         + "&filter_projectId=" + encodeURIComponent(filter_projectId)
         + "&filter_modelId=" + encodeURIComponent(filter_modelId)
         + "&filter_materialColor=" + encodeURIComponent(filter_materialColor)
         + "&filter_line=" + true,
         async: false,
         success: function (response) {
        	// 趋势图
             var LineDatas = [{
                 name: '销量(台)',
                 data: response.trenQtys
             }, {
                 name: '销售额(万元)',
                 data: response.trenAmts
             }];
             getLines(LineDatas, "lines");
         },
         error:function(response){
        	 
         }
	 })
}


//配置：折线图   lyh  4-24
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
	        timeDatas.push(datas[0].data[j].time);
	        salesValReach.push(datas[0].data[j].value);
	        if(datas[1].data[j].value.toString().indexOf(".")>0){
	        	//var value1 = datas[1].data[j].value.toFixed(2);
            var value1 = datas[1].data[j].value;
	        	if(value1.toString().substr(-2,2) == "00"){
	        		// value1 = datas[1].data[j].value.toFixed(0);
              value1 = datas[1].data[j].value;
	        	}else if(value1.toString().substr(-1,1) == "0"){
              // value1 = datas[1].data[j].value.toFixed(0);
	        		value1 = datas[1].data[j].value;
	        	}
	        	sumValReach.push(value1);
	        }else{
	        	sumValReach.push(datas[1].data[j].value);
	        }
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
        // legend: {
        //     itemGap: 40, //图例每项之间的间隔
        //     itemWidth: 18,
        //     itemHeight: 5,
        //     top: 10,
        //     right: 20,
        //     data: legendDatas
        // },
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
       /* toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },*/
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
  	document.getElementById("lines").setAttribute('option',JSON.stringify(option));//2018/02/09
}

var departmentMap = {};
departmentMap['华为业务群']=1;
departmentMap['三星业务事业部']=2;
departmentMap['分销业务事业部']=3;
departmentMap['大客户业务事业部']=4;

function departmentbak(bizUnits){
	for(var i = 0 ; i < bizUnits.length ; i++ ){
		bizUnits[i].bank = departmentMap[bizUnits[i].department];
	}
	
	bizUnits.sort(function(row1,row2){
        return row1.bank-row2.bank;
    });
	
	return bizUnits;
}

//数字千分位转化(带小数或不带小数)
function numChange(params) {
  num = params.toString();   //将输入的数字转换为字符串
  if(/^-?\d+\.?\d+$/.test(num)){  //判断输入内容是否为整数或小数
    if(/^-?\d+$/.test(num)){       //判断输入内容是否为整数
    	num =num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");//对其进行分割
    }else{
      num_array=num.split(".");//如果是小数就根据"."拆分成两个数组，整数部分和小数部分，对整数部分进行千分位处理，再合并小数部分
      num_before=num_array[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      num=num_before+"."+num_array[1];                       
    }                     
  }
  return num;
}

//var isShowProject = $("#isShowProject").text();
$(function (){
	$(".clear-btn").click(function(){
		$("#departmentId").val('');
		$("#projectId").val('');
		$("#modelId").val('');
		$("#materialColor").val('');
		showLineBar();
	})
	
	//事业部联动
	$("#departmentId").change(function(){
		initTags(1);
		$("#projectId").val('');
		$("#modelId").val('');
		$("#materialColor").val('');
	})
	
	//项目联动
	$("#projectId").change(function(){
		initTags(2);
		$("#modelId").val('');
		$("#materialColor").val('');
	})
	
	//机型联动
	$("#modelId").change(function(){
		initTags(3);
		$("#materialColor").val('');
	})
	
})


/**
 * 排序
 * @param property
 * @returns {Function}
 * var newList = list.sort(compareProp(code,true));
 */
function compareProp(prop,flag){
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if(flag){
        	if (val1 < val2) return 1;
        	else if (val1 > val2) return -1;
            else return 0;
        }else{
        	if (val1 < val2) return -1;
        	else if (val1 > val2) return 1;
            else return 0;
        }
    } 
}

/**
 * 所有的表格进行排序
 */
function clickThSortCommon(){
	$("table").each(function(){
		var $table = $(this);
		var list = [];
		$table.find("tbody tr").each(function(){
			var tMap = {};
			$(this).find("td").each(function(index,element){
				tMap[$table.find("thead th:eq("+index+")").text()] = $(element).html(); 
			})
			list.push(tMap);
		})
		$table.find("thead th").unbind().click(function(){
			var newHtml = "";
			$(this).toggleClass("desc");//this 指的是th
			if($(this).hasClass("desc")){
				list = list.sort(compareProp($(this).text(),true));
    		}else{
    			list = list.sort(compareProp($(this).text()));
    		}
			for(var i=0;i<list.length;i++){
				var item = list[i];
				newHtml += "<tr>";
				for(var key in item){
					newHtml += "<td>"+item[key]+"</td>";
				}
				newHtml += "</tr>";
			}
			$table.find("tbody").html(newHtml);
		})
	})
}


/**
 * 2019/1/23 添加 千分位过滤
 * @param num
 * @param flag
 * @returns {String}
 */
function toQfw_new(num,flag) {
	var str_num = flag?(num/10000).toFixed(2).toString():num.toString();
	var end_num = "";
	if(str_num.indexOf(".") > 0){
		end_num = str_num.substring(str_num.indexOf("."), str_num.length);
		str_num = str_num.substring(0,str_num.indexOf("."));
	}
	if(end_num == ".00"){
		end_num = "";
	}
	
	var first_sign = "";
	if(str_num.indexOf("-") == 0){
		str_num = str_num.substring(1,str_num.length);
		first_sign = "-"
	}
	
	var result = "";
	while (str_num.length > 3) {
		result = "," + str_num.slice(-3) + result;
		str_num = str_num.slice(0, str_num.length - 3)
	}
	return first_sign + str_num + result + end_num;
}

$(function(){
	$("#selectSearch").on("change",function(){
		$("#searchInput").val("");
	})
	$("#orderLogic").on("change",function(){
		$("#searchInput").val("");
	})
	$("#cycleType").on("change",function(){
		$("#searchInput").val("");
	})
	//自动补全控件
	if($('#searchInput').length>0){
		setAutocomplete("/ptDataShow/salesAll/getSearchData",function(suggestions){
      debugger
	    	var selectType = $("#selectSearch").val();
	    	if(suggestions){
    			var suggObj = JSON.parse(suggestions.data);
    			var link = "";
		    	if("salerName" == selectType){
		    		link = getLinkForSearch("salerName",suggObj.salesman_id,"07");
		    		link += '&branchName=' + suggObj.branchName;
		    		link += '&officeName=' + suggObj.officeName;
		    	}else if("customerName" == selectType){
		    		link = getLinkForSearch("customerName",suggObj.customerName,"07");
		    		link += '&branchName=' + suggObj.branchName;
		    		link += '&officeName=' + suggObj.officeName;
		    		link += '&salerName=' + suggObj.salesman_id;
		    	}else if("storeName" == selectType){
		    		link = getLinkForSearch("storeName",suggObj.storeName,"07");
		    		link += '&branchName=' + suggObj.branchName;
		    		link += '&officeName=' + suggObj.officeName;
		    		link += '&salerName=' + suggObj.salesman_id;
		    	}
		    	
		    	if(link != ""){
		    		var path = sessionStorage.getItem("path")?sessionStorage.getItem("path"):"";
		    		if(path && path.indexOf("-") > -1){
		    			path = path.substr(0,path.indexOf("-"))
		    			sessionStorage.setItem("path",path);
		    		}
		    		window.location.href = link;
		    	}
	    	}
	    });
	}
	
	//当前纬度
	setCurrentLatitudeText();
})
//发送ajax请求
function setAutocomplete(service,callBack){
	$('#searchInput').autocomplete({
		ajaxSettings:{
			dataType: "json",
		},
		getSearchParam:getSearchParam,
		serviceUrl: service,
	    onSelect: function(suggestion) {
    		if(callBack){
	    		callBack(suggestion);
	    	}
	    }
	});
	
	function getSearchParam(){
		var body = {};
		body[$("#selectSearch").val()] = $("#searchInput").val();
		body.loginName = $("#loginName").text();
	    //body.branchName = $("#branchName").text();
	    //body.projectName = $("#projectName").text();
	    //body.bizUnitName = $("#bizUnitName").text();
	    //body.officeName = $("#officeName").text();
	    //body.salesman_id = $("#salerName").text();
	    //body.customerName = $("#customerName").text();
	    //body.modelName = $("#modelName").text().replace(/\+/g,'%2B');//机型
	    //body.storeName = $("#storeName").text();
		body.date = $("#selDay").val();
		body.cycleType = $("#cycleType").val();
		body.orderLogic = $("#orderLogic").val();
		return body;
	}
	
}
//yue update 20190621
/**
 * 设置当前纬度
 */
function setCurrentLatitudeText(){
	var text = "";
	var branchName = $("#branchName").text();
	if(null != branchName && "" != branchName){
		branchName = branchName.substring(11,branchName.length);
		text += branchName;
	}
	if (branchName == "太力总部") {
		return;
	}

	var officeName = $("#officeName").text();
	if(null != officeName && "" != officeName){
		text += "-"+officeName;
	}
	var salerName = $("#salerName").text();
	if(null != salerName && "" != salerName){
		text += "-"+salerName;
		$.ajax({
			type : "POST",
			url : "/ptDataShow//salesAll/getSalerName",
			data : {"salesman_id":salerName},
			dataType : "json",
			success : function(data) {
				if(data && data.salerName != ""){
					text = text.replace(salerName,data.salerName);
				}
				
				var customerName = $("#customerName").text();
				if(null != customerName && "" != customerName){
					text += "-"+customerName;
				}
				var storeName = $("#storeName").text();
				if(null != storeName && "" != storeName){
					text += "-"+storeName;
				}
				/*var bizUnitName = $("#bizUnitName").text();
				if(null != bizUnitName && "" != bizUnitName){
					text += "-"+bizUnitName;

				}
				var projectName = $("#projectName").text();
				if(null != projectName && "" != projectName){
					text += "-"+projectName;
				}


				var modelName = $("#modelName").text();
				if(null != modelName && "" != modelName){
					text += "-"+modelName;
				}*/
				$(".current").show();
				$("#currentText").html(text);
				$("#currentText").css("max-width",($(window).width() * 0.5 - 350) + "px");
				$("#currentText").css("font-size","17px");
				$("#currentText").attr("title",text);
			},
		});
	}else {
		var customerName = $("#customerName").text();
		if(null != customerName && "" != customerName){
			text += "-"+customerName;
		}
		var storeName = $("#storeName").text();
		if(null != storeName && "" != storeName){
			text += "-"+storeName;
		}
		/*var modelName = $("#modelName").text();
		if(null != modelName && "" != modelName){
			text += "-"+modelName;
		}
		var bizUnitName = $("#bizUnitName").text();
		if(null != bizUnitName && "" != bizUnitName){
			text += "-"+bizUnitName;

		}
		var projectName = $("#projectName").text();
		if(null != projectName && "" != projectName){
			text += "-"+projectName;
		}*/

		$(".current").show();
		$("#currentText").html(text);
		$("#currentText").css("max-width",($(window).width() * 0.5 - 350) + "px");
		$("#currentText").css("font-size","17px");
		$("#currentText").attr("title",text);
	}
}
/**
 * 导出数据：根据传入的列名（columns）和传入的数据（data）导出
 */
function downExcel(data1,data2,title){
    var content = [];
    var columns1 = [{"display":"订单取数逻辑","name":"order"},
        {"display":"日期类型","name":"dateType"},
        {"display":"事业部","name":"dept"},
        {"display":"项目","name":"project"},
        {"display":"机型","name":"model"},
        {"display":"颜色","name":"color"}];
    //表头
    for (var i in columns1){
        if(columns1[i].display != "操作"){
            if(i < columns1.length-1){
                content.push(columns1[i].display+',');
            }else{
                content.push(columns1[i].display+'\r');
            }
        }
    }
    //表体
    for(var i in data1){
        var row = data1[i];
        for(var j in columns1){
            if(columns1[j].display != "操作"){
                var name = getValue(row[columns1[j].name]);
                if(null != name && typeof name == 'string'){
                    name = name.replace(/,/g,"，");
                }
                if(j < columns1.length-1){
                    content.push(name+',');
                }else{
                    content.push(name+'\r');
                }
            }
        }
    }
    content.push('\r');

    var columns2 = [{"display":"日期","name":"date"},
        {"display":"销量","name":"saleCount"},
        {"display":"销售额","name":"saleAmt"},
        {"display":"","name":""},{"display":"","name":""},{"display":"","name":""}];
    //表头
    for (var i in columns2){
        if(columns2[i].display != "操作"){
            if(i < columns2.length-1){
                content.push(columns2[i].display+',');
            }else{
                content.push(columns2[i].display+'\r');
            }
        }
    }
    //表体
    for(var i in data2){
        var row = data2[i];
        for(var j in columns2){
            if(columns2[j].display != "操作"){
                var name = getValue(row[columns2[j].name]);
                if(null != name && typeof name == 'string'){
                    name = name.replace(/,/g,"，");
                }
                if(j < columns2.length-1){
                    content.push(name+',');
                }else{
                    content.push(name+'\r');
                }
            }
        }
    }
    exportExl(content,getValue(title)==""?$(document).attr("title"):title)
}

/**
 * 字符串处理函数
 * @param str
 * @returns
 */
function getValue(str){
    if(typeof str == "undefined" || null == str || str == "null" || str == "" || typeof str == "object"){
        return "";
    }else{
        return trim(str);
    }
}

/**
 * 去前后空格
 * @param {*} str
 */
function trim(str){
    if(typeof str != "undefined" && str != null && typeof str == "string"){
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }else{
        return "";
    }
}
