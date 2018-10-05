const express = require('express');
const axios = require('axios');

const router = express.Router();

// @route   GET api/participants
// @desc    Get all participants
// @access  Public
router.get('/', (req, res) => {
  axios
    .get('https://raw.githubusercontent.com/austinwk/2018_hacktoberfest_participants/master/participants.json')
    .then(res => console.log(res.data));
});

module.exports = router;