// Is This a Health Decision? - MicroSim (binary classify)
// CANVAS_HEIGHT: 452
// Kindergarten, Understand (L2): students recognize when a health decision is needed by
// classifying everyday moments.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton, resetButton;

let deck = [
  { t: 'Choosing a healthy snack to eat.', health: true, e: 'What we eat affects our body — a health decision.' },
  { t: 'Choosing what color shirt to wear.', health: false, e: 'Shirt color does not affect health — not a health decision.' },
  { t: 'Deciding to wear a helmet on your bike.', health: true, e: 'A helmet keeps you safe — a health decision.' },
  { t: 'Choosing which storybook to read.', health: false, e: 'Picking a book is fun, but not a health decision.' },
  { t: 'Telling a trusted adult how you feel.', health: true, e: 'Sharing feelings supports health — a health decision.' }
];

let idx = 0, picked = null;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = null; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { idx = 0; picked = null; });
  positionControls();
  describe('One everyday moment at a time with two buttons — Health Decision and Not a ' +
    'Health Decision. Children classify each and see why.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(80, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(20); text('Is This a Health Decision?', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2); rect(margin, 44, canvasWidth - margin * 2, 76, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17); text(deck[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 76);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 60, by = 140;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBtn(aRect, 'Health Decision', true, 'seagreen'); drawBtn(bRect, 'Not a Health\nDecision', false, 'slateblue');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Is this a health decision? Tap a button.', margin, 216, canvasWidth - margin * 2, 30); }
  else { let ok = picked === deck[idx].health; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ ' : '') + deck[idx].e, margin, 216, canvasWidth - margin * 2, 70); }
}
function drawBtn(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === deck[idx].health ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12); noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(15); text(label, r.x + 4, r.y, r.w - 8, r.h);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked !== null) return; if (pointInRect(mouseX, mouseY, aRect)) picked = true; else if (pointInRect(mouseX, mouseY, bRect)) picked = false; }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
