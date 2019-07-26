(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_vwVCIl: function (elem) {},
    doAction_uiControl0_wCm6bV: function (data, elem) {},
    getTemplate_uiControl0_wCm6bV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='login-header'>\n        <i className='login-header-close'></i>\n        <h3>\u767B\u5F55</h3>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'login-header' },\n      React.createElement('i', { className: 'login-header-close' }),\n      React.createElement(\n        'h3',\n        null,\n        '\\u767B\\u5F55'\n      )\n    );\n  }\n});";
    },
    getData_control1_zswafT: function (elem) {},
    doAction_uiControl1_52DDrf: function (data, elem) {},
    getTemplate_uiControl1_52DDrf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='login-banner'>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement('div', { className: 'login-banner' });\n  }\n});";
    },
    getData_control2_R8kIwU: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('#captchaCode_img') && elem.querySelector('#captchaCode_img').getAttribute('src') || elem.querySelector('#verifyImg') && elem.querySelector('#verifyImg').getAttribute('src');
    },
    doAction_uiControl2_9GZSwX: function (data, elem) {
      if (data.eventType == 'enterUsername') {
        elem.querySelector('#username').value = data.dataCustom; // elem.querySelector('#username').dispatchEvent(new Event('change'));
        elem.querySelector('#username').blur();
      } else if (data.eventType == 'enterPassword') {
        elem.querySelector('#password').value = data.dataCustom; // elem.querySelector('#password').change();
        elem.querySelector('#password').blur();
      } else if (data.eventType == 'enterCode') {
        elem.querySelector('#captchaCode').value = data.dataCustom; // elem.querySelector('#captchaCode').change();
        elem.querySelector('#captchaCode').blur();
      } else if (data.eventType == 'changeCode') {
        elem.querySelectorAll('a')[0].click();
      } else if (data.eventType == 'forgotPassword') {
        console.log(elem.querySelector('.dl_bottom').querySelector('.r').querySelectorAll('a')[0]);elem.querySelector('.dl_bottom').querySelector('.r').querySelectorAll('a')[0].click();
      } else if (data.eventType == 'loginNow') {
        elem.querySelector('#loginButton').click();
      } else if (data.eventType == 'registerAccount') {
        elem.querySelector('.dl_bottom').querySelector('.l').querySelectorAll('a')[0].click();
      }
    },
    getTemplate_uiControl2_9GZSwX: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  enterUsername=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"enterUsername\"\n      })\n    }\n  }\n  enterPassword=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"enterPassword\"\n      })\n    }\n  }\n\tenterCode=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"enterCode\"\n      })\n    }\n  }\n  changeCode=(e)=>{\n     var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"changeCode\"\n      })\n    }\n  }\n  forgotPassword=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"forgotPassword\"\n      })\n    }\n  }\n  loginNow=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"loginNow\"\n      })\n    }\n    \n  }\n  registerAccount=(e)=>{\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"registerAccount\"\n      })\n    }\n  }\n  render() {\n    return (\n      <div className='login-form'>\n        <p><i className='login-form-username'></i><input type='text' placeholder='\u7528\u6237\u540D' onBlur={this.enterUsername}/></p>\n        <p><i className='login-form-password'></i><input type='text' placeholder='\u5BC6\u7801' onBlur={this.enterPassword}/></p>\n        <p><i className='login-form-code-icon'></i><input type='text' placeholder='\u9A8C\u8BC1\u7801' onChange={this.enterCode}/><img src={'http://192.168.220.23'+this.props.customData} className='login-form-code-img' onClick={this.changeCode}/></p>\n        <p><span onClick={this.forgotPassword}>\u5FD8\u8BB0\u5BC6\u7801\uFF1F</span></p>\n        <p><button onClick={this.loginNow}>\u7ACB\u5373\u767B\u5F55</button></p>\n        <p><button onClick={this.registerAccount}>\u6CE8\u518C\u8D26\u53F7</button></p>\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.enterUsername = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"enterUsername\"\n        });\n      }\n    };\n\n    _this.enterPassword = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"enterPassword\"\n        });\n      }\n    };\n\n    _this.enterCode = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"enterCode\"\n        });\n      }\n    };\n\n    _this.changeCode = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"changeCode\"\n        });\n      }\n    };\n\n    _this.forgotPassword = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"forgotPassword\"\n        });\n      }\n    };\n\n    _this.loginNow = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"loginNow\"\n        });\n      }\n    };\n\n    _this.registerAccount = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"registerAccount\"\n        });\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"login-form\" },\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\"i\", { className: \"login-form-username\" }),\n          React.createElement(\"input\", { type: \"text\", placeholder: \"\\u7528\\u6237\\u540D\", onBlur: this.enterUsername })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\"i\", { className: \"login-form-password\" }),\n          React.createElement(\"input\", { type: \"text\", placeholder: \"\\u5BC6\\u7801\", onBlur: this.enterPassword })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\"i\", { className: \"login-form-code-icon\" }),\n          React.createElement(\"input\", { type: \"text\", placeholder: \"\\u9A8C\\u8BC1\\u7801\", onChange: this.enterCode }),\n          React.createElement(\"img\", { src: 'http://192.168.220.23' + this.props.customData, className: \"login-form-code-img\", onClick: this.changeCode })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            { onClick: this.forgotPassword },\n            \"\\u5FD8\\u8BB0\\u5BC6\\u7801\\uFF1F\"\n          )\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"button\",\n            { onClick: this.loginNow },\n            \"\\u7ACB\\u5373\\u767B\\u5F55\"\n          )\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"button\",\n            { onClick: this.registerAccount },\n            \"\\u6CE8\\u518C\\u8D26\\u53F7\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control3_cfaivg: function (elem) {
      if (!elem) {
        return;
      }var msg = elem.querySelector('#error_msg').textContent;return msg ? { 'flag': true, 'data': msg } : false;
    },
    doAction_uiControl3_V3UQWw: function (data, elem) {
      if (data.eventType == 'clean') {
        elem.style.display = 'none';elem.querySelector('#error_msg').textContent = '';
      }
    },
    getTemplate_uiControl3_V3UQWw: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  cleanDialog(){\n    var _this = this;\n    setTimeout(function(){\n      var handler=_this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:\"clean\",\n        })\n      }\n  \t},1500);\n  }\n  render() {\n    this.props.customData && this.props.customData.flag && this.cleanDialog()\n    return (\n      <div>\n        {this.props.customData.flag?\n          <div className='login-form-mask'>{this.props.customData.data}</div>\n      :null}</div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \"cleanDialog\",\n    value: function cleanDialog() {\n      var _this = this;\n      setTimeout(function () {\n        var handler = _this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \"clean\"\n          });\n        }\n      }, 1500);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.props.customData && this.props.customData.flag && this.cleanDialog();\n      return React.createElement(\n        \"div\",\n        null,\n        this.props.customData.flag ? React.createElement(\n          \"div\",\n          { className: \"login-form-mask\" },\n          this.props.customData.data\n        ) : null\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    }
  }, "login");
})(window, ysp);