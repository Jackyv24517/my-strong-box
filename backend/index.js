const app = require('./app'); // Import the Express application

const port = process.env.PORT || 3001; // Define the port

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
