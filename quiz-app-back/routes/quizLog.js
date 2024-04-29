var express = require("express");
var router = express.Router();

// import SQL connection
const mysql = require("mysql2");

// POST quiz log information
router.post("/", function (req, res) {

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

  // variable to store the quiz log information
  const { UserID, QuizID, Score, DateTaken } = req.body;

    // Query the database to add quiz log information
    connection.query(
      "INSERT INTO userquizlog (UserID,QuizID,Score,DateTaken) VALUES (?, ?, ?, ?)",
      [UserID, QuizID, Score, DateTaken],
      (err, results) => {
        if (err) {
          console.error("Error querying quizlog table:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        // show the result
        console.log("Query results:", results);

        // Return the quiz log information
        return res
          .status(200)
          .json({ message: "Quiz log information added successfully" });
      }
    );


    // Close the connection
    connection.end();
});

// GET quiz log information
router.get("/:id", function (req, res) {

// Retrieve the user ID from the request parameters
const userID = parseInt(req.params.id);

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

  // Query the database to get quiz log information
  connection.query(
    "SELECT QuizID, DateTaken, Score FROM userquizlog WHERE UserID = ?",
    [userID],
    (err, results) => {
      if (err) {
        console.error("Error querying quizlog table:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      // Return the quiz log information
      return res.status(200).json(results);
    }
  );

  // Close the connection
  connection.end();
});

module.exports = router;
