function Obstacle(x) {
	this.x = x;
	this.y = height - 25;

	this.update = function() {
		this.x -= ospeed;
	}

	this.show = function() {
		fill(0, 0, 255);
		rect(this.x, this.y, w, h)
	}
}