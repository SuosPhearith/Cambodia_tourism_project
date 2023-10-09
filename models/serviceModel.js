const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The service must have a name'],
    trim: true,
  },
});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;
