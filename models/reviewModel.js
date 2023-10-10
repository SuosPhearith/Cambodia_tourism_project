const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'services',
  },
  comment: {
    type: String,
    required: [true, 'The review must have a comment'],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'The review must have a rating'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Review = mongoose.model('review', reviewSchema);
module.exports = Review;
