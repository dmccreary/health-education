// Build-A-Meal Planner - MicroSim (one-per-category meal builder)
// CANVAS_HEIGHT: 505
// Grade 5, Create (L6): students design a nutritious meal by selecting one item from
// each food category plus a drink, then get feedback on balance.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 453;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

let categories = [
  { name: 'Protein', items: ['Egg', 'Beans', 'Chicken', 'Fish', 'Tofu'], color: 'indianred' },
  { name: 'Grain', items: ['WW bread', 'Brown rice', 'Oats', 'Tortilla'], color: 'goldenrod' },
  { name: 'Fruit/Veg', items: ['Apple', 'Carrot', 'Spinach', 'Orange', 'Broccoli'], color: 'mediumseagreen' },
  { name: 'Drink', items: ['Water', 'Milk', 'Soda', 'Juice', 'Sports drink'], color: 'deepskyblue' }
];
// drink classification
let drinkGood = ['Water', 'Milk'];

let sel = [-1, -1, -1, -1];
let feedback = '';
let feedbackColor = 'dimgray';
let itemRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Meal');
  checkButton.mousePressed(checkMeal);
  resetButton = createButton('Reset Plate');
  resetButton.mousePressed(() => { sel = [-1, -1, -1, -1]; feedback = ''; });
  positionControls();
  describe('Four food-category trays — protein, grain, fruit/vegetable, and drink. ' +
    'Students pick one item per category to assemble a plate, then check whether the ' +
    'meal is balanced.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 11);
  resetButton.position(140, drawHeight + 11);
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
  text('Build-A-Meal Planner', canvasWidth / 2, 8);

  // category trays (left)
  itemRects = [];
  let trayX = margin, trayW = canvasWidth * 0.58 - margin;
  let y = 40;
  for (let c = 0; c < categories.length; c++) {
    noStroke(); fill(categories[c].color); textAlign(LEFT, TOP); textSize(13);
    text(categories[c].name, trayX, y);
    y += 18;
    let items = categories[c].items;
    let perRow = 3, gap = 5;
    let iw = (trayW - gap * (perRow - 1)) / perRow;
    let ih = 26;
    for (let i = 0; i < items.length; i++) {
      let col = i % perRow, row = Math.floor(i / perRow);
      let x = trayX + col * (iw + gap);
      let iy = y + row * (ih + 5);
      itemRects.push({ x: x, y: iy, w: iw, h: ih, c: c, i: i });
      let chosen = sel[c] === i;
      let hover = pointInRect(mouseX, mouseY, { x: x, y: iy, w: iw, h: ih });
      strokeWeight(chosen ? 2.5 : 1);
      stroke(chosen ? categories[c].color : 'gray');
      fill(chosen ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
      rect(x, iy, iw, ih, 5);
      noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11);
      text(items[i], x + 2, iy, iw - 4, ih);
    }
    let rows = Math.ceil(items.length / perRow);
    y += rows * (ih + 5) + 8;
  }
  cursor(overAnyItem() ? HAND : ARROW);

  // assembled plate (right)
  let px = canvasWidth * 0.60, cx = px + (canvasWidth - px - margin) / 2, cy = 150, r = 68;
  stroke('silver'); strokeWeight(3); fill('white');
  circle(cx, cy, r * 2);
  noStroke(); textAlign(CENTER, CENTER); textSize(11);
  for (let c = 0; c < 4; c++) {
    let ang = -HALF_PI + c * HALF_PI;
    let fx = cx + cos(ang) * r * 0.5, fy = cy + sin(ang) * r * 0.5;
    if (sel[c] >= 0) {
      fill(categories[c].color); circle(fx, fy, 30);
      fill('white'); text(categories[c].items[sel[c]], fx - 18, fy, 36, 30);
    } else {
      fill('gainsboro'); circle(fx, fy, 28);
    }
  }

  // feedback
  let fy = 320;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(px - 6, fy, canvasWidth - (px - 6) - margin, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill(feedbackColor);
  text(feedback || 'Pick one from each tray, then Check My Meal.',
    px + 4, fy + 8, canvasWidth - px - margin - 8, drawHeight - fy - 24);
}

function overAnyItem() {
  for (let r of itemRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of itemRects) {
    if (pointInRect(mouseX, mouseY, r)) { sel[r.c] = r.i; feedback = ''; return; }
  }
}

function checkMeal() {
  let missing = [];
  for (let c = 0; c < 4; c++) if (sel[c] < 0) missing.push(categories[c].name);
  if (missing.length) {
    feedback = 'Almost! Add a choice for: ' + missing.join(', ') + '.';
    feedbackColor = 'darkgoldenrod';
    return;
  }
  let drink = categories[3].items[sel[3]];
  let goodDrink = drinkGood.includes(drink);
  feedback = 'Nice balanced meal — protein, grain, and fruit/veg are all covered! ';
  feedback += goodDrink ? 'And ' + drink + ' is a great everyday drink.'
    : drink + ' is a sometimes drink — water or milk is a healthier everyday choice.';
  feedbackColor = goodDrink ? 'seagreen' : 'darkgoldenrod';
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
