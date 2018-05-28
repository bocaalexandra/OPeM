document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('#reg').addEventListener('click',function(){
		if(register(document.getElementById('email').value,document.getElementById('psw').value))
			console.log('succes');
	});
});

function register(email,pasw){
	return true;
}