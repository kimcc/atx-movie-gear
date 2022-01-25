const mongoose = require('mongoose');

const { Schema } = mongoose;


const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  reservationDate: {
    type: String,
    required: true
  },
  products:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  projectType: {
    type: String,
    required: true,
    trim: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;