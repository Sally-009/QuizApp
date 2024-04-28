var express = require("express");
var router = express.Router();

// import SQL connection
const mysql = require("mysql2");

router.post("/", function (req, res) {

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

    // Query the database to add audit information
    connection.query(
      "INSERT INTO loginlog (UserID,DateAttempted) VALUES (?, ?)",
      [req.body.userID, req.body.date,],
      (err, results) => {
        if (err) {
          console.error("Error querying audit table:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        // show the result
        console.log("Query results:", results);

        // Return the audit information
        return res
          .status(200)
          .json({ message: "Audit information added successfully" });
      }
    );      

    // Close the connection
    connection.end();
});

module.exports = router;
