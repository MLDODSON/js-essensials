// Objects have their own properties and methods.

//This uses a property
var leon = "Leon is the man!";
console.log(leon.length);


function person(name, age) {
	this.name = name;
	this.age = age;
}

//Constructor function
//Creating a new instance of an object 
var rod = new person("Rod Munch", 49);
var glenny = new person("Glenny Perez", 30);

console.log(rod.age);
console.log(glenny.name, glenny.age);


function lady(name, age, eyes, hair) {
	this.name = name;
	this.hair = hair;
	this.eyes = eyes;
	this.age = age;
}

var paola = new lady("Paola Perez", "blondie", "brown", 21);

console.log(paola.name, paola.hair, paola.eyes, paola.age);


//Object Initializers
mike = {name:"Michael Hunter", age:39};
kim = {name:"Kim Taylor", age:25};

console.log(mike.name + " is " + mike.age + " and " + kim.name + " is " + kim.age + ".");