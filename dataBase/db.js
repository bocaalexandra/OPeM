var mysql = require('mysql');
var created = true;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   if(created == false)
//   	{
//   		con.query("CREATE DATABASE mydb", function (err, result) {
//     	if (err) throw err;
//     	console.log("Database created");
//     	});
//     	created = true;
//     }
//   var sql = "CREATE TABLE users (ID int PRIMARY KEY NOT NULL AUTO_INCREMENT, FirstName VARCHAR(255), LastName VARCHAR(255), Email VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
  
// });

module.exports = con