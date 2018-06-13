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

var sql = "ALTER TABLE users_data ADD UNIQUE (PhoneNumber)";
  con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table altered!");
   });

  var sql = "ALTER TABLE users_data ADD admin_check INT";
  con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table altered!");
   });

  // var sql = "CREATE TABLE users_data (ID int PRIMARY KEY NOT NULL AUTO_INCREMENT, FirstName VARCHAR(255), LastName VARCHAR(255), Email VARCHAR(255), DateOfBirth DATE, PhoneNumber VARCHAR(10))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  //  con.query("INSERT INTO users_data (FirstName,LastName,Email,DateOfBirth,PhoneNumber) values ('Popescu','Ion','popescuion@gmail.com','1997-08-10','0775671324')", function (err, result, fields) {
  //  if (err) throw err;
  //  console.log(result);
  //  });
  //  con.query("INSERT INTO users_data (FirstName,LastName,Email,DateOfBirth,PhoneNumber) values ('Breazu','Maria','breazumaria@gmail.com','2002-03-22','0775582324')", function (err, result, fields) {
  //  if (err) throw err;
  //  console.log(result);
  //  });
  //  con.query("INSERT INTO users_data (FirstName,LastName,Email,DateOfBirth,PhoneNumber) values ('Poiana','Matei','poianamatei@gmail.xampcom','1989-11-18','0748982356')", function (err, result, fields) {
  //  if (err) throw err;
  //  console.log(result);
  //  });


  
 });