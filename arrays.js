// Arrays

var people = new Array("Pete", "Susie", "Pam", "Othelo", "Winston");

console.log(people[1]);

var stuff = new Array(4);

stuff[0] = "cardinal jersey";
stuff[1] = "comic books";
stuff[2] = "book collection";
stuff[3] = "video games";

console.log(stuff[2]);

var flavor = new Array();

flavor[0] = "chocolate";
flavor[1] = "vanilla";

console.log(flavor[1]);


//Array Properties and Methods

var teams = new Array("Rams", "Cardinals", "Blues", "Warriors");

console.log(teams.length);

var colors = new Array("gold", "black", "purple", "silver");
var girls = new Array("Hope", "Paola", "Carosa", "Catherine");

var group = colors.concat(girls);

console.log(group[6]);


//Join and Pop

//join
var heroes = new Array("Spider-Man", "Hulk", "Batman", "Wolverine");

var string1 = heroes.join();

console.log(string1);

//join using a customized string
var villians = new Array("Dr. Doom", "Green Goblin", "Loki", "Joker");

var string2 = villians.join(" • ");

console.log(string2);

//pop removes the last element from an array

var uncles = new Array("Pete", "Phil", "Marvin", "Earl", "Bruce");

console.log(uncles[4] + "<br />");
uncles.pop();

console.log(uncles[4]);
uncles.pop();


//reverse

var cars = new Array("Honda", "Volvo", "Dodge", "Ford", "Buick");

cars.reverse();

console.log(cars[0]);


//push adds an element to the end of your array

var iceCream = new Array("cherry", "vanilla", "strawberry", "rocky road", "butter pecan");

iceCream.push("banana", "orange sherbert");

console.log(iceCream[6]);


//sort places your elements in alphabetical order

var animals = new Array("horse", "lion", "zebra", "tiger", "giraffe", "elephant"); 
animals.sort();
var string3 = animals.join(" • ");
console.log(string3);

//Add Array Elements Using a Loop

var fruit = prompt("Enter your name:", "");
console.log("What's up " + fruit + "?");


var junk = new Array(3);

for(i=0;i<3;i++) {
	junk[i] = prompt("Enter something please:", "");
}

console.log(junk[0] + junk[1] + junk[2]);


//Cool Technique to Print Array Elements

var warriors = new Array("Curry", "Durant", "Green", "Thompson", "McGee");
warriors.sort();

for(a=0;a<warriors.length;a++) {
	console.log(warriors[a] + "\n");
}


//Associative Arrays

var mike = new Array();
mike["weight"] = 235;
mike["food"] = "steak";

console.log("Mike weights " + mike["weight"] + " pounds.");
console.log("Mike loves " + mike["food"] + ".");


//We can also write an array like this:

var city = ["St. Louis", "New York", "Paris", "Atlanta", "Miami"];
console.log(city[2]);
//Will print out Paris

var shopList = ["milk", "bread", "chicken", "peanut butter", "cereal", "bacon"];
console.log(shopList[4]);



