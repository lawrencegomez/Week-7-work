// This is telling the program to look in the package.json file for the http NPM package
var http = require('http')
var fs = require('fs')
var vistitorcount = 0
var vistitorcountp1 = 0
var vistitorcountp2 = 0

// This uses the variable http created above and calls up the createServer method that made for http NPM
var server = http.createServer(function(request, response) {

    if (request.url == '/') {
      vistitorcount ++
      response.end('Welcome to my website.\n\n You are visitor # ' + vistitorcount)
    }

    else if (request.url == '/poem1') {
      fs.readFile('poem.txt', 'utf8', function(err,contents) {
          if (err) {
            console.log(err);
          }
          else {
            var poem1 = contents
            console.log('hiiiiiiiii');
            response.write(poem1)
            response.end('This poem has been read ' + vistitorcountp1 + ' times')
          }
      })
      vistitorcountp1 ++
    }

    else if (request.url == '/poem2') {
      fs.readFile('poem2.txt', 'utf8', function(err,contents) {
          if (err) {
              console.log(err);
            }
            else {
              response.write(contents)
              response.end('This poem has been read ' + vistitorcountp2 + ' times')
            }
          })
      vistitorcountp2 ++
    }

    else{
      response.write('Error 404')
      response.end()
    }
})

// this is an event listener for when the server is running
server.listen(3000, function() {
  console.log('Server running on port 3000');
})
