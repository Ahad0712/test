
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,gground;
var SurvivalTime;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(100,200,10,10);  
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(150,235,500,12)
  ground.velocityX = -6;
  ground.x = ground.width /2;
  
  gground=createSprite(150,235,500,12);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  
}


function draw() {
  
  
  background(225);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+SurvivalTime,50,50);
  
  
  
  
  if(keyDown("space") && monkey.y==198.3){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY= monkey.velocityY +0.8;
  
  monkey.collide(gground);
  
  
  
  
  spawnbanana();
  spawnrock();
  
  drawSprites();
}

function spawnbanana(){
  if(frameCount % 80 ===0){
    banana=createSprite(300,40,20,20);
    banana.y=Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale=0.07;
    banana.velocityX=-5;
    banana.lifetime=70;
    
    banana.depth=monkey.depth;
    monkey.depth=monkey+1;
    
    foodGroup.add(banana);
    
  }
}

function spawnrock(){
  if(frameCount % 300 ===0 ){
    obstacle=createSprite(400,210,20,20);
    obstacle.velocityX=-5;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    obstacle.lifetime=90;
  }
}


