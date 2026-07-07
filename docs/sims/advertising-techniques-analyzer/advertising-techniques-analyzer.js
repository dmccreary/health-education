// Advertising Techniques Analyzer - MicroSim (scenario -> technique sorter)
// CANVAS_HEIGHT: 487
// Grades 6-8, Analyze (L4): students deconstruct realistic (fictional) advertising
// scenarios and identify which documented targeting/persuasion technique each uses.
// All brands/products are fictional and based on publicly reported industry patterns.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;
let resetButton;

let techniques = [
  'Youth-Appealing\nFlavors/Design',
  'Targeted Community\nMarketing',
  'Association\nImagery',
  'Sponsorship/\nCultural Presence'
];

// scenario -> correct technique index (0-3) + explanation
let deck = [
  { t: "A new vape flavor called 'Blue Raspberry Blast' uses bright, cartoon-style packaging.", a: 0, e: 'Sweet flavors and cartoon-style design are documented ways products are made to appeal to young people.' },
  { t: 'A tobacco company sponsors a community music festival in one neighborhood every year.', a: 3, e: 'Sponsoring events builds a friendly cultural presence so a brand feels like part of the community.' },
  { t: 'An ad shows people laughing at a beach party, looking happy and carefree with a product.', a: 2, e: 'Linking a product to fun, friendship, and good times is called association imagery.' },
  { t: 'Billboards for a product appear far more often in one specific neighborhood than in others.', a: 1, e: 'Concentrating ads in specific communities is a documented targeted-marketing pattern.' },
  { t: 'A drink comes in candy-like colors with a friendly mascot character on the can.', a: 0, e: 'Candy colors and mascots are design choices that attract younger audiences.' },
  { t: 'A brand gives away free branded gear to a local youth sports league.', a: 3, e: 'Providing branded goods to community groups increases everyday cultural presence.' },
  { t: 'An ad pairs the product with a glamorous, successful celebrity lifestyle.', a: 2, e: 'Pairing a product with glamour and success links it to feelings, not facts.' },
  { t: 'Ads for a product are placed mostly near schools and youth hangouts in certain areas.', a: 1, e: 'Placing ads where specific groups gather is targeted community marketing.' }
];

let order = [];
let idx = 0;
let answered = false;
let picked = -1;
let tally = 0;
let zoneRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Card');
  nextButton.mousePressed(nextCard);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  shuffleDeck();
  describe('One advertising scenario card is shown at a time above four technique ' +
    'zones. Students click the technique the scenario uses and get immediate feedback ' +
    'with the documented pattern behind it, plus a running tally of correct matches.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(130, drawHeight + 12);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  idx = 0; answered = false; picked = -1; tally = 0;
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
  text('Advertising Techniques Analyzer', canvasWidth / 2, 8);

  let card = deck[order[idx]];

  // progress + tally
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Card ' + (idx + 1) + ' of ' + deck.length, margin, 36);
  textAlign(RIGHT, TOP);
  fill('seagreen');
  text('Correct: ' + tally, canvasWidth - margin, 36);

  // scenario card
  let cy = 58, ch = 92;
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(15);
  text(card.t, margin + 12, cy + 6, canvasWidth - margin * 2 - 24, ch - 12);

  // technique zones (2x2)
  zoneRects = [];
  let gap = 12;
  let zw = (canvasWidth - margin * 2 - gap) / 2;
  let zh = 60;
  let zy0 = cy + ch + 14;
  for (let i = 0; i < 4; i++) {
    let c = i % 2, r = Math.floor(i / 2);
    let x = margin + c * (zw + gap);
    let y = zy0 + r * (zh + gap);
    zoneRects.push({ x: x, y: y, w: zw, h: zh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: zw, h: zh });
    let isCorrect = i === card.a;
    strokeWeight(1.5);
    stroke('mediumpurple');
    fill(hover && !answered ? 'lavender' : 'white');
    if (answered) {
      if (isCorrect) { fill('honeydew'); stroke('seagreen'); strokeWeight(2.5); }
      else if (i === picked) { fill('mistyrose'); stroke('indianred'); strokeWeight(2.5); }
    }
    rect(x, y, zw, zh, 8);
    noStroke();
    fill('indigo');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(techniques[i], x + 4, y + 4, zw - 8, zh - 8);
  }
  cursor(!answered && overAnyZone() ? HAND : ARROW);

  // feedback
  let fy = zy0 + 2 * (zh + gap) + 6;
  textAlign(LEFT, TOP);
  textSize(14);
  if (answered) {
    let correct = picked === card.a;
    fill(correct ? 'seagreen' : 'indianred');
    text((correct ? '✓ Correct! ' : '✗ Not quite. ') + card.e,
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  } else {
    fill('dimgray');
    text('Which technique does this scenario use? Click a zone.',
      margin, fy, canvasWidth - margin * 2, 30);
  }
}

function overAnyZone() {
  for (let z of zoneRects) if (pointInRect(mouseX, mouseY, z)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (answered) return;
  for (let z of zoneRects) {
    if (pointInRect(mouseX, mouseY, z)) {
      picked = z.i;
      answered = true;
      if (picked === deck[order[idx]].a) tally++;
      return;
    }
  }
}

function nextCard() {
  if (idx < deck.length - 1) {
    idx++;
    answered = false;
    picked = -1;
  }
}

function resetAll() {
  shuffleDeck();
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
