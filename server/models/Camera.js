const mongoose = require('mongoose');

const { Schema } = mongoose;

const cameraSchema = new Schema({
  modal : {
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
  lensCombatibility:{
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

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;