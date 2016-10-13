// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here

//var age = prompt("How old are you");


function getPrivilege(age) {
	var privilege;
	if (age < 16) {
		privilege = "You cannot do much outside of going to school.";
	} else if (age >= 16 && age < 18) {
		privilege = "You can drive.";
	} else if (age >= 18 && age < 21) {
		privilege = "You can drink alcohol."
	} else if (age >= 21 && age < 25) {
		privilege = "You can rent a car."
	} else if (age >= 35 && age < 62) {
		privilege = "You can run for president.";
	} else if (age >= 62) {
		privilege = "You collect social security benefits.";
}
	return privilege;
}

// function getPrivilege(age) {
// 	switch(age) {
// 		case age > 16
// 		return  
// 	}
// }

var products = [1, 2, 3, 4, 5];

// for (var i = 0; i < products.length; i++) {
// 	products[i] = products[i] + 1;
// 	console.log(products[i]);
// }

products.forEach(function(basketball, index) {
	basketball = basketball + 1;
	console.log(basketball);
});








