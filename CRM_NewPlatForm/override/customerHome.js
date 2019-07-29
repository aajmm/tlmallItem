// 该JS中的地图相关的代码全部废弃.

var myPosition = $("#position").val();
var branchname = $("#branchname").val();
var configType = $("#configType").val();

var capitals = {
	'长春分公司' : '吉林',
	'长沙分公司' : '湖南',
	'西安分公司' : '陕西',
	'天津分公司' : '天津',
	//'南宁分公司' : '海南',
	'杭州太力' : '浙江',
	'合肥分公司' : '安徽',
	'北京分公司' : '北京',
	'厦门分公司' : '福建',
	'成都分公司' : '四川',
	'广州分公司' : '广东',
	'贵阳分公司' : '贵州',
	'哈尔滨分公司' : '黑龙江',
	'内蒙古分公司' : '内蒙古',
	'济南分公司' : '山东',
	'沈阳分公司' : '辽宁',
	'南昌分公司' : '江西',
	'南宁分公司' : '广西',
	'昆明分公司' : '云南',
	'兰州分公司' : '甘肃',
	'武汉分公司' : '湖北',
	//'上海普天' : '上海',
    '上海分公司' : '上海',
	'石家庄分公司' : '河北',
	'新疆分公司' : '新疆',
	'南京分公司' : '江苏',
	//'兰州分公司' : '宁夏',
	'郑州分公司' : '河南',
	//'兰州分公司' : '青海',
	'太原分公司' : '山西',
	'重庆分公司' : '重庆'
	//'成都分公司' : '西藏'
};


var provinceToBranchName = {
	"吉林省" : "长春分公司",
	"湖南省" : "长沙分公司",
	"陕西省" : "西安分公司",
	"天津市" : "天津分公司",
	"海南省" : "南宁分公司",
	"浙江省" : "杭州太力",
	"安徽省" : "合肥分公司",
	"北京市" : "北京分公司",
	"福建省" : "厦门分公司",
	"四川省" : "成都分公司",
	"广东省" : "广州分公司",
	"贵州省" : "贵阳分公司",
	"黑龙江省" : "哈尔滨分公司",
	"内蒙古自治区" : "内蒙古分公司",
	"山东省" : "济南分公司",
	"辽宁省" : "沈阳分公司",
	"江西省" : "南昌分公司",
	"广西壮族自治区" : "南宁分公司",
	"云南省" : "昆明分公司",
	"西藏自治区" : "成都分公司",
	"甘肃省" : "兰州分公司",
	"湖北省" : "武汉分公司",
	//"上海市" : "上海普天",
    "上海市" : "上海分公司",
	"河北省" : "石家庄分公司",
	"新疆维吾尔自治区" : "新疆分公司",
	"江苏省" : "南京分公司",
	"宁夏回族自治区" : "兰州分公司",
	"河南省" : "郑州分公司",
	"青海省" : "兰州分公司",
	"山西省" : "太原分公司",
	"重庆市" : "重庆分公司",
	"吉林" : "长春分公司",
	"湖南" : "长沙分公司",
	"陕西" : "西安分公司",
	"天津" : "天津分公司",
	"海南" : "南宁分公司",
	"浙江" : "杭州太力",
	"安徽" : "合肥分公司",
	"北京" : "北京分公司",
	"福建" : "厦门分公司",
	"四川" : "成都分公司",
	"广东" : "广州分公司",
	"贵州" : "贵阳分公司",
	"黑龙江" : "哈尔滨分公司",
	"内蒙古" : "内蒙古分公司",
	"山东" : "济南分公司",
	"辽宁" : "沈阳分公司",
	"江西" : "南昌分公司",
	"广西" : "南宁分公司",
	"云南" : "昆明分公司",
	"甘肃" : "兰州分公司",
	"湖北" : "武汉分公司",
	//"上海" : "上海普天",
    "上海" : "上海分公司",
	"河北" : "石家庄分公司",
	"新疆" : "新疆分公司",
	"江苏" : "南京分公司",
	"宁夏" : "兰州分公司",
	"河南" : "郑州分公司",
	"青海" : "兰州分公司",
	"山西" : "太原分公司",
	"重庆" : "重庆分公司",
	'西藏' : '成都分公司'
};

var officeLocation = {
	'都匀市' : '黔南布依族苗族自治州'
};

var locationOffice = {
	'黔南布依族苗族自治州' : '都匀市'
};


var position = {};
position.LEADER = '总部领导';
position.BIZ_GENERAL_MANAGER = '事业部总经理';
position.BRANCH = '分公司分总';
position.PRODUCT_MANAGER = '产品经理';
position.BRAND_MANAGER = '品牌经理';
position.OFFICE_MAN = '办事处主任';
position.SALES_MAN = '销售代表';

// 地图 Deprecated
function ajaxData_1004() {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = 1004;
	if (myPosition != position.LEADER && myPosition != position.BIZ_GENERAL_MANAGER && myPosition != position.PRODUCT_MANAGER)
		parms.interfaceId = 1023;

	// delete parms.month;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var customerByBranch = data.Rows;
			ajaxData_cc(customerByBranch);

		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

// deprecated
function ajaxData_cc(customerByBranch) {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = 1005;
	if (myPosition != position.LEADER && myPosition != position.BIZ_GENERAL_MANAGER && myPosition != position.PRODUCT_MANAGER)
		parms.interfaceId = 1024;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var stroeByBranch = data.Rows;
			echartsMap(customerByBranch, stroeByBranch);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	})

}

//获取地图数据最大值 deprecated
function getMaxValue(data) {
	console.log(data);
	var vals = [], MaxValue = 0;

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

// deprecated
function numToShow(num) {
	var visualMaxUnit = '', oMax = 0, arr = [];
	var numStr = num.toString();
	var numLen = numStr.length;
	var tempNum = numStr.substring(0, 1);

	numStr = tempNum * Math.pow(10, (numLen - 1));
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



// 替换掉这儿来实现钻取    deprecated
// 地图显示
function echartsMap(customerByBranch, stroeByBranch) {
	var customerList = [];
	var customerData = [];
	var customers = [];
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER || myPosition == position.PRODUCT_MANAGER) {
		for ( var i in customerByBranch) {
			var row = {};
			var row1 = {};
			row.name = customerByBranch[i].branchname;
			row.value = '拜访客户数量：' + customerByBranch[i].cusNum
					+ '<br>拜访门店数量：0';
			row1.name = customerByBranch[i].branchname;
			row1.value = customerByBranch[i].cusNum;
			customers.push(customerByBranch[i].branchname);
			for ( var j in stroeByBranch) {
				if (customerByBranch[i].branchname == stroeByBranch[j].branchname) {
					row.name = customerByBranch[i].branchname;
					row.value = '拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：' + stroeByBranch[j].stroeNum;
				}/* else {
					row.name = customerByBranch[i].branchname;
					row.value = '拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：0';
				}*/
				
			}
			customerData.push(row1);
			customerList.push(row);
		}
		// 补齐
		for ( var i in stroeByBranch) {
			if (customers.indexOf(stroeByBranch[i].branchname) < 0) {
				var row = {};
				var row1 = {};
				row.name = stroeByBranch[i].branchname;
				row.value = '拜访客户数量：0' + '<br>拜访门店数量：'
						+ stroeByBranch[i].stroeNum;
				row1.name = stroeByBranch[i].branchname;
				row1.value = 0;
				customerList.push(row);
				customerData.push(row1);
			}
		}
	} else {
		for ( var i in customerByBranch) {
			var row = {};
			var row1 = {};
			row.name = customerByBranch[i].branchname;
			row.value = '拜访客户数量：' + customerByBranch[i].cusNum
					+ '<br>拜访门店数量：0';
			row1.name = customerByBranch[i].branchname;
			row1.value = customerByBranch[i].cusNum;
			customers.push(customerByBranch[i].officename);
			for ( var j in stroeByBranch) {
				if (customerByBranch[i].officename == stroeByBranch[j].officename) {
					row.name = customerByBranch[i].officename;
					row.value = '拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：' + stroeByBranch[j].stroeNum;
				}/* else {
					row.name = customerByBranch[i].officename;
					row.value = '拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：0';
				}*/
			}

			customerList.push(row);
			row1.name = customerByBranch[i].officename;
			row1.value = customerByBranch[i].cusNum;
			customerData.push(row1);
		}
		// 补齐
		for ( var i in stroeByBranch) {
			if (customers.indexOf(stroeByBranch[i].officename) < 0) {
				var row = {};
				var row1 = {};
				row.name = stroeByBranch[i].officename;
				row.value = '拜访客户数量：0' + '<br>拜访门店数量：'
						+ stroeByBranch[i].stroeNum;
				customerList.push(row);
				
				row1.name = stroeByBranch[i].officename;
				row1.value = 0;
				customerData.push(row1);
			}
		}
	}
	

	var mapType = 'china';
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER)
		mapType = 'china';
	else if ((myPosition == position.BRANCH || myPosition == position.BRAND_MANAGER) && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	} else if (myPosition == position.OFFICE_MAN && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	} else if (myPosition == position.SALES_MAN && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	}
	

	
//	通过分公司，转换成相应省份
	var customarDataAll = [];
	for ( var i in customerData) {

		// 如果是分公司 PTTL_OU
		var tmpName = customerData[i].name;
		if(tmpName.indexOf("PTTL_OU") >=0) {
			var branchName = customerData[i].name.substr(11,customerData[i].name.length - 1);
			if('兰州分公司' == branchName) {
				customarDataAll.push({
					name: '宁夏',
					value:customerData[i].value
				});
				customarDataAll.push({
					name: '青海',
					value:customerData[i].value
				});
				customarDataAll.push({
					name: '甘肃',
					value:customerData[i].value
				});
			} else if('南宁分公司' == branchName) {
				customarDataAll.push({
					name: '广西',
					value:customerData[i].value
				});
				customarDataAll.push({
					name: '海南',
					value:customerData[i].value
				});
			} else if('成都分公司' == branchName) {
				customarDataAll.push({
					name: '四川',
					value:customerData[i].value
				});
				customarDataAll.push({
					name: '西藏',
					value:customerData[i].value
				});
			} else {
				customarDataAll.push({
					name: capitals[branchName],
					value:customerData[i].value
				});
			}
		} else {



			var customarDataAll_name = customerData[i].name.replace('办事处','')+'市';

			if(customerData[i].name.indexOf('办事处') > 0){
				if(officeLocation[customarDataAll_name]!=null){
					customarDataAll_name = officeLocation[customarDataAll_name];
				}
			}

			customarDataAll.push({
				name: customarDataAll_name,
				value:customerData[i].value
			});
		}

/*		var customarDataAll_name = customerData[i].name.substr(11,customerData[i].name.length - 1);
		if(!customarDataAll_name)
			customarDataAll_name = customerData[i].name.replace('办事处','')+'市';
		customarDataAll[i] = {
			name:capitals[customarDataAll_name]?capitals[customarDataAll_name]:customarDataAll_name,
			value:customerData[i].value
		}*/
	}
	console.log(customarDataAll);

	
	var storeNum = getMaxValue(customarDataAll);
	var visual = numToShow(storeNum);
	
    $("#mapChart").next(".u-visualmap").remove();
	$("#mapChart").parent().append('<div class="u-visualmap"><div class="max">'+visual[1]+'</div>' +
	'<div class="min">0</div><h6>拜访客户数量</h6></div>');
	
	var t = echarts.init(document.getElementById("mapChart")), n = {
		tooltip : {
			trigger : 'item',
			padding: 0,
			borderColor: 'rgba(0,0,0,0)',
			backgroundColor: 'rgba(0,0,0,0)',
			formatter : function(param) {
				var res = customerList;
				if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER) {
					for ( var i in customerList) {
						var key = customerList[i].name.substr(11,customerList[i].name.length - 1);
						if(key == '兰州分公司' && (param.name == '宁夏' || param.name == '青海' || param.name == '甘肃')) {
							var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + provinceToBranchName[param.name] + '</div>' +
								'<div class="u-content"><div>'+customerList[i].value+'</div></div>';
							return tip;
						} else if(key == '南宁分公司' && (param.name == '广西' || param.name == '海南')){
							var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + provinceToBranchName[param.name] + '</div>' +
								'<div class="u-content"><div>'+customerList[i].value+'</div></div>';
							return tip;
						} else if (key == '成都分公司' && (param.name == '四川' || param.name == '西藏')){
							var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + provinceToBranchName[param.name] + '</div>' +
								'<div class="u-content"><div>'+customerList[i].value+'</div></div>';
							return tip;
						} else  if (param.name == capitals[key]) {
							var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + provinceToBranchName[param.name] + '</div>' +
							'<div class="u-content"><div>'+customerList[i].value+'</div></div>';
							return tip;
						}
					}
//					return provinceToBranchName[param.name]
//							+ '<br>拜访客户数量：0<br>拜访门店数量：0';
					var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + provinceToBranchName[param.name] + '</div>' +
					'<div class="u-content"><div><h6>拜访客户数量</h6><b>0</b></div><div><h6>拜访门店数量</h6><b>0</b></div></div></div>';
				return tip;
				} else {
					for ( var i in customerList) {
						var key = customerList[i].name.replace('办事处', '');

						var location = param.name;  // 地区名称
						if(locationOffice[location]!=null){
							location = locationOffice[location];   // 把地区转换为办事处
						}

						if (location.replace('市', '') == key) {
							console.log(customerList[i].value);
//							return customerList[i].name + customerList[i].value;
							var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + customerList[i].name + '</div>' +
							'<div class="u-content"><div>'+customerList[i].value+'</div></div>';
							return tip;
						}
					}
//					return param.name + '<br>拜访客户数量：0<br>拜访门店数量：0';
					var tip = '<div class="m-tooltip m-tooltip2"><div class="u-title">' + param.name + '</div>' +
					'<div class="u-content"><div><h6>拜访客户数量</h6><b>0</b></div><div><h6>拜访门店数量</h6><b>0</b></div></div></div>';
				return tip;
				}

			}
		},
		dataRange : {
			splitNumber: 5, // 实际为5色块，maxOpen会自动加载一个模块，故4色块；
			min:0,
			max:visual[0],
			maxOpen: true,
			itemWidth: 25,
			itemHeight: 13,
			itemGap: 1,
			x: '8%',
			y: '75%',
			color: ['#116ed8', '#01aafa', '#50c8fa', '#78dcfa', '#aae6fa'],
			text: ['高', '低'],
			textStyle: {
				color: '#fff'
			}
		},
		series : [ {
			name : '拜访客户数量',
			type : 'map',
			mapType : mapType,
			roam : false,
			itemStyle: {
				normal:{
					label:{
						show: false
					},
					borderColor:'#b6b6b6',
	                borderWidth:1,
	                areaStyle:{
	                    color: '#eee'
	                }
				},
				emphasis: {
					label:{
						show: true,
    					textStyle: {
    						color: '#333'
    					}
					},
					borderWidth: 2,
					borderColor: '#b8b8b8',
					areaStyle:{
	                    color: ''
	                }
				}
			},
			data : customarDataAll
		} ]
	};
	t.setOption(n), window.onresize = t.resize;
}

// 月度客户拜访趋势图

function areaMap(rows) {
	var mydata = [];
	var interval = [];
	rows.sort(function(row1,row2){
		return parseInt(row1.day.replace('-', '').replace('-', '')) - parseInt(row2.day.replace('-', '').replace('-', ''));
	});
	for ( var j in rows) {
		mydata.push(rows[j].signNum);
		interval.push(rows[j].day);
	}

	var a = echarts.init(document.getElementById("chart_a")), option_a = {
		color:["#2c81ff"],
		tooltip : {
			trigger : 'axis',
			formatter:function(params){
				return params[0].name+"<br/>累计拜访客户次数："+params[0].value;
			}
		},
		calculable : true,
		grid : {
			x : '10%',
			y : '10%',
			x2: '10%',
			y2: '20%'
		},
		xAxis : [ {
			type : 'category',
			boundaryGap: false,
            axisLine:{
            	show:false
            },
            axisLabel:{
            	textStyle:{
            		color:"#666"
            	}
            },
            splitLine:{
             	show:false
             },
            axisTick:{
            	show:false
            },
			//data : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月','10月', '11月', '12月' ]
			data: interval
		} ],
		yAxis : [ {
			type : 'value',
			axisLine:{
            	show:false
            },
            axisLabel:{
            	textStyle:{
            		color:"#666"
            	}
            },
            splitLine:{
            	lineStyle:{
            		color:"#dfdfdf"
            	}
            },
            axisTick:{
            	show:false
            }
		} ],
		series : [ {
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					lineStyle:{
						color:"#2c81ff"
					},
					areaStyle : {
						color:"rgba(44,129,255,.2)"
					}
				}
			},
			markLine : {
				symbol: ['none', 'none'],
				itemStyle:{
					normal:{
						lineStyle:{
							color:"#ed9429"
						},
						label:{
							textStyle:{
								color:"#ed9429"
							}
						}
					}
				},
				data : [ {
					type : 'average',
					name : '平均值'
				} ]
			},
			data : mydata
		} ]
	};
	a.setOption(option_a), $(window).resize(a.resize);
}

// 月度门店拜访趋势图

function storeMap(rows) {
	var mydata = [];
	var interval = [];
	rows.sort(function(row1,row2){
		return parseInt(row1.day.replace('-', '').replace('-', '')) - parseInt(row2.day.replace('-', '').replace('-', ''));
	});
	for ( var j in rows) {
		mydata.push(rows[j].signNum);
		interval.push(rows[j].day);
	}

	var b = echarts.init(document.getElementById("chart_b")), option_b = {
		color:["#3bc5cf"],
		tooltip : {
			trigger : 'axis',
			formatter:function(params){
				return params[0].name+"<br/>累计拜访客户次数："+params[0].value;
			}
		},
		calculable : true,
		grid : {
			x : '10%',
			y : '10%',
			x2: '10%',
			y2: '20%'
		},
		xAxis : [ {
			type : 'category',
			 boundaryGap: false,
             axisLine:{
             	show:false
             },
             axisLabel:{
             	textStyle:{
             		color:"#666"
             	}
             },
             splitLine:{
             	show:false
             },
             axisTick:{
             	show:false
             },
			 //data : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ]
			data: interval
		} ],
		yAxis : [ {
			type : 'value',
			axisLine:{
            	show:false
            },
            axisLabel:{
            	textStyle:{
            		color:"#666"
            	}
            },
            splitLine:{
            	lineStyle:{
            		color:"#dfdfdf"
            	}
            },
            axisTick:{
            	show:false
            }
		} ],
		series : [ {
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					lineStyle:{
						color:"#3bc5cf"
					},
					areaStyle : {
						color:"rgba(59,197,207,.2)"
					}
				}
			},
			markLine : {
				symbol: ['none', 'none'],
				itemStyle:{
					normal:{
						lineStyle:{
							color:"#ed9429"
						},
						label:{
							textStyle:{
								color:"#ed9429"
							}
						}
					}
				},
				data : [ {
					type : 'average',
					name : '平均值'
				} ]
			},
			data : mydata
		} ]
	};
	b.setOption(option_b), $(window).resize(b.resize);
}

// 客户拜访总览--总部
var branchname = [];
var cusNum = [];
var signNum = [];
var storeNum = [];
var cusSignNum = [];
var storeSignNum = [];


// 拜访首页底部的表格
function ajaxDate_visit_list() {

	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER) {
		var interfaces = [1031, 1015, 1032, 1016];
		ajaxData_visit_client_req(interfaces);
	}
	else if (myPosition == position.BRANCH|| myPosition == position.BRAND_MANAGER) {
		var interfaces = [1033, 1017, 1034, 1018];
		ajaxData_visit_client_req(interfaces);
	}
	else if (myPosition == position.OFFICE_MAN) {
		var interfaces = [1035, 1019, 1036, 1020];
		ajaxData_visit_client_req(interfaces);
	}
	else if (myPosition == position.SALES_MAN) {
		var interfaces = [1037, 1021, 1038, 1022];
		ajaxData_visit_client_req(interfaces);
	}
	else {
		window.console.log('输入角色失败！');
		return;
	}

}

// 获取客户拜访要求
function ajaxData_visit_client_req(interfaces) {

	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = interfaces[0];
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
			var rows = data.Rows;
            var clientReq = {};
            for(var i = 0; i < rows.length; i++) {
                var key = '';
                if (interfaces[0] == 1031) {
                    key = rows[i].branchname;  // 总部
                } else if (interfaces[0] == 1033) {
                    key = rows[i].officename; // 分公司
                } else if (interfaces[0] == 1035) {
                    key = rows[i].salername; // 办事处
                } else if (interfaces[0] == 1037) {
                    key = rows[i].customername; // 销售人员
                }
                var req = clientReq[key];
                if(req == undefined || req == null) {
                    req = 0;
                }
                clientReq[key] = req + rows[i].req;
            }
            ajaxData_visit_client_actual(interfaces, clientReq);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

// 获取本月客户实际拜访
function ajaxData_visit_client_actual(interfaces, clientReq) {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = interfaces[1];
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
			var rows = data.Rows;
            var clientActual = {};
            for(var i = 0; i < rows.length; i++) {
                var key = '';
                if (interfaces[1] == 1015) {
                    key = rows[i].branchname;  // 总部
                } else if (interfaces[1] == 1017) {
                    key = rows[i].officename; // 分公司
                } else if (interfaces[1] == 1019) {
                    key = rows[i].salername; // 办事处
                } else if (interfaces[1] == 1021) {
                    key = rows[i].customername; // 销售人员
                }
                var signNumByCus = clientActual[key];
                if(signNumByCus == undefined || signNumByCus == null) {
                    signNumByCus = 0;
                }
                clientActual[key] = signNumByCus + rows[i].signNumByCus;
            }
			ajaxData_visit_store_req(interfaces, clientReq, clientActual);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

// 获取门店拜访要求
function ajaxData_visit_store_req(interfaces, clientReq, clientActual) {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = interfaces[2];
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
            var rows = data.Rows;
            var storeReq = {};
            for(var i = 0; i < rows.length; i++) {
                var key = '';
                if (interfaces[2] == 1032) {
                    key = rows[i].branchname;  // 总部
                } else if (interfaces[2] == 1034) {
                    key = rows[i].officename; // 分公司
                } else if (interfaces[2] == 1036) {
                    key = rows[i].salername; // 办事处
                } else if (interfaces[2] == 1038) {
                    key = rows[i].storename; // 销售人员
                }
                var req = storeReq[key];
                if(req == undefined || req == null) {
                    req = 0;
                }
                storeReq[key] = req + rows[i].req;
            }
			ajaxData_visit_store_actual(interfaces, clientReq, clientActual, storeReq);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

// 获取门店实际拜访
function ajaxData_visit_store_actual(interfaces, clientReq, clientActual, storeReq) {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = interfaces[3];
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
			var rows = data.Rows;
            var storeActual = {};
            for(var i = 0; i < rows.length; i++) {
                var key = '';
                if (interfaces[3] == 1016) {
                    key = rows[i].branchname;  // 总部
                } else if (interfaces[3] == 1018) {
                    key = rows[i].officename; // 分公司
                } else if (interfaces[3] == 1020) {
                    key = rows[i].salername; // 办事处
                } else if (interfaces[3] == 1022) {
                    key = rows[i].storename; // 销售人员
                }
                var signNumByStore = storeActual[key];
                if(signNumByStore == undefined || signNumByStore == null) {
                    signNumByStore = 0;
                }
                storeActual[key] = signNumByStore + rows[i].signNumByStore;
            }
            buildVisitList(interfaces, clientReq, clientActual, storeReq, storeActual);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}


function buildVisitList(interfaces, clientReq, clientActual, storeReq, storeActual) {

    // 如果是销售人员需要构建个表格
    if(interfaces[0] == 1037) {

        var clients = $.unique($.merge(Object.keys(clientReq), Object.keys(clientActual)));
        clients = myUnique(clients);
        var stores = $.unique($.merge(Object.keys(storeReq), (Object.keys(storeActual))));
        stores = myUnique(stores);

		$("#tbody1").empty();
        for(var i = 0; i< clients.length ;i++) {
            var key = clients[i];
            var clientReqNum = clientReq[key];
            if (clientReqNum == undefined) {
                clientReqNum = 0;
            }
            var clientActualNum = clientActual[key];
            if (clientActualNum == undefined) {
                clientActualNum = 0;
            }
            var clientRateNum = 0.0;
            if (clientReqNum == 0) {
                if (clientActualNum == 0) {
                    clientRateNum = 0;
                } else {
                    clientRateNum = 1;
                }
            } else {
                clientRateNum = parseFloat(clientActualNum) / parseFloat(clientReqNum);
            }
            var html = '<tr><td><a href=\"#\">' + key + "</a></td><td>" + clientReqNum + "</td><td>" + clientActualNum + "</td><td>" + parseInt(clientRateNum*100)  + "%</td></tr>";
            $("#tbody1").append(html);
        }

		$("#tbody2").empty();
        for(var i = 0; i< stores.length ;i++) {
            var key = stores[i];
            var storeReqNum = storeReq[key];
            if (storeReqNum == undefined) {
                storeReqNum = 0;
            }
            var storeActualNum = storeActual[key];
            if (storeActualNum == undefined) {
                storeActualNum = 0;
            }
            var storeRateNum = 0.0;
            if (storeReqNum == 0) {
                if (storeActualNum == 0) {
                    storeRateNum = 0;
                } else {
                    storeRateNum = 1;
                }
            } else {
                storeRateNum = parseFloat(storeActualNum) / parseFloat(storeReqNum);
            }
            var html = '<tr><td><a href=\"#\">' + key + "</a></td><td>" + storeReqNum + "</td><td>" + storeActualNum + "</td><td>" + parseInt(storeRateNum*100)  + "%</td></tr>";
            $("#tbody2").append(html);
        }


    } else {
        // 合并4个集合的key
        var keys1 = $.merge(Object.keys(clientReq), Object.keys(clientActual));
        var keys2 = $.merge(Object.keys(storeReq), Object.keys(storeActual));

        var keys = $.unique($.merge(keys1, keys2));
		keys = myUnique(keys);

		$("#tbody1").empty();
        for(var i =0; i< keys.length;i++) {
            var key = keys[i];
            if(key == '') {
                continue;
            }
            var clientReqNum = clientReq[key];
            if (clientReqNum == undefined) {
                clientReqNum = 0;
            }
            var storeReqNum = storeReq[key];
            if (storeReqNum == undefined) {
                storeReqNum = 0;
            }
            var clientActualNum = clientActual[key];
            if (clientActualNum == undefined) {
                clientActualNum = 0;
            }
            var storeActualNum = storeActual[key];
            if (storeActualNum == undefined) {
                storeActualNum = 0;
            }
            var clientRateNum = 0.0;
            if (clientReqNum == 0) {
                if (clientActualNum == 0) {
                    clientRateNum = 0;
                } else {
                    clientRateNum = 1;
                }
            } else {
                clientRateNum = parseFloat(clientActualNum) / parseFloat(clientReqNum);
            }

            var storeRateNum = 0.0;
            if (storeReqNum == 0) {
                if (storeActualNum == 0) {
                    storeRateNum = 0;
                } else {
                    storeRateNum = 1;
                }
            } else {
                storeRateNum = parseFloat(storeActualNum) / parseFloat(storeReqNum);
            }
            var key2 = key;
            if(key.indexOf('_')>0) {
                key2 = key.substring(11);
            }

            // 生成下钻地址
			var link = '#';
            if(interfaces[0] == 1031) { // 钻取到分公司
                var branchName = key;  // key 是带上PTTL_的， key2是不带PTTL_
                var filter_userId = $("#filter_userId").text();
                var encoder = $("#encoder").text();
                var day = $("#day").val();
                link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder
                    + '&position=' + encodeURIComponent('分公司分总') + '&day=' + day;
			} else if(interfaces[0] == 1033) {  // 钻取到办事处
                var branchName = $("#branchname").val();
                var officename = key2;
                var filter_userId = $("#filter_userId").text();
                var encoder = $("#encoder").text();
                var day = $("#day").val();
                link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder
                    + '&position=' + encodeURIComponent('办事处主任') + '&officeName=' + encodeURIComponent(officename) + '&day=' + day;
			} else if(interfaces[0] == 1035) { // 钻取到业务人员
                var encoder = $("#encoder").text();
                var branchName = $("#branchname").val();
                var day = $("#day").val();
				var saleManId = key2;
                for(var k =0; k < outRows.length; k++) {
                	var row = outRows[k];
                	if(row.name == key2) {
                        saleManId = row.id;
                        break;
					}
				}
                link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder +
                    '&position=' + encodeURIComponent('销售代表') + '&salesmanid=' + encodeURIComponent(saleManId) + '&day=' + day;
			}
            var html = '<tr><td><a href=\"'+ link +'\">' + key2 + "</a></td><td>" + clientReqNum + "</td><td>" + clientActualNum + "</td><td>" + parseInt(clientRateNum*100) +
                "%</td><td>" + storeReqNum + "</td><td>" + storeActualNum +"</td><td>" + parseInt(storeRateNum*100) + "%</td></tr>";
            $("#tbody1").append(html);
        }
    }


}





// deprecated
function ajaxData_n() {
	var parms = $("#queryForm").serializeObject();
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER)
		parms.interfaceId = 1015;
	else if (myPosition == position.BRANCH|| myPosition == position.BRAND_MANAGER)
		parms.interfaceId = 1017;
	else if (myPosition == position.OFFICE_MAN)
		parms.interfaceId = 1019;
	else if (myPosition == position.SALES_MAN)
		parms.interfaceId = 1021;
	else{
		window.console.log('输入角色失败！');
		return;
	}
		

	// delete parms.month;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
			var cusRow = data.Rows;
			ajaxData_m(cusRow);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

// deprecated
function ajaxData_m(cusRow) {
	var key = '';
	var parms = $("#queryForm").serializeObject();
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER) {
		key = 'branchname';
		parms.interfaceId = 1016;
	} else if (myPosition == position.BRANCH|| myPosition == position.BRAND_MANAGER) {
		key = 'officename';
		parms.interfaceId = 1018;
	} else if (myPosition == position.OFFICE_MAN) {
		key = 'salername';
		parms.interfaceId = 1020;
	} else if (myPosition == position.SALES_MAN) {
		key = 'customername';
		parms.interfaceId = 1022;
	} else{
		window.console.log('输入角色失败！');
		return;
	}

	$.ajax({
				type : "POST",
				url : "/ptDataShow/echarts/postDataFromEs",
				data : parms,
				dataType : "json",
				success : function(data) {
					var storeRow = data.Rows;
					if (myPosition == position.SALES_MAN) {
						for ( var i in cusRow) {
							var html = '<div class="col-sm-4 problem" style="line-height:48px;">';
							html += '<div class="pull-left customer_name">'
									+ cusRow[i].customername + '</div>';
							html += '<div class="pull-left customer_tiv">';
							html += '<div class="col-xs-4 text-center"><span>拜访要求</span><h2 class="text1">'
									+ cusRow[i].requirementsByCus
									+ '</h2></div>';
							html += '<div class="col-xs-4 text-left"><span>拜访次数</span><h2 class="text2">'
									+ cusRow[i].signNumByCus + '</h2></div>';
							if(cusRow[i].requirementsByCus)
							    html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3">'
									+ Math.floor(100 * (cusRow[i].signNumByCus / cusRow[i].requirementsByCus))
									+ '%</h2></div>';
							else
								html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3"></h2></div>';
							html += '</div></div>';
							$("#myid").after(html);
						}
						for ( var i in storeRow) {
							var html = '<div class="col-sm-4 problem" style="line-height:48px;">';
							html += '<div class="pull-left customer_name">'
									+ storeRow[i].storename + '</div>';
							html += '<div class="pull-left customer_tiv">';
							html += '<div class="col-xs-4 text-center"><span>拜访要求</span><h2 class="text1">'
									+ storeRow[i].requirementsByStore
									+ '</h2></div>';
							html += '<div class="col-xs-4 text-left"><span>拜访次数</span><h2 class="text2">'
									+ storeRow[i].signNumByStore + '</h2></div>';
							if(storeRow[i].requirementsByStore)
							    html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3">'
									+ Math.floor(100 * (storeRow[i].signNumByStore / storeRow[i].requirementsByStore))
									+ '%</h2></div>';
							else
								html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3"></h2></div>';
							html += '</div></div>';
							$("#myid").after(html);
						}
					} else {
						var cusKeys = [];
						var rows = [];
						for ( var i in cusRow) {
							var row = cusRow[i];
							row.key = cusRow[i][key];
							row.storeNum = 0;
							row.signNumByStore = 0;
							row.requirementsByStore = 0;
							cusKeys.push(cusRow[i][key]);
							for ( var j in storeRow) {
								if (cusRow[i][key] == storeRow[j][key]) {
									row.storeNum = storeRow[j].storeNum;
									row.signNumByStore = storeRow[j].signNumByStore;
									row.requirementsByStore = storeRow[j].requirementsByStore;
									break;
								}
							}
							rows.push(row);
						}
						for ( var j in storeRow) {
							if (cusKeys.indexOf(storeRow[j][key]) == -1) {
								var row = storeRow[j];
								row.key = storeRow[j][key];
								row.userNum = 0;
								row.signNumByCus = 0;
								row.requirementsByCus = 0;
								rows.push(row);
							}
						}

						for ( var i in rows) {
							var row = rows[i];
							var html = "<tr>";
							html += "<td><a href='#'>"
									+ row[key]
											.replace(/[^\u4e00-\u9fa5]/gi, "")
									+ "</a></td>";
							html += "<td>" + row.requirementsByCus + "</td>";
							html += "<td>" + row.requirementsByStore + "</td>";
							html += "<td>" + row.signNumByCus + "</td>";
							html += "<td>" + row.signNumByStore + "</td>";
							if (row.requirementsByCus == 0)
								html += "<td></td>";
							else
								html += "<td>"+ Math.floor((row.signNumByCus / row.requirementsByCus) * 100)+ "%</td>";
							if (row.requirementsByStore == 0)
								html += "<td></td>";
							else
								html += "<td>"
										+ Math
												.floor((row.signNumByStore / row.requirementsByStore) * 100)
										+ "%</td>";
							html += "</tr>";
							if (i % 2 == 0) {
								$('.vis_left tbody').append(html);
							} else {
								$('.vis_right tbody').append(html);
							}
						}
					}
				},
				error : function(data) {
					window.console.log('get data error');
				}
			});
}

function myUnique(a) { // 去重
    var r = [];
    for(var i = 0; i < a.length; i ++) {
        var flag = true;
        var temp = a[i];
        for(var j = 0; j < r.length; j ++) {
            if(temp === r[j]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            r.push(temp);
        }
    }
    return r;
}