// Active Listening Checklist Builder - MicroSim (scenario classification)
// CANVAS_HEIGHT: 520
// Grade 3, Apply (L3): students demonstrate active listening by deciding which
// behaviors an active listener would use during a short conversation scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 465;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let checkButton;
let nextButton;

// Four low-stakes conversation scenarios. Each behavior: text, good?, reason.
let scenarios = [
  {
    speaker: "I'm nervous about my soccer game tomorrow.",
    cards: [
      { t: 'Look at my phone', good: false, r: 'Looking at your phone shows you are not paying attention.' },
      { t: 'Make eye contact', good: true, r: 'Eye contact shows the speaker that you care.' },
      { t: 'Interrupt to talk about me', good: false, r: 'Interrupting takes the focus away from your friend.' },
      { t: "Nod and say 'that makes sense'", good: true, r: 'Nodding shows you understand and are listening.' },
      { t: 'Change the subject', good: false, r: 'Changing the subject ignores what your friend shared.' },
      { t: "Ask 'What are you nervous about?'", good: true, r: 'A good question shows you want to understand more.' }
    ]
  },
  {
    speaker: 'I lost my favorite book and I feel sad.',
    cards: [
      { t: "Say 'Let's find it together'", good: true, r: 'Offering help shows you care about their feelings.' },
      { t: 'Keep playing my game', good: false, r: 'Ignoring your friend is not active listening.' },
      { t: 'Look at them while they talk', good: true, r: 'Facing the speaker shows you are focused on them.' },
      { t: 'Laugh about it', good: false, r: 'Laughing can hurt feelings when someone is sad.' },
      { t: "Ask 'Where did you see it last?'", good: true, r: 'A helpful question keeps the focus on your friend.' },
      { t: 'Talk over them', good: false, r: 'Talking over someone stops you from hearing them.' }
    ]
  },
  {
    speaker: 'My grandma is visiting this weekend and I am so excited!',
    cards: [
      { t: "Smile and say 'That sounds fun!'", good: true, r: 'Matching their happy feeling shows you are listening.' },
      { t: 'Turn away and yawn', good: false, r: 'Turning away tells the speaker you are not interested.' },
      { t: "Ask 'What will you do together?'", good: true, r: 'Questions show real interest in what they said.' },
      { t: 'Talk about my own weekend', good: false, r: 'Switching to yourself takes away their turn to share.' },
      { t: 'Give my full attention', good: true, r: 'Full attention is the heart of active listening.' },
      { t: 'Check the clock over and over', good: false, r: 'Watching the clock shows you want them to hurry.' }
    ]
  },
  {
    speaker: "I don't understand the math homework and I'm frustrated.",
    cards: [
      { t: "Say 'Which part is tricky?'", good: true, r: 'Asking helps you understand exactly what they need.' },
      { t: 'Roll my eyes', good: false, r: 'Rolling your eyes shows you are judging, not listening.' },
      { t: 'Listen without interrupting', good: true, r: 'Letting them finish shows respect for their thoughts.' },
      { t: "Say 'That's easy!'", good: false, r: 'Calling it easy can make a frustrated friend feel worse.' },
      { t: 'Nod and stay patient', good: true, r: 'Patience gives your friend room to explain.' },
      { t: 'Walk away', good: false, r: 'Walking away ends the conversation without helping.' }
    ]
  }
];

let sIndex = 0;           // current scenario
let marks = [];           // per-card: 0 unmarked, 1 listening, 2 not
let checked = false;
let cardRects = [];
let score = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Answers');
  checkButton.mousePressed(checkAnswers);
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);

  positionControls();
  resetMarks();
  describe('A conversation scenario with six behavior cards. Students mark each ' +
    'behavior as active listening or not listening, then check their answers to ' +
    'see which are correct and why.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  nextButton.position(170, drawHeight + 14);
}

function resetMarks() {
  marks = [0, 0, 0, 0, 0, 0];
  checked = false;
  score = 0;
}

function computeCards() {
  cardRects = [];
  let cols = 2, rows = 3;
  let gap = 12;
  let top = 158;
  let cardW = (canvasWidth - margin * 2 - gap) / cols;
  let cardH = 76;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    cardRects.push({
      x: margin + c * (cardW + gap),
      y: top + r * (cardH + gap),
      w: cardW, h: cardH
    });
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

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Active Listening Checklist', canvasWidth / 2, 8);

  // Scenario scene with speech bubble
  let sc = scenarios[sIndex];
  fill('lavender');
  stroke('slateblue');
  strokeWeight(1.5);
  rect(margin, 42, canvasWidth - margin * 2, 108, 10);
  noStroke();
  fill('slateblue');
  textAlign(LEFT, TOP);
  textSize(14);
  text('Scenario ' + (sIndex + 1) + ' of 4 — your friend says:', margin + 14, 54);
  fill('black');
  textSize(18);
  textAlign(LEFT, TOP);
  text('"' + sc.speaker + '"', margin + 14, 78, canvasWidth - margin * 2 - 28, 66);

  // Behavior cards
  let overIdx = -1;
  for (let i = 0; i < 6; i++) {
    let rct = cardRects[i];
    let hover = pointInRect(mouseX, mouseY, rct);
    if (hover) overIdx = i;
    let correct = (marks[i] === 1 && sc.cards[i].good) || (marks[i] === 2 && !sc.cards[i].good);

    // card body color reflects mark, or correctness once checked
    strokeWeight(1.5);
    stroke('steelblue');
    if (checked) {
      fill(correct ? 'honeydew' : 'mistyrose');
      stroke(correct ? 'seagreen' : 'indianred');
      strokeWeight(2.5);
    } else if (marks[i] === 1) {
      fill('palegreen');
    } else if (marks[i] === 2) {
      fill('navajowhite');
    } else {
      fill(hover ? 'lightyellow' : 'white');
    }
    rect(rct.x, rct.y, rct.w, rct.h, 8);

    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(14);
    text(sc.cards[i].t, rct.x + 8, rct.y + 8, rct.w - 16, rct.h - 30);

    // mark badge / result at bottom of card
    textAlign(CENTER, BOTTOM);
    textSize(13);
    let by = rct.y + rct.h - 6;
    if (checked) {
      fill(correct ? 'seagreen' : 'indianred');
      text(correct ? '✓ correct' : '✗ try again', rct.x + rct.w / 2, by);
    } else {
      fill('dimgray');
      let labels = ['tap to mark', '👂 Active Listening', '🚫 Not Listening'];
      text(labels[marks[i]], rct.x + rct.w / 2, by);
    }
  }
  cursor(overIdx >= 0 ? HAND : ARROW);

  // Feedback panel
  fill('black');
  textAlign(LEFT, TOP);
  textSize(15);
  let fy = 416;
  if (!checked) {
    fill('dimgray');
    text('Tap each card to mark it, then press Check My Answers.', margin, fy,
      canvasWidth - margin * 2, 44);
  } else {
    fill(score === 6 ? 'seagreen' : 'navy');
    text('You got ' + score + ' of 6 right!' +
      (overIdx >= 0 ? '  ' + scenarios[sIndex].cards[overIdx].r : '  Hover a card to see why.'),
      margin, fy, canvasWidth - margin * 2, 44);
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (checked) return;
  for (let i = 0; i < 6; i++) {
    if (pointInRect(mouseX, mouseY, cardRects[i])) {
      marks[i] = (marks[i] + 1) % 3;
      return;
    }
  }
}

function checkAnswers() {
  checked = true;
  let sc = scenarios[sIndex];
  score = 0;
  for (let i = 0; i < 6; i++) {
    if ((marks[i] === 1 && sc.cards[i].good) || (marks[i] === 2 && !sc.cards[i].good)) score++;
  }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
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
