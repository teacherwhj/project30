const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground, stand;
var box1,box2,box3,box4,box5,box6,box7;
var box8, box9,box10,box11,box12;
var box13,box14,box15,box16;
var polygon,polygonImage;
var sling;

function preload(){
polygonImage= loadImage("polygon.png");
}
function setup(){
    createCanvas(800,600);

    engine = Engine.create();
    world= engine.world;
    var options={
        isStatic:false
    }
    polygon = Bodies.circle(90,400,20,options);
    World.add(world, polygon);
    

    ground = new Ground(400,580,800,5);
    stand = new Ground(345,500,200,10);

    box1 = new Box(270,478,25,35);
    box2 = new Box(295,478,25,35);
    box3 = new Box(320,478,25,35);
    box4 = new Box(345,478,25,35);
    box5 = new Box(370,478,25,35);
    box6 = new Box(395,478,25,35);
    box7 = new Box(420,478,25,35);
   

    box8 = new Box(295,443,25,35);
    box9 = new Box(320,443,25,35);
    box10 = new Box(345,443,25,35);
    box11= new Box(370,443,25,35);
    box12= new Box(395,443,25,35);

    box13 = new Box(320,408,25,35);
    box14 = new Box(345,408,25,35);
    box15 = new Box(370,408,25,35);

    box16 = new Box(345,373,25,35);

    sling = new SlingShot(polygon,{x:90, y:400})

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand.display();
    fill(0,180,255);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill(255,105,225);
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill(0,220,255);
    box13.display();
    box14.display();
    box15.display();
    fill(80,80,80);
    box16.display();
    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon)
    }
}