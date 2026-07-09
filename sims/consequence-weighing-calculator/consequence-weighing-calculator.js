// Consequence Weighing Calculator
// CANVAS_HEIGHT: 500
// Grade 9-12, Apply (L3): rank decision options by combining likelihood x severity into a
// risk score, and see how the "safest" option shifts as your own estimates change.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

// Preloaded plausible starting values (likelihood of a bad outcome 1-5, severity 1-5).
const scenarios = {
  'Getting a ride home after a party': [
    { name: 'Ride with a friend who has been drinking', L: 3, S: 5 },
    { name: 'Call a parent or trusted adult for a ride', L: 1, S: 1 },
    { name: 'Ride with a sober designated driver', L: 1, S: 2 },
    { name: 'Walk home alone, late at night', L: 3, S: 3 },
    { name: 'Stay over and go home in the morning', L: 1, S: 1 }
  ],
  "Reporting a peer's substance use to an adult": [
    { name: 'Tell a trusted adult privately', L: 2, S: 2 },
    { name: 'Say nothing and hope it works out', L: 4, S: 4 },
    { name: 'Confront the peer alone', L: 3, S: 3 },
    { name: 'Ask a school counselor for advice', L: 1, S: 2 },
    { name: 'Use an anonymous school tip line', L: 2, S: 2 }
  ],
  'Attending a gathering with no adults present': [
    { name: 'Go and stay the whole night', L: 4, S: 4 },
    { name: 'Decline and suggest another plan', L: 1, S: 1 },
    { name: 'Go briefly with an exit plan + check-in', L: 2, S: 3 },
    { name: 'Go only if a trusted adult knows where you are', L: 2, S: 2 },
    { name: 'Go without telling anyone', L: 4, S: 5 }
  ]
};
const scenarioNames = Object.keys(scenarios);

let scenarioSelect, resetButton;
let current = scenarioNames[0];
let likeSliders = [], sevSliders = [];
const rowTop = 78, rowH = 66;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  scenarioSelect = createSelect();
  scenarioNames.forEach(n => scenarioSelect.option(n));
  scenarioSelect.changed(onScenarioChange);

  for (let i = 0; i < 5; i++) {
    likeSliders.push(createSlider(1, 5, scenarios[current][i].L, 1));
    sevSliders.push(createSlider(1, 5, scenarios[current][i].S, 1));
  }
  resetButton = createButton('Reset to defaults');
  resetButton.mousePressed(resetDefaults);

  positionControls();
  describe('A decision calculator: for five options set how likely a bad outcome is and how ' +
    'severe it would be; a live sorted bar list ranks options from lowest to highest risk score.', LABEL);
}

function leftW() { return canvasWidth * 0.55; }

function positionControls() {
  const halfW = (leftW() - margin * 2) * 0.44;
  for (let i = 0; i < 5; i++) {
    const y = rowTop + i * rowH;
    likeSliders[i].position(margin + 4, y + 22);
    likeSliders[i].style('width', halfW + 'px');
    sevSliders[i].position(margin + 4 + (leftW() - margin * 2) * 0.5, y + 22);
    sevSliders[i].style('width', halfW + 'px');
  }
  scenarioSelect.position(margin, drawHeight + 16);
  scenarioSelect.style('width', (leftW() - margin) + 'px');
  resetButton.position(leftW() + 10, drawHeight + 16);
}

function onScenarioChange() {
  current = scenarioSelect.value();
  resetDefaults();
}
function resetDefaults() {
  for (let i = 0; i < 5; i++) {
    likeSliders[i].value(scenarios[current][i].L);
    sevSliders[i].value(scenarios[current][i].S);
  }
}

function riskColor(score) {
  // 1-25: green (low) -> amber -> red (high)
  if (score <= 6) return '#3aa564';
  if (score <= 12) return '#e0a52e';
  if (score <= 18) return '#e07b2e';
  return '#d0392b';
}

function draw() {
  updateCanvasSize();
  if (width !== canvasWidth) resizeCanvas(canvasWidth, canvasHeight);
  positionControls();

  background('white');
  noStroke();
  fill('aliceblue'); rect(0, 0, canvasWidth, drawHeight);
  fill('#f8fafc'); rect(0, drawHeight, canvasWidth, controlHeight);
  stroke('silver'); strokeWeight(1); noFill(); rect(0.5, 0.5, canvasWidth - 1, drawHeight - 1);

  const opts = scenarios[current];

  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(16);
  text('Weigh the Consequences: rank your options by risk', canvasWidth / 2, 10);
  fill('dimgray'); textSize(11.5);
  text('Set how LIKELY a bad outcome is and how SEVERE it would be. Risk = likelihood x severity.', canvasWidth / 2, 32, canvasWidth - 30, 30);

  const lw = leftW();

  // Left: option rows with slider labels
  for (let i = 0; i < 5; i++) {
    const y = rowTop + i * rowH;
    const L = likeSliders[i].value(), S = sevSliders[i].value();
    noStroke(); fill('#0f2a4a'); textAlign(LEFT, TOP); textSize(12);
    text((i + 1) + '. ' + opts[i].name, margin, y, lw - margin - 6, 20);
    fill('#64748b'); textSize(10.5);
    text('Likelihood: ' + L, margin + 4, y + 40);
    text('Severity: ' + S, margin + 4 + (lw - margin * 2) * 0.5, y + 40);
    stroke('#e2e8f0'); line(margin, y + rowH - 6, lw - 6, y + rowH - 6);
  }

  // Right: live sorted risk bars (lowest -> highest)
  const rx = lw + 10, rw = canvasWidth - rx - margin;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12.5);
  text('Risk score (lowest = safest)', rx, 60);
  const scored = opts.map((o, i) => ({ name: o.name, score: likeSliders[i].value() * sevSliders[i].value() }));
  scored.sort((a, b) => a.score - b.score);
  const barTop = 84, bh = 30, gap = 12;
  for (let i = 0; i < scored.length; i++) {
    const y = barTop + i * (bh + gap);
    const s = scored[i];
    const len = map(s.score, 0, 25, 4, rw);
    fill(riskColor(s.score)); rect(rx, y, len, bh, 4);
    fill('#0f2a4a'); textAlign(LEFT, TOP); textSize(10.5);
    text(s.name, rx, y - 12, rw, 12);
    fill('white'); textAlign(LEFT, CENTER); textSize(12);
    if (len > 26) text(s.score, rx + 6, y + bh / 2);
    else { fill('#334155'); text(s.score, rx + len + 4, y + bh / 2); }
    if (i === 0) { noStroke(); fill('#3aa564'); textAlign(RIGHT, CENTER); textSize(10); text('safest', rx + rw, y - 6); }
  }

  // Control labels
  noStroke(); fill('#334155'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Scenario:', margin, drawHeight + 14);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
