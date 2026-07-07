// Personal Health Behavior Self-Assessment Wheel - MicroSim (sliders drive a radar wheel)
// CANVAS_HEIGHT: 570
// Grade 6-8, Analyze (L4): students privately rate six health areas 1-5 with sliders;
// the wheel fills to show a personal "shape" that highlights the lowest area, then they
// click the lowest spoke to reflect on one small, realistic step. Private and ungraded.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 340;
let controlHeight = 230;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;
let sliderLeftMargin = 132;

// Six health areas (short label for slider, full label for wheel tips)
let areas = [
  { key: 'Nutrition',     full: 'Nutrition' },
  { key: 'Sleep',         full: 'Sleep' },
  { key: 'Activity',      full: 'Physical Activity' },
  { key: 'Mind',          full: 'Mental / Emotional Health' },
  { key: 'Relationships', full: 'Relationships' },
  { key: 'Pressure',      full: 'Handling Substance Pressure' }
];

// A realistic, small-step example for each area (shown in the reflection panel)
let stepIdeas = {
  'Nutrition':     'add one fruit or vegetable to a meal tomorrow',
  'Sleep':         'set a phone-off time 15 minutes earlier tonight',
  'Activity':      'take a 10-minute walk after school',
  'Mind':          'name one feeling and one calming activity to try',
  'Relationships': 'check in with one friend or family member this week',
  'Pressure':      'plan one thing to say if someone offers you a vape'
};

let sliders = [];
let reflectInput;     // native text input for the private reflection
let saveButton;
let resetButton;

let selectedArea = -1;    // index the learner is reflecting on (-1 = none)
let savedNote = '';       // last saved reflection text (from localStorage)
let statusMsg = '';       // brief confirmation shown after saving
let statusTimer = 0;

// Wheel geometry, recomputed each frame for hit-testing
let wheelCX, wheelCY, wheelR;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  for (let i = 0; i < areas.length; i++) {
    let s = createSlider(1, 5, 3, 1);
    s.parent(document.querySelector('main'));
    sliders.push(s);
  }

  reflectInput = createInput('');
  reflectInput.parent(document.querySelector('main'));
  reflectInput.attribute('placeholder', 'Click your lowest spoke, then type one small step here');

  saveButton = createButton('Save My Reflection');
  saveButton.parent(document.querySelector('main'));
  saveButton.mousePressed(saveReflection);

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetAll);

  loadSaved();
  layoutControls();

  describe('A private, ungraded self-assessment wheel. Six sliders rate Nutrition, Sleep, ' +
    'Physical Activity, Mental and Emotional Health, Relationships, and Handling Substance ' +
    'Pressure from 1 (needs attention) to 5 (going well). A six-spoke radar wheel fills to ' +
    'show the personal shape and marks the lowest-rated area. Clicking the lowest spoke opens ' +
    'a reflection box to note one small realistic step, saved only in this browser.', LABEL);
}

function layoutControls() {
  let rowH = 26;
  let top = drawHeight + 8;
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].position(sliderLeftMargin, top + i * rowH + 2);
  }
  resizeSliders();
  // Input + buttons below the six slider rows
  let belowY = top + sliders.length * rowH + 6;
  reflectInput.position(margin, belowY);
  reflectInput.size(canvasWidth - 2 * margin - 8);
  saveButton.position(margin, belowY + 30);
  resetButton.position(margin + 168, belowY + 30);
}

function resizeSliders() {
  let w = canvasWidth - sliderLeftMargin - margin;
  for (let s of sliders) s.size(w);
}

// Index of the lowest-rated area (first one if tied)
function lowestIndex() {
  let lo = 0;
  for (let i = 1; i < sliders.length; i++) {
    if (sliders[i].value() < sliders[lo].value()) lo = i;
  }
  return lo;
}

function draw() {
  updateCanvasSize();

  // Regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(20);
  text('My Health Self-Check Wheel', canvasWidth / 2, 8);

  // Privacy note
  fill('seagreen');
  textSize(12);
  textAlign(CENTER, TOP);
  text('Private and ungraded — only you see this. Be honest with yourself.', canvasWidth / 2, 32);

  drawWheel();
  drawReflectionPanel();
  drawControlLabels();

  // Control-strip status message (after saving)
  if (statusTimer > 0) statusTimer--;
}

// Labels for the six sliders (left of each slider) plus the current value on the right edge
function drawControlLabels() {
  let lo = lowestIndex();
  let rowH = 26;
  let top = drawHeight + 8;
  textSize(13);
  for (let i = 0; i < sliders.length; i++) {
    let cy = top + i * rowH + 13;
    noStroke();
    fill(i === lo ? 'indianred' : 'black');
    textAlign(LEFT, CENTER);
    text(areas[i].key + ': ' + sliders[i].value(), margin, cy);
  }

  // Save confirmation (to the right of the buttons, on the button row)
  if (statusTimer > 0 && statusMsg && canvasWidth > 420) {
    let belowY = top + sliders.length * rowH + 6;
    noStroke();
    fill('seagreen');
    textAlign(LEFT, CENTER);
    textSize(11);
    text(statusMsg, margin + 238, belowY + 30 + 13);
  }
}

function drawWheel() {
  let lo = lowestIndex();

  // Center the wheel in the left portion; leave room for a reflection panel on the right
  let panelW = min(200, canvasWidth * 0.40);
  let wheelAreaW = canvasWidth - panelW - margin;
  wheelCX = margin + wheelAreaW / 2;
  wheelCY = 52 + (drawHeight - 52) / 2;
  wheelR = min(wheelAreaW, drawHeight - 60) / 2 - 34; // leave room for labels
  wheelR = max(wheelR, 40);

  let n = areas.length;
  let angleFor = (i) => -HALF_PI + i * TWO_PI / n; // start at top, clockwise

  // Concentric rings for levels 1..5
  stroke('lightsteelblue');
  strokeWeight(1);
  noFill();
  for (let lvl = 1; lvl <= 5; lvl++) {
    let rr = wheelR * (lvl / 5);
    beginShape();
    for (let i = 0; i < n; i++) {
      let a = angleFor(i);
      vertex(wheelCX + rr * cos(a), wheelCY + rr * sin(a));
    }
    endShape(CLOSE);
  }

  // Spokes
  stroke('lightsteelblue');
  for (let i = 0; i < n; i++) {
    let a = angleFor(i);
    line(wheelCX, wheelCY, wheelCX + wheelR * cos(a), wheelCY + wheelR * sin(a));
  }

  // Filled personal shape
  noStroke();
  fill(70, 130, 180, 70); // steelblue, translucent
  stroke('steelblue');
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < n; i++) {
    let a = angleFor(i);
    let rr = wheelR * (sliders[i].value() / 5);
    vertex(wheelCX + rr * cos(a), wheelCY + rr * sin(a));
  }
  endShape(CLOSE);

  // Value dots; highlight the lowest area
  for (let i = 0; i < n; i++) {
    let a = angleFor(i);
    let rr = wheelR * (sliders[i].value() / 5);
    let px = wheelCX + rr * cos(a);
    let py = wheelCY + rr * sin(a);
    let isLow = (i === lo);
    let isSel = (i === selectedArea);
    noStroke();
    fill(isLow ? 'indianred' : 'steelblue');
    circle(px, py, isLow ? 13 : 9);
    if (isSel) {
      noFill();
      stroke('goldenrod');
      strokeWeight(3);
      circle(px, py, 20);
    }
  }

  // Spoke labels just outside the wheel
  noStroke();
  textSize(12);
  for (let i = 0; i < n; i++) {
    let a = angleFor(i);
    let lx = wheelCX + (wheelR + 16) * cos(a);
    let ly = wheelCY + (wheelR + 16) * sin(a);
    let isLow = (i === lo);
    fill(isLow ? 'indianred' : 'navy');
    // Align label away from center so it doesn't overlap the wheel
    let ca = cos(a), sa = sin(a);
    let hAlign = ca > 0.3 ? LEFT : (ca < -0.3 ? RIGHT : CENTER);
    let vAlign = sa > 0.3 ? TOP : (sa < -0.3 ? BOTTOM : CENTER);
    textAlign(hAlign, vAlign);
    text(areas[i].key, lx, ly);
  }

  // Lowest-area cue under the wheel
  noStroke();
  fill('indianred');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Lowest area: ' + areas[lo].full + ' (' + sliders[lo].value() + '/5)',
    wheelCX, wheelCY + wheelR + 30);
}

function drawReflectionPanel() {
  let panelW = min(200, canvasWidth * 0.40);
  let px = canvasWidth - panelW - margin + 4;
  let py = 52;
  let pw = panelW - 8;
  let ph = drawHeight - py - 14;

  stroke('goldenrod');
  strokeWeight(1.5);
  fill('cornsilk');
  rect(px, py, pw, ph, 10);
  noStroke();

  fill('saddlebrown');
  textAlign(LEFT, TOP);
  textSize(14);
  text('My Reflection', px + 10, py + 8);

  fill('black');
  textSize(12);
  let bodyY = py + 30;
  if (selectedArea < 0) {
    text('Move the sliders to match your honest, current habits. ' +
      'Then click the red dot on your lowest spoke to think about one small step.',
      px + 10, bodyY, pw - 20, ph - 40);
  } else {
    let a = areas[selectedArea];
    text('Focus area:\n' + a.full, px + 10, bodyY, pw - 20, 44);
    fill('seagreen');
    let stepY = bodyY + 48;
    text('A small step could be to ' + stepIdeas[a.key] + '.',
      px + 10, stepY, pw - 20, (py + ph - 44) - stepY);
  }

  // Saved note echo, if any
  if (savedNote) {
    fill('gray');
    textSize(11);
    textAlign(LEFT, BOTTOM);
    text('Saved: "' + savedNote + '"', px + 10, py + ph - 8, pw - 20, 40);
  }
}

function mousePressed() {
  // Only the wheel dots are clickable in the drawing region.
  if (mouseY > drawHeight) return;
  let n = areas.length;
  let angleFor = (i) => -HALF_PI + i * TWO_PI / n;
  for (let i = 0; i < n; i++) {
    let a = angleFor(i);
    let rr = wheelR * (sliders[i].value() / 5);
    let px = wheelCX + rr * cos(a);
    let py = wheelCY + rr * sin(a);
    if (dist(mouseX, mouseY, px, py) <= 14) {
      selectedArea = i;
      return;
    }
  }
}

function saveReflection() {
  let note = reflectInput.value().trim();
  // If nothing selected yet, default the focus to the lowest area for a sensible save.
  if (selectedArea < 0) selectedArea = lowestIndex();
  savedNote = note;
  try {
    let payload = {
      ratings: sliders.map(s => s.value()),
      focusArea: areas[selectedArea].key,
      note: note
    };
    localStorage.setItem('phb_self_assessment_wheel', JSON.stringify(payload));
    statusMsg = note ? 'Saved privately in this browser.' : 'Saved (add a note next time).';
  } catch (e) {
    statusMsg = 'Could not save in this browser.';
  }
  statusTimer = 180;
}

function loadSaved() {
  try {
    let raw = localStorage.getItem('phb_self_assessment_wheel');
    if (!raw) return;
    let data = JSON.parse(raw);
    if (Array.isArray(data.ratings)) {
      for (let i = 0; i < sliders.length && i < data.ratings.length; i++) {
        sliders[i].value(data.ratings[i]);
      }
    }
    if (typeof data.note === 'string') {
      savedNote = data.note;
      reflectInput.value(data.note);
    }
    if (data.focusArea) {
      let idx = areas.findIndex(a => a.key === data.focusArea);
      if (idx >= 0) selectedArea = idx;
    }
  } catch (e) {
    // ignore corrupt storage
  }
}

function resetAll() {
  for (let s of sliders) s.value(3);
  selectedArea = -1;
  savedNote = '';
  statusMsg = '';
  statusTimer = 0;
  reflectInput.value('');
  try { localStorage.removeItem('phb_self_assessment_wheel'); } catch (e) {}
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  layoutControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
