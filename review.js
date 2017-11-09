// Reviewing what you have learned

//3 functions with an alert or decleration

function awake() {
	alert("Rise and shine! It's time to get up.");
}

awake();

function sleep() {
	alert("Nighty night!");
}

sleep();

function snack() {
	alert("Time for some ice cream!");
}

snack();


//3 functions with single parameters

function team(a) {
	console.log("Let's go " + a);
}

team("Blues.");

function planet(b) {
	console.log("I wonder what " + b + " is like?")
}

planet("Mars");

function dairy(c) {
	console.log("There was so much " + c + " on that tasty pizza!");
}

dairy("cheese");


//3 multi parameters

function wisdom(a,b) {
	console.log("Sometimes you " + a + " and sometimes you " + b);
}

wisdom("win", "lose.");

function saying(c,d) {
	console.log("Keep your " + c + " close and your " + d + " closer.")
}

saying("friends", "enemies");

function natureBoy(e,f,g) {
	console.log("To be the " + e + " you have to " + f + " the man. " + g);
}

natureBoy("man", "beat", "WHOOOH!");


//4 Return statements

function happy() {
	return "It's great to be in love!"
}

console.log(happy());

function drink() {
	return "Pass the Barcardi Rum please."
}

console.log(drink());

function music() {
	return "Rick James was a bad Muthaf8!cker"
}

console.log(music());

function comediens() {
	return "Richard Pryor and George Carlin were two of the greatest of all time!"
}

console.log(comediens());


//3 Returns with a variable

function add(a,b,c) {
	var d = a + b + c;
	return d;
}

console.log(add(2,12,119));

function addOne(h,i) {
	var j = h * i;
	j++;
	return j;
}

console.log(addOne(6,5));

function minusOne(x,y) {
	var z = x / y;
	z--;
	return z;
}

console.log(minusOne(50,5));


var man = 20;
var woman = 20;


//3 If statements

if(man===woman) {
	console.log("Let's all come together.");
}

if(6>=5) {
	console.log("I need a cream soda.");
}

var joy = 75;
var pain = 80;

if(joy!==pain) {
	console.log("The sun will come out tomorrow!");
}

//3 if else statements

var up = 36;
var down = 30;

if(up>=36) {
	console.log("Yes! We won.");
} else {
	console.log("Darn! We lost!");
}

if(55>=74) {
	console.log("We are going out to eat.");
} else {
	console.log("I am going to stay home and barbeque.");
}

var come = 110;
var go = 95;

if(go===95) {
	console.log("I'll have pancakes with bacon.");
} else {
	console.log("I will have bacon and eggs.");
}

// 3 for loops

var color  = ["red", "orange", "green", "purple", "silver", "brown"];

for(var a = 0; a < 6; a++ ) {
	console.log(color[a]);
}

for (var b = 0; b < color.length; b++) {
	console.log(color[b]);
}

for (var c = color.length - 1; c > 0; c--) {
	console.log(color[c]);
}

// 3 while loops

var weather = ["rain", "snow", "sunny", "foggy"];

var d = 0;
while(d < weather.length) {
	console.log(weather[d]);
	d++;
}

var candy = ["snickers", "milkyway", "butterfinger", "kitkat"];

var m = 0;
while(m < candy.length) {
	console.log(candy[m]);
	m++;
}

var soda = ["Cherry Coke", "Sunkist", "A&W", "Mountain Dew"];

var z = 0;
while(z < soda.length) {
	console.log(soda[z]);
	z++;
}






