var hScore, hScore1, hScore2, hScore3;

window.onload = function() {
	hScore = localStorage.getItem('highscore');
	hScore1 = localStorage.getItem('highscore1');
	hScore2 = localStorage.getItem('highscore2');
	hScore3 = localStorage.getItem('highscore3');

	if (localStorage.getItem('highscore') === null) {
		hScore = 0;
	}
	if (localStorage.getItem('highscore1') === null) {
		hScore1 = 0;
	}
	if (localStorage.getItem('highscore2') === null) {
		hScore2 = 0;
	}
	if (localStorage.getItem('highscore3') === null) {
		hScore3 = 0;
	}


	document.getElementById("hSnake").innerHTML = "SNAKE: " + hScore;
	document.getElementById("hSlide").innerHTML = "SLIDE: " + hScore1;
	document.getElementById("hJump").innerHTML = "JUMP: " + hScore2;
	document.getElementById("hFall").innerHTML = "FALL: " + hScore3;
}