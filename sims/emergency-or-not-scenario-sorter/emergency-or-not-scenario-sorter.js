// Emergency or Not? Scenario Sorter - MicroSim (recognize true emergencies)
// CANVAS_HEIGHT: 512
// Grades 6-8, Apply (L3): students apply warning-sign criteria to recognize which
// realistic scenarios are true emergencies requiring an immediate call for help.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// emerg = true (call for help now); e names the warning sign(s)
let deck = [
  { t: "A classmate suddenly can't speak and is clutching their throat.", emerg: true, e: 'Choking with no air is a life threat — call for help now.' },
  { t: 'A friend has a small scrape from falling off a bike.', emerg: false, e: 'A minor scrape can be cleaned and bandaged — not an emergency.' },
  { t: "Someone collapses and won't wake up.", emerg: true, e: 'Unresponsiveness is a top warning sign — call for help now.' },
  { t: 'A student has a mild headache after gym class.', emerg: false, e: 'A mild headache can rest and hydrate — not an emergency.' },
  { t: 'A person has trouble breathing and their lips look bluish.', emerg: true, e: 'Bluish lips and breathing trouble signal low oxygen — call now.' },
  { t: 'A classmate has a minor bruise from bumping a desk.', emerg: false, e: 'A small bruise is not an emergency.' },
  { t: 'Someone is having a seizure on the floor.', emerg: true, e: 'A seizure needs help — clear the area and call for help.' },
  { t: 'A friend feels a little dizzy but recovers after sitting down.', emerg: false, e: 'Brief dizziness that resolves is usually not an emergency — keep watching.' },
  { t: 'A person has severe chest pain and is sweating heavily.', emerg: true, e: 'Severe chest pain with sweating is a warning sign — call now.' },
  { t: 'A student has a runny nose and a mild cough.', emerg: false, e: 'Cold symptoms are not an emergency.' }
];

let order = [];
let placed = new Array(deck.length).fill(null); // true/false
let feedback = 'Tap each card to sort it Emergency or Not.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(reset);
  positionControls();
  shuffle();
  describe('Ten realistic scenario cards to sort as Call for Help Now or Not an Emergency. ' +
    'Tapping a card cycles its choice and names the specific warning signs present or absent, ' +
    'with a running tally.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 14); }

function shuffle() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  placed = new Array(deck.length).fill(null);
  feedback = 'Tap each card to sort it Emergency or Not.'; feedbackColor = 'dimgray';
}
function reset() { shuffle(); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Emergency or Not?', canvasWidth / 2, 6);
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('crimson'); text('● Call for Help Now', margin, 30);
  fill('seagreen'); textAlign(RIGHT, CENTER); text('Not an Emergency ●', canvasWidth - margin, 30);

  cardRects = [];
  let y0 = 44, ch = 36, gap = 4;
  for (let i = 0; i < deck.length; i++) {
    let d = deck[order[i]];
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let p = placed[i];
    let correct = p !== null && p === d.emerg;
    strokeWeight(1.5);
    if (p === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(d.t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 120, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (p === null) { fill('dimgray'); text('tap to sort', canvasWidth - margin - 8, y + ch / 2); }
    else { fill(p ? 'crimson' : 'seagreen'); text((p ? 'Emergency' : 'Not') + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  let correctCount = placed.filter((p, i) => p !== null && p === deck[order[i]].emerg).length;
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor);
  text((placedCount ? '(' + correctCount + '/' + placedCount + ' correct)  ' : '') + feedback, margin, drawHeight - 24, canvasWidth - margin * 2, 22);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let cur = placed[r.i];
      placed[r.i] = cur === null ? true : (cur === true ? false : null);
      if (placed[r.i] !== null) {
        let d = deck[order[r.i]];
        let correct = placed[r.i] === d.emerg;
        feedback = (correct ? '✓ ' : '✗ ') + d.e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
      } else { feedback = 'Unsorted.'; feedbackColor = 'dimgray'; }
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
