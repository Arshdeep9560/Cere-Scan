const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


require('dotenv').config();
const app = express();
app.use(express.json()); // Add this to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'cere',
  port: 3306
});

// Registration route
app.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;
  
  // Validate input
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
    [name, email, phone, hashedPassword],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ message: 'User registered successfully!' ,
        user: { name, email, phone }
      });
    }
  );
});


// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid email' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email, phone: user.phone} });
  });
});


// Protected route example
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}`);
  } else {
    res.redirect('/auth/google');
  }
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



// Endpoint to handle form submission
app.post('/api/contact', (req, res) => {
  const { email, subject, message } = req.body;

  // Save the form data to MySQL
  const query = 'INSERT INTO contacts (email, subject, message) VALUES (?, ?, ?)';
  db.query(query, [email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    console.log('Received data for email:', req.body);
   
    
});
  });






const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
