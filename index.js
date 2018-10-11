const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const participants = require('./routes/api/participants');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/participants', participants);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));