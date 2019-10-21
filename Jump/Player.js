function Player() {
	this.x = width / 2 - 100;
	this.y = height - h / 2;
	this.yspeed = 0;

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, w, h);
	}

	this.jump = function() {
		if (jump && this.y === height - h /2) {
			this.yspeed = -7;
		}
		if (this.y === 300) {
			this.yspeed = 7;
		}
		this. y += this.yspeed;
		this.y = constrain(this.y, 0, height - h / 2);
	}

	this.collision = function() {
		if (this.x + w > o[n].x && this.x + w < o[n].x + w) {
			if (this.y + h >= o[n].y) {
				noLoop();
				location.reload();
			}
		} else if (this.x > o[n].x && this.x < o[n].x + w) {
			if (this.y + h >= o[n].y) {
				noLoop();
				location.reload();
			}
		}
	}
}