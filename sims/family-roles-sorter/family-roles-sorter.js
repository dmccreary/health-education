// Who Does What in a Family - MicroSim (match actions to role categories)
// CANVAS_HEIGHT: 512
// Grade 3, Understand (L2): students describe family roles by matching everyday actions
// to the role category they represent.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 12;

let checkButton;
let resetButton;

let roles = ['Caregiving', 'Teaching', 'Providing Safety', 'Emotional Support', 'Contributing'];
let roleColors = ['salmon', 'goldenrod', 'steelblue', 'mediumpurple', 'seagreen'];

// card: text, correct role index
let cards = [
  { t: 'Packing a lunch', r: 0 },
  { t: 'Making a doctor appointment', r: 0 },
  { t: 'Showing how to ride a bike', r: 1 },
  { t: 'Reading a bedtime story', r: 1 },
  { t: 'Setting a bedtime', r: 2 },
  { t: 'Locking the doors at night', r: 2 },
  { t: 'Giving a hug after a hard day', r: 3 },
  { t: 'Cheering at a game', r: 3 },
  { t: 'Setting the table', r: 4 },
  { t: 'Helping with chores', r: 4 }
];

let assign = new Array(cards.length).fill(-1);
let selCard = -1;
let checked = false;
let roleRects = [], cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(() => { checked = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { assign = new Array(cards.length).fill(-1); selCard = -1; checked = false; });
  positionControls();
  describe('Five family-role bins — caregiving, teaching, providing safety, emotional ' +
    'support, contributing — and ten action cards. Students tap a card then tap the role ' +
    'bin it belongs to, then check their answers.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  resetButton.position(160, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Who Does What in a Family', canvasWidth / 2, 6);

  // role bins (row of 5)
  roleRects = [];
  let bw = (canvasWidth - margin * 2 - 4 * 4) / 5, by = 32, bh = 56;
  for (let i = 0; i < 5; i++) {
    let x = margin + i * (bw + 4);
    roleRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let count = assign.filter(a => a === i).length;
    strokeWeight(1.5); stroke(roleColors[i]);
    fill(lerpColor(color(roleColors[i]), color('white'), 0.75));
    rect(x, by, bw, bh, 6);
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(9);
    text(roles[i], x + 2, by + 4, bw - 4, 34);
    fill(roleColors[i]); textSize(11); text('(' + count + ')', x, by + bh - 16, bw, 14);
  }

  // action cards (2 cols)
  cardRects = [];
  let cols = 2, gap = 6;
  let cw = (canvasWidth - margin * 2 - gap) / cols;
  let cy0 = 98, ch = 34;
  for (let i = 0; i < cards.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (cw + gap), y = cy0 + r * (ch + 5);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let sel = selCard === i;
    let a = assign[i];
    let correct = checked && a === cards[i].r;
    let wrong = checked && a >= 0 && a !== cards[i].r;
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'black' : (a >= 0 ? roleColors[a] : 'gray'));
    if (correct) fill('honeydew'); else if (wrong) fill('mistyrose');
    else fill(a >= 0 ? lerpColor(color(roleColors[a]), color('white'), 0.7) : 'white');
    rect(x, y, cw, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(cards[i].t, x + 6, y + ch / 2, cw - 12, ch);
    if (checked) { textAlign(RIGHT, CENTER); textSize(11); fill(correct ? 'seagreen' : 'indianred'); text(correct ? '✓' : '✗', x + cw - 6, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  // instructions
  noStroke(); textAlign(LEFT, TOP); textSize(12); fill('dimgray');
  let msg = checked ? scoreText() : (selCard >= 0 ? 'Now tap the role bin for "' + cards[selCard].t + '".' : 'Tap a card, then tap the role it belongs to.');
  text(msg, margin, drawHeight - 30, canvasWidth - margin * 2, 26);
}

function scoreText() {
  let s = assign.filter((a, i) => a === cards[i].r).length;
  return 'You matched ' + s + ' of ' + cards.length + ' correctly!';
}

function overAny() {
  for (let r of roleRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { selCard = r.i; return; }
  if (selCard >= 0) for (let r of roleRects) if (pointInRect(mouseX, mouseY, r)) { assign[selCard] = r.i; selCard = -1; return; }
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
