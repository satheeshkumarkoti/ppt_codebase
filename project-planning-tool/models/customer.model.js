const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({

customerId:{
    type: Number,
    required:[true,'This is mandatory'],
    unique: true
  },
  customerName: {
    type: String,
    min: [3, 'minimum 3 chars required'],
    required: [true, 'Customer name is mandatory']
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);