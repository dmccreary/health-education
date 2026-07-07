// Reading Your Body's Signals - MicroSim (sort hunger and fullness signals)
// CANVAS_HEIGHT: 452
// Grade 3, Remember (L1): students recall body signals for hunger and fullness by sorting
// feeling cards into Hungry and Full.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton, resetButton;

// hungry = true / full = false
let cards = [
  { t: 'Rumbling tummy', hungry: true }, { t: 'Hard to focus', hungry: true }, { t: 'Low energy', hungry: true },
  { t: 'Comfortably full', hungry: false }, { t: 'Food tastes less exciting', hungry: false }, { t: 'Not thinking about food', hungry: false }
];

let marks = new Array(6).fill(0); // 0 none, 1 hungry, 2 full
let checked = false, score = 0;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check'); checkButton.mousePressed(check);
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { marks = new Array(6).fill(0); checked = false; score = 0; });
  positionControls();
  describe('Six body-signal cards to sort into Hungry or Full. Tapping a card cycles its ' +
    'column; Check shows which are correct.', LABEL);
}
function positionControls() { checkButton.position(10, drawHeight + 12); resetButton.position(90, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(19); text("Reading Your Body's Signals", canvasWidth / 2, 8);

  // belly figure hint
  noStroke(); fill('navajowhite'); stroke('burlywood'); strokeWeight(2); circle(canvasWidth / 2, 60, 30);
  noStroke(); fill('orange'); circle(canvasWidth / 2, 66, 12);
  fill('dimgray'); textAlign(CENTER, TOP); textSize(11); text('Your belly sends signals!', canvasWidth / 2 - 70, 80, 140, 16);

  // legend
  textAlign(LEFT, CENTER); textSize(11);
  fill('darkorange'); text('● Hungry', margin, 104); fill('seagreen'); textAlign(RIGHT, CENTER); text('Full ●', canvasWidth - margin, 104);

  cardRects = [];
  let y0 = 120, ch = 40, gap = 6;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = (marks[i] === 1 && cards[i].hungry) || (marks[i] === 2 && !cards[i].hungry);
    strokeWeight(1.5);
    if (checked) { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'mistyrose'); }
    else if (marks[i] === 1) { stroke('darkorange'); fill('linen'); }
    else if (marks[i] === 2) { stroke('seagreen'); fill('honeydew'); }
    else { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14); text(cards[i].t, margin + 10, y + ch / 2);
    textAlign(RIGHT, CENTER); textSize(11);
    if (checked) { fill(correct ? 'seagreen' : 'indianred'); text(correct ? '✓' : '✗', canvasWidth - margin - 10, y + ch / 2); }
    else { let lab = ['tap to sort', 'Hungry', 'Full']; fill(marks[i] === 1 ? 'darkorange' : (marks[i] === 2 ? 'seagreen' : 'dimgray')); text(lab[marks[i]], canvasWidth - margin - 10, y + ch / 2); }
  }
  cursor(overAny() && !checked ? HAND : ARROW);

  noStroke(); textAlign(CENTER, BOTTOM); textSize(13); fill('navy');
  text(checked ? 'You sorted ' + score + ' of ' + cards.length + '!' : 'Tap each card, then Check.', margin, drawHeight - 6, canvasWidth - margin * 2, 24);
}
function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (checked) return; for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { marks[r.i] = (marks[r.i] + 1) % 3; return; } }
function check() { checked = true; score = 0; for (let i = 0; i < cards.length; i++) if ((marks[i] === 1 && cards[i].hungry) || (marks[i] === 2 && !cards[i].hungry)) score++; }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
