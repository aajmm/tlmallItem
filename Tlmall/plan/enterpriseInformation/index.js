(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_KUe5Uq: function (elem) {},
    doAction_uiControl16_KPuEvG: function (data, elem) {},
    getTemplate_uiControl16_KPuEvG: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <Header title=\"\u5B8C\u5584\u6211\u7684\u8D26\u53F7\">\n  <HeaderLeft>\n    <i onClick={back}></i>\n  </HeaderLeft>\n</Header>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { title: '\\u5B8C\\u5584\\u6211\\u7684\\u8D26\\u53F7' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement('i', { onClick: _appRenderer.back })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control17_b85ysT: function (elem) {
      if (!elem) {
        return;
      }var enterpriseNatureAll = []; //企业性质
      var enterpriseName = ''; //公司名称
      var provinceAll = []; //所有省
      var provinceVal = []; //所有省的val
      var cityAll = []; //所有市
      var cityVal = []; //所有市的val
      // var zoneAll = []; //所有区/县
      // var zoneVal = []; //所有区/县val
      var detailedAddress = ''; //详细地址
      var corporateIdInformationAll = []; //企业证件信息
      var isOne = {}; //是否三证合一
      var contactInformation = {}; // 联系人信息
      var salesStaff = {}; //销售人员
      var enterpriseNatures = elem.querySelector('#enterpriseType').querySelectorAll('option');for (var i = 0; i < enterpriseNatures.length; i++) {
        enterpriseNatureAll.push(enterpriseNatures[i].textContent);
      }enterpriseName = elem.querySelector('#enterpriseName').value;var province = elem.querySelector('#province').querySelectorAll('option');for (var i = 0; i < province.length; i++) {
        provinceAll.push(province[i].textContent);provinceVal.push(province[i].value);
      }var city = elem.querySelector('#city').querySelectorAll('option');for (var i = 0; i < city.length; i++) {
        cityAll.push(city[i].textContent);cityVal.push(city[i].value);
      } // var zone = elem.querySelector('#zone').querySelectorAll('option');
      // for (var i = 0; i < zone.length; i++) {
      //   zoneAll.push(zone[i].textContent);
      //   zoneVal.push(zone[i].value)
      // }
      detailedAddress = elem.querySelector('#address').value;var corporateInformation = elem.querySelector('.tab_zc_radios').querySelectorAll('label');var checkedStatus = elem.querySelector('.tab_zc_radios').querySelectorAll('.iradio_tlmall');for (var i = 0; i < corporateInformation.length; i++) {
        var corporateIdInformation = {};for (var j = 0; j < corporateInformation.length; j++) {
          corporateIdInformation.text = corporateInformation[i].textContent;corporateIdInformation.status = checkedStatus[i].classList.contains('checked') ? true : false;
        }corporateIdInformationAll.push(corporateIdInformation);
      }isOne = { tit: elem.querySelector('.ck_tip').querySelector('label').textContent, flag: elem.querySelector('.icheckbox_red').classList.contains('checked') ? true : false };contactInformation = { contactName: elem.querySelector('#contactPersonName').value, contactPhone: elem.querySelector('#contactPhone').value };return contactInformation;
    },
    doAction_uiControl17_xTlhrw: function (data, elem) {},
    getTemplate_uiControl17_xTlhrw: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    }
  });
})(window, ysp);