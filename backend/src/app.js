// Import necessary packages
const express = require('express');
require('dotenv').config(); // Load environment variables

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, myStrongBox!');
});

// Export the app for use in other files, such as index.js
module.exports = app;
