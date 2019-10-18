var w = 50,
	h = 50,
	p,
	dt = 0.01,
	jump = false;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	p = new Player();
}

function draw() {
	background(51);
	p.jump();
	p.show();
}

function keyPressed() {
	if (keyCode === 32) {
		jump = true;
	}
}