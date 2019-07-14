module.exports = {
  adminMiddleware: require('./admin'),
  authMiddleware: require('./auth'),
  formValidationMiddleware: require('./formValidation'),
  imgUploadMiddleware: require('./fileUpload').imgUploadMiddleware
};
