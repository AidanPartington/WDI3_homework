

function setWord(word) {
  t = word.split('')

  for(var i = t.length-1; i>0; i-=1) {
    if (t[i] == t[i-1]) {
      t.splice(i,1)
    } else {

    }
  }
      console.log(t)
}