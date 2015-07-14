var sports = ["Judo","Boxing", "BJJ", "Muay thai", "Rugby Union", "Rugby League", "Hockey", "Soccer"]

var hello = function(elem) {
  console.log(elem)
}

var myForEach = function(sports, callback) {
  for(var i=0; i<sports.length; i++) {
    var elem = sports[i]
    hello(elem)
  }
}

myForEach(sports,hello);


//==========================================
var myForAll = function() {
  console.log(sports)
}

//==========================================
var y

var mySample = function(sports,y) {

    for(var i = 0; i<y; i ++) {
      var x = Math.floor(Math.random()*sports.length)
      console.log('============')
      console.log(sports[x])
    }
}

mySample(sports,y)

//==========================================

var doThat = function(func) {
  func()
}