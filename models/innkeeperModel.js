const mongoose = require('mongoose');
const validator = require('validator');

const innkeeperSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  firstname: {
    type: String,
    required: [true, 'The user must have a firstname'],
    minLength: [2, 'firstname is too short'],
    maxLength: [50, 'firstname is too long'],
    trim: true,
    match: [/^[A-Za-z]+$/, 'The firstname allow only letters'],
  },
  lastname: {
    type: String,
    required: [true, 'The user must have a lastname'],
    minLength: [2, 'lastname is too short'],
    maxLength: [50, 'lastname is too long'],
    trim: true,
    match: [/^[A-Za-z]+$/, 'The lastname allow only letters'],
  },
  phone: {
    type: String,
    default: 'NO phone number provided',
    minLength: [7, 'Phone number is too short'],
    maxLength: [50, 'Phone number is too long'],
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  location: {
    type: String,
    required: [true, 'The homestay must have a location'],
  },
  lng: Number,
  lat: Number,
  citification: {
    type: [String],
  },
  photo: {
    type: [String],
    required: [true, 'The '],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Innkeeper = mongoose.model('innkeeper', innkeeperSchema);
module.exports = Innkeeper;
