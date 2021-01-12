
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var ball;
var slingshot;
function preload(){

 polygon_img=loadImage("polygon.png")   
}

function setup(){

    createCanvas(900,400)
    engine=Engine.create();
    world=engine.world;

    Engine.run(engine)
    ground=new Ground(400,300,900,20);
    
    ball = Bodies.circle(50,200,20);
  World.add(world,ball);

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(330,235,30,40);
  block7 = new Block(360,235,30,40);
  block8=  new Block(390,235,30,40);
  block9 = new Block(360,195,30,40);
  slingshot=new Slingshot(this.ball,{x:100,y:200})
}

function draw(){
background("black")
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    slingshot.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}