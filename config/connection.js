// Requires mysql
var mysql = require("mysql");


// Creates connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    //Port
    port: 3306,
    // Username
    user: "root",
    // Password
    password: "password",
    // DataBase
    database: "burgers_db"
  });
};

connection.connect();


// Test comment
module.exports = connection;