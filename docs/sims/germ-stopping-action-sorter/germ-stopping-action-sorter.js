// Germ-Stopping Action Sorter - MicroSim (stops germs or spreads germs)
// CANVAS_HEIGHT: 452
// Grade 1, Evaluate (L5): students judge whether a student's action helps stop germs from
// spreading or could let germs spread.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;
let resetButton;

let cards = [
  { t: 'Diego sneezes into his elbow.', stops: true },
  { t: 'Maya washes her hands with soap.', stops: true },
  { t: 'Sam sneezes into his bare hands.', stops: false },
  { t: 'Ana shares her water bottle with a friend.', stops: false },
  { t: 'Leo covers his cough with a tissue.', stops: true },
  { t: 'Kim touches her face right after recess.', stops: false },
  { t: "Tom keeps his own cup and doesn't share it.", stops: true },
  { t: 'Zoe wipes her nose, then grabs a shared toy.', stops: false }
];

let idx = 0;
let picked = null;
let sorted = 0;
let stopRect, spreadRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Card');
  nextButton.mousePressed(() => { idx = (idx + 1) % cards.length; picked = null; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { idx = 0; picked = null; sorted = 0; });
  positionControls();
  describe('One action scenario at a time and two bins — Stops Germs and Spreads Germs. ' +
    'Children judge whether the action helps stop germs.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(130, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Germ-Stopping Action Sorter', canvasWidth / 2, 8);

  // card
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2);
  rect(margin, 44, canvasWidth - margin * 2, 76, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17);
  text(cards[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 76);

  // bins
  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 96, by = 140;
  stopRect = { x: margin, y: by, w: bw, h: bh };
  spreadRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBin(stopRect, 'Stops Germs', true, 'seagreen', '🛡');
  drawBin(spreadRect, 'Spreads Germs', false, 'gray', '🦠');
  cursor((pointInRect(mouseX, mouseY, stopRect) || pointInRect(mouseX, mouseY, spreadRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Does this action stop germs or spread germs?', margin, 248, canvasWidth - margin * 2, 30); }
  else {
    let correct = picked === cards[idx].stops;
    fill(correct ? 'seagreen' : 'darkorange');
    text(correct ? (cards[idx].stops ? '✓ Yes! That helps stop germs.' : '✓ Yes, that can spread germs.') : 'Think again — does that keep germs away?', margin, 248, canvasWidth - margin * 2, 40);
  }
  fill('navy'); textSize(14); text('You sorted ' + sorted + ' of ' + cards.length + '!', margin, 300, canvasWidth - margin * 2, 24);
}

function drawBin(r, label, val, col, icon) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === cards[idx].stops ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, TOP); textSize(24); text(icon, r.x, r.y + 12, r.w, 30);
  textSize(16); text(label, r.x + 4, r.y + 52, r.w - 8, 40);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked !== null) return;
  let choice = null;
  if (pointInRect(mouseX, mouseY, stopRect)) choice = true;
  else if (pointInRect(mouseX, mouseY, spreadRect)) choice = false;
  if (choice !== null) { picked = choice; sorted++; }
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
