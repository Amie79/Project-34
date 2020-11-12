const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Body=Matter.Body;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var world,engine;

var canvas,canvasmouse;
var mConstraint;
function setup() {
  
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;
 
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse: canvasmouse
  }

  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  var pendulumDiameter = 50;
	var posX = width/2;
	var posY = height/4 + 200;

	
	pendulum1=new Pendulum(posX - pendulumDiameter*2, posY, pendulumDiameter);
	pendulum2=new Pendulum(posX - pendulumDiameter,posY,pendulumDiameter);
	pendulum3=new Pendulum(posX,posY,pendulumDiameter);
	pendulum4=new Pendulum(posX +  pendulumDiameter, posY, pendulumDiameter);
	pendulum5=new Pendulum(posX + pendulumDiameter * 2, posY,pendulumDiameter);

	roof = createSprite(width/2, height/4, 250, 15);

	sling1 = new Sling(pendulum1.body,roof.body,-pendulumDiameter*2,0);
	sling2 = new Sling(pendulum2.body,roof.body,-pendulumDiameter*1,0);
	sling3 = new Sling(pendulum3.body,roof.body,0,0); 
  sling4 = new Sling(pendulum4.body,roof.body,pendulumDiameter*1,0); 
	sling5 = new Sling(pendulum5.body,roof.body,pendulumDiameter*2,0);


	Engine.run(engine);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x: mouseX,y: mouseY});
}
