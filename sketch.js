
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, soj, groundObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world, boy;

//Declare launcherObject and launchForce variable here
var lo;
var lf = 100;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  soj = new stone(235, 420, 30);

  mango1 = new mango(1100, 100, 30);
  mango2 = new mango(1170, 130, 30);
  mango3 = new mango(1010, 140, 30);
  mango4 = new mango(1000, 70, 30);
  mango5 = new mango(1100, 70, 30);
  mango6 = new mango(1000, 230, 30);
  mango7 = new mango(900, 230, 40);
  mango8 = new mango(1140, 150, 40);
  mango9 = new mango(1100, 230, 40);
  mango10 = new mango(1200, 200, 40);
  mango11 = new mango(1120, 50, 40);
  mango12 = new mango(900, 160, 40);

  treeObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 20);
  //create launcherObject here
  lo = new Launcher(soj.body, { x: 235, y: 420 });

  Engine.run(engine);
}

function draw() {

  background(230);
   //instructions for how to play 
   textSize(20);
   fill(86, 11, 75);
   text("Place the Cursor on the Stone and Drag and Release to Play!!!",20,60 )
 
   //instructions for how to play after the first time 
   textSize(15);
 fill(107, 10, 10);
 text("Press Space To Play Again!!!", 450, 560);
  image(boy, 200, 340, 200, 300);
  


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  soj.display();
  groundObject.display();
  // display launcher object here
  lo.display();

  detectollision(soj, mango1);
  detectollision(soj, mango2);
  detectollision(soj, mango3);
  detectollision(soj, mango4);
  detectollision(soj, mango5);
  detectollision(soj, mango6);
  detectollision(soj, mango7);
  detectollision(soj, mango8);
  detectollision(soj, mango9);
  detectollision(soj, mango10);
  detectollision(soj, mango11);
  detectollision(soj, mango12);
}

//create mouseDragged function here
function mouseDragged() {
  Matter.Body.setPosition(soj.body, { x: mouseX, y: mouseY });
}

//create mouseReleased function here

function mouseReleased() {
  lo.fly();
}

//create keyPressed function here
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(soj.body, { x: 235, y: 420 });
    lo.attach(soj.body);
  }
}

function detectollision(lstone, lmango) {

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }

}