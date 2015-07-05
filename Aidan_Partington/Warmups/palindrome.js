function palindrome(anyString) {
  newstring = anyString.split('').reverse().join('')
  return newstring === anyString
}