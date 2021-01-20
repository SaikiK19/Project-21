var bullet;
var weight, speed, deformation;
var wall, thickness, million;
var damage;



function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,300);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness, height/2);
  bullet = createSprite(50,200,100,50);
  bullet.velocityX = speed;
  bullet.shapeColor = color('white');
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    
      if(damage>10){
        wall.shapeColor = color(255,0,0);
      }
      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
  }  
  drawSprites();
}
function deformation(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation  = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
        bullet.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }
  
}
function Damage(){
 if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0
  hurt = (0.5*weight*speed*speed)/thickness * thickness * thickness
 
  if(hurt<10){
    wall.shapeColor = color('green');
  }
  if(hurt>10){
    wall.shapeColor = color('red');
  }
}
}



function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true
} 
else{
  return false
}}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}