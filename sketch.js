let JED;
// let FONT1;


function preload() {
  JED = loadImage('jed1a.png');
   // FONT1 = loadFont('Freeroad Black.ttf');
}

function setup() {
  createCanvas(1400, 900);
 
}

function draw() {
  background(220, 70, 90);
  
//background title
  textSize(150);
  fill(40,50,100);
//textFont(FONT1);
  textAlign(LEFT);
  text('STOCKPORT',50,50,width);
  textAlign(LEFT);
  text('ART',50,180,width);
  textAlign(LEFT);
  text('SCHOOL',50,310,width);
  textAlign(LEFT);
  text('DEGREE',50,440,width);
  textAlign(LEFT);
  text('SHOW',50,570,width);
 

  
if (mouseIsPressed) {
  fill(40,300,100,150);
  textSize(75);
  textAlign(LEFT);
  text('FOR',200,500,width);
  text('EYES',600,100,width);
  text('ONLY',700,300,width);
  


  
}
  
//white rectangles plotted as each student location (will be replaced with motion soon
  noStroke();
  fill(255);
//JED
  rect(100,100,50,50);
//STUDENT 2
  rect(170,170,50,50);
//STUDENT 3
  rect(240,100,50,50);

//hover over events to trigger larger viewing rectangle for each student...
  
//STUDENT1
if (mouseX>100 && mouseX<150 && mouseY>100 && mouseY<150) {
  image(JED, 100, 100,500,500);
}
//STUDENT 2
if (mouseX>170 && mouseX<220 && mouseY>170 && mouseY<220) {
  noStroke();
  fill(50,700,200,100);
  rect(170,170,120,120);
}
//STUDENT 3
if (mouseX>240 && mouseX<290 && mouseY>100 && mouseY<150) {
  noStroke();
  fill(50,700,200,100);
  rect(240,100,120,120);
}
  
  fill(40,300,100,150);
  noStroke();
  rect(mouseX,mouseY,20,20);

}