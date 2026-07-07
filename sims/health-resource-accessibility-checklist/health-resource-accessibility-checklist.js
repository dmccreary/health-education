// Health Resource Accessibility Checklist - MicroSim (six-axis radar rating)
// CANVAS_HEIGHT: 502
// Grades 9-12, Evaluate (L5): students evaluate a health-resource scenario against six
// accessibility dimensions and reach an overall accessibility judgment.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let scenarioSelect;
let resetButton;

let axes = ['Cost', 'Location/Transport', 'Hours', 'Confidentiality', 'Language/Cultural fit', 'Digital access'];
let scenarios = [
  { name: 'School-based clinic', facts: 'Free, on campus, open school hours, private, staff speak common languages, no app needed.' },
  { name: 'Rural telehealth', facts: 'Low cost, no travel needed, flexible hours, private, some language support, requires internet.' },
  { name: 'Urban walk-in clinic', facts: 'Sliding-scale cost, transit needed, long hours, confidential, multilingual, online booking.' },
  { name: 'Tribal health center', facts: 'Free to members, may need travel, set hours, private, culturally grounded care, limited digital.' }
];

let sIndex = 0;
let vals = [3, 3, 3, 3, 3, 3];
let dotRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  scenarioSelect = createSelect(); scenarioSelect.parent(document.querySelector('main'));
  for (let i = 0; i < scenarios.length; i++) scenarioSelect.option(scenarios[i].name, i);
  scenarioSelect.changed(() => { sIndex = int(scenarioSelect.value()); vals = [3, 3, 3, 3, 3, 3]; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { vals = [3, 3, 3, 3, 3, 3]; });
  positionControls();
  describe('A six-axis radar chart for accessibility dimensions — cost, location, hours, ' +
    'confidentiality, language/cultural fit, and digital access. Students rate each 1-5 ' +
    'based on the scenario facts and see a computed overall accessibility score.', LABEL);
}

function positionControls() {
  scenarioSelect.position(10, drawHeight + 14); scenarioSelect.size(150);
  resetButton.position(canvasWidth - 60, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(16);
  text('Health Resource Accessibility', canvasWidth / 2, 6);

  // facts
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Facts: ' + scenarios[sIndex].facts, margin, 28, canvasWidth - margin * 2, 44);

  // radar
  let cx = canvasWidth / 2, cy = 250, R = 120;
  dotRects = [];
  // rings
  stroke('gainsboro'); strokeWeight(1); noFill();
  for (let lvl = 1; lvl <= 5; lvl++) {
    beginShape();
    for (let i = 0; i < 6; i++) { let a = -HALF_PI + i * TWO_PI / 6; let r = R * lvl / 5; vertex(cx + cos(a) * r, cy + sin(a) * r); }
    endShape(CLOSE);
  }
  // axis labels + clickable dots
  for (let i = 0; i < 6; i++) {
    let a = -HALF_PI + i * TWO_PI / 6;
    stroke('silver'); line(cx, cy, cx + cos(a) * R, cy + sin(a) * R);
    for (let lvl = 1; lvl <= 5; lvl++) {
      let r = R * lvl / 5, x = cx + cos(a) * r, y = cy + sin(a) * r;
      dotRects.push({ x: x - 8, y: y - 8, w: 16, h: 16, i: i, lvl: lvl });
    }
    noStroke(); fill('navy'); textAlign(CENTER, CENTER); textSize(9);
    let lx = cx + cos(a) * (R + 22), ly = cy + sin(a) * (R + 16);
    text(axes[i], lx - 34, ly - 8, 68, 20);
  }
  // value polygon
  fill(100, 149, 237, 90); stroke('royalblue'); strokeWeight(2);
  beginShape();
  for (let i = 0; i < 6; i++) { let a = -HALF_PI + i * TWO_PI / 6; let r = R * vals[i] / 5; vertex(cx + cos(a) * r, cy + sin(a) * r); }
  endShape(CLOSE);
  // value dots
  for (let i = 0; i < 6; i++) { let a = -HALF_PI + i * TWO_PI / 6; let r = R * vals[i] / 5; fill('royalblue'); noStroke(); circle(cx + cos(a) * r, cy + sin(a) * r, 8); }
  cursor(overDot() ? HAND : ARROW);

  // composite score
  let avg = vals.reduce((x, y) => x + y, 0) / 6;
  let verdict = avg >= 4 ? 'Highly accessible' : (avg >= 2.5 ? 'Moderately accessible' : 'Low accessibility');
  noStroke(); fill(avg >= 4 ? 'seagreen' : (avg >= 2.5 ? 'darkgoldenrod' : 'indianred'));
  textAlign(CENTER, TOP); textSize(14);
  text('Overall: ' + avg.toFixed(1) + '/5 — ' + verdict, canvasWidth / 2, 78);
  fill('dimgray'); textSize(10); text('Click a ring on each axis to rate 1-5.', canvasWidth / 2, 98);
}

function overDot() { for (let d of dotRects) if (pointInRect(mouseX, mouseY, d)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  // pick the nearest dot on the clicked axis
  let best = null, bd = 20;
  for (let d of dotRects) { let cx2 = d.x + 8, cy2 = d.y + 8; let dd = dist(mouseX, mouseY, cx2, cy2); if (dd < bd) { bd = dd; best = d; } }
  if (best) vals[best.i] = best.lvl;
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
