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
      }var data = {};var enterpriseNatureAll = []; //企业性质
      var enterpriseNatureChecked = ''; //企业性质默认
      var enterpriseName = ''; //公司名称
      var provinceAll = []; //所有省
      var provinceVal = []; //所有省的val
      var cityAll = []; //所有市
      var cityVal = []; //所有市的val
      var zone = ''; //区/县
      var detailedAddress = ''; //详细地址
      var corporateIdInformationAll = []; //企业证件信息
      var isOne = {}; //是否三证合一
      var legalName = ''; //法人姓名
      var contactInformation = {}; // 联系人信息
      var salesStaff = {}; //销售人员
      var enterpriseNatures = elem.querySelector('#enterpriseType').querySelectorAll('option');for (var i = 0; i < enterpriseNatures.length; i++) {
        enterpriseNatureAll.push(enterpriseNatures[i].textContent);
      }enterpriseNatureChecked = elem.querySelector('#enterpriseType').querySelectorAll('option')[elem.querySelector('#enterpriseType').options.selectedIndex].value;enterpriseName = elem.querySelector('#enterpriseName').value;var province = elem.querySelector('#province').querySelectorAll('option');for (var i = 0; i < province.length; i++) {
        provinceAll.push(province[i].textContent);provinceVal.push(province[i].value);
      }var city = elem.querySelector('#city').querySelectorAll('option');for (var i = 0; i < city.length; i++) {
        cityAll.push(city[i].textContent);cityVal.push(city[i].value);
      }var zone = elem.querySelector('#zone').value;detailedAddress = elem.querySelector('#address').value;var corporateInformation = elem.querySelector('.tab_zc_radios').querySelectorAll('label');var checkedStatus = elem.querySelector('.tab_zc_radios').querySelectorAll('.iradio_tlmall');for (var i = 0; i < corporateInformation.length; i++) {
        var corporateIdInformation = {};for (var j = 0; j < corporateInformation.length; j++) {
          corporateIdInformation.text = corporateInformation[i].textContent;corporateIdInformation.status = checkedStatus[i].classList.contains('checked') ? true : false;
        }corporateIdInformationAll.push(corporateIdInformation);
      }isOne = { tit: elem.querySelector('.ck_tip').querySelector('label').textContent, flag: elem.querySelector('.icheckbox_red').classList.contains('checked') ? true : false };legalName = elem.querySelector('#legalName').value;contactInformation = { contactName: elem.querySelector('#contactPersonName').value, contactPhone: elem.querySelector('#contactPhone').value };salesStaff = { salesmanName: elem.querySelector('#salesmanName').placeholder, salesmanPhone: elem.querySelector('#salesmanPhone').placeholder };data = { enterpriseNatureAll: enterpriseNatureAll, enterpriseNatureChecked: enterpriseNatureChecked, enterpriseName: enterpriseName, provinceAll: provinceAll, provinceVal: provinceVal, cityAll: cityAll, cityVal: cityVal, zone: zone, detailedAddress: detailedAddress, corporateIdInformationAll: corporateIdInformationAll, legalName: legalName, isOne: isOne, contactInformation: contactInformation, salesStaff: salesStaff };return data;
    },
    doAction_uiControl17_xTlhrw: function (data, elem) {},
    getTemplate_uiControl17_xTlhrw: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state = {\n      licenseStatus: true,\n      idStatus: false\n    }\n  }\n  //\u8EAB\u4EFD\u8BC1\u8425\u4E1A\u6267\u7167\u9009\u62E9\u5217\u8868\u5C55\u5F00\n  downMenu=(e)=>{\n    var target=e.target;\n    var el = target.parentNode.querySelector('.enterpriseInformation-list');\n\t\tif(el.style.display == 'none'){\n      el.style.display = 'block';\n      \n    }else if(el.style.display == 'block'){\n      el.style.display = 'none'\n    }\n  }\n  chooseType=(e)=>{\n    var target=e.target;\n    if(target.classList.contains('active')){\n      target.classList.remove('active');\n    }else{\n      target.className = 'active';\n    }\n    if(target.innerHTML == '\u8425\u4E1A\u6267\u7167'){\n      this.setState({\n        licenseStatus: true,\n      \tidStatus: false\n\t\t\t})\n    }else if(target.innerHTML == '\u6CD5\u4EBA\u8BC1\u4EF6'){\n      this.setState({\n        licenseStatus: false,\n      \tidStatus: true\n\t\t\t})\n    }\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"chooseType\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    return (\n      <div className='enterpriseInformation'>\n        <h3>\u4F01\u4E1A\u4FE1\u606F</h3>\n        <div className='enterpriseInformation-form'>\t\t\n          <p className='enterprise-type'>\n            <select>\n              {data.enterpriseNatureAll && data.enterpriseNatureAll.map((item,i)=>(\n                <option value={i} selected={data.enterpriseNatureChecked==i?'selected':null}>{item}</option> \n              ))}\n            </select>\n        \t\t<label>(\u4E0E\u4F01\u4E1A\u8425\u4E1A\u6267\u7167\u4E00\u81F4)</label>\n        \t</p>\n          <p className='enterprise-name'><i>*</i><input type='text' value={data.enterpriseName} placeholder='\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0'/></p>\n          <p className='enterprise-address'>\n            <i>*</i>\n            <select>\n              {\n                data.provinceAll && data.provinceAll.map((item,i)=>(\n                  <option value={data.provinceVal[i]}>{item}</option>\n                ))\n              }\n            </select>\n            <select>\n              {\n                data.cityAll && data.cityAll.map((item,i)=>(\n                  <option value={data.cityVal[i]}>{item}</option>\n                ))\n              }\n            </select>\n            <input type='text' value={data.zone && data.zone}/>\n          </p>\n          <div className='detail-address'>\n            <p>\n              <i>*</i>\n            \t<input value={data.detailedAddress && data.detailedAddress} placeholder='\u8BF7\u8F93\u5165\u8BE6\u7EC6\u7ECF\u8425\u5730\u5740' />\n            </p>\n            <b className='enterpriseInformation-downmenu' onClick={this.downMenu}></b>\n            <div className='enterpriseInformation-list' style={{display:'none'}}>\n              <div className='enterpriseInformation-choose'>\n                {\n                  data.corporateIdInformationAll && data.corporateIdInformationAll.map((item,i)=>(\n                    <p>\n                      \n                      <span className={item.status && item.status ? 'active' : ''} onClick={this.chooseType}>{item.text}</span>\n                    </p>\n                  ))\n                }\n              </div>\n          \t</div>\n          </div>\n          {this.state.idStatus ? <div className='legal-information'>\n            <p className='legal-name'>\n              <i>*</i>\n              <input type='text' value={data.legalName && data.legalName} placeholder='\u8BF7\u8F93\u5165\u6CD5\u4EBA\u59D3\u540D'/>\n          \t</p>\n            <p className='id-number'>\n              <i>*</i>\n              <input type='text' placeholder='\u8BF7\u8F93\u5165\u6CD5\u4EBA\u8EAB\u4EFD\u8BC1\u53F7'/>\n          \t</p>\n            <div className='id-card'>\n              <p>\n                <i>*</i>\n            \t\t<input type='text' placeholder='\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1'/>\n            \t\t<button><input type='file'/>\u62CD\u7167\u6216\u626B\u63CF\u4E0A\u4F20</button>\n              </p>\n              <span>\u5982\u586B\u5199\u6CD5\u4EBA\u59D3\u540D\u548C\u8EAB\u4EFD\u8BC1\u53F7,\u5219\u65E0\u9700\u586B\u5199\u8425\u4E1A\u6267\u7167\u53F7</span>\n          \t</div>\n          </div> : null}\n          {this.state.licenseStatus ? <div className='license-information'>\n            <p className='business-license-number'>\n              <i>*</i>\n              <input type='text' placeholder='\u8BF7\u8F93\u5165\u8425\u4E1A\u6267\u7167\u6CE8\u518C\u53F7'/>\n          \t</p>\n            <div className='business-license'>\n              <p>\n                <i>*</i>\n                <input type='text' placeholder='\u8BF7\u8F93\u5165\u8425\u4E1A\u6267\u7167'/>\n            \t\t<button><input type='file'/>\u62CD\u7167\u6216\u626B\u63CF\u4E0A\u4F20</button>\n              </p>\n              <span>\u5982\u586B\u5199\u6CD5\u4EBA\u59D3\u540D\u548C\u8EAB\u4EFD\u8BC1\u53F7,\u5219\u65E0\u9700\u586B\u5199\u8425\u4E1A\u6267\u7167\u53F7</span>\n          \t</div>\n          </div> : null}\n        </div>\n        <h3>\u8054\u7CFB\u4EBA\u4FE1\u606F</h3>\n        <div className='contact-information'>\n          <p className='contact-name'>\n            <i>*</i>\n            <input type='text' value={data.contactInformation && data.contactInformation.contactName} placeholder='\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D'/>\n          </p>\n          <p className='contact-phone'>\n            <i>*</i>\n            <input type='text' value={data.contactInformation && data.contactInformation.contactPhone} placeholder='\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u7535\u8BDD'/>\n          </p>\n        </div>\n        <h3>\u666E\u5929\u592A\u529B\u8054\u7CFB\u4EBA</h3>\n        <div className='PTTL-contact-information'>\n          <p className='PTTL-contact-name'><i>*</i><input type='text' placeholder={data.salesStaff && data.salesStaff.salesmanName}/></p>\n          <p className='PTTL-contact-phone'><i>*</i><input type='text' placeholder={data.salesStaff && data.salesStaff.salesmanPhone}/></p>\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.downMenu = function (e) {\n      var target = e.target;\n      var el = target.parentNode.querySelector('.enterpriseInformation-list');\n      if (el.style.display == 'none') {\n        el.style.display = 'block';\n      } else if (el.style.display == 'block') {\n        el.style.display = 'none';\n      }\n    };\n\n    _this.chooseType = function (e) {\n      var target = e.target;\n      if (target.classList.contains('active')) {\n        target.classList.remove('active');\n      } else {\n        target.className = 'active';\n      }\n      if (target.innerHTML == '\u8425\u4E1A\u6267\u7167') {\n        _this.setState({\n          licenseStatus: true,\n          idStatus: false\n        });\n      } else if (target.innerHTML == '\u6CD5\u4EBA\u8BC1\u4EF6') {\n        _this.setState({\n          licenseStatus: false,\n          idStatus: true\n        });\n      }\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"chooseType\"\n        });\n      }\n    };\n\n    _this.state = {\n      licenseStatus: true,\n      idStatus: false\n    };\n    return _this;\n  }\n  //\u8EAB\u4EFD\u8BC1\u8425\u4E1A\u6267\u7167\u9009\u62E9\u5217\u8868\u5C55\u5F00\n\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'enterpriseInformation' },\n        React.createElement(\n          'h3',\n          null,\n          '\\u4F01\\u4E1A\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'enterpriseInformation-form' },\n          React.createElement(\n            'p',\n            { className: 'enterprise-type' },\n            React.createElement(\n              'select',\n              null,\n              data.enterpriseNatureAll && data.enterpriseNatureAll.map(function (item, i) {\n                return React.createElement(\n                  'option',\n                  { value: i, selected: data.enterpriseNatureChecked == i ? 'selected' : null },\n                  item\n                );\n              })\n            ),\n            React.createElement(\n              'label',\n              null,\n              '(\\u4E0E\\u4F01\\u4E1A\\u8425\\u4E1A\\u6267\\u7167\\u4E00\\u81F4)'\n            )\n          ),\n          React.createElement(\n            'p',\n            { className: 'enterprise-name' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement('input', { type: 'text', value: data.enterpriseName, placeholder: '\\u8BF7\\u8F93\\u5165\\u516C\\u53F8\\u540D\\u79F0' })\n          ),\n          React.createElement(\n            'p',\n            { className: 'enterprise-address' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement(\n              'select',\n              null,\n              data.provinceAll && data.provinceAll.map(function (item, i) {\n                return React.createElement(\n                  'option',\n                  { value: data.provinceVal[i] },\n                  item\n                );\n              })\n            ),\n            React.createElement(\n              'select',\n              null,\n              data.cityAll && data.cityAll.map(function (item, i) {\n                return React.createElement(\n                  'option',\n                  { value: data.cityVal[i] },\n                  item\n                );\n              })\n            ),\n            React.createElement('input', { type: 'text', value: data.zone && data.zone })\n          ),\n          React.createElement(\n            'div',\n            { className: 'detail-address' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'i',\n                null,\n                '*'\n              ),\n              React.createElement('input', { value: data.detailedAddress && data.detailedAddress, placeholder: '\\u8BF7\\u8F93\\u5165\\u8BE6\\u7EC6\\u7ECF\\u8425\\u5730\\u5740' })\n            ),\n            React.createElement('b', { className: 'enterpriseInformation-downmenu', onClick: this.downMenu }),\n            React.createElement(\n              'div',\n              { className: 'enterpriseInformation-list', style: { display: 'none' } },\n              React.createElement(\n                'div',\n                { className: 'enterpriseInformation-choose' },\n                data.corporateIdInformationAll && data.corporateIdInformationAll.map(function (item, i) {\n                  return React.createElement(\n                    'p',\n                    null,\n                    React.createElement(\n                      'span',\n                      { className: item.status && item.status ? 'active' : '', onClick: _this2.chooseType },\n                      item.text\n                    )\n                  );\n                })\n              )\n            )\n          ),\n          this.state.idStatus ? React.createElement(\n            'div',\n            { className: 'legal-information' },\n            React.createElement(\n              'p',\n              { className: 'legal-name' },\n              React.createElement(\n                'i',\n                null,\n                '*'\n              ),\n              React.createElement('input', { type: 'text', value: data.legalName && data.legalName, placeholder: '\\u8BF7\\u8F93\\u5165\\u6CD5\\u4EBA\\u59D3\\u540D' })\n            ),\n            React.createElement(\n              'p',\n              { className: 'id-number' },\n              React.createElement(\n                'i',\n                null,\n                '*'\n              ),\n              React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u6CD5\\u4EBA\\u8EAB\\u4EFD\\u8BC1\\u53F7' })\n            ),\n            React.createElement(\n              'div',\n              { className: 'id-card' },\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'i',\n                  null,\n                  '*'\n                ),\n                React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u8EAB\\u4EFD\\u8BC1' }),\n                React.createElement(\n                  'button',\n                  null,\n                  React.createElement('input', { type: 'file' }),\n                  '\\u62CD\\u7167\\u6216\\u626B\\u63CF\\u4E0A\\u4F20'\n                )\n              ),\n              React.createElement(\n                'span',\n                null,\n                '\\u5982\\u586B\\u5199\\u6CD5\\u4EBA\\u59D3\\u540D\\u548C\\u8EAB\\u4EFD\\u8BC1\\u53F7,\\u5219\\u65E0\\u9700\\u586B\\u5199\\u8425\\u4E1A\\u6267\\u7167\\u53F7'\n              )\n            )\n          ) : null,\n          this.state.licenseStatus ? React.createElement(\n            'div',\n            { className: 'license-information' },\n            React.createElement(\n              'p',\n              { className: 'business-license-number' },\n              React.createElement(\n                'i',\n                null,\n                '*'\n              ),\n              React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u8425\\u4E1A\\u6267\\u7167\\u6CE8\\u518C\\u53F7' })\n            ),\n            React.createElement(\n              'div',\n              { className: 'business-license' },\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'i',\n                  null,\n                  '*'\n                ),\n                React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u8425\\u4E1A\\u6267\\u7167' }),\n                React.createElement(\n                  'button',\n                  null,\n                  React.createElement('input', { type: 'file' }),\n                  '\\u62CD\\u7167\\u6216\\u626B\\u63CF\\u4E0A\\u4F20'\n                )\n              ),\n              React.createElement(\n                'span',\n                null,\n                '\\u5982\\u586B\\u5199\\u6CD5\\u4EBA\\u59D3\\u540D\\u548C\\u8EAB\\u4EFD\\u8BC1\\u53F7,\\u5219\\u65E0\\u9700\\u586B\\u5199\\u8425\\u4E1A\\u6267\\u7167\\u53F7'\n              )\n            )\n          ) : null\n        ),\n        React.createElement(\n          'h3',\n          null,\n          '\\u8054\\u7CFB\\u4EBA\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'contact-information' },\n          React.createElement(\n            'p',\n            { className: 'contact-name' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement('input', { type: 'text', value: data.contactInformation && data.contactInformation.contactName, placeholder: '\\u8BF7\\u8F93\\u5165\\u8054\\u7CFB\\u4EBA\\u59D3\\u540D' })\n          ),\n          React.createElement(\n            'p',\n            { className: 'contact-phone' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement('input', { type: 'text', value: data.contactInformation && data.contactInformation.contactPhone, placeholder: '\\u8BF7\\u8F93\\u5165\\u8054\\u7CFB\\u4EBA\\u7535\\u8BDD' })\n          )\n        ),\n        React.createElement(\n          'h3',\n          null,\n          '\\u666E\\u5929\\u592A\\u529B\\u8054\\u7CFB\\u4EBA'\n        ),\n        React.createElement(\n          'div',\n          { className: 'PTTL-contact-information' },\n          React.createElement(\n            'p',\n            { className: 'PTTL-contact-name' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement('input', { type: 'text', placeholder: data.salesStaff && data.salesStaff.salesmanName })\n          ),\n          React.createElement(\n            'p',\n            { className: 'PTTL-contact-phone' },\n            React.createElement(\n              'i',\n              null,\n              '*'\n            ),\n            React.createElement('input', { type: 'text', placeholder: data.salesStaff && data.salesStaff.salesmanPhone })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_undefined: function (elem) {},
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    }
  }, "enterpriseInformation");
})(window, ysp);