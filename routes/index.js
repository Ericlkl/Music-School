
module.exports = app => {
    app.post('/api/student', (req,res) => {
        console.log(req.body);
        res.status(200).send({ hi: 'There'});
    })    
}