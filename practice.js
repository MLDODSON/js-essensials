// Practice

function cookie() {
	return "I love Oreos!"
}

console.log(cookie());

function grapes(a,b) {
	var c = a + b;
	return c;
}

console.log(grapes(38,62));

function cash(a) {
	console.log("I need " + a + " to buy that television.");
}

cash("50 more dollars");

function nickName(a) {
	console.log(a + 10 + ".");
}

nickName("Ben ");

function trip(a,b) {
	console.log("We are going to visit " + a + " and later " + b + " next year.");
}

trip("Houston,TX", "Orlando,FL");

function first() {
	console.log("Eat breakfast.");
}

function second() {
	console.log("Do your exercises.");
}

function third() {
	console.log("Watch some T.V.");
}

function sunday() {
	first();
	second();
	third();
}

sunday();

function dinner() {
	alert("Wake up you bums. It's time to eat!");
}

dinner();

function meat(x) {
	console.log("I love to eat " + x);
}

meat("chicken.");
meat("steak.");
meat("barbeque.");
meat("tuna.");

if(20===20) {
   console.log("This is just like this one.");
}

var ted = 24;
var bill = 21;

if(ted>=bill) {
	console.log("Ted is older than bill.");
}

if(35<11) {
	console.log("Let's go out to eat.");
} else {
	console.log("We are staying home.");
}

var eagle = 30;
var falcon = 28;

if(falcon<eagle) {
	console.log("Eagles are greater than falcons.");
} else {
	console.log("Falcons are greater than eagles.");
}

if(26!==50) {
	console.log("I will have a beer tonight.");
} else {
	console.log("I will have a glass of wine tonight.");
}

var lion = 12 + 16;
console.log(lion);

var tiger = 96 + 55;
tiger++;
console.log(tiger);

var bear = 106 - 13;
console.log(bear);

var spider = 125 - 48;
spider--;
console.log(spider);

var panther = 76 * 18;
console.log(panther);

var ape = 138 / 2;
console.log(ape);

var tarzan = 58 % 3;
console.log(tarzan);

var points = 20;
points += 25;
console.log(points);

var score = 106;
score -= 13;
console.log(score);

var multy = 12;
multy *= 16;
console.log(multy);

var div = 312;
div /= 3;
console.log(div);

var mod = 12;
mod %= 5;
console.log(mod);

var person = "Mike ";
person += "Dodson";
console.log(person);

var team = "St. Louis ";
team += "Blues";
console.log(team);

var firstName = "Bertha";
var lastName = "Gomez";

if(firstName==="Bertha") {
	if(lastName==="Gomez") {
		console.log("Bertha Gomez is a beautiful woman!");
	}
}

var herFirst = "Patty";
var herLast = "Garcia";

if(herFirst==="Patty") {
	if(herLast==="Jose") {
		console.log("I am married to Patty Garcia");
	} else {
		console.log("Patty Garcia is not my wife.");
	}
}