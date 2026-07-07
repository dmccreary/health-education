// Healthy Screen Time or Not? - MicroSim (safe tech use or ask an adult)
// CANVAS_HEIGHT: 452
// Kindergarten, Analyze (L4): children distinguish healthy, safe technology use from use
// that needs a trusted adult, by sorting scenario cards.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton, resetButton;

let cards = [
  { t: 'Watching an approved show with a grown-up nearby.', healthy: true },
  { t: 'Using a tablet alone for a very long time.', healthy: false },
  { t: 'Playing a learning game for a short time.', healthy: true },
  { t: 'A stranger online asks to chat.', healthy: false },
  { t: 'Video-calling grandma with a parent.', healthy: true },
  { t: 'A pop-up asks you to tap something new.', healthy: false }
];

let idx = 0, picked = null, sorted = 0;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Card'); nextButton.mousePressed(() => { idx = (idx + 1) % cards.length; picked = null; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { idx = 0; picked = null; sorted = 0; });
  positionControls();
  describe('One technology scenario at a time and two bins — Healthy Screen Use and Ask a ' +
    'Trusted Adult. Children sort each scenario.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(130, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(20); text('Healthy Screen Time or Not?', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2); rect(margin, 44, canvasWidth - margin * 2, 72, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(16); text(cards[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 72);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 92, by = 138;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBin(aRect, 'Healthy Screen Use', true, 'seagreen', '☀');
  drawBin(bRect, 'Ask a Trusted Adult', false, 'darkorange', '✋');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Is this healthy screen time, or ask a grown-up?', margin, 242, canvasWidth - margin * 2, 30); }
  else { let ok = picked === cards[idx].healthy; fill(ok ? 'seagreen' : 'darkorange'); text(ok ? (cards[idx].healthy ? '✓ Yes, that is healthy screen time!' : '✓ Yes, better to ask a trusted adult.') : 'Think again — is this safe on your own?', margin, 242, canvasWidth - margin * 2, 40); }
  fill('navy'); textSize(14); text('You sorted ' + sorted + ' of ' + cards.length + '!', margin, 300, canvasWidth - margin * 2, 24);
}
function drawBin(r, label, val, col, icon) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === cards[idx].healthy ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, TOP); textSize(24); text(icon, r.x, r.y + 12, r.w, 30); textSize(15); text(label, r.x + 4, r.y + 52, r.w - 8, 40);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() {
  if (picked !== null) return;
  let c = null; if (pointInRect(mouseX, mouseY, aRect)) c = true; else if (pointInRect(mouseX, mouseY, bRect)) c = false;
  if (c !== null) { picked = c; sorted++; }
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
