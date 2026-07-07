// Healthy or Needs Help? - MicroSim (identify healthy relationship signs)
// CANVAS_HEIGHT: 472
// Grade 3, Understand (L2): students read short scenarios and identify which healthy
// relationship signs are present (listening, honesty, apology & repair, support).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showButton;
let nextButton;

let signs = ['Listening', 'Honesty', 'Apology & repair', 'Support'];
// present = which sign indices are in the scenario
let scenarios = [
  { t: "Maya's brother helps her with homework and says sorry when he snaps at her.", present: [2, 3] },
  { t: 'When Sam breaks a plate, he tells his mom the truth and helps clean it up.', present: [1, 3] },
  { t: 'Ana really listens to her friend and tells her honestly what she thinks.', present: [0, 1] },
  { t: 'Leo apologizes after teasing, then listens to how his friend felt.', present: [0, 2] },
  { t: 'Grandpa supports Kim at her game and listens to her afterward.', present: [0, 3] }
];

let sIndex = 0;
let checks = [false, false, false, false];
let revealed = false;
let boxRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showButton = createButton('Show Answer');
  showButton.mousePressed(() => { revealed = true; });
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(() => { sIndex = (sIndex + 1) % scenarios.length; checks = [false, false, false, false]; revealed = false; });
  positionControls();
  describe('A short relationship scenario and four checkboxes for healthy signs — ' +
    'listening, honesty, apology and repair, and support. Students check the signs present, ' +
    'then reveal the answer.', LABEL);
}

function positionControls() {
  showButton.position(10, drawHeight + 12);
  nextButton.position(130, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(19);
  text('Healthy or Needs Help?', canvasWidth / 2, 8);

  // scenario
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 42, canvasWidth - margin * 2, 90, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12); text('Scenario ' + (sIndex + 1) + ' of ' + scenarios.length, margin + 12, 50);
  fill('black'); textSize(16); text(scenarios[sIndex].t, margin + 12, 70, canvasWidth - margin * 2 - 24, 60);

  // checkboxes
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13); text('Which healthy signs are here?', margin, 146);
  boxRects = [];
  let y0 = 170, bh = 46, gap = 8;
  for (let i = 0; i < 4; i++) {
    let y = y0 + i * (bh + gap);
    boxRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: bh, i: i });
    let present = scenarios[sIndex].present.includes(i);
    let checked = checks[i];
    let correct = revealed && checked === present;
    strokeWeight(1.5); stroke(revealed ? (present ? 'seagreen' : 'gray') : 'slateblue');
    fill(revealed && present ? 'honeydew' : 'white');
    rect(margin, y, canvasWidth - margin * 2, bh, 7);
    // checkbox
    fill(checked ? 'seagreen' : 'white'); stroke('seagreen'); rect(margin + 10, y + bh / 2 - 11, 22, 22, 4);
    if (checked) { noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(16); text('✓', margin + 21, y + bh / 2); }
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(15); text(signs[i], margin + 44, y + bh / 2);
    if (revealed) { textAlign(RIGHT, CENTER); textSize(12); fill(present ? 'seagreen' : 'gray'); text(present ? 'present ✓' : 'not here', canvasWidth - margin - 10, y + bh / 2); }
  }
  cursor(overAny() && !revealed ? HAND : ARROW);
}

function overAny() { for (let r of boxRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (revealed) return;
  for (let r of boxRects) if (pointInRect(mouseX, mouseY, r)) { checks[r.i] = !checks[r.i]; return; }
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
