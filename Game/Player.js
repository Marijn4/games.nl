function Player() {
	this.x = w / 2;
	this.y = h / 2;
	this.xspeed = 0;
	this.yspeed = 0;

	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		this.x = constrain(this.x, 0, w - size);
		this.y = constrain(this.y, 0, h - size);
	}

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, size, size);
	}

	this.direction = function(x, y) {
		this.xspeed = x * speed;
		this.yspeed = y * speed;
	}

	this.collision = function() {
		if (obstacles[nrO].direction === 'up') {
			if (this.x < obstacles[nrO].x1 + obstacles[nrO].w1 || this.x + size > obstacles[nrO].x2) {
				if (this.y + size >= obstacles[nrO].y1 && this.y <= obstacles[nrO].y1 + obstacles[nrO].h1) {
					this.stop();
				}
			}
		} else if (obstacles[nrO].direction === 'down') {
			if (this.x < obstacles[nrO].x1 + obstacles[nrO].w1 || this.x + size > obstacles[nrO].x2) {
				if (this.y <= obstacles[nrO].y1 + obstacles[nrO].h1 && this.y + size >= obstacles[nrO].y1) {
					this.stop();
				}
			}
		} else if (obstacles[nrO].direction === 'left') {
			if (this.y < obstacles[nrO].y1 + obstacles[nrO].h1 || this.y + size > obstacles[nrO].y2) {
				if (this.x + size >= obstacles[nrO].x1 && this.x <= obstacles[nrO].x1 + obstacles[nrO].w1) {
					this.stop();
				}
			}
		} else if (obstacles[nrO].direction === 'right') {
			if (this.y < obstacles[nrO].y1 + obstacles[nrO].h1 || this.y + size > obstacles[nrO].y2) {
				if (this.x <= obstacles[nrO].x1 + obstacles[nrO].w1 && this.x + size >= obstacles[nrO].x1) {
					this.stop();
				}
			}
		}
		
	}

	this.stop = function() {
		noLoop();
		location.reload();
	}
}