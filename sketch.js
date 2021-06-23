const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var A1, A2, A3, A4, A5, A6, A7;
var A8, A9, A10, A11, A12, A13, A14;
var A15, A16, A17, A18, A19, A20, A21;
var A22, A23, A24, A25, A26, A27, A28;
var particle = [];

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world =  engine.world;



  wall1 = new plinko2(400, 700, 800, 25);
  wall9 = new plinko2(900, 700, 800, 25);
  wall2 = new plinko2(100, 550, 20, 300);
  wall3 = new plinko2(300, 550, 20, 300);
  wall4 = new plinko2(500, 550, 20, 300);
  wall5 = new plinko2(700, 550, 20, 300);
  wall6 = new plinko2(900, 550, 20, 300);
  wall7 = new plinko2(1100, 550, 20, 300);
  wall8 = new plinko2(1300, 550, 20, 300);

  A1 = new plinko(100,50);
  A2 = new plinko(300,50);
  A3 = new plinko(500,50);
  A4 = new plinko(700,50);
  A5 = new plinko(900,50);
  A6 = new plinko(1100,50);
  A7 = new plinko(1300,50);
 
  A8 = new plinko(50,200);
  A9 = new plinko(250,200);
  A10 = new plinko(450,200);
  A11 = new plinko(650,200);
  A12 = new plinko(850,200);
  A13 = new plinko(1050,200);
  A14 = new plinko(1250,200);

  A15 = new plinko(100,350);
  A16 = new plinko(300,350);
  A17 = new plinko(500,350);
  A18 = new plinko(700,350);
  A19 = new plinko(900,350);
  A20 = new plinko(1100,350);
  A21 = new plinko(1300,350);
 
 
}

function draw() {
  background(0);  
 Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  A1.display();
  A2.display();
  A3.display();
  A4.display();
  A5.display();
  A6.display();
  A7.display();
  A8.display();
  A9.display();
  A10.display();
  A11.display();
  A12.display();
  A13.display();
  A14.display();
  A15.display();
  A16.display();
  A17.display();
  A18.display();
  A19.display();
  A20.display();
  A21.display();
  
  if(frameCount % 60 === 0){
    particle.push(new ball(random(width/2-30, width/2+30),10))
  }

  for(var i = 0; i < particle.length; i++){
    particle[i].display();
  }

  drawSprites();
}