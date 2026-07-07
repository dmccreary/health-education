// Cultural Lenses on Respect and Boundaries - MicroSim (lens comparison)
// CANVAS_HEIGHT: 472
// Grades 6-8, Analyze (L4): students analyze how different cultural orientations frame
// boundary-setting differently while protecting the same underlying need.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let sharedButton;
let resetButton;

let scenario = 'Boundary example: politely declining to share personal information.';

let lenses = [
  { name: 'Individualist Orientation', color: 'steelblue',
    origin: 'Emphasizes personal rights and independence.',
    phrase: '"That\'s private — I\'d rather not share it."' },
  { name: 'Reciprocity', color: 'mediumseagreen',
    origin: 'Frames relationships as mutual give-and-take.',
    phrase: '"I\'ll share what I\'m comfortable with if it\'s mutual."' },
  { name: 'Filial Respect', color: 'mediumpurple',
    origin: 'Honors family and elders; preserves harmony.',
    phrase: '"With respect, that\'s something I keep private in our family."' },
  { name: 'Respeto', color: 'coral',
    origin: 'A value of courteous respect within relationships.',
    phrase: '"With respect, I\'d prefer to keep that to myself."' }
];
let sharedText = "What's shared: all four lenses protect the same genuine limit — the right to decide " +
  'what you share. They differ only in how the boundary is expressed, not in whether the boundary is real.';

let selected = -1;
let showShared = false;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sharedButton = createButton("What's Shared");
  sharedButton.mousePressed(() => { showShared = !showShared; selected = -1; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showShared = false; });
  positionControls();
  describe('A single boundary scenario with four cultural lens cards — individualist ' +
    'orientation, reciprocity, filial respect, and respeto. Clicking a lens shows how it ' +
    'expresses the same boundary; a What\'s Shared toggle shows the common function.', LABEL);
}

function positionControls() {
  sharedButton.position(10, drawHeight + 12);
  resetButton.position(120, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(17);
  text('Cultural Lenses on Boundaries', canvasWidth / 2, 8);

  // central scenario
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 34, canvasWidth - margin * 2, 40, 8);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(13);
  text(scenario, margin + 8, 54, canvasWidth - margin * 2 - 16, 36);

  // 4 lens cards (2x2)
  cardRects = [];
  let cols = 2, gap = 10;
  let cw = (canvasWidth - margin * 2 - gap) / cols;
  let ch = 54, y0 = 86;
  for (let i = 0; i < 4; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (cw + gap);
    let y = y0 + r * (ch + gap);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: cw, h: ch });
    strokeWeight(sel ? 3 : 1.5); stroke(lenses[i].color);
    fill(sel ? lenses[i].color : (hover ? 'floralwhite' : 'white'));
    rect(x, y, cw, ch, 8);
    noStroke(); fill(sel ? 'white' : 'black'); textAlign(CENTER, CENTER); textSize(12);
    text(lenses[i].name, x + 4, y, cw - 8, ch);
  }
  cursor(overAny() ? HAND : ARROW);

  // infobox
  let py = y0 + 2 * (ch + gap) + 6;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (showShared) {
    fill('darkslateblue'); text(sharedText, margin + 10, py + 10, canvasWidth - margin * 2 - 20, 80);
  } else if (selected >= 0) {
    fill(lenses[selected].color); text(lenses[selected].name, margin + 10, py + 8);
    fill('black'); textSize(12);
    text('Emphasis: ' + lenses[selected].origin, margin + 10, py + 28, canvasWidth - margin * 2 - 20, 30);
    fill('dimgray'); text('Expresses the boundary as: ' + lenses[selected].phrase, margin + 10, py + 58, canvasWidth - margin * 2 - 20, 40);
  } else {
    fill('dimgray');
    text('Click a lens to see how it expresses the same boundary, or "What\'s Shared" to see what they have in common.',
      margin + 10, py + 10, canvasWidth - margin * 2 - 20, 60);
  }
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { selected = r.i; showShared = false; return; }
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
