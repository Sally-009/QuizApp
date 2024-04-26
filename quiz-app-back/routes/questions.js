var express = require("express");
var router = express.Router();

// import SQL connection
const mysql = require("mysql2");

router.get("/:id", function (req, res){
  // connect to the database
    const connection = mysql.createConnection({
      host: "127.0.0.1", // hostname for the database
      user: "root", // username
      password: "skojima", // password
      database: "QuizApp", // database name
    });

    // get the parameters from the request
    const quizID = parseInt(req.params.id);

    console.log("QuizID:", quizID);

    // query questions table
    connection.query(
      "SELECT QuestionID, QuestionText, QuestionImageURL FROM Questions WHERE quizid = ?",
      [quizID],
      function (err, rows, fields) {
        if (err) {
          console.error("Error querying questions table:", err);
          res.status(500).send("Internal server error");
        } else {
          console.log("\nSuccessfully queried questions table!\n");
          res.send(rows); // send the result (JSON format)
        }
      }
    );

    // close the connection
    connection.end();
});

module.exports = router;