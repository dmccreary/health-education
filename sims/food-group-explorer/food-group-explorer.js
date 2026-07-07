// Food Group Explorer - MicroSim (place a food in the right plate section)
// CANVAS_HEIGHT: 462
// Grade 1, Understand (L2): students explain which food group a food belongs to and
// summarize what job that group does in the body.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 410;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

let groups = [
  { name: 'Fruits', color: 'crimson', job: 'Fruits give vitamins and natural sweetness.' },
  { name: 'Vegetables', color: 'seagreen', job: 'Vegetables help your body stay healthy.' },
  { name: 'Grains', color: 'tan', job: 'Grains give you energy to run and play.' },
  { name: 'Protein', color: 'mediumpurple', job: 'Protein builds strong muscles.' },
  { name: 'Dairy', color: 'lightblue', job: 'Dairy builds strong bones and teeth.' }
];
let foods = [
  { n: 'Apple', g: 0 }, { n: 'Banana', g: 0 }, { n: 'Strawberry', g: 0 },
  { n: 'Carrot', g: 1 }, { n: 'Broccoli', g: 1 }, { n: 'Spinach', g: 1 },
  { n: 'Bread', g: 2 }, { n: 'Rice', g: 2 }, { n: 'Oatmeal', g: 2 },
  { n: 'Beans', g: 3 }, { n: 'Egg', g: 3 }, { n: 'Chicken', g: 3 },
  { n: 'Milk', g: 4 }, { n: 'Cheese', g: 4 }, { n: 'Yogurt', g: 4 }
];

let order = [];
let idx = 0;
let picked = -1;   // plate section picked
let score = 0, tries = 0;
let wedgeScreen = [];

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
  describe('A plate divided into five colored food-group sections and a stack of food ' +
    'cards. For each food, students tap the plate section it belongs to and learn the job ' +
    'that group does.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(130, drawHeight + 12);
}

function reset() {
  order = [...Array(foods.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  idx = 0; picked = -1; score = 0; tries = 0;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Food Group Explorer', canvasWidth / 2, 8);

  // plate (left) — 5 wedges
  let cx = canvasWidth * 0.3, cy = 190, r = 110;
  wedgeScreen = [];
  for (let i = 0; i < 5; i++) {
    let a0 = -HALF_PI + i * TWO_PI / 5;
    let a1 = -HALF_PI + (i + 1) * TWO_PI / 5;
    let food = foods[order[idx]];
    let correct = picked >= 0 && food.g === i;
    strokeWeight(picked === i ? 3 : 1); stroke('white');
    fill(correct ? 'palegreen' : lerpColor(color(groups[i].color), color('white'), 0.55));
    arc(cx, cy, r * 2, r * 2, a0, a1, PIE);
    // label
    let mid = (a0 + a1) / 2;
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11);
    text(groups[i].name, cx + cos(mid) * r * 0.6, cy + sin(mid) * r * 0.6);
    wedgeScreen.push({ a0: a0, a1: a1, cx: cx, cy: cy, r: r, i: i });
  }
  cursor(overPlate() ? HAND : ARROW);

  // food card (right)
  let food = foods[order[idx]];
  let fx = canvasWidth * 0.62, fw = canvasWidth - fx - margin;
  fill('white'); stroke('cadetblue'); strokeWeight(2); rect(fx, 60, fw, 80, 10);
  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(11); text('Where does this go?', fx, 66, fw, 16);
  fill('black'); textSize(18); text(food.n, fx, 96, fw, 30);

  // feedback
  let fy = 160;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) { fill('dimgray'); text('Tap the plate section for this food.', fx, fy, fw, 60); }
  else {
    let correct = picked === food.g;
    fill(correct ? 'seagreen' : 'darkorange');
    text((correct ? '✓ Yes! ' : 'It goes in ' + groups[food.g].name + '. ') + groups[food.g].job, fx, fy, fw, 130);
  }
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Score: ' + score + ' / ' + tries, fx, drawHeight - 14);
}

function overPlate() { return dist(mouseX, mouseY, canvasWidth * 0.3, 190) < 110; }

function mousePressed() {
  if (picked >= 0) return;
  let cx = canvasWidth * 0.3, cy = 190, r = 110;
  if (dist(mouseX, mouseY, cx, cy) < r) {
    let a = atan2(mouseY - cy, mouseX - cx);
    // normalize to match wedge scheme starting at -HALF_PI
    let rel = (a + HALF_PI + TWO_PI) % TWO_PI;
    let seg = Math.floor(rel / (TWO_PI / 5)) % 5;
    picked = seg; tries++;
    if (seg === foods[order[idx]].g) score++;
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
