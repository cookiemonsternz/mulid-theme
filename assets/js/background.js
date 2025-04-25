let bgColor = [255, 245, 214, 255]; // RGBA values for black
let fgColor = [0, 0, 0, 255]; // RGBA values for white

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Set the z-index to -1 to place it behind other elements
  canvas.style('position', 'absolute'); // Set the position to absolute
  background(0);
  bgColor = color(bgColor);
  fgColor = color(fgColor);
  setColors(backgroundColor, foregroundColor);
}

function draw() {
  background(bgColor); // subtle fade
  // stroke(255);
  grid(round(windowWidth / 100), round(windowHeight / 100)); // grid size
}

function grid(xDiv, yDiv) {
  for (var x = 0; x < xDiv; x++) {
    for (var y = 0; y < yDiv; y++) {
      noStroke();
      // get base grid pos
      xPos = (windowWidth / xDiv) * (x + 0.5);
      yPos = (windowHeight / yDiv) * (y + 0.5);

      yPos += Math.sin(x + frameCount / 100) * 10; 

      fill(fgColor);
      circle(xPos, yPos, 15);
    }
  }
}

function setColors(bg, fg) {
  bgColor = color(bg);
  fgColor = color(fg);
}