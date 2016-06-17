var
  circleFunctions = require('./my-dash-modules/circle.js'),
  text = require('./my-dash-modules/text.js'),
  express = require('express'),
  app = express(),
  port = 3000

app.get('/reverse/:string', function(req, res) {
  var reversed = text.reverse(req.params.string)
  res.send(reversed)
})

app.get('/upper/:string', function(req, res) {
  var upper = text.uppercase(req.params.string)
  res.send(upper)
})

app.get('/lower/:string', function(req, res) {
  var lower = text.lowercase(req.params.string)
  res.send(lower)
})

app.get('/shuffle/:string', function(req, res) {
  var shuffled = text.shuffle(req.params.string)
  res.send(shuffled)
})


app.listen(3000, function(){
  console.log("Wahooo, the server is running on port: ", port);
})

// using express create a route that will take a string in the url and then spit it out in reverse order
