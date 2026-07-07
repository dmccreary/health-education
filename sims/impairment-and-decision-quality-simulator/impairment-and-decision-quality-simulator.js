// Impairment and Decision Quality Simulator - MicroSim (impairment vs. decision quality)
// CANVAS_HEIGHT: 472
// Grades 9-12, Evaluate (L5): students judge how impairment level changes risk assessment,
// impulse control, and consideration of consequences. No depiction of intoxication.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;

let scenarios = [
  'Deciding whether to get in a car with a driver who has been drinking.',
  'Deciding whether to try an unfamiliar pill offered at a party.',
  'Deciding how to respond to an escalating argument.',
  'Deciding whether to share something private online late at night.'
];
// per level: risk assessment, impulse control, consequence thinking (short phrases)
let levels = [
  { name: 'Sober', color: 'seagreen', risk: 'Clear — sees the danger', imp: 'Strong — can pause', con: 'Thinks it through' },
  { name: 'Mildly impaired', color: 'goldenrod', risk: 'Blurred — underrates risk', imp: 'Weaker — acts faster', con: 'Shorter-sighted' },
  { name: 'More heavily impaired', color: 'indianred', risk: 'Poor — misses danger', imp: 'Low — hard to stop', con: 'Barely considers outcomes' }
];

let sIndex = 0, level = 0;
let levelRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { sIndex = (sIndex + 1) % scenarios.length; });
  positionControls();
  describe('A decision scenario and a three-level impairment selector — sober, mildly, more ' +
    'heavily impaired. Choosing a level shows how risk assessment, impulse control, and ' +
    'consequence thinking change.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(16); text('Impairment & Decision Quality', canvasWidth / 2, 8);

  // scenario
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, 34, canvasWidth - margin * 2, 70, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Decision ' + (sIndex + 1) + ' of ' + scenarios.length, margin + 10, 40);
  fill('black'); textSize(14); text(scenarios[sIndex], margin + 10, 58, canvasWidth - margin * 2 - 20, 44);

  // level selector
  levelRects = [];
  let n = 3, gap = 8, bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n, by = 114, bh = 40;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (bw + gap);
    levelRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let sel = level === i, hover = pointInRect(mouseX, mouseY, { x: x, y: by, w: bw, h: bh });
    strokeWeight(sel ? 3 : 1.5); stroke(levels[i].color); fill(sel ? lerpColor(color(levels[i].color), color('white'), 0.6) : (hover ? 'floralwhite' : 'white'));
    rect(x, by, bw, bh, 8);
    noStroke(); fill(levels[i].color === 'goldenrod' ? 'darkgoldenrod' : levels[i].color); textAlign(CENTER, CENTER); textSize(11); text(levels[i].name, x + 3, by, bw - 6, bh);
  }
  cursor(overAny() ? HAND : ARROW);

  // effect panel
  let py = 170, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  let L = levels[level];
  noStroke(); fill(L.color); textAlign(LEFT, TOP); textSize(14); text('At: ' + L.name, margin + 12, py + 10);
  let rows = [['Risk assessment', L.risk], ['Impulse control', L.imp], ['Consequence thinking', L.con]];
  let y = py + 40;
  for (let r of rows) { fill('navy'); textSize(12); text(r[0] + ':', margin + 12, y); fill('black'); text(r[1], margin + 150, y, canvasWidth - margin - 160, 24); y += 34; }
  fill('darkslateblue'); textSize(11); text('As impairment rises, decisions get riskier and less considered — even the same person, same scenario.', margin + 12, y + 4, canvasWidth - margin * 2 - 24, 40);
}
function overAny() { for (let r of levelRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { for (let r of levelRects) if (pointInRect(mouseX, mouseY, r)) { level = r.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
