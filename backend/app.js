// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config(); // Load environment variables

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Construct MongoDB URI
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

// MongoDB connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// CORS configuration - set for temporarily dev used only
app.use(cors({
  origin: 'http://localhost:3000' // permitted frontend URL
}));


// Use Auth Routes with /api/auth prefix
app.use('/api/auth', authRoutes);


// Basic route for the default app response
app.get('/', (req, res) => {
  res.send('Hello, myStrongBox!');
});

// Export the app for use in other files, such as index.js
module.exports = app;
