var
  Business = require('../models/Business.js')


module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

// Show
function show(req, res){
    Business.findById(req.params.id, function(err, response){
      if (err) return console.log(err);
      res.json(response)
    })
}

// Update
function update(req,res) {
  Business.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
}

// Destroy
function destroy(req, res) {
  Business.findByIdAndRemove(req.params.id, function(err, response){
    if (err) return console.log(err);
    res.json({Message: 'User successfully removed!', success: true, business: response})
  })
}

function index(req, res){
  Business.find({}, function(err, response){
    if (err) return console.log(err);
    res.json(response)
  })
}

function create(req, res) {
  Business.create(req.body, function(err, response){
    if (err) return console.log(err);
    res.json({sucess: true, message: 'Business created!', business: response})
  })
}
