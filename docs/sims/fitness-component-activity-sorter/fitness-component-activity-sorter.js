// Fitness Component Activity Sorter - MicroSim (classify activities by fitness component)
// CANVAS_HEIGHT: 512
// Grade 5, Analyze (L4): students classify physical activities into the fitness component
// each one primarily builds.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 12;

let checkButton;
let shuffleButton;

let bins = ['Cardio Endurance', 'Muscular Strength', 'Flexibility', 'Balance & Coordination'];
let binColors = ['indianred', 'steelblue', 'mediumseagreen', 'goldenrod'];
let binIcons = ['♥', '💪', '🧘', '⚖'];

let cards = [
  { t: 'Running', r: 0 }, { t: 'Swimming', r: 0 }, { t: 'Jump rope', r: 0 }, { t: 'Biking', r: 0 },
  { t: 'Push-ups', r: 1 }, { t: 'Climbing', r: 1 },
  { t: 'Yoga', r: 2 }, { t: 'Stretching', r: 2 },
  { t: 'Balance-beam walk', r: 3 }, { t: 'Juggling', r: 3 }, { t: 'Catching a ball', r: 3 }, { t: 'Dancing', r: 3 }
];

let order = [];
let assign = [];
let selCard = -1;
let checked = false;
let binRects = [], cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Sorting');
  checkButton.mousePressed(() => { checked = true; });
  shuffleButton = createButton('Shuffle New Round');
  shuffleButton.mousePressed(reset);
  positionControls();
  reset();
  describe('Four fitness-component bins — cardio endurance, muscular strength, flexibility, ' +
    'and balance & coordination — and twelve activity cards. Students tap a card then tap ' +
    'the bin it belongs to, then check.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  shuffleButton.position(160, drawHeight + 14);
}

function reset() {
  order = [...Array(cards.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  assign = new Array(cards.length).fill(-1);
  selCard = -1; checked = false;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Fitness Component Activity Sorter', canvasWidth / 2, 6);

  // 4 bins
  binRects = [];
  let bw = (canvasWidth - margin * 2 - 3 * 4) / 4, by = 30, bh = 54;
  for (let i = 0; i < 4; i++) {
    let x = margin + i * (bw + 4);
    binRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let count = assign.filter(a => a === i).length;
    strokeWeight(1.5); stroke(binColors[i]); fill(lerpColor(color(binColors[i]), color('white'), 0.78));
    rect(x, by, bw, bh, 6);
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(14); text(binIcons[i], x, by + 4, bw, 18);
    textSize(9); text(bins[i], x + 2, by + 24, bw - 4, 26);
    fill(binColors[i]); textSize(10); text('(' + count + ')', x, by + bh - 12, bw, 12);
  }

  // 12 cards (2 cols)
  cardRects = [];
  let cols = 2, gap = 6;
  let cw = (canvasWidth - margin * 2 - gap) / cols, ch = 30;
  for (let k = 0; k < order.length; k++) {
    let i = order[k];
    let c = k % cols, r = Math.floor(k / cols);
    let x = margin + c * (cw + gap), y = 94 + r * (ch + 5);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let sel = selCard === i;
    let a = assign[i];
    let correct = checked && a === cards[i].r;
    let wrong = checked && a >= 0 && a !== cards[i].r;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'black' : (a >= 0 ? binColors[a] : 'gray'));
    if (correct) fill('honeydew'); else if (wrong) fill('mistyrose'); else fill(a >= 0 ? lerpColor(color(binColors[a]), color('white'), 0.7) : 'white');
    rect(x, y, cw, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12); text(cards[i].t, x + 6, y + ch / 2, cw - 24, ch);
    if (checked) { textAlign(RIGHT, CENTER); textSize(11); fill(correct ? 'seagreen' : 'indianred'); text(correct ? '✓' : '✗', x + cw - 6, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(12); fill('dimgray');
  let msg = checked ? ('You sorted ' + assign.filter((a, i) => a === cards[i].r).length + ' of ' + cards.length + ' correctly!')
    : (selCard >= 0 ? 'Now tap a bin for "' + cards[selCard].t + '".' : 'Tap a card, then tap the fitness component it builds.');
  text(msg, margin, drawHeight - 28, canvasWidth - margin * 2, 24);
}

function overAny() {
  for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { selCard = r.i; return; }
  if (selCard >= 0) for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) { assign[selCard] = r.i; selCard = -1; return; }
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
