//订阅模式
(function (exports) {
  function PSubscribe() {
    this.topicList = [];
  }
  PSubscribe.prototype = {
    subscribe: function subscribe(topic, cb, caller) {
      if (!cb || !topic) return;
      var exist = false;
      this.topicList.forEach(function (item) {
        if (item.topic === topic) {
          exist = true; 
          item.list.push({
            callback: cb,
            caller: caller
          });
        }
      });
      if (!exist) {
        this.topicList.push({
          topic: topic,
          list: [{
            callback: cb,
            caller: caller 
          }]
        });
      }
    },
    publish: function publish(topic, data) {
      this.topicList.forEach(function (item) {
        if (item.topic === topic) {
          item.list.forEach(function (listener) {
            listener.callback.call(listener.caller ? listener.caller : null, data);
          });
        }
      });
    },
    remove: function remove(topic, cb) {
      if (!cb || !topic) return;
      this.topicList.forEach(function (item) {
        if (item.topic === topic) {
          if (Array.isArray(item.list)) {
            var start;
            item.list.forEach(function (listener, index) {
              if (listener.callback === cb) {
                start = parseInt(index);
              }
            });
            if (start !== undefined) {
              item.list.splice(start, 1);
            }
          }
        }
      });
    }
  };
  exports.pt_oberseve = new PSubscribe();
})(window);
(function (win, ysp) {
  var utils = ysp.utils;
  ysp.customHelper = {};
  //var topWin = null;
  var topWin = top;
  //本地调用安卓端相册 相机等功能 . 实现上传等.暂未完成,需求未明确
  topWin.setImageData = function(base64){
    topWin.img = base64
    //top.yspCheckIn.openCamera();调用安卓端相册功能 返回值为base64格式图片 缺少Type  需要自行添加
  }
  var LOGINNAME = '';//登录名
  var LOGINTIME = '';//登录时间
  var LOGINUSED = '' ;//耗时
  var STARTTIME = '';
  //以上为日志内容
  var loginWin = null;
  var FlagNum=0;//接口调用次数计数  超过十 停止重置
  var loginFlag = false;
  var loginEncoder = '';//作为登陆日志定位问题
  topWin.dataMenu = '';
  var loginFlag = false;
  //信息录入 - 本地存储部分 (取赋值操作)
  topWin.pageBackfill=function(state,obj){
    switch(state){
      case 'false':state = false;break;
      case 'true':state = true;
    }
    ysp.customHelper.informationEntry.isSave = state;
    //obj = JSON.parse(obj);
    ysp.customHelper.informationEntry.saveData = obj;
  }
  //信息录入 - 本地存储部分 (取赋值操作)
  //IOS客户端调用.解决请求ICON接口跨域问题;
  topWin.GetIconNum = function(summary,atMe){
    if(!summary && !atMe || summary == 'error'){
      if(summary =='error'){
        console.info('未登录成功,请稍后!');
      }
      return ;
    }
    ysp.customHelper.IconNum.summary = summary.split('=')[1];
    ysp.customHelper.IconNum.atMe = atMe.split('=')[1];
    localStorage.setItem('atMe',atMe.split('=')[1]);
    localStorage.setItem('summary',summary.split('=')[1]);
  }
  // 普天总线接口 - 时间戳拼接
  var timeStamp = function(){
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = date.getMonth()+1;
    var day = date. getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return addZero(year)+addZero(month)+addZero(day)+addZero(hours)+addZero(minutes)+addZero(seconds);
  }
  var addZero = function(str){
    if(str == ''){
      return ;
    }
    return str<10?'0'+str.toString() : str.toString();
  }
  //Android 切后台刷新
  topWin.isReload = function(){
    top.yspCheckIn.isRefresh(true);
  }
  //IOS端 登录方式 避开常规登录 用单独接口请求判断状态进行跳转登录(不走密码管家) 登录成功后调取菜单;  ( + 安卓端) 
  var loginTimeOut = function(str){
    var flag = confirm(str);
      if(flag){
        ysp.runtime.Browser.activeBrowser.contentWindow.reload();
      }
  }
  //强制匹配方案
  var RedCoreRedMi =function(modelId) {
      var Model = ysp.runtime.Model;
      Model.init();
      var modelURL = Model.basePath + '/plan/' + modelId + '/index.json';
      var model = Model.models[modelURL];
      if (model) {
        Model.models = {[modelURL]: model};
        Model.pushModel(model);
      }else {
        ysp.utils.getJSON(modelURL).then(function (data) {
        // 配置的 targetURL 优先
        data.path = modelURL;
        var dd = Model.parse(data)
        Model.pushModel(dd)
        RedCoreRedMi(modelId)
      });
    }
  }
  topWin.IOSLoginIn = function(user,password){
    if(user == '' || password == ''){
      alert('用户名或密码为空,登录失败!');
      return ;
    }
    ysp.customHelper.TimeScope.startTime();
    if (user && password) {
      ysp.customHelper.logLoginName = user; //日志内容部分
      STARTTIME = Date.now();
      LOGINTIME = new Date().getTime();
      var currentAwin = ysp.runtime.Browser.activeBrowser.contentWindow;
      var EnCoderXhr = new XMLHttpRequest();
      EnCoderXhr.onreadystatechange = function(){
        if(EnCoderXhr.readyState == 4){
          var param = JSON.parse(EnCoderXhr.response);
          loginEncoder = param.encoder; //日志信息
          setMaxDigits(130);
          var encrypPublicKey = new RSAKeyPair(param.publicExponent,'',param.modulus);
          var pwd = encryptedString(encrypPublicKey,encodeURIComponent(password));
          var body = {'loginName':user,'password':pwd,'encoder':param.encoder};
          body = JSON.stringify(body);
          var LoginXhr = new XMLHttpRequest();
          LoginXhr.onreadystatechange = function(){
            //每次响应状态都起一个Loading . -- 防止白屏无loading 运行时关闭loading 请求时间过长等问题 .
            ysp.appMain.showLoading();
            if(LoginXhr.status == 200 && LoginXhr.readyState == 4){
              var MenuList = JSON.parse(LoginXhr.response).listMenu;
              ALLMENU = MenuList;
              var localMenuList = JSON.stringify(MenuList);
              localStorage.setItem('listMenuForMobile',localMenuList);
              loginFlag = true;
              if (currentAwin.frameElement && currentAwin.frameElement.name == "browserFrame2" && currentAwin.frameElement.dataset.browser) {
                if (currentAwin.location.href.indexOf('login') !== -1) {
                  currentAwin.frameElement.src = 'http://192.168.1.227/pttlCrm/res/index.html';
                  //有可能出现登录框 . 如果不稳定 . 使用下面ysp.runtime.Model.setForceMatchModels(['index']);
                  //RedCoreRedMi('index');
                  ysp.runtime.Model.setForceMatchModels(['index']);
                }
                if(currentAwin.frameElement.src.indexOf('login')!==-1){
                  if(ysp.runtime.Model.getActiveModel().id == 'login'){
                    //有可能出现登录框 . 如果不稳定 . 使用下面ysp.runtime.Model.setForceMatchModels(['index']);
                    //RedCoreRedMi('index');
                    ysp.runtime.Model.setForceMatchModels(['index']);
                    alert('登录成功! . 页面未跳转'+ysp.runtime.Model.forceMatchFlag+ysp.runtime.Model.getActiveModel().id);
                  }else{
                    alert('模板跳转!但pc地址未更换'+ysp.runtime.Model.forceMatchFlag+currentAwin.frameElement.src);
                  }
                }
              }
              getAllMenu(currentAwin, MenuList);
              ysp.customHelper.TimeScope.timeScope();
              ysp.customHelper.CONSOLELOG('VCRM', '登录日志', '登录成功', STARTTIME, LOGINTIME, loginEncoder);
            } else if (EnCoderXhr.status >= 400 && EnCoderXhr.readyState == 4) {
              loginTimeOut('登录失败,接口返回错误,是否刷新重试');
            }
            //else if(xhr.status >=400 ){
            // alert('登录效验失败.请手动登录!'+LoginXhr.status);
            // }
          }
          LoginXhr.timeout = 10000;
          LoginXhr.ontimeout = function(str){
            loginTimeOut('登录接口请求超时,是否刷新重试');
          }
          LoginXhr.open('POST','http://192.168.1.227/pttlCrm/login/loginInForMobile');
          LoginXhr.send(body);
        }else if(EnCoderXhr.status>=400 && EnCoderXhr.readyState == 4){
          loginTimeOut('未获取到Encoder,是否刷新重试');
        }
      }
      EnCoderXhr.timeout = 10000;
      EnCoderXhr.ontimeout = function(){
        loginTimeOut('Encoder获取,是否刷新重试');
      }
      EnCoderXhr.open('POST','http://192.168.1.227/pttlCrm/login/getEncoderForMobile?'+user);
      EnCoderXhr.send();
    }
	}
  //安卓端 . 登录方式 弃用密码代填. 暂时为独立方法,看安卓是否符合整合登录前提 , 待安卓与IOS客户端同步后整合登录方法.
  topWin.AndroidLoginIn = function(user,password){
    STARTTIME = Date.now();
    if(user == '' || password == ''){
      alert('用户名或密码为空,登录失败!');
      return ;
    }
    ysp.customHelper.TimeScope.startTime();
    if (user && password) {
      ysp.customHelper.logLoginName = user;
      LOGINNAME = user; //日志内容部分
      LOGINTIME = new Date().getTime();
      var currentAwin = ysp.runtime.Browser.activeBrowser.contentWindow;
      var EnCoderXhr = new XMLHttpRequest();
      EnCoderXhr.onreadystatechange = function(){
        if(EnCoderXhr.readyState == 4 && EnCoderXhr.status >=200 && EnCoderXhr.status <300 || EnCoderXhr.status == 304){
          var param = JSON.parse(EnCoderXhr.response);
          setMaxDigits(130);
          loginEncoder = param.encoder; //日志信息
          var encrypPublicKey = new RSAKeyPair(param.publicExponent,'',param.modulus);
          var pwd = encryptedString(encrypPublicKey,encodeURIComponent(password));
          var body = {'loginName':user,'password':pwd,'encoder':param.encoder};
          body = JSON.stringify(body);
          var LoginXhr = new XMLHttpRequest();
          LoginXhr.onreadystatechange = function(){
            //每次响应状态都起一个Loading . -- 防止白屏无loading 运行时关闭loading 请求时间过长等问题 .
            ysp.appMain.showLoading();
            if(LoginXhr.status == 200 && LoginXhr.readyState == 4){
              var MenuList = JSON.parse(LoginXhr.response).listMenu;
              ALLMENU = MenuList;
              var localMenuList = JSON.stringify(MenuList);
              localStorage.setItem('listMenuForMobile',localMenuList);
              loginFlag = true;
              if (currentAwin.frameElement && currentAwin.frameElement.name == "browserFrame2" && currentAwin.frameElement.dataset.browser) {
                if (currentAwin.location.href.indexOf('login') !== -1) {
                  currentAwin.frameElement.src = 'http://192.168.1.227/pttlCrm/res/index.html';
                  //有可能出现登录框 . 如果不稳定 . 使用下面ysp.runtime.Model.setForceMatchModels(['index']);
                  //RedCoreRedMi('index');
                  ysp.runtime.Model.setForceMatchModels(['index']);
                }
                if(currentAwin.frameElement.src.indexOf('login')!==-1){
                  if(ysp.runtime.Model.getActiveModel().id == 'login'){
                    //有可能出现登录框 . 如果不稳定 . 使用下面ysp.runtime.Model.setForceMatchModels(['index']);
                    ysp.runtime.Model.setForceMatchModels(['index']);
                    //RedCoreRedMi('index');
                    alert('登录成功! . 页面未跳转'+ysp.runtime.Model.forceMatchFlag+ysp.runtime.Model.getActiveModel().id);
                  }else{
                    alert('模板跳转!但pc地址未更换'+ysp.runtime.Model.forceMatchFlag+currentAwin.frameElement.src);
                  }
                }
              }
              getAllMenu(currentAwin, MenuList);
              LOGINUSED = (Date.now() - STARTTIME) / 1000; //运行时间
              var DATA = { 'log': {
                  'source': 'VCRM',
                  'type': '登录日志',
                  'loginName': LOGINNAME,
                  'email': '',
                  'model': '',
                  'loginTime': LOGINTIME,
                  'occurTime': new Date().getTime(),
                  'timeUsed': LOGINUSED,
                  'failedReason': '登录成功',
                  'uploadFailedReason': loginEncoder
                }
              };
              ysp.customHelper.TimeScope.timeScope();
              top.yspCheckIn.sendLog(JSON.stringify(DATA));
            } else if (EnCoderXhr.status >= 400 && EnCoderXhr.readyState == 4) {
              loginTimeOut('登录失败,接口返回错误,是否刷新重试');
            }
          }
          LoginXhr.timeout = 10000;
          LoginXhr.ontimeout = function(str){
            loginTimeOut('登录接口请求超时,是否刷新重试');
          }
          LoginXhr.open('POST','http://192.168.1.227/pttlCrm/login/loginInForMobile');
          LoginXhr.send(body);
        }else if(EnCoderXhr.status>=400 && EnCoderXhr.readyState == 4){
          loginTimeOut('未获取到Encoder,是否刷新重试');
        }
      }
      EnCoderXhr.timeout = 10000;
      EnCoderXhr.ontimeout = function(){
        loginTimeOut('Encoder获取,是否刷新重试');
      }
      EnCoderXhr.open('POST','http://192.168.1.227/pttlCrm/login/getEncoderForMobile?'+user);
      EnCoderXhr.send();
    }
    
	}
  //安卓物理返回键 - 客户端调用
  topWin.AndroidBack = function(){
    var url = ysp.customHelper.AndroidBackURL;  //待跳转目标地址
    var model = ysp.customHelper.AndroidBackModel; //待跳转目标模板
    var name = ysp.customHelper.AndroidName; //客户门店返回名称标识
    var currentElem = ysp.customHelper.AndroidDocument; // 客户门店返回主元素
    var BigFlag = ysp.customHelper.AndroidBidFlag;
    if(ysp.customHelper.AndroidBackFlag == 'default'){
      ysp.customHelper.back();
    }
    if(ysp.customHelper.AndroidBackFlag == 'PageClose'){
      if(ysp.runtime.Browser.activeBrowser.contentWindow.frameElement.name == 'sencondLevelIframeContainer'){
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
      ysp.runtime.Browser.activeBrowser.contentWindow.close();
      if(url == '' && model){
         ysp.customHelper.BackReload('',model);
      }
    }
    if(ysp.customHelper.AndroidBackFlag == 'destination' && url != ''){
      if(ysp.runtime.Browser.activeBrowser.contentWindow.frameElement.name == 'sencondLevelIframeContainer'){
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
      ysp.customHelper.BackReload(url,model);
    }
    if(ysp.customHelper.AndroidBackFlag == 'BigData'){
      var a = ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb').querySelectorAll('a');
      var index = 0;
      for (var i = 0; i < a.length; i++) {
        if (a[i].onclick != null) {
          index++;
        }
      }
      if (index > 1) {
         index -= 1;
         var aL = a.length;
         if (aL - index > 1) {
           a[aL - 2].click();
         } else {
           a[index - 1].click();
         }
         	 setTimeout(function () {
           ysp.appMain.hideLoading();
         }, 1000);
      } else {
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
    }
    if(ysp.customHelper.AndroidBackFlag == 'SaleBigData'){
      var li = ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb').querySelectorAll('li').length;
  li > 1 ? ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb').querySelectorAll('li')[li - 2].querySelector('a').click() : ysp.runtime.Browser.activeBrowser.contentWindow.close();
    }
    if(ysp.customHelper.AndroidBackFlag == "reachBigData"){
      //达成物理返回
      var li = ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('#searchHead').querySelectorAll('li').length;
  li > 1 ? ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('#searchHead').querySelectorAll('li')[li - 2].querySelector('a').click() : ysp.runtime.Browser.activeBrowser.contentWindow.close();
    }
    if(ysp.customHelper.AndroidBackFlag == 'AndroidHistory'){
      ysp.runtime.Browser.activeBrowser.contentWindow.history.go(-1);
    }
    if(ysp.customHelper.AndroidBackFlag == 'Client&Store'){
      ysp.customHelper.toPlan(currentElem, name, model)
    }
    if(ysp.customHelper.AndroidBackFlag == 'ClientorStory'){
      if(ysp.runtime.Browser.activeBrowser.contentWindow.frameElement.name == 'sencondLevelIframeContainer'){
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
    }
    if(ysp.customHelper.AndroidBackFlag == 'indexBack'){
      if (top.EAPI.isAndroid() && top.yspCheckIn && top.yspCheckIn.backMarking) {
        top.yspCheckIn.backMarking('indexFlag');
      }
      console.log('溜了溜了 !!!');
    }
    if(ysp.customHelper.AndroidBackFlag == 'ClientStoreOrder'){
      //客户、门店订单详情返回
      ysp.appMain.back();
    }
    if(ysp.customHelper.AndroidBackFlag == 'VisitBack'){
      //拜访总览物理键返回
      if (ysp.customHelper.BackFlag >1) {
        ysp.customHelper.BackFlag = ysp.customHelper.BackFlag - 1;
        ysp.runtime.Browser.activeBrowser.contentWindow.history.back();
      } else if (ysp.customHelper.BackFlag == 1) {
        ysp.customHelper.BackFlag = ysp.customHelper.BackFlag - 1;
        ysp.runtime.Browser.activeBrowser.contentWindow.location.href = ysp.customHelper.CUSTOMURL;
      } else {
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
    }
    if(ysp.customHelper.AndroidBackFlag=='clientQuery_back'){
      //分货客户查询物理键返回
      ysp.runtime.Browser.activeBrowser.contentWindow.close();
    }
    
    if(ysp.customHelper.AndroidBackFlag=='clientQuery_detail_back'){
      //分货客户查询详情物理键返回
        var a = ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb1').querySelectorAll('a');
        var index = 0;

        for (var i = 0; i < a.length; i++) {
          // if (a[i].onclick != null) {
          index++; // }
        }

        if (index > 1) {
          index -= 1;
          var aL = ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb1').querySelectorAll('a').length;

          if (aL - index > 1) {
            ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb1').querySelectorAll('a')[aL - 2].click();
          } else {
            ysp.runtime.Browser.activeBrowser.contentWindow.document.querySelector('.breadcrumb1').querySelectorAll('a')[index - 1].click();
          }

          ysp.appMain.showLoading();
          setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 1000);
        }
    }
    
    
    
    //恢复默认值
    ysp.customHelper.AndroidBackFlag != 'indexBack' ? ysp.customHelper.AndroidBackFlag == 'default':'';
    ysp.customHelper.AndroidBackURL = '';
    ysp.customHelper.AndroidBackModel = '';
    ysp.customHelper.AndroidDocument = '';
    ysp.customHelper.AndroidName = '';
    //default:为默认返回 destination:为跳转目标URL地址 PageClose:为关闭页面 BigData:为大数据钻取返回 . AndroidHistory:针对与页面后退一步返回
    //Client&Store : 针对客户||门店返回方案  ClientorStory:针对客户门店360返回列表方案
  }
  //安卓端判断VPN状态 - 客户端调用
  topWin.AndroidVpn = function(str){
    if(!str) return ;
    //str == '0'?'':alert('当前VPN断开 - 稍后重连请刷新');
  }
  //安卓端判断当前请求网络状态 - 客户端调用
  topWin.AndroidLine = function(str){
    if(!str)return ;
  }
  topWin.IOSLine = function(str){
    if(!str)return ;
  }
  //向当前页面动态添加提示语 .  (div)
  var addMarkedModule = function(str){
    if(!str && typeof str !== 'string')return ;
    if(!ysp.runtime && !ysp.runtime.Browser) return ;
    var currentWindow = ysp.runtime.Browser.activeBrowser.contentWindow;
    var currentDoc = currentWindow.document;
    var div = currentDoc.createElement('div');
    var text = currentDoc.createTextNode(str);
    div.setAttribute('class','addMarked');
    div.appendChild(text);
    currentDoc.body.appendChild(div);
  }
  var forEach = Array.prototype.forEach;
  var currentModelID = ""; //当前动作
  var singleTaskManager = null; //单例任务池
  var taskTimeoutId;
  var winContainer = [];
  var clientEntry;
  var currentSecondMenuId;
  var isFirstLoaded = true;
  var getAllMenuStatus; //该状态判断当前是否已经拿到PC端全部菜单信息
  var ALLMENU = []; //所有菜单列表集合
  var removeMenuAll = ['我是被筛除的菜单:']; //所有被指定删除菜单的集合
  //菜单筛选 , 将全部菜单按照{name:'',url:''}格式存储至ALLMENU;
  function AllMobileMenu(All) {
    [].forEach.call(All, function (oneItem, oneIndex) {
      //当前oneItem为一级菜单.
      if (oneItem) {
        //当前twoMenu为二级菜单.
        var twoMenu = oneItem.subMenuList;
        [].forEach.call(twoMenu, function (twoItem, twoIndex) {
          if (twoItem) {
            if (twoItem.subMenuList == null) {
              var menus = {};
              menus.name = [];
              menus.url = [];
              menus.name.push(twoItem.name);
              menus.url.push(twoItem.url);
              ALLMENU.push(menus);
            } else {
              //当前threeMenu为三级菜单.
              var threeMenu = twoItem.subMenuList;
              [].forEach.call(threeMenu, function (threeItem, threeIndex) {
                if (threeItem) {
                  var menus = {
                    name: threeItem.name,
                    url: threeItem.url
                  };
                  ALLMENU.push(menus);
                } else {
                  console.error('闲的,完全进不来这个判断,但我就是想写,以警示后人,没有三级菜单.');
                }
              });
            }
          } else {
            console.error('不存在二级菜单.果然是有问题的请求.');
          }
        });
      }
    });
  }
  //安卓端请求ICON角标数量 - ;
  function AndroidGetIconNum(summary,atMe){
    this.summary = summary;
    this.atMe = atMe;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.status >= 200 && xhr.status <300 || xhr.status == 304){
        if(xhr.response != ''){
          var obj = JSON.parse(xhr.response);
          if(obj.summaryReportCount && obj.atMeUnreadReportCount){
            ysp.customHelper.IconNum.summary = obj.summaryReportCount;
    				ysp.customHelper.IconNum.atMe = obj.atMeUnreadReportCount;
            localStorage.setItem('atMe',obj.atMeUnreadReportCount);
            localStorage.setItem('summary',obj.summaryReportCount);
          }
        }
      }
    }
    xhr.open('POST','http://192.168.1.227/pttlCrm/crm/workSummary/getWorkBenchSummaryCount');
    xhr.send()
  }
  // 请求首页面所有一级\二级\三级菜\\\\\                                                                                                              单
  function getAllMenu(aWin,menuList) {
   	//取值localStorage内接口数据,进行菜单渲染
    var _this = this;
    if(aWin.localStorage.listMenuForMobile && !loginFlag && !menuList){
      var AllMenu = JSON.parse(decodeURIComponent(aWin.localStorage.listMenuForMobile));
      if(AllMenu == '' || AllMenu == '{"isHaveSession":"no"}'){
        console.error('当前菜单为空,具体原因为PC端未将菜单传入');
        alert('请双击刷新低栏VCRM图标,重新加载');
      }else{
        if(top.EAPI.isIOS()){
          //top.EAPI.postMessageToNative('GetIconNum', '');//给客户端发消息 - 请求角标数据
        }else{
          //AndroidGetIconNum(); // 安卓端ICON数量取值;
        }
          ALLMENU = AllMenu;
          //console.log(ALLMENU)
          //当前方法为接口存在全部菜单权限时.用来筛选移动端菜单权限
          //AllMobileMenu(AllMenu);
          //studio中无法存储两个session 导致大数据无法进入 此处进行模拟请求session
          // if(ALLMENU != '' && AllMenu){
          //   //正式环境暂时没有效验
          //    var SessionXhr = new XMLHttpRequest();
          //    SessionXhr.onreadystatechange = function(){
          //     if(SessionXhr.status == 200 && SessionXhr.status <300 || Selection.status == 304){
          //       var encoder = JSON.parse(SessionXhr.response).encoder;
          //       var userId = JSON.parse(SessionXhr.response).userId;
          //       if(encoder && userId){
          //         var encoderXHR = new XMLHttpRequest();
          //         //4G网络下无法通过请求  , 暂时通过GET请求解决 . 
          //       encoderXHR.open('GET','http://192.168.1.227/ptDataShow/login/crmLogin?filter_userId='+userId+'&encoder='+encoder,false);
          //         //encoderXHR.send({'filter_userId':'ZHAOWEI','encoder':'WkhBT1dFSSswOC8wNy8yMDE4IDIwOjE0OjUy'});
          //         encoderXHR.send();
          //       }else{
          //         console.error('AndEncoder接口请求失败!')
          //       }
          //     }
          //   }
          //    SessionXhr.open('GET','http://192.168.1.227/pttlCrm/homepage/getUserIdAndEncoder',false);
          //    SessionXhr.send();
          // }
      }
    }
    if(aWin.localStorage.listMenuForMobile && menuList && loginFlag){
      //IOS独有得菜单获取方法 - menuList是菜单集合 具体实现请看IOSLoginIn方法
      //var AllMenu = JSON.parse(decodeURIComponent(aWin.localStorage.listMenuForMobile));
      var AllMenu = menuList;
      if(AllMenu == '' || AllMenu == '{"isHaveSession":"no"}'){
        console.error('当前菜单为空,具体原因为PC端未将菜单传入');
        alert('请双击刷新低栏VCRM图标,重新加载');
      }else{
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('GetIconNum', '');//给客户端发消息 - 请求角标数据
        }
      }
      	ALLMENU = AllMenu;
        //console.log(ALLMENU)
        //当前方法为接口存在全部菜单权限时.用来筛选移动端菜单权限
        //AllMobileMenu(AllMenu);
        //studio中无法存储两个session 导致大数据无法进入 此处进行模拟请求session
        // if(ALLMENU != '' && AllMenu){
        //   //正式环境暂时没有效验
        //    var SessionXhr = new XMLHttpRequest();
        //    SessionXhr.onreadystatechange = function(){
        //     if(SessionXhr.status == 200 && SessionXhr.status <300 || Selection.status == 304){
        //       var encoder = JSON.parse(SessionXhr.response).encoder;
        //       var userId = JSON.parse(SessionXhr.response).userId;
        //       if(encoder && userId){
        //         var encoderXHR = new XMLHttpRequest();
        //         //4G网络下无法通过请求  , 暂时通过GET请求解决 . 
        //       encoderXHR.open('GET','http://192.168.1.227/ptDataShow/login/crmLogin?filter_userId='+userId+'&encoder='+encoder,false);
        //         encoderXHR.send();
        //       }else{
        //         console.error('AndEncoder接口请求失败!')
        //       }
        //     }
        //   }
        //    SessionXhr.open('GET','http://192.168.1.227/pttlCrm/homepage/getUserIdAndEncoder',false);
        //    SessionXhr.send();
        // }
    }
    //请求接口获取连接方式,暂时弃用
//     if(window.XMLHttpRequest){
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function () {
//         if (xhr.status == 200 && xhr.status < 300 || xhr.status == 304 && !getAllMenuStatus) {
//           if (xhr.responseText == '{"isHaveSession":"no"}') {
//             console.info('系统正在登录中...');
//             if(FlagNum<10){
//               setTimeout(getAllMenu(), 3000);
//             }else{
//               FlagNum = 0;
//             }
//           } else if (xhr.status == 200 && xhr.readyState == 4) {
//             if(top.EAPI.isIOS()){
//               top.EAPI.postMessageToNative('GetIconNum', '');//给客户端发消息 - 请求角标数据
//             }else{
//             	AndroidGetIconNum(); // 安卓端ICON数量取值;
//             }
//             getAllMenuStatus = true; 
//             //此状态说明当前已经全部拿到PC端所有菜单信息;
//             var AllMenu = JSON.parse(xhr.response);
//             //当前方法为接口只存在移动端菜单时可以直接想ALLMENU里面添加菜单信息
//             ALLMENU = AllMenu;
//             //console.log(ALLMENU)
//             //当前方法为接口存在全部菜单权限时.用来筛选移动端菜单权限
//             //AllMobileMenu(AllMenu);
//             //studio中无法存储两个session 导致大数据无法进入 此处进行模拟请求session
//             if(ALLMENU != '' && AllMenu){
//                var SessionXhr = new XMLHttpRequest();
//                SessionXhr.onreadystatechange = function(){
//                 if(SessionXhr.status == 200 && SessionXhr.status <300 || Selection.status == 304){
//                   var encoder = JSON.parse(SessionXhr.response).encoder;
//                   var userId = JSON.parse(SessionXhr.response).userId;
//                   if(encoder && userId){
//                     var encoderXHR = new XMLHttpRequest();
//                     //4G网络下无法通过请求  , 暂时通过GET请求解决 . 
//                   encoderXHR.open('GET','http://192.168.1.227/ptDataShow/login/crmLogin?filter_userId='+userId+'&encoder='+encoder,false);
//                     //encoderXHR.send({'filter_userId':'ZHAOWEI','encoder':'WkhBT1dFSSswOC8wNy8yMDE4IDIwOjE0OjUy'});
//                     encoderXHR.send();
//                   }else{
//                     console.error('AndEncoder接口请求失败!')
//                   }
//                 }
//               }
//                SessionXhr.open('GET','http://192.168.1.227/pttlCrm/homepage/getUserIdAndEncoder',false);
//                SessionXhr.send();
//             }
//           }
//         } else if (xhr.status >= 400) {
//           console.warn('请求失败,可能正在登陆中,3s后重新请求');
//           //3s后重新请求菜单列表
//           if(FlagNum<10){
//             FlagNum+=1;
//             setTimeout(function () {
//             	getAllMenu();
//           	}, 3000);
//           }else{
//             FlagNum=0;
//           }
//         }
//       };
//       xhr.open('POST', 'http://192.168.1.227/pttlCrm/sys/auth/rela/getSystemLeftMenuListForMobile',false);
//       xhr.send();
//     }else{
//       console.error('对象只有一个,当前代码并没有兼容别的对象!!!!');
//     }
  }
  //按照传进来的名称来配置二级菜单
  function _getTargetMenus(arr,removeName) {
    //arr为当前要筛选的菜单名称 removeName为要排除相似的菜单名称. ps:移动端和PC名称相似却不相同,或者统一名称在移动端特殊展示
    var Allmenus = [];
    if (typeof arr === "string") {
      arr = [arr];
    }
    if(typeof removeName === 'string'){
      removeName = [removeName];
    }
    if(removeName){
      removeName.some(function(current,index,arr){
        for(var i = 0;i<ALLMENU.length;i++){
          if(ALLMENU[i].name.indexOf(current) !== -1){
            removeMenuAll.push(ALLMENU.splice(i,1));
            //打印removeMenuAll 可以得到筛选排除的所有菜单;
            //ALLMENU.splice(i,1);
          }
        }
      })
    }
    arr.some(function (current, index, arr) {
      for (var i = 0; i < ALLMENU.length; i++) {
        //在全部菜单中按照条件筛选出移动端可以进入的目标菜单及有效url存入数组.
        if (ALLMENU[i].name.indexOf(current) !== -1) {
          //针对三级菜单地址进行截取,保证url有效
          if(ALLMENU[i].url.indexOf('../') !== -1){
            ALLMENU[i].url = ALLMENU[i].url.replace('../.','');
            ALLMENU[i].url = ALLMENU[i].url.replace(/^\s+/,'');
          }
          if(current.indexOf('(新)')!=-1){
            current = current.replace('(新)','');
          }
          var menus = {
            name: current,
            url: ALLMENU[i].url,
            code:ALLMENU[i].code,
            current:ALLMENU[i].name
          };
          Allmenus.push(menus);
          break;
        }
      }
    });
    return Allmenus;
  }
  //行为拦截器
  function intercepter(type, menuId) {
    switch (type) {
      case 'visitManager':
        ysp.customHelper.secondMenu.toPlanByMenuName('拜访总览', null, menuId);
        break;
      case 'SalesReached':
        ysp.customHelper.secondMenu.toPlanByMenuName('库存查询', null, menuId);
        break;
      case 'achievementSecondMenu':
        ysp.customHelper.secondMenu.toPlanByMenuName('销售业绩总览', null, menuId);
        break;
      case 'newInformationTotle':
        ysp.customHelper.secondMenu.toPlanByMenuName('客户信息录入', null, menuId);
        break;
      case "clientStoreCard":
        ysp.customHelper.secondMenu.toPlanByMenuName('客户信息', null, menuId);
        break;
    }
  }
  //强制执行适配方案
  function executePlan(modelID, menuId) {
    if (ysp.runtime.Model.setForceMatchModels && modelID) {
      var matchs = [];
      modelID && matchs.push(modelID);
      ysp.runtime.Model.setForceMatchModels(matchs);
      intercepter(modelID, menuId);
      setTimeout(function () {
        var taskPool = getSingletonTask();
        taskPool.status = "idle";
        taskPool.executeFinalTask();
      }, 2000);
    }
  }
  //分发消息策略
  function executeAction(task) {
    var _this = this;
    var operation = '';
    clearTimeout(taskTimeoutId);
    if (task.intercepter) {
      operation = task.intercepter;
    } else {
      operation = task.title;
    }
    var flag = false;
    var onceExecuteFlag = true;
    var onceExecuteTimeoutId;

    function execute() {
      function clickMenu() {
        if (topWin && topWin.document.readyState === "complete") {
          if (topWin.location.href.indexOf('index.html') != -1) {
            var xpath = '//nav[@id="menu"]//a//descendant::span[@menucode="' + operation + '"]';
            var doc = topWin.document;
            var menuItem = ysp.utils.xfind(xpath, doc) && ysp.utils.xfind(xpath, doc)[0];
            if (menuItem) {
              var ancestorFirstAEl = menuItem;
              while (ancestorFirstAEl) {
                if (ancestorFirstAEl.tagName.toLowerCase() !== 'a') {
                  ancestorFirstAEl = ancestorFirstAEl.parentElement;
                } else {
                  break;
                }
              }
              flag = true;
              if (ancestorFirstAEl) {
                var menu = JSON.parse(ancestorFirstAEl.getAttribute('menu'));
                //currentSecondMenuId = menu && menu.id;
                var hrefStr = ancestorFirstAEl.getAttribute('val');
                if (!!hrefStr) {
                  ysp.customHelper.openWindow(hrefStr, operation);
                  if (!parent.EAPI.isIOS()) {
                    menuItem.click();
                    clearTimeout(onceExecuteTimeoutId);
                    if (!task.intercepter) {
                      executePlan(task.type, menu && menu.id);
                    }
                  }
                } else {
                  menuItem.click();
                  clearTimeout(onceExecuteTimeoutId);
                  if (!task.intercepter) {
                    executePlan(task.type, menu && menu.id);
                  }
                }
              }
            }
          }
        }
        if (!flag) {
          taskTimeoutId = setTimeout(clickMenu.bind(_this), 200);
        }
      }
      clickMenu();
    }
    //关键点，在此处需要设置一个权限验证，如果查询菜单查询超过5s钟，就提示没有权限
    function validatePrivilege() {
      var _this = this;
      if (!topWin) {
        setTimeout(validatePrivilege.bind(_this), 3000); //如果topWin无值的话，请睡三秒
        return;
      }
      var xhr = new topWin.XMLHttpRequest();
      xhr.open('POST', 'http://192.168.1.227/pttlCrm/sys/auth/rela/getSystemLeftMenuList', true);
      xhr.error = function (e) {
        console.error(e);
      };
      xhr.onreadystatechange = function () {
        if (xhr.readyState === topWin.XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            var menuInfo = xhr.responseText;
            if (menuInfo == '{"isHaveSession":"no"}') {
              //win.reload();
              setTimeout(validatePrivilege.bind(_this), 3000);
            }
            if (menuInfo.indexOf(operation) == -1) {
              //flag = true; //如果没有权限的话，监控马上终止
              menuInfo = JSON.parse(menuInfo);
              if (menuInfo.isHaveSession && menuInfo.isHaveSession == 'no') {
                //alert('正在登录中...');
                //return;
                ysp.customHelper.statusManager.currentStatus = 'LOADING'; //LOADING 数据加载中 NO_PRIVILEGE 无此权限  LOGINING 登录中 NETWORK_ERROR 网路异常
                setTimeout(validatePrivilege.bind(_this), 100);
              } else {
                //alert('没有此权限');
                ysp.customHelper.statusManager.currentStatus = 'NO_PRIVILEGE';
                var rtWin = ysp.customHelper.getRTWin();
                if (rtWin && rtWin.frames) {
                  var frames = rtWin.frames;
                  ysp.runtime.Model.setForceMatchModels(['index']);
                  [].forEach.call(frames, function (frame) {
                    if (frame.name != 'sourcePageFrame') {
                      frame.close();
                    }
                  });
                }
                //parent.EAPI.back();
              }
              //return;
            } else {
              ysp.customHelper.statusManager.currentStatus = 'LOADING';
              execute();
            }
          } else {
            ysp.customHelper.statusManager.currentStatus = 'LOADING';
            setTimeout(validatePrivilege.bind(_this), 100);
            //alert('网络异常');
          }
        }
      };
      xhr.send(null);
    }
    //validatePrivilege(); lyh
    //写一个方法,刚进入页面弹出一个alert提示加载中.500ms后自动关闭
    // if (onceExecuteFlag && !flag) {
    //   onceExecuteTimeoutId = setTimeout(validatePrivilege.bind(this), 1500);
    // }
    onceExecuteFlag = false;
    if (topWin.location.href.indexOf('login') != -1) {
      if(top.EAPI.isIOS()){
       // executePlan('login');  //测试登录框问题 lyh
      }
    }
  }

  function _getThirdMenuList(parentId, callback) {
    var xhr = new topWin.XMLHttpRequest();
    xhr.open('POST', 'http://192.168.1.227/pttlCrm/sys/auth/menu/getThirdMenuList', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === topWin.XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          var menuInfo = xhr.responseText;
          callback(menuInfo);
          //callback("分货查询,产品上下架信息查询");
        }
      }
    };
    xhr.send('parentMenuId=' + parentId);
  }
  /*
   * type 消息类型
   */
  function dispatchMsg(task) {
    var type = task.type;
    var msgType = "";
    console.log('webview send msg type is: ' + type);
    if (!task.name) {
      switch (type) {
        case 'clientList':
          //客户360视图 导航进入
          clientEntry = 'clientList';
          task.title = "CUST360";
          break;
        case 'clientListCard':
          //客户360视图 一级菜单中进入
          clientEntry = 'clientListCard';
          type = 'clientList';
          task.title = "CUST360";
          break;
        case 'customerWorkspace':
          //工作台
          task.title = "VISIT_WORKSPACE";
          break;
        case 'saleTask':
          //达成情况
          task.title = "RESULT_INFO";
          break;
        // case 'newInformationTotle':// case 'informationFill': //信息录入
        //    task.title = "DATA_ENTRY_MOBILE";
        //    break;
        // case 'customerInformationFIll': //信息录入(新)
        //   task.title = "DATA_ENTRY";
        //   break;
        case 'newInformationTotle':
          //信息录入(新+1)
          task.title = "ENTRY_DATA_TOTLE";
          break;
        // case 'newInformationTotle': //信息录入(新+1)
        // task.title = "ENTRY_DATA_TOTLE";
        // break;
        case 'SalesReached':
          //数据看版
          task.title = "dataShowColection";
          break;
        case 'visitManager':
          //拜访管理
          //task.title = "VISIT_MANAGE";
          task.title = "BFGLBB";
          break;
        case 'visitIndex':
          //拜访总览
          task.title = "VISIT_TOTAL";
          //task.intercepter = "拜访管理";
          break;
        case 'achievementIndex':
          task.title = "YJDCBB";
          break;
        case 'achievementSecondMenu':
          task.title = "YJDCBB";
          break;
        case 'clientStoreCard':
          // 客户和门店
          task.title = "cs_customerAndStore";
          break;
        case 'storeList':
          //门店
          task.title = "STORE360";
          break;
        case 'atMyReport':
          //at我的报告 一级菜单
          task.title = "myReport";
          break;
        case 'reportAtMeSummed':
          //汇报给我的报告 一级菜单
          task.title = "GZZJYD";
          break;
        default:
          msgType = "no";
          break;
      }
      task.name = msgType;
    }
    currentModelID = type;
    //intercepter(msgType, type);
    executeAction(task);
  }
  //任务池，防止用户疯狂点击，造成系统卡死
  function TasksManager() {
    this.tasks = [];
    this._status = 'idle';
    this.currentTask = null;
    this.lastTimer;
  }
  TasksManager.prototype.addTask = function (task) {
    this.tasks.push(task);
  };
  TasksManager.prototype.removeTasks = function () {
    this.tasks = [];
  };
  TasksManager.prototype.executeTask = function (task) {
    //{title:,trails:,type:} name为任务名称，data为数据,type 任务类型
    var _this = this;
    if (typeof task === 'string') {
      task = {
        type: task
      };
    }
    this.lastTimer && clearTimeout(this.lastTimer);
    this.lastTimer = setTimeout(function () {
      //确保用户在意外情况，强制让其进入闲置状态
      if (_this.status == 'busy') {
        _this.status = 'idle';
        _this.executeFinalTask();
      }
    }, 4000);
    if (this.status == 'idle') {
      //ysp.appMain.showLoading();
      this.status = 'busy';
      this.currentTask = task;
      dispatchMsg(task);
      console.info('TasksManager is executing ' + task.name);
    } else {
      this.addTask(task);
    }
  };
  TasksManager.prototype.existTask = function () {
    if (this.tasks.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  TasksManager.prototype.executeFinalTask = function () {
    if (this.status == 'idle' && this.existTask()) {
      var task = this.tasks[this.tasks.length - 1];
      task = ysp.utils.assign({}, task);
      this.removeTasks();
      if (task.name != this.currentTask.name) {
        this.executeTask(task);
      }
    }
  };
  Object.defineProperty(TasksManager.prototype, 'status', {
    set: function set(newVaule) {
      this._status = newVaule;
    },
    get: function get() {
      return this._status;
    }
  });

  function getSingletonTask() {
    if (!singleTaskManager) {
      singleTaskManager = new TasksManager();
    }
    return singleTaskManager;
  }
  var cwin = window.parent;
  var waittingAction = "";
  var recoverSceneId;
  var timeStamps = [];
  cwin._yspNativeEventHandler = function (type, stop) {
    console.info('_yspNativeEventHandler is type = ' + type);
    cwin.sessionStorage.clear();
    cwin.sessionStorage.setItem('msg', type + '||currentHref:' + (topWin && topWin.location.href));
    if (ysp.customHelper && ysp.customHelper.statusManager) ysp.customHelper.statusManager.currentStatus = "LOADING";
    timeStamps.push(Date.now());
    if (timeStamps.length >= 3) {
      timeStamps.splice(0, timeStamps.length - 2);
    }
    clearTimeout(recoverSceneId);
    var aWin = ysp.runtime.Browser.activeBrowser.contentWindow;
    var activeContext = ysp.runtime.Context.activeContext;
    var realType = type;
    if (realType === "newInformationTotle") {
      realType = "customerInformationFIll";
      aWin && aWin.location.href.indexOf('index.html') == -1 && aWin.location.reload();
    }
    // if (type === "achievement" || type === "dataPanel" || type === "customerIn" || type === "achievementSecondMenu" || type == 'newInformationTotle' || type === "clientStoreCard") {
    //   if (activeContext && activeContext.model.id == realType) {
    //     console.log('小伙子，你在当前方案下继续触发当前方案，驳回，_yspNativeEventHandler type is ' + type + 'real type is ' + realType);
    //     return;
    //   }
    // }


    if (type === "saleAchievement" || type === "dataPanel" || type === "customerIn" || type === "achievementSecondMenu" || type == 'newInformationTotle' || type === "clientStoreCard" || type === "newInformationTotle1") {
      if (activeContext && activeContext.model.id == realType) {
        console.log('小伙子，你在当前方案下继续触发当前方案，驳回，_yspNativeEventHandler type is ' + type + 'real type is ' + realType);
        return;
      }
      if (activeContext && activeContext.model.id == 'customerInformationFIll' && type != "saleAchievement" && type != "dataPanel" && type != "customerIn" && type != "achievementSecondMenu" && type != "clientStoreCard") {
        // 信息录入页面加载无刷新
        aWin && aWin.location.href.indexOf('index.html') == -1 && aWin.location.reload();
        return;
      }
    }
    //频繁点击，恢复现场
    function recoverScene() {
      var taskPool = getSingletonTask();

      function execute() {
        var activeContext = ysp.runtime.Context.activeContext;
        if (!activeContext && !stop) {
          cwin._yspNativeEventHandler(type, true);
          return;
        }
        if (activeContext && activeContext.model.id != realType && !stop) {
          cwin._yspNativeEventHandler(type, true);
        }
      }
      execute();
    }
    //recoverSceneId = setTimeout(recoverScene.bind(this),2000);
    var timeGapLen = timeStamps.length;
    if (timeGapLen >= 2) {
      var timeGap = timeStamps[timeGapLen - 1] - timeStamps[timeGapLen - 2];
      if (timeGap <= 1000) {
        recoverScene();
      }
    }

    switch (type) {
      case "dataPanel":
        type = "SalesReached";
        break;
      case "achievement":
        type = "achievementSecondMenu";
        break;
      case "newInformationTotle1":
        type = "newInformationTotle";
        break;
    }

    if (topWin) {
      var activeBrowser = ysp.runtime.Browser.activeBrowser;
      if (activeBrowser) {
        var activeBrowserId = activeBrowser.id;
        if (activeBrowserId != "firstLevelIframeContainer" && activeBrowserId != "mainFrame") {
          //activeBrowser.contentWindow && activeBrowser.contentWindow.close();
          var acWindow = activeBrowser.contentWindow;
          var count = 0;
          if (acWindow) {
            while (acWindow) {
              var acIframe = acWindow.frameElement;
              count++;
              if (count > 8) {
                count = 0;
                break;
              }
              if (acIframe.name == 'firstLevelIframeContainer' || acIframe.name == 'mainFrame') {
                break;
              } else {
                acWindow.close();
                acWindow = acWindow.opener;
              }
            }
          }
        }
      }
    }
    var taskPool = getSingletonTask();
    taskPool.executeTask(type);
  };
  //获取放大图片器
  var _bigPicture = {
    getImgEl: function getImgEl() {
      if (topWin) {
        var doc = topWin.document;
        var layerPicBox = ysp.utils.xfind('//div[contains(@class,"viewer-container") and contains(@class,"viewer-in")]', doc)[0];
        if (layerPicBox) {
          var imgEl = layerPicBox.querySelector("img");
          if (imgEl) {
            return imgEl;
          }
        }
      }
    }
    //获取不是当前iframe里的alert/div/弹框
  };var _tipMsg = {
    getMsg: function getMsg() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var contentEl = layerTipEl.querySelector('div.layui-layer-content');
          if (contentEl) {
            return contentEl.textContent;
          }
        }
      }
    },
    cancelText: function cancelText() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelTxt = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelTxt) {
            return cancelTxt.textContent;
          }
        }
      }
    },
    confirm: function confirm() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var confirmBtn = layerTipEl.querySelector('a.layui-layer-btn0');
          if (confirmBtn) {
            confirmBtn.click();
          }
        }
      }
    },
    cancel: function cancel() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelBtn = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelBtn) {
            cancelBtn.click();
          }
        }
      }
    },
    getLoading: function getLoading() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var contentEl = layerTipEl.classList.contains("layui-layer-loading");
          return contentEl;
        }
      }
    }
    //通过标记法来优化销售达成
  };var _saleReachStamp = {
    tip: 0,
    increment: function increment() {
      this.tip += 1;
    },
    decrement: function decrement() {
      if (this.tip < 0) {
        this.tip = 0;
      } else {
        this.tip -= 1;
      }
    },
    getTipValue: function getTipValue() {
      return this.tip;
    },
    clear: function clear() {
      this.tip = 0;
    }
  };

  function _refreshWinAfterWinName(name, cb) {
    var flag = false;
    var rtWin = ysp.customHelper.getRTWin();
    if (!flag) {
      var refreshWin = function refreshWin() {
        if (!ysp.customHelper.getWinFromRTByName(name)) {
          flag = true;
          cb();
        }
        if (!flag) {
          setTimeout(refreshWin.bind(this), 200);
        }
      };

      refreshWin();
    }
  }
  //页面地址返回刷新问题与返回工作台问题.有参数可以刷新至固定地址,无参数默认回到工作台
  function _BackReload(url,model){
    if(url && typeof url !== 'string'){
      console.info(url+'!字符串,可不行');
    }
    if(model && typeof model !== 'string'){
      console.info(model+'模板名称也得是字符串!');
    }
    var currentWin = ysp.runtime.Browser.activeBrowser.contentWindow;
    if(url && !model){
      currentWin.location.href = url
    }else if(!url && !model){
      currentWin.location.href = 'http://192.168.1.227/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html';
    }
    if(url=='' && model){
      ysp.runtime.Model.setForceMatchModels([model]);
    }
    if(url && model){
      currentWin.location.href = url;
      ysp.runtime.Model.setForceMatchModels([model]);
    }
  }
  //页面加载Loading . 数据加载中 , 数据请求时机 ,页面调用会判断当前数据请求是否成功,请求中时加载loading . 请求成功时 ,关闭loading
  function _isLoading(){
    var currentWin = ysp.runtime.Browser.activeBrowser.contentWindow; //当前激活window . 
  }
  //页面时间输出 - 监控加载时间
  function startTime(){
    localStorage.setItem('startTime',new Date().getTime());
  }
  function timeScope(doc){
    var document = top.document;
    var startTime = localStorage.getItem('startTime');
    var endTime = new Date().getTime();
  	if(!startTime){
      return ;
    }
    if(top.EAPI.isAndroid() || top.EAPI.isIOS()){
      var elem = document.querySelector('#mobileMainContent').querySelector('.timeScope');
      var body = document.querySelector('#mobileMainContent');
    }else{
      var elem = document.querySelector('#engine_browser') && document.querySelector('#engine_browser').contentWindow.document.body.querySelector('.timeScope');
    var body = document.querySelector('#engine_browser') && document.querySelector('#engine_browser').contentWindow.document.body;
    }
    var time = ((endTime - startTime)/1000+1).toFixed(2)+'s';
    ysp.customHelper.TimeScope.totalTime += time;
    localStorage.removeItem('startTime');
    // if(!doc){
    //   alert(time);
    // }
    // if(!elem){
    //   var div = document.createElement('div');
    //   var text = document.createTextNode(time);
    // div.className = 'timeScope';
    //   if(body){body.appendChild(div);}
    // }else{
    //   elem.textContent = time;
    // }
  }
  utils.extend(ysp.customHelper, {
    //页面时间输出
    TimeScope:{
      'startTime':startTime,
      'timeScope':timeScope,
      'totalTime':0
    },
    //日志上传
    CONSOLELOG: function CONSOLELOG(source, type, failed, startTime, loginTime, uploadFailedReason) {
      var loginUsed = (Date.now() - startTime) / 1000; //运行时间
      var DATA = { 'log': {
          'source': source,
          'type': type,
          'loginName': ysp.customHelper.logLoginName,
          'email': '',
          'model': '',
          'loginTime': loginTime,
          'occurTime': new Date().getTime(),
          'timeUsed': loginUsed,
          'failedReason': failed,
          'uploadFailedReason': uploadFailedReason
          }
        }
  },
    //信息录入本地缓存部分
    informationEntry:{
      enterName:'', //录入客户名称
      basic:{
        'user':'',
        'stock':''
      },
			isSave:false,
      saveData:'',
      enterSplit:function(url,str,num){
        if(!url){
          throw '未传入必要参数!';
        } 
        if(!(typeof url === 'string') || !(typeof str === 'string')){
          console.error('请传入正确参数类型'+str);
          return ;
        } 
        if(num){
          if(!(typeof num === 'string')){
            throw '请传入正确参数类型'+num;
          }
          return url.replace(str,num);
        }else{
          return url.split(str)[1];
        }
      },//截取URL中存在的客户编码
    	sendData:function(obj){
        if(!(typeof obj === 'object') || !(obj instanceof Array)){
          throw '请传入正确参数类型'+obj;
        }
        // 待客户端补充方法
        if(ysp.customHelper.logLoginName =='' || ysp.customHelper.informationEntry.enterName == ''){
          alert('用户名或客户编码缺失,无法执行保存操作');
          return ;
        }
        var data = {'user':ysp.customHelper.logLoginName,'stock':this.enterName,'data':obj};
        data = JSON.stringify(data);
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('saveData',data);
        }else if(top.EAPI.isAndroid()){
          top.yspCheckIn && top.yspCheckIn.insertData(data);
        }
      },
      getData:function(user,encoded){
        if(!user && !encoded){
          this.basic.user = ysp.customHelper.logLoginName;
        	this.basic.stock = this.enterName;
        }else{
          var data = JSON.stringify({
            'user':user,
            'stock':encoded
        	})
        }
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('getData',data);
        }else if(top.EAPI.isAndroid()){
          this.saveData = top.yspCheckIn.queryData(this.basic.user,this.basic.stock);
          if(JSON.parse(this.saveData).data.length<1){
            this.isSave = false;
          }else{
            this.isSave = true;
          }
        }
        // 待客户端补充方法
      },
      deleteData:function(user,encoded){
        if(!user && !encoded){
          var data = this.basic;
        }else{
          var data = JSON.stringify({
            'user':user,
            'stock':encoded
        	})
        }
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('deleteData',data);
        }else if(top.EAPI.isAndroid()){
          top.yspCheckIn.deleteData(this.basic.user,this.basic.stock);
        }
      },
      backfill:function(doc,titles,obj){
        if(!doc){
          throw '未传入正确DOM';
        }
        if(!obj) throw '未找到数据,无法回填值!';
        if(!doc.querySelector('thead')){
          console.info('当前DOM中没有thead');
          return ;
    	  }
        if(!doc.querySelector('tbody')){
          console.info('当前DOM中没有tbody');
          return ;
        }
        if(!doc.querySelector('tbody').querySelectorAll('tr')){
          console.info('当前DOM中表格内容为空!');
          return ;
        }
        obj = JSON.parse(obj);
        var TH = doc.querySelectorAll('th').length>0?doc.querySelectorAll('th'):doc.querySelectorAll('td');
        var TR = doc.querySelector('tbody').querySelectorAll('tr');
        if(TR && TR.length>0){
          this.isSave = false; //初始化是否回填状态,防止无限回填;
        }
        var currentTitle = {
          'title':[],
          'index':[]
        };
        var currnetData = [];
        titles.some(function(value,index,arr){
        	for(var i=0;i<TH.length;i++){
            if(value == ysp.customHelper.trim(TH[i].textContent)){
              currentTitle.title.push(value);
              currentTitle.index.push(i);
            }
          }
        })
        for(var i = 0;i<TR.length;i++){
          var TD = TR[i].querySelectorAll('td');
          if(i == obj.data[i].index){
            currentTitle.title.some(function(value,index,arr){
              for(k in obj.data[i].content){
                if(obj.data[i].content.hasOwnProperty(value)){
                  if(TD[currentTitle.index[index]].querySelectorAll('input').length >0){
                    TD[currentTitle.index[index]].querySelectorAll('input')[1].value = obj.data[i].content[value];
                  }else{
                    TD[currentTitle.index[index]].textContent = obj.data[i].content[value];
                  }
                }
              }
            })
          }
        }
      },
      filterData:function(doc,titles,id){
        var tableStats = { 
        	'thead':true,
          'tbody':true,
          'tr':true
        }
        if(!doc){
          throw '未传入正确DOM';
        }
        if(id){
          this.id = id;
        }
        if(!doc.querySelector('thead')){
          tableStats.thead = false;
          console.info('当前DOM中没有thead');
          return ;
    	  }
        if(!doc.querySelector('tbody')){
          tableStats.tbody = false;
          console.info('当前DOM中没有tbody');
          return ;
        }
        if(!doc.querySelector('tbody').querySelectorAll('tr')){
          tableStats.tr = false;
          console.info('当前DOM中表格内容为空!');
          return ;
        }
        var TH = doc.querySelectorAll('th').length>0?doc.querySelectorAll('th'):doc.querySelectorAll('td');
        var TR = doc.querySelector('tbody').querySelectorAll('tr');
        var currentTitle = {
          'title':[],
          'index':[]
        };
        var currnetData = [];
        titles.some(function(value,index,arr){
        	for(var i=0;i<TH.length;i++){
            if(value == ysp.customHelper.trim(TH[i].textContent)){
              currentTitle.title.push(value);
              currentTitle.index.push(i);
            }
          }
        })
        for(var i =0;i<TR.length;i++){
          var enterData = {};
          var TD = TR[i].querySelectorAll('td');
          currentTitle.index.some(function(value,index,arr){
            if(TD[value].querySelectorAll('input').length >0){
              enterData[currentTitle.title[index]]=ysp.customHelper.trim(TD[value].querySelectorAll('input')[1].value);
            }else{
              enterData[currentTitle.title[index]]=ysp.customHelper.trim(TD[value].textContent);
            }
          })
          currnetData.push({
            'index':i,
            'content':enterData
          })
        }
        return currnetData;
      }
    },
    //信息录入本地缓存部分
    //系统日志部分 
    CONSOLELOG:function(source,type,failed,startTime,loginTime,uploadFailedReason){
      	var loginUsed = (Date.now() - startTime)/1000; //运行时间
        var DATA = {'log':{
                  'source':source,
                  'type':type,
                  'loginName':ysp.customHelper.logLoginName,
                  'email':'',
                  'model':'',
                  'loginTime':loginTime,
                  'occurTime':new Date().getTime(),
                  'timeUsed':loginUsed,
                  'failedReason':failed,
                  'uploadFailedReason':uploadFailedReason
                 }
               }
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('YSPLOG',JSON.stringify(DATA));
        }else{
          top.yspCheckIn.sendLog(JSON.stringify(DATA));
        }
    },
    logLoginName:'',
    //系统日志部分 
    addMarkedModule:addMarkedModule,
    //安卓物理返回键部分
    AndroidBidFlag:'',
    AndroidBackFn:topWin.AndroidBack,
    AndroidDocument:'',//安卓物理返回键客户门店返回元素
    AndroidName:'',//安卓物理返回键客户门店返回名称
    AndroidBackURL:'',//安卓物理返回键目标地址
    AndroidBackModel:'',//安卓物理返回键目标模板
    AndroidBackFlag:'default',//安卓物理返回键返回方法 条件 标识 default:为默认返回 destination:为跳转目标URL地址 PageClose:为关闭页面
    //安卓物理返回键部分
    AndroidGetIconNum:AndroidGetIconNum, //安卓端请求待办角标数量
    CUSTOMURL:'',
    IconNum:{summary:'',atMe:''},//报告数量变量
		BackFlag:0, // 拜访总览逐级返回标识
    filter_userId:null,//存储大数据session请求参数 
    encode:null,//存储大数据session请求参数 
    BackReload:_BackReload,
    getTargetMenus: _getTargetMenus,
    getTableData: _getTableData,
    trim: _trim,
    forceMatchModels: _forceMatchModels,
    toPlan: _toPlan,
    back: _back,
    tipMsg: _tipMsg,
    bigPicture: _bigPicture,
    refreshWinAfterWinName: _refreshWinAfterWinName,
    getTableClassData: _getTableClassData,
    backTopHead:_backTopHead,
    getRTWin: function getRTWin() {
      var aWin = ysp.runtime.Browser.activeBrowser.contentWindow;
      if (aWin) {
        return aWin.frameElement.ownerDocument.defaultView;
      }
      return;
    },
    pageId: _pageId,
    yearId: _yearId,
    saleTimeId: _saleTimeId,
    saleOrderId: _saleOrderId,
    //新添加的（计划达成总览）
    dateId: _dateId,
    /**
     * @description 登录状态管理器
     * @param currentStatus LOADING 数据加载中 NO_PRIVILEGE 无此权限  LOGINING 登录中  NETWORK_ERROR 网络异常
     */
    statusManager: {
      _currentStatus: 'LOADING',
      get currentStatus() {
        return this._currentStatus;
      },
      set currentStatus(currentStatus) {
        if (typeof currentStatus === 'string') this._currentStatus = currentStatus;else this._currentStatus = 0;
      }
    },
    getRootPath: function getRootPath(win) {
      var href = win.location.href;
      return href && href.match(/^http.*\//) && href.match(/^http.*\//)[0];
    },
    closeLoading: function closeLoading() {},
    // 把image 转换为 canvas对象  
    convertImageToCanvas: function convertImageToCanvas(image) {
      // 创建canvas DOM元素，并设置其宽高和图片一样   
      var canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      // 坐标(0,0) 表示从此处开始绘制，相当于偏移。  
      canvas.getContext("2d").drawImage(image, 0, 0);
      return canvas;
    },
    // 从 canvas 提取图片 image  
    convertCanvasToImage: function convertCanvasToImage(canvas) {
      // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
      return canvas.toDataURL("image/png");
    },
    dealImage: function dealImage(path, obj, callback) {
      var img = new Image();
      img.src = path;
      img.onload = function srcImg() {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || w / scale;
        var quality = 0.7; // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
          quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/png', quality);
        // 回调函数返回base64的值
        callback(base64);
      };
    },
    secondMenu: {
      menuMap: {},
      currentMenuId: "",
      init: function init() {
        this.menuMap = {
          visitLook: "拜访查看",
          AtReport: "@我的报告",
          personVisitAchieveTest: "人员拜访达成",
          productFrom: "产品上下架信息查询",
          goodsMessages: "分货查询",
          stockInquire: "库存查询",
          visitIndex: "拜访总览",
          saleAchievement: "销售业绩总览",
          achievement: "计划达成总览",
          saleReachMonth: "月度销售达成",
          saleReachYear: "年度销售达成",
          customerInformationFIll: "客户信息录入",
          HESInformationFill: "门店信息录入（HES）",
          storeList: "门店信息",
          clientList: '客户信息'
        };
        for (var key in this.menuMap) {
          if (this.menuMap.hasOwnProperty(key)) {
            this.menuMap[this.menuMap[key]] = key;
          }
        }
        this.menuNames = {
          visitManager: ["拜访总览", "拜访查看", "@我的报告"],
          dataPanel: ["库存查询", "分货查询", "产品上下架信息查询"],
          saleAchievement: ["销售业绩总览", "计划达成总览", "月度销售达成", "年度销售达成"],
          customerIn: ["客户信息录入", "门店信息录入（HES）"],
          clientStoreCard: ["客户信息", "门店信息"]
        };
      },
      getMenuNames: function getMenuNames(parentMenuType) {
        //parentMenuType 相当于是modelId'
        var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
        if (!secondMenuIframe) {
          return;
        }
        var doc = secondMenuIframe.document;
        var menu = doc.getElementById('menu');
        if (!menu) {
          return;
        }
        var as = menu.querySelectorAll('a');
        var content = [];
        [].forEach.call(as, function (item, index, self) {
          content.push(ysp.customHelper.trim(item.textContent));
        });
        var realMenuNames = [];
        if (!!parentMenuType) {
          var menuNames = this._getMenuNamesByMenuType(parentMenuType) || [];
          menuNames.forEach(function (item) {
            if (content.indexOf(item) != -1) realMenuNames.push(item);
          });
        }
        return parentMenuType ? realMenuNames : content;
      },

      _getMenuNamesByMenuType: function _getMenuNamesByMenuType(menuType) {
        return this.menuNames && this.menuNames[menuType];
      },
      _insureSecondMenuTimer: null,
      _toPlanByMenuName: function _toPlanByMenuName(menuName) {
        var planName = this.getPlanNameByMenuName(menuName);
        this.currentMenuId = planName;
        planName = planName === "saleReachMonth" || planName === "saleReachYear" ? "saleReach" : planName;
        var activeModel = ysp.runtime.Model.getActiveModel();
        var flag = false;
        //清除确定器
        clearTimeout(ysp.customHelper._insureSecondMenuTimer);
        function findSecondMenu() {
          var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          var doc = secondMenuIframe && secondMenuIframe.document;
          if (doc.readyState != "complete") {
            setTimeout(findSecondMenu.bind(this), 200);
            return;
          }
          var menu = doc && doc.getElementById('menu');
          var as = menu && menu.querySelectorAll('a') || [];
          var activeWin = ysp.runtime.Browser.activeBrowser.contentWindow;
          [].forEach.call(as, function (item, index, self) {
            var text = ysp.customHelper.trim(item.textContent);
            if (menuName === text) {
              if (activeWin && activeWin.frameElement.name !== 'firstLevelIframeContainer') {
                // var iframeParent = activeWin.frameElement.parentElement;
                // var iframeGrand = iframeParent.parentElement;
                // if (iframeGrand) {
                //   iframeGrand.removeChild(iframeParent);
                // }
                if (activeModel) {
                  var modelId = activeModel.id;
                  if (modelId != planName) {
                    activeWin.close();
                  }
                }
              };
              var win = item.ownerDocument.defaultView;
              if (item.href && item.href.indexOf('javascript') == -1) {
                if (activeModel) {
                  console.info('1::planName is : ' + planName + ' href is : ' + item.href);
                  var modelId = activeModel.id;
                  if (modelId == planName) {
                    //win[planName].location.href = item.href;
                    var currentWin = ysp.customHelper.getWinFromRTByName(planName);
                    currentWin && (currentWin.location.href = item.href);
                  } else {
                    win.open(item.href, planName);
                    ysp.runtime.Model.setForceMatchModels([planName]);
                    console.info('2::planName is : ' + planName + ' href is : ' + item.href);
                    //确保打开二级菜单有效
                    ysp.customHelper._insureSecondMenuTimer = setTimeout(function () {
                      if (!!!ysp.customHelper.getWinFromRTByName(planName)) findSecondMenu();
                    }, 2000);
                  }
                }

                flag = true;
              }
            }
          });
          if (!flag) {
            setTimeout(findSecondMenu.bind(this), 200);
            return;
          }
        }
        findSecondMenu();
      },
      toPlanByMenuName: function toPlanByMenuName(menuName, planName, parentMenuId) {
        var _this = this;
        var parentMenuType;

        if (typeof menuName !== 'string') {
          return;
        }
        if (parentMenuId) {
          //有parentMenuId 就代表入口是从首页面进入的，也即_yspNativeEventHandler
          switch (menuName) {
            case "库存查询":
              parentMenuType = "dataPanel";
              break;
            case "拜访总览":
              parentMenuType = "visitManager";
              break;
            case "销售业绩总览":
              parentMenuType = "achievement";
              break;
            case "客户信息录入":
              parentMenuType = "customerIn";
              break;
          }
          var callback = function callback(menuInfo) {
            if (menuInfo.indexOf(menuName) != -1) {
              _this._toPlanByMenuName(menuName);
            } else {
              //var menuInfo = JSON.parse(menuInfo);
              var menuNames = _this._getMenuNamesByMenuType(parentMenuType) || [];
              for (var i = 0; i < menuNames.length; i++) {
                if (menuInfo.indexOf(menuNames[i]) !== -1) {
                  _this._toPlanByMenuName(menuNames[i]);
                  break;
                }
              }
            }
          };
          _getThirdMenuList(parentMenuId, callback);
          // var flag = false;
          // function findSecondMenu() {
          //     var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          //     var doc = secondMenuIframe && secondMenuIframe.document;
          //     var menu = doc && doc.getElementById('menu');
          //     var as = (menu && menu.querySelectorAll('a')) || [];

          //     var activeWin = ysp.runtime.Browser.activeBrowser.contentWindow;
          //     var secondMenuNames = [];
          //     [].forEach.call(as, function(item, index, self) {
          //       var text = ysp.customHelper.trim(item.textContent);
          //       secondMenuNames.push(text);
          //     });
          //     if(as && as.length > 0 && as.length === secondMenuNames.length){
          //         flag = true;
          //         var dataPanelMenu = _this.menuNames[menuName];
          //         if(dataPanelMenu){
          //            for(var i=0;i<dataPanelMenu.length;i++){
          //               if(secondMenuNames.indexOf(dataPanelMenu[i]) != -1){
          //                 _this._toPlanByMenuName(dataPanelMenu[i]);
          //                 break;
          //               }
          //            }
          //         }
          //     }
          //     if (!flag) {
          //       setTimeout(findSecondMenu.bind(this), 200);
          //       return;
          //     }
          // }
          // findSecondMenu();
        } else {
          this._toPlanByMenuName(menuName);
        }
      },
      getPlanNameByMenuName: function getPlanNameByMenuName(menuName) {
        var planName;
        if (this.menuMap[menuName]) {
          return this.menuMap[menuName];
        }
        return;
      },
      getCurrentMenuName: function getCurrentMenuName() {
        var activeContext = ysp.runtime.Context.activeContext;
        if (activeContext) {
          var modelId = activeContext.model.id;
          if (this.menuMap[this.currentMenuId]) {
            return this.menuMap[this.currentMenuId];
          }
        }
      }
    },
    getWinFromRTByName: function getWinFromRTByName(name) {
      if (typeof name !== 'string') {
        console.error('getWinFromRTByName arg is not string,this type is ' + name);
      }
      var rtWin = this.getRTWin();
      if (rtWin) {
        return rtWin.frames[name];
      }
      return;
    },
    saleReachStamp: _saleReachStamp,
    getClientEntry: function getClientEntry() {
      return clientEntry;
    },
    getTopWin: function getTopWin() {
      if (topWin) {
        return topWin;
      }
    },
    getCurrentOpenedWins: function getCurrentOpenedWins() {
      return winContainer;
    },
    backHome: function backHome() {
      if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
        parent.EAPI.back();
      } else {
        ysp.appMain.back();
      }
    },
    openWindow: function openWindow(url, title) {
      if (typeof url !== "string") {
        return;
      }
      if (typeof title !== "string") {
        title = "新窗口";
      }
      title = this.trim(title);
      var flag = winContainer.some(function (winTitle) {
        if (winTitle == title) {
          return true;
        }
      });
      if (!flag) {
        winContainer.push(title);
      }
      var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
      // if (url.indexOf("192.168.1.174") != -1) {
      //   if (parent.EAPI.isIOS()) {
      //     ysp.appMain.openWindow(url);
      //   } else {
      //     return contentWin.open(url, title);
      //   }
      // } else {
      //   if (contentWin) {
      //     return contentWin.open(url, title);
      //   }
      // }
      if (contentWin) {
        if (title === 'firstLevelIframeContainer') {
          var firstLevelEl = contentWin.document.querySelector('iframe[name^="firstLevelIframeContainer"]');
          firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
        }
        return contentWin.open(url, title);
      }
    },
    formatStringToDate: function formatStringToDate(str) {
      var strArray = str.split('/');
      for (var i = 0; i < strArray.length; i++) {
        if (+strArray[i] < 10) {
          strArray[i] = '0' + strArray[i];
        }
      }
      return strArray.join('-');
    },
    getDataIndex: function getDataIndex(array, tag) {
      if (!array) {
        return;
      }
      if (!ysp.customHelper.isArray(array)) {
        console.log('getDataIndex接收了一个假的数组');
        return;
      }
      for (var i = 0; i < array.length; i++) {
        var arrayItem = array[i].trim();
        // if (arrayItem.indexOf(tag) != -1) {
        //   return i;
        // }
        if (arrayItem == tag) {
          return i;
        }
      }
    },
    getIndexInTitles: function getIndexInTitles(array, tag) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(tag) != -1) {
          return i;
        }
      }
    },
    isStringNull: function isStringNull(str) {
      if (str && str.trim().length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isArray: function isArray(array) {
      if (Object.prototype.toString.call(array).indexOf('Array') != -1) {
        return true;
      } else {
        return false;
      }
    },
    isAllNull: function isAllNull(array) {
      var tag = true;
      for (var i = 0; i < array.length; i++) {
        var item = ysp.customHelper.trim(array[i]);
        if (item != '') {
          tag = false;
        }
      }
      return tag;
    },

    //判断array.tag是存在一个值等于item
    isExist: function isExist(item, tag, array) {
      for (var i = 0; i < array.length; i++) {
        if (item == array[i][tag]) {
          return true;
        }
      }
      return false;
    },

    //数组去重
    unique: function unique(array) {
      var data = [];
      for (var i = 0; i < array.length; i++) {
        if (!this.isExist(array[i].title, 'title', data)) {
          data.push(array[i]);
        }
      }
      return data;
    },

    getTemplateSaleReachData: function getTemplateSaleReachData(elem, headerConfig, tags) {
      //[{lable:'',title:'',data:''}]
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      var weights = [];
      var titlesSort = [];
      for (var i = 0; i < titlesThs.length; i++) {
        var titleTh = titlesThs[i];
        titles.push(titleTh.textContent);
        weights.push(titleTh.textContent);
        var sortEl = titleTh.querySelector('div > span:first-child');
        if (sortEl && sortEl.style.display != 'none' && sortEl.classList.contains('s-ico')) {
          var ascEl = sortEl.querySelector('span[sort^="asc"]');
          var desEl = sortEl.querySelector('span[sort^="desc"]');
          var sortType = null;
          if (ascEl && ascEl.classList.contains('ui-disabled')) {
            sortType = 'desc';
          } else {
            sortType = 'asc';
          }
          titlesSort.push(sortType);
        } else {
          titlesSort.push(null);
        }
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbodys = elem.querySelectorAll('tbody');
      var counter = 1;
      var tbody = tbodys[0];
      var _this = this;
      while (tbody.textContent == '') {
        tbody = tbodys[counter];
        counter++;
      }
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      var headerTitles = [];
      var headerTitle = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          if (tds[j].getAttribute('aria-describedby') && tds[j].getAttribute('aria-describedby').indexOf('table_list_1_rank') != -1) {
            var isDrilled = false;
          } else {
            var isDrilled = !!tds[j].querySelector('a');
            if (!!tds[j].querySelector('a')) {
              var head = true;
            }
            if (!isDrilled) {
              var flag = !!tds[j].querySelector('span') && j >= 2;
              if (flag) {
                var index = null;
                if (flag && this.trim(tds[j].textContent) != '') {
                  isDrilled = true;
                  index = j;
                }
              }
            }
          }
          item.push({
            content: tds[j].textContent,
            isDrilled: isDrilled
          });
          if (!(headerTitles.length != 0) && isDrilled) {
            //headerTitle = titles[j];
            headerTitles.push(titles[j]);
            if (head) {
              var zou = true;
            }
          } else if (!head && isDrilled && index != null) {
            //headerTitle = weights[index];
            headerTitles.push(weights[index]);
          }
        }
        var ht = headerTitles[headerTitles.length - 1]; //获取最后一个title名称
        headerTitle.push(ht);
        content.push(item);
        if (!tbodyTrs[i].querySelector('a') && !tbodyTrs[i].querySelector('span') && tds.length > 7) {
          var Wu = true;
        }
      }
      for (var k = 1; k <= headerTitle.length; k++) {
        if (!zou && !headerTitle[k] && !Wu) {
          var isAllNull = function isAllNull(array) {
            var tag = true;
            for (var i = 0; i < array.length; i++) {
              var item = ysp.customHelper.trim(array[i].content);
              if (item != '') {
                tag = false;
              }
            }
            return tag;
          };
          //根据传入的tags的字段，挑选出相应的值，最后返回


          if (!headerTitle[k]) {
            headerTitle[k] = '销售人员';
          }
          var data = [];
          var exportTitles = [];
          var filterTitles = [];
          //for (var i = 0; i < content.length; i++) {
          for (var i = 1; i < headerTitle.length; i++) {
            if (headerTitle[i] && headerConfig) {
              headerConfig.title = headerTitle[i];
            }
            if (headerConfig.title) {
              if (tags.indexOf(headerConfig) == -1) {
                tags.unshift(headerConfig);
              }
            }
            var item = [];
            for (var j = 0; j < tags.length; j++) {
              //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
              var tag = tags[j];
              if (tag !== undefined && tag !== null) {
                var title = tag.title;
                title = title.trim();
                var index = ysp.customHelper.getDataIndex(titles, title);
                if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                  // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                  index = 9;
                  if (content[i][index] && content[i][index]['content'].trim() == '' && index != 9) {
                    index = ysp.customHelper.getDataIndex(titles, '销售人员');
                  }
                }
                filterTitles.push(titlesSort[index]);
                if (index != undefined) {
                  item.push({
                    label: tag.label,
                    content: content[i][index] && content[i][index]['content'],
                    isDrilled: content[i][index] && content[i][index]['isDrilled'],
                    title: title,
                    data: tag.data
                  });
                }
              } else {
                console.log('tag is null');
                continue;
              }
            }
            if (!isAllNull(item)) {
              if (exportTitles.length != item.length) {
                item.forEach(function (value, index) {
                  exportTitles.push({
                    label: value.label ? value.label : value.title,
                    title: value.title,
                    sort: filterTitles && filterTitles[index] || null
                  });
                });
              }
              data.push(item);
            }
          }
          //去重
          exportTitles = this.unique(exportTitles);
          return {
            content: data,
            titles: exportTitles
          };
        }
        if (!zou && headerTitle[k]) {
          var _isAllNull = function _isAllNull(array) {
            var tag = true;
            for (var i = 0; i < array.length; i++) {
              var item = ysp.customHelper.trim(array[i].content);
              if (item != '') {
                tag = false;
              }
            }
            return tag;
          };
          //根据传入的tags的字段，挑选出相应的值，最后返回


          if (!headerTitle[k]) {
            headerTitle[k] = '分公司';
          }
          var data = [];
          var exportTitles = [];
          var filterTitles = [];
          //for (var i = 0; i < content.length; i++) {
          for (var i = 1; i < headerTitle.length; i++) {
            if (headerTitle[i] && headerConfig) {
              headerConfig.title = headerTitle[i];
            }
            if (headerConfig.title) {
              if (tags.indexOf(headerConfig) == -1) {
                tags.unshift(headerConfig);
              }
            }
            var item = [];
            for (var j = 0; j < tags.length; j++) {
              //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
              var tag = tags[j];
              if (tag !== undefined && tag !== null) {
                var title = tag.title;
                title = title.trim();
                var index = ysp.customHelper.getDataIndex(titles, title);
                // if (index == 6 && titles[6].trim() == "机型编码") {
                //   index += 1;
                // }
                // if (index == 7 && titles[7].trim() == "机型编码") {
                //   index += 1;
                // }
                if (title == '机型名称' || title == '机型' || title == '产品系列') {
                  // if (title == '物料描述') {
                  //   index = content[i][index]['content'].trim() == "" ? (content[i][index - 2]['content'].trim() == "" ? (content[i][index - 4]['content'].trim() == "" ? (content[i][index - 6]['content'].trim() == "" ? (index - 7) : index - 6) : index - 4) : index - 2) : index;
                  //   index = index == 3 ? index - 1 : index;
                  // }
                  if (title == '产品系列' && !ysp.customHelper.getDataIndex(titles, '客户名称')) {
                    index = content[i][index]['content'].trim() == "" ? content[i][index + 2]['content'].trim() == "" ? content[i][index + 4]['content'].trim() == "" ? content[i][index - 2]['content'].trim() == "" ? index - 3 : index - 2 : index + 4 : index + 2 : index;
                  }
                  if (title == '产品系列' && ysp.customHelper.getDataIndex(titles, '客户名称')) {
                    index = 2;
                  }
                  if (title == '产品系列' && ysp.customHelper.getDataIndex(titles, '门店名称')) {
                    index = ysp.customHelper.getDataIndex(titles, '门店名称');
                    if (content[i][index]['content'].trim() == "") {
                      index = 2;
                    } else {
                      index = 3;
                    }
                  }
                  if (title == '机型' || title == '机型名称') {
                    index = content[i][index]['content'].trim() == "" ? content[i][index + 2]['content'].trim() == "" ? content[i][index - 2]['content'].trim() == "" ? content[i][index - 4]['content'].trim() == "" ? 2 : index - 4 : index - 2 : index + 2 : index;
                  }
                }
                if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                  // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                  index = 9;
                  if (content[i][index] && content[i][index]['content'].trim() == '' && index != 9) {
                    index = ysp.customHelper.getDataIndex(titles, '销售人员');
                  }
                }
                if (content[i][index] && content[i][index]['content'].trim() == '' && index == 12) {
                  // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                  index = 12;
                }
                filterTitles.push(titlesSort[index]);
                if (index != undefined) {
                  item.push({
                    label: tag.label,
                    content: content[i][index] && content[i][index]['content'],
                    isDrilled: content[i][index] && content[i][index]['isDrilled'],
                    title: title,
                    data: tag.data
                  });
                }
              } else {
                console.log('tag is null');
                continue;
              }
            }
            if (!_isAllNull(item)) {
              if (exportTitles.length != item.length) {
                item.forEach(function (value, index) {
                  exportTitles.push({
                    label: value.label ? value.label : value.title,
                    title: value.title,
                    sort: filterTitles && filterTitles[index] || null
                  });
                });
              }
              data.push(item);
            }
          }
          //去重
          exportTitles = this.unique(exportTitles);
          return {
            content: data,
            titles: exportTitles
          };
        }
        if (zou || Wu) {
          var _isAllNull2 = function _isAllNull2(array) {
            var tag = true;
            for (var i = 0; i < array.length; i++) {
              var item = ysp.customHelper.trim(array[i].content);
              if (item != '') {
                tag = false;
              }
            }
            return tag;
          };
          //根据传入的tags的字段，挑选出相应的值，最后返回


          if (!headerTitle[k] && zou == undefined) {
            headerTitle[k] = '项目';
          }
          if (!headerTitle[k]) {
            headerTitle[k] = '分公司';
          }

          var data = [];
          var exportTitles = [];
          var tit = false;
          if (headerTitle[k] == '项目' && Wu && ysp.customHelper.getDataIndex(titles, '项目')) {
            headerTitle[k] = '项目';
          } else if (headerTitle[k] == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && !ysp.customHelper.getDataIndex(titles, '客户名称') && !ysp.customHelper.getDataIndex(titles, '销售人员') && ysp.customHelper.getDataIndex(titles, '事业部')) {
            headerTitle[k] = '事业部';
          } else if (headerTitle[k] == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && !ysp.customHelper.getDataIndex(titles, '客户名称') && !ysp.customHelper.getDataIndex(titles, '销售人员') && !ysp.customHelper.getDataIndex(titles, '事业部')) {
            headerTitle[k] = '分公司';
          } else if (headerTitle[k] == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '客户名称')) {
            headerTitle[k] = '客户名称';
          } else if (headerTitle[k] == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '门店名称')) {
            headerTitle[k] = '门店名称';
          } else if (headerTitle[k] == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '销售人员')) {
            headerTitle[k] = '销售人员';
          } else {
            headerTitle[k] = headerTitle[k];
          }

          var filterTitles = [];
          //for (var i = 0; i < content.length; i++) {
          for (var i = 1; i < headerTitle.length; i++) {
            if (headerTitle[i] && headerConfig) {
              headerConfig.title = headerTitle[i];
            }
            if (headerConfig.title) {
              if (tags.indexOf(headerConfig) == -1) {
                tags.unshift(headerConfig);
              }
            }
            var item = [];
            for (var j = 0; j < tags.length; j++) {
              //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
              var tag = tags[j];
              if (tag !== undefined && tag !== null) {
                var title = tag.title;
                title = title.trim();
                var index = ysp.customHelper.getDataIndex(titles, title);
                if (title == '客户名称') {
                  index += content[i][index]['content'].trim() == '' ? 1 : 0;
                }
                if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                  // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                  index = 9;
                }
                if (content[i][index] && content[i][index]['content'].trim() == '' && index == 12) {
                  // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                  index = 12;
                }
                filterTitles.push(titlesSort[index]);
                if (index != undefined) {
                  item.push({
                    label: tag.label,
                    content: content[i][index] && content[i][index]['content'],
                    isDrilled: content[i][index] && content[i][index]['isDrilled'],
                    title: title,
                    data: tag.data
                  });
                }
              } else {
                console.log('tag is null');
                continue;
              }
            }
            if (!_isAllNull2(item)) {
              if (exportTitles.length != item.length) {
                item.forEach(function (value, index) {
                  exportTitles.push({
                    label: value.label ? value.label : value.title,
                    title: value.title,
                    sort: filterTitles && filterTitles[index] || null
                  });
                });
              }
              data.push(item);
            }
          }
          //去重
          exportTitles = this.unique(exportTitles);
          return {
            content: data,
            titles: exportTitles
          };
        }
      }
    },
    getTemplateData: function getTemplateData(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    getSaleData: function getSaleData(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      var con = [];
      var num = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          num.push(i);
          con.push(item);
        }
      }
      data.push(con, num);
      return data;
    },
    /*用于筛选客户其他信息采集里面在手机端产生的对适配无用的td
    @param fakeTds：原网页采集过来的包含无用td的数组 -zyt
    */
    filterTd: function filterTd(fakeTds) {
      var tds = [];
      for (var i = 0; i < fakeTds.length; i++) {
        if (!fakeTds[i].querySelector('input[type="checkbox"]')) {
          tds.push(fakeTds[i]);
        }
      }
      return tds;
    },
    //信息协同部分表格采集函数模板
    getDataInInformation: function getDataInInformation(elem, tags) {
      if (!elem) {
        return;
      }
      //采集头部table字段
      var head = elem.querySelector('.l-grid-header');
      var headTable = head.querySelector('table');
      if (!headTable) {
        return [];
      }
      var headTds = headTable.querySelectorAll('tbody tr td');
      var titles = [];
      for (var i = 0; i < headTds.length; i++) {
        titles.push(headTds[i].textContent);
      }
      //采集body部分数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var body = elem.querySelector('.l-grid-body');
      var bodyTable = body.querySelector('table');
      if (!bodyTable) {
        return [];
      }
      var bodyTrs = bodyTable.querySelectorAll('tbody tr');
      var content = [];
      for (var i = 0; i < bodyTrs.length; i++) {
        var item = [];
        if (!bodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = bodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据tags返回相应的数据
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            // if (tag == '客户') {
            //   index += 1;
            // }
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){
     }
    */
    //重新过滤url,由于url在ios下可能出现某个参数重复很多次的情况,暂时没有定位问题出现的原因,由于时间原因,这里直接将重复的参数删除,只保留一个,如果url没有出现重复参数的情况则不做任何处理.
    filterUrl: function filterUrl(url) {
      var firstSite = url.indexOf('?');
      var startString = url.slice(0, firstSite + 1);
      var cutUrl = url.slice(firstSite + 1);
      var args = ysp.customHelper.uniqueString(cutUrl.split('&'));
      var argsString = args.join('&');
      var filterUrl = startString + argsString;
      return filterUrl;
    },
    uniqueString: function uniqueString(array) {
      var data = [];
      for (var i = 0, len = array.length; i < len; i++) {
        if (data.join('').indexOf(array[i]) == -1) {
          data.push(array[i]);
        }
      }
      return data;
    },
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function onTargetLoad(aWin, doc) {
      ysp.customHelper.TimeScope.timeScope(document);
      if (aWin) {
        if (aWin.location.href == 'http://192.168.1.227/pttlCrm/res/index.html') {
          //在登录成功时,请求PC端菜单接口,获取全部菜单列表  -- 新平台做临时调试使用 .
          getAllMenu(aWin);
          // var _this = this;
          // var xhr = new aWin.XMLHttpRequest();
          // xhr.open('GET', 'http://192.168.1.227/pttlCrm/login/addMobileLoginLog', true);
          // xhr.send();
        }
      }
    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function beforeTargetLoad(aWin, doc) {
      ysp.customHelper.TimeScope.startTime();
      if (aWin) {
        if (aWin.localStorage && aWin.localStorage.getItem('menuId') != null) {
          aWin.localStorage.setItem('menuId', '');
        }
        if(aWin.localStorage && aWin.localStorage.getItem('layerLoading') == null ){
          ysp.appMain.hideLoading();
        }
    		if(aWin.localStorage && aWin.localStorage.getItem('layerLoading') != null ){
        	ysp.appMain.hideLoading();
        }
    	}
      //调试IOS登录框问题 - 地址变成特殊地址 
      if(aWin.location.href.indexOf('ysp_mobile')!==-1 && top.EAPI.isIOS()){
        aWin.location.href = 'http://192.168.1.227/pttlCrm/login';
        top.EAPI.postMessageToNative('IOSLoginIn', '');
        ysp.appMain.showLoading();
      }
      if(aWin.location.href.indexOf('ysp_mobile') !==-1 && top.EAPI.isAndroid()){
        top.yspCheckIn.crmLogin();
      }
      if(aWin.location.href.indexOf('login') !==-1 && top.EAPI.isIOS()){
        topWin.currentWindow = aWin;
        top.EAPI.postMessageToNative('IOSLoginIn', '');
      }
      if(aWin.location.href.indexOf('login') !==-1 && top.EAPI.isAndroid()){
        top.yspCheckIn.crmLogin();
      }
      if (aWin.location.href == 'http://192.168.1.227/pttlCrm/res/index.html') {
          //在登录成功时,请求菜单接口,获取全部菜单列表
          getAllMenu(aWin);
      }
      //为了使移动端的日期方法toLocaleDateString和移动端保持一致
      aWin.Date.prototype.toLocaleDateString = function () {
        var date = this;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date = date.getDate();
        return year + '/' + month + '/' + date;
      };
      //2.3.3 运行时 当主iframe.name=='sourcePageFrame'  使页面匹配login
      // if (aWin.frameElement && aWin.frameElement.name == "sourcePageFrame" && aWin.frameElement.dataset.browser) {
      //   topWin = aWin;
      //   if (aWin.location.href.indexOf('login') !== -1) {
      //     ysp.runtime.Model.setForceMatchModels(['login']);
      //   }
      // }
      //2.7.0及以上 运行时 当主iframe.name=='browserFrame2'  使页面匹配login
      // if(aWin.location.href.indexOf('ysp_mobile') !== -1){
      //   aWin.location.href = 'http://192.168.1.227/pttlCrm/login?clientType=ysp'
      // }
      if (aWin.frameElement && aWin.frameElement.name == "browserFrame2" && aWin.frameElement.dataset.browser) {
        topWin = aWin;
        if (aWin.location.href.indexOf('login') !== -1) {
          ysp.runtime.Model.setForceMatchModels(['login']);
          //console.log('打印几次,+++++++')
        }
      }
      aWin.Object.defineProperty(aWin, 'getTopWin', {
        configurable: false,
        writable: false,
        value: function value() {
          if (topWin) {
            return topWin;
          } else {
            console.error('无top，是有问题的');
          }
        }
      });
      aWin.addEventListener('DOMContentLoaded', function () {
        window.onerror = function(msg,url,line){
          var DATA = {'log':{
                        'source':'VCRM',
                        'type':'错误日志',
                        'loginName':LOGINNAME,
                        'email':'',
                        'model':'',
            						'loginTime':LOGINTIME,
                        'occurTime':new Date().getTime(),
                        'timeUsed':LOGINUSED,
                        'failedReason':'Error:'+msg+' | Url:'+url+' | Line:'+line,
                        'uploadFailedReason':''
          						 }
                     }
					if(top.EAPI.isAndroid()){
            top.yspCheckIn.sendLog(JSON.stringify(DATA))
          }else{
            top.EAPI.postMessageToNative('YSPLOG',JSON.stringify(DATA));
          }
        }
        if (aWin.location.href.indexOf('index.html') !== -1) {
          var actionEvent = '{"target":"null","data":"closePreLoading"}';
          //关闭主webview的loading状态
          var parent = aWin.frameElement.ownerDocument.defaultView;
          //parent && parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
          //sessionStorage.setItem('closePreLoading-domcontentloaded', true);
        }
        aWin.createIframe = function createIframe(name, targetUrl, mount, data) {
          var childWin = ysp.customHelper.openWindow(targetUrl, name);
          var flag = false;

          function postMsg(data) {
            if (childWin.receiveMsg) {
              childWin.receiveMsg(data);
              flag = true;
            }
            if (!flag) {
              setTimeout(postMsg.bind(this, data), 200);
            }
          }
          if (data) {
            postMsg(data);
          }
        };
        //观察页面是否等待状态,选择合适的showLoading和hideLoading
        if (aWin.location.href.indexOf('index.html') !== -1) {
          try {
            var MutationObserver = aWin.MutationObserver || aWin.WebKitMutationObserver || aWin.MozMutationObserver;
            var mutationObserverSupport = !!MutationObserver;
            var callback = function callback(records) {
              var someFlag = records.some(function (record) {
                if (record.type == "attributes") {
                  console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
                  if (record.target.tagName.toLowerCase() === 'html' && record.target.classList && record.target.classList.contains('loading')) {
                    ysp.appMain.showLoading();
                  } else {
                    ysp.appMain.hideLoading();
                  }
                }
              });
            };
            var mo = new MutationObserver(callback);
            var option = {
              'attributes': true,
              'childList': true
            };
            var docEl = doc.documentElement;
            if (docEl) {
              mo.observe(docEl, option);
            }
          } catch (e) {
            console.log("mutationobserver is not supported! the compatibility starting ...");
          }
        }
      }, false);
      //日历组件，Date原型方法
      aWin.Date.prototype.isLeapYear = function () {
        var year = this.getFullYear();
        return 0 == year % 4 && (year % 100 != 0 || year % 400 == 0);
      };
      //.判断当前月份有多少天
      aWin.Date.prototype.getDaysOfMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
      };
      // . 比较日期
      aWin.Date.prototype.dateCompare = function (date) {
        if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) != "object" || !/Date/.test(date.constructor)) thrownewError(-1, "dateCompare(date)的date参数为Date类型.");
        var d = this.getTime() - date.getTime();
        return d > 0 ? 1 : d == 0 ? 0 : -1;
      };
      //判断studio和手机上body的显示
      var doc = window.document;
      var yspStlyeEl = doc.createElement('style');
      yspStlyeEl.setAttribute("type", "text/css");
      var cssString = "@media screen and (max-width:960px){body{height: auto;overflow: initial}}";
      var cssText = doc.createTextNode(cssString);
      yspStlyeEl.appendChild(cssText);
      doc.head.appendChild(yspStlyeEl);
    },
    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function needToLogin(doc) {
      return false;
    },
    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function isLoginSuccess(doc) {
      return false;
    }
  });
  //二级菜单需要初始化
  ysp.customHelper.secondMenu.init();
  /*调用场景：该方法用于采集表格数据*/
  function _getTableData(elem, titleArgs) {
    if (!elem) {
      return;
    }
    //获取头部标题，存入数组，包括空标签的内容
    if (!elem.querySelector('thead')) {
      console.warn('_getTableData没有找到table thead');
      return null;
    }
    var thead = elem.querySelector('thead');
    if (!thead.querySelectorAll('th')) {
      console.warn('_getTableData thead里面竟然没有th');
      return null;
    }
    var titlesThs = thead.querySelectorAll('th');
    if (titlesThs.length == 0) {
      var titlesThs = thead.querySelectorAll("td");
    }
    var titles = [];
    var titlesIndexs = [];
    for (var i = 0; i < titlesThs.length; i++) {
      var titleValue = _trim(titlesThs[i].textContent);
      var someCallback = function someCallback(value, index, array) {
        if (value == titleValue) {
          return true;
        }
      };
      var flag = titleArgs.some(someCallback);
      if (flag) {
        titles.push(titleValue);
        titlesIndexs.push(i);
      }
    }
    if (titlesIndexs.length == 0) {
      // console.warn('_getTableData没有找到相对应的titles');
      return null;
    }
    //获取table的body数据
    if (!elem.querySelector('tbody')) {
      console.warn('_getTableData没有找到table tbody');
      return null;
    }
    var tbody = elem.querySelector('tbody');
    if (!tbody.querySelectorAll('tr')) {
      console.warn('_getTableData tbody里面竟然没有tr');
      return null;
    }
    var tbodyTrs = tbody.querySelectorAll('tr');
    var content = [];
    for (var i = 0; i < tbodyTrs.length; i++) {
      var item = [];
      if (!tbodyTrs[i].querySelectorAll('td')) {
        console.warn('_getTableData 当前tr没有td');
        continue;
      }
      var tds = tbodyTrs[i].querySelectorAll('td');
      for (var j = 0; j < tds.length; j++) {
        var someCallback = function someCallback(value, index, array) {
          if (value == j) {
            return true;
          }
        };
        var flag = titlesIndexs.some(someCallback);
        if (flag) {
          //zyt
          if (tds[j].querySelectorAll("input[type='text']").length != 0) {
            item.push(tds[j].querySelector("input[type='text']").value);
          } else if (tds[j].querySelector("select")) {
            var optionarry = [];
            var options = tds[j].querySelector("select").querySelectorAll("option");
            for (var v = 0; v < options.length; v++) {
              optionarry.push(options[v].textContent);
            }
            item.push(optionarry);
          } else {
            item.push(tds[j].textContent.trim());
          }
        }
      }
      content.push(item);
    }
    return {
      titles: titles,
      content: content
    };
  }
  /*调用场景：字符串前后需要去除空格时调用*/
  function _trim(str) {
    return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
  }
  /*调用场景：点击回到页面顶部.将scrollTop 置为0 */
  function _backTopHead(elem){
    if(elem.nodeType != 1){
      console.error('当前elem不是正确元素,赶紧查一下的!!!')
      return ;
    }
      elem.scrollTop = 0;
  }
  /*调用场景：页面返回时使用*/
  function _back(type) {
    if (typeof type === 'string') {
      if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
        ysp.appMain.back();
      } else {
        var actionEvent = '{"target":"null","data":"' + type + '"}';
        window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
        setTimeout(function () {
          window.parent.EAPI.back();
        }, 1000);
      }
    } else {
      ysp.appMain.back();
    }
  }
  /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
  function _forceMatchModels(args) {
    if (typeof args === 'string') {
      ysp.runtime.Model.setForceMatchModels([args]);
    } else if (args instanceof Array) {
      ysp.runtime.Model.setForceMatchModels(args);
    } else {
      console.error('forceMatchModels 参数类型不正确');
    }
  }
  /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
  function _toPlan(elem, operation, planName) {
    if (typeof planName != 'string') {
      console.error('_toPlan参赛planName类型不正确');
    }
    var aEls = elem.querySelectorAll('ul > li > a');
    [].forEach.call(aEls, function (item, index) {
      if (item.textContent == operation) {
        item.click();
        _forceMatchModels(planName);
      }
    });
  }
  //关闭首页loading
  var closeCount = 0;

  function closePreLoading() {
    var actionEvent = '{"target":"null","data":"closePreLoading"}';
    //关闭主webview的loading状态
    parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
    sessionStorage.setItem('closePreLoading-rt' + closeCount, true);
    closeCount++;
    if (closeCount < 10) {
      //关闭10次，确保真正关闭
      setTimeout(closePreLoading.bind(this), 1500);
    }
  }
  closePreLoading();

  //调用场景:当table表格结构中没有THead时调用.用于取表格内的数据
  function _getTableClassData(elem, tags) {
    if (!elem) {
      return;
    }
    //采集头部table字段
    var head = elem.querySelector('.l-grid-header');
    var headTable = head.querySelector('table');
    if (!headTable) {
      return [];
    }
    var headTds = headTable.querySelectorAll('tbody tr td');
    var titles = [];
    for (var i = 0; i < headTds.length; i++) {
      titles.push(headTds[i].textContent);
    }
    //采集body部分数据
    if (!elem.querySelector('tbody')) {
      console.warn('getTemplateData没有找到table tbody');
      return [];
    }
    var body = elem.querySelector('.l-grid-body');
    var bodyTable = body.querySelector('table');
    if (!bodyTable) {
      return [];
    }
    var bodyTrs = bodyTable.querySelectorAll('tbody tr');
    var content = [];
    for (var i = 0; i < bodyTrs.length; i++) {
      var item = [];
      if (!bodyTrs[i].querySelectorAll('td')) {
        console.warn('getTemplateData 当前tr没有td');
        continue;
      }
      var tds = bodyTrs[i].querySelectorAll('td');
      for (var j = 0; j < tds.length; j++) {
        item.push(tds[j].textContent);
      }
      content.push(item);
    }
    //根据tags返回相应的数据
    var data = [];
    for (var i = 0; i < content.length; i++) {
      var item = [];
      for (var j = 0; j < tags.length; j++) {
        //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
        var tag = tags[j];
        if (tag !== undefined && tag !== null) {
          tag = tag.trim();
          var index = ysp.customHelper.getDataIndex(titles, tag);
          if (tag == '客户') {
            index += 1;
          }
          item.push(content[i][index]);
        } else {
          console.log('tag is null');
          continue;
        }
      }
      if (!ysp.customHelper.isAllNull(item)) {
        data.push(item);
      }
    }
    return data;
  }

  function _pageId() {
    var id = ysp.runtime.Context.activeContext.id;
    win.beforePageId = id;
    return win.beforePageId;
  }
  function _yearId(id) {
    win.selectId = id;
    return win.selectId;
  }
  //销售业绩总览时间下拉选项传值。
  function _saleTimeId(id) {
    win.timeId = id;
    return win.timeId;
  }
  //销售业绩总览订单逻辑下拉选项传值。
  function _saleOrderId(id) {
    win.orderId = id;
    return win.orderId;
  }
  //新曾（计划达成总览）
  function _dateId(id) {
    win.dateId = id;
    return win.dateId;
  }
})(window, ysp);