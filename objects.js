// Objects have their own properties and methods.

/*
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
*/
//More member access practice

var car = {
	make: "volvo",
	speed: 160,
	engine: {
		size: 2.0,
		make: "bmw",
		fuel: "gas",
		pistons:[
			{maker: "BMW"},
			{maker: "BMW2"}
		]
	},
	drive: function() {return "drive";}
};

var array = [
	"string",
	100,
	["embed", 200],
	{car: "ford"},
	function() {return "drive";}
];

console.log(car.make);
console.log(car.speed);

car.engine.pistons[0];
console.log(car.engine.pistons[1]);
console.log(array[3]);

//Member Creation, Assignment & Deletion
car.make = "ford";
car.make += 2018;

car.speed["speed"] *= 2;
car.engine = {newengine: "new"};
car.drive = "drive";
car.model = "v60";
car.color = "jet black";
car.doors = 4;
car.go = function() {return "go";};

//things can also be deleted

delete car.go;

//Quick test. Add a name to the front and end of an array.
var siblings = ["kevin", "Angie", "Marie"];
console.log(siblings[1]);

siblings.unshift("Jethro");
siblings.push("Betty");

//Quick test. Return statement.
function moreMath (y,z) {
	var number = y + z;
	return number;
}
console.log(moreMath(39,17));

//Quick test. if else.

var angie = 41;
var marie = 40;
var kevin = 44;

if(angie >= marie && angie >= kevin) {
	console.log("We will eat dinner at Angie's house");
} else if(marie <= angie && marie >= kevin) {
	console.log("We will party at Marie's house");
} else {
	console.log("We will all have barbeque at Kevin's apartment");
}

if(marie >= angie || marie <= kevin) {
	console.log("We watch movies at Marie's house");
} else {
	console.log("We will all go out to see a movie");
}

//Quick test. Do an alert.
var marie = "chocolate pudding";
alert("I want " + marie + " for dessert.");

//Quick test. Do a prompt.

var person = prompt("Please enter your full name");
console.log(person);

//Callable Objects

function guy() 
{
	var fullName = "Bobby Jackson";
	function concat (guy) {
		return "Mr. " + guy;
	}
	return concat(fullName);
}
console.log(guy());



function name() 
{
	var fullName = "Chuck Taylor";
	return fullName;
}
console.log(name());

//Another way 
function man(fullname) 
{
	return fullname.firstname + fullname.lastname;
}
console.log(man({firstname:"Michael ", lastname:"Dodson"}));

function lady(fullname) 
{
	return fullname.firstname + fullname.middlename + fullname.lastname;
}
console.log(lady({firstname:"Mary ", middlename:"Ann ", lastname:"Jackson"}));

function thing(fullname) 
{
	return fullname();
}
console.log(thing(function(){return "Kit Kat Bar";}));


function runExpression() 
{
	var x = 20;
	function add()
	{
	return x + 80;
	}
	return add();	
}

//Constructors

function Grape(a,b,color,score) {
	this.a = a;
	this.b = b;
	this.color = color;
	this.score = score;
}
//Each grape has its own set of values
var grape1 = new Grape(5,15,"blue",200);
var grape2 = new Grape(15,26,"orange",300);
var grape3 = new Grape(12,75,"green",58);

























