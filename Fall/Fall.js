var cubeX;
var rndPosX;
var enY;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() {
	background(51);
	fill(255, 0, 0);
	cubeX = constrain(mouseX, 25, width- 25);
	rect(cubeX, height - 25, 50, 50);
	rect(rndPosX, enY + 25, 50, 50);
	enY = enY + 1;
	if (enY = height - 25) {
		rndPosX = random(25 , width - 25);
	}
}

