// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


function setup() {
  createCanvas(400, 400);
  
  b1 = color(255);
  b2 = color(0);
  c1 = color(232, 135, 203);
  c2 = color(105, 61, 91);
  noLoop();
}

function draw() {
  //Background
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  //Foreground
  setGradient(width/6, height/6, width/1.5, height/1.5, c1, c2, Y_AXIS);
  //save("20210101.png");
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
