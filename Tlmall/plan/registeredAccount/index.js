(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10_eq66PD: function (elem) {},
    doAction_uiControl10_i7M9b4: function (data, elem) {},
    getTemplate_uiControl10_i7M9b4: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <Header title=\"\u6CE8\u518C\u6211\u7684\u8D26\u53F7\">\n  <HeaderLeft>\n    <i className='registered-account-goback'  onClick={back}></i>\n  </HeaderLeft>\n  <HeaderRight>\n    <span className='registered-account-gonext'>\u4E0B\u4E00\u6B65</span>\n  </HeaderRight>\n</Header>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { title: '\\u6CE8\\u518C\\u6211\\u7684\\u8D26\\u53F7' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement('i', { className: 'registered-account-goback', onClick: _appRenderer.back })\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            React.createElement(\n              'span',\n              { className: 'registered-account-gonext' },\n              '\\u4E0B\\u4E00\\u6B65'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control11_mXMeeq: function (elem) {
      var data = [];data.push(elem.querySelector('h4').textContent);var ipts = elem.querySelectorAll('input');var arr = [];for (var i = 0; i < ipts.length; i++) {
        arr.push(ipts[i].getAttribute('placeholder'));
      }arr.pop();arr.pop();arr.splice(5, 0, '请输入企业地址');arr.splice(6, 1, '请输入手机号');arr.splice(7, 1);arr.splice(7, 1);arr.splice(8, 1);arr.splice(8, 1);var arr1 = [];arr1.push(arr.splice(0, 1).join(''));arr1.push(arr.splice(0, 1).join(''));var newArr = [];newArr.push(arr.splice(4, 1).join(''));newArr.push(arr.splice(4, 1).join(''));data.push(arr1);data.push(arr);data.push(newArr);data.push('请输入电子邮箱');data.push(elem.querySelector('.zc_oblock').querySelector('label').textContent);data.push(elem.querySelector('.zc_oblock').querySelector('a').textContent);return data;
    },
    doAction_uiControl11_19H7Ro: function (data, elem) {
      if (data.eventType == 'userName') {
        elem.querySelector('#userName').value = data.dataCustom;elem.querySelector('#userName').blur();
      } else if (data.eventType == 'password') {
        elem.querySelector('#password').value = data.dataCustom;elem.querySelector('#password').blur();
      } else if (data.eventType == 'nextPwd') {
        elem.querySelector('#confirmPassword').value = data.dataCustom;elem.querySelector('#confirmPassword').blur();
      } else if (data.eventType == 'contactPerson') {
        elem.querySelector('#contactPerson').value = data.dataCustom;elem.querySelector('#contactPerson').blur();
      } else if (data.eventType == 'companyName') {
        elem.querySelector('#companyName').value = data.dataCustom;elem.querySelector('#companyName').blur();
      } else if (data.eventType == 'companyName') {
        elem.querySelector('#companyName').value = data.dataCustom;elem.querySelector('#companyName').blur();
      } else if (data.eventType == 'province') {
        elem.querySelector('#province').value = data.dataCustom;elem.querySelector('#province').blur();
      } else if (data.eventType == 'phoneNumber') {
        elem.querySelector('#phoneNumber').value = data.dataCustom;elem.querySelector('#phoneNumber').blur();
      } else if (data.eventType == 'getCode') {
        elem.querySelector('#reg-timer').click();
      } else if (data.eventType == 'nowVerify') {
        elem.querySelector('#immediately_verify').click();
      } else if (data.eventType == 'mobileCode') {
        elem.querySelector('#mobileCode').value = data.dataCustom;elem.querySelector('#mobileCode').blur();
      } else if (data.eventType == 'email') {
        elem.querySelector('#email').value = data.dataCustom;elem.querySelector('#email').blur();
      } else if (data.eventType == 'choose') {
        elem.querySelector('#agreement').value = data.dataCustom;elem.querySelector('#agreement').blur();
      } else if (data.eventType == 'registrationProtocol') {
        elem.querySelector('.alink_line').click();
      } else if (data.eventType == 'nowRegister') {
        elem.querySelector('.zc_btn_big').click();
      }
    },
    getTemplate_uiControl11_19H7Ro: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  userName=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"userName\"\n      })\n    }\n  }\n  password=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"password\"\n      })\n    }\n  }\n  nextPwd=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"nextPwd\"\n      })\n    }\n  }\n  contactPerson=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"contactPerson\"\n      })\n    }\n  }\n  companyName=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"companyName\"\n      })\n    }\n  }\n  province=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"province\"\n      })\n    }\n  }\n  phoneNumber=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"phoneNumber\"\n      })\n    }\n  }\n  getCode=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"getCode\"\n      })\n    }\n  }\n  mobileCode=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"mobileCode\"\n      })\n    }\n  }\n  nowVerify=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"nowVerify\"\n      })\n    }\n  }\n  email=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"email\"\n      })\n    }\n  }\n  choose=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data: target.value,\n        eventType:\"choose\"\n      })\n    }\n  }\n  registrationProtocol=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"registrationProtocol\"\n      })\n    }\n  }\n  nowRegister=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"nowRegister\"\n      })\n    }\n  }\n  render() {\n    var data=this.props.customData;\n    return (\n      <div className='registered-account-form'>\n        <h3>{data[0]}</h3>\n        <div className='registered-account-user'>\n          <p><span>*</span><input type='text' placeholder={data[1][0]} onBlur={this.userName}/></p>\n          <p>\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u4E0D\u5141\u8BB8\u5305\u542B\u4E2D\u6587\uFF0C\u57288-16\u4E2A\u5B57\u7B26\u5185</p>\n        </div>\n        <div className='registered-account-pwd'>\n          <p><span>*</span><input type='text' placeholder={data[1][1]} onBlur={this.password}/></p>\n          <p>\u4E0D\u53EF\u4E0E\u8D26\u6237\u540D\u76F8\u540C\uFF0C\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u4E0D\u5141\u8BB8\u5305\u542B\u4E2D\u6587\uFF0C\u57288-16\u4E2A\u5B57\u7B26\u5185</p>\n        </div>\n        <p><span>*</span><input type='text' placeholder={data[2][0]} onBlur={this.nextPwd}/></p>\n        <p><span>*</span><input type='text' placeholder={data[2][1]} onBlur={this.contactPerson}/></p>\n        <p><span>*</span><input type='text' placeholder={data[2][2]} onBlur={this.companyName}/></p>\n        <p><span>*</span><input type='text' placeholder={data[2][3]} onBlur={this.province}/></p>\n          <p><span>*</span><input type='text' placeholder={data[3][0]} onBlur={this.phoneNumber}/><button onClick={this.getCode}>\u83B7\u53D6\u9A8C\u8BC1\u7801</button></p>\n\t\t\t\t\t<p><span>*</span><input type='text' placeholder={data[3][1]} onBlur={this.mobileCode}/><button onClick={this.nowVerify}>\u7ACB\u5373\u9A8C\u8BC1</button></p>\n        <p><span>*</span><input type='text' placeholder={data[4]} onBlur={this.email}/></p>\n        <div className='registered-account-agree'><p><input type='checkbox' onChange={this.choose}/><label>{data[5]}<b onClick={this.registrationProtocol}>{data[6]}</b></label></p></div>\n        <div className='registered-account-nowregister'><button onClick={this.nowRegister}>\u7ACB\u5373\u6CE8\u518C</button></div>\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.userName = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"userName\"\n        });\n      }\n    };\n\n    _this.password = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"password\"\n        });\n      }\n    };\n\n    _this.nextPwd = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"nextPwd\"\n        });\n      }\n    };\n\n    _this.contactPerson = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"contactPerson\"\n        });\n      }\n    };\n\n    _this.companyName = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"companyName\"\n        });\n      }\n    };\n\n    _this.province = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"province\"\n        });\n      }\n    };\n\n    _this.phoneNumber = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"phoneNumber\"\n        });\n      }\n    };\n\n    _this.getCode = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"getCode\"\n        });\n      }\n    };\n\n    _this.mobileCode = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"mobileCode\"\n        });\n      }\n    };\n\n    _this.nowVerify = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"nowVerify\"\n        });\n      }\n    };\n\n    _this.email = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"email\"\n        });\n      }\n    };\n\n    _this.choose = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"choose\"\n        });\n      }\n    };\n\n    _this.registrationProtocol = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"registrationProtocol\"\n        });\n      }\n    };\n\n    _this.nowRegister = function (e) {\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"nowRegister\"\n        });\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"registered-account-form\" },\n        React.createElement(\n          \"h3\",\n          null,\n          data[0]\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"registered-account-user\" },\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"*\"\n            ),\n            React.createElement(\"input\", { type: \"text\", placeholder: data[1][0], onBlur: this.userName })\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u81F3\\u5C11\\u5305\\u542B\\u4E00\\u4E2A\\u5C0F\\u5199\\u5B57\\u6BCD\\u548C\\u6570\\u5B57\\uFF0C\\u4E0D\\u5141\\u8BB8\\u5305\\u542B\\u4E2D\\u6587\\uFF0C\\u57288-16\\u4E2A\\u5B57\\u7B26\\u5185\"\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"registered-account-pwd\" },\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"*\"\n            ),\n            React.createElement(\"input\", { type: \"text\", placeholder: data[1][1], onBlur: this.password })\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            \"\\u4E0D\\u53EF\\u4E0E\\u8D26\\u6237\\u540D\\u76F8\\u540C\\uFF0C\\u81F3\\u5C11\\u5305\\u542B\\u4E00\\u4E2A\\u5C0F\\u5199\\u5B57\\u6BCD\\u548C\\u6570\\u5B57\\uFF0C\\u4E0D\\u5141\\u8BB8\\u5305\\u542B\\u4E2D\\u6587\\uFF0C\\u57288-16\\u4E2A\\u5B57\\u7B26\\u5185\"\n          )\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[2][0], onBlur: this.nextPwd })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[2][1], onBlur: this.contactPerson })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[2][2], onBlur: this.companyName })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[2][3], onBlur: this.province })\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[3][0], onBlur: this.phoneNumber }),\n          React.createElement(\n            \"button\",\n            { onClick: this.getCode },\n            \"\\u83B7\\u53D6\\u9A8C\\u8BC1\\u7801\"\n          )\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[3][1], onBlur: this.mobileCode }),\n          React.createElement(\n            \"button\",\n            { onClick: this.nowVerify },\n            \"\\u7ACB\\u5373\\u9A8C\\u8BC1\"\n          )\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"*\"\n          ),\n          React.createElement(\"input\", { type: \"text\", placeholder: data[4], onBlur: this.email })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"registered-account-agree\" },\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\"input\", { type: \"checkbox\", onChange: this.choose }),\n            React.createElement(\n              \"label\",\n              null,\n              data[5],\n              React.createElement(\n                \"b\",\n                { onClick: this.registrationProtocol },\n                data[6]\n              )\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"registered-account-nowregister\" },\n          React.createElement(\n            \"button\",\n            { onClick: this.nowRegister },\n            \"\\u7ACB\\u5373\\u6CE8\\u518C\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    }
  });
})(window, ysp);