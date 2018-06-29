(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control165_igAkCc: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl165_tTClZ3: function (data, elem) {},
    getTemplate_uiControl165_tTClZ3: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    \n    return (\n      <div className=\'titleH1\'>\n          <Header amStyle="primary" title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<button amStyle="primary" onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n\n    return React.createElement(\n      \'div\',\n      { className: \'titleH1\' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\', title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            \'button\',\n            { amStyle: \'primary\', onClick: _appRenderer.back },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control166_xWbkne: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '发起人信息';data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl166_JpNFVF: function (data, elem) {},
    getTemplate_uiControl166_JpNFVF: function () {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      isShow:false,\n     \n    }\n  }\n  onclick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;    \n    if(false==this.state.isShow){\n       this.setState({\n        isShow:true\n      })\n    }else{\n      this.setState({\n        isShow:false\n      })\n    }\n    \n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      return (\n      \t<p><span>{d.leftval}</span><span>{d.rightval}</span></p>\n      )\n    })\n    return (\n    \t<div className=\'ysp-RenewalInfo-tt\'>\n      \t\t<div className=\'ysp-RenewalInfo-title-tt\'><span>{data.title}</span><i onClick={_this.onclick.bind(_this)}></i></div>\n        {_this.state.isShow==true?<div className=\'ysp-RenewalInfo-content-tt\'>{list}</div>:""}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      isShow: false\n\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'onclick\',\n    value: function onclick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (false == this.state.isShow) {\n        this.setState({\n          isShow: true\n        });\n      } else {\n        this.setState({\n          isShow: false\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      var list = data.content.map(function (d, i) {\n        return React.createElement(\n          \'p\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            d.leftval\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            d.rightval\n          )\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-RenewalInfo-tt\' },\n        React.createElement(\n          \'div\',\n          { className: \'ysp-RenewalInfo-title-tt\' },\n          React.createElement(\n            \'span\',\n            null,\n            data.title\n          ),\n          React.createElement(\'i\', { onClick: _this.onclick.bind(_this) })\n        ),\n        _this.state.isShow == true ? React.createElement(\n          \'div\',\n          { className: \'ysp-RenewalInfo-content-tt\' },\n          list\n        ) : ""\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "RenewalApplication");
})(window, ysp);