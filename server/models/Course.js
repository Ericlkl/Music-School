const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Course name is require !'],
      trim: true,
      unique: true
    },
    desc: {
      type: String,
      required: [true, 'Course Description is required !']
    },
    require: {
      type: [String]
    },
    price: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    instrument: {
      type: String,
      required: [true, 'Please insert the Instrument Type for this course !']
    },
    students: {
      type: [Schema.Types.ObjectId],
      ref: 'users'
    },
    teacher: {
      type: [Schema.Types.ObjectId],
      ref: 'teachers'
    },
    img: {
      type: Buffer,
      select: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('courses', CourseSchema);
