// Recognizing the Signs Interactive Checklist - MicroSim
// CANVAS_HEIGHT: 512
// Grades 6-8, Understand (L2): read a realistic scenario and classify it into one of the
// five sign categories of substance use disorder. Recognizing a pattern signals it is time
// to seek help, not to judge. Neutral, non-graphic, non-stigmatizing language throughout.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// The five sign categories. key matches each scenario's cat field.
let categories = [
  { key: 'control',    label: 'Loss of Control',    icon: '⟳', color: 'steelblue' },
  { key: 'harm',       label: 'Use Despite Harm',   icon: '!', color: 'indianred' },
  { key: 'withdrawal', label: 'Withdrawal',         icon: '↯', color: 'mediumpurple' },
  { key: 'narrowing',  label: 'Life Narrowing',     icon: '◐', color: 'goldenrod' },
  { key: 'tolerance',  label: 'Tolerance',          icon: '↑', color: 'seagreen' }
];

// Ten neutral scenario statements. cat = correct category key. e = one-sentence explanation.
let deck = [
  { t: 'Tries to cut back many times but keeps using more than they meant to.', cat: 'control',
    e: 'Trying to stop and not being able to is a sign of loss of control.' },
  { t: 'Keeps using even after it causes problems at home and school.', cat: 'harm',
    e: 'Continuing despite clear harm points to the "use despite harm" sign.' },
  { t: 'Feels shaky, restless, or sick when they stop for a while.', cat: 'withdrawal',
    e: 'Feeling unwell when stopping is a withdrawal sign.' },
  { t: 'Skips basketball practice, once their favorite, to keep using.', cat: 'narrowing',
    e: 'Dropping activities they used to enjoy is life narrowing.' },
  { t: 'Needs about twice as much as a few months ago to feel the same effect.', cat: 'tolerance',
    e: 'Needing more for the same effect is increasing tolerance.' },
  { t: 'Plans to use "just a little" but ends up using far more.', cat: 'control',
    e: 'Using much more than planned is a loss of control.' },
  { t: 'Sleep and mood get worse, but they keep going anyway.', cat: 'harm',
    e: 'Keeping on despite health effects is use despite harm.' },
  { t: 'Spends more and more time alone, away from close friends.', cat: 'narrowing',
    e: 'Giving up friendships and routines is life narrowing.' },
  { t: 'Gets headaches and trouble concentrating when they miss their usual time.', cat: 'withdrawal',
    e: 'Physical discomfort when stopping is a withdrawal sign.' },
  { t: 'The old amount barely does anything now.', cat: 'tolerance',
    e: 'When the usual amount stops working, tolerance has increased.' }
];

let order = [];        // shuffled indices into deck
let answered = [];     // per-deck-index: null, or the category key chosen (always correct once set)
let current = 0;       // pointer into order (which scenario is active)
let feedback = '';
let feedbackColor = 'dimgray';
let catRects = [];     // hit boxes for category cards, rebuilt each frame

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset & Reshuffle');
  resetButton.mousePressed(resetDeck);
  positionControls();

  shuffleDeck();
  describe('An interactive checklist. A realistic scenario is shown at the top; below are the ' +
    'five sign categories of substance use disorder as tappable cards. Tap the category that ' +
    'matches the scenario to get immediate, non-judgmental feedback and advance to the next one. ' +
    'A running count tracks progress.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 15);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  answered = new Array(deck.length).fill(null);
  current = 0;
  feedback = 'Read the scenario, then tap the sign category that matches it.';
  feedbackColor = 'dimgray';
}

function resetDeck() { shuffleDeck(); }

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
  textSize(19);
  text('Recognizing the Signs', canvasWidth / 2, 6);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(11);
  fill('dimgray');
  text('Spotting a pattern is a signal to seek help — not to judge.', canvasWidth / 2, 28);

  let correctCount = answered.filter(a => a !== null).length;
  let done = correctCount === deck.length;

  // Progress dots row
  let dotY = 50;
  let dotR = 9;
  let dotGap = Math.min(24, (canvasWidth - margin * 2) / deck.length);
  let dotsW = dotGap * (deck.length - 1);
  let dotX0 = canvasWidth / 2 - dotsW / 2;
  for (let k = 0; k < order.length; k++) {
    let idx = order[k];
    let cx = dotX0 + k * dotGap;
    noStroke();
    if (answered[idx] !== null) fill('seagreen');
    else if (k === current && !done) fill('gold');
    else fill('lightgray');
    circle(cx, dotY, dotR);
    if (k === current && !done) { noFill(); stroke('goldenrod'); strokeWeight(2); circle(cx, dotY, dotR + 6); noStroke(); }
  }

  // Scenario card
  let scX = margin, scY = 66, scW = canvasWidth - margin * 2, scH = 92;
  stroke('steelblue');
  strokeWeight(2);
  fill('white');
  rect(scX, scY, scW, scH, 10);
  noStroke();
  if (done) {
    fill('seagreen');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('All ' + deck.length + ' scenarios sorted! Every sign is a reason to reach out for support.',
      scX + 12, scY + 8, scW - 24, scH - 16);
  } else {
    let idx = order[current];
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(11);
    text('Scenario ' + (current + 1) + ' of ' + deck.length, scX + 12, scY + 8);
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(15);
    text('"' + deck[idx].t + '"', scX + 12, scY + 30, scW - 24, scH - 40);
  }

  // Category cards — responsive: 5 across if wide enough, else 2 columns
  drawCategoryCards();

  // Feedback line
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12.5);
  fill(feedbackColor);
  text(feedback, margin, drawHeight - 44, canvasWidth - margin * 2, 40);

  // Running count (top-right)
  noStroke();
  textAlign(RIGHT, TOP);
  textSize(12);
  fill('seagreen');
  text('Sorted: ' + correctCount + ' / ' + deck.length, canvasWidth - margin, 8);

  cursor(overAnyCategory() && !done ? HAND : ARROW);
}

function drawCategoryCards() {
  catRects = [];
  let n = categories.length;
  let gap = 8;
  let areaX = margin;
  let areaW = canvasWidth - margin * 2;
  let topY = 168;
  let cols, rows, cardH;

  if (areaW >= 430) {
    // one row of five
    cols = 5; rows = 1; cardH = 96;
  } else {
    // 2 columns, 3 rows (last cell empty)
    cols = 2; rows = 3; cardH = 66;
  }
  let cardW = (areaW - gap * (cols - 1)) / cols;

  let idx = order[current];
  let correctCount = answered.filter(a => a !== null).length;
  let done = correctCount === deck.length;

  for (let c = 0; c < n; c++) {
    let col = c % cols;
    let row = Math.floor(c / cols);
    let x = areaX + col * (cardW + gap);
    let y = topY + row * (cardH + gap);
    let cat = categories[c];
    let r = { x: x, y: y, w: cardW, h: cardH, key: cat.key };
    catRects.push(r);

    let hover = !done && pointInRect(mouseX, mouseY, r);
    // Was the CURRENT scenario just answered as this category?
    let isAnswerHighlight = !done && answered[idx] !== null && answered[idx] === cat.key;

    strokeWeight(2);
    if (isAnswerHighlight) { stroke('seagreen'); fill('honeydew'); }
    else { stroke(cat.color); fill(hover ? 'lightyellow' : 'white'); }
    rect(x, y, cardW, cardH, 8);

    // Icon chip
    noStroke();
    fill(cat.color);
    let chipR = 22;
    circle(x + cardW / 2, y + 22, chipR);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(15);
    text(cat.icon, x + cardW / 2, y + 21);

    // Label
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(cols === 5 ? 12 : 13);
    text(cat.label, x + 4, y + 38, cardW - 8, cardH - 42);
  }
}

function overAnyCategory() {
  for (let r of catRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  let correctCount = answered.filter(a => a !== null).length;
  if (correctCount === deck.length) return; // done

  let idx = order[current];
  if (answered[idx] !== null) return; // current already answered; wait for advance

  for (let r of catRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let chosen = r.key;
      let correct = chosen === deck[idx].cat;
      if (correct) {
        answered[idx] = chosen;
        feedback = '✓ Correct — ' + deck[idx].e;
        feedbackColor = 'seagreen';
        advanceAfterDelay();
      } else {
        let chosenCat = categories.find(c => c.key === chosen);
        feedback = '✗ Not quite. That is "' + chosenCat.label + '". Try again — look for what the pattern shows.';
        feedbackColor = 'indianred';
      }
      return;
    }
  }
}

// Move to the next unanswered scenario (wraps). Called after a correct match.
function advanceAfterDelay() {
  // Advance immediately to next unanswered so feedback for the completed one stays visible
  // until the learner reads it; the new scenario is shown right away.
  let next = findNextUnanswered();
  if (next !== -1) current = next;
}

function findNextUnanswered() {
  for (let step = 1; step <= order.length; step++) {
    let k = (current + step) % order.length;
    if (answered[order[k]] === null) return k;
  }
  return -1; // all answered
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
