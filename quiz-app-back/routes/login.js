const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// import SQL connection
const mysql = require("mysql2");

router.post("/", (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

    console.log("POST Data:", req.body);

  // show it in the console
    console.log("Email:", email);
    console.log("Password:", password);

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

  // Query the database to retrieve user information
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error querying users table:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      // Check if user exists
      if (results.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      // User found, compare passwords
      const user = results[0];
      bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
        if (bcryptErr) {
          console.error("Error comparing passwords:", bcryptErr);
          return res.status(500).json({ message: "Internal server error" });
        }

        if (!isMatch) {
          return res.status(400).json({ message: "Incorrect password" });
        }

        // Passwords match, authentication successful
        res.json({ message: "Login successful", user });
      });
    }
  );

  // Close the connection
  connection.end();
});

module.exports = router;
