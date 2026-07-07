// Supportive Friend Decision Path - MicroSim
// CANVAS_HEIGHT: 532
// Grade 5, Evaluate (L5): students judge which peer-support response best balances
// listening, respecting boundaries, and guiding a friend toward a trusted adult.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 475;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let feedbackButton;
let nextButton;

let scenarios = [
  {
    ctx: 'At recess, your friend Sam is sitting alone and looks sad and quiet. Sam usually likes to play with the group.',
    options: [
      { text: 'Sit next to Sam, say "You seem quiet today. I\'m here if you want to talk," and just listen.',
        best: true,
        fb: 'This is the strongest choice. You notice how Sam feels, you offer to listen without forcing it, and you respect Sam\'s space. Listening first is a great way to support a friend.' },
      { text: 'Tell Sam to cheer up because being sad is no big deal, then go back to the game.',
        best: false,
        fb: 'This response skips listening. Telling someone their feelings are "no big deal" can make them feel unheard. A stronger response would notice how Sam feels and gently offer to listen.' },
      { text: 'Announce to the whole group that Sam is sad so everyone can help.',
        best: false,
        fb: 'This does not respect Sam\'s privacy. Sam may not want everyone to know. A stronger response would check in with Sam quietly first and let Sam decide what to share.' }
    ]
  },
  {
    ctx: 'Your friend Alex tells you that some kids have been leaving Alex out of games on purpose, and it happens most days.',
    options: [
      { text: 'Tell Alex loudly that those kids are terrible and you will get back at them.',
        best: false,
        fb: 'Wanting to defend a friend is kind, but this adds more conflict. A stronger response would listen to Alex, then help Alex think about telling a trusted adult who can help fairly.' },
      { text: 'Listen to Alex, say that being left out hurts, and suggest telling a teacher you both trust.',
        best: true,
        fb: 'This is the strongest choice. You listen, you name that the feeling is real, and you guide Alex toward a trusted adult. Being left out on purpose is something a teacher can help with.' },
      { text: 'Tell Alex to just find new friends and not worry about it.',
        best: false,
        fb: 'This brushes past Alex\'s feelings and puts the whole problem on Alex. A stronger response would listen and help Alex reach a trusted adult who can help stop the exclusion.' }
    ]
  },
  {
    ctx: 'Your friend Jordan quietly says that things at home have felt scary lately, and asks you not to tell anyone.',
    options: [
      { text: 'Keep it a secret no matter what, because Jordan asked you to.',
        best: false,
        fb: 'Keeping a friend\'s trust matters, but a "scary" home situation is bigger than a promise. Some things are too big to handle alone. A stronger response helps Jordan reach a trusted adult who can keep Jordan safe.' },
      { text: 'Listen kindly, then gently say, "This sounds too big for just us. Let\'s tell a trusted adult who can help."',
        best: true,
        fb: 'This is the strongest choice. You listen with care, and you guide Jordan toward a trusted adult. When a friend shares that home feels scary, telling a trusted adult is the caring and safe thing to do.' },
      { text: 'Tell Jordan it is probably fine and will get better on its own.',
        best: false,
        fb: 'This does not take Jordan\'s worry seriously and leaves Jordan without help. A stronger response would listen, and then help Jordan tell a trusted adult who can make sure Jordan is safe.' }
    ]
  }
];

let sIndex = 0;
let selected = -1;      // which option the student clicked
let showFeedback = false;
let optRects = [];      // hit-test rects for the three option cards

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  feedbackButton = createButton('See Feedback');
  feedbackButton.mousePressed(revealFeedback);
  feedbackButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  positionControls();
  describe('A peer-support judgment activity. A scenario card describes a friend in a ' +
    'difficult moment, and three response cards offer different ways to help. The student ' +
    'chooses one, then reads sincere feedback about how well it balances listening, ' +
    'respecting boundaries, and guiding the friend toward a trusted adult.', LABEL);
}

function positionControls() {
  feedbackButton.position(margin, drawHeight + 14);
  nextButton.position(margin + 130, drawHeight + 14);
}

function draw() {
  updateCanvasSize();

  // background regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Supportive Friend Decision Path', canvasWidth / 2, 8);

  let sc = scenarios[sIndex];
  let innerW = canvasWidth - margin * 2;

  // scenario card
  let scY = 36;
  let scH = 74;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, scY, innerW, scH, 8);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Scenario ' + (sIndex + 1) + ' of ' + scenarios.length, margin + 10, scY + 8);
  fill('black');
  textSize(14);
  text(sc.ctx, margin + 10, scY + 26, innerW - 20, scH - 32);

  // prompt line
  let promptY = scY + scH + 8;
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Which response best helps your friend?', margin, promptY);

  // three option cards
  let cardsTop = promptY + 22;
  let cardGap = 8;
  let feedbackH = 96;
  let cardsBottom = drawHeight - feedbackH - 12;
  let cardH = (cardsBottom - cardsTop - cardGap * 2) / 3;

  optRects = [];
  textAlign(LEFT, CENTER);
  textSize(13);
  for (let i = 0; i < 3; i++) {
    let y = cardsTop + i * (cardH + cardGap);
    let r = { x: margin, y: y, w: innerW, h: cardH };
    optRects.push(r);

    let chosen = selected === i;
    let hover = pointInRect(mouseX, mouseY, r);
    let isBest = sc.options[i].best;

    // after feedback: mark the best-balanced response green, others neutral
    if (showFeedback && isBest) {
      stroke('seagreen');
      strokeWeight(3);
      fill('honeydew');
    } else if (chosen) {
      stroke('goldenrod');
      strokeWeight(3);
      fill('lightyellow');
    } else {
      stroke('steelblue');
      strokeWeight(1.5);
      fill(hover && !showFeedback ? 'azure' : 'white');
    }
    rect(r.x, r.y, r.w, r.h, 8);

    // option letter badge
    noStroke();
    fill(showFeedback && isBest ? 'seagreen' : (chosen ? 'goldenrod' : 'steelblue'));
    circle(r.x + 20, r.y + cardH / 2, 26);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(String.fromCharCode(65 + i), r.x + 20, r.y + cardH / 2);

    // option text
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(13);
    text(sc.options[i].text, r.x + 40, r.y + 4, r.w - 50, cardH - 8);

    // best-choice check after feedback
    if (showFeedback && isBest) {
      noStroke();
      fill('seagreen');
      textAlign(RIGHT, TOP);
      textSize(15);
      text('✓ strong', r.x + r.w - 8, r.y + 6);
    }
  }
  cursor(overAnyOption() && !showFeedback ? HAND : ARROW);

  // feedback panel
  let fbY = cardsBottom + 12;
  let fbInnerH = drawHeight - fbY - 10;
  let hasChoice = selected >= 0;
  let good = showFeedback && sc.options[selected] && sc.options[selected].best;

  fill(showFeedback ? (good ? 'honeydew' : 'seashell') : 'whitesmoke');
  stroke(showFeedback ? (good ? 'seagreen' : 'goldenrod') : 'silver');
  strokeWeight(1.5);
  rect(margin, fbY, innerW, fbInnerH, 8);
  noStroke();

  textAlign(LEFT, TOP);
  if (showFeedback && hasChoice) {
    fill(good ? 'seagreen' : 'darkgoldenrod');
    textSize(13);
    let head = good ? 'You chose ' + String.fromCharCode(65 + selected) + ' — a strong response.'
                    : 'You chose ' + String.fromCharCode(65 + selected) + '. Here is a kind way to think about it:';
    text(head, margin + 10, fbY + 8, innerW - 20, 18);
    fill('black');
    textSize(12.5);
    text(sc.options[selected].fb, margin + 10, fbY + 30, innerW - 20, fbInnerH - 38);
  } else if (hasChoice) {
    fill('dimgray');
    textSize(13);
    text('You picked ' + String.fromCharCode(65 + selected) + '. Press "See Feedback" to learn how well it helps your friend.',
      margin + 10, fbY + 10, innerW - 20, fbInnerH - 18);
  } else {
    fill('dimgray');
    textSize(13);
    text('Read the scenario, then click the response card you think helps your friend the most.',
      margin + 10, fbY + 10, innerW - 20, fbInnerH - 18);
  }
}

function overAnyOption() {
  for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (showFeedback) return; // choice is locked once feedback is shown
  for (let i = 0; i < optRects.length; i++) {
    if (pointInRect(mouseX, mouseY, optRects[i])) {
      selected = i;
      return;
    }
  }
}

function revealFeedback() {
  if (selected < 0) return; // must choose first
  showFeedback = true;
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  selected = -1;
  showFeedback = false;
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
