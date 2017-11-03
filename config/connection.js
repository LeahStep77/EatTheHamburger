var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "",
  user: "root",
  password: "",
  database: "hamburger_db"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected");
});
module.exports = connection;