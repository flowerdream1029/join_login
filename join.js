var isChineseName = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
	var Pattern = /^[\u4E00-\u9FA5]{2,}$/g;
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
	if(Pattern.test(str) == false) {     
        promptMessage.innerHTML = '至少为两个汉字';
        obj.style.border = '1px solid red';
	}else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isEName = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[A-Za-z]+$/g; 
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
    if(Pattern.test(str) == false) {   	
        promptMessage.innerHTML = '必须为英文字母';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isSuitablePwd = function(obj) {
    // document.getElementById('input-pwd').type = 'text';
    console.log(obj.value);
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^(?!\d+$)(?![A-za-z]+$)[a-zA-Z0-9]{8,20}$/g;
    var promptMessage = obj.parentNode.nextElementSibling.children[0]; 
    if(Pattern.test(str) == false) {      
        promptMessage.innerHTML = '8~20个字符，必须包含大写或小写英文和数字';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isEmptyIdol = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
    if(str == "" || str == undefined || str == null) {
        promptMessage.innerHTML = '本命不可以为空';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isInt = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[0-9]{1,3}$/g; 
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = '1~3个字符，必须是正整数';
         obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isTelNumber = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^1[3|4|5|7|8]\d{9}$/g;
    var promptMessage = obj.parentNode.nextElementSibling.children[0]; 
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = '号码无效';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isMail = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/g; 
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = '邮箱无效';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isBetweenOneToNine = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[0-9]{1}$/g; 
    var promptMessage = obj.parentNode.nextElementSibling.children[0];
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = '幸运数字范围0~9';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isURL = function(obj) {
	var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g;
    var promptMessage = obj.parentNode.nextElementSibling.children[0]; 
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = 'url无效';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

var isMoreThanTwenty = function(obj) {
    var str = obj.value.replace(/(^\s*)|(\s*$)/g,'');
    var Pattern = /^[A-Za-z\u4E00-\u9FA5]{1,20}$/g;
    var promptMessage = obj.parentNode.nextElementSibling.children[0]; 
    if(Pattern.test(str) == false) {
        promptMessage.innerHTML = '1~20个字符';
        obj.style.border = '1px solid red';
    }else {
        promptMessage.innerHTML = '';
        obj.style.border = '';
    }
};

 var join = function(){
 	var userName = document.getElementById('user-name').value;
 	var userPwd = document.getElementById('input-pwd').value;

 	localStorage.setItem("username",userName);
    localStorage.setItem("userpwd",userPwd);

    var tr = document.getElementById('t-table').getElementsByTagName('tr');
 	var len = tr.length; 
 	var count = 0;
 	for(var i=0;i<len;i++){
 		if(tr[i].children[2].children[0].innerHTML === '' && tr[i].children[1].children[0].value !== ''){
 			count++;
 		}
 	}
 	if(count === len){
 		alert('注册成功');
 		window.location.href = 'login.html';
 	}else {
 		alert('请正确填写信息');
 	}
 }




