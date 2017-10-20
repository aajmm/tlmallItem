(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control30_4Hn4Gb: function (elem) {
      if (elem) {
        var data = [];$(elem).children('tr').each(function (idx, item) {
          var child = { content: [] };var str = $(item).children('td').eq(0).text();var s = str.replace(/：/g, "");child.title = s;$(item).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').each(function (i, v) {
            var children = { cont: [] };children.title = v.textContent;children.cont = $(v).children('input')[0].checked;child.content.push(children);
          });data.push(child);
        });return data;
      }return '';
    },
    doAction_uiControl34_oRNHQz: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;let q = $(elem).children('tr');q.eq(d[0]).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').eq(d[1]).find('input').click();
      } else if (data.eventType == 'blur') {
        var _btn = $(elem).find('.grayBtn');_btn.click();
      } else if (data.eventType == "showLoading") {
        ysp.appMain.showLoading();
      } else if (data.eventType == "hideLoading") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl34_oRNHQz: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true\n    }\n  }\n  componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  showLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:'showLoading'\n    })\n  }\n  hideLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:'hideLoading'\n    })\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    return(\n    \t<div className=\"ysp-ProcessedTask-main\" ref=\"outerWrapper\">\n      \t<b onClick={()=>{this.setState({show:!this.state.show})}}>\n          \u67E5\u8BE2\n          <span className={\tthis.state.show\t?\t'ysp-blue-bottom-icon'\t:\t'ysp-blue-top-icon'}></span>\n        </b>\n        <Inquiry stateShow={this.state.show} click={(i,idx)=>{customHandler({data:[i,idx],eventType:'click'})}} blur={()=>{customHandler({data:'1',eventType:'blur'});this.showLoading();this.hideLoading()}}  \tData={customData}/>\n      </div>\n    )\n  }\n}\nclass Inquiry extends React.Component{\n  \n  render(){\n    var data=this.props.Data\t||\t[];\n    return(\n        <div className=\"ysp-ProcessedTask-check-main\" style={{ display:this.props.stateShow\t?\t'none':'block'}}>\n          { data.map((item,i)=>{\n            return(\n            <div>\n              <div className='ysp-ProcessedTask-check-main-title'>\n                {item.title}\n              </div>\n              <AMUI.List className='ysp-ProcessedTask-check-main-input'>\n              \t{item.content.map((val,idx)=><AMUI.List.Item nested=\"checkbox\" >\n                <AMUI.Field label={val.title} type=\"checkbox\" name=\"checkbox-list-1\" onClick={()=>{this.props.click(i,idx)}} key={idx} checked={val.cont}/>\n              \t</AMUI.List.Item>)}\n              </AMUI.List>\n            </div>  \n            )   \n          })}\n        \t<div className='ysp-ProcessedTask-check-btnMain'>\n        \t\t<AMUI.Button onClick={()=>{this.props.blur()}} amStyle='primary' className='ysp-ProcessedTask-check-btn'>\u67E5\u8BE2</AMUI.Button>\n        \t</div>\n        </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'showLoading',\n    value: function showLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: 'showLoading'\n      });\n    }\n  }, {\n    key: 'hideLoading',\n    value: function hideLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: 'hideLoading'\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-main', ref: 'outerWrapper' },\n        React.createElement(\n          'b',\n          { onClick: function onClick() {\n              _this2.setState({ show: !_this2.state.show });\n            } },\n          '\\u67E5\\u8BE2',\n          React.createElement('span', { className: this.state.show ? 'ysp-blue-bottom-icon' : 'ysp-blue-top-icon' })\n        ),\n        React.createElement(Inquiry, { stateShow: this.state.show, click: function click(i, idx) {\n            customHandler({ data: [i, idx], eventType: 'click' });\n          }, blur: function blur() {\n            customHandler({ data: '1', eventType: 'blur' });_this2.showLoading();_this2.hideLoading();\n          }, Data: customData })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar Inquiry = function (_React$Component2) {\n  _inherits(Inquiry, _React$Component2);\n\n  function Inquiry() {\n    _classCallCheck(this, Inquiry);\n\n    return _possibleConstructorReturn(this, (Inquiry.__proto__ || Object.getPrototypeOf(Inquiry)).apply(this, arguments));\n  }\n\n  _createClass(Inquiry, [{\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var data = this.props.Data || [];\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-check-main', style: { display: this.props.stateShow ? 'none' : 'block' } },\n        data.map(function (item, i) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-ProcessedTask-check-main-title' },\n              item.title\n            ),\n            React.createElement(\n              AMUI.List,\n              { className: 'ysp-ProcessedTask-check-main-input' },\n              item.content.map(function (val, idx) {\n                return React.createElement(\n                  AMUI.List.Item,\n                  { nested: 'checkbox' },\n                  React.createElement(AMUI.Field, { label: val.title, type: 'checkbox', name: 'checkbox-list-1', onClick: function onClick() {\n                      _this4.props.click(i, idx);\n                    }, key: idx, checked: val.cont })\n                );\n              })\n            )\n          );\n        }),\n        React.createElement(\n          'div',\n          { className: 'ysp-ProcessedTask-check-btnMain' },\n          React.createElement(\n            AMUI.Button,\n            { onClick: function onClick() {\n                _this4.props.blur();\n              }, amStyle: 'primary', className: 'ysp-ProcessedTask-check-btn' },\n            '\\u67E5\\u8BE2'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Inquiry;\n}(React.Component);";
    },
    getData_control31_R1g6aJ: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        //获取tr的数组
        var data = [];var trArr = elem.querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trArr.length; i++) {
          var tdArr = trArr[i].querySelectorAll("td");var arry = [];for (var j = 0; j < tdArr.length; j++) {
            arry.push(tdArr[j].textContent);
          }data.push(arry);arry.shift();arry.shift();
        }data.shift();data.shift();return data;
      }
    },
    doAction_uiControl35_aoIpOl: function (data, elem) {
      if (data.eventType == "clickBtn") {
        var index = parseInt(data.dataCustom.index) + 2;var i = data.dataCustom.i;elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl35_aoIpOl: function () {
      var selfTemplate = "import {Component} from 'react'\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:-1\n    }\n  }\n  componentWillReceiveProps(){\n  \tthis.setState({\n      show:-1\n    })\n\t}\n//   componentDidMount(){\n//     var list=this.refs.list;\n//     setTimeout(function(){\n//       list.window.location.reload()\n//     },500)\n    \n//   }\n  upDown=(e)=>{\n    var target=e.target;\n    if(\tthis.state.show\t!=target.dataset.key){\n    \tthis.setState({\n      \tshow:target.dataset.key\n    \t})   \n    }else{\n      this.setState({\n      \tshow:-1\n   \t\t})\n    }\n  }\n  clickBtn(e){\n    var target=e.target;\n  \tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{index:target.getAttribute(\"data-index\"),i:target.dataset.i},\n        eventType:\"clickBtn\"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    var _this=this;\n    return(\n    \t<div className=\"ysp_waitingTask_list\" ref=\"list\">\n        {data.length>0? \n          data.map((d,i)=>{\n          \treturn(\n            \t<div className=\"ysp_list_item\">\n              \t<div className=\"ysp_item_top\">\n                  <i></i>\n                  <span className=\"ysp_top_title\">{d[0]}</span>\n                  <span className=\"ysp_top_status\">{d[1]}</span>\n                </div>\n                <div className=\"ysp_item_bottom\">\n                \t<div className=\"ysp_bottom_left\">\n                    <div>\u63D0\u4EA4\u65F6\u95F4\uFF1A{d[2]}</div>\n                    <div>\u5230\u8FBE\u65F6\u95F4\uFF1A{d[3]}</div>\n                    <div>\u5B8C\u6210\u65F6\u95F4\uFF1A{d[4]}</div>\n                  </div>\n                  <i className={this.state.show==i\t?\t'ysp_bottom_Up'\t:\t'ysp_bottom_Down'\t} onClick={_this.upDown}\tdata-key={i}></i>\n                  <div className=\"ysp_btn_panel\" style={{display:\tthis.state.show\t==\ti\t?\t'block'\t:\t'none'\t}}>\n                  \t<button className=\"ysp_btn_do\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"0\">\u67E5\u770B\u8868\u5355</button>\n                    <button className=\"ysp_btn_check\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"1\">\u67E5\u770B</button>\n                  </div>\n                </div>\n              </div>\n            )\n        \t}) : <div style={{textAlign:'center'}}>\u6682\u65E0\u6570\u636E</div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.upDown = function (e) {\n      var target = e.target;\n      if (_this2.state.show != target.dataset.key) {\n        _this2.setState({\n          show: target.dataset.key\n        });\n      } else {\n        _this2.setState({\n          show: -1\n        });\n      }\n    };\n\n    _this2.state = {\n      show: -1\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps() {\n      this.setState({\n        show: -1\n      });\n    }\n    //   componentDidMount(){\n    //     var list=this.refs.list;\n    //     setTimeout(function(){\n    //       list.window.location.reload()\n    //     },500)\n\n    //   }\n\n  }, {\n    key: \"clickBtn\",\n    value: function clickBtn(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { index: target.getAttribute(\"data-index\"), i: target.dataset.i },\n          eventType: \"clickBtn\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_waitingTask_list\", ref: \"list\" },\n        data.length > 0 ? data.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp_list_item\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_top\" },\n              React.createElement(\"i\", null),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_title\" },\n                d[0]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_status\" },\n                d[1]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_bottom\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_bottom_left\" },\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u63D0\\u4EA4\\u65F6\\u95F4\\uFF1A\",\n                  d[2]\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u5230\\u8FBE\\u65F6\\u95F4\\uFF1A\",\n                  d[3]\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u5B8C\\u6210\\u65F6\\u95F4\\uFF1A\",\n                  d[4]\n                )\n              ),\n              React.createElement(\"i\", { className: _this3.state.show == i ? 'ysp_bottom_Up' : 'ysp_bottom_Down', onClick: _this.upDown, \"data-key\": i }),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_btn_panel\", style: { display: _this3.state.show == i ? 'block' : 'none' } },\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_do\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"0\" },\n                  \"\\u67E5\\u770B\\u8868\\u5355\"\n                ),\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_check\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"1\" },\n                  \"\\u67E5\\u770B\"\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"div\",\n          { style: { textAlign: 'center' } },\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control32_xrbDuu: function (elem) {
      if (elem) {
        var data = {};var _PagesMessage = elem.querySelector('.mini-pager-right').textContent;data.PagesMessage = _PagesMessage;var _PageNumber = elem.querySelector('.mini-pager-num').value;data.PageNumber = _PageNumber;var _PageCount = elem.querySelector('.mini-pager-pages').textContent;data.PageCount = _PageCount;return data;
      }return '';
    },
    doAction_uiControl36_3Xkpsc: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;switch (d) {case 'ysp-PagesMessage-leftBM-icon':
            var btnId = elem.querySelector('.mini-pager-first').parentNode;console.log(btnId);btnId.click();break;case 'ysp-PagesMessage-left-icon':
            var btnId = elem.querySelector('.mini-pager-prev').parentNode;btnId.click();break;case 'ysp-PagesMessage-right-icon':
            var btnId = elem.querySelector('.mini-pager-next').parentNode;btnId.click();break;case 'ysp-PagesMessage-rightBM-icon':
            var btnId = elem.querySelector('.mini-pager-last').parentNode;btnId.click();break;}
      } else if (data.eventType == "selectChange") {
        elem.querySelector(".mini-buttonedit-input").focus();elem.querySelector(".mini-buttonedit-input").click();setTimeout(function () {
          elem.ownerDocument.querySelector(".mini-listbox-items").querySelectorAll("tr")[data.dataCustom.ind].click();
        }, 50);
      } else if (data.eventType == "inputChange") {
        elem.querySelector(".mini-pager-num").value = data.dataCustom;elem.querySelector(".mini-pager-num").dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl36_3Xkpsc: function () {
      var selfTemplate = "import {Page} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport default class\textends Component{\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:'selectChange'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:'inputChange'                         \n       })\n     }\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    var _this=this;\n    if(customData){\n      return(\n        <div>\n          <Page\tPassedCustomData={customData}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />\t\n        </div>\n      )\n    }else{\n      return(\n        <div style={{display:'none'}}></div>\n      )\n    } \n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'pagesClick',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'selectChange',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: 'selectChange'\n        });\n      }\n    }\n  }, {\n    key: 'inputChange',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: 'inputChange'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      var _this = this;\n      if (customData) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(_yspCustomComponents.Page, { PassedCustomData: customData, pagesClick: _this.pagesClick.bind(_this), inputChange: _this.inputChange.bind(_this), selectChange: _this.selectChange.bind(_this) })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control3_tKTeZZ: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl4_7ooDrK: function (data, elem) {},
    getTemplate_uiControl4_7ooDrK: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\">\n        {data==\"\"? <div></div>:<div className=\"ysp_alert_words\"><span>{data}</span></div>}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      { className: \"ysp_alert_tips\" },\n      data == \"\" ? React.createElement(\"div\", null) : React.createElement(\n        \"div\",\n        { className: \"ysp_alert_words\" },\n        React.createElement(\n          \"span\",\n          null,\n          data\n        )\n      )\n    );\n  }\n});";
    },
    getData_control2_EIVFPc: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        // var data=elem.ownerDocument.defaultView.frameElementownerDocument.parentNode.querySelectorAll(".mini-tab-active")[1].querySelector("span").textContent
        var data = "";return data;
      }
    },
    doAction_uiControl3_n5Dv7n: function (data, elem) {
      if (data.eventType === 'back') {
        // var win = elem.ownerDocument.defaultView;
        // var parentWin = win.parent;
        // parentWin && parentWin.location.reload();
        //window.EAPI.back();
        //   var num = 0;
        //   var a = setInterval(function () {
        //     num++;
        //     if (num == 4) {
        //       clearInterval(a);
        //     }
        //     window.EAPI.back();
        //   }, 50);
        var newUrl = ysp.appMain.getActiveWindow();newUrl.location.href = "http://192.168.0.189:8888/ptsoa/bps/wfclient/task/app/appMyTask.jsp";
      }
    },
    getTemplate_uiControl3_n5Dv7n: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    let _this = this;\n    return (\n      <Header amStyle="primary" title="\u5DF2\u5904\u7406\u7684\u4EFB\u52A1">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 ,display:\'none\'}}></AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n}';
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \"primary\", title: \"\\u5DF2\\u5904\\u7406\\u7684\\u4EFB\\u52A1\" },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 }, onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n              } },\n            React.createElement(\"span\", { className: \"icon icon-left-nav\" })\n          )\n        ),\n        React.createElement(\n          _yspInteriorComponents.HeaderRight,\n          null,\n          React.createElement(AMUI.Button, { amStyle: \"primary\", style: { margin: 0, display: 'none' } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);