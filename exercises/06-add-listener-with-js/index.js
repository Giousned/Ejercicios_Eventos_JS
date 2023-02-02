window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

function message () {
	alert("wuju");
  }

const button = document.getElementById("theGreen");

button.addEventListener("click", message);

