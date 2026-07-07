// Match the Body Language - MicroSim (nonverbal cue -> feeling)
// CANVAS_HEIGHT: 452
// Grade 3, Remember (L1): students identify the feeling behind common nonverbal cues by
// matching body-language poses to the feeling they most likely show.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

let feelings = ['Frustrated', 'Sad', 'Happy', 'Angry'];
// pose: id + correct feeling index
let poses = [
  { p: 'crossed', a: 0 },       // arms crossed, frowning -> frustrated
  { p: 'slumped', a: 1 },       // shoulders slumped, looking down -> sad
  { p: 'open', a: 2 },          // wide smile, open arms -> happy
  { p: 'fists', a: 3 },         // tense, clenched fists -> angry
  { p: 'slumped', a: 1 },
  { p: 'open', a: 2 }
];

let idx = 0, picked = -1;
let btnRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Pose'); nextButton.mousePressed(() => { idx = (idx + 1) % poses.length; picked = -1; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { idx = 0; picked = -1; });
  positionControls();
  describe('A cartoon figure in a clear body-language pose and four feeling-word buttons. ' +
    'Students pick the feeling the pose most likely shows.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(110, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(20); text('Match the Body Language', canvasWidth / 2, 8);

  // figure (left)
  drawPose(canvasWidth * 0.28, 200, poses[idx].p);

  // buttons (right)
  btnRects = [];
  let rx = canvasWidth * 0.54, rw = canvasWidth - rx - margin;
  for (let i = 0; i < 4; i++) {
    let y = 54 + i * 56;
    btnRects.push({ x: rx, y: y, w: rw, h: 46, i: i });
    let hover = pointInRect(mouseX, mouseY, btnRects[i]); let isA = poses[idx].a === i;
    strokeWeight(2); stroke('mediumpurple');
    if (picked < 0) fill(hover ? 'lavender' : 'white');
    else if (isA) { fill('honeydew'); stroke('seagreen'); strokeWeight(3); }
    else if (i === picked) { fill('mistyrose'); stroke('indianred'); }
    else fill('white');
    rect(rx, y, rw, 46, 8);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(15); text(feelings[i], rx, y, rw, 46);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (picked < 0) { fill('dimgray'); text('What feeling does this pose show?', margin, 300, canvasWidth * 0.5, 60); }
  else { let ok = picked === poses[idx].a; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ Yes — ' : 'Look at the pose again. It shows ') + feelings[poses[idx].a] + '.', margin, 300, canvasWidth * 0.5, 70); }
}
function drawPose(x, y, pose) {
  push();
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(x, y - 70, 40);
  noStroke(); fill('sienna'); circle(x - 9, y - 74, 5); circle(x + 9, y - 74, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  if (pose === 'open') arc(x, y - 62, 20, 14, 0.1 * PI, 0.9 * PI);
  else if (pose === 'slumped') line(x - 8, y - 58, x + 8, y - 58);
  else arc(x, y - 52, 20, 12, PI + 0.1 * PI, TWO_PI - 0.1 * PI);
  stroke('mediumpurple'); strokeWeight(4); fill('plum'); rect(x - 20, y - 50, 40, 60, 12);
  stroke('mediumpurple'); strokeWeight(4); noFill();
  if (pose === 'crossed') { line(x - 20, y - 30, x + 10, y - 14); line(x + 20, y - 30, x - 10, y - 14); }
  else if (pose === 'slumped') { line(x - 20, y - 40, x - 26, y - 4); line(x + 20, y - 40, x + 26, y - 4); }
  else if (pose === 'open') { line(x - 20, y - 40, x - 40, y - 58); line(x + 20, y - 40, x + 40, y - 58); }
  else { line(x - 20, y - 34, x - 30, y - 6); line(x + 20, y - 34, x + 30, y - 6); fill('mediumpurple'); circle(x - 30, y - 4, 8); circle(x + 30, y - 4, 8); }
  pop();
}
function overAny() { for (let r of btnRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked >= 0) return; for (let r of btnRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
