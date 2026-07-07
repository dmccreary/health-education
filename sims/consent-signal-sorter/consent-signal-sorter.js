// Consent Signal Sorter - MicroSim (sort statements: real consent or not)
// CANVAS_HEIGHT: 512
// Grade 5, Understand (L2): students classify everyday statements as showing real
// consent or not, reinforcing that consent is freely given, specific, and reversible.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let roundButton;

// real = true (real consent) / false (not); reason
let cards = [
  { t: '"Sure, you can borrow my pencil."', real: true, e: 'Freely given, clear yes.' },
  { t: '"Fine, take the picture, just stop asking me over and over."', real: false, e: 'Worn down by repeated pressure is not free consent.' },
  { t: '"Yes! I would love to be in your group."', real: true, e: 'An enthusiastic, willing yes.' },
  { t: '"...I guess, whatever." (walking away upset)', real: false, e: 'A reluctant, upset "maybe" is not real consent.' },
  { t: '"You can have one of my chips."', real: true, e: 'Specific and clearly offered.' },
  { t: '"Okay, but only because everyone is watching."', real: false, e: 'Given under social pressure, not freely.' },
  { t: '"I changed my mind, please stop." "Okay."', real: true, e: 'Consent is reversible — and it was respected.' },
  { t: 'Someone agreeing after being asked five times.', real: false, e: 'Repeated pressure removes free choice.' },
  { t: '"Yes, you can tag me in that one photo."', real: true, e: 'Specific and freely given.' },
  { t: 'Saying yes without knowing what they agreed to.', real: false, e: 'Consent must be informed.' }
];

let marks = []; // per card: 0 none, 1 real, 2 not
let checked = false;
let score = 0;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Sorting');
  checkButton.mousePressed(check);
  roundButton = createButton('New Round');
  roundButton.mousePressed(reset);
  positionControls();
  reset();
  describe('Ten short statement cards to sort into Real Consent or Not Real Consent. ' +
    'Tapping a card cycles its bin; Check My Sorting reveals which are correct with a reason.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  roundButton.position(160, drawHeight + 14);
}

function reset() { marks = new Array(cards.length).fill(0); checked = false; score = 0; }

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
  textSize(19);
  text('Consent Signal Sorter', canvasWidth / 2, 6);

  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('seagreen'); text('● Real Consent', margin, 32);
  fill('indianred'); textAlign(RIGHT, CENTER); text('Not Real Consent ●', canvasWidth - margin, 32);

  cardRects = [];
  let y0 = 46, ch = 36, gap = 4;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = (marks[i] === 1 && cards[i].real) || (marks[i] === 2 && !cards[i].real);
    strokeWeight(1.5);
    if (checked) { stroke(correct ? 'seagreen' : 'darkorange'); strokeWeight(2.5); fill(correct ? 'honeydew' : 'navajowhite'); }
    else if (marks[i] === 1) { stroke('seagreen'); fill('honeydew'); }
    else if (marks[i] === 2) { stroke('indianred'); fill('mistyrose'); }
    else { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(cards[i].t, margin + 10, y + ch / 2, canvasWidth - margin * 2 - 150, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (checked) { fill(correct ? 'seagreen' : 'darkorange'); text((correct ? '✓ ' : '✗ ') + cards[i].e, canvasWidth - margin - 8, y + ch / 2, 0, ch); }
    else { let lab = ['tap to sort', 'Real ●', '● Not real']; fill(marks[i] === 1 ? 'seagreen' : (marks[i] === 2 ? 'indianred' : 'dimgray')); text(lab[marks[i]], canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() && !checked ? HAND : ARROW);

  noStroke(); textAlign(CENTER, BOTTOM); textSize(13);
  fill('navy');
  text(checked ? 'You sorted ' + score + ' of ' + cards.length + ' correctly.' : 'Tap each card to sort it, then Check My Sorting.',
    margin, drawHeight - 8, canvasWidth - margin * 2, 30);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { marks[r.i] = (marks[r.i] + 1) % 3; return; }
}

function check() {
  checked = true; score = 0;
  for (let i = 0; i < cards.length; i++) if ((marks[i] === 1 && cards[i].real) || (marks[i] === 2 && !cards[i].real)) score++;
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
