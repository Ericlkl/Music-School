const instrument = require('./api/instrument');
const questions = require('./api/questions');
const teachers = require('./api/teachers');
const courses = require('./api/courses');
const events = require('./api/events');
const users = require('./auth/users');
const auth = require('./auth/auth');

module.exports = app => {
    app.use('/api/course', courses);
    app.use('/api/events', events);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/teachers', teachers);
    app.use('/api/questions', questions);
    app.use('/api/instruments', instrument);
}