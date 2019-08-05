(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    CustomHeader: function () {
      var selfTemplate = "// CustomHeader customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\n\n\n//\u9875\u9762\u9876\u90E8\u8FD4\u56DE\u7EC4\u4EF6\nimport {Component} from \"react\";\nexport default class extends Component{\n   render = () => {\n       return (\n          <div className=\"ysp-top\">\n           {this.props.backIsShow && <span className=\"back\" onClick={this.props.back}></span>}\n           {this.props.data && this.props.data.centerText ? this.props.data.centerText:\"\"}\n           {this.props.filterIsShow && \n             <span className=\"ysp-top-right filter\" onClick={this.props.filter}>\n               {this.props.data && this.props.data.rightText ? this.props.data.rightText:\"\"}\n             </span> \n           }\n           {this.props.editIsShow && \n             <span className=\"ysp-top-right edit\" onClick={this.props.editor}>\n               {this.props.data && this.props.data.rightText ? this.props.data.rightText:\"\"}\n             </span> \n           }\n          </div>\n       );\n   }\n}\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CustomHeader customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\n\n\n//\u9875\u9762\u9876\u90E8\u8FD4\u56DE\u7EC4\u4EF6\n\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-top\" },\n        _this.props.backIsShow && React.createElement(\"span\", { className: \"back\", onClick: _this.props.back }),\n        _this.props.data && _this.props.data.centerText ? _this.props.data.centerText : \"\",\n        _this.props.filterIsShow && React.createElement(\n          \"span\",\n          { className: \"ysp-top-right filter\", onClick: _this.props.filter },\n          _this.props.data && _this.props.data.rightText ? _this.props.data.rightText : \"\"\n        ),\n        _this.props.editIsShow && React.createElement(\n          \"span\",\n          { className: \"ysp-top-right edit\", onClick: _this.props.editor },\n          _this.props.data && _this.props.data.rightText ? _this.props.data.rightText : \"\"\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    SelectPop: function () {
      var selfTemplate = "// SelectPop customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\n\n//select\u6A21\u62DF\u5F39\u6846\nimport {Component,Fragment} from \"react\";\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      onOff:true,\n      open:\"none\"\n    }\n  }\n  showSel=(e)=>{\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    }));\n    this.props.sels(e);\n  }\n\n   render = () => {\n     let selCke = this.props.selChecked;\n     let sel = this.showSel.bind(this);\n     let dataN = this.props.dataN;\n       return (\n         <Fragment>\n            <div className=\"option-show\" onClick={this.showSel.bind(this)}>{selCke}</div>\n            <div className=\"ysp-selpop-box\" style={{display:this.state.open}}>\n              <div className=\"pop-mask\" onClick={this.showSel.bind(this)}></div>\n              <ul className=\"selpop-con\">\n                {\n                  this.props.optionList.map(function(d,i){\n                    return(<li data-index={dataN+\"-\"+i} onClick={sel} className={selCke==d ? \"active\" : \"\"}>{d}</li>)\n                  })\n                }\n               </ul>\n             </div>\n           </Fragment>\n       );\n   }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SelectPop customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\n\n//select\u6A21\u62DF\u5F39\u6846\n\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.showSel = function (e) {\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n      _this.props.sels(e);\n    };\n\n    _this.render = function () {\n      var selCke = _this.props.selChecked;\n      var sel = _this.showSel.bind(_this);\n      var dataN = _this.props.dataN;\n      return React.createElement(\n        _react.Fragment,\n        null,\n        React.createElement(\n          \"div\",\n          { className: \"option-show\", onClick: _this.showSel.bind(_this) },\n          selCke\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"ysp-selpop-box\", style: { display: _this.state.open } },\n          React.createElement(\"div\", { className: \"pop-mask\", onClick: _this.showSel.bind(_this) }),\n          React.createElement(\n            \"ul\",\n            { className: \"selpop-con\" },\n            _this.props.optionList.map(function (d, i) {\n              return React.createElement(\n                \"li\",\n                { \"data-index\": dataN + \"-\" + i, onClick: sel, className: selCke == d ? \"active\" : \"\" },\n                d\n              );\n            })\n          )\n        )\n      );\n    };\n\n    _this.state = {\n      onOff: true,\n      open: \"none\"\n    };\n    return _this;\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);