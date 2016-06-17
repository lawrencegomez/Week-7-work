var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  postSchema = new Schema({ // these are the things that we are allowing mongo to store for us
    title: String,
    body: String,
  })

//  .model is a method of mongoose, takes two arguements, the model (in a string) and the name of the schema
// make sure the model is capitalized!!!
var Post = mongoose.model('Post', postSchema)

module.exports = Post
