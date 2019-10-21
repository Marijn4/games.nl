var w = 50,
	h = 50,
	p, o = [], n = 0,
	dt = 0.01,
	jump = false,
	score = 0,
	scoreDist = 250,
	highscoreDist = 180,
	highscore = 0,
	ospeed = 5;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	p = new Player();
	o[0] = new Obstacle(width + 100);
	highscore = localStorage.getItem('highscore2');

}

function draw() {
	background(51);
	p.jump();
	p.show();
	p.collision();
	for (var i = o.length - 1; i >= 0; i--) {
		o[i].update();
		o[i].show();
	}
	if (o[n].x <= 0) {
		o[n + 1] = new Obstacle(width + 100);
		n++;
		score++;
		ospeed += 0.25;
	}
	if (score > highscore) {
		highscore = score;
		localStorage.setItem('highscore2', highscore);
	}
	textSize(64);
	fill(255);
	if (score >= 10) {
		scoreDist = 275;
	}
	if (highscore >= '10') {
		highscoreDist = 200;
	}
	text('Score: ' + score, width - scoreDist, 50);
	textSize(32);
	text('Highscore: ' + highscore, width - highscoreDist, 80);
}

function keyPressed() {
	if (keyCode === 32) {
		jump = true;
	}
} 

function keyReleased() {
	if (keyCode === 32) {
		jump = false;
	}
}