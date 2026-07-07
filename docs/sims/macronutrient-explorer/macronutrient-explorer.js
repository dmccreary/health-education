// Macronutrient Explorer - MicroSim (macronutrient jobs + classify foods)
// CANVAS_HEIGHT: 472
// Grade 4, Understand (L2): students explain the job of each macronutrient and classify
// example foods under carbohydrates, protein, or fats.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton, resetButton;

let groups = [
  { name: 'Carbohydrates', color: 'goldenrod', job: 'Give your body quick energy to move and think.' },
  { name: 'Protein', color: 'indianred', job: 'Build and repair muscles and body parts.' },
  { name: 'Fats', color: 'mediumpurple', job: 'Store energy and help your body absorb vitamins.' }
];
// g = correct group index
let foods = [
  { n: 'Bread', g: 0 }, { n: 'Rice', g: 0 }, { n: 'Apple', g: 0 }, { n: 'Pasta', g: 0 },
  { n: 'Chicken', g: 1 }, { n: 'Egg', g: 1 }, { n: 'Beans', g: 1 }, { n: 'Fish', g: 1 },
  { n: 'Avocado', g: 2 }, { n: 'Nuts', g: 2 }, { n: 'Olive oil', g: 2 }, { n: 'Cheese', g: 2 }
];

let assign = new Array(foods.length).fill(-1);
let selHeader = -1, checked = false;
let headerRects = [], foodRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check'); checkButton.mousePressed(() => { checked = true; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { assign = new Array(foods.length).fill(-1); selHeader = -1; checked = false; });
  positionControls();
  describe('Three macronutrient columns — carbohydrates, protein, fats — each with a job, ' +
    'and twelve food cards. Students cycle each food to its group and check.', LABEL);
}
function positionControls() { checkButton.position(10, drawHeight + 12); resetButton.position(80, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(18); text('Macronutrient Explorer', canvasWidth / 2, 6);

  // 3 headers (clickable for info)
  headerRects = [];
  let hw = (canvasWidth - margin * 2 - 8) / 3, hy = 32, hh = 34;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (hw + 4);
    headerRects.push({ x: x, y: hy, w: hw, h: hh, i: i });
    let sel = selHeader === i;
    noStroke(); fill(groups[i].color); rect(x, hy, hw, hh, 5);
    fill('white'); textAlign(CENTER, CENTER); textSize(11); text(groups[i].name + ' (' + assign.filter(a => a === i).length + ')', x + 2, hy + 17, hw - 4, hh);
  }
  // info line
  noStroke(); textAlign(LEFT, TOP); textSize(11);
  if (selHeader >= 0) { fill(groups[selHeader].color); text(groups[selHeader].name + ': ', margin, 72); fill('black'); text(groups[selHeader].job, margin + 90, 72, canvasWidth - margin - 100, 24); }
  else { fill('dimgray'); text('Tap a column header to read its job. Tap a food to cycle its group.', margin, 72, canvasWidth - margin * 2, 20); }

  // food cards (cycle group)
  foodRects = [];
  let cols = 3, gap = 6, cw = (canvasWidth - margin * 2 - gap * 2) / cols, ch = 34, y0 = 100;
  for (let i = 0; i < foods.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (cw + gap), y = y0 + r * (ch + 6);
    foodRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let a = assign[i]; let correct = checked && a === foods[i].g; let wrong = checked && a >= 0 && a !== foods[i].g;
    strokeWeight(1.5); stroke(a >= 0 ? groups[a].color : 'gray');
    if (correct) fill('honeydew'); else if (wrong) fill('mistyrose'); else fill(a >= 0 ? lerpColor(color(groups[a].color), color('white'), 0.75) : 'white');
    rect(x, y, cw, ch, 5);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(12); text(foods[i].n, x, y, cw, ch);
    if (checked) { textAlign(RIGHT, CENTER); textSize(10); fill(correct ? 'seagreen' : 'indianred'); text(correct ? '✓' : '✗', x + cw - 4, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  if (checked) { let n = assign.filter((a, i) => a === foods[i].g).length; noStroke(); fill(n === 12 ? 'seagreen' : 'darkgoldenrod'); textAlign(LEFT, TOP); textSize(12); text('You classified ' + n + ' of 12 correctly!', margin, drawHeight - 24, canvasWidth - margin * 2, 20); }
}
function overAny() { for (let r of headerRects) if (pointInRect(mouseX, mouseY, r)) return true; for (let r of foodRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() {
  if (checked) return;
  for (let r of headerRects) if (pointInRect(mouseX, mouseY, r)) { selHeader = r.i; return; }
  for (let r of foodRects) if (pointInRect(mouseX, mouseY, r)) { assign[r.i] = assign[r.i] >= 2 ? -1 : assign[r.i] + 1; return; }
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
