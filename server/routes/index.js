const instrument = require('./api/instrument');
const questions = require('./api/questions');
const teachers = require('./api/teachers');
const courses = require('./api/courses');
const events = require('./api/events');
const users = require('./auth/users');
const auth = require('./auth/auth');

module.exports = app => {
  app.use('/api', courses);
  app.use('/api', events);
  app.use('/api', users);
  app.use('/api', auth);
  app.use('/api', teachers);
  app.use('/api', questions);
  app.use('/api', instrument);
};
