const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,paper,leftWall,rightWall,base;
var dustbinObj,dustbinImage;

function preload(){
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,690,1400,20);
  
  paper = new Paper(100,100,80);
  
  leftWall = new Dustbin(1030,585,10,150);
  rightWall = new Dustbin(1170,585,10,150);
  base = new Dustbin(1100,665,100,10);

  dustbinObj = createSprite(1100,580,25,25);
  dustbinObj.addImage(dustbinImage);
  dustbinObj.scale=0.6;

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() { 
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);

  ground.display();
  paper.display();
  leftWall.display();
  rightWall.display();
  base.display();
  dustbinObj.display();
  
  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
   
  Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-165})
  }
}