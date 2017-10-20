(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_pOS228: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { tabs: [], tabsNum: [], key: {} };
        var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item, i) {
          var key = item.parentElement.classList.contains('mini-tab-active');
          var num = item.parentElement.getAttribute("index");if (item.innerHTML != '流程监控') {
            if (key == true) {
              data.tabs.push(item.innerHTML);
              data.tabsNum.push(num);data.key = i;
            } else {
              data.tabs.push(item.innerHTML);
              data.tabsNum.push(num);
            }
          }
        });return data;
      }
    },
    doAction_uiControl9_qm7DZ2: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }
      }
    },
    getTemplate_uiControl9_qm7DZ2: function () {
      var selfTemplate = "import {Tabs} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    this.setState({\n      show: parseInt(e.dataset.id)\n    })\n     if(handler) {                                    \n       handler({\n         data:[e.className,e.dataset.id],\n         eventType:'click'                         \n       })\n     }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref=\"outerWrapper\">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)   \n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n} ";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'tabsClick',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      this.setState({\n        show: parseInt(e.dataset.id)\n      });\n      if (handler) {\n        handler({\n          data: [e.className, e.dataset.id],\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          'div',\n          { ref: 'outerWrapper' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control12_35Zg9R: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [] };var signOne = elem.contentWindow && elem.contentWindow.document.querySelectorAll('.mini-panel-viewport');if (typeof signOne != 'undefined' && signOne.length > 0) {
          var key = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view .mini-grid-table');var _key = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table');if (typeof key != 'undefined' && key.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr')[1].querySelectorAll('td');typeof sheep != 'undefined' && [].forEach.call(sheep, function (item, i) {
              var children = {};children.title = item.textContent.trim();data.twoPartTitle.push(children);
            });data.twoPartTitle.shift();
          }if (typeof _key != 'undefined' && _key.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');typeof sheep != 'undefined' && [].forEach.call(sheep, function (item, i) {
              var bridge = item.querySelectorAll('td');var children = [];[].forEach.call(bridge, function (val, index) {
                children.push(val.textContent);
              });data.twoPartCont.push(children);data.twoPartCont[i].shift();
            });var _PagesMessage = elem.contentWindow.document.querySelector('.mini-pager-right').textContent;data.PagesMessage = _PagesMessage;var _PageNumber = elem.contentWindow.document.querySelector('.mini-pager-num').value;data.PageNumber = _PageNumber;var _PageCount = elem.contentWindow.document.querySelector('.mini-pager-pages').textContent;data.PageCount = _PageCount;
          }
        }return data;
      }
    },
    doAction_uiControl13_Diul1y: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;switch (d) {case 'ysp-PagesMessage-leftBM-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-9');console.log(btnId);btnId.click();break;case 'ysp-PagesMessage-left-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-10');btnId.click();break;case 'ysp-PagesMessage-right-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-11');btnId.click();break;case 'ysp-PagesMessage-rightBM-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-12');btnId.click();break;}
      } else if (data.eventType == "selectChange") {
        elem.contentWindow.document.querySelector(".mini-buttonedit-input").focus();elem.contentWindow.document.querySelector(".mini-buttonedit-input").click();setTimeout(function () {
          elem.contentWindow.document.querySelector(".mini-listbox-items").querySelectorAll("tr")[data.dataCustom.ind].click();
        }, 50);
      } else if (data.eventType == "inputChange") {
        elem.contentWindow.document.querySelector(".mini-pager-num").value = data.dataCustom;elem.contentWindow.document.querySelector(".mini-pager-num").dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl13_Diul1y: function () {
      var selfTemplate = 'import {Page} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  upDown(e){\n    var target=e.target;\n    if(target.className=="ysp-bottom-icon"){\n      target.className="ysp-top-icon";\n      target.parentElement.nextSibling.style.display="block"; \n    }else{\n      target.className="ysp-bottom-icon";\n      target.parentElement.nextSibling.style.display="none";\n    }\n  }\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:\'selectChange\'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:\'inputChange\'                         \n       })\n     }\n  }\n  render(){\n    var data=this.props.customData  || [];\n    var _this=this;\n    if(data){\n      return(\n      \t<div className=\'ysp-ExamineAndApprove\'>\n       \t <div className=\'ysp-ExamineAndApprove-cardBody\'> \n        \t{\ttypeof data.twoPartCont.length\t!=\'undefined\'\t&&\tdata.twoPartCont.length>0\t?\n         \t\tdata.twoPartCont.map(function(item,index){\n            \treturn(\n              \t<div className="ysp-ExamineAndApprove-card">\n                \t<div className=\'ysp-ExamineAndApprove-first\'>\n                  \t<label>\n                     \t<i></i>\n                      <span>{data.twoPartTitle[0].title}:</span>\n                     \t{item[0]}\n                    </label>\n                    <b className=\'ysp-ExamineAndApprove-name\'>{item[3]}</b>\n                  </div>\n                  <div>\n                   \t<label>\n                    \t<span>{data.twoPartTitle[1].title}:</span>\n                      {item[1]}\n                    </label>\n                  \t<span className=\'ysp-bottom-icon\' onClick={_this.upDown}>\n                    </span>\n                  </div>\n                  <div style={{display:\'none\'}}>\n                    <div>\n                      <label>\n                       \t<span>{data.twoPartTitle[2].title}:</span>\n                        {item[2]}\n                      </label>\n                    </div>\n                    <div>\n                      <label>\n                      \t<span>{data.twoPartTitle[4].title}:</span>\n                        {item[4]}\n                      </label>\n                    </div>\n                    <div>\n                     \t<label>\n                      \t<span>{data.twoPartTitle[5].title}:</span>\n                        {item[5]}\n                     \t </label>\n                    </div>\n                    <div>\n                    \t<label>\n                      \t<span>{data.twoPartTitle[6].title}:</span>\n                        {item[6]}\n                      </label>\n                    </div>\n                    <div>\n                    \t<label>\n                      \t<span>{data.twoPartTitle[7].title}:</span>\n                        {item[7]}\n                      </label>\n                    </div>\n                  </div>\n                </div>\n          \t)\n          })\t:\t<div\tstyle={{padding:\'10px\'}}>\u6682\u65F6\u6CA1\u6709\u6570\u636E..</div>\n          }\n      \t</div>\n        <div>\n          <Page\tPassedCustomData={data}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />\n        </div>\n      </div>\n    )}else{\n    \treturn(<div style={{display:\'none\'}}></div>)    \n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'upDown\',\n    value: function upDown(e) {\n      var target = e.target;\n      if (target.className == "ysp-bottom-icon") {\n        target.className = "ysp-top-icon";\n        target.parentElement.nextSibling.style.display = "block";\n      } else {\n        target.className = "ysp-bottom-icon";\n        target.parentElement.nextSibling.style.display = "none";\n      }\n    }\n  }, {\n    key: \'pagesClick\',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'selectChange\',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: \'selectChange\'\n        });\n      }\n    }\n  }, {\n    key: \'inputChange\',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \'inputChange\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-ExamineAndApprove\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-ExamineAndApprove-cardBody\' },\n            typeof data.twoPartCont.length != \'undefined\' && data.twoPartCont.length > 0 ? data.twoPartCont.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-ExamineAndApprove-card\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp-ExamineAndApprove-first\' },\n                  React.createElement(\n                    \'label\',\n                    null,\n                    React.createElement(\'i\', null),\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[0].title,\n                      \':\'\n                    ),\n                    item[0]\n                  ),\n                  React.createElement(\n                    \'b\',\n                    { className: \'ysp-ExamineAndApprove-name\' },\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'label\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[1].title,\n                      \':\'\n                    ),\n                    item[1]\n                  ),\n                  React.createElement(\'span\', { className: \'ysp-bottom-icon\', onClick: _this.upDown })\n                ),\n                React.createElement(\n                  \'div\',\n                  { style: { display: \'none\' } },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'label\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.twoPartTitle[2].title,\n                        \':\'\n                      ),\n                      item[2]\n                    )\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'label\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.twoPartTitle[4].title,\n                        \':\'\n                      ),\n                      item[4]\n                    )\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'label\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.twoPartTitle[5].title,\n                        \':\'\n                      ),\n                      item[5]\n                    )\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'label\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.twoPartTitle[6].title,\n                        \':\'\n                      ),\n                      item[6]\n                    )\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'label\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.twoPartTitle[7].title,\n                        \':\'\n                      ),\n                      item[7]\n                    )\n                  )\n                )\n              );\n            }) : React.createElement(\n              \'div\',\n              { style: { padding: \'10px\' } },\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E..\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(_yspCustomComponents.Page, { PassedCustomData: data, pagesClick: _this.pagesClick.bind(_this), inputChange: _this.inputChange.bind(_this), selectChange: _this.selectChange.bind(_this) })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control37_PsrEre: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var key = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_2');if (key && key.length > 0) data.push(key[0].textContent);return data;
      }
    },
    doAction_uiControl38_eOJBRR: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelector('.mini-tools-close');console.log(btn);if (d == '领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();
        } else {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        }
      } else if (data.eventType == 'back') {
        //待办里面#dataForm1里面的第一个input的class里没有mini-disabled
        //   var dataForm1 = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#dataform1');
        //   if (dataForm1) {
        //     var disable = dataForm1.querySelector("#uuid");
        //   } 
        //待办里面#form1里含有#status和#statusApprove
        //   var status = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#status');
        //   var approveStatus = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#approveStatus');
        //   if (disable && disable.className.indexOf("mini-disabled") == -1 || status || approveStatus) {
        //     console.log("aa");
        //     var json = {
        //       time: new Date().getTime()
        //     }; 
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        //     }
        //   } else {
        //     console.log("bbb");
        //     var json = {
        //       time: new Date().getTime()
        //     };
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
        //     }
        //   }
        var btns = elem.contentDocument.querySelector("#btn");if (btns && btns.style.display != "none") {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          }
        } else {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl38_eOJBRR: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={_this.onClick} className='ysp-Receive'>{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: _this.onClick, className: 'ysp-Receive' },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },

    getData_control43_7cv77t: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl42_hU6afa: function (data, elem) {},
    getTemplate_uiControl42_hU6afa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips">\n        {data==""? <div></div>:<div className="ysp_alert_words"><span>{data}</span></div>}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_alert_tips" },\n      data == "" ? React.createElement("div", null) : React.createElement(\n        "div",\n        { className: "ysp_alert_words" },\n        React.createElement(\n          "span",\n          null,\n          data\n        )\n      )\n    );\n  }\n});';
    },
    getData_control7_twMFdO: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var btnOne = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_0');var btnTwo = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_1');if (btnOne && btnOne.length > 0) {
          data.push(btnOne[0].textContent);
        }if (btnTwo && btnTwo.length > 0) {
          data.push(btnTwo[0].textContent);
        }return data;
      }
    },
    doAction_uiControl12_KI2hm3: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d == 'btn ysp-btn-one') {
          var btnTwo = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");btnTwo.click();
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.contentWindow.document.querySelector('#td_0_0').querySelector("a");btnTwo.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.replaceState(json, "", "http://192.168.0.189:8888/ptsoa/bps/wfclient/task/taskList.jsp?taskType=self"); //     setTimeout(function () {
          //       var json = {
          //         time: new Date().getTime()
          //       }; // @状态对象：记录历史记录点的额外对象，可以为空
          //       // @页面标题：目前所有浏览器都不支持
          //       // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
          //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
          // 		btn.click()
          //       ysp.appMain.getActiveWindow().history.replaceState(json, "", "http://192.168.0.189:8888/ptsoa/bps/wfclient/task/taskList.jsp?taskType=self");
          //     }, 500);
        }
      };
    },
    getTemplate_uiControl12_KI2hm3: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  click(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    if(\tdata\t&& data.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={data} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:\'none\'}}></div>)\n    } \n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n    value: function click(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: data, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);