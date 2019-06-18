//universal Variables
let level=0;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let numbers;
let yermany;
let map;
let german;
let salmoon;
let congrats;
let coat;


function setup() {
  // put setup code

  //load all images
  num1=loadImage('number1.png');
  num2=loadImage('number2.png');
  num3=loadImage('number3.png');
  num4=loadImage('number 4.png');
  num5=loadImage('number 5.png');
  num6=loadImage('number 6.png');
  num7=loadImage('number 7.png');
  num8=loadImage('number 8.png');
  num9=loadImage('number 9.png');
  german=loadImage('ger-man.png');
  salmoon=loadImage('abusive.png');
  map=loadImage('map.png');
  numbers=loadImage('numbers.png');
  yermany=loadImage('yermany.png');
  congrats=loadImage('congrats.png');
  coat=loadImage('coat.png');

//create Canvas
createCanvas(1100,900);
}

function draw() {
  // put drawing code here


//draw info level
  if (level===0){
    background(229,224,194);
    textSize(40);
    text('Welcome to German Knowledge Game',200,100);
    text('Press ENTER to go to level 1',300,200);
    german.resize(500,400);
    image(german,300,300);
    //press enter to go to first level
    if (keyIsDown(13)){
      level+=1;
    }
  }


//level 1
if(level===1){
background(150,100,50);
  textSize(40);
  //First Question
text('Whats the number 3 in German?',250,100);
textSize(30);
text('Press the corresponding button to answer',250,150);
//Place Image
numbers.resize(400,400);
image(numbers,350,200);

//resize pictures
num1.resize(150,150);
num2.resize(150,150);
num3.resize(150,150);
num4.resize(150,150);
num5.resize(150,150);
num6.resize(150,150);
num7.resize(150,150);
num8.resize(150,150);
num9.resize(150,150);

//place images
image(num1,150,750)
text('Ein',150,700);
image(num2,500,750);
text('Zwei',500,700);
image(num3,850,750);
text('Drei',850,700);
//Answer Keys to questions
if(keyIsDown(49)){
  level+=19;
}
if(keyIsDown(50)){
  level+=19;
}
if(keyIsDown(51)){
  level+=1;
}

/*
//press 1 to answer the question (incorrect)
if (key===''{
  level=20;
}
//type 2 to answer the question (incorrect)
if(keyTyped('2')){
  level=20;
}
//type 3 to answer question (correct) //will go directly to question/level 2
if(keyTyped('3')){
  level+=1;
}
*/



}




//level 2
if(level===2){
background(250,50,67);
image(yermany,250,80);
textSize(40);
//Second question
text('Whats the capital of Germany',300,80);
//Answers
image(num4,150,750)
text('Munich',150,700);
image(num5,500,750);
text('Berlin',500,700);
image(num6,850,750);
text('Frankfurt',850,700);
//Press Keys to answer questions
if(keyIsDown(52)){
  level+=1;
}
if(keyIsDown(53)){
  level=20;
}
if(keyIsDown(54)){
  level=20;
}



/*
//press 1 to answer question (incorrect)
if(keyTyped('1')){
level=20;
}
//press 2 to answer question (correct) //will go directly to question/level 3
if(keyTyped('2')){
level+=1;
}
//press 3 to answer quesion (incorrect)
if(keyTyped('3')){
level=20;
}

*/
}



//question 3/level 3
if(level===3){
  background(100,120,90);
//Question
  text('How big is Berlin, compared to Paris',250,100);
  image(map,300,250);
//Answers
image(num7,150,750);
text('9 Times bigger',130,700)
image(num8,500,750);
text('8 times bigger',480,700);
image(num9,850,750);
text('Paris is bigger',830,700);
//Press Key to answer
if(keyIsDown(55)){
  level=20;
}
if(keyIsDown(56)){
  level+=1;
}
if(keyIsDown(57)){
  level=20;
}
}
//Level/Question 4
if(level===4){
background(190,20,69);
//Question
text('What Letter is Missing in this Word?',200,100);
text('De_tchland',450,250);
coat.resize(400,300);
image(coat,350,300);
//Answers
text('Missing letter is',50,700);

text('Missing letter is',400,700);

text('Missing letter is',750,700);
// Answers
textSize(40);
text('U',150,800);
text('O',500,800);
text('E',850,800);
//Press Key to Answer
if(keyIsDown(85)){
  level+=1;
}
if(keyIsDown(79)){
  level=20;
}
if(keyIsDown(69)){
  level=20;
}

}


//You win SCreen
if(level===5){
  textSize(40);
  background(125,123,67);
  text('You Win!!',400,100);
  text('CONGRATS', 400,150);
  image(congrats,250,200);
}








//if you lose, go to this screen
if(level===20){
  background(100,250,70);
  textSize(40);
  text('you lose, you should go to germany you wichser',200,300);

  //press to restart
  if(keyIsDown(82)){
    
  }

}

print(level);
}
