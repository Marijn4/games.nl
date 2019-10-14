var w = 500,
	h = 500,
	p,
	size = 25,
	speed = 3,
	ospeed = 2,
	gap = 100,
	obstacles = [],
	nrO = 0,
	dir,
	score = 0,
	scoreDist = 250,
	highscoreDist = 180,
	highscore;

function setup() {
	createCanvas(w, h);
	p = new Player();
	obstacles[nrO] = new Obstacle();
	dir = obstacles[nrO].side();
	highscore = localStorage.getItem('highscore');
}

function draw() {
	background(51);
	p.update();
	p.collision();
	p.show();
	obstacles[nrO].update();
	obstacles[nrO].show();
	if (score > highscore) {
		highscore = score;
		localStorage.setItem('highscore', highscore);
	}
	textSize(64);
	fill(255);
	if (score >= 10) {
		scoreDist = 275;
	}
	if (highscore >= '10') {
		highscoreDist = 200;
	}
	text('Score: ' + score, w - scoreDist, 50);
	textSize(32);
	text('Highscore: ' + highscore, w - highscoreDist, 80);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		p.direction(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		p.direction(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		p.direction(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		p.direction(-1, 0);
	}
}