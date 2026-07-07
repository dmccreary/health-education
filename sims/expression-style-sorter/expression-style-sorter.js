// Healthy vs. Unhealthy Expression Sorter - MicroSim (classify + check)
// CANVAS_HEIGHT: 492
// Grade 3, Analyze (L4): students differentiate healthy from unhealthy ways of expressing
// emotions by sorting example statements and actions.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

// healthy = true; e explanation
let cards = [
  { t: '"I feel left out, can we talk?"', healthy: true, e: 'Sharing a feeling with words is healthy.' },
  { t: 'Slamming the door and refusing to speak.', healthy: false, e: 'Shutting others out does not solve the feeling.' },
  { t: '"I\'m nervous about the game, wish me luck!"', healthy: true, e: 'Naming a feeling out loud is healthy.' },
  { t: 'Yelling mean names when losing a game.', healthy: false, e: 'Hurting others with words is unhealthy.' },
  { t: 'Drawing a picture of how I feel.', healthy: true, e: 'Creative expression is a healthy outlet.' },
  { t: 'Throwing things when angry.', healthy: false, e: 'Throwing things can hurt people or property.' },
  { t: 'Telling a friend "I feel frustrated."', healthy: true, e: 'Using calm words to share is healthy.' },
  { t: 'Giving someone the silent treatment.', healthy: false, e: 'Ignoring someone on purpose is unhealthy.' }
];

let marks = [];   // 0 none, 1 healthy, 2 unhealthy
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
  describe('Eight example statements and actions to sort into Healthy Expression or ' +
    'Unhealthy Expression. Tapping a card cycles its bin; Check My Answers explains each.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 12);
  resetButton.position(160, drawHeight + 12);
}
function reset() { marks = new Array(cards.length).fill(0); checked = false; score = 0; }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Healthy or Unhealthy Expression?', canvasWidth / 2, 6);
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('seagreen'); text('💬 Healthy Expression', margin, 30);
  fill('slategray'); textAlign(RIGHT, CENTER); text('Unhealthy Expression ⛈', canvasWidth - margin, 30);

  cardRects = [];
  let y0 = 44, ch = 42, gap = 5;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = (marks[i] === 1 && cards[i].healthy) || (marks[i] === 2 && !cards[i].healthy);
    strokeWeight(1.5);
    if (checked) { stroke(correct ? 'seagreen' : 'darkorange'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'navajowhite'); }
    else if (marks[i] === 1) { stroke('seagreen'); fill('honeydew'); }
    else if (marks[i] === 2) { stroke('slategray'); fill('lavender'); }
    else { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(cards[i].t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 140, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (checked) { fill(correct ? 'seagreen' : 'darkorange'); text((correct ? '✓ ' : '✗ ') + cards[i].e, canvasWidth - margin - 8, y + ch / 2); }
    else { let lab = ['tap to sort', 'Healthy', 'Unhealthy']; fill(marks[i] === 1 ? 'seagreen' : (marks[i] === 2 ? 'slategray' : 'dimgray')); text(lab[marks[i]], canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() && !checked ? HAND : ARROW);

  noStroke(); textAlign(CENTER, BOTTOM); textSize(12); fill('navy');
  text(checked ? 'You sorted ' + score + ' of ' + cards.length + ' correctly.' : 'Sort each card, then Check My Answers.',
    margin, drawHeight - 6, canvasWidth - margin * 2, 24);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { marks[r.i] = (marks[r.i] + 1) % 3; return; }
}

function check() {
  checked = true; score = 0;
  for (let i = 0; i < cards.length; i++) if ((marks[i] === 1 && cards[i].healthy) || (marks[i] === 2 && !cards[i].healthy)) score++;
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
