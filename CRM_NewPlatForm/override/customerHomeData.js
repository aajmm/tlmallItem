var myPosition = $("#position").val();
var branchname = $("#branchname").val();
var configType = $("#configType").val();

$(function() {

    myPosition = $("#position").val();
    branchname = $("#branchname").val();
    configType = $("#configType").val();

    if(myPosition=='总部领导'||myPosition=='事业部总经理'||myPosition=='分公司分总'||myPosition=='产品经理'||myPosition=='品牌经理'||myPosition=='办事处主任'||myPosition=='销售代表')
        Init_All($("#day").val());
    else
        window.console.log('当前登录人角色错误:'+myPosition);

    if(myPosition!='总部领导'&&myPosition!='事业部总经理'&&myPosition!='产品经理')
        $("#mapId").html(capitals[branchname.substr(11,branchname.length-1)]+'拜访数据展示图');
});

function Init_All(selDayStr) {
    var selDate;
    if(selDayStr == undefined || selDayStr == null) {
        selDate = new Date();
    } else {
        selDate = new Date(selDayStr);
    }
    $("#year").val(getYear(selDate));
    $("#month").val(getMonth(selDate));
    $("#day").val(getDay(selDate));
    $("#selDay").val(getDay(selDate));
    selDate.setDate(selDate.getDate() - 13);
    $("#day14").val(getDay(selDate));

    ajaxData_1001();
    ajaxData_1002();
    if(configType!='02')
        //buildMap(); 后修改  // ajaxData_1004();  deprecated
    ajaxData_1007();
    ajaxData_1008();
    ajaxData_1009();
    ajaxData_1010();
    ajaxData_1011();
    ajaxData_1012();
    if(configType!='02')
        //ajaxData_1013(); 后修改
    if(configType!='02')
        //ajaxData_1014(); 后修改

    // 拜访明细
    // deprecated ajaxData_n();
    ajaxDate_visit_list();

    ajaxData_1025();
    //ajaxData_1026();
    ajaxData_1027();
    //ajaxData_1028();

    ajaxData_1003();
    ajaxData_1039();

}

window.Init_All_Time = function(selDayStr) {
    var selDate;
    if(selDayStr == undefined || selDayStr == null) {
        selDate = new Date();
    } else {
        selDate = new Date(selDayStr);
    }
    $("#year").val(getYear(selDate));
    $("#month").val(getMonth(selDate));
    $("#day").val(getDay(selDate));
    $("#selDay").val(getDay(selDate));
    selDate.setDate(selDate.getDate() - 13);
    $("#day14").val(getDay(selDate));

    ajaxData_1001();
    ajaxData_1002();
    if(configType!='02')
        //buildMap(); 后修改   // ajaxData_1004();  deprecated
    ajaxData_1007();
    ajaxData_1008();
    ajaxData_1009();
    ajaxData_1010();
    ajaxData_1011();
    ajaxData_1012();
    if(configType!='02')
        //ajaxData_1013(); 后修改
    if(configType!='02')
        //ajaxData_1014(); 后修改

    // 拜访明细
    // deprecated ajaxData_n();
    ajaxDate_visit_list();

    ajaxData_1025();
    //ajaxData_1026();
    ajaxData_1027();
    //ajaxData_1028();

    ajaxData_1003();
    ajaxData_1039();

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

var row=[];
//总拜访客户
function ajaxData_1001(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1001;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        //async : false,
        cache : false,
        success: function(data){
            row=data.Rows;
            $('.visiting_customers h2:eq(0)').html(row[0].cusNum)
            $('.visiting_customers h2:eq(1)').html(row[0].signNum)
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}
//总拜访门店
function ajaxData_1002(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1002;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            $('.visiting_store h2:eq(0)').html(row[0].stroeNum)
            $('.visiting_store h2:eq(1)').html(row[0].signNum)
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}
//业务人员
function ajaxData_1003(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1003;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            $('.lazur-bg h2:eq(0)').html(row[0].salerNum);
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

//行走公里数
function ajaxData_1039(){
    var parms = $("#queryForm").serializeObject();
    
    parms.interfaceId=1039;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            $('.lazur-bg h2:eq(1)').html(row[0].walkMiles.toFixed(2));
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

//今日拜访客户
function ajaxData_1007(){
    // 实际拜访
    var todayClientActualVisitNum = 0.0;
    var todayClientPlanVisitNum = 0.0;
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1007;
    //var today= new Date();
    //var year = today.getFullYear();
    //var month = (1+today.getMonth())<10?'0'+(1+today.getMonth()):(1+today.getMonth());
    //var day = today.getDate()<10?'0'+today.getDate():today.getDate();
    //parms.day=year+'-'+month+'-'+day;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            todayClientActualVisitNum = row[0].signNum;
            $('#todayClientActualVisitNum').html(row[0].signNum);

            // 今日计划拜访客户次数
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1029;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                success: function(data) {
                    todayClientPlanVisitNum = data.Rows[0].planNum;
                    $("#todayClientPlanVisitNum").html(todayClientPlanVisitNum);
                    if(todayClientPlanVisitNum == undefined || todayClientPlanVisitNum ==0){
                        $('#todayClientVisitRate').html('0%');
                    } else {
                        var todayClientVisitRate = parseFloat(todayClientActualVisitNum) / parseFloat(todayClientPlanVisitNum);
                        $('#todayClientVisitRate').html((todayClientVisitRate*100).toFixed(0) + '%');
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });
        },
        error:function(data){
            window.console.log('get data error');
        }
    });

}



//今日拜访门店
function ajaxData_1008(){

    // 实际拜访门店次数
    var todayStoreActualVisitNum = 0.0;
    var todayStorePlanVisitNum = 0.0;

    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1008;
    //var today= new Date();
    //var year = today.getFullYear();
    //var month = (1+today.getMonth())<10?'0'+(1+today.getMonth()):(1+today.getMonth());
    //var day = today.getDate()<10?'0'+today.getDate():today.getDate();
    //parms.day=year+'-'+month+'-'+day;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        async: false,
        success: function(data){
            row=data.Rows;
            todayStoreActualVisitNum = row[0].signNum;
            $('#todayStoreActualVisitNum').html(row[0].signNum);

            // 今日计划拜访
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId = 1030;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                success: function(data){
                    todayStorePlanVisitNum = data.Rows[0].planNum;
                    $('#todayStorePlanVisitNum').html(data.Rows[0].planNum);
                    if(todayStorePlanVisitNum == undefined || todayStorePlanVisitNum ==0){
                        $('#todayStoreVisitRate').html('0%');
                    } else {
                        var todayStoreVisitRate = todayStoreActualVisitNum / todayStorePlanVisitNum;
                        $('#todayStoreVisitRate').html((todayStoreVisitRate*100).toFixed(0) + '%');
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });


        },
        error:function(data){
            window.console.log('get data error');
        }
    });

}


//本月拜访客户
function ajaxData_1009(){

    // 本月实际拜访客户
    var curMonthVisitRequirementClientCount = 0.0;
    var curMonthVisitActualClientCount = 0.0;
    var curMonthVisitClientCountRate = 0.0;

    var curMonthVisitRequirementClientFreq = 0.0;
    var curMonthVisitActualClientFreq = 0.0;
    var curMonthVisitClientFreqRate = 0.0;

    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1009;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        //async: false,
        success: function(data){
            //window.console.log(data);
            row=data.Rows;
            curMonthVisitActualClientCount = row[0].cusNum;
            curMonthVisitActualClientFreq = row[0].signNum;
            $("#curMonthVisitActualClientCount").html(curMonthVisitActualClientCount);
            $("#curMonthVisitActualClientFreq").html(curMonthVisitActualClientFreq);

            // 本月拜访频次要求
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1026;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                async: false,
                success: function(data) {
                    row=data.Rows;
                    for(var i=0; i<row.length; i++) {
                        curMonthVisitRequirementClientFreq = curMonthVisitRequirementClientFreq + row[i].requirements;
                    }
                    $("#curMonthVisitRequirementClientFreq").html(curMonthVisitRequirementClientFreq);
                    if(curMonthVisitRequirementClientFreq  == undefined || curMonthVisitRequirementClientFreq ==0) {
                        $("#curMonthVisitClientFreqRate").html("0%");
                    } else {
                        curMonthVisitClientFreqRate = curMonthVisitActualClientFreq / curMonthVisitRequirementClientFreq;
                        $("#curMonthVisitClientFreqRate").html((curMonthVisitClientFreqRate * 100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });

            // 本月客户拜访要求的数量
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1025;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                async: false,
                success: function(data){
                    //window.console.log(data);
                    row=data.Rows;
                    curMonthVisitRequirementClientCount = row[0].cusNum;
                    $("#curMonthVisitRequirementClientCount").html(curMonthVisitRequirementClientCount);
                    if (curMonthVisitRequirementClientCount == undefined || curMonthVisitRequirementClientCount == 0) {
                        $("#curMonthVisitClientCountRate").html("0%");
                    } else {
                        curMonthVisitClientCountRate = curMonthVisitActualClientCount / curMonthVisitRequirementClientCount;
                        $("#curMonthVisitClientCountRate").html((curMonthVisitClientCountRate * 100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });

        },
        error:function(data){
            window.console.log('get data error');
        }
    });

}

//本月拜访门店
function ajaxData_1010(){

    var curMonthVisitRequirementStoreCount = 0.0;
    var curMonthVisitActualStoreCount = 0.0;
    var curMonthVisitStoreCountRate = 0.0;

    var curMonthVisitRequirementStoreFreq = 0.0;
    var curMonthVisitActualStoreFreq = 0.0;
    var curMonthVisitStoreFreqRate = 0.0;

    // 本月实际拜访门店
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1010;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            curMonthVisitActualStoreCount = row[0].stroeNum;
            curMonthVisitActualStoreFreq = row[0].signNum;
            $("#curMonthVisitActualStoreCount").html(curMonthVisitActualStoreCount);
            $("#curMonthVisitActualStoreFreq").html(curMonthVisitActualStoreFreq);

            // 本月要求拜访门店的数量
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1027;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                success: function(data){
                    curMonthVisitRequirementStoreCount = data.Rows[0].storeNum;
                    $("#curMonthVisitRequirementStoreCount").html(curMonthVisitRequirementStoreCount);
                    if (curMonthVisitRequirementStoreCount == undefined || curMonthVisitRequirementStoreCount == 0) {
                        $("#curMonthVisitStoreCountRate").html("0%");
                    } else {
                        curMonthVisitStoreCountRate = curMonthVisitActualStoreCount / curMonthVisitRequirementStoreCount;
                        $("#curMonthVisitStoreCountRate").html((curMonthVisitStoreCountRate * 100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });

            // 本月要求拜访门店的频次
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1028;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                success: function(data) {
                    row=data.Rows;
                    for(var i=0; i<row.length; i++) {
                        curMonthVisitRequirementStoreFreq = curMonthVisitRequirementStoreFreq + row[i].requirements;
                    }
                    $("#curMonthVisitRequirementStoreFreq").html(curMonthVisitRequirementStoreFreq);
                    if (curMonthVisitRequirementStoreFreq == undefined || curMonthVisitRequirementStoreFreq == 0) {
                        $("#curMonthVisitStoreFreqRate").html("0%");
                    } else {
                        curMonthVisitStoreFreqRate = curMonthVisitActualStoreFreq / curMonthVisitRequirementStoreFreq;
                        $("#curMonthVisitStoreFreqRate").html((curMonthVisitStoreFreqRate * 100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });

        },
        error:function(data){
            window.console.log('get data error');
        }
    });

}


//本年拜访客户
function ajaxData_1011() {

    var year = $("#year").val();
    var month = $("#month").val();
    var monthInt = parseInt(month.substring(5, 7));
    var num = monthInt;
    if(year == 2017 || year == '2017') {
        num = monthInt - 4;
    }

    var curYearVisitActualClientFreq = 0.0;
    var curYearVisitRequirementClientFreq = 0.0;
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1011;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            curYearVisitActualClientFreq = row[0].signNum;
            $("#curYearVisitActualClientFreq").html(curYearVisitActualClientFreq);

            // 年度拜访客户月度的频次要求
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1026;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                async: false,
                success: function(data) {
                    row=data.Rows;
                    for(var i=0; i<row.length; i++) {
                        curYearVisitRequirementClientFreq = curYearVisitRequirementClientFreq + row[i].requirements;
                    }
                    curYearVisitRequirementClientFreq = curYearVisitRequirementClientFreq * num;
                    $("#curYearVisitRequirementClientFreq").html(curYearVisitRequirementClientFreq);

                    if (curYearVisitRequirementClientFreq == undefined || curYearVisitRequirementClientFreq == 0 || curYearVisitRequirementClientFreq == null) {
                        $("#curYearVisitClientFreqRate").html("0%");
                    } else {
                        var curYearVisitClientFreqRate = curYearVisitActualClientFreq / curYearVisitRequirementClientFreq;
                        $("#curYearVisitClientFreqRate").html((curYearVisitClientFreqRate*100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });

        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

//本年拜访门店
function ajaxData_1012(){

    var year = $("#year").val();
    var month = $("#month").val();
    var monthInt = parseInt(month.substring(5, 7));
    var num = monthInt;
    if(year == 2017 || year == '2017') {
        num = monthInt - 4;
    }

    var curYearVisitActualStoreFreq = 0.0;
    var curYearVisitRequirementStoreFreq = 0.0;
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1012;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            row=data.Rows;
            curYearVisitActualStoreFreq = row[0].signNum;
            $("#curYearVisitActualStoreFreq").html(curYearVisitActualStoreFreq);

            // 本年
            var parms = $("#queryForm").serializeObject();
            parms.interfaceId=1028;
            $.ajax({
                type: "POST",
                url: "/ptDataShow/echarts/postDataFromEs",
                data: parms,
                dataType: "json",
                success: function(data) {
                    row=data.Rows;
                    for(var i=0; i<row.length; i++) {
                        curYearVisitRequirementStoreFreq = curYearVisitRequirementStoreFreq + row[i].requirements;
                    }
                    curYearVisitRequirementStoreFreq = curYearVisitRequirementStoreFreq * num;
                    $("#curYearVisitRequirementStoreFreq").html(curYearVisitRequirementStoreFreq);

                    if(curYearVisitRequirementStoreFreq == undefined || curYearVisitRequirementStoreFreq == null || curYearVisitRequirementStoreFreq == 0){
                        $("#curYearVisitStoreFreqRate").html("0%");
                    } else {
                        var curYearVisitStoreFreqRate = curYearVisitActualStoreFreq / curYearVisitRequirementStoreFreq;
                        $("#curYearVisitStoreFreqRate").html((curYearVisitStoreFreqRate * 100).toFixed(0) + "%");
                    }
                },
                error:function(data){
                    window.console.log('get data error');
                }
            });


        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}



//本年客户拜访月度趋势图
function ajaxData_1013(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1013;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            if(data && data.Rows && data.Rows.length>0) {
                areaMap(data.Rows);
            }
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

//本年门店拜访月度趋势图
function ajaxData_1014(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1014;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data) {
            if(data && data.Rows && data.Rows.length>0) {
                storeMap(data.Rows);
            }
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

// Deprecated
function ajaxData_1025(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1025;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            $('.cusVis h2:eq(0)').html(data.Rows[0].cusNum);
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

// Deprecated
function ajaxData_1026(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1026;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            var requirements=0;
            for(var i=0;i<data.Rows.length;i++){
                requirements += data.Rows[i].requirements;
            }
            $('.cusVis h2:eq(1)').html(requirements);
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

// Deprecated
function ajaxData_1027(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1027;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            $('.storeVis h2:eq(0)').html(data.Rows[0].storeNum);
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

// // Deprecated
// 门店拜访频次要求
function ajaxData_1028(){
    var parms = $("#queryForm").serializeObject();
    parms.interfaceId=1028;
    $.ajax({
        type: "POST",
        url: "/ptDataShow/echarts/postDataFromEs",
        data: parms,
        dataType: "json",
        success: function(data){
            var requirements=0;
            for(var i=0;i<data.Rows.length;i++){
                requirements += data.Rows[i].requirements;
            }
            $('.storeVis h2:eq(1)').html(requirements);
        },
        error:function(data){
            window.console.log('get data error');
        }
    });
}

$('.customer_list .problem').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})