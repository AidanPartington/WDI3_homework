//https://gist.github.com/mattswann/857b7f2914f84e339eae

function palindrome(anyString) {
  anyString = anyString.replace(/ /g,'');
  anyString = anyString.replace(/,/g,'');
  anyString = anyString.replace('.',''); //Palendrome can have amax of 1 '.'
  newstring = anyString.toLowerCase().split('').reverse().join('');
  return newstring === anyString.toLowerCase();
}

