// Functions Quiz, declerations.

function cheese() {
	alert("Friday is payday!");
}

cheese();


function trip() {
	alert("I love to visit Puerto Plata in the Dominican Republic.");
}

trip();


function exercise() {
	alert("Time to get your butt back in shape!");
}

exercise();


function education() {
	alert("Coding is fun!");
}

education();


function villian() {
	alert("Do not mess with Thanos of Titan!");
}

villian();


function greatest() {
	alert("Jerry Rice is the best to ever play in the NFL.")
}

greatest();


function movie() {
	alert("Thor: Ragnorak opens tonight!");
}

movie();


function stop() {
	alert("Put my candy down now!");
}

stop();


function dessert() {
	alert("Cherry cheesecake for everyone!");
}

dessert();


function groceries() {
	alert("Do not forget my Chips Ahoys this time!");
}

groceries();



//Functions Quiz, parameters.
function person(a) {
	alert("I love " + a);
}

person("Mom!");


function move(b) {
	alert("Someday I want to live in " + b);
}

move("Orlando, Florida.");


function age(c) {
	alert("Mrs. Wilson just turned " + c);
}

age("one hundred!");


function conflict(d) {
	alert("They get along like " + d);
}

conflict("oil and water.");


function music(e) {
	alert("My favorite music group is " + e);
}

music("Parliament/Funkadelic.");


function relax(f)  {
	alert("I love to kick back and listen to " + f);
}
		  
relax("some Jazz!");


function growth(g) {
	alert("We all must fall before we " + g);
}

growth("walk.");


function boom(h) {
	alert("The bigger they are, the harder they " + h);
}

boom("fall!");


function binge(i) {
	alert("I could watch " + i + " all day!");
}

binge("Netflix");


function tasty(j) {
	alert(j + " is a delicious delight!");
}

tasty("Devil's food cake");


// function passing multiple values through.
function artist(x) {
	alert("I love listening to " + x);
}

artist("Prince.");
artist("Michael Jackson.");
artist("Quincy Jones.");


function player(l) {
	alert(l + " is my favorite NBA Player of all time.")
}

player("Dr. J.");
player("Moses Malone");
player("Chocolate Thunder");

function hobby(m) {
	alert("I really enjoy " + m + " in my spare time.");
}

hobby("reading Stephen King novels");
hobby("watching classic movies");
hobby("listening to old vinyl records");
hobby("reading comic books");
hobby("visiting my aunt for talks");

// Functions using multi parameters.
function menu(t, u) {
	console.log("I'll have " + t + " and " + u + " with my order.");
}

menu("steak", "fries");


function patience(l, m) {
	console.log(l + " don't " + m + " We will get there soon.");
}

patience("Walk,", "run.");

function command(n, o, p) {
	console.log("I have three rules: " + n + o + " and " + p);
}

command("be on time,", "pay attention", "work hard.");


function wisdom(q, r) {
	console.log("The man who says " + q + " and the man who says " + r + " are both right.");
}

wisdom("he can", "he can not,");


function novels(a, b, c, d) {
	console.log("My favorite Stephen King books are " + a + b + c + " and " + d);
}

novels("The Dark Tower, ", "The Stand, ", "It", "End of Watch." );


function tyrant(e, f) {
	console.log("So fell " + e + f);
}

tyrant("Lord ", "Perth.");

function transformers(g, h, i, j, k) {
	console.log("My favorite " + g + " are " + h + i + j + k);
}

transformers("decepticons", "Megatron, ", "Starscream, ", "Galvatron", " and Six Shot.");


function keepOn(y, z) {
	console.log("Keep on " + y + z + " til you get enough!");
}

keepOn("coding! ", "Don't stop");


function song(s,r) {
	console.log("Let the " + s + " keep on " + r);
}

song("music", "playing!");


function tvStation(a, b, c) {
	console.log("Who has the best shows? Is it " + a + b + " Or is it " + c);
}

tvStation("HBO? ", "Showtime?", "Netflix?");


// Return Statements
function dance() {
	return "Let's get down baby!"
}

console.log(dance());


function feedMe() {
	return "Where are those burgers? I'm starving!"
}

console.log(feedMe());


function rest() {
	return "I've been working hard all week. My bed is calling me!"
}

console.log(rest());


function ricFlair() {
	return "Learn to love it! Whoooo!"
}

console.log(ricFlair());


function math(a, b) {
	var c = a + b;
	return c;
}

console.log(math(26, 14));


function minus(c, d) {
	var e = c - d;
	return e;
}

console.log(minus(1076, 139));

function love() {
	return "That's the way I feel about you mi amor."
}

console.log(love());

function multiMath(x, y, z) {
	var w = x + y * z;
	return w;
}
	
console.log(multiMath(5,11,16));

function pest() {
	return "Yes it's me again!"
}

console.log(pest());


function moreMath(h, i, j) {
	var g = h * i / j;
	return g;
}

console.log(moreMath(26,4,2));


// Calling a function from another one.
function doFirst() {
	console.log("Clean my desk off.");
}

function doSecond() {
	console.log("Take out the trash.");
}

function start() {
	doFirst();
	doSecond();
}

start();


function now() {
	console.log("Practice your coding.");
}

function later() {
	console.log("You need to workout.");
}

function doIt() {
	now();
	later();
}

doIt();


function first() {
	console.log("Pick up my wife.");
}

function second() {
	console.log("Take her out to dinner.");
}

function third() {
	console.log("Take her to a movie.");
}

function fourth() {
	console.log("Spend a romantic evening at home.")
}

function dateNight() {
	first();
	second();
	third();
	fourth();
}

dateNight();

function one() {
	console.log(12 * 8);
}

function two() {
	console.log(1066 + 786);
}

function allTogether() {
	one();
	two();
}

allTogether();


function three() {
	console.log(33 * 3 - 16);
}

function four() {
	console.log(50 - 7 * 12);
}

function calculate() {
	three();
	four();
}

calculate();


// Math operators
var hits = 386 + 22;
console.log(hits);

var soda = 20 + 30;
soda++;
console.log(soda);

var captainCrunch = 10 - 2;
captainCrunch--;
console.log(captainCrunch);

var chips = 50 % 3;
console.log(chips);

var whiteCastles = 24 / 6;
console.log(whiteCastles);

var truck = 33 - 11 / 2;
console.log(truck);

var dunks = 82 / 3;
console.log(dunks);

var candy = 44 * 22 / 16;
console.log(candy);

var calorieloss = 3500 * 6;
console.log(calorieloss);

var pushUps = 2086 / 7;
console.log(pushUps);

function lostWeight(a,b) {
	var m = a - b;
	return m;
}

console.log(lostWeight(235,9));
