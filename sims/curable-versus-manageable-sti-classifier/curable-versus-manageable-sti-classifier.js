// Curable Versus Manageable STI Classifier - MicroSim (sort with justification)
// CANVAS_HEIGHT: 470
// Grades 6-8, Evaluate (L5): students classify named STIs (text only) as curable or
// manageable-but-not-curable and justify using the bacterial vs. viral distinction.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// cat: 'curable' or 'manageable'; type bacterial/viral; e reason
let cards = [
  { n: 'Chlamydia', cat: 'curable', type: 'bacterial', e: 'Bacterial — cured with antibiotics.' },
  { n: 'Gonorrhea', cat: 'curable', type: 'bacterial', e: 'Bacterial — cured with antibiotics.' },
  { n: 'Syphilis', cat: 'curable', type: 'bacterial', e: 'Bacterial — cured with antibiotics, especially early.' },
  { n: 'HIV', cat: 'manageable', type: 'viral', e: 'Viral — treatment manages it well but does not cure it.' },
  { n: 'Herpes', cat: 'manageable', type: 'viral', e: 'Viral — medicine manages outbreaks; not currently curable.' },
  { n: 'HPV', cat: 'manageable', type: 'viral', e: 'Viral — often clears on its own; managed, not "cured" by a drug.' }
];

let placed = new Array(cards.length).fill(null);
let feedback = 'Tap each card to sort it. "Not curable" does not mean untreatable or hopeless.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(reset);
  positionControls();
  describe('Six text-only STI name cards to classify as curable with treatment or ' +
    'manageable but not currently curable. Tapping a card cycles its bin and gives ' +
    'feedback explaining the bacterial-versus-viral reason.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 10); }

function reset() {
  placed = new Array(cards.length).fill(null);
  feedback = 'Tap each card to sort it. "Not curable" does not mean untreatable or hopeless.';
  feedbackColor = 'dimgray';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Curable vs. Manageable STIs', canvasWidth / 2, 6);

  // zone legend
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('seagreen'); text('● Curable with Treatment', margin, 32);
  fill('steelblue'); textAlign(RIGHT, CENTER); text('Manageable, Not Curable ●', canvasWidth - margin, 32);

  cardRects = [];
  let y0 = 48, ch = 48, gap = 6;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = placed[i] === cards[i].cat;
    strokeWeight(1.5);
    if (placed[i] === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else if (correct) { stroke('seagreen'); strokeWeight(2.5); fill('honeydew'); }
    else { stroke('indianred'); strokeWeight(2.5); fill('mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(15);
    text(cards[i].n, margin + 12, y + ch / 2);
    textAlign(RIGHT, CENTER); textSize(11);
    if (placed[i] === null) { fill('dimgray'); text('tap to sort', canvasWidth - margin - 10, y + ch / 2); }
    else {
      fill(placed[i] === 'curable' ? 'seagreen' : 'steelblue');
      text((placed[i] === 'curable' ? 'Curable' : 'Manageable') + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 10, y + ch / 2);
    }
  }
  cursor(overAny() ? HAND : ARROW);

  // feedback + progress
  let correctCount = placed.filter((p, i) => p === cards[i].cat).length;
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill(feedbackColor);
  text((placedCount ? '(' + correctCount + '/' + placedCount + ' correct)  ' : '') + feedback,
    margin, drawHeight - 34, canvasWidth - margin * 2, 30);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let cur = placed[r.i];
      placed[r.i] = cur === null ? 'curable' : (cur === 'curable' ? 'manageable' : null);
      if (placed[r.i] !== null) {
        let correct = placed[r.i] === cards[r.i].cat;
        feedback = (correct ? '✓ ' : '✗ ') + cards[r.i].n + ': ' + cards[r.i].e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
      } else { feedback = 'Unsorted — tap again to file.'; feedbackColor = 'dimgray'; }
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
