document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('#loginButton').addEventListener('click',function(){
		if(login(document.getElementById('email').value,document.getElementById('psw').value))
			console.log('succes')
	})
})


function login(email,psw){
	return true
}