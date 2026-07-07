// Nutrition Label Detective - MicroSim (Grade 4, Apply L3)
// CANVAS_HEIGHT: 512
// Students read a realistic granola-bar nutrition label, click rows to learn what
// they mean, and type numeric answers to 6 questions locating values on the label.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let answerInput;
let checkButton;
let nextButton;

// Nutrition label rows. amt = numeric value used for answer checking / questions.
// unit shown after the number. explain = one-sentence meaning shown when clicked.
let rows = [
  { key: 'calories',  label: 'Calories',       amt: 140, unit: '',    bold: true,
    explain: 'Calories tell you how much energy the food gives your body.' },
  { key: 'totalfat',  label: 'Total Fat',      amt: 5,   unit: 'g',   bold: true,
    explain: 'Total Fat is all the fat in one serving. Some fat is healthy.' },
  { key: 'satfat',    label: 'Saturated Fat',  amt: 2,   unit: 'g',   bold: false,
    explain: 'Saturated Fat is one kind of fat. It is best to eat only a little.' },
  { key: 'sodium',    label: 'Sodium',         amt: 95,  unit: 'mg',  bold: true,
    explain: 'Sodium comes from salt. Too much salt is not good for your heart.' },
  { key: 'carbs',     label: 'Total Carbs',    amt: 22,  unit: 'g',   bold: true,
    explain: 'Carbohydrates give quick energy. Bread, fruit, and grains have them.' },
  { key: 'sugars',    label: 'Total Sugars',   amt: 9,   unit: 'g',   bold: false,
    explain: 'Sugars are sweet carbs. Eating a lot of added sugar is not healthy.' },
  { key: 'protein',   label: 'Protein',        amt: 3,   unit: 'g',   bold: true,
    explain: 'Protein helps your body grow and repair muscles.' },
  { key: 'vitd',      label: 'Vitamin D',      amt: 2,   unit: 'mcg', bold: false,
    explain: 'Vitamin D helps keep your bones strong.' },
  { key: 'calcium',   label: 'Calcium',        amt: 40,  unit: 'mg',  bold: false,
    explain: 'Calcium builds strong bones and teeth.' },
  { key: 'iron',      label: 'Iron',           amt: 1,   unit: 'mg',  bold: false,
    explain: 'Iron helps your blood carry oxygen around your body.' },
  { key: 'potassium', label: 'Potassium',      amt: 65,  unit: 'mg',  bold: false,
    explain: 'Potassium helps your muscles and nerves work well.' }
];

// Six questions. rowKey = the row that answers it (used for highlight + answer).
let questions = [
  { q: 'How many grams of protein are in one serving?', rowKey: 'protein' },
  { q: 'How many calories are in one serving?',         rowKey: 'calories' },
  { q: 'How many grams of total sugars are there?',     rowKey: 'sugars' },
  { q: 'How many milligrams of sodium are there?',      rowKey: 'sodium' },
  { q: 'How many grams of total fat are in a serving?', rowKey: 'totalfat' },
  { q: 'How many grams of total carbs are there?',      rowKey: 'carbs' }
];

let qIndex = 0;
let score = 0;
let answered = false;      // has the current question been checked?
let lastCorrect = false;
let feedback = 'Read the label. Type your answer below, then press Check.';
let feedbackColor = 'dimgray';
let clickedRowKey = null;  // row the student tapped to reveal its meaning
let rowHitBoxes = [];      // [{key, x, y, w, h}] rebuilt each frame
let finished = false;

// Label geometry (recomputed each frame)
let labelX, labelY, labelW;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  answerInput = createInput('');
  answerInput.parent(document.querySelector('main'));
  answerInput.attribute('type', 'number');
  answerInput.attribute('placeholder', 'answer');

  checkButton = createButton('Check Answer');
  checkButton.parent(document.querySelector('main'));
  checkButton.mousePressed(checkAnswer);

  nextButton = createButton('Next Question');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextQuestion);

  positionControls();
  describe('A realistic granola-bar nutrition facts label on the left and a question on ' +
    'the right. Students click any label row to see what it means, then type the ' +
    'numeric answer to the current question and press Check Answer.', LABEL);
}

function positionControls() {
  // Input box, then Check, then Next, laid out left-to-right in the control strip.
  answerInput.position(margin, drawHeight + 14);
  answerInput.size(72);
  checkButton.position(margin + 90, drawHeight + 12);
  nextButton.position(margin + 210, drawHeight + 12);
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
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(20);
  textStyle(BOLD);
  text('Nutrition Label Detective', canvasWidth / 2, 8);
  textStyle(NORMAL);

  if (finished) {
    drawSummary();
    return;
  }

  drawLabel();
  drawQuestionPanel();
}

// ---- Nutrition Facts label (FDA-style) ----
function drawLabel() {
  labelW = min(288, canvasWidth * 0.52);
  labelX = margin;
  labelY = 40;
  let bottom = drawHeight - 12;
  let labelH = bottom - labelY;

  // Card
  stroke('black');
  strokeWeight(2);
  fill('white');
  rect(labelX, labelY, labelW, labelH);
  noStroke();

  let pad = 8;
  let ix = labelX + pad;
  let iw = labelW - 2 * pad;
  let y = labelY + 6;

  // Header
  fill('black');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(19);
  text('Nutrition Facts', ix, y);
  y += 24;
  textStyle(NORMAL);
  textSize(11);
  text('Granola Bar', ix, y);
  y += 14;
  text('Serving size  1 bar (28g)', ix, y);
  y += 16;

  // Thick rule
  stroke('black'); strokeWeight(6);
  line(ix, y, ix + iw, y);
  noStroke();
  y += 6;

  rowHitBoxes = [];
  let rowH = (bottom - 4 - y) / rows.length;
  rowH = max(rowH, 18);

  for (let i = 0; i < rows.length; i++) {
    let r = rows[i];
    let ry = y + i * rowH;

    // Highlight: the question's target row (after check/incorrect) or a tapped row.
    let isTarget = (clickedRowKey === r.key) ||
      (answered && !lastCorrect && r.key === questions[qIndex].rowKey);
    if (isTarget) {
      fill(clickedRowKey === r.key && !answered ? 'khaki' : 'gold');
      rect(ix - 3, ry, iw + 6, rowH);
      noStroke();
    }

    // thin separator
    stroke('gainsboro'); strokeWeight(1);
    line(ix, ry, ix + iw, ry);
    noStroke();

    // Label name (indented for sub-nutrients)
    fill('black');
    textAlign(LEFT, CENTER);
    textStyle(r.bold ? BOLD : NORMAL);
    textSize(12);
    let nameX = r.bold ? ix : ix + 12;
    text(r.label, nameX, ry + rowH / 2);

    // Value on the right
    textAlign(RIGHT, CENTER);
    let valStr = r.amt + (r.unit ? ' ' + r.unit : '');
    text(valStr, ix + iw, ry + rowH / 2);
    textStyle(NORMAL);

    rowHitBoxes.push({ key: r.key, x: ix - 3, y: ry, w: iw + 6, h: rowH });
  }
}

// ---- Right-side question / explanation panel ----
function drawQuestionPanel() {
  let px = labelX + labelW + 14;
  let pw = canvasWidth - px - margin;
  if (pw < 90) pw = 90;
  let py = 44;
  let pad = 10;
  let tx = px + pad;
  let tw = pw - 2 * pad;

  // Panel background
  fill('white');
  stroke('silver'); strokeWeight(1);
  rect(px, py, pw, drawHeight - py - 12, 6);
  noStroke();

  let y = py + pad;

  // Progress
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Question ' + (qIndex + 1) + ' of ' + questions.length, tx, y);
  y += 20;

  // Question text (wrapped inside box)
  fill('navy');
  textStyle(BOLD);
  textSize(15);
  let qBoxH = 92;
  text(questions[qIndex].q, tx, y, tw, qBoxH);
  textStyle(NORMAL);
  y += qBoxH + 2;

  // Divider
  stroke('gainsboro'); strokeWeight(1);
  line(tx, y, tx + tw, y);
  noStroke();
  y += 8;

  // Feedback / explanation area (wrapped)
  fill(feedbackColor);
  textSize(13);
  text(feedback, tx, y, tw, drawHeight - 12 - y - pad);

  // Score at bottom of panel
  fill('seagreen');
  textAlign(LEFT, BOTTOM);
  textSize(12);
  text('Score: ' + score + ' / ' + questions.length, tx, drawHeight - 18);
}

// ---- End-of-quiz summary ----
function drawSummary() {
  let bx = margin;
  let by = 50;
  let bw = canvasWidth - 2 * margin;
  let bh = drawHeight - by - 16;
  fill('white');
  stroke('silver'); strokeWeight(1);
  rect(bx, by, bw, bh, 8);
  noStroke();

  let pad = 20;
  fill('seagreen');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(22);
  text('Great detective work!', canvasWidth / 2, by + pad);
  textStyle(NORMAL);

  fill('navy');
  textSize(30);
  text('Score: ' + score + ' / ' + questions.length, canvasWidth / 2, by + pad + 44);

  fill('black');
  textSize(15);
  let msgY = by + pad + 96;
  text('You found the facts on this granola bar label. Every packaged food ' +
       'has a Nutrition Facts label just like this one. Now you know how to read it!',
       bx + pad, msgY, bw - 2 * pad, bh - (msgY - by) - pad - 40);

  fill('dimgray');
  textAlign(CENTER, BOTTOM);
  textSize(13);
  text('Press "Next Question" to try again.', canvasWidth / 2, by + bh - 14);
}

// ---- Interaction ----
function checkAnswer() {
  if (finished || answered) return;
  let raw = answerInput.value().trim();
  if (raw === '') {
    feedback = 'Type a number from the label, then press Check Answer.';
    feedbackColor = 'indianred';
    return;
  }
  let guess = parseFloat(raw);
  let target = rows.find(r => r.key === questions[qIndex].rowKey);
  clickedRowKey = null;
  answered = true;

  if (!isNaN(guess) && guess === target.amt) {
    lastCorrect = true;
    score++;
    feedback = 'Correct! Nice work locating that on the label. Press Next Question.';
    feedbackColor = 'seagreen';
  } else {
    lastCorrect = false;
    feedback = 'Not quite. Look at the gold row on the label: ' + target.label +
               ' is ' + target.amt + (target.unit ? ' ' + target.unit : '') +
               '. Press Next Question.';
    feedbackColor = 'indianred';
  }
}

function nextQuestion() {
  if (finished) {
    // Restart
    qIndex = 0; score = 0; answered = false; finished = false;
    clickedRowKey = null;
    feedback = 'Read the label. Type your answer below, then press Check.';
    feedbackColor = 'dimgray';
    answerInput.value('');
    return;
  }
  if (!answered) {
    feedback = 'Press Check Answer first, then move to the next question.';
    feedbackColor = 'indianred';
    return;
  }
  qIndex++;
  answerInput.value('');
  clickedRowKey = null;
  answered = false;
  lastCorrect = false;
  if (qIndex >= questions.length) {
    finished = true;
    return;
  }
  feedback = 'Find the answer on the label. Tap any row to see what it means.';
  feedbackColor = 'dimgray';
}

function mousePressed() {
  if (finished) return;
  for (let b of rowHitBoxes) {
    if (pointInRect(mouseX, mouseY, b)) {
      let r = rows.find(rr => rr.key === b.key);
      clickedRowKey = b.key;
      // Only overwrite feedback with the explanation if not currently showing a result.
      if (!answered) {
        feedback = r.label + ': ' + r.explain;
        feedbackColor = 'steelblue';
      }
      return;
    }
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
