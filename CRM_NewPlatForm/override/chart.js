// 配置：环状图
function getRing(datas, Id) {
	var myChart = echarts.init(document.getElementById(Id));
	window.onresize = myChart.resize;

	var nameData = [];
	var volumeData = [];
	var salesData = [];
	for (var i = 0; i < datas.length; i++) {
		nameData.push(datas[i].name);
		volumeData.push({
			name:datas[i].name,
			value:datas[i].volume
		});
		salesData.push({
			name:datas[i].name,
			value:datas[i].sales
		});
	}

	var option = {
		title:[
			{
				text:"销量占比",
				textStyle:{
					fontWeight:"normal"
				},
				left:"38%",
				top:"45%"
			}
		],
		tooltip : {
			trigger: 'item',
			formatter: "{b}<br />{c}  {d}%"
		},
		color:["#2c81fe","#3bc5cf","#fec400","#ed6950","#4bdd9c","#34c3c7","#ec942a"],
		series: [{
			name: '品类',
			type: 'pie',
			radius: ['30%', '60%'],
			center : ['50%', '50%'],
			data: volumeData,
			itemStyle: {
				normal:{
					label:{
						show:true,
						formatter:"{b} \n{c} {d}%",
						labelLine:{
							show:true
						},
						textStyle:{
							color:"#999999"
						}
					}
				}
			}
		}]
	};
  
  var options = {
		title:[
			{
				//text:"销售额占比",
        text:"金额占比",
				textStyle:{
					fontWeight:"normal"
				},
				left:"38%",
				top:"45%"
			}
		],
		tooltip : {
			trigger: 'item',
			formatter: "{b}<br />{c}  {d}%"
		},
		color:["#2c81fe","#3bc5cf","#fec400","#ed6950","#4bdd9c","#34c3c7","#ec942a"],
		series: [{
			name: '品类',
			type: 'pie',
			radius: ['30%', '60%'],
			center : ['50%', '50%'],
			data: salesData,
			itemStyle: {
				normal:{
					align:"left",
					label:{
						show:true,
						formatter:"{b} \n{c} {d}%",
						labelLine:{
							show:true
						},
						textStyle:{
							color:"#999999"
						}
					}
				}
			}
		}]
	};
	//myChart.setOption(option);
  //后添加的
  document.getElementById("ring").setAttribute('option',JSON.stringify(option));
  document.getElementById("ring").setAttribute('options',JSON.stringify(options));
}
//折线图
function getLines(datas, Id) {
	var myChart = echarts.init(document.getElementById(Id));
	window.onresize = myChart.resize;
	
	var legendDatas = [];
	var timeDatas = [];
	var salesData = [];
	for(var i=0;i<datas.length;i++){
		if(datas[i].name!=""){
			legendDatas.push(datas[i].name);
		}
		salesData[i] = [];
		timeDatas[i] = [];
		for(var j=0;j<datas[i].data.length;j++){
			var timeDate = datas[i].data[j].time;
			var timeDate2 = timeDate.replace(/(.+?)\-(.+?)\-(.+)/,"$2.$3");//格式化日期
			timeDatas[i].push(timeDate2);
			
			if(j == 0 || j==(datas[i].data.length-1)){
				salesData[i][j] = {value:"",symbol:"",symbolSize:""};
				salesData[i][j].value = datas[i].data[j].value;
				salesData[i][j].symbol = "circle";
				salesData[i][j].symbolSize = 10;
			}else{
				salesData[i].push(datas[i].data[j].value);
			}
		}
	}
	var option = {
		color: ["#43cbff", "#2c81fe","#ed952b", "#ed6950","#4bdd9c", "#fec400","#34c3c7"],
		title: {
			show: false
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#2c81ff',
					borderRadius:14
				}
			}
		},
		grid: {
			containLabel: true, //grid 区域包含坐标轴标签
			top: 50,
			left: 10,
			right: 10,
			bottom: 26
		},
		legend: {
			icon:"rect",
			itemGap: 10,
			itemWidth: 18,
			itemHeight: 5,
			top: 15,
			right: 'auto',
			data: legendDatas
		},
		xAxis: [{
			type: 'category',
			data: timeDatas[0],
			boundaryGap: true,
			axisPointer: {
				type: 'line'
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
//				interval:1,
				textStyle: {
					color: '#666'
				}
			}
		}],
		yAxis: [{
			type: 'value',
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
			name: legendDatas[0],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#43cbff',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[0]
		}, {
			name: legendDatas[1],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#2c81fe',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[1]
		}, {
			name: legendDatas[2],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#ed952b',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[2]
		}, {
			name: legendDatas[3],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#ed6950',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[3]
		}, {
			name: legendDatas[4],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#4bdd9c',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[4]
		}, {
			name: legendDatas[5],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#fec400',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[5]
		}, {
			name: legendDatas[6],
			type: 'line',
			symbol: 'circle',
			showSymbol:true,
			lineStyle:{
				normal:{
					 shadowColor: '#34c3c7',
					 shadowBlur: 8,
//					 shadowOffsetY:5,
				}
			},
			label: {
				normal: {
					show: false,
					formatter:function(param){
						if(param.value>0){
							return param.value;
						}else{
							return "";	
						}
					}
				},
				emphasis:{
					show: true,
					position: 'right',
					textStyle:{
						color:"#333"
					}
					
				}
			},
			data: salesData[6]
		}]
	};
	myChart.setOption(option);
  //后添加的
  document.getElementById("lines").setAttribute('option',JSON.stringify(option));
}
//堆叠折线图
function getBarLine(datas,Id){
	var myChart = echarts.init(document.getElementById(Id));
	window.onresize = myChart.resize;
	
	var legendDatas = [];
	var timeDatas = [];
	var salesData = [];
	var sum = [];
	for(var i=0;i<datas.length;i++){
		legendDatas.push(datas[i].name);
		timeDatas[i] = [];
		salesData[i] = [];
		for(var j=0;j<datas[i].data.length;j++){
				timeDatas[i].push(datas[i].data[j].time);
				salesData[i].push(datas[i].data[j].value);
		}
	}
	
	for(var i = 0;i<salesData[0].length;i++){
		sum[i] = 0;
		for(var j = 0;j<salesData.length;j++){
			sum[i] += parseInt(salesData[j][i]);
		}
	}
	var option = {
		color:["#2c81fe","#43cbff","#34c3c7","#4bdd9c","#fec400","#ec942a","#ed6950","#ef694e"],
		title: {
			show: false
		},
		grid: {
			containLabel: true,
			top: 60,
			left: 10,
			right: 10,
			bottom: 10
		},
		legend: {
			itemGap: 5,
			itemWidth: 14,
			itemHeight: 5,
			top: 0,
			left: 'center',
			data: legendDatas,
      align:"left",
      verticalAlign:"top"
		},
		tooltip:{
			trigger:"axis",
			axisPointer:{
				type:"shadow"
			},
      position:['50%','50%']
		},
		toolbox:{
			show:true
		},
		//x轴显示
		xAxis: {
			type: 'category',
			data: timeDatas[0],
			axisTick: { show: false } //不显示刻度线
		},
		yAxis: {
			type: 'value',
			axisTick: { show: false //不显示刻度线
			}
			},

		series: [{ //柱状图bar设置
			name: legendDatas[0],
			type: "bar",
			stack: "销量", //折叠显示
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[0]
		}, {
			name: legendDatas[1],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[1]
		}, {
			name: legendDatas[2],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[2]
		}, {
			name: legendDatas[3],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[3]
		},   {
			name: legendDatas[4],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[4]
		}, {
			name: legendDatas[5],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[5]
		}, {
			name: legendDatas[6],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[6]
		},
		{
			name: "合计",
			type: 'line',
			symbol: 'circle',
			color:"blue",
            itemStyle : {  
                normal : {  
                    color:'#eb694f',  
                    lineStyle:{  
                        color:'#eb694f'  
                    }  
                }  
            }, 
			label: {
				position:"top",
				normal: {
					show: true,
					color:"#333",
					position: 'top',
					textStyle:{
						color:"#333"
					}
				}
			},
			data: sum
		}]
	};
  
  var options = {
		color:["#2c81fe","#43cbff","#34c3c7","#4bdd9c","#fec400","#ec942a","#ed6950","#ef694e"],
		title: {
			show: false
		},
		grid: {
			containLabel: true,
			top: 60,
			left: 10,
			right: 10,
			bottom: 26
		},
		legend: {
			itemGap: 15,
			itemWidth: 18,
			itemHeight: 5,
			top: 15,
			right: 20,
			data: legendDatas
		},
		toolbox:{
			show:true
		},
		//x轴显示
		xAxis: {
			type: 'category',
			data: timeDatas[0],
			axisTick: { show: false } //不显示刻度线
		},
		yAxis: {
			type: 'value',
			axisTick: { show: false }//不显示刻度线
			},
		series: [{ //柱状图bar设置
			name: legendDatas[0],
			type: "bar",
			stack: "销量", //折叠显示
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[0]
		}, {
			name: legendDatas[1],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[1]
		}, {
			name: legendDatas[2],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[2]
		}, {
			name: legendDatas[3],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[3]
		},  {
			name: legendDatas[4],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[4]
		}, {
			name: legendDatas[5],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[5]
		}, {
			name: legendDatas[6],
			type: "bar",
			stack: "销量",
			barMaxWidth:55,
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					formatter: function(params) {
						if (params.value > 0) {
						return params.value;
						} else {
						return '';
						}
						}
				}
			},
			data: salesData[6]
		},
		{
			name: "合计",
			type: 'line',
			symbol: 'circle',
			color:"blue",
            itemStyle : {  
                normal : {  
                    color:'#eb694f',  
                    lineStyle:{  
                        color:'#eb694f'  
                    }  
                }  
            }, 
			label: {
				position:"top",
				normal: {
					show: true,
					color:"#333",
					position: 'top',
					textStyle:{
						color:"#333"
					}
				}
			},
			data: sum
		}]
	};
	myChart.setOption(option);
  //后添加的
  document.getElementById("barline").setAttribute('option',JSON.stringify(option));
  document.getElementById("barline").setAttribute('options',JSON.stringify(options));
}