(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_0A99GA: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.content = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td'); //   for(var k=0;k<tds.length;k++){
        //   }
        data.content.push({ left: tds[0].textContent, right: tds[1].querySelector('span').querySelectorAll('input')[0].value, src: tds[1].querySelector('img') ? tds[1].querySelector("img").src : '' });
      }return data;
    },
    doAction_uiControl0_irZDSI: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'change') {
        elem.querySelectorAll('tr')[+data.index].querySelector('span').querySelector('input').value = data.value;elem.querySelectorAll('tr')[+data.index].querySelector('span').querySelector('input').blur();
      }if (type == 'click') {
        elem.querySelector("#randomNumber").click();
      }
    },
    getTemplate_uiControl0_irZDSI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onblur:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        value = target.value,\n        index = target.getAttribute(\'data-id\');\n    if(handler){\n      handler({\n        eventType:\'change\',\n        data:{\n          value:value,\n          index:index\n        }\n      })\n    }\n  },\n  onclick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div>\n        <div>\n          <div>\n        \t\t{data.content[0].left}  \t\n          </div>\n          <div><AInput onBlur={_this.onblur.bind(_this)} data-id=\'0\' type=\'text\' value={data.content[0].right} /></div>\n        </div>\n        <div>\n        \t<div>{data.content[1].left} </div>\n          <div><AInput onBlur={_this.onblur.bind(_this)} data-id=\'1\' type=\'password\' value={data.content[1].right} /></div>\n        </div>\n        <div>\n        \t<div>{data.content[2].left} </div>\n          <div><AInput onBlur={_this.onblur.bind(_this)} data-id=\'2\' type=\'text\' value={data.content[2].right} /><img onClick={_this.onclick.bind(_this)} id=\'randomNumber\' src={data.content[2].src}></img></div>\n        </div>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onblur: function onblur(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        value = target.value,\n        index = target.getAttribute('data-id');\n    if (handler) {\n      handler({\n        eventType: 'change',\n        data: {\n          value: value,\n          index: index\n        }\n      });\n    }\n  },\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          data.content[0].left\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(AInput, { onBlur: _this.onblur.bind(_this), 'data-id': '0', type: 'text', value: data.content[0].right })\n        )\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          data.content[1].left,\n          ' '\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(AInput, { onBlur: _this.onblur.bind(_this), 'data-id': '1', type: 'password', value: data.content[1].right })\n        )\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          data.content[2].left,\n          ' '\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(AInput, { onBlur: _this.onblur.bind(_this), 'data-id': '2', type: 'text', value: data.content[2].right }),\n          React.createElement('img', { onClick: _this.onclick.bind(_this), id: 'randomNumber', src: data.content[2].src })\n        )\n      )\n    );\n  }\n});";
    }
  }, "login");
})(window, ysp);