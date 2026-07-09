// Goal Strategy Builder
// CANVAS_HEIGHT: 552
// Grade 9-12, Create (L6): assemble a first action, a support, a barrier plan, and a
// checkpoint schedule into one coherent personal-health-goal strategy, then generate a summary.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 472;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

const ZONES = ['First Action', 'Support Enlisted', 'Barrier + Workaround', 'Checkpoint Schedule'];

// examples[focus][zoneIndex] = array of example component strings
const EX = {
  'Sleep': [
    ['Set a fixed lights-out time of 10:30 pm', 'Put my phone to charge across the room'],
    ['Ask a parent to help protect the evening routine', 'Tell a friend so we remind each other'],
    ['If homework runs late, I finish it before school instead', 'If I am not sleepy, I read a print book, not my phone'],
    ['Check my sleep each Sunday for three weeks', 'Rate my morning energy daily for two weeks']
  ],
  'Physical activity': [
    ['Walk or bike for 20 minutes after school', 'Do a 15-minute workout video Mon/Wed/Fri'],
    ['Ask a friend to be my workout partner', 'Join a school intramural team'],
    ['If it rains, I do an indoor workout', 'If I am busy, I split it into two 10-minute sessions'],
    ['Log active minutes daily for two weeks', 'Review my step count every Friday']
  ],
  'Nutrition': [
    ['Add a fruit or vegetable to lunch each day', 'Swap one sugary drink for water daily'],
    ['Ask a family member to stock healthy snacks', 'Plan one meal a week with a sibling'],
    ['If mornings are rushed, I prep breakfast the night before', 'If snacks run out, I keep a backup like nuts'],
    ['Track water and produce daily for a week', 'Check in each Sunday on what worked']
  ],
  'Stress management': [
    ['Do five minutes of deep breathing before homework', 'Write down worries plus one next step'],
    ['Talk with a trusted adult once a week', 'Ask a friend to check in on stressful days'],
    ['If I feel overwhelmed, I take a 10-minute walk', 'If my mind races at night, I journal briefly'],
    ['Rate my stress 1-5 each evening for two weeks', 'Review my coping strategies every Friday']
  ]
};
const focusNames = Object.keys(EX);

let focusSelect, customInput, useOwnButton, generateButton, resetButton;
let focus = focusNames[0];
let target = 0;                 // selected zone index
let content = [null, null, null, null];
let showSummary = false;
let exampleRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  focusSelect = createSelect();
  focusNames.forEach(n => focusSelect.option(n));
  focusSelect.changed(() => { focus = focusSelect.value(); });

  customInput = createInput('');
  customInput.attribute('placeholder', 'or type your own, then "Use my text"');

  useOwnButton = createButton('Use my text');
  useOwnButton.mousePressed(() => {
    const v = customInput.value().trim();
    if (v) { content[target] = v; customInput.value(''); showSummary = false; }
  });
  generateButton = createButton('Generate my plan summary');
  generateButton.mousePressed(() => { if (content.every(Boolean)) showSummary = true; });
  resetButton = createButton('Start over');
  resetButton.mousePressed(() => { content = [null, null, null, null]; showSummary = false; target = 0; });

  positionControls();
  describe('A goal-strategy builder: select each of four parts of a plan (first action, support, ' +
    'barrier workaround, checkpoint) and fill it from example cards or your own text, then generate ' +
    'a written plan summary.', LABEL);
}

function positionControls() {
  focusSelect.position(margin, drawHeight + 14);
  focusSelect.style('width', (canvasWidth * 0.32) + 'px');
  customInput.position(margin, drawHeight + 46);
  customInput.style('width', (canvasWidth * 0.44) + 'px');
  useOwnButton.position(margin + canvasWidth * 0.44 + 8, drawHeight + 46);
  generateButton.position(canvasWidth * 0.36, drawHeight + 12);
  resetButton.position(canvasWidth * 0.36 + 180, drawHeight + 12);
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

  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(16);
  text('Build Your Health-Goal Strategy — Focus: ' + focus, canvasWidth / 2, 8, canvasWidth - 20, 20);

  if (showSummary) { drawSummary(); drawControlLabels(); return; }

  fill('dimgray'); textAlign(CENTER, TOP); textSize(11.5);
  text('Click a part of your plan, then choose an example on the right or type your own below.', canvasWidth / 2, 30, canvasWidth - 30, 30);

  const top = 62;
  const leftX = margin, leftW = canvasWidth * 0.46 - margin;
  const zH = (drawHeight - top - 16) / 4;

  // Left: four zones
  for (let z = 0; z < 4; z++) {
    const y = top + z * zH;
    const sel = z === target;
    stroke(sel ? 'navy' : '#94a3b8'); strokeWeight(sel ? 2.5 : 1.3);
    fill(content[z] ? '#dcfce7' : (sel ? 'lightyellow' : 'white'));
    rect(leftX, y, leftW, zH - 8, 6);
    noStroke(); fill('#0f2a4a'); textAlign(LEFT, TOP); textSize(11.5);
    text((z + 1) + '. ' + ZONES[z], leftX + 8, y + 6);
    fill(content[z] ? '#14532d' : '#94a3b8'); textSize(11);
    text(content[z] || '(click, then pick a card or type your own)', leftX + 8, y + 24, leftW - 16, zH - 30);
  }

  // Right: example cards for selected zone
  const rx = canvasWidth * 0.5, rw = canvasWidth - rx - margin;
  noStroke(); fill('#334155'); textAlign(LEFT, TOP); textSize(12);
  text('Examples for "' + ZONES[target] + '":', rx, top - 2);
  exampleRects = [];
  const cards = EX[focus][target];
  let cy = top + 20;
  for (let i = 0; i < cards.length; i++) {
    const r = { x: rx, y: cy, w: rw, h: 46, text: cards[i] };
    exampleRects.push(r);
    const hov = hit(r);
    stroke(hov ? 'navy' : '#94a3b8'); strokeWeight(hov ? 2 : 1.3); fill(hov ? 'lightyellow' : 'white');
    rect(r.x, r.y, r.w, r.h, 6);
    noStroke(); fill('#0f2a4a'); textAlign(LEFT, CENTER); textSize(11.5);
    text(cards[i], r.x + 8, r.y + r.h / 2, r.w - 16, r.h);
    cy += 54;
  }
  fill('#64748b'); textAlign(LEFT, TOP); textSize(11);
  text('Filled ' + content.filter(Boolean).length + ' of 4. When all four are filled, press "Generate my plan summary".',
    rx, cy + 4, rw, 44);
  cursor(overExample() ? HAND : ARROW);

  drawControlLabels();
}

function drawSummary() {
  const s = 'My ' + focus.toLowerCase() + ' plan: I will start by ' + lower(content[0])
    + '. To support this, ' + lower(content[1]) + '. If I hit a barrier, ' + lower(content[2])
    + '. I will track my progress by ' + lower(content[3]) + '.';
  const x = margin + 6, w = canvasWidth - margin * 2 - 12;
  fill('#eef6ff'); stroke('#4472c4'); strokeWeight(1.5); rect(x, 56, w, drawHeight - 72, 8);
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(14); text('Your plan', x + 14, 70);
  fill('#0f2a4a'); textSize(14); textLeading(21);
  text(s, x + 14, 96, w - 28, drawHeight - 130);
  fill('#64748b'); textSize(11);
  text('Press "Start over" to build a new plan, or edit a part and generate again.', x + 14, drawHeight - 34, w - 28, 24);
}

function drawControlLabels() {
  noStroke(); fill('#334155'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Focus area:', margin, drawHeight + 12);
}

function lower(s) { return s ? s.charAt(0).toLowerCase() + s.slice(1) : s; }
function overExample() { for (const r of exampleRects) if (hit(r)) return true; return false; }
function hit(r) { return mouseX >= r.x && mouseX <= r.x + r.w && mouseY >= r.y && mouseY <= r.y + r.h; }

function mousePressed() {
  if (showSummary) return;
  // select a zone
  const top = 62, leftX = margin, leftW = canvasWidth * 0.46 - margin, zH = (drawHeight - top - 16) / 4;
  for (let z = 0; z < 4; z++) {
    const y = top + z * zH;
    if (mouseX >= leftX && mouseX <= leftX + leftW && mouseY >= y && mouseY <= y + zH - 8) { target = z; return; }
  }
  // pick an example card
  for (const r of exampleRects) {
    if (hit(r)) { content[target] = r.text; showSummary = false; return; }
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
