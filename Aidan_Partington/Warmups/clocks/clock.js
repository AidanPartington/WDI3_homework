var degree = 0
var minutedegree = 0
var hourdegree = 0

function secondTimer() {
	console.log(degree);
	degree += 6
	console.log(degree/6);
	$("#second-hand").css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
}

function minuteTimer() {
	console.log(minutedegree);
	minutedegree += 6
	console.log(minutedegree/6 +"mins");
	$("#minute-hand").css({ WebkitTransform: 'rotate(' + minutedegree + 'deg)'});
}

function hourTimer() {
	console.log(degree);
	hourdegree += 30
	$("#hour-hand").css({ WebkitTransform: 'rotate(' + hourdegree + 'deg)'});
}

setInterval(hourTimer,3600000);
setInterval(minuteTimer,60000);
setInterval(secondTimer, 1000);

