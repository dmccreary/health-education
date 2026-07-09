// Boundary and Consent Scenario Evaluator
// CANVAS_HEIGHT: 532
// Grade 9-12, Evaluate (L5): judge realistic boundary/consent scenarios on clarity, power
// balance, and whether consent was treated as ongoing, then compare to an expert analysis.
// Tone is plainly sincere; consent is modeled as ongoing and able to be withdrawn.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 62;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

const SCENARIOS = [
  {
    title: 'Peer pressure at a party (in person)',
    lines: [
      'Sam: "Come on, everyone is heading upstairs. Don’t make it weird."',
      'Alex: "I said I’m good here."',
      'Sam: "You’re seriously going to embarrass me?"'
    ],
    exp: {
      clarity: 'Alex is clear ("I said I’m good here"), but Sam ignores it. One person being clear doesn’t settle things if the other won’t accept the answer.',
      power: 'Sam uses social pressure and guilt ("embarrass me") to tilt the balance. Pressuring someone past a "no" is coercion, not a fair request.',
      consent: 'Consent is being assumed and pushed, not checked. A repeated "no" should end the request immediately.'
    }
  },
  {
    title: 'A text exchange with an ambiguous reply',
    lines: [
      'Jordan (text): "Send me a pic, everyone does it."',
      'Riley (text): "sure i guess"',
      'Jordan (text): "knew you would"'
    ],
    exp: {
      clarity: '"sure i guess" is hesitant and ambiguous, not a clear yes. Reluctance is a signal to pause, not to proceed.',
      power: '"everyone does it" frames refusal as abnormal. That pressure makes a genuinely free choice harder.',
      consent: 'Consent was assumed from a reluctant reply. Real consent is freely and clearly given — and images carry lasting risks that make a careful pause even more important.'
    }
  },
  {
    title: 'A coach and athlete (power difference)',
    lines: [
      'Coach: "I can get you more playing time. Let’s grab dinner, just us — don’t mention it."',
      'Athlete: "Um... I have practice stuff to do."'
    ],
    exp: {
      clarity: 'The athlete’s reply is hesitant and indirect — understandable given the pressure. The request itself is not appropriate.',
      power: 'A coach controls playing time, a large power imbalance. Asking for secrecy ("don’t mention it") is a serious warning sign.',
      consent: 'An adult in a position of authority cannot seek this; consent cannot be freely given across that power gap. The right step is to tell a trusted adult.'
    }
  },
  {
    title: 'A couple renegotiating a boundary',
    lines: [
      'Taylor: "Last week I was okay with that, but today I’m not. Can we slow down?"',
      'Casey: "Of course. Thanks for telling me — we go at your pace."'
    ],
    exp: {
      clarity: 'Taylor states the change clearly and Casey confirms understanding. Communication is clear on both sides.',
      power: 'Both partners speak freely and neither pressures the other. The power balance here is healthy.',
      consent: 'This models consent as ongoing: an earlier "yes" can become "no," and Casey checks and respects it. This is what good consent looks like.'
    }
  }
];

const SCALES = [
  { key: 'clarity', label: 'Clarity', lo: 'unclear', hi: 'clear' },
  { key: 'power',   label: 'Power balance', lo: 'imbalanced', hi: 'balanced' },
  { key: 'consent', label: 'Consent handling', lo: 'assumed', hi: 'checked' }
];

let scenarioSelect, submitButton, compareButton, resetButton;
let sliders = [];
let idx = 0, submitted = false, compared = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  scenarioSelect = createSelect();
  SCENARIOS.forEach((s, i) => scenarioSelect.option((i + 1) + '. ' + s.title, i));
  scenarioSelect.changed(() => { idx = int(scenarioSelect.value()); resetEval(); });

  for (let i = 0; i < 3; i++) sliders.push(createSlider(1, 5, 3, 1));

  submitButton = createButton('Submit evaluation');
  submitButton.mousePressed(() => { submitted = true; });
  compareButton = createButton('Compare to expert analysis');
  compareButton.mousePressed(() => { if (submitted) compared = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetEval);

  positionControls();
  describe('An evaluation activity: read a boundary/consent scenario, rate it on clarity, power ' +
    'balance, and consent handling with three sliders, then compare your ratings to an expert analysis.', LABEL);
}

function rightX() { return canvasWidth * 0.56; }

function positionControls() {
  const rx = rightX(), rw = canvasWidth - rx - margin;
  for (let i = 0; i < 3; i++) {
    sliders[i].position(rx, 118 + i * 78);
    sliders[i].style('width', rw + 'px');
  }
  scenarioSelect.position(margin, drawHeight + 16);
  scenarioSelect.style('width', (canvasWidth * 0.44) + 'px');
  submitButton.position(canvasWidth * 0.44 + 24, drawHeight + 16);
  compareButton.position(canvasWidth * 0.44 + 170, drawHeight + 16);
  resetButton.position(canvasWidth * 0.44 + 24, drawHeight + 40);
}

function resetEval() { submitted = false; compared = false; for (const s of sliders) s.value(3); }

function draw() {
  updateCanvasSize();
  if (width !== canvasWidth) resizeCanvas(canvasWidth, canvasHeight);
  positionControls();

  background('white');
  noStroke();
  fill('aliceblue'); rect(0, 0, canvasWidth, drawHeight);
  fill('#f8fafc'); rect(0, drawHeight, canvasWidth, controlHeight);
  stroke('silver'); strokeWeight(1); noFill(); rect(0.5, 0.5, canvasWidth - 1, drawHeight - 1);

  const sc = SCENARIOS[idx];
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(15);
  text('Evaluate: ' + sc.title, margin, 10, canvasWidth - margin * 2, 22);

  // Left: scenario dialogue
  const lx = margin, lw = canvasWidth * 0.5 - margin;
  fill('#eef4fb'); stroke('#c9d8ea'); strokeWeight(1); rect(lx, 40, lw, 150, 6);
  noStroke(); fill('#0f2a4a'); textAlign(LEFT, TOP); textSize(12.5); textLeading(18);
  let ty = 50;
  for (const line of sc.lines) { text(line, lx + 8, ty, lw - 16, 60); ty += 18 * Math.ceil(textWidth(line) / (lw - 16)) + 14; }

  // Left-bottom: expert rationale after compare
  fill('#334155'); textAlign(LEFT, TOP); textSize(12);
  if (compared) {
    fill('#14532d'); textSize(12.5); text('Expert analysis:', lx, 200);
    let ry = 220;
    for (const s of SCALES) {
      fill('navy'); textSize(11.5); text(s.label + ':', lx, ry);
      fill('#334155'); textSize(11); textLeading(15);
      text(sc.exp[s.key], lx, ry + 15, lw, 60);
      ry += 15 + 15 * Math.ceil(textWidth(sc.exp[s.key]) / lw) + 8;
    }
  } else {
    fill('#64748b'); textSize(11.5); textLeading(16);
    text('Read the exchange. Move each slider to your judgment, press "Submit evaluation," then "Compare to expert analysis" to see the reasoning.',
      lx, 200, lw, 90);
  }

  // Right: three scales
  const rx = rightX(), rw = canvasWidth - rx - margin;
  fill('#334155'); textAlign(LEFT, TOP); textSize(12);
  text('Your evaluation', rx, 40);
  for (let i = 0; i < 3; i++) {
    const s = SCALES[i], y = 74 + i * 78;
    fill('navy'); textSize(12); textAlign(LEFT, TOP); text(s.label, rx, y);
    fill('#64748b'); textSize(10.5); textAlign(LEFT, TOP); text(s.lo, rx, y + 40);
    textAlign(RIGHT, TOP); text(s.hi, rx + rw, y + 40);
    // slider drawn by DOM at y+... (positioned in positionControls)
    fill('#0f2a4a'); textAlign(RIGHT, TOP); textSize(11); text(sliders[i].value() + ' / 5', rx + rw, y);
  }
  if (submitted && !compared) { fill('#3aa564'); textAlign(LEFT, TOP); textSize(11); text('Ratings recorded. Now compare to the expert analysis.', rx, 74 + 3 * 78 - 6, rw, 30); }

  // control labels
  noStroke(); fill('#334155'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Scenario:', margin, drawHeight + 14);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
