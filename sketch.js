
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
	dustbin=loadImage("trashcangreen.png");
}
function setup() {
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1=new Ground(1000,height-45,170,10);
	side2=new Ground(915,height-85,15,100);
	side3= new Ground(1085,height-85,15,100);
	paper= new Box(200,550,20);
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("lightblue");
  paper.display();
  imageMode(CENTER);
  image(dustbin,1000,height-85,210,110);
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-45});
	}
}