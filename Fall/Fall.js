var cubeX;
var mouseEnX = 250;
var enY = 25;
var score = 0;
var e;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() {
	background(51);
	fill(255, 0, 0);
	cubeX = constrain(mouseX, 25, width- 25);
	rect(cubeX, height - 25, 50, 50);
	e = new enemy();
	enY = enY + 5;
	mousePosXEn();
	collcheck();
	textSize(24);
	text('Score: ' + score, width - 490 , 25);
}


function mousePosXEn() {
	if (enY >= height - 25) {
		mouseEnX = cubeX;
		enY = 25;
		score = score + 1;
	}
}

function enemy() {
	rect(mouseEnX, enY, 50, 50);
}

function collcheck() {
	if (enY <= height - 25 && enY >= height - 50 ) {
		if ( cubeX >= mouseEnX - 25 && cubeX <= mouseEnX + 25) {
			score = 0;
			enY = 25;
			mouseEnX = 250;
			print('frick');
		}
	}
}