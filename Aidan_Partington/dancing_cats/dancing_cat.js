
var start_Button = document.getElementById('start-button')
var stop_Button = document.getElementById('stop-button')
var speed_Button = document.getElementById('speed-button')

var movePixels = 10;
var delayMs = 50;

var catTimer
var direction = 'L_to_R'
var max_width

var begging_cat = document.getElementById('begging_cat');
var catTimer = null

center_cat = (window.innerWidth)/2-122
begging_cat.style.left = center_cat + 'px';
begging_cat.style.display = 'none'

function catWalk() {

  if (direction == 'L_to_R') {
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft + movePixels) + 'px';
      img.style.transform = 'scaleX(1)';
        //Check if at edge of page
        if (currentLeft > (window.innerWidth-img.width)) {
           direction = 'R_to_L' 
        }
  } else {
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft - movePixels) + 'px';
      img.style.transform = 'scaleX(-1)';
      // img.src = "http://i.imgur.com/pghTn0r.gif"
        // Check if at edge of page
        if (currentLeft <= 0) {
           direction = 'L_to_R'
        } 
  }
        if (Math.abs(currentLeft - ((window.innerWidth-img.width)/2))<200) {
           var cat = document.getElementsByTagName('img')[0];
           cat.style.display = 'none'
           begging_cat.style.display = ''
        } else {
          var cat = document.getElementsByTagName('img')[0];
          cat.style.display = ''
          begging_cat.style.display = 'none'
        }

}
function startCatWalk() {
  if (catTimer !== null) {
    return;
  };
  catTimer = window.setInterval(catWalk, delayMs);
}

var stopCatWalk = function() {
  movePixels = 10;
  clearInterval(catTimer)
  catTimer = null
}

var speedupCatWalk = function() {
  movePixels = 100;
}

start_Button.addEventListener('click', startCatWalk)
stop_Button.addEventListener('click', stopCatWalk)
speed_Button.addEventListener('click', speedupCatWalk)
