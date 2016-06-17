var
  express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express(),
  port = 3000,
  myRoutes = require('./routes.js')


// Even if the database listed isn't created yet, mongoose will create it
//  This is a good format to have for connecting to the database
mongoose.connect('mongodb://localhost/mongoose-intro', function(err){
  if (err) return console.log(err);
  console.log('Connected to mongoDB (mongoose-intro)');
})

// middleware that will read and translate any data coming in as JSON
// this is similar to the "before action" that we used in Ruby on Rails
// tells it to parse any data before it actually tries to do anything with it
app.use(bodyParser.json())

app.get('/', function(req,res){
  res.json({message: 'this is the root route.'})
})

//  this doesn't affect functionality, it just separates your concerns and breaks the routes to a separate file
// using 'api' means that all routes will start with /api/ first...api/users 
app.use('/api', myRoutes)




app.listen(port, function(){
  console.log('server is running on port: ', port);
})
