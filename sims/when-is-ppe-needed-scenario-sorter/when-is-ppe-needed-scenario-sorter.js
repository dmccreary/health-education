// When Is PPE Needed? Scenario Sorter - MicroSim (judge + justify + score)
// CANVAS_HEIGHT: 432
// Grade 6-8, Evaluate (L5): students judge whether PPE is needed for a realistic
// scenario and, if so, which type - then read a justification tied to the transmission
// risk. Deck runs from clear-cut to more ambiguous. A running score is tracked. No
// graphic injury imagery is used.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

// Four PPE choices.
let choices = [
  { key: 'none',   label: 'No PPE Needed' },
  { key: 'gloves', label: 'Gloves' },
  { key: 'mask',   label: 'Mask' },
  { key: 'both',   label: 'Gloves and Mask' }
];

// Scenario deck, ordered clear-cut -> ambiguous. a = correct key, j = justification.
let deck = [
  { t: 'You are eating lunch with friends in the cafeteria.',
    a: 'none',
    j: 'There is no contact with blood or body fluids and no one is sick, so no PPE is needed. Washing your hands before eating is the right step.' },
  { t: 'You are washing the dishes at home after dinner.',
    a: 'none',
    j: 'Warm water and soap handle everyday germs. There is no blood or respiratory droplet risk, so PPE is not required.' },
  { t: 'You help a classmate clean up a small, bleeding scrape.',
    a: 'gloves',
    j: 'Blood can carry germs, so gloves protect your hands from contact with it. There is no coughing or airborne risk, so a mask is not needed.' },
  { t: 'You care for a family member who has a bad cough and a fever.',
    a: 'mask',
    j: 'The germs spread mainly through droplets in the air from coughing, so a mask is the key protection. Gloves are not needed unless you touch body fluids.' },
  { t: 'You put a bandage on your own small paper cut.',
    a: 'none',
    j: 'It is your own minor cut and your own blood, so the risk to others is very low. Wash your hands and cover it - PPE is for protecting you from someone else\'s blood or germs.' },
  { t: 'You wipe up a classmate\'s bloody nose while they keep sneezing.',
    a: 'both',
    j: 'Blood contact calls for gloves, and the sneezing adds a droplet risk in the air, so you need both gloves and a mask.' },
  { t: 'You sit next to a friend who has a runny nose and keeps coughing.',
    a: 'mask',
    j: 'The main risk is breathing in respiratory droplets, so a mask helps most. There is no blood contact, so gloves are not needed.' },
  { t: 'You empty a classroom trash can that has used tissues in it.',
    a: 'gloves',
    j: 'Used tissues can carry germs from body fluids, so gloves protect your hands. No one is coughing right at you, so a mask is not needed - wash your hands afterward.' }
];

let idx = 0;
let picked = '';        // choice key for the current card, '' if unanswered
let result = [];        // result[i] = chosen key, or undefined if not yet answered
let choiceRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('One PPE scenario at a time with four choices: No PPE Needed, Gloves, Mask, ' +
    'or Gloves and Mask. Students judge the best protection; feedback justifies the ' +
    'correct answer by naming the transmission risk. A running score is shown, and a ' +
    'Next Scenario button moves through the deck.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 120, drawHeight + 12);
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

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(18);
  text('When Is PPE Needed?', canvasWidth / 2, 8);

  // scenario card
  let cardH = 92;
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1.5);
  rect(margin, 36, canvasWidth - 2 * margin, cardH, 10);
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 44);
  fill('black');
  textSize(15);
  text(deck[idx].t, margin + 12, 64, canvasWidth - 2 * margin - 24, 60);

  drawChoices();
  drawFeedback();
  drawScore();

  cursor(overChoice() ? HAND : ARROW);
}

function drawChoices() {
  choiceRects = [];
  let gap = 12;
  let bw = (canvasWidth - 2 * margin - gap) / 2;
  let bh = 42;
  let top = 140;
  let answered = result[idx] !== undefined;
  for (let i = 0; i < choices.length; i++) {
    let col = i % 2, row = Math.floor(i / 2);
    let x = margin + col * (bw + gap);
    let y = top + row * (bh + 10);
    choiceRects.push({ x: x, y: y, w: bw, h: bh, key: choices[i].key });

    let isPicked = answered && result[idx] === choices[i].key;
    let isCorrect = choices[i].key === deck[idx].a;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: bw, h: bh });

    strokeWeight((isPicked || (answered && isCorrect)) ? 3 : 1.5);
    if (answered && isCorrect) stroke('seagreen');
    else if (isPicked) stroke('indianred');
    else stroke('#4472a8');

    if (isPicked && isCorrect) fill('honeydew');
    else if (isPicked) fill('mistyrose');
    else if (answered && isCorrect) fill('honeydew');
    else fill(hover && !answered ? 'lightyellow' : 'white');
    rect(x, y, bw, bh, 10);

    noStroke();
    fill('#22405f');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(choices[i].label, x + 6, y, bw - 12, bh);
  }
}

function drawFeedback() {
  let fy = 240;
  let fh = drawHeight - fy - 34;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fy, canvasWidth - 2 * margin, fh, 8);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12.5);
  let answered = result[idx] !== undefined;
  if (!answered) {
    fill('dimgray');
    text('Read the scenario. What is the transmission risk - contact with blood or body ' +
      'fluids, droplets in the air, both, or none? Then choose the best protection.',
      margin + 12, fy + 10, canvasWidth - 2 * margin - 24, fh - 16);
  } else {
    let correct = result[idx] === deck[idx].a;
    let correctLabel = choices.find(c => c.key === deck[idx].a).label;
    // head line: verdict
    fill(correct ? 'seagreen' : 'indianred');
    textStyle(BOLD);
    text(correct ? 'Correct - ' + correctLabel + '.' : 'Best choice: ' + correctLabel + '.',
      margin + 12, fy + 10, canvasWidth - 2 * margin - 24, 18);
    textStyle(NORMAL);
    // justification: wrapped block below the head line
    fill('black');
    text(deck[idx].j, margin + 12, fy + 30, canvasWidth - 2 * margin - 24, fh - 36);
  }
}

function drawScore() {
  let answered = result.filter(r => r !== undefined).length;
  let correct = 0;
  for (let i = 0; i < deck.length; i++) if (result[i] === deck[i].a) correct++;
  fill('#1a3a6c');
  textAlign(LEFT, TOP);
  textSize(13);
  let msg = 'Score: ' + correct + ' correct of ' + answered + ' answered (' + deck.length + ' total)';
  if (answered === deck.length) msg += '  -  You finished all ' + deck.length + '!';
  text(msg, margin, drawHeight - 26, canvasWidth - 2 * margin, 22);
}

function overChoice() {
  if (result[idx] !== undefined) return false;
  for (let r of choiceRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  if (result[idx] !== undefined) return;   // lock after answering
  for (let r of choiceRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      result[idx] = r.key;
      picked = r.key;
      return;
    }
  }
}

function nextScenario() {
  idx = (idx + 1) % deck.length;
  picked = result[idx] !== undefined ? result[idx] : '';
}

function resetAll() {
  idx = 0;
  picked = '';
  result = [];
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
