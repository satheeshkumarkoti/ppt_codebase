const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken'); 
const Project = require('../models/Project.model.js');
const appConfig = require('../config/app.config');


// Save or Create Porject 
exports.create = (req, res) => {
  if(!req.body.projectId || !req.body.customer){
    return res.status(400).send({
      message: "Project Content cannot be empty"
    })
  }
   
  const project = new Project({
    projectId: req.body.projectId,
    projectName: req.body.projectName,
    customer: req.body.customer,
    system: req.body.system,
    mksProjectId: req.body.mksProjectId,
    swpm: req.body.swpm
  })

  project.save().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While Creating a user.'
    })
  })
};

// Find a project
exports.findOne = (req, res) => {  
  Project.find({projectId: req.params.projectId}).then(project => {
    if(!project) {
      return res.status(404).send({
        message: "Project not found with projectId " + req.params.projectId
      });
    }
    res.send(project);
  }).catch(err => {
    if(err.kind === 'ObjectId'){
      return res.status(404).send({
        message: "Note not found with id " + req.params.projectId
      });   
    }
    return res.status(500).send({
      message: "Error retrieving note with id " + req.params.projectId
    });
  })
};

// Find all projects
exports.findAll = (req, res) => {
  Project.find({active:true}).then( projects => {
    res.send(projects);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While reading Project List.'
    })
  })
};

// Delete
exports.delete = (req, res) => {
  Comment.findByIdAndRemove(req.params.projectId).then(project => {
    if(!project) {
        return res.status(404).send({
            message: "project not found with id " + req.params.projectId
        });
    }
    res.send({message: "project deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "project not found with id " + req.params.projectId
        });                
    }
    return res.status(500).send({
        message: "Could not delete comment with id " + req.params.projectId
    });
  });
};

// Update
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
        message: "project content can not be empty"
    });
  }
  Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true}).then(project => {
    // console.log(project);
      if(!project) {
          return res.status(404).send({
              message: "ProjectId not found with id " + req.params.projectId
          });
      }
      res.send(project);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "comment not found with id " + req.params.projectId
        });                
    }
    return res.status(500).send({
        message: "Error updating comment with id " + req.params.projectId
    });
  });
};