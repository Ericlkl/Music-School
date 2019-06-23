const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

// Get All Event Route
router.get('/', async (req,res) => {

    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }

});

// Add new Event route 
// { eventName,company, description, place,
// date, tag, imageURI }
router.post('/', async (req,res) => {

    try {
        const newEvent = await new Event(req.body).save();
        res.json(newEvent);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
    
})

module.exports = router;