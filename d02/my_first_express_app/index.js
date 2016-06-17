var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = 3000;
var students = ['Mike', 'Nick', 'JJ', 'Susan', 'Heins'];

app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('<h1>Hello there</h1>')
});

app.post('/', function(request,response){
  response.send('Thanks for posting')
});

app.get('/students', function(request, response){
  response.send('The students are: ' + students)
})

app.post('/students', function(request, response){
  console.log(request.body);
  students.push(request.body.name)
  response.send('Banana added...students are now: ' + students)
})

app.patch('/students', function(request, response){
  for (var i = 0; i < students.length; i ++) {
    console.log(students);
    if (students[i] == request.body.oldName) {
      console.log('worked!');
      response.send('Replaced ' + students[i] + ' with ' + request.body.newName);
      students[i] = request.body.newName
      console.log(students);
      // response.end();
    }
  }
})

app.delete('/students', function(request, response){
  for (var i = 0; i < students.length; i ++) {
    if (students[i] == request.body.name) {
      // console.log(students);
      response.send(students[i] + ' was removed from the students array');
      students.splice(i,1)
      console.log(students);
      response.end('The students array now contains: ' + students);
    }
  }
})

app.listen(port, function () {
  console.log('server started on port: ',port);
});
