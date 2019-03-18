const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken'); 
const User = require('../models/User.model.js');
const appConfig = require('../config/app.config');


// Save or Create User 
exports.create = (req, res) => {
  if(!req.body.userId || !req.body.userName){
    return res.status(400).send({
      message: "userId & UserName Content cannot be empty"
    })
  }
   
  const user = new User({
    userId: req.body.userId,
    userName: req.body.userName,
    contiUid: req.body.contiUid
  })

  user.save().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While creating a user.'
    })
  })
};

// Find a user
exports.findOne = (req, res) => {  
  User.find({userId: req.params.userId}).then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User not found with userId " + req.params.userId
      });
    }
    res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId'){
      return res.status(404).send({
        message: "Note not found with id " + req.params.userId
      });   
    }
    return res.status(500).send({
      message: "Error retrieving note with id " + req.params.userId
    });
  })
};

// Find all projects
exports.findAll = (req, res) => {
  User.find().then( users => {
    res.send(users);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While reading users List.'
    })
  })
};

// Delete
exports.delete = (req, res) => {
  Comment.findByIdAndRemove(req.params.userId).then(project => {
    if(!project) {
        return res.status(404).send({
            message: "project not found with id " + req.params.userId
        });
    }
    res.send({message: "project deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "User not found with id " + req.params.userId
        });                
    }
    return res.status(500).send({
        message: "Could not delete comment with id " + req.params.userId
    });
  });
};

// Update
exports.update = (req, res) => {
  if(!req.body.userId) {
    return res.status(400).send({
        message: "User content can not be empty"
    });
  }
  
  Porject.findByIdAndUpdate(req.params.userId, {
    content: req.body.content}, {new: true}).then(user => {
      if(!user) {
          return res.status(404).send({
              message: "userId not found with id " + req.params.userId
          });
      }
      res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "comment not found with id " + req.params.userId
        });                
    }
    return res.status(500).send({
        message: "Error updating comment with id " + req.params.userId
    });
  });
};