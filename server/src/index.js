const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/participantRoutes');


// If not in production, set environment variables from ./.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  process.env.PORT = 5000;
}

// Get environment variables
const {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  PORT
} = process.env;

// Connect to the database
const DB_CONNECTION_STRING = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose
  .connect(DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database: ${DB_NAME}`))
  .catch(err => console.log(err));

// Start server
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

routes(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));