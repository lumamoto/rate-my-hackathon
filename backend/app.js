const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const hackathons = require('./routes/api/hackathons');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/hackathons', hackathons);

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));