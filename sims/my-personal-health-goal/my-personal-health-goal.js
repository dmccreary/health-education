// My Personal Health Goal - MicroSim (pick a goal card, state "I will ___")
// CANVAS_HEIGHT: 515
// Kindergarten, Create (L6): a child (with teacher) picks one of six health goals
// and produces their own goal statement on a shareable, read-aloud goal card.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let goalButton;
let resetButton;

// Six goal choices drawn from earlier chapters. Each has a short label, a full
// "I will ..." sentence, and an icon key used to draw a simple picture cue.
let goals = [
  { icon: 'hands', label: 'Wash hands', sentence: 'I will wash my hands before eating.' },
  { icon: 'fruit', label: 'Eat a fruit', sentence: 'I will eat a fruit or vegetable today.' },
  { icon: 'move', label: 'Move my body', sentence: 'I will move my body and play every day.' },
  { icon: 'helmet', label: 'Wear a helmet', sentence: 'I will wear a helmet when I ride.' },
  { icon: 'water', label: 'Drink water', sentence: 'I will drink water to stay healthy.' },
  { icon: 'talk', label: 'Share a feeling', sentence: 'I will tell a trusted adult how I feel.' }
];

let selected = -1;       // index of chosen goal, -1 = none
let showCard = false;    // true when the big "My Goal" card overlay is shown
let cardRects = [];      // hit-test rects for the six goal cards

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  goalButton = createButton('★ My Goal');
  goalButton.mousePressed(showMyGoal);
  resetButton = createButton('Start Over');
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('Six picture goal cards a child can pick from — wash hands, eat a fruit, ' +
    'move your body, wear a helmet, drink water, share a feeling. Picking one shows an ' +
    '"I will..." sentence, and the My Goal button shows a big goal card to read aloud.', LABEL);
}

function positionControls() {
  goalButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 120, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy'); textAlign(CENTER, TOP); textSize(24);
  text('My Personal Health Goal', canvasWidth / 2, 10);

  if (showCard) {
    drawGoalCard();
  } else {
    drawPicker();
  }
}

function drawPicker() {
  // Prompt line
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Pick one healthy goal!', canvasWidth / 2, 44);

  // Six cards in a 3 x 2 grid
  cardRects = [];
  let cols = 3, gap = 12;
  let gridTop = 74;
  let cw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let ch = 120;
  for (let i = 0; i < goals.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (cw + gap);
    let y = gridTop + r * (ch + gap);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    drawCard(x, y, cw, ch, goals[i], selected === i);
  }
  cursor(overAnyCard() ? HAND : ARROW);

  // Selected-sentence strip below the grid
  let sy = gridTop + 2 * ch + gap + 12;
  let sh = drawHeight - sy - 10;
  let has = selected >= 0;
  fill(has ? 'honeydew' : 'white');
  stroke(has ? 'seagreen' : 'silver'); strokeWeight(2);
  rect(margin, sy, canvasWidth - margin * 2, sh, 12);
  noStroke();
  textAlign(CENTER, CENTER);
  if (has) {
    fill('black'); textSize(20);
    text('"' + goals[selected].sentence + '"', margin + 10, sy, canvasWidth - margin * 2 - 20, sh);
  } else {
    fill('gray'); textSize(16);
    text('Tap a card. Then tap the ★ My Goal button.', margin + 10, sy, canvasWidth - margin * 2 - 20, sh);
  }
}

function drawCard(x, y, w, h, goal, sel) {
  // Card body
  let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });
  strokeWeight(sel ? 4 : 2);
  stroke(sel ? 'goldenrod' : 'steelblue');
  fill(sel ? 'lightyellow' : (hover ? 'lightcyan' : 'white'));
  rect(x, y, w, h, 12);

  // Icon area (top ~72px)
  let cx = x + w / 2;
  let iconY = y + 40;
  drawIcon(goal.icon, cx, iconY, 30);

  // Label
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(14);
  text(goal.label, x + 4, y + h - 24, w - 8, 22);

  // Star badge on the chosen card
  if (sel) {
    drawStar(x + w - 16, y + 16, 6, 12, 5, 'gold', 'goldenrod');
  }
}

// Simple flat vector icons drawn with named colors. cx,cy = center, s = size unit.
function drawIcon(key, cx, cy, s) {
  push();
  strokeJoin(ROUND);
  if (key === 'hands') {
    // Hand with soap bubbles
    noStroke(); fill('navajowhite');
    ellipse(cx, cy + 4, s * 1.1, s * 1.3);
    fill('white'); stroke('skyblue'); strokeWeight(1.5);
    ellipse(cx - s * 0.5, cy - s * 0.6, s * 0.5);
    ellipse(cx + s * 0.4, cy - s * 0.7, s * 0.4);
    ellipse(cx + s * 0.1, cy - s * 0.4, s * 0.3);
  } else if (key === 'fruit') {
    // Apple
    noStroke(); fill('indianred');
    ellipse(cx - s * 0.28, cy + s * 0.1, s * 0.9, s * 1.1);
    ellipse(cx + s * 0.28, cy + s * 0.1, s * 0.9, s * 1.1);
    stroke('saddlebrown'); strokeWeight(3); noFill();
    line(cx, cy - s * 0.5, cx, cy - s * 0.9);
    noStroke(); fill('seagreen');
    ellipse(cx + s * 0.3, cy - s * 0.8, s * 0.5, s * 0.3);
  } else if (key === 'move') {
    // Running figure
    noStroke(); fill('seagreen');
    ellipse(cx, cy - s * 0.7, s * 0.55); // head
    strokeWeight(5); stroke('seagreen'); strokeCap(ROUND);
    line(cx, cy - s * 0.4, cx + s * 0.1, cy + s * 0.3); // body
    line(cx + s * 0.1, cy + s * 0.3, cx - s * 0.4, cy + s * 0.7); // back leg
    line(cx + s * 0.1, cy + s * 0.3, cx + s * 0.5, cy + s * 0.6); // front leg
    line(cx, cy - s * 0.15, cx - s * 0.5, cy - s * 0.35); // back arm
    line(cx, cy - s * 0.15, cx + s * 0.5, cy + s * 0.05); // front arm
  } else if (key === 'helmet') {
    // Bike helmet
    noStroke(); fill('crimson');
    arc(cx, cy + s * 0.2, s * 1.7, s * 1.6, PI, TWO_PI);
    fill('crimson'); rect(cx - s * 0.85, cy + s * 0.15, s * 1.7, s * 0.18, 4);
    stroke('white'); strokeWeight(2); noFill();
    arc(cx, cy + s * 0.2, s * 1.1, s * 1.0, PI, TWO_PI);
  } else if (key === 'water') {
    // Water glass
    noStroke(); fill('lightsteelblue'); stroke('steelblue'); strokeWeight(2);
    quad(cx - s * 0.6, cy - s * 0.7, cx + s * 0.6, cy - s * 0.7,
         cx + s * 0.42, cy + s * 0.8, cx - s * 0.42, cy + s * 0.8);
    noStroke(); fill('deepskyblue');
    quad(cx - s * 0.5, cy - s * 0.1, cx + s * 0.5, cy - s * 0.1,
         cx + s * 0.42, cy + s * 0.75, cx - s * 0.42, cy + s * 0.75);
  } else if (key === 'talk') {
    // Two speech bubbles (sharing a feeling with an adult)
    noStroke(); fill('mediumpurple');
    ellipse(cx - s * 0.35, cy - s * 0.1, s * 1.0, s * 0.8);
    triangle(cx - s * 0.6, cy + s * 0.2, cx - s * 0.3, cy + s * 0.2, cx - s * 0.5, cy + s * 0.55);
    fill('gold');
    ellipse(cx + s * 0.45, cy + s * 0.2, s * 0.7, s * 0.6);
    triangle(cx + s * 0.6, cy + s * 0.45, cx + s * 0.35, cy + s * 0.45, cx + s * 0.55, cy + s * 0.75);
  }
  pop();
}

function drawStar(x, y, r1, r2, n, fillC, strokeC) {
  push();
  fill(fillC); stroke(strokeC); strokeWeight(1.5);
  beginShape();
  for (let i = 0; i < n * 2; i++) {
    let a = (PI / n) * i - HALF_PI;
    let r = (i % 2 === 0) ? r2 : r1;
    vertex(x + cos(a) * r, y + sin(a) * r);
  }
  endShape(CLOSE);
  pop();
}

// The big shareable goal card shown after "My Goal" is pressed.
function drawGoalCard() {
  let x = margin;
  let y = 50;
  let w = canvasWidth - margin * 2;
  let h = drawHeight - y - 12;

  // Card background
  fill('lavenderblush'); stroke('goldenrod'); strokeWeight(5);
  rect(x, y, w, h, 18);

  // Row of stars along the top of the card
  for (let i = 0; i < 5; i++) {
    let sx = x + w * (0.2 + 0.15 * i);
    drawStar(sx, y + 26, 5, 11, 5, 'gold', 'goldenrod');
  }

  // "My Goal" heading
  noStroke(); fill('darkslateblue'); textAlign(CENTER, TOP); textSize(22);
  text('My Goal', x + w / 2, y + 44);

  // Picture cue for the chosen goal
  if (selected >= 0) {
    drawIcon(goals[selected].icon, x + w / 2, y + 118, 42);
  }

  // The goal sentence, large and centered in a box
  let sy = y + 168;
  let sh = h - 168 - 92;
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(24);
  let sentence = selected >= 0 ? goals[selected].sentence : 'Pick a goal first!';
  text('"' + sentence + '"', x + 20, sy, w - 40, sh);

  // Scout the dog giving a thumbs-up, bottom area
  drawScout(x + w / 2, y + h - 60);
}

// A simple golden-retriever mascot (Scout) with a thumbs-up and orange neckerchief.
function drawScout(cx, cy) {
  push();
  let s = 42;
  strokeJoin(ROUND);
  // Ears
  noStroke(); fill('peru');
  ellipse(cx - s * 0.75, cy - s * 0.15, s * 0.5, s * 0.9);
  ellipse(cx + s * 0.75, cy - s * 0.15, s * 0.5, s * 0.9);
  // Head
  fill('goldenrod');
  ellipse(cx, cy - s * 0.2, s * 1.5, s * 1.4);
  // Muzzle
  fill('wheat');
  ellipse(cx, cy + s * 0.15, s * 0.85, s * 0.7);
  // Nose
  fill('black');
  ellipse(cx, cy - s * 0.02, s * 0.22, s * 0.18);
  // Eyes
  ellipse(cx - s * 0.32, cy - s * 0.4, s * 0.16);
  ellipse(cx + s * 0.32, cy - s * 0.4, s * 0.16);
  // Smile
  stroke('black'); strokeWeight(2); noFill();
  arc(cx, cy + s * 0.12, s * 0.5, s * 0.4, 0.15 * PI, 0.85 * PI);
  // Neckerchief
  noStroke(); fill('orangered');
  triangle(cx - s * 0.55, cy + s * 0.6, cx + s * 0.55, cy + s * 0.6, cx, cy + s * 1.05);
  // Thumbs-up paw
  fill('goldenrod');
  ellipse(cx + s * 1.05, cy + s * 0.55, s * 0.55, s * 0.7);
  fill('wheat');
  rect(cx + s * 0.92, cy + s * 0.1, s * 0.26, s * 0.5, 6); // thumb up
  pop();
}

function overAnyCard() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (showCard) return; // card overlay: use Start Over button to go back
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) { selected = r.i; return; }
  }
}

function showMyGoal() {
  if (selected < 0) return; // nothing picked yet; do nothing
  showCard = true;
}

function resetAll() {
  selected = -1;
  showCard = false;
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
