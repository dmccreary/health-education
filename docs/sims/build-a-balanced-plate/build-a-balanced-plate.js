// Build a Balanced Plate - MicroSim (open-ended meal builder)
// CANVAS_HEIGHT: 522
// Grade 4, Create (L6): students design a balanced meal by adding foods from different
// groups to a plate, then check whether it covers each major group.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let clearButton;

// group: veg, fruit, protein, grain, dairy, water, treat
let foods = [
  { n: 'Broccoli', g: 'veg' }, { n: 'Carrots', g: 'veg' }, { n: 'Spinach', g: 'veg' }, { n: 'Avocado', g: 'veg' },
  { n: 'Apple', g: 'fruit' }, { n: 'Banana', g: 'fruit' }, { n: 'Berries', g: 'fruit' },
  { n: 'Chicken', g: 'protein' }, { n: 'Beans', g: 'protein' }, { n: 'Egg', g: 'protein' }, { n: 'Salmon', g: 'protein' }, { n: 'Nuts', g: 'protein' },
  { n: 'Brown rice', g: 'grain' }, { n: 'WW bread', g: 'grain' }, { n: 'Pasta', g: 'grain' }, { n: 'Oats', g: 'grain' },
  { n: 'Milk', g: 'dairy' }, { n: 'Yogurt', g: 'dairy' }, { n: 'Cheese', g: 'dairy' },
  { n: 'Water', g: 'water' }, { n: 'Soda', g: 'treat' }, { n: 'Candy', g: 'treat' }
];
let groupColors = { veg: 'mediumseagreen', fruit: 'orchid', protein: 'indianred', grain: 'goldenrod', dairy: 'lightskyblue', water: 'deepskyblue', treat: 'gray' };

let onPlate = [];   // indices of foods added
let feedback = '';
let feedbackColor = 'dimgray';
let foodRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Plate');
  checkButton.mousePressed(checkPlate);
  clearButton = createButton('Clear Plate');
  clearButton.mousePressed(() => { onPlate = []; feedback = ''; });
  positionControls();
  describe('A plate on the left and a tray of foods on the right. Students tap foods to ' +
    'add them to the plate across food groups, then check whether the plate covers ' +
    'vegetables/fruit, protein, grains, dairy, and water.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 11);
  clearButton.position(140, drawHeight + 11);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Build a Balanced Plate', canvasWidth / 2, 8);

  drawPlate();
  drawTray();
  drawFeedback();
}

function drawPlate() {
  let cx = canvasWidth * 0.26, cy = 150, r = 92;
  stroke('silver'); strokeWeight(3); fill('white');
  circle(cx, cy, r * 2);
  stroke('gainsboro'); strokeWeight(1);
  line(cx, cy - r, cx, cy + r);
  line(cx - r, cy, cx + r, cy);
  noStroke(); fill('lightgray'); textAlign(CENTER, CENTER); textSize(10);
  text('veg/fruit', cx - r * 0.5, cy - r * 0.5);
  text('protein', cx + r * 0.5, cy - r * 0.5);
  text('grains', cx - r * 0.5, cy + r * 0.5);
  text('dairy', cx + r * 0.5, cy + r * 0.5);

  // chosen foods as colored dots around/below plate
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  let listY = cy + r + 16;
  fill('navy'); text('On your plate:', cx - r, listY - 2, r * 2, 16);
  let dx = margin, dy = listY + 16;
  for (let k = 0; k < onPlate.length; k++) {
    let f = foods[onPlate[k]];
    fill(groupColors[f.g]); stroke('gray'); strokeWeight(1);
    let w = textWidth(f.n) + 22;
    if (dx + w > canvasWidth * 0.52) { dx = margin; dy += 22; }
    rect(dx, dy, w, 18, 9);
    noStroke(); fill('white'); circle(dx + 9, dy + 9, 8);
    fill('black'); textAlign(LEFT, CENTER); text(f.n, dx + 18, dy + 9);
    dx += w + 5;
  }
  if (onPlate.length === 0) {
    fill('dimgray'); text('(empty — tap foods to add)', margin, dy + 9);
  }
}

function drawTray() {
  foodRects = [];
  let tx = canvasWidth * 0.54;
  let tw = canvasWidth - tx - margin;
  let cols = 2, gap = 6;
  let cw = (tw - gap) / cols;
  let ch = 26, ty0 = 42;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12);
  text('Food tray (tap to add):', tx, 28);
  textSize(11);
  for (let i = 0; i < foods.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = tx + c * (cw + gap), y = ty0 + r * (ch + 2);
    foodRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let on = onPlate.includes(i);
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: cw, h: ch });
    strokeWeight(on ? 2.5 : 1);
    stroke(on ? groupColors[foods[i].g] : 'gray');
    fill(on ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
    rect(x, y, cw, ch, 5);
    noStroke(); fill(groupColors[foods[i].g]); circle(x + 10, y + ch / 2, 10);
    fill('black'); textAlign(LEFT, CENTER); text(foods[i].n, x + 20, y + ch / 2);
  }
  cursor(overAnyFood() ? HAND : ARROW);
}

function drawFeedback() {
  let fy = 396;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 8, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  fill(feedbackColor);
  text(feedback || 'Design a plate with foods from each group, then Check My Plate.',
    margin + 10, fy + 8, canvasWidth - margin * 2 - 20, 56);
}

function overAnyFood() {
  for (let f of foodRects) if (pointInRect(mouseX, mouseY, f)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let f of foodRects) {
    if (pointInRect(mouseX, mouseY, f)) {
      let k = onPlate.indexOf(f.i);
      if (k >= 0) onPlate.splice(k, 1); else onPlate.push(f.i);
      feedback = '';
      return;
    }
  }
}

function checkPlate() {
  let groups = new Set(onPlate.map(i => foods[i].g));
  let hasVegFruit = groups.has('veg') || groups.has('fruit');
  let notes = [];
  if (hasVegFruit) notes.push('vegetables/fruit ✓'); else notes.push('add a fruit or vegetable');
  if (groups.has('protein')) notes.push('protein ✓'); else notes.push('add a protein');
  if (groups.has('grain')) notes.push('grains ✓'); else notes.push('add a grain');
  if (groups.has('dairy')) notes.push('dairy ✓'); else notes.push('add a dairy');
  if (groups.has('water')) notes.push('water ✓'); else notes.push('add water');
  let complete = hasVegFruit && groups.has('protein') && groups.has('grain') && groups.has('dairy') && groups.has('water');
  let treatNote = groups.has('treat') ? ' Soda and candy are occasional treats, not part of the balanced-plate foundation.' : '';
  if (complete) { feedback = 'Great balanced plate! ' + notes.join(', ') + '.' + treatNote; feedbackColor = 'seagreen'; }
  else { feedback = 'Good start — ' + notes.join(', ') + '.' + treatNote; feedbackColor = 'darkgoldenrod'; }
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
