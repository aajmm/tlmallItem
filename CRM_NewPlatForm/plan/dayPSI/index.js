"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control106_x0Qq2q: function getData_control106_x0Qq2q(elem) {
      if (!elem) {
        return [];
      }if (elem && elem.querySelectorAll(".collectionPSIentertop-text")) {
        return elem.querySelectorAll(".collectionPSIentertop-text")[1].textContent;
      }
    },
    doAction_uiControl102_R9FT7H: function doAction_uiControl102_R9FT7H(data, elem) {
      if (data.eventType == "back") {
        // ysp.customHelper.backHome();
        // ysp.appMain.back();
        //ysp.customHelper.back();
        //elem.querySelector("a").click();
        history.go(-1);
      }
    },
    getTemplate_uiControl102_R9FT7H: function getTemplate_uiControl102_R9FT7H() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   constructor(props){\n     super(props);\n     this.state={\n       data:props.customData || ''\n     }\n   }\n  componentWillReceiveProps(nextPros){\n    this.setState({\n      data : nextPros.customData\n    })\n  }\n   render(){\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:this.state.data,rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      data: props.customData || ''\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextPros) {\n      this.setState({\n        data: nextPros.customData\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: this.state.data, rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control107_9I59a8: function getData_control107_9I59a8(elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { date: "", item: [], tempItem: [], type: [], index: [], itemIndex: [], color: [], SO: [], SOtitle: "" };var trs = elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr");var arr = []; //机型的临时数组
        var itemArr = []; //项目的临时数组
        data.SOtitle = elem.querySelector("#psiEnterTable").querySelector("thead").querySelectorAll("th")[4].textContent.slice(-2);data.date = elem.querySelector("#srarch_date").value; //日期
        for (var i = 0; i < trs.length; i++) {
          arr.push(trs[i].querySelectorAll("td")[2].textContent);itemArr.push(trs[i].querySelectorAll("td")[1].textContent);
        }; //机型
        for (var i = 0; i < arr.length; i++) {
          if (data.type.indexOf(arr[i]) == -1) {
            data.type.push(arr[i]);data.tempItem.push(itemArr[i]);data.index.push(i);
          } else if (data.type.indexOf(arr[i]) != -1 && data.tempItem.indexOf(itemArr[i]) == -1) {
            data.type.push(arr[i]);data.tempItem.push(itemArr[i]);data.index.push(i);
          }
        }; //最终获得重复机型及重复次数数组
        var temp = new Array();arr.sort();for (var i = 0; i < arr.length;) {
          var count = 0;for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
              count++;
            }
          }temp.push([arr[i], count]);i += count;
        } //data.arry.push(temp); //项目
        if (trs.length == 1) {
          data.item.push(trs[0].querySelectorAll("td")[1].textContent);
        } else if (trs.length > 1 && data.type.length == 1) {
          data.item.push(trs[0].querySelectorAll("td")[1].textContent);
        } else {
          for (var i = 0; i < data.index.length; i++) {
            for (var j = 0; j < data.type.length; j++) {
              if (trs[i].querySelectorAll("td")[2].textContent.indexOf(data.type[j])) {
                var tt = trs[data.index[i]].querySelectorAll("td")[1].textContent;
              }
            }data.item.push(tt);
          }
        }; //颜色
        if (trs.length == 1) {
          var splitArr = trs[0].querySelectorAll("td")[3].textContent.split(".");var a = [];a.push(splitArr[splitArr.length - 1]);data.color.push(a);
        } else if (trs.length > 1 && data.type.length == 1) {
          var a = [];for (var i = 0; i < trs.length; i++) {
            var splitArr = trs[i].querySelectorAll("td")[3].textContent.split(".");a.push(splitArr[splitArr.length - 1]);
          }data.color.push(a);
        } else {
          for (var i = 0; i < data.index.length; i++) {
            var a = [];if (data.index[i + 1] - data.index[i] == 1 || trs.length - data.index[data.index.length - 1] == 1) {
              var splitArr = trs[data.index[i]].querySelectorAll("td")[3].textContent.split(".");a.push(splitArr[splitArr.length - 1]);
            } else if (trs.length - data.index[data.index.length - 1] > 1) {
              var counts = trs.length - data.index[data.index.length - 1];for (var j = 0; j < counts; j++) {
                var splitArr = trs[data.index[data.index.length - 1] + j].querySelectorAll("td")[3].textContent.split(".");a.push(splitArr[splitArr.length - 1]);
              }
            } else if (data.index[i + 1] - data.index[i] > 1) {
              var length = data.index[i + 1] - data.index[i];for (var n = 0; n < length; n++) {
                var splitArr = trs[data.index[i] + n].querySelectorAll("td")[3].textContent.split(".");a.push(splitArr[splitArr.length - 1]);
              }
            }data.color.push(a);
          }
        }; //采集SO
        //未采集
        //data.SOtip = "inputVal";
        if (trs.length == 1) {
          if (trs[0].querySelectorAll("input").length > 0) {
            var splitArr = trs[0].querySelectorAll("td")[4].querySelectorAll("input")[1].value;var Sotip = "inputVal";
          } else {
            var splitArr = trs[0].querySelectorAll("td")[4].textContent;var Sotip = "text";
          }var a = [];a.push(splitArr);a.push(Sotip);data.SO.push(a);
        } else if (trs.length > 1 && data.type.length == 1) {
          var a = [];for (var i = 0; i < trs.length; i++) {
            var b = [];if (trs[i].querySelectorAll("input").length > 0) {
              var splitArr = trs[i].querySelectorAll("td")[4].querySelectorAll("input")[1].value;var Sotip = "inputVal";
            } else {
              var splitArr = trs[i].querySelectorAll("td")[4].textContent;var Sotip = "text";
            }splitArr.replace(/[^0-9]/g, "");b.push(splitArr);b.push(Sotip);
            a.push(b);
          }data.SO.push(a);
        } else {
          for (var i = 0; i < data.index.length; i++) {
            var a = [];if (data.index[i + 1] - data.index[i] == 1 || trs.length - data.index[data.index.length - 1] == 1) {
              if (trs[data.index[i]].querySelectorAll("td")[4].querySelectorAll("input").length > 0) {
                var splitArr = trs[data.index[i]].querySelectorAll("td")[4].querySelectorAll("input")[1].value;var Sotip = "inputVal";
              } else {
                var splitArr = trs[data.index[i]].querySelectorAll("td")[4].textContent;var Sotip = "text";
              }a.push(splitArr);a.push(Sotip);
            } else if (trs.length - data.index[data.index.length - 1] > 1) {
              var counts = trs.length - data.index[data.index.length - 1];for (var j = 0; j < counts; j++) {
                var b = [];if (trs[data.index[data.index.length - 1] + j].querySelectorAll("td")[4].querySelectorAll("input").length > 0) {
                  var splitArr = trs[data.index[data.index.length - 1] + j].querySelectorAll("td")[4].querySelectorAll("input")[1].value;var Sotip = "inputVal";
                } else {
                  var splitArr = trs[data.index[data.index.length - 1] + j].querySelectorAll("td")[4].textContent;
                  var Sotip = "text";
                }b.push(splitArr);b.push(Sotip);a.push(b);
              }
            } else if (data.index[i + 1] - data.index[i] > 1) {
              var length = data.index[i + 1] - data.index[i];for (var n = 0; n < length; n++) {
                var b = [];if (trs[data.index[data.index.length - 1] + j].querySelectorAll("td")[4].querySelectorAll("input").length > 0) {
                  var splitArr = trs[data.index[i] + n].querySelectorAll("td")[4].querySelectorAll("input")[1].value;var Sotip = "inputVal";
                } else {
                  var splitArr = trs[data.index[i] + n].querySelectorAll("td")[4].textContent;var Sotip = "text";
                }b.push(splitArr);b.push(Sotip);a.push(b);
              }
            }data.SO.push(a);
          }
        }
      }return data;
    },
    doAction_uiControl104_lmWme5: function doAction_uiControl104_lmWme5(data, elem) {
      if (data.eventType == "change") {
        var val = data.dataCustom.val;var ind = data.dataCustom.ind; // elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[ind].querySelectorAll("td")[4].querySelectorAll("input")[1].focus();
        // var tt = elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[ind].querySelectorAll("td")[4].querySelectorAll("input")[1];
        // tt.dispatchEvent(new Event("keyup"));
        elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[ind].querySelectorAll("td")[4].querySelectorAll("input")[1].value = val.replace(/[^0-9]/g, "");
      }
    },
    getTemplate_uiControl104_lmWme5: function getTemplate_uiControl104_lmWme5() {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  onChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    var v=target.value;\n    if(handler){\n      handler({\n        data:{val:v,ind:target.getAttribute(\"data-index\")},\n        eventType:\"change\"\n      })\n    }\n  }\n\trender(){\n    var data=this.props.customData;\n    var _this=this;\n    return(\n    \t<ul className=\"ysp_newInfomationFill_PSI\">\n      \t{data&&data.type.length? \n        data.type.map((d,i)=>{\n          return(\n            <li>\n              <div className=\"ysp_PSI_up\">\n                <div>\n                \t<span className=\"ysp_PSI_item\">{data.item[i]}</span><span className=\"ysp_PSI_date\">{data.date}</span>\n                </div>\n                <div>\n                  <span>\u673A\u578B\uFF1A</span><span className=\"ysp_PSI_type\" style={{color:\"#999\"}}>{d}</span>\n                </div>\n              </div>\n                {data.color[i].length>1? data.color[i].map((dd,ii)=>{\n                 return(\n                   <div className=\"ysp_PSI_down\">\n                    <div className=\"ysp_PSI_color\">\n                      <span>\u989C\u8272\uFF1A</span>\n                      <span>{dd}</span>\n                    </div>\n                    <div className=\"ysp_PSI_SO\">\n                    \t<span>{data.SOtitle}\uFF1A</span>\n                      {data.SO[i][ii][1]=\"inputVal\"? <input value={data.SO[i][ii][0]} data-index={i+ii} onChange={_this.onChange.bind(_this)}/> : <span style={{color:\"#4796ed\"}}>{data.SO[i][ii][0]}</span>}\n                    </div>\n                   </div>\n                   \n                 ) \n                }) : <div className=\"ysp_PSI_down\">\n                      <div className=\"ysp_PSI_color\">\n                        <span>\u989C\u8272\uFF1A</span>\n                        <span>{data.color[i]}</span>\n                      </div>\n                      <div className=\"ysp_PSI_SO\">\n                        <span>{data.SOtitle}\uFF1A</span>\n                        {data.SO[i][1]==\"inputVal\"? <input value={data.SO[i][0]} data-index={i} onChange={_this.onChange.bind(_this)}/> : <span style={{color:\"#4796ed\"}}>{data.SO[i][0]}</span>}\n                      </div>\n                   </div>}\n            </li>\n          )\n        }) : <li>\u6682\u65E0\u6570\u636E</li>}\n      </ul>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      var v = target.value;\n      if (handler) {\n        handler({\n          data: { val: v, ind: target.getAttribute(\"data-index\") },\n          eventType: \"change\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"ul\",\n        { className: \"ysp_newInfomationFill_PSI\" },\n        data && data.type.length ? data.type.map(function (d, i) {\n          return React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"div\",\n              { className: \"ysp_PSI_up\" },\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp_PSI_item\" },\n                  data.item[i]\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp_PSI_date\" },\n                  data.date\n                )\n              ),\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u673A\\u578B\\uFF1A\"\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp_PSI_type\", style: { color: \"#999\" } },\n                  d\n                )\n              )\n            ),\n            data.color[i].length > 1 ? data.color[i].map(function (dd, ii) {\n              return React.createElement(\n                \"div\",\n                { className: \"ysp_PSI_down\" },\n                React.createElement(\n                  \"div\",\n                  { className: \"ysp_PSI_color\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"\\u989C\\u8272\\uFF1A\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    dd\n                  )\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"ysp_PSI_SO\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    data.SOtitle,\n                    \"\\uFF1A\"\n                  ),\n                  data.SO[i][ii][1] = \"inputVal\" ? React.createElement(\"input\", { value: data.SO[i][ii][0], \"data-index\": i + ii, onChange: _this.onChange.bind(_this) }) : React.createElement(\n                    \"span\",\n                    { style: { color: \"#4796ed\" } },\n                    data.SO[i][ii][0]\n                  )\n                )\n              );\n            }) : React.createElement(\n              \"div\",\n              { className: \"ysp_PSI_down\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_PSI_color\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u989C\\u8272\\uFF1A\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  data.color[i]\n                )\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_PSI_SO\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  data.SOtitle,\n                  \"\\uFF1A\"\n                ),\n                data.SO[i][1] == \"inputVal\" ? React.createElement(\"input\", { value: data.SO[i][0], \"data-index\": i, onChange: _this.onChange.bind(_this) }) : React.createElement(\n                  \"span\",\n                  { style: { color: \"#4796ed\" } },\n                  data.SO[i][0]\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"li\",\n          null,\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    doAction_uiControl109_OtzTtN: function doAction_uiControl109_OtzTtN(data, elem) {
      if (data.eventType == "alertClick") {
        ysp.customHelper.tipMsg.confirm();
      }
    },
    getTemplate_uiControl109_OtzTtN: function getTemplate_uiControl109_OtzTtN() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tAlert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      message:props.customData.postMessage\n    }\n  }\n  componentWillReceiveProps(nextprops){\n    this.setState({\n      message:nextprops.customData.postMessage\n    })\n  }\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n    return(\n    \t<div>\n        {data.postMessage==\"\" ? \"\" : \n          <Alert\n            content={this.state.message} \n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"alertClick\"\n                  })\n                }\n              }\n            }\n          />\n        }\n      </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      message: props.customData.postMessage\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextprops) {\n      this.setState({\n        message: nextprops.customData.postMessage\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data.postMessage == \"\" ? \"\" : React.createElement(_yspCustomComponents.Alert, {\n          content: this.state.message,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"alertClick\"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control112_m8Fgnc: function getData_control112_m8Fgnc(elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }return data;
    },
    doAction_uiControl109_IAJpy0: function doAction_uiControl109_IAJpy0(data, elem) {
      if (data.eventType == "alertClick") {
        ysp.customHelper.tipMsg.confirm();
      }
    },
    getTemplate_uiControl109_IAJpy0: function getTemplate_uiControl109_IAJpy0() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tAlert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  \n  render(){\n    var _this=this;\n    var data=this.props.customData;\n     return(\n    \t<div>\n        {data.postMessage==\"\" ? \"\" : \n          <Alert\n            content={data.postMessage} \n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"alertClick\"\n                  })\n                }\n              }\n            }\n          />\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n        return React.createElement(\n        'div',\n        null,\n        data.postMessage == \"\" ? \"\" : React.createElement(_yspCustomComponents.Alert, {\n          content: data.postMessage,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"alertClick\"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control131_bQMkOJ: function getData_control131_bQMkOJ(elem) {},
    doAction_uiControl129_xdA0wN: function doAction_uiControl129_xdA0wN(data, elem) {
      if (data.eventType == "click") {
        console.log("dd");elem.ownerDocument.querySelector(".collectionPSIentercontentbutton").querySelectorAll("span")[0].click();
      }
    },
    getTemplate_uiControl129_xdA0wN: function getTemplate_uiControl129_xdA0wN() {
      var selfTemplate = "module.exports = React.createClass({\n\tonClick:function(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.onClick} className=\"ysp_dayPSI_submitBtn\" >\u63D0\u4EA4</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { onClick: this.onClick, className: \"ysp_dayPSI_submitBtn\" },\n      \"\\u63D0\\u4EA4\"\n    );\n  }\n});";
    }
  }, "dayPSI");
})(window, ysp);