
var currentTemp = document.getElementsByTagName('Current_temp');
var desiredTemp = document.getElementsByTagName('Desired_temp');
var working = document.getElementsByTagName('working');

var submitButton = document.getElementById('button');

 var airConWorking = function(event) {
      event.preventDefault();
      console.log(currentTemp)

      if (working=='Yes') {
          if (desiredTemp < currentTemp) {
            return console.log("A/C COOLING")
          } else if (currentTemp < desiredTemp) {
            return console.log("A/C HEATING")
          } else if (currentTemp == desiredTemp) {
            return console.log("Awesome")
          } else {
            return console.log("???? Don't do that")
          }
      } else {
          return console.log("A/C broken, call maintenance")
      }




//  "A/C broken, call maintenance"

 }

submitButton.addEventListener('click', airConWorking)