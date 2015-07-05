var HEADS_Wins = 0
var TAILS_Wins = 0

var coinFlip = function() {
  
  //Decide HEads or Tails
  var x = Math.random()
  if (x > 0.5) {
    console.log("Result: 'TAILS'")
    TAILS_Wins += 1 
  } else if (x <= 0.5) {
    console.log("Result: 'HEADS'")
    HEADS_Wins += 1
  }

  console.log("The current score is Heads:" + HEADS_Wins )
  console.log("The current score is Tails:" + TAILS_Wins )  
  console.log("First to 5 wins the coin toss")    

  //Declare Winner
  if (HEADS_Wins >= 5) {
    console.log("HEADS is the winnner")
    console.log("[Scores will be reset]")
  }
  if (TAILS_Wins >= 5) {
    console.log("TAILS is the winner")
    console.log("[Scores will be reset]")
  }
}

var playGame = function() {
  // update store
  console.log('JHGJH');
  //check who won
}

flipCoinButton.addEventListener('click', coinFlip);

// var btn = document.getElementById("flipCoinButton");
//     btn.addEventListener('click', function() {
//       console.log('HJgdskjsh')
//       trip();
//     } )
