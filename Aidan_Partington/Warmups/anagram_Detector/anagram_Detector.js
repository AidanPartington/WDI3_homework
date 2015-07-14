// https://gist.github.com/mattswann/1baa4c5a1ab526191974

$(document).ready(function(){ 



$('#btn').on('click', function() {
  var word = document.getElementById('input').value;
  sorted_word = word.split('').sort().join('').toUpperCase();

    var arr = ["enlists", "google", "inlets", "banana"]
    for(var i = 0; i < arr.length ;i++ ){

      var arr_word = arr[i]
      arr_word = arr_word.split('').sort().join('').toUpperCase();

      if (arr_word == sorted_word) {
        document.getElementById('result').innerHTML  =  "This is an anagram of " +  arr[i]
        console.log(arr_word)
        console.log(sorted_word)
      }
    }
})

// var anagrambutton = document.getElementById('btn');
// anagrambutton.addEventListener('click', checkAnagram())



});