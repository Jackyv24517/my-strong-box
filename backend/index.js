const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // for parsing application/json

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, myStrongBox!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
