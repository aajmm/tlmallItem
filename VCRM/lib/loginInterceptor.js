if (window.location.href.indexOf('login') !== -1) {
  function success(data) {
    console.info(data);
    if(data.loginFlag){
       window.location.href='http://192.168.220.82:8080/pttlCrm/res/index.html';
    }
  }

  function error(e) {
    showTipMsg('用戶名或密码错误或者登陆超时');
  }

  function validate() {
    //验证用户名和密码
    var loginNameEl = document.getElementById('loginName');
    if (loginNameEl.value == "") {
      showTipMsg("用户名不能为空！");
      return false;
    }
    var passwordEl = document.getElementById('password');
    if (passwordEl.value == "") {
      showTipMsg("密码不能为空！");
      return false;
    }
    return true;
  }

  function showTipMsg(msg) {
    var tipDiv = document.getElementById('loginTipMsg');
    if (!tipDiv) {
      tipDiv = document.createElement('div');
      tipDiv.id = "loginTipMsg";
      document.body.appendChild(tipDiv);
    }
    tipDiv.innerHTML = msg;
  }
  var loginBtn = document.getElementById('loginButton') || document.getElementById('loginButtonCopy');
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      if (validate()) {
        var loginNameEl = document.getElementById('loginName');
        if (loginNameEl) {
          var passwordEl = document.getElementById('password');
          if (passwordEl) {
            var password = passwordEl.value;
            var loginName = loginNameEl.value;
            var formData = new FormData();
            formData.append('loginName',loginName);
            formData.append('password',password);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  success(JSON.parse(xhr.responseText));
                } else {
                  error(xhr.status);
                }
              }
            }
            xhr.open('POST', 'http://192.168.220.82:8080/pttlCrm/login/loginIn', true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
            xhr.setRequestHeader('Accept','application/json, text/javascript, */*; q=0.01');
            xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
            xhr.send('loginName='+loginName+'&password='+password);
          }
        }
      }
    }, false);
    loginBtn.id = "loginButtonCopy";
  }
}