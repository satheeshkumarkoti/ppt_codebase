const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({


  projectId:{
    type: Number,
    required:[true,'This is mandatory'],
    unique: true
  },
  projectName:{
    type: String,
    required:[false,'This is mandatory']   
  },
  customer: {
    type: String    
  },
  system: {
    type: String    
  },
  mksProjectId: {
    type: String    
  },
  swpm: {
    type: String    
  },
  mlc: {
    type: Number,
    required:[true,'This is mandatory']
  },
  active: {
    type: String,
    default: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);