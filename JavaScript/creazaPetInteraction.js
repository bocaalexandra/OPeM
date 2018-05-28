document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('#creaza').addEventListener('click',function(){
		if(creaza_pet(document.getElementById('nume').value,document.getElementById('autor').value,document.getElementById('pet-text').value))
			console.log('succes');			
	});
});


function creaza_pet(nume,autor,text){
	return true
}