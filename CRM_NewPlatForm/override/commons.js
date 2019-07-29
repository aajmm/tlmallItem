/**
 * Created by yunlong.xiao on 2018/4/16.
 */

/**
 * 首次加载该js 清除sessionStorage
 * 2018-2-27 14:47 添加
 *  author zxk
 */
if(getParam("a")=="1" || getParam("firstFlag")=="true"){
    sessionStorage.clear();
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
        if($("#drill").text() == "oneProject") {
            map.role = role+'单项目';
            map.roleCode = roleCode+'oneProject';
        }if($("#drill").text() == "oneModel") {
            map.role = role+'单产品';
            map.roleCode = roleCode+'oneModel';
        }else if($("#drill").text() == "moreProject"){
            map.role = role+'多项目';
            map.roleCode = roleCode+'moreProject';
        }else if($("#drill").text() == "oneCust"){
            map.role = role+'单客户';
            map.roleCode = roleCode+'oneCust';
        }else if($("#drill").text() == "oneStore"){
            map.role = role+'单门店';
            map.roleCode = roleCode+'oneStore';
        }else if($("#drill").text() == "bizUnit") {
            if("全国事业部" == role){
                map.role = role;
            }else{
                map.role = role + '事业部';
            }
            map.roleCode = roleCode + 'bizUnit';
        }
    }else{
        map.role = role;
        map.roleCode = roleCode;
    }

    map.url = changeURLPar(map.url, "date", $("#selDay").val());
    // map.url = changeURLPar(map.url, "orderLogic", $("#orderLogic").val());//TODO
    // map.url = changeURLPar(map.url, "cycleType", $("#cycleType").val());

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
        
        if(session.url.indexOf("isYear") < 0){
        	var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }
            session.url = session.url+"&isYear="+isYear;
        }
        
        if(i==0)
            $(".breadcrumb").html('<li><a href="'+session.url+'">'+session.role+'</a></li>');
        else
            $(".breadcrumb").append('<li><a href="'+session.url+'">'+session.role+'</a></li>');
    }
}

/**
 * 从新拼接年度参数
 */
function repeatBreadcrumb(){
	$(".breadcrumb li").each(function(){
		var url = $(this).find("a").attr("href");
        	var isYear = '0';
            if ($("#planTypeSelect").val() == 'month') {
                isYear = '0';
            } else if ($("#planTypeSelect").val() == 'year') {
                isYear = '1';
            }
        if(url.indexOf("isYear") < 0){
            url = url+"&isYear="+isYear;
        }else{
        	url = url.replace(/&isYear=1/g,"&isYear="+isYear);
        	url = url.replace(/&isYear=0/g,"&isYear="+isYear);
        }
		$(this).find("a").attr("href",url);
	})
}

//达成率字段后面添加%号
function addPercentSigns(response) {
    if(response != null){
        var responseKeys = Object.keys(response);
        for(var responseKey in responseKeys){
            if(responseKeys[responseKey] == "rank"){
                if(response.rank.value != null){
                    //当前数据
                    var keys = Object.keys(response.rank.value);
                    for(var key in keys){
                        if(keys[key].indexOf("Rate") != -1){
                            response.rank.value[keys[key]] += "%";
                        }
                    }

                    //销量数据
                    for(var i in response.rank.qtyRankDatas){
                        if(response.rank.qtyRankDatas[i] != null){
                            keys = Object.keys(response.rank.qtyRankDatas[i]);
                            for(var key in keys){
                                if(keys[key].indexOf("Rate") != -1){
                                    response.rank.qtyRankDatas[i][keys[key]] += "%";
                                }
                            }
                        }
                    }

                    //销售额数据
                    for(var i in response.rank.amtRankDatas){
                        if(response.rank.amtRankDatas[i] != null){
                            keys = Object.keys(response.rank.amtRankDatas[i]);
                            for(var key in keys){
                                if(keys[key].indexOf("Rate") != -1){
                                    response.rank.amtRankDatas[i][keys[key]] += "%";
                                }
                            }
                        }
                    }
                }

            }else if(responseKeys[responseKey] == "ranks"){
                for(var j in response.ranks){
                    if(response.ranks[j].value != null){
                        //当前数据
                        var keys = Object.keys(response.ranks[j].value);
                        for(var key in keys){
                            if(keys[key].indexOf("Rate") != -1){
                                response.ranks[j].value[keys[key]] += "%";
                            }
                        }

                        //销量数据
                        for(var i in response.ranks[j].qtyRankDatas){
                            if(response.ranks[j].qtyRankDatas[i] != null){
                                keys = Object.keys(response.ranks[j].qtyRankDatas[i]);
                                for(var key in keys){
                                    if(keys[key].indexOf("Rate") != -1){
                                        response.ranks[j].qtyRankDatas[i][keys[key]] += "%";
                                    }
                                }
                            }
                        }

                        //销售额数据
                        for(var i in response.ranks[j].amtRankDatas){
                            if(response.ranks[j].amtRankDatas[i] != null){
                                keys = Object.keys(response.ranks[j].amtRankDatas[i]);
                                for(var key in keys){
                                    if(keys[key].indexOf("Rate") != -1){
                                        response.ranks[j].amtRankDatas[i][keys[key]] += "%";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return response;
}

/**
 * 导出明细数据
 */
function exportDetailDatas(){
	//导出
    $(".detailDatas a.export").unbind("click").click(function(){
	   var columns = [];
	   
	   var thead_th = $(this).siblings(".content").find("table thead tr th");
	   var name = "name";
	   for(var i=0;i<thead_th.length;i++){
		   var thObj = {"display":$(thead_th[i]).text(),"name":name+i};
		   columns.push(thObj);
	   }
		var exportList = [];
		
		$(this).siblings(".content").find("table tbody tr").each(function(j,trObj){
			var obj = {};
			$(trObj).find("td").each(function(m,tdObj){
				obj[columns[m][name]] = $(tdObj).text();
			})
			exportList.push(obj);
		})
		var title = $(this).siblings(".title").text();
		downExcel(columns,exportList,title);
    })
}


/**
 * 导出数据：根据传入的列名（columns）和传入的数据（data）导出
 */
function downExcel(columns,data,title){
	var content = [];
	//表头
	for (var i in columns){
		if(columns[i].display != "操作"){
			if(i < columns.length-1){
				content.push(columns[i].display+',');
			}else{
				content.push(columns[i].display+'\r');
			}
		}
	}
	//表体
	for(var i in data){
		var row = data[i];
		for(var j in columns){
			if(columns[j].display != "操作"){
				var name = "";
				if(columns[j].name == "week" || columns[j].name == "month"){
					name = row[columns[j].name];
				}else{
					name = getValue(row[columns[j].name]);
				}
				if(null != name && typeof name == 'string'){
					name = name.replace(/,/g,"，");
				}
				if(j < columns.length-1){
					content.push(name+',');
				}else{
					content.push(name+'\r');
				}
			}
		}
	}
	
	var blob = new Blob(content, {type: "text/plain;charset=utf-8"});
	saveAs(blob, (getValue(title)==""?$(document).attr("title"):title) + ".csv");
}


/**
 * 2019/1/23 添加 千分位过滤
 * @param num
 * @param flag
 * @returns {String}
 */
function toQfw(num,flag) {
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
//2019/05/28 yue 同步pc端代码
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
//		var branchName = $("#branchName").text();
//	    var projectName = $("#projectName").text();
//	    var bizUnitName = $("#bizUnitName").text();
//	    var officeName = $("#officeName").text();
//	    var salerName = $("#salerName").text();
//	    var custName = $("#custName").text();
//	    var storeName = $("#storeName").text();
//	    var modelName = $("#modelName").text();
		var body = {};
		body[$("#selectSearch").val()] = $("#searchInput").val();
		body.loginName = $("#loginName").text();
//		body.branchName=branchName;
//		body.projectName=projectName;
//		body.bizUnitName=bizUnitName;
//		body.officeName=officeName;
//		body.salerName=salerName;
//		body.custName=custName;
//		body.storeName=storeName;
//		body.modelName=modelName;
		body.date = $("#selDay").val();
		// 年计划或月计划
		var isYear = '0';
		if ($("#planTypeSelect").val() == 'month') {
			isYear = '0';
		} else if ($("#planTypeSelect").val() == 'year') {
			isYear = '1';
		}
		body.isYear = isYear;
		return body;
	}
	
}
$(function(){
  $("#selectSearch").on("change",function(){
		$("#searchInput").val("");
	})
	if($('#searchInput').length>0){
		setAutocomplete("/ptDataShow/salesPlan/getSearchData",function(suggestions){
	    	var selectType = $("#selectSearch").val();
	    	if(suggestions){
    			var suggObj = JSON.parse(suggestions.data);
    			var link = "";
		    	if("salesmanName" == selectType){
		    		link = getLinkForSearch("07",suggObj.salerName,"","","");
		    	}else if("cName" == selectType){
		    		link = getLinkForSearch("08",suggObj.salerName,suggObj.customerName,"","oneCust");
		    	}else if("sName" == selectType){
		    		link = getLinkForSearch("08",suggObj.salerName,"",suggObj.storeName,"oneStore");
		    	}
		    	window.location.href = link;
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
});
function getLinkNew(type,key,value,drill1){
	if(!type) {
		return '#';
	}
	// 年计划或月计划
    var isYear = '0';
    if ($("#planTypeSelect").val() == 'month') {
        isYear = '0';
    } else if ($("#planTypeSelect").val() == 'year') {
        isYear = '1';
    }
    var loginName = $("#loginName").text();
    var encoder = $("#encoder").text();
    var date = $("#selDay").val();
    
    var branchName = $("#branchName").text();
    var projectName = $("#projectName").text();
    var bizUnitName = $("#bizUnitName").text();
    var officeName = $("#officeName").text();
    var salerName = $("#salerName").text();
    var custName = $("#custName").text();
    var storeName = $("#storeName").text();
    var modelName = $("#modelName").text();
    var drill = $("#drill").text();
    var link = '/ptDataShow/salesPlan/salesOverview?type='+type
	+'&isYear='+ encodeURIComponent(isYear) 
	+"&filter_userId="  + encodeURIComponent(loginName) 
	+ '&encoder='  + encodeURIComponent(encoder) 
	+ '&date=' + encodeURIComponent(date) 
	+ "&" + key + "=" + encodeURIComponent(value);
    if(branchName && key!='branchName')
    	link += '&branchName=' + encodeURIComponent(branchName);
    if(projectName && key!='projectName')
    	link += '&projectName=' + encodeURIComponent(projectName);
    if(bizUnitName && key!='bizUnitName')
    	link += '&bizUnitName=' + encodeURIComponent(bizUnitName);
    if(officeName && key!='officeName')
    	link += '&officeName=' + encodeURIComponent(officeName);
    if(salerName && key!='salerName')
    	link += '&salerName=' + encodeURIComponent(salerName);
    if(custName && key!='custName')
    	link += '&custName=' + encodeURIComponent(custName);
    if(storeName && key!='storeName')
    	link += '&storeName=' + encodeURIComponent(storeName);
    if(modelName && key!='modelName')
    	link += '&modelName=' + encodeURIComponent(modelName);
    if (drill1) {
    	link += "&drill=" + drill1;
    }else {
    	link += "&drill=" + drill;
    }
    return link;
}
function getLink(type,salerName1,custName1,storeName1,drill1){
	if(!type) {
		return '#';
	}
	// 年计划或月计划
    var isYear = '0';
    if ($("#planTypeSelect").val() == 'month') {
        isYear = '0';
    } else if ($("#planTypeSelect").val() == 'year') {
        isYear = '1';
    }
    var loginName = $("#loginName").text();
    var encoder = $("#encoder").text();
    var date = $("#selDay").val();
    var branchName = $("#branchName").text();
    var projectName = $("#projectName").text();
    var bizUnitName = $("#bizUnitName").text();
    var officeName = $("#officeName").text();
    var salerName = $("#salerName").text();
    var custName = $("#custName").text();
    var storeName = $("#storeName").text();
    var modelName = $("#modelName").text();
    var drill = $("#drill").text();
    var link = '/ptDataShow/salesPlan/salesOverview?type='+type
    	+'&isYear='+ encodeURIComponent(isYear) 
    	+"&filter_userId="  + encodeURIComponent(loginName) 
    	+ '&encoder='  + encodeURIComponent(encoder) 
    	+ '&date=' + encodeURIComponent(date) 
    	+ '&branchName=' + encodeURIComponent(branchName) 
    	+ "&projectName=" +  encodeURIComponent(projectName) 
    	+ "&bizUnitName=" + encodeURIComponent(bizUnitName)
    	+ "&officeName=" + encodeURIComponent(officeName);
    	if (salerName) {
    		link+='&salerName='+ encodeURIComponent(salerName); 
    	}
	    if (!salerName && salerName1) {
	    	link+='&salerName='+ encodeURIComponent(salerName1); 
	    }
	    if (custName) {
	    	link+='&custName='+ encodeURIComponent(custName); 
	    }
	    if (!custName && custName1) {
	    	link+='&custName='+ encodeURIComponent(custName1); 
	    }
	    if (storeName) {
	    	link+='&storeName='+ encodeURIComponent(storeName); 
	    }
	    if (!storeName && storeName1) {
	    	link+='&storeName='+ encodeURIComponent(storeName1);
	    }
	    link+= "&modelName="  + encodeURIComponent(modelName);
    	if (drill) {
    		link+= "&drill=" + drill;
    	}
    	if (!drill && drill1) {
    		link+= "&drill=" + drill1;
    	}
    return link;
}
function getLinkForSearch(type,salerName1,custName1,storeName1,drill1){
	if(!type) {
		return '#';
	}
	// 年计划或月计划
	var isYear = '0';
	if ($("#planTypeSelect").val() == 'month') {
		isYear = '0';
	} else if ($("#planTypeSelect").val() == 'year') {
		isYear = '1';
	}
	var loginName = $("#loginName").text();
	var encoder = $("#encoder").text();
	var date = $("#selDay").val();
	var drill = $("#drill").text();
	var link = '/ptDataShow/salesPlan/salesOverview?type='+type
	+'&isYear='+ encodeURIComponent(isYear) 
	+"&filter_userId="  + encodeURIComponent(loginName) 
	+ '&encoder='  + encodeURIComponent(encoder) 
	+ '&date=' + encodeURIComponent(date) 
	if (salerName1) {
		link+='&salerName='+ encodeURIComponent(salerName1); 
	}
	if (custName1) {
		link+='&custName='+ encodeURIComponent(custName1); 
	}
	if (storeName1) {
		link+='&storeName='+ encodeURIComponent(storeName1);
	}
	if (drill1) {
		link+= "&drill=" + drill1;
	}
	return link;
}
function getYearDayCount(t) {//t 代表指定的参数
    if (t==null)
    {
        var Year = new Date().getFullYear(), s = 0, d;//获取当前年
        for (var i = 1; i < 13; i++) {
            d = new Date(Year, i, 0);//获取某一个月的天数
            s += d.getDate();
        };
        return s;
	} else if(t >= 1970) {
	        var Year = new Date().getFullYear(), s = 0, d;
	        for (var i = 1; i < 13; i++) {
	            d = new Date(t, i, 0);
	            s += d.getDate();
	        };
	        return s;
	} else {
	    return "365";
	} 
}


