// Nutrition Label Explorer - MicroSim (click-to-reveal + compare)
// CANVAS_HEIGHT: 422
// Grade 3, Apply (L3): students tap rows of a Nutrition Facts label to learn what each
// part means, then compare the same nutrient across two sample foods.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 362;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let compareCheckbox;
let foodSelect;
let resetButton;
let revealButton;

// Each row: key, label shown on the label, and per-food data {amount, meaning}
let rows = [
  { key: 'serving', name: 'Serving Size' },
  { key: 'carbs',   name: 'Carbohydrates' },
  { key: 'protein', name: 'Protein' },
  { key: 'fat',     name: 'Total Fat' }
];

// Primary food (always shown on the left): granola bar
let primaryFood = {
  name: 'Granola Bar',
  serving: { amt: '1 bar (35g)', meaning: 'One serving is one bar. All the amounts below are for one bar.' },
  carbs:   { amt: '22 grams',    meaning: 'Carbohydrates give your body quick energy to run and play.' },
  protein: { amt: '4 grams',     meaning: 'Protein helps build and repair your muscles.' },
  fat:     { amt: '6 grams',     meaning: 'Fat gives long-lasting energy. A little is good; not too much.' }
};

// Second foods the student can pick to compare
let compareFoods = {
  granolabar: {
    name: 'Granola Bar',
    serving: { amt: '1 bar (35g)', meaning: 'One serving is one bar.' },
    carbs:   { amt: '22 grams',    meaning: 'Carbohydrates give quick energy.' },
    protein: { amt: '4 grams',     meaning: 'Protein helps build muscles.' },
    fat:     { amt: '6 grams',     meaning: 'Fat gives long-lasting energy.' }
  },
  crackers: {
    name: 'Plain Crackers',
    serving: { amt: '5 crackers (30g)', meaning: 'One serving is five crackers.' },
    carbs:   { amt: '20 grams',   meaning: 'Carbohydrates give quick energy.' },
    protein: { amt: '3 grams',    meaning: 'Protein helps build muscles.' },
    fat:     { amt: '4 grams',    meaning: 'Fat gives long-lasting energy.' }
  },
  yogurt: {
    name: 'Yogurt Cup',
    serving: { amt: '1 cup (170g)', meaning: 'One serving is one cup.' },
    carbs:   { amt: '17 grams',   meaning: 'Carbohydrates give quick energy.' },
    protein: { amt: '10 grams',   meaning: 'Protein helps build muscles.' },
    fat:     { amt: '2 grams',    meaning: 'Fat gives long-lasting energy.' }
  }
};

let selectedRow = -1;      // index into rows, -1 = none
let compareMode = false;   // checkbox state
let secondKey = 'crackers';
let showAnswer = false;

// Hit boxes recomputed each draw
let leftRowBoxes = [];
let rightRowBoxes = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  compareCheckbox = createCheckbox(' Compare with a second label', false);
  compareCheckbox.parent(document.querySelector('main'));
  compareCheckbox.changed(() => {
    compareMode = compareCheckbox.checked();
    showAnswer = false;
  });

  foodSelect = createSelect();
  foodSelect.parent(document.querySelector('main'));
  foodSelect.option('Crackers', 'crackers');
  foodSelect.option('Yogurt', 'yogurt');
  foodSelect.option('Granola Bar', 'granolabar');
  foodSelect.selected('crackers');
  foodSelect.changed(() => {
    secondKey = foodSelect.value();
    showAnswer = false;
  });

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(() => {
    selectedRow = -1;
    compareMode = false;
    compareCheckbox.checked(false);
    secondKey = 'crackers';
    foodSelect.selected('crackers');
    showAnswer = false;
  });

  revealButton = createButton('Show Answer');
  revealButton.parent(document.querySelector('main'));
  revealButton.mousePressed(() => { showAnswer = true; });

  positionControls();
  describe('A simplified Nutrition Facts label on the left with tappable rows for serving ' +
    'size, carbohydrates, protein, and fat. Tapping a row explains it in the panel on the ' +
    'right. A checkbox turns on compare mode to show a second food label side by side so ' +
    'students can compare the same nutrient.', LABEL);
}

function positionControls() {
  // Row 1 of controls: checkbox (left) + dropdown (right)
  compareCheckbox.position(margin, drawHeight + 10);
  foodSelect.position(canvasWidth - 150, drawHeight + 8);
  foodSelect.size(120);
  // Row 2: reset + reveal
  resetButton.position(margin, drawHeight + 34);
  revealButton.position(margin + 74, drawHeight + 34);
}

function draw() {
  updateCanvasSize();

  // Backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Nutrition Label Explorer', canvasWidth / 2, 8);

  if (!compareMode) {
    drawSingleView();
  } else {
    drawCompareView();
  }
}

// ---------- Single-label view ----------
function drawSingleView() {
  let labelW = min(280, canvasWidth * 0.52);
  let labelX = margin;
  let labelY = 60;
  leftRowBoxes = drawLabel(primaryFood, labelX, labelY, labelW, selectedRow, true);

  let labH = labelHeight(labelW);

  // Instruction line below the label
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Tap each row to explore.', labelX + labelW / 2, labelY + labH + 12, labelW, 20);

  // Info panel to the right, matched to the label height
  let panelX = labelX + labelW + 14;
  let panelW = canvasWidth - panelX - margin;
  drawInfoPanel(panelX, labelY, panelW, labH);
}

function drawInfoPanel(x, y, w, h) {
  stroke('steelblue');
  strokeWeight(2);
  fill('white');
  rect(x, y, w, h, 8);
  noStroke();

  let pad = 10;
  if (selectedRow < 0) {
    fill('steelblue');
    textAlign(LEFT, TOP);
    textSize(16);
    text('Tap a row on the label to learn what it means.', x + pad, y + pad, w - 2 * pad, h - 2 * pad);
    return;
  }

  let r = rows[selectedRow];
  let d = primaryFood[r.key];

  fill('navy');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(18);
  text(r.name, x + pad, y + pad, w - 2 * pad, 26);
  textStyle(NORMAL);

  fill('seagreen');
  textSize(22);
  text(d.amt, x + pad, y + pad + 30, w - 2 * pad, 30);

  fill('black');
  textSize(15);
  text(d.meaning, x + pad, y + pad + 66, w - 2 * pad, h - pad - 66);
}

// ---------- Compare view ----------
function drawCompareView() {
  let food2 = compareFoods[secondKey];

  let gap = 12;
  let labelW = (canvasWidth - 2 * margin - gap) / 2;
  labelW = min(labelW, 240);
  let totalW = labelW * 2 + gap;
  let startX = (canvasWidth - totalW) / 2;
  let labelY = 40;

  leftRowBoxes = drawLabel(primaryFood, startX, labelY, labelW, selectedRow, true);
  rightRowBoxes = drawLabel(food2, startX + labelW + gap, labelY, labelW, selectedRow, false);

  // Prompt + answer strip along the bottom
  let stripY = labelY + labelHeight(labelW) + 12;
  let stripH = drawHeight - stripY - 10;
  drawComparePrompt(margin, stripY, canvasWidth - 2 * margin, stripH, food2);
}

function drawComparePrompt(x, y, w, h, food2) {
  stroke('goldenrod');
  strokeWeight(2);
  fill('cornsilk');
  rect(x, y, w, h, 8);
  noStroke();

  let pad = 10;
  fill('black');
  textAlign(LEFT, TOP);
  textSize(16);
  text('Which food has more protein? Tap the Protein row on each label to check.',
       x + pad, y + pad, w - 2 * pad, 40);

  if (showAnswer) {
    let p1 = parseGrams(primaryFood.protein.amt);
    let p2 = parseGrams(food2.protein.amt);
    let winner, msg;
    if (p1 === p2) {
      msg = 'They have the same protein: ' + p1 + ' grams each.';
    } else {
      winner = p1 > p2 ? primaryFood.name : food2.name;
      msg = winner + ' has more protein (' + max(p1, p2) + ' grams vs ' + min(p1, p2) + ' grams).';
    }
    fill('seagreen');
    textStyle(BOLD);
    textSize(16);
    text(msg, x + pad, y + pad + 42, w - 2 * pad, h - pad - 42);
    textStyle(NORMAL);
  }
}

// ---------- Shared label drawing ----------
// Draws a simplified Nutrition Facts label. Returns array of hit boxes for its rows.
function drawLabel(food, x, y, w, highlightRow, isPrimary) {
  let boxes = [];
  let headH = 46;
  let rowH = 34;
  let totalH = headH + rows.length * rowH;

  // Outer box
  stroke('black');
  strokeWeight(3);
  fill('white');
  rect(x, y, w, totalH, 4);
  noStroke();

  // Header
  fill('black');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(min(17, w * 0.11));
  text('Nutrition Facts', x + 8, y + 6);
  textStyle(NORMAL);
  textSize(12);
  fill('dimgray');
  text(food.name, x + 8, y + 27, w - 16, 18);

  // Divider under header
  stroke('black');
  strokeWeight(2);
  line(x + 4, y + headH, x + w - 4, y + headH);
  noStroke();

  // Rows
  for (let i = 0; i < rows.length; i++) {
    let ry = y + headH + i * rowH;
    let box = { x: x, y: ry, w: w, h: rowH, i: i };
    boxes.push(box);

    // Highlight selected row
    if (i === highlightRow) {
      noStroke();
      fill('lightyellow');
      rect(x + 2, ry + 1, w - 4, rowH - 2);
      stroke('goldenrod');
      strokeWeight(2);
      noFill();
      rect(x + 2, ry + 1, w - 4, rowH - 2, 3);
      noStroke();
    } else {
      // soft clickable outline
      stroke('gainsboro');
      strokeWeight(1);
      noFill();
      rect(x + 2, ry + 1, w - 4, rowH - 2, 3);
      noStroke();
    }

    // Row divider
    if (i > 0) {
      stroke('gainsboro');
      strokeWeight(1);
      line(x + 4, ry, x + w - 4, ry);
      noStroke();
    }

    // Row name (left) and amount (right)
    fill('black');
    textAlign(LEFT, CENTER);
    textStyle(BOLD);
    textSize(min(14, w * 0.092));
    text(rows[i].name, x + 8, ry + rowH / 2);
    textStyle(NORMAL);

    let d = food[rows[i].key];
    fill('seagreen');
    textAlign(RIGHT, CENTER);
    textSize(min(14, w * 0.092));
    text(d.amt, x + w - 8, ry + rowH / 2);
  }

  return boxes;
}

function labelHeight(w) {
  let headH = 46;
  let rowH = 34;
  return headH + rows.length * rowH;
}

// ---------- Helpers ----------
function parseGrams(s) {
  let m = s.match(/(\d+)/);
  return m ? int(m[1]) : 0;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // Check left label rows
  for (let b of leftRowBoxes) {
    if (pointInRect(mouseX, mouseY, b)) {
      selectedRow = (selectedRow === b.i) ? -1 : b.i;
      return;
    }
  }
  // Check right label rows (compare mode)
  if (compareMode) {
    for (let b of rightRowBoxes) {
      if (pointInRect(mouseX, mouseY, b)) {
        selectedRow = (selectedRow === b.i) ? -1 : b.i;
        return;
      }
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
