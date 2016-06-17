var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  businessSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    age: {type: String, required: true},
    created_at: Date,
    updated_at: Date
  })


// This basically tells the program to do this stuff first, and then continue on with what was next
businessSchema.pre('save', function(next){
  var currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  next()
})

var User = mongoose.model('User', businessSchema)

module.exports = User
