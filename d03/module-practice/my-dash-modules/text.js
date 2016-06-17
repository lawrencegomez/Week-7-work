// make a string all uppercase or reverse a string

function shuffle() {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function reverse(string) {
  return string.split('').reverse().join('')
}

function uppercase(string) {
  return string.toUpperCase()
}

function lowercase(string) {
  return string.toLowerCase()
}

function shuffle(string) {
    function fisherYates(arr) {
  	var range = arr.length
  	while(range--) {
  		arr.push(arr.splice(Math.floor(Math.random() * (range + 1)), 1)[0])
  	}
  	 return arr
    }
    return fisherYates(string.split('')).join('')
}

module.exports = {
  reverse: reverse,
  uppercase: uppercase,
  lowercase: lowercase,
  shuffle: shuffle
}
