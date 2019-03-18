const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userId:{
    type: Number,
    required:[true,'This is mandatory'],
    unique: true
  },
  userName: {
    type: String,
    min: [6, 'minimum 6 chars required'],
    required: [true, 'userName is mandatory']
  },
  contiUid: {
    type: String,
    min: [6, 'minimum 6 chars required'],
    required: [true, 'contiUid is mandatory']
  }
},{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);