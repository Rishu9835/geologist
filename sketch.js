const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,rubber,ground,iron,sand1,sand2,sand3,sand4,sand5,sand6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,692,800,15);
	rubber = new Rubber(650,350,100);
	hammer = new Hammer(10,20,100,40);
	stone = new Stones(200,350,100,100);
	iron = new Iron(100,450,100,60);
	sand1 = new Sand(450,350,15); 
	sand2 = new Sand(450,350,15);
	sand3 = new Sand(450,350,15);
	sand4 = new Sand(465,350,15);
	sand5 = new Sand(470,350,15);
	sand6 = new Sand(475,350,15);

	Engine.run(engine);
  
}


function draw() {
  background(200);
  ground.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  stone.display();
  rubber.display();
  hammer.display();

 
}



