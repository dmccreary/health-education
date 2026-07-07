// Goal Strategy Outcome Evaluation Rubric - MicroSim (rate goal process + outcome)
// CANVAS_HEIGHT: 512
// Grades 9-12, Evaluate (L5): students evaluate a completed goal scenario's process and
// outcome against a four-criterion rubric and compare to an expert rating.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let compareButton;
let justInput;
let resetButton;

let criteria = ['Data was tracked', 'Strategy components worked', 'Goal achieved (partly/fully)', 'Plan revision handled'];

let scenarios = [
  { name: 'Sleep', log: ['Wk1: Tracked bedtime nightly. Slept by 10:30 most nights.', 'Wk2: Missed logging 3 nights; stayed up late twice.', 'Wk3: Back on track; added a wind-down routine.', 'Wk4: Met 10:30 goal 5/7 nights. Kept a full log.'], expert: [4, 3, 3, 4] },
  { name: 'Activity', log: ['Wk1: Logged workouts. Did 2 of 4 planned.', 'Wk2: No log kept. Skipped most workouts.', 'Wk3: No changes made to the plan.', 'Wk4: Did 1 workout. Goal not met.'], expert: [2, 1, 1, 1] },
  { name: 'Stress', log: ['Wk1: Tracked stress 1-10 daily. Tried breathing.', 'Wk2: Noticed breathing helped; kept logging.', 'Wk3: Added a walk when stressed. Revised plan.', 'Wk4: Stress lower most days. Full data kept.'], expert: [4, 4, 3, 4] }
];

let tIndex = 0;
let ratings = [0, 0, 0, 0];
let showCompare = false;
let starRects = [], tabRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  compareButton = createButton('Compare to Expert');
  compareButton.mousePressed(() => { showCompare = true; });
  justInput = createInput('');
  justInput.parent(document.querySelector('main'));
  justInput.attribute('placeholder', 'Justify your evaluation...');
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { ratings = [0, 0, 0, 0]; showCompare = false; justInput.value(''); });
  positionControls();
  describe('A four-week goal checkpoint log for sleep, activity, or stress, and a ' +
    'four-criterion rubric with 1-4 star ratings. Students rate the process and outcome, ' +
    'justify it, and compare to an expert rating.', LABEL);
}

function positionControls() {
  justInput.position(10, drawHeight + 14);
  justInput.size(canvasWidth - 210);
  compareButton.position(canvasWidth - 190, drawHeight + 14);
  resetButton.position(canvasWidth - 56, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(16);
  text('Goal Strategy & Outcome Rubric', canvasWidth / 2, 6);

  // scenario tabs
  tabRects = [];
  let tw = (canvasWidth - margin * 2) / 3;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * tw;
    tabRects.push({ x: x, y: 28, w: tw, h: 22, i: i });
    let on = tIndex === i;
    noStroke(); fill(on ? 'slateblue' : 'gainsboro'); rect(x + 1, 28, tw - 2, 22, 4);
    fill(on ? 'white' : 'dimgray'); textAlign(CENTER, CENTER); textSize(11); text(scenarios[i].name, x, 39);
  }

  // log panel
  let lp = 56, lh = 140;
  fill('whitesmoke'); stroke('silver'); strokeWeight(1); rect(margin, lp, canvasWidth - margin * 2, lh, 6);
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(11);
  let ly = lp + 8;
  for (let line of scenarios[tIndex].log) { text(line, margin + 8, ly, canvasWidth - margin * 2 - 16, 30); ly += 32; }

  // rubric stars
  starRects = [];
  let ry = lp + lh + 8, rowH = 46;
  for (let c = 0; c < 4; c++) {
    let y = ry + c * rowH;
    noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12); text(criteria[c], margin, y);
    for (let s = 1; s <= 4; s++) {
      let x = margin + 8 + (s - 1) * 30, sy = y + 20;
      starRects.push({ x: x - 12, y: sy - 12, w: 26, h: 26, c: c, s: s });
      drawStar(x, sy, 10, ratings[c] >= s ? 'gold' : 'white', 'goldenrod');
    }
    if (showCompare) {
      let ex = scenarios[tIndex].expert[c], match = ratings[c] === ex;
      noStroke(); fill(match ? 'seagreen' : 'crimson'); textAlign(LEFT, CENTER); textSize(11);
      text('expert: ' + ex + (match ? ' ✓' : ''), margin + 140, y + 18);
    }
  }
  cursor(overStars() || overTabs() ? HAND : ARROW);
}

function drawStar(cx, cy, r, fc, sc) {
  push(); translate(cx, cy); stroke(sc); strokeWeight(1); fill(fc);
  beginShape();
  for (let i = 0; i < 10; i++) { let a = -HALF_PI + i * PI / 5; let rad = i % 2 === 0 ? r : r * 0.45; vertex(cos(a) * rad, sin(a) * rad); }
  endShape(CLOSE); pop();
}

function overStars() { for (let s of starRects) if (pointInRect(mouseX, mouseY, s)) return true; return false; }
function overTabs() { for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) { tIndex = t.i; ratings = [0, 0, 0, 0]; showCompare = false; return; }
  for (let s of starRects) if (pointInRect(mouseX, mouseY, s)) { ratings[s.c] = s.s; return; }
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
