var http = require('http')
var fs = require('fs')
var winston = require('winston');
winston.add(winston.transports.File, { filename: 'access_logs.txt' });
winston.remove(winston.transports.Console);

winston.log('info', request.url);

function utcDate(){
  var dateTime = new Date;
  return dateTime.toUTCString();
}

var port 	= process.env.PORT || 3000; //this allows different ports in dev vs. production (think Heroku)
var server = http.createServer(function(request,response){
  console.log(request);
  if (request.url == '/') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1>Welcome to my Node app buuuudy!</h1>');
	}
  else if (request.url == '/services') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>This is the services page!</h1>');
  }
  else if (request.url == '/events') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>This is the events page!</h1>');
  }
  else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('<h1>Error 404. This page does not exist</h1>');
  }
  winston.log('info', request.url);
  fs.appendFile('access_logs.txt', 'A ' + request.method + ' request for ' + request.url + ' was fulfilled on ' +  utcDate() + '\n', (err) => {
    if (err) throw err;
    console.log('Info: ' + response.method + ' request for ' + request.url);
  });
});



// this is an event listener for when the server is running
server.listen(3000, function() {
  console.log('Server running on the port 3000');
})
