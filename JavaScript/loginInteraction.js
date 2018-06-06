document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#loginButton').addEventListener('click', function () {
		if (login(document.getElementById('email').value, document.getElementById('psw').value))
			console.log("succes")
		else
			console.log("fail");
	})
})


function login(email, pasw) {
	let obj = {
		"email": email,
		"password": pasw
	}
	sendRequestLogin(obj)
		.then(handleResponse)
		.then(parseData)
		.catch((err) => {
			console.log(err)
			return undefined
		})
	return false;
}


function sendRequestLogin(obj) {
	return fetch("http://localhost:3000/login", {
		body: JSON.stringify(obj),
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		}
	})
}

function parseData(data){
	console.log(data)
	if(data["response"]==="succes")
		return true;
	else
		return false;
}

function handleResponse(resp){
	return new Promise((resolve,reject)=>{
		if(resp.status === 200)
	})
}