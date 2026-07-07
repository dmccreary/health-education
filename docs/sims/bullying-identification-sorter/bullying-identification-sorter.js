// What Counts as Bullying? - MicroSim (two-category sorter)
// CANVAS_HEIGHT: 512
// Grade 3, Understand (L2): students distinguish bullying (repeated, intentional, with
// a power difference) from a one-time disagreement by sorting scenario cards. Calm,
// factual, non-graphic; always ends with a reminder to tell a trusted adult.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

// cat: true = bullying, false = one-time disagreement ; e explains the 3 features
let cards = [
  { t: 'A classmate calls someone a mean name every day at lunch.', cat: true,
    e: 'Repeated and on purpose — that is bullying.' },
  { t: 'Two friends argue once about which game to play.', cat: false,
    e: 'One time, no power difference — a disagreement, not bullying.' },
  { t: "An older, bigger kid keeps taking a younger kid's snack.", cat: true,
    e: 'Repeated, on purpose, and a power difference — bullying.' },
  { t: 'Two classmates disagree about the rules, then make up.', cat: false,
    e: 'A single disagreement that gets resolved — not bullying.' },
  { t: 'A group leaves the same kid out on purpose every recess.', cat: true,
    e: 'Repeated and intentional exclusion — that is bullying.' },
  { t: 'Two friends bump into each other by accident and say sorry.', cat: false,
    e: 'An accident, not on purpose — not bullying.' }
];

let marks = [];     // per card: 0 none, 1 bullying, 2 disagreement
let checked = false;
let score = 0;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(check);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  reset();
  describe('Six short scenario cards. Students tap each card to sort it into Bullying ' +
    'or One-Time Disagreement, then check answers to see a calm, factual explanation of ' +
    'whether it was repeated, intentional, and involved a power difference.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  resetButton.position(165, drawHeight + 14);
}

function reset() {
  marks = [0, 0, 0, 0, 0, 0];
  checked = false;
  score = 0;
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

  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('What Counts as Bullying?', canvasWidth / 2, 8);

  // legend
  noStroke(); textAlign(LEFT, CENTER); textSize(12);
  fill('indianred'); circle(margin + 6, 40, 12); fill('black'); text('Bullying', margin + 16, 40);
  fill('mediumseagreen'); circle(canvasWidth / 2 + 4, 40, 12); fill('black'); text('One-Time Disagreement', canvasWidth / 2 + 14, 40);

  // cards
  cardRects = [];
  let y0 = 56, ch = 54, gap = 6;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let correct = (marks[i] === 1 && cards[i].cat) || (marks[i] === 2 && !cards[i].cat);
    strokeWeight(1.5);
    if (checked) { stroke(correct ? 'seagreen' : 'darkorange'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'navajowhite'); }
    else if (marks[i] === 1) { stroke('indianred'); fill('mistyrose'); }
    else if (marks[i] === 2) { stroke('mediumseagreen'); fill('honeydew'); }
    else { stroke('gray'); let hover = pointInRect(mouseX, mouseY, cardRects[i]); fill(hover ? 'lightyellow' : 'white'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 8);
    noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
    text(cards[i].t, margin + 10, y + 6, canvasWidth - margin * 2 - 20, 30);
    // status line
    textAlign(LEFT, BOTTOM); textSize(11);
    let by = y + ch - 5;
    if (checked) {
      fill(correct ? 'seagreen' : 'darkorange');
      text((correct ? '✓ ' : '✗ ') + cards[i].e, margin + 10, by, canvasWidth - margin * 2 - 20, 16);
    } else {
      let labels = ['tap to sort →', 'Bullying', 'One-Time Disagreement'];
      fill(marks[i] === 1 ? 'indianred' : (marks[i] === 2 ? 'seagreen' : 'dimgray'));
      text(labels[marks[i]], margin + 10, by);
    }
  }
  cursor(overAnyCard() && !checked ? HAND : ARROW);

  // trusted-adult reminder (always visible)
  noStroke(); fill('navy'); textAlign(CENTER, BOTTOM); textSize(13);
  let msg = checked ? 'You sorted ' + score + ' of 6 correctly.  ' : '';
  text(msg + 'If you see or experience bullying, tell a trusted adult.', margin, drawHeight - 8, canvasWidth - margin * 2, 40);
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
  for (let i = 0; i < cards.length; i++) {
    if (pointInRect(mouseX, mouseY, cardRects[i])) { marks[i] = (marks[i] + 1) % 3; return; }
  }
}

function check() {
  checked = true;
  score = 0;
  for (let i = 0; i < cards.length; i++) {
    if ((marks[i] === 1 && cards[i].cat) || (marks[i] === 2 && !cards[i].cat)) score++;
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
