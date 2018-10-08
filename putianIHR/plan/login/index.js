(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_vXKNxf: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { userid: "", pwd: "", msg: "", error: "" };data.userid = elem.querySelector("#userid").value;data.pwd = elem.querySelector("#pwd").value;data.msg = elem.querySelector("#code").value;if (elem.querySelector("#login_error") && elem.querySelector("#login_error").textContent.indexOf("需要输入用户 ID 和密码。") !== -1) {
          data.error = '请输入验证码';
        } else {
          data.error = elem.querySelector("#login_error").textContent;
        }
        return data;
      }
    },
    doAction_uiControl0_vbflXP: function (data, elem) {
      if (data.eventType == "msgBlur") {
        var val = data.dataCustom;elem.querySelector("#code").value = val;elem.querySelector("#code").dispatchEvent(new Event("change"));
      } else if (data.eventType == "click") {
        var classname = data.dataCustom;if (classname == "getMsgBtn") {
          elem.querySelector(".tel-button-box").click();
        } else if (classname == "cancelBtn") {
          top.EAPI.closeWindow();
        } else if (classname == "loginBtn") {
          elem.querySelector("[type='submit']").click(); //     debugger;
          //     if (elem.querySelector("#login_error").textContent !== "") {
          //       elem.querySelector("#userid").value = ysp.customHelper.userId;
          //       elem.querySelector("#pwd").value = ysp.customHelper.passWord;
          //     }
        }
      } else if (data.eventType == "userBlur") {
        var classname = data.dataCustom[0];var val = data.dataCustom[1];if (classname == "usrid") {
          elem.querySelector("#userid").value = sessionStorage.getItem("userId");elem.querySelector("#userid").dispatchEvent(new Event("change"));
        } else if (classname == "psw") {
          elem.querySelector("#pwd").value = val;elem.querySelector("#pwd").dispatchEvent(new Event("change"));
        }
      }
    },
    getTemplate_uiControl0_vbflXP: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  msgBlur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"msgBlur\",\n        data:target.value\n      })\n    }\n  }\n click(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\",\n        data:target.className\n      })\n    }\n  }\n  userBlur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"userBlur\",\n        data:[target.className,target.value]\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(\n    \t<div className=\"login_background\">\n      \t<div className=\"login_content\">\n          <div className=\"logo\"></div>\n        \t<div className=\"message\">\n          \t<AInput className=\"msg\" value={data.msg} onBlur={_this.msgBlur.bind(_this)} placeholder=\"\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801\"/>\n            <div className=\"getMsgBtn\" onClick={_this.click.bind(_this)}>\u83B7\u53D6\u9A8C\u8BC1\u7801</div>\n          </div>\n          <div className=\"error\">{data.error}</div>\n          <div className=\"btnGroup\">\n          \t<div className=\"cancelBtn\" onClick={_this.click.bind(_this)}>\u53D6\u6D88</div>\n            <div className=\"loginBtn\" onClick={_this.click.bind(_this)}>\u767B\u5F55</div>\n          </div>\n          \n          \n        </div>\n        \n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"msgBlur\",\n    value: function msgBlur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"msgBlur\",\n          data: target.value\n        });\n      }\n    }\n  }, {\n    key: \"click\",\n    value: function click(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click\",\n          data: target.className\n        });\n      }\n    }\n  }, {\n    key: \"userBlur\",\n    value: function userBlur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"userBlur\",\n          data: [target.className, target.value]\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"login_background\" },\n        React.createElement(\n          \"div\",\n          { className: \"login_content\" },\n          React.createElement(\"div\", { className: \"logo\" }),\n          React.createElement(\n            \"div\",\n            { className: \"message\" },\n            React.createElement(AInput, { className: \"msg\", value: data.msg, onBlur: _this.msgBlur.bind(_this), placeholder: \"\\u8BF7\\u8F93\\u5165\\u624B\\u673A\\u9A8C\\u8BC1\\u7801\" }),\n            React.createElement(\n              \"div\",\n              { className: \"getMsgBtn\", onClick: _this.click.bind(_this) },\n              \"\\u83B7\\u53D6\\u9A8C\\u8BC1\\u7801\"\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"error\" },\n            data.error\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"btnGroup\" },\n            React.createElement(\n              \"div\",\n              { className: \"cancelBtn\", onClick: _this.click.bind(_this) },\n              \"\\u53D6\\u6D88\"\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"loginBtn\", onClick: _this.click.bind(_this) },\n              \"\\u767B\\u5F55\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "login");
})(window, ysp);