const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  item_type: {
    type: String,
    required: true,
    trim: true
  },
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
  Compatibility:{
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
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;