// Kind or Unkind? - MicroSim (sort scenarios into Kind / Unkind)
// CANVAS_HEIGHT: 452
// Kindergarten, Analyze (L4): children distinguish kind behavior from unkind behavior.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton, resetButton;

let cards = [
  { t: 'One child shares a toy with a friend.', kind: true },
  { t: 'One child grabs a toy away from another.', kind: false },
  { t: 'A child helps a friend who fell down.', kind: true },
  { t: 'A child laughs at someone who is crying.', kind: false },
  { t: 'A child says "great job!" to a classmate.', kind: true },
  { t: 'A child calls someone a mean name.', kind: false },
  { t: 'A child invites a lonely kid to play.', kind: true },
  { t: 'A child pushes to the front of the line.', kind: false },
  { t: 'A child gives a friend a gentle hug.', kind: true },
  { t: 'A child knocks over a friend\'s blocks on purpose.', kind: false }
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
  describe('One scenario at a time and two bins — Kind and Unkind. Children sort each ' +
    'behavior.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(130, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(22); text('Kind or Unkind?', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2); rect(margin, 44, canvasWidth - margin * 2, 72, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17); text(cards[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 72);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 92, by = 138;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBin(aRect, 'Kind', true, 'seagreen', '☀'); drawBin(bRect, 'Unkind', false, 'gray', '☁');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Is this kind or unkind?', margin, 242, canvasWidth - margin * 2, 30); }
  else { let ok = picked === cards[idx].kind; fill(ok ? 'seagreen' : 'darkorange'); text(ok ? (cards[idx].kind ? '✓ Yes, that is kind!' : '✓ Yes, that is unkind.') : 'Think again — how would it feel?', margin, 242, canvasWidth - margin * 2, 30); }
  fill('navy'); textSize(14); text('You sorted ' + sorted + ' of ' + cards.length + '!', margin, 300, canvasWidth - margin * 2, 24);
}
function drawBin(r, label, val, col, icon) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === cards[idx].kind ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12); noStroke(); fill(col); textAlign(CENTER, TOP); textSize(28); text(icon, r.x, r.y + 12, r.w, 34); textSize(17); text(label, r.x, r.y + 56, r.w, 30);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked !== null) return; let c = null; if (pointInRect(mouseX, mouseY, aRect)) c = true; else if (pointInRect(mouseX, mouseY, bRect)) c = false; if (c !== null) { picked = c; sorted++; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
