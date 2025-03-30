const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // ✅ Enable JSON parsing before defining routes
app.use(bodyParser.urlencoded({ extended: true }));  // ✅ Allow form data parsing

// Database connection
const db = mysql.createConnection({
  host: 'localhost',  
  user: 'root',       
  password: '',       
  database: 'sweetspot' 
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// 🛠️ Debugging: Check if req.body is received
app.use((req, res, next) => {
    console.log(`📩 Incoming Request: ${req.method} ${req.url}`);
    console.log("📦 Request Body:", req.body);
    next();
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: "❌ Email and Password are required!" });
    }

    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).json({ message: "Database error", error: err });
        }

        if (results.length > 0) {
            res.status(200).json({ message: "✅ Login successful", user: results[0] });
        } else {
            res.status(401).json({ message: "❌ Invalid email or password" });
        }
    });
});

// Register Route
app.post('/register', (req, res) => {
    const { fullName, email, contact, gender, dob, license, plate, password } = req.body;

    if (!fullName || !email || !contact || !gender || !dob || !license || !plate || !password) {
        return res.status(400).json({ message: "❌ All fields are required!" });
    }

    const sql = 'INSERT INTO users (full_name, email, contact, gender, dob, license, plate, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [fullName, email, contact, gender, dob, license, plate, password], (err, result) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(201).json({ message: "✅ Registration successful!" });
    });
});

// Test database connection
db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
        console.error("❌ Database Connection Failed:", err);
    } else {
        console.log("✅ Database Connected Successfully:", results);
    }
});

// Start the server
app.listen(5000, '0.0.0.0', () => {
    console.log('🚀 Server running on port 5000');
});
