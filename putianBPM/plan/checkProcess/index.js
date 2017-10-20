(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control26_dIWtPL: function (elem) {
      if (elem) {
        var data = { tabs: [], oneIframe: { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [] }, twoIframe: { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [], pages: {} }, threeIframe: { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [], pages: {} }, btn: [] };var _tabs = elem.contentWindow && elem.contentWindow.document.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item) {
          data.tabs.push(item.innerHTML);
        });var signOne = elem.contentWindow.document.querySelectorAll('.mini-tabs-bodys>.mini-tabs-body');if (typeof signOne != 'undefined' && signOne.length > 0) {
          var signTwo = elem.contentWindow.document.querySelectorAll('.mini-tabs-bodys>.mini-tabs-body')[1].querySelectorAll('#form1');if (typeof signTwo != 'undefined' && signTwo.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('#form1>table	tr td');[].forEach.call(sheep, function (item, i) {
              if (i % 2 == 0) {
                if (typeof item.childNodes[1] != 'undefined' && item.childNodes[1].nodeName == 'LABEL') {
                  data.twoIframe.twoPartTitle.push(item.childNodes[1].textContent.replace(/:/ig, ""));
                } else {
                  data.twoIframe.twoPartTitle.push(item.textContent.replace(/:/ig, ''));
                }
              } else if (i % 2 == 1) {
                var Lamb = item.querySelectorAll('span span');if (Lamb) {
                  var Lambs = item.querySelectorAll('span span')[0].childNodes[0];if (Lambs.nodeName == 'INPUT') {
                    data.twoIframe.twoPartCont.push(Lambs.value);
                  }
                }
              }
            });
          }
        }var btns = elem.contentWindow.document.querySelectorAll('.bottomBtnDiv');if (btns && btns.length > 0) {
          var signOne = elem.contentWindow.document.querySelectorAll('#closeButton')[0];data.btn.push(signOne.textContent);var signTwo = elem.contentWindow.document.querySelectorAll('#executeButton')[0];if (signTwo && signTwo.style.display != 'none') {
            data.btn.push(signTwo.textContent);
          }
        }return data;
      }return '';
    }, doAction_uiControl25_h5n78M: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-tabs') {
          var _tab = elem.contentWindow.document.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }
      }
    },
    getTemplate_uiControl25_h5n78M: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:0,\n    }\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:[e.className,e.dataset.id],\n         eventType:\'click\'                         \n       })\n     }\n    this.setState({\n      show: parseInt(e.dataset.id)\n    })\n  }\n  render(){\n    var data = this.props.customData || [];\n    var containers=[];   \n    switch (this.state.show) {\n    \tcase 1:\n      containers.push(\n      \t<TwoIframe\tPassedCustomData={data}\t/>\n      )\n      break;\n    }\n \t\treturn(\n      <div>\n      \t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t{containers}\n      </div>\n    )   \n  }\n}\nclass TwoIframe extends React.Component{\n  render(){\n    var data=this.props.PassedCustomData\t||\t[];\n    var _this=this;\n    return(\n      <div className=\'ysp-detailedInformation\'>\n      \t{\t\n          data\t&&\tdata.twoIframe.twoPartCont.length>0\t?\tdata.twoIframe.twoPartCont.map(function(item,i){\n            return(\n              <div>\n            \t\t<span>{data.twoIframe.twoPartTitle[i]}</span>\n              \t<label>{item}</label>\n            \t</div>)\n          })\t:\t<div style={{display:\'none\'}}></div>\n        }\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      show: 0\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: [e.className, e.dataset.id],\n          eventType: \'click\'\n        });\n      }\n      this.setState({\n        show: parseInt(e.dataset.id)\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var containers = [];\n      switch (this.state.show) {\n        case 1:\n          containers.push(React.createElement(TwoIframe, { PassedCustomData: data }));\n          break;\n      }\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show }),\n        containers\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar TwoIframe = function (_React$Component2) {\n  _inherits(TwoIframe, _React$Component2);\n\n  function TwoIframe() {\n    _classCallCheck(this, TwoIframe);\n\n    return _possibleConstructorReturn(this, (TwoIframe.__proto__ || Object.getPrototypeOf(TwoIframe)).apply(this, arguments));\n  }\n\n  _createClass(TwoIframe, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-detailedInformation\' },\n        data && data.twoIframe.twoPartCont.length > 0 ? data.twoIframe.twoPartCont.map(function (item, i) {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              data.twoIframe.twoPartTitle[i]\n            ),\n            React.createElement(\n              \'label\',\n              null,\n              item\n            )\n          );\n        }) : React.createElement(\'div\', { style: { display: \'none\' } })\n      );\n    }\n  }]);\n\n  return TwoIframe;\n}(React.Component);';
    },
    getData_control3_kWQJoC: function (elem) {
      if (elem) {
        return elem.innerHTML;
      }return '';
    },
    doAction_uiControl4_mwHe1e: function (data, elem) {},
    getTemplate_uiControl4_mwHe1e: function () {
      var selfTemplate = 'export default class extends  React.Component{\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    if(customData){\n    return(\n        <div\tclassName=\'ysp-prompt-parent\'>\n          <div className="ysp-prompt">{customData}</div>\n        </div> \n    \t)\n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      if (customData) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-prompt-parent\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-prompt\' },\n            customData\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control5_diOo4d: function (elem) {},
    doAction_uiControl19_KXCuJA: function (data, elem) {
      if (data.eventType === 'back') {
        var win = elem.ownerDocument.defaultView;var parentWin = win.parent;console.log(parentWin); //parentWin && parentWin.location.reload(); // var _win = parentWin.ownerDocument.defaultView;
        // var _parentWin = _win.parent;
        // _parentWin && _parentWin.location.reload();
        var url = 'http://192.168.0.189:8888/ptsoa/skins/default/index.jsp#';elem.ownerDocument.location.href = url;
      }
    },
    getTemplate_uiControl19_KXCuJA: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    let _this = this;\n    let data=this.props.customData\t||\t[];\n    return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u8BE6\u7EC6\u4FE1\u606F\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}>{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \"primary\", title: \"\\u5DE5\\u4F5C\\u8BE6\\u7EC6\\u4FE1\\u606F\" },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 }, onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n              } },\n            React.createElement(\"span\", { className: \"icon icon-left-nav\" })\n          )\n        ),\n        React.createElement(\n          _yspInteriorComponents.HeaderRight,\n          null,\n          data ? React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 } },\n            data\n          ) : React.createElement(\"div\", { style: { display: 'none' } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control1_cP5NmN: function (elem) {
      if (elem) {
        var data = [];var btns = elem.querySelectorAll('.bottomBtnDiv');var signOne = elem.querySelectorAll('#closeButton')[0];data.push(signOne.textContent);var signTwo = elem.querySelectorAll('#executeButton')[0];if (signTwo && signTwo.style.display != 'none') {
          data.push(signTwo.textContent);
        }return data;
      }return '';
    },
    doAction_uiControl2_934vis: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d == 'ysp-check-btn1') {
          signTwo = elem.querySelectorAll('#executeButton')[0];signTwo.click();
        } else if (d == 'ysp-check-btn0') {
          var signOne = elem.querySelectorAll('#closeButton')[0];signOne.click();
        }
      }
    },
    getTemplate_uiControl2_934vis: function () {
      var selfTemplate = "export default class extends React.Component{\n  click(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  render(){\n    var data=this.props.customData || [];\n    return (\n      <div  className=\"ysp-check-btnBody\">\n      \t{data\t&& data.map((item,i)=><button className={'ysp-check-btn'+i} onClick={this.click.bind(this)}>{item}</button>)}\n      </div>\n    )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n    value: function click(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-check-btnBody\' },\n        data && data.map(function (item, i) {\n          return React.createElement(\n            \'button\',\n            { className: \'ysp-check-btn\' + i, onClick: _this2.click.bind(_this2) },\n            item\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);