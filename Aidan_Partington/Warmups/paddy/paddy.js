

function AskPaddy() {

var q = document.getElementById('question').value;

    switch (q) {
      case "Happy St Patrick's":
      return console.log('tildlely de, potatoes');
      break;

    //May have to ask twice  due to having a pint or two and loud music
      case 'Do you want a pint of Guinness?':
      return console.log('Just the luck of the Irish.');
      break;
      
      case "Paddy, it's your round":
      return console.log('Look, Leprechaun!');
      break;
      
      default: 
      console.log('What???')
      console.log(q)
    }
}

var Question_Button = document.getElementById('paddy_Button');

Question_Button.addEventListener('click',AskPaddy)

document.getElementById("Answer")
// document.get id