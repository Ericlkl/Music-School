module.exports = app => {
    require('./loginRoutes')(app);
    // Import Route related to member
    require('./membersRoutes')(app);
    require('./teachersRoutes')(app);
    require('./coursesRoutes')(app);
    require('./eventsRoutes')(app);
    require('./instrumentRoutes')(app);
    require('./questionsRoutes')(app);
}