module.exports = (app) => {
  const customer = require('../controllers/customer.controller.js');
   
  app.post('/customer', customer.create);
    
  app.get('/getAllCustomer', customer.findAll);

  app.get('/customer/:customerId', customer.findOne);

  //app.put('/customer/:customerId', customer.update);

  //app.delete('/customer/:customerId', customer.delete);
  
// Direct links:

// Get All Customers - http://localhost:3000/getAllCustomer

// Get A Customer - http://localhost:3000/customer/4 ( Change id at the end )

// Post A Customer - http://localhost:3000/customer/4

// put A Customer - http://localhost:3000/customer/4

// Delete A Customer - http://localhost:3000/customer/4

  }