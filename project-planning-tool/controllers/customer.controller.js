const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken'); 
const Customer = require('../models/Customer.model.js');
const appConfig = require('../config/app.config');

exports.create = (req, res) => {
  if(!req.body.customerId || !req.body.customerName){
    return res.status(400).send({
      message: "Customer Content cannot be empty"
    })
  }

  const customer = new Customer({
    customerId: req.body.customerId,
    customerName: req.body.customerName
  })

  customer.save().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While Creating a user.'
    })
  })
};

exports.findOne = (req, res) => {  
  Customer.find({customerId: req.params.customerId}).then(customer => {
    if(!customer) {
      return res.status(404).send({
        message: "Customer not found with customerId " + req.params.projectId
      });
    }
    res.send(customer);
  }).catch(err => {
    if(err.kind === 'ObjectId'){
      return res.status(404).send({
        message: "Note not found with id " + req.params.customerId
      });   
    }
    return res.status(500).send({
      message: "Error retrieving note with id " + req.params.customerId
    });
  })
};

exports.findAll = (req, res) => {
  Customer.find().then( customers => {
    res.send(customers);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some Error Occured While reading Customers List.'
    })
  })
};

// Delete
exports.delete = (req, res) => {
  Comment.findByIdAndRemove(req.params.customerId).then(customer => {
    if(!customer) {
        return res.status(404).send({
            message: "customer not found with id " + req.params.customerId
        });
    }
    res.send({message: "customer deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "comment not found with id " + req.params.customerId
        });                
    }
    return res.status(500).send({
        message: "Could not delete comment with id " + req.params.customerId
    });
  });
};