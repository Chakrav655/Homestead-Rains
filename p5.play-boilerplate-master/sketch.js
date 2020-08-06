var drops = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 300; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background("#2C3D4F");
  for (var i = 0; i < drops.length; i++) {
    drops[i].display();
    drops[i].down();
  }
}