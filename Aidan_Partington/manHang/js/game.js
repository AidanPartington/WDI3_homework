// $(document).ready(function(){ 

window.onload = function() {
  
}

var guessesLeft = 8

var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model',
   'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 
   'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 
   'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 
   'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    var secretWord_number = Math.floor(Math.random()* word.wordList.length)
    word.secretWord = word.wordList[secretWord_number]
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore
  // for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
      
      var g_Letter = guessedLetters.split('') //.toUpperCase()
      var secret_Letters = word.secretWord.split('').toUpperCase()

      Guessed_SW = []
      Letters_notin_SW = []
      for(var g = g_Letter.length-1; g>0; s--) {
          for(var s = secret_Letters.length-1; s>0; s--) {
            if (g_Letter[g] == secret_Letters[s]) {
              //Correct letter
              answer = 'y'
              Guessed_SW.push('g')
            } else {
              //Not correct Letter
              Guessed_SW.push('_')
              Letters_notin_SW.push('g')

            }
          }
      }
      //How many guesses left
      guessesLeft_no = 8 - g_Letter.length - 1
      document.getElementById("guessesLeft").innerHTML = guessesLeft_no
      //Guessed letters
      document.getElementById("guessedLetters").innerHTML = guessedLetters.toUpperCase()
      //SecretWord Guessed so far
      document.getElementById("").innerHTML = Guessed_SW
  }
};

word.setSecretWord()

var guess_Button = document.getElementById('btn_letterField'); 
guess_Button.addEventListener('click', player.makeGuess());
// guess_Button.addEventListener('click', console.log('FF'));

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    var userInput = document.getElementById("letterField").value;
    player.guessedLetters.push(userInput);
    word.checkLetters(player.guessedLetters);
    document.getElementById('result').innerHTML = player.guessedLetters;
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    if (word.secretWord.split.includes("_")) {
      //Lose
    } else {
      //Win
      document.getElementById("result area").innerHTML = "You WIN"
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
      if (wrongLetters.length >= player.MAX_GUESSES) {
        // Player has lost
            if (word.secretWord.split.includes("_")) {
              //Lose
              document.getElementById("result area").innerHTML = "You Lose"
            } 
      } else {
        //Continue playing
      }
  }
};

var game = {
  // Resets the game
  resetGame: function() {
      //Guesses left
      document.getElementById("guessesLeft").innerHTML = '8'
      //Guessed letters
      document.getElementById("guessedLetters").innerHTML = ""
      //SecretWord Guessed so far
      document.getElementById("").innerHTML = "______________"
      document.getElementById("result area").innerHTML = ""
  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){

  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){

  }
}

window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};
