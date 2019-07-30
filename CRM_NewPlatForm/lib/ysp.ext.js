window.pt = window.pt || {};
//订阅模式
;(function(exports){
    function PSubscribe() {
        this.topicList = [];
    }

    PSubscribe.prototype = {

        subscribe: function(topic, cb, caller) {

            if (!cb || !topic) return;

            var exist = false;

            this.topicList.forEach(function(item) {
                if (item.topic === topic) {
                    exist = true;
                    item.list.push({
                        callback:cb,
                        caller:caller
                    });
                }
            });

            if (!exist) {
                this.topicList.push({
                    topic: topic,
                    list: [{
                        callback:cb,
                        caller:caller
                    }]
                });
            }
        },

        publish: function(topic, data) {
            this.topicList.forEach(function(item) {
                if (item.topic === topic) {
                item.list.forEach(function(listener) {
                    listener.callback.call(listener.caller ? listener.caller:null , data);
                });
                }
            });
        },

        remove: function(topic, cb){
            if (!cb || !topic) return; 
            this.topicList.forEach(function(item){
                if(item.topic === topic){
                if(Array.isArray(item.list)){
                    var start;
                    item.list.forEach(function(listener,index){
                        if(listener.callback === cb){
                            start = parseInt(index);
                        }
                    });
                    if(start !== undefined){
                        item.list.splice(start,1);
                    }   
                }
                }
            });
        }

    };

    exports.pt_oberseve = new PSubscribe();
})(window);
//工具包
;(function(exports){
    //获取元素距离viewport左侧绝对位置
    function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualLeft;
　　}
   //获取元素距离viewport上侧绝对位置
　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualTop;
　　}
   exports.utils = {
       getElementLeft:getElementLeft,
       getElementTop:getElementTop
   }
})(pt);

//解决fixed在IOS中抖动的bug
(function(exports){
    // 防止内容区域滚到底后引起页面整体的滚动
    
    function SmoothFixedLayout(){
        this.startY = null;    
        this.content = null;  
    }

    SmoothFixedLayout.prototype.listen = function(contentArg){
        var _this = this;
        if(!contentArg){
           return;
        }
        this.content = contentArg;
        this.touchstartFn = function (e) {
            _this.startY = e.touches[0].clientY;
        }
        this.content.addEventListener('touchstart', this.touchstartFn, false);

        this.touchmoveFn = function (e) {
            // 高位表示向上滚动
            // 底位表示向下滚动
            // 1容许 0禁止
            var status = '11';
            var ele = this;

            var currentY = e.touches[0].clientY;

            if (ele.scrollTop === 0) {
                // 如果内容小于容器则同时禁止上下滚动
                status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
            } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
                // 已经滚到底部了只能向上滚动
                status = '10';
            }

            if (status != '11') {
                // 判断当前的滚动方向
                var direction = currentY - _this.startY > 0 ? '10' : '01';
                // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
                if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                    e.preventDefault();
                }
            }
        }
        this.content.addEventListener('touchmove', this.touchmoveFn, false);
    }

    SmoothFixedLayout.prototype.destroy = function(){
        this.content.removeEventListener('touchstart',this.touchstartFn,false);
        this.content.removeEventListener('touchmove', this.touchmoveFn, false);
        this.touchstartFn = null;
        this.touchmoveFn = null;
        this.startY = null;
        this.content = null;
    };

    //exports.pt_smoothFixedLayout = new SmoothFixedLayout();
    exports.SmoothFixedLayout = SmoothFixedLayout;
    
})(window);
;(function(NS){
   var doc = NS.document;
   if(parent.EAPI.isIOS()){
        doc.addEventListener('focusin',function(e){
            var target = e.target;
            if(target && target.tagName.toLowerCase() === 'textarea' && target.classList.contains('compatibility-ios-fixed')){
                var parentElement = target;
                while(parentElement){
                    parentElement = parentElement.parentElement;
                    if(parentElement.classList.contains('ysp-dialog-wrapper')){
                        setTimeout(function(){
                            parentElement.classList.add('ysp-dialog-wrapper-absolute');
                            },100)
                        break;
                    }
                    if(parentElement.tagName.toLowerCase() === 'html'){
                        break;
                    } 
                }
            }
        },false);
        doc.addEventListener('focusout',function(e){
            var target = e.target;
            if(target && target.tagName.toLowerCase() === 'textarea' && target.classList.contains('compatibility-ios-fixed')){
                var parentElement = target;
                while(parentElement){
                    parentElement = parentElement.parentElement;
                    if(parentElement.classList.contains('ysp-dialog-wrapper')){
                        parentElement.classList.remove('ysp-dialog-wrapper-absolute');
                        break;
                    }
                    if(parentElement.tagName.toLowerCase() === 'html'){
                        break;
                    } 
                }
            }
        },false);
   }
})(window);
(function(NS){
   //获取绝对位置的横坐标
   function getElementLeft(elem){
       var actualLeft = elem.offsetLeft;
       var current = elem.offsetParent;
       while(current !== null){
           actualLeft += current.offsetLeft;
           current = current.offsetParent;
       }
       return actualLeft;
   } 
   //获取绝对位置的纵坐标
   function getElementTop(elem){
       var actualTop = elem.offsetTop;
       var current = elem.offsetParent;
       while(current !== null){
           actualTop += current.offsetTop;
           current = current.offsetParent;
       }
       return actualTop;
   }
   NS.getElementTop = getElementTop;
   NS.getElementLeft = getElementLeft;
})(window);
(function(NS){
    var ToolTip = function(elem){
        this.isTouchSupprted = 'ontouchend' in document;
        this.register(elem);
    };

    ToolTip.prototype.buildToolTip = function(msg){
        var tiptoolEl = this.delegate.querySelector('div[data-tiptool^="true"]');
        if(tiptoolEl){
            tiptoolEl.classList.add('ysp-tooltip-wrapper');
            tiptoolEl.style.display = "block";
            tiptoolEl.style.position = "absolute";
            var tipMsgEl = tiptoolEl.querySelector('div[class^="ysp-tooltip-content"]');
            tipMsgEl.innerHTML = msg;
            var overlayEl = tiptoolEl.querySelector('div[class^="ysp-tooltip-overlay"]');
            overlayEl.innerHTML = msg;
        }else{
            var root = document.createElement('div');
            root.setAttribute('data-tiptool',true);
            var overlay = document.createElement('div');
            overlay.classList.add('ysp-tooltip-overlay');
            var textNode = document.createTextNode(msg);
            overlay.appendChild(textNode);
            root.appendChild(overlay);
            this.overlay = overlay;
            var content = document.createElement('div');
            content.classList.add('ysp-tooltip-content');
            var textNode = document.createTextNode(msg);
            content.appendChild(textNode);
            root.appendChild(content);
            this.content = content;
            this.delegate.appendChild(root);
            tiptoolEl = root;
        }      
        return tiptoolEl;
    }

    ToolTip.prototype.reLayout = function(elem,offsetX,offsetY){
        var left = getElementLeft(elem);
        var top = getElementTop(elem);
        if(this.isTouchSupprted){
            this.toolTipEl.style.top = (top + offsetY + 15) + "px";
            this.toolTipEl.style.left = (left + offsetX + 30) + "px";
        }else{
            this.toolTipEl.style.top = (top + offsetY) + "px";
            this.toolTipEl.style.left = (left + offsetX) + "px";
        }  
    }

    ToolTip.prototype.hiddenToolTip = function(){
        var tiptoolEl = this.delegate.querySelector('div[data-tiptool^="true"]');
        if(tiptoolEl){
            tiptoolEl.style.display = "none"; 
        }
    }
   
    ToolTip.prototype._mouseoutFn = function(e){
       //this.hiddenToolTip();
    }
    
    ToolTip.prototype._mouseoverFn = function(e){
        var target = e.target;
        function execute(){
            if(target.getAttribute('data-item-tiptool')){
                this.toolTipEl = this.buildToolTip(target.textContent);
                var offsetY = e.offsetY;
                var offsetX = e.offsetX;
                this.reLayout(target,offsetX,offsetY);
            }else{
                this.hiddenToolTip();
            }
       }
       //重绘之前更新动画
       NS.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
       if(NS.requestAnimationFrame){
          NS.requestAnimationFrame(execute.bind(this));
       }else{
           execute();
       }
    }
  
    ToolTip.prototype._touchstartFn = function(e){
       this._startY = e.touches[0].clientY;
       this._startX = e.touches[0].clientX;
       var target = e.target;
       if(target.getAttribute('data-item-tiptool')){
          this.toolTipEl = this.buildToolTip(target.textContent);
          this.reLayout(target,0,0);
       }else{
          this.hiddenToolTip();
       }
    }
    ToolTip.prototype._touchendFn = function(e){
        //this.hiddenToolTip();
    //    var target = e.target;
    //    if(target.getAttribute('data-item-tiptool')){
    //       this.toolTipEl = this.buildToolTip(target.textContent);
    //       this.reLayout(target,0,0);
    //    }
    }
    
    ToolTip.prototype._touchmoveFn= function(e){
       var target = e.target;
       function execute(){
            if(target.getAttribute('data-item-tiptool')){
                this.toolTipEl = this.buildToolTip(target.textContent);
                var diffY = e.touches[0].clientY - this._startY;
                diffY = Math.abs(diffY) <= 10 ? diffY : diffY < 0 ? -10 : 10;
                var diffX = e.touches[0].clientX - this._startX;
                diffX = Math.abs(diffX) <= 30 ? diffX : diffX < 0 ? -30 : 30;
                this.reLayout(target,diffX,diffY);
            }else{
                this.hiddenToolTip();
            }
       }
       //重绘之前更新动画
       NS.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
       if(NS.requestAnimationFrame){
          NS.requestAnimationFrame(execute.bind(this));
       }else{
           execute();
       }
    }

    ToolTip.prototype.register = function(elem){
        this.delegate = elem;
        if(this.isTouchSupprted){
            this.touchstartFn = this._touchstartFn.bind(this);
            this.touchmoveFn = this._touchmoveFn.bind(this);
            this.touchendFn = this._touchendFn.bind(this);
            elem.addEventListener('touchstart',this.touchstartFn);
            elem.addEventListener('touchmove',this.touchmoveFn);
            elem.addEventListener('touchend',this.touchendFn);
        }else{
            this.mouseinFn = this._mouseoverFn.bind(this);
            this.mouseoutFn = this._mouseoutFn.bind(this);
            elem.addEventListener('mousemove',this.mouseinFn);
            elem.addEventListener('mouseout',this.mouseoutFn);
        }
        
    }

    ToolTip.prototype.unregister = function(elem){
        if(this.isTouchSupprted){
            this.delegate.removeEventListener('touchstart',this.touchstartFn);
            this.delegate.removeEventListener('touchmove',this.touchmoveFn);
            this.delegate.removeEventListener('touchend',this.touchendFn);
        }else{
            this.delegate.removeEventListener('mousemove',this.mouseinFn);
            this.delegate.removeEventListener('mouseout',this.mouseoutFn);
        }
    }
    NS.ToolTip = ToolTip;
})(window);