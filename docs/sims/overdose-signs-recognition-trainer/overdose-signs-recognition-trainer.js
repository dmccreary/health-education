// Overdose Signs Recognition Trainer - MicroSim (card-to-category matching)
// CANVAS_HEIGHT: 608
// Grade 9-12, Remember/Understand (L1/L2): students read a factual sign card, then tap
// the emergency category it belongs to (Opioid Overdose, Alcohol Poisoning, Stimulant
// Overdose). Immediate feedback explains the match. Plainly sincere, clinical, no
// depiction of a person, substance, or method of use. "Show All Signs" is a full reference.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 548;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

// cat: 0 = Opioid Overdose, 1 = Alcohol Poisoning, 2 = Stimulant Overdose
// e: brief reason the sign points to that emergency
let signs = [
  { t: 'Pinpoint (very small) pupils', cat: 0,
    e: 'Opioids constrict the pupils to tiny points.' },
  { t: 'Very slow or stopped breathing', cat: 0,
    e: 'Opioids depress the drive to breathe.' },
  { t: 'Blue or gray tinge to lips and fingertips', cat: 0,
    e: 'Slowed breathing lowers oxygen, so lips and nails turn blue-gray.' },
  { t: 'Limp body, cannot be woken', cat: 0,
    e: 'Deep unresponsiveness is a core opioid-overdose sign.' },
  { t: 'Cold, clammy, pale skin', cat: 1,
    e: 'Alcohol poisoning can drop body temperature and cause clammy skin.' },
  { t: 'Vomiting while unresponsive', cat: 1,
    e: 'A depressed gag reflex makes vomiting while unconscious a poisoning danger.' },
  { t: 'Fewer than 8 breaths per minute', cat: 1,
    e: 'Alcohol slows breathing; under 8 per minute is an emergency.' },
  { t: 'Seizures with heavy drinking', cat: 1,
    e: 'Severe alcohol poisoning can trigger seizures.' },
  { t: 'Dangerously high body temperature', cat: 2,
    e: 'Stimulants can spike body temperature (hyperthermia).' },
  { t: 'Racing or irregular heartbeat', cat: 2,
    e: 'Stimulants overstimulate the heart, causing a racing rhythm.' },
  { t: 'Severe agitation or paranoia', cat: 2,
    e: 'Overstimulation of the brain can cause extreme agitation.' },
  { t: 'Chest pain', cat: 2,
    e: 'Stimulants strain the heart and can cause chest pain.' }
];

let catNames = ['Opioid\nOverdose', 'Alcohol\nPoisoning', 'Stimulant\nOverdose'];
let catShort = ['Opioid Overdose', 'Alcohol Poisoning', 'Stimulant Overdose'];
let catColors = ['steelblue', 'mediumpurple', 'goldenrod'];
let catFill = ['aliceblue', 'lavender', 'cornsilk'];

let order = [];          // shuffled indices of signs still in the deck
let placed = [];         // per category: array of sign indices correctly/placed
let selected = -1;       // index into signs of the currently selected card (-1 none)
let feedback = '';       // feedback message
let feedbackOk = false;
let correctCount = 0;
let showAll = false;

let tabRects = [];
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showAllButton = createButton('Show All Signs');
  showAllButton.mousePressed(toggleAll);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  reset();
  describe('A recognition trainer. A factual sign of a substance emergency is shown; ' +
    'the student taps a sign card to select it, then taps the category it belongs to ' +
    '(Opioid Overdose, Alcohol Poisoning, or Stimulant Overdose). Immediate feedback ' +
    'explains why. Show All Signs reveals a complete reference of every sign by category.', LABEL);
}

function positionControls() {
  showAllButton.position(10, drawHeight + 15);
  resetButton.position(140, drawHeight + 15);
}

function reset() {
  order = [];
  for (let i = 0; i < signs.length; i++) order.push(i);
  // shuffle
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }
  placed = [[], [], []];
  selected = -1;
  feedback = '';
  feedbackOk = false;
  correctCount = 0;
  showAll = false;
  if (showAllButton) showAllButton.html('Show All Signs');
}

function toggleAll() {
  showAll = !showAll;
  showAllButton.html(showAll ? 'Hide All Signs' : 'Show All Signs');
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
  text('Overdose Signs Recognition Trainer', canvasWidth / 2, 8);

  if (showAll) {
    drawReference();
    return;
  }

  drawTabs();
  drawInstruction();
  drawDeck();
  drawFeedback();
}

// ---- category tabs (tappable bins) ----
function drawTabs() {
  tabRects = [];
  let gap = 8;
  let tw = (canvasWidth - margin * 2 - gap * 2) / 3;
  let ty = 36;
  let th = 52;
  for (let c = 0; c < 3; c++) {
    let tx = margin + c * (tw + gap);
    tabRects.push({ x: tx, y: ty, w: tw, h: th, c: c });
    let hover = selected >= 0 && pointInRect(mouseX, mouseY, tabRects[c]);
    stroke(catColors[c]);
    strokeWeight(hover ? 3 : 2);
    fill(hover ? catFill[c] : 'white');
    rect(tx, ty, tw, th, 8);
    noStroke();
    fill(catColors[c]);
    textAlign(CENTER, TOP);
    textSize(tw < 110 ? 12 : 13);
    text(catNames[c], tx + 4, ty + 6, tw - 8, 34);
    // count of signs placed here
    textAlign(CENTER, BOTTOM);
    textSize(11);
    fill('dimgray');
    text(placed[c].length + ' placed', tx, ty + th - 4, tw, 14);
  }
}

function drawInstruction() {
  noStroke();
  textAlign(CENTER, TOP);
  textSize(12);
  fill('navy');
  let msg;
  if (order.length === 0) {
    msg = 'All 12 signs placed. Tap Show All Signs to review, or Reset to shuffle.';
  } else if (selected < 0) {
    msg = 'Tap a sign card below, then tap the emergency it belongs to.';
  } else {
    msg = 'Now tap the category this sign belongs to.';
  }
  text(msg, margin, 94, canvasWidth - margin * 2, 22);
}

// ---- deck of remaining sign cards ----
function drawDeck() {
  cardRects = [];
  let y0 = 120;
  let ch = 26;
  let gap = 4;
  let cw = canvasWidth - margin * 2;
  for (let k = 0; k < order.length; k++) {
    let i = order[k];
    let y = y0 + k * (ch + gap);
    if (y + ch > drawHeight - 66) break; // never overrun feedback area
    cardRects.push({ x: margin, y: y, w: cw, h: ch, i: i });
    let isSel = (selected === i);
    let hover = pointInRect(mouseX, mouseY, cardRects[cardRects.length - 1]);
    strokeWeight(isSel ? 3 : 1.5);
    stroke(isSel ? 'navy' : 'silver');
    fill(isSel ? 'lightyellow' : (hover ? 'honeydew' : 'white'));
    rect(margin, y, cw, ch, 6);
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(13);
    text(signs[i].t, margin + 10, y + ch / 2, cw - 20, ch);
  }
  cursor((overAnyCard() || (selected >= 0 && overAnyTab())) ? HAND : ARROW);
}

// ---- feedback panel at the bottom of the draw area ----
function drawFeedback() {
  let fy = drawHeight - 62;
  let fh = 54;
  noStroke();
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, fh, 6);
  noStroke();
  if (feedback === '') {
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(12);
    text('Correct so far: ' + correctCount + ' of 12',
      margin, fy, canvasWidth - margin * 2, fh);
  } else {
    fill(feedbackOk ? 'seagreen' : 'indianred');
    textAlign(LEFT, TOP);
    textSize(12);
    text((feedbackOk ? '✓ ' : '✗ ') + feedback,
      margin + 10, fy + 6, canvasWidth - margin * 2 - 20, fh - 10);
  }
}

// ---- full reference table ----
function drawReference() {
  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('navy');
  text('Complete reference — every sign by category', margin, 34, canvasWidth - margin * 2, 20);

  let colGap = 8;
  let cw = (canvasWidth - margin * 2 - colGap * 2) / 3;
  let y0 = 60;
  let colH = drawHeight - y0 - 40;
  for (let c = 0; c < 3; c++) {
    let cx = margin + c * (cw + colGap);
    stroke(catColors[c]);
    strokeWeight(2);
    fill(catFill[c]);
    rect(cx, y0, cw, colH, 8);
    noStroke();
    // header
    fill(catColors[c]);
    textAlign(CENTER, TOP);
    textSize(cw < 115 ? 12 : 13);
    text(catShort[c], cx + 4, y0 + 8, cw - 8, 30);
    // signs
    fill('black');
    textAlign(LEFT, TOP);
    textSize(cw < 115 ? 10 : 11);
    let ry = y0 + 42;
    for (let i = 0; i < signs.length; i++) {
      if (signs[i].cat !== c) continue;
      text('• ' + signs[i].t, cx + 6, ry, cw - 12, 40);
      ry += 34;
    }
  }
  // safety line
  fill('navy');
  textAlign(CENTER, BOTTOM);
  textSize(12);
  text('For any of these signs: call 911 and stay with the person.',
    margin, drawHeight - 8, canvasWidth - margin * 2, 30);
}

// ---- hit testing ----
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}
function overAnyCard() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function overAnyTab() {
  for (let r of tabRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function mousePressed() {
  if (showAll) return;
  // first: if a card is selected, a tab tap resolves the match
  if (selected >= 0) {
    for (let r of tabRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        resolveMatch(selected, r.c);
        return;
      }
    }
  }
  // otherwise: tap a card to select it
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selected = (selected === r.i) ? -1 : r.i;
      feedback = '';
      return;
    }
  }
}

function resolveMatch(signIdx, catChoice) {
  let correct = (signs[signIdx].cat === catChoice);
  if (correct) {
    feedbackOk = true;
    feedback = 'Correct — ' + signs[signIdx].e;
    correctCount++;
    placed[catChoice].push(signIdx);
    // remove from deck
    let pos = order.indexOf(signIdx);
    if (pos >= 0) order.splice(pos, 1);
    selected = -1;
  } else {
    feedbackOk = false;
    feedback = 'Not quite — that sign points to ' + catShort[signs[signIdx].cat] +
      '. Try tapping that category.';
    // keep card selected so the student can try the correct tab
  }
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
