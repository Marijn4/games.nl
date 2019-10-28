window.onload = function() {
	document.getElementById("hSnake").innerHTML = "SNAKE: " + localStorage.getItem('highscore');
	document.getElementById("hSlide").innerHTML = "SLIDE: " + localStorage.getItem('highscore1');
	document.getElementById("hJump").innerHTML = "JUMP: " + localStorage.getItem('highscore2');
	document.getElementById("hFall").innerHTML = "FALL: " + localStorage.getItem('highscore3');
}