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

