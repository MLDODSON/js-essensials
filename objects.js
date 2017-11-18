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

ben = {weight:280, career:"web developer"};
joy = {weight:125, career:"nurse"};

console.log("Ben weights " + ben.weight + " and is a " + ben.career + ".");

//Adding methods to objects
function man(name, age) {
	this.name = name;
	this.age = age;
	this.yearsToRetire = yearsLeft;
}

function yearsLeft () {
	var numYears = 65 - this.age;
	return numYears;
}

var chuckie = new man ("Chuckie Booker", 24);
console.log(chuckie.yearsToRetire());

//A different way to write an object

var car = {
	make: "charger",
	speed: 160,
	engine: {
		size: 6.1,
		make: "Hemi ESF",
		fuel: "gas"
}
};

var may = {
	age: 66,
	occupation: "Minister",
	hobby: "cooking",
	children: {
		one: "Vincent",
		two: "Arthur",
		three: "Jerry",
		four: "Cassetta",
		five: "Rosetta",
		six: "David"
	}
};

//Acessing members inside of an object

var car = {
	make: "charger",
	speed: 160,
	engine: {
		size: 6.1,
		make: "Hemi ESF",
		fuel: "gas"
}
};

console.log(car.speed);

//To access a member all we needed was car. and then the name of 1 of the members

var car = {
	make: "charger",
	speed: 160,
	engine: {
		size: 6.1,
		make: "Hemi ESF",
		fuel: "gas"
}
};

console.log(car.engine);

//To access a member of a member

var car = {
	make: "charger",
	speed: 160,
	engine: {
		size: 6.1,
		make: "Hemi ESF",
		fuel: "gas"
}
};

console.log(car.engine.size);