
let img;


function preload(){

  img = loadImage('Bicycle-Transparent-Images-PNG.png');
}


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(0);
}


function draw() {
  // put drawing code here
image(img,200,200);

  
}
