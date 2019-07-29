(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control98_UOORsI: function (elem) {
      if (!elem) {
        return { value: '', len: '', title: '销售达成' };
      }var dataMonth = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_month"]');var dataYear = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_year"]');if (dataMonth) {
        data = dataMonth.value;flag = true;
      } else {
        data = dataYear.value;flag = false;
      }var len = data.length;data = data.slice(0, len);var title;var u_title = elem.ownerDocument.querySelector('#tab-head');if (u_title) {
        var links = u_title.querySelectorAll('li');for (var i = 0; i < links.length; i++) {
          if (links[i].className.indexOf('act') != -1) {
            title = links[i].textContent;
          }
        }
      } else {
        title = '销售达成';
      }var moreLength = elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li').length == 1 ? false : true;
      var titleLength = elem.ownerDocument.querySelector("#tab_box").querySelectorAll("li").length > 1 ? true : false;var titleName = elem.ownerDocument.querySelector("#tab_box").querySelectorAll("li")[0].textContent;return { value: data, len: len, title: title, moreLength: moreLength, flag: flag, titleLength: titleLength, titleName: titleName };
    },
    doAction_uiControl99_ZsT49M: function (data, elem) {
      // if (data.eventType === 'back') {
      //   var li = elem && elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li').length;
      //   li > 1 ? elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li')[li - 2].querySelector('a').click() : ysp.appMain.back();
      // }
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackFlag = 'reachBigData';
      }if (data.eventType === 'back') {
        if (!top.EAPI.isAndroid()) {
          var li = elem && elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li').length;li > 1 ? elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li')[li - 2].querySelector('a').click() : elem.ownerDocument.defaultView.close();
        } else {
          ysp.customHelper.AndroidBackFn();
        }
      } // if (data.eventType == 'close') {
      //   ysp.appMain.back();
      // }
      // if (data.eventType == 'time') {
      // }
      // if (data.eventType == 'change') {
      //   var datetime = data.dataCustom.value;
      //   var len = data.dataCustom.len;
      //   datetime = datetime.slice(0, len);
      //   console.log(datetime);
      //   elem.ownerDocument.querySelector('#filterArea').querySelector('.input-group-addon').click();
      //   var time = elem.ownerDocument.querySelector('#filterArea').querySelector('input[placeholder="选择日期"]');
      //   time.focus();
      //   time.value = datetime;
      //   time.blur();
      //   elem.ownerDocument.querySelector('#queryBtn').click();
      // }
    },
    getTemplate_uiControl99_ZsT49M: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {ComplexHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  constructor(props){\n  \tsuper(props);\n    this.state = {\n    \tcenterText: "\u9500\u552E\u8FBE\u6210",\n      moreLength:props.customData.moreLength,\n      flag:props.customData.flag,\n      titleLength:props.customData.titleLength,\n      titleName:props.customData.titleName\n    }\n  }\n  // componentDidMount(){\n  //   var _this = this;\n  //   ysp.customHelper.AndroidBackFlag = \'SaleBigData\';\n  //   var handler = _this.props.customHandler;\n  //   if (handler) {\n  //     handler({\n  //       eventType: \'AndroidBack\'\n  //     });\n  //   }\n  // }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      moreLength:nextProps.customData.moreLength,\n      flag:nextProps.customData.flag,\n      titleLength:nextProps.customData.titleLength,\n      titleName:nextProps.customData.titleName\n    })\n  }\n  componentDidMount(){\n  \twindow.addEventListener(\'ysp-change-title\', this.changeTitle.bind(this), false);\n    this.setState({\n    \tcenterText: this.props.customData.title\n    })\n    //android\u7269\u7406\u8FD4\u56DE\u952E\n    ysp.customHelper.AndroidBackFlag = \'reachBigData\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'AndroidBack\'\n      });\n    }\n  }\n  componentDidUpdate(){\n  \tvar sTitle = this.state.centerText;\n    var rTitle = this.props.customData.title;\n    if(sTitle != rTitle){\n    \tthis.setState({\n      \tcenterText: rTitle\n      })\n    }\n  }\n  changeTitle(e){\n  \tvar title = e.title;\n    this.setState({\n    \tcenterText: title\n    });\n  }\n   render = () => {\n       var _this = this;\n       return (\n         <div>\n         <ComplexHeader \n           data={{centerText: this.state.centerText,rightText:"\u65F6\u95F4"}} \n           backIsShow={true} \n           back={()=>{\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }}\n           centerTime={this.props.customData && this.props.customData.value}\n           closeIsShow={false} \n           close={()=>{\n           \tvar handler = _this.props.customHandler;\n             if(handler){\n             \thandler({\n              \teventType : \'close\'\n              })\n             }\n           }}\n           timeChange={(e)=>{\n               console.log(\'change\',EAPI.isIOS());\n               if(EAPI.isIOS()){\n                 return;\n               }\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                  data:{\n                  \tvalue: e.target.value,\n                    len: this.props.customData && this.props.customData.len\n                  },\n                \teventType : \'change\'\n                })\n               }\n             }}\n           timeBlur={(e)=>{\n               console.log(\'blur\',EAPI.isIOS());\n               if(!EAPI.isIOS()){\n                 return;\n               }\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                  data:{\n                  \tvalue: e.target.value,\n                    len: this.props.customData && this.props.customData.len\n                  },\n                \teventType : \'change\'\n                })\n               }\n             }}\n           moreIsShow={this.state.titleName == "\u5E74\u5EA6\u4E8B\u4E1A\u90E8\u8FBE\u6210" ? true : this.state.moreLength ? this.state.titleLength : false}\n           hander={()=>{\n           \tvar evt = new Event(\'ysp-dialog-close\');\n             evt.value=\'\u6210\u4E86\';\n             window.dispatchEvent(evt);\n           }}\n           filterIsShow={true} \n           filter={()=>{\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                \teventType:\'time\'\n                })\n               }\n             }}\n           time={(e)=>{\n               var evt = new Event(\'ysp-time-show\')\n               window.dispatchEvent(evt)\n             }}\n           />\n         </div>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.ComplexHeader, {\n          data: { centerText: _this2.state.centerText, rightText: "\u65F6\u95F4" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'back\'\n              });\n            }\n          },\n          centerTime: _this2.props.customData && _this2.props.customData.value,\n          closeIsShow: false,\n          close: function close() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'close\'\n              });\n            }\n          },\n          timeChange: function timeChange(e) {\n            console.log(\'change\', EAPI.isIOS());\n            if (EAPI.isIOS()) {\n              return;\n            }\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                data: {\n                  value: e.target.value,\n                  len: _this2.props.customData && _this2.props.customData.len\n                },\n                eventType: \'change\'\n              });\n            }\n          },\n          timeBlur: function timeBlur(e) {\n            console.log(\'blur\', EAPI.isIOS());\n            if (!EAPI.isIOS()) {\n              return;\n            }\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                data: {\n                  value: e.target.value,\n                  len: _this2.props.customData && _this2.props.customData.len\n                },\n                eventType: \'change\'\n              });\n            }\n          },\n          moreIsShow: _this2.state.titleName == "\u5E74\u5EA6\u4E8B\u4E1A\u90E8\u8FBE\u6210" ? true : _this2.state.moreLength ? _this2.state.titleLength : false,\n          hander: function hander() {\n            var evt = new Event(\'ysp-dialog-close\');\n            evt.value = \'\u6210\u4E86\';\n            window.dispatchEvent(evt);\n          },\n          filterIsShow: true,\n          filter: function filter() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'time\'\n              });\n            }\n          },\n          time: function time(e) {\n            var evt = new Event(\'ysp-time-show\');\n            window.dispatchEvent(evt);\n          }\n        })\n      );\n    };\n\n    _this2.state = {\n      centerText: "\u9500\u552E\u8FBE\u6210",\n      moreLength: props.customData.moreLength,\n      flag: props.customData.flag,\n      titleLength: props.customData.titleLength,\n      titleName: props.customData.titleName\n    };\n    return _this2;\n  }\n  // componentDidMount(){\n  //   var _this = this;\n  //   ysp.customHelper.AndroidBackFlag = \'SaleBigData\';\n  //   var handler = _this.props.customHandler;\n  //   if (handler) {\n  //     handler({\n  //       eventType: \'AndroidBack\'\n  //     });\n  //   }\n  // }\n\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        moreLength: nextProps.customData.moreLength,\n        flag: nextProps.customData.flag,\n        titleLength: nextProps.customData.titleLength,\n        titleName: nextProps.customData.titleName\n      });\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      window.addEventListener(\'ysp-change-title\', this.changeTitle.bind(this), false);\n      this.setState({\n        centerText: this.props.customData.title\n      });\n      //android\u7269\u7406\u8FD4\u56DE\u952E\n      ysp.customHelper.AndroidBackFlag = \'reachBigData\';\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'AndroidBack\'\n        });\n      }\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      var sTitle = this.state.centerText;\n      var rTitle = this.props.customData.title;\n      if (sTitle != rTitle) {\n        this.setState({\n          centerText: rTitle\n        });\n      }\n    }\n  }, {\n    key: \'changeTitle\',\n    value: function changeTitle(e) {\n      var title = e.title;\n      this.setState({\n        centerText: title\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control89_EwPocV: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];var ths = elem.querySelectorAll("th");for (var i = 0; i < ths.length; i++) {
        var obj = {};var title = ths[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销量" == title || "实际销售额" == title || "销量达成率" == title || "销售额达成率" == title || "实际销量总计" == title || "实际销售总计" == title) {
          obj.title = title;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl65_OItCfI: function (data, elem) {
      "use strict";

      var eventType = data.eventType;var customData = data.customData;var index = +customData;if (eventType == 'click') {
        var titleBtns = elem.querySelectorAll("th");if (0 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销量" == title || "实际销量总计" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (1 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销售额" == title || "实际销售总计" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (2 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("销量达成率" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (3 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("销售额达成率" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }
      }
    },
    getTemplate_uiControl65_OItCfI: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data:index\n      });\n    }\n    \n    target.classList.add(\"active\");\n  \tvar _broNode = target.parentNode.childNodes;\n    var _broNodeLen = _broNode.length;\n    \n    for(var i=0; i<_broNodeLen; i++){\n      var _asc = _broNode[i].querySelector(\".ui-asc\");\n      var _desc = _broNode[i].querySelector(\".ui-desc\");\n      \n      if(i == index){\n        if(_asc.classList.contains('ui-disabled')==true){\n\u3000\u3000\u3000\u3000\t\t_asc.classList.remove(\"ui-disabled\");\n      \t\t _desc.classList.add(\"ui-disabled\");\n      \t}else{\n        \t_asc.classList.add(\"ui-disabled\");\n      \t\t_desc.classList.remove(\"ui-disabled\");\n        }\n      }else{\n        _broNode[i].classList.remove(\"active\");\n      \t_asc.classList.add(\"ui-disabled\");\n      \t_desc.classList.add(\"ui-disabled\");\n      }\n    }\n  },\n  componentDidUpdate(){\n    var elem=this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    setTimeout(function(){\n      elem.scrollTop=0;\n    },500)\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var titleBtn = data.map(function(d,i){\n      return (\n        <div className=\"ysp-table-titleItem\" \n          onClick={_this.handleClick.bind(_this)} data-index={i}>\n          {data[i].title == \"\u5B9E\u9645\u9500\u91CF\u603B\u8BA1\" ? \"\u5B9E\u9645\u9500\u91CF\" : data[i].title == \"\u5B9E\u9645\u9500\u552E\u603B\u8BA1\" ? \"\u5B9E\u9645\u9500\u552E\u989D\" : data[i].title}\n          <span className=\"ysp-s-ico\">\n            <span className=\"ui-asc ui-disabled\"></span>\n            <span className=\"ui-desc ui-disabled\"></span>\n          </span>\n        </div>\n      )\n    });\n    \n    return (\n      <div className=\"ysp-table-titles\" ref=\"toTop\">\n        {titleBtn}\n      </div>\n    )\n  }\n})";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n\n    target.classList.add("active");\n    var _broNode = target.parentNode.childNodes;\n    var _broNodeLen = _broNode.length;\n\n    for (var i = 0; i < _broNodeLen; i++) {\n      var _asc = _broNode[i].querySelector(".ui-asc");\n      var _desc = _broNode[i].querySelector(".ui-desc");\n\n      if (i == index) {\n        if (_asc.classList.contains(\'ui-disabled\') == true) {\n          _asc.classList.remove("ui-disabled");\n          _desc.classList.add("ui-disabled");\n        } else {\n          _asc.classList.add("ui-disabled");\n          _desc.classList.remove("ui-disabled");\n        }\n      } else {\n        _broNode[i].classList.remove("active");\n        _asc.classList.add("ui-disabled");\n        _desc.classList.add("ui-disabled");\n      }\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var elem = this.refs.toTop.ownerDocument.querySelector(".view-wrapper");\n    setTimeout(function () {\n      elem.scrollTop = 0;\n    }, 500);\n  },\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var titleBtn = data.map(function (d, i) {\n      return React.createElement(\n        "div",\n        { className: "ysp-table-titleItem",\n          onClick: _this.handleClick.bind(_this), "data-index": i },\n        data[i].title == "\u5B9E\u9645\u9500\u91CF\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u91CF" : data[i].title == "\u5B9E\u9645\u9500\u552E\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u552E\u989D" : data[i].title,\n        React.createElement(\n          "span",\n          { className: "ysp-s-ico" },\n          React.createElement("span", { className: "ui-asc ui-disabled" }),\n          React.createElement("span", { className: "ui-desc ui-disabled" })\n        )\n      );\n    });\n\n    return React.createElement(\n      "div",\n      { className: "ysp-table-titles", ref: "toTop" },\n      titleBtn\n    );\n  }\n});';
    },

    getData_control124_1ZAE1L: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];var tds = elem.querySelectorAll("td");var obj = {};for (var i = 0; i < tds.length; i++) {
        var _string = tds[i].getAttribute("aria-describedby");var _index = _string.lastIndexOf('_');var _str = _string.substring(_index + 1);var _textContent = tds[i].textContent;switch (_str) {case "targetSalesCount":
            obj.targetSalesCount = _textContent.trim();break;case "realSalesCount":
            obj.realSalesCount = _textContent.trim();break;case "targetSalesAmount":
            obj.targetSalesAmount = _textContent.trim();break;case "realSalesAmount":
            obj.realSalesAmount = _textContent.trim();break;case "salesCountPercent":
            obj.salesCountPercent = _textContent.trim();break;case "salesAmountPercent":
            obj.salesAmountPercent = _textContent.trim();break;}
      }data.push(obj);return data;
    },
    doAction_uiControl114_XrbJwG: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl114_XrbJwG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lists = data && data.map(function(d,i){\n      return (\n        <div>\n          <h5 className=\"title\"><i class=\"icon\"></i><span>\u603B\u8BA1</span></h5>\n          <ul>\n            <li><span>\u76EE\u6807\u9500\u91CF</span><b>{data&&data[i]&&data[i].targetSalesCount}</b></li>\n            <li><span>\u76EE\u6807\u9500\u552E\u989D</span><b>{data&&data[i]&&data[i].targetSalesAmount}</b></li>\n            <li><span>\u5B9E\u9645\u9500\u91CF</span><b>{data&&data[i]&&data[i].realSalesCount}</b></li>\n            <li><span>\u5B9E\u9645\u9500\u552E\u989D</span><b>{data&&data[i]&&data[i].realSalesAmount}</b></li>\n            <li><span>\u9500\u91CF\u8FBE\u6210\u7387</span><b>{data&&data[i]&&data[i].salesCountPercent}</b></li>\n            <li><span>\u9500\u552E\u989D\u8FBE\u6210\u7387</span><b>{data&&data[i]&&data[i].salesAmountPercent}</b></li>\n          </ul>\n        </div>\n      )\n    });\n    \n    return (\n      <div className=\"ysp-tableList-boxSum\">\n        {lists}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var lists = data && data.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"h5\",\n          { className: \"title\" },\n          React.createElement(\"i\", { \"class\": \"icon\" }),\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u603B\\u8BA1\"\n          )\n        ),\n        React.createElement(\n          \"ul\",\n          null,\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u76EE\\u6807\\u9500\\u91CF\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].targetSalesCount\n            )\n          ),\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u76EE\\u6807\\u9500\\u552E\\u989D\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].targetSalesAmount\n            )\n          ),\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u5B9E\\u9645\\u9500\\u91CF\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].realSalesCount\n            )\n          ),\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u5B9E\\u9645\\u9500\\u552E\\u989D\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].realSalesAmount\n            )\n          ),\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u9500\\u91CF\\u8FBE\\u6210\\u7387\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].salesCountPercent\n            )\n          ),\n          React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u9500\\u552E\\u989D\\u8FBE\\u6210\\u7387\"\n            ),\n            React.createElement(\n              \"b\",\n              null,\n              data && data[i] && data[i].salesAmountPercent\n            )\n          )\n        )\n      );\n    });\n\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-tableList-boxSum\" },\n      lists\n    );\n  }\n});";
    },

    getData_control275_2EgUIJ: function (elem) {
      "use strict";
      if (elem) {
        var data = { dataLabel: [], flag: [], flags: [] };if ($(elem).length > 0 && $(elem).find("#tab-head").length > 0 && $(elem).find("#tab-head").children("li").length > 0) {
          var a_s = $(elem).find("#tab-head").children("li");for (var i = 0; i < a_s.length; i++) {
            var asText = a_s.eq(i)[0].textContent;if (asText != '年度项目达成') {
              if (asText.indexOf("销售报表") == -1) {
                data.dataLabel.push({ idx: a_s.eq(i).index(), content: a_s.eq(i).text().trim() });
              }
            }
          }
        }return data;
      }return [];
    },
    doAction_uiControl248_nQhTnd: function (data, elem) {
      "use strict";
      if (data.eventType == 'click') {
        var index = +data.dataCustom.index;var lis = $(elem).find("#tab-head").children("li");if (lis) {
          lis.eq(index)[0].click();
        } // if (index == 1) {
        //   lis[2].click();
        // } else {
        //   lis[index].click();
        // }
      }
    },
    getTemplate_uiControl248_nQhTnd: function () {
      var selfTemplate = 'import {Component} from \'react\';\nimport {Overlay} from \'ysp-custom-components\';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n     open:false\n    }\n      window.addEventListener(\'ysp-dialog-close\',this.toogleSwitch.bind(this),false)\n  }\n  componentWillUnmount(){\n    window.removeEventListener(\'ysp-dialog-close\',this.toogleSwitch.bind(this),false)\n  }\n  \n  toogleSwitch(){\n   this.setState({\n     open:!this.state.open\n    })\n  }\n  render=()=>{\n    var data = this.props.customData && this.props.customData.dataLabel;\n    var flag = this.props.customData && this.props.customData.flag;\n    var flags = this.props.customData && this.props.customData.flags;\n    var _this = this;\n   return (\n      <div className=\'.ysp-dialog-hander-op\'  style={{display:this.state.open ? \'block\':\'none\'}}>\n        <Overlay/>\n        <div className= \'ysp-dialog-hander\'>\n           <ul>\n          {data && data.map((d,i)=>{  \n            return(\n                <li data-index={d.idx} onClick={(e)=>{\n                  var target = e.target;\n                  var index = target.dataset.index;\n                  var handler = this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:{\n                        index : index,\n                        flag : flag,\n                        flags : flags\n                      },\n                      eventType:\'click\'\n                    });\n                  }\n                  _this.toogleSwitch();\n                  var evt = new Event(\'ysp-change-title\');\n                  evt.title = e.target.textContent;\n                  window.dispatchEvent(evt);\n                }}>{d.content}</li>\n            )})}\n            </ul>\n          <button onClick={()=>{\n              _this.toogleSwitch();\n              }\n            }>\u53D6\u6D88</button>\n        </div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.render = function () {\n      var data = _this2.props.customData && _this2.props.customData.dataLabel;\n      var flag = _this2.props.customData && _this2.props.customData.flag;\n      var flags = _this2.props.customData && _this2.props.customData.flags;\n      var _this = _this2;\n      return React.createElement(\n        \'div\',\n        { className: \'.ysp-dialog-hander-op\', style: { display: _this2.state.open ? \'block\' : \'none\' } },\n        React.createElement(_yspCustomComponents.Overlay, null),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-dialog-hander\' },\n          React.createElement(\n            \'ul\',\n            null,\n            data && data.map(function (d, i) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': d.idx, onClick: function onClick(e) {\n                    var target = e.target;\n                    var index = target.dataset.index;\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                      handler({\n                        data: {\n                          index: index,\n                          flag: flag,\n                          flags: flags\n                        },\n                        eventType: \'click\'\n                      });\n                    }\n                    _this.toogleSwitch();\n                    var evt = new Event(\'ysp-change-title\');\n                    evt.title = e.target.textContent;\n                    window.dispatchEvent(evt);\n                  } },\n                d.content\n              );\n            })\n          ),\n          React.createElement(\n            \'button\',\n            { onClick: function onClick() {\n                _this.toogleSwitch();\n              } },\n            \'\\u53D6\\u6D88\'\n          )\n        )\n      );\n    };\n\n    _this2.state = {\n      open: false\n    };\n    window.addEventListener(\'ysp-dialog-close\', _this2.toogleSwitch.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillUnmount\',\n    value: function componentWillUnmount() {\n      window.removeEventListener(\'ysp-dialog-close\', this.toogleSwitch.bind(this), false);\n    }\n  }, {\n    key: \'toogleSwitch\',\n    value: function toogleSwitch() {\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control253_wPBgTz: function (elem) {
      'use strict';

      if (!elem) {
        return;
      }var dataMonth = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_month"]');if (dataMonth) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl173_btOVow: function (data, elem) {
      'use strict';

      if (data.eventType == 'upValue') {
        var val = data.dataCustom;var valLength = val.length;if (4 != valLength) {
          //月度销售达成
          // var monthLength = +val.substr(5);
          // var inputMonth = elem.querySelector("#searchHead").querySelector('input[name="filter_month"]');
          // inputMonth.focus();
          // elem.querySelector('div[class="datepicker-months"]').querySelector("tbody").querySelectorAll("span")[monthLength - 1].click();
          var inputYear = elem.querySelector("#searchHead").querySelector('input[name="filter_month"]'); // inputYear.focus();
          inputYear.value = data.dataCustom;elem.ownerDocument.defaultView.sessionStorage.setItem("myMonth", data.dataCustom);var queryBtnSearch = elem.ownerDocument.querySelector("#queryBtnSearch");queryBtnSearch.click();
        } else {
          //年度销售达成
          var inputYear = elem.querySelector("#searchHead").querySelector('input[name="filter_year"]'); // inputYear.focus();
          inputYear.value = data.dataCustom;elem.ownerDocument.defaultView.sessionStorage.setItem("myYear", data.dataCustom);var queryBtnSearch = elem.ownerDocument.querySelector("#queryBtnSearch");queryBtnSearch.click();
        } //inputMonth.value = data.dataCustom;
        //var queryBtnSearch = elem.ownerDocument.querySelector("#queryBtnSearch");
        //queryBtnSearch.click();
      }
    },
    getTemplate_uiControl173_btOVow: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      mouth : true,\n      day : false,\n      show : false,\n      data : props.customData\n    }\n    window.addEventListener('ysp-time-show',this.toggle.bind(this),false)\n  }\n  componentDidMount(){\n    if(this.props.customData){\n      this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }else{\n      this.state.show ? this.stylesId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }\n  componentDidUpdate(){\n    if(this.props.customData){\n      this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }else{\n      this.state.show ? this.stylesId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }\n  styleId(){\n    var doc = this.refs.time;\n    if(doc){\n      doc.querySelector('#year').style.width = '50%';\n      doc.querySelector('#mouth').style.width = '50%';\n      \n      // if(this.state.data && !this.state.day  && !!this.state.mouth){\n      // \tdoc.querySelector('#year').style.width = '50%';\n      // \tdoc.querySelector('#mouth').style.width = '50%';\n      // }\n      // if(!this.state.data){\n      //   doc.querySelector('#year').style.width = '50%';\n      // \tdoc.querySelector('#mouth').style.width = '50%';\n      // }\n      // if(this.state.data && !this.state.mouth && !this.state.day){\n      //   doc.querySelector('#year').style.width = '100%';\n      // }\n      // if(!this.state.data){\n      //   doc.querySelector('#mouth').removeAttribute('style');\n      //   doc.querySelector('#year').style.width = '100%';\n      // }\n    }\n  }\n  stylesId(){\n    var doc = this.refs.time;\n    if(doc){\n      doc.querySelector('#year').style.width = '100%';\n    }\n  }\n  \n  toggle(){\n    this.setState({\n      show : !this.state.show\n    })\n  }\n  activeValue(even){\n    var doc = even.parentElement.nextElementSibling;\n    if(this.props.customData){\n      var year = doc.querySelector('#year').querySelector('.active').textContent;\n    var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n\t\tmouth = mouth < 10 ? '0' + mouth : mouth; \n  \tday = day && day < 10 ? '0' + day : day;\n    var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n      return time;\n    }else{\n      return doc.querySelector('#year').querySelector('.active').textContent;\n    }\n    \n  }\n  upValue(e){\n    var handler = this.props.customHandler;\n    var value = this.activeValue(e.target);\n    if(handler){\n      handler({\n        data : value,\n        eventType : 'upValue'\n      })\n    }\n    this.setState({\n      show : false\n    })\n  }\n  render(){\n    var _this = this;\n    return(\n      <div>{this.state.show && \n        <div className='moudle-time' ref='time'>\n          <div className = 'date-time'>\n            <SaleReachCalendar \n              mouth = {_this.state.mouth}\n              day = {_this.state.day}\n              upValue = {_this.upValue.bind(_this)}\n              show = {(e)=>{\n                _this.toggle();\n              }}\n              y = {this.props.customData}\n            />\n          </div>\n        </div>}\n      </div>\n    )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      mouth: true,\n      day: false,\n      show: false,\n      data: props.customData\n    };\n    window.addEventListener(\'ysp-time-show\', _this2.toggle.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      if (this.props.customData) {\n        this.state.show ? this.styleId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      } else {\n        this.state.show ? this.stylesId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      }\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      if (this.props.customData) {\n        this.state.show ? this.styleId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      } else {\n        this.state.show ? this.stylesId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      }\n    }\n  }, {\n    key: \'styleId\',\n    value: function styleId() {\n      var doc = this.refs.time;\n      if (doc) {\n        doc.querySelector(\'#year\').style.width = \'50%\';\n        doc.querySelector(\'#mouth\').style.width = \'50%\';\n\n        // if(this.state.data && !this.state.day  && !!this.state.mouth){\n        // \tdoc.querySelector(\'#year\').style.width = \'50%\';\n        // \tdoc.querySelector(\'#mouth\').style.width = \'50%\';\n        // }\n        // if(!this.state.data){\n        //   doc.querySelector(\'#year\').style.width = \'50%\';\n        // \tdoc.querySelector(\'#mouth\').style.width = \'50%\';\n        // }\n        // if(this.state.data && !this.state.mouth && !this.state.day){\n        //   doc.querySelector(\'#year\').style.width = \'100%\';\n        // }\n        // if(!this.state.data){\n        //   doc.querySelector(\'#mouth\').removeAttribute(\'style\');\n        //   doc.querySelector(\'#year\').style.width = \'100%\';\n        // }\n      }\n    }\n  }, {\n    key: \'stylesId\',\n    value: function stylesId() {\n      var doc = this.refs.time;\n      if (doc) {\n        doc.querySelector(\'#year\').style.width = \'100%\';\n      }\n    }\n  }, {\n    key: \'toggle\',\n    value: function toggle() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: \'activeValue\',\n    value: function activeValue(even) {\n      var doc = even.parentElement.nextElementSibling;\n      if (this.props.customData) {\n        var year = doc.querySelector(\'#year\').querySelector(\'.active\').textContent;\n        var mouth = this.state.mouth && doc.querySelector(\'#mouth\').querySelector(\'.active\').textContent;\n        var day = this.state.day && doc.querySelector(\'#day\').querySelector(\'.active\').textContent;\n        mouth = mouth < 10 ? \'0\' + mouth : mouth;\n        day = day && day < 10 ? \'0\' + day : day;\n        var time = day ? year + \'-\' + mouth + \'-\' + day : mouth ? year + \'-\' + mouth : year;\n        return time;\n      } else {\n        return doc.querySelector(\'#year\').querySelector(\'.active\').textContent;\n      }\n    }\n  }, {\n    key: \'upValue\',\n    value: function upValue(e) {\n      var handler = this.props.customHandler;\n      var value = this.activeValue(e.target);\n      if (handler) {\n        handler({\n          data: value,\n          eventType: \'upValue\'\n        });\n      }\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        this.state.show && React.createElement(\n          \'div\',\n          { className: \'moudle-time\', ref: \'time\' },\n          React.createElement(\n            \'div\',\n            { className: \'date-time\' },\n            React.createElement(_yspCustomComponents.SaleReachCalendar, {\n              mouth: _this.state.mouth,\n              day: _this.state.day,\n              upValue: _this.upValue.bind(_this),\n              show: function show(e) {\n                _this.toggle();\n              },\n              y: this.props.customData\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control116_kIDcZ0: function (elem) {
      "use strict";

      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var trs = elem.querySelector("#table_list_1").querySelectorAll("tr");var reportId = elem.querySelector('input[name="reportId"]').value;var titleIdx = null;var deepFlag = true;var strFuc = function strFuc(_obj) {
          var _string = _obj.getAttribute("aria-describedby");var _index = _string.lastIndexOf('_');var _str = _string.substring(_index + 1);return _str;
        };if (!titleIdx) {
          var _tds = trs[1] && trs[1].querySelectorAll("td");var a, b, c, d, e, f, g, h, l;if (_tds) {
            if ("report34-2" == reportId || "report34-1" == reportId || "report49" == reportId) {
              //销售代表（客户与门店达成）、（产品销售达成）
              if ("report34-2" == reportId || "report34-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    a = n;
                  }
                }
              } else if ("report49" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  a = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  a = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  a = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  a = numTemp[3];
                } else {
                  a = 0;
                }
              }
            } else if ("report34" == reportId || "report33" == reportId || "report33-1" == reportId || "report33-1-1" == reportId || "report48" == reportId) {
              //办事处主任 （分公司销售人员达成）、（办事处事业部达成）
              if ("report34" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    b = n;
                  }
                }
              } else if ("report33" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("department" == _str) {
                    b = n;
                  }
                }
              } else if ("report33-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    b = n;
                  }
                }
              } else if ("report33-1-1" == reportId || "report48" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  b = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  b = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  b = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  b = numTemp[3];
                } else {
                  b = 0;
                }
              }
            } else if ("report15" == reportId || "report16" == reportId || "report16-1" == reportId) {
              //分总 分公司事业部达成 
              if ("report15" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("department" == _str) {
                    e = n;
                  }
                }
              } else if ("report16" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    e = n;
                  }
                }
              } else if ("report16-1" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  e = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  e = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  e = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  e = numTemp[3];
                } else {
                  e = 0;
                }
              }
            } else if ("report20" == reportId || "report46" == reportId) {
              //分总 分公司项目达成、产品销售达成
              if ("report20" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    f = n;
                  }
                }
              } else if ("report46" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  f = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  f = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  f = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  f = numTemp[3];
                } else {
                  f = 0;
                }
              }
            } else if ("report17" == reportId || "report18" == reportId || "report18-1" == reportId || "report19" == reportId) {
              //分总 分公司办事处销售达成
              if ("report17" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                    g = n;
                  }
                }
              } else if ("report18" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    g = n;
                  }
                }
              } else if ("report18-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    g = n;
                  }
                }
              } else if ("report19" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    g = n;
                  }
                }
              }
            } else if ("report29" == reportId || "report29-1" == reportId || "report45" == reportId) {
              //产品经理 事业部分项目达成、产品销售达成
              if ("report29" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    h = n;
                  }
                }
              } else if ("report29-1" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  h = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  h = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  h = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  h = numTemp[3];
                } else {
                  h = 0;
                }
              } else if ("report45" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  h = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  h = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  h = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  h = numTemp[3];
                } else {
                  h = 0;
                }
              }
            } else if ("report31" == reportId || "report31-1" == reportId || "report31-1-1" == reportId || "report31-1-1-1" == reportId) {
              //产品经理 分公司项目达成
              if ("report31" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                    h = n;
                  }
                }
              } else if ("report31-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                    h = n;
                  }
                }
              } else if ("report31-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    h = n;
                  }
                }
              } else if ("report31-1-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    h = n;
                  }
                }
              }
            } else if ("report1" == reportId || "report1-1" == reportId || "report1-1-1" == reportId || "report1-2" == reportId || "report1-2-1" == reportId || "report1-2-1-1" == reportId || "report1-2-1-1-1" == reportId || "report4" == reportId || "report4-1" == reportId || "report43" == reportId || "report2" == reportId || "report2-1" == reportId || "report2-1-1" == reportId || "report2-1-1-1" == reportId || "report2-2" == reportId || "report2-2-1" == reportId || "report2-2-1-1" == reportId) {
              //总部领导 事业部销售计划总体达成 、事业部销售计划分项目达成、事业部销售计划分渠道达成、分公司销售计划达成
              if ("report1" == reportId || "report2-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("department" == _str) {
                    l = n;
                  }
                }
              } else if ("report1-1" == reportId || "report4" == reportId || "report2-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    l = n;
                  }
                }
              } else if ("report1-1-1" == reportId || "report4-1" == reportId || "report43" == reportId || "report2-1-1-1" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  l = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  l = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  l = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  l = numTemp[3];
                } else {
                  l = 0;
                }
              } else if ("report1-2" == reportId || "report2" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                    l = n;
                  }
                }
              } else if ("report1-2-1" == reportId || "report2-2" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                    l = n;
                  }
                }
              } else if ("report1-2-1-1" == reportId || "report2-2-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    l = n;
                  }
                }
              } else if ("report1-2-1-1-1" == reportId || "report2-2-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    l = n;
                  }
                }
              }
            } else if ("report7" == reportId || "report8" == reportId || "report44" == reportId || "report9" == reportId || "report10" == reportId || "report10-1" == reportId || "report9-1" == reportId || "report9-1-1" == reportId || "report9-1-1-1" == reportId) {
              //事业部总经理 事业部分项目达成、产品销售达成、分公司事业部达成
              //大客户业务部总经理和客户经理 事业部分项目达成、产品销售达成、分公司事业部达成
              if ("report7" == reportId || "report10" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    l = n;
                  }
                }
              } else if ("report8" == reportId || "report44" == reportId || "report10-1" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  l = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  l = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  l = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  l = numTemp[3];
                } else {
                  l = 0;
                }
              } else if ("report9" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                    l = n;
                  }
                }
              } else if ("report9-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                    l = n;
                  }
                }
              } else if ("report9-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    l = n;
                  }
                }
              } else if ("report9-1-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    l = n;
                  }
                }
              }
            } else if ("report23" == reportId || "report23-1" == reportId || "report23-1-1" == reportId || "report27" == reportId || "report24" == reportId || "report22" == reportId || "report22-1" == reportId || "report47" == reportId) {
              //品牌经理 办事处项目达成、分公司销售人员达成、分公司分项目达成、产品销售达成
              if ("report23" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                    l = n;
                  }
                }
              } else if ("report23-1" == reportId || "report24" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                    l = n;
                  }
                }
              } else if ("report23-1-1" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                    l = n;
                  }
                }
              } else if ("report27" == reportId || "report22-1" == reportId || "report47" == reportId) {
                var numTemp = new Array(4);for (var n = 0; n < _tds.length; n++) {
                  //把4种可能得标题都取出来存在数组里
                  var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                    numTemp[0] = n;
                  } else if ("projectSeries" == _str) {
                    numTemp[1] = n;
                  } else if ("projectName" == _str) {
                    numTemp[2] = n;
                  } else if ("department" == _str) {
                    numTemp[3] = n;
                  }
                }if (numTemp[0] !== undefined) {
                  l = numTemp[0];
                } else if (numTemp[1] !== undefined) {
                  l = numTemp[1];
                } else if (numTemp[2] !== undefined) {
                  l = numTemp[2];
                } else if (numTemp[3] !== undefined) {
                  l = numTemp[3];
                } else {
                  l = 0;
                }
              } else if ("report22" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                    l = n;
                  }
                }
              }
            } else if ("report5" == reportId || "report5-1" == reportId || "report6" == reportId || "report21" == reportId || "report32" == reportId || "report11" == reportId || "report28" == reportId) {
              // 总部领导 年度事业部达成、年度事业部达成
              // 分总 年度分公司事业部达成
              // 产品经理 年度分公司事业部达成
              // 品牌经理 事业部分公司达成
              // 事业部总经理 年度分公司事业部达成
              // 销售代表没有年度达成
              // 办事处主任没有年度达成
              // 大客户业务部总经理和客户经理年度销售达成
              if ("report5" == reportId || "report21" == reportId || "report28" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("department" == _str) {
                    l = n;
                  }
                }
              } else if ("report5-1" == reportId || "report6" == reportId || "report32" == reportId || "report11" == reportId) {
                for (var n = 0; n < _tds.length; n++) {
                  var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                    l = n;
                  }
                }
              }
            } else {//       for (var n = 0; n < _tds.length; n++) {
              //         var _str = strFuc(_tds[n]);
              //         switch (_str) {
              //           case "projectSeries":
              //             a = n;
              //             break;
              //           case "modelName":
              //             b = n;
              //             break;
              //           case "projectName":
              //             c = n;
              //             break;
              //           case "department":
              //             d = n;
              //             break;
              //           case "branchName":
              //             e = n;
              //             break;
              //         }
              //       }
            }if (a >= 0) {
              titleIdx = a;
            } else if (b >= 0) {
              titleIdx = b;
            } else if (c >= 0) {
              titleIdx = c;
            } else if (d >= 0) {
              titleIdx = d;
            } else if (e >= 0) {
              titleIdx = e;
            } else if (f >= 0) {
              titleIdx = f;
            } else if (g >= 0) {
              titleIdx = g;
            } else if (h >= 0) {
              titleIdx = h;
            } else if (l >= 0) {
              titleIdx = l;
            }if (!_tds[titleIdx].querySelector("a")) {
              deepFlag = false; /**当无法下钻的时候，标题按照机型，机型编码，任务产品系列，项目的优先级依次往下找，
                                	 titleSite存标题的指针，按照指针位置往下找标题
                                   （逻辑为机型没数据，标题就找机型编码，以此类推） yue add*/var titleSite = new Array(4);for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  titleSite[0] = n;
                } else if ("projectSeries" == _str) {
                  titleSite[1] = n;
                } else if ("projectName" == _str) {
                  titleSite[2] = n;
                } else if ("department" == _str) {
                  titleSite[3] = n;
                }
              }
            }
          }
        }for (var i = 1; i < trs.length; i++) {
          var tds = trs[i].querySelectorAll("td");var obj = {};if (!trs[i].querySelectorAll('a')) {
            obj.deepFlag = false;
          } else {
            obj.deepFlag = deepFlag;
          }obj.reportIds = reportId;for (var j = 0; j < tds.length; j++) {
            var _str = strFuc(tds[j]);var _textContent = tds[j].textContent.trim();if ("report34-2" == reportId || "report34-1" == reportId || "report18-1" == reportId || "report31-1-1-1" == reportId || "report1-2-1-1-1" == reportId || "report23-1-1" == reportId || "report2-2-1-1" == reportId || "report9-1-1-1" == reportId) {
              debugger;var titles = tds[titleIdx].textContent.trim();if ("" == titles) {
                if (titleSite[0] !== undefined) {
                  titles = tds[titleSite[0]].textContent.trim();
                }if ("" == titles) {
                  if (titleSite[1] !== undefined) {
                    titles = tds[titleSite[1]].textContent.trim();
                  }if ("" == titles) {
                    if (titleSite[2] !== undefined) {
                      titles = tds[titleSite[2]].textContent.trim();
                    }if ("" == titles) {
                      if (titleSite[3] !== undefined) {
                        titles = tds[titleSite[3]].textContent.trim();
                      }
                    }
                  }
                }
              }obj.title = titles;
            } else if ("report49" == reportId || "report33-1-1" == reportId || "report48" == reportId || "report16-1" == reportId || "report46" == reportId || "report29-1" == reportId || "report45" == reportId || "report1-1-1" == reportId || "report4-1" == reportId || "report43" == reportId || "report44" == reportId || "report47" == reportId) {
              var titles = tds[titleIdx].textContent.trim();debugger;if ("" == titles) {
                if (titleSite[0] !== undefined) {
                  titles = tds[titleSite[0]].textContent.trim();
                }if ("" == titles) {
                  if (titleSite[1] !== undefined) {
                    titles = tds[titleSite[1]].textContent.trim();
                  }if ("" == titles) {
                    if (titleSite[2] !== undefined) {
                      titles = tds[titleSite[2]].textContent.trim();
                    }if ("" == titles) {
                      if (titleSite[3] !== undefined) {
                        titles = tds[titleSite[3]].textContent.trim();if ("" == titles) {
                          titles = tds[0].textContent.trim();
                        }
                      }
                    }
                  }
                }
              }obj.title = titles;
            } else if ("report2-1-1-1" == reportId || "report8" == reportId || "report10-1" == reportId || "report27" == reportId || "report22-1" == reportId) {
              var titles = tds[titleIdx].textContent.trim();debugger;if ("" == titles) {
                if (titleSite[0] !== undefined) {
                  titles = tds[titleSite[0]].textContent.trim();
                }if ("" == titles) {
                  if (titleSite[1] !== undefined) {
                    titles = tds[titleSite[1]].textContent.trim();
                  }if ("" == titles) {
                    if (titleSite[2] !== undefined) {
                      titles = tds[titleSite[2]].textContent.trim();
                    }if ("" == titles) {
                      if (titleSite[3] !== undefined) {
                        titles = tds[titleSite[3]].textContent.trim();if ("" == titles) {
                          titles = tds[0].textContent.trim();
                        }
                      }
                    }
                  }
                }
              }obj.title = titles;
            } else if ("report31" == reportId || "report23" == reportId) {
              //产品经理 分公司项目达成（分别取分公司和项目字段）、品牌经理 办事处项目达成（分别取办事处和项目字段）
              var titles = tds[titleIdx].textContent.trim();var titles1 = tds[titleIdx - 1].textContent.trim();obj.title = titles;obj.titles = titles1;
            } else {
              obj.title = tds[titleIdx].textContent.trim();
            }switch (_str) {case "targetSalesCount":
                obj.targetSalesCount = _textContent;break;case "realSalesCount":
                obj.realSalesCount = _textContent;break;case "targetSalesAmount":
                obj.targetSalesAmount = _textContent;break;case "realSalesAmount":
                obj.realSalesAmount = _textContent;break;case "salesCountPercent":
                obj.salesCountPercent = _textContent.substr(0, _textContent.length - 1);break;case "salesAmountPercent":
                obj.salesAmountPercent = _textContent.substr(0, _textContent.length - 1);break;case "salesCountBigCustomer":
                obj.salesCountBigCustomer = _textContent;break;case "salesCountHead":
                obj.salesCountBigCustomer = _textContent;break;case "salesAmountBigCustomer":
                obj.salesAmountBigCustomer = _textContent;break;case "salesAmountHead":
                obj.salesAmountBigCustomer = _textContent;break;case "rank":
                var rank_a = tds[j].querySelector("a");obj.rank = {};if (rank_a) {
                  obj.rank.rankFlag = true;obj.rank.reportId = reportId; // var tempData = rank_a.getAttribute("onmouseover");
                  // var tempStart = tempData.indexOf("[{");
                  // var tempEnd = tempData.indexOf("}]");
                  // var dataArray = JSON.parse(tempData.substring(tempStart, tempEnd + 2));
                  var aa = [];var cc = [];var rankTrs = elem.ownerDocument.querySelector(".rank-pop-box").querySelector(".pop-table").querySelector("tbody").querySelectorAll("tr");if (rankTrs.length > 0) {
                    for (var z = 0; z < rankTrs.length; z++) {
                      //所有的排名数据
                      var bb = {};var rankTds = rankTrs[z].querySelectorAll("td");for (var w = 0; w < rankTds.length; w++) {
                        if ("report15" == reportId || "report2-1" == reportId || "report21" == reportId) {
                          bb.branchName = rankTds[1].textContent;bb.salesAmountPercent = rankTds[4].textContent.substr(0, rankTds[4].textContent.length - 1);bb.rank = rankTds[5].textContent;
                        } else if ("report18" == reportId || "report34" == reportId || "report23-1" == reportId) {
                          bb.salerName = rankTds[3].textContent;bb.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);bb.rank = rankTds[6].textContent;
                        } else if ("report16" == reportId || "report20" == reportId || "report22" == reportId || "report2-1-1" == reportId) {
                          bb.branchName = rankTds[1].textContent;bb.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);bb.rank = rankTds[6].textContent;
                        } else if ("report33" == reportId) {
                          bb.officeName = rankTds[2].textContent;bb.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);bb.rank = rankTds[6].textContent;
                        } else if ("report33-1" == reportId) {
                          bb.officeName = rankTds[2].textContent;bb.salesAmountPercent = rankTds[6].textContent.substr(0, rankTds[6].textContent.length - 1);bb.rank = rankTds[7].textContent;
                        } else if ("report31-1-1" == reportId || "report9-1-1" == reportId) {
                          bb.salerName = rankTds[4].textContent;bb.salesAmountPercent = rankTds[6].textContent.substr(0, rankTds[6].textContent.length - 1);bb.rank = rankTds[7].textContent;
                        } else if ("report10" == reportId) {
                          bb.branchName = rankTds[2].textContent;bb.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);bb.rank = rankTds[6].textContent;
                        } else if ("report2-2-1" == reportId) {
                          bb.salerName = rankTds[2].textContent;bb.salesAmountPercent = rankTds[4].textContent.substr(0, rankTds[4].textContent.length - 1);bb.rank = rankTds[5].textContent;
                        } else if ("report1-2-1-1") {
                          bb.salerName = rankTds[2].textContent;bb.salesAmountPercent = rankTds[3].textContent.substr(0, rankTds[3].textContent.length - 1);bb.rank = rankTds[4].textContent;
                        }
                      }aa.push(bb);
                    }
                  }if (rankTrs.length > 0) {
                    //选中的排名数据
                    for (var z1 = 0; z1 < rankTrs.length; z1++) {
                      var dd = {};if (rankTrs[z1].getAttribute("class") == "activ") {
                        var rankTds = rankTrs[z1].querySelectorAll("td");for (var w1 = 0; w1 < rankTds.length; w1++) {
                          if ("report15" == reportId || "report2-1" == reportId || "report21" == reportId) {
                            dd.branchName = rankTds[1].textContent;dd.salesAmountPercent = rankTds[4].textContent.substr(0, rankTds[4].textContent.length - 1);dd.rank = rankTds[5].textContent;
                          } else if ("report18" == reportId || "report34" == reportId || "report23-1" == reportId) {
                            dd.salerName = rankTds[3].textContent;dd.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);dd.rank = rankTds[6].textContent;
                          } else if ("report16" == reportId || "report20" == reportId || "report22" == reportId || "report2-1-1" == reportId) {
                            dd.branchName = rankTds[1].textContent;dd.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);dd.rank = rankTds[6].textContent;
                          } else if ("report33" == reportId) {
                            dd.officeName = rankTds[2].textContent;dd.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);dd.rank = rankTds[6].textContent;
                          } else if ("report33-1" == reportId) {
                            dd.officeName = rankTds[2].textContent;dd.salesAmountPercent = rankTds[6].textContent.substr(0, rankTds[6].textContent.length - 1);dd.rank = rankTds[7].textContent;
                          } else if ("report31-1-1" == reportId || "report9-1-1" == reportId) {
                            dd.salerName = rankTds[4].textContent;dd.salesAmountPercent = rankTds[6].textContent.substr(0, rankTds[6].textContent.length - 1);dd.rank = rankTds[7].textContent;
                          } else if ("report10" == reportId) {
                            dd.branchName = rankTds[2].textContent;dd.salesAmountPercent = rankTds[5].textContent.substr(0, rankTds[5].textContent.length - 1);dd.rank = rankTds[6].textContent;
                          } else if ("report2-2-1" == reportId) {
                            dd.salerName = rankTds[2].textContent;dd.salesAmountPercent = rankTds[4].textContent.substr(0, rankTds[4].textContent.length - 1);dd.rank = rankTds[5].textContent;
                          } else if ("report1-2-1-1" == reportId) {
                            dd.salerName = rankTds[2].textContent;dd.salesAmountPercent = rankTds[3].textContent.substr(0, rankTds[3].textContent.length - 1);dd.rank = rankTds[4].textContent;
                          }
                        }cc.push(dd);
                      }
                    }
                  }obj.rank.data = aa;obj.rank.chooseData = cc;
                } else {
                  obj.rank.rankFlag = false;
                }if (rank_a) {
                  //判断排名是否可以点击，可点击的显示 不可点击的不显示
                  obj.rank.num = parseInt(_textContent);
                } else {
                  obj.rank.num = "";
                }break;}
          }data.push(obj);
        }return data;
      }
    },
    doAction_uiControl113_KRsmxE: function (data, elem) {
      "use strict";

      if (!elem) {
        return;
      }var trs = elem.querySelector("#table_list_1").querySelectorAll("tr");if (data.eventType === 'click') {
        var index = +data.customData + 1;if (!trs[index].querySelector('a')) {
          console.warn('到最底层了，不能在钻取了！'); // alert('已无法钻取');
          return;
        }var btn = trs[index].querySelector('a');btn.click();
      }if ('clickRank' == data.eventType) {
        var index = +data.customData + 1;var dos = trs[index].querySelector('a[class="susp-a"]');dos.dispatchEvent(new Event("mouseover"));
      }
    },
    getTemplate_uiControl113_KRsmxE: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Dialog,\n  ComplexHeader,\n  CustomHeader\n} from \'ysp-custom-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    \tclose: true,\n      idx: null\n    } \n  }\n  \n  handleClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.currentTarget;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  }\n  \n  handleRank(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var index = target.dataset.index;\n    if(handler){\n      handler({\n        eventType:\'clickRank\',\n        data: index\n      })\n    }\n    this.setState({\n      close: !this.state.close,\n      idx: e.target.dataset.index\n    });\n  }\n  \n  render() {\n    var data = this.props.customData;\n    var reportIds = data && data.length >0 && data[0].reportIds;\n    var _this = this;\n    var lists;\n    var a = 0;\n    \t{data && data.length > 0 ?\n      lists = data.map(function(d,i){\n        return (\n            <div className="item">\n              <div className={d.deepFlag?"left":"left wd"}>\n                <h5 className="title">\n                  {\n                    d.rank && d.rank.num !="" ? \n                      <i className={d.rank.num>3?\'rank-else\':\'rank-top\'} onClick={d.rank.rankFlag ?_this.handleRank.bind(_this) : \'\'} data-index={i}>\n                        {d.rank.num}\n                      </i> : \'\'\n                  }\n                  {d.title?d.title:d.projectSeries}</h5>\n                {\n                  d.titles ? <h5 className="titlesXM">{d.titles}</h5> : \'\'\n                }\n                <ul>\n                  <li><span>\u76EE\u6807\u9500\u91CF</span><b>{d.targetSalesCount}</b></li>\n                  <li><span>\u5B9E\u9645\u9500\u91CF</span><b>{d.realSalesCount}</b>\n                    {\n                      d.salesCountBigCustomer !=null || d.salesCountBigCustomer !=undefined ? \n                        <span>\n                          {\n                            "report43" == reportIds || "report44" == reportIds \n                            || "report45" == reportIds ? \n                              <span style={{marginRight:0}}>\n                                (\u603B\u90E8\uFF1A\n                              </span>\n                              :\n                            \t<span style={{marginRight:0}}>\n                                (\u5927\u5BA2\u6237\uFF1A\n                              </span>\n                          }\n                        \t\n                          <b>\n                            {d.salesCountBigCustomer})\n                          </b>\n                        </span> : \'\'\n                    }\n                    </li>\n                  <li><span>\u76EE\u6807\u9500\u552E\u989D</span><b>{d.targetSalesAmount}</b></li>\n                  <li><span>\u5B9E\u9645\u9500\u552E\u989D</span><b>{d.realSalesAmount}</b>\n                    {\n                      d.salesAmountBigCustomer!=null || d.salesAmountBigCustomer!=undefined ?\n                        <span>\n                          {\n                            "report43" == reportIds || "report44" == reportIds \n                            || "report45" == reportIds ?\n                              <span style={{marginRight:0}}>\n                               (\u603B\u90E8\uFF1A\n                              </span>\n                               :\n                              <span style={{marginRight:0}}>\n                               (\u5927\u5BA2\u6237\uFF1A\n                              </span>\n                          }\n                        \t\n                          <b> \n                            {d.salesAmountBigCustomer})\n                          </b>\n                        </span>\n                         : \'\'\n                    }\n                    \n                    \n                  </li>\n                </ul>\n              </div>\n              <div className={d.deepFlag?"right":"right mg0"}>\n                  <div className="top">\n                    <div><em>{d.salesCountPercent}</em>%</div>\n                    <h5>\u9500\u91CF\u8FBE\u6210\u7387</h5>\n                  </div>\n                  <div className="btm">\n                      <div><em>{d.salesAmountPercent}</em>%</div>\n                      <h5>\u9500\u552E\u989D\u8FBE\u6210\u7387</h5>\n                    </div>\n              </div>\n               { d.deepFlag?<i class="ysp-cardlist-icon" onClick={_this.handleClick.bind(_this)} data-index={i}></i>:"" }\n\n           \t\t { d.rank && d.rank.data && d.rank.data.length > 0 ?\n              \t<DialogRank \n                  dataIndex = {i} \n                  customData = {d.rank} \n                  close = {_this.state.close} \n                  openIndex = {_this.state.idx}\n                  handleRank = {_this.handleRank.bind(_this)}\n                />:\'\'}\n            </div>\n        )  \n      })\n      :\n \xA0 \xA0 \xA0lists = <div className="ysp-no-datass" \n                style={{\'marginLeft\':\'-15px\',\'background\':\'#F0EFF5\'}}>\n                <div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n              </div>\n      }\n\n    return (\n      <div className="ysp-tableLists-box">\n        {lists}\n      </div>\n    )\n  }\n};\n\n// DialogRank \u6392\u540D\u9875\u9762\nclass DialogRank extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    var data = this.props.customData;\n    var dataLists = data.data;\n    var index = data.num;\n    //var dataMain = data.data[index-1];\n    var dataMain = data.chooseData && data.chooseData[0];\n    var rankReportId = data && data.reportId;\n    var _this = this;\n    var _close = true;\n    if(_this.props.dataIndex == _this.props.openIndex){\n      _close = false;\n    }else{\n      _close = true;\n    }\n    \n    // console.log(data);\n    return (\n      <Dialog close={_close} dataId={_this.props.dataIndex}>\n        <CustomHeader \n \xA0 \xA0 \xA0 \xA0 \xA0 data={{centerText:"\u9500\u552E\u8FBE\u6210\u6392\u540D",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={_this.props.handleRank} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n        <div className="ysp-rank-lists">\n          <div className="main">\n            <i className="rank-main">{dataMain.rank}</i>\n            <span className="title">\n              {"report15" == rankReportId || "report16" == rankReportId \n               || "report20" == rankReportId || "report22" == rankReportId \n               || "report10" == rankReportId || "report2-1" == rankReportId \n               || "report2-1-1" == rankReportId || "report21" == rankReportId\n                ? dataMain.branchName : "report33" == rankReportId \n               || "report33-1" == rankReportId ? dataMain.officeName : \n              \t"report34" == rankReportId || "report18" == rankReportId \n               || "report31-1-1" == rankReportId || "report9-1-1" == rankReportId \n               || "report2-2-1" == rankReportId || "report23-1" == rankReportId \n               || "report1-2-1-1" == rankReportId\n                ? dataMain.salerName : ""\n              }\n            </span>\n            <div className="infos">\n              \t<div><b>{dataMain.salesAmountPercent}</b>%</div>\n              \t<h5>\u9500\u552E\u989D\u8FBE\u6210\u7387</h5>\n            </div>\n          </div>\n          \n          <div className="itemLists">\n            {\n              dataLists.map(function(d,i){\n                return (\n                \t<div className={i==index-1?\'item item-main\':\'item\'}>\n                    {\n                      <i className={i!=index-1?(d.rank>3?\'rank-else\':\'rank-top\'):\'rank-main\'}>{d.rank}</i>\n                    }\n                    <span className="title">\n                      {"report15" == rankReportId || "report16" == rankReportId \n                       || "report20" == rankReportId || "report22" == rankReportId \n                       || "report10" == rankReportId || "report2-1" == rankReportId \n                       || "report2-1-1" == rankReportId || "report21" == rankReportId\n                        ? d.branchName : "report33" == rankReportId \n                       || "report33-1" == rankReportId ? d.officeName : \n                      \t"report34" == rankReportId || "report18" == rankReportId \n                       || "report31-1-1" == rankReportId || "report9-1-1" == rankReportId \n                       || "report2-2-1" == rankReportId || "report23-1" == rankReportId \n                       || "report1-2-1-1" == rankReportId\n                        ? d.salerName : ""\n                      }\n                    </span>\n                    <div className="infos">\n                        <div><b>{d.salesAmountPercent}</b>%</div>\n                        <h5>\u9500\u552E\u989D\u8FBE\u6210\u7387</h5>\n                    </div>\n                  </div>  \n                )\n              })\n            }\n          </div>\n          \n        </div>\n      </Dialog>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      close: true,\n      idx: null\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'handleClick\',\n    value: function handleClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.currentTarget;\n      var index = target.dataset.index;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: index\n        });\n      }\n    }\n  }, {\n    key: \'handleRank\',\n    value: function handleRank(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      var index = target.dataset.index;\n      if (handler) {\n        handler({\n          eventType: \'clickRank\',\n          data: index\n        });\n      }\n      this.setState({\n        close: !this.state.close,\n        idx: e.target.dataset.index\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var reportIds = data && data.length > 0 && data[0].reportIds;\n      var _this = this;\n      var lists;\n      var a = 0;\n      {\n        data && data.length > 0 ? lists = data.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: \'item\' },\n            React.createElement(\n              \'div\',\n              { className: d.deepFlag ? "left" : "left wd" },\n              React.createElement(\n                \'h5\',\n                { className: \'title\' },\n                d.rank && d.rank.num != "" ? React.createElement(\n                  \'i\',\n                  { className: d.rank.num > 3 ? \'rank-else\' : \'rank-top\', onClick: d.rank.rankFlag ? _this.handleRank.bind(_this) : \'\', \'data-index\': i },\n                  d.rank.num\n                ) : \'\',\n                d.title ? d.title : d.projectSeries\n              ),\n              d.titles ? React.createElement(\n                \'h5\',\n                { className: \'titlesXM\' },\n                d.titles\n              ) : \'\',\n              React.createElement(\n                \'ul\',\n                null,\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u76EE\\u6807\\u9500\\u91CF\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.targetSalesCount\n                  )\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u5B9E\\u9645\\u9500\\u91CF\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.realSalesCount\n                  ),\n                  d.salesCountBigCustomer != null || d.salesCountBigCustomer != undefined ? React.createElement(\n                    \'span\',\n                    null,\n                    "report43" == reportIds || "report44" == reportIds || "report45" == reportIds ? React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u603B\\u90E8\\uFF1A\'\n                    ) : React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u5927\\u5BA2\\u6237\\uFF1A\'\n                    ),\n                    React.createElement(\n                      \'b\',\n                      null,\n                      d.salesCountBigCustomer,\n                      \')\'\n                    )\n                  ) : \'\'\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u76EE\\u6807\\u9500\\u552E\\u989D\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.targetSalesAmount\n                  )\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u5B9E\\u9645\\u9500\\u552E\\u989D\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.realSalesAmount\n                  ),\n                  d.salesAmountBigCustomer != null || d.salesAmountBigCustomer != undefined ? React.createElement(\n                    \'span\',\n                    null,\n                    "report43" == reportIds || "report44" == reportIds || "report45" == reportIds ? React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u603B\\u90E8\\uFF1A\'\n                    ) : React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u5927\\u5BA2\\u6237\\uFF1A\'\n                    ),\n                    React.createElement(\n                      \'b\',\n                      null,\n                      d.salesAmountBigCustomer,\n                      \')\'\n                    )\n                  ) : \'\'\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: d.deepFlag ? "right" : "right mg0" },\n              React.createElement(\n                \'div\',\n                { className: \'top\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'em\',\n                    null,\n                    d.salesCountPercent\n                  ),\n                  \'%\'\n                ),\n                React.createElement(\n                  \'h5\',\n                  null,\n                  \'\\u9500\\u91CF\\u8FBE\\u6210\\u7387\'\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'btm\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'em\',\n                    null,\n                    d.salesAmountPercent\n                  ),\n                  \'%\'\n                ),\n                React.createElement(\n                  \'h5\',\n                  null,\n                  \'\\u9500\\u552E\\u989D\\u8FBE\\u6210\\u7387\'\n                )\n              )\n            ),\n            d.deepFlag ? React.createElement(\'i\', { \'class\': \'ysp-cardlist-icon\', onClick: _this.handleClick.bind(_this), \'data-index\': i }) : "",\n            d.rank && d.rank.data && d.rank.data.length > 0 ? React.createElement(DialogRank, {\n              dataIndex: i,\n              customData: d.rank,\n              close: _this.state.close,\n              openIndex: _this.state.idx,\n              handleRank: _this.handleRank.bind(_this)\n            }) : \'\'\n          );\n        }) : lists = React.createElement(\n          \'div\',\n          { className: \'ysp-no-datass\',\n            style: { \'marginLeft\': \'-15px\', \'background\': \'#F0EFF5\' } },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-tableLists-box\' },\n        lists\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;\n\n// DialogRank \u6392\u540D\u9875\u9762\n\nvar DialogRank = function (_React$Component2) {\n  _inherits(DialogRank, _React$Component2);\n\n  function DialogRank(props) {\n    _classCallCheck(this, DialogRank);\n\n    return _possibleConstructorReturn(this, (DialogRank.__proto__ || Object.getPrototypeOf(DialogRank)).call(this, props));\n  }\n\n  _createClass(DialogRank, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var dataLists = data.data;\n      var index = data.num;\n      //var dataMain = data.data[index-1];\n      var dataMain = data.chooseData && data.chooseData[0];\n      var rankReportId = data && data.reportId;\n      var _this = this;\n      var _close = true;\n      if (_this.props.dataIndex == _this.props.openIndex) {\n        _close = false;\n      } else {\n        _close = true;\n      }\n\n      // console.log(data);\n      return React.createElement(\n        _yspCustomComponents.Dialog,\n        { close: _close, dataId: _this.props.dataIndex },\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: "\u9500\u552E\u8FBE\u6210\u6392\u540D", rightText: "\u7B5B\u9009" },\n          backIsShow: true,\n          back: _this.props.handleRank,\n          filterIsShow: false,\n          filter: function filter() {\n            console.info("header filter ...");\n          } }),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-rank-lists\' },\n          React.createElement(\n            \'div\',\n            { className: \'main\' },\n            React.createElement(\n              \'i\',\n              { className: \'rank-main\' },\n              dataMain.rank\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'title\' },\n              "report15" == rankReportId || "report16" == rankReportId || "report20" == rankReportId || "report22" == rankReportId || "report10" == rankReportId || "report2-1" == rankReportId || "report2-1-1" == rankReportId || "report21" == rankReportId ? dataMain.branchName : "report33" == rankReportId || "report33-1" == rankReportId ? dataMain.officeName : "report34" == rankReportId || "report18" == rankReportId || "report31-1-1" == rankReportId || "report9-1-1" == rankReportId || "report2-2-1" == rankReportId || "report23-1" == rankReportId || "report1-2-1-1" == rankReportId ? dataMain.salerName : ""\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'infos\' },\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'b\',\n                  null,\n                  dataMain.salesAmountPercent\n                ),\n                \'%\'\n              ),\n              React.createElement(\n                \'h5\',\n                null,\n                \'\\u9500\\u552E\\u989D\\u8FBE\\u6210\\u7387\'\n              )\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemLists\' },\n            dataLists.map(function (d, i) {\n              return React.createElement(\n                \'div\',\n                { className: i == index - 1 ? \'item item-main\' : \'item\' },\n                React.createElement(\n                  \'i\',\n                  { className: i != index - 1 ? d.rank > 3 ? \'rank-else\' : \'rank-top\' : \'rank-main\' },\n                  d.rank\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: \'title\' },\n                  "report15" == rankReportId || "report16" == rankReportId || "report20" == rankReportId || "report22" == rankReportId || "report10" == rankReportId || "report2-1" == rankReportId || "report2-1-1" == rankReportId || "report21" == rankReportId ? d.branchName : "report33" == rankReportId || "report33-1" == rankReportId ? d.officeName : "report34" == rankReportId || "report18" == rankReportId || "report31-1-1" == rankReportId || "report9-1-1" == rankReportId || "report2-2-1" == rankReportId || "report23-1" == rankReportId || "report1-2-1-1" == rankReportId ? d.salerName : ""\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'infos\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'b\',\n                      null,\n                      d.salesAmountPercent\n                    ),\n                    \'%\'\n                  ),\n                  React.createElement(\n                    \'h5\',\n                    null,\n                    \'\\u9500\\u552E\\u989D\\u8FBE\\u6210\\u7387\'\n                  )\n                )\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return DialogRank;\n}(React.Component);';
    }
  }, "businesHeadquartersDC");
})(window, ysp);