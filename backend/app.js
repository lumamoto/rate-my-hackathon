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

app.get('/', (req, res) => res.send('Hello world!'));

app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../fronted/build'))
})

const port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});