module.exports = (app) => {
    app.post('/api/login', (req,res,next) => {
        console.log(req.body);
        res.status(301).redirect('/');
        next();
    });
}