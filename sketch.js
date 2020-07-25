var stand1,stand2;
var block8,block9,block10,block11,block12,block13,block14,block15,block16
var player;
function setup() {
  createCanvas(1300,800);
 player =  createSprite(100, 350, 30, 30);
 stand1 = createSprite(550,400,150,10);
  stand2 = createSprite(950,350,150,10);

  block8 = createSprite(330,235,30,40);
  block9 = createSprite(360,235,30,40);  
  block10 = createSprite(390,235,30,40);
  block11 = createSprite(420,235,30,40);
  block12 = createSprite(450,235,30,40);
  block13 = createSprite(360,195,30,40);
  block14 = createSprite(390,195,30,40);
  block15 = createSprite(4200,195,30,40);
  block16 = createSprite(390,155,30,40);


}

function draw() {
  background("red");  
  
  drawSprites();
}