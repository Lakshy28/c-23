const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box (300,200,20,100);
    ground=new Ground (200,height,400,20)
    box3= new Box (290,150,30,200);
    box4= new Box (150,150,30,80);
    box5= new Box (350,130,40,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();


   
}