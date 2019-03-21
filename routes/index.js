const instrument = require('./api/instrument');
const questions = require('./api/questions');
const teachers = require('./api/teachers');
const courses = require('./api/courses');
const events = require('./api/events');
const users = require('./api/users');

module.exports = app => {
    app.use('/api', courses);
    app.use('/api', events);
    // app.use('/api/users', users);
    app.use('/api', teachers);
    app.use('/api', questions);
    app.use('/api', instrument);
}