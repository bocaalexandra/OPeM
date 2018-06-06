document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('#loginPage').addEventListener('click',function(){
		console.log("here")
		fetch("http://localhost:3000/login.html")
	})
})