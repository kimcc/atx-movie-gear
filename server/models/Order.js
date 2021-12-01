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
  cameras:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Camera'
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