// Social Norm or Personal Choice? Sorter - MicroSim (one card, two bins)
// CANVAS_HEIGHT: 560
// Grade 6-8, Analyze (L4): students examine ten realistic scenario cards and judge
// whether each health behavior is driven MAINLY by an unspoken group/community norm or
// MAINLY by an individual's personal choice. Feedback explains the reasoning, notes that
// many behaviors are a blend of both, and asks a short reflection question. Reset reshuffles.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 508;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// norm: true = mainly a social norm, false = mainly a personal choice
// e: explanation of the reasoning
// r: short follow-up reflection question
let deck = [
  { t: 'Almost everyone on the team stretches before practice because the coach always has, and nobody questions it.',
    norm: true,
    e: 'It happens because "that is just what the team does" - an unspoken group norm, not a fresh decision each person makes.',
    r: 'Is this norm helping or hurting the group\'s health?' },
  { t: 'One student decided on their own to start packing a water bottle after reading about hydration.',
    norm: false,
    e: 'This came from one person\'s own reasoning, not from copying the group. That points to a personal choice.',
    r: 'What could help this choice spread to become a healthy group norm?' },
  { t: 'Kids at this school leave the stairs empty and all crowd the elevator, so new students do the same.',
    norm: true,
    e: 'People follow what the crowd already does without deciding for themselves. That is a group norm.',
    r: 'Is this norm helping or hurting everyone\'s health?' },
  { t: 'After learning about sleep, a student sets a bedtime alarm even though friends stay up late.',
    norm: false,
    e: 'They chose the healthier action on their own, going against the group. That is a personal choice.',
    r: 'How hard is it to make a healthy choice when the norm is different?' },
  { t: 'At family dinners everyone always washes their hands first, so the youngest child just does it too.',
    norm: true,
    e: 'The behavior is expected in the group and passed down without question - a family norm.',
    r: 'Is this a norm worth keeping? Why?' },
  { t: 'A student tries a new sport class alone because they were curious, even though no friends signed up.',
    norm: false,
    e: 'Personal curiosity drove it, not the group. That is a personal choice.',
    r: 'What personal reasons make a healthy choice easier to stick with?' },
  { t: 'Nobody in the friend group wears a helmet biking, so a new member stops wearing theirs to fit in.',
    norm: true,
    e: 'The group\'s unspoken habit shaped the behavior, overriding a personal safety decision. That is a norm.',
    r: 'Is this norm helping or hurting the group\'s health?' },
  { t: 'A student picks a smaller portion of dessert because that is the amount that feels right to them.',
    norm: false,
    e: 'The decision came from the individual\'s own sense of what fits, not from the group. Personal choice.',
    r: 'How do personal choices differ when others are watching?' },
  { t: 'On this bus everyone offers their seat to older riders, so kids learn to do it without being told.',
    norm: true,
    e: 'It is the shared, expected way to act in this group - a helpful community norm learned by watching.',
    r: 'Can a norm and a personal choice line up? When?' },
  { t: 'Feeling too tired, one player asks the coach to rest, even though teammates keep pushing through.',
    norm: false,
    e: 'Listening to their own body and speaking up went against the group - a personal choice.',
    r: 'When is it healthy to choose differently from the group?' }
];

let order = [];       // shuffled indices into deck
let pos = 0;          // position within order
let chosen = -1;      // -1 none, 1 clicked Norm, 0 clicked Choice
let normCount = 0;    // running tally of cards sorted this way
let choiceCount = 0;
let scored = {};      // order-position -> true once counted (avoid double count)

let normBin = {};
let choiceBin = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Card');
  nextButton.mousePressed(nextCard);
  nextButton.parent(document.querySelector('main'));
  resetButton = createButton('Reset & Reshuffle');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));
  positionControls();

  shuffleDeck();

  describe('One realistic health scenario card is shown at a time from a shuffled deck of ten. ' +
    'Students tap the "Mainly A Social Norm" bin or the "Mainly A Personal Choice" bin to judge ' +
    'what drives the behavior. Feedback then explains the reasoning, notes that many behaviors ' +
    'blend both, and asks a short reflection question. A running tally shows how many cards went ' +
    'to each bin, and Next Card advances the deck.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(120, drawHeight + 12);
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
  textSize(22);
  text('Social Norm or Personal Choice?', canvasWidth / 2, 10);

  // Instruction line
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Read the scenario. Tap the bin that best fits what drives the behavior.',
       margin, 38, canvasWidth - 2 * margin, 20);

  let sc = deck[order[pos]];

  // Scenario card
  let cardX = margin;
  let cardY = 66;
  let cardW = canvasWidth - 2 * margin;
  let cardH = 128;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();

  // card counter (top-left inside card)
  fill('goldenrod');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Card ' + (pos + 1) + ' of ' + deck.length, cardX + 14, cardY + 10);

  // scenario sentence (wrapped)
  fill('black');
  textAlign(LEFT, TOP);
  textSize(17);
  text(sc.t, cardX + 14, cardY + 32, cardW - 28, cardH - 42);

  // Two bins
  let binGap = 14;
  let binW = (canvasWidth - 2 * margin - binGap) / 2;
  let binH = 96;
  let binY = cardY + cardH + 16;
  normBin = { x: margin, y: binY, w: binW, h: binH, norm: true };
  choiceBin = { x: margin + binW + binGap, y: binY, w: binW, h: binH, norm: false };

  drawBin(normBin, 'Mainly A', 'Social Norm', 'steelblue', 'lightsteelblue', sc);
  drawBin(choiceBin, 'Mainly A', 'Personal Choice', 'seagreen', 'palegreen', sc);

  cursor((chosen < 0 && overAnyBin()) ? HAND : ARROW);

  // Running tally line
  let tallyY = binY + binH + 10;
  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('steelblue');
  textAlign(LEFT, TOP);
  text('Norm: ' + normCount, margin, tallyY);
  fill('seagreen');
  textAlign(RIGHT, TOP);
  text('Choice: ' + choiceCount, canvasWidth - margin, tallyY);
  fill('gray');
  textAlign(CENTER, TOP);
  text('Sorted: ' + (normCount + choiceCount) + ' / ' + deck.length, canvasWidth / 2, tallyY);

  // Feedback / reflection panel
  let fbY = tallyY + 22;
  let fbX = margin;
  let fbW = canvasWidth - 2 * margin;
  let fbH = drawHeight - fbY - 8;

  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(fbX, fbY, fbW, fbH, 10);
  noStroke();

  let pad = 12;
  if (chosen >= 0) {
    let correct = (chosen === 1) === sc.norm;
    // heading
    fill(correct ? 'seagreen' : 'indianred');
    textAlign(LEFT, TOP);
    textSize(16);
    let head = correct
      ? 'Good analysis - that is the main driver.'
      : 'Look again - which force is really steering this?';
    text(head, fbX + pad, fbY + pad, fbW - 2 * pad, 40);

    // reasoning
    fill('black');
    textSize(14);
    text('Why: ' + sc.e + ' Many behaviors are a mix of both.',
         fbX + pad, fbY + pad + 40, fbW - 2 * pad, fbH - pad - 40 - 40);

    // reflection question at the bottom
    fill('mediumpurple');
    textSize(14);
    textStyle(ITALIC);
    text('Reflect: ' + sc.r, fbX + pad, fbY + fbH - 44, fbW - 2 * pad, 40);
    textStyle(NORMAL);
  } else {
    fill('gray');
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Ask yourself: did this person decide on their own, or are they following what the group already does?',
         fbX + pad, fbY + pad, fbW - 2 * pad, fbH - 2 * pad);
  }
}

// Draw one bin with a two-line label and hover / result state.
function drawBin(b, line1, line2, edgeCol, glowCol, sc) {
  let correctBin = (b.norm === sc.norm);
  let chosenThis = (chosen >= 0) && ((chosen === 1) === b.norm);
  let showHint = (chosen >= 0) && !((chosen === 1) === sc.norm) && correctBin; // wrong pick: glow correct bin
  let hover = (chosen < 0) && pointInRect(mouseX, mouseY, b);

  // soft glow behind the correct bin (right answer or hint)
  if ((chosenThis && correctBin) || showHint) {
    noStroke();
    fill(glowCol);
    rect(b.x - 5, b.y - 5, b.w + 10, b.h + 10, 16);
  }

  strokeWeight((chosenThis || showHint) ? 4 : 2);
  stroke((chosenThis && correctBin) || showHint ? 'seagreen'
        : (chosenThis && !correctBin ? 'indianred' : edgeCol));
  fill(hover ? 'honeydew' : 'white');
  rect(b.x, b.y, b.w, b.h, 14);

  // simple icon near the top of the bin
  noStroke();
  if (b.norm) drawGroupIcon(b.x + b.w / 2, b.y + 30, edgeCol);
  else drawPersonIcon(b.x + b.w / 2, b.y + 30, edgeCol);

  // two-line label at the bottom of the bin
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(12);
  text(line1, b.x + 4, b.y + b.h - 36, b.w - 8, 16);
  fill('black');
  textSize(15);
  text(line2, b.x + 4, b.y + b.h - 22, b.w - 8, 18);
}

// Three little figures = a group / crowd norm.
function drawGroupIcon(cx, cy, col) {
  push();
  noStroke();
  fill(col);
  let dx = 15;
  for (let i = -1; i <= 1; i++) {
    let x = cx + i * dx;
    circle(x, cy - 6, 11);            // head
    rect(x - 6, cy, 12, 16, 5);       // body
  }
  pop();
}

// One figure = an individual choice.
function drawPersonIcon(cx, cy, col) {
  push();
  noStroke();
  fill(col);
  circle(cx, cy - 6, 15);             // head
  rect(cx - 9, cy + 3, 18, 20, 6);    // body
  pop();
}

function overAnyBin() {
  return pointInRect(mouseX, mouseY, normBin) || pointInRect(mouseX, mouseY, choiceBin);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (chosen >= 0) return; // one judgment per card until Next
  let pick = -1;
  if (pointInRect(mouseX, mouseY, normBin)) pick = 1;
  else if (pointInRect(mouseX, mouseY, choiceBin)) pick = 0;
  if (pick < 0) return;

  chosen = pick;
  // tally by the bin the learner chose, once per card
  if (!scored[pos]) {
    scored[pos] = true;
    if (pick === 1) normCount++;
    else choiceCount++;
  }
}

function nextCard() {
  pos = (pos + 1) % deck.length;
  chosen = -1;
}

function shuffleDeck() {
  order = [];
  for (let i = 0; i < deck.length; i++) order.push(i);
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }
}

function resetAll() {
  shuffleDeck();
  pos = 0;
  chosen = -1;
  normCount = 0;
  choiceCount = 0;
  scored = {};
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
