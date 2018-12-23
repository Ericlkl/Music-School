const mongoose = require('mongoose');
const Event = mongoose.model('events');

module.exports = app => {
    app.get('/api/event', async (req,res) => {
        const events = await Event.find();
        res.send(events);
    })

    app.post('/api/event', async (req,res) => {
        const {eventName,company, description, place, date, tag, imageURI} = req.body;
        const newEvent = await new Event({
            eventName,
            company,
            description,
            place,
            date,
            tag,
            imageURI
        }).save();
        res.send(newEvent);
    })
}