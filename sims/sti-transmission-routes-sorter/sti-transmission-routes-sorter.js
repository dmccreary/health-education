// STI Transmission Routes Sorter - MicroSim (classify routes of contact)
// CANVAS_HEIGHT: 532
// Grades 6-8, Understand (L2): students classify everyday contact scenarios as
// able to transmit an STI, unable to, or dependent on the specific infection.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 476;
let controlHeight = 56;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// cat: 'yes' | 'no' | 'depends' ; e = one-sentence factual explanation
let deck = [
  { t: 'Sharing a water bottle with a friend', cat: 'no', e: 'STIs do not spread through saliva on a shared bottle.' },
  { t: 'Skin-to-skin genital contact', cat: 'yes', e: 'Direct genital skin contact can pass STIs even without fluids.' },
  { t: 'Hugging someone', cat: 'no', e: 'A hug is casual contact and cannot transmit an STI.' },
  { t: 'Sharing a needle for a tattoo or drug', cat: 'yes', e: 'Blood on a shared needle can carry STIs like HIV.' },
  { t: 'Sitting on a public toilet seat', cat: 'no', e: 'STIs cannot survive to spread from a toilet seat.' },
  { t: 'Kissing on the lips', cat: 'depends', e: 'A few STIs can pass through kissing, but most cannot.' },
  { t: 'Using the same fork or spoon', cat: 'no', e: 'Sharing eating utensils does not transmit STIs.' },
  { t: 'Contact with infected genital fluids', cat: 'yes', e: 'Fluid exchange is a main way many STIs spread.' },
  { t: 'From a pregnant person to their baby', cat: 'depends', e: 'Some STIs can pass to a baby during pregnancy or birth.' },
  { t: 'Shaking hands or a high-five', cat: 'no', e: 'Casual hand contact cannot transmit an STI.' }
];

let order = [];
let placed = new Array(deck.length).fill(null); // 'yes'|'no'|'depends'|null
let selected = null; // index of the currently selected card, or null
let feedback = 'Tap a scenario, then tap a bin to file it.';
let feedbackColor = 'dimgray';
let cardRects = [];
let binRects = [];

const bins = [
  { key: 'yes', label: 'Can Transmit', color: 'indianred', fillSel: 'mistyrose' },
  { key: 'no', label: 'Cannot Transmit', color: 'seagreen', fillSel: 'honeydew' },
  { key: 'depends', label: 'Depends on Infection', color: 'goldenrod', fillSel: 'cornsilk' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(reset);
  positionControls();
  shuffle();
  describe('Ten text-only contact scenarios to classify into three bins: can transmit ' +
    'an STI, cannot transmit an STI, or depends on the specific infection. Tap a scenario ' +
    'to select it, then tap a bin. Feedback names the correct category with a short ' +
    'clinical explanation, correcting myths about casual contact.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 14); }

function shuffle() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  placed = new Array(deck.length).fill(null);
  selected = null;
  feedback = 'Tap a scenario, then tap a bin to file it.';
  feedbackColor = 'dimgray';
}
function reset() { shuffle(); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('STI Transmission Routes Sorter', canvasWidth / 2, 6);

  // three bin zones across the top
  binRects = [];
  let bx = margin, by = 32, bh = 52, bgap = 8;
  let bw = (canvasWidth - margin * 2 - bgap * 2) / 3;
  for (let k = 0; k < bins.length; k++) {
    let x = bx + k * (bw + bgap);
    binRects.push({ x: x, y: by, w: bw, h: bh, key: bins[k].key });
    let hover = selected !== null && pointInRect(mouseX, mouseY, binRects[k]);
    stroke(bins[k].color); strokeWeight(hover ? 3 : 2);
    fill(hover ? bins[k].fillSel : 'white');
    rect(x, by, bw, bh, 8);
    noStroke(); fill(bins[k].color); textAlign(CENTER, CENTER); textSize(12);
    text(bins[k].label, x + 4, by + 4, bw - 8, bh - 8);
  }

  // scenario cards
  cardRects = [];
  let y0 = 96, ch = 30, gap = 4;
  for (let i = 0; i < deck.length; i++) {
    let d = deck[order[i]];
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let p = placed[i];
    let correct = p !== null && p === d.cat;
    let isSel = selected === i;
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    strokeWeight(1.5);
    if (isSel) { stroke('navy'); strokeWeight(3); fill('lightyellow'); }
    else if (p === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 5);

    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(d.t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 108, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (p === null) { fill(isSel ? 'navy' : 'dimgray'); text(isSel ? 'pick a bin →' : 'tap', canvasWidth - margin - 8, y + ch / 2); }
    else {
      let b = bins.find(bn => bn.key === p);
      fill(b.color);
      text(binShort(p) + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2);
    }
  }
  cursor(overAny() ? HAND : ARROW);

  // feedback + progress
  let correctCount = placed.filter((p, i) => p !== null && p === deck[order[i]].cat).length;
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor);
  text((placedCount ? '(' + correctCount + '/' + placedCount + ' correct)  ' : '') + feedback,
    margin, drawHeight - 26, canvasWidth - margin * 2, 24);
}

function binShort(key) {
  if (key === 'yes') return 'Can';
  if (key === 'no') return 'Cannot';
  return 'Depends';
}

function overAny() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  if (selected !== null) for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  // clicking a bin files the selected card
  if (selected !== null) {
    for (let r of binRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        let d = deck[order[selected]];
        placed[selected] = r.key;
        let correct = r.key === d.cat;
        let name = bins.find(b => b.key === d.cat).label;
        feedback = (correct ? '✓ ' : '✗ ') + (correct ? '' : 'Correct: ' + name + '. ') + d.e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
        selected = null;
        return;
      }
    }
  }
  // clicking a card selects it (or deselects if already selected)
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selected = (selected === r.i) ? null : r.i;
      if (selected !== null) { feedback = 'Now tap a bin above to file this scenario.'; feedbackColor = 'navy'; }
      else { feedback = 'Tap a scenario, then tap a bin to file it.'; feedbackColor = 'dimgray'; }
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
