
var moving , fixed

function setup() {

  createCanvas(800,400);

  moving = createSprite(400, 200, 70, 50);

  fixed = createSprite(300, 250, 50, 50);
  
}

function draw() {
  background("cyan");  

  moving.x = mouseX
  moving.y = mouseY

  console.log( fixed.x - moving.x )

  if( moving.x - fixed.x <= (moving.width + fixed.width)/2  &&
      fixed.x - moving.x <= (moving.width + fixed.width)/2  &&
      moving.y - fixed.y <= (moving.height + fixed.height)/2  &&
      fixed.y - moving.y <= (moving.height + fixed.height)/2  
  ){
    moving.shapeColor = "red"
    fixed.shapeColor="green"
  }

  else{
    moving.shapeColor = "white"
    fixed.shapeColor="white"
  }

  drawSprites();
}

//moving.x - fixed.x --> for the right edge of fixed

//fixed.x - moving.x --> for the left edge of fixed 