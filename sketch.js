let PIXELFONT
let NEUEFONT
let CURLYPIXEL
let CURLYNEUE

function preload() {
PIXELFONT=loadFont('NeueBit-Bold.otf');
NEUEFONT=loadFont('NeueMontreal-Regular.otf');
CURLYPIXEL=loadFont('Mondwest-Regular.otf');
CURLYNEUE=loadFont('EditorialNew-Light.otf');
}

function setup() {
  createCanvas(1300, 700);
}

function draw() {
  
//title text
  background(400);
  textFont(NEUEFONT);
  textSize(160);
  textAlign(RIGHT);
  fill(190);
  noStroke();
  text('STOCKPORT',1250,150);
  textAlign(RIGHT);
  text('ART SCHOOL',1250,350);
  textSize(230);
  textFont(PIXELFONT);
  fill(500);
  strokeWeight(4);
  stroke(100,700,100);
  text('DEGREE SHOW',1250,550);
  
//bottom line 
  stroke(0);
  strokeWeight(1);
  line(-5,640,1305,640);
  
//bottom text
  noStroke();
  textFont(CURLYPIXEL);
  textSize(20);
  fill(0);
  textAlign(LEFT);
  text('Stockport Art School',5,670);
  textFont(NEUEFONT);
  text('present their',180,670);
  textFont(CURLYNEUE);
  text('Annual',290,670);
  textFont(CURLYPIXEL);
  text('Degree Show.',355,670);
  textFont(NEUEFONT);
  text('This time',470,670);
  textFont(CURLYNEUE);
  text('it is',555,670);
  textFont(CURLYPIXEL);
  fill(100,600,100);
  text('For Eyes Only.',590,670);
  
}