const express = require('express');
const router = express.Router();

// Item Model
const Participant = require('../../models/Participant');

// @route   GET api/participants
// @desc    Get all participants
// @access  Public
router.get('/', (req, res) => {
    Participant.find()
        .sort({ numPullReq: -1 })
        .then(items => res.json(items))
});

module.exports = router;