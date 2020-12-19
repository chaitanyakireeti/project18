
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImg = loadImage("forest.jpeg");
 
}



function setup() {
  createCanvas(400,400);
  background =createSprite(200,200,400,400);
  background.addImage(bgImg)
  background.scale =1.2;
  monkey = createSprite(50,330,20,20);
  monkey.addAnimation("monkey",monkey_running);
monkey.scale =0.2;
  ground = createSprite(200,390,400,20);
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
//background("lightblue");
  background.velocityX=-3;
  if(background.x<100){
    background.x =background.width/2;
  }
      if(keyDown("space")   ) {
      monkey.velocityY = -12;
    }
     monkey.velocityY = monkey.velocityY +1;
   if(ground.x < 0){
      ground.x = ground.width/2;
    }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
  }
    monkey.collide(ground);
  spawnbanana();
  spawnobstacles();
  drawSprites();
  
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}
function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var obs = createSprite(580,350,40,10);
   // banana.y = Math.round(random(100,200));
    obs.addImage(obstacleImage );
    obs.scale = 0.2;
    obs.velocityX = -3;
    
     //assign lifetime to the variable
  obs.lifetime = 200;
    
   obstacleGroup.add(obs);
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}





