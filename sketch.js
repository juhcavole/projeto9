var navioImg, marImg;
var mar,navio;


function preload(){
  navioImg = loadAnimation("ship1.png","ship2.png");
  marImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200);
  mar.addImage(marImg);
  mar.velocityX = -5;
  mar.scale = 0.3;
  
  navio = createSprite(200,200);
  navio.addAnimation("navegando",navioImg);
  navio.scale = 0.3;
  
  
}

function draw() {
  background("blue");
  if(mar.x < 0){
    mar.x = mar.width/8;
  }
  drawSprites();
 
}