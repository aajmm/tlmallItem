//首次加载该js 清除sessionStorage
if(getParam("a")=="1" || getParam("firstFlag")=="true"){
	sessionStorage.clear();
}

function initTags(clickButten){
	
	var parms = {};
	
    var cycleType = $("#cycleType").val();
    var orderLogic = $("#orderLogic").val();
    
    var date=$("#selDay").val();
    var loginName=$("#loginName").text();
    
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
				if(rows[i].departmentId&&rows[i].department)
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
    
    var link = "/ptDataShow/salesAll/salesOverview";
    link += "?" + key + "=" + encodeURIComponent(value);
    link += "&type=" + type;
    link += "&filter_userId=" + loginName;
    link += '&encoder=' + encoder;
    link += '&date=' + $("#selDay").val(); 
    link += '&cycleType=' + cycleType;
    link += '&orderLogic=' + orderLogic; 
    if(key=='projectName')
    	link += '&drill=1';
    
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
		map.role = role+'项目';
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


//配置：折线图
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
	        sumValReach.push(((datas[1].data[j].value)/10000));
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
            left: 30,
            right: 30,
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
            right: 90,
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