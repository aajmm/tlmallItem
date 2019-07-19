// 拜访总览地图部分的JS 以及钻取 (author kevin)

var outRows = [];

function buildMap() {

    var position = $("#position").val();
    var day = $("#day").val();
    var branchName = $("#branchname").val();
    var officeName = $("#officename").val();
    var salesmanid = $("#salesmanid").val();

    $.ajax({
        type: "get",
        url: "/ptDataShow/customerview/toHomePageData?position=" + encodeURIComponent(position) + "&day=" + encodeURIComponent(day) +
         "&branchName=" + encodeURIComponent(branchName) + "&officeName=" + encodeURIComponent(officeName) + "&salesmanid=" + encodeURIComponent(salesmanid),
        dataType: "json",
        async: false,
        cache: false,
        success: function(data) {
            var array = data.rows;
            outRows = data.rows;
            // 总部全国视图
            if('总部领导' == position || '事业部总经理' == position || '产品经理' == position || '大客户业务部总经理' == position) {
                //getChinaMap(array, 'mapChart'); 后修改
            } else if ('分公司分总' == position || '品牌经理' == position) {
                //getProvinceMap(array, data.province, 'mapChart');
            } else if ('办事处主任' == position) {
                //getBDMapForOfficeView(data.province, array, 'mapChart');
            } else if('销售代表' == position || '总部客户经理' == position){
                //getBDMapForSaler(data.province, array, 'mapChart');
            }

        },
        error: function(data) {
            console.log('get data error');
        }
    });

}


// 销售人员视图：百度地图
function getBDMapForSaler(mapName, datas, Id) {
    console.log(datas);
    var BDmap = new BMap.Map(Id, {
        enableMapClick: false
    }); // 创建Map实例

    BDmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    if(datas && datas.length > 0) {
        for(var i = 0; i < datas.length; i++) {
            if(datas[i].value && datas[i].value[0] > 0 && datas[i].value[1]>0){
                BDmap.centerAndZoom(new BMap.Point(datas[i].value[0], datas[i].value[1]), 11);
                break;
            }
        }
    } else {
        BDmap.centerAndZoom(mapName, 11); // 初始化地图,用城市名设置地图中心点
    }

    if(datas && datas.length > 0) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].value && datas[i].value[0] > 0 && datas[i].value[1] > 0) {
                var point = new BMap.Point(datas[i].value[0], datas[i].value[1]);
                var newIcon;
                if (datas[i].type == 'person') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-person.png", new BMap.Size(24, 24));
                } else if (datas[i].type == 'store') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-store.png", new BMap.Size(24, 24));
                } else if (datas[i].type == 'client') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-client.png", new BMap.Size(24, 24));
                }
                var marker = new BMap.Marker(point, {
                    icon: newIcon
                });
                //BDmap.addOverlay(marker); 后修改的
                var sContent = inforContent(datas, i);

                var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象(注：为去掉“隐藏百度地图默认图片样式”,需要先初始化下，此代码务必保留！)

                // 监听点击事件
                addClickHandler(BDmap, sContent, marker, point);
            }
        }
    }
}

// 办事处的 销售人员分布百度地图
function getBDMapForOfficeView(mapName, datas, Id) {
    //console.log(datas);
    var BDmap = new BMap.Map(Id, {
        enableMapClick: false
    }); // 创建Map实例

    BDmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    if(datas && datas.length > 0) {
        for(var i = 0; i < datas.length; i++) {
            if(datas[i].value && datas[i].value[0] > 0 && datas[i].value[1]>0){
                BDmap.centerAndZoom(new BMap.Point(datas[i].value[0], datas[i].value[1]), 11);
                break;
            }
        }
    } else {
        BDmap.centerAndZoom(mapName, 11); // 初始化地图,用城市名设置地图中心点
    }

    if (datas && datas.length > 0) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].value && datas[i].value[0] > 0 && datas[i].value[1] > 0) {
                var point = new BMap.Point(datas[i].value[0], datas[i].value[1]);
                var newIcon;
                if (datas[i].type == 'person') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-person.png", new BMap.Size(24, 24));
                } else if (datas[i].type == 'store') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-store.png", new BMap.Size(24, 24));
                } else if (datas[i].type == 'client') {
                    newIcon = new BMap.Icon("/ptDataShow/images/mark-client.png", new BMap.Size(24, 24));
                }
                var marker = new BMap.Marker(point, {
                    icon: newIcon
                });
                //BDmap.addOverlay(marker);后修改的
                var sContent = inforContentForOfficeView(datas, i);

                var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象(注：为去掉“隐藏百度地图默认图片样式”,需要先初始化下，此代码务必保留！)

                // 监听点击事件
                addClickHandler(BDmap, sContent, marker, point);
            }
        }
    }
}


// 配置：地图
function getProvinceMap(datas, provinceName, Id) {
    var chart = echarts.init(document.getElementById(Id));
    window.onresize = chart.resize;

    var storeNum = getMaxValue(datas);
    var visual = numToShow(storeNum);

    $("#" + Id).parent().find(".u-visualmap").remove();
    $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>销量</h6></div>');

    // 省份地图初始化
    $.get('/ptDataShow/js/echarts/province/' + provinceName + '/' + provinceName + '.json', function(data) {
        //echarts.registerMap('mapProvince', data);
        //chart.setOption(option); 后修改

        chart.on('click', function(params) {
            // params.data && params.data.value
            if(params.data) {
                var branchName = $("#branchname").val();
                var officename = params.data.officename;
                var filter_userId = $("#filter_userId").text();
                var encoder = $("#encoder").text();
                var day = $("#day").val();
                var link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder
                    + '&position=' + encodeURIComponent('办事处主任') + '&officeName=' + encodeURIComponent(officename) + '&day=' + day;
                window.location.href = link;
            }
        });
    });

    // 海南省地图过小，需扩大地图倍数单独处理
    var zoomChange = 1;
    var centerChange = [];
    if(provinceName == '海南省') {
        zoomChange = 8;
        centerChange = [109.80, 19.224584];
    }

    var option = {
        tooltip: {
            trigger: 'item',
            padding: 0,
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function formatter(params) {
                try {
                    var tip = '<div class="tip"><h5>' + params.data.officename + '</h5><div class="infors">' +
                        '<table><thead><tr><th></th><th>客户</th><th>门店</th></tr></thead>' +
                        '<tbody><tr><td><h6>拜访要求</h6></td><td><b>' + params.data.goal.client + '</b></td><td><b>' + params.data.goal.store + '</b></td></tr>' +
                        '<tr><td><h6>拜访次数</h6></td><td><b>' + params.data.vnum.client + '</b></td><td><b>' + params.data.vnum.store + '</b></td></tr>' +
                        '<tr><td><h6>拜访达成率</h6></td><td><b>' + params.data.reach.client + '</b></td><td><b>' + params.data.reach.store + '</b></td></tr>' +
                        '</tbody></table></div></div>';
                    return tip;
                } catch(e) {
                    return;
                }
            }
        },
        visualMap: {
            type: 'piecewise',
            splitNumber: 4, // 实际为5色块，maxOpen会自动加载一个模块，故4色块；
            pieces: [{
                gt: visual[0]
            }, {
                gt: visual[0] * 0.25,
                lte: visual[0]
            }, {
                gt: visual[0] * 0.1,
                lte: visual[0] * 0.25
            }, {
                gt: 1,
                lte: visual[0] * 0.1
            }, {
                lt: 1
            }],
            maxOpen: true,
            itemWidth: 25,
            itemHeight: 13,
            itemGap: 2,
            left: '7.5%',
            bottom: '9%',
            inRange: {
                color: ['#aae6fa', '#78dcfa', '#50c8fa', '#01aafa', '#116ed8']
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: 'mapProvince',
            type: 'map',
            map: 'mapProvince',
            zoom: zoomChange,
            center: centerChange,
            roam: false,
            left: 'center',
            top: '8%',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    borderWidth: 2,
                    borderColor: '#fff',
                    shadowColor: 'rgba(142, 47, 0, 0.75)',
                    shadowBlur: 3,
                    areaColor: null
                }
            },
            data: datas
        }]
    };
}


// 配置：中国地图(全国地图)
function getChinaMap(datas, Id) {
    var chart = echarts.init(document.getElementById(Id));
    window.onresize = chart.resize;

    var storeNum = getMaxValue(datas);
    var visual = numToShow(storeNum);

    $("#" + Id).parent().find(".u-box-infors").remove();
    $("#" + Id).parent().find(".u-visualmap").remove();
    $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>客户拜访数量</h6></div>');

    $("#" + Id).parent().find(".totalContent").remove();


    var option = {
        tooltip: {
            trigger: 'item',
            padding: 0,
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function(params) {
                try {
                    var tip = '<div class="tip"><h5>' + params.data.officename + '</h5><div class="infors">' +
                        '<table><thead><tr><th></th><th>客户</th><th>门店</th></tr></thead>' +
                        '<tbody><tr><td><h6>拜访要求</h6></td><td><b>' + params.data.goal.client + '</b></td><td><b>' + params.data.goal.store + '</b></td></tr>' +
                        '<tr><td><h6>拜访次数</h6></td><td><b>' + params.data.vnum.client + '</b></td><td><b>' + params.data.vnum.store + '</b></td></tr>' +
                        '<tr><td><h6>拜访达成率</h6></td><td><b>' + params.data.reach.client + '</b></td><td><b>' + params.data.reach.store + '</b></td></tr>' +
                        '</tbody></table></div></div>';
                    return tip;
                } catch(e) {
                    return;
                }
            }
        },
        visualMap: {
            type: 'piecewise',
            splitNumber: 4, // 实际为5色块，maxOpen会自动加载一个模块，故4色块；
            pieces: [{
                gt: visual[0]
            }, {
                gt: visual[0] * 0.25,
                lte: visual[0]
            }, {
                gt: visual[0] * 0.1,
                lte: visual[0] * 0.25
            }, {
                gt: 1,
                lte: visual[0] * 0.1
            }, {
                lt: 1
            }],
            maxOpen: true,
            itemWidth: 25,
            itemHeight: 13,
            itemGap: 2,
            left: '7.5%',
            bottom: '9%',
            inRange: {
                color: ['#aae6fa', '#78dcfa', '#50c8fa', '#01aafa', '#116ed8']
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: "chinaMap",
            type: 'map',
            mapType: 'china',
            zoom: 1.1,
            roam: false,
            left: 'center',
            top: '10%',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    borderWidth: 2,
                    borderColor: '#fff',
                    shadowColor: 'rgba(142, 47, 0, 0.75)',
                    shadowBlur: 3,
                    areaColor: null
                }
            },
            data: datas
        }]
    };

    // 载入配置显示地图
    //chart.setOption(option);

    chart.on('click', function (params) {
        if (params.name == '' || '台湾省' == params.name) {
            return;
        }
        var branchName = params.data.branchName;
        var filter_userId = $("#filter_userId").text();
        var encoder = $("#encoder").text();
        var day = $("#day").val();
        var link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder
            + '&position=' + encodeURIComponent('分公司分总') + '&day=' + day;
        window.location.href = link;
        // 点击跳转...
    });
}






///////////////////////////////////////////// 公共方法


// 方法：数字千分位转换
function toQfw(num) {
    var str_num = num.toString();
    var result = "";
    while(str_num.length > 3) {
        result = "," + str_num.slice(-3) + result;
        str_num = str_num.slice(0, str_num.length - 3);
    }
    return str_num + result;
};

// 获取地图数据最大值
function getMaxValue(data) {
    var vals = [],
        MaxValue = 0;

    if(data.length == 0) {
        MaxValue = 1000;
    } else {
        for(var i = 0; i < data.length; i++) {
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

    if(numLen > 0 && numLen < 5) {
        visualMaxUnit = oMax;
    } else if(numLen >= 5 && numLen < 9) {
        visualMaxUnit = oMax / Math.pow(10, 4) + "万";
    } else if(numLen >= 9) {
        visualMaxUnit = oMax / Math.pow(10, 9) + "亿";
    }

    arr.push(oMax);
    arr.push(visualMaxUnit);
    return arr;
}


// 百度地图信息窗内容
function inforContent(datas, index) {
    var imgSrc = '';
    var timesLists = '';
    //	var loginName = $("#loginName").text();
    //	var encoder = $("#encoder").text();
    //	var link = '/ptDataShow/salesPlan/salesOverview?type=07&salerName=' + encodeURIComponent(datas[index].name) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date=' + $("#selDay").val();

    if(datas[index].img) {
        imgSrc = datas[index].img;
    } else {
        imgSrc = '/ptDataShow/images/defaultImg.png';
    }

    if(datas[index].times) {
        for(var i in datas[index].times) {
            // timesLists += '<tr><td class="time">' + datas[index].times[i].time + '</td><td class="alink"><a href="#">查看</a></td></tr>';
            timesLists += '<tr><td class="time">' + datas[index].times[i].time + '</td><td class="alink"></td></tr>';
        }
    }else{
        timesLists = '<tr><td class="yet">暂无拜访记录</td></tr>';
    }

    var content = '<div class="tip"><h5>' + datas[index].storename + '</h5><div class="infors_s">' +
        '<div class="img"><img src="' + imgSrc + '"/></div><div class="infors_lists">' +
        '<span class="title">拜访人员：' + datas[index].name + '</span><table><tbody>' + timesLists +
        '</tbody></table></div><div class="ads"><i class="icon_mark"></i><p>' + datas[index].address + '</p></div></div></div>';

    return content;
}

// 百度地图信息窗内容
function inforContentForOfficeView(datas, index) {
    //console.log(datas);
    var filter_userId = $("#filter_userId").text();
    var encoder = $("#encoder").text();
    var branchName = $("#branchname").val();
    var day = $("#day").val();
    var link = "/ptDataShow/customerview/toHomePage?branchName=" + encodeURIComponent(branchName) + "&filter_userId=" + filter_userId + '&encoder=' + encoder +
        '&position=' + encodeURIComponent('销售代表') + '&salesmanid=' + encodeURIComponent(datas[index].id) + '&day=' + day;
    var content = '<div class="tip"><h5><a href="' + link + '">' + datas[index].name + '</a></h5><div class="infors">' +
        '<table><thead><tr><th></th><th>客户</th><th>门店</th></tr></thead>' +
        '<tbody><tr><td><h6>拜访要求</h6></td><td><b>' + datas[index].goal.client + '</b></td><td><b>' + datas[index].goal.store + '</b></td></tr>' +
        '<tr><td><h6>拜访次数</h6></td><td><b>' + datas[index].vnum.client + '</b></td><td><b>' + datas[index].vnum.store + '</b></td></tr>' +
        '<tr class="trline"><td><h6>拜访达成率</h6></td><td><b>' + datas[index].reach.client + '</b></td><td><b>' + datas[index].reach.store + '</b></td></tr>' +
        '<tr><td><h6>客户量</h6></td><td><b>' +datas[index].clientnum + '</b></td></tr>'+
        '</tbody></table></div></div>';
    return content;
}

function addClickHandler(BDmap, content, marker, point) {
    marker.addEventListener("click", function(e) {
        var infoWindow = new BMap.InfoWindow(content); // 创建信息窗口对象
        BDmap.openInfoWindow(infoWindow, point); // 开启信息窗口
        // 隐藏百度地图默认图片样式
        $("img[src='http://api0.map.bdimg.com/images/iw3.png']").hide();
        $("img[src='http://api0.map.bdimg.com/images/iw_close1d3.gif']").hide();
    });
}