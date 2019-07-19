"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control174_81MqFT: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl171_iPOSCv: function (data, elem) {
      if (data.eventType == "back") {
        ysp.customHelper.backHome();
      } // <CustomHeader 
      //           data={{centerText:"信息录入",rightText:"筛选"}} 
      //           backIsShow={true} 
      //           back={()=>{ 
      //              let handler = _this.props.customHandler;
      //              if (handler) {
      //                handler({
      //                  eventType: 'back'
      //                });
      //              }
      //           }} 
      //           filterIsShow={false} 
      //           filter={()=>{console.info("header filter ...")}}/>
    },
    getTemplate_uiControl171_iPOSCv: function getTemplate_uiControl171_iPOSCv() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n        <div> </div>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n   _inherits(_class, _Component);\n\n   function _class() {\n      var _ref;\n\n      var _temp, _this2, _ret;\n\n      _classCallCheck(this, _class);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n         args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n         var _this = _this2;\n         return React.createElement(\n            'div',\n            null,\n            ' '\n         );\n      }, _temp), _possibleConstructorReturn(_this2, _ret);\n   }\n\n   return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control178_WvVIne: function (elem) {
      if (!elem) {
        return;
      }var menus = elem.querySelectorAll('a');var content = [];var flag = { flag: false };for (let i = 0; i < menus.length; i++) {
        content.push(ysp.customHelper.trim(menus[i].textContent));if (ysp.customHelper.trim(menus[i].textContent) == '客户信息录入' || ysp.customHelper.trim(menus[i].textContent) == '门店信息录入（HES）') {
          flag.flag = true;
        }
      }content.push(flag);return { content, flag };
    },
    doAction_uiControl175_cTSTMl: function (data, elem) {
      if (data.eventType === 'click') {
        var menus = elem.querySelectorAll('a');var operation = data.dataCustom.value;for (var i = 0; i < menus.length; i++) {
          if (ysp.customHelper.trim(menus[i].textContent) == operation) {
            var href = menus[i].href;ysp.customHelper.openWindow(href, menus[i].textContent);ysp.customHelper.saleReachStamp.clear();ysp.customHelper.forceMatchModels(data.customData.planName);
          }
        }
      }if (data.eventTypr == 'ready') {
        ysp.customHelper.backHome();
      } // <div className='ysp-vistPlan'>
      // 			<div className='layoutFlex'>
      //         {data && _this.isInclude(data,'客户信息录入') ? 
      //           <div className='itemNative' onClick={_this.handlerClick.bind(_this, '客户信息录入','customerInformationFIll')}>
      //           <div className='MonthlyIcon'></div>
      //           <div className='itemFont'>客户信息录入</div>
      //       </div> : undefined}
      //       {data && _this.isInclude(data,'门店信息录入（HES）') ? 
      //         <div className='itemNative' onClick={_this.handlerClick.bind(_this,'门店信息录入（HES）','HESInformationFill')}>
      //           <div className='yearIcon'></div>
      //           <div className='itemFont'>HES信息录入</div>
      //         </div> : undefined}
      //     </div>
      //   </div>
    },
    getTemplate_uiControl175_cTSTMl: function getTemplate_uiControl175_cTSTMl() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      flag : props.customData.flag\n    }\n  }\n    handlerClick(value,name) {\n      const handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            planName:name,\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      flag : nextProps.customData.flag\n    })\n  }\n  \n    isInclude(array, tag) {\n      for (let i = 0; i < array.length; i++) {\n        if (array[i].indexOf(tag) != -1) {\n          return true;\n        }\n      }\n      return false;\n    }\n    render () {\n      let _this = this;\n      var data = this.props.customData.content;\n      if(!_this.state.flag){\n         return(\n        <div style={{margin:'20px' ,textAlign:'center',fontWeight:'600'}}><span style={{color:'red'}}>\u6CE8*</span>\u5F53\u524D\u7528\u6237\u6743\u9650\u65E0\u6B64\u529F\u80FD</div>\n         )\n        }else{\n            return (\n    \t\t\t\t\t<div>\u6570\u636E\u52A0\u8F7D\u4E2D...</div>\n  \t\t\t\t)\n       }\n    }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      flag: props.customData.flag\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick(value, name) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            planName: name,\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        flag: nextProps.customData.flag\n      });\n    }\n  }, {\n    key: 'isInclude',\n    value: function isInclude(array, tag) {\n      for (var i = 0; i < array.length; i++) {\n        if (array[i].indexOf(tag) != -1) {\n          return true;\n        }\n      }\n      return false;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData.content;\n      if (!_this.state.flag) {\n        return React.createElement(\n          'div',\n          { style: { margin: '20px', textAlign: 'center', fontWeight: '600' } },\n          React.createElement(\n            'span',\n            { style: { color: 'red' } },\n            '\\u6CE8*'\n          ),\n          '\\u5F53\\u524D\\u7528\\u6237\\u6743\\u9650\\u65E0\\u6B64\\u529F\\u80FD'\n        );\n      } else {\n        return React.createElement(\n          'div',\n          null,\n          '\\u6570\\u636E\\u52A0\\u8F7D\\u4E2D...'\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);