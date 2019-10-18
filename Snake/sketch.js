var s;
var scl = 20;

var food;
var score = 0,
    scoreDist = 250,
    highscoreDist = 180,
    highscore = 0;


function setup() {
  createCanvas(500, 500);
  s = new Snake();
  frameRate(10);
  pickLocation();
  highscore = localStorage.getItem('highscore');

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(0, 0, 255);
  rect(food.x, food.y, scl, scl);

  
  if (score > highscore) {
    highscore = score;
    localStorage.setItem('highscore', highscore);
  }
  textSize(64);
  fill(255);
  if (score >= 10) {
    scoreDist = 275;
  }
  if (highscore >= '10') {
    highscoreDist = 200;
  }
  text('Score: ' + score, width - scoreDist, 50);
  textSize(32);
  text('Highscore: ' + highscore, width - highscoreDist, 80);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}