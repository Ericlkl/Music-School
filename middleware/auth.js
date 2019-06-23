const jwt = require('jsonwebtoken');
const {secretOrKey} = require('../config/keys');

module.exports = (req,res,next) => {
    const token = req.headers['x-auth-token'];
    if(!token){
        return res.status(400).json({ errors: "No Token, authentication denied" });
    }

    try {
        const decoded = jwt.verify(token,secretOrKey);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(400).json({ errors: "Invalid Token !" });
    }

}