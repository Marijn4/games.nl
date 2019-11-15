function en() {
	this.enY = 25; 
	this.mouseEnX = 250; 

	this.update = function() {
		this.enY += speedEn;
	}

	this.show = function() {
		fill(0, 0, 255);
		rect(this.mouseEnX, this.enY, 50, 50);
	}

	this.collision = function() {
		if (this.enY <= height - this.hCube / 2 && this.enY >= height - this.hCube ) {
			if ( cubeX >= this.mouseEnX - wCube / 2 && cubeX <= this.mouseEnX + wCube / 2) {
				score = 0;
				this.enY = 25;
				this.mouseEnX = 250;
				wCube = 50;
				speedEn = 5;
				print('frick');
			}
		}
	}

	this.offscreen = function() {
		if (this.enY >= height - 25) {
			this.mouseEnX = cubeX;
			this.enY = 25;
			score = score + 1;
		}
	}
}