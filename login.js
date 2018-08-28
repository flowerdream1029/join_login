var userName = document.getElementById('user-name');
var userPwd = document.getElementById('user-pwd');

userName.value = localStorage.getItem('username');
userPwd.value = localStorage.getItem('userpwd');

function login(){
	alert('登陆成功');
}