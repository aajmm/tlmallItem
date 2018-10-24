(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control240_JakRVA: function (elem) {},
    doAction_uiControl234_2Z7Wbl: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '门店详情';ysp.customHelper.AndroidBackModel = 'storeDetails';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "门店详情", "storeDetails");
      }
    },
    getTemplate_uiControl234_2Z7Wbl: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n \xA0 \xA0const {customHandler} = _this.props;\n    customHandler({\n      eventType:'AndroidBack'\n    })\n  }\n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u95E8\u5E97\u7167\u7247\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u95E8\u5E97\u7167\u7247\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({\n        eventType: 'AndroidBack'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control250_1T3aA1: function (elem) {
      if (!elem) {
        return [];
      }var data = []; //data.file = [];
      var boxs = elem.querySelector(".t-box");if (boxs) {
        var imgBoxs = boxs.querySelectorAll(".img-box");for (var i = 0; i < imgBoxs.length; i++) {
          var srcs = [];var titles = [];var content = [];var imgType = imgBoxs[i].querySelector(".img-tit").textContent;var lis = imgBoxs[i].querySelector(".img-ul").querySelectorAll("li");content.push(imgType);if (lis.length > 0) {
            for (var j = 0; j < lis.length; j++) {
              var title = [];var src = [];title.push(lis[j].querySelector("img").getAttribute("title"));titles.push(title); // if (window.reportSrc) {
              //   if (window.reportSrc.length > lis.length) {
              //     window.reportSrc.splice(0, window.reportSrc.length - lis.length);
              //   }
              // } else {
              //   window.reportSrc = [];
              // }
              // var imgCanvas = ysp.customHelper.convertImageToCanvas(lis[j].querySelector('img'));
              // var scrC = ysp.customHelper.convertCanvasToImage(imgCanvas);
              var scrTitle = lis[j].querySelector("img").getAttribute('src');var scrTitleSplit = scrTitle && scrTitle.split("upload-dir/")[1];var srcUrl = decodeURI(scrTitleSplit);var scrC = "https://vcrm-uat.pttl.com:8080/pttlCrm/" + srcUrl;src.push(scrC);srcs.push(src);var images = { titles: titles, srcs: srcs, content: content };
            }data.push(images);
          }
        } //   if (fileList.querySelectorAll(".file-item").length > 0) {
        //     var divs = elem.ownerDocument.querySelector('#fileList').querySelectorAll(".file-item");
        //     if (window.reportSrc) {
        //       if (window.reportSrc.length > divs.length) {
        //         window.reportSrc.splice(0, window.reportSrc.length - divs.length);
        //       }
        //     } else {
        //       window.reportSrc = [];
        //     }
        //     for (var i = 0; i < divs.length; i++) {
        //       var src = [],
        //           title = [],
        //           content = [];
        //       var imgCanvas = ysp.customHelper.convertImageToCanvas(divs[i].querySelector('img'));
        //       var scrC = ysp.customHelper.convertCanvasToImage(imgCanvas);
        //       src.push(scrC);
        //       var s;
        //       title.push(divs[i].querySelector('img').getAttribute('title') || divs[i].querySelector('.info').getAttribute('title'));
        //       content.push(divs[i].querySelector('.info').textContent);
        //       var images = {
        //         title: title,
        //         content: content,
        //         src: src
        //       };
        //       data.file.push(images);
        //     }
        //   }
      }return data;
    },
    doAction_uiControl244_HOLZeA: function (data, elem) {},
    getTemplate_uiControl244_HOLZeA: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    var viewer;\n  }\n  // componentDidUpdate(){\n  //   var _this = this;\n  //   this.viewer = new Viewer(_this.refs.Img);\n  // }\n  \n  componentDidMount(){\n    this.viewer = new Viewer(this.refs.Img);\n  }\n  componentDidMount(){\n    var _this = this;\n  }\n  \n  Dimg = (e) =>{\n    let _this = this;\n    _this.viewer = new Viewer(this.refs.Img);\n    _this.viewer.show();\n  }\n  \n  render = () => {\n    let  _this = this;\n    var data = this.props.customData || [];\n    if (data.length == 0) {\n      return (<div className="ysp-no-data">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u56FE\u7247~</div>  \n        \t\t\t</div>);\n    }\n    return (\n      <div className="ysp-store-img-list-wrapper">\n             {data.map((item,index)=>{\n                 return (\n                   <div className="ysp-store-img-list-content-wrapper" ref=\'Img\' onClick={_this.Dimg.bind(_this)} >\n                     <div className="ysp-store-img-list-title">{item.content}</div>\n                     {\n                       item.titles.map((ite,inde)=>{\n                         return (\n                         \t<div>\n                           <div>\n                             <img src = {item.srcs[inde]} ></img>\n                           </div>\n                           <div>\n                            {ite}\n                           </div>\n                       \n                     \t\t\t</div>\n                         );\n                       })\n                     }\n                     \n                   </div>\n                 );\n               }) \n             }\n             \n         </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.Dimg = function (e) {\n      var _this = _this2;\n      _this.viewer = new Viewer(_this2.refs.Img);\n      _this.viewer.show();\n    };\n\n    _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData || [];\n      if (data.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u56FE\\u7247~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-store-img-list-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-store-img-list-content-wrapper\', ref: \'Img\', onClick: _this.Dimg.bind(_this) },\n            React.createElement(\n              \'div\',\n              { className: \'ysp-store-img-list-title\' },\n              item.content\n            ),\n            item.titles.map(function (ite, inde) {\n              return React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\'img\', { src: item.srcs[inde] })\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  ite\n                )\n              );\n            })\n          );\n        })\n      );\n    };\n\n    var viewer;\n    return _this2;\n  }\n  // componentDidUpdate(){\n  //   var _this = this;\n  //   this.viewer = new Viewer(_this.refs.Img);\n  // }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      this.viewer = new Viewer(this.refs.Img);\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);