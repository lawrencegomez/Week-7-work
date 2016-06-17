var
  express = require('express'),
  request = require('request'), // basically a browser for our application, allows it to make get, put, patch, delete requests to a URL to grab data and do things with it
  app = express(),
  port = 3000

app.get('/', function(req,res){
  var obj = {
    name: 'Lawrence',
    age: 27
  }
  // this will send the obj object to the user as a json, in lieu of a string
  res.json(obj)
})


app.get('/images', function(req,res){
  // this is the url that the giphy json is located at
  var api_url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
  request(api_url, function(err, response){
    if (err) return console.log(err)
      // takes the strinng of data and spit it out in a json
    res.json(JSON.parse(response.body))
  })
})


app.get('/images/random', function(req,res){
  console.log(req.params.random);
  var api_url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
  request(api_url, function(err, response){
    if (err) return console.log(err)
    var image = JSON.parse(response.body).data.image_original_url
    // var image = JSON.parse(response.body).data.images.original.url
    console.log(image);
    res.send('<img src="'+ image +'">')
  })
})

app.get('/images/:search', function(req,res){
  // this is the url that the giphy json is located at
  console.log(req.params.search);
  var api_url = "http://api.giphy.com/v1/gifs/search?q=" + req.params.search + "&api_key=dc6zaTOxFJmzC"
  request(api_url, function(err, response){
    if (err) return console.log(err)
    var image = JSON.parse(response.body).data[Math.floor(Math.random() * 5)+1].images.original.url
    // takes the strinng of data and spit it out in a json
    // res.json(JSON.parse(response.body).data[0].images.original.url)
    res.send('<img src="'+ image +'">')
  })
})



app.listen(port, function(){
  console.log('Server is running on port: ', port);
})
