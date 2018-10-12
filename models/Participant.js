const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  githubUserName: {
    type: String,
    required: 'GitHub username required'
  },
  displayName: {
    type: String,
    required: 'Display name required'
  },
  numPullReq: {
    type: Number,
    required: 'Number of pull requests required'
  }
}, { timestamps: true });

module.exports = Participant = mongoose.model('participant', ParticipantSchema);
