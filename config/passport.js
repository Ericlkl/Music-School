const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { secretOrKey } = require('../config/keys');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey
};

// Call when the authenticate middleware is passed when you
// added the secord params in the router
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (user){
            return done(null, user);
        }
        
        return done(null, false);
    }))
}