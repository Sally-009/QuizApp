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
    'SELECT * FROM users',
    function(err, rows, fields) {
      if (!err)
      console.log("\nSuccessfully queried users table!\n");
      res.send(rows); // send the result (JSON format)
    }
  );

  // close the connection
  connection.end();

});

module.exports = router;


/* 
    how to get a parameter from the URL
    todo-list-server >> index.js
*/