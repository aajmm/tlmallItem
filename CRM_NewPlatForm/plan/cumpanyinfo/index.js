'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control22_enMVzb: function (elem) {},
    doAction_uiControl25_wfrtyp: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '客户详情';ysp.customHelper.AndroidBackModel = 'clientInfo';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl25_wfrtyp: function getTemplate_uiControl25_wfrtyp() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n    var handler = _this.props.customHanlder;\n    if(handler){\n      handler({\n        eventType:\'AndroidBack\'\n      })\n    } \n \xA0 \xA0// const {customHandler} = _this.props;\n \xA0 \xA0// customHandler({\n \xA0 \xA0// eventType:\'AndroidBack\'\n \xA0 \xA0// })\n  }\n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u4F01\u4E1A\u4FE1\u606F",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u4F01\u4E1A\u4FE1\u606F", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHanlder;\n      if (handler) {\n        handler({\n          eventType: \'AndroidBack\'\n        });\n      }\n      // const {customHandler} = _this.props;\n      // customHandler({\n      // eventType:\'AndroidBack\'\n      // })\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control21_BeZk1I: function (elem) {
      if (!elem) {
        return [];
      };if (elem) {
        var data = { title: [], content: [], options: [] };var contentListTitle = elem.ownerDocument.querySelectorAll('.title-list-head');for (var i = 0; i < contentListTitle.length; i++) {
          data.title.push(contentListTitle[i].textContent.trim());
        }var contentListContent = elem.ownerDocument.querySelectorAll('.title-list-content');for (var i = 0; i < contentListContent.length; i++) {
          data.content.push(contentListContent[i].textContent.trim());
        }var options = elem.ownerDocument.querySelectorAll('option');for (var i = 0; i < options.length; i++) {
          data.options.push(options[i].textContent.trim());
        }return data;
      }
    },
    doAction_uiControl26_TSI3eX: function (data, elem) {
      if (data.eventType == 'change') {
        var i = data.dataCustom;var ind = parseInt(i.ind);$(elem).find("select").find("option").eq(ind).prop('selected', true);
      }
    },
    getTemplate_uiControl26_TSI3eX: function getTemplate_uiControl26_TSI3eX() {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerChange:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n    \thandler({\n        data:{val:target.value,ind:target.selectedIndex}, \n      \teventType:"change"\n      })\n    }\n  },\n  render: function(){\n    var data=this.props.customData;\n    var _this=this;\n    var options;\n    // var options=data.options.map(function(d,i){\n    //   return (\n    //   \t<select onChange={_this.handlerChange}>\n    //     \t<option>{d}</option>\n    //     </select>\n    //   )\n    // })\n    \n      options = data.options.map(function(d,i){\n      return(\n        <option>{d}</option>\n      )\n    })\n      \n    return (\n      <div className=\'ysp-companyinfo-wrapper\'>\n        <div className="ysp-companyinfo-title">{data.content[0]}</div>\n        <div className="ysp-companyinfo-status">\n        \t<p><span>{data.title[16]}</span><span>{data.content[16]}</span></p>\n          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\u51C6\u5165\u72B6\u6001</span><span>{data.content[18]}</span></p>\n        </div>\n        <div className="ysp-companyinfo-content">\n          <div>\n            <p><span>{data.title[1]}</span><span>{data.content[1]}</span></p>\n          \t<p><span>{data.title[18]}</span><span>{data.content[18]}</span></p>\n          </div>\n          <div>\n            <p><span>\u53D1\u7968\u7C7B\u578B</span><span></span></p>\n          \t<p><span>{data.title[23]}</span><span>{data.content[23]}</span></p>\n          </div>\n          <div>\n            <p><span>{data.title[17]}</span><span>{data.content[17]}</span></p>\n          \t<p><span>{data.title[5]}</span><span>{data.content[5]}</span></p>\n          </div>\n          <div>\n            <p>\n              <span>\u6240\u5C5E\u673A\u6784</span>\n              <select>{options}</select>\n            </p>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handlerChange: function handlerChange(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { val: target.value, ind: target.selectedIndex },\n        eventType: "change"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var options;\n    // var options=data.options.map(function(d,i){\n    //   return (\n    //   \t<select onChange={_this.handlerChange}>\n    //     \t<option>{d}</option>\n    //     </select>\n    //   )\n    // })\n\n    options = data.options.map(function (d, i) {\n      return React.createElement(\n        "option",\n        null,\n        d\n      );\n    });\n\n    return React.createElement(\n      "div",\n      { className: "ysp-companyinfo-wrapper" },\n      React.createElement(\n        "div",\n        { className: "ysp-companyinfo-title" },\n        data.content[0]\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp-companyinfo-status" },\n        React.createElement(\n          "p",\n          null,\n          React.createElement(\n            "span",\n            null,\n            data.title[16]\n          ),\n          React.createElement(\n            "span",\n            null,\n            data.content[16]\n          )\n        ),\n        React.createElement(\n          "p",\n          null,\n          "\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0",\n          React.createElement(\n            "span",\n            null,\n            "\\u51C6\\u5165\\u72B6\\u6001"\n          ),\n          React.createElement(\n            "span",\n            null,\n            data.content[18]\n          )\n        )\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp-companyinfo-content" },\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              data.title[1]\n            ),\n            React.createElement(\n              "span",\n              null,\n              data.content[1]\n            )\n          ),\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              data.title[18]\n            ),\n            React.createElement(\n              "span",\n              null,\n              data.content[18]\n            )\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u53D1\\u7968\\u7C7B\\u578B"\n            ),\n            React.createElement("span", null)\n          ),\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              data.title[23]\n            ),\n            React.createElement(\n              "span",\n              null,\n              data.content[23]\n            )\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              data.title[17]\n            ),\n            React.createElement(\n              "span",\n              null,\n              data.content[17]\n            )\n          ),\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              data.title[5]\n            ),\n            React.createElement(\n              "span",\n              null,\n              data.content[5]\n            )\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u6240\\u5C5E\\u673A\\u6784"\n            ),\n            React.createElement(\n              "select",\n              null,\n              options\n            )\n          )\n        )\n      )\n    );\n  }\n});';
    }
  }, 'cumpanyinfo');
})(window, ysp);