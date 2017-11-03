// If Statements

var Susie = 15;
var Betty = 21;

if(Susie<Betty) {
	console.log("Suzie Q is Betty's baby sister.");
}

var Russell = 12;
var Fred = 11;

if(Russell>Fred) {
	console.log("Big Russ has worked here just a little longer Freddie.");
}

var Kim = 35;
var Ted = 35;

if(Kim===Ted) {
	console.log("I have two cousins who were born on the exact same day.");
}

var chicken = 13;
var steak = 12;

if(chicken!==steak) {
	console.log("I like the bird just a little more than the beef.");
}

var Ora = 72;
var Minnie = 74;

if(Ora<=Minnie) {
	console.log("My aunts are getting up there in age.");
}

var gold = 100;
var silver = 75;

if(gold>=silver) {
	console.log("The golden stuff is worth more than the silvery stuff.");
}

var Goku = 1000;
var Vegita = 950;

if(Goku>Vegita) {
	console.log("Son is stronger than the Prince of all Saiyans.");
}

var heroOne = 10;
var heroTwo = 5;

if(heroOne!==heroTwo) {
	console.log("Although very fast, Quicksilver moves like a snail compared to the flash.");
}

var cake = 10;
var pie = 10;

if(cake===pie) {
	console.log("I just love desserts. Maybe that's why I need to lose weight!");
}

var city = 150;
var town = 300;

if(city<town) {
	console.log("Columbia, MO is a lot closer than driving to Kansas City, MO.");
}

// More returns
function candyBar() {
	return "I love Butter Fingers!"
}

console.log(candyBar());


function mystery() {
	return "I wonder who drank the last of my cream soda?"
}

console.log(mystery());

function fastFood() {
	return "I think Pizza Hutt makes the best pizzas in town."
}

console.log(fastFood());

function addIt(a,b,c) {
	var d = a + b + c;
	return d;
}

console.log(addIt(1015,76,17));

function multiAdd(f,g,h) {
	var e = f * g + h;
	return e;
}

console.log(multiAdd(101,6,3008));

function divSub(l,m,n) {
	var o = l / m - n;
	return o;
}

console.log(divSub(210,10,3));

// More Assignment Operators
var rufas = 10;
rufas += 5;
rufas -= 4;
rufas *= 3;
rufas /= 2;

console.log(rufas);


var drinks = 10;
drinks++;
console.log(drinks);

var peanuts = 20 * 5;
peanuts--;
console.log(peanuts);


