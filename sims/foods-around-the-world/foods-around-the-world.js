// Foods Around the World - MicroSim (cultural foods share the same food groups)
// CANVAS_HEIGHT: 490
// Kindergarten, Understand (L2): students recognize that foods from many cultural
// traditions belong to the same five food groups.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let foods = [
  { name: 'Rice', where: 'eaten across Asia', group: 'Grains', color: 'tan' },
  { name: 'Tortilla', where: 'from Mexico', group: 'Grains', color: 'tan' },
  { name: 'Injera', where: 'from Ethiopia', group: 'Grains', color: 'tan' },
  { name: 'Lefse', where: 'from Norway', group: 'Grains', color: 'tan' },
  { name: 'Dumpling', where: 'from China', group: 'Grains + Protein', color: 'mediumpurple' },
  { name: 'Hummus & Pita', where: 'from the Middle East', group: 'Protein + Grains', color: 'mediumpurple' }
];

let selected = -1;
let foodScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; });
  positionControls();
  describe('Six foods from different cultural traditions arranged around a family sharing ' +
    'a meal. Tapping a food shows its name, a culture it comes from, and which food ' +
    'group(s) it belongs to.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('oldlace'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('sienna'); textAlign(CENTER, TOP); textSize(20);
  text('Foods Around the World', canvasWidth / 2, 8);

  // center family
  let cx = canvasWidth / 2, cy = 190, R = 120;
  noStroke(); fill('bisque'); circle(cx, cy, 84);
  fill('saddlebrown'); textAlign(CENTER, CENTER); textSize(11); text('family\nsharing\na meal', cx, cy);

  // foods around circle
  foodScreen = [];
  for (let i = 0; i < 6; i++) {
    let a = -HALF_PI + i * TWO_PI / 6;
    let x = cx + cos(a) * R, y = cy + sin(a) * R;
    foodScreen.push({ x: x, y: y, r: 34 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 36;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'burlywood');
    fill(sel || hover ? foods[i].color : 'seashell');
    circle(x, y, 66);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11); text(foods[i].name, x - 30, y - 8, 60, 30);
  }
  cursor(overAny() ? HAND : ARROW);

  // infobox
  let py = 330, ph = drawHeight - py - 10;
  fill('white'); stroke('burlywood'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) { fill('gray'); text('Tap a food to learn where it comes from and its food group.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else {
    let f = foods[selected];
    fill('sienna'); text(f.name + ' — ' + f.where, margin + 12, py + 10);
    noStroke(); fill('black'); textSize(13);
    text('Food group: ', margin + 12, py + 32);
    fill(f.color); textSize(13); text(f.group, margin + 90, py + 32);
    fill('dimgray'); text('Foods from everywhere fit the same food groups!', margin + 12, py + 52, canvasWidth - margin * 2 - 24, 20);
  }
}

function overAny() { for (let s of foodScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; return false; }

function mousePressed() {
  for (let i = 0; i < foodScreen.length; i++) { let s = foodScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; } }
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
