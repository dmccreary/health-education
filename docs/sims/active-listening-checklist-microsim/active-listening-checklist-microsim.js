// Are You Listening Actively? - MicroSim (scenario classification)
// CANVAS_HEIGHT: 495
// Grade 2, Apply (L3): students apply active listening by marking which actions in
// a short scenario show active listening, then checking their answers.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let checkButton;
let newButton;
let resetButton;

let scenarios = [
  {
    text: 'A teacher explains a new hallway safety rule.',
    cards: [
      { t: 'Looking at the teacher and staying quiet', good: true, r: 'shows active listening because your attention is on the teacher.' },
      { t: 'Waving hands and talking to a friend', good: false, r: 'is not active listening because your attention is somewhere else.' },
      { t: "Asking 'why do we do it this way?' after she finishes", good: true, r: 'shows active listening — a good question means you were paying attention.' },
      { t: 'Nodding to show you understand', good: true, r: 'shows active listening because it tells the teacher you follow along.' }
    ]
  },
  {
    text: 'A friend tells you about a game they want to play.',
    cards: [
      { t: 'Facing your friend and listening', good: true, r: 'shows active listening because you are focused on your friend.' },
      { t: 'Looking around at other games', good: false, r: 'is not active listening because your attention is elsewhere.' },
      { t: 'Asking what the rules are', good: true, r: 'shows active listening because you want to understand.' },
      { t: 'Walking away while they talk', good: false, r: 'is not active listening because you stopped paying attention.' }
    ]
  },
  {
    text: 'Your grown-up gives you directions for a chore.',
    cards: [
      { t: 'Listening until they finish', good: true, r: 'shows active listening because you let them finish.' },
      { t: 'Starting to talk about something else', good: false, r: 'is not active listening because you changed the focus.' },
      { t: 'Repeating the steps back to be sure', good: true, r: 'shows active listening because you checked that you understood.' },
      { t: 'Putting on headphones', good: false, r: 'is not active listening because you blocked out the words.' }
    ]
  }
];

let sIndex = 0;
let marks = [];       // 0 unmarked, 1 active, 2 not active
let checked = false;
let score = 0;
let totalCorrect = 0; // across scenarios
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(checkAnswers);
  newButton = createButton('New Scenario');
  newButton.mousePressed(newScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  resetMarks();
  describe('A short scenario with four action cards. Students mark each action as active ' +
    'listening or not, then check answers: correct cards turn green and incorrect turn ' +
    'orange, with an explanation for each.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  newButton.position(165, drawHeight + 14);
}

function resetMarks() {
  marks = [0, 0, 0, 0];
  checked = false;
  score = 0;
}

function computeCards() {
  cardRects = [];
  let gap = 12;
  let top = 150;
  let cardW = (canvasWidth - margin * 2 - gap) / 2;
  let cardH = 78;
  for (let i = 0; i < 4; i++) {
    let c = i % 2, r = Math.floor(i / 2);
    cardRects.push({ x: margin + c * (cardW + gap), y: top + r * (cardH + gap), w: cardW, h: cardH });
  }
}

function draw() {
  updateCanvasSize();
  computeCards();
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Are You Listening Actively?', canvasWidth / 2, 8);

  // scenario
  let sc = scenarios[sIndex];
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 96, 10);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Scenario ' + (sIndex + 1) + ' of 3:', margin + 12, 50);
  fill('black');
  textSize(17);
  text(sc.text, margin + 12, 72, canvasWidth - margin * 2 - 24, 56);

  // cards
  for (let i = 0; i < 4; i++) {
    let rct = cardRects[i];
    let hover = pointInRect(mouseX, mouseY, rct);
    let correct = (marks[i] === 1 && sc.cards[i].good) || (marks[i] === 2 && !sc.cards[i].good);
    strokeWeight(1.5); stroke('steelblue');
    if (checked) {
      fill(correct ? 'palegreen' : 'navajowhite');
      stroke(correct ? 'seagreen' : 'darkorange'); strokeWeight(2.5);
    } else if (marks[i] === 1) fill('palegreen');
    else if (marks[i] === 2) fill('navajowhite');
    else fill(hover ? 'lightyellow' : 'white');
    rect(rct.x, rct.y, rct.w, rct.h, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(13);
    text(sc.cards[i].t, rct.x + 6, rct.y + 8, rct.w - 12, rct.h - 30);
    textAlign(CENTER, BOTTOM);
    textSize(12);
    let by = rct.y + rct.h - 6;
    if (checked) {
      fill(correct ? 'seagreen' : 'darkorange');
      text(correct ? '✓' : '✗', rct.x + rct.w / 2, by);
    } else {
      fill('dimgray');
      let labels = ['tap to mark', '👂 Active', '🚫 Not active'];
      text(labels[marks[i]], rct.x + rct.w / 2, by);
    }
  }
  cursor(overAnyCard() && !checked ? HAND : ARROW);

  // feedback box
  let fy = 314;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 10, 8);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(13);
  if (!checked) {
    fill('dimgray');
    text('Tap each card to mark it, then press Check My Answers.', margin + 10, fy + 10,
      canvasWidth - margin * 2 - 20, 90);
  } else {
    fill('navy');
    text('You got ' + score + ' of 4. Total correct so far: ' + totalCorrect + '.',
      margin + 10, fy + 8, canvasWidth - margin * 2 - 20, 20);
    // one explanation line per hovered card, else first card
    let hi = hoveredCard();
    let showI = hi >= 0 ? hi : 0;
    fill('black');
    text('“' + sc.cards[showI].t + '” ' + sc.cards[showI].r, margin + 10, fy + 30,
      canvasWidth - margin * 2 - 20, 60);
  }
}

function overAnyCard() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function hoveredCard() {
  for (let i = 0; i < cardRects.length; i++) if (pointInRect(mouseX, mouseY, cardRects[i])) return i;
  return -1;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (checked) return;
  for (let i = 0; i < 4; i++) {
    if (pointInRect(mouseX, mouseY, cardRects[i])) { marks[i] = (marks[i] + 1) % 3; return; }
  }
}

function checkAnswers() {
  if (checked) return;
  checked = true;
  let sc = scenarios[sIndex];
  score = 0;
  for (let i = 0; i < 4; i++) {
    if ((marks[i] === 1 && sc.cards[i].good) || (marks[i] === 2 && !sc.cards[i].good)) score++;
  }
  totalCorrect += score;
}

function newScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  resetMarks();
}

function resetAll() {
  sIndex = 0;
  totalCorrect = 0;
  resetMarks();
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
