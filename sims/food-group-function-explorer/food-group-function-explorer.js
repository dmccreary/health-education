// What Each Food Group Does - MicroSim (click a group to see its job)
// CANVAS_HEIGHT: 452
// Grade 2, Understand (L2): students explain what each food group does for the body by
// clicking a food-group icon and seeing its job and example foods.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let mealButton;
let resetButton;

let groups = [
  { name: 'Grains', color: 'tan', job: 'give you energy to run and play.', ex: 'bread, rice, oats' },
  { name: 'Vegetables', color: 'seagreen', job: 'help your body stay healthy and strong.', ex: 'carrots, broccoli, spinach' },
  { name: 'Fruits', color: 'crimson', job: 'give vitamins and natural sweetness.', ex: 'apples, bananas, berries' },
  { name: 'Protein', color: 'mediumpurple', job: 'builds strong muscles.', ex: 'beans, eggs, chicken' },
  { name: 'Dairy', color: 'lightblue', job: 'builds strong bones and teeth.', ex: 'milk, cheese, yogurt' }
];

let selected = -1;
let showMeal = false;
let iconRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  mealButton = createButton('Show Me a Meal');
  mealButton.mousePressed(() => { showMeal = !showMeal; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showMeal = false; });
  positionControls();
  describe('Five food-group icons — grains, vegetables, fruits, protein, and dairy — with ' +
    'a child character. Clicking a group shows its job and example foods; Show Me a Meal ' +
    'displays a plate with one food from each group.', LABEL);
}

function positionControls() {
  mealButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('What Each Food Group Does', canvasWidth / 2, 8);

  if (showMeal) { drawMeal(); }
  else {
    // 5 group icons in a row
    iconRects = [];
    let n = 5, gap = 8;
    let iw = (canvasWidth - margin * 2 - gap * (n - 1)) / n, ih = 70, y0 = 46;
    for (let i = 0; i < n; i++) {
      let x = margin + i * (iw + gap);
      iconRects.push({ x: x, y: y0, w: iw, h: ih, i: i });
      let sel = selected === i;
      let hover = pointInRect(mouseX, mouseY, { x: x, y: y0, w: iw, h: ih });
      strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : groups[i].color);
      fill(sel || hover ? lerpColor(color(groups[i].color), color('white'), 0.5) : 'white');
      rect(x, y0, iw, ih, 8);
      noStroke(); fill(groups[i].color); circle(x + iw / 2, y0 + 26, 26);
      fill('black'); textAlign(CENTER, TOP); textSize(10); text(groups[i].name, x + 2, y0 + ih - 18, iw - 4, 16);
    }
    cursor(overAny() ? HAND : ARROW);

    // character
    drawChild(canvasWidth / 2, 190, selected);

    // infobox
    let py = 250, ph = drawHeight - py - 10;
    fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
    noStroke(); textAlign(LEFT, TOP); textSize(14);
    if (selected < 0) { fill('dimgray'); text('Tap a food group to learn its job for your body.', margin + 12, py + 12, canvasWidth - margin * 2 - 24, 40); }
    else {
      fill(groups[selected].color); text(groups[selected].name, margin + 12, py + 10);
      fill('black'); textSize(13);
      text(groups[selected].name + ' ' + groups[selected].job + '  Examples: ' + groups[selected].ex + '.', margin + 12, py + 30, canvasWidth - margin * 2 - 24, 50);
    }
  }
}

function drawChild(x, y, sel) {
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(x, y - 20, 40);
  noStroke(); fill('sienna'); circle(x - 8, y - 24, 5); circle(x + 8, y - 24, 5);
  noFill(); stroke('sienna'); strokeWeight(2); arc(x, y - 16, 18, 12, 0.1 * PI, 0.9 * PI);
  stroke('mediumpurple'); strokeWeight(3); fill('plum'); rect(x - 16, y - 2, 32, 40, 10);
  // reaction: flex arm if protein selected, jump if grains, etc. keep simple: raised arms if any selected
  if (sel >= 0) { stroke('mediumpurple'); strokeWeight(3); line(x - 16, y + 4, x - 30, y - 8); line(x + 16, y + 4, x + 30, y - 8); }
  noStroke();
}

function drawMeal() {
  let cx = canvasWidth / 2, cy = 200, r = 110;
  stroke('silver'); strokeWeight(3); fill('white'); circle(cx, cy, r * 2);
  let items = ['Rice', 'Broccoli', 'Apple', 'Chicken', 'Milk'];
  for (let i = 0; i < 5; i++) {
    let a = -HALF_PI + i * TWO_PI / 5;
    let fx = cx + cos(a) * r * 0.55, fy = cy + sin(a) * r * 0.55;
    noStroke(); fill(groups[i].color); circle(fx, fy, 40);
    fill('white'); textAlign(CENTER, CENTER); textSize(11); text(items[i], fx - 18, fy, 36, 30);
  }
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(13);
  text('A balanced meal has one food from each group!', margin, drawHeight - 40, canvasWidth - margin * 2, 30);
}

function overAny() { for (let r of iconRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (showMeal) return;
  for (let r of iconRects) if (pointInRect(mouseX, mouseY, r)) { selected = r.i; return; }
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
