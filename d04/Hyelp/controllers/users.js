var
  User = require('../models/User.js')


module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

// Show
function show(req, res){
    User.findById(req.params.id, function(err, response){
      if (err) return console.log(err);
      res.json(response)
    })
}

// Update
function update(req,res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
}

// Destroy
function destroy(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, response){
    if (err) return console.log(err);
    res.json({Message: 'User successfully removed!', success: true, user: response})
  })
}

function index(req, res){
  User.find({}, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
}

function create(req, res) {
  User.create(req.body, function(err, response){
    if (err) return console.log(err);
    res.json({sucess: true, message: 'User created!', user: response})
  })
}
