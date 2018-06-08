(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control31_0nUwQJ: function (elem) {},
    doAction_uiControl31_DNX7ny: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        ysp.appMain.back();
      } else if (type == "filter") {
        elem.click();
      }
    }, getTemplate_uiControl31_DNX7ny: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u85AA\u8D44\u67E5\u8BE2\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={true}\n        \t filter={()=>{\n          \t\tlet handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'filter'\n                });\n              }\n        \t }}\n        />\n        <div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}\n\n      \t";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u85AA\u8D44\u67E5\u8BE2\", rightText: \"\u7B5B\u9009\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: true,\n          filter: function filter() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'filter'\n              });\n            }\n          }\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control33_sCuNXc: function (elem) {
      if (elem) {
        if (elem.ownerDocument.defaultView.frameElement.ownerDocument.querySelector("iframe[id*='ptModFrame_']")) {
          var target = elem.ownerDocument.defaultView.frameElement.ownerDocument.querySelector("iframe[id*='ptModFrame_']").contentDocument.querySelector(".ps_pagecontainer");return ysp.customHelper.selectSthMask(target);
        }
      }
    },
    doAction_uiControl33_mz87AZ: function (data, elem) {
      var type = data.eventType;var data = data.dataCustom;if (type == "sureClick") {
        var target = elem.ownerDocument.defaultView.frameElement.ownerDocument.querySelector("iframe[id*='ptModFrame_']").contentDocument.querySelector(".ps_pagecontainer");var year = target.querySelector("#PTSRCHRESULTS").querySelectorAll("tr");for (var i = 1; i < year.length; i++) {
          var td = year[i].querySelectorAll("td")[0];if (data == td.textContent) {
            td.querySelector("a").click();setTimeout(function () {
              elem.click();
            }, 500);
          }
        }
      }
    },
    getTemplate_uiControl33_mz87AZ: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  timeClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.index\n      })\n    }\n    var yearCell =this.refs.filter.ownerDocument.querySelectorAll(\"div[name='yearCell']\");\n    for(var i=0;i<yearCell.length;i++){\n        yearCell[i].className=\"yearCell\"\n    }\n    target.className=\"yearCellSelect\"\n  }\n  sureClick(e){\n    var handler=this.props.customHandler;\n    var selectYear=this.refs.filter.ownerDocument.querySelector(\".yearCellSelect\");\n    if(handler){\n      handler({\n        data:selectYear.textContent,\n        eventType:\"sureClick\"\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      \t<div className=\"ysp_filter\" ref=\"filter\">\n        \t{data&&data!==\"elem\u4E0D\u5B58\u5728\"? \n        \t\t<div className=\"ysp_selectBox\">\n            \t<div className=\"selectBox_content\">\n                <div className=\"contentTitle\">\u65F6\u95F4\u9009\u62E9</div>\n                <div className=\"contentScroll\">\n                \t<div className=\"timeContent\">\n                    {data&&data.table&&data.table.content&&data.table.content.map(function(d,i){\n                      return(\n                        <div name=\"yearCell\" className=\"yearCell\" onClick={_this.timeClick.bind(_this)} data-index={i}>{d[0]}</div>\n                      )\n                    })}\n                  </div>\n                </div>\n                <div className=\"filterSure\" onClick={_this.sureClick.bind(_this)}>\u786E\u5B9A</div>\n              </div>\n            </div>:<div></div>\n          }\n        </div>\n      )\n    }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"timeClick\",\n    value: function timeClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.index\n        });\n      }\n      var yearCell = this.refs.filter.ownerDocument.querySelectorAll(\"div[name='yearCell']\");\n      for (var i = 0; i < yearCell.length; i++) {\n        yearCell[i].className = \"yearCell\";\n      }\n      target.className = \"yearCellSelect\";\n    }\n  }, {\n    key: \"sureClick\",\n    value: function sureClick(e) {\n      var handler = this.props.customHandler;\n      var selectYear = this.refs.filter.ownerDocument.querySelector(\".yearCellSelect\");\n      if (handler) {\n        handler({\n          data: selectYear.textContent,\n          eventType: \"sureClick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_filter\", ref: \"filter\" },\n        data && data !== \"elem\u4E0D\u5B58\u5728\" ? React.createElement(\n          \"div\",\n          { className: \"ysp_selectBox\" },\n          React.createElement(\n            \"div\",\n            { className: \"selectBox_content\" },\n            React.createElement(\n              \"div\",\n              { className: \"contentTitle\" },\n              \"\\u65F6\\u95F4\\u9009\\u62E9\"\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"contentScroll\" },\n              React.createElement(\n                \"div\",\n                { className: \"timeContent\" },\n                data && data.table && data.table.content && data.table.content.map(function (d, i) {\n                  return React.createElement(\n                    \"div\",\n                    { name: \"yearCell\", className: \"yearCell\", onClick: _this.timeClick.bind(_this), \"data-index\": i },\n                    d[0]\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"filterSure\", onClick: _this.sureClick.bind(_this) },\n              \"\\u786E\\u5B9A\"\n            )\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control34_DNCTQE: function (elem) {
      if (elem) {
        return ysp.customHelper.tableData(elem);
      } else {
        return;
      }
    },
    doAction_uiControl34_BR9DeC: function (data, elem) {
      if (data.eventType == "checkClick") {
        var i = parseInt(data.dataCustom) + 1;var tr = elem.querySelector("table[dir='ltr']").querySelectorAll("tr")[i].querySelector("a[ptlinktgt='pt_replace']");tr.click();
      }
    },
    getTemplate_uiControl34_BR9DeC: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  checkClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"checkClick\"\n      })\n    }\n    top.date=target.parentElement.previousElementSibling.textContent;\n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(\n    \t<div className=\"ysp_salary_box\">\n      \t{data&&data.content&&data.content.map(function(d,i){\n          return(\n          \t<div className=\"ysp_salary_item\">\n            \t<div className=\"ysp_salary_date\">{d[1].text}</div>\n              <div className=\"ysp_salary_panel\">\n                <div className=\"ysp_salary_detail\">\n                  {d.map(function(d1,i1){\n                    if(i1>3&&i1<d.length-1){\n                      return(\n                        <div>\n                          <span>{data.title[i1]}:</span>\n                          <span>{d1.text}</span>\n                        </div>\n                      )\n                    }\n                  })}\n                </div>\n                <div className=\"ysp_salary_check\" onClick={_this.checkClick.bind(_this)} data-index={i}>\u67E5\u770B</div>\n              </div>\n            </div>\n          )\n        })}\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"checkClick\",\n    value: function checkClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"checkClick\"\n        });\n      }\n      top.date = target.parentElement.previousElementSibling.textContent;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_salary_box\" },\n        data && data.content && data.content.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp_salary_item\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_salary_date\" },\n              d[1].text\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_salary_panel\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_salary_detail\" },\n                d.map(function (d1, i1) {\n                  if (i1 > 3 && i1 < d.length - 1) {\n                    return React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        data.title[i1],\n                        \":\"\n                      ),\n                      React.createElement(\n                        \"span\",\n                        null,\n                        d1.text\n                      )\n                    );\n                  }\n                })\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_salary_check\", onClick: _this.checkClick.bind(_this), \"data-index\": i },\n                \"\\u67E5\\u770B\"\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control35_fAscXR: function (elem) {
      if (elem && elem.textContent.indexOf("收入明细") !== -1) {
        var data = { ID: "", income: [], decrease: [], salary: [] }; /*********************************************************************************ID**********************************************************************/var parentPage = elem.ownerDocument.defaultView.frameElement.ownerDocument.querySelector("a"); /*********************************************************************************收入明细**********************************************************************/var incomeTrs = elem.querySelectorAll("table[dir='ltr']")[1] && elem.querySelectorAll("table[dir='ltr']")[1].querySelectorAll("tr");incomeTrs && [].forEach.call(incomeTrs, function (d, i) {
          var incomeObj = {};incomeObj.title = d.querySelectorAll("td")[0].textContent.trim();incomeObj.content = d.querySelectorAll("td")[1].textContent.trim();data.income.push(incomeObj);
        }); /*********************************************************************************扣减明细**********************************************************************/var decreaseTrs = elem.querySelectorAll("table[dir='ltr']")[3] && elem.querySelectorAll("table[dir='ltr']")[3].querySelectorAll("tr");decreaseTrs && [].forEach.call(decreaseTrs, function (d, i) {
          var decreaseObj = {};decreaseObj.title = d.querySelectorAll("td")[0].textContent.trim();decreaseObj.content = d.querySelectorAll("td")[1].textContent.trim();data.decrease.push(decreaseObj);
        }); /*********************************************************************************实收、应收工资**********************************************************************/data.salary.push(elem.querySelector("#HPS_SELF_PY_RS_HPS_SHOULD_PAY") && elem.querySelector("#HPS_SELF_PY_RS_HPS_SHOULD_PAY").textContent);data.salary.push(elem.querySelector("#HPS_SELF_PY_RS_HPS_PAYROLL") && elem.querySelector("#HPS_SELF_PY_RS_HPS_PAYROLL").textContent);return data;
      } else {
        return;
      }
    },
    doAction_uiControl35_xKDyfk: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        // ysp.appMain.back();
        elem.ownerDocument.querySelector("input[name='#ICSave']").click();
      }
    },
    getTemplate_uiControl35_xKDyfk: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(\n    \t<div>\n        {data? \n        <div className=\"ysp_salary_detail_list\">\n        \t<div className=\"ysp_detail_headWrapper\">\n            <CustomHeader \n             data={{centerText:\"\u85AA\u8D44\u8BE6\u60C5\",rightText:\"\"}} \n             backIsShow={true} \n             back={()=>{ \n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n             }} \n             filterIsShow={false}\n            />\n            <div style={{height:\"2.7rem\"}}></div>\n          </div>\n          <div className=\"ysp_salary_scroll\">\n            <div className=\"periodID ysp_salary_board\" style={{marginTop:\"10px\"}}>\n              <div className=\"ysp_detail\">\n                  <span>\u671F\u95F4ID</span>\n                  <span>{top.date}</span>\n              </div>\n            </div>\n            <div className=\"ysp_income_board ysp_salary_board\">\n              {data&&data.income&&data.income[0].title!==\"\"&&data.income.map(function(d,i){\n                return(\n                  <div className=\"ysp_detail\">\n                    <span>{d.title}</span>\n                    <span>{d.content}</span>\n                  </div>\n                )\n              })}  \n            </div>\n            <div className=\"ysp_decrease_detail ysp_salary_board\">\n              {data&&data.decrease&&data.decrease[0].title!==\"\"&&data.decrease.map(function(d,i){\n                return(\n                  <div className=\"ysp_detail\">\n                    <span>{d.title}</span>\n                    <span>{d.content}</span>\n                  </div>\n                )\n              })}  \n            </div>\n            <div className=\"ysp_salary_total ysp_salary_board\">\n              <div className=\"ysp_detail\">\n                <span>\u5E94\u53D1\u5DE5\u8D44</span>\n                <span>{data&&data.salary[0]}</span>\n              </div>\n              <div className=\"ysp_detail\">\n                <span>\u5B9E\u53D1\u5DE5\u8D44</span>\n                <span>{data&&data.salary[1]}</span>\n              </div>\n            </div>\n          </div>\n        </div>:<div></div>}\n      \t\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data ? React.createElement(\n          'div',\n          { className: 'ysp_salary_detail_list' },\n          React.createElement(\n            'div',\n            { className: 'ysp_detail_headWrapper' },\n            React.createElement(_yspCustomComponents.CustomHeader, {\n              data: { centerText: \"\u85AA\u8D44\u8BE6\u60C5\", rightText: \"\" },\n              backIsShow: true,\n              back: function back() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n              },\n              filterIsShow: false\n            }),\n            React.createElement('div', { style: { height: \"2.7rem\" } })\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp_salary_scroll' },\n            React.createElement(\n              'div',\n              { className: 'periodID ysp_salary_board', style: { marginTop: \"10px\" } },\n              React.createElement(\n                'div',\n                { className: 'ysp_detail' },\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u671F\\u95F4ID'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  top.date\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'ysp_income_board ysp_salary_board' },\n              data && data.income && data.income[0].title !== \"\" && data.income.map(function (d, i) {\n                return React.createElement(\n                  'div',\n                  { className: 'ysp_detail' },\n                  React.createElement(\n                    'span',\n                    null,\n                    d.title\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d.content\n                  )\n                );\n              })\n            ),\n            React.createElement(\n              'div',\n              { className: 'ysp_decrease_detail ysp_salary_board' },\n              data && data.decrease && data.decrease[0].title !== \"\" && data.decrease.map(function (d, i) {\n                return React.createElement(\n                  'div',\n                  { className: 'ysp_detail' },\n                  React.createElement(\n                    'span',\n                    null,\n                    d.title\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d.content\n                  )\n                );\n              })\n            ),\n            React.createElement(\n              'div',\n              { className: 'ysp_salary_total ysp_salary_board' },\n              React.createElement(\n                'div',\n                { className: 'ysp_detail' },\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5E94\\u53D1\\u5DE5\\u8D44'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.salary[0]\n                )\n              ),\n              React.createElement(\n                'div',\n                { className: 'ysp_detail' },\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5B9E\\u53D1\\u5DE5\\u8D44'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.salary[1]\n                )\n              )\n            )\n          )\n        ) : React.createElement('div', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "salary");
})(window, ysp);