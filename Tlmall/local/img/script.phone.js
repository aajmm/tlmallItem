/*! Copyright(c) AllMobilize/YunShiPei -- Generate the date : 2019-07-18 17:30:08.884 */
/**
 * 注意：这个script.js是整个工程全局的脚本文件，会被加载到所有的页面中。 
 * 发布的正式版中，script.js 被编译成 script.js 文件
**/
/*window.setUserName=function(name,elem){
    $(elem).val(name);
}
window.getUserName=function(elem){
    var username=$(elem).find("span").eq(0).text();
	return username;
}
window.onload=function(){
    var login=setTimeout(function(){
       if($(".tc_left_wel")){
            getUserName(".tc_left_wel");
        } 
    },500)
    if(/myaccount\/login\.jsp/.test(window.location.href)){
    	setUserName("#username",name);
    }
}
*/

setTimeout(function(){
    window.yspUser && window.yspUser.hideLoading && window.yspUser.hideLoading();
    
    window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ysp && window.webkit.messageHandlers.ysp.postMessage('hideLoading');
    
    
}, 500);

// 为了扩展 on
(function ($) {
  $.each(['show', 'hide'], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
      this.trigger(ev);
      return el.apply(this, arguments);
    };
  });
})(Zepto);
$(function(){
    //用div解决原来的日历组件问题
    var intervalFakeDateId1 = null;
    var intervalFakeDateId2 = null;
    // 日历插件 - 统一替换为 div ，在下面绑定事件
    $(".fakeDateDIV").change(function(){
       
        //console.log("\t\t\t\t.baka change !");
        //console.log("------------------------------");
        var trueId = $(this).attr("data-true");
        var dateValue = $(this).html();// now is div not input[btn]
        $("#"+trueId).val(dateValue).attr("value", dateValue);
        /*console.log("In GLOBAL-JS-FILE, fakeDateDIV is clicked!");*/
    }).click(function(){
        function amCallback(elem){
            //console.log("\tIn am...")
            if($("body").find("iframe[src='about:blank']").length > 0){
                //console.log($("body").find("\t\tiframe[src='about:blank']"));
                clearInterval(intervalFakeDateId1);
                //console.log("\t\tI canceled 111~");
                
                var datePickerDiv = $("body").find("iframe[src='about:blank']").parent("div");

                //console.log("\t\tI canceled 222.");
                clearInterval(intervalFakeDateId2);
                //console.log("\t\tI'm creating 222...");
                intervalFakeDateId2 = window.setInterval(function(){
                    if(datePickerDiv.css("display") === "none"){
                        clearInterval(intervalFakeDateId2);
                        //console.log("\t\t\tI canceled 222~");
                        //console.log("\t\t\tI'm triggering change...");
                        $(elem).trigger("change");
                    }
                    else {
                        // Do Nothing
                    }
                }, 10);
            }
        }
        clearInterval(intervalFakeDateId1);
        //console.log("I canceled 111.");
        //console.log("I'm creating 111...");
        intervalFakeDateId1 = window.setInterval(amCallback($(this)), 10);
    });
    
    // 顶部导航栏的右上角添加点击变灰效果
    if($(".tlmall-top-navbar").length > 0
        && $(".tlmall-top-navbar").children(".back").length > 0){
        //$(".tlmall-top-navbar").children(".back").addGray();
        /*console.log("i find this page contains top-navbar & addGrey..");*/
        context._helpers.addGrey(".tlmall-top-navbar",".back");
    }
    
    $("#reg-select-pro").find(".close").click(function(){
        $("#reg-select-pro").hide();
    });
    
    // 全局修改“确定”“取消”按钮（type="button"），避免 fixed 在最下的按钮行因软键盘的闪现而闪现
    $("#is_yes, #is_no").each(function(){
        this.type = "button"; // 使用原生 js 而不是 jq ，避开 jq 因为安全考虑而不允许 attr 修改 input 的 type
    });
    
    // 全局 select 加上 am-active 类
    var $selects = $("div.alert_select, div.select");// 为了“返利查询”页面加上了 div
    var pageName = window.location.pathname;
    if(pageName.indexOf("pabpayDetail") !== -1){// 线上支付流水明细
        //var value = isNaN(parseInt(window.location.search.split("branchId=")[1])) ? ;
        if($selects.length > 0){
            $selects.each(function(){
                var thisId = $(this).parent().attr("id");
                var value = $("."+thisId).next().val();
                /*console.log(value);*/
                $(this).children("ul").find('li[data-value="'+value+'"]').addClass("am-active");
            });
        }
        else {
            /*console.log("WHOO..This page has no select..");*/
        }
    }
/*    else if(pageName.indexOf("queryRebate") !== -1){// 返利查询
        if($selects.length > 0){
            $selects.each(function(){
                var $select_selected = $(this).children("ul").find('li[selected="selected"]');
                var $select_true = $(this).children("ul").find('li[selected="true"]');
                if($select_selected.length === 1){
                    $select_selected.addClass("am-active");
                }
                else if($select_true.length === 1) {
                    $select_true.addClass("am-active");
                }
                else {
                    $(this).children("ul").find('li').eq(0).addClass("am-active");// 这行本来是没有用的，但是为了以防万一~
                    console.log("BOOM!~~~");
                }
            });
        }
        else {
            console.log("WHOO..This page has no select..");
        }
    }*/
    else {
        if($selects.length > 0){
            $selects.each(function(){
                var $select_selected = $(this).children("ul").find('li[selected="selected"]');
                var $select_true = $(this).children("ul").find('li[selected="true"]');
                if($select_selected.length === 1){
                    $select_selected.addClass("am-active");
                }
                else if($select_true.length === 1) {
                    $select_true.addClass("am-active");
                }
                else {
                    $(this).children("ul").find('li').eq(0).addClass("am-active");// 这行本来是没有用的，但是为了以防万一~
                    /*console.log("BOOM!~~~");
                    console.log($select_selected);
                    console.log($select_true);*/
                }
            });
        }
        else {
            /*console.log("WHOO..This page has no select..");*/
        }
    }
    
})


//查询明细按钮 ltt 2017.4.1
function searchScfAccountCheck(){
	var scfProdId=$("#choicePro").val();
	var branchName=$("#oCompany").val();
	var financeDateFrom=$("#financeDateFrom").val();
	var financeDateTo=$("#financeDateTo").val();
	var dueDateFrom=$("#dueDateFrom").val();
	var dueDateTo=$("#dueDateTo").val();
	window.location.href = $("#frontStoreUrl").text()+"/myaccount/myScfAccountCheck/myScfAccountCheck.jsp?scfProdId="+scfProdId+"&branchName="+branchName+"&financeDateFrom="+financeDateFrom+"&financeDateTo="+financeDateTo+"&dueDateFrom="+dueDateFrom+"&dueDateTo="+dueDateTo;
}

/**************************订单列表单击事件***********************************/
(function($){
    $(function(){
        $('.WoYaoDuiZhang').find('.list1').children('.sureBill_table').each(function(){
            if($(this).find('.monthBillingLine').find('.down')){
                $(this).find('.monthBillingLine').find('.down').click(function(){
                    	$(this).siblings('.litoggle').toggle();
                		if($(this).siblings('.litoggle').css('display')!='none'){
                		    $(this).removeClass();
                		    $(this).addClass('up')
                		}else if($(this).siblings('.litoggle').css('display')=='none'){
                		     $(this).removeClass();
                		    $(this).addClass('down')
                		}
                })
            }
        })
        //2017/10/09修改购物车   2018.08.20修改购物车
        $('body.cart').find('.icheckbox_tlmall').each(function(){
            var this1=this;
            $(this1).find('ins').click(function(){
                var this2=this;
        	    $(this1).toggleClass('checked')
            })
        })
        //$('.tdlast_l').on('click','.btn_edit',function(){
           // debugger;
        	//$(this).parent().parent().parent().prev().find('.pro_detailed').css('width','90%');
        	//$('.cart-price').css('left','40%')
        	//$('.cart-count').css('left','40%')
        //})
        //$('.tdlast_l').on('click','.btn_cancel',function(){
            //$('.pro_detailed').css('width','100%');
        	//$('.cart-price').css('left','35%')
        	//$('.cart-count').css('left','35%')
        //})
      
        
        
       //把分货导出appendTo div.title_main中
        $('.allocatecargo-2').find('.btn_export').appendTo($('.title_main'));
        
        
        /*//替换首页中手机商城的小图2017/20/26
        $('body.index').find('.index-3').children('li').each(function(){
        	if($(this).find('img').attr('data')){
        		$(this).find('img').attr('src',$(this).find('img').attr('data'))
        	}
        })
        
        //替换首页中楼层小图2017/10/26
	    $('body.index').find('.index_list').each(function(){
            var this1=this;
            $(this1).children('li').each(function(){
                var this2=this;
                if($(this2).find('img').attr('data')){
                    $(this2).find('img').attr('src',$(this2).find('img').attr('data'))
                }
            })
        })
        
        //替换详情页中的小图2017/10/26
        $('body.product').find('.product-tabs-6').find('.sLists_imgs').find('img').each(function(){
        	if($(this).attr('data')){
        		$(this).attr('src',$(this).attr('data'))
        	}
        })*/
        
        //2017/10/30优化内容(下单选自提收货地址隐藏)
        if($('body.shipping').find('.shipping-2').children('.page').children('.wb01').children('.wc1200').children('.block_content').find('.radios_a').children('.one').eq(1).children('.iradio_tlmall.checked').next().text()=="自提"){
        	$('body.shipping').find('.shipping-2').children('.page').children('.wb01').children('.wc1200').children('.block_content').find('.sureBill_address').css('display','none')
        }else if($('body.shipping').find('.shipping-2').children('.page').children('.wb01').children('.wc1200').children('.block_content').find('.radios_a').children('.one').eq(0).children('.iradio_tlmall.checked').next().text()=="物流配送"){
            $('body.shipping').find('.shipping-2').children('.page').children('.wb01').children('.wc1200').children('.block_content').find('.sureBill_address').css('display','block')
        }
        
        
        /*$('body.message').find('.message-20').find('table').find('.icheckbox_tlmall').each(function(){
        	var this1=this;
        	$(this1).children('ins').click(function(){
        		var this2=this;
        		$(this2).parent('.icheckbox_tlmall').toggleClass('checked')
        	})
        })*/
        
        $('body.index').find('.index_list').each(function(){
            var this1=this;
            $(this1).children('li').each(function(){
                var this2=this;
                if($(this2).find('img').attr('data')){
                   // console.log('222有小图接口');
                    $(this2).find('img').attr('src',$(this2).find('img').attr('data'));
                   // console.log('222替换路径');
                }
            })
        })
        
    //     $('#table_zhibiao').children('ul').each(function(){
    // 	var a=$(this).children('li').find('.category').text();
    // 	if(a=='融合'){
    // 		$(this).children('li').find('.category').addClass('ronghe')
    // 	}else if(a=="配件"){
    // 		$(this).children('li').find('.category').addClass('peijian')
    // 	}
    //})
        
        
        
        
        
  	});
})(Zepto)

/************重载public-new.js 2019 DHX******************/
$(function(){
	
	// 切换省事件：点击后显示可选的省列表
	$("#changeProvince").click(function(event) {
		$("#selectedProvince").hide();
		$("#provinceList").show();
	});
	
	// 搜索框事件
	$("#searchBtn").click(function (event) {
	    event.preventDefault();
        search();
	});

    $("#searchBox").keypress(function (e) {
        if (e.which == 13) {
            search();
        }
    });

    function search() {
        //debugger;
        var input = $("#searchBox");
        var term = input.val();
        console.log(term);
        var placeHoder = $("#defaultKeyword").html();
        if(term == null || term == 'undefined' || term == '') {
            term = placeHoder;
        }
        window.location.href= "/page/product/list.html?keyword=" + encodeURIComponent(term);
	}

     $(".menu-search .placeholder").click(function(){
        $(this).hide();
        $(".menu-search input").focus();
        //$(".searchBox-infos").show();
    });




	// 搜索框 typeahead
	/*--------------------------2019-2-22 lzb删除搜索提示--------------------------------*/
	$("#searchBox").focus(function() {
		if($("#typeAheadInfo").find('li').length!=0) {
    		$(".zhezhao_tt").show();
    	}
    	$("#defaultKeyword").hide();
	});
	$("#searchBox").blur(function() {
		if($("#searchBox").val() == '' || $("#searchBox").val() == null || $("#searchBox").val() == undefined) {
			if($("#defaultKeyword").text() !='') {
				$("#defaultKeyword").show();
			}
		}

	});

	/*****************搜索的联想功能 20190226 路田甜*********************/
    $("#searchBox").click(function() {
    	if($("#typeAheadInfo").find('li').length!=0 ) {
    		$(".zhezhao_tt").show();
    	}
    	$("#defaultKeyword").hide();
    });
    $("#searchBox").keyup(function() {
    	var term = $("#searchBox").val();
    	if(term.length>=2) {
    		$.get("/api-facade/search/typeAhead?keyword=" + encodeURIComponent(term), { "t": new Date().getTime() },
    		    function(data) {
    		        //console.log(data)
    				if(data.code == 200) {
    					if(data.body.list && data.body.list.length>0) {
    						$("#typeAheadInfoList").empty();						
    						for(var i =0; i<data.body.list.length;i++) {
    							var e = data.body.list[i];
    							$("#typeAheadInfoList").append('<li><a class="tpInfoItem" href="/page/product/list.html?keyword=' + encodeURIComponent(e) + '">' + e +'</a></li>');
    						}
    						$(".zhezhao_tt").show();
    					}
    					
    				}
    				
    				if( $("#searchBox").val()=="" ){
                        $('.zhezhao_tt').hide()
                    }
    				
    		});
    	}
    });
    
    
    
    $(".zhezhao_tt").click(function(e){
        e.stopPropagation();
        $(this).hide()
    })

	 
     // 先请求一次ATG刷新一下session
   	 $.ajax({
 		type : 'get',
 		url : "/renewal.jsp",
 		data : {},
 		cache : false,
 		dataType : 'text',
 		async : false,
 		success : function(data) {
 		}
 	 });
	 


   	 $.ajax({
 		type : 'get',
 		url : "/api-facade/head",
 		cache : false,
 		dataType : 'json',
 		async : true,
 		success : function(data) {
		
			setCookie("imageServer", data.imageServer);

			if(data.needSign) {
                window.location.href = "/myaccount/letterToClentAndPlatformAgreement.jsp";
                return;
			}

			// 头部广告
			if(data.topBanner && data.topBanner!=null) {
				$("#topBannerBg").css("background", "url(" +  data.topBanner.bgImageUrl +")center top repeat-x");
				$("#topBanner").css("background", "url(" +  data.topBanner.imageUrl +")center top no-repeat");
				if(data.topBanner.linkUrl && data.topBanner.linkUrl!=null) {
					$("#topBannerLink").attr("href", data.topBanner.linkUrl);
				}
				$("#topBanner").show();
				$("#topBannerBg").show();
			}
			//debugger;
			// 默认搜索词
			if(data.defaultKeyword && data.defaultKeyword!=null && data.defaultKeyword!="") {
				$("#defaultKeyword").html(data.defaultKeyword);
				$("#defaultKeyword").show();
			}
			
			/*---------------------------------------2019.2.15 DHX 修改原PC端函数--------------------------------------------------*/
			if(data.loggedIn) {
				/*alert( "----已登录！！！---" );*/
				// 修改头部显示状态（需要批量处理）: 地理位置隐藏，登陆按钮显示,目前以index_new模板中的index_top为例：
				$("#adress").css("display","block");
			    $("#login").css("display","none");
				
				/* 该处为PC端逻辑，适配后不需要了
				// 上一次登录时间
				$("#lastLoginTimeValue").html("上次登录时间：" + data.lastLoginTime);
				$("#lastLoginTime").show();
				*/
				
				// 登录的用户名和客户名称
				var custName = data.customerName;
				var userName = data.userName;
				var custAndUserName = "";
				if(custName!="") {
					custAndUserName =  custName + ", " + userName;
				} else {
                    custAndUserName = userName;
                }
				$("#custNameAndUserNameValue").html(custAndUserName);
				$("#custNameAndUserName").show();
				
				// 当前登录人可选的站点(省)
				/*console.log( "调用了头部head接口！！！！" );
				console.log( data );*/
				
				var selectedProvinceId = data.selectedProvinceId;
				for(var i =0; i< data.provinceList.length;i++) {
					// 内蒙古 自治区 广西 壮族 自治区 西藏 自治区 宁夏 回族自治区 新疆 维吾尔自治区
					var pName = data.provinceList[i].name;
					pName = pName.replace("自治区", "").replace("壮族", "").replace("回族", "").replace("维吾尔", "");
					if(selectedProvinceId === data.provinceList[i].id) {
						$("#selectedProvince").html(pName);
						/*--------------------------- 2019.2.13 DHX 修改 -------------------------------------*/ 
						$("#relprovinceList").append("<li data-value="+data.provinceList[i].id+">"+data.provinceList[i].name+"</li>")
						/*$("#provinceList").append("<option selected='selected' value='" + data.provinceList[i].id + "'>" + pName + "</option>")*/
					} else {
					    /*--------------------------- 2019.2.13 DHX 修改 -------------------------------------*/ 
						/*$("#provinceList").append("<option value='" + data.provinceList[i].id + "'>" + pName + "</option>")*/
						$("#relprovinceList").append("<li data-value="+data.provinceList[i].id+">"+data.provinceList[i].name+"</li>")
					}
				}
				$("#topLogin").show();
				$("#topNotLogin").hide();
				if(!data.secureLoggedIn) {
					$("#loginLinkWhenNoSecureLogin").show();
				}
			}else{
			    /*alert("-----未登录！！！--------");*/

			    // 1、修改头部显示状态（需要批量处理）: 地理位置隐藏，登陆按钮显示,目前以index_new模板中的index_top为例：
			    $("#adress").css("display","none");
			    $("#login").css("display","block");		

			    // 未登录下除【首页、登陆、注册页】以外，其它的都跳转到登录页
			    /* nowUrl != "/" || nowUrl.indexOf("login") != -1 || nowUrl.indexOf("reg.jsp") != -1 */
			    var nowUrl = window.location.pathname;
			    /*console.log( nowUrl );
			    console.log( nowUrl.indexOf("/page") != -1 );*/
			    if( nowUrl.indexOf("/page") != -1 ){
			        window.location.href= '/myaccount/login.jsp';   
			    }
			    
			    
			    
			    
			}
			
			// 隐藏一些不需要显示的
			if(data.showAllocate) {
				$("#allocM").show();
			} else {
				$("#allocM").remove();
			}
			if(data.showFinance) {
				$("#scfM").show();
			} else {
				$("#scfM").remove();
			}
			if(data.showHesr) {
				$("#hesrM").show();
                $("#hesrM").attr("href", "/page/hesr/overview.html");
			} else {
                $("#hesrM").show();
                $("#hesrM").attr("href", "/page/hesr/hesrInvestment.html");
			}
			

		

		}
	 });
	
	
});


/*---------------------2019.2.13 DHX 修改---------------------------*/
// 切换省：选择省
function changeProvince (tar) {
/*	var $this = $(event);
	var optionText = $this.find('option:selected').text();
	$("#selectedProvince").text(optionText).show();
	$("#provinceList").hide();*/
	$("#selectedProvince").text(tar);
	
	 var curProvinceId = tar;
	
	 $.ajax({
		type : 'get',
		url : "/renewal.jsp?selectedProvinceId=" + curProvinceId,
		data : {},
		cache : false,
		dataType : 'text',
		async : true,
		success : function(data) {
			location.reload();
		}
	 });
}
/*---------------------2019.2.13 DHX 增加---------------------------*/
$(document).ready(function(){
    // 定位选择功能UI交互
    $("#adress").length && $("#adress").on("click",function(){
        // index 页面
        if( $("#list_provinces").css("display") == "none" ){
            $("#list_provinces").css("display","block");   
        }
    });    
    $("#list_provinces").length && $("#list_provinces").on("click",function(event){
        event.stopPropagation();
        if( $("#list_provinces").css("display") == "block" ){
            $("#list_provinces").css("display","none");    
        }    
    });   
    $("#relprovinceList").length && $("#relprovinceList").on("click","li",function(e){
        e.stopPropagation()
        var dataValue = $(this).attr("data-value");
        changeProvince(dataValue);
    });    
});




window.onload=function(){
    /*---------------------2019.2.13 DHX 增加---------------------------*/
    // input单击事件 // 输入内容时，让文本
    if( $("#index_top").length ){
        
        // 清除icon元素文本
        /*$("#searchBtn").text("");*/
        // input单击事件
        $("#searchBox").length && $("#searchBox").on("click",function(){
            $("#defaultKeyword").css("display","none");
        });
    }
    
    //2019.2.12根据登录状态，【登录】和【省份选择】是否显示
/*    if($("#index_top").find(".login").attr('style')=="display: none;"){
        $("#index_top").find(".adress").css("display","none")
        $("#index_top").find(".login").removeAttr("style")
    }else{
        $("#index_top").find(".login").css("display","none")
        $("#index_top").find(".adress").removeAttr("style")
    }*/
}

/*---------2019.2.16 DHX 增加 顶部栏吸顶效果,包括【index_top】、【list_top】:为了解决唤起小键盘后fixed定位错位的问题---------------------*/
function setContainerHeight($con){
    var h1 = $("#index_top").length ? $("#index_top").height() : 0;
    //$("#index_top").height() : ($("#list_top").length ? : $("#list_top").height() : 0 );
    var h2 = $(".tlmall-navbar2").length ? $(".tlmall-navbar2").height() : 0;
    var winH = window.innerHeight;
    $con.height(winH - h1 - h2 - 2);
}
$(document).ready(function(){
    if( $("#index_top").length || $("#list_top").length ){
        /*alert("---------------5555----------------------");*/
        // 1、获取顶边栏和底部边栏
        var $tar = $("#index_top").length ? $("#index_top") : $("#list_top");
        var $tab = $(".tlmall-navbar2").length ? $(".tlmall-navbar2") : "";
        
        
        $tar.length && function(){
            // 2、声明一个外层元素
            var $dom = $("<div class='index_wrap'></div>");
            
            // 3、将body中的子元素
            $("body").children().appendTo($dom);
            
            // 4、将顶边栏取出放入body中
            $tar.appendTo("body");
            
            // 5、将顶边栏取出放入body中
            $dom.appendTo("body");
            
            // 6、将地边栏取出放入body中
            $tab.appendTo("body");
            
            
            // 进行滚动事件监听
            setContainerHeight($dom);
            $(window).resize(function(){
                setContainerHeight($dom);
            });
            
        }();
    }
});





/********************底部导航购物车添加数量 20190226 路田甜***************************/
// 获取购物车数量(来源ATG)
$.ajax({
     type : 'get',
     url : "/ajax/miniCartQty.jsp",
     data : {},
     cache : false,
     dataType : 'text',
     async : true,
     success : function(data) {
    	var qty = $.trim(data);
    	if(parseInt(qty) > 0) {
    		$("#miniCartQtyValue").html(qty);
    		$("#miniCartQtyValue").css('display','block');
    	}
     }
});




/*-------------------安卓底边栏 lzb--------------------------*/
$(document).ready(function(){
    if( $(".tlmall-navbar2").length ){
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isAndroid){
            // $("#searchBox").blur(function(){
            //     $(".tlmall-navbar2").css('display','block');
            // })
            var winHeight = $(window).height();   //获取当前页面高度
            $(window).resize(function(){
               var thisHeight=$(this).height();
                if(winHeight - thisHeight >50){
                     //当软键盘弹出，在这里面操作；
                     //alert(" 软键盘弹出")
                    $(".tlmall-navbar2").css('display','none'); 
            
                }else{
                    //alert(" 软键盘隐藏 ");
                    $(".tlmall-navbar2").css('display','block');//当软键盘收起，在此处操作
                    $(".tlmall-navbar2").css('position','fixed');
                    $(".tlmall-navbar2").css('bottom','0');
                    $(".tlmall-navbar2").css('width','100%');
                    $(".tlmall-navbar2").css('z-index','1000');
                    $(".bottomText").css('margin-bottom','50px');
                    $("#new-productList-zyt").css("margin","0") 
                }
            });
        }
    }
})

function setCookie(name, value) {

    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

   //即document.cookie= name+"="+value+";path=/";   时间可以不要，但路径(path)必须要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！~
}
function getCookie(c_name) {
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
	return ""
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function loadJs(url, callback) {
    var script=document.createElement('script');
    script.type="text/javascript";
    if(typeof(callback)!="undefined"){
        if(script.readyState){
            script.onreadystatechange=function(){
                if(script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange=null;
                    callback();
                }
            }
        }else{
            script.onload=function(){
                callback();
            }
        }
    }
    script.src=url;
    document.body.appendChild(script);
}

/**
 * /myaccount/espDownload/signedInvoiceEspList.jsp
 * /myaccount/espDownload/confirmedInvoiceEspList.jsp
 * 
*/
$(document).ready(function(){
    // 导航栏滚动 ----模板：
    if( $("body.shippingSignDownload").length ){
        
        if( $(".page-tag-box").length ){
            console.log( "-------- 这个页面有我需要滚动的导航栏 --------" );
            $(".page-tag-box").children("a").each(function(idx){
                if( $(this).hasClass("activ") ){
                    var scollLeft = $(".page-tag-box").children("a").eq(idx).offset().left;
                    $('.page-tag-box').stop(true).animate({"scrollLeft":scollLeft},400);    
                }    
            });
        }
    } 
    // 导航栏滚动 ----模板：yiqianzhangLode
        // 导航栏滚动 ----模板：
    if( $("body.yiqianzhangLode").length ){
        if( $("#page_tabs").length ){
            var box = document.querySelector(".page_tabs_nav");
            console.log( "-------- 这个页面有我需要滚动的导航栏 -----1111---" );
            $(".page_tabs_nav").children("li").each(function(idx){
                console.log( $(this) );
                if( $(this).hasClass("act") ){
                    var scollLeft = $(".page_tabs_nav").children("li").eq(idx).offset().left;
                    $(".page_tabs_nav").stop(true).animate({"scrollLeft":scollLeft-10},400);  
                       
                }    
            });
        }
    } 
    
});







