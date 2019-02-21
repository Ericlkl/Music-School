const express = require('express');
const router = express.Router();

router.post('/login', (req,res) => {
    res.json({ hi : "World"});
});

module.exports = router;