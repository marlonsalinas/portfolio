// Import dependencies
const express = require('express');
const cors = require("cors");

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json')

// Create app object
const app = express();

// Middleware
app.use(cors());

// Home route for testing app
app.get('/', (req, res) => {
    res.send('This is the first day of the rest of my life. Any child of 6 could calculate the velocity of a falling object.');
});

// Route for project retrieval
app.get('/projects', (req, res) => {
    // Sends projects via JSON
    res.json(projects);
});

// Route for "about" info retrieval
app.get('/about', (req, res) => {
    // Sends about info via JSON
    res.json(about);
});

// Port number
const PORT = process.env.PORT || 3000;

// Server Listener
app.listen(PORT, () => console.log(`Lending an ear on port ${PORT}`));