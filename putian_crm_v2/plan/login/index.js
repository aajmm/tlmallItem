"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control51_bz0OMU: function getData_control51_bz0OMU(elem) {},
    doAction_uiControl55_TxTJvf: function doAction_uiControl55_TxTJvf(data, elem) {},
    getTemplate_uiControl55_TxTJvf: function getTemplate_uiControl55_TxTJvf() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u767B\u5F55\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={false} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u767B\u5F55\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: false,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control53_NrRIhb: function (elem) {},
    doAction_uiControl57_AT6GR2: function (data, elem) {
      if (data.eventType === 'change') {
        var value = data.customData;elem.focus();elem.value = value;
      }
    },
    getTemplate_uiControl57_AT6GR2: function getTemplate_uiControl57_AT6GR2() {
      var selfTemplate = "export default class extends React.Component {\n  handlerChange(e){\n  \tvar value = e.target.value;\n    const handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata: value,\n        eventType: 'change'\n      })\n    }\n  }\n\trender(){\n  \treturn (\n    \t<div className='ysp-custom-login'>\n        <div className='username'>\n          <h3>\u7528\u6237\u540D</h3>\n          <input type='text' onBlur={this.handlerChange.bind(this)} defaultValue={this.props.customData}/>\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var value = e.target.value;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: value,\n          eventType: 'change'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-custom-login' },\n        React.createElement(\n          'div',\n          { className: 'username' },\n          React.createElement(\n            'h3',\n            null,\n            '\\u7528\\u6237\\u540D'\n          ),\n          React.createElement('input', { type: 'text', onBlur: this.handlerChange.bind(this), defaultValue: this.props.customData })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control54_77878L: function getData_control54_77878L(elem) {
      return elem.value;
    },
    doAction_uiControl58_rDvvOT: function doAction_uiControl58_rDvvOT(data, elem) {
      if (data.eventType === 'change') {
        var value = data.dataCustom;elem.focus();elem.value = value;
      }
    },
    getTemplate_uiControl58_rDvvOT: function getTemplate_uiControl58_rDvvOT() {
      var selfTemplate = "export default class extends React.Component {\n  handlerChange(e){\n  \tvar value = e.target.value;\n    const handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata: value,\n        eventType: 'change'\n      })\n    }\n  }\n\trender(){\n  \treturn (\n    \t<div className='ysp-custom-login'>\n        <div className='password'>\n          <h3>\u5BC6\u7801</h3>\n          <input type='password' onBlur={this.handlerChange.bind(this)} defaultValue={this.props.customData}/>\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var value = e.target.value;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: value,\n          eventType: 'change'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-custom-login' },\n        React.createElement(\n          'div',\n          { className: 'password' },\n          React.createElement(\n            'h3',\n            null,\n            '\\u5BC6\\u7801'\n          ),\n          React.createElement('input', { type: 'password', onBlur: this.handlerChange.bind(this), defaultValue: this.props.customData })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control55_C5T4PK: function getData_control55_C5T4PK(elem) {
      return elem.checked;
    },
    doAction_uiControl59_fiMAKK: function doAction_uiControl59_fiMAKK(data, elem) {
      if (data.eventType === 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl59_fiMAKK: function getTemplate_uiControl59_fiMAKK() {
      var selfTemplate = "export default class extends React.Component {\n  constructor(props){\n  \tsuper(props);\n    this.state = {\n    \tactive: this.props.customData\n    }\n  }\n  handlerClick(){\n    this.setState({active: !this.state.active})\n  \tconst handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \teventType: 'click'\n      })\n    }\n  }\n\trender(){\n  \treturn (\n    \t<div className='ysp-custom-login'>\n        <div className='rember' onClick={this.handlerClick.bind(this)}>\n          <span>\u8BB0\u4F4F\u6211\u7684ID</span>\n          <span className={this.state.active ? 'active' : ''}></span>\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      active: _this.props.customData\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick() {\n      this.setState({ active: !this.state.active });\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-custom-login' },\n        React.createElement(\n          'div',\n          { className: 'rember', onClick: this.handlerClick.bind(this) },\n          React.createElement(\n            'span',\n            null,\n            '\\u8BB0\\u4F4F\\u6211\\u7684ID'\n          ),\n          React.createElement('span', { className: this.state.active ? 'active' : '' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control59_piDpJJ: function getData_control59_piDpJJ(elem) {},
    doAction_uiControl60_6KVO0s: function doAction_uiControl60_6KVO0s(data, elem) {
      if (data.eventType === 'click') {
        elem.focus();elem.click();elem.blur();
      }
    },
    getTemplate_uiControl60_6KVO0s: function getTemplate_uiControl60_6KVO0s() {
      var selfTemplate = "export default class extends React.Component {\n  handlerClick(){\n  \tconst handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \teventType: 'click'\n      })\n    }\n  }\n\trender(){\n  \treturn (\n    \t<div className='ysp-custom-login'>\n        <div className='loginBtn'>\n          <span onClick={this.handlerClick.bind(this)}>\u767B\u5F55</span>\n        </div>\n      </div>\n    )\n  }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-custom-login' },\n        React.createElement(\n          'div',\n          { className: 'loginBtn' },\n          React.createElement(\n            'span',\n            { onClick: this.handlerClick.bind(this) },\n            '\\u767B\\u5F55'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control135_E366DX: function getData_control135_E366DX(elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }if (ysp.customHelper.tipMsg.cancelText()) {
        data.cancel = ysp.customHelper.tipMsg.cancelText();
      } else {
        data.cancel = "";
      }return data;
    },
    doAction_uiControl135_3m0TVt: function doAction_uiControl135_3m0TVt(data, elem) {
      if (data.eventType == "confirmClick") {
        ysp.customHelper.tipMsg.confirm();
      }if (data.eventType == "cancelClick") {
        ysp.customHelper.tipMsg.cancel();
      }
    },
    getTemplate_uiControl135_3m0TVt: function getTemplate_uiControl135_3m0TVt() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tAlert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n     return(\n    \t<div>\n        {data.postMessage==\"\" ? \"\" : \n          <Alert\n            content={data.postMessage}\n            cancelText={data.cancel}\n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"confirmClick\"\n                  })\n                }\n              }\n            }\n            cancel={\n             (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"cancelClick\"\n                  })\n                }\n              }\n           }\n          />\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data.postMessage == \"\" ? \"\" : React.createElement(_yspCustomComponents.Alert, {\n          content: data.postMessage,\n          cancelText: data.cancel,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"confirmClick\"\n              });\n            }\n          },\n          cancel: function cancel(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"cancelClick\"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);