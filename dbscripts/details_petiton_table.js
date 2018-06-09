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
  var sql = "CREATE TABLE details_petition (PetID int, FOREIGN KEY (PetID) REFERENCES petitions(PetitionID), Destination VARCHAR(50), EndDate Date, FullDescription VARCHAR(5000))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

   con.query("INSERT INTO details_petition (PetID,Destination,EndDate,FullDescription) values (1,'Guvern','2018-08-08','-full desc-')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });
   con.query("INSERT INTO details_petition (PetID,Destination,EndDate,FullDescription) values (2,'Regatul pisicilor','2018-08-28',' -full desc- ')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
    });
   con.query("INSERT INTO details_petition (PetID,Destination,EndDate,FullDescription) values (3,'Ministrul agriculturii','2018-08-10',' -full desc- ')", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
   });

});