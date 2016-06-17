var
  express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 3000,
  watson = require('watson-developer-cloud'),
  visual_recognition = watson.visual_recognition({
    api_key: 'ac66d7c745f8a2dcfb6d795538cfa2097c61fa04',
    version: 'v3',
    version_date: '2016-05-20'
  }),
  api_key = 'ac66d7c745f8a2dcfb6d795538cfa2097c61fa04'

app.use(bodyParser.json());

// app.post('/', function(req, res) {
//   var api_url = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=' + api_key + '&version=2016-05-20'
//   request.post({url: api_url, form: req.body}, function(err, response){
//     console.log(response);
//     res.json(response)
//   })
// })

app.post('/analyze/:id', function(req, res) {
  // var api_url = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=' + api_key + '&version=2016-05-20&url=' + req.body.url
  var api_url = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=' + api_key + '&version=2016-05-20&url=https://flic.kr/p/' + req.params.id
  request(api_url, function(err, response){
    console.log(response);
    var meat = JSON.parse(response.body).images[0]
    res.send(meat)
  })
})


app.listen(port, function(){
  console.log('Server is running on port: ', port);
})
