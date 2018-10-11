import mongoose from 'mongoose';

import { ParticipantSchema } from '../models/participantModel';


const Participant = mongoose.model('Participant', ParticipantSchema);

export const getParticipants = (req, res) => {
  Participant.find({}, (err, participant) => {
    if (err) {
      res.send(err);
    }
    res.json(participant);
  })
};

export const addNewParticipant = (req, res) => {
  let newParticipant = new Participant(req.body);

  newParticipant.save((err, participant) => {
    if (err) {
      res.send(err);
    }
    res.json(participant);
  });
};

export const getParticipantWithId = (req, res) => {
  Participant.findById(req.params.participantId, (err, participant) => {
    if (err) {
      res.send(err);
    }
    res.json(participant);
  });
};
  
export const updateParticipant = (req, res) => {
  Participant.findOneAndUpdate(
    { _id: req.params.participantId },
    req.body,
    { new: true },
    (err, participant) => {
      if (err) {
        res.send(err);
      }
      res.json(participant);
    });
};
  
export const deleteParticipant = (req, res) => {
  Participant.remove({ _id: req.params.participantId }, (err, participant) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted participant'});
  });
};