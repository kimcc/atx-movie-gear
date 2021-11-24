const mongoose = require('mongoose');

const { Schema } = mongoose;

const lensSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Type: {
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