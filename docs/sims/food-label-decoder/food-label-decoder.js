// Food Label Decoder - MicroSim (click Nutrition Facts regions; compare products)
// CANVAS_HEIGHT: 500
// Grades 9-12, Analyze (L4): students click each region of a Nutrition Facts label to
// learn what it means, then compare products.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 445;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let productSelect;
let compareButton;

// product: name, serving, calories, addedSugar(g), sodium(mg)
let products = [
  { n: 'Flavored yogurt', serving: '1 cup (170g)', cal: 150, sugar: 17, sodium: 95 },
  { n: 'Cereal', serving: '1 cup (40g)', cal: 160, sugar: 12, sodium: 200 },
  { n: 'Granola bar', serving: '1 bar (35g)', cal: 140, sugar: 9, sodium: 90 },
  { n: 'Soda', serving: '1 can (355mL)', cal: 150, sugar: 39, sodium: 45 },
  { n: 'Sparkling water', serving: '1 can (355mL)', cal: 0, sugar: 0, sodium: 0 },
  { n: 'Trail mix', serving: '1/4 cup (40g)', cal: 200, sugar: 6, sodium: 60 }
];

let rows = [
  { key: 'serving', label: 'Serving Size', e: 'All numbers below are for ONE serving. Check how many servings you actually eat.' },
  { key: 'cal', label: 'Calories', e: 'Calories measure the energy in one serving.' },
  { key: 'dv', label: '% Daily Value', e: '%DV shows how much a nutrient adds to a daily diet: 5% or less is low, 20% or more is high.' },
  { key: 'sugar', label: 'Added Sugars', e: 'Added sugars are put in during processing (different from natural sugars). Aim to limit these.' },
  { key: 'sodium', label: 'Sodium', e: 'Sodium is salt. Too much over time can raise blood pressure.' },
  { key: 'ingredients', label: 'Ingredient List', e: 'Ingredients are listed by weight, most first. Watch for sugars near the top.' }
];

let pIndex = 0;
let selRow = -1;
let compare = false;
let rowRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  productSelect = createSelect();
  productSelect.parent(document.querySelector('main'));
  for (let i = 0; i < products.length; i++) productSelect.option(products[i].n, i);
  productSelect.changed(() => { pIndex = int(productSelect.value()); });
  compareButton = createButton('Compare Products');
  compareButton.mousePressed(() => { compare = !compare; });
  positionControls();
  describe('A Nutrition Facts label with clickable regions — serving size, calories, ' +
    'percent daily value, added sugars, sodium, and ingredients. A dropdown switches ' +
    'products and a compare view lines up key numbers across products.', LABEL);
}

function positionControls() {
  productSelect.position(10, drawHeight + 14);
  productSelect.size(140);
  compareButton.position(170, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Food Label Decoder', canvasWidth / 2, 6);

  if (compare) { drawCompare(); return; }

  let p = products[pIndex];
  // label (left)
  let lx = margin, lw = canvasWidth * 0.46, ly = 32, lh = 300;
  fill('white'); stroke('black'); strokeWeight(2); rect(lx, ly, lw, lh, 2);
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(14); textStyle(BOLD);
  text('Nutrition Facts', lx + 6, ly + 4); textStyle(NORMAL);
  stroke('black'); strokeWeight(1); line(lx, ly + 24, lx + lw, ly + 24);

  rowRects = [];
  let vals = { serving: p.serving, cal: p.cal + ' kcal', dv: 'see %DV', sugar: p.sugar + 'g', sodium: p.sodium + 'mg', ingredients: 'tap to read' };
  let y = ly + 30, rh = 42;
  for (let i = 0; i < rows.length; i++) {
    rowRects.push({ x: lx, y: y, w: lw, h: rh, i: i });
    let sel = selRow === i;
    let hover = pointInRect(mouseX, mouseY, { x: lx, y: y, w: lw, h: rh });
    noStroke(); fill(sel ? 'lightyellow' : (hover ? 'aliceblue' : 'white'));
    rect(lx + 1, y, lw - 2, rh - 2);
    fill('black'); textAlign(LEFT, TOP); textSize(12); textStyle(BOLD); text(rows[i].label, lx + 6, y + 4); textStyle(NORMAL);
    textAlign(RIGHT, TOP); textSize(12); text(vals[rows[i].key], lx + lw - 6, y + 4);
    stroke('gainsboro'); strokeWeight(1); line(lx, y + rh - 1, lx + lw, y + rh - 1);
    y += rh;
  }
  cursor(overAny() ? HAND : ARROW);

  // infobox (right)
  let rx = lx + lw + 10, rw = canvasWidth - rx - margin;
  fill('white'); stroke('silver'); strokeWeight(1); rect(rx, 32, rw, 300, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (selRow < 0) { fill('dimgray'); text('Click a region of the label to learn what it means and how to read it.', rx + 10, 42, rw - 20, 80); }
  else { fill('navy'); text(rows[selRow].label, rx + 10, 42); fill('black'); textSize(13); text(rows[selRow].e, rx + 10, 66, rw - 20, 240); }
}

function drawCompare() {
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
  let x0 = margin, colW = (canvasWidth - margin * 2) / 4;
  let heads = ['Product', 'Cal', 'Added Sugar', 'Sodium'];
  fill('lavender'); rect(x0, 34, canvasWidth - margin * 2, 24);
  fill('navy'); textAlign(LEFT, CENTER); textSize(11);
  for (let c = 0; c < 4; c++) text(heads[c], x0 + c * colW + 4, 46);
  let y = 60;
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    let on = i === pIndex;
    noStroke(); fill(on ? 'honeydew' : 'white'); stroke('gainsboro'); strokeWeight(1);
    rect(x0, y, canvasWidth - margin * 2, 30);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(p.n, x0 + 4, y + 15, colW - 6, 30);
    text(p.cal, x0 + colW + 4, y + 15);
    fill(p.sugar >= 15 ? 'crimson' : 'black'); text(p.sugar + 'g', x0 + 2 * colW + 4, y + 15);
    fill(p.sodium >= 150 ? 'crimson' : 'black'); text(p.sodium + 'mg', x0 + 3 * colW + 4, y + 15);
    y += 34;
  }
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Red flags high added sugar (15g+) or sodium (150mg+). Notice how processed drinks and cereals compare with whole-food snacks.', margin, y + 6, canvasWidth - margin * 2, 60);
}

function overAny() { for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (compare) return;
  for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) { selRow = r.i; return; }
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
