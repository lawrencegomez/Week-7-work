var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = 3000,
  businessRoutes = require('./routes/businesses.js'),
  userRoutes = require('./routes/users.js')


mongoose.connect('mongodb://localhost/hyelp', function(err){
  if (err) return console.log(err);
  console.log('Connected to MongoDB (hyelp)');
})

// This will allow us to use Postman for sending info to the database
app.use(bodyParser.json())

app.use(logger('dev'))

// Always make sure the other middleware is above this or else those won't work
app.use('/api/businesses', businessRoutes)

app.use('/api/users', userRoutes)

app.listen(port, function(err){
  if (err) return console.log(err);
  console.log("Server is running on port: ", port);
})
