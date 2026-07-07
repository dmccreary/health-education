// Peer Pressure Situation Sorter - MicroSim (low-risk vs. needs a refusal skill)
// CANVAS_HEIGHT: 512
// Grade 4, Analyze (L4): students examine short peer-pressure scenarios and distinguish
// low-risk social pressure from pressure toward an unsafe or unhealthy choice.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton;
let nextButton;

// need = false -> Low-Risk Choice ; need = true -> Needs a Refusal Skill
// e = short explanation shown by "Why?" or after sorting
let deck = [
  { t: "A friend asks you to try a new snack at lunch you have never had before.",
    s: 'Try a new snack at lunch', need: false,
    e: 'Trying a new, safe snack is a friendly, low-risk choice. It is okay to say yes or no.' },
  { t: "Kids at recess want you to join a new game you have not played yet.",
    s: 'Join a new game at recess', need: false,
    e: 'Joining a new game is low-risk. You can try it or pick a different activity.' },
  { t: "A friend says you are a baby if you wear your bike helmet on the ride home.",
    s: 'Skip your bike helmet', need: true,
    e: 'This pushes you to skip safety gear. A helmet protects you, so this needs a refusal skill.' },
  { t: "Someone wants you to leave the park with them without telling any adult.",
    s: 'Leave without telling an adult', need: true,
    e: 'Going somewhere without telling a trusted adult is unsafe. This needs a refusal skill.' },
  { t: "Friends dare you to leave one classmate out of the group on purpose.",
    s: 'Leave a classmate out', need: true,
    e: 'Leaving someone out on purpose can hurt them. This needs a refusal skill.' },
  { t: "A classmate asks if you want to sit together at lunch today.",
    s: 'Sit together at lunch', need: false,
    e: 'Choosing where to sit with a friend is a friendly, low-risk choice.' },
  { t: "A friend dares you to climb the tall fence behind the school.",
    s: 'Climb the tall school fence', need: true,
    e: 'A dare to do something that could get you hurt needs a refusal skill.' },
  { t: "Someone asks if you want to trade one of your stickers at recess.",
    s: 'Trade a sticker at recess', need: false,
    e: 'Trading stickers is a fair, low-risk choice. You can say yes or no.' }
];

let order = [];
let placed = []; // per card: null, false (low-risk), or true (needs refusal)
let idx = 0;         // position in order
let showWhy = false; // "Why?" pressed for the current card
let done = false;    // reached summary screen

let lowRect = null, needRect = null;
let reviewRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  whyButton = createButton('Why?');
  whyButton.parent(document.querySelector('main'));
  whyButton.mousePressed(() => { if (!done) showWhy = true; });

  nextButton = createButton('Next Scenario');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);

  startOver();
  positionControls();
  describe('One short peer-pressure scenario at a time. Tap the Low-Risk Choice zone or the ' +
    'Needs a Refusal Skill zone to sort it, use Why to see an explanation, and Next Scenario to ' +
    'continue. A summary shows how many were sorted with a way to review each one.', LABEL);
}

function positionControls() {
  whyButton.position(margin, drawHeight + 14);
  nextButton.position(margin + 80, drawHeight + 14);
}

function startOver() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  placed = new Array(deck.length).fill(null);
  idx = 0; showWhy = false; done = false;
}

function nextScenario() {
  if (done) { startOver(); return; }
  // require a sort before moving on; otherwise reveal the hint
  if (placed[order[idx]] === null) { showWhy = true; return; }
  if (idx < deck.length - 1) { idx++; showWhy = false; }
  else { done = true; }
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('navy'); textAlign(CENTER, TOP); textSize(18);
  text('Peer Pressure Situation Sorter', canvasWidth / 2, 8);

  if (done) drawSummary();
  else drawSorter();
}

function drawSorter() {
  let d = deck[order[idx]];
  let sorted = placed[order[idx]]; // null / false / true

  // progress line
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin, 36);
  let placedCount = placed.filter(p => p !== null).length;
  textAlign(RIGHT, TOP);
  text('Sorted ' + placedCount + '/' + deck.length, canvasWidth - margin, 36);

  // scenario card with two friendly speech bubbles
  let cardY = 58, cardH = 132;
  fill('white'); stroke('steelblue'); strokeWeight(2);
  rect(margin, cardY, canvasWidth - margin * 2, cardH, 12);
  drawSpeechBubbles(margin + 14, cardY + 16);
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(15);
  text(d.t, margin + 78, cardY + 16, canvasWidth - margin * 2 - 92, cardH - 28);

  // two sorting zones
  let zoneY = cardY + cardH + 14;
  let zoneH = 78;
  let gap = 12;
  let zoneW = (canvasWidth - margin * 2 - gap) / 2;
  lowRect = { x: margin, y: zoneY, w: zoneW, h: zoneH, val: false };
  needRect = { x: margin + zoneW + gap, y: zoneY, w: zoneW, h: zoneH, val: true };

  drawZone(lowRect, 'Low-Risk\nChoice', 'seagreen', 'honeydew', sorted);
  drawZone(needRect, 'Needs a\nRefusal Skill', 'goldenrod', 'cornsilk', sorted);

  cursor((sorted === null && overZones()) ? HAND : ARROW);

  // feedback / explanation area
  let fy = zoneY + zoneH + 12;
  let fh = drawHeight - fy - 8;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (sorted === null) {
    fill('dimgray');
    text('Read the situation. Is this a low-risk choice, or does it need a refusal skill? ' +
      'Tap a zone to sort it. Tap Why? for a hint.', margin, fy, canvasWidth - margin * 2, fh);
    if (showWhy) {
      fill('steelblue');
      text('Hint: A refusal skill is needed when the choice could be unsafe or could hurt someone.',
        margin, fy, canvasWidth - margin * 2, fh);
    }
  } else {
    let chose = sorted === d.need ? 'You sorted it here. ' : 'You sorted this one. ';
    // Framed as learning, never as a wrong-answer score.
    fill(d.need ? 'darkgoldenrod' : 'seagreen');
    let label = d.need ? 'Needs a Refusal Skill. ' : 'Low-Risk Choice. ';
    let extra = d.need ? ' The next section teaches exactly what to say.' : '';
    text(label + d.e + extra, margin, fy, canvasWidth - margin * 2, fh);
  }
}

function drawZone(r, label, lineCol, fillCol, sorted) {
  let hover = sorted === null && pointInRect(mouseX, mouseY, r);
  let chosen = sorted === r.val;
  strokeWeight(chosen ? 3.5 : 2);
  stroke(lineCol);
  if (chosen) fill(fillCol);
  else if (hover) fill('lightyellow');
  else fill('white');
  rect(r.x, r.y, r.w, r.h, 10);
  noStroke();
  fill(lineCol === 'goldenrod' ? 'darkgoldenrod' : lineCol);
  textAlign(CENTER, CENTER); textSize(16);
  text(label, r.x, r.y, r.w, r.h);
  if (chosen) {
    textAlign(RIGHT, TOP); textSize(18);
    text('✓', r.x + r.w - 8, r.y + 6);
  }
}

function drawSpeechBubbles(x, y) {
  // two overlapping neutral speech bubbles = two friends talking
  push();
  noStroke();
  fill('lightsteelblue');
  ellipse(x + 16, y + 14, 34, 26);
  triangle(x + 8, y + 26, x + 16, y + 26, x + 4, y + 36);
  fill('lightblue');
  ellipse(x + 40, y + 30, 30, 24);
  triangle(x + 46, y + 40, x + 40, y + 40, x + 52, y + 50);
  pop();
}

function drawSummary() {
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(CENTER, TOP); textSize(16); fill('seagreen');
  text('Great thinking! You sorted ' + placedCount + ' of ' + deck.length + ' situations.',
    margin, 40, canvasWidth - margin * 2, 44);

  noStroke(); textAlign(LEFT, TOP); textSize(12); fill('dimgray');
  text('Tap any situation to review it. Press Next Scenario to start over.',
    margin, 74, canvasWidth - margin * 2, 30);

  // review rows (short labels, one centered line each)
  reviewRects = [];
  let y0 = 100, rh = 34, gap = 6;
  let labelW = 108;
  for (let i = 0; i < deck.length; i++) {
    let d = deck[i];
    let y = y0 + i * (rh + gap);
    let r = { x: margin, y: y, w: canvasWidth - margin * 2, h: rh, i: i };
    reviewRects.push(r);
    let hover = pointInRect(mouseX, mouseY, r);
    let col = d.need ? 'goldenrod' : 'seagreen';
    strokeWeight(1.5); stroke(col);
    fill(hover ? 'lightyellow' : 'white');
    rect(r.x, r.y, r.w, r.h, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(d.s, r.x + 10, r.y, r.w - labelW - 18, rh);
    fill(d.need ? 'darkgoldenrod' : 'seagreen');
    textAlign(RIGHT, CENTER); textSize(11);
    text(d.need ? 'Refusal Skill' : 'Low-Risk', r.x + r.w - 10 - labelW, r.y, labelW, rh);
  }
  cursor(overReview() ? HAND : ARROW);
}

function overZones() { return pointInRect(mouseX, mouseY, lowRect) || pointInRect(mouseX, mouseY, needRect); }
function overReview() { for (let r of reviewRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return r && px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (done) {
    for (let r of reviewRects) {
      if (pointInRect(mouseX, mouseY, r)) { idx = order.indexOf(r.i); if (idx < 0) idx = r.i; done = false; showWhy = true; return; }
    }
    return;
  }
  if (placed[order[idx]] !== null) return; // already sorted; use Next
  if (pointInRect(mouseX, mouseY, lowRect)) { placed[order[idx]] = false; showWhy = false; return; }
  if (pointInRect(mouseX, mouseY, needRect)) { placed[order[idx]] = true; showWhy = false; return; }
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
