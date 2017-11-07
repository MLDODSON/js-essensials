// Working with loops.

//For Loops
for(a=0;a<5;a++) {
	console.log("I will love Glenny forever!" + "\n");
}

for(b=0;b<10;b+=3) {
	console.log("Chocolate milk and me forever!" + "\n");
}

for(c=0;c<15;c++) {
	console.log("I just loved the new Thor movie!" + "\n");
}

//While Loops
var d = 1;

while(d<10) {
	console.log(d + " Go ahead. Make my day!" + "\n");
	d++;
}

var e = 1;

while(e<15) {
	console.log(e + " Who in the heck left my car door open?");
	e++;
}

//Do Loops
var z = 10;

do{
	console.log(z + " Hola mi amor!" + "\n");
	z++;
} while(z<=20);

var x = 5;

do{
	console.log(x + " I could use a cold cup of water right about now!" + "\n");
	x++;
} while(x<=16);

//For loop, another version
for (var g = 0; g<5; g++) {
	console.log(g);
}

for (var j=0; j<8; j++) {
	console.log(j);
}

//Practical use of a for loop
var teams = ["Saints", "Rams", "49ers", "Bears", "Broncos"];

for(var a = 0; a < 5; a++) {
	console.log(teams[a]);
}

var fruit = ["apple", "orange", "grape", "pear", "blue berry", "strawberry"];

for(var b = 0; b < 6; b++) {
	console.log(fruit[b]);
}

var meat = ["chicken", "pork", "beef", "fish"];

for(var c = 0; c < meat.length; c++) {
	console.log(meat[c]);
}

for(var c = meat.length -1; c >= 0; c--) {
	console.log(meat[c]);
}

//Another way to use the while loop
var c = 0;
while(c < meat.length) {
	console.log(meat[c]);
	c++;
}

//Using a break & continue statement

for (var m = 1; m <=10; m++) {
	console.log(m);
	
	if (m === 8) {
		break;
	}
}

for (var m = 1; m <=10; m++) {
	
	if (m === 5) {
		continue;
	}
	
	console.log(m);
}











