const instrument = require('./api/instrument');
const questions = require('./api/questions');
const teachers = require('./api/teachers');
const courses = require('./api/courses');
const events = require('./api/events');

const users = require('./users/users');
const auth = require('./users/auth');
const avator = require('./users/avator');

module.exports = app => {
  app.use('/api', courses);
  app.use('/api', events);
  app.use('/api', users);
  app.use('/api', auth);
  app.use('/api', avator);
  app.use('/api', teachers);
  app.use('/api', questions);
  app.use('/api', instrument);
};
