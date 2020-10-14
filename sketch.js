const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine;
var world;
var body;
function setup() {
  createCanvas(400,400);
 engine=Engine.create();  // creates physics engine
 world=engine.world;
  
 var ball_options={
    restitution:1.5
 }
  body=Bodies.rectangle(200,100,50,50,ball_options);
  World.add(world,body);
   
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);




}
function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);

  rect(body.position.x,body.position.y,50,50) ;
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}