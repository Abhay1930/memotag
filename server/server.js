const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
let pool;
let dbConnected = false;

try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://memotag_user:daeTxdJnAUPCWUrDS6X7jdamsQ7xxpvN@dpg-cvtojs49c44c738orhe0-a.oregon-postgres.render.com/memotag_6o7s',
    ssl: {
      rejectUnauthorized: false
    },
    connectionTimeoutMillis: 5000 // 5 second timeout
  });

  // Test the connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection failed:', err);
      dbConnected = false;
    } else {
      console.log('Database connection successful');
      dbConnected = true;
    }
  });

  console.log('Database connection initialized');
} catch (error) {
  console.error('Error initializing database connection:', error);
  dbConnected = false;
}

// Initialize database tables
const initDatabase = async () => {
  if (!pool || !dbConnected) {
    console.log('Skipping table creation - no database connection');
    return;
  }

  try {
    // Create contacts table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        user_type VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create waitlist table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        user_type VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error);
  }
};

// Initialize database
initDatabase();

// Routes
app.get('/', (_req, res) => {
  res.send('MemoTag API is running');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, userType } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Check if database connection is available
    if (!pool || !dbConnected) {
      console.log('No database connection available - storing contact in memory only');
      // For demo purposes, we'll just return success
      return res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully (demo mode)',
      });
    }

    // Insert into database
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message, user_type) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, message, userType]
    );

    console.log('Contact form submission saved with ID:', result.rows[0].id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: result.rows[0].id
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Waitlist signup endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, userType } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Check if database connection is available
    if (!pool || !dbConnected) {
      console.log('No database connection available - storing waitlist signup in memory only');
      // For demo purposes, we'll just return success
      return res.status(201).json({
        success: true,
        message: 'Added to waitlist successfully (demo mode)',
      });
    }

    // Insert into database
    const result = await pool.query(
      'INSERT INTO waitlist (email, user_type) VALUES ($1, $2) RETURNING id',
      [email, userType || 'unknown']
    );

    console.log('Waitlist signup saved with ID:', result.rows[0].id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Added to waitlist successfully',
      waitlistId: result.rows[0].id
    });
  } catch (error) {
    // Check for duplicate email error
    if (error.code === '23505') { // PostgreSQL unique constraint violation
      return res.status(409).json({
        success: false,
        message: 'This email is already on our waitlist'
      });
    }

    console.error('Error adding to waitlist:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
