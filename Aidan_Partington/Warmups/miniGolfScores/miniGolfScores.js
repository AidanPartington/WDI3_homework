//https://gist.github.com/mattswann/41ac056f783c5de4cff4

var Hole_1 
var Hole_2 
var Hole_3 
var Hole_4 
var Hole_5 
var Hole_6 
var Hole_7 
var Hole_8 
var Hole_9 

Hole_1 = 3
Hole_2 = 2
Hole_3 = 6
Hole_4 = 11
Hole_5 = 9
Hole_6 = 2
Hole_7 = 6
Hole_8 = 9
Hole_9 = 10

//function BobScore(Hole_1,Hole_2,Hole_3,Hole_4,Hole_5,Hole_6,Hole_7,Hole_8,Hole_9) {
    var Bob_TS = (Hole_1 + Hole_2 + Hole_3 + Hole_4 + Hole_5 + Hole_6 + Hole_7 + Hole_8 + Hole_9 )
//}

Hole_1 = 5
Hole_2 = 12
Hole_3 = 9
Hole_4 = 22
Hole_5 = 13
Hole_6 = 7
Hole_7 = 16
Hole_8 = 10
Hole_9 = 11

//function JimboScore(Hole_1,Hole_2,Hole_3,Hole_4,Hole_5,Hole_6,Hole_7,Hole_8,Hole_9) {
    var Jimbo_TS = (Hole_1 + Hole_2 + Hole_3 + Hole_4 + Hole_5 + Hole_6 + Hole_7 + Hole_8 + Hole_9 )
//}

Hole_1 = 2
Hole_2 = 2
Hole_3 = 4
Hole_4 = 5
Hole_5 = 4
Hole_6 = 3
Hole_7 = 6
Hole_8 = 4
Hole_9 = 1
//function FishScore(Hole_1,Hole_2,Hole_3,Hole_4,Hole_5,Hole_6,Hole_7,Hole_8,Hole_9) {
    var Fish_TS = (Hole_1 + Hole_2 + Hole_3 + Hole_4 + Hole_5 + Hole_6 + Hole_7 + Hole_8 + Hole_9 )
//}

function totalScores(Bob_TS, Jimbo_TS, Fish_TS) {
  Club_House_TS = parseInt(Bob_TS, 10) + parseInt(Jimbo_TS, 10) + parseInt(Fish_TS, 10)
  console.log("The club house's totalscore is : " + Club_House_TS)
}

var Hole_par = [3,4,5,5,3,3,4,3,5]
var Hole_Bob = [3,2,6,11,9,2,6,9,10]
var Hole_Jimbo = [5,12,9,22,13,7,16,10,11]
var i

function Ninja_Extension() {
  for(i = 0; i < Hole_par; i++) {
    var Hole_score = Hole_Bob[i] - Hole_par[i]
    var Total_score = Hole_score + Hole_score
    
  }
  onsole.log(Total_score)
}