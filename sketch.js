var snowyBackground;
var child1,child1img;



function preload(){
  snowyBackground = loadImage("snow2.jpg");
  child1img = loadAnimation("child1.png","child2.png");
  


}


 function setup() {
   createCanvas(800,400);
   child1 = createSprite(450, 320, 50, 50);
   child1.addAnimation("smiling",child1img)
   child1.scale = 0.5;

 }



 
function draw() {
  background(snowyBackground);  




  drawSprites();
}