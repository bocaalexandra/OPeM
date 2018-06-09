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
  var sql = "CREATE TABLE petitions (PetitionID int PRIMARY KEY NOT NULL AUTO_INCREMENT, UserID int, FOREIGN KEY (UserID) REFERENCES users_data(ID), Date DATE, Title VARCHAR(200), Description VARCHAR(3000))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

   con.query("INSERT INTO petitions (UserID,Date,Title,Description) values (2,'2018-04-23','Salveaza planeta',' -soon to be- ')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });
   con.query("INSERT INTO petitions (UserID,Date,Title,Description) values (1,'2018-05-19','Cats take over the world',' -soon to be- ')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
    });
   con.query("INSERT INTO petitions (UserID,Date,Title,Description) values (3,'2018-02-04','Save the forest',' -soon to be- ')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });
  
 });