// Food Group Sorting Game - MicroSim (one food, five bins)
// CANVAS_HEIGHT: 452
// Kindergarten, Remember (L1): students identify which of the five food groups a food
// belongs to by placing it in the correct labeled bin.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 12;

let nextButton;
let resetButton;

let groups = ['Fruits', 'Vegetables', 'Grains', 'Protein', 'Dairy'];
let groupColors = ['crimson', 'seagreen', 'tan', 'mediumpurple', 'lightblue'];
let foods = [
  { n: 'Apple', g: 0 }, { n: 'Banana', g: 0 }, { n: 'Grapes', g: 0 },
  { n: 'Carrot', g: 1 }, { n: 'Broccoli', g: 1 }, { n: 'Corn', g: 1 },
  { n: 'Bread', g: 2 }, { n: 'Rice', g: 2 }, { n: 'Oatmeal', g: 2 },
  { n: 'Egg', g: 3 }, { n: 'Beans', g: 3 }, { n: 'Chicken', g: 3 }, { n: 'Peanut butter', g: 3 },
  { n: 'Milk', g: 4 }, { n: 'Cheese', g: 4 }
];

let order = [];
let idx = 0;
let picked = -1;
let sorted = 0;
let binRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Food');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  reset();
  describe('One food picture at a time and five labeled food-group bins. Children tap the ' +
    'bin the food belongs in and see if it is right.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

function reset() {
  order = [...Array(foods.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  idx = 0; picked = -1; sorted = 0;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(22);
  text('Food Group Sorting', canvasWidth / 2, 8);

  // food card
  let food = foods[order[idx]];
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(canvasWidth / 2 - 90, 44, 180, 74, 12);
  noStroke(); fill(groupColors[food.g]); circle(canvasWidth / 2 - 50, 81, 40);
  fill('black'); textAlign(LEFT, CENTER); textSize(20); text(food.n, canvasWidth / 2 - 22, 81);

  // 5 bins
  binRects = [];
  let n = 5, gap = 6;
  let bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n, by = 140, bh = 150;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    binRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let correctPick = picked === i && i === food.g;
    let wrongPick = picked === i && i !== food.g;
    strokeWeight(correctPick ? 4 : 2); stroke(groupColors[i]);
    fill(correctPick ? 'palegreen' : (wrongPick ? 'mistyrose' : lerpColor(color(groupColors[i]), color('white'), 0.75)));
    rect(x, by, bw, bh, 8);
    noStroke(); fill(groupColors[i]); circle(x + bw / 2, by + 30, 30);
    fill('black'); textAlign(CENTER, TOP); textSize(11); text(groups[i], x + 2, by + 52, bw - 4, 40);
    if (correctPick) { fill('seagreen'); textAlign(CENTER, CENTER); textSize(24); text('✓', x + bw / 2, by + bh - 26); }
  }
  cursor(overAny() ? HAND : ARROW);

  // feedback + score
  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked < 0) { fill('dimgray'); text('Which group is ' + food.n + ' in? Tap a bin.', margin, 300, canvasWidth - margin * 2, 30); }
  else if (picked === food.g) { fill('seagreen'); text(food.n + ' is in the ' + groups[food.g] + ' group!', margin, 300, canvasWidth - margin * 2, 30); }
  else { fill('darkorange'); text('Try again — where does ' + food.n + ' go?', margin, 300, canvasWidth - margin * 2, 30); }
  fill('navy'); textSize(14); text('You sorted ' + sorted + ' foods!', margin, 340, canvasWidth - margin * 2, 24);
}

function overAny() { for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked === foods[order[idx]].g) return;
  for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) {
    picked = r.i;
    if (r.i === foods[order[idx]].g) sorted++;
    return;
  }
}

function next() { idx = (idx + 1) % foods.length; picked = -1; }

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
