### Node.js  Server, Router and Logging Lab

#### Basic set up

In rails, we used `rails new <app_name>` and *then* `cd <app_name>`. With node, we're going to do it the other way.

```bash
mkdir <app_name>
cd <app_name>
touch server.js
npm init
```
You should review each part of the `npm init`, don't just blindly push `enter` or you might end up with a configuration you don't want.

Now, let's check out our `package.json` file that was just generated.

## Creating another router

#### Add the http module

We're going to use a node module called `http` for our router. Let's install it using `npm`. Remember to use `--save` so that it's added to our dependencies in our `package.json` file! *The http module is actually built into node, so we don't have to install it, but this is good practice!*

```bash
npm install http --save
```

Now, let's require `http` in `server.js`.

```javascript
var http = require('http');
```

We also need to add some more variables to create our router:

```javascript
var dateTime = new Date;
var utcDate = dateTime.toUTCString();
var port 	= process.env.PORT || 3000; //this allows different ports in dev vs. production (think Heroku)
var server = http.createServer(//code here);
```

Let's fill in that //code here portion!

```javascript
var server = http.createServer(function(req, res) {
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<h1>Welcome to my Node app!</h1>');
	};
	//code for logging goes here
});
```

One more step before running our app is to tell the server to listen. Put this at the bottom of your server.js file.

```javascript
server.listen(port, function() {
	console.log('Our server is running on port', port)
});
```

Now, visit localhost:3000 in your browser. Check out the new line that was console logged in your terminal! We're logging left and right!

## Add More Routes!

We already have a root route; let's add another one.

- Make another route for the URI '/services'. Have that page display "This is the services page."

- Make another route for the URI '/events'. Have that page display "This is the events page."
- Make a custom 404 message handling everything else

  ​

# Logging

Now, incorporate logging into your first node.js app using the `fs` module

##### Your task is to log each request to the console AND write those logs to a file called access_logs.txt using `fs.appendFile()`

Research the  `fs` node module as well as the `http` module, and use methods from both to achieve the above! You can format the messages that you write to the log file however you like, but the messages should include:

1. The request method (GET, POST, PUT, or DELETE)
2. The url being requested ('/', '/about' etc)
3. The time / date the request was made

Hint: use this resource: https://docs.nodejitsu.com/articles/file-system/how-to-write-files-in-nodejs

### Bonus!

Start exploring and/or Install a third party npm package that handles logging for you, so you don't have to manually do this ever again! Bwahahaha!!!
