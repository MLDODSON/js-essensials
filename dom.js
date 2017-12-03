// Working with DOM.

console.log(document.getElementById("hello"));
 
document.getElementById("meat").innerText = "I smell barbeque.";


//DOM Manipulation using innerText
var pLove = document.getElementById("love");

pLove.innerText = "Give your husband a hug";

pLove.innerText += " and a big kiss.";


//DOM Manipulation using innerHTML
var pTeam = document.getElementById("team");

pTeam.innerText = "I love the St. Louis";

pTeam.innerHTML += " baseball Cardinals <span>uniforms.</span>";

//Using outerHTML
var pHello = document.getElementById("hello");

pHello.innerText = "Can we";

pHello.innerHTML = " rock? <span>What's up Doc?</span>";

pHello.outerHTML = "<h2 id='hello'>Can we rock? <span>What's up Doc?</span></h2>";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	