var express = require("express");
var router = express.Router();

var mysql = require("mysql2");

/* GET home page. */
router.post("/", function (req, res) {
  const { QuestionID, UserAnswer } = req.body; // Get questionID and userChoice from request body

  console.log("POST Data:", req.body);
  console.log("QuestionID:", QuestionID);
  console.log("User Answer:", UserAnswer);

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

  // Query the user's choice to validate
    connection.query(
      "SELECT IsCorrect FROM answers WHERE QuestionID = ? AND AnswerText = ?",
      [QuestionID, UserAnswer],

      (err, results) => {
        if (err) {
          console.error("Error querying answers table:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        // show the result
        console.log("Query results:", results);
        console.log("IsCorrect:", results[0].IsCorrect);

        // Check if user's choice is correct
        return res.status(200).json({ isCorrect: results[0].IsCorrect });
      }
    );

  // Close the connection
    connection.end();
});

module.exports = router;
