const express = require('express');
const cors = require('cors'); // Import cors for handling cross-origin requests
const mongoose = require('mongoose');
const Van = require('./models/van.model.js');
const vanRoute = require('./routes/van.route.js');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing JSON request bodies
app.use(express.urlencoded({ extended: false })); // For parsing URL-encoded request bodies

// API routes
app.use("/api/vans", vanRoute);

// Test route
app.get('/api/test', (req, res) => {
  res.json([
    { id: 1, name: 'Modest Explorer', price: '$60/day', details: 'A great van for exploring.' },
    { id: 2, name: 'The Cruiser', price: '$35/day', details: 'A comfortable van for cruising.' },
  ]);
});

// Root route
app.get('/', (req, res) => {
  res.send("Hello from node API updated");
});

// Database connection
mongoose
  .connect("mongodb+srv://seanmanyukwi:FyCQpAVDEGyGIbeh@bckendapi.urgmg.mongodb.net/Node2?retryWrites=true&w=majority&appName=BckendAPI")
  .then(() => {
    console.log("Connected to database!");
    // Start the server only after the database is connected
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error("Connection failed:", error.message);
  });
