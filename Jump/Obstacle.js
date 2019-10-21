function Obstacle() {
	this.x = width + 100;
	this.y = height - 25;

	this.update = function() {
		this.x -= 3;
	}

	this.show = function() {
		fill(0, 0, 255);
		rect(this.x, this.y, w, h)
	}
}