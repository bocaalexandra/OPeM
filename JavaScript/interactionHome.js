document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#searchBtn').addEventListener('click', function () {
		let obj = {
			what: "search",
			searchText: document.getElementById("search").value
		}
		getDataFromServer(obj)
			.then(handleResponse)
			.then(putInTable)
	});

	document.querySelector("#petitiiPopulare").addEventListener('click',function(){
		let obj={
			what: "petitiiPopulare"
		}
		getDataFromServer(obj)
			.then(handleResponse)
			.then(putInTable)
	})

	document.querySelector("#petitiiRecente").addEventListener('click',function(){
		let obj={
			what: "petitiiRecente"
		}
		getDataFromServer(obj)
			.then(handleResponse)
			.then(putInTable)
	})

});

function getDataFromServer(obj) {
	return fetch("http://localhost:3000/ordine", {
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

function putInTable(petitii) {
	let table = document.getElementById('createTable')
	table.innerHTML = ''
	obj.innerHTML = '<tr><th>Nume Petitie</th><th>Data Creari</th><th>Scurta descriere</th><th>Numar Semnaturi</th><th>Autor</th></tr>'
	for (let i = 0; i < petitii.message.length; i++) {
		let date = new Date(petitii.message[i].Date)
		obj.innerHTML +=
			'<tr>' +
			'<td><a href="http://localhost:3000.">' + petitii.message[i].Title + '</a></td>' +
			'<td>' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</td>' +
			'<td>' + petitii.message[i].Description + '</td>' +
			'<td>305</td>' +
			'<td>EMINESCU</td>' +
			'</tr>'
	}
}