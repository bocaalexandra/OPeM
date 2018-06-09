var mysql = require('mysql');
var created = true;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  if(created == false)
  	{
  		con.query("CREATE DATABASE mydb", function (err, result) {
    	if (err) throw err;
    	console.log("Database created");
    	});
    	created = true;
    }

  var sql = "CREATE TABLE users (UserID int, FOREIGN KEY (UserID) REFERENCES users_data(ID), Email VARCHAR(50), Password VARCHAR(50))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  con.query("INSERT INTO users (UserID,Email,Password) values (1,'popescuion@gmail.com','1234567')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });
   con.query("INSERT INTO users (UserID,Email,Password) values (2,'breazumaria@gmail.com','iammaria')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
    });
   con.query("INSERT INTO users (UserID,Email,Password) values (3,'poianamatei@gmail.com','thisismypass')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });

});