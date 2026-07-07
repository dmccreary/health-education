// Personal Stressor Sorter - MicroSim (three-category scenario sorter)
// CANVAS_HEIGHT: 512
// Grade 6-8, Understand (L2): students read a realistic middle-school scenario and sort it
// into Home, School, or Friends stressors, with immediate feedback explaining why it fits.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;
let overlapCheckbox;

// cat: 'home' | 'school' | 'friends' ; alt: optional second reasonable category (overlap)
// e: one-sentence note on why it fits
let baseCards = [
  { t: 'Your parents have been arguing every night this week.', cat: 'home',
    e: 'Tension at home is a home stressor.' },
  { t: 'You have three tests on the same day.', cat: 'school',
    e: 'A heavy test load is a school stressor.' },
  { t: 'Your best friend stopped sitting with you at lunch.', cat: 'friends',
    e: 'A change in a friendship is a friend stressor.' },
  { t: 'You share a room and never get any quiet space.', cat: 'home',
    e: 'Crowding and lack of privacy at home is a home stressor.' },
  { t: 'A big project is due and you fell behind.', cat: 'school',
    e: 'A looming deadline is a school stressor.' },
  { t: 'Two of your friends had a fight and want you to pick a side.', cat: 'friends',
    e: 'Being caught between friends is a friend stressor.' },
  { t: 'You have to babysit younger siblings after school every day.', cat: 'home',
    e: 'Family responsibilities at home are a home stressor.' },
  { t: 'You gave a class presentation and forgot part of it.', cat: 'school',
    e: 'Performing in front of the class is a school stressor.' },
  { t: 'A friend keeps texting late and you feel you must reply.', cat: 'friends',
    e: 'Pressure to always be available to a friend is a friend stressor.' },
  { t: 'The family budget is tight and everyone seems worried.', cat: 'home',
    e: 'Money worries at home are a home stressor.' }
];

// Two overlap cards revealed by the toggle: they reasonably fit two zones.
let overlapCards = [
  { t: 'A group chat with school friends left you out on purpose.', cat: 'friends', alt: 'school',
    e: 'It is a friendship hurt AND tied to school — some stressors overlap.' },
  { t: 'You argue with a sibling about who does more chores at home.', cat: 'home', alt: 'friends',
    e: 'It is a home stressor AND a relationship conflict — categories can overlap.' }
];

let deck = [];          // active card indices order
let cards = [];         // active card objects (base or base+overlap)
let idx = 0;            // current card in deck
let feedback = null;    // { correct, cat, e } after a sort
let sortedCount = 0;
let correctCount = 0;
let done = false;
let showOverlap = false;

let zoneRects = [];     // hit-test rects for the three category zones
let zones = [
  { key: 'home', label: 'Home', col: 'mediumpurple', bg: 'lavender' },
  { key: 'school', label: 'School', col: 'steelblue', bg: 'aliceblue' },
  { key: 'friends', label: 'Friends', col: 'seagreen', bg: 'honeydew' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(resetDeck);
  resetButton.parent(document.querySelector('main'));

  overlapCheckbox = createCheckbox(' Some Stressors Overlap', false);
  overlapCheckbox.changed(toggleOverlap);
  overlapCheckbox.parent(document.querySelector('main'));

  positionControls();
  buildDeck();
  describe('A deck of middle-school scenario cards. The student reads the current card and ' +
    'clicks a Home, School, or Friends zone to sort it. Immediate feedback confirms the ' +
    'category and explains why it fits, and a tally tracks progress through the deck.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 14);
  overlapCheckbox.position(130, drawHeight + 18);
}

function buildDeck() {
  cards = baseCards.slice();
  if (showOverlap) cards = cards.concat(overlapCards);
  deck = [];
  for (let i = 0; i < cards.length; i++) deck.push(i);
  shuffle(deck, true);
  idx = 0;
  feedback = null;
  sortedCount = 0;
  correctCount = 0;
  done = false;
}

function resetDeck() {
  buildDeck();
}

function toggleOverlap() {
  showOverlap = overlapCheckbox.checked();
  buildDeck();
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
  text('Personal Stressor Sorter', canvasWidth / 2, 8);

  // Tally line
  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('dimgray');
  text('Sorted ' + sortedCount + ' of ' + cards.length +
       '   •   Correct: ' + correctCount, canvasWidth / 2, 34);

  if (done) {
    drawDone();
    drawZones(true);
    return;
  }

  // Current scenario card
  let cardX = margin;
  let cardY = 58;
  let cardW = canvasWidth - margin * 2;
  let cardH = 96;
  noStroke();
  fill('white');
  stroke('slategray');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('gray');
  textAlign(LEFT, TOP);
  textSize(11);
  text('SCENARIO ' + (sortedCount + 1), cardX + 12, cardY + 8);
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(16);
  let cur = cards[deck[idx]];
  text(cur.t, cardX + 12, cardY + 24, cardW - 24, cardH - 34);

  // Prompt
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(13);
  let prompt = feedback ? 'Tap a card to sort the next one, or the same zone again.'
                        : 'Which kind of stressor is this? Tap a zone below.';
  text('Where does this stressor belong?', canvasWidth / 2, cardY + cardH + 8);

  // Category zones
  drawZones(false);

  // Feedback panel
  let fbY = drawHeight - 66;
  drawFeedback(fbY);
}

function drawZones(dim) {
  zoneRects = [];
  let n = zones.length;
  let gap = 10;
  let zw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let zy = 190;
  let zh = 84;
  textAlign(CENTER, CENTER);
  for (let i = 0; i < n; i++) {
    let zx = margin + i * (zw + gap);
    let r = { x: zx, y: zy, w: zw, h: zh, key: zones[i].key };
    zoneRects.push(r);
    let hover = !dim && !done && pointInRect(mouseX, mouseY, r);
    stroke(zones[i].col);
    strokeWeight(hover ? 3 : 2);
    fill(hover ? zones[i].bg : 'white');
    rect(zx, zy, zw, zh, 12);
    noStroke();
    fill(zones[i].col);
    textSize(17);
    text(zones[i].label, zx, zy + zh / 2 - 4, zw, 24);
    textSize(11);
    fill('gray');
    let hint = zones[i].key === 'home' ? 'family, house'
             : zones[i].key === 'school' ? 'class, tests' : 'peers, social';
    text(hint, zx, zy + zh / 2 + 20, zw, 18);
  }
  cursor(overAnyZone() && !done ? HAND : ARROW);
}

function drawFeedback(y) {
  let fw = canvasWidth - margin * 2;
  let fh = 60;
  if (!feedback) {
    noStroke();
    fill('ghostwhite');
    stroke('gainsboro');
    strokeWeight(1);
    rect(margin, y, fw, fh, 8);
    noStroke();
    fill('darkgray');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Feedback will appear here after you sort a card.', margin, y, fw, fh);
    return;
  }
  let col = feedback.correct ? 'seagreen' : 'goldenrod';
  let bg = feedback.correct ? 'honeydew' : 'lightyellow';
  noStroke();
  fill(bg);
  stroke(col);
  strokeWeight(2);
  rect(margin, y, fw, fh, 8);
  noStroke();
  fill(col);
  textAlign(LEFT, TOP);
  textSize(14);
  let head = feedback.correct ? '✓ Good match!' : 'Best fit: ' + capitalize(feedback.cat);
  text(head, margin + 12, y + 8);
  fill('black');
  textAlign(LEFT, TOP);
  textSize(12);
  text(feedback.e, margin + 12, y + 28, fw - 24, fh - 32);
}

function drawDone() {
  let cardX = margin;
  let cardY = 62;
  let cardW = canvasWidth - margin * 2;
  let cardH = 92;
  noStroke();
  fill('honeydew');
  stroke('seagreen');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(18);
  text('Deck complete!', canvasWidth / 2, cardY + 12);
  fill('black');
  textAlign(CENTER, TOP);
  textSize(14);
  text('You sorted all ' + cards.length + ' scenarios.\nCorrect on the first try: ' +
       correctCount + ' of ' + cards.length + '.',
       cardX + 10, cardY + 40, cardW - 20, cardH - 44);

  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Naming where your stress comes from is the first step to handling it.\n' +
       'Try "Reset Deck" to practice again.',
       margin, drawHeight - 62, canvasWidth - margin * 2, 40);
}

function overAnyZone() {
  for (let r of zoneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (done) return;
  for (let r of zoneRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      sortCurrent(r.key);
      return;
    }
  }
}

function sortCurrent(chosen) {
  let cur = cards[deck[idx]];
  let correct = (chosen === cur.cat) || (cur.alt && chosen === cur.alt);
  feedback = { correct: correct, cat: cur.cat, e: cur.e };
  sortedCount++;
  if (correct) correctCount++;
  if (sortedCount >= cards.length) {
    done = true;
  } else {
    idx++;
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
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
