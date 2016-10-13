/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// var monkey =  {
// 	monkey.name = 'Jerry';
// 	monkey.species = 'Orangutan';
// 	monkey.foodsEaten = ['Oranges', 'Apples', 'Bananas'];

// 	eatSomething = function(food) {
// 		return X
// 	}

// 	introduce = function() {

// 	}


var Monkey = function(name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;

	this.eatSomething = function() {
		return "I like to eat" + this.foodsEaten;
	}
	this.introduce = function() {
		return "Hi my name is " + name + "and I am an " + species + "and I enjoy eating "+ foodsEaten["1"] + ", " + foodsEaten["2"] + "and " + foodsEaten["3"] + ".");
	}
}

Monkey.prototype = {
	eatSomething: function(food){
	return  
	},
	introduce: function(name, species, foodsEaten){
	return "Hi my name is " + name + "and I am an " + species + "and I enjoy eating "+ foodsEaten["1"] + ", " + foodsEaten["2"] + "and " + foodsEaten["3"] + ".");
	}

var monkey1 = new Monkey("");
var monkey2 = new Monkey();
var monkey3 = new Monkey();

}

var Monkey = function(name,species)
	this.name = name;
	this species = species;
	this.foodsEaten = [];

	}

Monkey.prototype = {
	this.eatSomething = function() {
		console.log("eatSomething", food);
		this.foodsEaten.push(food);


	this.introduce = function() {
		console.log("fn eatSomething");

		return "My name is " + this.name

	}
};

var monkey1 = new Monkey("Jack", "Howler");
monkey1.eatSomething("Pineapple");
monkey1.eatSomething("Banana");






