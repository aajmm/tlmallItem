{
    "_options" : {
        "openLinkInSameWindow" : true,
"removeStyle" : false,
"cleanImg": false,
"cleanTable": false,
"cleanFrame": false,
"cleanEmbed": false
    },
    "_patterns": {WrongPage
:
function($){
return $("#error").length!=0
},
upgraded
:
function($){
return $("#UpdatePage").length!=0
},
checkstandOnline
:
function($){
return $("#qy_account").length!=0
},
payResult
:
function($){
return $(".btn_group_c").length!=0
},
wuquangoumai
:
function($){
return ($('.divide-tip').length > 0 && $('.divide-tip').text().indexOf('抱歉')!==-1)
}},
    "_helpers" : // 自定义API中的函数是在本项目下所有模块中都可以共用。用法如下：
// 在这里定义一个函数，例如 getHost: function() { return window.location.host; } ，
// 在数据采集代码中通过 context._helpers 调用这个函数，例如 context._helpers.getHost()  

{
    getHost: function() {
        return window.location.host;
    },
    pageLoading: function() {
        $("body").append('<div class="pageLoading" style="background:rgba(255,255,255,.9); position:fixed; left:0px; right:0px; top:0px; bottom:0px; margin-bottom:0px; z-index:9999;"><img class="loadingImg" style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); z-index:9999; width:75px; height:auto" src="' + context.__root + 'loadingImg1.gif' + '" /></div>');
    },
    loadingHidden: function() {
        /*$("body").children(".pageLoading").children(".loadingImg").css("left","0px");*/
        setTimeout(function() {
            $("body").children(".pageLoading").remove();
        }, 1000);
    },
    addGrey: function(parentElem, childElement) {
        var url = "";
        $(parentElem).find(childElement).bind("click", function() {
            var _this = this;
            event.preventDefault();
            /*if(event.target.tagName === "A"){
                event.preventDefault();
            }
            else if(event.target.tagName === "IMG"){
                event.preventDefault();//.preventPropagation();
            }*/
            url = $(_this).find("a").eq(0).attr("href") || $(_this).attr("href");// For .tlmall-top-navbar
            console.log("The page is changing into " + url + "...");
            $(_this).addClass("am-grey");
            var a = setTimeout(function() {
                $(_this).removeClass("am-grey");
            }, 500);
            var b = setTimeout(function() {
                window.location.href = url;
            }, 1000);
        });
        /*$(parentElem).find(childElement).bind("touchstart",function(){
            $(parentElem).find(childElement).removeClass("am-grey");
            var _this=this;
            if(event.target.tagName==="A"){
                event.preventDefault();
            }
            url=$(_this).find("a").eq(0).attr("href");
            $(_this).addClass("am-grey");
        })
        $(parentElem).find(childElement).bind("touchmove",function(e){
            $(this).unbind("touchstart touchend");
        })
        $(parentElem).find(childElement).bind("touchend",function(){
            var _this=this;
            $(_this).removeClass("am-grey");
            var b=setTimeout(function(){
                window.location.href=url;
            },500)
        })*/
    },
    addRed: function(parentElem, childElement) {
        var url = "";
        $(parentElem).find(childElement).bind("click", function() {
            //console.log("111");
            var _this = this;
            if (event.target.tagName === "A") {
                event.preventDefault();
            }
            url = $(_this).find("a").eq(0).attr("href");
            //$(_this).addClass("am-grey");
            //console.log("222");
            $(_this).find("*").addClass("am-red");
            var a = setTimeout(function() {
                //$(_this).removeClass("am-grey");
                $(_this).find("*").removeClass("am-red");
            }, 500);
            var b = setTimeout(function() {
                window.location.href = url;
            }, 1000);
        });
        /*$(parentElem).find(childElement).bind("touchstart",function(){
            $(parentElem).find(childElement).removeClass("am-grey");
            var _this=this;
            if(event.target.tagName==="A"){
                event.preventDefault();
            }
            url=$(_this).find("a").eq(0).attr("href");
            $(_this).addClass("am-grey");
        })
        $(parentElem).find(childElement).bind("touchmove",function(e){
            $(this).unbind("touchstart touchend");
        })
        $(parentElem).find(childElement).bind("touchend",function(){
            var _this=this;
            $(_this).removeClass("am-grey");
            var b=setTimeout(function(){
                window.location.href=url;
            },500)
        })*/
    },
    addRedAndUnderline: function(parentElem, childElement) {// for 'giftlist' page 
        var url = "";
        $(parentElem).find(childElement).bind("click", function() {
            //console.log("111");
            event.preventDefault();
            url = $(this).attr("href");
            //$(_this).addClass("am-grey");
            //console.log("222");
            $(this).siblings().removeClass("act");
            $(this).addClass("act");
            var a = setTimeout(function() {
                //$(_this).removeClass("am-grey");
                //$(this).find("*").removeClass("am-red");
            }, 500);
            var b = setTimeout(function() {
                window.location.href = url;
            }, 1000);
        });
    },
    inputBtnTurnRed: function(parentElem, childElement) {
        //var themeRed = "#e7350d";
        // $(parentElem).find("input[type='button']").on("click", function() {
        //     $(this).css("border-color", themeRed)
        //         .css("color", themeRed);
        // });
        
        // var url = "";
        
        // 先将原本行内的 onclick 事件赋值给 data-click-func 自定义属性
        $(parentElem).find(childElement).each(function(){
            var initOnclickFunc = $(this).attr("onclick");
            $(this).attr("onclick",null);
            $(this).attr("data-click-func", initOnclickFunc);
        });
        $(parentElem).find(childElement).on("click.zero", function() {
            // event.preventDefault();
            // url = $(this).attr("href");
            var self = this;
            $(this).addClass("act")
                .siblings().removeClass("act");
            
            // 恢复原本行内的 onclick 事件
            var initOnclickFunc = $(this).attr("data-click-func");
            $(this).attr("onclick", initOnclickFunc);
            /*var b = setTimeout(function() {
                //window.location.href = url;
                $(self).removeClass("act");
            }, 500);*/
            var a = setTimeout(function() {
                //$(_this).removeClass("am-grey");
                //$(this).find("*").removeClass("am-red");
                $(self).off("click.zero");
                $(self).trigger("click");
            }, 1000);
            /*var b = setTimeout(function() {
                //window.location.href = url;
            }, 1000);*/
        });
    },
    addOutline: function(parentElem, childElement) {
        var url = "";
        $(parentElem).find(childElement).bind("click", function() {
            console.log("111");
            var _this = this;
            event.preventDefault();
            /*if(event.target.tagName==="A"){
                event.preventDefault();
            }
            else if(event.target.tagName === "IMG"){
                event.preventDefault();//.preventPropagation();
            }*/
            url = $(_this).find("a").eq(0).attr("href");
            //$(_this).addClass("am-grey");
            console.log("222");
            $(_this).addClass("am-Outline");
            var a = setTimeout(function() {
                //$(_this).removeClass("am-grey");
                $(_this).removeClass("am-Outline");
            }, 500);
            var b = setTimeout(function() {
                window.location.href = url;
            }, 1000);
        });
        /*$(parentElem).find(childElement).bind("touchstart",function(){
            $(parentElem).find(childElement).removeClass("am-grey");
            var _this=this;
            if(event.target.tagName==="A"){
                event.preventDefault();
            }
            url=$(_this).find("a").eq(0).attr("href");
            $(_this).addClass("am-grey");
        })
        $(parentElem).find(childElement).bind("touchmove",function(e){
            $(this).unbind("touchstart touchend");
        })
        $(parentElem).find(childElement).bind("touchend",function(){
            var _this=this;
            $(_this).removeClass("am-grey");
            var b=setTimeout(function(){
                window.location.href=url;
            },500)
        })*/
    },
    addList_red: function(parentElem, childElement) {
        var url = "";
        $(parentElem).find(childElement).bind("click", function() {
            var _this = this;
            if (event.target.tagName === "A") {
                event.preventDefault();
            }
            url = $(_this).attr("href");
            //$(_this).addClass("am-grey");
            $(_this).addClass("am-List_red");
            var a = setTimeout(function() {
                //$(_this).removeClass("am-grey");
                $(_this).removeClass("am-List_red");
            }, 500);
            var b = setTimeout(function() {
                window.location.href = url;
            }, 1000);
        });
        /*$(parentElem).find(childElement).bind("touchstart",function(){
            $(parentElem).find(childElement).removeClass("am-grey");
            var _this=this;
            if(event.target.tagName==="A"){
                event.preventDefault();
            }
            url=$(_this).find("a").eq(0).attr("href");
            $(_this).addClass("am-grey");
        })
        $(parentElem).find(childElement).bind("touchmove",function(e){
            $(this).unbind("touchstart touchend");
        })
        $(parentElem).find(childElement).bind("touchend",function(){
            var _this=this;
            $(_this).removeClass("am-grey");
            var b=setTimeout(function(){
                window.location.href=url;
            },500)
        })*/
    },
    isIOS: function(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if( isiOS ){
            return true;
        }else{
            return false;
        }
    }
}
    ,
    "title" : function($, context) {
        return $("title").html();
    },
    "content" : function($, context) {
        return context.select({
            "^/myaccount/storeAllocateCargo/storeAllocateCargo.jsp": { "modules": [], "template" : "Newallocatecargo.phone",
"blank-301": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8e";
__result.id = "blank-301";
return __result;
},"blank-301": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8e";
__result.id = "blank-301";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-302": function($, context) {

var __data = (function(){
var $bodyvar=''
$("body").find("var").each(function(){
    $bodyvar+=$(this).outerHTML()
})
var data = {
    //html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML()+$(".selt_normal").outerHTML()    +$('.btn_export').outerHTML()  //2017.7.12
    //html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML() +$(".selt_normal").outerHTML()//2017.7.12
    html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML()+$(".selt_normal").outerHTML() +$('.wb_r').children('.ablock').children('.pd_lr').children('div').eq(2).children('.btns_r').children('input').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf4";
__result.id = "blank-302";
return __result;
},"blank-336": function($, context) {

var __data = (function(){
//2018-3-22修改分货
var a=''; 
$(".dealGoods").each(function(){
    a+="<div class='dealGoods'>"
    a+=$(this).find("h4").outerHTML()
    a+="<div class='ck tb_l'>"+$(this).find("table").find("th.ck").html()+"</div>"
   $(this).find(".table_a").find("tbody").find("tr").each(function(i){
       a+="<ul class='fhbox_all'>"
    if(i>0){
    a+="<div class='fhlist'>";
        a+="<li class='gstitle'>";
        a+=$(this).find("td").eq(2).text().trim();
        a+="</li>";
        a+="<li class='lst'>";
        a+="<span>"+$(this).find("td.ck").html()+"</span>";
        a+="<div class='pro_content'>";
        a+="<span>产品名称："+$(this).find("td").eq(1).html()+"</span>";
        a+="<span>项目："+$(this).find("td").eq(3).text().trim()+"</span>";
        a+="<span>品牌："+$(this).find("td").eq(4).text().trim()+"</span>";
        a+="<span>机型："+$(this).find("td").eq(5).text().trim()+"</span>";
        a+="<span>颜色："+$(this).find("td").eq(6).text().trim()+"</span>";
        a+="<span>分货批次："+$(this).find("td").eq(8).text().trim()+"</span>";
        
        
        a+="</div></li>";
        a+="<li>";
        a+="<span>商品单价：</span><span>"+$(this).find("td").eq(7).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>分货数量："+$(this).find("td").eq(9).text().trim()+"</span>";
        a+="<span>购买数量："+$(this).find("td").eq(10).html()+"</span>";
        a+="</li>";
        a+="</div>";
        a+="</ul>"
    }
            
}) 
a+="</div>"
})
var data = {
    content: a   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58a6c60baae1fe0363d6c004";
__result.id = "blank-336";
return __result;
},"blank-337": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var data = {
   // content:/*$(".table_a").find("tbody").find("tr").eq(0).find(".ck").outerHTML() +*/$(".mg_tb12").outerHTML()/* +a */ //填写paragraph的内容
   //content:/*$(".table_a").find("tbody").find("tr").eq(0).find(".ck").outerHTML()*/$(".table_btm_btns").outerHTML()/* +a */ //填写paragraph的内容
   content:$('.wb_r').children('.ablock').eq(0).children('.pd_lr').children('div').eq(2).children('.btns_r').find('.addMultiToCart').outerHTML()+$('.wb_r').children('.ablock').eq(0).children('.pd_lr').children('div').eq(2).children('.btns_r').find('.oneKeyBuyBtn').outerHTML()//2018.08.20
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58a953a7065bb5046378c51f";
__result.id = "blank-337";
return __result;
},"blank-305": function($, context) {

var __data = (function(){
var data = {
    content:$(".fixedscroll").outerHTML() +$("#reAdd").outerHTML()   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d82";
__result.id = "blank-305";
return __result;
},"blank-306": function($, context) {

var __data = (function(){
var data = {
    content:$(".pagenext").outerHTML()   //填写paragraph的内容
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d1a";
__result.id = "blank-306";
return __result;
},"blank-307": function($, context) {

var __data = (function(){
$("#branchRef").find("option").eq(0).text("全部");
var a = '';
$("#branchRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ccf";
__result.id = "blank-307";
return __result;
},"blank-335": function($, context) {

var __data = (function(){
$("#storeRef").find("option").eq(0).text("全部");
var a = '';
$("#storeRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58a6c3f39dec615272b74271";
__result.id = "blank-335";
return __result;
},"blank-308": function($, context) {

var __data = (function(){
$("#projectRef").find("option").eq(0).text("全部");
var a = '';
$("#projectRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5d";
__result.id = "blank-308";
return __result;
},"blank-460": function($, context) {

var __data = (function(){
$("#batchStrRef").find("option").eq(0).text("全部");
var a = '';
$("#batchStrRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5ab3115e38172d4eb782874d";
__result.id = "blank-460";
return __result;
},"blank-520": function($, context) {

var __data = (function(){
$("#modelRef").find("option").eq(0).text("全部");
var a = '';
$("#modelRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b7a335fdae1f26962e36380";
__result.id = "blank-520";
return __result;
},"blank-338": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58aa6b1daae1fe0363d6c2e9";
__result.id = "blank-338";
return __result;
},"blank-339": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58abafbc9dec615272b7438e";
__result.id = "blank-339";
return __result;
},"blank-401": function($, context) {

var __data = (function(){
// 修改提示弹窗的结构
var $warn = $("#errorPop");
$warn.prepend('<div class="bigHide"></div>');



var data = {
    
    html: $warn.outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5901d45ff29b0082d05caefd";
__result.id = "blank-401";
return __result;
}
},"$$WrongPage": { "modules": [], "template" : "WrongPage.phone",
"default":function($, context) {
return "<h1>待开发之中</h1>";
}
},"$$upgraded": { "modules": [], "template" : "upgraded.phone",
"blank-317": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c40";
__result.id = "blank-317";
return __result;
}
},"^/myaccount/accountManage/myAccount.jsp": { "modules": ["paragraph", "navbar"], "template" : "myAccount.phone",
"blank-398": function($, context) {

var __data = (function(){
var a='';
$('body').find('script').each(function(){
    a+=$(this).outerHTML()
})



var data = {
    //2018-02-05我的华为体验店
    //fixedscroll:$('#fixedscroll').outerHTML(),
    title: a,
    //center_imgs:$('.center_imgs').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58f02d28cc7a60b8f7c870cd";
__result.id = "blank-398";
return __result;
},"blank-322": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d24";
__result.id = "blank-322";
return __result;
},"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-57": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c8d",
className:"myAccount-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
var data = {
    "content": "<img src ='"+context.__root + "img.png"+"'/>"+"<p><span>我是用户</span>("+$("#custNameAndUserName").find("span").outerHTML()+")</p>"   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-58": function($, context) {

var __data = (function(){
var data = {
    a: $("#topLogin").find("li").eq(1).find("a").attr("href"),
   // b: $(".xf_right").find(".xf_r1").eq(0).find(".xf_alink").attr("onclick")
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce2";
__result.id = "blank-58";
return __result;
},"paragraph-59": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d12",
className:"myAccount-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
$(".ablock").eq(0).find(".bs").find("b").each(function(){
    $(this).html($(this).text().trim())
})
var data = {
    "content": $(".ablock").eq(0).find(".bs").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-61": function($, context) {

var __data = (function(){
var _cc_=$(".nav_sidebar").outerHTML();

var data = {
    cc:_cc_,
    a: $(".xf_right").find(".xf_r1").eq(0).find(".xf_alink").attr("onclick"),
    count: $(".pos").outerHTML()
  
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cd9";
__result.id = "blank-61";
return __result;
},"paragraph-62": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d38",
className:"myAccount-ntalker",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=''
$("script").each(function(){
    if((/ntalker/.test($(this).src()))||(/NTKF_PARAM/.test($(this).html()))){
        a+=$(this).outerHTML()
    }
})
var data = {
    "content":a+$("#nTalk_post_hiddenElement").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-320": function($, context) {

var __data = (function(){
var data = {
    
    cotent: $(".pos").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cd8";
__result.id = "blank-320";
return __result;
},"navbar-60": function($, context) {
return {
__type:"navbar",
widgetId: "WIDGET-58607e87f8b220b4245e7c87",
className:"myAccount-navbar",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","cols":4},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：应用amui中现成的图标数据填写在以下数据中，直接形成想要的按钮。
 
 常用用途：显示在手机下方固定的位置，有一键拨号、二维码等功能按钮。
 
 了解AMUI模块详情，请访问http://ide.yunshipei.com/doc/amui/#icon。

         示例代码：
        
         var data = [
             {
                 "title": "拨号", 
        
                 "link": "tel:0101245678", 
        
                 "customIcon": "xxx.png", 
        
                 "icon": "",
        
                 "dataApi": ""
             }, 
             {
                 "title": "分享", 
        
                 "link": "", 
        
                 "customIcon": "xxx.png", 
        
                 "icon": "share",
        
                 "dataApi": "data-am-navbar-share"
             }
         ];
         return data;
*/

var data = [
    {
        "title": "",        // title 值：要显示的文本

        "link": "/",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": context.__root + "icon-home.png",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "",        // title 值：要显示的文本

        "link": "/list",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": context.__root + "icon-kind.png",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "",        // title 值：要显示的文本

        "link": /*"/crs/cart/cart.jsp"*/"/cart/cart.jsp",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": context.__root + "icon-cart.png",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "",        // title 值：要显示的文本

        "link": "/notice/cmsList.jsp",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": context.__root + "icon-msg.png",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "",        // title 值：要显示的文本

        "link": "/myaccount/accountManage/myAccount.jsp",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": context.__root + "icon-yewu-red.png",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    }
];
return data;

}($, context))
}
},"blank-488": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30817345f6b43c145e7f56";
__result.id = "blank-488";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
},"blank-488": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30817345f6b43c145e7f56";
__result.id = "blank-488";
return __result;
}
},"^/ddsdffdsdfghdjjj": { "modules": ["paragraph", "slider", "gotop", "footer"], "template" : "index.phone",
"paragraph-430": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a17c97ecb7c8ee29f490264",
className:"paragraph-430",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
/*var a='';

$('.head_topl').children('h4').each(function(){
    var this1=this;
	 a+="<div><p>热门品牌</p><ul class='index-kinds'>"
    $(this1).children('a').each(function(){
		var this2=this;
		
		a+="<li><a href='"+$(this2).attr('href')+"'>"+$(this2).html()+"</a></li>"
       
    })
	a+="</ul></div>"
	 console.log(a)
})

var data = {
    "content": a   //填写paragraph的内容
};
return data;*/

}($, context))
}
},"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-51": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d70",
className:"index-0-var",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=''
$("body").children("var").each(function(){
    a+=$(this).outerHTML()
})
var b=''
$(".page").children("var").each(function(){
    b+=$(this).outerHTML()
})
var data = {
    "content": a+b   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-52": function($, context) {

var __data = (function(){
var b=$("#searchBox").attr("placeholder")
$(".hfl2").find("form").find("#searchBox").attr("placeholder",b)
$(".hfl2").find("form").find("#searchBtnTop").text("");
var data = {
    search: $(".hfl2").find("form").outerHTML(),
    hot: $(".hfl2").find(".sear_hot").outerHTML()
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c38";
__result.id = "blank-52";
return __result;
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-42": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd1",
className:"index-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$(".hfl2").find("#searchBox").attr("placeholder")
console.log(a)
$(".hfl2").find("form").find("#searchBox").attr("placeholder",a)
$(".hfl2").find("form").find("#searchBtnTop").text("");
var data = {
    "content": $(".time").outerHTML()+"<div class='lt-top'>"+$(".hcont").children("a").eq(0).outerHTML()+$(".hfl2").find("form").outerHTML() +$(".tc_right_lists").children("ul").find("li").eq(0).find("a").outerHTML() +"<div class='lt_province'>"+$(".span_v").outerHTML()+"<span></span></div></div>" //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-50": function($, context) {

var __data = (function(){
var a=''
$("#provinces").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html()
    a+="</li>"
})

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c7b";
__result.id = "blank-50";
return __result;
},"slider-49": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-58607e87f8b220b4245e7ca0",
className:"index-slider-7",
theme:"a1",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：从原网站采集图片滚动的图片路径放到json里返回到手机页面。

 常用用途：用来采放图片轮播的图片路径以及连接。

 了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#slider。

    示例代码：
     var content = [];
     $(".slideimg").find("ul").children("li").each(function(){
         content.push({
             "img": $(this).find("img").src(),
             "link": "" ,
             "thumb": "",
             "desc": ""
         });
     });
     return content;
 */


var content = [];
     $("#banner_tabs_mobile").find("#slides_mobile").children("li").each(function(){
         content.push({
             "img": $(this).find("a").attr("data"),
             "link": $(this).find("a").attr("href") ,
             "thumb": "",
             "desc": ""
         });
     });
return content;

}($, context))
}
},"paragraph-47": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7a",
className:"index-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href='###'><img src='"+context.__root + "group001.jpg"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-43": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2e",
className:"index-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>"+$(".cont1st_top").eq(0).find(".float_l").find("div").html()+"</span>" +"<a href='"+$(".cont1st_top").eq(0).find(".float_r").find("a").last().attr("href") +"'>更多产品</a>"  //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-341": function($, context) {

var __data = (function(){
/*var a=$(".pt_infos").find("h5").outerHTML()
var b = '';
b +="<marquee behavior='scroll' scrollamount='4' direction='left' >"
$(".pt_content").find("p").each(function(){
    b +=$(this).outerHTML()
})
b+="</marquee>"

var data = {
    aaa:  a,
    bbb:  b
};
return data;*/
var a=$(".pt_infos").children(".title").outerHTML();
var b='';
b +="<marquee behavior='scroll' scrollamount='4' direction='up' scrolldelay='100'>"
$(".pt_infos").find(".pt_content").find("li").each(function(){
    b +=$(this).outerHTML()
});
b+="</marquee>";
var data = {
    aaa:  a,
    bbb:  b
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58afd9ffaae1fe0363d6dfec";
__result.id = "blank-341";
return __result;
},"paragraph-44": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c54",
className:"index-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var first_floor='';
$(".cont1st").eq(0).find(".tab1").children("li").each(function(){
    first_floor+=$(this).outerHTML()
})
var data = {
    "content": first_floor+$('.pop_mask2').outerHTML()//2017/8/3  //填写paragraph的内容
};
return data;

    


}($, context))
}
},"blank-409": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-597ee8da0dee530ca8e580ea";
__result.id = "blank-409";
return __result;
},"gotop-45": function($, context) {
return {
__type:"gotop",
widgetId: "WIDGET-58607e87f8b220b4245e7c2f",
className:"index-gotop-5",
theme:"fixed",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
/*

 此模块的使用方法：采集原PC网站上的图片数据以及标题内容放到此模块。

 常用用途：回到顶部组件。

 了解Amaze UI的模块详情，请访问http://amazeui.org/widgets/gotop。

*/

var data = {
  "title":      "回到顶部",    // 显示文字（某些主题不显示）
  "icon":       "arrow-up",  // 图标名称，使用内置的 Icon Font
  "customIcon": ""          // 自定义图标 URL
};

return data;

}($, context))
}
},"blank-46": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c41";
__result.id = "blank-46";
return __result;
},"blank-428": function($, context) {

var __data = (function(){
$("#searchBtnTop").text("");
var aLi = "";
$(".h4_l1").find("li").each(function(){
    $(this).find(".float_r").find("a").html($(this).find(".float_l").html());
    var temp = $(this).find(".float_r").find("a").outerHTML();
    $(this).find(".float_l").remove()
    $(this).find(".float_r").remove();
    $(this).html(temp);
    aLi += $(this).outerHTML()
})
var data = {
    
    html: $(".hfl2").find("form").outerHTML(),
    /*nav1: $(".head_topl").find("h4").eq(0).find("span").eq(0).text(),
    nav2: $(".head_topl").find("h4").eq(1).find("span").eq(0).text(),
    nav3: $(".head_topl").find("h4").eq(2).find("span").eq(0).text(),
    nav4: $(".head_topl").find("h4").eq(3).find("span").eq(0).text()*/
    
    /*a1: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(0).attr("href"),
    a7: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(1).attr("href"),
    a8: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(2).attr("href"),
    a9: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(3).attr("href"),
    a10: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(4).attr("href"),
    a11: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(0).attr("href"),
    a12: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(1).attr("href"),
    a13: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(2).attr("href"),*/
    a1: $(".head_topl").find("h4").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find("a").eq(5).attr("href"),
    
    b1: $(".head_topl").find("h4").eq(1).find("a").eq(0).attr("href"),
    b2: $(".head_topl").find("h4").eq(1).find("a").eq(1).attr("href"),
    b3: $(".head_topl").find("h4").eq(1).find("a").eq(2).attr("href"),
    
    c1: $(".head_topl").find("h4").eq(2).find("a").eq(0).attr("href"),
    c2: $(".head_topl").find("h4").eq(2).find("a").eq(1).attr("href"),
    c3: $(".head_topl").find("h4").eq(2).find("a").eq(2).attr("href"),
   /* c4: $(".head_topl").find("h4").eq(2).find("a").eq(3).attr("href"),*/
    d1: $(".head_topl").find("h4").eq(3).find("a").eq(0).attr("href"),
    d2: $(".head_topl").find("h4").eq(3).find("a").eq(1).attr("href"),
    d3: $(".head_topl").find("h4").eq(3).find("a").eq(2).attr("href"),
    shouji: aLi
    
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a17933dcb7c8ee29f490257";
__result.id = "blank-428";
return __result;
},"blank-429": function($, context) {

var __data = (function(){
var data = {
    html: $("#alertCompleteInfos").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1793aacb7c8ee29f490258";
__result.id = "blank-429";
return __result;
},"footer-48": function($, context) {
return {
__type:"footer",
widgetId: "WIDGET-58607e88f8b220b4245e7d69",
className:"index-footer-6",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","modal":true,"addToHS":false,"techSupportCo":"","techSupportSite":"","textPosition":""},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：直接书写需要填写的公司字号，地址等内容。
 
 常用用途：放在页面底部，书写公司的名称或者地址等信息。
 
 了解AMUI模块详情，请访问http://ide.yunshipei.com/doc/amui/#footer。

         示例代码：
         var data = {
             "lang"      : context.__lang, 
             "owner"     : "xxx",      
             "companyInfo": [{       
                  "detail": "xxx"   
                 },{
                 "detail": "<a href = 'www.xxx.com' > xxx </a>"  
                 }]
         };
         return data;
 */

var data = {
    "lang": context.__lang,     // 默认，无需改动。若改动赋值为“en”则为英文，否则为中文！
    "owner": "",                // 网站名字 可以填写公司名称或者其他内容。
    "companyInfo": [
        {                       // 网站信息
            "detail": "北京普天太力通信科技有限公司"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        },
        {
            "detail": "京ICP证160780号"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        },
        {
            "detail": "“廉洁从业”监督举报邮箱：LJ@putiantaili.com"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        }
    ]
};
return data;

}($, context))
}
},"paragraph-430": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a17c97ecb7c8ee29f490264",
className:"paragraph-430",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
/*var a='';

$('.head_topl').children('h4').each(function(){
    var this1=this;
	 a+="<div><p>热门品牌</p><ul class='index-kinds'>"
    $(this1).children('a').each(function(){
		var this2=this;
		
		a+="<li><a href='"+$(this2).attr('href')+"'>"+$(this2).html()+"</a></li>"
       
    })
	a+="</ul></div>"
	 console.log(a)
})

var data = {
    "content": a   //填写paragraph的内容
};
return data;*/

}($, context))
}
},"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-51": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d70",
className:"index-0-var",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=''
$("body").children("var").each(function(){
    a+=$(this).outerHTML()
})
var b=''
$(".page").children("var").each(function(){
    b+=$(this).outerHTML()
})
var data = {
    "content": a+b   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-52": function($, context) {

var __data = (function(){
var b=$("#searchBox").attr("placeholder")
$(".hfl2").find("form").find("#searchBox").attr("placeholder",b)
$(".hfl2").find("form").find("#searchBtnTop").text("");
var data = {
    search: $(".hfl2").find("form").outerHTML(),
    hot: $(".hfl2").find(".sear_hot").outerHTML()
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c38";
__result.id = "blank-52";
return __result;
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-42": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd1",
className:"index-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$(".hfl2").find("#searchBox").attr("placeholder")
console.log(a)
$(".hfl2").find("form").find("#searchBox").attr("placeholder",a)
$(".hfl2").find("form").find("#searchBtnTop").text("");
var data = {
    "content": $(".time").outerHTML()+"<div class='lt-top'>"+$(".hcont").children("a").eq(0).outerHTML()+$(".hfl2").find("form").outerHTML() +$(".tc_right_lists").children("ul").find("li").eq(0).find("a").outerHTML() +"<div class='lt_province'>"+$(".span_v").outerHTML()+"<span></span></div></div>" //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-50": function($, context) {

var __data = (function(){
var a=''
$("#provinces").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html()
    a+="</li>"
})

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c7b";
__result.id = "blank-50";
return __result;
},"slider-49": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-58607e87f8b220b4245e7ca0",
className:"index-slider-7",
theme:"a1",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：从原网站采集图片滚动的图片路径放到json里返回到手机页面。

 常用用途：用来采放图片轮播的图片路径以及连接。

 了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#slider。

    示例代码：
     var content = [];
     $(".slideimg").find("ul").children("li").each(function(){
         content.push({
             "img": $(this).find("img").src(),
             "link": "" ,
             "thumb": "",
             "desc": ""
         });
     });
     return content;
 */


var content = [];
     $("#banner_tabs_mobile").find("#slides_mobile").children("li").each(function(){
         content.push({
             "img": $(this).find("a").attr("data"),
             "link": $(this).find("a").attr("href") ,
             "thumb": "",
             "desc": ""
         });
     });
return content;

}($, context))
}
},"blank-341": function($, context) {

var __data = (function(){
/*var a=$(".pt_infos").find("h5").outerHTML()
var b = '';
b +="<marquee behavior='scroll' scrollamount='4' direction='left' >"
$(".pt_content").find("p").each(function(){
    b +=$(this).outerHTML()
})
b+="</marquee>"

var data = {
    aaa:  a,
    bbb:  b
};
return data;*/
var a=$(".pt_infos").children(".title").outerHTML();
var b='';
b +="<marquee behavior='scroll' scrollamount='4' direction='up' scrolldelay='100'>"
$(".pt_infos").find(".pt_content").find("li").each(function(){
    b +=$(this).outerHTML()
});
b+="</marquee>";
var data = {
    aaa:  a,
    bbb:  b
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58afd9ffaae1fe0363d6dfec";
__result.id = "blank-341";
return __result;
},"paragraph-43": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2e",
className:"index-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>"+$(".cont1st_top").eq(0).find(".float_l").find("div").html()+"</span>" +"<a href='"+$(".cont1st_top").eq(0).find(".float_r").find("a").last().attr("href") +"'>更多产品</a>"  //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-44": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c54",
className:"index-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var first_floor='';
$(".cont1st").eq(0).find(".tab1").children("li").each(function(){
    first_floor+=$(this).outerHTML()
})
var data = {
    "content": first_floor+$('.pop_mask2').outerHTML()//2017/8/3  //填写paragraph的内容
};
return data;

    


}($, context))
}
},"blank-409": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-597ee8da0dee530ca8e580ea";
__result.id = "blank-409";
return __result;
},"blank-323": function($, context) {

var __data = (function(){

/*var first_floor='';
$(".cont1st").eq(0).find(".tab1").children("li").each(function(){
    first_floor+=$(this).outerHTML()
})
var data = {
    content: first_floor  //填写paragraph的内容
};
return data;
*/
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d83";
__result.id = "blank-323";
return __result;
},"paragraph-47": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7a",
className:"index-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href='###'><img src='"+context.__root + "group001.jpg"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"gotop-45": function($, context) {
return {
__type:"gotop",
widgetId: "WIDGET-58607e87f8b220b4245e7c2f",
className:"index-gotop-5",
theme:"fixed",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
/*

 此模块的使用方法：采集原PC网站上的图片数据以及标题内容放到此模块。

 常用用途：回到顶部组件。

 了解Amaze UI的模块详情，请访问http://amazeui.org/widgets/gotop。

*/

var data = {
  "title":      "回到顶部",    // 显示文字（某些主题不显示）
  "icon":       "arrow-up",  // 图标名称，使用内置的 Icon Font
  "customIcon": ""          // 自定义图标 URL
};

return data;

}($, context))
}
},"blank-46": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c41";
__result.id = "blank-46";
return __result;
},"blank-428": function($, context) {

var __data = (function(){
$("#searchBtnTop").text("");
var aLi = "";
$(".h4_l1").find("li").each(function(){
    $(this).find(".float_r").find("a").html($(this).find(".float_l").html());
    var temp = $(this).find(".float_r").find("a").outerHTML();
    $(this).find(".float_l").remove()
    $(this).find(".float_r").remove();
    $(this).html(temp);
    aLi += $(this).outerHTML()
})
var data = {
    
    html: $(".hfl2").find("form").outerHTML(),
    /*nav1: $(".head_topl").find("h4").eq(0).find("span").eq(0).text(),
    nav2: $(".head_topl").find("h4").eq(1).find("span").eq(0).text(),
    nav3: $(".head_topl").find("h4").eq(2).find("span").eq(0).text(),
    nav4: $(".head_topl").find("h4").eq(3).find("span").eq(0).text()*/
    
    /*a1: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(0).attr("href"),
    a7: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(1).attr("href"),
    a8: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(2).attr("href"),
    a9: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(3).attr("href"),
    a10: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(4).attr("href"),
    a11: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(0).attr("href"),
    a12: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(1).attr("href"),
    a13: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(2).attr("href"),*/
    a1: $(".head_topl").find("h4").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find("a").eq(5).attr("href"),
    
    b1: $(".head_topl").find("h4").eq(1).find("a").eq(0).attr("href"),
    b2: $(".head_topl").find("h4").eq(1).find("a").eq(1).attr("href"),
    b3: $(".head_topl").find("h4").eq(1).find("a").eq(2).attr("href"),
    
    c1: $(".head_topl").find("h4").eq(2).find("a").eq(0).attr("href"),
    c2: $(".head_topl").find("h4").eq(2).find("a").eq(1).attr("href"),
    c3: $(".head_topl").find("h4").eq(2).find("a").eq(2).attr("href"),
   /* c4: $(".head_topl").find("h4").eq(2).find("a").eq(3).attr("href"),*/
    d1: $(".head_topl").find("h4").eq(3).find("a").eq(0).attr("href"),
    d2: $(".head_topl").find("h4").eq(3).find("a").eq(1).attr("href"),
    d3: $(".head_topl").find("h4").eq(3).find("a").eq(2).attr("href"),
    shouji: aLi
    
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a17933dcb7c8ee29f490257";
__result.id = "blank-428";
return __result;
},"blank-429": function($, context) {

var __data = (function(){
var data = {
    html: $("#alertCompleteInfos").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1793aacb7c8ee29f490258";
__result.id = "blank-429";
return __result;
},"footer-48": function($, context) {
return {
__type:"footer",
widgetId: "WIDGET-58607e88f8b220b4245e7d69",
className:"index-footer-6",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","modal":true,"addToHS":false,"techSupportCo":"","techSupportSite":"","textPosition":""},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：直接书写需要填写的公司字号，地址等内容。
 
 常用用途：放在页面底部，书写公司的名称或者地址等信息。
 
 了解AMUI模块详情，请访问http://ide.yunshipei.com/doc/amui/#footer。

         示例代码：
         var data = {
             "lang"      : context.__lang, 
             "owner"     : "xxx",      
             "companyInfo": [{       
                  "detail": "xxx"   
                 },{
                 "detail": "<a href = 'www.xxx.com' > xxx </a>"  
                 }]
         };
         return data;
 */

var data = {
    "lang": context.__lang,     // 默认，无需改动。若改动赋值为“en”则为英文，否则为中文！
    "owner": "",                // 网站名字 可以填写公司名称或者其他内容。
    "companyInfo": [
        {                       // 网站信息
            "detail": "北京普天太力通信科技有限公司"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        },
        {
            "detail": "京ICP证160780号"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        },
        {
            "detail": "“廉洁从业”监督举报邮箱：LJ@putiantaili.com"        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        }
    ]
};
return data;

}($, context))
}
},"blank-325": function($, context) {

var __data = (function(){
var data = {
    cartNum: $(".hfl3").children(".shopCar_pos").html(),
    msgNum:$('.myMsgNum').outerHTML()//2018.2.1消息显示条数
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5e";
__result.id = "blank-325";
return __result;
}
},"^/reg.jsp": { "modules": ["paragraph"], "template" : "reg.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-63": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7ce3",
className:"reg-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>注册我的账号</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-64": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d5e",
className:"reg-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
$(".zc_input").eq(2).attr("placeholder","请输入确认密码");
$("#userName").attr("placeholder","请输入用户名");
$("#password").attr("placeholder","请输入密码");
var data = {
    "content":a+$(".wb100").outerHTML()  //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-65": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d84";
__result.id = "blank-65";
return __result;
}
},"^/notify/regOK.jsp": { "modules": ["paragraph"], "template" : "regok.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-68": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2f",
className:"regok-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>注册成功</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-69": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c30",
className:"regok-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
/*var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var data = {
    "content":a+$(".pwd").outerHTML()   //填写paragraph的内容
};
return data;*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var data = {
    "content": a+$(".zc_status").outerHTML()   //填写paragraph的内容
};
return data;
}($, context))
}
}
},"^/notify/agreement.jsp": { "modules": ["paragraph"], "template" : "agreement.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-66": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c86",
className:"agreement-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>太力商城注册协议</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-67": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d25",
className:"agreement-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
$(".btn").attr("onclick","javascript:history.go(-1)");
var data = {
    "content":/*a+$(".zhc_cont").outerHTML() */a+$(".zc_agreement").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/notify/completeInfoOK.jsp": { "modules": ["paragraph"], "template" : "completeInfook.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-70": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c55",
className:"completeInfook-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>审核状态</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-71": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd0",
className:"completeInfook-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var data = {
    "content":a+$(".wb01").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/myaccount/advance/AdvancePaymentCode.jsp": { "modules": ["paragraph"], "template" : "AdvancePaymentCode.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-72": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d71",
className:"AdvancePaymentCode-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>电子钱包密码设置</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-73": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7b",
className:"AdvancePaymentCode-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});


var $body = $("body");


var $form = $body.find("#seaSetManage");
var $labels = $form.find("#pwLabels");
var $hintPars = $form.find(".mg_b20");

var temp = null;
var temp2 = null;

// 修改文字
$form.find(".title_main").children("span").text("电子钱包管理");

// 修改“设置密码”单选框在 html 结构中的位置
temp = $labels.eq(0);
temp2 = temp.parent();
var tmp1 = temp2.wrapInner("<div class='seaChangeWrapper'></div>").find(".seaChangeWrapper").children("h5");
temp2.append(tmp1);
temp2.append(temp);

// 修改文字
temp = $labels.eq(1);
temp2 = temp.prev();
temp2.text("代客使用设置");

// 修改提示信息在 html 结构中的位置 & 修改提示信息文字
temp = $hintPars.eq(0);
temp2 = temp.children(".hint");//.detach();
temp.prepend(temp2);
temp = $hintPars.eq(1);
//temp.children("label").html("<em>*</em>密码");
temp2 = temp.children(".hint").addClass("lh-small");//.html("<em>*</em>提示：仅调整代客使用设置无需填写");//.detach();
temp.prepend(temp2);


$body.find("script").each(function(){
    if($(this).outerHTML().indexOf("iCheck/js/jquery.icheck.js") !== -1
        || $(this).html().indexOf("初始化页面禁用radio") !== -1){
        $(this).remove();
    }
});


var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-150": function($, context) {

var __data = (function(){
var data = {
    html: ""
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce6";
__result.id = "blank-150";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/advance/ewalletRecharge.jsp": { "modules": [], "template" : "ewalletRecharge.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-330": function($, context) {

var __data = (function(){
var data = {
    html: ""
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58621dbb9dec615272b71c9e";
__result.id = "blank-330";
return __result;
},"blank-329": function($, context) {

var __data = (function(){
var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");

// 考虑到节假日页面，做 dom 操作之前，先做一个 if 判断
if($body.find("#remarks").length > 0){
    console.log("remarks exist!")
    var memoLABEL = $body.find("#remarks").parent();
    var divB = $body.find("#remarks").parent().parent();
    divB.append(memoLABEL);
}
else if($body.find(".relax").length > 0) {// 节假日页面的图片需要 debug 一下
    // 在页面 head 里处理图片 src 的 bug ……
}

//var amountLABEL = $body.find("#amount").parent().parent();


// 去掉多余的 script
/*var $bJS = $body.find("script");
console.log("Num of scripts in body: "+$bJS.length);
if($bJS.length > 0){
    // // 如果像下面这样全部去掉，加载速度快了很多w
    // //console.log("test remove all script");
    // $bJS.remove();
    
    // 0th JS : #___szfw_logo___
    $bJS.eq(0).remove();
    
    // 1th JS : function(i,s,o,g,r,a,m) 【???
    // 2th JS : NTKF_PARAM = { ... uid:"C1490070", ... }
    // 3th JS : src="//dl.ntalker.com/js/b2b/ntkfstat.js?siteid=pt_1000" 【???
    // 4th JS : jq
    
    // 5th JS : header.js
    $bJS.eq(5).remove();
    
    // 6th JS : public.js
    $bJS.eq(6).remove();
    
    // 7th JS : ie7.js
    $bJS.eq(7).remove();
    
    // 8th JS is common.js
    $bJS.eq(8).remove();
    
    // 9th JS is contactService.js
    $bJS.eq(9).remove();
    
    // 10th JS is jquery.uploadify.min.js
    $bJS.eq(10).remove();
    
    // 11th JS : queryIncident.js 【电子钱包交易查询页面相关 js】
    $bJS.eq(11).remove();
    
    // 12th JS : function check() 【我要充值（本页）相关 js】
    
    //console.log("After remove, Num of scripts: "+$body.find("script").length);
}*/


var data = {
    html: js + $body.html()   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-586218ba9dec615272b71c97";
__result.id = "blank-329";
return __result;
},"blank-76": function($, context) {

var __data = (function(){
var a = '';
$("#branchSelect").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c97";
__result.id = "blank-76";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/detail\\/product\\.jsp.*": { "modules": ["tabs", "slider", "paragraph"], "template" : "product.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"tabs-82": function($, context) {
return {
__type:"tabs",
widgetId: "WIDGET-58607e87f8b220b4245e7c84",
className:"product-tabs-2",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","noSwipe":"1"},
realData:true,
content:(function($, context){
/*
 tabs: 1.0

 此模块的使用方法：采集原PC网站上的tab切换数据，在手机页面上生成tab切换效果。

 常用用途：通常用来采集一组tab切换标题以及文字等信息。

  了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#tabs。

         示例代码：

         var data = [];
         $(".listpart").eq(1).find("li").each(function(){
             data.push({
                 "title": $(this).find(".news-pic").find("img").src(),
                 "content": $(this).find(".news-pic").find("a")html(),
                 "active": ""
             });
         });
         return data;
*/

var data = [
    {
        "title":   "商品",   // 选项卡标题
        "content": "数据加载中...",   // 选项卡内容
        "active":  true // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    },
    {
        "title":   "详情",   // 选项卡标题
        "content": "数据加载中...",   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    }
];

return data;

}($, context))
}
},"blank-352": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.breadcrumb').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58c25ded53b4a14705461018";
__result.id = "blank-352";
return __result;
},"slider-83": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-58607e87f8b220b4245e7c8e",
className:"product-slider-3",
theme:"one",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：从原网站采集图片滚动的图片路径放到json里返回到手机页面。

 常用用途：用来采放图片轮播的图片路径以及连接。

 了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#slider。

    示例代码：
     var content = [];
     $(".slideimg").find("ul").children("li").each(function(){
         content.push({
             "img": $(this).find("img").src(),
             "link": "" ,
             "thumb": "",
             "desc": ""
         });
     });
     return content;
 */

var content = [];
 $("#imageMenu").find("ul").children("li").each(function(){
     //2017/10/26修改小图
     if($(this).find('img').attr('data')){
         content.push({
             "img": $(this).find("img").attr('data'),
             "link": "" ,
             "thumb": "",
             "desc": ""
         });
     }else if(!$(this).find('img').attr('data')){
        content.push({
             "img": $(this).find("img").src(),
             "link": "" ,
             "thumb": "",
             "desc": ""
         }); 
     }
 });
 return content;

}($, context))
}
},"paragraph-462": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5abc960038172d4eb7828ea5",
className:"paragraph-462-shipin",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<div class='videoShipin'>"+$('#vjsEnter').outerHTML()+$('.videoBox').outerHTML()+"</div>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-84": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d13",
className:"product-paragraph-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $(".stop_c").outerHTML()+$("#wishListIcon").outerHTML() //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-85": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})

var data = {
    analyticsScript:script1,
    kehuScript:script2
   
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d39";
__result.id = "blank-85";
return __result;
},"tabs-86": function($, context) {
return {
__type:"tabs",
widgetId: "WIDGET-58607e87f8b220b4245e7cd3",
className:"product-tabs-6",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","noSwipe":"1"},
realData:true,
content:(function($, context){
/*
 tabs: 1.0

 此模块的使用方法：采集原PC网站上的tab切换数据，在手机页面上生成tab切换效果。

 常用用途：通常用来采集一组tab切换标题以及文字等信息。

  了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#tabs。

         示例代码：

         var data = [];
         $(".listpart").eq(1).find("li").each(function(){
             data.push({
                 "title": $(this).find(".news-pic").find("img").src(),
                 "content": $(this).find(".news-pic").find("a")html(),
                 "active": ""
             });
         });
         return data;
*/

var data = [
    {
        "title":   "商品介绍",   // 选项卡标题
        "content": $("#shopLists").children("li").eq(0).html(),   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    },
    {
        "title":   "规格参数",   // 选项卡标题
        "content": $("#shopLists").children("li").eq(1).html(),   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    }
];

return data;

}($, context))
}
},"blank-88": function($, context) {

var __data = (function(){
var data = {
    aaa:$("#wishListPop").outerHTML()+$("#alertGoodsNotice").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c98";
__result.id = "blank-88";
return __result;
},"blank-90": function($, context) {

var __data = (function(){
var content="";
$(".stop_c").find("li.m_btm").each(function(){
    var _attr;
    var _this_=this;
    var _title=$(_this_).find(".tm").text().trim();//颜色选择和项目
    content+="<li>";
    content+="<div class='title'>"+_title+"</div>";
    content+="<div class='body'>";
    
    $(_this_).find(".classify_part").children("span").each(function(){
        var _this1_=this;
        var _class=this.className;
        var arr;
        var _string="";
        if($(this).attr("onclick")){
            arr=$(this).attr("onclick").replace(/.*\?(.*)'/,"$1").split('&');
            arr.forEach(function(e,i){
                var key=e.split('=')[0];
                var val=e.split('=')[1];
                _string+='data-'+key+'='+'"'+val+'" ';
                console.log('_string2019'+_string);
                
            })
        }
        if(/^vst/.test(_class)){
            content+="<span "+_string+" class='vst'>"+$(_this1_).text().trim()+"</span>";
        }else if(/disvst/.test(_class)){
            content+="<span "+_string+" class=' disvst'>"+$(_this1_).text().trim()+"</span>";
        }else if(/optionDisable/.test(_class)){
            content+="<span class='optionDisable'>"+$(_this1_).text().trim()+"</span>";
        }else if(/optionGray/.test(_class)){
            //2018/1/2修改class为optionGray没有data属性
            content+="<span "+_string+"class='optionGray'>"+$(_this1_).text().trim()+"</span>";
        }else{
            content+="<span "+_string+" class='act'>"+$(_this1_).text().trim()+"</span>";
        }
    })
    content+="</div>";
    content+="</li>"
})




var data = {
    image1: $("#imageMenu").find("li").eq(0).find("img").outerHTML(),
    text1: '<span class="top">'+$(".stop_c").children("ul").find("b").eq(0).text().trim()+'</span><span class="bottom">'+$(".stop_c").children("ul").find("li").eq(0).find("h4").text().trim()+'</span>',
    content1: content
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d85";
__result.id = "blank-90";
return __result;
},"blank-96": function($, context) {

var __data = (function(){
var a="";
$(".stop_c").find("li.m_btm").each(function(){
    var _this_=this;
    $(_this_).find(".classify_part").children("span").each(function(){
        var _class=this.className;
        if(/^vst/.test(_class)){
            a+="<span class='product-detail-type'>"+$(this).text().trim()+"</span>"
        }else if(/disvst/.test(_class)){
            a+="<span class='product-detail-type'>"+$(this).text().trim()+"</span>"
        }else{
            a+=""
        }
    })
})
var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c56";
__result.id = "blank-96";
return __result;
},"blank-89": function($, context) {

var __data = (function(){
var confirmType = 'typeConfirm()';
var content="";
$(".stop_c").find("li.m_btm").each(function(){
    var _attr;
    var _this_=this;
    var _title=$(_this_).find(".tm").text().trim();
    content+="<li>";
    content+="<div class='title'>"+_title+"</div>";
    content+="<div class='body'>";
    $(_this_).find(".classify_part").children("span").each(function(){
        var _this1_=this;
        var _class=this.className;
        var arr;
        var _string="";
        if($(this).attr("onclick")){
            arr=$(this).attr("onclick").replace(/.*\?(.*)'/,"$1").split('&');
            arr.forEach(function(e,i){
                var key=e.split('=')[0];
                var val=e.split('=')[1];
                _string+='data-'+key+'='+'"'+val+'" ';
            })
        }
        if(/vst/.test(_class)){
            content+="<span "+_string+" class='vst'>"+$(_this1_).text().trim()+"</span>";
            if($(_this1_).attr('onclick')){
                confirmType = $(_this1_).attr('onclick');
            }
        }else if(/optionSelGray/.test(_class)){
            content+="<span "+_string+" class='optionSelGray'>"+$(_this1_).text().trim()+"</span>";
        }else if(/optionDisable/.test(_class)){
            content+="<span class='optionDisable'>"+$(_this1_).text().trim()+"</span>";
        }else if(/optionGray/.test(_class)){
            content+="<span class='optionGray'>"+$(_this1_).text().trim()+"</span>";
        }else{
            content+="<span "+_string+" class='act'>"+$(_this1_).text().trim()+"</span>";
        }
    })
    content+="</div>";
    content+="</li>"
})
var data = {
    confirmType: confirmType,
    image1: $("#imageMenu").find("li").eq(0).find("img").outerHTML(),
    text1: '<span class="top">'+$(".stop_c").children("ul").find("b").eq(0).text().trim()+'</span><span class="bottom">'+$(".stop_c").children("ul").find("li").eq(0).find("h4").text().trim()+'</span>',
    content1: content
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cc8";
__result.id = "blank-89";
return __result;
},"blank-420": function($, context) {

var __data = (function(){
var btn1="";
var btn2="";
if(/btn_dis/.test($("#addToCartForm").find(".btn1").eq(0)[0].className)){
    btn1="<div class='product-footer-addcart btn_dis'>加入购物车</div>"
}else{
    btn1="<div class='product-footer-addcart'>加入购物车</div>"
}
if(/btn_dis/.test($("#addToCartForm").find(".btn2").eq(0)[0].className)){
    btn2="<div class='product-footer-buy btn_dis'>立即购买</div>"
}else{
    btn2="<div class='product-footer-buy'>立即购买</div>"
}
var data = {
    onclickfunction: $(".xf_r1").eq(0).find("a").attr("onclick"),
    productcount: $("#miniCartHeader").html(),
    btn1:btn1,
    btn2:btn2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-59f9aa29cb7c8ee29f48e834";
__result.id = "blank-420";
return __result;
}
},"^/myaccount/advance/ewalletRechargeHistory.jsp": { "modules": ["paragraph"], "template" : "ewalletRechargeHisto.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-77": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c42",
className:"ewalletRechargeHisto-3 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var data = {
    "content": "<span>货款证明查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-78": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c4c",
className:"ewalletRechargeHisto-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


// 去掉多余的 script
/*var $bJS = $body.find("script");
console.log("Num of scripts in body: "+$bJS.length);
if($bJS.length > 0){
    // // 如果像下面这样全部去掉，加载速度快了很多w
    // //console.log("test remove all script");
    // $bJS.remove();
    
    // 0th JS : #___szfw_logo___
    $bJS.eq(0).remove();
    
    // 1th JS : function(i,s,o,g,r,a,m) 【???
    // 2th JS : NTKF_PARAM = { ... uid:"C1490070", ... }
    // 3th JS : src="//dl.ntalker.com/js/b2b/ntkfstat.js?siteid=pt_1000" 【???
    // 4th JS : jq
    
    // 5th JS : header.js
    $bJS.eq(5).remove();
    
    // 6th JS : public.js
    $bJS.eq(6).remove();
    
    // 7th JS : ie7.js
    $bJS.eq(7).remove();
    
    // 8th JS is common.js
    $bJS.eq(8).remove();
    
    // 9th JS is contactService.js
    $bJS.eq(9).remove();
    
    // 10th JS is jquery.uploadify.min.js
    $bJS.eq(10).remove();
    
    // 11th JS : queryIncident.js 【电子钱包交易查询页面（本页）相关 js】
    // 12th JS : WdatePicker.js 【电子钱包交易查询页面（本页）日期插件 js】
    
    //console.log("After remove, Num of scripts: "+$body.find("script").length);
}*/

// 拆 table 生成 ul
var $table = $body.find(".table_a");
var $ths = $table.find("th");
var $trs = $table.find("tr");

var cardNum = $trs.length - 1;
var itemNum = $ths.length;

var $ul = $("<ul class='cards'></ul>");
var curUL = null;
var curTR = null;
var curTD = null;
if($trs.eq(1).html().indexOf("未查询到") !== -1){
    curUL = $trs.eq(1).children().html();
    $ul.append($("<li class='no-card'>"+curUL+"</li>"));
}else{
    for(var i = 1; i <= cardNum; i++){
        curUL = $("<ul class='card card-"+i+"'></ul>");
        curTR = $trs.eq(i);
        for(var j = 0; j < itemNum; j++){
            curTD = curTR.find("td").eq(j);
            if(j === 2){// Time-stamp
                curUL.prepend($("<li class='item time-stamp'>"
                    + curTD.html()
                    + "</li>"));
            }
            else if(j === 6){// Operate
                curUL.append($("<li class='item operate-btn'><div class='wrapper'>"
                    + curTD.html()/*.find("a").eq(0).outerHTML()
                    + curTD.find("a").eq(1).outerHTML()*/
                    + "</div></li>"));
            }
            else if(j === 5){// MEMO
                curUL.append($("<li class='item card-memo'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 0){// ID
                curUL.append($("<li class='item card-id'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else {
                curUL.append($("<li class='item item-shorter'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
        }
        $ul.append(curUL.wrap("<li class='card-wrapper card-wrapper-"+i+"'></li>").parent());
    }    
}
// Any better way ???
var $par = $table.parent();
var $page = $table.next().detach();
$table.remove();
$par.append($ul);
$par.append($page);

// 日历组件
$("#startDate, #endDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");

    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


/*$("#startDate").attr("readonly",true);
$("#endDate").attr("readonly",true);
$("#startDate").attr("onclick",$("#startDate").attr("onfocus"));
$("#endDate").attr("onclick",$("#endDate").attr("onfocus"));
$("#startDate").attr("onfocus",$("#startDate").attr("onfocus")+";document.activeElement.blur();");
$("#endDate").attr("onfocus",$("#endDate").attr("onfocus")+";document.activeElement.blur();");*/
var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-79": function($, context) {

var __data = (function(){
var a = '';
$("#state").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c3a";
__result.id = "blank-79";
return __result;
},"blank-80": function($, context) {

var __data = (function(){
var a = '';
$("#branchId").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cc7";
__result.id = "blank-80";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/list(.*)": { "modules": ["paragraph"], "template" : "list.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-91": function($, context) {

var __data = (function(){
var title="";
$("#sxPros").find("tr").each(function(){
    title+="<div class='line-title'>"+$(this).find("th").eq(0).text().split("：")[0].replace(/\s/g,"")+"</div>";
})
var content="";
$("#sxPros").find("tr").each(function(){
    var _this=this;
    content+="<li class='line-content'>";
    $(_this).children("td").find("a").each(function(){
        content+="<a class='"+$(this).attr("class")+"' href='"+$(this).attr("href")+"'>"+$(this).text().trim()+'</a>'
    })
    content+="</li>";
})
var content1="";
$("#sxPros").find("tr").each(function(){
    var _this=this;
    content1+="<li class='line-content1'>";
    content1+="<div class='line-content1-title'>"+$(this).find("th").eq(0).text().split("：")[0].trim()+"</div>";
    content1+="<div class='line-content1-box'>";
    $(_this).children("td").find("a").each(function(){
        content1+="<a class='"+$(this).attr("class")+"' href='"+$(this).attr("href")+"'>"+$(this).text().trim()+'</a>'
    })
    content1+="</div>";
    content1+="</li>";
})

// “综合”“价格”“有货”“配送”
var _class1="";// “综合”
if(!$(".sx_choice").children("div").eq(0).hasClass("act")){
    _class1=""
}else{
    _class1=" am-active"
}
var _class2="";// “价格”
if(!$(".sx_choice").children("div").eq(1).hasClass("act")){
    _class2=""
}else{
    _class2=" am-active"
}
var _class3="";
if($("#hgoods_radio")[0].value==0){
    _class3=""
}else{
    _class3=" am-active"
}
var _class4="";
if($("#offsite_radio")[0].value==0){
    _class4=""
}else{
    _class4=" am-active"
}

//2017/10/30优化修改
/*if($("#project_radio")[0].value==0){
    _class5=""
}else{
    _class5=" am-active"
}*/

var li = '<li class="list-hidden-box-tag'+_class1+'" data-value='+($(".sx_choice").children("div").eq(0).hasClass("act")?1:0)+' onclick='+$(".sx_choice").children("div").eq(0).attr("onclick")+'>综合排序</li>'
       /* + '<li class="list-hidden-box-tag'+_class1+'" data-value='+($(".sx_choice").children("div").eq(1).hasClass("act")?1:0)+' onclick='+$(".sx_choice").children("div").eq(1).attr("onclick")+'>价格</li>'*///2017-04-27
        +"<li class='priceUpDown'>"+$('.sx_price').outerHTML()+"</li>"//2017.4-27 LTT
        + '<li class="list-hidden-box-tag'+_class3+'" data-value='+$("#hgoods_radio")[0].value+' onclick="hasInventory(this)">仅显示有货</li>'
        +'<li class="list-hidden-box-tag'+_class4+'" data-value='+$("#offsite_radio")[0].value+' onclick="offSite(this)">仅显示异地配送</li>'
        //2017/10/30优化内容
        // +'<li class="list-hidden-box-tag'+_class5+'" data-value='+$("#project_radio")[0].value+' onclick="project(this)">仅显示专属产品</li>'
        
var data = {
    aaa:$(".hfl2").eq(0).outerHTML(),
    title:title,
    content:content,
    bbb:/*$(".sx_lists").outerHTML()+$(".pageTurn").eq(0).outerHTML(),*/$("#searchContent").outerHTML(),
    content1:content1,
    li:li
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7caa";
__result.id = "blank-91";
return __result;
},"paragraph-102": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd2",
className:"username",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a='';
if($(".tc_left_wel")){
    a=$(".tc_left_wel").outerHTML();
}
var data = {
    "content": a   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-92": function($, context) {

var __data = (function(){
var v="";
$(".sx_choice").find("var").each(function(){
    v+=$(this).outerHTML()
})
var data = {
    varhtml:v
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce4";
__result.id = "blank-92";
return __result;
},"blank-52": function($, context) {

var __data = (function(){
var b=$("#searchBox").attr("placeholder")
$(".hfl2").find("form").find("#searchBox").attr("placeholder",b)
$(".hfl2").find("form").find("#searchBtnTop").text("");
var data = {
    search: $(".hfl2").find("form").outerHTML(),
    hot: $(".hfl2").find(".sear_hot").outerHTML()
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c38";
__result.id = "blank-52";
return __result;
},"blank-436": function($, context) {

var __data = (function(){
$("#searchBtnTop").text("");
var aLi = "";
$(".h4_l1").find("li").each(function(){
    $(this).find(".float_r").find("a").html($(this).find(".float_l").html());
    var temp = $(this).find(".float_r").find("a").outerHTML();
    $(this).find(".float_l").remove()
    $(this).find(".float_r").remove();
    $(this).html(temp);
    aLi += $(this).outerHTML()
})
var data = {
    
    html: $(".hfl2").find("form").outerHTML(),
    /*nav1: $(".head_topl").find("h4").eq(0).find("span").eq(0).text(),
    nav2: $(".head_topl").find("h4").eq(1).find("span").eq(0).text(),
    nav3: $(".head_topl").find("h4").eq(2).find("span").eq(0).text(),
    nav4: $(".head_topl").find("h4").eq(3).find("span").eq(0).text()*/
    
    /*a1: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(0).attr("href"),
    a7: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(1).attr("href"),
    a8: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(2).attr("href"),
    a9: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(3).attr("href"),
    a10: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(4).attr("href"),
    a11: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(0).attr("href"),
    a12: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(1).attr("href"),
    a13: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(2).attr("href"),*/
    a1: $(".head_topl").find("h4").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find("a").eq(5).attr("href"),
    
    b1: $(".head_topl").find("h4").eq(1).find("a").eq(0).attr("href"),
    b2: $(".head_topl").find("h4").eq(1).find("a").eq(1).attr("href"),
    b3: $(".head_topl").find("h4").eq(1).find("a").eq(2).attr("href"),
    
    c1: $(".head_topl").find("h4").eq(2).find("a").eq(0).attr("href"),
    c2: $(".head_topl").find("h4").eq(2).find("a").eq(1).attr("href"),
    c3: $(".head_topl").find("h4").eq(2).find("a").eq(2).attr("href"),
   /* c4: $(".head_topl").find("h4").eq(2).find("a").eq(3).attr("href"),*/
    d1: $(".head_topl").find("h4").eq(3).find("a").eq(0).attr("href"),
    d2: $(".head_topl").find("h4").eq(3).find("a").eq(1).attr("href"),
    d3: $(".head_topl").find("h4").eq(3).find("a").eq(2).attr("href"),
    shouji: aLi
    
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1d0de75d5935b675dbc064";
__result.id = "blank-436";
return __result;
},"blank-428": function($, context) {

var __data = (function(){
$("#searchBtnTop").text("");
var aLi = "";
$(".h4_l1").find("li").each(function(){
    $(this).find(".float_r").find("a").html($(this).find(".float_l").html());
    var temp = $(this).find(".float_r").find("a").outerHTML();
    $(this).find(".float_l").remove()
    $(this).find(".float_r").remove();
    $(this).html(temp);
    aLi += $(this).outerHTML()
})
var data = {
    
    html: $(".hfl2").find("form").outerHTML(),
    /*nav1: $(".head_topl").find("h4").eq(0).find("span").eq(0).text(),
    nav2: $(".head_topl").find("h4").eq(1).find("span").eq(0).text(),
    nav3: $(".head_topl").find("h4").eq(2).find("span").eq(0).text(),
    nav4: $(".head_topl").find("h4").eq(3).find("span").eq(0).text()*/
    
    /*a1: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(0).attr("href"),
    a7: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(1).attr("href"),
    a8: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(2).attr("href"),
    a9: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(3).attr("href"),
    a10: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(1).find("a").eq(4).attr("href"),
    a11: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(0).attr("href"),
    a12: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(1).attr("href"),
    a13: $(".head_topl").find("h4").eq(0).find(".h4_l1").find(".block_one").eq(2).find("a").eq(2).attr("href"),*/
    a1: $(".head_topl").find("h4").eq(0).find("a").eq(0).attr("href"),
    a2: $(".head_topl").find("h4").eq(0).find("a").eq(1).attr("href"),
    a3: $(".head_topl").find("h4").eq(0).find("a").eq(2).attr("href"),
    a4: $(".head_topl").find("h4").eq(0).find("a").eq(3).attr("href"),
    a5: $(".head_topl").find("h4").eq(0).find("a").eq(4).attr("href"),
    a6: $(".head_topl").find("h4").eq(0).find("a").eq(5).attr("href"),
    
    b1: $(".head_topl").find("h4").eq(1).find("a").eq(0).attr("href"),
    b2: $(".head_topl").find("h4").eq(1).find("a").eq(1).attr("href"),
    b3: $(".head_topl").find("h4").eq(1).find("a").eq(2).attr("href"),
    
    c1: $(".head_topl").find("h4").eq(2).find("a").eq(0).attr("href"),
    c2: $(".head_topl").find("h4").eq(2).find("a").eq(1).attr("href"),
    c3: $(".head_topl").find("h4").eq(2).find("a").eq(2).attr("href"),
   /* c4: $(".head_topl").find("h4").eq(2).find("a").eq(3).attr("href"),*/
    d1: $(".head_topl").find("h4").eq(3).find("a").eq(0).attr("href"),
    d2: $(".head_topl").find("h4").eq(3).find("a").eq(1).attr("href"),
    d3: $(".head_topl").find("h4").eq(3).find("a").eq(2).attr("href"),
    shouji: aLi
    
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a17933dcb7c8ee29f490257";
__result.id = "blank-428";
return __result;
}
},"^/(myaccount/login.jsp)|(crs/myaccount/login.jsp)": { "modules": ["paragraph"], "template" : "login.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-417": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-59f1466acb7c8ee29f48dc0f";
__result.id = "blank-417";
return __result;
},"paragraph-97": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d68",
className:"login-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){

$(".dlcont").find("a").eq(0).find('img').attr("src",'#');
$(".dlcont").find("a").eq(0).find('img').attr("x-src",'#');
var data = {
    "content": $(".dlcont").find("a").eq(0).outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-98": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d26",
className:"login-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href='/'><img src='"+context.__root+"loginLogo.png'></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-99": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7c",
className:"login-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

/*var data = {
    "content": $(".dl_formmid").outerHTML()   //填写paragraph的内容
};
return data;
*/
var data = {
    "content": $(".dl_form").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-421": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.loginError').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a0a4d27cb7c8ee29f48f929";
__result.id = "blank-421";
return __result;
},"paragraph-100": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d60",
className:"login-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $script = ''
$("script").each(function(){
    $script += $(this).outerHTML()
})

var data = {
    "content": $script   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-101": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca2";
__result.id = "blank-101";
return __result;
}
},"^/cashier/pabpayDetail.jsp": { "modules": ["paragraph"], "template" : "pabpayDetail.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-103": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d72",
className:"pabpayDetail-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>线上支付流水明细</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-104": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cee",
className:"pabpayDetail-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $head_script=''
$("head").find("script").each(function(){
    $head_script+=$(this).outerHTML()
})
var $body_var='';
$("body").children("var").each(function(){
    $body_var+=$(this).outerHTML()
})
var $page_var='';
$(".page").children("var").each(function(){
    $page_var+=$(this).outerHTML()
})
/*$(".table_a").find("tr").each(function(i){
    var _this_=this;
    if(i>0){
        $(this).find("td").eq(0).addClass("lt-online-num");
    }
})*/


/*$("#startDateIn").attr("readonly",true);
$("#endDateIn").attr("readonly",true);
$("#startDateIn").attr("onclick",$("#startDateIn").attr("onfocus"));
$("#endDateIn").attr("onclick",$("#endDateIn").attr("onfocus"));*/

// 日历组件
$("#startDateIn, #endDateIn").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    "content": $head_script+$body_var+$page_var+$(".wb01").find(".wb_r").find(".ablock").find('.title_main').outerHTML()+$(".wb01").find(".wb_r").find(".ablock").find('.search01').outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-105": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c7c",
className:"pabpayDetail-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $body_script='';
$("body").find("script").each(function(){
    $body_script+=$(this).outerHTML()
})
/*$(".table_a").find("tr").each(function(i){
    var _this_=this;
    if(i>0&&!/cloud_noinfo/.test($(_this_).attr("class"))){
        $(this).find("td").eq(0).addClass("lt-online-num");
        $(this).find("td").eq(0).html("<span>银行订单号：</span><span>"+$(this).find("td").eq(0).text().trim()+"</span>");
        $(this).find("td").eq(1).addClass("lt-online-order");
        $(this).find("td").eq(1).html("<span>平台订单号：</span><span>"+$(this).find("td").eq(1).text().trim()+"</span>");
        $(this).find("td").eq(2).addClass("lt-online-price");
        $(this).find("td").eq(2).html("<span>交易金额（元）：</span><span>"+$(this).find("td").eq(2).text().trim()+"</span>");
        $(this).find("td").eq(3).addClass("lt-online-time_start");
        $(this).find("td").eq(3).html("<span>交易时间：</span><span>"+$(this).find("td").eq(3).text().trim()+"</span>");
        $(this).find("td").eq(4).addClass("lt-online-time_end");
        $(this).find("td").eq(4).html("<span>支付清算时间：</span><span>"+$(this).find("td").eq(4).text().trim()+"</span>");
        $(this).find("td").eq(5).addClass("lt-online-state");
        $(this).find("td").eq(6).addClass("lt-online-branch");
        $(this).find("td").eq(6).html("<span>支付分公司：</span><span>"+$(this).find("td").eq(6).text().trim()+"</span>");
    }
})*/
var data = {
    "content": $(".table_a").outerHTML()+$(".pagenext").outerHTML()  //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-109": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c99",
className:"pabpayDetail-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $head_script=''
$("head").find("script").each(function(){
    $head_script+=$(this).outerHTML()
})
$("#startDateIn").attr("readonly",true);
$("#endDateIn").attr("readonly",true);
$("#startDateIn").attr("onclick",$("#startDateIn").attr("onfocus"));
$("#endDateIn").attr("onclick",$("#endDateIn").attr("onfocus"));

$("#startDateIn").attr("onfocus",$("#startDateIn").attr("onfocus")+";document.activeElement.blur();");
$("#endDateIn").attr("onfocus",$("#endDateIn").attr("onfocus")+";document.activeElement.blur();");

$(".table_a").find("tr").each(function(i){
    var _this_=this;
    if(i>0&&!/cloud_noinfo/.test($(_this_).attr("class"))){
        $(this).find("td").eq(0).addClass("lt-online-num");
        $(this).find("td").eq(0).html("<span>银行订单号：</span><span>"+$(this).find("td").eq(0).text().trim()+"</span>");
        $(this).find("td").eq(1).addClass("lt-online-order");
        $(this).find("td").eq(1).html("<span>平台订单号：</span><span>"+$(this).find("td").eq(1).text().trim()+"</span>");
        $(this).find("td").eq(2).addClass("lt-online-price");
        $(this).find("td").eq(2).html("<span>交易金额（元）：</span><span>"+$(this).find("td").eq(2).text().trim()+"</span>");
        $(this).find("td").eq(3).addClass("lt-online-time_start");
        $(this).find("td").eq(3).html("<span>交易时间：</span><span>"+$(this).find("td").eq(3).text().trim()+"</span>");
        $(this).find("td").eq(4).addClass("lt-online-time_end");
        $(this).find("td").eq(4).html("<span>支付清算时间：</span><span>"+$(this).find("td").eq(4).text().trim()+"</span>");
        $(this).find("td").eq(5).addClass("lt-online-state");
        $(this).find("td").eq(6).addClass("lt-online-branch");
        $(this).find("td").eq(6).html("<span>支付分公司：</span><span>"+$(this).find("td").eq(6).text().trim()+"</span>");
    }
})
var data = {
    "content": $head_script+$("body").html()    //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-106": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c4d";
__result.id = "blank-106";
return __result;
},"blank-110": function($, context) {

var __data = (function(){
var a = '';
$("#company").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d14";
__result.id = "blank-110";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/cashier/pabpayReqOne.jsp": { "modules": ["paragraph"], "template" : "pabpayReqOne.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-107": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d1c",
className:"pabpayReqOne-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>银行交易状态查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-108": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c43",
className:"pabpayReqOne-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $head_script='';
$("head").find("script").each(function(){
    $head_script+=$(this).outerHTML()
})
$(".table_a_s").find("tr").each(function(i){
    var _this_=this;
    if(i>0&&!/cloud_noinfo/.test($(_this_).attr("class"))){
        $(this).find("td").eq(0).after($(this).find("td").eq(3))
        $(this).find("td").eq(0).addClass("lt-statecheck-num");
        $(this).find("td").eq(0).html("<span>银行订单号：</span><span>"+$(this).find("td").eq(0).text().trim()+"</span>");
        $(this).find("td").eq(2).addClass("lt-statecheck-time_start");
        $(this).find("td").eq(2).html("<span>交易时间：</span><span>"+$(this).find("td").eq(2).text().trim()+"</span>");
        $(this).find("td").eq(3).addClass("lt-statecheck-time_end");
        $(this).find("td").eq(3).html("<span>清算时间：</span><span>"+$(this).find("td").eq(3).text().trim()+"</span>");
        $(this).find("td").eq(1).addClass("lt-statecheck-price");
        $(this).find("td").eq(1).html("<span>交易金额（元）：</span><span>"+$(this).find("td").eq(1).text().trim()+"</span>");
        $(this).find("td").eq(4).addClass("lt-statecheck-state");
        $(this).find("td").eq(5).addClass("lt-statecheck-branch");
        $(this).find("td").eq(5).html("<span>支付分公司：</span><span>"+$(this).find("td").eq(5).text().trim()+"</span>");
    }
})
var data = {
    "content": $head_script+$("body").html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/emailOrSMSSubscription/emailOrSMSSubscription.jsp": { "modules": ["paragraph"], "template" : "emailOrSMSSubscripti.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-111": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d3a",
className:"emailOrSMSSubscripti-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>我的订阅</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-112": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7cf9",
className:"emailOrSMSSubscripti-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $head_script=''
$("head").find("script").each(function(){
    $head_script+=$(this).outerHTML()
})
var $body_var='';
$("body").children("var").each(function(){
    $body_var+=$(this).outerHTML()
})
var $page_var='';
$(".page").children("var").each(function(){
    $page_var+=$(this).outerHTML()
})
/*$(".table_book").find(".bd_b01").each(function(){
    var _this=this;
    $(_this).after("<tr><th></th><td>场景</td><td>站内信</td><td>接收短信</td><td>接收邮件</td></tr>");
    $(_this).find("td").each(function(){
        var _this_=this;
        if(/不支持退订/.test($(_this_).text())){
            $(this).find("input").css("display","none");
        }
    });
})*/

var $body = $("body");
$body.find("script").each(function(){
    if($(this).attr("x-src") !== null 
        && ( $(this).attr("x-src").indexOf("ntkfstat.js") !== -1
        || $(this).attr("x-src").indexOf("public.js") !== -1) ){
        $(this).remove();
    }
    console.log("below is src")
    console.log($(this).attr("src"))
    console.log("below is x-src")
    console.log($(this).attr("x-src"))
});


var data = {
    "content": $head_script + $body.html()/*$(".wb_r").outerHTML() */ //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-117": function($, context) {

var __data = (function(){
/*var $head_script=''
$("head").find("script").each(function(){
    $head_script+=$(this).outerHTML()
})*/
var $body_var='';
$("body").children("var").each(function(){
    $body_var+=$(this).outerHTML()
})
var $page_var='';
$(".page").children("var").each(function(){
    $page_var+=$(this).outerHTML()
})
var $script='';
$("script").each(function(){
    $script+=$(this).outerHTML()
})
$(".table_book").children("tbody").find("tr").each(function(){
    var _this_=this;
    $(_this_).find("td").each(function(){
        if(/不支持退订/.test($(_this_).text())){
            $(this).find("div").css("display","none");
        }
        if($(_this_).find("input[type='checkbox']").length>0){
            $(this).find("input").attr("id",$(this).find("input").attr("value"));
            $(this).find("input").wrap("<label for='"+$(this).find("input").attr("id")+"' class='"+$(this).find("input").attr("checked")+"'></label>");
        }
    })
    if($(_this_).find("th").length>0){
        $(this).find("th").after("<td class='list-title'><span>场景</span><span>站内信</span><span>接收短信</span><span>接收邮件</span></td>");
    }
})
var data = {
    
    aaa: /*$head_script+*/$body_var+$page_var+$(".ablock").outerHTML()+$script
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c44";
__result.id = "blank-117";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/forgotPassword.jsp": { "modules": ["paragraph"], "template" : "forgotpassword.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-118": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c8f",
className:"forgotpassword-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>找回登录密码</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-119": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7ce5",
className:"forgotpassword-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
$("#userName").attr("placeholder","请输入用户名");
$("#phoneNum").attr("placeholder","已绑定手机号");
//$("#commit").attr("value","下一步");
var data = {
    "content":a+$("#forgotPassword").outerHTML().replace(/找回登录密码/g, "填写账户")   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/notify/passwordResetSMSSend.jsp": { "modules": ["paragraph"], "template" : "smssend.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-120": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d86",
className:"smssend-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>找回登录密码</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-121": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d1e",
className:"smssend-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
$("#verifyCode").attr("placeholder","请输入验证码");
//$(".mg_t30").attr("value","下一步");
var data = {
    "content":a+$("#verifySMSCode").outerHTML().replace(/找回登录密码/g, "手机认证")    //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/notify/passwordResetConfirm.jsp": { "modules": ["paragraph"], "template" : "resetconfirm.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-122": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cdb",
className:"resetconfirm-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>找回登录密码</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-123": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d31",
className:"resetconfirm-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
$("#password").attr("placeholder","新密码");
$("#mPassword").attr("placeholder","确认密码");
//$(".mg_t30").attr("value","下一步");
var data = {
    "content":a+$("#forgotPassword").outerHTML().replace(/找回登录密码/g, "设置新密码")   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/notify/passwordResetCompleted.jsp": { "modules": ["paragraph"], "template" : "resetcompleted.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-125": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d61",
className:"resetcompleted-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>找回登录密码</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-126": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c57",
className:"resetcompleted-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var data = {
    "content":a+$(".wb01").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/myaccount\\/billingAddress\\/newOrUpdateBillngAddress\\.jsp": { "modules": [], "template" : "address.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-127": function($, context) {

var __data = (function(){
var data = {
    /*2017/10/11*/
    html: $('.wb_r').children('.pd_lr').children('.invoice_c').find('#applyModify').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cab";
__result.id = "blank-127";
return __result;
},"blank-128": function($, context) {

var __data = (function(){
var inputs="";
inputs+=$("form").eq(1).children("div").eq(0).outerHTML();
inputs+=$("form").eq(1).children("div").eq(1).outerHTML();
for(var i=0; i<$("form").eq(1).children("input").length; i++){
    inputs+=$("form").eq(1).children("input").eq(i).outerHTML();
}
//$("#atg_store_countyInput").attr("placeholder","县（区）")
$(".ipt_d").attr("placeholder","县（区）")

var data = {
    inputs:inputs,
    aaa:$(".invoice_c").find(".float_l").outerHTML(),
    bbb:$("#InvoiceRadios").outerHTML(),
    ccc:$(".pd_tb").outerHTML(),
    /*ddd:$("#modifying").outerHTML(),
    eee:$("#tableContent").outerHTML()*/
    eee:$('.invoce_show').outerHTML()
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d20";
__result.id = "blank-128";
return __result;
},"blank-129": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c85";
__result.id = "blank-129";
return __result;
},"blank-130": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d27";
__result.id = "blank-130";
return __result;
},"blank-190": function($, context) {

var __data = (function(){
var data = {
    html: $(".register-error").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d75";
__result.id = "blank-190";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/advance/queryAdvancePayment.jsp": { "modules": ["paragraph"], "template" : "queryAdvancePayment.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-131": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7d",
className:"queryAdvancePayment-7 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>电子钱包交易查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-132": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cad",
className:"queryAdvancePayment-8",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


// 电子钱包弹窗
var $seeMList = $body.find("#seaMoneyLists");

var $bks = $seeMList.find(".bk_col3");
var bks = "";
$bks.each(function(){
    bks += $(this).outerHTML();
});
// 电子钱包弹窗
/*var $seeMList = $body.find("#seaMoneyLists");
var $bks = $seeMList.find(".bk_col3");
var bks = "";
$bks.each(function(){
    console.log("Before, ");
    console.log($(this).outerHTML());
    var temp = $(this).outerHTML().replace('style="display: none;"', '').replace(/bk_col3/g, "dxy-bk");
    console.log("After, ");
    console.log(temp);
    bks += temp;
});*/

var $modal = $("<div class='bk-modal' style='display: none;'></div>")
    .html("<div class='modal-shadow'></div>"
        + "<div class='modal-content'>"
            + "<div class='modal-close-btn'>关闭</div>"
            + "<div class='bk-wrapper'>" + bks + "</div>"
        + "</div>");
$seeMList.append($modal);


// 加一个“电子钱包查询”title
$seeMList.next().children("form").prepend($("<div class='title_main'><i class='search-icon'></i><span>电子钱包交易查询</span></div>"));


// 拆 table 生成 ul
var $table = $body.find(".table_a");
var $ths = $table.find("th");
var $trs = $table.find("tr");

var cardNum = $trs.length - 1;
var itemNum = $ths.length;

var $ul = $("<ul class='cards'></ul>");
var curUL = null;
var curTR = null;
var curTD = null;
if($trs.length === 1){
    $ul.append($("<li class='no-card'>未查询到交易记录！</li>"));
}else{
    for(var i = 1; i <= cardNum; i++){
        curUL = $("<ul class='card card-"+i+"'></ul>");
        curTR = $trs.eq(i);
        for(var j = 0; j < itemNum; j++){
            curTD = curTR.find("td").eq(j);
            if(j === 0){// Time-stamp
                curUL.prepend($("<li class='item time-stamp'>"
                    + "<span class='line-title hide'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.children().eq(0).html() + " " + curTD.children().eq(1).html() + "</span>"
                    + "</li>"));
            }
            else if(j ===7){
                curUL.append($("<li class='item money-change hide'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 2){
                curUL.append($("<li class='item type-change hide'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 3){// ID
                curUL.append($("<li class='item card-id'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 4){
                curUL.append($("<li class='item cooperation-corporation'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 5){
                curUL.append($("<li class='item card-type hide'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 6){
                curUL.append($("<li class='item afford-way hide'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 1){
                curUL.append($("<li class='item afford-amount'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" +  curTD.html() + "</span>"
                    + "</li>"));
            }
        }
        $ul.append(curUL.wrap("<li class='card-wrapper card-wrapper-"+i+"'></li>").parent());
    }    
}
// Any better way ???
var $par = $table.parent();
var $page = $table.next().detach();
$table.remove();
$par.append($ul);
$par.append($page);


// 去掉多余的 script
/*var $bJS = $body.find("script");
console.log("Num of scripts in body: "+$bJS.length);
if($bJS.length > 0){
    // 如果像下面这样全部去掉，加载速度快了很多w
    //console.log("test remove all script");
    // $bJS.remove();
    
    // 0th JS : #___szfw_logo___
    $bJS.eq(0).remove();
    
    // 1th JS : function(i,s,o,g,r,a,m) 【???
    // 2th JS : NTKF_PARAM = { ... uid:"C1490070", ... }
    // 3th JS : src="//dl.ntalker.com/js/b2b/ntkfstat.js?siteid=pt_1000" 【???
    // 4th JS : jq
    
    // 5th JS : header.js
    $bJS.eq(5).remove();
    
    // 6th JS : public.js
    $bJS.eq(6).remove();
    
    // 7th JS : ie7.js
    $bJS.eq(7).remove();
    
    // 8th JS is common.js
    $bJS.eq(8).remove();
    
    // 9th JS is contactService.js
    $bJS.eq(9).remove();
    
    // 10th JS is jquery.uploadify.min.js
    $bJS.eq(10).remove();
    
    // 11th JS : queryIncident.js 【电子钱包交易查询页面（本页）相关 js】
    // 12th JS : elecWallet.js 【电子钱包交易查询页面（本页）相关 js】
    
    // 13th JS : 电子钱包查询 【电子钱包交易查询页面（本页）相关 js】
    var temp = $bJS.eq(13).html().replace('onclick="ShowSeaLists()"', '');
    $bJS.eq(13).html(temp);
    
    // 14th JS : WdatePicker.js 【日期插件相关 js】
    
    //console.log("After remove, Num of scripts: "+$body.find("script").length);
}*/


/*$("#createDate").attr("readonly",true);
$("#createDate1").attr("readonly",true);
$("#createDate").attr("onclick",$("#createDate").attr("onfocus"));
$("#createDate1").attr("onclick",$("#createDate1").attr("onfocus"));
$("#createDate").attr("onfocus",$("#createDate").attr("onfocus")+";document.activeElement.blur();");
$("#createDate1").attr("onfocus",$("#createDate1").attr("onfocus")+";document.activeElement.blur();");*/

// 日历组件
$("#createDate, #createDate1").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});

var data = {
    "content": js + $body.html().replace(/&nbsp;/g, "")
        .replace(/查看更多合作分公司/g, "点击展开列表")   /* 2016/11/9 - “查看更多合作分公司” -> “点击展开列表” */
        .replace(/\$\("#seaMoneyLists \.one"\)/g, '$("#seaMoneyLists").children().children(".one")')/* 2016/11/9 - 电子钱包“点击展开列表”弹窗内容被隐藏的 bug */
};
return data;

}($, context))
}
},"blank-139": function($, context) {

var __data = (function(){
var a = '';
$("#operationType").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d1b";
__result.id = "blank-139";
return __result;
},"blank-140": function($, context) {

var __data = (function(){
var a = '';
$("#branchId").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d37";
__result.id = "blank-140";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/advance/BackAndTransMoney.jsp": { "modules": ["paragraph"], "template" : "BackAndTransMoney.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-133": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7ca3",
className:"BackAndTransMoney-9 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>退款和转账业务申请</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"  */ //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-134": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d3c",
className:"BackAndTransMoney-10",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


// // 处理嵌套在 form 内部的 form 元素被删除（而内部子元素保留）的 bug
// var $form_back = $("#backMoneyForm");
// form_back = $form_back.outerHTML();
// $form_back.children().detach();// 保留一个空 form#backMoneyForm ，用来应对一次 form 嵌套的检查


// icheck.js
$body.find("script").each(function(){
    if($(this).outerHTML().indexOf("jquery.icheck.js") !== -1){
        $(this).remove();
    }
});


var body = $body.html()
            .replace(/元\s*(?=<\/label>)/, "");
// 在上边的空 form#backMoneyForm 下，添加原来已保存的 form.outerHTML 字符串，
// 由于嵌套检查目测只有一次，而得以保留外层的 form 元素~
// body = body.split(/\s+(?=<\/em>\s*<\/form>)/).join(form_back);


var data = {
    "content": js + body  //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-141": function($, context) {

var __data = (function(){
var a = '';
$("#sa_Company").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cef";
__result.id = "blank-141";
return __result;
},"blank-142": function($, context) {

var __data = (function(){
var a = '';
$("#aCompany").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c39";
__result.id = "blank-142";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/advance/queryBackAndTransMoney.jsp": { "modules": ["paragraph"], "template" : "queryBackAndTransMon.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-135": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d6a",
className:"queryBackAndTransMon-17 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>退款和转账业务查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"  */ //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-136": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c7d",
className:"queryBackAndTransMon-18",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };http://111.200.200.28/myaccount/advance/queryBackAndTransMoney.jsp
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");

// Remove hover script
$body.find("script").filter(function(){
    return $(this).html().indexOf("application_num>a") !== -1;
}).remove();


// 拆 table 生成 ul
var $table = $body.find(".table_a");
var $trs = $table.children("tbody").children("tr");
var $ths = $trs.eq(0).children("th");


var cardNum = $trs.length - 1;
var itemNum = $ths.length;

var $ul = $("<ul class='cards'></ul>");
var curUL = null;
var curTR = null;
var curTD = null;
if($trs.length === 1){
    $ul.append($("<li class='no-card'>未查询到退款、转账申请记录！</li>"));
}else{
    for(var i = 1; i <= cardNum; i++){
        curUL = $("<ul class='card card-"+i+"'></ul>");
        curTR = $trs.eq(i);
        for(var j = 0; j < itemNum; j++){
            curTD = curTR.children("td").eq(j);
            if(j === 0){// Application-ID & some details...
                curUL.append($("<li class='item card-id'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 4){// Application-state
                curUL.prepend($("<li class='item application-state'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 6){// MEMO
                curUL.append($("<li class='item card-memo'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else if(j === 1){// Application-amount
                curUL.append($("<li class='item application-amount item-shorter'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
            else {
                curUL.append($("<li class='item item-shorter'>"
                    + "<span class='line-title'>" + $ths.eq(j).html() + "：</span>"
                    + "<span class='line-content'>" + curTD.html() + "</span>"
                    + "</li>"));
            }
        }
        $ul.append(curUL.wrap("<li class='card-wrapper card-wrapper-"+i+"'></li>").parent());
    }    
}
// Any better way ???
var $par = $table.parent();
var $page = $table.next().detach();
$table.remove();
$par.append($ul);
$par.append($page);

// 日历组件
$("#createDate, #deadlineDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});

/*$("#createDate").attr("readonly",true);
$("#deadlineDate").attr("readonly",true);
$("#createDate").attr("onclick",$("#createDate").attr("onfocus"));
$("#deadlineDate").attr("onclick",$("#deadlineDate").attr("onfocus")); 
$("#createDate").attr("onfocus",$("#createDate").attr("onfocus")+";document.activeElement.blur();");
$("#deadlineDate").attr("onfocus",$("#deadlineDate").attr("onfocus")+";document.activeElement.blur();");*/
var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-137": function($, context) {

var __data = (function(){
var a = '';
$("#orderState").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d73";
__result.id = "blank-137";
return __result;
},"blank-138": function($, context) {

var __data = (function(){
var a = '';
$("#branch").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c4e";
__result.id = "blank-138";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/cart/cart.jsp": { "modules": ["paragraph"], "template" : "cart.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-144": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c9a";
__result.id = "blank-144";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-145": function($, context) {

var __data = (function(){
var $body_var='';
$("body").children("var").each(function(){
    $body_var+=$(this).outerHTML()
})
var $page_var='';
$(".page").children("var").each(function(){
    $page_var+=$(this).outerHTML()
})

var $script='';
$("script").each(function(){
    if($(this).outerHTML().indexOf("szfw_logo") !== -1
        || $(this).outerHTML().indexOf("ntkfstat.js") !== -1
        || $(this).outerHTML().indexOf("public.js") !== -1){
        // Do not add these scripts !
    }
    else {
        $script += $(this).outerHTML();
    }
});

//添加class
$(".table_b").children('tbody').children("tr").each(function(i){
    var _this_=this;
    if(i>0 ){
        $(this).children("td").eq(0).addClass("cart-detail");
        $(this).children("td").eq(1).addClass("cart-branch");
        $(this).children("td").eq(1).html("<span>"+$(this).find("td").eq(1).text()+"</span>");
        $(this).children("td").eq(2).addClass("cart-price");
        $(this).children("td").eq(2).html("<span>"+$(this).find("td").eq(2).text()+"</span>");
        $(this).children("td").eq(3).addClass("cart-none");
        $(this).children("td").eq(4).addClass("cart-count");
        $(this).children("td").eq(5).addClass("cart-none");
        $(this).children("td").eq(6).addClass("cart-handle");
    }
})

 /*for(var i=0; i<$(".ablock").children("div[id][id!='updateDiv'][id!='removeDiv']").length; i++){
            $(".ablock").children("div[id][id!='updateDiv'][id!='removeDiv']").eq(i).append($(".ablock").find(".table_b").find("form").eq(0));
        }*/
        $(".ablock").children("div[id]").each(function(){
            var _this_=this;
            if(/orderId_/.test($(_this_).attr("id"))){
                $(this).append($(".ablock").find(".table_b").find("form").eq(0));
            }
        });
        
        
        //把数据塞进form
        for(var i=0; i<$(".table_b").find(".tdlast_l").length; i++){
            var parent=document.createElement("table");
            $(parent).append("<tbody></tbody>");
            //console.log("i="+i);
            if(i==0){
                /*alert("111111111111111111111111");*/
            	var _this=$(".table_b").find(".tdlast_l")[i];
            	/*console.log( "-----------------i==0-------------------------" );
            	console.log( _this );*/
            	var nowparent=$(_this).parent().parent().index();
            	/*console.log('nowparent+0 '+nowparent);*/
            	
            	for(var j=1; j<(nowparent+1); j++){
            	    /*console.log("i==0时j的值"+j);*/
            		var dom=$(".table_b").children('tbody').children("tr").eq(j).clone(true);
            		$(parent).children("tbody").append(dom);
            	}
            	$(".ablock").find("form").eq(i).append($(parent));
             } else {
                /*alert("2222222222222222222222222222");*/
            	var _this=$(".table_b").find(".tdlast_l")[i];
            	var _pre=$(".table_b").find(".tdlast_l")[i-1];
            	/*console.log( "---------------------- else i==0 -------------------------------" );
            	console.log( i );
            	console.log( $(".table_b").find(".tdlast_l").eq(1) );
            	console.log($(".table_b").find(".tdlast_l")[i] );*/
            	
            	
            	var nowparent=$(_this).parent().parent().index();
            	var preparent=$(_pre).parent().parent().index();
            	//console.log('nowparent+else '+nowparent);
            	//console.log('preparent  '+preparent);
            	
            	for(var j=(preparent+1); j<(nowparent+1); j++){
            	    //console.log("i不等于0时j的值"+j);
            		var dom=$(".table_b").children('tbody').children("tr").eq(j).clone(true);
            		$(parent).children("tbody").append(dom);
            	}
            	$(".ablock").find("form").eq(i).append($(parent));
            }
        }
        /*$(".ablock").find("form").each(function(){
        	var _this_=this;
        	$(_this_).append($(_this_).parent().next());
        	$(_this_).siblings().each(function(){
        		$(_this_).append($(this))
        	})
        })*/
        $(".ablock").find("form").each(function(){
        	var _this_=this;
        	var $par = $(_this_).parent();
        	for(var i = 0; i < 3; i++){
        	    $(_this_).append($par.next());
        	}
        });
        $(".ablock").children(".table_b").remove();


$(".btn02").attr("value","去结算");


/*console.log( "----------------111111111111------------------" );

console.log( $body_var );

console.log( "----------------222222222222------------------" );

console.log( $page_var );


console.log( "----------------333333333333------------------" );

console.log( $(".page").find(".wc1200").outerHTML() );

console.log( "----------------444444444444-------------------" );

console.log( $script );*/


var data = {
    cart_content: $body_var+$page_var+$(".page").find(".wc1200").outerHTML()+$script
};
return data;











})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d3b";
__result.id = "blank-145";
return __result;
},"paragraph-146": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d15",
className:"cart-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $(".sumShops").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/(checkout/shipping.jsp\\?init=(true|false)&(_requestid=|deliveryType=radio_pickup|deliveryType=radio_delivery))|(checkout/shipping.jsp\\?init=true$)|(checkout/shipping.jsp\\?\\_requestid=)|(checkout/shipping.jsp\\?init\\=true&(.*))": { "modules": [], "template" : "shipping.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-333": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58a421929dec615272b741b8";
__result.id = "blank-333";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-151": function($, context) {

var __data = (function(){
var a = '';
$(".ex_infors").each(function(i){
    var _this=this;
    a+="<div id='addSelect"+i+"' class='addSelect'><div class='select'><p>请选择收货地址</p><ul>";
    $(_this).find("select").find("option").each(function(){
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
        a+="</li>";
    });
    a+="</ul></div></div>";
})
var data = {
    select: a
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d62";
__result.id = "blank-151";
return __result;
},"blank-152": function($, context) {

var __data = (function(){
var data = {
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d87";
__result.id = "blank-152";
return __result;
},"blank-331": function($, context) {

var __data = (function(){
var $headscript='';
$("head").find("script").each(function(){
    $headscript+=$(this).outerHTML()
})
/*去掉错误的js3.11*/
var $body =$("body");
$body.find("script").each(function(){
    if($(this).html().indexOf("submitShipping") !== -1){
        $(this).remove();
    }
});
/*end*/
$(".wc1200").find(".ablock").eq(0).addClass("remove");
$(".wc1200").find(".ablock").eq(1).addClass("block_content");
$(".table_c").find("tr").each(function(i){
    var _tr_=$(".table_c").find("tr");
    var _this_=this;
    if(i>0 && !/ex_infors/.test($(_this_).attr("class")) && i<_tr_.length){
        $(_this_).addClass("lt-ShippingAddress-list");
        $(_this_).find("td").eq(0).addClass("lt-ShippingAddress-list-msg");
        $(_this_).find("td").eq(1).addClass("lt-ShippingAddress-list-price");
        $(_this_).find("td").eq(1).html($(_this_).find("td").eq(1).text().trim());
        $(_this_).find("td").eq(2).addClass("lt-ShippingAddress-list-count");
        $(_this_).find("td").eq(2).html("<span class='lt-pro-count'>"+$(_this_).find("td").eq(2).text()+"</span>")
        $(_this_).find("td").eq(2).find(".lt-pro-count").before("<span>X</span>");
        
        $(_this_).find("td").eq(3).addClass("lt-ShippingAddress-list-total");
        $(_this_).find("td").eq(3).html("<span class='lt-price-total'>"+$(_this_).find("td").eq(3).text().trim()+"</span>")
        $(_this_).find("td").eq(3).find(".lt-price-total").before("<span>合计：</span>");
        /*$(_this_).find("td").eq(4).addClass("lt-ShippingAddress-list-address");*/
        
    }
    /*if(/ex_infors/.test($(_this_).attr("class"))){
        $(".ex_infors").append($(".lt-ShippingAddress-list-total"));
        $(".ex_infors").append($(".lt-ShippingAddress-list-address"));
    }*/
});
/*$(".sureBill_address").find(".btn_moreAd").find(".icon").text('>>');
$(".sureBill_address").find(".moreAd02").find(".icon").text('>>');*/
/*$(".sureBill_address").find(".btn_moreAd").click(function(){
    $(".sureBill_address").find(".btn_moreAd").find(".icon").text('>>')
})*/
$(".sureBill_address").find(".btnAds").find(".icon").html("<img src='"+context.__root + "jiahao.png"+"'>");
/*$(".table_c").find(".ex_infors").each(function(i){
    var _this_=this;
    $(_this_).find("select").before("<span class='select' id='AddressesSelect"+i+"'><img src='"+context.__root + "address.png"+"'><input type='text' readonly='readonly'><img src='"+context.__root + "arrows-updown.png"+"'></span>");
    $(_this_).find(".select").find("input").attr("value",$(_this_).find("select").find("option[selected='selected']").attr("title"));
})*/
//$(".btn02").attr("value","下一步");
/*if(/radio_pickup/.test(window.location.href)){
    var childIndex=$(".title_b").index();
    for(var i=childIndex; i<$(".pd_lr20").children().last().index()+1; i=i){
        var _this_=$(".pd_lr20").children().eq(i);
        $(".radios_a").find("form").append(_this_);
    }
}*/

/*if(/radio_pickup/.test(window.location.href)){
    var con='';
    $(".pd_lr20").children().each(function(){
        if(!(/title_main/.test($(this).attr("class")))&&!(/radios_a/.test($(this).attr("class")))){
            con+=$(this).outerHTML();
        }
    })
    $(".radios_a").find("form").append(con);
}*/
var data = {
    shipping_content: $headscript+$body.html()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58a3bad44cf5bb8dfecae2b5";
__result.id = "blank-331";
return __result;
},"blank-359": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58c3ed3f3529b14e05f88d37";
__result.id = "blank-359";
return __result;
},"blank-404": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-594795c47541a51f3fd940af";
__result.id = "blank-404";
return __result;
}
},"^/myaccount/clientRebate/queryRebate.jsp": { "modules": ["paragraph"], "template" : "rebate.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-153": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c3b",
className:"rebate-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>返利查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-154": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cdc",
className:"rebate-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    "content":a+$(".bk_col3").outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-155": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d32",
className:"rebate-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

/*var data = {
    "content":$(".search_dm").html()   //填写paragraph的内容
};
return data;*/

// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    //2017.6.7修改id为class
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"  </div> ");
    $fake.attr("onclick", $(this).attr("onfocus")).attr("onchange", $(this).attr('onchange'))//2017.6.7
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});

var data = {
    "content": //"<li>"+$(".schoice").outerHTML()+"</li><li>"+$(".lines_tab").find("h4").eq(0).find("a").eq(0).outerHTML()+"</li>"+
                "<li class='selectss'><span>所选分公司</span><span class='select'><input type='text'  readonly='readonly'><img src='"+context.__root + "arrows-updown.png"+"'/></span>"+$("#organization").outerHTML()/*+"</li><li>"+$(".search_dm").find(".b").find(".one").eq(0).html()+"</li><li>"+$(".search_dm").find(".b").find(".one").eq(1).html()+"</li><li>"+$(".search_dm ").find(".btn").eq(0).outerHTML()+$(".search_dm ").find(".btn").eq(1).outerHTML()*/+"</li>"//填写paragraph的内容
                //2017.6.5
                +"<li class='datass'>"+$(".search_dm").find(".b").outerHTML()+"</li>"
                +"<li class='btnss'>"+$(".search_dm").children('input').eq(0).outerHTML()+$(".search_dm").children('input').eq(1).outerHTML()+"</li>"
};
return data;


















}($, context))
}
},"paragraph-156": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c58",
className:"rebate-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
/*var a=''; 
$("#orderHistoryTable").find("tbody").find(".rebateRow").each(function(j){
    var xi=j;
    a+="<div class='fllist'>";
        a+="<li>";
        a+="<span>序号：</span><span>"+$(this).find("td").eq(0).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>所属分公司：</span><span>"+$(this).find("td").eq(1).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>返利金额：</span><span>"+$(this).find("td").eq(2).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>余额：</span><span>"+$(this).find("td").eq(3).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>状态：</span><span>"+$(this).find("td").eq(6).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>是否使用：</span><span>"+$(this).find("td").eq(7).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>生效日期：</span><span>"+$(this).find("td").eq(4).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>失效日期：</span><span>"+$(this).find("td").eq(5).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<a class='checkl-"+xi+"'>查看</a>";
        a+="</li>";
    a+="</div>";
            
})
var data = {
    "content": "<ul class='box_all'>"+a+"</ul>"   //填写paragraph的内容
};
return data;*/

}($, context))
}
},"blank-173": function($, context) {

var __data = (function(){
var b=''
$("#orderHistoryTable").find(".rebateRow").each(function(){
    b+="<div><li><span>序号：</span><span>"+$(this).find("td").eq(0).text().trim()+
    //"</span><span>"+$(this).find("td").eq(8).outerHTML()+
    "</span><span>"+$(this).find("td").eq(9).outerHTML()+
    "</span></li><li><span>所属分公司：</span><span>"+$(this).find("td").eq(1).text().trim()+
    "</span></li><li><div><span>返利金额：</span><span>"+$(this).find("td").eq(2).text().trim()+
    "</span></div><div><span>余额：</span><span>"+$(this).find("td").eq(3).text().trim()+
    //2018-5.3增加税率列
    "</span></div></li><li><div><span>税率：</span><span>"+$(this).find("td").eq(6).text().trim()+
    "</span></div></li><li><div><span>状态：</span><span>"+$(this).find("td").eq(7).text().trim()+
    //"</span></div><div><span>是否使用：</span><span>"+$(this).find("td").eq(7).text().trim()+
    "</span></div><div><span>是否使用：</span><span>"+$(this).find("td").eq(8).text().trim()+
    "</span></div></li><li><div><span>生效日期：</span><span>"+$(this).find("td").eq(4).text().trim()+
    "</span></div><div><span>失效日期：</span><span>"+$(this).find("td").eq(5).text().trim()+
    "</span></div></li>";
    b+="</div>"
})
var data = {
    aaa: b
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf0";
__result.id = "blank-173";
return __result;
},"blank-174": function($, context) {

var __data = (function(){
$("#orderHistoryTable").find(".check_show").each(function(){
    //$(this).find("tr").eq(0).remove();
})
var list =''
$("#orderHistoryTable").find(".check_show").each(function(i){
    /*var _this =this;
    if($("#orderHistoryTable").find(".check_show").find("tr").length==1){
        list+="<p>暂无返利明细</p>";
    }*/
    
        list+="<div id='FLchaxun-con"+i+"' class='FLchaxun-con'><p><span></span><span>返利明细</span></p>";
        //list+="<div id='FLchaxun-con"+i+"'>";
        $(this).find("tr").each(function(j){
            console.log($(this));
            if($(this).find("tr").length==1){
                list+="<p>暂无返利明细</p>";
            }/*else{*/
            if(j>0){
                list += "<div class='con'><li><span>"+$(this).find("td").eq(4).text()+"</span></li><li><span>返利金额：</span><span>"+$(this).find("td").eq(0).text()+"</span></li><li><span>操作类型：</span><span>"+$(this).find("td").eq(1).text()+"</span></li><li><span>使用详情：</span><span>"+$(this).find("td").eq(2).text()+"</span></li><li><span>订单返利状态：</span><span>"+$(this).find("td").eq(3).text()+"</span></li></div>";
            }
        })
        list+="</div>";
    
    
})




var data = {
    
    aaa: list
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c88";
__result.id = "blank-174";
return __result;
},"paragraph-157": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d1d",
className:"rebate-5",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

/*var a='';
$("#orderHistoryTable").find(".check_c").each(function(j){
    var liu=j;
    a+="<div class='xbock flbock-"+liu+"'>";
        a+="<div class='fhb'><a href='#' class='llback'><img src='"+context.__root + "arrows.png"+"'/></a><span>返利明细</span></div>";
        var _this=this;
        $(_this).find("tr").each(function(i){
            if(i>0){
        a+="<div class='onbock'>";
            a+="<li>";
            a+=$(this).find("td").eq(4).text().trim();
            a+="</li>";
            a+="<li>";
            a+="<span>返利金额：</span><span>"+$(this).find("td").eq(0).text().trim()+"</span>";
            a+="</li>";
            a+="<li>";
            a+="<span>操作类型：</span><span>"+$(this).find("td").eq(1).text().trim()+"</span>";
            a+="</li>";
            a+="<li>";
            a+="<span>使用详情：</span><span>"+$(this).find("td").eq(2).text().trim()+"</span>";
            a+="</li>";
            a+="<li>";
            a+="<span>订单返利状态：</span><span>"+$(this).find("td").eq(3).text().trim()+"</span>";
            a+="</li>";
        a+="</div>";
            }
        })
        
    a+="</div>";
})
var data = {
    "content": "<ul class='box_bock'>"+a+"</ul>"   //填写paragraph的内容
};
return data;
*/
}($, context))
}
},"paragraph-158": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cca",
className:"rebate-6",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

/*var data = {
    "content":$(".pagenext").outerHTML()   //填写paragraph的内容
};
return data;
*/

//路田甜3.1
var data = {
    "content":$(".pageTurn").outerHTML()   //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-161": function($, context) {

var __data = (function(){
var a = '';
$("#organization").find("option").each(function(){
    a+="<li class='selectReplace' selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c32";
__result.id = "blank-161";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/advance/forgetPassword\\d.jsp": { "modules": ["paragraph"], "template" : "forgetPassword.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-159": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d28",
className:"forgetPassword-27 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var TITLE = ["忘记密码", "手机认证", "设置新支付密码", "完成"];
var url = window.location.pathname;//e.g. /myaccount/advance/forgetPassword4.jsp
var index = parseInt(url.match(/\d+(?=\.jsp)/g)[0]);
var title = TITLE[index-1];


var data = {
    "content": "<span>" + title + "</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-160": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7e",
className:"forgetPassword-28",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/(crs\\/)?myaccount\\/myOrders\\/pttlOrderDetail\\.jsp": { "modules": [], "template" : "pttlOrderDetail.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-162": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5f";
__result.id = "blank-162";
return __result;
},"blank-163": function($, context) {

var __data = (function(){
var a="";
$("page").find("var").each(function(){
    a+=$(this).outerHTML()
})
var b="";
$("#bigpacksOne").children("li").each(function(i){
    var _data=$(this).attr("data");
    b+='<div class="pttlOrderDetail-li" data="'+_data+'">';
    b+='<div class="pttlOrderDetail-li-title">'+$(this).text().trim()+'</div>';
    /*************************** 2017-6-15 yn 添加下载收货授权委托书 **********************************/
    b+='<div class="pttlOrderDetail-li-content"><div class="pttlOrderDetail-li-content-people-title"><span>收货人信息</span>'+$('.orderUser_infos').find('.btn_download').outerHTML()+'</div></div>'
    //原
    //b+='<div class="pttlOrderDetail-li-content"></div>'
    /********************************************** end ***********************************************/
    b+='</div>';
})


var card1="";
card1+='<div class="pttlOrderDetail-card1-title">支付信息</div>';
card1+='<div class="pttlOrderDetail-card1-content">';
card1+='<div class="pttlOrderDetail-card1-content-line">发票类型:'+$(".orderPay_infos").children("div.one").eq(0).find("span").text()+'</div>';
//3.3 L
if(!/null/.test($(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(4).find("span").text())){
    card1+='<div class="pttlOrderDetail-card1-content-line">支付方式:'+$(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(4).find("span").text()+'</div>';
}
//3.3
card1+='<div class="pttlOrderDetail-card1-content-line">支付日期:'+$(".orderPay_infos").children("div.one").eq(2).children("div.b").eq(0).find("span").text()+'</div>';
card1+='</div>';
var card2="";
card2+='<div class="pttlOrderDetail-card2-content">';
card2+='<div class="pttlOrderDetail-card2-content-line"><span class="card2-line-left">商品总金额:</span><span class="card2-line-right">'+$(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(0).find("b").text()+'</span></div>';
card2+='<div class="pttlOrderDetail-card2-content-line"><span class="card2-line-left">折扣返利:</span><span class="card2-line-right">'+$(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(1).find("b").text()+'</span></div>';
card2+='<div class="pttlOrderDetail-card2-content-line"><span class="card2-line-left">账期额度:</span><span class="card2-line-right">'+$(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(2).find("b").text()+'</span></div>';
card2+='<div class="pttlOrderDetail-card2-content-line"><span class="card2-line-left">电子钱包金额:</span><span class="card2-line-right">'+$(".orderPay_infos").children("div.one").eq(1).children("div.a").eq(3).find("b").text()+'</span></div>';
card2+='</div>';
card2+='<div class="pttlOrderDetail-card1-bottom">';
if($(".paysum").find("span").length>0){
    card2+='<div class="pttlOrderDetail-card1-bottom-top"><span>应付金额：</span>'+$(".paysum").eq(0).find("span").find("b").text()+'</div>';
    card2+='<div class="pttlOrderDetail-card1-bottom-bottom">提交日期:'+$(".orderPay_infos").children("div.one").eq(2).children("div").eq(1).find("span").text()+'</div>';
}else{
    card2+='<div class="pttlOrderDetail-card1-bottom-bottom">提交日期:'+$(".orderPay_infos").children("div.one").eq(2).children("div").eq(1).find("span").text()+'</div>';
}
card2+='</div>';
var bottom="";
if($("#immediatePayment").length>0){
    bottom+='<div class="pttlOrderDetail-card1-button"><button class="immediatePayment" onclick="pttlOrderDetailImmediatePayment()">'+$("#immediatePayment").val()+'</button></div>';
}else if($("#confirm").length>0){
    bottom+='<div class="pttlOrderDetail-card1-button"><button class="confirm" onclick="pttlOrderDetailConfirm()">'+$("#confirm").val()+'</button></div>';
}
if($(".order_state").length>0 && $(".order_state").children("a").length>0){
    bottom+=$(".order_state").children("a").eq(0).outerHTML();
}


var data = {
    pvar:a,
    aaa:$("form[enctype]").outerHTML(),
    title:'<div class="pttlOrderDetail-title-left">'+$(".order_state").children(".one")[0].childNodes[0].textContent.trim()+$(".order_state").children(".one").eq(0).find("span").text().trim()+'</div><div class="pttlOrderDetail-title-right">'+$(".order_state").children(".one").eq(1).children("span").text().trim()+'</div>',
    content:b,
    card1:card1,
    card2:card2,
    bottom:bottom,
    alerthtml:$("#downloadpdf").outerHTML(),
    error: $(".order_state").find(".one").eq(2).find("span").outerHTML(),
    /*订单状态六个图标*/
    status:$('.wb_r').children('.ablock').eq(1).find('.flow_s').outerHTML()
    /*****end*********/
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d74";
__result.id = "blank-163";
return __result;
},"blank-164": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d1f";
__result.id = "blank-164";
return __result;
},"blank-385": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec362aff467a9586973c34";
__result.id = "blank-385";
return __result;
}
},"^/checkout/billing.jsp\\?_requestid=": { "modules": [], "template" : "billing.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-263": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d22";
__result.id = "blank-263";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-178": function($, context) {

var __data = (function(){
var $headscript='';
$("head").find("script").each(function(){
    $headscript+=$(this).outerHTML()
})
/*$("script").each(function(){
    if(/bill/.test($(this).attr("x-src"))){
        $(this).remove();
    }
})*/
$(".otable").find("tr").each(function(i){
    var _this_=this;
    var _td_=$(_this_).find("td").length;
    if(i>0&&_td_>1){
        $(this).find("td").eq(0).addClass("lt-fl-total");
        //$(this).find("td").eq(0).html("<b>￥</b>"+$(this).find("td").eq(0).html()+"<span>返利金额</span>");
        $(this).find("td").eq(1).addClass("lt-fl-data_start");
        $(this).find("td").eq(1).html("<span>生效日期：</span>"+$(this).find("td").eq(1).text().trim());
        $(this).find("td").eq(2).addClass("lt-fl-data_end");
        $(this).find("td").eq(2).html("<span>失效日期：</span>"+$(this).find("td").eq(2).text().trim());
        $(this).find("td").eq(3).addClass("lt-fl-yes_no");
        $(this).find("td").eq(4).addClass("lt-fl-price");
        $(this).find("td").eq(4).html("<span>使用金额：</span>"+$(this).find("td").eq(4).html());
    }
})

$(".wc1200").find(".ablock").eq(0).addClass("remove");
$(".wc1200").find(".ablock").eq(1).addClass("block_content");

var data = {
    billing_content: $headscript+$("body").html()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce9";
__result.id = "blank-178";
return __result;
},"blank-258": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce0";
__result.id = "blank-258";
return __result;
},"blank-319": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca9";
__result.id = "blank-319";
return __result;
}
},"$$checkstandOnline": { "modules": ["paragraph"], "template" : "checkstandOnline.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-166": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c4f",
className:"checkstandOnline-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>收银台</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-167": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cc9",
className:"checkstandOnline-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $headscript='';
$("head").find("script").each(function(){
    $headscript+=$(this).outerHTML();
});
$("#onlineDesk").html("<p>请到PC端我的业务-待支付订单完成支付</p>");

/*-------------------------2019.2.20 LZB 增加 删除PC端底部footer-------------------------------------*/
$(".tl-footer").remove();
$(".xf_right").remove();

var data = {
    "content": $headscript+$("body").html()   //填写paragraph的内容
};
if(data.content.indexOf("请您尽快付款！")!=-1){
    data.content = data.content.replace(/请您尽快付款！/,"请您尽快在PC端付款！");
}
return data;

}($, context))
}
},"paragraph-168": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7ca4",
className:"checkstandOnline-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<p>请到PC端完成下单</p>"   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/(checkout/checkstand.jsp\\?orderId=o\\d+&_requestid=)|(checkout/checkstand.jsp\\?orderId=o\\d+)|(checkout/checkstand.jsp\\?&orderId)": { "modules": ["paragraph"], "template" : "checkstand.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-169": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c3c",
className:"checkstand-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>收银台</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-170": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c45",
className:"checkstand-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $headscript='';
$("head").find("script").each(function(){
    $headscript+=$(this).outerHTML()
})
$(".cblock").eq(0).addClass("lt-order");
$(".cblock").eq(1).addClass("lt-remit")
var data = {
    "content": $headscript+$("body").html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-326": function($, context) {

var __data = (function(){
var data = {
    html: ""
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca7";
__result.id = "blank-326";
return __result;
}
},"$$payResult": { "modules": ["paragraph"], "template" : "payResult.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-171": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c9b",
className:"payResult-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var title=''
if(/payError/.test(window.location.href)){
    title="订单提交失败"
}
else if(/paySuccess/.test(window.location.href)){
    title="订单提交成功"
}
var data = {
    "content": "<span>"+title+"</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-172": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c7e",
className:"payResult-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:"",
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $headscript='';
$("head").find("script").each(function(){
    $headscript+=$(this).outerHTML()
})
var data = {
    "content": $headscript+$("body").html()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/myaccount\\/shippingAddress\\/(shippingAddressManagement)|(shippingAddressManagementDisabled)\\.jsp.*": { "modules": [], "template" : "management.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-179": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf7";
__result.id = "blank-179";
return __result;
},"blank-180": function($, context) {

var __data = (function(){
$(".addressEditForm").each(function(){
    $(this).css("display","none")
})
$(".ipt_c").each(function(){
    $(this).attr("readonly",true);
    $(this).attr("onclick",$(this).attr("onfocus"));
})

// 2018-12-20 签收样章位置
$('#sealHint').children('.alert_d')[0].style.marginTop = '';
$('#sealHint').children('.alert_d')[0].style.marginLeft = 'auto';
$('#sealHint').children('.alert_d')[0].style.marginRight = 'auto';
// 2018-12-20 签收样章位置-end

$("#startDateForAdd").attr("readonly",true);
$("#endDateForAdd").attr("readonly",true);
/*$("#startDateForAdd").attr("onclick",$("#startDateForAdd").attr("onfocus"));
$("#endDateForAdd").attr("onclick",$("#endDateForAdd").attr("onfocus"));*/
$("#new_recPersonName").attr("placeholder","请输入姓名");
$("#new_contactNumber").attr("placeholder","请输入手机号");
$("#new_county").attr("placeholder","县（区）");
var data = {
    //2018-3-22修改收货授权章名称
    aaa:$(".addressListContainer").outerHTML(),
    alerthtml:$("#confirmDisPop").outerHTML()+$('#sealHint').outerHTML()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cdd";
__result.id = "blank-180";
return __result;
},"blank-181": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c9f";
__result.id = "blank-181";
return __result;
},"blank-182": function($, context) {

var __data = (function(){
var data = {
    html: ""
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d90";
__result.id = "blank-182";
return __result;
},"blank-327": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d45";
__result.id = "blank-327";
return __result;
},"blank-183": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var html = '';
$('script').each(function(){
       if($(this).outerHTML().indexOf("webuploader.min.js")!=-1){
           html += $(this).outerHTML();
       }
   })
var data = {
    analyticsScript:script1,
    kehuScript:script2,
    html:html
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d41";
__result.id = "blank-183";
return __result;
},"blank-249": function($, context) {

var __data = (function(){
var data = {
    html: $("#bottom").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c48";
__result.id = "blank-249";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/message/message.jsp": { "modules": ["paragraph"], "template" : "message.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-184": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d88",
className:"message-new tlmall-top-navbar-in-msg ",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){

/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

// var data = {
//     "content": "<a class='lt-cmsList' href='/notice/cmsList.jsp'><span>平台快讯</span></a><a class='lt-message' href='/myaccount/message/message.jsp'><span>我的消息</span></a>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
// };
// return data;

var data = {
    "content": "<a class='lt-cmsList' href='/information/list.jsp'><span>太力头条</span></a><a class='lt-message' href='/myaccount/message/message.jsp'><span>我的消息</span></a>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-185": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7cd4",
className:"message-20",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");





var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/accountManage/accountInfo.jsp": { "modules": ["paragraph"], "template" : "accountInfo.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-186": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d29",
className:"accountInfo-21 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>账户信息管理</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-187": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d33",
className:"accountInfo-22",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


// 在“个人信息修改”“企业信息修改”的头部伪造一个导航条
var $lt = $("i.arrow");
var $pars = $lt.wrap("<div class='guide-bar'></div>").parent();
$pars.eq(0).append($("<span>个人信息修改</span>"));
$pars.eq(1).append($("<span>企业信息修改</span>"));


// 修改 placeholder

var $perForm = $body.find("#personalInfo");
$perForm.find(".ipt_a").attr("placeholder", "请输入姓名");
$perForm.find(".ipt_b").attr("placeholder", "请输入证件号");

var $enterForm = $body.find("#enterpriseInfo");
$enterForm.find(".ipt_d").eq(0).attr("placeholder", "请输入公司名称");
$enterForm.find(".ipt_d").eq(1).attr("placeholder", "请输入营业执照号");
$enterForm.find("#zone").attr("placeholder", "县（区）");
$enterForm.find("textarea").attr("placeholder","请输入详细经营地址");


var body = $body.html();

var data = {
    "content": js + body.replace(/\s*省(?=\s+<input)/g, "")
                        .replace(/\s*市(?=\s+<input)/g, "")
                        .replace(/\s*县（区）\s+/g, "")   
};
return data;

}($, context))
}
},"blank-188": function($, context) {

var __data = (function(){
var a = '';
$("#enterpriseType").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c33";
__result.id = "blank-188";
return __result;
},"blank-189": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c59";
__result.id = "blank-189";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
},"blank-413": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-59ddd702433611156a358f7b";
__result.id = "blank-413";
return __result;
}
},"^/completeInfo/completeClientInfo.jsp": { "modules": ["paragraph"], "template" : "completeClientInfo.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-191": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d7f",
className:"completeClientInfo-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>完善我的账号</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-192": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d6c",
className:"completeClientInfo-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a="";
$("script").each(function(){
    a+=$(this).outerHTML()
})
var b=''
$("body").children("var").each(function(){
    b+=$(this).outerHTML()
})
$("#licenseNumber").attr("placeholder","请输入营业执照注册号");
$(".zc_infos").children("div:nth-child(10)").find(".input_txt").find('input:nth-child(2)').attr("placeholder","请输入法人姓名");
$(".zc_infos").children("div:nth-child(11)").find(".input_txt").find('input:nth-child(2)').attr("placeholder","请输入身份证号");
$(".zc_infos").children("div:nth-child(18)").find(".input_txt").find('input:nth-child(2)').attr("placeholder","请输入销售人员");
$(".zc_infos").children("div:nth-child(19)").find(".input_txt").find('input:nth-child(2)').attr("placeholder","请输入联系电话");
$("#enterpriseName").attr("placeholder","请输入公司名称");
$("textarea").attr("placeholder","请输入详细经营地址");
$("#idcardtext").attr("placeholder","请上传身份证")
$("#contactPersonName").attr("placeholder","请输入联系人姓名");
$("#licenseNumber").attr("placeholder","请输入营业执照注册号");
$("#licensetext").attr("placeholder","请上传营业执照");
$("#zone").attr("placeholder","县（区）");
$("#licenseEcho").html("请上传营业执照");
$("#idEcho").html("请上传证件照片");
//2017/10/16
$("#idEcho2").html("请上传证件照片")
var data = {
    "content":a+b+$("body").html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-195": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c83";
__result.id = "blank-195";
return __result;
},"blank-193": function($, context) {

var __data = (function(){
var a = '';
$("#enterpriseType").find("option").each(function(i){
    /*if(i>0){*/
        a+="<li data-value="+$(this).attr("value")+">";
            a += $(this).text()
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d16";
__result.id = "blank-193";
return __result;
},"blank-194": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca5";
__result.id = "blank-194";
return __result;
},"blank-411": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-59dc9348cb7c8ee29f48c6dd";
__result.id = "blank-411";
return __result;
}
},"^/completeInfo/completeAddressInfo.jsp": { "modules": [], "template" : "completeAddressInfo.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-266": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c52";
__result.id = "blank-266";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-265": function($, context) {

var __data = (function(){
var a="";
$("head").find("script").each(function(){
    a+=$(this).outerHTML()
})
var b=''
$("body").children("var").each(function(){
    b+=$(this).outerHTML()
})
$(".sActive").eq(2).attr("placeholder","县（区）");
//2018-4-16
//$("textarea").eq(0).attr("placeholder","请输入详细收货地址");
$("textarea").eq(0).attr("placeholder","");
$("textarea").eq(1).attr("placeholder","请输入详细税务证详细地址");
$(".sActive").eq(4).attr("placeholder","请输入邮编");
$(".sActive").eq(5).attr("placeholder","请输入收货联系人");
$(".sActive").eq(6).attr("placeholder","请输入联系人电话");
//$(".sActive").eq(10).attr("placeholder","请输入联系人姓名");
$(".sActive").eq(10).attr("placeholder","请输入纳税人识别号");

$(".sActive").eq(11).attr("placeholder","请输入移动电话");
//$(".sActive").eq(16).attr("placeholder","请输入邮编");
//$(".sActive").eq(17).attr("placeholder","请输入开户行");
//$(".sActive").eq(18).attr("placeholder","请输入开户行账号");
//$(".sActive").eq(19).attr("placeholder","请输入税务登记号");

$(".sActive").eq(16).attr("placeholder","请输入开户行");
$(".sActive").eq(17).attr("placeholder","请输入开户行账号");
$('.sActive').eq(19).attr('placeholder','输入联系人电话号码');

$("#shippingAuthTextEcho").html("请上传收货授权委托书");
$("#taxRegTextEcho").html("请上传税务登记证");
$("#regularRegTextEcho").html("请上传一般纳税人证");
$("#IdAttachmentTextEcho").html("请上传身份证附件");
//2018/1/18修改
$("#invoiceInfoTextEcho").html("请上传开票资料");

$("#shippingAuthStartTime").attr("readonly",true);
$("#shippingAuthTime").attr("readonly",true);
$("#shippingAuthStartTime").attr("unselectable","on");
$("#shippingAuthTime").attr("unselectable","on");
//$("#shippingAuthStartTime").attr("onclick","this.blur();"+$("#shippingAuthStartTime").attr("onfocus"));
//$("#shippingAuthTime").attr("onclick","this.blur();"+$("#shippingAuthTime").attr("onfocus"));

// testing..
// $("#shippingAuthStartTime").attr("onfocus",$("#shippingAuthStartTime").attr("onfocus")+";this.blur();");
/*$("#shippingAuthStartTime").on('click', function(){console.log("#shippingAuthStartTime is clicked!")})
$("#shippingAuthStartTime").on('focus', function(){console.log("#shippingAuthStartTime is focused!")})
$("#shippingAuthStartTime").on('blur', function(){console.log("#shippingAuthStartTime is blured!")})*/

/*$("#shippingAuthTime").on('click', function(){console.log("#shippingAuthTime is clicked!")})
$("#shippingAuthTime").on('focus', function(){console.log("#shippingAuthTime is focused!")})
$("#shippingAuthTime").on('blur', function(){console.log("#shippingAuthTime is blured!")})*/
// $("#shippingAuthTime").attr("onfocus",$("#shippingAuthTime").attr("onfocus")+";this.blur();");

/*$("#shippingAuthStartTime").attr("onfocus", "this.blur();");
$("#shippingAuthTime").attr("onfocus","this.blur();");*/
if($("#shippingAuthText").attr("value") == ''){
    $("#shippingAuthTextEcho").html("请上传收货授权委托书");
}else{
    $("#shippingAuthTextEcho").html($("#shippingAuthText").attr("value"));
}
if($("#IdAttachmentText").attr("value") == ''){
    $("#IdAttachmentTextEcho").html("请上传身份证附件");
}else{
    $("#IdAttachmentTextEcho").html($("#IdAttachmentText").attr("value"));
}
if($("#taxRegText").attr("value") == ''){
    $("#taxRegTextEcho").html("请上传税务登记证");
}else{
    $("#taxRegTextEcho").html($("#taxRegText").attr("value"));
}
if($("#regularRegText").attr("value") == ''){
    $("#regularRegTextEcho").html("请上传一般纳税人证");
}else{
    $("#regularRegTextEcho").html($("#regularRegText").attr("value"));
}

var data = {
    html: a+b+$("body").html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf5";
__result.id = "blank-265";
return __result;
},"blank-328": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d91";
__result.id = "blank-328";
return __result;
},"blank-198": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c61";
__result.id = "blank-198";
return __result;
},"blank-200": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ceb";
__result.id = "blank-200";
return __result;
},"blank-199": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c7f";
__result.id = "blank-199";
return __result;
}
},"^/myaccount\\/accountManage\\/subUser2\\.jsp.*": { "modules": [], "template" : "subUser2.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-201": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d43";
__result.id = "blank-201";
return __result;
},"blank-202": function($, context) {

var __data = (function(){
var data = {
    aaa:$(".per_infos").eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c92";
__result.id = "blank-202";
return __result;
},"blank-203": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c34";
__result.id = "blank-203";
return __result;
},"blank-204": function($, context) {

var __data = (function(){
var a = '';
$("#status").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d3d";
__result.id = "blank-204";
return __result;
},"blank-205": function($, context) {

var __data = (function(){
var data = {
    html: $(".cr_red01").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c50";
__result.id = "blank-205";
return __result;
}
},"^/myaccount\\/noteScontact\\/noteScontact\\.jsp": { "modules": [], "template" : "noteScontact.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-206": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8f";
__result.id = "blank-206";
return __result;
},"blank-207": function($, context) {

var __data = (function(){
var a="";
a+='<div class="company">';
$(".contact_table").find("tr").each(function(i){
    if(i>0){
        a+='<li>';
        a+='<div class="line">'+$(this).children("td").eq(0).text().trim()+'</div>';
        a+='<div class="line">地址:'+$(this).children("td").eq(1).text().trim()+'</div>';
        a+='<div class="line">邮箱:'+$(this).children("td").eq(2).text().trim()+'</div>';
        a+='<div class="line">电话:'+$(this).children("td").eq(3).text().trim()+'</div>';
        a+='</li>';
    }
})
a+='</div>';
var data = {
    content1:$(".ablock").eq(0).outerHTML(),
    content2:$(".ablock").eq(1).outerHTML(),
    content3:$(".ablock").eq(2).children(".title_a").eq(0).outerHTML()+a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c9c";
__result.id = "blank-207";
return __result;
},"blank-208": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d63";
__result.id = "blank-208";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/information\\/list\\.jsp": { "modules": ["paragraph"], "template" : "cmsList.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-212": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2a",
className:"cmsList-head tlmall-top-navbar-in-msg",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){

/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

// var data = {
//     "content": "<a class='lt-cmsList' href='/notice/cmsList.jsp'><span>平台快讯</span></a><a class='lt-message' href='/myaccount/message/message.jsp'><span>我的消息</span></a>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
// };
// return data;

var data = {
    "content": "<a class='lt-cmsList' href='/information/list.jsp'><span>太力头条</span></a><a class='lt-message' href='/myaccount/message/message.jsp'><span>我的消息</span></a>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-209": function($, context) {

var __data = (function(){
// var data = {
//     aaa:$(".news").outerHTML()
// };
// return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cde";
__result.id = "blank-209";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"blank-502": function($, context) {

var __data = (function(){
var data = {
    title: $('.headline-wrap').children('.headline-box').children('.headline-nav').outerHTML()
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b4c354a45f6b43c145e87e7";
__result.id = "blank-502";
return __result;
},"blank-503": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.headline-wrap').children('.headline-box').children('.headline-con').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b4c35e645f6b43c145e87f0";
__result.id = "blank-503";
return __result;
},"blank-513": function($, context) {

var __data = (function(){
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b552fef45f6b43c145e8ade";
__result.id = "blank-513";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/(notice\\/cmsDetail\\.jsp)|(notice\\/detail\\.jsp)": { "modules": [], "template" : "cmsDetail.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-210": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c60";
__result.id = "blank-210";
return __result;
},"blank-211": function($, context) {

var __data = (function(){
//var read = 

var data = {
    title:$(".title").find("span").outerHTML()+$(".news").find("b").outerHTML(),
    time: $(".bar").children(".float_l").text(),
    read: $(".bar").children(".float_r").children(".readNums").html(),
    share: $(".bar").children(".float_r").children(".share").outerHTML(),
    content: $(".notice_c").outerHTML()+$(".news").find(".news_cont").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c3d";
__result.id = "blank-211";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount\\/securitySetting\\/securitySetting\\.jsp": { "modules": [], "template" : "securitySetting.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-214": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cac";
__result.id = "blank-214";
return __result;
},"blank-215": function($, context) {

var __data = (function(){
var data = {
    modifyPasswordForm:$("#modifyPasswordForm").outerHTML(),
    modifyPhoneForm:$("#modifyPhoneForm").outerHTML(),
    modifyMailForm:$('.modifyEmailForm').eq(0).outerHTML()+$('.modifyEmailForm').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d89";
__result.id = "blank-215";
return __result;
},"blank-216": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8d";
__result.id = "blank-216";
return __result;
},"blank-217": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d76";
__result.id = "blank-217";
return __result;
},"blank-205": function($, context) {

var __data = (function(){
var data = {
    html: $(".cr_red01").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c50";
__result.id = "blank-205";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount\\/queryElectronic\\/queryElectronicRespository\\.jsp": { "modules": [], "template" : "queryElectronicRespo.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-218": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf8";
__result.id = "blank-218";
return __result;
},"blank-219": function($, context) {

var __data = (function(){
var data = {
    aaa:$(".wb_r").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ccb";
__result.id = "blank-219";
return __result;
},"blank-220": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5a";
__result.id = "blank-220";
return __result;
},"blank-221": function($, context) {

var __data = (function(){
var a = '';
$("#dailyBillBranchName").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c89";
__result.id = "blank-221";
return __result;
},"blank-222": function($, context) {

var __data = (function(){
var a = '';
$("#dailyBillYear").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ccc";
__result.id = "blank-222";
return __result;
},"blank-223": function($, context) {

var __data = (function(){
var a = '';
$("#dailyBillMonth").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c47";
__result.id = "blank-223";
return __result;
},"blank-224": function($, context) {

var __data = (function(){
var a = '';
$("#company").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca6";
__result.id = "blank-224";
return __result;
},"blank-225": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce8";
__result.id = "blank-225";
return __result;
},"blank-226": function($, context) {

var __data = (function(){
var a = '';
$("#month").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cd5";
__result.id = "blank-226";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/contact/contactMessage.jsp": { "modules": ["paragraph"], "template" : "contactMessage.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-227": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c93",
className:"contactMessage-39 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>企业联系人管理</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-228": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d79",
className:"contactMessage-40",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


// 修改文字信息
//$body.find(".title_main").children("span").text("企业联系人");
$body.find(".title_main").children("span").text("我的联系人");

// 修改备注的位置
$body.find(".table_datas").children("table").each(function(){
    var trs = $(this).find("tr");
    var tds = $(this).find("tr").eq(1).find("td");
    trs.eq(2).append(tds.eq(tds.length-1));
    trs.eq(1).append($(this).find("tr").eq(2).find("td").eq(0));
});


// 给信息表单弹窗添加导航条
//$body.find(".newAddress").wrapInner("<div class='newAddress-content'></div>");
$body.find(".newAddress").prepend($('<div class="guide-bar"><i class="arrow"></i><span>编辑企业联系人</span></div>'));
$body.find("#newAdd").find(".guide-bar").find("span").text("新增企业联系人");

// 修改不规范的 a 的禁止 href
$body.find("#addContact").children(".pd_tb").children("a").attr("href", "javascript:void(0);");

$("#birthdate").attr("readonly",true);
$("#birthdate").attr("onclick",$("#birthdate").attr("onfocus"));

var data = {
    "content": js + $body.html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-229": function($, context) {

var __data = (function(){
var a ='';
$(".wb_r").find(".ablock").eq(0).find("form").each(function(i){
    var _this_=this;
    a+="<div class='contact_list' id='lt-contact_"+i+"'>"
        $(_this_).find("select").each(function(j){
            var _this=this;
            a+="<div class='contact_select-"+j+"'><div class='alert_select'><ul>";
                $(_this).find("option").each(function(){
                    a+="<li data-value="+$(this).attr("value")+">";
                    a += $(this).text()
                    a+="</li>";
                })
            a+="</div></div></ul>"
        })
    a+="</div>"
})

/*$("#birthdate").attr("readonly",true);
$("#birthdate").attr("onclick",$("#birthdate").attr("onfocus"));*/
var data = {
    all:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d34";
__result.id = "blank-229";
return __result;
},"blank-230": function($, context) {

var __data = (function(){
var a1 = '';
$("#contactMessage").find("select").eq(0).find("option").each(function(){
    /*if(i>0){*/
        a1+="<li data-value="+$(this).attr("value")+">";
            a1 += $(this).text()
        a1+="</li>"
    /*}*/
})
var a2 = '';
$("#contactMessage").find("select").eq(1).find("option").each(function(){
    /*if(i>0){*/
        a2+="<li data-value="+$(this).attr("value")+">";
            a2 += $(this).text()
        a2+="</li>"
    /*}*/
})
var a3 = '';
$("#contactMessage").find("select").eq(2).find("option").each(function(){
    /*if(i>0){*/
        a3+="<li data-value="+$(this).attr("value")+">";
            a3 += $(this).text()
        a3+="</li>"
    /*}*/
})
var a4 = '';
$("#contactMessage").find("select").eq(3).find("option").each(function(){
    /*if(i>0){*/
        a4+="<li data-value="+$(this).attr("value")+">";
            a4 += $(this).text()
        a4+="</li>"
    /*}*/
})
/*$("#birthdate").attr("readonly",true);
$("#birthdate").attr("onclick",$("#birthdate").attr("onfocus"));*/
var data = {
    //html: $("#addContact").outerHTML(),
    li1: a1,
    li2: a2,
    li3: a3,
    li4: a4
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c35";
__result.id = "blank-230";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/myOrders/pttlOrders.jsp": { "modules": ["paragraph"], "template" : "pttlrders.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-231": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d21",
className:"pttlrders-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>订单查询</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-232": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c4a",
className:"pttlrders-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})


/*$("#createDate").attr("readonly",true);
$("#completedDate").attr("readonly",true);
$("#createDate").attr("onclick",$("#createDate").attr("onfocus"));
$("#completedDate").attr("onclick",$("#completedDate").attr("onfocus"));

$("#createDate").attr("onfocus",$("#createDate").attr("onfocus")+";document.activeElement.blur();");
$("#completedDate").attr("onfocus",$("#completedDate").attr("onfocus")+";document.activeElement.blur();");*/

// 日历组件
$("#createDate, #completedDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


$("#orderId").attr("placeholder","请输入订单号");
var data = {
    "content":a+$(".ablock").eq(0).find(".title_main").outerHTML() +$(".ablock").eq(0).find(".search_infos").find(".one").eq(1).outerHTML() +$(".ablock").eq(0).find(".search_infos").find(".one").eq(2).outerHTML() +$(".ablock").eq(0).find(".search_infos").find(".one").eq(0).outerHTML() +$(".ablock").eq(0).find(".search_infos").find(".one").eq(4).outerHTML() +$(".ablock").eq(0).find(".search_infos").find(".one").eq(3).outerHTML() +$(".ablock").eq(0).find(".pd_tb20").outerHTML()//填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-233": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d80",
className:"pttlrders-3",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content":$(".ablock").eq(1).find(".pd_lr").html()   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-234": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d3e",
className:"pttlrders-4",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
   
var a=''; 
$(".table_a").find("tbody").find("tr").each(function(i){
    var _this_=this;
    if(i>0){
    a+="<div class='ddlist'>";
        a+="<li>";
        a+="<span>订单号："+$(this).find("td").eq(0).find(".alink01").outerHTML().trim()+"</span>";
        a+="<span>"+$(this).find("td").eq(6).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(1).html().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(2).html().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(0).html().trim()+"</span>";
        a+="<span>应付总额：<b>"+$(this).find("td").eq(5).text().trim()+"</b></span>";
        a+="<span>共<b>"+$(this).find("td").eq(3).text().trim()+"</b>件商品</span>";
        a+="</li>";
        a+="<li>";
        a+="<span><div class='wl_td_look'  onclick='showMenu(this)'><a>物流状态</a></div></span>";
        a+="<span>"+$(this).find("td").eq(11).outerHTML().trim()+"</span>";
        a+="</li>";
        a+="<li class='menubox-parent'>";
        a+="<div class='menubox'>";
        if($(_this_).find(".turns_title").children("li").length>0){
            $(_this_).find(".turns_title").eq(0).children("li").each(function(){
                a+="<div class='list-menu' onclick='ajaxbox(this)' data="+$(this).attr("data")+">"+$(this).text().trim()+"</div>"
            })   
        }
        a+="</div>";
        a+="</li>";
        a+="<li class='box'>";
        a+="<div class='pttlOrders-alert-title'><div class='hide-alert' onclick='hidebox(this)'></div>订单跟踪</div>";
        a+="<div class='pttlOrders-alert-content1'></div>";
        a+="<div class='pttlOrders-alert-content2'></div>";
        a+="</li>";
    a+="</div>";
    }
            
})
var data = {
    "content": "<ul class='ddbox_all'>"+a+"</ul>"   //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-235": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d64",
className:"pttlrders-5",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var $bodyvar=''
$("body").find("var").each(function(){
    $bodyvar+=$(this).outerHTML()
})
var data = {
    "content": $bodyvar +$("#reAdd").outerHTML()  //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-236": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d6d",
className:"pttlrders-6",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

/*var data = {
    "content":$(".pagenext").html()   //填写paragraph的内容
};
return data;*/

//路田甜3.1
var data = {
    "content":$(".pageTurn").outerHTML()  //填写paragraph的内容
};
return data;
}($, context))
}
},"paragraph-237": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2b",
className:"pttlrders-7",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
$(document).ready(function(){
     $("#downloadpdf").prepend("<div class='zz'></div>")
     $("#cancelOrder").prepend("<div class='zz'></div>")
     $("#reAddModel").prepend("<div class='zz'></div>")
     $("#confirmDiv").prepend("<div class='zz'></div>")
 })
var data = {
    "content":$("#downloadpdf").outerHTML() +$("#cancelOrder").outerHTML() +$("#reAddModel").outerHTML()+$("#confirmDiv").outerHTML()  //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-238": function($, context) {

var __data = (function(){
var a = '';
$("#orderState").find("option").each(function(i){
    a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cdf";
__result.id = "blank-238";
return __result;
},"blank-239": function($, context) {

var __data = (function(){
var a = '';
$("#realtionbrance").find("option").each(function(i){
    a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf2";
__result.id = "blank-239";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^(/crs)?/myaccount\\/clientRebate\\/rebateConfirMation\\.jsp": { "modules": [], "template" : "rebateConfirMation.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-250": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d44";
__result.id = "blank-250";
return __result;
},"blank-400": function($, context) {

var __data = (function(){
/*搜索和返回明细导出按钮2017.6.5*/
$("#startTimeConfirm, #endTimeConfirm").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    //2017.6.7id换class
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus")).attr('onchange',$(this).attr('onchange'))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


$(".ablock").find(".clearfix").find(".block_l").each(function(){
    var _h3 = $(this).find("h3").html($(this).find("h3").text().replace(/：/ig,""))
    $(this).find("b").after(_h3)
})
var data = {
    content_msg: $(".ablock").find(".clearfix").outerHTML(),//返利信息
    content_date: $(".yetRebate_infos").find(".pd_lr").outerHTML()//日期&按钮
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5901886f4574b11c227896bc";
__result.id = "blank-400";
return __result;
},"blank-251": function($, context) {

var __data = (function(){
var a="";
$("page").find("var").each(function(){
    a+=$(this).outerHTML()
})
var card="";
/*card+='<div class="pttlOrderDetail-content">';*/
card+='<div class="pttlOrderDetail-content">'/*+"<div id='form11'>"+$('#RebateConfirMation').outerHTML()+"</div>"+$('#RebateConfirMation').next('input').outerHTML()+$('#RebateConfirMation').next('input').next('input').outerHTML();*///2017.5.24;
var trrebateRows=$(".table.table_a").find(".rebateRow");
if(trrebateRows.length==0){
    card+="<p>暂无待确认返利</p>";
}else{
    for(var i=0; i<trrebateRows.length; i++){
    card+='<li>';
        card+='<div class="li-main">';
            card+='<div class="li-main-box">';
                card+='<div class="li-main--box-title">序号：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(0).text().trim()+'</div>';
                card+='<div class="li-main-box-content">';
                    card+='<div class="li-main-box-content-line">所属分公司：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(2).text().trim()+'</div>';
                    card+='<div class="li-main-box-content-line">返利金额：<span class="red">'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(1).text().trim()+'</span></div>';
                    
                    //2017.6.2 2018.5.3
                    card+='<div class="li-main-box-content-line">税率：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(5).text().trim()+'</span></div>';
                    card+='<div class="li-main-box-content-line">状态：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(6).text().trim()+'</div>';
                    card+='<div class="li-main-box-content-date">';
                        card+='<div class="li-main-box-content-line">生效日期：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(3).text().trim()+'</div>';
                        card+='<div class="li-main-box-content-line">失效日期：'+$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(4).text().trim()+'</div>';
                    card+='</div>';
                card+='</div>';
                card+='<div class="li-main-box-botton">';
                
                if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length>0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length>0){
                    
                    card+='<button class="confirm red" onclick="rebateConfirMationConfirm(this)">确认</button>';
                    card+='<button class="look red" onclick="rebateConfirMationBoxShow(this)">查看</button>';
                }else if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length>0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length===0){
                    card+='<button class="confirm">确认</button>';
                    card+='<button class="look red" onclick="rebateConfirMationBoxShow(this)">查看</button>';
                }else if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length===0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length>0){
                    card+='<button class="confirm red" onclick="rebateConfirMationConfirm(this)">确认</button>';
                    card+='<button class="look">查看</button>';
                }else{
                    card+='<button class="confirm">确认</button>';
                    card+='<button class="look">查看</button>';
                }
                card+='</div>';//2017.5.24
                /*card+='<div class="li-main-box-botton">';
                if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length>0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length>0){
                    card+=$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).html();
                    card+='<button class="look red" onclick="rebateConfirMationBoxShow(this)">查看</button>';
                }else if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length>0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length===0){
                    card+='<button class="confirm">确认</button>';
                    card+='<button class="look red" onclick="rebateConfirMationBoxShow(this)">查看</button>';
                }else if($(".table.table_a").find(".rebateRow").eq(i).children("td").eq(7).find("a").length===0 && $(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).find("input").length>0){
                    card+=$(".table.table_a").find(".rebateRow").eq(i).children("td").eq(8).html();
                    card+='<button class="look">查看</button>';
                }else{
                    card+='<button class="confirm">确认</button>';
                    card+='<button class="look">查看</button>';
                }
                card+='</div>';*/
            card+='</div>';
            card+='<div class="li-alert-box">';
                card+='<div class="li-alert-box-head"><div class="li-alert-box-return" onclick="rebateConfirMationHidden(this)"></div>返利明细</div>';
                card+='<div class="li-alert-box-content">';
                $(".table.table_a").find(".check_c").eq(i).find("table.table").find("tr").each(function(j){
                    var _thisTr=this;
                    if(_thisTr.length==0){
                        card+="<p>暂无返利明细</p>";
                    }
                    if(j>0){
                        card+='<div class="li-alert-box-line">';
                            card+='<div class="li-alert-box-line-title">物料编码：'+$(this).children("td").eq(1).text().trim()+'</div>';
                            card+='<div class="li-alert-box-line-content">';
                                card+='<div class="line"><span class="span-left">品牌：'+$(this).children("td").eq(0).text().trim()+'</span><span class="span-right">数量：'+$(this).children("td").eq(5).text().trim()+'</span></div>';
                                card+='<div class="line"><span class="span-left">物料名称：'+$(this).children("td").eq(2).text().trim()+'</span><span class="span-right">折扣金额：'+$(this).children("td").eq(6).text().trim()+'</span></div>';
                                card+='<div class="line"><span class="span-left">备注：'+$(this).children("td").eq(4).text().trim()+'</span><span class="span-right">单价：'+$(this).children("td").eq(7).text().trim()+'</span></div>';
                                card+='<div class="line"><span class="span-left">折扣类型：'+$(this).children("td").eq(3).text().trim()+'</span></div>';
                            card+='</div>';
                        card+='</div>';
                    }
                })
                card+='</div>';
            card+='</div>';
        card+='</div>';
    card+='</li>';
}
}
card+='</div>';
var data = {
    pvar: a,
    /*aaa:$(".ablock.pd_lr").outerHTML(),*/
    aaa:$(".yetRebate_infos").outerHTML(),
    bbb:card,
    ccc:$(".pagenext").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cd6";
__result.id = "blank-251";
return __result;
},"blank-252": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c94";
__result.id = "blank-252";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount/myOrders/pttlOrderSearch.jsp": { "modules": [], "template" : "pttlOrderSearch.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-291": function($, context) {

var __data = (function(){
/*var $bodyvar=''
$("head").find("var").each(function(){
    $bodyvar+=$(this).outerHTML()
})
var data = {
    bodyvar:$bodyvar
};
return data;*/
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf6";
__result.id = "blank-291";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-292": function($, context) {

var __data = (function(){
/*var  x="";
$("script").each(function(){
    x+=$(this).outerHTML();
})*/
var $bodyvar=''
$("var").each(function(){
    $bodyvar+=$(this).outerHTML()
})
var data = {
    html:$bodyvar +$(".wb_r").find(".pd_lr").eq(0).outerHTML()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cd7";
__result.id = "blank-292";
return __result;
},"blank-293": function($, context) {

var __data = (function(){
var a=''; 
$(".table_a").find("tbody").find("tr").each(function(i){
    if(i>0){
    a+="<div class='zflist'>";
        a+="<li>";
        a+="<span>订单号："+$(this).find("td").eq(1).find(".alink01").outerHTML()+"</span>";
        a+="<span>"+$(this).find("td").eq(2).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(0).html()+"</span>";
        a+="<span>"+$(this).find("td").eq(3).html()+"</span>";
        a+="<span>订单数量："+$(this).find("td").eq(4).text().trim()+"</span>";
        a+="<span>当前总额："+$(this).find("td").eq(5).text().trim()+"</span>";
        a+="<span>"+$(this).find("td").eq(1).html()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(7).text().trim()+"</span>";
        a+="<span>应付总额：<b>"+$(this).find("td").eq(6).text().trim()+"</b></span>";
        a+="</li>";
        a+="<li>";
        a+="<span>"+$(this).find("td").eq(8).html()+"</span>";
        a+="</li>";
    a+="</div>";
    }
            
})
var data = {
    html: a
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c49";
__result.id = "blank-293";
return __result;
},"blank-294": function($, context) {

var __data = (function(){
var  a="";
$("script").each(function(){
    a+=$(this).outerHTML();
})
var data = {
    html: $(".table_a").find("tbody").find("tr").eq(0).find("th").eq(0).html() +$(".notPay_btn").outerHTML() +a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d36";
__result.id = "blank-294";
return __result;
},"blank-295": function($, context) {

var __data = (function(){
$(document).ready(function(){
     $("#warnfirmDiv").prepend("<div class='zz'></div>")
 })
//弹出框按钮
$("#is_yes").attr("readonly",true);
$("#is_no").attr("readonly",true);
var data = {
    html: $("#warnfirmDiv").outerHTML() 
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cce";
__result.id = "blank-295";
return __result;
},"blank-296": function($, context) {

var __data = (function(){
$(document).ready(function(){
     $("#cancelDiv").prepend("<div class='zz'></div>")
     $("#downloadpdf").prepend("<div class='zz'></div>")
 })
var data = {
    html: $("#cancelDiv").outerHTML() +$("#downloadpdf").outerHTML() 
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ca8";
__result.id = "blank-296";
return __result;
},"blank-297": function($, context) {

var __data = (function(){
var data = {
    html: $(".pagenext").html() 
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c8b";
__result.id = "blank-297";
return __result;
},"blank-314": function($, context) {

var __data = (function(){

var data = {
    content:$(".fixedscroll").outerHTML() +$("#reAdd").outerHTML()//填写paragraph的内容
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c82";
__result.id = "blank-314";
return __result;
},"blank-248": function($, context) {

var __data = (function(){
var a = '';
$("#RepayCompany").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c8a";
__result.id = "blank-248";
return __result;
},"blank-298": function($, context) {

var __data = (function(){
/*var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;*/
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c95";
__result.id = "blank-298";
return __result;
}
},"^/myaccount/giftlist/giftlist.jsp": { "modules": ["paragraph"], "template" : "giftlist.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"paragraph-254": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d35",
className:"giftlist-35 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>我的收藏</span>"/*+"<a href='/' class='back'><img src='"+context.__root + "cart-home.png"+"'/></a>"*/   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-255": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7ccd",
className:"giftlist-36",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var js = "";
$("head").find("script").each(function(){
    js += $(this).outerHTML();
});

var $body = $("body");


/*console.log("In giftlist-36, body-js: ");
console.log($body.find("script").length);
console.log($body.find("script"));*/


var vars = "";
$("var").each(function(){
    vars += $(this).outerHTML();
});
var miniCart = $("#miniCartHeader").outerHTML();
var content = $(".wb_r").outerHTML();
var modal = $("#alertGoodsNotice").outerHTML();
var form = $("#removeGiftItemForm").outerHTML();

var data = {
    "content": vars +/* miniCart + */content + modal + form
}
return data;

}($, context))
}
},"blank-256": function($, context) {

var __data = (function(){
var memJS = "";
var parJS = "";

$("body").find("script").each(function(){
    if($(this).html().indexOf("NTKF_PARAM") !== -1)
        parJS = $(this).outerHTML();
    if($(this).html().indexOf("function(i,s,o,g,r,a,m)") !== -1)
        memJS = $(this).outerHTML();
});

var data = {
    twoJS:  memJS + parJS
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf3";
__result.id = "blank-256";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/guide\\/aboutUs\\.jsp": { "modules": ["tabs"], "template" : "aboutUs.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-259": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d81";
__result.id = "blank-259";
return __result;
},"tabs-260": function($, context) {
return {
__type:"tabs",
widgetId: "WIDGET-58607e88f8b220b4245e7d19",
className:"aboutUs-tabs-59",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","noSwipe":0},
realData:true,
content:(function($, context){
/*
 tabs: 1.0

 此模块的使用方法：采集原PC网站上的tab切换数据，在手机页面上生成tab切换效果。

 常用用途：通常用来采集一组tab切换标题以及文字等信息。

  了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#tabs。

         示例代码：

         var data = [];
         $(".listpart").eq(1).find("li").each(function(){
             data.push({
                 "title": $(this).find(".news-pic").find("img").src(),
                 "content": $(this).find(".news-pic").find("a")html(),
                 "active": ""
             });
         });
         return data;
*/
var a="";
$(".aboutUs").children(".ablock").eq(2).children(".content").find("li").each(function(){
    var _this_=this;
    $(_this_).children("div").each(function(){
        $(this).attr("class","imgBox");
        $(this).find("br").remove();
        a+=$(this).outerHTML()
    })
})
$(".aboutUs").children(".ablock").eq(3).children(".content").find(".one").each(function(){
    var _this_=this;
    $(_this_).children("img").each(function(){
        $(this).wrap("<div class='container'></div>");
    })
})
var data = [
    {
        "title":   "公司简介",   // 选项卡标题
        "content": $(".aboutUs").children(".ablock").eq(0).children(".content").html(),   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    },
    {
        "title":   "企业文化",   // 选项卡标题
        "content": $(".aboutUs").children(".ablock").eq(1).children(".content").html(),   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    },
    {
        "title":   "公司荣誉",   // 选项卡标题
        "content": "<div class='flexslider'>"+a+"</div><div class='addbtn' onclick='addList(5)'>点击加载更多</div>",   // 选项卡内容
        "active":  true // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    },
    {
        "title":   "合作伙伴",   // 选项卡标题
        "content": $(".aboutUs").children(".ablock").eq(3).children(".content").html(),   // 选项卡内容
        "active":  false // 是否激活当前选项卡，true | false，只允许一个 Tab 标记为激活
    }
];

return data;

}($, context))
}
},"blank-261": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d3f";
__result.id = "blank-261";
return __result;
}
},"^(/crs)?/myaccount/orderEvaluation/orderEvaluService\\.jsp\\?.+": { "modules": [], "template" : "orderEvaluService.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-267": function($, context) {

var __data = (function(){
var data = {
    html: ""
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d65";
__result.id = "blank-267";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-268": function($, context) {

var __data = (function(){
var varstring = "";
var content = "";


$("body").children("var").each(function(){
    varstring += $(this).outerHTML();
});


var $temp = $(".wb_r");
// table 伪造成 ul
var $table = $temp.find("#orderEvaluService").children("table");
var $trs = $table.find("tr");
var timeHTML = $table.find("th").eq(1).html();
$trs.each(function(index){
    if(index === $trs.length - 1 && $(this).find(".rating").length > 0){// （表尾）星级评价
        $(this).addClass("rating");
    }
    else if(index > 0){// && index < $trs.length - 1
        $(this).find(".content").append($("<span class='time-stamp'></span>").html(timeHTML));
    }
    else if(index === 0){// 表头
        $(this).find("th")[2].childNodes[0].remove();// 去掉“交易状态：”
    }
});
content = $temp.outerHTML();


var data = {
    vars: varstring,
    html: content
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8b";
__result.id = "blank-268";
return __result;
},"blank-269": function($, context) {

var __data = (function(){
var script1 = "";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2 = "";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d6e";
__result.id = "blank-269";
return __result;
}
},"^/myaccount/creditedDetail/(queryCreditedPaymentHistory|queryCreditPaymentorRebackHistory)\\.jsp.*": { "modules": [], "template" : "queryCrdtPmt_RbkHist.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-274": function($, context) {

var __data = (function(){
var pt = "";
var pn = window.location.pathname;
pt = pn.indexOf("queryCreditedPaymentHistory") !== -1 ? "待还款额度" : "额度查询";

var data = {
    pageTitle: pt
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d42";
__result.id = "blank-274";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-275": function($, context) {

var __data = (function(){
var varstr = "";
var content = "";
var formHTML = "";
var warnAlert = "";

$("body").find("var").each(function(){
    varstr += $(this).outerHTML();
});



var $temp = $(".wb_r");

// 调换查询条件和提示的顺序
var $abs = $temp.find(".ablock");
$abs.eq(2).before($abs.eq(0));

// 日历组件
$("#createDate, #createDate1").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});

// $("#createDate").attr("readonly",true);
// $("#createDate1").attr("readonly",true);
// $("#createDate").attr("onclick",$("#createDate").attr("onfocus"));
// $("#createDate1").attr("onclick",$("#createDate1").attr("onfocus"));
// $("#createDate").attr("onfocus",'event.preventDefault();');
// $("#createDate1").attr("onfocus",'event.stopPropagation();');
// $("#createDate").each(function(){//, #createDate1
//         this.type = "button"; // 使用原生 js 而不是 jq ，避开 jq 因为安全考虑而不允许 attr 修改 input 的 type
//     });
// $("#createDate").after("<div id='date-fake-mask' data-related-input='createDate'></div>");
// $("#createDate1").after("<div id='date-fake-mask1' data-related-input='createDate1'></div>");

//弹出框按钮
//$("#is_yes").attr("readonly",true);
//$("#is_no").attr("readonly",true);

// 将 table 伪造成 ul
var isQCPH = window.location.pathname.indexOf("queryCreditedPaymentHistory") !== -1;
var hasCheckBox = isQCPH;
var $table = $temp.find("#AcLists").find("table");// ??? 
if(!hasCheckBox){
    $table.eq(1).find("tr").each(function(rIndex, tr){
        if(rIndex === 0){
            $(tr).prepend("<th class='bs-placeholder'></th>");
        }
        else {
            $(tr).prepend("<td class='bs-placeholder' style='padding: 0 6px;'></td>");
        }
    });
}
$table.each(function(tIndex){
    var $trs = $(this).find("tr");
    var $curTR = null;
    var $ths = null;
    var $tds = null;
    if($trs.length > 1){
        $ths = $trs.find("th");
        for(var i = 1; i < $trs.length; i++){
            $curTR = $trs.eq(i);
            $tds = $curTR.find("td");
            $tds.each(function(j, td){
                if(j > 0 && j < $ths.length - 1){
                    $(td).prepend($("<span class='td-title'>"+$ths.eq(j).text()+"：</span>"));
                }
                
                if(tIndex === 0){/* 额度明细 */
                    if(j === 9){/* 申请单号 */
                        $tds.eq(6).after($(td));
                    }
                    else if(j === 10){/* 还款状态 */
                        if($(td).html().indexOf("<br>") !== -1){
                            $(td).html($(td).html().replace(/<br>/g, " "));
                        }
                    }
                }
                else if(tIndex === 1){/* 还款明细 */
                    if(j === 2){/* 申请时间 */
                        $tds.eq($ths.length - 1).before($(td));
                    }
                    if(j === $ths.length - 1){/* 操作 */
                        if($(td).find("a").length > 0 || $(td).find("input").length > 0){/* 如果存在操作按钮，那么添加一个 wrapper */
                            $(td).wrapInner($("<div class='btn-wrapper'></div>"));
                        }
                        else {
                            $(td).wrapInner($("<div class='btn-wrapper' style='text-align: right;'></div>"));
                        }
                    }
                }
            });
        }
    }
    else if($trs.length === 1){
        $(this).addClass("empty-table");
        $trs.after($("<tr class='empty-tr'><td class='empty-td'>未查询到明细！</td></tr>"));
    }
});

// 修改提示弹窗的结构
var $warn = $("#warnfirmDiv");
$warn.wrapInner("<div class='alert_main'></div>").prepend('<div class="bigHide"></div>');
/*if(isQCPH){// 如果是“待还款额度”页面的话，……
    $warn.wrapInner("<div class='alert_main'></div>").prepend('<div class="bigHide"></div>');
}
else {// 如果是“额度查询”页面的话，……
    $warn.children(".alert_content").addClass("alert_main");
}*/

content = $temp.outerHTML();


formHTML = $("#eidjian").outerHTML();


var $warnAlert = $("#warnfirmDiv");
// 避免 input 获得焦点
if(isQCPH){// 如果是“待还款额度”页面的话，……
    $("#warnfirmDiv").find("#is_yes").attr("onfocus", "this.blur();").attr("type", "button");
}
else {// 如果是“额度查询”页面的话，……
    $("#warnfirmDiv").find(".is_cancel").attr("onfocus", "this.blur();").attr("type", "button");
}
warnAlert = $("#warnfirmDiv").outerHTML();
/*console.log($("#createDate").eq(0)[0].outerHTML);
$("#createDate").attr("readonly",true);
$("#createDate1").attr("readonly",true);
$("#createDate").attr("onclick",$("#createDate").attr("onfocus"));
$("#createDate1").attr("onclick",$("#createDate1").attr("onfocus"));*/
var data = {
    vars: varstr,
    html: content,
    form: formHTML,
    modal: warnAlert
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c53";
__result.id = "blank-275";
return __result;
},"blank-276": function($, context) {

var __data = (function(){
var memJS = "";
var parJS = "";
var thisJS = "";

$("body").find("script").each(function(){
    if($(this).html().indexOf("NTKF_PARAM") !== -1)
        parJS = $(this).outerHTML();
    if($(this).html().indexOf("function(i,s,o,g,r,a,m)") !== -1)
        memJS = $(this).outerHTML();
    if($(this).html().indexOf("searchOrdersByDate") !== -1)
        thisJS = $(this).outerHTML();
});


var allJS = "";
$("body").find("script").each(function(){
    allJS += $(this).outerHTML();
});

var data = {
    twoJS:  memJS + parJS,
    thisPageJS: thisJS,
    allJS: allJS
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c81";
__result.id = "blank-276";
return __result;
},"blank-288": function($, context) {

var __data = (function(){
var a = '';
$("#realtionbrance").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d78";
__result.id = "blank-288";
return __result;
},"blank-289": function($, context) {

var __data = (function(){
var a = '';
$("#repaymentState").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7cea";
__result.id = "blank-289";
return __result;
},"blank-290": function($, context) {

var __data = (function(){
var a = '';
$("#creditPaymentStatus").find("option").each(function(){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text().trim();
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d66";
__result.id = "blank-290";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/myaccount\\/creditedDetail\\/amountLoanApplication\\.jsp": { "modules": [], "template" : "amountLoanApplicatio.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-81": function($, context) {

var __data = (function(){
var varstring="";
$("body").children("var").each(function(){
    varstring+=$(this).outerHTML()
})
var data = {
    varhtml: varstring
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ced";
__result.id = "blank-81";
return __result;
},"blank-277": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c9e";
__result.id = "blank-277";
return __result;
},"blank-278": function($, context) {

var __data = (function(){
$(".table_a_s").find("tr").each(function(i){
    if(i>0){
        var _this=this;
        /*$(_this).find("td").eq(4).find("input").attr("type","tel").attr("onchange","onKeyUp(this)");*/
        $(_this).find("td").eq(4).find("input").attr("onchange","onKeyUp(this)");
    }
    if(i>1){
        $(this).css("display","none");
    }
})

/*$("#imprestDiv").find(".b").find("label").find("input").attr("type","tel").attr("onchange","onKeyUp(this)");*/
$("#imprestDiv").find(".b").find("label").find("input").attr("onchange","onKeyUp(this)");

$("#backorderlist").find("th").eq(4).after($("#backorderlist").find("th").eq(3));
$("#backorderlist").find("tr").each(function(i){
    var _this_=this;
    if(i>0){
        $(_this_).children("td").eq(4).after($(_this_).children("td").eq(3));
        $(_this_).children("td").each(function(j){
            var spantitle=document.createElement("span");
            spantitle.setAttribute("class","title");
            if(j==0 || j==4){
                spantitle.innerHTML=$("#backorderlist").find("tr").eq(0).children("th").eq(j).text()+': ';
            }else{
                spantitle.innerHTML=$("#backorderlist").find("tr").eq(0).children("th").eq(j).text();
            }
            var spancontent=document.createElement("span");
            spancontent.setAttribute("class","content");
            spancontent.innerHTML=$(this).html();
            $(this).html("");
            $(this).append(spantitle);
            $(this).append(spancontent);
        })
    }
})
var data = {
    top:$($(".title_main").eq(0)[0].nextElementSibling).html(),
    center:$("#myordersubmit").outerHTML(),
    alertbox:/*$(".normal_alert").outerHTML()*/$("#warnfirmDiv").wrapInner("<div class='alert_main'></div>").prepend("<div class='bigHide'></div>").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c8c";
__result.id = "blank-278";
return __result;
},"blank-279": function($, context) {

var __data = (function(){
var script1="";
$("script").each(function(){
    if(/www\.google-analytics\.com\/analytics\.js/.test($(this).text())){
        script1=$(this).outerHTML()
    }
})
var script2="";
$("script").each(function(){
    if(/NTKF_PARAM/.test($(this).text())){
        script2=$(this).outerHTML()
    }
})
var data = {
    analyticsScript:script1,
    kehuScript:script2
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5c";
__result.id = "blank-279";
return __result;
},"blank-280": function($, context) {

var __data = (function(){
var a = '';
$("#RepayCompany").find("option").each(function(){
    /*if(i>0){*/
        a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
            a += $(this).text().trim();
        a+="</li>"
    /*}*/
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c3f";
__result.id = "blank-280";
return __result;
}
},"^/myaccount/allocateCargo/allocateCargo.jsp": { "modules": [], "template" : "allocatecargo.phone",
"blank-253": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c36";
__result.id = "blank-253";
return __result;
},"blank-301": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d8e";
__result.id = "blank-301";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-302": function($, context) {

var __data = (function(){
var $bodyvar=''
$("body").find("var").each(function(){
    $bodyvar+=$(this).outerHTML()
})
var data = {
    //html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML()+$(".selt_normal").outerHTML()    +$('.btn_export').outerHTML()  //2017.7.12
    //html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML() +$(".selt_normal").outerHTML()//2017.7.12
    html:$bodyvar +$(".pd_lr").find(".title_main").outerHTML()+$(".selt_normal").outerHTML() +$('.wb_r').children('.ablock').children('.pd_lr').children('div').eq(2).children('.btns_r').children('input').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7cf4";
__result.id = "blank-302";
return __result;
},"blank-303": function($, context) {

var __data = (function(){

//2018-3-22修改
var a=''; 
$(".table_a").find("tbody").find("tr").each(function(i){
    if(i>0){
    a+="<div class='fhlist'>";
        a+="<li>";
        a+=$(this).find("td").eq(2).text().trim();
        a+="</li>";
        a+="<li>";
        a+="<span class='iptradio'>"+$(this).find("td.ck").html()+"</span>";
        a+="<div class='pro_content'><span>产品名称："+$(this).find("td").eq(1).html()+"</span>";
        a+="<span>项目："+$(this).find("td").eq(3).text().trim()+"</span>";
        a+="<span>品牌："+$(this).find("td").eq(4).text().trim()+"</span>";
        a+="<span>机型："+$(this).find("td").eq(5).text().trim()+"</span>";
        a+="<span>颜色："+$(this).find("td").eq(6).text().trim()+"</span>";
        a+="<span>分货批次："+$(this).find("td").eq(8).text().trim()+"</span>";
        a+="</div></li>";
        a+="<li>";
        a+="<span>商品单价：</span><span>"+$(this).find("td").eq(7).text().trim()+"</span>";
        a+="</li>";
        a+="<li>";
        a+="<span>分货数量："+$(this).find("td").eq(9).text().trim()+"</span>";
        a+="<span>购买数量："+$(this).find("td").eq(10).html()+"</span>";
        a+="</li>";
    a+="</div>";
    }
            
})


var data = {
    content: "<ul class='fhbox_all'>"+a+"</ul>"   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ce1";
__result.id = "blank-303";
return __result;
},"blank-321": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c96";
__result.id = "blank-321";
return __result;
},"blank-305": function($, context) {

var __data = (function(){
var data = {
    content:$(".fixedscroll").outerHTML() +$("#reAdd").outerHTML()   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d82";
__result.id = "blank-305";
return __result;
},"blank-306": function($, context) {

var __data = (function(){
var data = {
    content:$(".pagenext").outerHTML()   //填写paragraph的内容
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d1a";
__result.id = "blank-306";
return __result;
},"blank-304": function($, context) {

var __data = (function(){

// var  a="";
// $("script").each(function(){
//     a+=$(this).outerHTML()
// })


var data = {
    //content:$(".table_a").find("tbody").find("tr").eq(0).find(".ck").outerHTML() +$(".mg_tb12").outerHTML() +a  //填写paragraph的内容
   // content:$(".table_a").find("tbody").find("tr").eq(0).find(".ck").outerHTML() +$(".table_btm_btns").outerHTML(),
    // js:a
    content:$('.selt_normal').children('.btns_r').find('.addMultiToCart').outerHTML()+$('.selt_normal').children('.btns_r').find('.oneKeyBuyBtn').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d23";
__result.id = "blank-304";
return __result;
},"blank-307": function($, context) {

var __data = (function(){
$("#branchRef").find("option").eq(0).text("全部");
var a = '';
$("#branchRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7ccf";
__result.id = "blank-307";
return __result;
},"blank-308": function($, context) {

var __data = (function(){
$("#projectRef").find("option").eq(0).text("全部");
var a = '';
$("#projectRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e87f8b220b4245e7c5d";
__result.id = "blank-308";
return __result;
},"blank-460": function($, context) {

var __data = (function(){
$("#batchStrRef").find("option").eq(0).text("全部");
var a = '';
$("#batchStrRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5ab3115e38172d4eb782874d";
__result.id = "blank-460";
return __result;
},"blank-520": function($, context) {

var __data = (function(){
$("#modelRef").find("option").eq(0).text("全部");
var a = '';
$("#modelRef").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b7a335fdae1f26962e36380";
__result.id = "blank-520";
return __result;
},"blank-582": function($, context) {

var __data = (function(){
var scripts="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else {
        scripts += scriptHtml;//$(this).outerHTML()
    }
});

var data = {
    scripts: scripts
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6f8ec425eb21e0c22166e3";
__result.id = "blank-582";
return __result;
},"blank-401": function($, context) {

var __data = (function(){
// 修改提示弹窗的结构
var $warn = $("#errorPop");
$warn.prepend('<div class="bigHide"></div>');



var data = {
    
    html: $warn.outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5901d45ff29b0082d05caefd";
__result.id = "blank-401";
return __result;
}
},"^/myaccount/attachment\\?id=": { "modules": ["paragraph"], "template" : "fileNull.phone",
"paragraph-309": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d40",
className:"fileNull-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $("body").html()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/marketing/promo.jsp\\?id=10100": { "modules": ["paragraph"], "template" : "Special.phone",
"paragraph-310": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d6f",
className:"Special-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>华为授权体验店县级招商</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-312": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e88f8b220b4245e7d2d",
className:"Special-2",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=''
$("script").each(function(){
    if(/seltHeader/.test($(this).html())){
        a+=$(this).outerHTML()
    }
})
var data = {
    "content": $(".wc1200").outerHTML() + a  //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/myaccount\\/myScfAccountCheck\\/myScfAccountCheck\\.jsp": { "modules": [], "template" : "WoYaoDuiZhang.phone",
"blank-360": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4ecd4bb93167b106a6cd";
__result.id = "blank-360";
return __result;
},"blank-361": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4efcf06a8a517479a16e";
__result.id = "blank-361";
return __result;
},"blank-362": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4f1e4bb93167b106a6cf";
__result.id = "blank-362";
return __result;
},"blank-363": function($, context) {

var __data = (function(){
// 日历组件
$("#financeDateFrom, #financeDateTo,#dueDateFrom,#dueDateTo").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.pd_lr').find('.title_main').outerHTML()+$('.eRong_account').find('.a').outerHTML()+$('.eRong_account').find('.d').outerHTML()+$('.eRong_account').find('.g').outerHTML()+$('.eRong_account').find('.b').outerHTML()+$('.eRong_account').find('.c').outerHTML()+$('.eRong_account').find('.e').outerHTML()+$('.eRong_account').find('.f').outerHTML()+$('.btns_r').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4f37f06a8a517479a16f";
__result.id = "blank-363";
return __result;
},"blank-364": function($, context) {

var __data = (function(){
var a = '';
$("#choicePro").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4f5c4bb93167b106a6d1";
__result.id = "blank-364";
return __result;
},"blank-365": function($, context) {

var __data = (function(){
var a = '';
$("#oCompany").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58df4f754bb93167b106a6d2";
__result.id = "blank-365";
return __result;
},"blank-387": function($, context) {

var __data = (function(){
var a = '';
$("#financeStatus").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec86eeff467a9586973d09";
__result.id = "blank-387";
return __result;
},"blank-388": function($, context) {

var __data = (function(){
var data = {
    html: $('.pd_lr').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8713ff467a9586973d0a";
__result.id = "blank-388";
return __result;
},"blank-389": function($, context) {

var __data = (function(){
var a=''; 
$('.ablock').find("table").find("tbody").find("tr").each(function(i){
   if(i>0){
        a+="<div class='sureBill_table'>"
        a+="<ul  class='monthBillingLine''>"
        a+="<li class='ddbh'><span>"+$('.th01').html()+"</span>"+"<span class='tb_l'>"+$(this).find('.tb_l').html()+"</span></li>"
        a+="<li class='hk'>"+"<span class='tb_l'>"+$(this).find('td').find('.cr_a').html()+"</span></li>"
        a+="<li><span>"+$('.th02').html()+"</span>"+"<span class='tb_l'>"+$(this).find('td').eq(1).html()+"</span></li>"
        a+="<li><span>"+$('.th03').html()+"</span>"+"<span class='tb_l'>"+$(this).find('td').eq(2).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+$('.th04').html()+"</span>"+"<span class='confirmStatusCell'>"+$(this).find('td').eq(3).html()+"</span></li>"
        a+="<li class='down'></li>"
        a+="<li class='litoggle'><span>"+$('.th05').html()+"</span>"+"<span>"+$(this).find('td').eq(4).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+$('.th06').html()+"</span>"+"<span>"+$(this).find('td').eq(5).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+$('.th07').html()+"</span>"+"<span>"+$(this).find('td').eq(6).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+$('.th08').html()+"</span>"+"<span>"+$(this).find('td').eq(7).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+$('.th09').html()+"</span>"+"<span>"+$(this).find('td').eq(8).html()+"</span></li>"
        a+="</ul>"
        a+="</div>"
   }
})

var data = {
    content: a   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8735ff467a9586973d0b";
__result.id = "blank-389";
return __result;
},"blank-390": function($, context) {

var __data = (function(){
var data = {
    aaa: $('.pageTurn').outerHTML() 
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec87faff467a9586973d0c";
__result.id = "blank-390";
return __result;
}
},"^/myaccount\\/myScfRepayment\\/myScfRepayment\\.jsp": { "modules": ["paragraph"], "template" : "woYaoHuanKuan.phone",
"blank-366": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e45d7ff06a8a517479a25f";
__result.id = "blank-366";
return __result;
},"blank-367": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e45d93f06a8a517479a260";
__result.id = "blank-367";
return __result;
},"blank-368": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e45dc2f06a8a517479a261";
__result.id = "blank-368";
return __result;
},"blank-369": function($, context) {

var __data = (function(){
// 日历组件
$("#financeDateFrom, #financeDateTo,#dueDateFrom,#dueDateTo").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});
$("#choicePro").before("<span class='choicePro'></span>");

var data = {
    html:$('.pd_lr').find('.title_main').outerHTML()+$('.eRong_return').find('.selt').outerHTML()+$('.eRong_return').find('.a').outerHTML()+$('.eRong_return').find('.b').outerHTML()+$('.eRong_return').find('.e_btm').outerHTML()+$('.btns_r').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e45de6f06a8a517479a262";
__result.id = "blank-369";
return __result;
},"blank-370": function($, context) {

var __data = (function(){
var a = '';
$("#choicePro").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e45e28f06a8a517479a263";
__result.id = "blank-370";
return __result;
},"blank-381": function($, context) {

var __data = (function(){
// 日历组件
$("#dueDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id"); 
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});
$("#state").before("<span class='state'></span>");

var data = {
    html: $(".ablock").eq(1).find(".pd_lr").outerHTML()
}
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e6f81ab7a0dcba4e61631b";
__result.id = "blank-381";
return __result;
},"blank-382": function($, context) {

var __data = (function(){
var a = '';
$("#state").find("option").each(function(i){
    //debugger;
    if($(this).text()==''){$(this).html('全部')}
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e731a9b7a0dcba4e6163d9";
__result.id = "blank-382";
return __result;
},"blank-383": function($, context) {

var __data = (function(){
var a=''; 
$('.ablock').eq(1).find("table").find("tbody").find("tr").each(function(i){
   if(i>0){
        a+="<div class='sureBill_table'>"
        a+="<ul  class='monthBillingLine''>"
        a+="<li class='ddbh'><span>"+ $(".th01").html() +":</span>"+"<span class='tb_l'>"+$(this).find('.tb_l').html()+"</span><a class='detailLink' href='"+ $(this).find('.tb_l').find('a').attr("href") +"'>详情</a></li>"
        a+="<li><span>"+ $(".th02").html() +":</span>"+"<span class='tb_l'>"+$(this).find('td').eq(1).html()+"</span><span class='down'></span></li>"
        a+="<li><span>"+ $(".th03").html() +":</span>"+"<span class='eRongZiNo'>"+$(this).find('td').eq(2).html()+"</span></li>"
        //a+="<li class='down'></li>"
        a+="<li class='litoggle'><span>"+ $(".th04").html() +":</span>"+"<span>"+$(this).find('td').eq(3).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th05").html() +":</span>"+"<span>"+$(this).find('td').eq(4).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th06").html() +":</span>"+"<span>"+$(this).find('td').eq(5).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th07").html() +":</span>"+"<span>"+$(this).find('td').eq(6).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th08").html() +":</span>"+"<span>"+$(this).find('td').eq(7).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th09").html() +":</span>"+"<span>"+$(this).find('td').eq(8).html()+"</span></li>"
        a+="<li class='litoggle'><span>"+ $(".th10").html() +":</span>"+"<span>"+$(this).find('td').eq(9).html()+"</span></li>"
        a+="</ul>"
        a+="</div>"
   }
})

var data = {
    content: a   //填写paragraph的内容
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58eae13eb7a0dcba4e616631";
__result.id = "blank-383";
return __result;
},"paragraph-384": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58eafbfcb7a0dcba4e6166b8",
className:"pageTurn",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $(".pageTurn").html()   //填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/finance/financeProductApply.jsp\\?": { "modules": [], "template" : "daiKuanShenQing.phone",
"blank-399": function($, context) {

var __data = (function(){
var a='';
$('body').find('script').each(function(){
    a+=$(this).outerHTML()
})



var data = {
    title: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58f03fc33d939a8d9ef481af";
__result.id = "blank-399";
return __result;
},"blank-372": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5b23a4bb93167b106ac22";
__result.id = "blank-372";
return __result;
},"blank-373": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5b2d14bb93167b106ac38";
__result.id = "blank-373";
return __result;
},"blank-374": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5b2faf06a8a517479a320";
__result.id = "blank-374";
return __result;
},"blank-375": function($, context) {

var __data = (function(){
$(".wb02").find(".breadcrumb").remove();
/*$(".wb02").find(".infors").find("input").each(function(){
    if($(this).attr("value") != ""){
        $(this).attr("disabled","true");
    }
})*/
var data = {
    html: $(".wb02").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5b570f06a8a517479a324";
__result.id = "blank-375";
return __result;
}
},"^/myaccount/myScfApplyProgress/myScfApplyProgress\\.jsp": { "modules": [], "template" : "woDeShenQing.phone",
"blank-378": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5eed1ffdbb71c9f23a7e2";
__result.id = "blank-378";
return __result;
},"blank-396": function($, context) {

var __data = (function(){
var a='';
$('body').find('script').each(function(){
    a+=$(this).outerHTML()
})



var data = {
    title: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58f0231fcc7a60b8f7c87021";
__result.id = "blank-396";
return __result;
},"blank-376": function($, context) {

var __data = (function(){
var data = {
    html: $(".title_main").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5ee74b7a0dcba4e6161f2";
__result.id = "blank-376";
return __result;
},"blank-377": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5ee9cb7a0dcba4e6161f3";
__result.id = "blank-377";
return __result;
},"blank-380": function($, context) {

var __data = (function(){
$(".applyFlows").find(".block").find("p").each(function(){
    var children = this.childNodes;
    $(children[0]).wrap("<span class='eDuTitle'></span>")
})
var data = {
    html: $(".applyFlows").html()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58e5fb5db7a0dcba4e61620f";
__result.id = "blank-380";
return __result;
}
},"^/myaccount\\/queryElectronic\\/toBeConfirmMonthBilling\\.jsp": { "modules": [], "template" : "Order-to-be-determin.phone",
"blank-342": function($, context) {

var __data = (function(){

var a='';
 $('body').find('var').each(function(){
    
         a+=$(this).outerHTML()   
    
})




var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77e71eb336e5d4871ef26";
__result.id = "blank-342";
return __result;
},"blank-351": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58be1486c108380f095567e8";
__result.id = "blank-351";
return __result;
},"blank-343": function($, context) {

var __data = (function(){
var data = {
   
    aaa: $('.title_main').children('span').html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ea0eb336e5d4871ef27";
__result.id = "blank-343";
return __result;
},"blank-344": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ef1eb336e5d4871ef28";
__result.id = "blank-344";
return __result;
},"blank-345": function($, context) {

var __data = (function(){
var data = {
    html:$(".search_dm").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77f18eb336e5d4871ef29";
__result.id = "blank-345";
return __result;
},"blank-346": function($, context) {

var __data = (function(){
var a = '';
$("#yearSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77f3ceb336e5d4871ef2a";
__result.id = "blank-346";
return __result;
},"blank-347": function($, context) {

var __data = (function(){
var a = '';
$("#branchSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77f54eb336e5d4871ef2b";
__result.id = "blank-347";
return __result;
},"blank-348": function($, context) {

var __data = (function(){
/*$('.ablock').find("table").find("tbody").find(".monthBillingLine").each(function(i){
    $(this).find('td').eq(5).find('input').attr("value","请到PC端确认")
})*/
var a=''; 
$('.ablock').find("table").find("tbody").find("tr").each(function(i){
   if(i>0){
       a+="<div class='sureBill_table'>"
       a+="<ul  class='monthBillingLine''>"
       a+="<li><span>时间 :</span>"+"<span class='tb_l'>"+$(this).find('.tb_l').find('div').find('a').outerHTML()+"</span></li>"
       a+="<li><span>状态 :</span>"+"<span class='confirmStatusCell'>"+$(this).find('.confirmStatusCell').html()+"</span></li>"
       a+="<li><span>所属分公司 :</span>"+"<span>"+$(this).find('td').eq(1).html()+"</span></li>"
       a+="<li><span>操作 :</span>"+"<span class='td_radios'>"+$(this).find('.td_radios').html()+"</span></li>"
       a+="<li><span>备注 :</span>"+"<span class='commentCell' id='commentCell_"+i+"'>"+$(this).find('td').eq(4).html()+"</span></li>"
       a+="<li><span>确认账单 :</span>"+"<span>"+$(this).find('td').eq(5).find('input').outerHTML()+"</span></li>"
       if(/notDownload/.test($(this).find("td").eq(6).attr("class"))){
           a+="<li><span>下载账单 :</span>"+"<span class='notDownload'>"+$(this).find('td').eq(6).find('input').outerHTML()+"</span></li>"
       }else{
           a+="<li><span>下载账单 :</span>"+"<span>"+$(this).find('td').eq(6).find('input').outerHTML()+"</span></li>"
       }
       a+="</ul>"
       a+="</div>"
   }
})

var data = {
    content: a   //填写paragraph的内容
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77f7aeb336e5d4871ef2c";
__result.id = "blank-348";
return __result;
},"blank-349": function($, context) {

var __data = (function(){
var a=$('.alert').outerHTML()
var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77fa7eb336e5d4871ef2d";
__result.id = "blank-349";
return __result;
},"blank-350": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77fdbeb336e5d4871ef2e";
__result.id = "blank-350";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/finance\\/financeProduct\\.jsp": { "modules": [], "template" : "WoYaoShenQing_new.phone",
"blank-591": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc69d79007375647cd1404f";
__result.id = "blank-591";
return __result;
},"blank-593": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc69da4007375647cd14050";
__result.id = "blank-593";
return __result;
},"blank-594": function($, context) {

var __data = (function(){
var data = {
   aaa:"",
   bbb:''
   
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc6a29d007375647cd14051";
__result.id = "blank-594";
return __result;
}
},"^/finance\\/financeProduct\\.jsplllll": { "modules": [], "template" : "WoYaoShenQing.phone",
"blank-397": function($, context) {

var __data = (function(){
var a='';
$('body').find('script').each(function(){
    a+=$(this).outerHTML()
})



var data = {
    title: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58f02573cc7a60b8f7c87023";
__result.id = "blank-397";
return __result;
},"blank-391": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8dc43bd90c453367c57c";
__result.id = "blank-391";
return __result;
},"blank-392": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8de23bd90c453367c57d";
__result.id = "blank-392";
return __result;
},"blank-393": function($, context) {

var __data = (function(){
var data = {
   aaa:$('.block').children('.a').children('.clearfix').outerHTML(),
   bbb:$('.block').children('.a').children('.bank').find('h5').outerHTML()
   
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8dfbff467a9586973d2e";
__result.id = "blank-393";
return __result;
},"blank-394": function($, context) {

var __data = (function(){
var data = {
    aaa:$('.block').children('.b').children('.b_top').outerHTML()+$('.block').children('.b').children('.lists').outerHTML()+$('.block').children('.b').children('.b_btm').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8f47ff467a9586973d32";
__result.id = "blank-394";
return __result;
},"blank-395": function($, context) {

var __data = (function(){
var data = {
    aaa:$('.block').children('.b').children('a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58ec8f883bd90c453367c585";
__result.id = "blank-395";
return __result;
}
},"^/checkout/confirmPayment.jsp": { "modules": ["paragraph"], "template" : "confirmPayment.phone",
"paragraph-166": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c4f",
className:"checkstandOnline-1 tlmall-top-navbar",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>收银台</span><a href='/' class='back'><img src='"+context.__root + "icon-home.png"+"'/></a>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-402": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-59433e800dee530ca8e53cca",
className:"confirmPayment-1",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/


var data = {
    "content": $('body').html()//填写paragraph的内容
};
return data;

}($, context))
}
}
},"^/myaccount\\/templateDownload\\/templateDownload\\.jsp": { "modules": ["paragraph"], "template" : "mobanLode.phone",
"blank-432": function($, context) {

var __data = (function(){
var a=$('.wb_r').children('.ablock').children('.title_main').find('span').text()

var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1b8447cb7c8ee29f49039f";
__result.id = "blank-432";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-433": function($, context) {

var __data = (function(){
var a='';
$('.center').children('ul').children('li').each(function(){
   a+= "<div class='listLine'>"+$(this).find('h5').outerHTML()+"<span>请到pc端下载</span></div>"
})


var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1b8790cb7c8ee29f4903a0";
__result.id = "blank-433";
return __result;
}
},"^/myaccount\\/espDownload\\/(confirmedBillingEspList)|(confirmedClientInformLetterEspList)\\.jsp": { "modules": ["paragraph"], "template" : "yiquerenLode.phone",
"blank-432": function($, context) {

var __data = (function(){
var a=$('.wb_r').children('.ablock').children('.title_main').find('span').text()

var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1b8447cb7c8ee29f49039f";
__result.id = "blank-432";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-438": function($, context) {

var __data = (function(){
var a='';
$('.page_tabs').children('ul').children('li').each(function(){
    a+=$(this).outerHTML();
})
var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1e24d95d5935b675dbc12a";
__result.id = "blank-438";
return __result;
},"blank-434": function($, context) {

var __data = (function(){
var Lis='';
$('.page_tabs').children('ul').children('li').each(function(){
    Lis+=$(this).outerHTML()
})

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
// 日历组件
$("#startDate, #endDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    $(this).css("display", "none");
    $(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus")).addClass("fakeDateDIV");
    $(this).before($fake);
});

var box=$('.tab_search').outerHTML();
var xz=$('.tab_download').outerHTML();
/*月度对账单,告客户函及平台协议表格内容*/

var arr1=[];
$('.table_a').children('thead').children('tr').find('th').each(function(i){
	arr1.push($(this).text())
})
var arr2=[];
$('.table_a').children('tbody').children('tr').each(function(idx,elm){
    var arr3=[];
	$(elm).children('td').each(function(idxx,elmm){
		if($(elmm).find('a').text()=='下载'){
		    
			$(elmm).text('请到pc端下载')
		}
		arr3.push($(elmm).text());
	})
arr2.push(arr3)
})
var ydzd='<div class="content_box">';
arr2.map(function(elem,index){
    ydzd+="<div class='content_box_list'>"
	//console.log(elem)
	elem.map(function(elem1,index1){
		ydzd+="<div class='content_box_list_line'><label>"+arr1[index1]+":</label>"+"<span>"+elem1+"</span></div>"
	})
	
	ydzd+="</div>";
})
ydzd+="</div>";

var page=$('.pageTurn').outerHTML();






var data = {
    aaa:Lis,
    bbb:a+box+xz,
    content:ydzd+page
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1bda51cb7c8ee29f4903d9";
__result.id = "blank-434";
return __result;
},"blank-435": function($, context) {

var __data = (function(){
var a = '';
if( $("#branchFilter").length ){
    console.log( "#branchFilter---------------------" );
    $("#branchFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });    
}else if( $("#branchName").length ){
    console.log( "#branchName----------------------" );
    $("#branchName").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    console.log( a );
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}
console.log( "-------------------------11111111----------" );
console.log( a );

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1be1a6cb7c8ee29f4903da";
__result.id = "blank-435";
return __result;
},"blank-437": function($, context) {

var __data = (function(){
var a = '';
if( $("#invoiceTypeFilter").length ){
    $("#invoiceTypeFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text()
        a+="</li>"
    })    
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1d27be5d5935b675dbc0b8";
__result.id = "blank-437";
return __result;
}
},"^/myaccount\\/espDownload\\/(orderEspList)|(shippingAuthEspList)|(monthBillingEspList)|(agreementEspList)|(clientInformLetterEspList)\\.jsp": { "modules": ["paragraph"], "template" : "yiqianzhangLode.phone",
"blank-432": function($, context) {

var __data = (function(){
var a=$('.wb_r').children('.ablock').children('.title_main').find('span').text()

var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1b8447cb7c8ee29f49039f";
__result.id = "blank-432";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-438": function($, context) {

var __data = (function(){
var a='';
$('.page_tabs').children('ul').children('li').each(function(){
    a+=$(this).outerHTML();
})
var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1e24d95d5935b675dbc12a";
__result.id = "blank-438";
return __result;
},"blank-434": function($, context) {

var __data = (function(){
var Lis='';
$('.page_tabs').children('ul').children('li').each(function(){
    Lis+=$(this).outerHTML()
})

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
// 日历组件
$("#startDate, #endDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    $(this).css("display", "none");
    $(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus")).addClass("fakeDateDIV");
    $(this).before($fake);
});

var box=$('.tab_search').outerHTML();
var xz=$('.tab_download').outerHTML();
/*月度对账单,告客户函及平台协议表格内容*/

var arr1=[];
$('.table_a').children('thead').children('tr').find('th').each(function(i){
	arr1.push($(this).text())
})
var arr2=[];
$('.table_a').children('tbody').children('tr').each(function(idx,elm){
    var arr3=[];
	$(elm).children('td').each(function(idxx,elmm){
		if($(elmm).find('a').text()=='下载'){
		    
			$(elmm).text('请到pc端下载')
		}
		arr3.push($(elmm).text());
	})
arr2.push(arr3)
})
var ydzd='<div class="content_box">';
arr2.map(function(elem,index){
    ydzd+="<div class='content_box_list'>"
	//console.log(elem)
	elem.map(function(elem1,index1){
		ydzd+="<div class='content_box_list_line'><label>"+arr1[index1]+":</label>"+"<span>"+elem1+"</span></div>"
	})
	
	ydzd+="</div>";
})
ydzd+="</div>";

var page=$('.pageTurn').outerHTML();






var data = {
    aaa:Lis,
    bbb:a+box+xz,
    content:ydzd+page
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1bda51cb7c8ee29f4903d9";
__result.id = "blank-434";
return __result;
},"blank-435": function($, context) {

var __data = (function(){
var a = '';
if( $("#branchFilter").length ){
    console.log( "#branchFilter---------------------" );
    $("#branchFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });    
}else if( $("#branchName").length ){
    console.log( "#branchName----------------------" );
    $("#branchName").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    console.log( a );
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}
console.log( "-------------------------11111111----------" );
console.log( a );

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1be1a6cb7c8ee29f4903da";
__result.id = "blank-435";
return __result;
},"blank-437": function($, context) {

var __data = (function(){
var a = '';
if( $("#invoiceTypeFilter").length ){
    $("#invoiceTypeFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text()
        a+="</li>"
    })    
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1d27be5d5935b675dbc0b8";
__result.id = "blank-437";
return __result;
}
},"^/myaccount/hesr/overview.jsp": { "modules": ["paragraph"], "template" : "overview-test.phone",
"blank-343": function($, context) {

var __data = (function(){
var data = {
   
    aaa: $('.title_main').children('span').html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ea0eb336e5d4871ef27";
__result.id = "blank-343";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"paragraph-447": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a79467e8ec225df0730b8ae",
className:"overview1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var va="";
$('var').each(function(){
    va+=$(this).outerHTML()
})
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})


// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    //$(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"  </div> ");
    $fake.attr("onclick", $(this).attr("onfocus")).attr("onchange", $(this).attr('onchange'))//2017.6.7
        .addClass("fakeDateDIV");
    $(this).before($fake);
});

var data = {
    "content":va+a+"<div class='salePart'>"+$('.search_infos').children('.one').eq(0).outerHTML()+"</div><div class='saleData'>"+$('.search_infos').children('.one').eq(1).outerHTML()+"</div>"+$('.search_infos').children('.btns_r').outerHTML()//填写paragraph的内容
};
return data;

}($, context))
}
},"blank-448": function($, context) {

var __data = (function(){
var a = '';
$("#seltA").find("option").each(function(){
    a+="<li class='selectReplace' selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a794939c5985b890808d25b";
__result.id = "blank-448";
return __result;
},"blank-455": function($, context) {

var __data = (function(){
var data = {
    html: $('.chartBoxs').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a799a2e70f098f806b8712d";
__result.id = "blank-455";
return __result;
}
},"^/myaccount\\/hesr\\/stock\\.jsp": { "modules": ["paragraph"], "template" : "Commodity_stock.phone",
"blank-343": function($, context) {

var __data = (function(){
var data = {
   
    aaa: $('.title_main').children('span').html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ea0eb336e5d4871ef27";
__result.id = "blank-343";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"paragraph-447": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a79467e8ec225df0730b8ae",
className:"overview1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var va="";
$('var').each(function(){
    va+=$(this).outerHTML()
})
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})


// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    //$(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"  </div> ");
    $fake.attr("onclick", $(this).attr("onfocus")).attr("onchange", $(this).attr('onchange'))//2017.6.7
        .addClass("fakeDateDIV");
    $(this).before($fake);
});

var data = {
    "content":va+a+"<div class='salePart'>"+$('.search_infos').children('.one').eq(0).outerHTML()+"</div><div class='saleData'>"+$('.search_infos').children('.one').eq(1).outerHTML()+"</div>"+$('.search_infos').children('.btns_r').outerHTML()//填写paragraph的内容
};
return data;

}($, context))
}
},"blank-448": function($, context) {

var __data = (function(){
var a = '';
$("#seltA").find("option").each(function(){
    a+="<li class='selectReplace' selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a794939c5985b890808d25b";
__result.id = "blank-448";
return __result;
},"blank-444": function($, context) {

var __data = (function(){
var data = {
    html: $('.chartBoxs').outerHTML(),
    aaa:$('.boxs_02').children('.c').find('.table_title').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a73cc628ec225df0730b7a4";
__result.id = "blank-444";
return __result;
}
},"^/myaccount\\/hesr\\/finance\\.jsp": { "modules": ["paragraph"], "template" : "financial_zhibiao.phone",
"blank-343": function($, context) {

var __data = (function(){
var data = {
   
    aaa: $('.title_main').children('span').html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ea0eb336e5d4871ef27";
__result.id = "blank-343";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"paragraph-447": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a79467e8ec225df0730b8ae",
className:"overview1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var va="";
$('var').each(function(){
    va+=$(this).outerHTML()
})
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})


// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    //$(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"  </div> ");
    $fake.attr("onclick", $(this).attr("onfocus")).attr("onchange", $(this).attr('onchange'))//2017.6.7
        .addClass("fakeDateDIV");
    $(this).before($fake);
});

var data = {
    "content":va+a+"<div class='salePart'>"+$('.search_infos').children('.one').eq(0).outerHTML()+"</div><div class='saleData'>"+$('.search_infos').children('.one').eq(1).outerHTML()+"</div>"+$('.search_infos').children('.btns_r').outerHTML()//填写paragraph的内容
};
return data;

}($, context))
}
},"blank-448": function($, context) {

var __data = (function(){
var a = '';
$("#seltA").find("option").each(function(){
    a+="<li class='selectReplace' selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a794939c5985b890808d25b";
__result.id = "blank-448";
return __result;
},"blank-442": function($, context) {

var __data = (function(){

var data = {
    html: $('.chartBoxs').outerHTML(),
    aaa:$('.boxs_02').children('.c').find('.table_title').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a7285b4c5985b890808cfc1";
__result.id = "blank-442";
return __result;
}
},"^/myaccount\\/hesr\\/sales\\.jsp": { "modules": ["paragraph"], "template" : "XiaoLiangTongJi.phone",
"blank-343": function($, context) {

var __data = (function(){
var data = {
   
    aaa: $('.title_main').children('span').html()
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58b77ea0eb336e5d4871ef27";
__result.id = "blank-343";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"paragraph-447": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a79467e8ec225df0730b8ae",
className:"overview1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var va="";
$('var').each(function(){
    va+=$(this).outerHTML()
})
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})


// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    //$(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    
    var $fake = $("<div class='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"  </div> ");
    $fake.attr("onclick", $(this).attr("onfocus")).attr("onchange", $(this).attr('onchange'))//2017.6.7
        .addClass("fakeDateDIV");
    $(this).before($fake);
});

var data = {
    "content":va+a+"<div class='salePart'>"+$('.search_infos').children('.one').eq(0).outerHTML()+"</div><div class='saleData'>"+$('.search_infos').children('.one').eq(1).outerHTML()+"</div>"+$('.search_infos').children('.btns_r').outerHTML()//填写paragraph的内容
};
return data;

}($, context))
}
},"blank-448": function($, context) {

var __data = (function(){
var a = '';
$("#seltA").find("option").each(function(){
    a+="<li class='selectReplace' selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a794939c5985b890808d25b";
__result.id = "blank-448";
return __result;
},"blank-459": function($, context) {

var __data = (function(){
var data = {
    html: $('.chartBoxs').outerHTML(),
    aaa:$('.boxs_02').children('.c').find('.table_title').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a7c3d577ded15fc0681b773";
__result.id = "blank-459";
return __result;
}
},"^/myaccount\\/hesr2\\/overview\\.jsp": { "modules": ["paragraph"], "template" : "HESR_part.phone",
"blank-463": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29b24945f6b43c145e7a95";
__result.id = "blank-463";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-464": function($, context) {

var __data = (function(){
// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29b49745f6b43c145e7a96";
__result.id = "blank-464";
return __result;
},"blank-465": function($, context) {

var __data = (function(){
var a = '';
$("#seltProvince").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29be5ddae1f26962e35603";
__result.id = "blank-465";
return __result;
},"blank-466": function($, context) {

var __data = (function(){

var a = '';
$("#clientName").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bec8dae1f26962e35604";
__result.id = "blank-466";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-468": function($, context) {

var __data = (function(){
var a = '';
$("#seltDateType").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf3edae1f26962e35606";
__result.id = "blank-468";
return __result;
},"paragraph-476": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b2a2c1545f6b43c145e7bf9",
className:"paragraph-HESR1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $('.hesr').children('#storeInfo').outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-473": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b2a1e7745f6b43c145e7bf5",
className:"paragraph-HESR2-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": $('.hesr').children('.ablock').eq(2).outerHTML()  //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-479": function($, context) {

var __data = (function(){
var data = {
    // a:$('.hesr').find('#Chart').find('.title_a').outerHTML(),
    b:$('.hesr').find('#Chart').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b2b40b345f6b43c145e7c70";
__result.id = "blank-479";
return __result;
},"blank-482": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(4).find('.title_a').outerHTML()
    
    //html: $('.hesr').children('.ablock').eq(4).outerHTML() 
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b2cac57dae1f26962e35745";
__result.id = "blank-482";
return __result;
},"blank-511": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("overview.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b51a58545f6b43c145e899e";
__result.id = "blank-511";
return __result;
}
},"^/myaccount\\/hesr2\\/saleAmt.jsp?.*": { "modules": ["paragraph"], "template" : "saleAmt.phone",
"blank-483": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(0).find('.title_main').children('span').eq(0).text().split('：')[0].split("本期")[1]
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305224dae1f26962e35822";
__result.id = "blank-483";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-506": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c578145f6b43c145e87f8",
className:"backGo-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$('.hesr').children('.ablock').eq(0).find('.title_main').find('a').outerHTML();
var data = {
    "content": a  //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-485": function($, context) {

var __data = (function(){
// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305bc845f6b43c145e7f33";
__result.id = "blank-485";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-489": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30a45c45f6b43c145e7f67";
__result.id = "blank-489";
return __result;
},"blank-490": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.hesr').children('.ablock').eq(2).find('.title_a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b31983fdae1f26962e35856";
__result.id = "blank-490";
return __result;
},"blank-514": function($, context) {

var __data = (function(){
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("saleAmt.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b56ddda45f6b43c145e8b59";
__result.id = "blank-514";
return __result;
}
},"^/myaccount/hesr2/purAmt.jsp?.*": { "modules": ["paragraph"], "template" : "purAmt.phone",
"blank-483": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(0).find('.title_main').children('span').eq(0).text().split('：')[0].split("本期")[1]
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305224dae1f26962e35822";
__result.id = "blank-483";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-506": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c578145f6b43c145e87f8",
className:"backGo-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$('.hesr').children('.ablock').eq(0).find('.title_main').find('a').outerHTML();
var data = {
    "content": a  //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-485": function($, context) {

var __data = (function(){
// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305bc845f6b43c145e7f33";
__result.id = "blank-485";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-489": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30a45c45f6b43c145e7f67";
__result.id = "blank-489";
return __result;
},"blank-491": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.hesr').children('.ablock').eq(2).find('.title_a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b320fea45f6b43c145e8034";
__result.id = "blank-491";
return __result;
},"blank-516": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("purAmt.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b57223b45f6b43c145e8ba5";
__result.id = "blank-516";
return __result;
}
},"^/myaccount/hesr2/profit.jsp?.*": { "modules": ["paragraph"], "template" : "profit.phone",
"blank-483": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(0).find('.title_main').children('span').eq(0).text().split('：')[0].split("本期")[1]
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305224dae1f26962e35822";
__result.id = "blank-483";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-506": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c578145f6b43c145e87f8",
className:"backGo-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$('.hesr').children('.ablock').eq(0).find('.title_main').find('a').outerHTML();
var data = {
    "content": a  //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-485": function($, context) {

var __data = (function(){
// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305bc845f6b43c145e7f33";
__result.id = "blank-485";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-489": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30a45c45f6b43c145e7f67";
__result.id = "blank-489";
return __result;
},"blank-492": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.hesr').children('.ablock').eq(2).find('.title_a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b321528dae1f26962e358c7";
__result.id = "blank-492";
return __result;
},"blank-517": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("profit.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b57ea8f45f6b43c145e8bcd";
__result.id = "blank-517";
return __result;
}
},"^/myaccount/hesr2/saleQty.jsp?.*": { "modules": ["paragraph"], "template" : "saleQty.phone",
"blank-496": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(0).find('.title_main').children('span').eq(0).text().split('：')[0]
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b33225ddae1f26962e358d4";
__result.id = "blank-496";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-506": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c578145f6b43c145e87f8",
className:"backGo-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$('.hesr').children('.ablock').eq(0).find('.title_main').find('a').outerHTML();
var data = {
    "content": a  //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-485": function($, context) {

var __data = (function(){
// 日历组件
$("#startTime, #endTime").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");//has no effect
    
    // var $fake = $("<input type='button' id='"+fakeId+"' name='"+fakeId+"' value='"+$(this).val()+"' data-true='"+id+"'/>");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    /*$fake.on('change', function(){
        var id = $(this).attr("data-id");
        $("#"+id).val($(this).val());
    })*/
    $(this).before($fake);
});


var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b305bc845f6b43c145e7f33";
__result.id = "blank-485";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-489": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30a45c45f6b43c145e7f67";
__result.id = "blank-489";
return __result;
},"blank-495": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.hesr').children('.ablock').eq(2).find('.title_a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b332200dae1f26962e358d3";
__result.id = "blank-495";
return __result;
},"blank-518": function($, context) {

var __data = (function(){
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("saleQty.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b57ec95dae1f26962e35e71";
__result.id = "blank-518";
return __result;
}
},"^/myaccount/hesr2/stock.jsp?.*": { "modules": ["paragraph"], "template" : "stockJSP.phone",
"blank-496": function($, context) {

var __data = (function(){
var data = {
    title: $('.hesr').children('.ablock').eq(0).find('.title_main').children('span').eq(0).text().split('：')[0]
    
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b33225ddae1f26962e358d4";
__result.id = "blank-496";
return __result;
},"blank-469": function($, context) {

var __data = (function(){
var va="";
$('body').find('var').each(function(){
    va+=$(this).outerHTML()
})




var data = {
   
    html:va
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29c4fb45f6b43c145e7a98";
__result.id = "blank-469";
return __result;
},"paragraph-506": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c578145f6b43c145e87f8",
className:"backGo-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/
var a=$('.hesr').children('.ablock').eq(0).find('.title_main').find('a').outerHTML();
var data = {
    "content": a  //填写paragraph的内容
};
return data;
}($, context))
}
},"blank-497": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(0).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b33300d45f6b43c145e806d";
__result.id = "blank-497";
return __result;
},"blank-467": function($, context) {

var __data = (function(){
var a = '';
$("#store").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b29bf03dae1f26962e35605";
__result.id = "blank-467";
return __result;
},"blank-500": function($, context) {

var __data = (function(){
var data = {
    html:$('.hesr').children('.ablock').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b333c7045f6b43c145e80b3";
__result.id = "blank-500";
return __result;
},"blank-498": function($, context) {

var __data = (function(){
var data = {
    
    html: $('.hesr').children('.ablock').eq(2).find('.title_a').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b333511dae1f26962e358d5";
__result.id = "blank-498";
return __result;
},"blank-519": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else if(scriptHtml.indexOf("stock.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b57ee7345f6b43c145e8bce";
__result.id = "blank-519";
return __result;
}
},"^/information\\/detail\\.jsp": { "modules": ["paragraph"], "template" : "toutiaoDetail.phone",
"paragraph-507": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c653e45f6b43c145e87f9",
className:"tutiaoDetail-1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>"+$('.headline-left').children('.share').eq(0).outerHTML()+"</span>" //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-509": function($, context) {

var __data = (function(){
// var a;
// if($('.headline-wrap').children('.headline-box').children('.headline-video')!=null){
//     var src=$('.headline-wrap').children('.headline-box').children('.headline-video').find('iframe').attr('src');
//     var b+$('.headline-wrap').children('.headline-box').children('.headline-video').outerHTML();
//     a+="<video src="+src+"></video>";
//     a+=b;
// }else if($('.headline-wrap').children('.headline-box').children('.headline-left')!=null){
//     a+=$('.headline-wrap').children('.headline-box').children('.headline-left').outerHTML();
// }

var data = {
    
    html:$('.headline-wrap').children('.headline-box').children('.breadcrumb').outerHTML()+$('.headline-wrap').children('.headline-box').children('.headline-left').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b4c659b45f6b43c145e87fb";
__result.id = "blank-509";
return __result;
},"blank-488": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30817345f6b43c145e7f56";
__result.id = "blank-488";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/information\\/detailv\\.jsp": { "modules": ["paragraph"], "template" : "toutiaoVideo.phone",
"paragraph-507": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5b4c653e45f6b43c145e87f9",
className:"tutiaoDetail-1-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<span>"+$('.headline-left').children('.share').eq(0).outerHTML()+"</span>" //填写paragraph的内容
};
return data;

}($, context))
}
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-510": function($, context) {

var __data = (function(){
var data = {
    
    html:$('.headline-wrap').children('.headline-box').children('.breadcrumb').outerHTML()+$('.headline-wrap').children('.headline-box').children('.headline-left').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b4db82e45f6b43c145e88b8";
__result.id = "blank-510";
return __result;
},"blank-488": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5b30817345f6b43c145e7f56";
__result.id = "blank-488";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/page\\/hesr\\/overview\\.html": { "modules": ["paragraph"], "template" : "newHESR_part.phone",
"blank-545": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4ecc7325eb21e0c2215d2b";
__result.id = "blank-545";
return __result;
},"paragraph-547": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5c4fa2629f0a44ab852ad281",
className:"newHistory-tt",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

 var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'><span>返回</span></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-535": function($, context) {

var __data = (function(){
var data = {
    html: "<span>"+$('.page-tag-box').children('a').eq(0).outerHTML()+"</span><span>"+$('.page-tag-box').children('a').eq(1).outerHTML()+"<span>" 
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c49168d25eb21e0c2215991";
__result.id = "blank-535";
return __result;
},"blank-536": function($, context) {

var __data = (function(){

// 日历组件
$("#startDate, #endDate").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    
    $(this).css("display", "none");
    
    $(this).prev("label").attr("for", fakeId)
        .addClass("fakeDateLABEL");
        
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus"))
        .addClass("fakeDateDIV");
    
    $(this).before($fake);
});

var data = {
    html: $('.tl-hesr-inform').children('.con').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4917c325eb21e0c2215992";
__result.id = "blank-536";
return __result;
},"blank-537": function($, context) {

var __data = (function(){
var a = '';
$("#branchSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c491a3425eb21e0c2215994";
__result.id = "blank-537";
return __result;
},"blank-538": function($, context) {

var __data = (function(){
var a = '';
$("#customerSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c491acd9f0a44ab852ad1f9";
__result.id = "blank-538";
return __result;
},"blank-539": function($, context) {

var __data = (function(){
var a = '';
$("#storeSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c491bbc25eb21e0c2215995";
__result.id = "blank-539";
return __result;
},"blank-540": function($, context) {

var __data = (function(){
var a = '';
$("#dateTypeSelect").find("option").each(function(i){
    a+="<li class='selectReplace' selected="+$(this).attr("selected")+" data-value="+$(this).attr("value")+">";
        a += $(this).text()
    a+="</li>"
})
var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c491c329f0a44ab852ad1fa";
__result.id = "blank-540";
return __result;
},"blank-543": function($, context) {

var __data = (function(){
var data = {
    
    html: $("#storeInfo").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4eb15625eb21e0c2215d1f";
__result.id = "blank-543";
return __result;
},"blank-541": function($, context) {

var __data = (function(){
var data = {
    
    html:$('.tl-hesr-table').eq(1).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4e629025eb21e0c2215d1b";
__result.id = "blank-541";
return __result;
},"blank-544": function($, context) {

var __data = (function(){
var data = {
    html: $('#Chart').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4eb3a19f0a44ab852ad275";
__result.id = "blank-544";
return __result;
},"blank-553": function($, context) {

var __data = (function(){
var data = {
    title: $(".tl-content").children('.tl-hesr-table:last-child').find('.tit2').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c5162bb25eb21e0c2215d8f";
__result.id = "blank-553";
return __result;
},"blank-534": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("overview.js") !== -1){}
    // else if(scriptHtml.indexOf("home.js") !== -1){}
    // else if(scriptHtml.indexOf("public-new.js") !== -1){}
    // else if(scriptHtml.indexOf("list.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4915eb25eb21e0c2215990";
__result.id = "blank-534";
return __result;
}
},"^/($)|(index.jsp$)|(index.jsp\\?_requestid=)|(\\?selectedProvinceId=)|(\\?nsukey.*)|(\\?_requestid)|(index\\.html\\?showNoProductTip)": { "modules": ["slider"], "template" : "index_new.phone",
"blank-563": function($, context) {

var __data = (function(){
/* ------------------数据预处理DOM重组----获取位置-------------- */ 
// 1、预处理search搜索框----------------2019.2.16 DHX 增加---------------------------
if( $("#searchBtn").length ){
    /*console.log("执行了search预处理");*/
    $('#searchContainer .menu-search').find("#searchBtn").text("").removeClass("icon-search");    
}



var data = {
    logo : $('.tl-main-menu .tl-content').children('a').outerHTML(),
    search : $('#searchContainer .menu-search').outerHTML(),
    hot:$("#typeAheadInfo").outerHTML(),
    adress : $('#topLogin #selectedProvince').text()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c61164b25eb21e0c2215e73";
__result.id = "blank-563";
return __result;
},"blank-564": function($, context) {

var __data = (function(){
var a='';
$("#provinceList").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html();
    a+="</li>";
});
/*console.log( a );*/

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6116a125eb21e0c2215e74";
__result.id = "blank-564";
return __result;
},"slider-579": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-5c668a079f0a44ab852ad8e3",
className:"Lslider-579",
theme:"a1",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){

var slider = [];
     $.ajax({
     		type : 'get',
     		url : "/api-facade/home",
     		cache : false,
     		dataType : 'json',
     		async : false,
     		success : function(data) {
     		   // console.log(data)  20190305修改 路田甜
            if(data.slide && data.slide!=null) {
			if(data.slide.mobileImage1!="" && data.slide.mobileImage1!= null && data.slide.mobileImage1.indexOf('preview')==-1) {
			    slider.push({
			        href:data.slide.link1,
			        image:data.slide.mobileImage1
			    })
			}				
			if(data.slide.mobileImage2!="" && data.slide.mobileImage2!= null && data.slide.mobileImage2.indexOf('preview')==-1) {
			    slider.push({
			        href:data.slide.link2,
			        image:data.slide.mobileImage2
			    })
			}				
			if(data.slide.mobileImage3!="" && data.slide.mobileImage3!= null && data.slide.mobileImage3.indexOf('preview')==-1) {
			     slider.push({
			        href:data.slide.link3,
			        image:data.slide.mobileImage3
			    })
			}				
			if(data.slide.mobileImage4!="" && data.slide.mobileImage4!= null && data.slide.mobileImage4.indexOf('preview')==-1) {
			     slider.push({
			        href:data.slide.link4,
			        image:data.slide.mobileImage4
			    })

			}				
			if(data.slide.mobileImage5!="" && data.slide.mobileImage5!= null && data.slide.mobileImage5.indexOf('preview')==-1) {
			    slider.push({
			        href:data.slide.link5,
			        image:data.slide.mobileImage5
			    })
			}
		} 
     	}
    });
    var content = [];
    for(var i=0;i<slider.length;i++){
        content.push({
             "img": slider[i].image,
             "link": slider[i].href,
             "thumb": "",
             "desc": ""
         });
    }


     return content;
}($, context))
}
},"blank-554": function($, context) {

var __data = (function(){
var notice = $('#noticeBox').outerHTML();
$('#tl-banner-slider').find('.tl-locate-box').remove();
$('.menu-list').find('#homeM').remove();
var data = {
    html: $('#tl-banner-slider').outerHTML(),
    navigator: $('.menu-list').outerHTML(),
    notice: notice,
    adImgs: $('#floors').outerHTML(),
    /*---------------------- 2019.2.18 LZB 删除 ---------------------------------------*/
    bottomLink: '<a href="/page/license.html">营业执照</a>',//<a href="javascript:;">北京工商</a>',
    bottomText: '<p>“廉洁从业”监督举报邮箱：LJ@putiantaili.com</p>'+$('.footer-cc').children('p').eq(2).outerHTML()+$('.footer-cc').children('p').eq(3).outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c5404949f0a44ab852ad2f2";
__result.id = "blank-554";
return __result;
},"blank-590": function($, context) {

var __data = (function(){
$("#noProductTip").find("span").eq(0).remove()
var data = {
    
    html: $("#noProductTip").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc18e92007375647cd1402a";
__result.id = "blank-590";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/page\\/hesr\\/hesrInvestment\\.html.*": { "modules": ["paragraph"], "template" : "xianjiTiyandian.phone",
"blank-555": function($, context) {

var __data = (function(){
var titles = '';
$('.page-tag-box').children('a').each(function(i,a){
    if(i < 2 ){
        titles += $(a).outerHTML();
    }
})
var data = {
    html: "体验店专区",
    title: titles
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c5406649f0a44ab852ad2f5";
__result.id = "blank-555";
return __result;
},"paragraph-557": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5c5406d39f0a44ab852ad2f7",
className:"paragraph-601-dyn",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

$('#hesrProvinceList').wrap('<div class="provWrap"></div>');
var data = {
    "content": $('.tl-experience').outerHTML()   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-534": function($, context) {

var __data = (function(){

var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("overview.js") !== -1){}
    // else if(scriptHtml.indexOf("home.js") !== -1){}
    // else if(scriptHtml.indexOf("public-new.js") !== -1){}
    // else if(scriptHtml.indexOf("list.js") !== -1){}
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
})
var data = {
    
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c4915eb25eb21e0c2215990";
__result.id = "blank-534";
return __result;
}
},"^/page\\/channel\\/phone.html|page\\/channel\\/device.html": { "modules": ["slider"], "template" : "index_two.phone",
"blank-563": function($, context) {

var __data = (function(){
/* ------------------数据预处理DOM重组----获取位置-------------- */ 
// 1、预处理search搜索框----------------2019.2.16 DHX 增加---------------------------
if( $("#searchBtn").length ){
    /*console.log("执行了search预处理");*/
    $('#searchContainer .menu-search').find("#searchBtn").text("").removeClass("icon-search");    
}



var data = {
    logo : $('.tl-main-menu .tl-content').children('a').outerHTML(),
    search : $('#searchContainer .menu-search').outerHTML(),
    hot:$("#typeAheadInfo").outerHTML(),
    adress : $('#topLogin #selectedProvince').text()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c61164b25eb21e0c2215e73";
__result.id = "blank-563";
return __result;
},"blank-564": function($, context) {

var __data = (function(){
var a='';
$("#provinceList").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html();
    a+="</li>";
});
/*console.log( a );*/

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6116a125eb21e0c2215e74";
__result.id = "blank-564";
return __result;
},"slider-565": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-5c612d9e25eb21e0c2215e77",
className:"slider-pageTwo",
theme:"one",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){
    var url = null;
 	 var slider_two = [];
     if(window.location.pathname=="/page/channel/device.html"){
         url = "/api-facade/deviceChannel";
         $("body").addClass("page_device");
     }else if(window.location.pathname=="/page/channel/phone.html"){
         url = "/api-facade/mobileChannel";
         $("body").addClass("page_phone");
     }
    $.ajax({
 		type : 'get',
 		url : url ,
 		cache : false,
 		dataType : 'json',
 		async : false,
 		success : function(res) {
 		    if(res.code == 401) {
				window.location.href= '/myaccount/login.jsp';
				return;
			}
			
			if(res.code == 404) {
				window.location.href= '/page/404.html';
				return;
			}
			var data = res.body;            
            slider_pagetwo(data);
 		}
 	 });
 	 function slider_pagetwo(data){
 	     	// 幻灯片 20190305 修改 路田甜
        if(data.slide && data.slide!=null) {
				if(data.slide.mobileImage1!="" && data.slide.mobileImage1!= null && data.slide.mobileImage1.indexOf('preview')==-1) {
				    slider_two.push({
				        href:data.slide.link1,
				        image:data.slide.mobileImage1
				    })
				}				
				if(data.slide.mobileImage2!="" && data.slide.mobileImage2!= null && data.slide.mobileImage2.indexOf('preview')==-1) {
				    slider_two.push({
				        href:data.slide.link2,
				        image:data.slide.mobileImage2
				    })
				}				
				if(data.slide.mobileImage3!="" && data.slide.mobileImage3!= null && data.slide.mobileImage3.indexOf('preview')==-1) {
				     slider_two.push({
				        href:data.slide.link3,
				        image:data.slide.mobileImage3
				    })
				}				
				if(data.slide.mobileImage4!="" && data.slide.mobileImage4!= null && data.slide.mobileImage4.indexOf('preview')==-1) {
				     slider_two.push({
				        href:data.slide.link4,
				        image:data.slide.mobileImage4
				    })

				}				
				if(data.slide.mobileImage5!="" && data.slide.mobileImage5!= null && data.slide.mobileImage5.indexOf('preview')==-1) {
				    slider_two.push({
				        href:data.slide.link5,
				        image:data.slide.mobileImage5
				    })
				}
			} 
 	 }
var content = [];
for(var i=0;i<slider_two.length;i++)
 content.push({
     "img": slider_two[i].image,
     "link": slider_two[i].href ,
     "thumb": "",
     "desc": ""
 });

return content;

}($, context))
}
},"blank-566": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c612dc59f0a44ab852ad30e";
__result.id = "blank-566";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/page\\/product\\/list(.*)": { "modules": [], "template" : "productList.phone",
"blank-568": function($, context) {

var __data = (function(){
console.log( $('#searchContainer .menu-search').outerHTML() );
var data = {
    logo:$('.tl-main-menu .tl-content').children('a').outerHTML(),
    search:$('#searchContainer .menu-search').outerHTML(),
    hot: $("#typeAheadInfo").outerHTML(),
    adress:$('#topLogin #selectedProvince').text(),
    select:[]
};
$("#topLogin #provinceList").find('option').each(function(){
    data.select.push($(this).val());
});

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6223e19f0a44ab852ad30f";
__result.id = "blank-568";
return __result;
},"blank-564": function($, context) {

var __data = (function(){
var a='';
$("#provinceList").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html();
    a+="</li>";
});
/*console.log( a );*/

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6116a125eb21e0c2215e74";
__result.id = "blank-564";
return __result;
},"blank-567": function($, context) {

var __data = (function(){


var data = {
    title: $('#facets').outerHTML(),
    rank:$("#sortBar").outerHTML(),
    list:$(".tl-prd-lists").outerHTML(),
    warning: $("noResultKeyword").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6222f725eb21e0c2215e7a";
__result.id = "blank-567";
return __result;
},"blank-583": function($, context) {

var __data = (function(){
var data = {
    
    html:$("#pageBar").outerHTML()
}
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c734eb29f0a44ab852ad981";
__result.id = "blank-583";
return __result;
},"blank-577": function($, context) {

var __data = (function(){
var scripts="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public-new.js") !== -1){}
   
    else if(scriptHtml.indexOf("list.js") !== -1){}
    else if(scriptHtml.indexOf("detail2.js") !== -1){}
    else {
        scripts += scriptHtml;//$(this).outerHTML()
    }
});


// console.log( scripts );

var data = {
    scripts: scripts
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6389b19f0a44ab852ad87b";
__result.id = "blank-577";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/page\\/product\\/list.html\\?keyword=$": { "modules": [], "template" : "classifyPage.phone",
"blank-563": function($, context) {

var __data = (function(){
/* ------------------数据预处理DOM重组----获取位置-------------- */ 
// 1、预处理search搜索框----------------2019.2.16 DHX 增加---------------------------
if( $("#searchBtn").length ){
    /*console.log("执行了search预处理");*/
    $('#searchContainer .menu-search').find("#searchBtn").text("").removeClass("icon-search");    
}



var data = {
    logo : $('.tl-main-menu .tl-content').children('a').outerHTML(),
    search : $('#searchContainer .menu-search').outerHTML(),
    hot:$("#typeAheadInfo").outerHTML(),
    adress : $('#topLogin #selectedProvince').text()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c61164b25eb21e0c2215e73";
__result.id = "blank-563";
return __result;
},"blank-564": function($, context) {

var __data = (function(){
var a='';
$("#provinceList").find("option").each(function(){
    a+="<li data-value='"+$(this).attr("value")+"'>";
    a+=$(this).html();
    a+="</li>";
});
/*console.log( a );*/

var data = {
    html: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6116a125eb21e0c2215e74";
__result.id = "blank-564";
return __result;
},"blank-560": function($, context) {

var __data = (function(){
$("#searchBtnTop").text("");
var aLi = "";
$(".h4_l1").find("li").each(function(){
    $(this).find(".float_r").find("a").html($(this).find(".float_l").html());
    var temp = $(this).find(".float_r").find("a").outerHTML();
    $(this).find(".float_l").remove()
    $(this).find(".float_r").remove();
    $(this).html(temp);
    aLi += $(this).outerHTML()
})
var data = {
    html: $("#searchContainer").find(".menu-search").outerHTML(),
    a1: "/page/product/list.html?category=手机&brand=华为",
    a2: "/page/product/list.html?category=手机&brand=三星",
    a3: "/page/product/list.html?category=手机&brand=诺基亚",
    a4: "/page/product/list.html?category=手机&brand=360手机",
    a5: "/page/product/list.html?category=手机&brand=飞利浦",
    
    b1: "/page/product/list.html?category=智能设备&brand=华为",
    b2: "/page/product/list.html?category=智能设备&brand=三星",
    b3: "/page/product/list.html?category=智能设备&brand=搜狗糖猫",
    
    c1: "/page/product/list.html?category=平板电脑&brand=华为",
    c2: "/page/product/list.html?category=平板电脑&brand=三星",
    c3: "/page/product/list.html?category=平板电脑&brand=亚马逊",
    c4: "/page/product/list.html?category=平板电脑&brand=联想",
    
    d1: "/page/product/list.html?category=配件&brand=华为",
    d2: "/page/product/list.html?category=配件&brand=三星",
    d3: "/page/product/list.html?category=配件&brand=索尼",
    d4:"/page/product/list.html?category=配件&brand=森海塞尔",
    shouji: aLi
    
};

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610c5325eb21e0c2215e70";
__result.id = "blank-560";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"$$wuquangoumai": { "modules": [], "template" : "wuquangoumai.phone",
"blank-588": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc163bdfabae724001efcf2";
__result.id = "blank-588";
return __result;
},"blank-589": function($, context) {

var __data = (function(){
var data = {
    content:$('.divide-tip-img').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5cc16988007375647cd14021";
__result.id = "blank-589";
return __result;
}
},"^/detail/product([\\d]+)\\.jsp\\?productId\\=": { "modules": ["slider", "paragraph"], "template" : "productDetailPageS.phone",
"blank-577": function($, context) {

var __data = (function(){
var scripts="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public-new.js") !== -1){}
   
    else if(scriptHtml.indexOf("list.js") !== -1){}
    else if(scriptHtml.indexOf("detail2.js") !== -1){}
    else {
        scripts += scriptHtml;//$(this).outerHTML()
    }
});


// console.log( scripts );

var data = {
    scripts: scripts
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6389b19f0a44ab852ad87b";
__result.id = "blank-577";
return __result;
},"blank-569": function($, context) {

var __data = (function(){
var data = {
    pageTab: {
        'gobackSrc' : '<img src='+context.__root + "back.png"+'>',
        // 目的是为了抓购物车里的商品数量：对应PC端的#miniCartQtyValue：
        'cartNum' : $("#topLogin").find("li:last-child").outerHTML(),
        'cartHref': $("#topLogin li:last-child").find("a").href()
        
    }
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c625cab25eb21e0c2215e7d";
__result.id = "blank-569";
return __result;
},"slider-571": function($, context) {
return {
__type:"slider",
widgetId: "WIDGET-5c625d089f0a44ab852ad310",
className:"Dslider-541",
theme:"one",
sliderConfig:"{\"animation\":\"slide\",\"slideshowSpeed\":5000,\"initDelay\":0,\"itemWidth\":0}",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","animation":"slide","slideshowSpeed":5000,"initDelay":0,"itemWidth":0},
realData:true,
content:(function($, context){
/*
 此模块的使用方法：从原网站采集图片滚动的图片路径放到json里返回到手机页面。

 常用用途：用来采放图片轮播的图片路径以及连接。

 了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#slider。

    示例代码：
     var content = [];
     $(".slideimg").find("ul").children("li").each(function(){
         content.push({
             "img": $(this).find("img").src(),
             "link": "" ,
             "thumb": "",
             "desc": ""
         });
     });
     return content;
 */

var content = [];
$(".prd-imgs").children("li").each(function() {
    content.push({
        "img": $(this).find(".little-img").find("img").src()
    });
});
return content;
}($, context))
}
},"blank-572": function($, context) {

var __data = (function(){
/*---------- 数据预处理：开始 ---------------*/
var selBox = [];
$(".prd-name .sel-box").each(function(i){
    // 重组content内容
    var nowContent = (i === 0 ? "<div id='projectList'>" : "<div id='methodsList'>");
    var title = '';
    $(this).find("select option").each(function(){
        if( $(this).attr("selected") != "" ){
            title += $(this).text();
            nowContent += "<div class='item' selected='selected' value="+$(this).val()+">"+$(this).text()+"</div>";    
        }else{
            nowContent += "<div class='item' value="+$(this).val()+">"+$(this).text()+"</div>";     
        }
           
    });
    nowContent += "</div>"
    // 
    selBox.push({
        'title': title,
        'content' : nowContent//$(this).find("select").outerHTML()
    });    
});
/*---------- 数据预处理：结束 ---------------*/
var data = {
    title1: selBox[0].title,
    title2: selBox[1].title,
    content1: selBox[0].content,
    content2: selBox[1].content
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c625d2f25eb21e0c2215e7f";
__result.id = "blank-572";
return __result;
},"blank-573": function($, context) {

var __data = (function(){
var data = {
    cardList : "",//[],
    addCartBtn: $(".add-cart").outerHTML() // 加入购物车按钮
};

/*-----------------数据预处理：开始----------------------*/
$(".tl-prd-deploy tbody tr").each(function(){   
    /*data.cardList += '<div title='+$(this).attr("title")+' class= "card '+ $(this).attr("class") +'"><p class='+$(this).attr("class")+'>'+$(this).find("td.name").text()+'</p><div class="cardInfo"></div></div>';*/
    // 1、外层父元素
    var cardTitle = !$(this).attr("data-title") ? "" : $(this).attr("data-title");
    var cardClass = "card "+$(this).attr("class");
    var cardStyle = !$(this).attr("style") ? "" : $(this).attr("style");
    data.cardList += '<div title="'+ cardTitle +'" class="'+ cardClass +'" style="'+ cardStyle +'">';
    //卡面前面的选择框  20190304 修改 路田甜
    data.cardList += "<i></i>";
    // 2、机型名
    data.cardList += '<p class=' + $(this).find("td.name").attr("class") + '>' + $(this).find("td.name").text() + '</p>';
    // 3、小标签【颜色、定制类型、库存】,与PC端相对应
    // 颜色
    var biaoQian1Lock = $(this).find("td.name").next().text().replace(/\s/g,"") == "" ? "display:none;" : "";
    /*var biaoQian2Lock = $(this).find("td.name").next().next().text().replace(/\s/g,"") == "" ? "display:none;" : "";*/
    // 定制类型
    var biaoQian3Lock = $(this).find("td.name").next().next().next().text().replace(/\s/g,"") == "" ? "display:none;" : "";
    // 库存
    var biaoQian4Lock = $(this).find("td.name").next().next().next().next().text().replace(/\s/g,"") == "" ? "display:none;" : "";
    //lfj其他属性
    var biaoQian5Lock = $(this).find("td.name").next().next().text().replace(/\s/g,"") == "" ? "display:none;" : "";
    
    data.cardList += '<div class="cardInfo"><span style='+biaoQian1Lock+'>'+ $(this).find("td.name").next().text() +'</span><span style='+biaoQian3Lock+'>'+ $(this).find("td.name").next().next().next().text() +'</span><span style='+biaoQian4Lock+'>库存:'+ $(this).find("td.name").next().next().next().next().text() +'</span><span style='+biaoQian5Lock+'>'+ $(this).find("td.name").next().next().text()+'</span></div>';
    // 4、提货价
    data.cardList += '<div class="wholesale"><span>提货价：</span><span class="salary">￥'+ $(this).find(".align-r").eq(1).text() +'</span></div>';
    // 5、零售价
    data.cardList += '<div class="retail"><span>零售价：</span><span class="salary">￥'+ $(this).find(".align-r").eq(0).text() +'</span></div>';
    // 6、数量
    data.cardList += '<div class="numb"><div class="numbCon">'+ $(this).find("td:last-child").outerHTML() +'</div></div>';
    
    // 1、外层父元素闭合
    data.cardList += '</div>';
});
/*-----------------数据预处理：结束----------------------*/
// console.log( $(".add-cart").outerHTML() );

return data;















})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c625d599f0a44ab852ad311";
__result.id = "blank-573";
return __result;
},"paragraph-574": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5c625d9125eb21e0c2215e80",
className:"mont-pop",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<div class='popInfo'>该型号库存不足,敬请期待!</div>"   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-575": function($, context) {

var __data = (function(){
var data = {
    title: [],
    content: []
};

/*---------------------- 数据预处理：开始 ------------------------------*/
// 1、tabs标题栏数据抓取【产品介绍、产品规格】
$(".detail-tab").children("span").each(function(i){
    data.title.push( $(this).text() != "" ? $(this).text() : i == 0 ? "产品介绍" : "产品规格" );
});

// 2、抓取【产品介绍内容、产品规格内容】
$(".prd-recommend").children("li").each(function(i){
    data.content.push( $(this).html() );    
});

/*---------------------- 数据预处理：结束 ------------------------------*/

return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c625db69f0a44ab852ad312";
__result.id = "blank-575";
return __result;
},"blank-561": function($, context) {

var __data = (function(){
//增加底部导航购物车数量 20190226 路田甜
var data = {
    number:$("#miniCartQtyValue").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c610ce725eb21e0c2215e71";
__result.id = "blank-561";
return __result;
}
},"^/page/license.html": { "modules": [], "template" : "Yingyezhizhao.phone",
"blank-581": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6e95509f0a44ab852ad95c";
__result.id = "blank-581";
return __result;
},"blank-264": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-58607e88f8b220b4245e7d2c";
__result.id = "blank-264";
return __result;
},"blank-580": function($, context) {

var __data = (function(){
var data = {
    html: $(".license").outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c6e938725eb21e0c22166e2";
__result.id = "blank-580";
return __result;
}
},"^/guide\\/helpItem\\.jsp\\?": { "modules": ["paragraph"], "template" : "guide.phone",
"blank-586": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c944f18007375647cd13bb6";
__result.id = "blank-586";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-585": function($, context) {

var __data = (function(){
var data = {
        html: $('.question').outerHTML()
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5c944dda007375647cd13bb5";
__result.id = "blank-585";
return __result;
}
},"^/crs/about$": { "modules": [], "template" : "Crs.phone",
"default":function($, context) {
return "<h1>待开发之中</h1>";
}
},"^/myaccount/(espDownload|shippingSign)/(signedInvoiceEspList|confirmedInvoiceEspList|shippingSignDownloadList).jsp*": { "modules": ["paragraph", "menu"], "template" : "shippingSignDownload.phone",
"blank-595": function($, context) {

var __data = (function(){
var a=$('.divide-filter').find('h3').text()

var data = {
    aaa:a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5d253ade523095cdd13f6520";
__result.id = "blank-595";
return __result;
},"paragraph-95": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58607e87f8b220b4245e7c31",
className:"history",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "<a href = 'javascript:history.go(-1)'><img src='"+context.__root + "arrows.png"+"'></a> "   //填写paragraph的内容
};
return data;

}($, context))
}
},"menu-597": function($, context) {
return {
__type:"menu",
widgetId: "WIDGET-5d253ca6523095cdd13f6522",
className:"Zmenu-597",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","cols":"1","offCanvasFlip":"","toggleTitle":"","toggleIcon":"","toggleCustomIcon":""},
realData:true,
content:(function($, context){
var data = [];
$(".page-tag-box").children("a").each(function(){
    data.push({
        "title": $(this).html(),
        "link": $(this).attr("href")
    });
});
return data;

}($, context))
}
},"blank-598": function($, context) {

var __data = (function(){
// var a='';
// $('.page-tag-box').children('a').each(function(){
//     if($(this).attr('class')=='activ'){
//          a= a +'<li class="act">'+$(this).outerHTML() +'</li>';
//     }else{
//         a= a +'<li>'+$(this).outerHTML() +'</li>';
//     }
    
// });
var a = $(".page-tag-box").outerHTML();

var data = {
    aaa: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5d253ed6523095cdd13f6523";
__result.id = "blank-598";
return __result;
},"blank-599": function($, context) {

var __data = (function(){
var  a="";
$("script").each(function(){
    var scriptHtml = $(this).outerHTML();
    if(scriptHtml.indexOf("public.js") !== -1){}
    else if(scriptHtml.indexOf("ie7.js") !== -1){}
    else if(scriptHtml.indexOf("ntkfstat.js") !== -1){}// 12/14
    else if(scriptHtml.indexOf("___szfw_logo___") !== -1){}// 12/14
    else {
        a += scriptHtml;//$(this).outerHTML()
    }
});

// 日历组件
$("#startDateFilter, #endDateFilter").each(function(){
    var id = $(this).attr("id");
    var fakeId = id.replace("Date", "FakeDate");
    $(this).css("display", "none");
    $(this).prev("label").attr("for", fakeId).addClass("fakeDateLABEL");
    var $fake = $("<div id='"+fakeId+"' name='"+fakeId+"' data-true='"+id+"'>"+$(this).val()+"</div>");
    $fake.attr("onclick", $(this).attr("onfocus")).addClass("fakeDateDIV");
    $(this).before($fake);
});

// 查询条件
var box=$('.filter-box').outerHTML();

// 查询按钮
if( $('.btn-box').length ){
    if( context._helpers.isIOS() ){
        /*console.log(`当前机型是IOS`);*/
        $('.btn-box').append("<div class='tips'>*下载请到PC端操作</div>");    
    }
}
var xz=$('.btn-box').outerHTML();

// 快速下载
if( $('.faster-down').length ){
    var btns = '';
    if( context._helpers.isIOS() ){
        $('.faster-down').children("a").each(function(){
            $(this).addClass('btn');
            btns += $(this).attr('href','javascript:void(0);').outerHTML();
            $(this).remove();
        });  
        var tiaojian = $('.faster-down').append( '<div class="notice">请到pc端下载</div><div class="btns">'+ btns +'</div>' ).outerHTML();
    }else{
        $('.faster-down').children("a").each(function(){
            $(this).addClass('btn');
            btns += $(this).outerHTML();
            $(this).remove();
        });
        var tiaojian = $('.faster-down').append( '<div class="btns">'+ btns +'</div>' ).outerHTML();
    }
}else{
    var tiaojian = "";   
}
// var tiaojian=$('.faster-down').outerHTML();



/*月度对账单,告客户函及平台协议表格内容*/
// 重组表头
var arr1=[];
$('.invoice-table').children('thead').children('tr').find('th').each(function(i){
    // if( $(this).text()=='操作' ){
    //      $(this).remove();
    // }else{
        arr1.push( $(this).text() );    
    // }
	
});

// 重组列表数据
var arr2=[];
$('.invoice-table').children('tbody').children('tr').each(function(idx,elm){
    var arr3=[];
	$(elm).children('td').each(function(idxx,elmm){
 		if( $(elmm).find('a').text()=='下载' ){
 			if( context._helpers.isIOS() ){
 			    arr3.push( $(elmm).text('请到pc端下载').outerHTML() );    
 			}else{
 			    arr3.push( $(elmm).find("a").outerHTML() );    
 			}
 			
 		}else{
		    arr3.push( $(elmm).text() );    
 		}
		
	});
    arr2.push(arr3);
});

var ydzd='<div class="content_box">';
arr2.map(function(elem,index){
    ydzd+="<div class='content_box_list'>";
	//console.log(elem)
	elem.map(function(elem1,index1){
		ydzd+="<div class='content_box_list_line'><label>"+arr1[index1]+":</label>"+"<span>"+elem1+"</span></div>";
	});
	
	ydzd+="</div>";
});
ydzd+="</div>";

// 页码
var page=$('.pageTurn').outerHTML();

var data = {
    bbb:a+box+xz+tiaojian,
    content: ydzd+page
};
return data;

})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5d254642523095cdd13f6524";
__result.id = "blank-599";
return __result;
},"blank-435": function($, context) {

var __data = (function(){
var a = '';
if( $("#branchFilter").length ){
    console.log( "#branchFilter---------------------" );
    $("#branchFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });    
}else if( $("#branchName").length ){
    console.log( "#branchName----------------------" );
    $("#branchName").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    console.log( a );
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}
console.log( "-------------------------11111111----------" );
console.log( a );

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1be1a6cb7c8ee29f4903da";
__result.id = "blank-435";
return __result;
},"blank-437": function($, context) {

var __data = (function(){
var a = '';
if( $("#invoiceTypeFilter").length ){
    $("#invoiceTypeFilter").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text()
        a+="</li>"
    })    
}else if( $("#branchId").length ){
    console.log( "#branchId-----------111-----------" );
    $("#branchId").find("option").each(function(i){
        a+="<li selected='"+$(this).attr("selected")+"' data-value="+$(this).attr("value")+">";
            a += $(this).text();
        a+="</li>";
    });     
    
}

var data = {
    select: a
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5a1d27be5d5935b675dbc0b8";
__result.id = "blank-437";
return __result;
}
}
        });
    }
}