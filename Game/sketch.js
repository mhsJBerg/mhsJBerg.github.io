let x=550;
let y=150;
let img;
var hit2=false;
var hit=false;
let level=0;
let img2;

function preload(){
  img= loadImage('chest.png');
  img2= loadImage('bois.gif');

}

function setup() {
  // put setup code
createCanvas(1100,900);
background(random(0,255),random(0,255),random(0,255));



}

function draw() {
//FIRST GAME SCREEN
if (level===0){
  textSize(50);
  text('Trivia Game',400,100);
  text('Press ENTER to go to level 1',200,200);
  if (keyIsDown(13)){
    level+=1;
  }


}



//WHEN ENTER IS PRESSED, GAME SCREEN 2
  if (level===1){
    background(0,255,0);
    //QUESTION
    img.resize(150,150);
    textSize(40);
    text('Whats the german translation of 3?',200,100);
    text('Drag mouse to correct Answer',250,200);

    //chest3
    textSize(50);
    text('DREI',900,660);
    image(img,900,700);
    //chest2
    text('ZWEI',500,660);
    image(img,500,700);
    //chest 1
    text('EINS',50,660);
    image(img,50,700);
    hit3=collidePointRect(mouseX,mouseY,50,650,150,150);
    hit2=collidePointRect(mouseX,mouseY,500,600,150,150);
    hit=collidePointRect(mouseX,mouseY,900,700,150,150);


//if mouse hits any other chest
if(hit3){
  level=20;
}

if(hit2){
  level=20;
}
  //if mouse hits 3rd chest
  if(hit){
    level=2;
  }

}

if(level===2){
  background(201,207,30);
  textSize(50);
  text('YOU WIN',400,400);

}

if(level===20){
  background(30,207,113);
  textSize(30);
  text('YOU SUCK, GO CRY IN THE CORNER YOU DEGENERATE', 100,400);
  image(img2,400,400);
}



}
