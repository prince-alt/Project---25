
const Engine = Matter.Engine;
const Worldc = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine1,world;
var paper1;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine1 = Engine.create();
	world = engine1.world;

	//Create the Bodies Here.

	ground1 = new ground();
	dustbin1 = new dustbin(600,620);
	paper1 = new paper();
	
	
  
 }


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine1);
  

  ground1.display();
  dustbin1.display();
  paper1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:12,y:-18});

	 }
   
	else if (keyCode === DOWN_ARROW) {
	
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-12,y:-12});

	 }
	}
   

