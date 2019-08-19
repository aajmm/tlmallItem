// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    //该定义对象在适配页面调用方法 ： ysp.customHelper.变量名称
    indexURL:'http://192.168.220.23/', //底栏 首页 跳转地址
    kindURL:'http://192.168.220.23/page/product/list.html',//底栏 分类 跳转地址
    cartURL:'http://192.168.220.23/cart/cart.jsp',//底栏 购物车 跳转地址
    infoURL:'http://192.168.220.23/information/list.jsp',//底栏 我的消息 跳转地址
    workURL:'http://192.168.220.23/personal.html',//底栏 业务中心 跳转地址
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    back: _back,
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){

    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {

    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }


  });
  /*调用场景：页面返回时使用*/
  function _back(type) {
    if (typeof type === 'string') {
      if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
        ysp.appMain.back();
      } else {
        var actionEvent = '{"target":"null","data":"' + type + '"}';
        window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
        setTimeout(function() {
          window.parent.EAPI.back();
        }, 1000);
      }
    } else {
      ysp.appMain.back();
    }
  }
})(window, ysp);
