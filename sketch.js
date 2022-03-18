const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var ground;
var ball;
var ball_options
function setup() {
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

 //to create Ground
var ground_options={
  isStatic : true
} 

ground = Bodies.rectangle(200,380,400,20,ground_options)
World.add(world,ground);

ball_options={
  //restitution = Bounciness
  restitution:1
}

ball = Bodies.circle(280, 150, 25,ball_options);
World.add(world,ball);


//to check value on console
console.log(ground);
}

function draw() {
  background(0);

  Engine.update(engine); 
//to display the ground
  rectMode(CENTER) ;
  //rect(x,y,width,height);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  drawSprites();
}