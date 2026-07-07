// Drink Type Sorter - MicroSim (sort drinks into everyday vs. occasional bins)
// CANVAS_HEIGHT: 452
// Grade 1, Remember (L1): students recall drink types and their benefits by sorting each
// drink into "everyday drink" or "occasional treat".

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;
let resetButton;

// bin: 'everyday' or 'treat'; benefit caption
let drinks = [
  { n: 'Water', bin: 'everyday', color: 'deepskyblue', cap: 'Water keeps your body cool and helps you focus.' },
  { n: 'Milk', bin: 'everyday', color: 'whitesmoke', cap: 'Milk helps build strong bones and teeth.' },
  { n: 'Water with fruit slices', bin: 'everyday', color: 'lightpink', cap: 'Fruit-flavored water is a tasty everyday choice with no added sugar.' },
  { n: '100% Juice', bin: 'treat', color: 'orange', cap: 'Juice has natural sugar, so it is best in small amounts sometimes.' },
  { n: 'Soda', bin: 'treat', color: 'saddlebrown', cap: 'Soda has lots of added sugar — an occasional treat.' },
  { n: 'Sports drink', bin: 'treat', color: 'yellowgreen', cap: 'Sports drinks have extra sugar you usually do not need.' },
  { n: 'Flavored milk', bin: 'treat', color: 'wheat', cap: 'Flavored milk is sweet with added sugar — a sometimes drink.' }
];

let idx = 0;
let placed = '';
let binRects = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Drink');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { idx = 0; placed = ''; });
  positionControls();
  describe('One drink card at a time with two bins — everyday drink and occasional treat. ' +
    'Children tap a bin to sort the drink and see a short benefit for each correct choice.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(22);
  text('Drink Type Sorter', canvasWidth / 2, 8);

  // drink card
  let d = drinks[idx];
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(canvasWidth / 2 - 70, 44, 140, 96, 10);
  noStroke(); fill(d.color); stroke('gray'); strokeWeight(1);
  rect(canvasWidth / 2 - 20, 62, 40, 50, 6);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(15);
  text(d.n, canvasWidth / 2 - 66, 116, 132, 24);

  // two bins
  let bw = (canvasWidth - margin * 2 - 16) / 2, bh = 84, by = 158;
  binRects.everyday = { x: margin, y: by, w: bw, h: bh };
  binRects.treat = { x: margin + bw + 16, y: by, w: bw, h: bh };
  drawBin(binRects.everyday, 'Everyday Drink', 'everyday', 'steelblue');
  drawBin(binRects.treat, 'Occasional Treat', 'treat', 'darkorange');
  cursor((pointInRect(mouseX, mouseY, binRects.everyday) || pointInRect(mouseX, mouseY, binRects.treat)) && !placed ? HAND : ARROW);

  // feedback
  let fy = 256;
  noStroke(); textAlign(CENTER, TOP); textSize(16);
  if (!placed) { fill('dimgray'); text('Where does this drink go? Tap a bin.', margin, fy, canvasWidth - margin * 2, 40); }
  else {
    let correct = placed === d.bin;
    fill(correct ? 'seagreen' : 'darkorange');
    text(correct ? '✓ ' + d.cap : 'Look again — is this a drink to have every day, or just sometimes?',
      margin, fy, canvasWidth - margin * 2, 80);
  }
}

function drawBin(r, label, bin, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  let d = drinks[idx];
  strokeWeight(placed === bin ? 4 : 2); stroke(col);
  fill(placed === bin ? (bin === d.bin ? 'honeydew' : 'mistyrose') : (hover && !placed ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(17);
  text(label, r.x + 6, r.y, r.w - 12, r.h);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (placed) return;
  if (pointInRect(mouseX, mouseY, binRects.everyday)) placed = 'everyday';
  else if (pointInRect(mouseX, mouseY, binRects.treat)) placed = 'treat';
}

function next() { idx = (idx + 1) % drinks.length; placed = ''; }

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
