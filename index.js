window.onload = function() {
	document.getElementById("hSnake").innerHTML = "SNAKE: " + localStorage.getItem('highscore');
	document.getElementById("hSlide").innerHTML = "SLIDE: " + localStorage.getItem('highscore1');
}