// Heimlich Maneuver Step Sequencer - MicroSim (arrange steps in order)
// CANVAS_HEIGHT: 452
// Grades 6-8, Apply (L3): students arrange the choking-response steps in the correct
// order. For educational awareness only — not certification.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton, shuffleButton;

// correct order 0..4
let steps = [
  'Recognize the signs (clutching throat, cannot speak or breathe)',
  "Confirm verbally ('Are you choking? Can I help?')",
  'Position your hands just above the navel',
  'Give quick inward-and-upward thrusts',
  'Call for help / 911 if it does not clear'
];

let orderArr = [];  // current arrangement (step indices)
let selPos = -1;
let checked = false;
let slotRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check Order'); checkButton.mousePressed(() => { checked = true; });
  shuffleButton = createButton('Shuffle'); shuffleButton.mousePressed(shuffle);
  positionControls();
  shuffle();
  describe('Five choking-response step cards in scrambled order. Students tap two cards to ' +
    'swap them into the correct sequence, then check the order. Educational awareness only, ' +
    'not certification.', LABEL);
}
function positionControls() { checkButton.position(10, drawHeight + 12); shuffleButton.position(120, drawHeight + 12); }

function shuffle() {
  orderArr = [0, 1, 2, 3, 4];
  for (let i = orderArr.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [orderArr[i], orderArr[j]] = [orderArr[j], orderArr[i]]; }
  // avoid already-correct
  if (orderArr.every((v, i) => v === i)) [orderArr[0], orderArr[1]] = [orderArr[1], orderArr[0]];
  selPos = -1; checked = false;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(18); text('Heimlich Step Sequencer', canvasWidth / 2, 6);
  fill('firebrick'); textAlign(CENTER, TOP); textSize(10); text('Educational awareness only — get certified hands-on training.', canvasWidth / 2, 28);

  slotRects = [];
  let y0 = 46, sh = 58, gap = 8;
  for (let p = 0; p < 5; p++) {
    let y = y0 + p * (sh + gap);
    slotRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: sh, p: p });
    let step = orderArr[p];
    let correct = checked && step === p;
    let wrong = checked && step !== p;
    let sel = selPos === p;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : (correct ? 'seagreen' : (wrong ? 'indianred' : 'steelblue')));
    fill(correct ? 'honeydew' : (wrong ? 'mistyrose' : (sel ? 'lightyellow' : 'white')));
    rect(margin, y, canvasWidth - margin * 2, sh, 8);
    noStroke(); fill('steelblue'); textAlign(LEFT, TOP); textSize(16); textStyle(BOLD); text(p + 1, margin + 8, y + 6); textStyle(NORMAL);
    fill('black'); textAlign(LEFT, CENTER); textSize(11); text(steps[step], margin + 28, y + sh / 2, canvasWidth - margin * 2 - 40, sh);
  }
  cursor(overAny() ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (checked) { let n = orderArr.filter((v, i) => v === i).length; fill(n === 5 ? 'seagreen' : 'darkgoldenrod'); text(n === 5 ? '✓ Correct order! Recognize → confirm → position → thrusts → call for help.' : n + ' of 5 in the right place. Tap two cards to swap.', margin, drawHeight - 24, canvasWidth - margin * 2, 20); }
  else { fill('dimgray'); text(selPos < 0 ? 'Tap a card, then tap another to swap them into order.' : 'Now tap the card to swap with.', margin, drawHeight - 24, canvasWidth - margin * 2, 20); }
}

function overAny() { for (let r of slotRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of slotRects) if (pointInRect(mouseX, mouseY, r)) {
    if (selPos < 0) selPos = r.p;
    else { [orderArr[selPos], orderArr[r.p]] = [orderArr[r.p], orderArr[selPos]]; selPos = -1; }
    return;
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
