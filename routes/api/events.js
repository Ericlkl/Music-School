const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

// Get All Event Route
router.get('/', async (req,res) => {
    const events = await Event.find();
    res.send(events);
});

// Add new Event route
router.post('/', async (req,res) => {
    const { eventName,company, description, place,
        date, tag, imageURI } = req.body;

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