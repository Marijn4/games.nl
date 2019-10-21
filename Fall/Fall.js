var cubeX;
var mouseEnX = 250;
var enY = 25;
var score = 0;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() {
	background(51);
	fill(255, 0, 0);
	cubeX = constrain(mouseX, 25, width- 25);
	rect(cubeX, height - 25, 50, 50);
	rect(mouseEnX, enY, 50, 50);
	enY = enY + 5;
	mousePosXEn();
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
