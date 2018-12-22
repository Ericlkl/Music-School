const mongoose = require('mongoose');
const Course = mongoose.model('courses');

module.exports = app => {
    app.get('/api/course', async (req,res) => {
        const courses = await Course.find();
        res.send(courses);
    });

    app.post('/api/course', async (req,res) => {
        const {courseName,description,requirement,fee,startDate,endDate,instrument,imageURI} = req.body;
        const newCourse = await new Course({
            courseName,
            description,
            requirement,
            fee,
            startDate,
            endDate,
            instrument,
            imageURI
        }).save();

        res.status(200).send(newCourse);
    });
}