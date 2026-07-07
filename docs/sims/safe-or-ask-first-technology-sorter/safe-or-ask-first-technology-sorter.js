// Safe or Ask First? Technology Sorter - MicroSim (scenario sorter)
// CANVAS_HEIGHT: 500
// Grade 1, Apply (L3): a child taps the bin that matches each technology
// scenario -- "Safe to Do" or "Ask a Trusted Adult First" -- then hears why.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// answer: 'safe' or 'ask'
// icon: a small keyword used by drawCardIcon()
let scenarios = [
  {
    text: 'Playing a game a trusted adult picked for you.',
    answer: 'safe',
    icon: 'game',
    why: 'Safe to do. A trusted adult already checked this game for you.'
  },
  {
    text: 'Watching a video a grown-up chose for you.',
    answer: 'safe',
    icon: 'video',
    why: 'Safe to do. A grown-up picked this video, so it is okay to watch.'
  },
  {
    text: 'A pop-up asks you to type in your home address.',
    answer: 'ask',
    icon: 'address',
    why: 'Ask first. Your address is private. Let a trusted adult help.'
  },
  {
    text: 'A message asks for your full name and school.',
    answer: 'ask',
    icon: 'name',
    why: 'Ask first. Your name and school are private information.'
  },
  {
    text: 'Reading an e-book from your class reading list.',
    answer: 'safe',
    icon: 'book',
    why: 'Safe to do. Books on your class list are chosen by your teacher.'
  },
  {
    text: 'A game wants you to type in a photo of yourself.',
    answer: 'ask',
    icon: 'photo',
    why: 'Ask first. A photo of you is private. Check with a trusted adult.'
  },
  {
    text: 'Drawing a picture in an art app a grown-up set up.',
    answer: 'safe',
    icon: 'art',
    why: 'Safe to do. A grown-up set up this app for you to enjoy.'
  },
  {
    text: 'A screen asks you to type your phone number to win.',
    answer: 'ask',
    icon: 'phone',
    why: 'Ask first. Your phone number is private. Find a trusted adult.'
  }
];

let order = [];
let pos = 0;          // index into order
let chosen = null;    // 'safe' | 'ask' | null
let results = {};     // scenarioOriginalIndex -> true(correct)/false(missed)
let tryAgain = false; // true after a wrong tap, so we hint and let them retry

let safeRect = {};
let askRect = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Start Over');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  buildOrder();
  positionControls();
  describe('A card shows one short technology scenario with a picture. Two big ' +
    'bins below, "Safe to Do" and "Ask a Trusted Adult First", are tapped to sort ' +
    'the card. A friendly message tells the child if it matches and why.', LABEL);
}

function buildOrder() {
  // Keep the first, confidence-building scenario first; shuffle the rest.
  order = [0];
  let rest = [];
  for (let i = 1; i < scenarios.length; i++) rest.push(i);
  for (let i = rest.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = rest[i]; rest[i] = rest[j]; rest[j] = t;
  }
  order = order.concat(rest);
  pos = 0;
  chosen = null;
  tryAgain = false;
}

function positionControls() {
  nextButton.position(margin, drawHeight + 14);
  resetButton.position(margin + 90, drawHeight + 14);
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
  textSize(23);
  text('Safe or Ask First?', canvasWidth / 2, 12);

  let allDone = Object.keys(results).length === scenarios.length;
  if (allDone && chosen === null) {
    drawSummary();
    drawBins(true, null);
    cursor(ARROW);
    return;
  }

  let sIdx = order[pos];
  let sc = scenarios[sIdx];

  // Progress line
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Card ' + (pos + 1) + ' of ' + scenarios.length, canvasWidth / 2, 42);

  // Scenario card
  let cardX = margin;
  let cardY = 66;
  let cardW = canvasWidth - 2 * margin;
  let cardH = 120;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();

  // Simple flat illustration on the left of the card
  drawCardIcon(sc.icon, cardX + 46, cardY + cardH / 2, 66);

  // Short sentence to the right of the icon
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(18);
  let textX = cardX + 92;
  text(sc.text, textX, cardY + 12, cardX + cardW - textX - 12, cardH - 24);

  // Prompt
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(15);
  if (chosen === null) {
    text('Tap the box that fits.', canvasWidth / 2, cardY + cardH + 8);
  } else {
    text('Tap Next for another card.', canvasWidth / 2, cardY + cardH + 8);
  }

  // Bins
  drawBins(false, sc);

  // Feedback message
  drawFeedback(sc);

  cursor((chosen === null && overBins()) ? HAND : ARROW);
}

function drawBins(dim, sc) {
  let binY = 226;
  let binH = 118;
  let gap = 16;
  let binW = (canvasWidth - 2 * margin - gap) / 2;

  safeRect = { x: margin, y: binY, w: binW, h: binH, key: 'safe' };
  askRect = { x: margin + binW + gap, y: binY, w: binW, h: binH, key: 'ask' };

  drawOneBin(safeRect, 'Safe to Do', 'seagreen', 'honeydew', dim, sc);
  drawOneBin(askRect, 'Ask a Trusted Adult First', 'goldenrod', 'cornsilk', dim, sc);
}

function drawOneBin(r, label, edge, fillCol, dim, sc) {
  let hover = !dim && chosen === null && pointInRect(mouseX, mouseY, r);
  let isChosen = !dim && chosen === r.key;
  // glow the correct bin once a choice is made (or as a hint on a wrong try)
  let showAnswer = !dim && chosen !== null && sc;
  let isAnswer = showAnswer && sc.answer === r.key;
  let correctPick = showAnswer && chosen === sc.answer;

  strokeWeight(isAnswer ? 5 : (isChosen ? 4 : 2.5));
  stroke(isAnswer ? 'seagreen' : (hover ? 'darkorange' : edge));
  fill(hover ? 'lightyellow' : fillCol);
  rect(r.x, r.y, r.w, r.h, 12);

  // Icon for the bin
  noStroke();
  let iconCol = (edge === 'seagreen') ? 'seagreen' : 'darkgoldenrod';
  if (r.key === 'safe') {
    drawCheck(r.x + r.w / 2, r.y + 34, 26, iconCol);
  } else {
    drawHand(r.x + r.w / 2, r.y + 36, 26, iconCol);
  }

  // Label (wrapped, centered under the icon)
  fill(iconCol);
  textAlign(CENTER, TOP);
  textSize(r.key === 'safe' ? 18 : 15);
  text(label, r.x + 6, r.y + 62, r.w - 12, r.h - 66);

  // Small marker when this bin is the answer, or the child's wrong pick
  if (isAnswer && correctPick) {
    // handled by the feedback banner; no extra label needed
  } else if (isAnswer && !correctPick) {
    // gentle hint marker on the correct bin
    noStroke();
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text('this one', r.x + r.w / 2, r.y + r.h - 6);
  }
}

function drawFeedback(sc) {
  if (chosen === null) return;

  let correct = chosen === sc.answer;
  let panelY = 356;
  let panelH = drawHeight - panelY - 12;

  fill(correct ? 'honeydew' : 'oldlace');
  stroke(correct ? 'seagreen' : 'goldenrod');
  strokeWeight(2);
  rect(margin, panelY, canvasWidth - 2 * margin, panelH, 10);
  noStroke();

  textAlign(LEFT, TOP);
  let boxX = margin + 12;
  let boxW = canvasWidth - 2 * margin - 24;

  if (correct) {
    fill('seagreen');
    textSize(16);
    text('Great job!', boxX, panelY + 9, boxW, 22);
    fill('black');
    textSize(14);
    text(sc.why, boxX, panelY + 33, boxW, panelH - 40);
  } else {
    fill('darkgoldenrod');
    textSize(15);
    text('Take another look.', boxX, panelY + 8, boxW, 20);
    fill('black');
    textSize(14);
    text('Would you need to type in private information? The green box shows the answer.',
         boxX, panelY + 30, boxW, panelH - 36);
  }
}

// ---- summary screen ----
function drawSummary() {
  let correct = 0, total = scenarios.length;
  for (let i = 0; i < total; i++) if (results[i]) correct++;

  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(20);
  text('All done!', canvasWidth / 2, 54);

  fill('black');
  textSize(17);
  text('You sorted ' + correct + ' of ' + total + ' on your first try.',
       margin, 92, canvasWidth - 2 * margin, 48);

  fill('slategray');
  textSize(15);
  text('Remember: ask a trusted adult before you share private ' +
       'information like your name, address, school, or photo.',
       margin, 148, canvasWidth - 2 * margin, 64);

  fill('dimgray');
  textSize(14);
  text('Tap Start Over to play again.', canvasWidth / 2, 200);
}

// ---- simple flat illustrations (drawn, not clip-art) ----
function drawCardIcon(kind, cx, cy, s) {
  push();
  translate(cx, cy);
  strokeJoin(ROUND);
  if (kind === 'game') {
    // game controller
    noStroke();
    fill('mediumpurple');
    rectMode(CENTER);
    rect(0, 2, s * 0.9, s * 0.5, s * 0.25);
    rectMode(CORNER);
    fill('white');
    // d-pad
    rect(-s * 0.28, -s * 0.02, s * 0.12, s * 0.05);
    rect(-s * 0.255, -s * 0.09, s * 0.05, s * 0.16);
    // buttons
    fill('gold');
    circle(s * 0.2, -s * 0.03, s * 0.12);
    circle(s * 0.3, s * 0.07, s * 0.12);
  } else if (kind === 'video') {
    // play screen
    fill('steelblue');
    rectMode(CENTER);
    rect(0, 0, s * 0.95, s * 0.7, 8);
    rectMode(CORNER);
    fill('white');
    triangle(-s * 0.1, -s * 0.16, -s * 0.1, s * 0.16, s * 0.2, 0);
  } else if (kind === 'book') {
    // open book
    noStroke();
    fill('seagreen');
    rectMode(CENTER);
    rect(0, 0, s * 0.9, s * 0.66, 4);
    rectMode(CORNER);
    fill('white');
    rect(-s * 0.4, -s * 0.26, s * 0.36, s * 0.52, 2);
    rect(s * 0.04, -s * 0.26, s * 0.36, s * 0.52, 2);
    stroke('silver');
    strokeWeight(2);
    line(-s * 0.34, -s * 0.14, -s * 0.1, -s * 0.14);
    line(-s * 0.34, 0, -s * 0.1, 0);
    line(s * 0.1, -s * 0.14, s * 0.34, -s * 0.14);
    line(s * 0.1, 0, s * 0.34, 0);
  } else if (kind === 'art') {
    // paint palette
    noStroke();
    fill('goldenrod');
    ellipse(0, 0, s * 0.95, s * 0.8);
    fill('aliceblue');
    ellipse(s * 0.22, s * 0.06, s * 0.28, s * 0.24);
    fill('indianred');
    circle(-s * 0.28, -s * 0.12, s * 0.16);
    fill('steelblue');
    circle(-s * 0.02, -s * 0.24, s * 0.16);
    fill('seagreen');
    circle(-s * 0.3, s * 0.16, s * 0.16);
  } else if (kind === 'address' || kind === 'name' || kind === 'phone' || kind === 'photo') {
    // a screen/form with a private-info symbol
    fill('slategray');
    rectMode(CENTER);
    rect(0, 0, s * 0.95, s * 0.78, 8);
    fill('white');
    rect(0, 0, s * 0.8, s * 0.62, 4);
    rectMode(CORNER);
    noStroke();
    if (kind === 'address') {
      // little house
      fill('indianred');
      triangle(-s * 0.24, -s * 0.02, s * 0.24, -s * 0.02, 0, -s * 0.26);
      fill('goldenrod');
      rect(-s * 0.18, -s * 0.02, s * 0.36, s * 0.24);
    } else if (kind === 'name') {
      // ID card with a person
      fill('steelblue');
      circle(-s * 0.14, -s * 0.08, s * 0.16);
      arc(-s * 0.14, s * 0.16, s * 0.28, s * 0.28, PI, TWO_PI);
      fill('slategray');
      rect(s * 0.06, -s * 0.14, s * 0.2, s * 0.05);
      rect(s * 0.06, -s * 0.04, s * 0.2, s * 0.05);
      rect(s * 0.06, s * 0.06, s * 0.14, s * 0.05);
    } else if (kind === 'phone') {
      // phone handset
      fill('seagreen');
      arc(0, s * 0.06, s * 0.5, s * 0.5, PI + 0.5, TWO_PI - 0.5);
      circle(-s * 0.19, -s * 0.05, s * 0.14);
      circle(s * 0.19, -s * 0.05, s * 0.14);
    } else if (kind === 'photo') {
      // camera
      fill('slategray');
      rect(-s * 0.26, -s * 0.1, s * 0.52, s * 0.3, 3);
      fill('white');
      circle(0, s * 0.05, s * 0.2);
      fill('steelblue');
      circle(0, s * 0.05, s * 0.11);
      fill('slategray');
      rect(-s * 0.2, -s * 0.16, s * 0.14, s * 0.07);
    }
  }
  pop();
  rectMode(CORNER);
}

function drawCheck(cx, cy, s, col) {
  push();
  stroke(col);
  strokeWeight(5);
  strokeCap(ROUND);
  noFill();
  line(cx - s * 0.4, cy, cx - s * 0.08, cy + s * 0.32);
  line(cx - s * 0.08, cy + s * 0.32, cx + s * 0.45, cy - s * 0.35);
  pop();
}

function drawHand(cx, cy, s, col) {
  push();
  noStroke();
  fill(col);
  // palm
  ellipse(cx, cy + s * 0.12, s * 0.72, s * 0.66);
  // fingers
  rectMode(CENTER);
  rect(cx - s * 0.27, cy - s * 0.12, s * 0.16, s * 0.5, s * 0.08);
  rect(cx - s * 0.09, cy - s * 0.2, s * 0.16, s * 0.6, s * 0.08);
  rect(cx + s * 0.09, cy - s * 0.2, s * 0.16, s * 0.6, s * 0.08);
  rect(cx + s * 0.27, cy - s * 0.12, s * 0.16, s * 0.5, s * 0.08);
  // thumb
  rect(cx - s * 0.42, cy + s * 0.14, s * 0.14, s * 0.34, s * 0.07);
  rectMode(CORNER);
  pop();
}

function overBins() {
  return pointInRect(mouseX, mouseY, safeRect) || pointInRect(mouseX, mouseY, askRect);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY >= drawHeight) return;                 // ignore control strip
  let allDone = Object.keys(results).length === scenarios.length;
  if (allDone && chosen === null) return;           // summary showing
  if (chosen !== null) return;                      // already sorted; wait for Next

  let sIdx = order[pos];
  let pick = null;
  if (pointInRect(mouseX, mouseY, safeRect)) pick = 'safe';
  else if (pointInRect(mouseX, mouseY, askRect)) pick = 'ask';
  else return;

  chosen = pick;
  // record only the FIRST attempt for the score
  if (!(sIdx in results)) {
    results[sIdx] = (pick === scenarios[sIdx].answer);
  }
}

function nextScenario() {
  if (chosen === null) return;                      // must sort before moving on
  if (pos < order.length - 1) {
    pos++;
    chosen = null;
  } else {
    chosen = null;                                  // triggers summary when all sorted
  }
}

function resetAll() {
  results = {};
  buildOrder();
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
