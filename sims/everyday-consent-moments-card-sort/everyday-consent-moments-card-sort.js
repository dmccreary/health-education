// Everyday Consent Moments Card Sort - MicroSim (respected vs. skipped)
// CANVAS_HEIGHT: 512
// Grades 6-8, Apply (L3): students apply ongoing consent by sorting everyday relationship
// moments into "Consent Respected" and "Consent Skipped" across family, friend, romantic.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// respected = true; e reason
let cards = [
  { t: 'Posts a photo of a friend without asking first.', respected: false, e: 'Sharing someone\'s image needs their okay.' },
  { t: "Asks before sharing a friend's secret.", respected: true, e: 'Checking first respects their privacy.' },
  { t: "Borrows a sibling's charger without asking.", respected: false, e: 'Using someone\'s things needs permission.' },
  { t: 'Checks if a hug is okay before giving one.', respected: true, e: 'Asking about touch respects boundaries.' },
  { t: "Reads a partner's texts without permission.", respected: false, e: 'Private messages need consent to read.' },
  { t: "Asks 'is it okay if I tag you?'", respected: true, e: 'Checking before tagging respects their choice.' },
  { t: 'Keeps tickling after someone says stop.', respected: false, e: '"Stop" ends consent — continuing ignores it.' },
  { t: 'Waits for a yes before sharing a video.', respected: true, e: 'Waiting for a clear yes respects consent.' },
  { t: "Takes food off a friend's plate without asking.", respected: false, e: 'Even small things need a quick check.' },
  { t: 'Asks before posting about a family event.', respected: true, e: 'Asking respects the whole family\'s choice.' }
];

let placed = new Array(cards.length).fill(null); // true/false
let feedback = 'Tap each card: Consent Respected or Consent Skipped.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(() => { placed = new Array(cards.length).fill(null); feedback = 'Tap each card: Consent Respected or Consent Skipped.'; feedbackColor = 'dimgray'; });
  positionControls();
  describe('Ten everyday relationship moments to sort as Consent Respected or Consent ' +
    'Skipped. Tapping a card cycles its bin and gives a one-sentence reason.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 14); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Everyday Consent Moments', canvasWidth / 2, 6);
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('seagreen'); text('● Consent Respected', margin, 30);
  fill('indianred'); textAlign(RIGHT, CENTER); text('Consent Skipped ●', canvasWidth - margin, 30);

  cardRects = [];
  let y0 = 44, ch = 36, gap = 4;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let p = placed[i];
    let correct = p !== null && p === cards[i].respected;
    strokeWeight(1.5);
    if (p === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(cards[i].t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 120, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (p === null) { fill('dimgray'); text('tap to sort', canvasWidth - margin - 8, y + ch / 2); }
    else { fill(p ? 'seagreen' : 'indianred'); text((p ? 'Respected' : 'Skipped') + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  let correctCount = placed.filter((p, i) => p !== null && p === cards[i].respected).length;
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor);
  text((placedCount ? '(' + correctCount + '/' + placedCount + ') ' : '') + feedback, margin, drawHeight - 24, canvasWidth - margin * 2, 22);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let cur = placed[r.i];
      placed[r.i] = cur === null ? true : (cur === true ? false : null);
      if (placed[r.i] !== null) {
        let correct = placed[r.i] === cards[r.i].respected;
        feedback = (correct ? '✓ ' : '✗ ') + cards[r.i].e;
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
