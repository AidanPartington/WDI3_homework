
var replies = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it","My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
var result = document.getElementById('result');

function MEB_reply() {
  var x = replies.length
  var n = Math.random()
  res = parseInt(x*n)
  document.getElementById('result').innerHTML = replies[res];
}




