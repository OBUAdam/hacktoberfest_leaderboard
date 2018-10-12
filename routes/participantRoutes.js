const getParticipants = require('../controllers/participantController');

const routes = (app) => {
  app.route('/participant')
    .get((req, res, next) => {
      // Middleware
      console.log(`${req.method} request from: ${req.originalUrl}`)
      next();
    }, getParticipants)
};

module.exports = routes;