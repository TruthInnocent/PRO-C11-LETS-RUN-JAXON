var path, pathimage

var boy, boyimage

function preload(){
  pathimage = loadImage("path.png")
  boyimage  = loadImage("runner1.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pahthimage) 
  boy = createSprite(mouseX,mouseY,50,50)
  boy.addImage(boyimage)
}

function draw() {
  background(0);
if (path.y > 400) {
  path.y = height/2
}
}
