// This is telling the program to look in the package.json file for the http NPM package
var http = require('http')
var fs = require('fs')

// This uses the variable http created above and calls up the createServer method that made for http NPM
var server = http.createServer(function(request, response) {
  console.log('got a request...');
  console.log(request.url, request.method);

  if (request.url == '/boom') {
    response.write('boom chakalakaaaaaa!!')
  }

  else if (request.url == '/about') {
    response.write('<h1>What do you want to know about me???</h1>')
  }
  else if (request.url == '/') {
    response.write('<h1>You have reached the home page :-)</h1>')
  }
  else if (request.url == '/contact') {
    response.write("<h1>Holla at me bro!</h1><br><h3>(339) 224-8656</h3>")
  }
  else
  response.write('thanks for the request')
  response.end()
})

// this is an event listener for when the server is running
server.listen(3000, function() {
  console.log('Server running on port 3000');
})
