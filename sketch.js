var gball, bball, pball, rball, rballGroup, pballGroup, bballGroup, gballGroup
var gball_image, bball_image, pball_image, rball_image
var bow, bow_image, arrow_image, arrow, arrowGroup
var backGround, backGround_image
var score = 0 
function preload(){
 //load your images here 
 gball_image = loadImage ("green_balloon0.png")
 bball_image = loadImage ("blue_balloon0.png") 
 pball_image = loadImage ("pink_balloon0.png")
 rball_image = loadImage ("red_balloon0.png")
 
 bow_image = loadImage ("bow0.png")

 backGround_image = loadImage ("background0.png")
 
 arrow_image = loadImage ("arrow0.png")
}
function setup() {
  createCanvas(600, 600);
   //add code here
  backGround = createSprite(0,0,600,600)
  backGround.addImage(backGround_image)
  backGround.scale = 3
  
  
  bow = createSprite(550,290,10,40)
  bow.addImage(bow_image)
   
  arrowGroup = new Group()
  rballGroup = new Group()
  pballGroup = new Group()
  bballGroup = new Group()
  gballGroup = new Group()
  
}

function draw() {
background("white")
  
  
  //add code here
  if (backGround.x < 0) {
    backGround.x = backGround.width / 2;
  }
  
  if (keyWentDown("space")){
    createArrow(); 
  }  
  
  if(arrowGroup.isTouching(rballGroup)){
    rballGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(pballGroup)){
    pballGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(gballGroup)){
    gballGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(bballGroup)){
    bballGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  bow.y = World.mouseY    
  
  
  drawSprites();
  createBalloons(); 
  textSize(12)  
  text("Score: "+ score, 270,30 )
}




function createArrow(){
  arrow = createSprite(400 ,100,10,5)
  arrow.velocityX = -6;
  arrow.scale = 0.25 ;
  arrow.lifetime = 100; 
  arrow.addImage(arrow_image)
  arrow.y = bow.y
  arrowGroup.add(arrow);
  
}

function redBalloon(){
  rball = createSprite(0,Math.round(random(20,370)),10,10)
  rball.addImage(rball_image)
  rball.velocityX = 3;
  rball.lifetime = 150;
  rball.scale = 0.1;
  rballGroup.add(rball)
}

function pinkBalloon(){
  pball = createSprite(0,Math.round(random(20,370)),10,10)
  pball.addImage(pball_image)
  pball.velocityX = 3;
  pball.lifetime = 150;
  pball.scale = 1.3;
  pballGroup.add(pball)
}

function greenBalloon(){
  gball = createSprite(0,Math.round(random(20,370)),10,10)
  gball.addImage(gball_image)
  gball.velocityX = 3;
  gball.lifetime = 150;
  gball.scale = 0.1;
  gballGroup.add(gball)
}
  
function blueBalloon(){
  bball = createSprite(0,Math.round(random(20,370)),10,10)
  bball.addImage(bball_image)
  bball.velocityX = 3;
  bball.lifetime = 150;
  bball.scale = 0.1;
  bballGroup.add(bball)
}

function createBalloons(){
  var selectBalloon = Math.round(random(1,4));
  console.log(selectBalloon)    
  
  if (World.frameCount%80 === 0){
    if (selectBalloon === 1){
      redBalloon();
    }
    else if (selectBalloon === 2){
      pinkBalloon();
    }
    else if (selectBalloon === 3){
      greenBalloon();
    }
    else {
      blueBalloon();
    }
  }
  
}
    
  
      
 
  
  
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

