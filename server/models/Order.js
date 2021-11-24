const mongoose = require('mongoose');

const { Schema } = mongoose;


const orderSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
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
      ref: 'Camera'
    },
    {
      type: Schema.Types.ObjectId,
      ref: 'Lens'
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