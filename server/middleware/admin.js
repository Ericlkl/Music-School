// Dependant on auth middleware
module.exports = (req, res, next) => {
  try {
    if (req.user.type !== 'Admin') {
      throw new Error('Access Denied! Please Grant higher permission !');
    }

    next();
  } catch (error) {
    console.error(error.message);
    res.status(200).json({ errors: error.message });
  }
};
