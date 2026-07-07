// Need It or Want It? - MicroSim (drag each item into the Need or Want bin)
// CANVAS_HEIGHT: 502
// Kindergarten, Remember (L1): children identify needs vs. wants by dragging one
// illustrated item at a time into the "I Need This" or "I Want This" bin (read-aloud).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Fixed, teacher-predictable order: 3 needs and 3 wants interleaved, water first.
let items = [
  { name: 'A glass of water', kind: 'need', icon: 'water',
    ok: 'Yes! Your body needs water every day.' },
  { name: 'A favorite toy', kind: 'want', icon: 'toy',
    ok: 'Yes! A toy is fun, but it is a want.' },
  { name: 'Sleep in a cozy bed', kind: 'need', icon: 'bed',
    ok: 'Yes! Your body needs sleep to feel good.' },
  { name: 'A sweet dessert', kind: 'want', icon: 'dessert',
    ok: 'Yes! A treat is a want, not a need.' },
  { name: 'A safety helmet', kind: 'need', icon: 'helmet',
    ok: 'Yes! A helmet keeps you safe. That is a need.' },
  { name: 'A video game', kind: 'want', icon: 'game',
    ok: 'Yes! A game is fun to want, but not a need.' }
];

let idx = 0;
let placed = [];        // true once the current item lands in the RIGHT bin
let dragging = false;
let dragPos = null;     // {x,y} center of card while dragging
let cardHome = {};      // resting rect of the item card
let needBin = {};
let wantBin = {};
let message = '';
let messageColor = 'dimgray';
let landed = false;     // current item correctly placed (locks dragging)

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Item');
  nextButton.mousePressed(nextItem);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  for (let i = 0; i < items.length; i++) placed.push(false);

  describe('One picture card at a time shows something a child might need or want. ' +
    'Two bins sit below: "I Need This" with a heart and "I Want This" with a star. ' +
    'Drag the card into the matching bin. A correct drop locks in with a happy message.',
    LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 11);
  resetButton.position(140, drawHeight + 11);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Need It or Want It?', canvasWidth / 2, 8);

  // progress + score line
  let correct = placed.filter(p => p).length;
  textSize(15);
  fill('dimgray');
  text('Item ' + (idx + 1) + ' of ' + items.length + '     Correct: ' + correct + ' / ' + items.length,
    canvasWidth / 2, 38);

  // bins layout
  let binTop = 250;
  let binH = 130;
  let binW = (canvasWidth - margin * 3) / 2;
  needBin = { x: margin, y: binTop, w: binW, h: binH };
  wantBin = { x: margin * 2 + binW, y: binTop, w: binW, h: binH };

  drawBin(needBin, 'I Need This', 'need', 'lightsteelblue', 'steelblue');
  drawBin(wantBin, 'I Want This', 'want', 'lightyellow', 'goldenrod');

  // item card home position (centered in upper area)
  let cardW = 150, cardH = 150;
  cardHome = { x: (canvasWidth - cardW) / 2, y: 64, w: cardW, h: cardH };

  // draw the current card (at drag position if dragging, else home)
  let cx, cy;
  if (dragging && dragPos) {
    cx = dragPos.x; cy = dragPos.y;
  } else if (landed) {
    // rest inside the correct bin
    let bin = items[idx].kind === 'need' ? needBin : wantBin;
    cx = bin.x + bin.w / 2;
    cy = bin.y + binH - cardH / 2 - 6;
  } else {
    cx = cardHome.x + cardW / 2;
    cy = cardHome.y + cardH / 2;
  }
  drawItemCard(cx, cy, cardW, cardH, items[idx]);

  // feedback line
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  fill(messageColor);
  let m = message || 'Drag the picture into the right bin.';
  text(m, margin, 392, canvasWidth - margin * 2, 50);

  cursor((!landed && overCard()) || dragging ? HAND : ARROW);
}

function drawBin(bin, label, kind, fillCol, strokeCol) {
  let over = dragging && dragPos && pointInRect(dragPos.x, dragPos.y, bin);
  strokeWeight(over ? 5 : 3);
  stroke(over ? 'seagreen' : strokeCol);
  fill(over ? 'honeydew' : fillCol);
  rect(bin.x, bin.y, bin.w, bin.h, 14);

  // icon (heart for need, star for want)
  let ix = bin.x + bin.w / 2;
  let iy = bin.y + 34;
  if (kind === 'need') drawHeart(ix, iy, 30, 'crimson');
  else drawStar(ix, iy, 20, 'gold', 'darkgoldenrod');

  // label
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text(label, bin.x + 4, bin.y + 58, bin.w - 8, 40);
}

function drawItemCard(cx, cy, w, h, item) {
  let x = cx - w / 2, y = cy - h / 2;
  // card
  strokeWeight(dragging ? 4 : 2);
  stroke(dragging ? 'seagreen' : 'slateblue');
  fill('white');
  rect(x, y, w, h, 16);

  // illustration in the upper part
  drawIcon(item.icon, cx, y + 52, 66);

  // name label (wrapped, centered in lower band of card)
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(17);
  text(item.name, x + 8, y + h - 56, w - 16, 50);
}

// ---- simple named-color illustrations (no hex, no products/harm) ----
function drawIcon(type, cx, cy, s) {
  push();
  translate(cx, cy);
  strokeWeight(3);
  if (type === 'water') {
    // clear glass with blue water
    stroke('lightslategray'); fill('aliceblue');
    beginShape();
    vertex(-s * 0.32, -s * 0.5); vertex(s * 0.32, -s * 0.5);
    vertex(s * 0.24, s * 0.5); vertex(-s * 0.24, s * 0.5);
    endShape(CLOSE);
    noStroke(); fill('deepskyblue');
    beginShape();
    vertex(-s * 0.29, -s * 0.18); vertex(s * 0.29, -s * 0.18);
    vertex(s * 0.24, s * 0.46); vertex(-s * 0.24, s * 0.46);
    endShape(CLOSE);
  } else if (type === 'toy') {
    // teddy bear head
    stroke('saddlebrown'); fill('peru');
    circle(-s * 0.34, -s * 0.34, s * 0.5);
    circle(s * 0.34, -s * 0.34, s * 0.5);
    circle(0, 0, s * 0.95);
    noStroke(); fill('black');
    circle(-s * 0.2, -s * 0.08, s * 0.12);
    circle(s * 0.2, -s * 0.08, s * 0.12);
    fill('saddlebrown'); circle(0, s * 0.18, s * 0.16);
  } else if (type === 'bed') {
    // pillow + moon
    noStroke(); fill('gold');
    arc(s * 0.34, -s * 0.36, s * 0.5, s * 0.5, HALF_PI * 0.4, HALF_PI * 3.2);
    stroke('cornflowerblue'); fill('lavender');
    rect(-s * 0.55, -s * 0.02, s * 1.0, s * 0.5, 10);
    noStroke(); fill('slateblue'); textAlign(CENTER, CENTER); textSize(s * 0.34);
    text('Z', -s * 0.1, -s * 0.28);
  } else if (type === 'dessert') {
    // cupcake
    stroke('sienna'); fill('burlywood');
    beginShape();
    vertex(-s * 0.4, 0); vertex(s * 0.4, 0);
    vertex(s * 0.28, s * 0.5); vertex(-s * 0.28, s * 0.5);
    endShape(CLOSE);
    noStroke(); fill('pink');
    arc(0, 0, s * 0.95, s * 0.9, PI, TWO_PI);
    fill('crimson'); circle(0, -s * 0.36, s * 0.18);
  } else if (type === 'helmet') {
    // bike helmet
    stroke('firebrick'); fill('tomato');
    arc(0, s * 0.08, s * 1.0, s * 0.9, PI, TWO_PI);
    rect(-s * 0.5, s * 0.06, s * 1.0, s * 0.14, 4);
    noStroke(); fill('white');
    arc(0, s * 0.08, s * 0.5, s * 0.5, PI, TWO_PI);
  } else if (type === 'game') {
    // game controller
    stroke('dimgray'); fill('slategray');
    rect(-s * 0.5, -s * 0.22, s * 1.0, s * 0.5, s * 0.24);
    noStroke(); fill('gold');
    rect(-s * 0.3, -s * 0.05, s * 0.06, s * 0.24);
    rect(-s * 0.42, s * 0.07, s * 0.3, s * 0.06);
    fill('crimson'); circle(s * 0.3, -s * 0.02, s * 0.14);
    fill('mediumseagreen'); circle(s * 0.42, s * 0.1, s * 0.14);
  }
  pop();
}

function drawHeart(cx, cy, s, col) {
  push();
  translate(cx, cy);
  noStroke();
  fill(col);
  beginShape();
  vertex(0, s * 0.35);
  bezierVertex(-s * 0.6, -s * 0.25, -s * 0.5, -s * 0.75, 0, -s * 0.3);
  bezierVertex(s * 0.5, -s * 0.75, s * 0.6, -s * 0.25, 0, s * 0.35);
  endShape(CLOSE);
  pop();
}

function drawStar(cx, cy, r, fillCol, strokeCol) {
  push();
  translate(cx, cy);
  stroke(strokeCol);
  strokeWeight(2);
  fill(fillCol);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let ang = -HALF_PI + i * PI / 5;
    let rad = i % 2 === 0 ? r : r * 0.45;
    vertex(cos(ang) * rad, sin(ang) * rad);
  }
  endShape(CLOSE);
  pop();
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function overCard() {
  // treat the card home rect as the grab region when not yet landed
  return pointInRect(mouseX, mouseY, cardHome);
}

function mousePressed() {
  if (landed) return;                 // already placed correctly
  if (overCard()) {
    dragging = true;
    dragPos = { x: mouseX, y: mouseY };
  }
}

function mouseDragged() {
  if (dragging) dragPos = { x: mouseX, y: mouseY };
}

function mouseReleased() {
  if (!dragging) return;
  let item = items[idx];
  let inNeed = dragPos && pointInRect(dragPos.x, dragPos.y, needBin);
  let inWant = dragPos && pointInRect(dragPos.x, dragPos.y, wantBin);

  if (inNeed || inWant) {
    let choseNeed = inNeed && !inWant ? true : (inWant ? false : (item.kind === 'need'));
    let correct = (choseNeed && item.kind === 'need') || (!choseNeed && item.kind === 'want');
    if (correct) {
      landed = true;
      placed[idx] = true;
      message = item.ok;
      messageColor = 'seagreen';
      if (placed.every(p => p)) {
        message = 'You know the difference between things your body needs and things you just want!';
      }
    } else {
      // gently slides back home
      message = item.kind === 'need'
        ? 'Your body really needs this. Try the Need bin!'
        : 'This is fun to have, but it is a want. Try the Want bin!';
      messageColor = 'darkorange';
    }
  }
  dragging = false;
  dragPos = null;
}

function nextItem() {
  idx = (idx + 1) % items.length;
  landed = placed[idx];
  message = '';
  messageColor = 'dimgray';
}

function resetAll() {
  idx = 0;
  for (let i = 0; i < placed.length; i++) placed[i] = false;
  landed = false;
  dragging = false;
  dragPos = null;
  message = '';
  messageColor = 'dimgray';
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
