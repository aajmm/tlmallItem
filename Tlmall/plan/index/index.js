(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control32_WMwJBg: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = { city: "", place: "", value: "",
        isShow: "", cities: [] };data.city = elem.querySelector("#selectedProvince").textContent;data.place = elem.querySelector("#defaultKeyword").textContent;data.isShow = elem.querySelector("#provinceList").style.display == "inline-block" ? "block" : "none";data.value = elem.querySelector("#searchBox").value;var lists = elem.querySelector("#provinceList").querySelectorAll("option");[].map.call(lists, function (d, i) {
        data.cities.push(d.textContent);
      });return data;
    },
    doAction_uiControl21_TJE6Sz: function (data, elem) {
      "use strict";

      var type = data.eventType;if (type == "addrListClick") {
        var d = data.dataCustom;
        elem.querySelector("#provinceList").querySelectorAll("option")[d].selected = true;
      } else if (type == "addressClick") {
        elem.querySelector("#changeProvince").click();
      } else if (type == "logoClick") {
        elem.querySelector(".logo").click();
      } else if (type == "iptChange") {
        var _d = data.dataCustom;elem.querySelector("#searchBox").value = _d;
      } else if (type == "searchClick") {
        elem.querySelector("#searchBtn").click();
      }
    },
    getTemplate_uiControl21_TJE6Sz: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      onOff:true,\n      open:\"none\"\n    }\n  }\n  logoClick = (e) => {\n   let handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"logoClick\"\n      })\n    }\n  }\n  searchClick = (e) => {\n   let handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"searchClick\"\n      })\n    }\n  }\n  iptChange = (e) => {\n   let handler=this.props.customHandler;\n    let target=e.target;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"iptChange\"\n      })\n    }\n  }\n  addrListClick = (e) => {\n   let handler=this.props.customHandler;\n   let target=e.target;\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    }));\n    if(handler){\n      handler({\n        data:target.selectedIndex,\n        eventType:\"addrListClick\"\n      })\n    }\n  }\n  addressClick = (e) => {\n   let handler=this.props.customHandler;\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    }));\n    if(handler){\n      handler({\n        eventType:\"addressClick\"\n      })\n    }\n  }\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n    \t<div className=\"ysp-index-top\">\n        <div className=\"logo-img\" onClick={me.logoClick.bind(me)}></div>\n        <div className=\"search-box\"><span className=\"search\" onClick={me.searchClick.bind(me)}></span><AInput placeholder={data.place} type=\"text\" value={data.value} onChange={me.iptChange.bind(me)}/></div>\n        <div className=\"address-box\" onClick={me.addressClick.bind(me)}><span className=\"address\"></span>{data.city}</div>\n        <div className=\"address-pop\" style={{display:me.state.open}}>\n          <div className=\"mask\"></div>\n          <div className=\"address-con\">\n            <p>\u8BF7\u60A8\u9009\u62E9\u5206\u516C\u53F8</p>\n            <ul>\n            \t{data.cities.map(function(d,i){\n                return(\n                \t<li data-index={i} onClick={me.addrListClick.bind(me)}>{d}</li>\n                )\n              })}\n            </ul>\n          </div>\n        </div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.logoClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"logoClick\"\n        });\n      }\n    };\n\n    _this.searchClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"searchClick\"\n        });\n      }\n    };\n\n    _this.iptChange = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"iptChange\"\n        });\n      }\n    };\n\n    _this.addrListClick = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n      if (handler) {\n        handler({\n          data: target.selectedIndex,\n          eventType: \"addrListClick\"\n        });\n      }\n    };\n\n    _this.addressClick = function (e) {\n      var handler = _this.props.customHandler;\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n      if (handler) {\n        handler({\n          eventType: \"addressClick\"\n        });\n      }\n    };\n\n    _this.state = {\n      onOff: true,\n      open: \"none\"\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-index-top\" },\n        React.createElement(\"div\", { className: \"logo-img\", onClick: me.logoClick.bind(me) }),\n        React.createElement(\n          \"div\",\n          { className: \"search-box\" },\n          React.createElement(\"span\", { className: \"search\", onClick: me.searchClick.bind(me) }),\n          React.createElement(AInput, { placeholder: data.place, type: \"text\", value: data.value, onChange: me.iptChange.bind(me) })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"address-box\", onClick: me.addressClick.bind(me) },\n          React.createElement(\"span\", { className: \"address\" }),\n          data.city\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"address-pop\", style: { display: me.state.open } },\n          React.createElement(\"div\", { className: \"mask\" }),\n          React.createElement(\n            \"div\",\n            { className: \"address-con\" },\n            React.createElement(\n              \"p\",\n              null,\n              \"\\u8BF7\\u60A8\\u9009\\u62E9\\u5206\\u516C\\u53F8\"\n            ),\n            React.createElement(\n              \"ul\",\n              null,\n              data.cities.map(function (d, i) {\n                return React.createElement(\n                  \"li\",\n                  { \"data-index\": i, onClick: me.addrListClick.bind(me) },\n                  d\n                );\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control35_ReksFv: function (elem) {
      "use strict";
      if (!elem) {
        return;
      }var data = { url: [], img: [] };var lists = elem.querySelector("#slideBanners").querySelectorAll("a");[].map.call(lists, function (d, i) {
        data.img.push(d.getAttribute("data"));data.url.push(d.getAttribute("href"));
      });return data;
    },
    doAction_uiControl24_tnes6R: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl24_tnes6R: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nimport '../lib/swiper.min.js'\nexport default class extends Component{\n\ncomponentDidMount () {\n\tvar mySwiper = new Swiper('.swiper-container', {\n      autoplay: true,\n      loop: true,\n      pagination : {\n          el: '.swiper-pagination',\n      }\n    });\n}\n\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n\n        <div className=\"ysp-swiper swiper-container\">\n        <div className=\"swiper-wrapper\">\n          {\n            data.img.map(function(d,i){\n              return(\n              <a className=\"swiper-slide\" style={{backgroundImage:data.img[i]}} href={data.url[i]}>slide {i}</a>\n              )\n            })\n          }\n        </div>\n        <div className='swiper-pagination'></div>\n</div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nrequire('../lib/swiper.min.js');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var mySwiper = new Swiper('.swiper-container', {\n        autoplay: true,\n        loop: true,\n        pagination: {\n          el: '.swiper-pagination'\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-swiper swiper-container' },\n        React.createElement(\n          'div',\n          { className: 'swiper-wrapper' },\n          data.img.map(function (d, i) {\n            return React.createElement(\n              'a',\n              { className: 'swiper-slide', style: { backgroundImage: data.img[i] }, href: data.url[i] },\n              'slide ',\n              i\n            );\n          })\n        ),\n        React.createElement('div', { className: 'swiper-pagination' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);