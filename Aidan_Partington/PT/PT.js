//https://gist.github.com/epoch/0771187f6d02e1006210

var metro ={ 
    Alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    GlenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    Sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }

var TotalJourney
var TR_JourneyStations
var FR_JourneyStations
var ToRichmond
var FromRichmond
var Online_Key
var Offline_Key

//Print out Train lines
for (var key in metro) {
  console.log("'" + key + "' trainline:")
  console.log(metro[key])
}

console.log("")
console.log("Enter 'trip()' to start your journey plan")

function trip() {
  //Get Station input from user
var on = prompt('please enter your departing station from the displayed trainlines (This is case sensitive)')
var off= prompt('please enter your destination station from the displayed trainlines (This is case sensitive)')
console.log(on)
console.log(off)
// var on = 'Flinders Street'
// var off = 'Windsor'

  for (var key in metro) {
    if ((metro[key].indexOf(on) !== -1) && (metro[key].indexOf(off) !== -1)) {
        //Both stations are on the same trainline
        sameline(on,off,key)
        //Output instructions
        console.log('Get on at "' + on + '" station, on the ' + key + ' line')
        console.log('Travel in the direction of ==> '+ LineDirection)
        console.log('Get off at "' + off + '" station, on the ' + key + ' line')
        console.log('The journey will consist of these stations:' + JourneyStations)
        return console.log('The destination is ' + TotalJourney + ' staions away.')

    } else if ((metro[key].indexOf(on) !== -1) && (metro[key].indexOf(off) == -1)) {
      //Get on instructions
      online(on,off,key)

    } else if ((metro[key].indexOf(on) == -1) && (metro[key].indexOf(off) !== -1)) {
      //Get off instructions 
      offline(on,off,key)

    } else if ((metro[key].indexOf(on) == -1) && (metro[key].indexOf(off) == -1)) {
      //Both NOT on this line, this line is not revelant
    }
  }
  //Output instructions
  // debugger
  console.log('Get on at "' + on + '" station, on the "' + Online_Key + '" line')
  console.log('Travel in the direction of ==> "'+ OnLine_Direction + '" and get off at "Richmond"')
  console.log('Get on the "'+ Offline_Key + '"" line, Travel in the direction of ==> "'+ OffLine_Direction + '"')
  console.log('Get off at "' + off + '" station')
  console.log('The journey will consist of these stations:' + TR_JourneyStations + ','+ FR_JourneyStations)
  return console.log('The destination is ' + (parseInt(ToRichmond,10) + parseInt(FromRichmond,10)) + ' staions away.')
}

function sameline(on,off,key) {
  var Startpoint = metro[key].indexOf(on)
  var Endpoint = metro[key].indexOf(off)
  //Total Number of stations
  TotalJourney = Math.abs(Endpoint - Startpoint)+1
  //Determine direction
  if (Startpoint <= Endpoint) { //left to right
    LineDirection = metro[key][metro[key].length-1]
    JourneyStations = metro[key].slice(Startpoint,TotalJourney)
    } else {                    //right to left
    LineDirection = metro[key][0]
    JourneyStations = metro[key].slice(Endpoint,TotalJourney)
  } 
}

function online(on,off,key) {
  var Startpoint = metro[key].indexOf(on)
  var Endpoint = metro[key].indexOf('Richmond')
  ToRichmond = Math.abs(Endpoint - Startpoint)+1
  Online_Key = key

  //Get line direction
  if ((Endpoint - Startpoint)>0) { //left to right
    OnLine_Direction = metro[key][metro[key].length-1]
    TR_JourneyStations = metro[key].slice(Startpoint,Endpoint+1)
    } else {                    //right to left
    OnLine_Direction = metro[key][0]
    TR_JourneyStations = metro[key].slice(Endpoint,Startpoint+1).reverse()
  } 
}
function offline(on,off,key) {
  var Startpoint = metro[key].indexOf('Richmond')
  var Endpoint = metro[key].indexOf(off)
  FromRichmond = Math.abs(Endpoint - Startpoint)
  Offline_Key = key

  //Get line direction
  if ((Endpoint - Startpoint)>0) { //left to right
    OffLine_Direction = metro[key][metro[key].length-1]
    FR_JourneyStations = metro[key].slice(Startpoint+1,Endpoint+1)
    } else {                    //right to left
    OffLine_Direction = metro[key][0]
    FR_JourneyStations = metro[key].slice(Endpoint,Startpoint).reverse()
  } 
}

var btn = document.getElementById("jp_Button");
    btn.addEventListener('click', function() {
      console.log('HJgdskjsh')
      trip();
    } )

// var btnEnter = document.getElementById('jp_Button');
// btnEnter.addEventListener('click', console.log('dfksj'));

