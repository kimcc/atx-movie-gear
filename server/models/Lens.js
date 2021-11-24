const mongoose = require('mongoose');

const { Schema } = mongoose;

const lensSchema = new Schema({
  modal: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  image:{
    type: String,
  },
  reserveDays:{
    type: Number,
    min: 0,
    default: 0
  },
  price: {
    type: Number,
    required: true,
  },
  quantity:{
    type: Number,
    min: 0,
    default: 1
  }
});

const Lens = mongoose.model('Lens', lensSchema);

module.exports = Lens;