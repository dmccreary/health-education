// Meet the Three Nutrient Teammates - MicroSim (classify-and-reveal)
// CANVAS_HEIGHT: 520
// Grade 3, Understand (L2): tap a food, then tap the bin (Carbohydrates,
// Protein, or Fats) where it belongs; Check reveals each nutrient's job.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

// Nutrient bins.  bin index: 0 = Carbohydrates, 1 = Protein, 2 = Fats
let bins = [
  {
    name: 'Carbohydrates',
    color: 'gold',
    icon: 'bolt',
    job: 'Carbohydrates give your body quick energy for running and playing.'
  },
  {
    name: 'Protein',
    color: 'indianred',
    icon: 'muscle',
    job: 'Protein helps your body build and repair muscles as you grow.'
  },
  {
    name: 'Fats',
    color: 'steelblue',
    icon: 'battery',
    job: 'Fats store long-lasting energy and help keep your body warm.'
  }
];

// Nine foods.  bin = correct nutrient index.  placed = current bin or -1.
let foods = [
  { name: 'Bread',   bin: 0, glyph: 'bread' },
  { name: 'Rice',    bin: 0, glyph: 'rice' },
  { name: 'Apple',   bin: 0, glyph: 'apple' },
  { name: 'Beans',   bin: 1, glyph: 'beans' },
  { name: 'Egg',     bin: 1, glyph: 'egg' },
  { name: 'Fish',    bin: 1, glyph: 'fish' },
  { name: 'Nuts',    bin: 2, glyph: 'nuts' },
  { name: 'Avocado', bin: 2, glyph: 'avocado' },
  { name: 'Oil',     bin: 2, glyph: 'oil' }
];

let order = [];        // shuffled display order of food indices in the tray
let selected = -1;     // index into foods[] of the currently selected food
let checked = false;   // has Check My Answers been pressed
let foodRects = [];    // tray hit boxes {x,y,w,h,fi}
let binRects = [];     // bin hit boxes {x,y,w,h,bi}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(checkAnswers);
  checkButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  shuffleOrder();
  positionControls();
  textFont('Arial');
  describe('A sorting game with three nutrient bins (Carbohydrates, Protein, Fats) ' +
    'and a tray of nine foods. Tap a food, then tap the bin where it belongs. ' +
    'Check My Answers shows a checkmark on correct foods and a one-sentence ' +
    'explanation of each nutrient\'s job.', LABEL);
}

function positionControls() {
  checkButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 170, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  // Background regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(21);
  text('Meet the Three Nutrient Teammates', canvasWidth / 2, 8);

  // Instruction line
  textSize(13);
  fill('dimgray');
  if (allPlaced() && checked && allCorrect()) {
    // celebration handled at bottom
    text('Great sorting! See how each nutrient helps you grow.', canvasWidth / 2, 34);
  } else if (selected >= 0) {
    fill('seagreen');
    text('Now tap the bin where ' + foods[selected].name + ' belongs.', canvasWidth / 2, 34);
  } else if (!allPlaced()) {
    text('Tap a food, then tap the bin where it belongs.', canvasWidth / 2, 34);
  } else {
    text('All sorted! Tap Check My Answers below.', canvasWidth / 2, 34);
  }

  drawTray();
  drawBins();
  drawCelebration();

  cursor(overClickable() ? HAND : ARROW);
}

// ---------- Food tray (unplaced foods) ----------
function drawTray() {
  foodRects = [];
  let labelY = 52;
  let rowTop = 68;
  let cols = 3;
  let cw = (canvasWidth - 2 * margin - (cols - 1) * 10) / cols;
  let ch = 38;
  let gap = 8;

  let unplaced = order.filter(fi => foods[fi].placed === undefined || foods[fi].placed < 0);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);
  fill('gray');
  text('Foods to sort', margin, labelY);

  for (let k = 0; k < unplaced.length; k++) {
    let fi = unplaced[k];
    let col = k % cols;
    let row = Math.floor(k / cols);
    let x = margin + col * (cw + 10);
    let y = rowTop + row * (ch + gap);
    foodRects.push({ x: x, y: y, w: cw, h: ch, fi: fi });
    drawFoodChip(fi, x, y, cw, ch, selected === fi);
  }
}

function drawFoodChip(fi, x, y, w, h, isSel) {
  let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });
  strokeWeight(isSel ? 3 : 1.5);
  stroke(isSel ? 'seagreen' : 'darkgray');
  fill(isSel ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
  rect(x, y, w, h, 8);
  // icon on the left
  drawGlyph(foods[fi].glyph, x + 20, y + h / 2, 26);
  // label
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(14);
  text(foods[fi].name, x + 38, y + h / 2);
}

// ---------- Bins ----------
function drawBins() {
  binRects = [];
  let binsTop = 210;
  let binH = drawHeight - binsTop - 30;
  let gap = 10;
  let bw = (canvasWidth - 2 * margin - 2 * gap) / 3;

  for (let bi = 0; bi < 3; bi++) {
    let x = margin + bi * (bw + gap);
    let y = binsTop;
    binRects.push({ x: x, y: y, w: bw, h: binH, bi: bi });
    let b = bins[bi];

    // bin body
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: bw, h: binH });
    let armed = selected >= 0;
    strokeWeight(armed && hover ? 4 : 2);
    stroke(b.color);
    fill(armed && hover ? lerpColor(color(b.color), color('white'), 0.7) : 'white');
    rect(x, y, bw, binH, 10);

    // header band
    noStroke();
    fill(b.color);
    rect(x, y, bw, 44, 10, 10, 0, 0);
    // icon + name in header (single word: center on band midline, no wrap box)
    drawBinIcon(b.icon, x + 18, y + 22, 22);
    fill(labelColor(b.color));
    textAlign(LEFT, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(b.name, x + 34, y + 21);
    textStyle(NORMAL);

    // placed foods (list inside bin)
    let placedHere = foods
      .map((f, idx) => ({ f: f, idx: idx }))
      .filter(o => o.f.placed === bi);
    let listY = y + 52;
    textAlign(LEFT, CENTER);
    textSize(12);
    for (let j = 0; j < placedHere.length; j++) {
      let idx = placedHere[j].idx;
      let f = placedHere[j].f;
      let ry = listY + j * 20;
      // small glyph
      drawGlyph(f.glyph, x + 12, ry, 15);
      noStroke();
      let correct = f.bin === bi;
      if (checked) {
        fill(correct ? 'seagreen' : 'indianred');
        text((correct ? '✓ ' : '✗ ') + f.name, x + 22, ry);
      } else {
        fill('black');
        text(f.name, x + 22, ry);
      }
    }

  }

  // Job explanations under each bin row: draw a shared strip beneath bins
  if (checked) {
    drawJobStrip(binsTop, binH, bw, gap);
  }
}

function drawJobStrip(binsTop, binH, bw, gap) {
  // Explanations appear as small boxes stacked under the bins area is tight,
  // so we render them as a compact wrapped line beneath each bin header,
  // inside the lower part of each bin.
  for (let bi = 0; bi < 3; bi++) {
    let x = margin + bi * (bw + gap);
    let b = bins[bi];
    // find how many foods are listed so we don't overlap them
    let count = foods.filter(f => f.placed === bi).length;
    let jobTop = binsTop + 52 + count * 20 + 6;
    let jobBottom = binsTop + binH - 6;
    if (jobBottom - jobTop < 30) {
      jobTop = binsTop + binH - 66; // ensure room
    }
    noStroke();
    fill(lerpColor(color(b.color), color('white'), 0.82));
    rect(x + 4, jobTop, bw - 8, jobBottom - jobTop, 6);
    fill('black');
    textAlign(LEFT, TOP);
    textSize(10.5);
    text(b.job, x + 8, jobTop + 4, bw - 16, jobBottom - jobTop - 6);
  }
}

// ---------- Celebration ----------
function drawCelebration() {
  if (allPlaced() && checked && allCorrect()) {
    noStroke();
    fill('seagreen');
    textAlign(CENTER, TOP);
    textSize(17);
    textStyle(BOLD);
    text('★ Nutrient Expert! ★', canvasWidth / 2, drawHeight - 24);
    textStyle(NORMAL);
  }
}

// ---------- Simple flat glyphs (food icons) ----------
function drawGlyph(kind, cx, cy, s) {
  push();
  translate(cx, cy);
  strokeWeight(1.2);
  let r = s / 2;
  if (kind === 'bread') {
    stroke('peru'); fill('burlywood');
    ellipse(0, 2, s, s * 0.72);
    noStroke(); fill('peru'); ellipse(0, -1, s * 0.9, s * 0.4);
  } else if (kind === 'rice') {
    stroke('silver'); fill('white');
    arc(0, r * 0.4, s, s, PI, TWO_PI);
    noStroke(); fill('whitesmoke');
    ellipse(-3, -1, 3, 6); ellipse(3, -1, 3, 6); ellipse(0, -4, 3, 6);
  } else if (kind === 'apple') {
    noStroke(); fill('crimson');
    ellipse(0, 2, s * 0.9, s * 0.95);
    stroke('saddlebrown'); strokeWeight(1.5); line(0, -r, 0, -r + 4);
    noStroke(); fill('seagreen'); ellipse(3, -r + 3, 5, 3);
  } else if (kind === 'beans') {
    noStroke(); fill('sienna');
    ellipse(-3, 1, s * 0.5, s * 0.4);
    ellipse(4, 3, s * 0.5, s * 0.4);
    ellipse(1, -3, s * 0.5, s * 0.4);
  } else if (kind === 'egg') {
    noStroke(); fill('white'); stroke('gainsboro'); strokeWeight(1);
    ellipse(0, 0, s * 0.85, s);
    noStroke(); fill('gold'); ellipse(0, 1, s * 0.4, s * 0.4);
  } else if (kind === 'fish') {
    noStroke(); fill('steelblue');
    ellipse(-2, 0, s, s * 0.6);
    triangle(r - 3, 0, r + 3, -5, r + 3, 5);
    fill('white'); ellipse(-r + 5, -1, 3, 3);
  } else if (kind === 'nuts') {
    noStroke(); fill('peru');
    ellipse(-3, 1, s * 0.5, s * 0.55);
    fill('chocolate'); ellipse(4, 2, s * 0.5, s * 0.55);
  } else if (kind === 'avocado') {
    noStroke(); fill('darkolivegreen');
    ellipse(0, 1, s * 0.75, s);
    fill('yellowgreen'); ellipse(0, 1, s * 0.5, s * 0.72);
    fill('saddlebrown'); ellipse(0, 3, s * 0.32, s * 0.36);
  } else if (kind === 'oil') {
    noStroke(); fill('gold');
    rect(-s * 0.2, -r + 2, s * 0.4, s - 4, 2);
    fill('goldenrod'); rect(-s * 0.12, -r, s * 0.24, 4, 1);
  }
  pop();
}

// Bin header icons: bolt (quick energy), muscle (repair), battery (storage)
function drawBinIcon(kind, cx, cy, s) {
  push();
  translate(cx, cy);
  noStroke();
  if (kind === 'bolt') {
    fill('white');
    beginShape();
    vertex(-2, -s / 2);
    vertex(-6, 2);
    vertex(-1, 2);
    vertex(-3, s / 2);
    vertex(6, -3);
    vertex(0, -3);
    endShape(CLOSE);
  } else if (kind === 'muscle') {
    fill('white');
    // simple flexed-arm blob
    ellipse(0, 2, s * 0.9, s * 0.7);
    ellipse(-2, -3, s * 0.5, s * 0.5);
    fill('indianred');
    ellipse(-2, -3, s * 0.22, s * 0.22);
  } else if (kind === 'battery') {
    fill('white');
    rect(-s / 2, -s * 0.35, s * 0.85, s * 0.7, 2);
    rect(s * 0.35, -s * 0.15, s * 0.15, s * 0.3, 1);
    fill('limegreen');
    rect(-s / 2 + 2, -s * 0.35 + 2, s * 0.55, s * 0.7 - 4, 1);
  }
  pop();
}

// Choose a readable label color for a header band
function labelColor(bg) {
  if (bg === 'gold') return 'black';
  return 'white';
}

// ---------- Interaction ----------
function overClickable() {
  for (let r of foodRects) if (pointInRect(mouseX, mouseY, r)) return true;
  if (selected >= 0) {
    for (let b of binRects) if (pointInRect(mouseX, mouseY, b)) return true;
  }
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // First, check tray foods (select / toggle)
  for (let r of foodRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selected = (selected === r.fi) ? -1 : r.fi;
      return;
    }
  }
  // If a food is selected, a bin tap places it
  if (selected >= 0) {
    for (let b of binRects) {
      if (pointInRect(mouseX, mouseY, b)) {
        foods[selected].placed = b.bi;
        selected = -1;
        checked = false; // any new placement clears the checked state
        return;
      }
    }
  }
}

function checkAnswers() {
  if (allPlaced()) {
    checked = true;
    selected = -1;
  }
}

function resetAll() {
  for (let f of foods) f.placed = -1;
  selected = -1;
  checked = false;
  shuffleOrder();
}

function shuffleOrder() {
  order = foods.map((f, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  for (let f of foods) if (f.placed === undefined) f.placed = -1;
}

function allPlaced() {
  return foods.every(f => f.placed !== undefined && f.placed >= 0);
}

function allCorrect() {
  return foods.every(f => f.placed === f.bin);
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
