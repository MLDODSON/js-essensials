function mySalad(a, b, c, d, e, f) {
	var instructions = "Gather all your ingrediants." + "\n";
	instructions += "Chop up your " + a + "." + "\n";
	instructions += "Cut up your " + b + "." + "\n";
	instructions += "Chop up your boiled " + c + "." + "\n";
	instructions += "Slice up the " + d + "." + "\n";
	instructions += "Place everything in a large " + e + "." + "\n";
	instructions += "Add your favorite salad " + f + " and enjoy!";
	return instructions;
}

console.log(mySalad("lettuce", "tomatoes", "eggs", "onions", "bowl", "dressing"));