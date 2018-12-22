module.exports = app => {
    // Import Route related to member
    require('./membersRoutes')(app);

    require('./teachersRoutes')(app);
}