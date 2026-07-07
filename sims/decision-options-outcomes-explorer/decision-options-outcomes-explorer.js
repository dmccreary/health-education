// Decision Options and Outcomes Explorer - MicroSim (options with outcomes)
// CANVAS_HEIGHT: 502
// Grade 2, Understand (L2): students describe two or more options for a health decision
// and the likely outcome of each. Every outcome is calm and non-judgmental.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let scenarioSelect;
let compareButton;
let resetButton;

let scenarios = [
  { s: 'You are offered a sugary drink at a party.',
    opts: [
      { label: 'Drink it', out: 'Tastes exciting now, but a lot of sugar can lead to a stomachache or low energy later.' },
      { label: 'Ask for water instead', out: 'Less exciting in the moment, but your body feels steady afterward.' },
      { label: 'Have a little of both', out: 'A small taste plus water — you enjoy some and still stay hydrated.' }
    ] },
  { s: 'A friend wants you to skip washing hands before snack.',
    opts: [
      { label: 'Skip washing', out: 'Faster to your snack, but germs on your hands can make you sick.' },
      { label: 'Wash your hands', out: 'Takes a minute, and it washes away germs so you stay healthy.' },
      { label: 'Use hand sanitizer', out: 'Quick and helpful when there is no sink nearby.' }
    ] },
  { s: 'You are choosing how to spend recess time.',
    opts: [
      { label: 'Run and play', out: 'Lots of energy and fun; your body loves to move.' },
      { label: 'Sit and rest', out: 'Calm and quiet; good if you feel tired.' },
      { label: 'A mix of both', out: 'Some active play and some rest — a nice balance.' }
    ] }
];

let sIndex = 0;
let revealed = [];       // which options' outcomes are shown
let compareAll = false;
let lastShown = -1;
let showRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  scenarioSelect = createSelect();
  scenarioSelect.parent(document.querySelector('main'));
  for (let i = 0; i < scenarios.length; i++) scenarioSelect.option('Scenario ' + (i + 1), i);
  scenarioSelect.changed(onSelect);
  compareButton = createButton('Compare All Outcomes');
  compareButton.mousePressed(() => { compareAll = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  reset();
  describe('A health scenario chosen from a dropdown, with two or three option cards each ' +
    'having a Show Outcome button. Clicking reveals a calm, non-judgmental outcome; Compare ' +
    'All Outcomes shows them together.', LABEL);
}

function positionControls() {
  scenarioSelect.position(10, drawHeight + 14);
  scenarioSelect.size(120);
  compareButton.position(140, drawHeight + 14);
  resetButton.position(canvasWidth - 60, drawHeight + 14);
}

function onSelect() { sIndex = int(scenarioSelect.value()); reset(); }

function reset() {
  revealed = new Array(scenarios[sIndex].opts.length).fill(false);
  compareAll = false; lastShown = -1;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(19);
  text('Options and Outcomes', canvasWidth / 2, 8);

  let sc = scenarios[sIndex];
  // scenario
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 50, 8);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(15);
  text(sc.s, margin + 10, 65, canvasWidth - margin * 2 - 20, 44);

  // option cards
  showRects = [];
  let n = sc.opts.length;
  let gap = 10;
  let cw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let cy = 100, ch = 120;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (cw + gap);
    fill('white'); stroke('cadetblue'); strokeWeight(1.5); rect(x, cy, cw, ch, 8);
    noStroke(); fill('teal'); textAlign(CENTER, TOP); textSize(13);
    text(sc.opts[i].label, x + 4, cy + 8, cw - 8, 40);
    // Show Outcome button (drawn)
    let bw = cw - 16, bh = 26, bx = x + 8, by = cy + ch - 34;
    showRects.push({ x: bx, y: by, w: bw, h: bh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: bx, y: by, w: bw, h: bh });
    stroke('mediumpurple'); strokeWeight(1.5);
    fill(revealed[i] ? 'lavender' : (hover ? 'floralwhite' : 'white'));
    rect(bx, by, bw, bh, 6);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(11);
    text(revealed[i] ? 'Outcome shown' : 'Show Outcome', bx, by, bw, bh);
  }
  cursor(overAny() ? HAND : ARROW);

  // outcome panel
  let py = 232, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (compareAll) {
    let y = py + 8;
    for (let i = 0; i < n; i++) {
      fill('teal'); text(sc.opts[i].label + ':', margin + 10, y, canvasWidth - margin * 2 - 20, 16);
      fill('black'); text(sc.opts[i].out, margin + 10, y + 16, canvasWidth - margin * 2 - 20, 40);
      y += 58;
    }
  } else if (lastShown >= 0) {
    fill('teal'); text(sc.opts[lastShown].label + ':', margin + 10, py + 10);
    fill('black'); text(sc.opts[lastShown].out, margin + 10, py + 30, canvasWidth - margin * 2 - 20, ph - 40);
  } else {
    fill('dimgray'); text('Click "Show Outcome" under an option to see what could happen.', margin + 10, py + 12, canvasWidth - margin * 2 - 20, 40);
  }
}

function overAny() { for (let r of showRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of showRects) if (pointInRect(mouseX, mouseY, r)) { revealed[r.i] = true; lastShown = r.i; compareAll = false; return; }
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
