var cubeX;
var mouseEnX = 250;
var enY = 25;
var score = 0;
var e;
var wCube = 50;
var hCube = 50;
var speedEn = 5;
var highscore = 0;
var highscoreDist = 180;
var scoreDist = 250;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() {
	background(51);
	fill(255, 0, 0);
	cubeX = constrain(mouseX, wCube / 2, width- wCube / 2);
	rect(cubeX, height - 25, wCube, hCube);
	e = new enemy();
	enY = enY + speedEn;
	mousePosXEn();
	sIn();
	collcheck();	
	if (score > highscore) {
		highscore = score;
		localStorage.setItem('highscore3', highscore);
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


function mousePosXEn() {
	if (enY >= height - 25) {
		mouseEnX = cubeX;
		enY = 25;
		score = score + 1;
	}
}

function enemy() {
	fill(0, 0, 255);
	rect(mouseEnX, enY, 50, 50);
}

function sIn() {
	if (score == 10) {
		wCube = 100;
		speedEn = 7;
	}

	if (score == 20) {
		wCube = 150;
		speedEn = 10;
	}

	if (score == 40) {
		wCube = 200;
		speedEn = 5;
	}
}

function collcheck() {
	if (enY <= height - hCube / 2 && enY >= height - hCube ) {
		if ( cubeX >= mouseEnX - wCube && cubeX <= mouseEnX + wCube) {
			score = 0;
			enY = 25;
			mouseEnX = 250;
			wCube = 50;
			speedEn = 5;
			print('frick');
		}
	}
}