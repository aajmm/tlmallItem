window.BMap_loadScriptTime = (new Date).getTime();
window.setupWebViewJavascriptBridge = function(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = doc.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    window.documentElement.appendChild(WVJBIframe);
    window(function() {
      doc.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
  
  window.locationBegin = function() {
    // 判断是否是window平台，直接给客户端传入信息即可。

    if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
    // 判断是否是Android平台
    if (window.yspCheckIn) {
        window.yspCheckIn.locationBegin();
    } else {  // 是iOS平台
        window.setupWebViewJavascriptBridge(function(enterplorer) {
            enterplorer.callHandler('locationBegin', function responseCallback() {});
        });
    }
  }

  window.setLocation = null;