var express = require("express");
var router = express.Router();

// import SQL connection
const mysql = require("mysql2");

/* GET users listing. */
router.get("/:id", function (req, res, next) {
  // connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // hostname for the database
    user: "root", // username
    password: "skojima", // password
    database: "QuizApp", // database name
  });

  // get the parameter from the URL
    const id = parseInt(req.params.id, 10);

  // query questions table
    connection.query(
        "SELECT * FROM questions WHERE quizid = ?",
        [id],
        function (err, rows, fields) {
        if (!err) console.log("\nSuccessfully queried questions table!\n");
        res.send(rows); // send the result (JSON format)
        }
    );
});

module.exports = router;