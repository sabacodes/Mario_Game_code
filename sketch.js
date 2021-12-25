var mario, mario_running, mario_collided;
var bg, bgImage;
var ground;
var brick, brickImage;


function preload(){
  mario_running =  loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png",
  "images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
  bgImage = loadImage("images/bgnew.jpg");
  brickImage = loadImage("images/brick.png");
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(500,300);
  bg.addImage(bgImage);
  bg.scale =0.5;
  bg.velocityX = -4;

  mario = createSprite(200,505,20,50);
  mario.addAnimation("running", mario_running);
  mario.scale =0.3;

  ground = createSprite(500,590,1000,20);
  ground.visible = false;

}

function draw() {

  if(bg.x < 50){
    bg.x = 700;
  }

  if(keyDown('space')){
    mario.velocityY = -9;
  }

  mario.velocityY = mario.velocityY + 0.5;
  mario.collide(ground);

  generateBricks();

  drawSprites();
}


function generateBricks(){
  if(frameCount % 50 == 0){
    
  brick = createSprite(1000,random(50,500),80,40);
  brick.addImage(brickImage);
  brick.scale = 0.8;
  brick.velocityX = -7;
  console.log(frameCount)
  }
}