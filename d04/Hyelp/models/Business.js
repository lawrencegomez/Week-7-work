var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  businessSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    rating: {type: Number, default: 3, min: 0, max: 5},
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

var Business = mongoose.model('Business', businessSchema)

module.exports = Business
