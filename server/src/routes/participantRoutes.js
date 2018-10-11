import {
  getParticipants,
  addNewParticipant,
  getParticipantWithId,
  updateParticipant,
  deleteParticipant
} from '../controllers/participantController';

const routes = (app) => {
  app.route('/participant')
    .get((req, res, next) => {
      // Middleware
      console.log(`${req.method} request from: ${req.originalUrl}`)
      next();
    }, getParticipants)

    .post((req, res, next) => {
      // Middleware
      console.log(`${req.method} request from: ${req.originalUrl}`)
      next();
    }, addNewParticipant);

  app.route('/participant/:participantId')
    .get((req, res, next) => {
      // Middleware
      console.log(`${req.method} request from: ${req.originalUrl}`)
      next();
    }, getParticipantWithId)

    .put(updateParticipant)

    .delete(deleteParticipant);
};

export default routes;