window.onload = function() {

    var savings_Balance = document.getElementById("Balance_Savings_Amount")
    var savings_W = document.getElementById("savings_Withdrawal")
    var savings_D = document.getElementById("savings_Deposit")

    var checking_Balance = document.getElementById("Balance_Checking_Amount")
    var checking_W = document.getElementById("checking_Withdrawal")
    var checking_D = document.getElementById("checking_Deposit")

  var saving_Change =function(event) {
    event.preventDefault();

    var new_savings_balance = savings_Balance + savings_D -savings_W 
    console.log(new_savings_balance)

  }

  var checking_Change =function(event) {
    event.preventDefault();

    var new_savings_balance = savings_Balance + savings_D -savings_W 
    console.log(new_savings_balance)

  }

    submitButton.addEventListener('click', checking_Change)

}