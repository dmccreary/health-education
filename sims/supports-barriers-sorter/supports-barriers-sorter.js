// Supports and Barriers Sorter
// CANVAS_HEIGHT: 520
// Grade 9-12, Evaluate (L5): judge each factor as a Support, a Barrier, or Depends on
// Conditions for a health practice, with immediate explain-why feedback.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

const ZONES = [
  { id: 'support', label: 'Support', color: '#3aa564' },
  { id: 'barrier', label: 'Barrier', color: '#d0392b' },
  { id: 'depends', label: 'Depends on Conditions', color: '#e0a52e' }
];

// Card banks per scenario. cat = correct zone id.
const SCENARIOS = {
  'Active commuting (bike/walk to school)': [
    { t: 'A protected bike lane the whole way', cat: 'support', e: 'A safe, separated route removes a major barrier.' },
    { t: 'No secure place to lock a bike at school', cat: 'barrier', e: 'Without secure parking, theft risk discourages biking.' },
    { t: 'A classmate who commutes with you', cat: 'support', e: 'Company makes active commuting safer and more fun.' },
    { t: 'A distance of 6 miles each way', cat: 'depends', e: 'Long for some, but fine with extra time or an e-bike.' },
    { t: 'Frequent heavy rain this season', cat: 'barrier', e: 'Regular bad weather interrupts an outdoor commute.' },
    { t: 'A place to change clothes on arrival', cat: 'depends', e: 'Only matters if you arrive sweaty; helpful for some.' }
  ],
  'Reducing screen time before bed': [
    { t: 'Charging your phone in the kitchen overnight', cat: 'support', e: 'Charging away from bed removes the urge to scroll.' },
    { t: 'A friend who texts late at night', cat: 'barrier', e: 'Late messages pull you back to the screen at bedtime.' },
    { t: 'A print book you are excited to read', cat: 'support', e: 'An appealing offline activity replaces screen time.' },
    { t: 'Homework submitted online at 11 pm', cat: 'barrier', e: 'Required late online work keeps you on a screen.' },
    { t: 'Using your phone as your only alarm', cat: 'depends', e: 'A barrier unless you get a separate alarm clock.' },
    { t: 'A family "no devices at dinner" rule', cat: 'depends', e: 'Helps habits, but only if it extends into the evening.' }
  ],
  'Eating breakfast most days': [
    { t: 'Quick grab-and-go foods stocked at home', cat: 'support', e: 'Easy options make breakfast realistic on busy mornings.' },
    { t: 'Waking only 10 minutes before leaving', cat: 'barrier', e: 'Too little time is a top reason breakfast gets skipped.' },
    { t: 'A routine that includes sitting to eat', cat: 'support', e: 'A built-in habit makes breakfast automatic.' },
    { t: 'Not feeling hungry right after waking', cat: 'depends', e: 'A small or slightly later breakfast can still work.' },
    { t: 'No breakfast foods you actually like', cat: 'barrier', e: 'Disliking the options makes skipping likely.' },
    { t: 'A long bus ride you could eat during', cat: 'depends', e: 'An opportunity only if eating there is allowed.' }
  ]
};
const scenarioNames = Object.keys(SCENARIOS);

let scenarioSelect, checkButton, resetButton;
let current = scenarioNames[0];
let cards = [];
let selected = -1;
let message = '';
let bankRects = [], zoneRects = [], placedRects = [];

function loadScenario() {
  cards = SCENARIOS[current].map(c => ({ text: c.t, cat: c.cat, expl: c.e, zone: null, status: null }));
  selected = -1;
  message = 'Click a factor, then click a zone to place it. When ready, press "Check my sorting."';
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  scenarioSelect = createSelect();
  scenarioNames.forEach(n => scenarioSelect.option(n));
  scenarioSelect.changed(() => { current = scenarioSelect.value(); loadScenario(); });

  checkButton = createButton('Check my sorting');
  checkButton.mousePressed(checkSorting);
  resetButton = createButton('Reset');
  resetButton.mousePressed(loadScenario);

  loadScenario();
  positionControls();
  describe('A sorting activity: place each factor card into Support, Barrier, or Depends-on-Conditions ' +
    'for a health practice, then check to see which were correct with a one-line reason.', LABEL);
}

function positionControls() {
  scenarioSelect.position(margin, drawHeight + 16);
  scenarioSelect.style('width', (canvasWidth * 0.5 - margin) + 'px');
  checkButton.position(canvasWidth * 0.5 + 6, drawHeight + 16);
  resetButton.position(canvasWidth * 0.5 + 150, drawHeight + 16);
}

function checkSorting() {
  let placed = 0, correct = 0;
  for (const c of cards) {
    if (!c.zone) continue;
    placed++;
    if (c.zone === c.cat) { c.status = 'correct'; correct++; }
    else { c.status = 'wrong'; }
  }
  if (placed === 0) { message = 'Place at least one factor into a zone first.'; return; }
  // Move wrong cards back to the bank, show the first explanation to guide re-sorting.
  let firstWrong = null;
  for (const c of cards) {
    if (c.status === 'wrong') { if (!firstWrong) firstWrong = c; c.zone = null; }
  }
  if (firstWrong) message = 'Not quite: "' + firstWrong.text + '" — ' + firstWrong.expl + ' (Returned to the bank; try again.)';
  else message = 'All ' + correct + ' placed factors are correct. Sort the rest, or switch scenarios.';
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

  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(15);
  text('Supports & Barriers: ' + current, canvasWidth / 2, 8, canvasWidth - 20, 20);

  const bankX = margin, bankW = canvasWidth * 0.48 - margin;
  const zoneX = canvasWidth * 0.5, zoneW = canvasWidth - zoneX - margin;
  const top = 40;

  // Bank (unplaced cards)
  noStroke(); fill('#334155'); textAlign(LEFT, TOP); textSize(12);
  text('Factor bank', bankX, top);
  bankRects = [];
  let by = top + 20;
  const cardH = 40, cg = 7;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].zone) continue;
    const r = { x: bankX, y: by, w: bankW, h: cardH, i: i };
    bankRects.push(r);
    drawCard(cards[i], r, i === selected);
    by += cardH + cg;
  }

  // Zones
  zoneRects = [];
  placedRects = [];
  const zTop = top + 20, zH = (drawHeight - zTop - 70) / 3;
  for (let z = 0; z < ZONES.length; z++) {
    const zy = zTop + z * (zH + 6);
    const zone = ZONES[z];
    zoneRects.push({ x: zoneX, y: zy, w: zoneW, h: zH, id: zone.id });
    noFill(); stroke(zone.color); strokeWeight(1.5);
    rect(zoneX, zy, zoneW, zH, 6);
    noStroke(); fill(zone.color); textAlign(LEFT, TOP); textSize(12);
    text(zone.label, zoneX + 8, zy + 5);
    // placed cards in this zone
    let px = zoneX + 6, py = zy + 22;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].zone !== zone.id) continue;
      const r = { x: px, y: py, w: zoneW - 12, h: 30, i: i };
      placedRects.push(r);
      drawCard(cards[i], r, false, true);
      py += 34;
    }
  }

  // Message
  noStroke(); fill('#0f2a4a'); textAlign(LEFT, TOP); textSize(11.5);
  text(message, margin, drawHeight - 44, canvasWidth - margin * 2, 40);
}

function drawCard(card, r, isSel, small) {
  let bg = 'white', bd = '#94a3b8';
  if (card.status === 'correct') { bg = '#dcfce7'; bd = '#3aa564'; }
  else if (card.status === 'wrong') { bg = '#ffedd5'; bd = '#e07b2e'; }
  else if (isSel) { bg = 'lightyellow'; bd = 'navy'; }
  stroke(bd); strokeWeight(isSel ? 2.5 : 1.3); fill(bg);
  rect(r.x, r.y, r.w, r.h, 6);
  noStroke(); fill('#0f2a4a'); textAlign(LEFT, CENTER); textSize(small ? 10.5 : 11.5);
  text(card.text, r.x + 7, r.y + r.h / 2, r.w - 14, r.h);
}

function mousePressed() {
  // Click a placed card -> return to bank
  for (const r of placedRects) {
    if (hit(r)) { cards[r.i].zone = null; cards[r.i].status = null; selected = -1; return; }
  }
  // Click a bank card -> select/deselect
  for (const r of bankRects) {
    if (hit(r)) { selected = (selected === r.i) ? -1 : r.i; return; }
  }
  // Click a zone with a selected card -> place it
  if (selected >= 0) {
    for (const r of zoneRects) {
      if (hit(r)) { cards[selected].zone = r.id; cards[selected].status = null; selected = -1; return; }
    }
  }
}
function hit(r) { return mouseX >= r.x && mouseX <= r.x + r.w && mouseY >= r.y && mouseY <= r.y + r.h; }

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
