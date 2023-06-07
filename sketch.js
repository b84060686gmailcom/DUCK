var duck; 


function setup() {
  createCanvas(1920,1080);
duck = createSprite(960,540,200,200)
image(img,0,0)
}
function preload(){img = loadImage("DUCK.png")}
function draw() 

{
  background(30);
  if (keyIsDown(RIGHT_ARROW))
  {duck.position.x = duck.position.x + 50
  
  
  
  }
  if (keyIsDown(LEFT_ARROW))
  {duck.position.x = duck.position.x - 50
  }



  drawSprites()
}



