//position variables
var posX= 200;
var posY = 200;
// speed variables
var speedX = 0;
var speedY = 0;

function setup() {
  var myCanvas = createCanvas(900, 800);
  frameRate(300);
}

function draw() {
  background(201,29,207);
  ellipse(posX, posY, 30, 30);
  ellipse(posX-50,posY,30,30);
  

  posX = posX + speedX;
  posY = posY + speedY;

  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }
}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = round(mouseX/100);
  speedY = round(mouseY/100);
}
