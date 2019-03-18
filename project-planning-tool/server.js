const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const applicationConfig = require('./config/app.config.js');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var cors = require('cors');
//app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
  .then(()=>{
    console.log('Successfully connected to the database');   
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  })

app.set('port', process.env.PORT || 3000);
app.set('secret', applicationConfig.secret);

app.get('/',(req,res) => {
  res.json({"message": "Welcome to  Project Planning Tool Application."+
  "Take notes quickly. Organize and keep track of all your notes."});
});

require('./routes/project.routes.js')(app);
require('./routes/customer.routes.js')(app);
require('./routes/user.routes.js')(app);

app.listen(app.get('port'),()=>{
  console.log(`server is running on port ${app.get('port')}`)
})
