var fs = require('fs')
var a = 2
var b =3
var c = 10

console.log(a+b);

fs.readFile('poem.txt', 'utf8', function(err,contents) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('a: ', a, 'b: ',b, 'c: ', c);
  }
})

var c = a*b*c
console.log(c);

fs.readFile('poem2.txt', 'utf8', function(err,contents) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(contents);
  }
})

console.log('whatsuuuuuuuuppppp');
