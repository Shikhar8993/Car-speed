var car , wall;
var speed ,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight=random(400,1500);

  
 
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "red";



  wall=createSprite(400,200,60,height/2);
  wall.shapeColor  = "red";

   
   


 
}

function draw() {
  background("black");  
  car.velocityX = speed;
  
  if(collide(car,wall)){
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>0&&deformation<=80){
      car.shapeColor = "pink"
    }
    if(deformation>80&&deformation<=180){
      car.shapeColor = "white"
    }
    if(deformation<80){
      car.shapeColor = "yellow"
    }
    car.velocityX=0;;

  }

  
  drawSprites();
}

function collide(body1,body2){
  if(body1.x-body2.x<=body1.width/2+body2.width/2 && body2.x-body1.x<=body1.width/2+body2.width/2 &&
    body1.y-body2.y<=body1.height/2+body2.height/2 && body2.y-body1.y<=body1.height/2+body2.height/2){
  return true;
 }
 else{
  return false; 
  
 }}
