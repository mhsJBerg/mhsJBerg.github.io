let x=100;
let y=120;


function setup() {
  // put setup code here
  createCanvas(1000,800);
}

function draw() {
  // put drawing code here
  background(0);
textSize(50);
text('Press Spacebar for a surprise ;)',50,200);

  //draw Square
  drawSquare();

  //move Square
  if(keyIsDown(37)){
    x-=20;
  }

  if(keyIsDown(39)){
    x+=20;
  }

  if(keyIsDown(38)){
    y-=20;
  }

  if(keyIsDown(40)){
    y+=20;
  }
//GAME OVER

  if(keyCode===(32)){
  background(0);
  textSize(50);
  text('YOU DIED',width/2-100,height/2);
  textSize(40);
  text('You suck, leave and go home :)',width/2-250,height/2+50);
  }

}


function drawSquare(){
  fill(255,0,0);
  rectMode(CENTER);
  rect(x,y,50,50);


}
