
let img;


function preload(){

  img = loadImage('https://github.com/mhsJBerg/mhsJBerg.github.io/blob/master/Sound%20and%20Image/kisspng-bicycle-freestyle-motocross-motorcycle-stunt-ridin-biker-5aba2bdd213e15.8116525715221503651362.jpg');
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
