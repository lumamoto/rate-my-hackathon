const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
const connectDB = require('./config/db');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));
// Init Middleware
app.use(express.json({ extended: false }));

// API
// Routes
const hackathons = require('./routes/api/hackathons');
// Use Routes
app.use('/api/hackathons', hackathons);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req, res) => res.send('Hello world!'));

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    console.log('using index.html')
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

const port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});