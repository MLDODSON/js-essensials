// Functions.

function butter() {
	alert("Who stole my chicken and ate the last piece of cake?");
}

butter();

// The line of code inside your function is called a decleration.
function funkadelic() {
	alert("Not just knee deep.");
}

funkadelic();

// Using a function with a parameter
function wife(w) {
	alert("I just love " + w);
}

wife("Glenny.");

function squad(c) {
	alert("The baseball Cardinals are my favorite " + c);
}

squad("team.");

// You can also pass multiple values through the function.
function food(x) {
	alert("I love eating " + x);
}

food("steak.");
food("tuna.");
food("chocolate.");

// Using multi parameters
function places(a, b) {
	console.log(a + " and " + b + " are nice towns to visit.");
}

places("Puerto Plata", "Santiago");

function comics(c, d, e) {
	console.log("My favorite super heroes are " + c + ", " + d + " and " + e);
}

comics("Spider-Man", "Batman", "The Hulk.");
comics("Thor", "The Flash", "Wolverine.");
comics("Black Panther", "Martian Manhunter", "The Silver Surfer.");

// Return Statements
function easy() {
	return "Let's boogie!"
}

console.log(easy());

function multiply(a,b) {
	var c = a * b;
	return c;
}

console.log(multiply(6,4));

function leaving() {
	return "Gone fishing!";
}

console.log(leaving());

function addition(d,e) {
	var d = d + e;
	return d;
}

console.log(addition(100, 25));

function division(f,g) {
	var h = f/g;
	return h;
}

console.log(division(40,10));

function subtract(i,j) {
	var k = i - j;
	return k;
}

console.log(subtract(100,25));

function hitMe() {
	return "It's a home run! Cards win! Cards win!";
}

console.log(hitMe());

// Calling a function from another one.
function doFirst() {
	console.log("Go to the grocery store.");
}

function doSecond() {
	console.log("Pay the cable bill.");
}

function doThird() {
	console.log("Wash some clothes.");
}

function start() {
	doFirst();
	doSecond();
	doThird();
}

start();

// Global and local variables
// This is an example of a global var. It can be used outside the function.
var team = "Blues";
function spit() {
	console.log(team);
}

spit();
console.log(team);

//Local var. Can only be used inside the function.
function spit() {
	var lady = "Glenny";
	console.log(lady);
}

// Math operators
var eggs = 12 + 12;
console.log(eggs);

var grapes = 36 * 10;
console.log(grapes);

var peanuts = 12 * 12 - 10;
console.log(peanuts);

var apples = 15 % 4;
console.log(apples);

var pizzaslice = 32 / 4;
console.log(pizzaslice);

// Adding 1 to a variable
var hotdog = 35;
hotdog++;

console.log(hotdog);

// Subtracting 1
var cars = 3;
cars--;

console.log(cars);

// Examples of Assignment Operators
var mike = 49;
mike += 52;
mike -= 26;
mike *= 13;
mike /= 9;

console.log(mike);


// If Statement
// The if statement gives the program a decision to make. It will only run the code if true.
var Bo =  38;
var Glenn = 38;

if(Bo===Glenn) {
	console.log("My buddies are the same age.");
}

var Gloria = 30;
var Janice = 30;

if(Gloria<=Janice) {
	console.log("These ladies love watching The Game of Thrones.");
}

var Hulk = 100;
var Thor =  90;

if(Hulk!==Thor) {
	console.log("Mean green is a lot stronger than Goldie Locks in tons they can lift.");
}

// If Else Statement

var Annie = 15;
var Joe = 12;

if(Annie>=Joe) {
	console.log("Ann is older than Joey.");
} else {
	console.log("Joey is older than Ann.");
}

if(10>11) {
	console.log("I am winning.");
} else {
	console.log("I need some help.");
}