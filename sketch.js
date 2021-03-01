let x = 0;
let y = 0;
let spacing = 15;
//Increased spacing to have less lines

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  stroke(25, 130, 120);
  strokeWeight(1);
  if (random(1) < 0.5) {
    stroke(random(x),y,(x+y)%255);
    rect(random(1)*x, y, x + spacing, y + spacing);
  } else {
    fill(random(y),x,y+y);
    rect(x, y + spacing, x + spacing, y);
    //changed line to rect to have different shapes appear
  }

  x += spacing;

  if (x > width){
    y+=spacing;
    x=0;
  }
}
