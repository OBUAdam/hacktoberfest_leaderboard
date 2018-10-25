const axios = require('axios');
const mongoose = require('mongoose');

const Participant = require('../models/Participant');


// If not in production, set environment variables from .env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  GH_ID,
  GH_SECRET
} = process.env;

// Connect to the database
const DB_CONNECTION_STRING = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose
  .connect(DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database: ${DB_NAME}`))
  .catch(err => console.log(err));

axios("https://raw.githubusercontent.com/austinwk/2018_hacktoberfest_participants/master/participants.json")
  .then(participants => {
    let requests = [];

    participants.data.forEach(participant => {
      const { githubUserName } = participant;
      let request = axios(`https://api.github.com/search/issues?client_id=${GH_ID}&client_secret=${GH_SECRET}&q=author:${githubUserName}+type:pr+created:>=2018-10-01T00:00:00`)
        .then(gitHubStats => gitHubStats.data);

      requests.push(request);
    });

    Promise.all(requests)
      .then(gitHubStats => {
        const profiles = gitHubStats.map((stats, index) => {
          const { githubUserName, displayName } = participants.data[index];
          const numPullReq = stats.total_count;

          return { displayName, githubUserName, numPullReq };
        });

        profiles.forEach(profile => {
          Participant
            .findOneAndUpdate(
              { githubUserName: profile.githubUserName },
              profile,
              { new: true, upsert: true }
            )
            .then((error, obj) => {
              mongoose.disconnect();
            });
        });
      });
  })
  .catch(error => console.log(error));