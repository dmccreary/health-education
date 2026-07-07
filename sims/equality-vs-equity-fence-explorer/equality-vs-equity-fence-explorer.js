// Equality vs. Equity Fence Explorer - MicroSim (boxes, fence, sight lines)
// CANVAS_HEIGHT: 472
// Grade 5, Understand (L2): students explain the difference between equality and equity by
// giving boxes to three students of different heights behind a fence and seeing who can
// see over it.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let modeButton;
let giveButton;
let resetButton;

// eye heights (px above ground) for short, medium, tall
let baseEye = [70, 100, 130];
let boxes = [0, 0, 0];
let boxH = 26;
let fenceEye = 150;   // must reach this to see over
let equityMode = false;
let stepRects = [];
let groundY, fenceTopY;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  modeButton = createButton('Switch to Equity Mode');
  modeButton.mousePressed(toggleMode);
  giveButton = createButton('Give Everyone 1 Box');
  giveButton.mousePressed(giveAll);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { boxes = [0, 0, 0]; });
  positionControls();
  describe('Three students of different heights stand behind a fence. In equality mode ' +
    'everyone gets the same number of boxes; in equity mode you give each student what ' +
    'they need. Eye indicators show who can see over the fence.', LABEL);
}

function positionControls() {
  modeButton.position(10, drawHeight + 12);
  giveButton.position(190, drawHeight + 12);
  resetButton.position(canvasWidth - 60, drawHeight + 12);
}

function toggleMode() {
  equityMode = !equityMode;
  modeButton.html(equityMode ? 'Switch to Equality Mode' : 'Switch to Equity Mode');
  boxes = [0, 0, 0];
  giveButton.attribute('disabled', equityMode ? 'true' : null);
  if (equityMode) giveButton.hide(); else giveButton.show();
}
function giveAll() { for (let i = 0; i < 3; i++) boxes[i]++; }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text((equityMode ? 'Equity' : 'Equality') + ' Mode', canvasWidth / 2, 8);

  // scene
  let sceneX = margin, sceneW = canvasWidth * 0.62;
  groundY = 320; fenceTopY = groundY - fenceEye;
  noStroke(); fill('honeydew'); rect(sceneX, 40, sceneW, groundY - 40);
  fill('yellowgreen'); rect(sceneX, groundY, sceneW, 12);
  // fence
  fill('sienna'); rect(sceneX + sceneW * 0.5 - 4, fenceTopY, 8, groundY - fenceTopY);
  rect(sceneX, fenceTopY, sceneW, 8);
  rect(sceneX, fenceTopY + 30, sceneW, 8);

  // three students with boxes
  let spots = [sceneX + sceneW * 0.15, sceneX + sceneW * 0.32, sceneX + sceneW * 0.49];
  stepRects = [];
  for (let i = 0; i < 3; i++) {
    let x = spots[i];
    // boxes
    fill('peru'); stroke('saddlebrown'); strokeWeight(1);
    for (let b = 0; b < boxes[i]; b++) rect(x - 16, groundY - (b + 1) * boxH, 32, boxH - 2, 2);
    let lift = boxes[i] * boxH;
    // student
    noStroke(); fill('mediumpurple');
    let headY = groundY - lift - baseEye[i];
    circle(x, headY, 20);
    rect(x - 8, headY + 10, 16, baseEye[i] - 12, 4);
    // eye/sight indicator
    let eye = baseEye[i] + lift;
    let canSee = eye >= fenceEye;
    fill(canSee ? 'seagreen' : 'gray'); textAlign(CENTER, CENTER); textSize(12);
    text(canSee ? '👁' : '·', x, headY);
    fill(canSee ? 'seagreen' : 'gray'); textAlign(CENTER, TOP); textSize(10);
    text(canSee ? 'sees over' : 'blocked', x - 24, groundY + 14, 48, 14);

    // equity steppers
    if (equityMode) {
      let by = groundY + 30;
      // minus
      stepRects.push({ x: x - 22, y: by, w: 20, h: 20, i: i, d: -1 });
      stepRects.push({ x: x + 2, y: by, w: 20, h: 20, i: i, d: 1 });
      stroke('slateblue'); strokeWeight(1); fill('white');
      rect(x - 22, by, 20, 20, 3); rect(x + 2, by, 20, 20, 3);
      noStroke(); fill('slateblue'); textAlign(CENTER, CENTER); textSize(14);
      text('−', x - 12, by + 9); text('+', x + 12, by + 9);
    }
  }
  cursor(overStep() ? HAND : ARROW);

  // panel (right)
  let px = sceneX + sceneW + 8, pw = canvasWidth - px - margin;
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
  text('Boxes: ' + boxes.join(', '), px, 60, pw, 20);
  let seen = baseEye.map((b, i) => (b + boxes[i] * boxH) >= fenceEye).filter(Boolean).length;
  fill('seagreen'); text(seen + ' of 3 can see over.', px, 84, pw, 20);
  fill('darkslateblue'); textSize(11);
  let msg = equityMode
    ? 'Equity: give each student what they need. Everyone can see when support matches need.'
    : 'Equality: everyone gets the same. The shortest student may still not see over.';
  text(msg, px, 116, pw, 160);
}

function overStep() { for (let s of stepRects) if (pointInRect(mouseX, mouseY, s)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let s of stepRects) {
    if (pointInRect(mouseX, mouseY, s)) { boxes[s.i] = constrain(boxes[s.i] + s.d, 0, 4); return; }
  }
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
