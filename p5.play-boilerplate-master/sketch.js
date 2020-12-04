const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myWorld, myEngine;
var ground,ball1,ch
var box1=[];


function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  
  ground=Bodies.rectangle(400,390,800,10,{isStatic:true})
  World.add(myWorld,ground);

  ball1=new Ball(400,200,30);
  
  ch=new Chain(ball1.body,{x:100,y:100})
  for(var i=0;i<=350;i=i+30){
  box1.push(new Box(200,200+i,50,30))
    
  }
  
}

function draw() {
  Engine.update(myEngine)
  background(255,255,255); 
  
  fill("red");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)

  ball1.display();
  ch.display();
  for(var i=0;i<box1.length;i++){
  box1[i].display();
  }
}