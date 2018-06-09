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
  var sql = "CREATE TABLE signatures (PetID int, FOREIGN KEY (PetID) REFERENCES petitions(PetitionID), UserID int, FOREIGN KEY (UserID) REFERENCES users_data(ID), Date DATE, Location VARCHAR(1000))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

   con.query("INSERT INTO signatures (PetID,UserID,Date,Location) values (1,2,'2018-05-12','Suceava')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });
   con.query("INSERT INTO signatures (PetID,UserID,Date,Location) values (2,3,'2018-06-20','Galati')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
    });
   con.query("INSERT INTO signatures (PetID,UserID,Date,Location) values (3,1,'2018-05-18','Cluj')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });

  });