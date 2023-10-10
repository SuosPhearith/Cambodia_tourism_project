const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'services',
  },
  dates: {
    type: [Date],
    required: [true, 'The booking must have a date'],
  },
  participant: {
    type: Number,
    required: [true, 'The booking must have a participant'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Booking = mongoose.model('booking', bookingSchema);
module.exports = Booking;
