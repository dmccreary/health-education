// Stress Response and Recovery Cycle - MicroSim
// CANVAS_HEIGHT: 485
// Grade 6-8, Apply (L3): pick a restorative practice for a stress scenario and
// watch a simplified stress-level gauge step down while a caption names what is
// happening in the body, ending with why that practice helped.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;
let newScenarioButton;

// Five restorative practices. drop = points removed from the gauge.
// steps = the labeled body captions shown one at a time as the gauge falls.
let practices = [
  {
    name: 'Deep Breathing',
    icon: '🫁',
    color: 'steelblue',
    soft: 'lightcyan',
    drop: 18,
    steps: ['Breathing slows down', 'Heart rate is easing', 'Muscles start to relax'],
    why: 'Slow, deep breaths tell your body it is safe, so the stress response calms down.'
  },
  {
    name: 'Take a Walk',
    icon: '🚶',
    color: 'seagreen',
    soft: 'honeydew',
    drop: 15,
    steps: ['Moving your body', 'Muscles loosen up', 'Mind clears a little'],
    why: 'Gentle movement burns off stress energy and helps your mind settle.'
  },
  {
    name: 'Journaling',
    icon: '📓',
    color: 'mediumpurple',
    soft: 'lavender',
    drop: 12,
    steps: ['Naming the feeling', 'Sorting your thoughts', 'Worry feels smaller'],
    why: 'Writing feelings down helps you understand them so they feel less overwhelming.'
  },
  {
    name: 'Talk to Someone',
    icon: '💬',
    color: 'goldenrod',
    soft: 'lightyellow',
    drop: 16,
    steps: ['Sharing out loud', 'Feeling understood', 'Not alone with it'],
    why: 'Telling a trusted person means you do not carry the stress by yourself.'
  },
  {
    name: 'Consistent Sleep',
    icon: '🌙',
    color: 'navy',
    soft: 'aliceblue',
    drop: 14,
    steps: ['Resting your body', 'Recharging energy', 'Ready for tomorrow'],
    why: 'Good sleep lets your brain and body recover so stress is easier to handle.'
  }
];

// Everyday, grade-appropriate stress scenarios (start gauge at 75).
let scenarios = [
  'You have a big test tomorrow and you feel behind on studying.',
  'You had an argument with a good friend and feel upset.',
  'You have to give a presentation in front of the whole class.',
  'Your schedule is packed and it feels like too much to handle.',
  'You made a mistake on the team and you feel embarrassed.'
];

const START_STRESS = 75;

let scenarioIdx = 0;
let stress = START_STRESS;      // displayed gauge value
let targetStress = START_STRESS; // where the gauge is heading
let chosen = -1;                // index of chosen practice (-1 = none yet)
let stage = 0;                  // 0 pick, 1 animating, 2 done
let stepIdx = 0;                // which body-caption step is active
let animFrame = 0;              // frame counter within the current step

let chipRects = [];             // clickable practice chips

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetScenario);
  resetButton.parent(document.querySelector('main'));

  newScenarioButton = createButton('New Scenario ▶');
  newScenarioButton.mousePressed(newScenario);
  newScenarioButton.parent(document.querySelector('main'));

  positionControls();
  describe('A stress-level gauge starts high for an everyday scenario. Tap one of ' +
    'five restorative practices — deep breathing, a walk, journaling, talking to ' +
    'someone, or consistent sleep — and the gauge steps down while a caption names ' +
    'what is happening in the body, then explains why that practice helped.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 12);
  newScenarioButton.position(canvasWidth - 150, drawHeight + 12);
}

function draw() {
  updateCanvasSize();

  // background regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Stress Response & Recovery', canvasWidth / 2, 8);

  // scenario card
  drawScenarioCard();

  // gauge on the left, practice chips on the right
  drawGauge();
  layoutChips();
  drawChips();

  // caption / explanation panel below the gauge
  drawCaptionPanel();

  // advance the stepped animation
  updateAnimation();

  // control-strip status line
  drawControlStrip();

  cursor(overAnyChip() && stage === 0 ? HAND : ARROW);
}

// ---------- scenario card ----------
function drawScenarioCard() {
  let cx = margin;
  let cy = 40;
  let cw = canvasWidth - 2 * margin;
  let ch = 58;
  noStroke();
  fill('lavender');
  rect(cx, cy, cw, ch, 8);
  noStroke();
  fill('indigo');
  textAlign(LEFT, TOP);
  textSize(11);
  text('SCENARIO', cx + 10, cy + 7);
  fill('black');
  textAlign(LEFT, TOP);
  textSize(14);
  text(scenarios[scenarioIdx], cx + 10, cy + 22, cw - 20, ch - 26);
}

// ---------- stress gauge (vertical bar) ----------
function drawGauge() {
  // gauge column geometry
  let gx = margin + 14;
  let gTop = 118;
  let gBottom = 358;
  let gw = 44;
  let gh = gBottom - gTop;

  // label above
  noStroke();
  fill('navy');
  textAlign(CENTER, BOTTOM);
  textSize(13);
  text('Stress Level', gx + gw / 2, gTop - 6);

  // track
  stroke('silver');
  strokeWeight(1.5);
  fill('white');
  rect(gx, gTop, gw, gh, 8);

  // fill height based on stress (0-100)
  let frac = constrain(stress, 0, 100) / 100;
  let fillH = gh * frac;
  let fy = gBottom - fillH;

  // color: high stress = indianred, low = seagreen (blend by frac)
  let barCol;
  if (stress >= 60) barCol = color('indianred');
  else if (stress >= 35) barCol = color('goldenrod');
  else barCol = color('seagreen');
  noStroke();
  fill(barCol);
  rect(gx, fy, gw, fillH, 8);

  // tick labels 0 / 50 / 100
  noStroke();
  fill('gray');
  textAlign(LEFT, CENTER);
  textSize(10);
  text('100', gx + gw + 6, gTop);
  text('50', gx + gw + 6, (gTop + gBottom) / 2);
  text('0', gx + gw + 6, gBottom);

  // numeric readout
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text(round(stress), gx + gw / 2, gBottom + 8);
  fill('dimgray');
  textSize(11);
  text('out of 100', gx + gw / 2, gBottom + 32);
}

// ---------- practice chips (clickable content region) ----------
function layoutChips() {
  chipRects = [];
  // chips fill the right side, starting after the gauge readout column
  let colX = margin + 120;
  let cw = canvasWidth - colX - margin;
  cw = Math.max(cw, 150);
  let top = 118;
  let gap = 8;
  let n = practices.length;
  let ch = 42;
  for (let i = 0; i < n; i++) {
    let y = top + i * (ch + gap);
    chipRects.push({ x: colX, y: y, w: cw, h: ch, i: i });
  }
}

function drawChips() {
  noStroke();
  fill('navy');
  textAlign(LEFT, BOTTOM);
  textSize(12);
  text('Choose a practice:', chipRects[0].x, chipRects[0].y - 5);

  for (let c of chipRects) {
    let i = c.i;
    let p = practices[i];
    let hover = pointInRect(mouseX, mouseY, c);
    let isChosen = (i === chosen);

    // fill + border
    if (isChosen) fill(p.soft);
    else if (hover && stage === 0) fill(p.soft);
    else fill('white');
    stroke(p.color);
    strokeWeight(isChosen ? 4 : 2);
    rect(c.x, c.y, c.w, c.h, 10);

    // icon chip
    noStroke();
    fill(p.color);
    circle(c.x + 22, c.y + c.h / 2, 30);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(15);
    text(p.icon, c.x + 22, c.y + c.h / 2 - 1);

    // name (single short line — point-style, vertically centered with icon)
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(14);
    text(p.name, c.x + 44, c.y + c.h / 2);
  }
}

// ---------- caption / explanation panel ----------
function drawCaptionPanel() {
  let px = margin;
  let py = 372;
  let pw = canvasWidth - 2 * margin;
  let ph = 46;

  if (stage === 0) {
    noStroke();
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(14);
    text('Pick a practice above to help lower the stress level.',
      px, py, pw, ph);
    return;
  }

  let p = practices[chosen];

  // panel background
  noStroke();
  fill(p.soft);
  rect(px, py, pw, ph, 8);

  if (stage === 1) {
    // active body caption
    noStroke();
    fill(p.color);
    textAlign(CENTER, CENTER);
    textSize(16);
    let cap = p.steps[Math.min(stepIdx, p.steps.length - 1)];
    text(cap + ' …', px + 8, py, pw - 16, ph);
  } else {
    // final explanation (stage 2)
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(13);
    text(p.why, px + 8, py, pw - 16, ph);
  }
}

// ---------- stepped animation engine ----------
function updateAnimation() {
  if (stage !== 1) return;

  let p = practices[chosen];
  let nSteps = p.steps.length;
  let perStep = p.drop / nSteps;          // points removed per step
  let framesPerStep = 26;                 // step-through pacing

  animFrame++;

  // ease the displayed value toward the target for this step
  let stepTarget = START_STRESS - perStep * (stepIdx + 1);
  stress += (stepTarget - stress) * 0.18;

  if (animFrame >= framesPerStep) {
    animFrame = 0;
    stepIdx++;
    if (stepIdx >= nSteps) {
      // finished all steps: snap to final target, go to done stage
      targetStress = START_STRESS - p.drop;
      stress = targetStress;
      stage = 2;
    }
  }
}

// ---------- control strip ----------
function drawControlStrip() {
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13);
  let msg;
  if (stage === 0) {
    fill('dimgray');
    msg = 'Tap a practice to begin';
  } else if (stage === 1) {
    fill('goldenrod');
    msg = practices[chosen].name + ' — working …';
  } else {
    fill('seagreen');
    let dropped = round(START_STRESS - stress);
    msg = practices[chosen].name + ' lowered stress by ' + dropped + ' points';
  }
  text(msg, canvasWidth / 2, drawHeight + controlHeight / 2);
}

// ---------- hit testing ----------
function overAnyChip() {
  for (let c of chipRects) if (pointInRect(mouseX, mouseY, c)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (stage !== 0) return;          // only choose while in the pick stage
  for (let c of chipRects) {
    if (pointInRect(mouseX, mouseY, c)) {
      chosen = c.i;
      stage = 1;
      stepIdx = 0;
      animFrame = 0;
      targetStress = START_STRESS - practices[chosen].drop;
      return;
    }
  }
}

// ---------- navigation ----------
function newScenario() {
  scenarioIdx = (scenarioIdx + 1) % scenarios.length;
  resetScenario();
}

function resetScenario() {
  stress = START_STRESS;
  targetStress = START_STRESS;
  chosen = -1;
  stage = 0;
  stepIdx = 0;
  animFrame = 0;
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
