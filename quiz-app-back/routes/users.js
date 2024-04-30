var express = require('express');
var router = express.Router();

// import SQL connection
const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res, next) {

  // connect to the database
  const connection = mysql.createConnection({
    host: '127.0.0.1',  // hostname for the database
    user: 'root',        // username
    password: 'skojima', // password
    database: 'QuizApp', // database name
  });

  /// query users table
  connection.query(
    "SELECT u.*, l.LastLoginDate FROM users u LEFT JOIN (SELECT userID, MAX(DateAttempted) AS LastLoginDate FROM loginlog GROUP BY userID) l ON u.userID = l.userID",
    function (err, rows, fields) {
      if (!err) console.log("\nSuccessfully queried users table!\n");
      res.send(rows); // send the result (JSON format)
    }
  );

  // close the connection
  connection.end();

});

// Add a new user
router.post('/', function(req, res, next) {

  // connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // hostname for the database
    user: "root", // username
    password: "skojima", // password
    database: "QuizApp", // database name
  });

  // get the data from the request
  const { email, password } = req.body;

  // insert a new user
  connection.query(
    `INSERT INTO Users (Email, Password, IsAdmin) VALUES ('${email}', '${password}', 0)`,
    function (err, rows, fields) {
      if (err) {
        console.error("\nError inserting a new user:", err);
        // send error message
        res.status(500).send({ message: "Internal server error" });
      } else {
        console.log("\nSuccessfully inserted a new user!\n");
        // send success message
        res.status(201).send({ message: "Successfully inserted a new user!" });
      }
    }
  );
});

module.exports = router;


/* 
    how to get a parameter from the URL
    todo-list-server >> index.js
*/