function demoPDF() {
    var doc = new jsPDF();
    doc.text(20, 40, 'Hello, this pdf will provide you the latest data about your petition:');

    doc.setFont("times");
	
    doc.setFontType("italic");

    doc.setTextColor(67, 60, 78);

    var titlu = document.getElementById("titlu");
    var name = titlu.textContent || titlu.innerText || titlu.Value;
    doc.text(50, 60, name);	
    
    var creare = document.getElementById("creare");
    var name = creare.textContent || creare.innerText;
    doc.text(50, 70, name); 

    var nr = document.getElementById("nr");
    var name = nr.textContent || nr.innerText;
    doc.text(50, 80, name);

    var autor = document.getElementById("autor");
    var name = autor.textContent || autor.innerText;
    doc.text(50, 90, name);		

    var dest = document.getElementById("dest");
    var name = dest.textContent || dest.innerText;
    doc.text(50, 100, name); 

    var stare = document.getElementById("stare");
    var name = stare.textContent || stare.innerText;
    doc.text(50, 110, name); 

    var exp = document.getElementById("exp");
    var name = exp.textContent || exp.innerText;
    doc.text(50, 120, name); 	

    doc.save('raport.pdf');					 // Save the PDF with name "katara"...
}
