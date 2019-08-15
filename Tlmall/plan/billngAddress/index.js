(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control50_yKKOys: function (elem) {
      "use strict";
      if (!elem) {
        return;
      }var tabTitles = [];var dom_tabTitles = elem.querySelectorAll("#InvoiceRadios li");for (var i = 0; i < dom_tabTitles.length; i++) {
        var label = dom_tabTitles[i].querySelector("label");var cls = dom_tabTitles[i].querySelector("div");var disabledStatus = dom_tabTitles[i].querySelector("input[type='radio']");tabTitles.push({ text: label.innerText, className: cls.getAttribute("class"), disabled: disabledStatus.getAttribute("disabled") });
      }var dom_status = elem.querySelector(".invoice_c");var status = { text: dom_status.querySelector(".float_l>span:first-child").innerText, value: dom_status.querySelector("#billngAdress_auditStatus").innerText, statusClass: dom_status.querySelector("#billngAdress_auditStatus em").getAttribute("class") };var dom_addressInforContent = elem.querySelectorAll(".address-infor+.invoce_show .one");var addressInforContent = [];for (var i = 0; i < dom_addressInforContent.length; i++) {
        var _text = dom_addressInforContent[i].querySelector("label").innerText.split("*")[1].split(":")[0];var _display = dom_addressInforContent[i].style.display;var _value = null,
            _disabled = null;if (i == dom_addressInforContent.length - 2) {
          _value = dom_addressInforContent[i].querySelector(".uploader-list").innerText;addressInforContent.push({ display: _display, text: _text, value: _value, btnText: "上传" });
        } else if (i == dom_addressInforContent.length - 1) {
          _value = dom_addressInforContent[i].querySelector("input").value;_disabled = dom_addressInforContent[i].querySelector("input").getAttribute("disabled");var _btnText = dom_addressInforContent[i].querySelector("span").innerText;addressInforContent.push({ display: _display, text: _text, value: _value, disabled: _disabled, btnText: _btnText });
        } else {
          var _tip = dom_addressInforContent[i].querySelector("div").innerText;if (i == 1) {
            _value = dom_addressInforContent[i].querySelector("textarea").value;_disabled = dom_addressInforContent[i].querySelector("textarea").getAttribute("disabled");
          } else {
            _value = dom_addressInforContent[i].querySelector("input").value;_disabled = dom_addressInforContent[i].querySelector("input").getAttribute("disabled");
          }
          addressInforContent.push({ display: _display, text: _text, value: _value, disabled: _disabled, tip: _tip });
        }
      }var addressInfor = { title: elem.querySelector(".address-infor h5").innerText, content: addressInforContent };var billingAddressFileDown = { text: elem.querySelector(".address-infor a").innerText, href: elem.querySelector(".address-infor a").getAttribute("href") };var dom_addressInforContent2 = elem.querySelectorAll(".address-infor02+.invoce_show .one");var addressInforContent2 = [];for (var i = 0; i < dom_addressInforContent2.length; i++) {
        var _text = dom_addressInforContent2[i].querySelector("label").innerText.split("*")[1].split(":")[0];var _display = dom_addressInforContent2[i].style.display;var _tip = dom_addressInforContent2[i].querySelector("div").innerText;var _value = null,
            _disabled = null;if (i == 0) {
          _disabled = elem.querySelector("#billngAdress_province").getAttribute("disabled");var provinceVal = elem.querySelector("#billngAdress_province").value;var provinceText = elem.querySelector("#billngAdress_province option[value='" + provinceVal + "']").innerText;var cityVal = elem.querySelector("#billngAdress_city").value;var cityText = elem.querySelector("#billngAdress_city option[value='" + cityVal + "']").innerText;var countyVal = elem.querySelector("#billngAdress_zone").value;addressInforContent2.push({ display: _display, text: _text, value: { province: { text: provinceText, value: provinceVal }, city: { text: cityText, value: cityVal }, county: { text: countyVal, value: countyVal } }, disabled: _disabled, tip: _tip });
        } else if (i == 1) {
          _disabled = dom_addressInforContent2[i].querySelector("textarea").getAttribute("disabled");_value = dom_addressInforContent2[i].querySelector("textarea").value;addressInforContent2.push({ display: _display, text: _text, value: _value, disabled: _disabled, tip: _tip });
        } else {
          _disabled = dom_addressInforContent2[i].querySelector("input").getAttribute("disabled");_value = dom_addressInforContent2[i].querySelector("input").value;addressInforContent2.push({ display: _display, text: _text, value: _value, disabled: _disabled, tip: _tip });
        }
      }var addressInfor2 = { title: elem.querySelector(".address-infor02 h5").innerText, content: addressInforContent2 };var footBtns = [];var dom_footBtns = elem.querySelectorAll("#billngAdressTip>.btns_r input[type='button']");for (var i = 0; i < dom_footBtns.length; i++) {
        footBtns.push({ text: dom_footBtns[i].value, disabled: dom_footBtns[i].getAttribute("disabled"), className: dom_footBtns[i].getAttribute("class") });
      }var data = { tabtitles: tabTitles, status: status, billingAddressFileDown: billingAddressFileDown, addressInfor: addressInfor, addressInfor2: addressInfor2, footBtns: footBtns };return data;
    }, doAction_uiControl34_tveGHD: function (data, elem) {
      "use strict";
      var type = data.eventType;var customData = data.customData;if (type == "back") {
        ysp.appMain.back();
      } else if (type == 'applyEditButton') {
        console.log("applyEditButton-click");elem.querySelector(".invoice_c .btn").click();
      } else if (type == 'invoiceRadiosChange') {
        console.log("invoiceRadiosChange-click");elem.querySelector("#InvoiceRadios li:nth-child(" + (customData + 1) + ") label").click();
      } else if (type == 'footBtnsHandler') {
        console.log("footBtnsHandler-click");elem.querySelector("#billngAdressTip>.btns_r input[type='button']:nth-child(" + (customData + 1) + ")").click();
      }
    }, getTemplate_uiControl34_tveGHD: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  \n  //\u8FD4\u56DE\n  back=()=>{ \n   let handler = this.props.customHandler;\n   if (handler) {\n    handler({\n    \teventType: 'back'\n    });\n   }\n  }\n  \n  applyEditButton=()=>{\n    let handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'applyEditButton'\n      });\n    }\n  }\n  \n  invoiceRadiosChange=(index, e)=>{\n    let handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: index,\n        eventType: 'invoiceRadiosChange'\n      });\n    }\n  }\n  \n  footBtnsHandler=(index, e)=>{\n    let handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: index,\n        eventType: 'footBtnsHandler'\n      });\n    }\n  }\n  \n  render() {\n    var data = this.props.customData;\n    var me = this;\n    var tabTitles = data.tabtitles;\n    var status = data.status;\n    var billingAddressFileDown = data.billingAddressFileDown;\n    var addressInfor = data.addressInfor;\n    var addressInforContent = addressInfor.content;\n    var addressInfor2 = data.addressInfor2;\n    var addressInforContent2 = addressInfor2.content;\n    var footBtns = data.footBtns;\n\n    return (\n      <Fragment>\n        <CustomHeader \n             data={{centerText:\"\u7A0E\u52A1\u767B\u8BB0\u7C7B\u578B\"}} \n             backIsShow={true} \n             filterIsShow={false}\n             editIsShow={false}\n             back={me.back.bind(me)}\n          />\n        <div class=\"tab-title\">\n\t\t\t\t\t{tabTitles.map((tabItem, tabIndex)=>{\n            return (\n              <div className=\"tab-item\">\n                <span className={tabItem.className}>\n                \t<input type=\"button\" value={tabItem.text} disabled={tabItem.disabled} onClick={this.invoiceRadiosChange.bind(this, tabIndex)}/>\n                </span>\n              </div>\n            )\n          })}\n        </div>\n        <div className=\"status\">\n          <div className=\"content\">\n            <span>{status.text}</span>\n            <em className={status.statusClass}>{status.value}</em>\n          </div>\n          <a href=\"javascript:;\" className=\"btn-apply\" onClick={this.applyEditButton}>\u7533\u8BF7\u4FEE\u6539</a>\n        </div>\n        <div className=\"address-content\">\n          <div className=\"item-infor\">\n            <div className=\"title\">\n            \t<h6>{addressInfor.title}</h6>\n              <a href={billingAddressFileDown.href} className=\"fr\">{billingAddressFileDown.text}</a>\n            </div>\n            <div className=\"content-list\">\n              {addressInforContent.map((item, index)=>{\n                \n                if(index == addressInforContent.length-2){\n                  return (\n                    <div className=\"item-list\" style={{display: item.display}}>\n                      <h5>{item.text}</h5>\n                      <a href=\"javascript:;\" className=\"btnText\">{item.btnText}<i className=\"icon-arrow\"></i></a>\n                    </div>\n                  )\n                }else if(index == addressInforContent.length-1){\n                \treturn (\n                    <div className=\"item-list\" style={{display: item.display}}>\n                      <h5>{item.text}</h5>\n                      <a href=\"javascript:;\" className=\"btnText\">{item.btnText}<i className=\"icon-arrow\"></i></a>\n                    </div>\n                  )\n                }else{\n                  return (\n                    <div className=\"item-list\" style={{display: item.display}}>\n                      <h5>{item.text}</h5>\n                      <AInput type=\"text\" value={item.value} disabled={item.disabled}/>\n                    </div>\n                  )\n                }\n                \n              })}\n            </div>\n          </div>\n          \n          <div className=\"item-infor\">\n            <div className=\"title\">\n            \t<h6>{addressInfor2.title}</h6>\n            </div>\n            <div className=\"content-list\">\n              {addressInforContent2.map((item, index)=>{\n                if(index == 0){\n                  var provinceText = item.value.province.text;\n                  var provinceVal = item.value.province.value;\n                  var cityText = item.value.city.text;\n                  var cityVal = item.value.city.value;\n                  var countyText = item.value.county.text;\n                  var countyVal = item.value.county.value;\n                  \n                  return (\n                    <div className=\"item-list\" style={{display: item.display}}>\n                      <h5>{item.text}</h5>\n                      <AInput type=\"text\" \n                        value={provinceText + cityText + countyText}\n                        disabled={item.disabled}\n                        data-province={provinceVal}\n                        data-city={cityVal}\n                        data-county={countyVal}\n                        />\n                    </div>\n                  )\n                }else{\n                  return (\n                    <div className=\"item-list\" style={{display: item.display}}>\n                      <h5>{item.text}</h5>\n                      <AInput type=\"text\" value={item.value} disabled={item.disabled}/>\n                    </div>\n                  )\n                }\n              })}\n            </div>\n          </div>\n          \n          <div className=\"footBtns\">\n            <input type=\"button\" \n              className={footBtns[1].className} \n              value=\"\u53D6\u6D88\" \n              disabled={footBtns[1].disabled} \n              onClick={this.footBtnsHandler.bind(this, 1)}\n            />\n            <input type=\"button\" \n              className={footBtns[0].className} \n              value=\"\u63D0\u4EA4\" \n              disabled={footBtns[0].disabled}\n              onClick={this.footBtnsHandler.bind(this, 0)}\n            />\n          </div>\n        </div>\n      </Fragment>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.back = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'back'\n        });\n      }\n    };\n\n    _this.applyEditButton = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'applyEditButton'\n        });\n      }\n    };\n\n    _this.invoiceRadiosChange = function (index, e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'invoiceRadiosChange'\n        });\n      }\n    };\n\n    _this.footBtnsHandler = function (index, e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'footBtnsHandler'\n        });\n      }\n    };\n\n    return _this;\n  }\n\n  //\u8FD4\u56DE\n\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      var me = this;\n      var tabTitles = data.tabtitles;\n      var status = data.status;\n      var billingAddressFileDown = data.billingAddressFileDown;\n      var addressInfor = data.addressInfor;\n      var addressInforContent = addressInfor.content;\n      var addressInfor2 = data.addressInfor2;\n      var addressInforContent2 = addressInfor2.content;\n      var footBtns = data.footBtns;\n\n      return React.createElement(\n        _react.Fragment,\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u7A0E\u52A1\u767B\u8BB0\u7C7B\u578B\" },\n          backIsShow: true,\n          filterIsShow: false,\n          editIsShow: false,\n          back: me.back.bind(me)\n        }),\n        React.createElement(\n          'div',\n          { 'class': 'tab-title' },\n          tabTitles.map(function (tabItem, tabIndex) {\n            return React.createElement(\n              'div',\n              { className: 'tab-item' },\n              React.createElement(\n                'span',\n                { className: tabItem.className },\n                React.createElement('input', { type: 'button', value: tabItem.text, disabled: tabItem.disabled, onClick: _this2.invoiceRadiosChange.bind(_this2, tabIndex) })\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'status' },\n          React.createElement(\n            'div',\n            { className: 'content' },\n            React.createElement(\n              'span',\n              null,\n              status.text\n            ),\n            React.createElement(\n              'em',\n              { className: status.statusClass },\n              status.value\n            )\n          ),\n          React.createElement(\n            'a',\n            { href: 'javascript:;', className: 'btn-apply', onClick: this.applyEditButton },\n            '\\u7533\\u8BF7\\u4FEE\\u6539'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'address-content' },\n          React.createElement(\n            'div',\n            { className: 'item-infor' },\n            React.createElement(\n              'div',\n              { className: 'title' },\n              React.createElement(\n                'h6',\n                null,\n                addressInfor.title\n              ),\n              React.createElement(\n                'a',\n                { href: billingAddressFileDown.href, className: 'fr' },\n                billingAddressFileDown.text\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'content-list' },\n              addressInforContent.map(function (item, index) {\n\n                if (index == addressInforContent.length - 2) {\n                  return React.createElement(\n                    'div',\n                    { className: 'item-list', style: { display: item.display } },\n                    React.createElement(\n                      'h5',\n                      null,\n                      item.text\n                    ),\n                    React.createElement(\n                      'a',\n                      { href: 'javascript:;', className: 'btnText' },\n                      item.btnText,\n                      React.createElement('i', { className: 'icon-arrow' })\n                    )\n                  );\n                } else if (index == addressInforContent.length - 1) {\n                  return React.createElement(\n                    'div',\n                    { className: 'item-list', style: { display: item.display } },\n                    React.createElement(\n                      'h5',\n                      null,\n                      item.text\n                    ),\n                    React.createElement(\n                      'a',\n                      { href: 'javascript:;', className: 'btnText' },\n                      item.btnText,\n                      React.createElement('i', { className: 'icon-arrow' })\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    'div',\n                    { className: 'item-list', style: { display: item.display } },\n                    React.createElement(\n                      'h5',\n                      null,\n                      item.text\n                    ),\n                    React.createElement(AInput, { type: 'text', value: item.value, disabled: item.disabled })\n                  );\n                }\n              })\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'item-infor' },\n            React.createElement(\n              'div',\n              { className: 'title' },\n              React.createElement(\n                'h6',\n                null,\n                addressInfor2.title\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'content-list' },\n              addressInforContent2.map(function (item, index) {\n                if (index == 0) {\n                  var provinceText = item.value.province.text;\n                  var provinceVal = item.value.province.value;\n                  var cityText = item.value.city.text;\n                  var cityVal = item.value.city.value;\n                  var countyText = item.value.county.text;\n                  var countyVal = item.value.county.value;\n\n                  return React.createElement(\n                    'div',\n                    { className: 'item-list', style: { display: item.display } },\n                    React.createElement(\n                      'h5',\n                      null,\n                      item.text\n                    ),\n                    React.createElement(AInput, { type: 'text',\n                      value: provinceText + cityText + countyText,\n                      disabled: item.disabled,\n                      'data-province': provinceVal,\n                      'data-city': cityVal,\n                      'data-county': countyVal\n                    })\n                  );\n                } else {\n                  return React.createElement(\n                    'div',\n                    { className: 'item-list', style: { display: item.display } },\n                    React.createElement(\n                      'h5',\n                      null,\n                      item.text\n                    ),\n                    React.createElement(AInput, { type: 'text', value: item.value, disabled: item.disabled })\n                  );\n                }\n              })\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'footBtns' },\n            React.createElement('input', { type: 'button',\n              className: footBtns[1].className,\n              value: '\\u53D6\\u6D88',\n              disabled: footBtns[1].disabled,\n              onClick: this.footBtnsHandler.bind(this, 1)\n            }),\n            React.createElement('input', { type: 'button',\n              className: footBtns[0].className,\n              value: '\\u63D0\\u4EA4',\n              disabled: footBtns[0].disabled,\n              onClick: this.footBtnsHandler.bind(this, 0)\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "billngAddress");
})(window, ysp);