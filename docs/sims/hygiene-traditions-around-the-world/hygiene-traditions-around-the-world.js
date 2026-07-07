// Hygiene Traditions Around the World - MicroSim (respectful gallery)
// CANVAS_HEIGHT: 490
// Grade 1, Understand (L2): students describe different community and cultural hygiene
// traditions and explain that different traditions can all support health.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let scenes = [
  { title: 'Shoes off at the door', color: 'lightblue', cap: 'Many families remove shoes at the door to keep dirt and germs outside.' },
  { title: 'Wash before eating', color: 'palegreen', cap: 'In many cultures, people wash hands and face before every meal.' },
  { title: 'Miswak twig for teeth', color: 'wheat', cap: 'Some people clean their teeth with a miswak twig — a natural toothbrush.' },
  { title: 'A warm communal bath', color: 'peachpuff', cap: 'Communal baths, like a sento or hammam, are a clean and social tradition.' },
  { title: 'Wash feet before entering', color: 'thistle', cap: 'Some families wash their feet before entering a home or place of worship.' },
  { title: 'Wash with water', color: 'lightpink', cap: 'Using water to wash is a clean and common personal-care tradition.' }
];

let selected = -1;
let tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { selected = -1; });
  positionControls();
  describe('A warm gallery of six community hygiene traditions from around the world. ' +
    'Tapping a scene explains the practice and that different traditions all support ' +
    'health.', LABEL);
}
function positionControls() { resetButton.position(10, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('oldlace'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('sienna'); textAlign(CENTER, TOP); textSize(16); text('Healthy Habits Look Different in Every Family', canvasWidth / 2, 8);

  tileRects = [];
  let cols = 3, gap = 10, tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols, th = 116, y0 = 40;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap), y = y0 + r * (th + gap);
    tileRects.push({ x: x, y: y, w: tw, h: th, i: i });
    let sel = selected === i, hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th });
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'burlywood');
    fill(sel || hover ? scenes[i].color : 'seashell'); rect(x, y, tw, th, 10);
    noStroke(); fill(scenes[i].color); circle(x + tw / 2, y + 40, 34); fill('gray'); stroke('white'); strokeWeight(1); circle(x + tw / 2, y + 40, 20);
    noStroke(); fill('saddlebrown'); textAlign(CENTER, TOP); textSize(10); text(scenes[i].title, x + 3, y + th - 34, tw - 6, 32);
  }
  cursor(overAny() ? HAND : ARROW);

  let py = y0 + 2 * (th + gap) + 4;
  fill('white'); stroke('burlywood'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) { fill('gray'); text('Tap a tradition to learn about it. Every one of these keeps people healthy.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else { fill('black'); text(scenes[selected].cap, margin + 12, py + 10, canvasWidth - margin * 2 - 24, 44); }
}
function overAny() { for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) { selected = t.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
