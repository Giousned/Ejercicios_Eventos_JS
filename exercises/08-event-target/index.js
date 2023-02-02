window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let text = event.target.id;
		text.innerHTML = alert(text);
	});
};


