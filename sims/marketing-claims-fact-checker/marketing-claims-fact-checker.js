// Marketing Claims Fact-Checker - MicroSim (judge a claim against the label)
// CANVAS_HEIGHT: 472
// Grades 6-8, Evaluate (L5): students evaluate front-of-package claims against label data
// and judge whether each is misleading, technically true but incomplete, or informative.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;

let opts = ['Misleading', 'Technically True\nbut Incomplete', 'Genuinely\nInformative'];
let optColors = ['indianred', 'goldenrod', 'seagreen'];
let deck = [
  { claim: '"Made with real fruit"', label: 'Fruit puree is the 5th ingredient; sugar is 2nd.', a: 0, e: 'Real fruit is far down the list — the claim oversells it.' },
  { claim: '"No added sugar"', label: 'True, but still 24g of natural sugar per serving.', a: 1, e: 'Accurate, but leaves out how much sugar is still there.' },
  { claim: '"Good source of fiber"', label: 'Label shows 5g fiber (18% DV) per serving.', a: 2, e: 'The label backs up the claim — genuinely informative.' },
  { claim: '"Fat free!"', label: 'True, but 30g of sugar per serving.', a: 1, e: 'True about fat, but hides the high sugar.' },
  { claim: '"Supports immunity"', label: 'Only 2% DV vitamin C; no strong evidence.', a: 0, e: 'A tiny amount does not support that claim — misleading.' },
  { claim: '"100% whole grain"', label: 'Whole wheat is the first ingredient.', a: 2, e: 'The ingredient list confirms it — informative.' }
];

let idx = 0, picked = -1;
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Product'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = -1; });
  positionControls();
  describe('A front-of-package claim with its matching label facts and three judgment ' +
    'buttons — misleading, technically true but incomplete, or genuinely informative.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Marketing Claims Fact-Checker', canvasWidth / 2, 8);

  // claim + label
  fill('gold'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, 36, canvasWidth - margin * 2, 34, 6);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(16); text('Front of package: ' + deck[idx].claim, margin + 6, 53, canvasWidth - margin * 2 - 12, 30);
  fill('whitesmoke'); stroke('gray'); strokeWeight(1); rect(margin, 76, canvasWidth - margin * 2, 42, 6);
  noStroke(); fill('dimgray'); textAlign(LEFT, CENTER); textSize(12); text('Label says: ' + deck[idx].label, margin + 10, 97, canvasWidth - margin * 2 - 20, 40);

  optRects = [];
  let oy = 128, oh = 48, gap = 8;
  for (let i = 0; i < 3; i++) {
    let y = oy + i * (oh + gap);
    optRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, optRects[i]); let isA = deck[idx].a === i;
    strokeWeight(2); stroke(optColors[i]);
    if (picked < 0) fill(hover ? 'lightyellow' : 'white');
    else if (isA) { fill('honeydew'); strokeWeight(3); }
    else if (i === picked) fill('mistyrose');
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, oh, 8);
    noStroke(); fill(optColors[i] === 'goldenrod' ? 'darkgoldenrod' : optColors[i]); textAlign(CENTER, CENTER); textSize(13); text(opts[i], margin, y, canvasWidth - margin * 2, oh);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  let fy = oy + 3 * (oh + gap) + 2;
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (picked < 0) { fill('dimgray'); text('Compare the claim to the label. How would you judge it?', margin, fy, canvasWidth - margin * 2, 30); }
  else { let ok = picked === deck[idx].a; fill(ok ? 'seagreen' : 'darkgoldenrod'); text((ok ? '✓ ' : 'Best answer: ' + opts[deck[idx].a].replace('\n', ' ') + '. ') + deck[idx].e, margin, fy, canvasWidth - margin * 2, 40); }
}
function overAny() { for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked >= 0) return; for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
