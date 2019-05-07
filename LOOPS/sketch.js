level=0;

function setup() {
  // put setup code
  createCanvas(1100,800);
  background(205,41,136);

}

function draw() {
  // put drawing code here
if (level===0){
textSize(40);
text('free epilepsy test ;)', 300,300);
text('press enter to start',300,400);
if(keyIsDown(13)){
  level+=1;
}

}


if(level===1){

  for (let i = 0; i<200; i++) {
    fill (random(255),random(255),random(255));
    ellipse(random(1100), random(800), 10, 10);
  }

for (let y=0;  y<300; y++) {
  fill (random(255),random(255),random(255));
  rect(random(1100), random(800),10,10);
}

for (let z=0; z<400; z++) {
  fill (random(255),random(255),random(255));
  triangle(random(1100), random(800),random(1100), random(800), random(1100), random(800));
}


for (f=0; f<10; f++){
fill(0);
  textSize(40);

          text('CHURCH OF ELIAS',200,100);
        text('PRAISE BE THE LORD',200,150)
    text('THE POWER OF CHRIST COMPELS YOU', 200, 200);
text('YOU SHALL NOT STEAL',200,250);
    text('THE POWER OF CHRIST COMPELS YOU', 200, 300);
text('YOU SHALL NOT LIE',200,350);
    text('THE POWER OF CHRIST COMPELS YOU', 200, 400);
text('YOU SHALL NOT SIN',200,450);
    text('THE POWER OF CHRIST COMPELS YOU', 200, 500);
text('YOU SHALL NOT MURDER',200,550);
    text('THE POWER OF CHRIST COMPELS YOU', 200, 600);




}

}

}
