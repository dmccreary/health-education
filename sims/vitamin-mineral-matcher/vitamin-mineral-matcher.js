// Vitamin and Mineral Matcher - MicroSim (click-to-connect two columns)
// CANVAS_HEIGHT: 520
// Grade 4-6, Remember (L1): students recall and match common vitamins and minerals
// to the body function each one supports. Click a nutrient on the left, then click
// the job on the right to draw a connecting line. "Check Matches" scores the pairs.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton, resetButton;

// Six nutrients with a simple flat icon and the id of their correct job.
let nutrients = [
  { name: 'Vitamin C', icon: 'orange', id: 0 },
  { name: 'Vitamin D', icon: 'sun',    id: 1 },
  { name: 'Vitamin A', icon: 'carrot', id: 2 },
  { name: 'Calcium',   icon: 'milk',   id: 3 },
  { name: 'Iron',      icon: 'drop',   id: 4 },
  { name: 'Fiber',     icon: 'grain',  id: 5 }
];

// Six body-function cards; id matches the nutrient it belongs to.
let functionsMaster = [
  { text: 'Helps heal cuts and fight illness', id: 0 },
  { text: 'Builds strong bones',               id: 1 },
  { text: 'Supports healthy eyes and skin',    id: 2 },
  { text: 'Builds strong bones and teeth',     id: 3 },
  { text: 'Helps blood carry oxygen',          id: 4 },
  { text: 'Helps digestion',                   id: 5 }
];

let funcs = [];         // shuffled display order of the function cards
let match = [];         // match[nutrientIndex] = display index into funcs, or -1
let selectedLeft = -1;  // nutrient currently armed for a connection
let checked = false;

let leftRects = [];
let rightRects = [];

// layout constants recomputed as needed
let cardsTop = 62;
let rowH = 50;
let pitch = 62;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check Matches');
  checkButton.mousePressed(checkMatches);
  checkButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  resetAll();
  positionControls();
  describe('A matching game. On the left are six nutrient cards (Vitamin C, Vitamin D, ' +
    'Vitamin A, Calcium, Iron, Fiber) each with a small icon. On the right are six ' +
    'shuffled body-function cards. Click a nutrient, then click the job you think it ' +
    'does to draw a connecting line. Check Matches shows which pairs are correct.', LABEL);
}

function positionControls() {
  checkButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 150, drawHeight + 10);
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
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Vitamin and Mineral Matcher', canvasWidth / 2, 8);

  // instruction / feedback line
  drawInstruction();

  // column geometry
  let usableW = canvasWidth - 2 * margin;
  let colW = min((usableW - 44) / 2, 230);
  let leftX = margin;
  let rightX = canvasWidth - margin - colW;

  drawConnections(leftX, colW, rightX);
  drawLeftColumn(leftX, colW);
  drawRightColumn(rightX, colW);

  cursor(overClickable() ? HAND : ARROW);
}

function drawInstruction() {
  textAlign(CENTER, TOP);
  textSize(13);
  if (checked) {
    let correct = countCorrect();
    if (correct === 6) {
      fill('seagreen');
      text('You matched all 6 correctly. Nutrient expert!', margin, 36, canvasWidth - 2 * margin, 20);
    } else {
      fill('darkgoldenrod');
      text('You matched ' + correct + ' of 6. Green lines are right — try the red ones again.',
        margin, 36, canvasWidth - 2 * margin, 20);
    }
  } else if (selectedLeft >= 0) {
    fill('seagreen');
    text('Now click the job that ' + nutrients[selectedLeft].name + ' does.',
      margin, 36, canvasWidth - 2 * margin, 20);
  } else {
    fill('dimgray');
    text('Click a nutrient, then click the job it does for your body.',
      margin, 36, canvasWidth - 2 * margin, 20);
  }
}

function drawConnections(leftX, colW, rightX) {
  for (let i = 0; i < nutrients.length; i++) {
    let j = match[i];
    if (j < 0) continue;
    let y1 = cardsTop + i * pitch + rowH / 2;
    let y2 = cardsTop + j * pitch + rowH / 2;
    let x1 = leftX + colW;
    let x2 = rightX;
    let ok = checked && funcs[j].id === nutrients[i].id;
    let bad = checked && funcs[j].id !== nutrients[i].id;
    strokeWeight(3);
    if (ok) stroke('seagreen');
    else if (bad) stroke('indianred');
    else stroke('#7a9cc6');
    line(x1, y1, x2, y2);
    noStroke();
    fill(ok ? 'seagreen' : (bad ? 'indianred' : '#7a9cc6'));
    circle(x1, y1, 8);
    circle(x2, y2, 8);
    if (ok) {
      fill('seagreen');
      textAlign(CENTER, CENTER);
      textSize(15);
      text('✓', (x1 + x2) / 2, (y1 + y2) / 2 - 8);
    }
  }
}

function drawLeftColumn(leftX, colW) {
  leftRects = [];
  for (let i = 0; i < nutrients.length; i++) {
    let y = cardsTop + i * pitch;
    leftRects.push({ x: leftX, y: y, w: colW, h: rowH, i: i });
    let sel = selectedLeft === i;
    let hover = pointInRect(mouseX, mouseY, { x: leftX, y: y, w: colW, h: rowH });
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'darkgoldenrod' : 'mediumseagreen');
    fill(sel ? '#fff6d8' : (hover ? 'honeydew' : 'white'));
    rect(leftX, y, colW, rowH, 10);
    drawNutrientIcon(nutrients[i].icon, leftX + 24, y + rowH / 2, 26);
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(15);
    text(nutrients[i].name, leftX + 44, y + rowH / 2);
  }
}

function drawRightColumn(rightX, colW) {
  rightRects = [];
  for (let j = 0; j < funcs.length; j++) {
    let y = cardsTop + j * pitch;
    rightRects.push({ x: rightX, y: y, w: colW, h: rowH, j: j });
    let connectedTo = -1;
    for (let i = 0; i < match.length; i++) if (match[i] === j) connectedTo = i;
    let ok = checked && connectedTo >= 0 && funcs[j].id === nutrients[connectedTo].id;
    let bad = checked && connectedTo >= 0 && funcs[j].id !== nutrients[connectedTo].id;
    let hover = pointInRect(mouseX, mouseY, { x: rightX, y: y, w: colW, h: rowH });
    strokeWeight(1.5);
    stroke(ok ? 'seagreen' : (bad ? 'indianred' : 'steelblue'));
    fill(ok ? 'honeydew' : (bad ? 'mistyrose' : (hover && selectedLeft >= 0 ? 'lightyellow' : '#eef4fb')));
    rect(rightX, y, colW, rowH, 10);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    text(funcs[j].text, rightX + 8, y, colW - 16, rowH);
  }
}

// ---- interaction ----
function overClickable() {
  for (let r of leftRects) if (pointInRect(mouseX, mouseY, r)) return true;
  if (selectedLeft >= 0) for (let r of rightRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let r of leftRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selectedLeft = (selectedLeft === r.i) ? -1 : r.i;
      checked = false;
      return;
    }
  }
  if (selectedLeft >= 0) {
    for (let r of rightRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        // keep each job used by only one nutrient
        for (let k = 0; k < match.length; k++) if (match[k] === r.j) match[k] = -1;
        match[selectedLeft] = r.j;
        selectedLeft = -1;
        checked = false;
        return;
      }
    }
  }
}

function checkMatches() {
  // only score once every nutrient has a line; otherwise still show partial result
  checked = true;
  selectedLeft = -1;
}

function countCorrect() {
  let n = 0;
  for (let i = 0; i < nutrients.length; i++) {
    if (match[i] >= 0 && funcs[match[i]].id === nutrients[i].id) n++;
  }
  return n;
}

function resetAll() {
  funcs = functionsMaster.map(f => ({ text: f.text, id: f.id }));
  shuffle(funcs, true);
  match = new Array(nutrients.length).fill(-1);
  selectedLeft = -1;
  checked = false;
}

// ---- simple flat nutrient icons ----
function drawNutrientIcon(kind, cx, cy, s) {
  push();
  translate(cx, cy);
  let r = s / 2;
  if (kind === 'orange') {
    noStroke(); fill('orange'); circle(0, 0, s);
    stroke('white'); strokeWeight(1.5);
    for (let a = 0; a < TWO_PI; a += PI / 4) line(0, 0, cos(a) * r * 0.9, sin(a) * r * 0.9);
    noStroke(); fill('white'); circle(0, 0, s * 0.14);
  } else if (kind === 'sun') {
    stroke('goldenrod'); strokeWeight(2);
    for (let a = 0; a < TWO_PI; a += PI / 4) line(cos(a) * r * 0.9, sin(a) * r * 0.9, cos(a) * r * 1.25, sin(a) * r * 1.25);
    noStroke(); fill('gold'); circle(0, 0, s * 0.85);
  } else if (kind === 'carrot') {
    noStroke(); fill('darkorange');
    triangle(-r * 0.4, -r * 0.2, r * 0.4, -r * 0.2, 0, r);
    fill('seagreen');
    triangle(-r * 0.35, -r * 0.2, 0, -r, -r * 0.05, -r * 0.2);
    triangle(r * 0.35, -r * 0.2, r * 0.1, -r, r * 0.05, -r * 0.2);
  } else if (kind === 'milk') {
    stroke('gray'); strokeWeight(1.5); fill('white');
    beginShape();
    vertex(-r * 0.55, -r * 0.7); vertex(r * 0.55, -r * 0.7);
    vertex(r * 0.4, r * 0.8); vertex(-r * 0.4, r * 0.8);
    endShape(CLOSE);
    noStroke(); fill('#dbe9f7');
    rect(-r * 0.45, r * 0.05, r * 0.9, r * 0.7);
  } else if (kind === 'drop') {
    noStroke(); fill('crimson');
    beginShape();
    vertex(0, -r);
    bezierVertex(r * 0.9, r * 0.1, r * 0.5, r, 0, r);
    bezierVertex(-r * 0.5, r, -r * 0.9, r * 0.1, 0, -r);
    endShape(CLOSE);
    fill('white'); ellipse(-r * 0.2, r * 0.25, r * 0.25, r * 0.4);
  } else if (kind === 'grain') {
    stroke('goldenrod'); strokeWeight(2); line(0, r, 0, -r * 0.5);
    noStroke(); fill('goldenrod');
    for (let k = -2; k <= 2; k++) {
      ellipse(-r * 0.28, -r * 0.5 + k * r * 0.28, r * 0.32, r * 0.2);
      ellipse(r * 0.28, -r * 0.5 + k * r * 0.28, r * 0.32, r * 0.2);
    }
  }
  pop();
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
