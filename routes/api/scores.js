const express = require('express');
const axios = require('axios');

const router = express.Router();

// @route   GET api/participants
// @desc    Get all participants
// @access  Public
router.get('/', (req, res) => {
  githubUserName = "kacollins"
  axios
    .get(`https://api.github.com/search/issues?q=author:${githubUserName}+type:pr+created:>=2018-10-01T00:00:00`)
    .then(res => console.log(res.data.total_count))
    .catch(error => console.log(error.response.statusText))
});

module.exports = router;