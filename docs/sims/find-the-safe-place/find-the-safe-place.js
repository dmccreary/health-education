// Find the Safe Place - MicroSim (match emergency to safe location)
// CANVAS_HEIGHT: 452
// Kindergarten, Remember (L1): students identify the correct safe place for a given type
// of school emergency.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

let locations = ['Classroom', 'Hallway', 'Outdoor Field', 'Gym'];
let prompts = [
  { emerg: 'Fire drill', safe: 2 },
  { emerg: 'Severe weather drill', safe: 1 },
  { emerg: 'Lockdown drill', safe: 0 }
];

let pIndex = 0;
let picked = -1;
let shake = 0;
let locRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Emergency');
  nextButton.mousePressed(() => { pIndex = (pIndex + 1) % prompts.length; picked = -1; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { pIndex = 0; picked = -1; });
  positionControls();
  describe('A simple school map with four locations — classroom, hallway, outdoor field, ' +
    'and gym. A prompt names an emergency, and children tap the correct safe place.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  if (shake > 0) shake--;
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(22);
  text('Find the Safe Place', canvasWidth / 2, 8);

  // 4 location cards (2x2 map)
  locRects = [];
  let cols = 2, gap = 12;
  let lw = (canvasWidth - margin * 2 - gap) / cols, lh = 96;
  let y0 = 48;
  let colors = ['bisque', 'lightsteelblue', 'palegreen', 'wheat'];
  for (let i = 0; i < 4; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (lw + gap) + (shake > 0 && picked === i ? random(-4, 4) : 0);
    let y = y0 + r * (lh + gap);
    locRects.push({ x: margin + c * (lw + gap), y: y, w: lw, h: lh, i: i });
    let correctPick = picked === i && i === prompts[pIndex].safe;
    let wrongPick = picked === i && i !== prompts[pIndex].safe;
    strokeWeight(correctPick ? 4 : 2);
    stroke(correctPick ? 'seagreen' : (wrongPick ? 'indianred' : 'gray'));
    fill(correctPick ? 'palegreen' : colors[i]);
    rect(x, y, lw, lh, 10);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(16);
    text(locations[i], x, y, lw, lh);
    if (correctPick) { fill('seagreen'); textSize(22); text('✓', x + lw - 22, y + 18); }
  }
  cursor(overAny() ? HAND : ARROW);

  // prompt strip
  let py = y0 + 2 * (lh + gap) + 4;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(CENTER, CENTER); textSize(17);
  if (picked < 0) { fill('black'); text(prompts[pIndex].emerg + ' — where is the safe place?', margin + 8, py, canvasWidth - margin * 2 - 16, drawHeight - py - 10); }
  else if (picked === prompts[pIndex].safe) { fill('seagreen'); text('Yes! The safe place for a ' + prompts[pIndex].emerg.toLowerCase() + ' is the ' + locations[prompts[pIndex].safe] + '.', margin + 8, py, canvasWidth - margin * 2 - 16, drawHeight - py - 10); }
  else { fill('darkorange'); text('Try again — where do we go for a ' + prompts[pIndex].emerg.toLowerCase() + '?', margin + 8, py, canvasWidth - margin * 2 - 16, drawHeight - py - 10); }
}

function overAny() { for (let r of locRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of locRects) if (pointInRect(mouseX, mouseY, r)) {
    picked = r.i;
    if (r.i !== prompts[pIndex].safe) shake = 20;
    return;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
