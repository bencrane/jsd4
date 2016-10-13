// Elements
// ------------------------------------------
var form = document.querySelector("body form");

// get the parent list from the Document
var things = document.querySelector(".things");

// get the input from the DOM
var thing = document.querySelector(".new-thing");

// Events
// ------------------------------------------
form.addEventListener('submit', createThing);



// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// TODO: take value typed into input box and 
	// add to list

	console.log(thing);
	console.log(thing.value);

	if (thing.value === "") {
		alert("You must type in a value!");
		return;
	}

	// step 1: create the element
	var li = document.createElement("li");

	//step 2: add content & attributes
	li.innerHTML = thing.value;

	//step 3: add the new element to the DOM
	things.appendChild(li);

	// clean up step
	thing.value = "";
}

