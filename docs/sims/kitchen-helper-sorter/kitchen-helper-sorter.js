// Kitchen Helper Sorting Game - MicroSim (I can help vs. grown-up job)
// CANVAS_HEIGHT: 452
// Grade 1, Understand (L2): students classify kitchen tasks as safe to help with or a
// grown-up-only job, and explain why grown-up jobs need an adult.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton, resetButton;

let tasks = [
  { t: 'Washing vegetables', kid: true, e: 'Rinsing veggies is a safe way to help.' },
  { t: 'Stirring a bowl of batter', kid: true, e: 'Stirring is a safe helper job.' },
  { t: 'Using the hot stove', kid: false, e: 'A hot stove needs a grown-up so no one gets burned.' },
  { t: 'Cutting food with a sharp knife', kid: false, e: 'Sharp knives are a grown-up job for safety.' },
  { t: 'Setting the table', kid: true, e: 'Setting the table is a great helper job.' },
  { t: 'Taking a hot pan out of the oven', kid: false, e: 'Hot pans need a grown-up with oven mitts.' },
  { t: 'Pouring cereal into a bowl', kid: true, e: 'Pouring cereal is a safe helper job.' },
  { t: 'Using the blender', kid: false, e: 'Blenders have fast blades — a grown-up job.' }
];

let idx = 0, picked = null, sorted = 0;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Task'); nextButton.mousePressed(() => { idx = (idx + 1) % tasks.length; picked = null; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { idx = 0; picked = null; sorted = 0; });
  positionControls();
  describe('One kitchen task at a time and two bins — I Can Help and Grown-Up Job. Children ' +
    'sort each task and learn why grown-up jobs need an adult.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(130, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(20); text('Kitchen Helper Sorter', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2); rect(margin, 44, canvasWidth - margin * 2, 64, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17); text(tasks[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 64);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 84, by = 122;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBin(aRect, 'I Can Help', true, 'seagreen'); drawBin(bRect, 'Grown-Up Job', false, 'darkorange');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (picked === null) { fill('dimgray'); text('Can you help with this, or is it a grown-up job?', margin, 216, canvasWidth - margin * 2, 30); }
  else { let ok = picked === tasks[idx].kid; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ ' : '') + tasks[idx].e, margin, 216, canvasWidth - margin * 2, 60); }
  fill('navy'); textSize(13); text('Sorted ' + sorted + ' of ' + tasks.length, margin, 296, canvasWidth - margin * 2, 20);
}
function drawBin(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === tasks[idx].kid ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12); noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(17); text(label, r.x + 4, r.y, r.w - 8, r.h);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked !== null) return; let c = null; if (pointInRect(mouseX, mouseY, aRect)) c = true; else if (pointInRect(mouseX, mouseY, bRect)) c = false; if (c !== null) { picked = c; sorted++; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
