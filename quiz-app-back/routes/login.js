const express = require("express");
const router = express.Router();

// import SQL connection
const mysql = require("mysql2");

router.post("/", (req, res) => {
  const { email, hashedPassword } = req.body; // Get email and hashedPassword from request body

  console.log("POST Data:", req.body);
  console.log("Email:", email);
  console.log("Hashed Password:", hashedPassword);

  // Connect to the database
  const connection = mysql.createConnection({
    host: "127.0.0.1", // Hostname for the database
    user: "root", // Username
    password: "skojima", // Password
    database: "QuizApp", // Database name
  });

  // Query the database to retrieve user information
  connection.query(
    "SELECT Email, Password FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error querying users table:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      // show the result
      console.log("Query results:", results);

      // Check if user exists
      if (results.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      // User found, compare passwords
      const user = results[0];
      if (hashedPassword !== user.Password) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      // Passwords match, authentication successful
      console.log("Login successful");
      res.json({ message: "Login successful", user });
    }
  );

  // Close the connection
  connection.end();
});

module.exports = router;
