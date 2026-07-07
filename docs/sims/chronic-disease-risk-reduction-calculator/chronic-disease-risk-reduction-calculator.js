// Chronic Disease Risk Reduction Calculator - MicroSim (prevention strategy gauge)
// CANVAS_HEIGHT: 455
// Grades 9-12, Evaluate (L5): students evaluate how combinations of prevention
// strategies affect a simplified composite risk indicator and justify a realistic plan.
// The gauge is illustrative only — NOT a personal medical prediction.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let justInput;
let checkButton;
let resetButton;

let strategies = [
  'Nutrition quality', 'Physical activity', 'Tobacco/alcohol avoidance',
  'Routine screening', 'Stress/sleep management'
];
let levels = ['Low', 'Moderate', 'Strong'];
let levelReduction = [0, 9, 18]; // additive risk reduction per strategy

let sel = [0, 0, 0, 0, 0]; // level index per strategy
let feedback = '';
let feedbackColor = 'dimgray';
let segRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  justInput = createInput('');
  justInput.parent(document.querySelector('main'));
  justInput.attribute('placeholder', 'Justify your plan (e.g., limited time for exercise)...');
  checkButton = createButton('Check My Reasoning');
  checkButton.mousePressed(check);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('Five prevention strategies, each with Low, Moderate, or Strong adherence, ' +
    'feeding a composite risk gauge that updates in real time. Students set a realistic ' +
    'combination and justify it in a text box. The gauge is illustrative, not a diagnosis.', LABEL);
}

function positionControls() {
  justInput.position(10, drawHeight + 12);
  justInput.size(canvasWidth - 320);
  checkButton.position(canvasWidth - 300, drawHeight + 12);
  resetButton.position(canvasWidth - 150, drawHeight + 12);
}

function risk() {
  let reduction = sel.reduce((a, s) => a + levelReduction[s], 0);
  return 100 - reduction; // 100 (all Low) down to 10 (all Strong)
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
  textSize(19);
  text('Chronic Disease Risk Reduction', canvasWidth / 2, 6);

  // strategy toggles (left)
  segRects = [];
  let lx = margin, lw = canvasWidth * 0.56;
  let y0 = 38, rowH = 54;
  for (let i = 0; i < strategies.length; i++) {
    let y = y0 + i * rowH;
    noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
    text(strategies[i], lx, y);
    let segW = (lw - 8) / 3, segH = 26, segY = y + 16;
    for (let l = 0; l < 3; l++) {
      let x = lx + l * (segW + 4);
      segRects.push({ x: x, y: segY, w: segW, h: segH, i: i, l: l });
      let on = sel[i] === l;
      let col = ['indianred', 'goldenrod', 'seagreen'][l];
      strokeWeight(on ? 2.5 : 1); stroke(col);
      fill(on ? col : 'white');
      rect(x, segY, segW, segH, 5);
      noStroke(); fill(on ? 'white' : col); textAlign(CENTER, CENTER); textSize(11);
      text(levels[l], x, segY, segW, segH);
    }
  }
  cursor(overAnySeg() ? HAND : ARROW);

  drawGauge();

  // feedback
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill(feedbackColor);
  text(feedback, canvasWidth * 0.6, 300, canvasWidth * 0.4 - margin, 90);
}

function drawGauge() {
  let gx = canvasWidth * 0.6, gw = canvasWidth * 0.4 - margin;
  let cx = gx + gw / 2, cy = 150, r = 66;
  let rk = risk();
  // arc gauge green(low risk)->red(high risk)
  strokeWeight(16); noFill();
  let steps = 30;
  for (let i = 0; i < steps; i++) {
    let a0 = PI + (i / steps) * PI, a1 = PI + ((i + 1) / steps) * PI;
    stroke(lerpColor(color('seagreen'), color('crimson'), i / steps));
    arc(cx, cy, r * 2, r * 2, a0, a1);
  }
  // needle: risk 10..100 -> angle
  let t = map(rk, 10, 100, 0, 1);
  let a = PI + t * PI;
  stroke('black'); strokeWeight(4);
  line(cx, cy, cx + cos(a) * (r - 8), cy + sin(a) * (r - 8));
  noStroke(); fill('black'); circle(cx, cy, 10);
  fill('black'); textAlign(CENTER, TOP); textSize(13);
  text('Relative risk: ' + rk, cx, cy + 14);
  fill('dimgray'); textSize(9); textAlign(CENTER, TOP);
  text('Illustrative of population research —\nnot a personal medical prediction.', cx - r, cy + 34, r * 2 + 12, 40);
}

function overAnySeg() {
  for (let s of segRects) if (pointInRect(mouseX, mouseY, s)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let s of segRects) {
    if (pointInRect(mouseX, mouseY, s)) { sel[s.i] = s.l; return; }
  }
}

function check() {
  let txt = justInput.value().trim();
  if (txt.length < 8) {
    feedback = 'Write a one- or two-sentence justification for your combination first.';
    feedbackColor = 'darkgoldenrod';
    return;
  }
  feedback = 'Model idea: realistic plans often start with the lowest-barrier strategies — ' +
    'routine screening and better sleep are frequently overlooked but take little time. ' +
    'Moderate gains across several areas beat maxing out just one.';
  feedbackColor = 'seagreen';
}

function reset() {
  sel = [0, 0, 0, 0, 0];
  justInput.value('');
  feedback = '';
  feedbackColor = 'dimgray';
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
