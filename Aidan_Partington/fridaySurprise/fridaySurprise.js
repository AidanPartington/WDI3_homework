var sports = ["Judo","Boxing", "BJJ", "Muay thai", "Rugby Union", "Rugby League", "Hockey", "Soccer"]

var hello = function(elem) {
  console.log(elem)
}

var myForEach = function(sports, callback) {
  for(i=0; i<sports.length; i++) {
    var elem = sports[i]
    callback(elem)
  }
}

myForEach(sports,hello);


var mySample = function(sports) {
    var x = Math.floor(Math.random()*sports.length)
    console.log('============')
    console.log(sports[x])
}

mySample(sports)