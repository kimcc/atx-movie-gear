const mongoose = require('mongoose');

const { Schema } = mongoose;

const lensSchema = new Schema({
  Type: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  }
});

const Lens = mongoose.model('Lens', lensSchema);

module.exports = Lens;