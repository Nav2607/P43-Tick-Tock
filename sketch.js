var hr,mn,sc


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  
  translate(200,200);
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("lime");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  noFill();
  stroke("red");
  strokeWeight(9);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke("lime")
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);
  drawSprites();
}