
let img;


function preload(){

  img = loadImage('');
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
