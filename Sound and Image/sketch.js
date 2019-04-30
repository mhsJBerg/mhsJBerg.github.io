
let img;
let x=250;
let y=200;
let xspeed=4;
let x2;
let y2;
let img2;
let mySound;


function preload(){

  img = loadImage('Bicycle-Transparent-Images-PNG.png');
  img2 = loadImage('hairboi.png');
  mySound = loadSound('TaDa.mp3');
}


function setup() {
  // put setup code here
  createCanvas(1100,850);
  background(255);
  x2=width-250;
  y2=200;
}


function draw() {
  // put drawing code her
  background(255);
//play sound
  mySound.setVolume(0.1);
  mySound.play();


  //bike
  img.resize(200,200);
  image(img,x,y);
  //hair
  image(img2,x2,y2);

textSize(50);
text('Biking to go get bradys old hair', 50,100);
text('Not acctual representation of bradys hair',50,500);


if(keyIsDown(39)){
  x=x+25;
}

if(keyIsDown(37)){
  x=x-25;
}








}
