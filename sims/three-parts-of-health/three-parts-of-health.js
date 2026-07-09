// The Three Parts of Health - MicroSim (Venn infographic + click-to-place cards)
// CANVAS_HEIGHT: 552
// Grade 1-4, Understand (L2): students explain the three connected parts of health
// (physical, mental/emotional, social) and classify everyday situations under the
// part(s) they mainly affect. Three overlapping circles form a Venn cluster with a
// shared "Whole Health" center. Click a circle to read its definition; click the
// circle (or the overlap) that a scenario card belongs in to place it.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 500;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Category definitions shown in the infobox.
let catData = {
  physical: { name: 'Physical', col: [76, 175, 80],
    def: 'Physical health is how your body feels and works.',
    ex: 'Examples: eating well, sleeping, moving your body.' },
  mental: { name: 'Mental / Emotional', col: [126, 87, 194],
    def: 'Mental and emotional health is how you feel and handle your feelings.',
    ex: 'Examples: feeling calm, feeling proud, working through a worry.' },
  social: { name: 'Social', col: [255, 152, 0],
    def: 'Social health is how you get along with other people.',
    ex: 'Examples: making friends, being kind, asking for help.' },
  whole: { name: 'Whole Health', col: [212, 175, 55],
    def: 'Whole health is all three parts working together.',
    ex: 'Examples: playing with friends, resting after a busy day.' }
};

// correct is one of: physical, mental, social, whole (whole = touches 2+ parts)
let scenarios = [
  { text: 'Malik ate breakfast before school.', correct: 'physical',
    explain: 'Eating a healthy breakfast fuels your body — that is physical health.' },
  { text: 'Jordan rode a bike around the park.', correct: 'physical',
    explain: 'Moving and exercising keeps your body strong — that is physical health.' },
  { text: 'Aisha felt proud after finishing a hard puzzle.', correct: 'mental',
    explain: 'Feeling proud and handling feelings is mental and emotional health.' },
  { text: 'Sam took slow, deep breaths to calm down.', correct: 'mental',
    explain: 'Calming your feelings is part of mental and emotional health.' },
  { text: 'Diego made a new friend at recess.', correct: 'social',
    explain: 'Making friends and getting along with others is social health.' },
  { text: 'Mia included a classmate who was sitting alone.', correct: 'social',
    explain: 'Caring for others and building friendships is social health.' },
  { text: 'Sofia stayed up late worrying about a test.', correct: 'whole',
    explain: 'Worrying is mental/emotional, and losing sleep affects her body — it touches more than one part.' },
  { text: 'Priya felt better after talking to her aunt about a hard day.', correct: 'whole',
    explain: 'Talking to family is social, and it lifted her mood — so it touches mental/emotional too.' },
  { text: 'Leo joined a soccer team and made new friends.', correct: 'whole',
    explain: 'Playing soccer is physical, and making friends is social — more than one part.' },
  { text: 'Ben ate lunch with friends and laughed a lot.', correct: 'whole',
    explain: 'Eating is physical, being with friends is social, and laughing lifts his mood.' }
];

let idx = 0;
let placed = [];         // card indices placed correctly
let lockedCard = false;  // current card already placed
let lastRegion = null;   // region clicked (physical|mental|social|whole)
let lastResult = null;   // 'correct' | 'wrong' | 'explore'
let circ = {};           // computed circle geometry, set in draw

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Card');
  nextButton.mousePressed(nextCard);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('Three overlapping circles form a Venn cluster labeled Physical (green), ' +
    'Mental/Emotional (purple), and Social (orange), sharing a gold "Whole Health" ' +
    'center. Clicking a circle shows its definition. A scenario card below is placed ' +
    'by clicking the circle, or the overlap, it belongs in.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 120, drawHeight + 12);
}

function resetAll() { idx = 0; placed = []; lockedCard = false; lastRegion = null; lastResult = null; }
function nextCard() {
  idx = (idx + 1) % scenarios.length;
  lockedCard = placed.includes(idx);
  lastRegion = null; lastResult = null;
}

function draw() {
  updateCanvasSize();

  fill('#fbf7ef'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c'); textAlign(CENTER, TOP); textSize(18);
  text('The Three Parts of Health', margin, 8, canvasWidth - margin * 2, 24);

  drawVenn();
  drawCard();
  drawInfo();

  let overCircle = regionAt(mouseX, mouseY) !== null && mouseY < drawHeight;
  cursor(overCircle ? HAND : ARROW);
}

function computeCircles() {
  let cx = canvasWidth / 2;
  let r = min(96, (canvasWidth - 2 * margin) * 0.30);
  r = max(r, 74);
  let dx = r * 0.60;
  let cyTop = 44 + r;
  let socialCy = cyTop + r * 0.95;
  circ = {
    r: r,
    physical: { x: cx - dx, y: cyTop },
    mental: { x: cx + dx, y: cyTop },
    social: { x: cx, y: socialCy }
  };
}

function drawVenn() {
  computeCircles();
  let r = circ.r;

  noStroke();
  drawOneCircle('physical');
  drawOneCircle('mental');
  drawOneCircle('social');

  // icons + labels in each circle's outer area
  drawHeart(circ.physical.x - r * 0.30, circ.physical.y - r * 0.30, r * 0.5);
  labelCircle('Physical', circ.physical.x - r * 0.30, circ.physical.y - r * 0.02, 'physical');
  drawBrain(circ.mental.x + r * 0.30, circ.mental.y - r * 0.30, r * 0.5);
  labelCircle('Mental /\nEmotional', circ.mental.x + r * 0.30, circ.mental.y - r * 0.06, 'mental');
  drawSocial(circ.social.x, circ.social.y + r * 0.30, r * 0.5);
  labelCircle('Social', circ.social.x, circ.social.y + r * 0.55, 'social');

  // shared center label
  let ccx = canvasWidth / 2;
  let ccy = (circ.physical.y + circ.mental.y + circ.social.y) / 3;
  fill('#8a6d1a'); textAlign(CENTER, CENTER); textSize(12); textStyle(BOLD);
  text('Whole\nHealth', ccx - 40, ccy - 12, 80, 30);
  textStyle(NORMAL);
}

function drawOneCircle(key) {
  let c = catData[key];
  let s = circ[key];
  fill(c.col[0], c.col[1], c.col[2], 105);
  circle(s.x, s.y, circ.r * 2);
  noFill();
  stroke(c.col[0], c.col[1], c.col[2]);
  strokeWeight(lastRegion === key ? 4 : 2);
  circle(s.x, s.y, circ.r * 2);
  noStroke();
}

function labelCircle(txt, x, y, key) {
  let c = catData[key].col;
  fill(c[0] * 0.55, c[1] * 0.55, c[2] * 0.55);
  textAlign(CENTER, TOP); textSize(12); textStyle(BOLD);
  text(txt, x - 46, y, 92, 32);
  textStyle(NORMAL);
}

function drawHeart(x, y, s) {
  noStroke(); fill(46, 125, 50);
  circle(x - s * 0.22, y - s * 0.08, s * 0.55);
  circle(x + s * 0.22, y - s * 0.08, s * 0.55);
  triangle(x - s * 0.46, y + s * 0.02, x + s * 0.46, y + s * 0.02, x, y + s * 0.6);
}

function drawBrain(x, y, s) {
  noStroke(); fill(94, 53, 177);
  ellipse(x, y, s * 1.1, s * 0.9);
  stroke(255); strokeWeight(2); noFill();
  arc(x - s * 0.2, y, s * 0.4, s * 0.4, PI, TWO_PI);
  arc(x + s * 0.15, y + s * 0.05, s * 0.4, s * 0.4, 0, PI);
  noStroke();
}

function drawSocial(x, y, s) {
  noStroke(); fill(230, 126, 0);
  circle(x - s * 0.32, y - s * 0.12, s * 0.42);
  circle(x + s * 0.32, y - s * 0.12, s * 0.42);
  arc(x - s * 0.32, y + s * 0.28, s * 0.6, s * 0.55, PI, TWO_PI);
  arc(x + s * 0.32, y + s * 0.28, s * 0.6, s * 0.55, PI, TWO_PI);
  stroke(230, 126, 0); strokeWeight(3); line(x - s * 0.1, y - s * 0.1, x + s * 0.1, y - s * 0.1);
  noStroke();
}

function drawCard() {
  let cy = 44 + circ.r + circ.r * 0.95 + circ.r + 6;
  cy = max(cy, 336);
  let ch = 50;
  circ._cardBottom = cy + ch;
  if (placed.length === scenarios.length) {
    fill('#eaf7ec'); stroke('seagreen'); strokeWeight(2);
    rect(margin, cy, canvasWidth - margin * 2, ch, 10);
    noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(14);
    text('All 10 placed! Health has three connected parts that work together.',
      margin + 10, cy, canvasWidth - margin * 2 - 20, ch);
    return;
  }
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke();
  fill('#666'); textAlign(LEFT, TOP); textSize(10);
  text('Card ' + (idx + 1) + ' of ' + scenarios.length + (lockedCard ? '  (placed)' : ''), margin + 10, cy + 5);
  fill('black'); textAlign(LEFT, CENTER); textSize(13.5);
  text(scenarios[idx].text, margin + 10, cy + 6, canvasWidth - margin * 2 - 20, ch - 8);
}

function drawInfo() {
  let iy = circ._cardBottom + 8;
  let ih = drawHeight - iy - 22;
  fill('white'); stroke('#d8cfa8'); strokeWeight(1);
  rect(margin, iy, canvasWidth - margin * 2, ih, 8);
  noStroke();
  let ix = margin + 12, iw = canvasWidth - margin * 2 - 24;

  textAlign(LEFT, TOP);
  if (lastRegion === null) {
    fill('dimgray'); textSize(12.5);
    text('Click a circle to read what that part of health means. To place the card, ' +
      'click the part it mainly touches — click the middle overlap if it touches more than one.',
      ix, iy + 8, iw, ih - 16);
  } else {
    let c = catData[lastRegion];
    fill(c.col[0] * 0.5, c.col[1] * 0.5, c.col[2] * 0.5); textSize(13); textStyle(BOLD);
    text(c.name, ix, iy + 7, iw, 18);
    textStyle(NORMAL);
    if (lastResult === 'correct') {
      fill('seagreen'); textSize(12);
      text('Correct! ' + scenarios[idx].explain, ix, iy + 26, iw, ih - 34);
    } else if (lastResult === 'wrong') {
      fill('darkorange'); textSize(12);
      text('Not quite. Think about what this situation mainly affects, then try again. ' +
        'Tip: the middle overlap is for situations that touch more than one part.',
        ix, iy + 26, iw, ih - 34);
    } else {
      fill('#333'); textSize(11.5);
      text(c.def + ' ' + c.ex, ix, iy + 26, iw, ih - 34);
    }
  }

  fill('navy'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Placed ' + placed.length + ' of ' + scenarios.length, margin, drawHeight - 6);
}

// Which region does (px,py) fall in? Returns physical|mental|social|whole|null.
function regionAt(px, py) {
  if (!circ.r) return null;
  let inside = [];
  for (let k of ['physical', 'mental', 'social']) {
    if (dist(px, py, circ[k].x, circ[k].y) < circ.r) inside.push(k);
  }
  if (inside.length === 0) return null;
  if (inside.length === 1) return inside[0];
  return 'whole';
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  let region = regionAt(mouseX, mouseY);
  if (region === null) return;
  lastRegion = region;
  if (placed.length === scenarios.length) { lastResult = 'explore'; return; }
  if (lockedCard) { lastResult = 'explore'; return; }
  if (region === scenarios[idx].correct) {
    lockedCard = true;
    if (!placed.includes(idx)) placed.push(idx);
    lastResult = 'correct';
  } else {
    lastResult = 'wrong';
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
