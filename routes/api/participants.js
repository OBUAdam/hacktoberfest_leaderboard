const express = require('express');
const axios = require('axios');

const router = express.Router();

// @route   GET api/participants
// @desc    Get all participants
// @access  Public
router.get('/', (req, res) => {
  axios("https://raw.githubusercontent.com/austinwk/2018_hacktoberfest_participants/master/participants.json")
    .then(participants => {
      let requests = [];

      participants.data.forEach(participant => {
        const { githubUserName } = participant;
        let request = axios(`https://api.github.com/search/issues?q=author:${githubUserName}+type:pr+created:>=2018-10-01T00:00:00`)
          .then(gitHubStats => gitHubStats.data);

        requests.push(request);
      });

      Promise.all(requests)
        .then(gitHubStats => {
          const profiles = gitHubStats.map(stats => {
            const numPullReq = stats.total_count;

            return { numPullReq };
          });

          res.send(profiles);
        })
    })
    .catch(error => console.log(error));
});

module.exports = router;