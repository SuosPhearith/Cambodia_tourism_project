const mongoose = require('mongoose');

const contentCreatorSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  facebook: {
    type: String,
    required: true,
  },
  youtube: String,
  titok: String,
  information: {
    type: String,
    required: true,
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

const ContentCreator = mongoose.model('contentCreator', contentCreatorSchema);

module.exports = ContentCreator;
