//fonts
let PIXELFONT;
let NEUEFONT;
let CURLYPIXEL;
let CURLYNEUE;

var MOUSE;
var LOGO;
//on click eyes
var EYES1;
var EYES2;
var EYES3;
var EYES4;
var EYES0;
var angle = 0;
//top scroller
var scrolleryy = 10;
var scrolleryyy = 25;
var scrollerxx = -5;
var scrolleraa = 205;
var scrollerbb = 310;
var scrollercc = 430;
var scrollerdd = 625;
//bottom scroller
var scrollerx = 0;
var scrollera = 445;
var scrollerb = 560;
var scrollery = 780;
var scrollery2 = 765;
var scrollerx2 = 700;
var scrollerc = 1145;
var scrollerd = 1260;
//student cubes
let EMELY;
let JED;
let ABBEYC;
let ERIN;
let JACKL;
let JADE;
let JACKW;
let ASHLEY;
let JAMIE;
let LOTTE;
let VICR;
let VICB;
let MACIEJ;
//student collages 
let EMELYPIC;
let JEDPIC;
let ABBEYCPIC;
let ERINPIC;
let JACKLPIC;
let JADEPIC;
let JACKWPIC;
let ASHLEYPIC;
let JAMIEPIC;
let LOTTEPIC;
let VICRPIC;
let VICBPIC;
let MACIEJPIC;
let DEGREESHOW;
let STOCKYLOGO;
let value = 240;
let value2 = (0,0,0);
var canvas;
var linkjackl;

var speed = 2;


function preload() {
PIXELFONT=loadFont('NeueBit-Bold.otf');
NEUEFONT=loadFont('NeueMontreal-Regular.otf');
CURLYPIXEL=loadFont('Mondwest-Regular.otf');
CURLYNEUE=loadFont('EditorialNew-Light.otf');
MOUSE=loadImage('No Hands Cursor@300x.png');
LOGO=loadImage('Art School Degree Show Logo@300x.png');
EYES1=loadImage('Eyes On Green copy 4@300x.png');
EYES2=loadImage('Eyes On Green copy 2@300x.png');
EMELY=loadImage('Emily-J.gif');
MACIEJ=loadImage('Maciejgif-1.gif');
JED= loadImage('jed.gif');
ABBEYC=loadImage('abbey-C.gif');
ERIN =loadImage('Erin-P.gif');
JACKL=loadImage('Jack-L.gif');
JADE=loadImage('Jade.gif');
JACKW=loadImage('Jack-Whitelegg.gif');
ASHLEY=loadImage('Ashley.gif');
JAMIE=loadImage('jamie.gif');
LOTTE=loadImage('lotte-.gif');
VICR=loadImage('Vic R.gif');
VICB=loadImage('vic-b-.gif');
MACIEJPIC=loadImage('maciej-gif-maker-2.gif');
JEDPIC=loadImage('JedWilson-Salt.png');
ABBEYCPIC=loadImage('AbbeyClarke.png');
ERINPIC=loadImage('ErinPircell.png');
JACKLPIC=loadImage('JackLever.png');
JADEPIC=loadImage('JadeMontague.png');
JACKWPIC=loadImage('ezgif.com-gif-maker.gif');
ASHLEYPIC=loadImage('AshleyHopkins.png');
JAMIEPIC=loadImage('JamieRussell.png');
LOTTEPIC=loadImage('LotteHow.png');
VICRPIC=loadImage('VictoriaRoberts.png');
VICBPIC=loadImage('vicbradburn.png');
EMELYPIC=loadImage('Em png.png');
EYES0=loadImage('Eyes transparent@300x.png');
DEGREESHOW=loadImage('bevelled degree show.png');
STOCKYLOGO=loadImage('stockport_college_logo-png.png');
}

function setup() {
 
   canvas = createCanvas(displayWidth, displayHeight);
   angleMode(DEGREES);
   noCursor();
   //EMELYPIC=createVideo(['ems-page 1 c.mp4']);
    //EMELYPIC.hide();
   //EMELYPIC.loop();
  
}
  function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 0;
    value2 = (240);
   
    
  } else if (keyCode === RIGHT_ARROW) {
    value = 240;
    value2 = 0;
   
  }
 
   
}

function windowResized() {
  resizeCanvas (displayWidth, displayHeight);
  
}

function draw() {

//title text
  background(value);
  textFont(NEUEFONT);
  textSize(170);
  textAlign(RIGHT);
  fill(value2);
  noStroke();
  text('STOCKPORT',1250,200);
  textAlign(RIGHT);
  text('ART SCHOOL',1255,390);
  //textSize(250);
  //textFont(PIXELFONT);
  //noFill();
  //strokeWeight(4);
  //stroke(100,700,100);
  //text('DEGREE SHOW',1260,600);
  image(DEGREESHOW,-10,400,1300,300);
  image(STOCKYLOGO,25,700,150,50);

  
//top scoller text
  textFont(CURLYPIXEL);
  noStroke();
  textSize(20);
  fill(0);
  textAlign(LEFT);
  text('Hover over student cubes',scrollerxx,scrolleryyy);
  textFont(NEUEFONT);
  text('to see work',scrolleraa,scrolleryyy);
  textFont(CURLYPIXEL);
  fill(100,600,100);
  text('For Eyes Only.',scrollerbb,scrolleryy,590,670);
  textFont(CURLYPIXEL);
  fill(0);
  text('click around the screen',scrollercc,scrolleryyy);
  textFont(NEUEFONT);
  text('+ press arrow keys',scrollerdd,scrolleryyy);
  
  scrollerxx = scrollerxx + speed
  scrolleraa = scrolleraa + speed 
  scrollerbb = scrollerbb + speed
  scrollercc = scrollercc + speed
  scrollerdd = scrollerdd + speed
  
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
  if (scrollerx <-500) {
    speed = 2
  
  }

  
  
  //top left LOGO
  push();
  translate(130,150);
  rotate(angle);
  imageMode(CENTER);
  image(LOGO,0,0,180,180);
  angle=angle +1 
  pop();
  
  //maciej
  image(MACIEJ,240,100,100,100);
  //jack w
  image(JACKW,60,240,100,100);
  //erin
  image(ERIN,360,220,100,100);
  //abbey
  image(ABBEYC,500,500,100,100);
  //victoria b
  image(VICB,380,590,100,100);
  //jack l
  image(JACKL,610,370,100,100);
  //jed
  image(JED,740,470,100,100);
  //charlotte
  image(LOTTE,700,590,100,100);
  //emely
  image(EMELY,880,620,100,100);
  //jade
  image(JADE,1160,180,100,100);
  //ashley
  image(ASHLEY,960,170,100,100);
  //jamie
  image(JAMIE,810,230,100,100);
  //victoria r
  image(VICR,800,100,100,100);
  
  //MACIEJ
  if (mouseX>240 && mouseX<340 && mouseY>100 && mouseY<200) {
    image(MACIEJPIC,150,80,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Maciej Zielinski',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @mzielinski.design',700,85);
  }
  //JACK
    if (mouseX>60 && mouseX<160 && mouseY>240 && mouseY<340) {
    image(JACKWPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Jack Whitelegg',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @jackwhitelegg.design',700,85);
  }
  //ERIN
  if (mouseX>360 && mouseX<460 && mouseY>220 && mouseY<320) {
    image(ERINPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Erin Pircell',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @epurcell0395',700,85);
  }
  //ABBEYC
  if (mouseX>500 && mouseX<600 && mouseY>500 && mouseY<600) {
    image(ABBEYCPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Abbey Clarke',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @abi_clrke_',700,85);
  }
  //VICB
    if (mouseX>380 && mouseX<480 && mouseY>590 && mouseY<690) {
    image(VICBPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Victoria Bradburn',150,100);
    textFont(PIXELFONT);
    textSize(40);
    text('insta @victoriabradburnart',750,85);
  }
  //JACKL
    if (mouseX>610 && mouseX<710 && mouseY>370 && mouseY<470) {
    image(JACKLPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Jack Lever',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @jack__lever',700,85);
  }
  //JED
    if (mouseX>740 && mouseX<840 && mouseY>470 && mouseY<570) {
    image(JEDPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Jed Wilson-Salt',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @evilspongecake',700,85);
  }
//LOTTE
    if (mouseX>700 && mouseX<800 && mouseY>590 && mouseY<690) {
    image(LOTTEPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Charlotte Howe',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @lottehowe_',700,85);
  }
//EMELY
   if (mouseX>880 && mouseX<980 && mouseY>620 && mouseY<720) {
    image(EMELYPIC,150,50,1000,700);
    fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Emely Johnstone',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('www.pawcreative.com',750,85);
   }
//JADE
    if (mouseX>1160 && mouseX<1260 && mouseY>180 && mouseY<280) {
    image(JADEPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Jade Montague',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @jade_montague',700,85);
  }
  //ASHLEY
 if (mouseX>960 && mouseX<1060 && mouseY>170 && mouseY<270) {
    image(ASHLEYPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Ashley Hopkins',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @ashleyscotthopkins',700,85);
 }
  //JAMIE
    if (mouseX>810 && mouseX<910 && mouseY>230 && mouseY<330) {
    image(JAMIEPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Jamie Russell',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @llessureimaj.jpg ',700,85);
  }
  //VICR
    if (mouseX>800 && mouseX<900 && mouseY>100 && mouseY<200) {
    image(VICRPIC,150,50,1000,700);
     fill(0);
    rect(150,50,1000,50);
    textFont(CURLYPIXEL);
    textSize(80);
    fill(100,600,100);
    text('Victoria Roberts',150,100);
    textFont(PIXELFONT);
    textSize(50);
    text('insta @sloth_creations',700,85);
  }
  
    
   if (mouseIsPressed){
    background (100,600,100)
    image(EYES0,mouseX,mouseY,300,90);


  }

  
  //MOUSE
  image(MOUSE,mouseX,mouseY,40,40);

}
