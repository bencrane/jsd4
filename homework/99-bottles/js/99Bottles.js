// Elements
// ------------------------------------------
 var ul = document.querySelector(".lyrics");

// Create unordered list element and add to lyrics section
var ul = document.querySelector(".lyrics");


// Update page
// ------------------------------------------

function createSong(count) {
	var li = document.createElement("li");
	if (count === 1) {
		var text = count + " bottle of beer on the wall, " + count + " bottle of beer.<br>" +
        "Take one down and pass it around, no more bottles of beer on the wall."	
    }
    else if (count === 2) {
        var text = count + " bottles of beer on the wall, " + count + " bottles of beer.<br>" +
        "Take one down and pass it around, " + (count - 1) + " bottle of beer on the wall."
    }
    else if (count === 0) {
        var text = "No more bottles of beer on the wall, no more bottles of beer.<br>" +
        "Go to the store and buy some more, 99 bottles of beer on the wall."
    }
    else {
        var text = count + " bottles of beer on the wall, " + count + " bottles of beer.<br>" +
        "Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall."
    }
    li.innerHTML = text;
    ul.appendChild(li);
}


// for loop to count through the number of bottles
for (var i = 99; i > -1; i--){
	createSong(i);
}

console.log("99 bottles of beer on the wall!");


///NOTES
//// if the number of bottles is 1, 
// print out the lyric as 'bottle' of beer on the wall
// print count + "bottle of beer on the wall" + count + "bottle of beer."
// print "Take one down and pass it around, no more bottles of beer on the wall.


//// if the number of bottles is more than 1
//print out the lyric as 'bottles' of beer on the wall
// print count + "bottles of beer on the wall" + count + "bottles of beer."
// print "Take one down and pass it around, " + count-- + "bottles of beer on the wall."


//// if the number of bottles is 0
// print out "No more bottles of beer on the wall, no more bottles of beer.
// print out "Go to the store and buy some more," + COUNT - 1 + "bottles of beer on the wall.

