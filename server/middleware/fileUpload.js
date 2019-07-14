const multer = require('multer');

const imgUploadMiddleware = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an Image file'));
    }

    cb(undefined, true);
  }
});

// File Upload
module.exports = {
  imgUploadMiddleware
};
