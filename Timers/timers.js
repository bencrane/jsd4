//setTimeout(changeGreen, 3000);
//setInterval(changeYellow, 2000);





// Setup
var timeId = null;
var color = "off";

// Timer function
// function changeColor() {
// 	if (color == "off") {
// 		color = changeYellow();
// 	}
// 	//else if (color == "green") {
// 	//	color = changeYellow();
// 	//} else if (color == "yellow") {
// 	//	color = changeRed();
	
// 	else if (color == "yellow") {
// 		color = turnOff();
// 	}
// }
	//}


function nightMode() {
	if (color)
}

function start() {
	timeId = setInterval(changeColor, 2000);
}

function stop() {
	 clearInterval(timeId);
}

//function partyMode() {
//	timeId = setInterval(flashWhite(), 2000);
//}

// function turnOff() {
// 	timeId = setInterval(changeBlack, 2000);
// }

function turnOff () {
	console.log("Off");
	return "off";
}

//function flashWhite() {
//	console.log("White White");
//	return "white white";
//}

function changeGreen() {
	console.log("Green");
	return "green";
}

function changeYellow() {
	console.log("Yellow");
	return "yellow";

}

function changeRed() {
	console.log("Red");
	return "red";
}


function flash() {
	stop();
}
