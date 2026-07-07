// Elbow or Hands? - MicroSim (sort cough/sneeze coverings into two bins)
// CANVAS_HEIGHT: 452
// Kindergarten, Analyze (L4): children distinguish helpful cough-covering behavior from
// unhelpful behavior by sorting scenario cards into two bins.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;
let resetButton;

// good = true (keeps germs away); way describes the covering
let scenarios = [
  { way: 'Coughing into an elbow', good: true },
  { way: 'Coughing into a tissue', good: true },
  { way: 'Coughing into open hands', good: false },
  { way: 'Coughing into the open air', good: false },
  { way: 'Sneezing into an elbow', good: true },
  { way: 'Sneezing into a tissue', good: true },
  { way: 'Sneezing into open hands', good: false },
  { way: 'Sneezing into the open air', good: false }
];

let idx = 0;
let placed = null;   // true/false when placed
let score = 0;
let sortedCount = 0;
let binGood, binBad;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { idx = 0; placed = null; score = 0; sortedCount = 0; });
  positionControls();
  describe('One cough or sneeze scenario at a time with two bins — Keeps Germs Away and ' +
    'Lets Germs Spread. Children tap the bin they think matches and see if they are right.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(160, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(24);
  text('Elbow or Hands?', canvasWidth / 2, 8);

  // scenario card
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2);
  rect(canvasWidth / 2 - 110, 44, 220, 76, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(18);
  text(scenarios[idx].way, canvasWidth / 2 - 100, 44, 200, 76);

  // bins
  let bw = (canvasWidth - margin * 2 - 16) / 2, bh = 96, by = 138;
  binGood = { x: margin, y: by, w: bw, h: bh };
  binBad = { x: margin + bw + 16, y: by, w: bw, h: bh };
  drawBin(binGood, 'Keeps Germs Away', true, 'seagreen', '🛡');
  drawBin(binBad, 'Lets Germs Spread', false, 'gray', '✕');
  cursor((pointInRect(mouseX, mouseY, binGood) || pointInRect(mouseX, mouseY, binBad)) && placed === null ? HAND : ARROW);

  // feedback + score
  noStroke(); textAlign(CENTER, TOP); textSize(16);
  if (placed === null) { fill('dimgray'); text('Which bin does this go in? Tap one.', margin, 248, canvasWidth - margin * 2, 30); }
  else {
    let correct = placed === scenarios[idx].good;
    fill(correct ? 'seagreen' : 'darkorange');
    text(correct ? (scenarios[idx].good ? '✓ Yes! That covers the germs.' : '✓ Yes! That way lets germs spread.')
      : 'Look again — does that keep germs in or let them out?', margin, 248, canvasWidth - margin * 2, 50);
  }
  fill('navy'); textAlign(CENTER, TOP); textSize(14);
  text('You sorted ' + sortedCount + ' of ' + scenarios.length + '!', margin, 300, canvasWidth - margin * 2, 24);
}

function drawBin(r, label, good, col, icon) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(placed === good ? 4 : 2); stroke(col);
  fill(placed === good ? (good === scenarios[idx].good ? 'honeydew' : 'mistyrose') : (hover && placed === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, TOP); textSize(22);
  text(icon, r.x, r.y + 10, r.w, 26);
  textSize(15); text(label, r.x + 6, r.y + 44, r.w - 12, 44);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (placed !== null) return;
  let choice = null;
  if (pointInRect(mouseX, mouseY, binGood)) choice = true;
  else if (pointInRect(mouseX, mouseY, binBad)) choice = false;
  if (choice !== null) { placed = choice; sortedCount++; if (choice === scenarios[idx].good) score++; }
}

function next() { idx = (idx + 1) % scenarios.length; placed = null; }

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
