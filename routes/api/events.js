const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = mongoose.model('events');

router.get('/', async (req,res) => {
    const events = await Event.find();
    res.send(events);
})

router.post('/', async (req,res) => {
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

module.exports = router;