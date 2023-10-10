const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  caption: {
    type: String,
    required: [true, 'The media must have caption'],
  },
  photos: {
    type: [String],
    required: [true, 'The media must have any photo'],
  },
  video: String,
  like: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

const Media = mongoose.model('media', mediaSchema);
module.exports = Media;
