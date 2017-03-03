'use strict';

var express = require('express');
var router = require('./api');
var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos:[]});
});


//Make MORE ROUTES
app.use('/api', router);




app.listen(3000, function(){
  console.log("The server is running on port 3000!");
});
