var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 100, 100, 50);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
  fixedRect.velocityY=+5;
  movingRect=createSprite(400, 400, 50, 100);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityY=-5;
}


function draw() {
  background(0); 
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2&&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="orange";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="red";
  }

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2){
      fixedRect.velocityX*=-1;
      movingRect.velocityX*=-1;
  }

  if(fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2&&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.velocityY*=-1;
    movingRect.velocityY*=-1;
  }

  drawSprites();
}