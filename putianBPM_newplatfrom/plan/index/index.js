(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_aHOPRS: function (elem) {
      if (!elem) {
        return;
      }return false; // return [].map.call(elem.querySelectorAll('span'), function (item) {
      //   return item.innerHTML;
      // });
    },
    doAction_uiControl14_nSkc1Z: function (data, elem) {
      if (data.eventType === 'click') {
        $(elem).find('span').eq(data.dataCustom.i).click();ysp.appMain.showLoading();
      }if (data.eventType == 'AIclick') {
        if (!top.EAPI.isStudio()) {
          switch (ysp.runtime.Model.modelsStack[0].model.id) {case 'PendingTask':
              elem.querySelectorAll('span')[0].click();break;case 'processedTask':
              elem.querySelectorAll('span')[1].click();break;}
        }
      }
    },
    getTemplate_uiControl14_nSkc1Z: function () {
      var selfTemplate = 'export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      open:false\n    }\n  }\n \xA0AIclick(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:\'\',\n        eventType:\'AIclick\'\n      })\n    }\n  }\n \xA0componentDidMount(){\n \xA0 \xA0var _this = this;\n    _this.AIclick();\n    var outer=this.props.customData && this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n \xA0 \xA0\n  }\n  render(){\n    const {customData,customHandler}=this.props;\n    if(\tcustomData\t&&\tcustomData.length>0\t){\n      return(\n        <div className="ysp-index" ref="outerWrapper">\n          <ul>\n            {customData.map((item,index)=>\n            index>1? \n            <li  key={index} onClick={(e)=>{\n              \tcustomHandler({data:{word:item,i:index},eventType:\'lastclick\'});\n                this.setState({open:true});\n                var _this=this;\n                var target=e.target.ownerDocument.querySelector(".alert");\n                setTimeout(function(){\n                  _this.setState({open:false});\n                },800)\n              }\n            }>\t\t\t\t\t\t\t\t\t\t\t\n              <label>\n                <span className={\'index\'+index}></span>\n              \t{item}\n              </label>\n              <span className=\'icon icon-right-nav\' style={{color:\'#C2BFB8\'}}>\n              </span>\n            </li>\n           :\n            <li  key={index} onClick={()=>customHandler({data:{word:item,i:index},eventType:\'click\'})}>\t\t\t\t\t\t\t\t\t\t\t\n              <label>\n                <span className={\'index\'+index}></span>\n              \t{item}\n              </label>\n              <span className=\'icon icon-right-nav\' style={{color:\'#C2BFB8\'}}>\n              </span>\n            </li>)}\n          </ul>\n          {this.state.open? <div className="ysp_index_alert">\u5F85\u5F00\u53D1</div>:<div className="ysp_index_alert"></div>}\n        </div>\n    )}else if(!customData){\n      return(\n        <div style={{display:\'none\'}}>\n        </div>\n      )\n    }   \n  }\n  \n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      open: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'AIclick\',\n    value: function AIclick() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: \'\',\n          eventType: \'AIclick\'\n        });\n      }\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      _this.AIclick();\n      var outer = this.props.customData && this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      if (customData && customData.length > 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-index\', ref: \'outerWrapper\' },\n          React.createElement(\n            \'ul\',\n            null,\n            customData.map(function (item, index) {\n              return index > 1 ? React.createElement(\n                \'li\',\n                { key: index, onClick: function onClick(e) {\n                    customHandler({ data: { word: item, i: index }, eventType: \'lastclick\' });\n                    _this3.setState({ open: true });\n                    var _this = _this3;\n                    var target = e.target.ownerDocument.querySelector(".alert");\n                    setTimeout(function () {\n                      _this.setState({ open: false });\n                    }, 800);\n                  } },\n                React.createElement(\n                  \'label\',\n                  null,\n                  React.createElement(\'span\', { className: \'index\' + index }),\n                  item\n                ),\n                React.createElement(\'span\', { className: \'icon icon-right-nav\', style: { color: \'#C2BFB8\' } })\n              ) : React.createElement(\n                \'li\',\n                { key: index, onClick: function onClick() {\n                    return customHandler({ data: { word: item, i: index }, eventType: \'click\' });\n                  } },\n                React.createElement(\n                  \'label\',\n                  null,\n                  React.createElement(\'span\', { className: \'index\' + index }),\n                  item\n                ),\n                React.createElement(\'span\', { className: \'icon icon-right-nav\', style: { color: \'#C2BFB8\' } })\n              );\n            })\n          ),\n          this.state.open ? React.createElement(\n            \'div\',\n            { className: \'ysp_index_alert\' },\n            \'\\u5F85\\u5F00\\u53D1\'\n          ) : React.createElement(\'div\', { className: \'ysp_index_alert\' })\n        );\n      } else if (!customData) {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control29_iNwtnh: function (elem) {
      if (!elem) {
        return false;
      }ysp.appMain.showLoading();return false;
    },
    doAction_uiControl29_BmXPdq: function (data, elem) {
      if (data.eventType == "back") {
        ysp.customHelper.backHome();
      }
    },
    getTemplate_uiControl29_BmXPdq: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderRight,\n  HeaderLeft\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    var _this = this;\n    var data=this.props.customData || [];\n    if(!data){\n    \treturn (\n      \t<Header amStyle="primary" title="\u4E1A\u52A1\u6D41\u7A0B\u7BA1\u7406\u5E73\u53F0">\n        \t<HeaderLeft>\n          \t<AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n            \tif (handler) {\n              \thandler({\n                eventType: \'back\'\n              \t});\n             \t}\n           \t}}>\n            \t<span className=\'icon icon-left-nav\'></span>\n          \t</AMUI.Button>\n        \t</HeaderLeft>\n        \t<HeaderRight>\n          \t<AMUI.Button amStyle="primary" style={{ margin: 0 ,display:\'none\'}}></AMUI.Button>\n        \t</HeaderRight>\n      \t</Header>\n    \t);\n    }else{\n      return (\n      \t<div></div>\n      )\n    }\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require("ysp-interior-components");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (!data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: "primary", title: "\\u4E1A\\u52A1\\u6D41\\u7A0B\\u7BA1\\u7406\\u5E73\\u53F0" },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: "primary", style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement("span", { className: "icon icon-left-nav" })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            React.createElement(AMUI.Button, { amStyle: "primary", style: { margin: 0, display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  }, "index");
})(window, ysp);