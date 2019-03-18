module.exports = (app) => {
  const project = require('../controllers/project.controller.js');
   
  app.post('/project', project.create);
    
  app.get('/allProjects', project.findAll);

  app.get('/project/:projectId', project.findOne);
  
  app.put('/project/:projectId', project.update);

  app.delete('/project/:projectId', project.delete);
  
// Direct links:

// Get All Projects - http://localhost:3000/allProjects

// Get A Project - http://localhost:3000/project/4 ( Change id at the end )

// Post A Project - http://localhost:3000/project/

// Put A Project - http://localhost:3000/project/

// Delete A Project - http://localhost:3000/project/
  }