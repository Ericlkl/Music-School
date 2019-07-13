const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  // Get Token from header
  const token = req.headers['x-auth-token'];
  // If there is no token return
  if (!token) {
    return res.status(400).json({ errors: 'No Token, authentication denied' });
  }

  try {
    // Decode JWT token
    const decoded = jwt.verify(token, secretOrKey);

    const user = await User.findOne({
      _id: decoded.userID,
      'tokens.token': token
    });

    if (!user) throw new Error();

    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ errors: 'Invalid Token !' });
  }
};
