// Families Come in Many Shapes - MicroSim (warm gallery of family structures)
// CANVAS_HEIGHT: 490
// Kindergarten, Understand (L2): students recognize that families come in many
// structures and that every structure shown is a healthy, real family.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let families = [
  { label: 'Two Parents', color: 'lightblue', n: 4, desc: 'This family has two parents who take care of the children together.' },
  { label: 'One Parent', color: 'peachpuff', n: 2, desc: 'This family has one parent who takes great care of the children.' },
  { label: 'Grandparent Family', color: 'palegreen', n: 3, desc: 'A grandma or grandpa takes care of the children every day — an important job in this family.' },
  { label: 'Foster Family', color: 'thistle', n: 3, desc: 'A foster family gives a safe and caring home to children who need one.' },
  { label: 'Blended Family', color: 'khaki', n: 5, desc: 'This family joined together, and everyone cares for each other.' },
  { label: 'Two Moms or Dads', color: 'lightpink', n: 4, desc: 'This family has two moms or two dads who love their children.' }
];

let selected = -1;
let tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; });
  positionControls();
  describe('A warm gallery of six family portraits showing different family structures — ' +
    'two parents, one parent, grandparent-led, foster, blended, and two moms or dads. ' +
    'Tapping a portrait shows a warm sentence about that family.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('oldlace'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('sienna'); textAlign(CENTER, TOP); textSize(20);
  text('Families Come in Many Shapes', canvasWidth / 2, 8);

  // 3x2 grid of portraits
  tileRects = [];
  let cols = 3, gap = 10;
  let tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let th = 110, y0 = 40;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap), y = y0 + r * (th + gap);
    tileRects.push({ x: x, y: y, w: tw, h: th, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th });
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'burlywood');
    fill(sel || hover ? families[i].color : 'seashell');
    rect(x, y, tw, th, 10);
    drawFamily(x + tw / 2, y + 40, families[i].n, families[i].color);
    noStroke(); fill('saddlebrown'); textAlign(CENTER, TOP); textSize(10);
    text(families[i].label, x + 3, y + th - 28, tw - 6, 26);
  }
  cursor(overAny() ? HAND : ARROW);

  // caption
  let py = y0 + 2 * (th + gap) + 4;
  fill('white'); stroke('burlywood'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) { fill('gray'); text('Tap a family to learn about it. Every family here is a real, healthy family.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else { fill('black'); text(families[selected].desc, margin + 12, py + 10, canvasWidth - margin * 2 - 24, 44); }
}

function drawFamily(cx, cy, n, col) {
  let spread = 14;
  for (let i = 0; i < n; i++) {
    let x = cx + (i - (n - 1) / 2) * spread;
    let tall = i % 2 === 0;
    stroke('gray'); strokeWeight(1); fill(i % 2 === 0 ? 'lightsteelblue' : 'mistyrose');
    circle(x, cy - (tall ? 8 : 2), tall ? 12 : 9);
    rect(x - 5, cy - (tall ? 2 : 4), 10, tall ? 20 : 14, 3);
  }
  noStroke();
}

function overAny() { for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) { selected = t.i; return; }
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
