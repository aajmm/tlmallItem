(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control181_fLkbwL: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl181_22VEEw: function (data, elem) {},
    getTemplate_uiControl181_22VEEw: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control182_WwpTDz: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl182_a6eLd0: function (data, elem) {},
    getTemplate_uiControl182_a6eLd0: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == 'content disnone'){\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    }else{\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='contenttit'>\n        \t<div className='contentitem'>{ele.leftval}</div>\n          <div className='contentitem'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className='initiator'>\n        <div className='contenttitle'><span></span><p>{data.title}<i className='shouqi' onClick={_this.click}></i></p></div>\n        <div className='content disnone'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == 'content disnone') {\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    } else {\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'contenttit' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.leftval\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'initiator' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement('i', { className: 'shouqi', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control183_JBlHLP: function (elem) {
      if (!elem) {
        return;
      }var data = {};var table = elem.querySelectorAll('table')[0];var trs = table.querySelectorAll('tr');data.title = '申请人信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            if (tds[k].querySelector('input').type == 'radio') {
              arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').checked ? tds[k].querySelector('input').parentElement.nextSibling.textContent.trim() : tds[k].querySelector('input').parentElement.nextSibling.textContent.trim() });
            } else {
              arr.push({ left: tds[k].querySelector('label').textContent.trim().split('*')[0], right: tds[k].querySelector('input').value });
            }
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl183_ARCCd7: function (data, elem) {},
    getTemplate_uiControl183_ARCCd7: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    // debugger;\n    if(target.tagName.toLowerCase() == 'i'){\n      target = target.parentElement.parentElement;\n    }\n    if(target.tagName.toLowerCase() == 'a'){\n      target = target.parentElement;\n    }\n    if(target.previousSibling.className == 'content disnone'){\n      target.previousSibling.className = 'content';\n      // target.innerText = '\u6536\u8D77\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'xia';\n    }else{\n      target.previousSibling.className = 'content disnone';\n      // target.innerText = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'shang';\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index<2){\n        var lisele = ele.map(function(d,i){\n          return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    var list = data.content.map(function(ele,index){\n      if(index>1){\n        var lisele = ele.map(function(d,i){\n          if(!d.type){\n            return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n          }else{\n            if(d.type == 'textarea'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem'><textarea value={d.right}></textarea></div>\n                </div>\n              )\n            }\n          }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    return (\n      <div className='information'>\n       \t<div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n          {lis}</div>\n        <div className='content disnone'>\n          {list}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    // debugger;\n    if (target.tagName.toLowerCase() == 'i') {\n      target = target.parentElement.parentElement;\n    }\n    if (target.tagName.toLowerCase() == 'a') {\n      target = target.parentElement;\n    }\n    if (target.previousSibling.className == 'content disnone') {\n      target.previousSibling.className = 'content';\n      // target.innerText = '\u6536\u8D77\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'xia';\n    } else {\n      target.previousSibling.className = 'content disnone';\n      // target.innerText = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'shang';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index < 2) {\n        var lisele = ele.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'contenttit' },\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.left\n            ),\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.right\n            )\n          );\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    var list = data.content.map(function (ele, index) {\n      if (index > 1) {\n        var lisele = ele.map(function (d, i) {\n          if (!d.type) {\n            return React.createElement(\n              'div',\n              { className: 'contenttit' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.left\n              ),\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.right\n              )\n            );\n          } else {\n            if (d.type == 'textarea') {\n              return React.createElement(\n                'div',\n                { className: 'contenttit' },\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  d.left\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  React.createElement('textarea', { value: d.right })\n                )\n              );\n            }\n          }\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        list\n      )\n    );\n  }\n});";
    },

    getData_control186_rbQDvb: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTabledata(elem, ['文件名', '上传人', '上传时间', '版本', '操作']);data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl186_TMTRbg: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'commit') {
        // debugger;
        elem.ownerDocument.querySelector("#" + data).click();setTimeout(function () {
          elem.ownerDocument.defaultView.InitAttachmentList();
        }, 1000); // setTimeout(function () {
        //   var url = ysp.appMain.getActiveUrl();
        //   ysp.appMain.reloadPage(url);
        // }, 2000);
      }if (type == 'add') {
        elem.ownerDocument.querySelector("#" + data).previousElementSibling.querySelector('input').click();
      }if (type == 'updel') {
        var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[data.i].click();
      }
    },
    getTemplate_uiControl186_TMTRbg: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if(target.tagName.toLowerCase() == 'button'){\n      console.log(target.id);\n      if(target.id == 'uploadDiv' ){\n        type = 'commit';\n        data = 'btnFileUpload';\n      }else{\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      type = 'updel';\n      data = {\n        index:target.getAttribute('data-index'),\n        i:target.className=='xiazai'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == 'shang'){\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displblock';\n      }\n    }else{\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(index+1)}</div>\n              <div>{d}</div>\n              <div onClick={_this.click} className='shang'></div>\n            </div>\n          )\n        }\n        if(i == ele.length-1){\n          if(d.length>2){\n              return(\n              <div className='displnone'>\n                <div className='contentitem contentspan' style={{'width':'100%','text-align-last':'auto','text-align':'center'}}><p className='shanchu' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className='xiazai' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:''}</p></div>\n              </div>\n            )\n          }else{\n             return(\n              <div className='displnone'>\n                <div className='contentitem'><p className='xiazai' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n              </div>\n            )\n          }\n        }\n        return(\n        \t<div className='displnone'>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    \n    return (\n      <div className='Enclosure'>\n        <div className='contenttitle'>\n          <span className='xia'></span>\n          <p>{data.title}\n            <div>\n              <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n              <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n            </div>\n          </p>\n        </div>\n        <div className='content'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if (target.tagName.toLowerCase() == 'button') {\n      console.log(target.id);\n      if (target.id == 'uploadDiv') {\n        type = 'commit';\n        data = 'btnFileUpload';\n      } else {\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      type = 'updel';\n      data = {\n        index: target.getAttribute('data-index'),\n        i: target.className == 'xiazai' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == 'shang') {\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displblock';\n      }\n    } else {\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (index + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            ),\n            React.createElement('div', { onClick: _this.click, className: 'shang' })\n          );\n        }\n        if (i == ele.length - 1) {\n          if (d.length > 2) {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem contentspan', style: { 'width': '100%', 'text-align-last': 'auto', 'text-align': 'center' } },\n                React.createElement(\n                  'p',\n                  { className: 'shanchu', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[2] + d[3]\n                ),\n                React.createElement(\n                  'p',\n                  { 'data-index': index, className: 'xiazai', onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d.length > 2 ? d[0] + d[1] : ''\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                React.createElement(\n                  'p',\n                  { className: 'xiazai', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[0] + d[1]\n                )\n              )\n            );\n          }\n        }\n        return React.createElement(\n          'div',\n          { className: 'displnone' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'Enclosure' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', { className: 'xia' }),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'button',\n              { onClick: _this.onClick.bind(_this) },\n              '\\u9009\\u62E9\\u6587\\u4EF6'\n            ),\n            React.createElement(\n              'button',\n              { id: data.id, onClick: _this.onClick.bind(_this) },\n              '\\u4E0A\\u4F20\\u6587\\u4EF6'\n            )\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control187_sJc6mS: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl187_npoDTL: function (data, elem) {},
    getTemplate_uiControl187_npoDTL: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control188_VHqL8D: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '审批操作';data.content = [];var trs = elem.querySelectorAll('tr');var obj = {};obj.left = '当前环节';obj.right = trs[0].querySelectorAll('td')[1].textContent.trim();data.content.push(obj);var obj = {};obj.left = '意见';obj.right = trs[1].querySelectorAll('td')[1].querySelector('textarea').value;data.content.push(obj);data.content.push({ left: trs[1].querySelectorAll('td')[1].textContent.trim() });return data;
    },
    doAction_uiControl188_DHCU2k: function (data, elem) {
      if (data.eventType == 'change') {
        elem.querySelector('textarea').value = data;
      }
    },
    getTemplate_uiControl188_DHCU2k: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onChange:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    return (\n      <div className='approval'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n          \t<div className='contentitem'>{data.content[0].left}</div>\n          \t<div className='contentitem'>{data.content[0].right}</div>\n          </div>\n          <div className='content'>\n          \t<div className='contentitem'>{data.content[1].left}</div>\n            <textarea value={data.content[1].right} onChange={_this.onChange}></textarea>\n        \t</div>\n        <div className='tishi'>{data.content[2].left}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'change',\n        data: target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    return React.createElement(\n      'div',\n      { className: 'approval' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[0].left\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[0].right\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[1].left\n        ),\n        React.createElement('textarea', { value: data.content[1].right, onChange: _this.onChange })\n      ),\n      React.createElement(\n        'div',\n        { className: 'tishi' },\n        data.content[2].left\n      )\n    );\n  }\n});";
    },
    getData_control189_xolACC: function (elem) {
      if (!elem) {
        return;
      }var data = [];var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        data.push(lis[i].textContent.trim());
      }return data;
    },
    doAction_uiControl189_l9RtWp: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'click') {
        elem.querySelectorAll('li')[data].querySelector('a').click();
      }
    },
    getTemplate_uiControl189_l9RtWp: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data;\n    if(target.tagName.toLowerCase() == 'div'){\n      target.parentElement.nextElementSibling.style.display = 'block';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector('.dianbl').querySelectorAll('li');\n      for(var i=0;i<lis.length;i++){\n        lis[i].style.bottom = i*50 +'px';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      target.parentElement.parentElement.parentElement.style.display = 'none';\n    }\n    if(target.tagName.toLowerCase() == 'button'){\n      type = 'click';\n      data = target.getAttribute('data-id');\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n  \tvar lis = data.map(function(d,i){\n      if(i<2){\n        return(\n        \t<button data-id={i} onClick={_this.onClick}>{d}</button>\n        )\n      }\n    })\n    var list = data.map(function(d,i){\n      if(i>1){\n        return(\n        \t<li><button data-id={i} onClick={_this.onClick}>{d}</button></li>\n        )\n      }\n    })\n    return (\n      <div className='submit'>\n        <div className='subtrue'><div>{lis}</div><div onClick={_this.onClick.bind(_this)}></div></div>\n        <div className='dianbl'><ul><li><p onClick={_this.onClick}>\u53D6\u6D88</p></li>{list}</ul></div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data;\n    if (target.tagName.toLowerCase() == 'div') {\n      target.parentElement.nextElementSibling.style.display = 'block';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector('.dianbl').querySelectorAll('li');\n      for (var i = 0; i < lis.length; i++) {\n        lis[i].style.bottom = i * 50 + 'px';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      target.parentElement.parentElement.parentElement.style.display = 'none';\n    }\n    if (target.tagName.toLowerCase() == 'button') {\n      type = 'click';\n      data = target.getAttribute('data-id');\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var lis = data.map(function (d, i) {\n      if (i < 2) {\n        return React.createElement(\n          'button',\n          { 'data-id': i, onClick: _this.onClick },\n          d\n        );\n      }\n    });\n    var list = data.map(function (d, i) {\n      if (i > 1) {\n        return React.createElement(\n          'li',\n          null,\n          React.createElement(\n            'button',\n            { 'data-id': i, onClick: _this.onClick },\n            d\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'submit' },\n      React.createElement(\n        'div',\n        { className: 'subtrue' },\n        React.createElement(\n          'div',\n          null,\n          lis\n        ),\n        React.createElement('div', { onClick: _this.onClick.bind(_this) })\n      ),\n      React.createElement(\n        'div',\n        { className: 'dianbl' },\n        React.createElement(\n          'ul',\n          null,\n          React.createElement(\n            'li',\n            null,\n            React.createElement(\n              'p',\n              { onClick: _this.onClick },\n              '\\u53D6\\u6D88'\n            )\n          ),\n          list\n        )\n      )\n    );\n  }\n});";
    },

    getData_control191_h4UDoH: function (elem) {
      if (!elem) {
        return;
      }var data = {};var trs = elem.querySelectorAll('tr');data.title = '知会信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl191_AhgC1s: function (data, elem) {},
    getTemplate_uiControl191_AhgC1s: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        return(\n        \t<div>\n          \t<div className='contentitem'>{d.left}</div>\n            <div className='contentitem'>{d.right}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    return (\n      <div className='understanding'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n    \t\t\t{lis}    \t\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d.left\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d.right\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'understanding' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control192_vKFdIB: function (elem) {
      if (!elem) {
        return;
      }var titles = elem.querySelectorAll('.title');var data = {};data.id = elem.id;data.titles = []; //当id为这个的时候为上级填写栏
      if (data.id == 'ctl00_contentForm_UCSFInfo3_P1') {
        data.titles[0] = '填写指引';for (var i = 0; i < titles.length; i++) {
          data.titles.push(titles[i].textContent.trim());
        } // debugger;
        var wrapper = elem.querySelectorAll('.form-wrapper');data.content = [];for (var j = 0; j < wrapper.length; j++) {
          var arr = []; //填写指引
          if (j == 0) {
            arr.push(wrapper[j].textContent.trim().split('填写指引：')[1]);
          } //个人优劣势综述
          if (j == 1) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');var obj = {};var str = [];obj.titleleft = [];obj.content = [];for (var k = 0; k < trs.length; k++) {
              str.push(trs[k].querySelectorAll('td')[0].textContent.trim());if (k == 0) {
                var tds = trs[k].querySelectorAll('td');for (var o = 1; o < tds.length; o++) {
                  //保存第一个tr里面的内容作为title
                  obj.titleleft.push(tds[o].textContent.trim().split('*')[0]);
                }
              } else {
                var tds = trs[k].querySelectorAll('td');var contentarr = []; //保存每一个td里面textarea的value
                for (var o = 1; o < tds.length; o++) {
                  contentarr.push({ text: tds[o].querySelector('textarea').value, id: tds[o].querySelector('textarea').id });
                }obj.content.push(contentarr);
              }
            }obj.title = str;arr.push(obj);
          } //继任计划
          if (j == 2) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var tds = trs[k].querySelectorAll('td');for (var u = 0; u < tds.length; u++) {
                var obj = {};if (k == 0 || k == 1) {
                  if (u == 0) {
                    obj.left = tds[u].textContent.trim().split('*')[0];obj.right = { selecteds: [], options: [], id: tds[1].querySelector('select').id };var opts = tds[1].querySelector('select').querySelectorAll("option");for (var p = 0; p < opts.length; p++) {
                      obj.right.selecteds.push(opts[p].selected);obj.right.options.push(opts[p].value);
                    }arr.push(obj);
                  }if (u == 2) {
                    obj.left = tds[u].textContent.trim().split('*')[0];obj.right = { selecteds: [], options: [], id: tds[3].querySelector('select').id };var opts = tds[3].querySelector('select').querySelectorAll("option");for (var p = 0; p < opts.length; p++) {
                      obj.right.selecteds.push(opts[p].selected);obj.right.options.push(opts[p].value);
                    }arr.push(obj);
                  }
                }if (k == 2) {
                  if (u == 0) {
                    obj = {};obj.left = tds[u].textContent.trim().split('*')[0];obj.right = tds[1].querySelector('textarea').value;obj.id = tds[1].querySelector('textarea').id;arr.push(obj);
                  }
                }
              }
            }var trs = wrapper[j].querySelectorAll('table')[1].querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var tds = trs[k].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
                var obj = {};if (k == 0) {
                  if (j == 0) {
                    obj.left = tds[j].textContent.trim().split('*')[0];obj.type = 'radio';obj.right = { checked: [tds[1].querySelectorAll('input')[0].checked, tds[1].querySelectorAll('input')[1].checked], id: [tds[1].querySelectorAll('input')[0].id, tds[1].querySelectorAll('input')[1].id], text: ['是', '否'] };arr.push(obj);
                  }if (j == 2) {
                    obj.left = '继任人选';obj.type = 'seleion';obj.right = { id: tds[j].querySelector('a').id, disabled: tds[j].querySelector('input').disabled, text: tds[j].querySelector('input').value };arr.push(obj);
                  }if (j == 3) {
                    obj.left = tds[j].textContent.trim().split('*')[0];obj.right = { selecteds: [], options: [], id: tds[4].querySelector('select').id, disabled: tds[4].querySelector('select').disabled };var opts = tds[4].querySelector('select').querySelectorAll('option');for (var l = 0; l < opts.length; l++) {
                      obj.right.selecteds.push(opts[l].selected);obj.right.options.push(opts[l].value);
                    }arr.push(obj);
                  }
                }if (k == 1) {
                  if (j == 0) {
                    obj.left = '继任人选';obj.type = 'seleion';obj.right = { id: tds[j].querySelector('a').id, disabled: tds[j].querySelector('input').disabled, text: tds[j].querySelector('input').value };arr.push(obj);
                  }if (j == 1) {
                    obj.left = tds[j].textContent.trim().split('*')[0];obj.right = { selecteds: [], options: [], id: tds[2].querySelector('select').id, disabled: tds[2].querySelector('select').disabled };var opts = tds[2].querySelector('select').querySelectorAll('option');for (var l = 0; l < opts.length; l++) {
                      obj.right.selecteds.push(opts[l].selected);obj.right.options.push(opts[l].value);
                    }arr.push(obj);
                  }
                }
              }
            }
          } //异地意愿
          if (j == 3) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var obj = {};var tds = trs[k].querySelectorAll('td');if (k == 0) {
                obj.left = tds[0].textContent.trim().split('*')[0];obj.right = { text: [tds[1].querySelectorAll('input')[0].parentElement.nextSibling.textContent.trim(), tds[1].querySelectorAll('input')[1].parentElement.nextSibling.textContent.trim()], checked: [tds[1].querySelectorAll('input')[0].checked, tds[1].querySelectorAll('input')[1].checked] };arr.push(obj);obj = {};obj.left = tds[2].textContent.trim().split('*')[0];obj.right = tds[3].querySelector('textarea').value;arr.push(obj);
              }if (k == 1) {
                obj.left = tds[0].textContent.trim().split('*')[0];obj.right = [];obj.right.push(trs[1].querySelectorAll('td')[1].textContent.trim() + '   ' + trs[1].querySelectorAll('td')[2].querySelector('input').value);obj.right.push(trs[trs.length - 2].querySelectorAll('td')[0].textContent.trim() + '   ' + trs[trs.length - 2].querySelectorAll('td')[1].querySelector('input').value);obj.right.push(trs[trs.length - 1].querySelectorAll('td')[0].textContent.trim() + '   ' + trs[trs.length - 1].querySelectorAll('td')[1].querySelector('input').value);arr.push(obj);obj = {};obj.left = tds[3].textContent.trim().split('*')[0];obj.right = {};obj.right.text = [];obj.right.checked = [];var ipts = tds[4].querySelector('table').querySelectorAll('input');for (var o = 0; o < ipts.length; o++) {
                  obj.right.text.push(ipts[o].parentElement.querySelector('label').textContent.trim());obj.right.checked.push(ipts[o].checked);
                }arr.push(obj);
              }
            }
          } //岗位调动安排
          if (j == 4) {
            var obj = {};var trs = wrapper[j].querySelector('table').querySelectorAll('tr');obj.left = trs[0].querySelectorAll('td')[0].textContent.trim().split('*')[0];obj.right = { text: [trs[0].querySelectorAll('td')[1].querySelectorAll('input')[0].nextSibling.textContent.trim(), trs[0].querySelectorAll('td')[1].querySelectorAll('input')[1].nextSibling.textContent.trim()], checked: [trs[0].querySelectorAll('td')[1].querySelectorAll('input')[0].checked, trs[0].querySelectorAll('td')[1].querySelectorAll('input')[1].checked] };arr.push(obj);var obj = {};obj.left = trs[0].querySelectorAll('td')[2].textContent.trim().split('*')[0];obj.right = { selected: [], options: [], disabled: trs[0].querySelectorAll('td')[3].querySelector('select').disabled, id: trs[0].querySelectorAll('td')[3].querySelector('select').id };var opts = trs[0].querySelectorAll('td')[3].querySelector('select').querySelectorAll('option');for (var k = 0; k < opts.length; k++) {
              obj.right.selected.push(opts[k].selected);obj.right.options.push(opts[k].textContent.trim());
            }arr.push(obj);obj = {};obj.left = trs[1].querySelectorAll('td')[0].textContent.trim().split('*')[0];obj.right = trs[1].querySelectorAll('td')[1].querySelector('textarea').value;arr.push(obj);
          } //职业发展建议
          if (j == 5) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');var obj = {};var str = [];obj.titleleft = [];obj.content = [];for (var k = 0; k < trs.length; k++) {
              str.push(trs[k].querySelectorAll('td')[0].textContent.trim());if (k == 0) {
                var tds = trs[k].querySelectorAll('td');for (var o = 1; o < tds.length; o++) {
                  //保存第一个tr里面的内容作为title
                  obj.titleleft.push(tds[o].textContent.trim().split('*')[0]);
                }
              } else {
                var contentarr = [];var tds = trs[k].querySelectorAll('td');for (var u = 1; u < tds.length; u++) {
                  var contentobj = {};if (u == 1) {
                    contentobj.checked = [];contentobj.checked.push(tds[1].querySelectorAll('input')[0].checked);contentobj.checked.push(tds[1].querySelectorAll('input')[1].checked);contentobj.text = tds[1].querySelectorAll('input')[2].value;contentobj.disabled = tds[1].querySelectorAll('input')[2].disabled;
                  } else {
                    contentobj.text = tds[2].querySelector('textarea').value;
                  }contentarr.push(contentobj);
                }obj.content.push(contentarr);
              }
            }obj.title = str;arr.push(obj);
          } //提升方向
          if (j == 6) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var obj = {};obj.left = trs[k].querySelectorAll('td')[0].textContent.trim().split('*')[0];obj.right = trs[k].querySelector('textarea').value;arr.push(obj);
            }
          } //备注
          if (j == 7) {
            arr.push({ left: '备注', right: wrapper[j].querySelector('table').querySelector('textarea').value });
          }data.content.push(arr);
        }
      } else {
        for (var i = 0; i < titles.length; i++) {
          data.titles.push(titles[i].textContent.trim());
        } // debugger;
        var wrapper = elem.querySelectorAll('.form-wrapper');data.content = [];for (var j = 0; j < wrapper.length; j++) {
          var arr = [];if (j == 0) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');var obj = {};var str = [];obj.titleleft = [];obj.content = [];for (var k = 0; k < trs.length; k++) {
              str.push(trs[k].querySelectorAll('td')[0].textContent.trim());if (k == 0) {
                var tds = trs[k].querySelectorAll('td');for (var o = 1; o < tds.length; o++) {
                  //保存第一个tr里面的内容作为title
                  obj.titleleft.push(tds[o].textContent.trim().split('*')[0]);
                }
              } else {
                var tds = trs[k].querySelectorAll('td');var contentarr = []; //保存每一个td里面textarea的value
                for (var o = 1; o < tds.length; o++) {
                  contentarr.push(tds[o].querySelector('textarea').value);
                }obj.content.push(contentarr);
              }
            }obj.title = str;arr.push(obj);
          }if (j == 1) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var tds = trs[k].querySelectorAll('td');for (var u = 0; u < tds.length; u++) {
                var obj = {};if (k == 0) {
                  if (u == 0) {
                    obj.left = tds[0].textContent.trim().split('*')[0];obj.right = { checked: [tds[1].querySelectorAll('input')[0].checked, tds[1].querySelectorAll('input')[1].checked], text: ['是', '否'] };arr.push(obj);
                  }if (u == 2) {
                    obj.left = '继任人选';obj.right = tds[2].querySelector("input").value;arr.push(obj);
                  }if (u == 4) {
                    obj.left = tds[3].textContent.trim().split('*')[0];obj.right = tds[4].querySelector("input").value;arr.push(obj);
                  }
                }if (k == 1) {
                  if (u == 0) {
                    obj.left = '继任人选';obj.right = tds[2].querySelector("input").value;arr.push(obj);
                  }if (u == 2) {
                    obj.left = tds[1].textContent.trim().split('*')[0];obj.right = tds[2].querySelector("input").value;arr.push(obj);
                  }
                }
              }
            }
          } //异地意愿
          if (j == 2) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var obj = {};var tds = trs[k].querySelectorAll('td');if (k == 0) {
                obj.left = tds[0].textContent.trim().split('*')[0];obj.right = { text: [tds[1].querySelectorAll('input')[0].parentElement.nextSibling.textContent.trim(), tds[1].querySelectorAll('input')[1].parentElement.nextSibling.textContent.trim()], checked: [tds[1].querySelectorAll('input')[0].checked, tds[1].querySelectorAll('input')[1].checked] };arr.push(obj);obj = {};obj.left = tds[2].textContent.trim().split('*')[0];obj.right = tds[3].querySelector('textarea').value;arr.push(obj);
              }if (k == 1) {
                obj.left = tds[0].textContent.trim().split('*')[0];obj.right = [];obj.right.push(trs[1].querySelectorAll('td')[1].textContent.trim() + '   ' + trs[1].querySelectorAll('td')[2].querySelector('input').value);obj.right.push(trs[trs.length - 2].querySelectorAll('td')[0].textContent.trim() + '   ' + trs[trs.length - 2].querySelectorAll('td')[1].querySelector('input').value);obj.right.push(trs[trs.length - 1].querySelectorAll('td')[0].textContent.trim() + '   ' + trs[trs.length - 1].querySelectorAll('td')[1].querySelector('input').value);arr.push(obj);obj = {};obj.left = tds[3].textContent.trim().split('*')[0];obj.right = {};obj.right.text = [];obj.right.checked = [];var ipts = tds[4].querySelector('table').querySelectorAll('input');for (var o = 0; o < ipts.length; o++) {
                  obj.right.text.push(ipts[o].parentElement.querySelector('label').textContent.trim());obj.right.checked.push(ipts[o].checked);
                }arr.push(obj);
              }
            }
          } //职业发展方向建议
          if (j == 3) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');var obj = {};var str = [];obj.titleleft = [];obj.content = [];for (var k = 0; k < trs.length; k++) {
              str.push(trs[k].querySelectorAll('td')[0].textContent.trim());if (k == 0) {
                var tds = trs[k].querySelectorAll('td');for (var o = 1; o < tds.length; o++) {
                  //保存第一个tr里面的内容作为title
                  obj.titleleft.push(tds[o].textContent.trim().split('*')[0]);
                }
              } else {
                var contentarr = [];var tds = trs[k].querySelectorAll('td');for (var u = 1; u < tds.length; u++) {
                  var contentobj = {};contentobj.text = tds[u].querySelector('textarea').value;contentarr.push(contentobj);
                }obj.content.push(contentarr);
              }
            }obj.title = str;arr.push(obj);
          } //提升方向
          if (j == 4) {
            var trs = wrapper[j].querySelector('table').querySelectorAll('tr');for (var k = 0; k < trs.length; k++) {
              var obj = {};obj.left = trs[k].querySelectorAll('td')[0].textContent.trim().split('*')[0];obj.right = trs[k].querySelector('textarea').value;arr.push(obj);
            }
          } //备注
          if (j == 5) {
            arr.push({ left: '备注', right: wrapper[j].querySelector('table').querySelector('textarea').value });
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl192_08z6aK: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'change') {
        var ipts = elem.querySelectorAll('.form-wrapper')[data.dataid].querySelectorAll('textarea');for (var i = 0; i < ipts.length; i++) {
          if (ipts[i].id == data.id) {
            ipts[i].value = data.value;
          }
        }
      }if (type == 'btnclick') {
        elem.querySelectorAll('.form-wrapper')[data.dataid].querySelector("#" + data.id).click();
      }if (type == 'aclick') {
        elem.querySelector("#" + data).click();
      }
    },
    getTemplate_uiControl192_08z6aK: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target=  e.target,\n        type,data;\n    if(target.tagName.toLowerCase() == 'button'){\n      type = 'btnclick';\n      data = {\n        dataid:target.getAttribute('data-id'),\n        id:target.id\n      }\n    }\n    if(target.tagName.toLowerCase() == 'a'){\n      debugger;\n      if(target.previousElementSibling.disabled){\n        type = 'aclick';\n        data = target.id;\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  onChange:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          dataid:target.getAttribute('data-id'),\n          id:target.id,\n          value:target.value\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(data.id == 'ctl00_contentForm_UCSFInfo3_P1'){\n      var titles = data.titles.map(function(ele,index){\n      var lis = data.content.map(function(d,i){\n       \tif(index == i){\n          if(i==0){\n              return(\n                <div className='superior_yspone'>\n                  <div>{d}</div>\n                </div>\n            \t)\n          }\n          if(i==1){\n            var list = d[0].content.map(function(dd,ii){\n              var liindex = d[0].titleleft.map(function(elem,ind){\n                return(\n                \t<div className='ysp-two-content'>\n                  \t<div>{elem}</div>\n                    <input data-id={i} id={dd[ind].id} onChange={_this.onChange} value={dd[ind].text} />\n                  </div>\n                )\n              })\n              return(\n              \t<div className='superior_ysp_two'>\n                  <div className='titleone'><p>0{ii+1}</p><p>{d[0].title[ii+1]}</p></div>\n                \t{liindex}\n                </div>\n              )\n            })\n            return(\n            \t<div>\n              \t{list}\n              </div>\n            )\n          }\n          if(i==2){\n            var list = d.map(function(elem,ii){\n              if(ii<=3){\n                var opts = elem.right.options.map(function(dd,ind){\n                  return(\n                  \t<option selected={elem.right.selecteds[ind]}>{dd}</option>\n                  )\n                })\n                return(\n                \t<div className='ysp-itemopts'>\n                  \t<div>{elem.left}</div>\n                    <select id={elem.id}>{opts}</select>\n                  </div>\n                )\n              }\n              if(ii==4){\n                return(\n                \t<div className='ysp-textarea'>\n                  \t<div>{elem.left}</div>\n                    <input onChange={_this.onChange} data-id={i} id={elem.id} value={elem.right}></input>\n                  </div>\n                )\n              }\n              if(ii==5){\n                return(\n                \t<div className='ysp-item-btn'>\n                  \t<div>{elem.left}</div>\n                    <div><button data-id={i} id={elem.right.id[0]} onClick={_this.onClick} className={elem.right.checked[0]?'onbtn':''}>\u662F</button><button data-id={i} id={elem.right.id[1]} onClick={_this.onClick} className={elem.right.checked[1]?'onbtn':''}>\u5426</button></div>\n                  </div>\n                )\n              }\n              if(ii==6|| ii ==8){\n                var opts = d[ii+1].right.options.map(function(del,inde){\n                  return(\n                  \t<option selected={d[ii+1].right.selecteds[inde]}>{del}</option>\n                  )\n                })\n                  return(\n                  \t<div className='infilename'>\n                    \t<div>\n                        <div>{elem.left}</div>\n                          <div><input disabled={elem.disabled} value={elem.right.text}/><a onClick={_this.onClick} href=\"javascript:;\" id={elem.right.id} ></a></div>\n                      </div>\n                      <div>\n                      \t<div>{d[ii+1].left}</div>\n                        <div>\n                          <select id={d[ii+1].right.id} disabled={d[ii+1].right.disabled}>\n                          \t{opts}\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                  )\n                \n              }\n            })\n            return(\n            \t<div className='superior_ysp-three'>{list}</div>\n            )\n          }\n        }\n      })\n      return (\n      \t<div className='content'>\n        \t<div className='contenttitle'><span></span><p>{ele}</p></div>\n          <div>{lis}</div>\n        </div>\n      )\n    })\n    }else{\n      var titles = '';\n    }\n    return (\n      <div>\n        {titles}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data;\n    if (target.tagName.toLowerCase() == 'button') {\n      type = 'btnclick';\n      data = {\n        dataid: target.getAttribute('data-id'),\n        id: target.id\n      };\n    }\n    if (target.tagName.toLowerCase() == 'a') {\n      debugger;\n      if (target.previousElementSibling.disabled) {\n        type = 'aclick';\n        data = target.id;\n      }\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'change',\n        data: {\n          dataid: target.getAttribute('data-id'),\n          id: target.id,\n          value: target.value\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (data.id == 'ctl00_contentForm_UCSFInfo3_P1') {\n      var titles = data.titles.map(function (ele, index) {\n        var lis = data.content.map(function (d, i) {\n          if (index == i) {\n            if (i == 0) {\n              return React.createElement(\n                'div',\n                { className: 'superior_yspone' },\n                React.createElement(\n                  'div',\n                  null,\n                  d\n                )\n              );\n            }\n            if (i == 1) {\n              var list = d[0].content.map(function (dd, ii) {\n                var liindex = d[0].titleleft.map(function (elem, ind) {\n                  return React.createElement(\n                    'div',\n                    { className: 'ysp-two-content' },\n                    React.createElement(\n                      'div',\n                      null,\n                      elem\n                    ),\n                    React.createElement('input', { 'data-id': i, id: dd[ind].id, onChange: _this.onChange, value: dd[ind].text })\n                  );\n                });\n                return React.createElement(\n                  'div',\n                  { className: 'superior_ysp_two' },\n                  React.createElement(\n                    'div',\n                    { className: 'titleone' },\n                    React.createElement(\n                      'p',\n                      null,\n                      '0',\n                      ii + 1\n                    ),\n                    React.createElement(\n                      'p',\n                      null,\n                      d[0].title[ii + 1]\n                    )\n                  ),\n                  liindex\n                );\n              });\n              return React.createElement(\n                'div',\n                null,\n                list\n              );\n            }\n            if (i == 2) {\n              var list = d.map(function (elem, ii) {\n                if (ii <= 3) {\n                  var opts = elem.right.options.map(function (dd, ind) {\n                    return React.createElement(\n                      'option',\n                      { selected: elem.right.selecteds[ind] },\n                      dd\n                    );\n                  });\n                  return React.createElement(\n                    'div',\n                    { className: 'ysp-itemopts' },\n                    React.createElement(\n                      'div',\n                      null,\n                      elem.left\n                    ),\n                    React.createElement(\n                      'select',\n                      { id: elem.id },\n                      opts\n                    )\n                  );\n                }\n                if (ii == 4) {\n                  return React.createElement(\n                    'div',\n                    { className: 'ysp-textarea' },\n                    React.createElement(\n                      'div',\n                      null,\n                      elem.left\n                    ),\n                    React.createElement('input', { onChange: _this.onChange, 'data-id': i, id: elem.id, value: elem.right })\n                  );\n                }\n                if (ii == 5) {\n                  return React.createElement(\n                    'div',\n                    { className: 'ysp-item-btn' },\n                    React.createElement(\n                      'div',\n                      null,\n                      elem.left\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'button',\n                        { 'data-id': i, id: elem.right.id[0], onClick: _this.onClick, className: elem.right.checked[0] ? 'onbtn' : '' },\n                        '\\u662F'\n                      ),\n                      React.createElement(\n                        'button',\n                        { 'data-id': i, id: elem.right.id[1], onClick: _this.onClick, className: elem.right.checked[1] ? 'onbtn' : '' },\n                        '\\u5426'\n                      )\n                    )\n                  );\n                }\n                if (ii == 6 || ii == 8) {\n                  var opts = d[ii + 1].right.options.map(function (del, inde) {\n                    return React.createElement(\n                      'option',\n                      { selected: d[ii + 1].right.selecteds[inde] },\n                      del\n                    );\n                  });\n                  return React.createElement(\n                    'div',\n                    { className: 'infilename' },\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'div',\n                        null,\n                        elem.left\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        React.createElement('input', { disabled: elem.disabled, value: elem.right.text }),\n                        React.createElement('a', { onClick: _this.onClick, href: 'javascript:;', id: elem.right.id })\n                      )\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'div',\n                        null,\n                        d[ii + 1].left\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                          'select',\n                          { id: d[ii + 1].right.id, disabled: d[ii + 1].right.disabled },\n                          opts\n                        )\n                      )\n                    )\n                  );\n                }\n              });\n              return React.createElement(\n                'div',\n                { className: 'superior_ysp-three' },\n                list\n              );\n            }\n          }\n        });\n        return React.createElement(\n          'div',\n          { className: 'content' },\n          React.createElement(\n            'div',\n            { className: 'contenttitle' },\n            React.createElement('span', null),\n            React.createElement(\n              'p',\n              null,\n              ele\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            lis\n          )\n        );\n      });\n    } else {\n      var titles = '';\n    }\n    return React.createElement(\n      'div',\n      null,\n      titles\n    );\n  }\n});";
    },
    getData_control196_huJiSn: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push({ text: elem.querySelector('tr').querySelector('td').querySelector('a').textContent.trim(), id: elem.querySelector('tr').querySelector('td').querySelector('a').id });data.push({ text: elem.querySelector('tr').querySelectorAll('td')[2].querySelector('a').textContent.trim(), id: elem.querySelector('tr').querySelectorAll('td')[2].querySelector('a').id });data.push(elem.ownerDocument.querySelector("#ctl00_contentForm_UCSFInfo3_P1") ? 1 : 0);return data;
    },
    doAction_uiControl196_HHFH0i: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector("#" + data.customData).click();
      }
    },
    getTemplate_uiControl196_HHFH0i: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    var divs = target.parentElement.querySelectorAll('div');\n    for(var i=0;i<divs.length;i++){\n      divs[i].className='';\n      if(divs[i].id == target.id){\n        divs[i].className='item';\n      }\n    }\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.id\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.map(function(ele,index){\n      if(index!=data.length-1){\n          return(\n          <div className={index==data[2]?'item':''} onClick={_this.onClick} id={ele.id}>{ele.text}</div>\n        )\n      }\n    })\n    return (\n      <div class=\"tage\">\n        {lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    var divs = target.parentElement.querySelectorAll('div');\n    for (var i = 0; i < divs.length; i++) {\n      divs[i].className = '';\n      if (divs[i].id == target.id) {\n        divs[i].className = 'item';\n      }\n    }\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.id\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      if (index != data.length - 1) {\n        return React.createElement(\n          'div',\n          { className: index == data[2] ? 'item' : '', onClick: _this.onClick, id: ele.id },\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { 'class': 'tage' },\n      lis\n    );\n  }\n});";
    }
  }, "personnel");
})(window, ysp);