// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB database connection established successfully');
});


// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, myStrongBox!');
});

// Export the app for use in other files, such as index.js
module.exports = app;
