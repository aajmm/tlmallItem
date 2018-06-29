(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    CustomTitle: function () {
      var selfTemplate = "// CustomTitle customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\nimport {Component} from 'react';\nexport default class extends Component{\n   render(){\n       return(\n           <div>hello customTemplate</div>\n       );\n   }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CustomTitle customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\n\n\nvar _class = function (_Component) {\n    _inherits(_class, _Component);\n\n    function _class() {\n        _classCallCheck(this, _class);\n\n        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    _createClass(_class, [{\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                'hello customTemplate'\n            );\n        }\n    }]);\n\n    return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);