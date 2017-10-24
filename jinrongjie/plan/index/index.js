(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control19_hJzhia: function (elem) {
      if (!elem) {
        return;
      }var data = [];var lis = elem.querySelector('#drillmenu').querySelector('ul').querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        data.push(ysp.customHelper.trim(lis[i].querySelector('a').textContent));
      }return data;
    },
    doAction_uiControl19_TuJ8uo: function (data, elem) {
      if (data.eventType == 'click') {
        var opration = data.dataCustom.operation;var planName = data.dataCustom.planName;if (planName != '') {
          ysp.customHelper.firstMenus(elem, opration);
        } else {
          alert('流程未适配');
        }
      }
    },
    getTemplate_uiControl19_TuJ8uo: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  onclick=(e)=>{\n    var handler = this.props.customHandler;\n    var operation,planName;\n    if(e.target.nodeName == \'LI\'){\n       operation = e.target.dataset.title;\n       planName = e.target.dataset.planName;\n    }else{\n      e.target = e.target.parentElement;\n      operation = e.target.dataset.title;\n      planName = e.target.dataset.planName;\n    }\n    if(handler){\n      handler({\n        data:{operation:operation,planName:planName},\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    return (\n    \t<div id=\'firstMenu\'>\n      \t{data && <ul className = \'ysp-index-Menus\'>\n        \t{data[0] == \'\u65B0\u5EFA\u6D41\u7A0B\' ? <li data-title=\'\u65B0\u5EFA\u6D41\u7A0B\' data-planName=\'\' onClick={this.onclick.bind(this)}><i className=\'ysp-icon-Newlybuild\'></i><span>\u65B0\u5EFA\u6D41\u7A0B</span></li> : <li></li>}\n          {data[1] == \'\u5F85\u529E\u4E8B\u5B9C\' ? <li data-title=\'\u5F85\u529E\u4E8B\u5B9C\' data-planName=\'waitTodo\' onClick={this.onclick.bind(this)}><i className=\'ysp-icon-Agency\'></i><span>\u5F85\u529E\u4E8B\u5B9C</span></li> : <li></li>}\n          {data[2] == \'\u5DF2\u529E\u4E8B\u5B9C\' ? <li data-title=\'\u5DF2\u529E\u4E8B\u5B9C\' data-planName=\'\' onClick={this.onclick.bind(this)}><i className=\'ysp-icon-Todo\'></i><span>\u5DF2\u529E\u4E8B\u5B9C</span></li> : <li></li>}\n          {data[3] == \'\u529E\u7ED3\u4E8B\u5B9C\' ? <li data-title=\'\u529E\u7ED3\u4E8B\u5B9C\' data-planName=\'\' onClick={this.onclick.bind(this)}><i className=\'ysp-icon-Agency\'></i><span>\u529E\u7ED3\u4E8B\u5B9C</span></li> : <li></li>}\n          {data[4] == \'\u6211\u7684\u6D41\u7A0B\' ? <li data-title=\'\u6211\u7684\u6D41\u7A0B\' data-planName=\'\' onClick={this.onclick.bind(this)}><i className=\'ysp-icon-My\'></i><span>\u6211\u7684\u6D41\u7A0B</span></li> : <li></li>}\n        </ul>}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onclick = function (e) {\n      var handler = _this.props.customHandler;\n      var operation, planName;\n      if (e.target.nodeName == \'LI\') {\n        operation = e.target.dataset.title;\n        planName = e.target.dataset.planName;\n      } else {\n        e.target = e.target.parentElement;\n        operation = e.target.dataset.title;\n        planName = e.target.dataset.planName;\n      }\n      if (handler) {\n        handler({\n          data: { operation: operation, planName: planName },\n          eventType: \'click\'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { id: \'firstMenu\' },\n        data && React.createElement(\n          \'ul\',\n          { className: \'ysp-index-Menus\' },\n          data[0] == \'\u65B0\u5EFA\u6D41\u7A0B\' ? React.createElement(\n            \'li\',\n            { \'data-title\': \'\\u65B0\\u5EFA\\u6D41\\u7A0B\', \'data-planName\': \'\', onClick: this.onclick.bind(this) },\n            React.createElement(\'i\', { className: \'ysp-icon-Newlybuild\' }),\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u65B0\\u5EFA\\u6D41\\u7A0B\'\n            )\n          ) : React.createElement(\'li\', null),\n          data[1] == \'\u5F85\u529E\u4E8B\u5B9C\' ? React.createElement(\n            \'li\',\n            { \'data-title\': \'\\u5F85\\u529E\\u4E8B\\u5B9C\', \'data-planName\': \'waitTodo\', onClick: this.onclick.bind(this) },\n            React.createElement(\'i\', { className: \'ysp-icon-Agency\' }),\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u5F85\\u529E\\u4E8B\\u5B9C\'\n            )\n          ) : React.createElement(\'li\', null),\n          data[2] == \'\u5DF2\u529E\u4E8B\u5B9C\' ? React.createElement(\n            \'li\',\n            { \'data-title\': \'\\u5DF2\\u529E\\u4E8B\\u5B9C\', \'data-planName\': \'\', onClick: this.onclick.bind(this) },\n            React.createElement(\'i\', { className: \'ysp-icon-Todo\' }),\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u5DF2\\u529E\\u4E8B\\u5B9C\'\n            )\n          ) : React.createElement(\'li\', null),\n          data[3] == \'\u529E\u7ED3\u4E8B\u5B9C\' ? React.createElement(\n            \'li\',\n            { \'data-title\': \'\\u529E\\u7ED3\\u4E8B\\u5B9C\', \'data-planName\': \'\', onClick: this.onclick.bind(this) },\n            React.createElement(\'i\', { className: \'ysp-icon-Agency\' }),\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u529E\\u7ED3\\u4E8B\\u5B9C\'\n            )\n          ) : React.createElement(\'li\', null),\n          data[4] == \'\u6211\u7684\u6D41\u7A0B\' ? React.createElement(\n            \'li\',\n            { \'data-title\': \'\\u6211\\u7684\\u6D41\\u7A0B\', \'data-planName\': \'\', onClick: this.onclick.bind(this) },\n            React.createElement(\'i\', { className: \'ysp-icon-My\' }),\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u6211\\u7684\\u6D41\\u7A0B\'\n            )\n          ) : React.createElement(\'li\', null)\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control7_thluKe: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl7_fXZ26L: function (data, elem) {},
    getTemplate_uiControl7_fXZ26L: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"\u5F85\u529E\u4E8B\u5B9C:\u67E5\u770B"}} \n       backIsShow = {true}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u5F85\u529E\u4E8B\u5B9C:\u67E5\u770B" },\n        backIsShow: true\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control20_U5haXk: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl20_3ndpBV: function (data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl20_3ndpBV: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  componentDidMount(){\n    this.click()\n  }\n  click(){\n  var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    return(\n    \t<div></div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      this.click();\n    }\n  }, {\n    key: \'click\',\n    value: function click() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\'div\', null);\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);