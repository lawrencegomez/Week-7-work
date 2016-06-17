var http = require('http')
var fs = require('fs')


fs.readFile('index.html', 'utf8', function(err,contents) {
              if (err) {
                console.log(err);
              }
              else {
                routes['/'] = contents;
              }
            });


fs.readFile('contact.html', 'utf8', function(err,contents) {
              if (err) {
                console.log(err);
              }
              else {
                routes['/contact'] = contents
              }
            });


fs.readFile('about.html', 'utf8', function(err,contents) {
              if (err) {
                console.log(err);
              }
              else {
                routes['/about'] = contents
              }
            });


fs.readFile('404.html', 'utf8', function(err,contents) {
              if (err) {
                console.log(err);
              }
              else {
                routes['error'] = contents
              }
            });

var routes = {}

var port 	= process.env.PORT || 3000; //this allows different ports in dev vs. production (think Heroku)
var server = http.createServer(function(request,response) {
  for (var prop in routes) {
    if (request.url == prop) {
        response.end(routes[prop])
    }
  }
  response.end(routes['error'])
})


server.listen(3000, function() {
  console.log('Server running on port 3000');
})
