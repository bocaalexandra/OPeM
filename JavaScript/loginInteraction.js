var firstLogin = true;

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#loginButton').addEventListener('click', function () {
		login(document.getElementById('email').value, document.getElementById('psw').value)
			.then((data) => {
				if (data.status === 200) {
					window.location = "http://localhost:3000/";
				}
				else {
					if(firstLogin)
					{
						let parent = document.getElementById('login')
						var span = document.createElement('loginFail');
						span.innerHTML = 'Login Failed. Please try again.';
						span.className = 'failLogin';
						span.style.color = 'red';
						span.appendChild(document.createElement("br"))
						parent.insertBefore(span, parent.firstChild)
						firstLogin = false
					}
				}
			})
	})
})


function login(email, pasw) {
	let obj = {
		"email": email,
		"password": pasw
	}
	return sendRequestLogin(obj)
		.then(handleResponse)
		.catch((err) => {
			return undefined
		})
}


function sendRequestLogin(obj) {
	return fetch("http://localhost:3000/login", {
		body: JSON.stringify(obj),
		method: 'POST',
		headers: {
			'content-type': 'application/json'
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