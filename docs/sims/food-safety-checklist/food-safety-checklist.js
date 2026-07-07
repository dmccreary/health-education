// Food Safety Habit Checklist - MicroSim (safe habit or needs a change)
// CANVAS_HEIGHT: 452
// Grade 1, Remember (L1): students recall safe food-handling practices by judging short
// kitchen scenes.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;

// safe = true (safe habit); cap = explanation
let scenes = [
  { t: 'A child washes hands before a snack.', safe: true, cap: 'Washing hands first keeps germs off your food.' },
  { t: 'A child rinses an apple before eating it.', safe: true, cap: 'Rinsing fruit washes away dirt and germs.' },
  { t: 'A child picks up food that fell on the floor and eats it.', safe: false, cap: 'Food from the floor can have germs — toss it out.' },
  { t: 'A child asks an adult before touching a hot pan.', safe: true, cap: 'Asking an adult keeps you safe from burns.' },
  { t: 'A child coughs right over the open food.', safe: false, cap: 'Cover your cough, away from food, to keep it clean.' },
  { t: 'A child puts leftovers in the fridge.', safe: true, cap: 'Cold storage keeps food safe to eat later.' },
  { t: 'A child eats raw cookie dough from the bowl.', safe: false, cap: 'Raw dough can have germs — wait until it is baked.' },
  { t: 'A child uses a clean plate for their snack.', safe: true, cap: 'A clean plate keeps germs away from your food.' }
];

let idx = 0;
let picked = null;   // true/false
let safeRect, changeRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scene');
  nextButton.mousePressed(() => { idx = (idx + 1) % scenes.length; picked = null; });
  positionControls();
  describe('One calm kitchen scene at a time with two buttons — Safe Habit or Needs a ' +
    'Change. Children judge the habit and get a short explanation.', LABEL);
}

function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Food Safety Checklist', canvasWidth / 2, 8);

  // scene
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 44, canvasWidth - margin * 2, 96, 12);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12); text('Scene ' + (idx + 1) + ' of ' + scenes.length, margin + 12, 52);
  fill('black'); textSize(16); text(scenes[idx].t, margin + 12, 74, canvasWidth - margin * 2 - 24, 60);

  // two buttons
  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 60, by = 160;
  safeRect = { x: margin, y: by, w: bw, h: bh };
  changeRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBtn(safeRect, 'Safe Habit', true, 'seagreen');
  drawBtn(changeRect, 'Needs a Change', false, 'darkorange');
  cursor((pointInRect(mouseX, mouseY, safeRect) || pointInRect(mouseX, mouseY, changeRect)) && picked === null ? HAND : ARROW);

  // feedback
  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Is this a safe habit? Tap a button.', margin, 240, canvasWidth - margin * 2, 40); }
  else {
    let correct = picked === scenes[idx].safe;
    fill(correct ? 'seagreen' : 'darkorange');
    text((correct ? '✓ ' : '') + scenes[idx].cap, margin, 240, canvasWidth - margin * 2, 80);
  }
}

function drawBtn(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === scenes[idx].safe ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(17); text(label, r.x + 4, r.y, r.w - 8, r.h);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked !== null) return;
  if (pointInRect(mouseX, mouseY, safeRect)) picked = true;
  else if (pointInRect(mouseX, mouseY, changeRect)) picked = false;
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
