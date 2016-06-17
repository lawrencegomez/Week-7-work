var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express(),
  logger = require('morgan'),
  port = 3000;

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/questions_app', function(err){
  if (err) throw err;
  console.log('Connected to MongoDB (questions_app)');
})

var questionSchema = new mongoose.Schema({title: 'string', content: 'string', created_at: 'date', updated_at: 'date'});
var Question = mongoose.model('Question', questionSchema);

questionSchema.pre('save', function(next){
  var currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  next()
})


// create a question
app.get('/new/question', function(req, res){
  console.log(req.query);
  var title = "";
  var content = "";
  if (req.query.title){
    title = req.query.title
  }
  if (req.query.content) {
    content = req.query.content
  }
  var q = new Question({title: title, content: content})
  q.save(function(err, result){
    if (err) throw err;
    console.log(result);
    res.json({Message: 'Question created!'})
  })
})

// Create question using postman to send a JSON
app.post('/questions', function(req, res){
  Question.create(req.body, function(err, response){
    if (err) throw err
    res.json({sucess: true, message: 'Question created!', question: response})
  })
})

// remove all questions in the database
app.delete('/questions', function(req, res){
  Question.remove({}, function(err, result){
    if (err) throw err;
    res.send(result)
  })
})

// index of all questions
app.get('/questions', function(req, res){
  Question.find({}, function(err, response){
    if (err) throw err;
    res.json(response);
  })
})


// show questions
app.get('/questions/:id', function(req, res){
  Question.findById(req.params.id, function(err, response){
    if (err) throw err;
    res.send(response)
  })
})

// update questions
app.patch('/questions/:id', function(req, res){
  console.log(req.query);
  var title = "";
  var content = "";
  if (req.query.title){
    title = req.query.title,
    content = req.query.content
  }
  Question.findByIdAndUpdate(req.params.id, {title: title, content: content}, {new: true}, function(err, response){
    if (err) throw err;
    res.json(response)
  })
})

// destroy question
app.delete('/questions/:id', function(req, res){
  Question.findByIdAndRemove(req.params.id, function(err, response){
    if (err) throw err;
    res.json({Message: "Question deleted!", success: true, question: response})
  })
})

app.listen(port, function(){
  console.log('Server is running on port: ', port);
})
