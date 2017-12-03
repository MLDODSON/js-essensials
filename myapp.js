var element = document.createElement("div");

element.style.cssText = "width:100px; height:20px; background:blue;";

element.onclick = function(){alert('Hi there!');};

document.body.appendChild(element);