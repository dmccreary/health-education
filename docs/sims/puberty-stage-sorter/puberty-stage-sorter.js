// Sort the Stage - MicroSim (three-bin statement sorter)
// CANVAS_HEIGHT: 522
// Grade 3, Understand (L2): students tap a plain, non-anatomical statement card, then tap the
// stage bin where it belongs (Before Changes Start, Changes Beginning, Changes Continuing).
// Calm and reassuring; growth-arrow icons only, never any body imagery.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 465;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

// stage: 0 = Before Changes Start, 1 = Changes Beginning, 2 = Changes Continuing
// e: calm one-sentence explanation of why the statement fits its stage
let baseCards = [
  { t: 'Growing the same steady way I always have.', stage: 0,
    e: 'Steady, unchanged growth happens before changes start.' },
  { t: 'Everything feels about the same as last year.', stage: 0,
    e: 'Feeling the same as before means changes have not started yet.' },
  { t: 'Noticing I grow a little faster than last year.', stage: 1,
    e: 'A faster growth spurt is a sign changes are beginning.' },
  { t: 'Having stronger feelings on some days.', stage: 1,
    e: 'New, stronger feelings often show up as changes begin.' },
  { t: 'My body shape is changing more than before.', stage: 2,
    e: 'Bigger body-shape changes happen as changes keep continuing.' },
  { t: 'These changes have been going on for a while now.', stage: 2,
    e: 'Changes that have lasted a while fit the continuing stage.' }
];

let stages = [
  { label: 'Before Changes Start', col: 'seagreen', bg: 'honeydew', arrow: 1 },
  { label: 'Changes Beginning', col: 'steelblue', bg: 'aliceblue', arrow: 2 },
  { label: 'Changes Continuing', col: 'mediumpurple', bg: 'lavender', arrow: 3 }
];

let cards = [];         // { t, stage, e, placed: -1|0|1|2 }
let order = [];         // shuffled display order of card indices in the tray
let selected = -1;      // index (into cards) of the currently selected card, or -1
let checked = false;
let correctCount = 0;

let binRects = [];      // hit-test rects for the three bins
let cardRects = [];     // hit-test rects for tray cards

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(checkAnswers);
  checkButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  resetAll();
  describe('Six plain statement cards and three labeled stage bins with small, medium, and ' +
    'large growth arrows. The student taps a card to select it, then taps a bin to place it. ' +
    '"Check My Answers" shows a checkmark for each correct card and a calm one-sentence ' +
    'explanation for every card.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  resetButton.position(175, drawHeight + 14);
}

function resetAll() {
  cards = [];
  for (let i = 0; i < baseCards.length; i++) {
    cards.push({ t: baseCards[i].t, stage: baseCards[i].stage, e: baseCards[i].e, placed: -1 });
  }
  order = [];
  for (let i = 0; i < cards.length; i++) order.push(i);
  shuffle(order, true);
  selected = -1;
  checked = false;
  correctCount = 0;
}

function allPlaced() {
  for (let c of cards) if (c.placed === -1) return false;
  return true;
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
  text('Sort the Stage', canvasWidth / 2, 8);

  // Instruction line
  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('dimgray');
  let instr;
  if (checked) instr = 'Read each note. Press Reset to try again.';
  else if (selected !== -1) instr = 'Now tap the stage bin where it belongs.';
  else instr = 'Tap a card, then tap the bin where it belongs.';
  text(instr, margin, 33, canvasWidth - margin * 2, 18);

  drawBins();
  drawTray();
  drawFooter();
}

function drawBins() {
  binRects = [];
  let n = stages.length;
  let gap = 8;
  let bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let by = 56;
  let bh = 144;

  for (let i = 0; i < n; i++) {
    let bx = margin + i * (bw + gap);
    let r = { x: bx, y: by, w: bw, h: bh, stage: i };
    binRects.push(r);

    let hover = !checked && selected !== -1 && pointInRect(mouseX, mouseY, r);
    stroke(stages[i].col);
    strokeWeight(hover ? 3 : 2);
    fill(hover ? stages[i].bg : 'white');
    rect(bx, by, bw, bh, 12);

    // Growth-arrow icon (small / medium / large) — no body imagery.
    // Bottom-anchored to a shared baseline so the arrows visibly "grow" taller.
    drawGrowthArrow(bx + bw / 2, by + 58, stages[i].arrow, stages[i].col);

    // Label (two lines fit inside the bin width)
    noStroke();
    fill(stages[i].col);
    textAlign(CENTER, TOP);
    textSize(12);
    text(stages[i].label, bx + 4, by + 62, bw - 8, 34);

    // Placed cards inside this bin
    drawPlacedInBin(r, i);
  }
  cursor(overAnyBin() && selected !== -1 && !checked ? HAND : ARROW);
}

// arrow size: 1 small, 2 medium, 3 large. Simple upward growth arrow,
// bottom-anchored at baseY so taller arrows read as "more growth".
function drawGrowthArrow(cx, baseY, size, col) {
  let h = 10 + size * 13;     // total arrow height (23 / 36 / 49)
  let head = 7 + size * 3;    // arrowhead half-width
  let botY = baseY;
  let topY = baseY - h;
  stroke(col);
  strokeWeight(4);
  line(cx, botY, cx, topY + head);
  noStroke();
  fill(col);
  triangle(cx - head, topY + head, cx + head, topY + head, cx, topY);
}

function drawPlacedInBin(r, stageIdx) {
  // list the short tags of cards placed here, near the bottom of the bin
  let placedHere = [];
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].placed === stageIdx) placedHere.push(i);
  }
  let tagY = r.y + 100;
  let tagH = 14;
  textAlign(CENTER, CENTER);
  for (let k = 0; k < placedHere.length; k++) {
    let ci = placedHere[k];
    let ty = tagY + k * (tagH + 2);
    if (ty + tagH > r.y + r.h - 2) break;
    let ok = checked && cards[ci].stage === stageIdx;
    let bad = checked && cards[ci].stage !== stageIdx;
    noStroke();
    fill(ok ? 'honeydew' : bad ? 'lightyellow' : stages[stageIdx].bg);
    rect(r.x + 4, ty, r.w - 8, tagH, 4);
    noStroke();
    fill(ok ? 'seagreen' : bad ? 'goldenrod' : stages[stageIdx].col);
    textSize(10);
    let tag = 'Card ' + (ci + 1);
    if (checked) tag = (ok ? '✓ ' : '→ ') + 'Card ' + (ci + 1);
    text(tag, r.x + 4, ty + tagH / 2, r.w - 8, tagH);
  }
}

function drawTray() {
  cardRects = [];
  // Cards that are not yet placed live in the tray. Two columns.
  let unplaced = [];
  for (let oi = 0; oi < order.length; oi++) {
    let ci = order[oi];
    if (cards[ci].placed === -1) unplaced.push(ci);
  }

  let trayTop = 222;
  let cols = 2;
  let gap = 8;
  let cw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let ch = 46;
  let rowGap = 5;

  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(11);
  if (!checked) text('Cards to sort:', margin, trayTop - 15);

  for (let k = 0; k < unplaced.length; k++) {
    let ci = unplaced[k];
    let coln = k % cols;
    let rown = floor(k / cols);
    let cx = margin + coln * (cw + gap);
    let cy = trayTop + rown * (ch + rowGap);
    let r = { x: cx, y: cy, w: cw, h: ch, card: ci };
    cardRects.push(r);

    let isSel = selected === ci;
    stroke(isSel ? 'navy' : 'slategray');
    strokeWeight(isSel ? 3 : 1.5);
    fill(isSel ? 'lightyellow' : 'white');
    rect(cx, cy, cw, ch, 8);

    noStroke();
    fill('gray');
    textAlign(LEFT, TOP);
    textSize(9);
    text('CARD ' + (ci + 1), cx + 8, cy + 5);
    fill('black');
    textAlign(LEFT, TOP);
    textSize(11.5);
    text(cards[ci].t, cx + 8, cy + 17, cw - 14, ch - 20);
  }

  cursor(overAnyCard() && !checked ? HAND : (overAnyBin() && selected !== -1 && !checked ? HAND : ARROW));
}

function drawFooter() {
  let fy = drawHeight - 86;
  let fw = canvasWidth - margin * 2;
  let fh = 80;

  if (checked) {
    // Explanations panel for every card, plus reassuring closing message.
    noStroke();
    fill('ghostwhite');
    stroke('gainsboro');
    strokeWeight(1);
    rect(margin, fy, fw, fh, 8);
    noStroke();
    fill('seagreen');
    textAlign(LEFT, TOP);
    textSize(12);
    text('You matched ' + correctCount + ' of ' + cards.length + ' cards.',
         margin + 10, fy + 7);

    // two-column list of short explanations
    let colW = (fw - 20) / 2;
    textSize(9.5);
    for (let i = 0; i < cards.length; i++) {
      let coln = i % 2;
      let rown = floor(i / 2);
      let ex = margin + 10 + coln * colW;
      let ey = fy + 26 + rown * 18;
      let ok = cards[i].stage === cards[i].placed;
      noStroke();
      fill(ok ? 'seagreen' : 'goldenrod');
      text((ok ? '✓' : '→') + ' C' + (i + 1) + ': ' + cards[i].e,
           ex, ey, colW - 6, 17);
    }
    return;
  }

  if (allPlaced()) {
    // reassuring closing message once every card is sorted
    noStroke();
    fill('lavender');
    stroke('mediumpurple');
    strokeWeight(2);
    rect(margin, fy, fw, fh, 8);
    noStroke();
    fill('mediumpurple');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Remember — everyone reaches these stages at a different age. ' +
         "That's normal!\nPress \"Check My Answers\" to see the notes.",
         margin + 10, fy, fw - 20, fh);
    return;
  }

  // default helper box
  noStroke();
  fill('ghostwhite');
  stroke('gainsboro');
  strokeWeight(1);
  rect(margin, fy, fw, fh, 8);
  noStroke();
  fill('dimgray');
  textAlign(CENTER, CENTER);
  textSize(12);
  let placedNum = 0;
  for (let c of cards) if (c.placed !== -1) placedNum++;
  text('Placed ' + placedNum + ' of ' + cards.length + ' cards.\n' +
       'The arrows show how much is changing: small, medium, then large.\n' +
       'Tapping a placed card sends it back to the tray.',
       margin + 10, fy, fw - 20, fh);
}

function overAnyBin() {
  for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function overAnyCard() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (checked) return;

  // If a card is selected, tapping a bin places it there.
  if (selected !== -1) {
    for (let r of binRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        cards[selected].placed = r.stage;
        selected = -1;
        return;
      }
    }
  }

  // Tapping a tray card selects (or deselects) it.
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selected = (selected === r.card) ? -1 : r.card;
      return;
    }
  }

  // Tapping a card already placed in a bin returns it to the tray.
  for (let r of binRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let placedHere = [];
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].placed === r.stage) placedHere.push(i);
      }
      if (placedHere.length > 0) {
        // return the last one placed (topmost tag region is fine for young users)
        cards[placedHere[placedHere.length - 1]].placed = -1;
      }
      return;
    }
  }
}

function checkAnswers() {
  if (!allPlaced()) return;   // only check once everything is sorted
  correctCount = 0;
  for (let c of cards) if (c.stage === c.placed) correctCount++;
  checked = true;
  selected = -1;
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
