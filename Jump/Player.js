function Player() {
	this.x = width / 2;
	this.y = height - h / 2;
	this.v = 0;

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, w, h);
	}

	this.jump = function() {
		this.v = -100;
		this.y = this.y + this.v * dt;
	}
}