// Math Objects
//JS already has many built in math object methods

console.log(Math.PI);

console.log(Math.E);

var n = prompt("Enter a number please.", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

//Date Objects

function doThis() {
	console.log("Clean the basement.");
}

setInterval("doThis()", 2000);

//Clock

function printTime() {
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes();
	var seconds = now.getSeconds();
	console.log(hours+":"+mins+":"+seconds+" \n");
}
setInterval("printTime()", 1000);