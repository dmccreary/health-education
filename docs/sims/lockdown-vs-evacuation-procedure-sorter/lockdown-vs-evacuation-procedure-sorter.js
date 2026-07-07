// Lockdown vs. Evacuation Procedure Sorter - MicroSim (classify the response type)
// CANVAS_HEIGHT: 512
// Grades 6-8, Understand (L2): students classify correct student actions as belonging to
// lockdown or evacuation. Procedure only — no triggering-event content.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// lock = true (lockdown) / false (evacuation); e reason
let cards = [
  { t: 'Move out of sight of the door and windows.', lock: true, e: 'Staying out of sight is a lockdown action.' },
  { t: 'Follow staff to the designated outdoor meeting area.', lock: false, e: 'Going to a meeting area is an evacuation action.' },
  { t: 'Silence your phone and stay quiet.', lock: true, e: 'Quiet and silent phones belong to lockdown.' },
  { t: 'Walk calmly — do not run or push.', lock: false, e: 'Calm walking out is an evacuation action.' },
  { t: 'Wait for an official all-clear before moving.', lock: true, e: 'Waiting for all-clear in place is lockdown.' },
  { t: 'Leave your belongings behind and exit.', lock: false, e: 'Leaving items to exit quickly is evacuation.' },
  { t: 'Do not open the door for anyone but staff with a key.', lock: true, e: 'Keeping the door secured is a lockdown action.' },
  { t: 'Stay with your class group.', lock: false, e: 'Staying with your group applies during evacuation.' },
  { t: 'Stay low and away from the door.', lock: true, e: 'Staying low and hidden is a lockdown action.' },
  { t: 'Line up at the designated spot outside.', lock: false, e: 'Lining up outside is an evacuation action.' }
];

let placed = new Array(cards.length).fill(null);
let feedback = 'Tap each action: Lockdown or Evacuation.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { placed = new Array(cards.length).fill(null); feedback = 'Tap each action: Lockdown or Evacuation.'; feedbackColor = 'dimgray'; });
  positionControls();
  describe('Ten procedure cards to classify as lockdown or evacuation actions. Tapping a ' +
    'card cycles its category with a one-sentence reason.', LABEL);
}
function positionControls() { resetButton.position(10, drawHeight + 14); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(16); text('Lockdown vs. Evacuation', canvasWidth / 2, 6);
  textAlign(LEFT, CENTER); textSize(11);
  fill('steelblue'); text('● Lockdown', margin, 30); fill('seagreen'); textAlign(RIGHT, CENTER); text('Evacuation ●', canvasWidth - margin, 30);

  cardRects = [];
  let y0 = 44, ch = 36, gap = 4;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]); let correct = placed[i] !== null && placed[i] === cards[i].lock;
    strokeWeight(1.5);
    if (placed[i] === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2); fill(correct ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11); text(cards[i].t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 120, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (placed[i] === null) { fill('dimgray'); text('tap to sort', canvasWidth - margin - 8, y + ch / 2); }
    else { fill(placed[i] ? 'steelblue' : 'seagreen'); text((placed[i] ? 'Lockdown' : 'Evacuation') + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);
  let cc = placed.filter((p, i) => p !== null && p === cards[i].lock).length, pc = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor); text((pc ? '(' + cc + '/' + pc + ') ' : '') + feedback, margin, drawHeight - 24, canvasWidth - margin * 2, 22);
}
function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) {
    let cur = placed[r.i]; placed[r.i] = cur === null ? true : (cur === true ? false : null);
    if (placed[r.i] !== null) { let ok = placed[r.i] === cards[r.i].lock; feedback = (ok ? '✓ ' : '✗ ') + cards[r.i].e; feedbackColor = ok ? 'seagreen' : 'indianred'; }
    else { feedback = 'Unsorted.'; feedbackColor = 'dimgray'; } return;
  }
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
