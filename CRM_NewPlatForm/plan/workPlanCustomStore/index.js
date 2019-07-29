(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control42_A9IB6L: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var win = doc.defaultView;var isShow = "";var customerOrStoreEl = doc.getElementById('customerOrStorePopList'); //工作计划
      var tempCustomerOrStoreEl = doc.getElementById('tempCustomerOrStorePopList'); //临时签到计划
      if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "none" && tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "none") {
        isShow = "workOrTemp";
      } else {
        if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
          elem = customerOrStoreEl;isShow = "work";
        } else {
          if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
            elem = tempCustomerOrStoreEl;isShow = "temp";
          }
        }
      } //获取客户和门店列表数据
      //获取目标列表对应id的DOM
      var targetId = elem.getAttribute("id"),
          targetList;if (targetId == "customerOrStorePopList") {
        if (elem.querySelector('#newPlanCustomerList') != null) {
          targetList = elem.querySelector('#newPlanCustomerList').style.display == "none" ? elem.querySelector('#newPlanStoreList') : elem.querySelector('#newPlanCustomerList');
        } else {
          targetList = "";
        }
      } else {
        if (elem.querySelector('#newTempCustomerVisit') != null) {
          targetList = elem.querySelector('#newTempCustomerVisit').style.display == "none" ? elem.querySelector('#newTempStoreVisit') : elem.querySelector('#newTempCustomerVisit');
        } else {
          targetList = "";
        }
      } // var trs = elem.querySelectorAll('table tbody tr');
      var trs = targetList ? targetList.querySelectorAll('table tbody tr') : [];var content = [];trs.length && [].forEach.call(trs, function (tr, index) {
        var trData = [];var tds = tr.querySelectorAll('td');[].forEach.call(tds, function (td, subIndex) {
          var input = td.querySelector('input');if (input) {
            trData.push(input.checked);
          } else {
            trData.push(td.textContent);
          }
        });content.push(trData);
      }); //其它客户和工作计划填写
      var tempPlanOtherCustomerInput = elem.querySelector("#tempPlanOtherCustomer");var tempPlanOtherCustomer = '';if (tempPlanOtherCustomerInput) {
        tempPlanOtherCustomer = tempPlanOtherCustomerInput.value;
      }
      var dayPlanContentText = elem.querySelector("#dayPlanContent");var dayPlanContent = '';if (dayPlanContentText) {
        dayPlanContent = dayPlanContentText.value;
      } //选择临时拜访多少个客户和门店
      var selectedCount = 0;var tempAreaText = "";var targetList1;if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
        if (elem.querySelector('#newTempCustomerVisit') != null) {
          targetList1 = elem.querySelector('#newTempCustomerVisit').style.display == "none" ? elem.querySelector('#newTempStoreVisit') : elem.querySelector('#newTempCustomerVisit');
        } else {
          targetList1 = "";
        } // var inputs = tempCustomerOrStoreEl.querySelectorAll('table  tr td input');
        var inputs = targetList1 ? targetList1.querySelectorAll('table  tr td input') : [];inputs && [].forEach.call(inputs, function (item) {
          if (item.checked) {
            selectedCount++;
          }
        });selectedCount = selectedCount ? selectedCount : '';tempAreaText = tempCustomerOrStoreEl && tempCustomerOrStoreEl.querySelector("#tempPlanOtherCustomer").value;
      } //客户和门店所选择的总数
      var customer = 0;var store = 0; //工作计划的门店和客户的所选数量
      if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
        //这个一定是工作计划了
        if (elem.ownerDocument.querySelector('#visitCustomerListBtn')) {
          if (elem.ownerDocument.querySelector('#visitCustomerListBtn').getAttribute('num')) {
            customer = parseInt(elem.ownerDocument.querySelector('#visitCustomerListBtn').getAttribute('num'));
          }
        }if (elem.ownerDocument.querySelector('#visitStoreListBtn')) {
          if (elem.ownerDocument.querySelector('#visitStoreListBtn').getAttribute('num')) {
            store = parseInt(elem.ownerDocument.querySelector('#visitStoreListBtn').getAttribute('num'));
          }
        }
      } //临时拜访的门店和客户的所选数量
      if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
        if (elem.ownerDocument.querySelector('#tempVisitCustomerListBtn')) {
          if (elem.ownerDocument.querySelector('#tempVisitCustomerListBtn').getAttribute('num')) {
            customer = parseInt(elem.ownerDocument.querySelector('#tempVisitCustomerListBtn').getAttribute('num'));
          }
        }if (elem.ownerDocument.querySelector('#tempVisitStoreListBtn')) {
          if (elem.ownerDocument.querySelector('#tempVisitStoreListBtn').getAttribute('num')) {
            store = parseInt(elem.ownerDocument.querySelector('#tempVisitStoreListBtn').getAttribute('num'));
          }
        }
      } //日工作计划
      var textArea = "";if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
        var text = elem.querySelector("#dayPlanContent").value;textArea = text;
      } //分页
      var pageData = {};var item = [];pageData.prev = false;
      pageData.next = false; //获取对应的客户列表或者门店列表的下面公共底部的页面信息
      var targetPageInfo;if (targetId == "customerOrStorePopList") {
        //工作计划签到逻辑
        if (elem.querySelector('#newPlanCustomerList') != null) {
          if (elem.querySelector('#newPlanCustomerList').style.display == "none") {
            if (elem.querySelectorAll('.commpnPage').length) {
              targetPageInfo = elem.querySelectorAll('.commpnPage')[1];
            } else {
              targetPageInfo = "";
            }
          } else {
            if (elem.querySelectorAll('.commpnPage').length) {
              targetPageInfo = elem.querySelectorAll('.commpnPage')[0];
            } else {
              targetPageInfo = "";
            }
          }
        } else {
          targetPageInfo = "";
        }
      } else {
        //临时签到逻辑
        if (elem.querySelector('#newTempCustomerVisit') != null) {
          //点击了临时签到的门店列表展示按钮以后需要判断一下
          if (elem.querySelector('#newTempCustomerVisit').style.display == "none") {
            if (elem.querySelectorAll('.commpnPage').length) {
              targetPageInfo = elem.querySelectorAll('.commpnPage')[1];
            } else {
              targetPageInfo = '';
            }
          } else {
            if (elem.querySelectorAll('.commpnPage').length) {
              targetPageInfo = elem.querySelectorAll('.commpnPage')[0];
            } else {
              targetPageInfo = '';
            }
          }
        } else {
          targetPageInfo = "";
        }
      }if (targetPageInfo && targetPageInfo.querySelector('.skip')) {
        pageData.numberTaotal = targetPageInfo.querySelector('.skip').querySelectorAll('span')[0].textContent.replace(/[^0-9]/g, '');
      } else {
        pageData.numberTaotal = '';
      } // var lis = elem.querySelectorAll('li');
      var lis = targetPageInfo ? targetPageInfo.querySelectorAll('li') : [];for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              pageData.prev = true;break;case 'Go to next page':
              pageData.next = true;break;}
        }
      }
      var tarId = targetList && targetList.getAttribute("id"),
          targetJump1;if (tarId == 'newPlanCustomerList' || tarId == 'newTempCustomerVisit') {
        targetJump1 = elem.querySelectorAll('.commpnPage')[0];
      } else if (tarId == 'newPlanStoreList' || tarId == 'newTempStoreVisit') {
        targetJump1 = elem.querySelectorAll('.commpnPage')[1];
      } else {}var liss = targetJump1 ? targetJump1.querySelectorAll('li') : [];for (var k = 0; k < liss.length; k++) {
        var active = liss[k].className;if (active == 'active') {
          pageData.currentPage = liss[k].querySelector('a').textContent;
        }
      } /***
        newTempCustomerVisit
        newTempStoreVisit
        newPlanCustomerList
        newPlanStoreList
        pageData.page = ysp.customHelper.trim(elem.ownerDocument.querySelector('#newPlanList').textContent) != "" || ysp.customHelper.trim(elem.ownerDocument.querySelector('#newTempVisit').textContent) != "" ? true : false;
        ***/pageData.page = true; //if (content.length === 0) return;
      // var pageLoading = [];
      // var loading = ysp.customHelper.tipMsg.getLoading;
      // pageLoading.push(loading);
      var tables = elem.querySelector(".plan-con").firstChild;if (tables) {
        var flag = true;
      } else {
        var flag = false;
      } //确认和返回按钮的个数(只限工作计划)
      var buttonNum = 2;if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
        var addButtonStyle = customerOrStoreEl.querySelector("#addDayPlanOkBtn").getAttribute("style");if ("display:none;" == addButtonStyle) {
          buttonNum = 1;
        }
      }var load;if (elem.ownerDocument.defaultView.localStorage) {
        load = elem.ownerDocument.defaultView.localStorage.getItem('layerLoading'); // if (load !== undefined && load == null) {
        //   setTimeout(function () {
        //     ysp.appMain.hideLoading();
        //   }, 5000);
        // } else {
        //   ysp.appMain.showLoading();
        // } //var loading = ysp.customHelper.tipMsg.getLoading();
      }return { loadingFlag: load, isShow: isShow, content: content, tempPlanOtherCustomer: tempPlanOtherCustomer, dayPlanContent: dayPlanContent, selectedCount: selectedCount, tempAreaText: tempAreaText, customer: customer || 0, store: store || 0, textArea: textArea, pageData: { "prev": pageData.prev, "next": pageData.next, "numberTaotal": pageData.numberTaotal, "page": pageData.page, "currentPage": pageData.currentPage, "flag": flag //pageLoading: pageLoading
        }, buttonNum: buttonNum };
    }, doAction_uiControl44_fBiQg5: function (data, elem) {
      //返回按钮方法，返回工作台页面
      function commonTargetlist() {
        var targetId = elem.getAttribute("id"),
            targetList;if (targetId == "customerOrStorePopList") {
          //工作计划
          if (elem.querySelector('#newPlanCustomerList') != null) {
            targetList = elem.querySelector('#newPlanCustomerList').style.display == "none" ? elem.querySelector('#newPlanStoreList') : elem.querySelector('#newPlanCustomerList');
          } else {
            targetList = "";
          }
        } else {
          //临时签到
          if (elem.querySelector('#newTempCustomerVisit') != null) {
            targetList = elem.querySelector('#newTempCustomerVisit').style.display == "none" ? elem.querySelector('#newTempStoreVisit') : elem.querySelector('#newTempCustomerVisit');
          } else {
            targetList = "";
          }
        }return targetList;
      }if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackURL = "http://192.168.1.227/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";ysp.customHelper.AndroidBackModel = 'customerWorkspace';
        ysp.customHelper.AndroidBackFlag = 'destination';
      }if ('back' == data.eventType) {
        if (!top.EAPI.isAndroid()) {
          ysp.appMain.back();ysp.customHelper.BackReload();
        } else {
          //ysp.customHelper.AndroidBackFn();
          ysp.appMain.back();
        }
      }var doc = elem.ownerDocument;var win = doc.defaultView;var isShow = '';var queryBtn;var queryInput;var customerOrStoreEl = doc.getElementById('customerOrStorePopList'); //工作计划
      var tempCustomerOrStoreEl = doc.getElementById('tempCustomerOrStorePopList'); //临时签到计划
      if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
        elem = customerOrStoreEl;isShow = "work";queryBtn = doc.getElementById('newPlanListSearch');queryInput = doc.getElementById('newPlanListSearchText');
      }if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
        elem = tempCustomerOrStoreEl;isShow = "temp";queryBtn = doc.getElementById('newTempVisitSearch');queryInput = doc.getElementById('newTempVisitSearchText');
      } //工作计划
      var customer = elem.querySelector(".menu");var customerLis = customer.querySelectorAll("li"); //临时工作计划
      var temp = elem.querySelector(".menu");var tempLis = temp.querySelectorAll("li"); //点击客户列表按钮
      if ('customer' == data.eventType) {
        if ('work' == isShow) {
          customerLis[0].click();
        } else {
          tempLis[0].click();
        }
      } //点击门店列表按钮
      if ('store' == data.eventType) {
        if ('temp' == isShow) {
          tempLis[1].click();
        } else {
          customerLis[1].click();
        }
      } //其他客户和工作计划
      if ('textareaChange' == data.eventType) {
        var value = data.dataCustom.value;var tempPlanOtherCustomerInput = elem.querySelector('#tempPlanOtherCustomer') || elem.querySelector('#dayPlanContent');if (tempPlanOtherCustomerInput) {
          tempPlanOtherCustomerInput.value = value;
        }
      }if ('handlerClick' == data.eventType) {
        if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
          tempCustomerOrStoreEl.querySelector("#tempPlanOtherCustomer").click();
        }
      } //点击确认按钮方法
      if ('ascertain' == data.eventType) {
        var textArea = data.dataCustom.textArea;var tempAreaText = data.dataCustom.tempAreaText;var selectedCount = data.dataCustom.selectedCount;var addTempDayPlanOkBtn = elem.querySelector('#addTempDayPlanOkBtn') || elem.querySelector('#addDayPlanOkBtn');var addTempDayPlanOkBtn = elem.querySelector('#addTempDayPlanOkBtn');var addDayPlanOkBtn = elem.querySelector('#addDayPlanOkBtn');var cwin = elem.ownerDocument.defaultView;if (addTempDayPlanOkBtn) {
          // addTempDayPlanOkBtn.click();
          cwin.tempShow();
        }if (addDayPlanOkBtn) {
          // addDayPlanOkBtn.click();
          cwin.Show();
        }if (tempCustomerOrStoreEl && win.getComputedStyle(tempCustomerOrStoreEl).display == "block") {
          var tempTextAreaValue = tempCustomerOrStoreEl.querySelector("#tempPlanOtherCustomer") && tempCustomerOrStoreEl.querySelector("#tempPlanOtherCustomer").value;if (tempTextAreaValue != "" || selectedCount != "") {
            ysp.appMain.showLoading();setTimeout(function () {
              ysp.appMain.hideLoading();var url = "http://192.168.1.227/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";ysp.appMain.back();ysp.customHelper.BackReload();
            }, 2000);
          }
        } //计划拜访
        if (customerOrStoreEl && win.getComputedStyle(customerOrStoreEl).display == "block") {
          var textAreaValue = customerOrStoreEl.querySelector("#dayPlanContent") && customerOrStoreEl.querySelector("#dayPlanContent").value;if (textAreaValue != "") {
            ysp.appMain.showLoading();setTimeout(function () {
              ysp.appMain.hideLoading();var url = "http://192.168.1.227/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";ysp.customHelper.BackReload();
            }, 2000);
          }
        }
      } //搜索方法
      if ('query' == data.eventType) {
        var queryValue = data.dataCustom.queryValue;queryInput && (queryInput.value = queryValue);queryBtn && queryBtn.click();
      }if ('checkClick' == data.eventType) {
        var clickIndex = data.dataCustom.clickIndex;var doc = elem.ownerDocument; // var targetId = elem.getAttribute("id"),targetList;
        var targetList = commonTargetlist(); /***
                                             if (targetId == "customerOrStorePopList") {
                                               targetList = elem.querySelector('#newPlanCustomerList').style.display == "none" ? elem.querySelector('#newPlanStoreList') : elem.querySelector('#newPlanCustomerList');
                                             } else {
                                               targetList = elem.querySelector('#newTempCustomerVisit').style.display == "none" ? elem.querySelector('#newTempStoreVisit') : elem.querySelector('#newTempCustomerVisit');
                                             }
                                             ***/var inputs = targetList ? targetList.querySelectorAll('table  tr input') : [];inputs.length && [].forEach.call(inputs, function (item, index) {
          if (parseInt(index) == clickIndex) {
            item.click();
          }
        });
      }switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'GO':
          clickGO(data.dataCustom);
          break;}function clickGO(data) {
        var targetList = commonTargetlist(),
            tarId = targetList && targetList.getAttribute("id"),
            input,
            targetJump; //获取临时签到或者是工作计划签到的客户或者是门店的列表
        // var input = elem.ownerDocument.querySelector('.skip-num');
        if (tarId == 'newPlanCustomerList' || tarId == 'newTempCustomerVisit') {
          targetJump = elem.querySelectorAll('.commpnPage')[0];input = elem.querySelectorAll('.commpnPage')[0].querySelector("input");
        } else if (tarId == 'newPlanStoreList' || tarId == 'newTempStoreVisit') {
          targetJump = elem.querySelectorAll('.commpnPage')[1];input = elem.querySelectorAll('.commpnPage')[1].querySelector("input");
        } else {}input.value = data;input.blur();targetJump && targetJump.querySelector('.skip_right_goto .skip-right-icon') && targetJump.querySelector('.skip_right_goto .skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      } //   ysp.appMain.showLoading();
    },
    getTemplate_uiControl44_fBiQg5: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  CustomHeader,\n  Dialog,\n  Accordion,\n  CheckBox,\n  CustomerSerch,\n  Page\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      open: false,\n      title:'',\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: 'flag'\n    };\n    this.clickCustomer = this.clickCustomer.bind(this);\n    this.clickStore = this.clickStore.bind(this);\n  }\n  componentDidMount(){\n    var _this = this;\n \xA0 \xA0var {customHandler} = _this.props;\n    customHandler({\n      eventType:'AndroidBack'\n    })\n  } \n  //\u70B9\u51FB\u5BA2\u6237\n  clickCustomer = (e)=>{\n \xA0 \xA0var handler = this.props.customHandler,_this=this;\n    if(handler){\n      handler({\n        eventType:'customer'\n      });\n    }\n    setTimeout(()=>{this.setState(\n    (prevState)=>({open:!prevState.open,title:\"\u5BA2\u6237\"})\n    )}\n    ,500);\n  }\n  //\u70B9\u51FB\u95E8\u5E97\u5217\u8868\u5427\n  clickStore=(e)=>{\n      var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'store'\n        })\n      } \n    \tsetTimeout(()=>{this.setState(\n      \t(prevState)=>({open:!prevState.open,title:\"\u95E8\u5E97\"})\n      )},500);\n    }\n  //\u81EA\u5B9A\u4E49textarea\u7684change\u4E8B\u4EF6\u5904\u7406\n  handleTextAreaChange(e) {\n    var target = e.target;\n    if (target.tagName.toLowerCase() === 'textarea') {\n      // this.setState({\n      //   tempPlanOtherCustomerValue: target.value\n      // });\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'textareaChange',\n          data: {\n            value: target.value\n          }\n        });\n      }\n    }\n  }\n  \n  handlerAreaClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'handlerClick'\n      })\n    }\n  }\n  \n  //\u641C\u7D22\u65B9\u6CD5\n  searchClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          queryValue: e.target.previousSibling.value\n        },\n        eventType: 'query'\n      })\n    }\n    this.setState({\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false\n    })\n    e.target.previousSibling.value = ''\n  }\n  \n  \n  render = () => {\n    var isCustomer = this.props.customData && this.props.customData.isCustomer;\n    var isStore = this.props.customData && this.props.customData.isStore;\n    var isShow = this.props.customData && this.props.customData.isShow;\n    var datas = (this.props.customData && this.props.customData.content) || [];\n    var tempPlanOtherCustomer = (this.props.customData && this.props.customData.tempPlanOtherCustomer) || '';\n    var dayPlanContent = (this.props.customData && this.props.customData.dayPlanContent) || '';\n    var page = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.page;\n    var flag = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.flag;\n    var prevState = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.prev;\n    var pageState = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.page;\n    var nextState = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.next;\n    var currentPage = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.currentPage;\n    var numberTaotal = this.props.customData && this.props.customData.pageData && this.props.customData.pageData.numberTaotal;\n    var selectedCount = this.props.customData && this.props.customData.selectedCount;\n    var tempAreaText = this.props.customData && this.props.customData.tempAreaText;\n    var customer = this.props.customData && this.props.customData.customer;\n    var store = this.props.customData && this.props.customData.store;\n    var textArea = this.props.customData && this.props.customData.textArea;\n    var buttonNum = this.props.customData && this.props.customData.buttonNum;\n    var loadingFlag = this.props.customData && this.props.customData.loadingFlag;\n    //\u83B7\u53D6\u5F53\u524D\u9875\u9762\u9700\u8981\u5C55\u793A\u7684\u6807\u9898\n    var titleInfo ;\n    if(this.state.title == ''){\n       titleInfo = isShow == 'temp' ? \"\u4E34\u65F6\u7B7E\u5230\" : \"\u5DE5\u4F5C\u8BA1\u5212\";\n    }else{\n        titleInfo  = this.state.title;\n    }\n       \n    return (\n      <div>\n        <CustomHeader \n         data={{centerText:titleInfo ,rightText:\"\u7B5B\u9009\"}} \n         backIsShow={true} \n         back={()=>{ \n            var handler = this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n         }} \n         filterIsShow={false} \n         filter={()=>{console.info(\"header filter ...\")}}\n      />\n      <Accordion \n        className=\"ysp-tempvisit-accordion-wapper\" \n        close={true}\n        clickList = {this.clickCustomer}\n        >\n        <Accordion.Header>\n          <header className=\"ysp-tempvisit-accordion-header\"\n            >\n            <span>\n              <span className=\"ysp-accordion-client-icon\"></span>\n            </span>\n            <span>\u5BA2\u6237</span>\n            {\n              customer!=0 && <span className='ysp-tempvisit-accordion-num'><span>{customer}</span></span> \n            }\n          </header>\n        </Accordion.Header>\n        <Accordion.Body  className=\"ysp-tempvisit-acoordion-body\">\n        </Accordion.Body>\n       </Accordion>\n       <Accordion \n          className=\"ysp-tempvisit-accordion-wapper\" \n          close={true}\n         \tclickList = {this.clickStore}\n          >\n          <Accordion.Header>\n            <header className=\"ysp-tempvisit-accordion-header\"\n              >\n              <span>\n                <span className=\"ysp-accordion-mendian-icon\"></span>\n              </span>\n              <span>\u95E8\u5E97</span>\n              {\n                store != 0 &&   <span className='ysp-tempvisit-accordion-num'><span>{store}</span></span> \n              }\n            </header>\n          </Accordion.Header>\n          <Accordion.Body  className=\"ysp-tempvisit-acoordion-body\">\n         </Accordion.Body>\n       </Accordion>\n      <div className=\"ysp-tempvisit-accordion-label\">\n        <span>{isShow == \"temp\" ? \"\u5176\u5B83\u5BA2\u6237\":\"\u65E5\u5DE5\u4F5C\u8BA1\u5212\"}</span>  \n      </div>  \n      <div className=\"ysp-tempvisit-accordion-textarea\">\n         <span className=\"ysp-tempvisit-fill\">\n            <span className=\"ysp-fillIn-icon\"></span>\n         </span>\n         <ATextarea ref=\"textareaRegion\" className=\"compatibility-ios-fixed\" value={tempPlanOtherCustomer || dayPlanContent} onBlur={this.handleTextAreaChange.bind(this)} onClick={this.handlerAreaClick.bind(this)} ></ATextarea>  \n      </div>\n      {\n      \tbuttonNum == 1 ?\n        <div style={{\"height\":\"50px\",\"background\":\"#F0EFF5\"}}></div>\n          :\n        <div className=\"ysp-tempvisit-accordion-btn\"\n         onClick={(e)=>{\n            var target=e.target;\n            var handler=this.props.customHandler;\n            target.disabled = true;\n            setTimeout(function(e){\n              target.disabled = false;\n            },3000)\n            if (handler) {\n              handler({\n                data:{\n                  'textArea': textArea,\n                  'selectedCount': selectedCount,\n                  'tempAreaText': tempAreaText\n                },\n                eventType: 'ascertain'\n              });\n            }\n            // let executeFn = () => {\n            //    let isShow = _this.props.customData &&  _this.props.customData.isShow;\n            //    if(isShow){\n            //        _this.ascertainTimeId = setTimeout(executeFn.bind(_this),100);\n            //    }else{\n            //        _this.setState({open:false});\n            //    }\n            // }\n            // executeFn();\n           }}\n        \t>\n          <AMUI.Button\n            amStyle=\"secondary\"\n            amSize=\"lg\"\n            block={true}\n            >\u786E\u5B9A</AMUI.Button>\n      \t</div>\n      \t}  \n        <Dialog close={!this.state.open}>\n        \t<CustomHeader \n             data={{centerText:this.state.title == \"\u5BA2\u6237\" ? \"\u5BA2\u6237\" : \"\u95E8\u5E97\" ,rightText:\"\u7B5B\u9009\"}} \n             backIsShow={true} \n             back={()=>{\n              this.setState({open:false,title:\"\"});\n             }} \n             filterIsShow={false} \n             filter={()=>{console.info(\"header filter ...\")}}\n      \t\t/>\n          <CustomerSerch \n            placeholder='\u641C\u7D22'\n            commitStateBtn = {this.state.commitStateBtn}\n            click={this.searchClick.bind(this)}\n            buttonState = {this.state.buttonState}\n            commitState = {this.state.commitState}\n            width = {this.state.width}\n            flag = {this.state.flag}\n          />\n          \n          <div className=\"ysp-tempvisit-list-wrapper\">\n           {((datas && datas.length == 0) && (flag && flag == true) && loadingFlag == null) ? \n            <div className=\"ysp-no-datas\" style={{height:'62vh'}}>\n              <div></div>\n              <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n            </div> : \n            datas.map((items, index)=>\n            <div key={index} className=\"ysp-tempvisit-list-item\">\n               <div>\n                  <div>\n                    {/***<CheckBox\n                      checked={items[0]}\n                      onClick={(e)=>{\n                        var obj = {\n                          [index]:e.checked\n                        }\n                        var handler = this.props.customHandler;\n                        if (handler) {\n                          handler({\n                            eventType: 'checkClick',\n                            data:{\n                              clickIndex:parseInt(index)\n                            }\n                          });\n                        }\n                      }}\n                      />***/}\n                     <span \n                        className={items[0]?\"ysp-checkout-wrapper checked\":\"ysp-checkout-wrapper unchecked\"} onClick={(e)=>{\n                        var handler = this.props.customHandler;\n                        if (handler) {\n                          handler({\n                            eventType: 'checkClick',\n                            data:{\n                              clickIndex:parseInt(index)\n                            }\n                          });\n                        }\n                      }}>\n                       <span></span>\n                    </span>\n                  </div>\n                  <div>\n                     <span>\n                       {items[1]}\n                     </span>\n                     <span>\n                       <span>\u9500\u552E\u4EBA\u5458\uFF1A{items[2].split('\uFF1A')[0]}</span>\n                       <span>{items[2].split('\uFF1A')[1]}</span>\n                     </span>\n                     <span>\n                       <span>\n                        <span>{items[3].split('\uFF1A')[0]}\uFF1A</span>\n                        <span>{items[3].split('\uFF1A')[1]}</span>\n                       </span>\n\n                       <span>\n                        <span>{items[4].split('\uFF1A')[0]}\uFF1A</span>\n                        <span>{items[4].split('\uFF1A')[1]}</span>\n                       </span>\n                    </span>\n                  </div> \n              </div>\n            </div>\n          ) }\n        </div>\n        <div className=\"ysp-tempvisit-list-footer\">\n          <div>\n            \n          </div>\n          {\n            datas && datas.length == 0 ? <div></div> : <div onClick={()=>{\n              this.setState({\n                open: false,\n                title:\"\"\n              })  \n            }}>\n            <span>\u786E\u5B9A</span>\n          </div>\n          }\n        </div>\n        {\n          datas && datas.length == 0 ? <div></div> : \n            <Page \n              pageState = {pageState}\n              prevState = {prevState}\n              nextState = {nextState}\n              prev={(e)=>{\n              var handler = this.props.customHandler;\n              if(handler){\n                handler({\n                  data:\"prev\",\n                  eventType:'prev'\n                })\n              }\n                e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n            }}\n          \t\tcurrentPage = {currentPage}\n              pageNumber={numberTaotal}\n              next={(e)=>{\n              var handler = this.props.customHandler;\n              if(handler){\n                handler({\n                  data:\"next\",\n                  eventType:\"next\"\n                })\n              }\n                e.target.previousSibling.querySelector('input').value = '';\n            }}\n            Click={(e)=>{\n            \tvar handler = this.props.customHandler;\n            \tvar target = e.target;\n            \t// target.value = target.value.replace(/[^0-9]/g,'')\n            \tvar value = target.parentElement.querySelector('input').value;\n            \tvalue = value.replace(/[^0-9]/g,'');\n              if(handler){\n                handler({\n                  data:value,\n                  eventType:'GO'\n                })\n              }\n              setTimeout(function(){\n                target.parentElement.querySelector('input').value = \"\";\n              },1000);\n          \t}}\n          Change={(e)=>{\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g,'');\n          }}\n          />\n        }\n          \n        </Dialog>\n      </div>\n    );\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.clickCustomer = function (e) {\n      var handler = _this2.props.customHandler,\n          _this = _this2;\n      if (handler) {\n        handler({\n          eventType: \'customer\'\n        });\n      }\n      setTimeout(function () {\n        _this2.setState(function (prevState) {\n          return { open: !prevState.open, title: "\u5BA2\u6237" };\n        });\n      }, 500);\n    };\n\n    _this2.clickStore = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'store\'\n        });\n      }\n      setTimeout(function () {\n        _this2.setState(function (prevState) {\n          return { open: !prevState.open, title: "\u95E8\u5E97" };\n        });\n      }, 500);\n    };\n\n    _this2.render = function () {\n      var isCustomer = _this2.props.customData && _this2.props.customData.isCustomer;\n      var isStore = _this2.props.customData && _this2.props.customData.isStore;\n      var isShow = _this2.props.customData && _this2.props.customData.isShow;\n      var datas = _this2.props.customData && _this2.props.customData.content || [];\n      var tempPlanOtherCustomer = _this2.props.customData && _this2.props.customData.tempPlanOtherCustomer || \'\';\n      var dayPlanContent = _this2.props.customData && _this2.props.customData.dayPlanContent || \'\';\n      var page = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.page;\n      var flag = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.flag;\n      var prevState = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.prev;\n      var pageState = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.page;\n      var nextState = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.next;\n      var currentPage = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.currentPage;\n      var numberTaotal = _this2.props.customData && _this2.props.customData.pageData && _this2.props.customData.pageData.numberTaotal;\n      var selectedCount = _this2.props.customData && _this2.props.customData.selectedCount;\n      var tempAreaText = _this2.props.customData && _this2.props.customData.tempAreaText;\n      var customer = _this2.props.customData && _this2.props.customData.customer;\n      var store = _this2.props.customData && _this2.props.customData.store;\n      var textArea = _this2.props.customData && _this2.props.customData.textArea;\n      var buttonNum = _this2.props.customData && _this2.props.customData.buttonNum;\n      var loadingFlag = _this2.props.customData && _this2.props.customData.loadingFlag;\n      //\u83B7\u53D6\u5F53\u524D\u9875\u9762\u9700\u8981\u5C55\u793A\u7684\u6807\u9898\n      var titleInfo;\n      if (_this2.state.title == \'\') {\n        titleInfo = isShow == \'temp\' ? "\u4E34\u65F6\u7B7E\u5230" : "\u5DE5\u4F5C\u8BA1\u5212";\n      } else {\n        titleInfo = _this2.state.title;\n      }\n\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: titleInfo, rightText: "\u7B5B\u9009" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'back\'\n              });\n            }\n          },\n          filterIsShow: false,\n          filter: function filter() {\n            console.info("header filter ...");\n          }\n        }),\n        React.createElement(\n          _yspCustomComponents.Accordion,\n          {\n            className: \'ysp-tempvisit-accordion-wapper\',\n            close: true,\n            clickList: _this2.clickCustomer\n          },\n          React.createElement(\n            _yspCustomComponents.Accordion.Header,\n            null,\n            React.createElement(\n              \'header\',\n              { className: \'ysp-tempvisit-accordion-header\'\n              },\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\'span\', { className: \'ysp-accordion-client-icon\' })\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u5BA2\\u6237\'\n              ),\n              customer != 0 && React.createElement(\n                \'span\',\n                { className: \'ysp-tempvisit-accordion-num\' },\n                React.createElement(\n                  \'span\',\n                  null,\n                  customer\n                )\n              )\n            )\n          ),\n          React.createElement(_yspCustomComponents.Accordion.Body, { className: \'ysp-tempvisit-acoordion-body\' })\n        ),\n        React.createElement(\n          _yspCustomComponents.Accordion,\n          {\n            className: \'ysp-tempvisit-accordion-wapper\',\n            close: true,\n            clickList: _this2.clickStore\n          },\n          React.createElement(\n            _yspCustomComponents.Accordion.Header,\n            null,\n            React.createElement(\n              \'header\',\n              { className: \'ysp-tempvisit-accordion-header\'\n              },\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\'span\', { className: \'ysp-accordion-mendian-icon\' })\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u95E8\\u5E97\'\n              ),\n              store != 0 && React.createElement(\n                \'span\',\n                { className: \'ysp-tempvisit-accordion-num\' },\n                React.createElement(\n                  \'span\',\n                  null,\n                  store\n                )\n              )\n            )\n          ),\n          React.createElement(_yspCustomComponents.Accordion.Body, { className: \'ysp-tempvisit-acoordion-body\' })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-tempvisit-accordion-label\' },\n          React.createElement(\n            \'span\',\n            null,\n            isShow == "temp" ? "\u5176\u5B83\u5BA2\u6237" : "\u65E5\u5DE5\u4F5C\u8BA1\u5212"\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-tempvisit-accordion-textarea\' },\n          React.createElement(\n            \'span\',\n            { className: \'ysp-tempvisit-fill\' },\n            React.createElement(\'span\', { className: \'ysp-fillIn-icon\' })\n          ),\n          React.createElement(ATextarea, { ref: \'textareaRegion\', className: \'compatibility-ios-fixed\', value: tempPlanOtherCustomer || dayPlanContent, onBlur: _this2.handleTextAreaChange.bind(_this2), onClick: _this2.handlerAreaClick.bind(_this2) })\n        ),\n        buttonNum == 1 ? React.createElement(\'div\', { style: { "height": "50px", "background": "#F0EFF5" } }) : React.createElement(\n          \'div\',\n          { className: \'ysp-tempvisit-accordion-btn\',\n            onClick: function onClick(e) {\n              var target = e.target;\n              var handler = _this2.props.customHandler;\n              target.disabled = true;\n              setTimeout(function (e) {\n                target.disabled = false;\n              }, 3000);\n              if (handler) {\n                handler({\n                  data: {\n                    \'textArea\': textArea,\n                    \'selectedCount\': selectedCount,\n                    \'tempAreaText\': tempAreaText\n                  },\n                  eventType: \'ascertain\'\n                });\n              }\n              // let executeFn = () => {\n              //    let isShow = _this.props.customData &&  _this.props.customData.isShow;\n              //    if(isShow){\n              //        _this.ascertainTimeId = setTimeout(executeFn.bind(_this),100);\n              //    }else{\n              //        _this.setState({open:false});\n              //    }\n              // }\n              // executeFn();\n            }\n          },\n          React.createElement(\n            AMUI.Button,\n            {\n              amStyle: \'secondary\',\n              amSize: \'lg\',\n              block: true\n            },\n            \'\\u786E\\u5B9A\'\n          )\n        ),\n        React.createElement(\n          _yspCustomComponents.Dialog,\n          { close: !_this2.state.open },\n          React.createElement(_yspCustomComponents.CustomHeader, {\n            data: { centerText: _this2.state.title == "\u5BA2\u6237" ? "\u5BA2\u6237" : "\u95E8\u5E97", rightText: "\u7B5B\u9009" },\n            backIsShow: true,\n            back: function back() {\n              _this2.setState({ open: false, title: "" });\n            },\n            filterIsShow: false,\n            filter: function filter() {\n              console.info("header filter ...");\n            }\n          }),\n          React.createElement(_yspCustomComponents.CustomerSerch, {\n            placeholder: \'\\u641C\\u7D22\',\n            commitStateBtn: _this2.state.commitStateBtn,\n            click: _this2.searchClick.bind(_this2),\n            buttonState: _this2.state.buttonState,\n            commitState: _this2.state.commitState,\n            width: _this2.state.width,\n            flag: _this2.state.flag\n          }),\n          React.createElement(\n            \'div\',\n            { className: \'ysp-tempvisit-list-wrapper\' },\n            datas && datas.length == 0 && flag && flag == true && loadingFlag == null ? React.createElement(\n              \'div\',\n              { className: \'ysp-no-datas\', style: { height: \'62vh\' } },\n              React.createElement(\'div\', null),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n              )\n            ) : datas.map(function (items, index) {\n              return React.createElement(\n                \'div\',\n                { key: index, className: \'ysp-tempvisit-list-item\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      {\n                        className: items[0] ? "ysp-checkout-wrapper checked" : "ysp-checkout-wrapper unchecked", onClick: function onClick(e) {\n                          var handler = _this2.props.customHandler;\n                          if (handler) {\n                            handler({\n                              eventType: \'checkClick\',\n                              data: {\n                                clickIndex: parseInt(index)\n                              }\n                            });\n                          }\n                        } },\n                      React.createElement(\'span\', null)\n                    )\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      items[1]\n                    ),\n                    React.createElement(\n                      \'span\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        \'\\u9500\\u552E\\u4EBA\\u5458\\uFF1A\',\n                        items[2].split(\'\uFF1A\')[0]\n                      ),\n                      React.createElement(\n                        \'span\',\n                        null,\n                        items[2].split(\'\uFF1A\')[1]\n                      )\n                    ),\n                    React.createElement(\n                      \'span\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        React.createElement(\n                          \'span\',\n                          null,\n                          items[3].split(\'\uFF1A\')[0],\n                          \'\\uFF1A\'\n                        ),\n                        React.createElement(\n                          \'span\',\n                          null,\n                          items[3].split(\'\uFF1A\')[1]\n                        )\n                      ),\n                      React.createElement(\n                        \'span\',\n                        null,\n                        React.createElement(\n                          \'span\',\n                          null,\n                          items[4].split(\'\uFF1A\')[0],\n                          \'\\uFF1A\'\n                        ),\n                        React.createElement(\n                          \'span\',\n                          null,\n                          items[4].split(\'\uFF1A\')[1]\n                        )\n                      )\n                    )\n                  )\n                )\n              );\n            })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp-tempvisit-list-footer\' },\n            React.createElement(\'div\', null),\n            datas && datas.length == 0 ? React.createElement(\'div\', null) : React.createElement(\n              \'div\',\n              { onClick: function onClick() {\n                  _this2.setState({\n                    open: false,\n                    title: ""\n                  });\n                } },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u786E\\u5B9A\'\n              )\n            )\n          ),\n          datas && datas.length == 0 ? React.createElement(\'div\', null) : React.createElement(_yspCustomComponents.Page, {\n            pageState: pageState,\n            prevState: prevState,\n            nextState: nextState,\n            prev: function prev(e) {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  data: "prev",\n                  eventType: \'prev\'\n                });\n              }\n              e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n            },\n            currentPage: currentPage,\n            pageNumber: numberTaotal,\n            next: function next(e) {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  data: "next",\n                  eventType: "next"\n                });\n              }\n              e.target.previousSibling.querySelector(\'input\').value = \'\';\n            },\n            Click: function Click(e) {\n              var handler = _this2.props.customHandler;\n              var target = e.target;\n              // target.value = target.value.replace(/[^0-9]/g,\'\')\n              var value = target.parentElement.querySelector(\'input\').value;\n              value = value.replace(/[^0-9]/g, \'\');\n              if (handler) {\n                handler({\n                  data: value,\n                  eventType: \'GO\'\n                });\n              }\n              setTimeout(function () {\n                target.parentElement.querySelector(\'input\').value = "";\n              }, 1000);\n            },\n            Change: function Change(e) {\n              var target = e.target;\n              target.value = target.value.replace(/[^0-9]/g, \'\');\n            }\n          })\n        )\n      );\n    };\n\n    _this2.state = {\n      open: false,\n      title: \'\',\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: \'flag\'\n    };\n    _this2.clickCustomer = _this2.clickCustomer.bind(_this2);\n    _this2.clickStore = _this2.clickStore.bind(_this2);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({\n        eventType: \'AndroidBack\'\n      });\n    }\n    //\u70B9\u51FB\u5BA2\u6237\n\n    //\u70B9\u51FB\u95E8\u5E97\u5217\u8868\u5427\n\n  }, {\n    key: \'handleTextAreaChange\',\n\n    //\u81EA\u5B9A\u4E49textarea\u7684change\u4E8B\u4EF6\u5904\u7406\n    value: function handleTextAreaChange(e) {\n      var target = e.target;\n      if (target.tagName.toLowerCase() === \'textarea\') {\n        // this.setState({\n        //   tempPlanOtherCustomerValue: target.value\n        // });\n        var handler = this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'textareaChange\',\n            data: {\n              value: target.value\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: \'handlerAreaClick\',\n    value: function handlerAreaClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'handlerClick\'\n        });\n      }\n    }\n\n    //\u641C\u7D22\u65B9\u6CD5\n\n  }, {\n    key: \'searchClick\',\n    value: function searchClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            queryValue: e.target.previousSibling.value\n          },\n          eventType: \'query\'\n        });\n      }\n      this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false\n      });\n      e.target.previousSibling.value = \'\';\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control313_lVpVUl: function (elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }if (ysp.customHelper.tipMsg.cancelText()) {
        data.cancel = ysp.customHelper.tipMsg.cancelText();
      } else {
        data.cancel = "";
      }return data;
    },
    doAction_uiControl304_TGm3ta: function (data, elem) {
      if (data.eventType == "confirmClick") {
        ysp.customHelper.tipMsg.confirm();
      }if (data.eventType == "cancelClick") {
        ysp.customHelper.tipMsg.cancel();
      }
    },
    getTemplate_uiControl304_TGm3ta: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tAlert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render(){\n    var dataMessage = (this.props.customData && this.props.customData.postMessage) || "";\n    var dataCancel = (this.props.customData && this.props.customData.cancel) || "";\n     return(\n    \t<div>\n        {dataMessage =="" ? "" : \n          <Alert\n            content={dataMessage}\n            cancelText={dataCancel}\n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:"confirmClick"\n                  })\n                }\n              }\n            }\n            cancel={\n             (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:"cancelClick"\n                  })\n                }\n              }\n           }\n          />\n        }\n      </div>\n    )\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var dataMessage = this.props.customData && this.props.customData.postMessage || "";\n      var dataCancel = this.props.customData && this.props.customData.cancel || "";\n      return React.createElement(\n        \'div\',\n        null,\n        dataMessage == "" ? "" : React.createElement(_yspCustomComponents.Alert, {\n          content: dataMessage,\n          cancelText: dataCancel,\n          dismiss: function dismiss(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: "confirmClick"\n              });\n            }\n          },\n          cancel: function cancel(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: "cancelClick"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "workPlanCustomStore");
})(window, ysp);