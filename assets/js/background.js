let bgColor = [255, 245, 214, 255]; // RGBA values for black
let fgColor = [0, 0, 0, 255]; // RGBA values for white

var scrollOffset = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Set the z-index to -1 to place it behind other elements
  canvas.style('position', 'fixed'); // Set the position to absolute
  background(0);
  bgColor = color(bgColor);
  fgColor = color(fgColor);
  setColors(backgroundColor, foregroundColor);
}

function draw() {
  console.log(frameRate())
  // lerp
  scrollOffset = window.scrollY / 2;
  background(bgColor); // subtle fade
  // stroke(255);
  grid(round(windowWidth / 100), document.body.scrollHeight / 100); // grid size
}

function grid(xDiv, yDiv) {
  for (var x = 0; x < xDiv; x++) {
    for (var y = 0; y < yDiv; y++) {
      noStroke();
      // get base grid pos
      xPos = (windowWidth / xDiv) * (x + 0.5);
      yPos = (document.body.scrollHeight / yDiv) * (y + 0.5);

      yPos += Math.sin(x + frameCount / 100) * 10; 

      yPos -= scrollOffset; // Add scroll offset to yPos

      fill(fgColor);
      circle(xPos, yPos, 15);
    }
  }
}

function setColors(bg, fg) {
  bgColor = color(bg);
  fgColor = color(fg);
}