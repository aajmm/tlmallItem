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
      var selfTemplate = "import {Component,Fragment} from 'react'; \nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      onOff:true,\n      open:\"none\"\n    }\n  }\n  logoClick = (e) => {\n   let handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"logoClick\"\n      })\n    }\n  }\n  searchClick = (e) => {\n   let handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"searchClick\"\n      })\n    }\n  }\n  iptChange = (e) => {\n   let handler=this.props.customHandler;\n    let target=e.target;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:\"iptChange\"\n      })\n    }\n  }\n  addrListClick = (e) => {\n   let handler=this.props.customHandler;\n   let target=e.target;\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    }));\n    if(handler){\n      handler({\n        data:target.selectedIndex,\n        eventType:\"addrListClick\"\n      })\n    }\n  }\n  addressClick = (e) => {\n   let handler=this.props.customHandler;\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    }));\n    if(handler){\n      handler({\n        eventType:\"addressClick\"\n      })\n    }\n  }\n  maskClick = (e) =>{\n    this.setState(prevState => ({\n      onOff:!prevState.onOff,\n      open:prevState.onOff ? \"block\" : \"none\"\n    })); \n  }\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n    \t<div className=\"ysp-index-top\">\n        <div className=\"logo-img\" onClick={me.logoClick.bind(me)}></div>\n        <div className=\"search-box\"><span className=\"search\" onClick={me.searchClick.bind(me)}></span><AInput placeholder={data.place} type=\"text\" value={data.value} onChange={me.iptChange.bind(me)}/></div>\n        <div className=\"address-box\" onClick={me.addressClick.bind(me)}><span className=\"address\"></span>{data.city}</div>\n        <div className=\"address-pop\" style={{display:me.state.open}}>\n          <div className=\"mask\" onClick={me.maskClick.bind(me)}></div>\n          <div className=\"address-con\">\n            <p>\u8BF7\u60A8\u9009\u62E9\u5206\u516C\u53F8</p>\n            <ul>\n            \t{data.cities.map(function(d,i){\n                return(\n                \t<li data-index={i} onClick={me.addrListClick.bind(me)}>{d}</li>\n                )\n              })}\n            </ul>\n          </div>\n        </div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.logoClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"logoClick\"\n        });\n      }\n    };\n\n    _this.searchClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"searchClick\"\n        });\n      }\n    };\n\n    _this.iptChange = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"iptChange\"\n        });\n      }\n    };\n\n    _this.addrListClick = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n      if (handler) {\n        handler({\n          data: target.selectedIndex,\n          eventType: \"addrListClick\"\n        });\n      }\n    };\n\n    _this.addressClick = function (e) {\n      var handler = _this.props.customHandler;\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n      if (handler) {\n        handler({\n          eventType: \"addressClick\"\n        });\n      }\n    };\n\n    _this.maskClick = function (e) {\n      _this.setState(function (prevState) {\n        return {\n          onOff: !prevState.onOff,\n          open: prevState.onOff ? \"block\" : \"none\"\n        };\n      });\n    };\n\n    _this.state = {\n      onOff: true,\n      open: \"none\"\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-index-top\" },\n        React.createElement(\"div\", { className: \"logo-img\", onClick: me.logoClick.bind(me) }),\n        React.createElement(\n          \"div\",\n          { className: \"search-box\" },\n          React.createElement(\"span\", { className: \"search\", onClick: me.searchClick.bind(me) }),\n          React.createElement(AInput, { placeholder: data.place, type: \"text\", value: data.value, onChange: me.iptChange.bind(me) })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"address-box\", onClick: me.addressClick.bind(me) },\n          React.createElement(\"span\", { className: \"address\" }),\n          data.city\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"address-pop\", style: { display: me.state.open } },\n          React.createElement(\"div\", { className: \"mask\", onClick: me.maskClick.bind(me) }),\n          React.createElement(\n            \"div\",\n            { className: \"address-con\" },\n            React.createElement(\n              \"p\",\n              null,\n              \"\\u8BF7\\u60A8\\u9009\\u62E9\\u5206\\u516C\\u53F8\"\n            ),\n            React.createElement(\n              \"ul\",\n              null,\n              data.cities.map(function (d, i) {\n                return React.createElement(\n                  \"li\",\n                  { \"data-index\": i, onClick: me.addrListClick.bind(me) },\n                  d\n                );\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
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
      var selfTemplate = "import {Component,Fragment} from 'react'; \nimport '../lib/swiper.min.js';\nimport '../lib/swiper.min.css';\nexport default class extends Component{\ncomponentDidMount(){\n    let swiperElem=document.querySelector(\".ysp-swiper\");\n    swiperElem.style.height = swiperElem.offsetWidth * 0.413;\n}\ncomponentDidUpdate() {\n\tlet mySwiper = new Swiper('.swiper-container', {\n      speed:500,\n      loop:true,\n      autoplay: true,\n      pagination:{\n        el:'.swiper-pagination',\n        clickable:true\n      }\n    });\n}\n\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n        <div className=\"ysp-swiper swiper-container\">\n        <div className=\"swiper-wrapper\">\n          {\n            data.img.map(function(d,i){\n              return(\n              <div className=\"swiper-slide\"><a href={data.url[i]}><img src={data.img[i]} /></a></div>\n              )\n            })\n          }\n        </div>\n        <div className=\"swiper-pagination\"></div>\n</div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nrequire('../lib/swiper.min.js');\n\nrequire('../lib/swiper.min.css');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var swiperElem = document.querySelector(\".ysp-swiper\");\n      swiperElem.style.height = swiperElem.offsetWidth * 0.413;\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      var mySwiper = new Swiper('.swiper-container', {\n        speed: 500,\n        loop: true,\n        autoplay: true,\n        pagination: {\n          el: '.swiper-pagination',\n          clickable: true\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-swiper swiper-container' },\n        React.createElement(\n          'div',\n          { className: 'swiper-wrapper' },\n          data.img.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { className: 'swiper-slide' },\n              React.createElement(\n                'a',\n                { href: data.url[i] },\n                React.createElement('img', { src: data.img[i] })\n              )\n            );\n          })\n        ),\n        React.createElement('div', { className: 'swiper-pagination' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control36_1Ht6sa: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = { menus: [], names: [] };var menus = elem.querySelectorAll("li");[].map.call(menus, function (d, i) {
        if (i !== 0) {
          data.menus.push(d.textContent);data.names.push(d.id);
        }
      });return data;
    },
    doAction_uiControl25_TLlxuH: function (data, elem) {
      "use strict";

      if (data.eventType == "menuClick") {
        var d = parseInt(data.dataCustom) + 1;console.log(d);elem.querySelectorAll("li")[d].querySelector("a").click();
      }
    },
    getTemplate_uiControl25_TLlxuH: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nexport default class extends Component{\n  menuClick = (e) => {\n   let handler=this.props.customHandler;\n    let target=e.target;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"menuClick\"\n      })\n    }\n  }\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n    \t<ul className=\"ysp-menu\">\n      {data.menus.map(function(d,i){\n          return(\n            <li className={data.names[i]} data-index={i} onClick={me.menuClick.bind(me)}><span className=\"bar\">{d}</span></li>\n          )\n        })\n      }\n      </ul>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.menuClick = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"menuClick\"\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        \"ul\",\n        { className: \"ysp-menu\" },\n        data.menus.map(function (d, i) {\n          return React.createElement(\n            \"li\",\n            { className: data.names[i], \"data-index\": i, onClick: me.menuClick.bind(me) },\n            React.createElement(\n              \"span\",\n              { className: \"bar\" },\n              d\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control37_7w0gLr: function (elem) {
      "use strict";
      if (!elem) {
        return;
      }var data = [];var box1 = elem.querySelectorAll(".ad-box");[].map.call(box1, function (d, i) {
        var ads = { imgs: [], links: [] };var box2 = d.querySelectorAll("a");[].map.call(box2, function (m, n) {
          ads.imgs.push(m.querySelector("img").getAttribute("data"));ads.links.push(m.href);
        });data.push(ads);
      });return data;
    },
    doAction_uiControl26_cLezAI: function (data, elem) {
      "use strict";
      if (data.eventType == "imgClick") {
        var Num = data.dataCustom;var d = Num.indexOf("-");var Num1 = parseInt(Num.substr(0, d));var Num2 = parseInt(Num.substr(d + 1, Num.length));elem.querySelectorAll(".ad-box")[Num1].querySelectorAll("a")[Num2].click();
      }
    },
    getTemplate_uiControl26_cLezAI: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nexport default class extends Component{\n  imgClick = (e) => {\n   let handler=this.props.customHandler;\n    let target=e.target;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"imgClick\"\n      })\n    }\n  }\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n    \t<ul className=\"floor\">\n      {\n        data && data.map(function(d,i){\n          return(\n          <li className={\"ad\"+d.imgs.length}>\n          {\n          \td.imgs.map(function(m,n){\n              return(\n              <img src={m} data-index={i+\"-\"+n} onClick={me.imgClick.bind(me)}/>\n              )\n            })      \n          }\n          </li>\n          )\n        })  \n      }\n      </ul>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.imgClick = function (e) {\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"imgClick\"\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        \"ul\",\n        { className: \"floor\" },\n        data && data.map(function (d, i) {\n          return React.createElement(\n            \"li\",\n            { className: \"ad\" + d.imgs.length },\n            d.imgs.map(function (m, n) {\n              return React.createElement(\"img\", { src: m, \"data-index\": i + \"-\" + n, onClick: me.imgClick.bind(me) });\n            })\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control39_CVGfUQ: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];var ps = elem.querySelectorAll("p");[].map.call(ps, function (d, i) {
        data.push(d.textContent);
      });return data;
    },
    doAction_uiControl28_Byxrut: function (data, elem) {
      "use strict";

      if (data.eventType == "handlerClick") {
        elem.querySelector(".tl-footer-lists").querySelectorAll("dl")[5].querySelectorAll("dd")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl28_Byxrut: function () {
      var selfTemplate = "import {Component,Fragment} from 'react'; \nexport default class extends Component{\n  handlerClick = (e) => {\n   let handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"handlerClick\"\n      })\n    }\n  }\n  render(){\n    let data = this.props.customData;\n    let me=this;\n    return(\n    \t<div className=\"ysp-footer\">\n        <span className=\"shop-btn\" onClick={me.handlerClick.bind(me)}>\u8425\u4E1A\u6267\u7167</span>\n        <p>{data[2]}</p>\n        <p>{data[3]}</p>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.handlerClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"handlerClick\"\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var me = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-footer\" },\n        React.createElement(\n          \"span\",\n          { className: \"shop-btn\", onClick: me.handlerClick.bind(me) },\n          \"\\u8425\\u4E1A\\u6267\\u7167\"\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          data[2]\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          data[3]\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);