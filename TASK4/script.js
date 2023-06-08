document.addEventListener("DOMContentLoaded", function() {
	var display = document.getElementById("display");
	var buttons = document.getElementsByClassName("button");
	var clearButton = document.getElementsByClassName("clearButton")[0];
	var equalButton = document.getElementsByClassName("equalButton")[0];

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			display.value += this.innerHTML;
		});
	}

	clearButton.addEventListener("click", function() {
		display.value = "";
	});

	equalButton.addEventListener("click", function() {
		try {
			var result = eval(display.value);
			display.value = result;
		} catch (error) {
			console.log("Error:", error);
			display.value = "Error";
		}
	});
});
