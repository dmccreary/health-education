// Kitchen Safety Hotspot Explorer - MicroSim (spot unsafe food handling + fix it)
// CANVAS_HEIGHT: 490
// Grade 5, Evaluate (L5): students evaluate a kitchen scene, identify unsafe food-handling
// practices, and judge the safer alternative for each.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let allButton, resetButton;

let spots = [
  { key: 'Same cutting board', fx: 0.22, fy: 0.3, unsafe: 'Raw chicken sits next to lettuce on one board.', fix: 'Use separate boards for raw meat and produce.' },
  { key: 'Milk left out', fx: 0.55, fy: 0.24, unsafe: 'A milk carton is left out on the warm counter.', fix: 'Keep dairy in the fridge; do not leave it out.' },
  { key: 'Unwashed hands', fx: 0.8, fy: 0.32, unsafe: 'Someone is about to eat without washing hands.', fix: 'Wash hands with soap before handling food.' },
  { key: 'Guessing doneness', fx: 0.3, fy: 0.64, unsafe: 'Chicken is served by guessing it is cooked.', fix: 'Use a thermometer to check it reaches a safe temperature.' },
  { key: 'Dirty towel', fx: 0.6, fy: 0.66, unsafe: 'One towel wipes hands, counters, and dishes.', fix: 'Use clean towels and change them often.' },
  { key: 'Floor food', fx: 0.85, fy: 0.62, unsafe: 'Food dropped on the floor is picked up and eaten.', fix: 'Throw out food that has touched the floor.' }
];

let selected = -1, showAll = false;
let spotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  allButton = createButton('Show All Issues'); allButton.mousePressed(() => { showAll = !showAll; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { selected = -1; showAll = false; });
  positionControls();
  describe('A kitchen scene with six hotspots marking unsafe food-handling practices. ' +
    'Clicking each explains the unsafe practice and the safer alternative that should ' +
    'replace it.', LABEL);
}
function positionControls() { allButton.position(10, drawHeight + 10); resetButton.position(150, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Kitchen Safety Hotspots', canvasWidth / 2, 8);

  let sy = 38, sh = 230;
  noStroke(); fill('antiquewhite'); rect(margin, sy, canvasWidth - margin * 2, sh, 8);
  fill('burlywood'); rect(margin, sy + sh * 0.45, canvasWidth - margin * 2, 10); // counter line
  fill('lightsteelblue'); rect(canvasWidth - margin - 60, sy + 10, 46, 40, 4); // fridge

  spotScreen = [];
  for (let i = 0; i < spots.length; i++) {
    let x = margin + spots[i].fx * (canvasWidth - margin * 2);
    let y = sy + spots[i].fy * sh;
    spotScreen.push({ x: x, y: y, r: 18 });
    let sel = selected === i, hover = dist(mouseX, mouseY, x, y) < 20;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'crimson');
    fill(sel ? 'gold' : (hover ? 'mistyrose' : color(220, 20, 60, 150))); circle(x, y, 34);
    noStroke(); fill(sel || hover ? 'black' : 'white'); textAlign(CENTER, CENTER); textSize(13); text('!', x, y);
    if (showAll || sel) { fill('black'); textAlign(CENTER, TOP); textSize(9); text(spots[i].key, x - 44, y + 18, 88, 20); }
  }
  cursor(overAny() ? HAND : ARROW);

  let py = 280, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (selected < 0) { fill('dimgray'); text('Click each red ! to spot an unsafe practice and the safer fix.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else { fill('crimson'); text('Unsafe: ' + spots[selected].unsafe, margin + 12, py + 10, canvasWidth - margin * 2 - 24, 34); fill('seagreen'); text('Safer: ' + spots[selected].fix, margin + 12, py + 46, canvasWidth - margin * 2 - 24, 34); }
}
function overAny() { for (let s of spotScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; return false; }
function mousePressed() { for (let i = 0; i < spotScreen.length; i++) { let s = spotScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; } } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
