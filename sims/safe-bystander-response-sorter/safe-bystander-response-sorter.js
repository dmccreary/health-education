// Safe vs. Unsafe Bystander Response Sorter - MicroSim (single-card judgment task)
// CANVAS_HEIGHT: 548
// Grade 5, Evaluate (L5): students judge each possible bystander response to a fight or
// serious bullying situation as "Safe and Helpful" or "Risky or Harmful," then read a
// calm, serious explanation. Tone stays plainly sincere; bystander safety comes first.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 96;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let safeButton;
let riskyButton;
let whyButton;
let nextButton;

// cat: true = Safe and Helpful, false = Risky or Harmful
// e = the serious explanation shown after sorting / when "Why?" is pressed
let responses = [
  { t: 'Run to get a teacher or staff member right away.', cat: true,
    e: 'This is the single most important bystander action in a fight. An adult can stop it safely, and getting help keeps you safe too.' },
  { t: 'Try to physically pull the two people apart.', cat: false,
    e: 'Never physically intervene in a fight. You could be seriously hurt, and it rarely stops the fight. Bystander safety comes first.' },
  { t: 'Record it on your phone to post or share later.', cat: false,
    e: 'Filming and sharing causes lasting harm to everyone involved. It does not help, and it can make the situation worse.' },
  { t: 'Calmly walk a friend away before things escalate.', cat: true,
    e: 'Helping someone leave before a fight starts is safe and effective. Preventing harm is one of the best things a bystander can do.' },
  { t: 'Cheer or join the crowd watching the fight.', cat: false,
    e: 'A crowd encourages a fight to continue and grow. Staying to watch or cheer adds to the harm instead of stopping it.' },
  { t: 'Ask other students to go find an adult with you.', cat: true,
    e: 'Getting help fast is the goal, and going together keeps everyone safer. More people asking for an adult means help arrives sooner.' },
  { t: 'Step between the two people to block them.', cat: false,
    e: 'Putting your body between people who are fighting is dangerous. You can be hurt by accident. Get an adult instead.' },
  { t: 'Report exactly what happened to a trusted adult afterward.', cat: true,
    e: 'Telling a trusted adult what you saw is safe and helps keep everyone protected. Reporting is never "tattling" when someone could be hurt.' }
];

let idx = 0;          // current response index
let sorted = null;    // null, or the category the student chose (true/false)
let showWhy = false;  // whether the explanation is revealed

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  safeButton = createButton('Safe and Helpful');
  safeButton.parent(document.querySelector('main'));
  safeButton.mousePressed(function () { sortResponse(true); });

  riskyButton = createButton('Risky or Harmful');
  riskyButton.parent(document.querySelector('main'));
  riskyButton.mousePressed(function () { sortResponse(false); });

  whyButton = createButton('Why?');
  whyButton.parent(document.querySelector('main'));
  whyButton.mousePressed(function () { showWhy = true; });

  nextButton = createButton('Next Response');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextResponse);

  positionControls();
  updateButtonState();
  describe('One bystander-response card at a time from a fight or serious bullying ' +
    'situation. Students judge it as Safe and Helpful or Risky or Harmful, then read a ' +
    'calm, serious explanation that always emphasizes bystander safety first.', LABEL);
}

function positionControls() {
  // Row 1: the two sort buttons (the primary judgment action)
  safeButton.position(margin, drawHeight + 12);
  riskyButton.position(margin + 150, drawHeight + 12);
  // Row 2: Why? and Next Response
  whyButton.position(margin, drawHeight + 52);
  nextButton.position(margin + 90, drawHeight + 52);
}

function updateButtonState() {
  // Sort buttons only active before a choice is made
  if (sorted === null) {
    safeButton.removeAttribute('disabled');
    riskyButton.removeAttribute('disabled');
  } else {
    safeButton.attribute('disabled', '');
    riskyButton.attribute('disabled', '');
  }
  // Why? available only after sorting and before it is already shown
  if (sorted !== null && !showWhy) {
    whyButton.removeAttribute('disabled');
  } else {
    whyButton.attribute('disabled', '');
  }
}

function sortResponse(choice) {
  if (sorted !== null) return;
  sorted = choice;
  showWhy = true; // sorting reveals the explanation and keeps it visible
  updateButtonState();
}

function nextResponse() {
  idx = (idx + 1) % responses.length;
  sorted = null;
  showWhy = false;
  updateButtonState();
}

function draw() {
  updateCanvasSize();
  // Backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Keep button state fresh (also handles resize re-entry)
  updateButtonState();

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(21);
  text('Bystander Response Sorter', canvasWidth / 2, 10);

  // Prompt line + progress
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Is this a safe and helpful action, or a risky and harmful one?',
    margin, 40, canvasWidth - margin * 2, 20);
  textAlign(RIGHT, TOP);
  textSize(12);
  fill('dimgray');
  text('Response ' + (idx + 1) + ' of ' + responses.length, canvasWidth - margin, 66);

  // Response card
  let cardX = margin;
  let cardY = 84;
  let cardW = canvasWidth - margin * 2;
  let cardH = 128;
  stroke('steelblue');
  strokeWeight(2);
  fill('white');
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('A bystander could:', cardX + 16, cardY + 12);
  fill('black');
  textAlign(LEFT, TOP);
  textSize(20);
  text(responses[idx].t, cardX + 16, cardY + 36, cardW - 32, cardH - 48);

  // Result banner (after sorting)
  let bannerY = cardY + cardH + 14;
  let bannerH = 40;
  if (sorted !== null) {
    let correct = (sorted === responses[idx].cat);
    let chosenLabel = sorted ? 'Safe and Helpful' : 'Risky or Harmful';
    let realLabel = responses[idx].cat ? 'Safe and Helpful' : 'Risky or Harmful';
    stroke(correct ? 'seagreen' : 'goldenrod');
    strokeWeight(2);
    fill(correct ? 'honeydew' : 'lightyellow');
    rect(margin, bannerY, canvasWidth - margin * 2, bannerH, 8);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(14);
    if (correct) {
      fill('seagreen');
      text('Correct. This is ' + realLabel + '.',
        margin + 14, bannerY, canvasWidth - margin * 2 - 28, bannerH);
    } else {
      fill('goldenrod');
      text('You chose ' + chosenLabel + '. This is actually ' + realLabel + '.',
        margin + 14, bannerY, canvasWidth - margin * 2 - 28, bannerH);
    }
  } else {
    // Gentle instruction before a choice is made
    noStroke();
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Choose one of the two buttons below to sort this response.',
      margin, bannerY, canvasWidth - margin * 2, bannerH);
  }

  // Explanation panel (revealed after sorting or by "Why?"; stays visible until Next)
  let expY = bannerY + bannerH + 12;
  let expH = drawHeight - expY - 12;
  if (showWhy && sorted !== null) {
    stroke('mediumpurple');
    strokeWeight(1.5);
    fill('lavender');
    rect(margin, expY, canvasWidth - margin * 2, expH, 8);
    noStroke();
    fill('indigo');
    textAlign(LEFT, TOP);
    textSize(13);
    text('Why?', margin + 14, expY + 10);
    fill('black');
    textAlign(LEFT, TOP);
    textSize(13);
    text(responses[idx].e, margin + 14, expY + 32, canvasWidth - margin * 2 - 28, expH - 44);
  }

  // Hand cursor over active sort buttons handled by DOM; keep default in canvas.
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
