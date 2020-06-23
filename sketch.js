let LOGO;
var angle = 0;
var canvas;
var COUNTDOWN;
let MOUSE;
let PIXELBOLD;
let CURLYNEUE;
let CURLYPIXEL;
let NEUEFONT;
let EYES1;
let EYES2;
let EYES3;
var scrollerx = 0;
var scrollera = 445;
var scrollerb = 560;
var scrollery = 670;
var scrollery2 = 655;
var scrollerx2 = 700;
var scrollerc = 1145;
var scrollerd = 1260;
var speed = 2

function preload() {
  LOGO=loadImage('Art School Degree Show Logo@300x.png');
  MOUSE=loadImage('No Hands Cursor@300x.png');
  PIXELBOLD = loadFont('NeueBit-Bold.otf');
  CURLYNEUE = loadFont('EditorialNew-Light.otf');
  CURLYPIXEL= loadFont('Mondwest-Regular.otf');
  NEUEFONT = loadFont('NeueMontreal-Regular.otf');

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  
  //if (mouseIsPressed) {
  //image(EYES2,0,0,1300,700);
  //rect(60,70,900,500);
  
  
  textAlign(LEFT);
  textFont(CURLYNEUE);
  textSize(50);
  fill(0);
  text('Launching',280,350);
  textFont(PIXELBOLD);
  textSize(100);
  fill(100,600,100);
  text('26.06.20',510,350);
  textFont(CURLYNEUE);
  textSize(50);
  fill(0);
  text('@',785,350);
  textFont(PIXELBOLD);
  textSize(100);
  fill(100,600,100);
  text('1800',845,350);
  
  
  
  
  //MOUSE
  image(MOUSE,mouseX,mouseY,40,40);
  
  //background(400);


   
     //function countdownTimer() {
        //const difference = +new Date("2020-06-26") - +new Date();
        //let remaining = "launching 6pm";

        //if (difference > 0) {
          //const parts = {
            //days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            //hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            //minutes: Math.floor((difference / 1000 / 60) % 60),
            //seconds: Math.floor((difference / 1000) % 60)
          //};

          //remaining = Object.keys(parts)
            //.map(part => {
              //if (!parts[part]) return;
             // return `${parts[part]} ${part}`;
           // })
            //.join(" ");
        //

       // document.getElementById("countdown").innerHTML = remaining;
      

      //countdownTimer();
      //setInterval(countdownTimer, 1000);
    
  
 // HTMLImageElement(COUNTDOWN);
 //bottom scroller text
  noStroke();
  textFont(CURLYPIXEL);
  textSize(20);
  fill(0);
  textAlign(LEFT);
  text('Stockport Art School present their annual degree show',scrollerx,scrollery);
  textFont(NEUEFONT);
  text('this time, it is',scrollera,scrollery);
  textFont(CURLYPIXEL);
  fill(100,600,100);
  text('For Eyes Only.',scrollerb,scrollery2,590,670);
  scrollerx = scrollerx +speed
  scrollera = scrollera +speed
  scrollerb = scrollerb +speed  
  
   noStroke();
  textFont(CURLYPIXEL);
  textSize(20);
  fill(0);
  textAlign(LEFT);
  text('Stockport Art School present their annual degree show',scrollerx2,scrollery);
  textFont(NEUEFONT);
  text('this time, it is',scrollerc,scrollery);
  textFont(CURLYPIXEL);
  fill(100,600,100);
  text('For Eyes Only.',scrollerd,scrollery2,590,670);
  scrollerx2=scrollerx2+speed
  scrollerc=scrollerc+speed
  scrollerd=scrollerd+speed
  
  
  if (scrollerb > 1200) {
    speed = -2
  }
  if (scrollerx <-700) {
    speed = 2
  
  }
  
   push();
  translate(150,150);
  rotate(angle);
  imageMode(CENTER);
  image(LOGO,0,0,200,200);
  angle=angle +0.5 
  pop();


    
}