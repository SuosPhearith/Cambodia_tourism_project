const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: [true, 'The user must have a firstname'],
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['guide', 'homestay', 'package'],
  },
  location: {
    type: String,
    required: function () {
      return this.role === 'homestay';
    },
  },
  lng: {
    type: Number,
    required: function () {
      return this.role === 'homestay';
    },
  },
  lat: {
    type: Number,
    required: function () {
      return this.role === 'homestay';
    },
  },
  description: {
    type: String,
    required: [true, 'The service must have a description'],
  },
  benefit: String,
  imageCover: {
    type: String,
    requiered: [true, 'The service must have cover image'],
  },
  images: {
    type: [String],
    required: function () {
      return !this.role === 'guide';
    },
  },
  video: {
    type: String,
    required: function () {
      return !this.role === 'guide';
    },
  },
  minPaticipation: {
    type: Number,
    required: function () {
      return !this.role === 'guide';
    },
  },
  maxPaticipation: {
    type: Number,
    required: function () {
      return !this.role === 'guide';
    },
  },
  minPrice: {
    type: Number,
    required: [true, 'The service must have a price'],
  },
  individualPrice: {
    type: Number,
    required: function () {
      return !this.role === 'guide';
    },
  },
  unavialableDate: {
    type: [Date],
    required: true,
  },
});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;
