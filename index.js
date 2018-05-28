var http = require("http")
var fs  = require("fs")

fs.readFile('./home.html',function(err, html){
	if(err)
		throw err;

	http.createServer(function(req,res){
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.write(html);
		res.end();
	}).listen(3000);

})

