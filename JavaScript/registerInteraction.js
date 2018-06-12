document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('#reg').addEventListener('click',function(){
		userData = {
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
			email : document.getElementById('email').value,
			password: document.getElementById('psw').value,
			phoneNumber: document.getElementById('phoneNumber').value,
			birthday : document.getElementById('birthday').value
		}
		register(userData)
		.then((data)=>{

		})
			
	});
});

function register(userData){
	return sendRequestRegister(userData)
	.then(handleResponse)
	.catch((err)=>{
		return undefined;
	})
}

function sendRequestRegister(userData){
	return fetch("http://localhost:3000/register",{
		body:JSON.stringify(userData),
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		}
	})
}

function handleResponse(resp) {
	return resp.json()
		.then(userData => {
			userData.status = resp.status;
			return userData
		})
		.catch(err => {
			reject();
		})
}