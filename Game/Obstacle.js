function Obstacle() {
	this.side = function() {
		this.directions = ['up', 'down', 'left', 'right'];
		this.direction = random(this.directions);
		if (this.direction === 'up') {
			this.xspeed = 0;
			this.yspeed = -1;
			this.w1 = random(w - gap);
			this.w2 = w - this.w1 - gap;
			this.h1 = this.h2 = 50;
			this.x1 = 0;
			this.x2 = this.x1 + this.w1 + gap;
			this.y1 = this.y2 = h;
			return 'up';
		} else if (this.direction === 'down') {
			this.xspeed = 0;
			this.yspeed = 1;
			this.w1 = random(w - gap);
			this.w2 = w - this.w1 - gap;
			this.h1 = this.h2 = 50;
			this.x1 = 0;
			this.x2 = this.x1 + this.w1 + gap;
			this.y1 = this.y2 = 0 - this.h1;
			return 'down';
		} else if (this.direction === 'left') {
			this.xspeed = -1;
			this.yspeed = 0;
			this.h1 = random(h - gap);
			this.h2 = h - this.h1 - gap;
			this.w1 = this.w2 = 50;
			this.y1 = 0;
			this.y2 = this.y1 + this.h1 + gap;
			this.x1 = this.x2 = w;
			return 'left';
		} else if (this.direction === 'right') {
			this.xspeed = 1;
			this.yspeed = 0;
			this.h1 = random(h - gap);
			this.h2 = h - this.h1 - gap;
			this.w1 = this.w2 = 50;
			this.y1 = 0;
			this.y2 = this.y1 + this.h1 + gap;
			this.x1 = this.x2 = 0 - this.w1;
			return 'right';
		}
	}

	this.update = function() {
		this.x1 += this.xspeed * ospeed;
		this.x2 += this.xspeed * ospeed;
		this.y1 += this.yspeed * ospeed;
		this.y2 += this.yspeed * ospeed;
		if(dir === 'up') {
			if(this.y1 + this.h1 <= 0) {
				this.new();
			}
		} else if (dir === 'down') {
			if(this.y1 >= h) {
				this.new();
			}
		} else if (dir === 'left') {
			if(this.x1 + this.w1 <= 0) {
				this.new();
			}
		} else if (dir === 'right') {
			if(this.x1 >= w) {
				this.new()
			}
		}
	}

	this.show = function() {
		fill(0, 0, 255);
		rect(this.x1, this.y1, this.w1, this.h1);
		rect(this.x2, this.y2, this.w2, this.h2);
	}

	this.new = function() {
		ospeed += 0.03;
		gap -= 0.5;
		score++;
		nrO++;
		obstacles[nrO] = new Obstacle;
		dir = obstacles[nrO].side();
	}
}