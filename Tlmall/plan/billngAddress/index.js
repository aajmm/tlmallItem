(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control50_yKKOys: function (elem) {
      "use strict";
      if (!elem) {
        return;
      }var tabTitles = [];var dom_tabTitles = elem.querySelectorAll("#InvoiceRadios li");for (var i = 0; i < dom_tabTitles.length; i++) {
        var label = dom_tabTitles[i].querySelector("label");var cls = dom_tabTitles[i].querySelector("div");var disabledStatus = dom_tabTitles[i].querySelector("input[type='radio']");tabTitles.push({ text: label.innerText, className: cls.getAttribute("class"), disabled: disabledStatus.getAttribute("disabled") });
      }var dom_status = elem.querySelector(".invoice_c");var status = { text: dom_status.querySelector(".float_l>span:first-child").innerText, value: dom_status.querySelector("#billngAdress_auditStatus").innerText, statusClass: dom_status.querySelector("#billngAdress_auditStatus em").getAttribute("class") };var data = { tabtitles: tabTitles, status: status };return data;
    }, doAction_uiControl34_tveGHD: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl34_tveGHD: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  \n  //\u8FD4\u56DE\n  back=()=>{ \n   let handler = this.props.customHandler;\n   if (handler) {\n    handler({\n    eventType: 'back'\n    });\n   }\n  }\n  \n  render() {\n    var data = this.props.customData;\n    var me = this;\n    var tabTitles = data.tabtitles;\n    var status = data.status;\n    return (\n      <Fragment>\n        <CustomHeader \n             data={{centerText:\"\u7A0E\u52A1\u767B\u8BB0\u7C7B\u578B\"}} \n             backIsShow={true} \n             filterIsShow={false}\n             editIsShow={false}\n             back={me.back.bind(me)}\n          />\n        <div class=\"tab-title\">\n\t\t\t\t\t{tabTitles.map((tabItem, tabIndex)=>{\n            return (\n              <div className=\"tab-item\">\n                <span className={tabItem.className} >\n                \t<input type=\"button\" value={tabItem.text} disabled={tabItem.disabled}/>\n                </span>\n              </div>\n            )\n          })}\n        </div>\n        <div className=\"status\">\n          <div className=\"content\">\n            <span>{status.text}</span>\n            <em className={status.statusClass}>{status.value}</em>\n          </div>\n          <a href=\"javascript:;\" className=\"btn-apply\">\u7533\u8BF7\u4FEE\u6539</a>\n        </div>\n      </Fragment>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.back = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'back'\n        });\n      }\n    };\n\n    return _this;\n  }\n\n  //\u8FD4\u56DE\n\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      var tabTitles = data.tabtitles;\n      var status = data.status;\n      return React.createElement(\n        _react.Fragment,\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u7A0E\u52A1\u767B\u8BB0\u7C7B\u578B\" },\n          backIsShow: true,\n          filterIsShow: false,\n          editIsShow: false,\n          back: me.back.bind(me)\n        }),\n        React.createElement(\n          'div',\n          { 'class': 'tab-title' },\n          tabTitles.map(function (tabItem, tabIndex) {\n            return React.createElement(\n              'div',\n              { className: 'tab-item' },\n              React.createElement(\n                'span',\n                { className: tabItem.className },\n                React.createElement('input', { type: 'button', value: tabItem.text, disabled: tabItem.disabled })\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'status' },\n          React.createElement(\n            'div',\n            { className: 'content' },\n            React.createElement(\n              'span',\n              null,\n              status.text\n            ),\n            React.createElement(\n              'em',\n              { className: status.statusClass },\n              status.value\n            )\n          ),\n          React.createElement(\n            'a',\n            { href: 'javascript:;', className: 'btn-apply' },\n            '\\u7533\\u8BF7\\u4FEE\\u6539'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "billngAddress");
})(window, ysp);