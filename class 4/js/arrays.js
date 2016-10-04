// creates a new array 

var a = [1,2,3,5,8,13,21];
var days = ["Mon", "Tue", "Wed"];

// add new item to the array
a.push(34);


// removing one item from the array
var b = a.pop()

//Loops Technique #1 - forEach

//setup
var total = 0; 
a.forEach(add);

//named function
function add(number, index) {
	total = total + number;
	console.log(index, number);
}
console.log("total", total);


// anonymous function
days.forEach(function(day) {
	console.log(day)
});

// generic variable name
days.forEach(function(item) {
	console.log(item)
});

// Loops Technique #2 - for loop
var colors = ["red", "orange", "blue"];
for (var i = 0; i < colors.length-1; i++) {
	console.log(i, colors[i]);
}


/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" + q0)
*/

/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/

	// var q1 = ["image1.png", "image2.png", "image3.png"];
	// console.log(q1);

/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/

//	var q2 = q1[0];
//	console.log(q2);


/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/

	//var q3 = q1.length;
	//console.log(q3);


/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/

	//var q4 = q1[q3 - 1];
	//console.log(q4);



/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/

var numbers = [1,2,3,4];

for (i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i] + 1; 
}
console.log(numbers);


/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/

var total = 0;

for (i = 0; i< numbers.length; i++) {
	total = total + numbers[i];
}

q6 = total/numbers.length;
console.log(q6);
