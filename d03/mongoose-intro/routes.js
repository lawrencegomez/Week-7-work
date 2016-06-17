var
  express = require('express'),
  User = require('./models/User.js'),
  Post = require('./models/Post.js'),
  myRouter = express.Router()


myRouter.get('/users', function(req, res){
  User.find({}, function(err, people){ //we are looking for all users which is why the first object is empty
    res.json(people)
  })
})

myRouter.post('/users', function(req, res){
  User.create(req.body, function(err, user){
    if (err) return console.log(err);
    res.json({sucess: true, user: user})
  })
})

myRouter.get('/users/:id', function(req, res){
  User.findById(req.params.id, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
})

// the {new: true} spits out the new users json file after changing it
myRouter.patch('/users/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
})

// shows the user that was just deleted
myRouter.delete('/users/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user){
    if (err) return console.log(err);
    res.json({message: "User successfully removed!", success: true, user: user})
  })
})

myRouter.get('/posts', function(req, res) {
  Post.find({}, function(err, tweet){
    res.json(tweet)
  })
})

myRouter.post('/posts', function(req, res){
  Post.create(req.body, function(err, post){
    if (err) return console.log(err);
    res.json({sucess: true, post: post})
  })
})


module.exports = myRouter
