var gameObject1,gameObject2;

function setup(){

  createCanvas(1200,800);
  gameObject1 = createSprite(400,100,50,80)
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(400,800,80,30)
  gameObject2.shapeColor = "red"


  gameObject2.velocityY = -5;
  gameObject1.velocityY = 5;
}


function draw(){
background(0);

bounce(gameObject1,gameObject2);
drawSprites();

}


