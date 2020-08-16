const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles;
var plinkos = [];
var division = [];

var divisionHeight =300;  

function setup() {
  createCanvas(480,800);

  engine = Engine.create();

  world = engine.world;
  
  ground = new Ground(240, 780, 480, 10);

  division = new Division(0, 635, 5, 300);
  division1 = new Division(80, 635, 5, 300);
  division2 = new Division(160, 635, 5, 300);
  division3 = new Division(240, 635, 5, 300);
  division4 = new Division(320, 635, 5, 300);
  division5 = new Division(400, 635, 5, 300);
  division6 = new Division(480, 635, 5, 300);
  Engine.run(engine);
}

function draw() {
  background(0);  

  Engine.update(engine);
  ground.display();

  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  

  drawSprites();

}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}