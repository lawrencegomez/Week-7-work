// With mongoose, the model is what contains the schema whereas Ruby on Rails had it's own schema file

var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  userSchema = new Schema({ // these are the things that we are allowing mongo to store for us
    name: String,
    email: String,
    age: Number
  })

//  model is a method of mongoose, takes two arguements, the model (in a string) and the name of the schema
var User = mongoose.model('User', userSchema)

module.exports = User
