// Lockdown and Evacuation Sequence Trainer - MicroSim (file actions into two procedures)
// CANVAS_HEIGHT: 512
// Grades 9-12, Understand (L2): students classify standard procedural actions as lockdown
// or evacuation and see each procedure's steps grouped in order. Procedure only — no
// triggering-event, weapon, or method content.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton, resetButton;

// lock = true (lockdown); order = intended step order within its procedure
let cards = [
  { t: 'Move out of sight of doors and windows.', lock: true, order: 1 },
  { t: 'Silence your phone; stay quiet.', lock: true, order: 2 },
  { t: 'Keep the door secured; open only for staff.', lock: true, order: 3 },
  { t: 'Wait for an official all-clear before moving.', lock: true, order: 4 },
  { t: 'Stay low and calm until released.', lock: true, order: 5 },
  { t: 'Leave belongings and exit quickly.', lock: false, order: 1 },
  { t: 'Walk calmly — do not run or push.', lock: false, order: 2 },
  { t: 'Follow staff to the meeting area.', lock: false, order: 3 },
  { t: 'Stay with your class group.', lock: false, order: 4 },
  { t: 'Line up and wait to be accounted for.', lock: false, order: 5 }
];

let order = [];
let assign = new Array(cards.length).fill(-1);  // 0 lockdown, 1 evacuation
let selCard = -1, checked = false;
let cardRects = [], binRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check'); checkButton.mousePressed(() => { checked = true; });
  resetButton = createButton('Reset'); resetButton.mousePressed(reset);
  positionControls();
  reset();
  describe('Ten procedure cards and two columns — Lockdown and Evacuation. Students tap a ' +
    'card then a column to file it; Check shows correct placements, grouping each ' +
    'procedure\'s steps.', LABEL);
}
function positionControls() { checkButton.position(10, drawHeight + 14); resetButton.position(90, drawHeight + 14); }
function reset() { order = [...Array(cards.length).keys()]; for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; } assign = new Array(cards.length).fill(-1); selCard = -1; checked = false; }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(16); text('Lockdown & Evacuation Trainer', canvasWidth / 2, 6);

  // two bins (top)
  binRects = [];
  let bw = (canvasWidth - margin * 2 - 8) / 2, by = 30, bh = 30;
  ['Lockdown', 'Evacuation'].forEach((lbl, i) => {
    let x = margin + i * (bw + 8); binRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    noStroke(); fill(i === 0 ? 'steelblue' : 'seagreen'); rect(x, by, bw, bh, 5);
    fill('white'); textAlign(CENTER, CENTER); textSize(12); text(lbl + '  (' + assign.filter(a => a === i).length + ')', x, by + 15);
  });

  // cards
  cardRects = [];
  let cols = 2, gap = 6, cw = (canvasWidth - margin * 2 - gap) / cols, ch = 44, y0 = 70;
  for (let k = 0; k < order.length; k++) {
    let i = order[k], c = k % cols, r = Math.floor(k / cols);
    let x = margin + c * (cw + gap), y = y0 + r * (ch + 5);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let sel = selCard === i, a = assign[i];
    let correct = checked && a === (cards[i].lock ? 0 : 1);
    let wrong = checked && a >= 0 && a !== (cards[i].lock ? 0 : 1);
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : (a === 0 ? 'steelblue' : (a === 1 ? 'seagreen' : 'gray')));
    if (correct) fill('honeydew'); else if (wrong) fill('mistyrose'); else fill(a >= 0 ? (a === 0 ? '#eef4fb' : '#eef8f0') : 'white');
    rect(x, y, cw, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(9.5); text(cards[i].t, x + 5, y + ch / 2, cw - 24, ch);
    if (checked) { textAlign(RIGHT, CENTER); textSize(10); fill(correct ? 'seagreen' : 'indianred'); text(correct ? '✓' : '✗', x + cw - 5, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(11);
  if (checked) { let n = assign.filter((a, i) => a === (cards[i].lock ? 0 : 1)).length; fill(n === 10 ? 'seagreen' : 'darkgoldenrod'); text(n === 10 ? '✓ All 10 filed correctly. Each column is one standard procedure.' : n + ' of 10 correct.', margin, drawHeight - 22, canvasWidth - margin * 2, 18); }
  else { fill('dimgray'); text(selCard >= 0 ? 'Now tap a column to file it.' : 'Tap a card, then tap Lockdown or Evacuation.', margin, drawHeight - 22, canvasWidth - margin * 2, 18); }
}
function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { selCard = r.i; return; }
  if (selCard >= 0) for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) { assign[selCard] = r.i; selCard = -1; return; }
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
