const mongoose = require('mongoose');

const { Schema } = mongoose;

const cameraSchema = new Schema({
  model: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  resolution: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  lensCombatibility:{
    type: String,
    required: true,
    trim: true
  },
  image:{
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  reserveDays:{
    type: Number,
    min: 0,
    default: 0
  },
  quantity:{
    type: Number,
    min: 0,
    default: 1
  }
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;