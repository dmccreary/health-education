// Medication Label Reading Challenge - MicroSim (click-to-locate on a sample label)
// CANVAS_HEIGHT: 512
// Grade 6-8, Apply (L3): a fictional over-the-counter medication label is split into
// labeled zones; students read a question and click the label section that holds the
// answer, get immediate feedback with the matching text highlighted, and track a score.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// The fictional label is one card divided into stacked zones.
// key = zone id; each zone has a heading and one or more body lines.
let zones = [
  { key: 'active', head: 'Active Ingredient',
    lines: ['Fever-Ease  (acetaminophen) 160 mg', 'Purpose: Pain reliever / fever reducer'] },
  { key: 'dosage', head: 'Directions (Dosage)',
    lines: ['Ages 12+: Take 2 tablets every 6 hours.', 'Do not take more than 6 tablets in 24 hours.'] },
  { key: 'warnings', head: 'Warnings',
    lines: ['Liver warning: this product contains', 'acetaminophen. Ask a doctor before use if', 'you have liver disease.'] },
  { key: 'interactions', head: 'Do Not Use With',
    lines: ['Do not use with any other medicine that', 'contains acetaminophen. Avoid alcohol.'] },
  { key: 'expires', head: 'Expiration',
    lines: ['EXP 08 / 2027', 'Lot  4471B'] }
];

// Questions map to the zone whose text answers them.
let deck = [
  { q: 'How many hours should you wait between doses?', ans: 'dosage' },
  { q: 'What is the active ingredient in this medicine?', ans: 'active' },
  { q: 'What should you avoid combining with this medicine?', ans: 'interactions' },
  { q: 'By what date should this medicine no longer be used?', ans: 'expires' },
  { q: 'Which organ could be harmed if you take too much?', ans: 'warnings' },
  { q: 'What is the most tablets you may take in one day?', ans: 'dosage' },
  { q: 'Who should ask a doctor before using this product?', ans: 'warnings' },
  { q: 'How many milligrams are in each tablet?', ans: 'active' }
];

let order = [];
let idx = 0;
let picked = null;      // zone key the student clicked for current question
let answeredCount = 0;
let correctCount = 0;
let zoneRects = [];     // computed each frame for hit-testing

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Question');
  nextButton.mousePressed(nextQuestion);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  shuffleDeck();
  describe('A fictional over-the-counter medicine label is shown with sections for the ' +
    'active ingredient, dosage directions, warnings, interactions, and expiration date. ' +
    'A question asks the student to click the label section that answers it. The student ' +
    'gets immediate feedback with the matching section highlighted, and a running score.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 14);
  resetButton.position(margin + 130, drawHeight + 14);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  idx = 0; picked = null; answeredCount = 0; correctCount = 0;
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

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Medication Label Reading Challenge', canvasWidth / 2, 8);

  if (answeredCount >= deck.length) { drawSummary(); return; }

  let current = deck[order[idx]];

  // ----- Question / prompt bar -----
  let qy = 36;
  let qh = 52;
  fill('lavender'); stroke('mediumpurple'); strokeWeight(1.5);
  rect(margin, qy, canvasWidth - margin * 2, qh, 8);
  noStroke();
  fill('indigo'); textAlign(LEFT, TOP); textSize(12);
  text('Question ' + (idx + 1) + ' of ' + deck.length +
    '   •   Score: ' + correctCount + ' / ' + answeredCount, margin + 12, qy + 8);
  fill('black'); textSize(15);
  text(current.q, margin + 12, qy + 26, canvasWidth - margin * 2 - 24, qh - 30);

  // ----- The label card, divided into clickable zones -----
  let labelTop = qy + qh + 12;
  let feedbackH = 44;
  let labelBottom = drawHeight - feedbackH - 10;
  drawLabel(labelTop, labelBottom, current);

  // ----- Feedback line -----
  let fy = labelBottom + 8;
  textAlign(LEFT, TOP); textSize(14);
  if (picked === null) {
    fill('dimgray');
    text('Click the section of the label that answers the question above.',
      margin, fy, canvasWidth - margin * 2, feedbackH);
  } else if (picked === current.ans) {
    fill('seagreen'); textStyle(BOLD);
    text('Correct! That section holds the answer.',
      margin, fy, canvasWidth - margin * 2, feedbackH);
    textStyle(NORMAL);
  } else {
    let right = zoneHead(current.ans);
    fill('indianred'); textStyle(BOLD);
    text('Not quite. The answer is in "' + right + '" (now highlighted in green).',
      margin, fy, canvasWidth - margin * 2, feedbackH);
    textStyle(NORMAL);
  }
}

function drawLabel(top, bottom, current) {
  let lx = margin;
  let lw = canvasWidth - margin * 2;
  let totalH = bottom - top;

  // Outer label frame
  noFill(); stroke('steelblue'); strokeWeight(2);
  rect(lx, top, lw, totalH, 10);

  // Weight each zone by its line count so text always fits.
  let weights = zones.map(z => 0.9 + z.lines.length * 0.55);
  let wSum = weights.reduce((a, b) => a + b, 0);

  zoneRects = [];
  let y = top;
  for (let i = 0; i < zones.length; i++) {
    let z = zones[i];
    let zh = (i === zones.length - 1) ? (top + totalH - y) : (totalH * weights[i] / wSum);
    let rect0 = { key: z.key, x: lx, y: y, w: lw, h: zh };
    zoneRects.push(rect0);

    let hover = picked === null && pointInRect(mouseX, mouseY, rect0);
    let isPicked = picked === z.key;
    let isAnswer = picked !== null && z.key === current.ans;

    // Zone background
    noStroke();
    if (isAnswer) fill('honeydew');
    else if (isPicked) fill('mistyrose');
    else if (hover) fill('lightyellow');
    else fill(i % 2 === 0 ? 'white' : 'ghostwhite');
    rect(lx + 1.5, y + 1.5, lw - 3, zh - 3, 6);

    // Highlight border for answer / wrong pick
    if (isAnswer) { noFill(); stroke('seagreen'); strokeWeight(2.5); rect(lx + 2, y + 2, lw - 4, zh - 4, 6); }
    else if (isPicked) { noFill(); stroke('indianred'); strokeWeight(2.5); rect(lx + 2, y + 2, lw - 4, zh - 4, 6); }

    // Zone heading
    noStroke();
    fill('steelblue'); textAlign(LEFT, TOP); textStyle(BOLD); textSize(12);
    text(z.head, lx + 10, y + 6);
    textStyle(NORMAL);

    // Zone body lines
    fill('black'); textSize(12);
    let ly = y + 22;
    for (let line of z.lines) {
      if (ly + 13 > y + zh - 2) break;
      text(line, lx + 10, ly, lw - 20, 15);
      ly += 15;
    }

    // Divider line between zones
    if (i < zones.length - 1) {
      stroke('gainsboro'); strokeWeight(1);
      line(lx + 6, y + zh, lx + lw - 6, y + zh);
      noStroke();
    }
    y += zh;
  }

  cursor(picked === null && overAnyZone() ? HAND : ARROW);
}

function drawSummary() {
  let pct = deck.length > 0 ? Math.round(correctCount / deck.length * 100) : 0;
  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Challenge Complete!', canvasWidth / 2, 60);

  fill('steelblue'); textSize(40); textStyle(BOLD);
  text(correctCount + ' / ' + deck.length, canvasWidth / 2, 100);
  textStyle(NORMAL);

  fill('dimgray'); textSize(16);
  text('You found the right section ' + pct + '% of the time.', canvasWidth / 2, 160);

  // Encouraging, non-graded takeaway
  let msg = pct >= 75
    ? 'Great label reading! Knowing where to find dosage, warnings,\nand expiration keeps you safe.'
    : 'Good practice. On a real label, always find the dosage,\nwarnings, and expiration before taking any medicine.';
  fill('seagreen'); textAlign(CENTER, CENTER); textSize(15);
  text(msg, margin, 195, canvasWidth - margin * 2, 90);

  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(13);
  text('Press Reset to try the questions again in a new order.',
    canvasWidth / 2, 300, canvasWidth - margin * 2, 40);

  // Reminder that this is a made-up label
  fill('gray'); textSize(11);
  text('This is a fictional practice label — not a real product.',
    canvasWidth / 2, drawHeight - 26, canvasWidth - margin * 2, 20);
}

function zoneHead(key) {
  for (let z of zones) if (z.key === key) return z.head;
  return '';
}

function overAnyZone() {
  for (let r of zoneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (answeredCount >= deck.length || picked !== null) return;
  // ignore clicks in the control strip
  if (mouseY >= drawHeight) return;
  let current = deck[order[idx]];
  for (let r of zoneRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      picked = r.key;
      answeredCount++;
      if (picked === current.ans) correctCount++;
      return;
    }
  }
}

function nextQuestion() {
  if (picked === null) return;        // must answer before moving on
  if (idx < deck.length - 1) { idx++; picked = null; }
  // if that was the last one, answeredCount hits deck.length -> summary shows
}

function resetAll() { shuffleDeck(); }

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
