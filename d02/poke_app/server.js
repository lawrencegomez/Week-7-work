var
  express = require('express'),
  request = require('request'),
  app = express(),
  port = 3000,
  able = []

app.get('/pokemon/:id', function(req,res){
    var api_url = 'http://pokeapi.co/api/v2/pokemon/' + req.params.id
    request(api_url,function(err, response){
      if (err) return console.log(err)
      var pokemon = JSON.parse(response.body).forms[0].name
      res.send("<h1>Name: " + pokemon + "</h1>")
    })
})

app.get('/pokemon/:id/abilities', function(req,res){
    var api_url = 'http://pokeapi.co/api/v2/pokemon/' + req.params.id
    request(api_url,function(err, response){
      if (err) return console.log(err)
      var pokemon = JSON.parse(response.body).abilities
      for (var i = 0; i < pokemon.length; i ++) {
        // console.log(pokemon[i].ability.name);
        able.push(pokemon[i].ability.name);
        // res.end();
      }
        res.send(able);
    })
})




app.listen(port, function(){
  console.log('Server is running on port: ', port);
})
