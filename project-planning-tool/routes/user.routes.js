module.exports = (app) => {
  const user = require('../controllers/user.controller.js');
   
  app.post('/user', user.create);
    
  app.get('/allProjects', user.findAll);

  app.get('/user/:userId', user.findOne);
  
  app.put('/user/:userId', user.update);

  app.delete('/user/:userId', user.delete);
  
// Direct links:

// Get All Projects - http://localhost:3000/allUsers

// Get A Project - http://localhost:3000/user/4 ( Change id at the end )

// Post A Project - http://localhost:3000/user/

// Put A Project - http://localhost:3000/user/

// Delete A Project - http://localhost:3000/user/
  }