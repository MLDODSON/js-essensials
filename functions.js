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

// Cslling a function from another one.
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