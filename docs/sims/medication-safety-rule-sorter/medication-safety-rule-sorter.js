// Medication Safety Rule Sorter - MicroSim (classify scenarios: safe practice or misuse)
// CANVAS_HEIGHT: 528
// Grades 6-8, Understand (L2): students classify medication scenarios as safe practice
// or misuse, distinguishing OTC from prescription and reinforcing the follow-the-label rule.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 58;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// safe = true (safe practice) / false (misuse); k = 'OTC' or 'Rx'; e = one/two sentence why
let deck = [
  { t: 'Taking the labeled amount of a pain reliever for a headache.', safe: true, k: 'OTC', e: 'Following the label exactly is safe practice for an over-the-counter medicine.' },
  { t: "Taking extra doses because one dose 'isn't working fast enough.'", safe: false, k: 'OTC', e: 'Taking more than the label says is misuse of an over-the-counter medicine, even for a common symptom.' },
  { t: "Taking a friend's prescription anti-anxiety medicine before a test.", safe: false, k: 'Rx', e: 'A prescription is written for one person only. Using someone else\'s is prescription misuse.' },
  { t: 'Asking a pharmacist before combining two medicines.', safe: true, k: 'OTC', e: 'Checking with a pharmacist first is exactly the safe practice the label directs.' },
  { t: 'Giving a sibling one of your prescribed pills for a similar symptom.', safe: false, k: 'Rx', e: 'Sharing a prescription is misuse. Only the person it was prescribed for should take it.' },
  { t: 'Following the pharmacist\'s instructions on a new prescription.', safe: true, k: 'Rx', e: 'Doing exactly what the doctor or pharmacist directs is safe practice for a prescription.' },
  { t: 'Reading the label and taking cold medicine on schedule.', safe: true, k: 'OTC', e: 'Reading the label and keeping to its schedule is safe practice for an over-the-counter medicine.' },
  { t: 'Taking allergy medicine long after its expiration date.', safe: false, k: 'OTC', e: 'The label warns not to use a medicine past its date. Ignoring that warning is misuse.' },
  { t: 'Keeping taking a prescription until the doctor says to stop.', safe: true, k: 'Rx', e: 'Finishing a prescription as directed, and stopping only when the doctor says, is safe practice.' },
  { t: 'Using a leftover prescription for a new illness on your own.', safe: false, k: 'Rx', e: 'Prescriptions are only for the illness they were written for. Reusing one on your own is misuse.' }
];

let order = [];
let placed = new Array(deck.length).fill(null); // true = safe, false = misuse, null = unsorted
let feedback = 'Tap each card to sort it: Safe Practice or Misuse.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(reset);
  positionControls();
  shuffleDeck();
  describe('Ten realistic medication scenario cards to sort as Safe Practice or Misuse. ' +
    'Tapping a card cycles its choice; feedback explains whether it is safe or misuse and ' +
    'whether it involves an over-the-counter or prescription medicine, with a running tally of correct sorts.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 16);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  placed = new Array(deck.length).fill(null);
  feedback = 'Tap each card to sort it: Safe Practice or Misuse.';
  feedbackColor = 'dimgray';
}

function reset() { shuffleDeck(); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Medication Safety Rule Sorter', canvasWidth / 2, 8);

  // Bin legend
  textAlign(LEFT, CENTER); textSize(12);
  fill('seagreen'); text('● Safe Practice', margin, 34);
  textAlign(RIGHT, CENTER);
  fill('indianred'); text('Misuse ●', canvasWidth - margin, 34);

  // Cards
  cardRects = [];
  let y0 = 50;
  let ch = 30;
  let gap = 4;
  for (let i = 0; i < deck.length; i++) {
    let d = deck[order[i]];
    let y = y0 + i * (ch + gap);
    let r = { x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i };
    cardRects.push(r);
    let hover = pointInRect(mouseX, mouseY, r);
    let p = placed[i];
    let correct = p !== null && p === d.safe;

    strokeWeight(1.5);
    if (p === null) {
      stroke('gray');
      fill(hover ? 'lightyellow' : 'white');
    } else {
      stroke(correct ? 'seagreen' : 'indianred');
      strokeWeight(2.5);
      fill(correct ? 'honeydew' : 'mistyrose');
    }
    rect(r.x, r.y, r.w, r.h, 5);

    // Card text (wrapped inside the left part of the card)
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(d.t, r.x + 8, r.y + 1, r.w - 96, r.h);

    // Right-side status
    textAlign(RIGHT, CENTER); textSize(10);
    if (p === null) {
      fill('dimgray');
      text('tap to sort', r.x + r.w - 8, r.y + r.h / 2);
    } else {
      fill(p ? 'seagreen' : 'indianred');
      text((p ? 'Safe' : 'Misuse') + (correct ? ' ✓' : ' ✗'), r.x + r.w - 8, r.y + r.h / 2);
    }
  }
  cursor(overAny() ? HAND : ARROW);

  // Tally + feedback panel
  let correctCount = placed.filter((p, i) => p !== null && p === deck[order[i]].safe).length;
  let placedCount = placed.filter(p => p !== null).length;

  let panelY = y0 + deck.length * (ch + gap) + 6;
  let panelH = drawHeight - panelY - 8;
  noStroke(); fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, panelY, canvasWidth - margin * 2, panelH, 6);

  noStroke(); textAlign(LEFT, TOP); textSize(11);
  fill('navy');
  text('Correct sorts: ' + correctCount + ' / ' + placedCount, margin + 8, panelY + 6);
  fill(feedbackColor);
  text(feedback, margin + 8, panelY + 22, canvasWidth - margin * 2 - 16, panelH - 26);
}

function overAny() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let cur = placed[r.i];
      // cycle: unsorted -> Safe -> Misuse -> unsorted
      placed[r.i] = cur === null ? true : (cur === true ? false : null);
      if (placed[r.i] !== null) {
        let d = deck[order[r.i]];
        let correct = placed[r.i] === d.safe;
        let kind = d.k === 'Rx' ? 'Prescription medicine. ' : 'Over-the-counter medicine. ';
        feedback = (correct ? '✓ ' : '✗ ') + kind + d.e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
      } else {
        feedback = 'Unsorted. Tap again to sort it.';
        feedbackColor = 'dimgray';
      }
      return;
    }
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
