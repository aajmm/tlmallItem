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
var wrapperOrigin = document.querySelector('.g-main');
var wrapper = document.createElement('div');
if(wrapper){
  wrapper.style.background = '#eee';
	wrapper.style.padding = '0';
	var href = wrapper.ownerDocument.defaultView.document.location.href;
  //如果匹配的地址正确，则将.wrapper里面的html清空
  if(href && href.indexOf('configType') != -1){
  	wrapper.innerHTML = '';
    /*
    // 创建style
    */
    var style = document.createElement('style');
    style.setAttribute("type", "text/css");
    var cssString = ".fakeWrapper{background: #fff; border-radius: 8px; padding-bottom: 10px}" + 
        ".fakeWrapper:last-child{margin-top: 10px; border-radius: 8px 8px 0 0;}" +
        ".header{padding: 10px}" +
        ".header span{font-size: 16px}" + 
        ".content" +
        ".content > div{display: flex; justify-content: flex-start; align-items: center; margin: 0 20px; padding-bottom: 10px}" +
        ".content > div:first-child{border-bottom: 1px solid #dde1ea}" +
        ".content-item{display: flex; flex-direction: column; align-items: center; width: 33%}" +
        ".content-item h2{font-size: 14px; text-align: center; font-weight: 400}" +
        ".content-item span{font-size: 14px; color: #999; display: block; text-align: center}";
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
    fakeWrapper_client.appendChild(content_client);
    
    document.body.insertBefore(wrapper,wrapperOrigin);
  }
}

$(function () {
    init();
});

var configType = $("#configType").html();


function init(selDayStr) {
    var selDate;
    if(selDayStr == undefined || selDayStr == null) {
        selDate = new Date();
    } else {
        selDate = new Date(selDayStr);
    }
    var year = getYear(selDate);
    var month = getMonth(selDate);
    var day = getDay(selDate);
    $("#selDay").val(day);
    refreshData(year, month, day);
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    return year + "-" + (month < 10 ? ('0' + month) : month);
}

function getDay(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year + "-" + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
}


// 定义
// 全国地图数据
var showAllMap;
var mapChinaBranchData = [];  // [ { name: "province", value: "amt" }, {} ]
var mapChinaBranchQtyMap = {};  // { province: qty }
var mapChinaBranchAmtMap = {};  // { province: amt }
var mapChinaBranchMaxAmt = 10000;

// 省地图数据
var showProvinceMap;
var provinceName;

// 月度趋势图
var tendencyDate = new Array(), tendencyQty = new Array(), tendencyAmt = new Array();

// 双环形图
var annularName = []; // [ "", "", ""]
var annularQty = []; // [ {value: qty, name: name}, {}]
var annularAmt = []; // [ {value: amt, name: name}, {}]

// 环比同比
var monthQty2, monthAmt2, preMonthQty, preMonthAmt, preYearMonthQty, preYearMonthAmt;


function refreshData(year, month, day) {
    $.ajax({
        url: "/ptDataShow/echarts/homeData?type=" + encodeURIComponent($("#type").html()) + "&userId=" + encodeURIComponent($("#userId").html())
        + "&filter_department=" + encodeURIComponent($("#filter_department").html())
        + "&filter_branchName=" + encodeURIComponent($("#filter_branchName").html()) + "&filter_projectName=" + encodeURIComponent($("#filter_projectName").html())
        + "&filter_officeName=" + encodeURIComponent($("#filter_officeName").html()) + "&filter_salesman_id=" + encodeURIComponent($("#filter_salesman_id").html())
        + "&year=" + year + "&month=" + month + "&day=" + day,
        async: false,
        success: function (response) {

            // 环比和同比图形
            // 当月的销量和销售额
            monthQty2 = response.monthSum.allSaleQty;
            monthAmt2 = response.monthSum.allSaleAmt;
            // 上月的销量和销售额
          //  preMonthQty = response.preMonthSum.allSaleQty;
          //  preMonthAmt = response.preMonthSum.allSaleAmt;
            // 去年这月的销量和销售额
          //  preYearMonthQty = response.preYearMonthSum.allSaleQty;
          //  preYearMonthAmt = response.preYearMonthSum.allSaleAmt;

            // 今日销量和销售额
            $("#todayQty").html(response.todaySum.allSaleQtyStr);
            $("#todayAmt").html(response.todaySum.allSaleAmtStr);
            // 当月销量和销售额
            $("#monthQty").html(response.monthSum.allSaleQtyStr);
            $("#monthAmt").html(response.monthSum.allSaleAmtStr);
            // 当年销量和销售额
            $("#yearQty").html(response.yearSum.allSaleQtyStr);
            $("#yearAmt").html(response.yearSum.allSaleAmtStr);

            // 客户拜访数据
            $("#clientCount").html(response.clientCount);
            $("#vistClientCount").html(response.clientVistCount);
            $("#storeCount").html(response.storeCount);
            $("#vistStoreCount").html(response.storeVistCount);

            // 业务人员
            $("#saleManCount").html(response.saleManCount);

            // 全国地图
            showAllMap = response.showAllMap;
            var branchInfos = response.branchInfo.vos;
            if (branchInfos && showAllMap) {
                $("#mapTitle").html("全国销售数据展示图");
                mapChinaBranchMaxAmt = response.branchInfo.maxAmt;
                mapChinaBranchData = [];
                mapChinaBranchQtyMap = {};
                mapChinaBranchAmtMap = {};
                for (var i = 0; i < branchInfos.length; i++) {
                    var tmpName = branchInfos[i].alias;
                    mapChinaBranchData[i] = {name: branchInfos[i].alias, value: branchInfos[i].amt};   // 用来显示全国地图的色块
                    mapChinaBranchQtyMap[tmpName] = branchInfos[i].qty;    // 用于提示块
                    mapChinaBranchAmtMap[tmpName] = branchInfos[i].amt;    // 用于提示块
                }
            }

            // 省地图
            showProvinceMap = response.showProvinceMap;
            if (showProvinceMap) {
                $("#mapTitle").html(response.provinceName + "销售数据展示图");
                provinceName = response.provinceName;
            }

            // 当前月度销售趋势图
            var tendencyInfos = response.monthInfos.vos;
            if (tendencyInfos) {
                for (var i = 0; i < tendencyInfos.length; i++) {
                    tendencyDate[i] = tendencyInfos[i].name;
                    tendencyQty[i] = tendencyInfos[i].qty;
                    tendencyAmt[i] = tendencyInfos[i].amt;
                }
            }

            // 双环图
            var projectOrBizUnitInfo;
            if (response.projectOrBizUnitInfo) {
                if(response.projectOrBizUnitInfo.vos) {
                    projectOrBizUnitInfo = response.projectOrBizUnitInfo.vos;
                    $("#annularTitle").html(response.annularTitle);
                    annularName = [];
                    annularQty = [];
                    annularAmt = [];
                    for (var i = 0; i < projectOrBizUnitInfo.length; i++) {
                        annularName[i] = projectOrBizUnitInfo[i].name;
                        annularQty[i] = {name: projectOrBizUnitInfo[i].name, value: projectOrBizUnitInfo[i].qty};
                        annularAmt[i] = {name: projectOrBizUnitInfo[i].name, value: projectOrBizUnitInfo[i].amt};
                    }
                }
            }

            // 表格信息
            var tableInfo = response.tableInfo;
            $("#tableTile").html(response.tableTile);
            $("#tableTile2").html(response.tableTile2);
            if (tableInfo) {
                var preBranch = '';
                $('.tableInfoRow').remove();
                for (var i = 0; i < tableInfo.length; i++) {
                    if (preBranch == tableInfo[i].name) {
                        continue;
                    }
                    var tr = "<tr class='tableInfoRow'><td>" + tableInfo[i].name + "</td><td>" + tableInfo[i].qtyStr + "</td><td>" + tableInfo[i].amtStr + "</td></tr>";
                    $("#branchTable").append(tr);
                    preBranch = tableInfo[i].name;
                }
            }

            // Refresh map
            initTendencyChart();
            initAnnular();
            initMap();


        },
        error: function () {
            console.log("Error:获取后台数据失败！");
        }
    });

    getPieDatas(year, month);
}






// 图表刷新


// 销售趋势图表
function initTendencyChart() {
    if(configType!="02") {
        var tendencyChart = echarts.init(document.getElementById("tendencyChart")),
            tendencyOption = {
                color:['#2c81ff','#ed9429'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x:'75%',
                    y:'8%',
                    data: [
                        {name:'销量',icon:'path://'},
                        {name:'销售额',icon:'path://'}
                    ]
                },
                grid: {
//            width: '75%',
//            height: '60%',
                    x: '15%',
                    y:'25%',
                    x2:'16%',
                    y2:'15%'

                },
                xAxis: [
                    {
                        type: 'category',
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
                            lineStyle:{
                                color:"#dfdfdf"
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        data: tendencyDate
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
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
                    },
                    {
                        type: 'value',
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
                    }
                ],
                series: [
                    {
                        name: '销量',
                        type: 'line',
                        symbol:'circle',
                        symbolSize:3,
                        data: tendencyQty,
                    }, {
                        name: '销售额',
                        type: 'line',
                        symbol:'circle',
                        symbolSize:3,
                        data: tendencyAmt,
                        yAxisIndex: 1
                    }
                ]
            };

        tendencyChart.setOption(tendencyOption), $(window).resize(tendencyChart.resize);
    }
}

// 双环形占比图
function initAnnular() {
    if(configType!="02") {
//	console.log(annularName);
        var bizUnitChart = echarts.init(document.getElementById("bizUnitChart")),
            bizUnitChartOption = {
                color:['#2c81ff','#3bc5cf','#ed9429','#e7350d'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: '5%',
                    data: annularName
                },
                calculable: false,
                series: [
                    {
                        name: '销量',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        center : ['50%', '58%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show:false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis:{
                                label: {
                                    show:true,
                                    position: 'inner'
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: annularQty
                    },
                    {
                        name: '销售额',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center : ['50%', '58%'],
                        itemStyle:{
                            normal: {
                                label:{
                                    textStyle:{
                                        color:'#666'
                                    }
                                },
                                labelLine: {
                                    show: true,
                                    lineStyle:{
                                        color:'#3bc5cf'
                                    }
                                }
                            },
                        },
                        data: annularAmt
                    }
                ]
            };

        bizUnitChart.setOption(bizUnitChartOption), window.onresize = bizUnitChart.resize;
    }
}

// 销量大地图
var provinceToBranchName = {
    "吉林省": "长春分公司",
    "湖南省": "长沙分公司",
    "陕西省": "西安分公司",
    "天津市": "天津分公司",
    "海南省": "南宁分公司",
    "浙江省": "杭州太力",
    "安徽省": "合肥分公司",
    "北京市": "北京分公司",
    "福建省": "厦门分公司",
    "四川省": "成都分公司",
    "广东省": "广州分公司",
    "贵州省": "贵阳分公司",
    "黑龙江省": "哈尔滨分公司",
    "内蒙古自治区": "内蒙古分公司",
    "山东省": "济南分公司",
    "辽宁省": "沈阳分公司",
    "江西省": "南昌分公司",
    "广西壮族自治区": "南宁分公司",
    "云南省": "昆明分公司",
    "西藏自治区": "成都分公司",
    "甘肃省": "兰州分公司",
    "湖北省": "武汉分公司",
    "上海市": "上海普天",
    "河北省": "石家庄分公司",
    "新疆维吾尔自治区": "新疆分公司",
    "江苏省": "南京分公司",
    "宁夏回族自治区": "兰州分公司",
    "河南省": "郑州分公司",
    "青海省": "兰州分公司",
    "山西省": "太原分公司",
    "重庆市": "重庆分公司",
    "吉林": "长春分公司",
    "湖南": "长沙分公司",
    "陕西": "西安分公司",
    "天津": "天津分公司",
    "海南": "南宁分公司",
    "浙江": "杭州太力",
    "安徽": "合肥分公司",
    "北京": "北京分公司",
    "福建": "厦门分公司",
    "四川": "成都分公司",
    "广东": "广州分公司",
    "贵州": "贵阳分公司",
    "黑龙江": "哈尔滨分公司",
    "内蒙古": "内蒙古分公司",
    "山东": "济南分公司",
    "辽宁": "沈阳分公司",
    "江西": "南昌分公司",
    "广西": "南宁分公司",
    "云南": "昆明分公司",
    "西藏": "成都分公司",
    "甘肃": "兰州分公司",
    "湖北": "武汉分公司",
    "上海": "上海普天",
    "河北": "石家庄分公司",
    "新疆": "新疆分公司",
    "江苏": "南京分公司",
    "宁夏": "兰州分公司",
    "河南": "郑州分公司",
    "青海": "兰州分公司",
    "山西": "太原分公司",
    "重庆": "重庆分公司"
};

function initMap(){
    if (showAllMap && configType!="02") {
        $("#mapChart").next(".u-visualmap").remove();
        $("#mapChart").parent().append('<div class="u-visualmap"><div class="max">'+mapChinaBranchMaxAmt+'</div>' +
            '<div class="min">0</div><h6>销售额</h6></div>');
        var t = echarts.init(document.getElementById("mapChart")),
            n = {
                tooltip: {
                    trigger: 'item',
                    padding: 0,
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params) {
                        if((mapChinaBranchQtyMap[params.name] || mapChinaBranchAmtMap[params.name])==undefined){
                            return "";
                        }else{
                            var branchName = provinceToBranchName[params.name];
                            var qty = mapChinaBranchQtyMap[params.name];
                            var amt = mapChinaBranchAmtMap[params.name];
                            var tip = '<div class="m-tooltip"><div class="u-title">' + branchName + '</div>' +
                                '<div class="u-content"><div><h6>销&nbsp;&nbsp;&nbsp;量</h6><b>' + qty + '</b></div><div><h6>销量额</h6><b>' + amt + '</b></div></div></div>';
                            return tip;
                        }
                    }
                },
                dataRange: {
                    splitNumber: 5,
                    min: 0,
                    max: mapChinaBranchMaxAmt,
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
                series : [
                    {
                        name: ['销售额'],
                        type: 'map',
                        mapType: 'china',
                        roam: false,
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
                        data: mapChinaBranchData
                    }

                ]
            };
        t.setOption(n), window.onresize = t.resize;
    }

    if (showProvinceMap && configType!="02") {
        $("#mapChart").next(".u-visualmap").remove();
        $("#mapChart").parent().append('<div class="u-visualmap"><div class="max">'+mapChinaBranchMaxAmt+'</div>' +
            '<div class="min">0</div><h6>销售额</h6></div>');
        var t = echarts.init(document.getElementById("mapChart")),
            n = {
                tooltip: {
                    trigger: 'item',
                    padding: 0,
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params) {
                        return "";
                    }
                },
                dataRange: {
                    splitNumber: 5,
                    min: 0,
                    max: mapChinaBranchMaxAmt,
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
                series : [
                    {
                        name: ['销售额'],
                        type: 'map',
                        mapType: provinceName,
                        roam: false,
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
                        data: mapChinaBranchData
                    }

                ]
            };
        t.setOption(n), window.onresize = t.resize;
    }
}




// 环比和同比图形

// 销售同比
/*if(configType!="02") {
    var a = echarts.init(document.getElementById("chart_a")),
        option_a = {
            color: ['#bac3d2', '#2c81ff'],
            title: {
                text: '销量同比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: '20%',
                x2: '20%',
                y: '8%',
                y2:'20%',
                containLabel: false,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        show:false
                    },
                    axisLine:{
                    	lineStyle:{
                    		color: '#dfdfdf'
                    	}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '上月销量',
                    type: 'bar',
                    barWidth: 20,
                    data: [preYearMonthQty]
                },
                {
                    name: '本月销量',
                    type: 'bar',
                    barWidth: 20,
                    itemStyle:{
                    	normal:{
                    		label:{
                            	show:true,
                            	textStyle:{
                            		color:"#333"
                            	},
                            	formatter:function(params){
                            		return ((params.value-preYearMonthQty)/preYearMonthQty*100).toFixed(0)+"%";
                            	}
                            }
                    	}
                    },
                    data: [monthQty2]
                }
            ]
        };
    a.setOption(option_a), $(window).resize(a.resize);
// 销量环比
    var b = echarts.init(document.getElementById("chart_b")),
        option_b = {
            color: ['#bac3d2', '#3bc5cf'],
            title: {
                text: '销量环比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: '20%',
                x2: '20%',
                y: '8%',
                y2:'20%',
                containLabel: false,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        show:false
                    },
                    axisLine:{
                    	lineStyle:{
                    		color: '#dfdfdf'
                    	}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '去年销售',
                    type: 'bar',
                    barWidth: 20,
                    data: [preMonthQty]
                },
                {
                    name: '本年销售',
                    type: 'bar',
                    barWidth: 20,
                    itemStyle:{
                    	normal:{
                    		label:{
                            	show:true,
                            	textStyle:{
                            		color:"#333"
                            	},
                            	formatter:function(params){
                            		return ((params.value-preMonthQty)/preMonthQty*100).toFixed(0)+"%";
                            	}
                            }
                    	}
                    },
                    data: [monthQty2]
                }
            ]
        };
    b.setOption(option_b), $(window).resize(b.resize);

// 销售额同比

    var c = echarts.init(document.getElementById("chart_c")),
        option_c = {
            color: ['#bac3d2', '#ed9429'],
            title: {
                text: '销售额同比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: '20%',
                x2: '20%',
                y: '8%',
                y2:'20%',
                containLabel: false,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        show:false
                    },
                    axisLine:{
                    	lineStyle:{
                    		color: '#dfdfdf'
                    	}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '上月销售额',
                    type: 'bar',
                    barWidth: 20,
                    data: [preYearMonthAmt]
                },
                {
                    name: '本月销售额',
                    type: 'bar',
                    barWidth: 20,
                    itemStyle:{
                    	normal:{
                    		label:{
                            	show:true,
                            	textStyle:{
                            		color:"#333"
                            	},
                            	formatter:function(params){
                            		return ((params.value-preYearMonthAmt)/preYearMonthAmt*100).toFixed(0)+"%";
                            	}
                            }
                    	}
                    },
                    data: [monthAmt2]
                }
            ]
        };
    c.setOption(option_c), $(window).resize(c.resize);

// 销售额环比
    var d = echarts.init(document.getElementById("chart_d")),
        option_d = {
            color: ['#bac3d2', '#ed694f'],
            title: {
                text: '销售额环比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: '20%',
                x2: '20%',
                y: '8%',
                y2:'20%',
                containLabel: false,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        show:false
                    },
                    axisLine:{
                    	lineStyle:{
                    		color: '#dfdfdf'
                    	}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '去年销售额',
                    type: 'bar',
                    barWidth: 20,
                    data: [preMonthAmt]
                },
                {
                    name: '本年销售额',
                    type: 'bar',
                    barWidth: 20,
                    itemStyle:{
                    	normal:{
                    		label:{
                            	show:true,
                            	textStyle:{
                            		color:"#333"
                            	},
                            	formatter:function(params){
                            		return ((params.value-preMonthAmt)/preMonthAmt*100).toFixed(0)+"%";
                            	}
                            }
                    	}
                    },
                    data: [monthAmt2]
                }
            ]
        };
    d.setOption(option_d), $(window).resize(d.resize);

}
*/


// 销售计划：饼图-配置函数
function pieShow(Id,datas,len) {
	var chart = echarts.init(document.getElementById(Id));
	window.onresize = chart.resize;

	// 存储饼图颜色值,color[0]是内环默认色，其他索引值是外环多色值；（顺序依次是:灰、蓝、绿、黄、粉）
	var colors = ['#babdcc', '#2c81ff', '#3bc5cf', '#ed9429', '#ed694f'],
		cr = '', // 各饼图外环颜色值
		precent, // 各饼图销量百分比
		sum; // 各饼图销售额
	
	switch(Id) {
		case 'monthSales':
			cr = colors[1];
			percent = datas[0].countPercent;
			sum = datas[0].saleCount;
			break;
		case 'monthSalesMoney':
			if(len == 2){
				cr = colors[1];
			}else{
				cr = colors[2];
			}
			percent = datas[0].amountPercent;
			sum = datas[0].saleAmount;
			break;
	}

	var option = {
		title: {
			text: percent + '%',
			subtext: sum,
			y: 'center',
			x: 'center',
			textStyle: {
				color: '#333',
				fontSize: 26,
				fontWeight:'normal'				
			},
			subtextStyle: {
				color: cr,
				fontSize: 16,
				fontWeight:'normal'
			}
		},
		series: [{
				z: 2,
				type: "pie",
				radius: ["60%", "100%"],
				hoverAnimation: false,
				itemStyle: {
					normal: {
						labelLine: {
							show: false
						},
						color: cr
					}
				},
				data: [{
						name: "",
						value: 100 - percent,
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								color:"rgba(0,0,0,0)"
							},
							emphasis: {
						        color: 'rgba(0,0,0,0)'
						    }
						}
					},
					{   // 此percent为真实数据项
						value: percent  
					}
				]
			},
			{	// 下述配置项仅为配合设计稿做效果展示用，没有其他用处
				z: 1,
				type: "pie",
				radius: ["68%", "92%"],
				hoverAnimation: false,
				itemStyle: {
					normal: {
						labelLine: {
							show: false
						},
						color: colors[0]
					}
				},
				data: [{
						name: "",
						value: 0,
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								opacity: 0
							}
						}
					},
					{
						value: 100
					}
				]
			}
		]
	};

	// 载入配置显示饼图
	chart.setOption(option);
}

function getPieDatas(year, month) {
	var datas = [ {
		'saleCount' : 0,// 月度销量
		'countPercent' : 0,// 月度销量达成
		'saleAmount' : 0,// 月度销售额
		'amountPercent' : 0// 月度销售额达成
	}];

	var base = $("#base").text();
	var parms = $("#queryForm").serializeObject();
	parms.year = year;
	parms.month = month;
	var position = parms.position;
	if(position=='总部领导'){
		parms.type = "总部";
	}else if(position=='事业部总经理'){
		parms.type = "总部";
	}else if(position=='产品经理'){
		parms.type = "总部";
	}else if(position=='分公司分总'){
		parms.type = "分公司";
	}else if(position=='品牌经理'){
		parms.type = "分公司";
	}else if(position=='办事处主任'){
		parms.type = "办事处";
	}else if(position=='销售代表'){
		parms.type = "";
	}
	// 获取月度销量和销售额达成
	parms.planType = "month";
	parms.interfaceId = 2001;
	$.ajax({
		type : "POST",
		url : base + "/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			datas[0].saleCount = data.Rows[0].mRealSalesCount;// 月度真实销量
			datas[0].saleAmount = data.Rows[0].mRealSalesAmount.toFixed(2);// 月度真实销售额
			datas[0].targetSalesCount = data.Rows[0].mTargetSalesCount;// 月度计划销量
			datas[0].targetSalesAmount = data.Rows[0].mTargetSalesAmount.toFixed(2);// 月度计划销售额
			if (datas[0].targetSalesCount != 0) {
				datas[0].countPercent = (datas[0].saleCount * 1.0 / datas[0].targetSalesCount * 100).toFixed(2);// 月度销量达成
			} else {
				datas[0].countPercent = 0.0.toFixed(2);
			}
			if (datas[0].targetSalesAmount != 0) {
				datas[0].amountPercent = (datas[0].saleAmount * 1.0	/ datas[0].targetSalesAmount * 100).toFixed(2);// 月度销售额达成
			} else {
				datas[0].amountPercent = 0.0.toFixed(2);
			}
			datas[0].saleCount = toThousands(datas[0].saleCount) + "台";
			datas[0].saleAmount = toThousands(parseInt(datas[0].saleAmount/10000)) + "万元";

            pieShow("monthSales", datas, 4);
            pieShow("monthSalesMoney", datas, 4);

		},
		error : function(data) {
			window.console.log('get data error');
		}
	});

	return datas;
}

