const mongoose = require('mongoose');

const ParticipantSchema = require('../models/participantModel');


const Participant = mongoose.model('Participant', ParticipantSchema);

const getParticipants = (req, res) => {
  Participant.find({}, (err, participant) => {
    if (err) {
      res.send(err);
    }
    res.json(participant);
  })
};

module.exports = getParticipants;
