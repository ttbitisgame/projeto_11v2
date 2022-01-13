var jaxon,jaxon_running;

var groundImage,ground,invisibleGround1,invisibleGround2;


function preload(){
  jaxon_running =loadAnimation("Runner-1.png","Runner-2.png");
  groundImage = loadImage("path.png");
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  
  ground = createSprite(200,200);
  ground.addImage("ground",groundImage);
  ground.scale = 1.2;
  
  invisibleGround1 = createSprite(0,200,50,400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(400,200,50,400);
  invisibleGround2.visible = false;

  jaxon = createSprite(200,300,30,30);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.05;

  //crie sprite aquis
}

function draw() {
  background(0);
  ground.velocityY = 4;
  jaxon.x = World.mouseX;
  if(ground.y > 400){
    ground.y = 200;
  }
  jaxon.collide(invisibleGround1);
  jaxon.collide(invisibleGround2);
  drawSprites();
}
