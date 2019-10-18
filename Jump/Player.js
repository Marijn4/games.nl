function Player() {
	this.x = width / 2 - 100;
	this.y = height - h / 2;
	this.yspeed = 0;

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, w, h);
	}

	this.jump = function() {
		if (jump) {
			this.yspeed = -5;
		}
		if (this.y === 300) {
			jump = false;
			this.yspeed = 5;
		}
		this. y += this.yspeed;
		this.y = constrain(this.y, 0, height - h / 2);
	}
}