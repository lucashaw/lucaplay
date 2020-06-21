let LOGO;
var angle = 0;
var canvas;
var COUNTDOWN;
let MOUSE;
let PIXELBOLD;
let CURLYNEUE;
let EYES1;
let EYES2;
let EYES3;


function preload() {
  LOGO=loadImage('Art School Degree Show Logo@300x.png');
  MOUSE=loadImage('No Hands Cursor@300x.png');
  PIXELBOLD = loadFont('NeueBit-Bold.otf');
  CURLYNEUE = loadFont('EditorialNew-Light.otf');

  
}

function setup() {
  canvas = createCanvas(1300, 700);
  canvas.position(0,0);
  angleMode(DEGREES);
}

function draw() {
  clear();
  
  if (mouseIsPressed) {
  //image(EYES2,0,0,1300,700);
  rect(60,70,900,500);
  }
  
  textAlign(LEFT);
  textFont(CURLYNEUE);
  textSize(50);
  fill(0);
  text('Launching',270,350);
  textFont(PIXELBOLD);
  textSize(100);
  fill(100,600,100);
  text('26.06.20',500,350);
  textFont(CURLYNEUE);
  textSize(50);
  fill(0);
  text('@',775,340);
  textFont(PIXELBOLD);
  textSize(100);
  fill(100,600,100);
  text('1800',835,350);
  
  
  
  
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
 
  
   push();
  translate(100,100);
  rotate(angle);
  imageMode(CENTER);
  image(LOGO,0,0,150,150);
  angle=angle +0.5 
  pop();

    
}