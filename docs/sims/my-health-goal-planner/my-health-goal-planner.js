// My Health Goal Planner - MicroSim
// CANVAS_HEIGHT: 560
// Grade 3, Analyze (L4): students sort example goals into "Strong Goal" or "Needs Work"
// with a reason, then build their own goal with a text input and three self-check boxes.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 500;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

// Example goal cards to sort
let cards = [
  { text: 'Be healthier', strong: false,
    reason: '"Be healthier" does not say exactly what will change.' },
  { text: 'Drink a glass of water with lunch each day', strong: true,
    reason: 'This tells exactly what to do and when. Clear and doable!' },
  { text: 'Never eat sweets again', strong: false,
    reason: 'Saying "never" is very hard to keep. This one is not realistic.' },
  { text: 'Walk the dog after school 3 days a week', strong: true,
    reason: 'This says what, when, and how often. A strong plan!' },
  { text: 'Get in shape', strong: false,
    reason: '"Get in shape" is fuzzy. It does not name a small step to take.' }
];
let selectedCard = -1;      // which card is picked up (waiting for a bin)
let feedbackIdx = -1;       // which card's reason to show
let feedbackText = '';

// Goal builder
let goalInput;
let checkSpecific, checkRealistic, checkMatters;
let saveButton, resetButton;
let savedGoal = '';
let builderMsg = '';   // short reminder shown under the checkboxes

// layout of the sort area (computed each draw)
let sortTop = 44;
let binY;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  goalInput = createInput('');
  goalInput.parent(document.querySelector('main'));
  goalInput.attribute('placeholder', 'My goal is...');

  checkSpecific = createCheckbox(' Specific', false);
  checkSpecific.parent(document.querySelector('main'));
  checkRealistic = createCheckbox(' Realistic', false);
  checkRealistic.parent(document.querySelector('main'));
  checkMatters = createCheckbox(' Matters to me', false);
  checkMatters.parent(document.querySelector('main'));

  saveButton = createButton('Save My Goal');
  saveButton.parent(document.querySelector('main'));
  saveButton.mousePressed(saveGoal);

  resetButton = createButton('Start Over');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('Students tap an example goal card, then tap the Strong Goal or Needs Work bin ' +
    'to sort it; a reason appears. Below, students type their own goal, check Specific, ' +
    'Realistic, and Matters to me, then press Save My Goal to see it in a finished card.', LABEL);
}

function positionControls() {
  // goal-builder input and checkboxes live inside the draw area (lower half)
  let bx = margin;
  let builderTop = drawHeight - 172;
  goalInput.position(bx, builderTop + 30);
  goalInput.size(canvasWidth - 2 * margin - 6);

  checkSpecific.position(bx, builderTop + 66);
  checkRealistic.position(bx + 120, builderTop + 66);
  checkMatters.position(bx + 250, builderTop + 66);

  // action buttons in the white control strip
  saveButton.position(margin, drawHeight + 15);
  resetButton.position(margin + 130, drawHeight + 15);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy'); textAlign(CENTER, TOP); textSize(20);
  text('My Health Goal Planner', canvasWidth / 2, 8);

  drawSortArea();
  drawBuilderArea();
}

function drawSortArea() {
  let full = canvasWidth - 2 * margin;
  let cardH = 30;
  let cardGap = 6;
  let listTop = 62;
  let listH = cards.length * cardH + (cards.length - 1) * cardGap; // 5 slots tall

  // instruction
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(13);
  text('1) Tap a goal, then tap a bin to sort it:', margin, 42);

  // two bins on the right, together spanning the full list height
  let binW = full * 0.30;
  let binX1 = canvasWidth - margin - binW;
  let binTop = listTop;
  let binH = (listH - cardGap) / 2;

  // Strong Goal bin
  fill('honeydew'); stroke('seagreen'); strokeWeight(2);
  rect(binX1, binTop, binW, binH, 8);
  noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(14);
  text('Strong\nGoal', binX1, binTop, binW, binH);

  // Needs Work bin
  let bin2Top = binTop + binH + cardGap;
  fill('seashell'); stroke('indianred'); strokeWeight(2);
  rect(binX1, bin2Top, binW, binH, 8);
  noStroke(); fill('indianred'); textAlign(CENTER, CENTER); textSize(14);
  text('Needs\nWork', binX1, bin2Top, binW, binH);

  // list of unsorted cards on the left column
  let listW = binX1 - margin - 12;
  let y = listTop;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].sorted) continue;
    let isSel = (i === selectedCard);
    fill(isSel ? 'lightyellow' : 'white');
    stroke(isSel ? 'goldenrod' : 'silver');
    strokeWeight(isSel ? 2.5 : 1);
    rect(margin, y, listW, cardH, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(cards[i].text, margin + 8, y + 1, listW - 14, cardH - 2);
    cards[i]._y = y; cards[i]._x = margin; cards[i]._w = listW; cards[i]._h = cardH;
    y += cardH + cardGap;
  }
  // store bin rects for hit testing
  drawSortArea.strongBin = { x: binX1, y: binTop, w: binW, h: binH };
  drawSortArea.needsBin = { x: binX1, y: bin2Top, w: binW, h: binH };

  // feedback line below BOTH columns (the list and the bins end at the same y)
  let fbY = listTop + listH + 10;
  noStroke(); textAlign(LEFT, TOP); textSize(12.5);
  if (feedbackIdx >= 0) {
    let ok = cards[feedbackIdx].placedCorrect;
    fill(ok ? 'seagreen' : 'indianred'); textSize(13);
    text(ok ? '✓ ' : '↻ ', margin, fbY);
    fill('black'); textSize(12);
    text(feedbackText, margin + 18, fbY, full - 18, 40);
  } else {
    let remaining = cards.filter(c => !c.sorted).length;
    fill('gray');
    if (remaining === 0) text('Nice sorting! All goals are sorted.', margin, fbY, full, 40);
    else text('Pick a goal card above to begin.', margin, fbY, full, 40);
  }
}

function drawBuilderArea() {
  let full = canvasWidth - 2 * margin;
  let top = drawHeight - 172;

  // divider line
  stroke('silver'); strokeWeight(1);
  line(margin, top - 8, canvasWidth - margin, top - 8);
  noStroke();

  fill('dimgray'); textAlign(LEFT, TOP); textSize(13);
  text('2) Now write your own goal:', margin, top);

  // (goalInput HTML sits at top+30; checkboxes at top+66 via positionControls)

  // hint (or a short reminder message) under the checkboxes
  textSize(11); textAlign(LEFT, TOP);
  if (builderMsg && !savedGoal) fill('indianred');
  else fill('gray');
  let hint = (builderMsg && !savedGoal) ? builderMsg : 'Check all three, then press Save My Goal.';
  text(hint, margin, top + 96);

  // finished goal card
  let cardTop = top + 116;
  let cardH = drawHeight - cardTop - 12;
  if (savedGoal) {
    fill('lightyellow'); stroke('goldenrod'); strokeWeight(2);
    rect(margin, cardTop, full, cardH, 10);
    noStroke();
    fill('saddlebrown'); textAlign(LEFT, TOP); textSize(12);
    text('★ My Health Goal', margin + 12, cardTop + 8);
    fill('black'); textSize(14); textAlign(LEFT, TOP);
    text('"' + savedGoal + '"', margin + 12, cardTop + 28, full - 24, cardH - 34);
  } else {
    fill('white'); stroke('silver'); strokeWeight(1);
    rect(margin, cardTop, full, cardH, 10);
    noStroke(); fill('silver'); textAlign(CENTER, CENTER); textSize(12);
    text('Your finished goal will appear here.', margin, cardTop, full, cardH);
  }
}

function saveGoal() {
  let g = goalInput.value().trim();
  if (!g) {
    savedGoal = '';
    builderMsg = 'Type your goal first.';
    return;
  }
  if (!(checkSpecific.checked() && checkRealistic.checked() && checkMatters.checked())) {
    savedGoal = '';
    builderMsg = 'Check all three boxes first.';
    return;
  }
  savedGoal = g;
  builderMsg = '';
}

function resetAll() {
  for (let c of cards) { c.sorted = false; c.placedCorrect = false; }
  selectedCard = -1;
  feedbackIdx = -1;
  feedbackText = '';
  savedGoal = '';
  builderMsg = '';
  goalInput.value('');
  checkSpecific.checked(false);
  checkRealistic.checked(false);
  checkMatters.checked(false);
}

function mousePressed() {
  if (mouseX < 0 || mouseX > canvasWidth || mouseY < 0 || mouseY > drawHeight) return;

  // clicking a bin when a card is selected
  if (selectedCard >= 0) {
    if (pointInRect(mouseX, mouseY, drawSortArea.strongBin)) {
      placeCard(selectedCard, true);
      return;
    }
    if (pointInRect(mouseX, mouseY, drawSortArea.needsBin)) {
      placeCard(selectedCard, false);
      return;
    }
  }

  // clicking a card in the list selects (or deselects) it
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].sorted) continue;
    let r = { x: cards[i]._x, y: cards[i]._y, w: cards[i]._w, h: cards[i]._h };
    if (r.x !== undefined && pointInRect(mouseX, mouseY, r)) {
      selectedCard = (selectedCard === i) ? -1 : i;
      return;
    }
  }
}

function placeCard(i, intoStrong) {
  let correct = (cards[i].strong === intoStrong);
  cards[i].sorted = true;
  cards[i].placedCorrect = correct;
  feedbackIdx = i;
  if (correct) {
    feedbackText = cards[i].reason;
  } else {
    let where = cards[i].strong ? 'Strong Goal' : 'Needs Work';
    feedbackText = 'Actually this belongs in ' + where + '. ' + cards[i].reason;
  }
  selectedCard = -1;
}

function pointInRect(px, py, r) {
  if (!r) return false;
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
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
