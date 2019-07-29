var wrapper = document.querySelector('.wrapper');
if(wrapper){
	var href = wrapper.ownerDocument.defaultView.document.location.href;
  //如果匹配的地址正确，则将.wrapper里面的html清空
  if(href && href.indexOf('configType') != -1){
    wrapper.style.display = 'none';
  }
}