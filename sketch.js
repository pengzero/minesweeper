function setup() {
  var ellipseX = random(0,600);
  var ellipseY = random(0,600);
  createCanvas(600,600)
  background(255)
    ellipse(ellipseX,ellipseY, 10,10)
    text("mine",ellipseX,ellipseY)
}

function draw() {
  if(mouseIsPressed ){
    noFill()
    ellipse(mouseX,mouseY,100,100)
  }else{
    
  }
    
  }


//how to calculate the distance between the mouse and the mine?
//when click the mouse, a circle come out which indicate the distance between the mine and mouse by its size. That circle 
//should disapper after mouse release, not dispaly on screen forever.