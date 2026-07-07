// Sexual Health Service Types Explorer - MicroSim (match a scenario to the best service type)
// CANVAS_HEIGHT: 542
// Grade 9-12, Understand (L2): students classify which healthcare service best fits an
// adolescent scenario and summarize the distinguishing features of each service type.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 62;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let answerButtons = [];
let nextButton;

// Five service types. key matches bestServiceType in the scenario bank.
let services = [
  {
    key: 'sti',
    name: 'STI Clinic',
    desc: 'Focuses on testing and treating sexually transmitted infections, often with confidential same-day results.',
    example: 'Example: A clinic where a teen can get a rapid, private STI test without an appointment.'
  },
  {
    key: 'school',
    name: 'School-Based Health Center',
    desc: 'A clinic located inside or near a school, offering free or low-cost care during the school day.',
    example: 'Example: A student sees a nurse practitioner between classes without leaving campus.'
  },
  {
    key: 'community',
    name: 'Community Health Center',
    desc: 'A neighborhood clinic that serves everyone on a sliding fee scale, regardless of ability to pay.',
    example: 'Example: A teen with no insurance gets low-cost care close to home.'
  },
  {
    key: 'primary',
    name: 'Primary Care',
    desc: 'A regular doctor or provider who knows your full health history and manages ongoing care.',
    example: 'Example: A family doctor who has treated a teen since childhood does a yearly checkup.'
  },
  {
    key: 'telehealth',
    name: 'Telehealth',
    desc: 'Care delivered by phone or video, so you can talk to a provider from home with no travel.',
    example: 'Example: A teen with no transportation video-calls a provider from their bedroom.'
  }
];

// Ten scenarios. bestServiceType is a service key.
let scenarioBank = [
  { scenario: 'A student needs a same-day confidential STI test result but has no transportation.',
    best: 'sti', explanation: 'STI clinics specialize in fast, private testing and results.' },
  { scenario: 'A teen feels sick during 3rd period and wants care without leaving campus.',
    best: 'school', explanation: 'A school-based health center provides care right on school grounds.' },
  { scenario: 'A teen has no insurance and needs affordable care close to their neighborhood.',
    best: 'community', explanation: 'Community health centers serve everyone on a sliding fee scale.' },
  { scenario: 'A teen wants a yearly checkup from the doctor who has known them since childhood.',
    best: 'primary', explanation: 'Primary care providers know your full health history over time.' },
  { scenario: 'A teen lives far from any clinic and wants to ask a provider a question from home.',
    best: 'telehealth', explanation: 'Telehealth lets you reach a provider by phone or video, no travel needed.' },
  { scenario: 'A student worries they were exposed to an infection and wants private testing today.',
    best: 'sti', explanation: 'STI clinics offer confidential, often walk-in, testing and treatment.' },
  { scenario: 'A teen forgot their inhaler and needs quick help during the school day.',
    best: 'school', explanation: 'A school-based health center is on site for care during school hours.' },
  { scenario: 'A family with limited income needs low-cost care for their teen and younger kids.',
    best: 'community', explanation: 'Community health centers serve whole families regardless of ability to pay.' },
  { scenario: 'A teen managing an ongoing condition needs a provider who tracks their history.',
    best: 'primary', explanation: 'Primary care manages continuous, long-term health needs.' },
  { scenario: 'A teen with a busy schedule and no ride wants to review test results with a provider.',
    best: 'telehealth', explanation: 'Telehealth makes a follow-up convenient from anywhere.' }
];

let order = [];      // shuffled indices into scenarioBank
let orderPos = 0;    // position within order
let current = 0;     // index into scenarioBank of the active scenario

let selectedPanel = -1;  // which service panel is expanded (-1 = none)
let answered = false;
let chosenKey = '';
let isCorrect = false;
let correctCount = 0;
let attemptCount = 0;

// hit rectangles for service panels, recomputed each draw
let panelRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  for (let i = 0; i < services.length; i++) {
    let b = createButton(services[i].name);
    b.parent(document.querySelector('main'));
    b.mousePressed(() => answerScenario(services[i].key));
    answerButtons.push(b);
  }
  nextButton = createButton('Next Scenario');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);

  buildOrder();
  loadNext();
  positionControls();

  describe('An interactive matching activity. Five sexual-health service types with descriptions ' +
    'are listed on the left. A scenario card on the right describes a teen situation. The learner ' +
    'clicks one of five service buttons to choose the best fit and sees whether it is correct, plus ' +
    'a running score of correct matches.', LABEL);
}

function positionControls() {
  // Answer buttons in a row across the control strip, Next Scenario below.
  let n = answerButtons.length;
  let gap = 6;
  let avail = canvasWidth - margin * 2 - gap * (n - 1);
  let bw = Math.floor(avail / n);
  let y1 = drawHeight + 8;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    answerButtons[i].position(x, y1);
    answerButtons[i].size(bw, 24);
    answerButtons[i].style('font-size', '11px');
    answerButtons[i].style('padding', '0px');
  }
  nextButton.position(margin, drawHeight + 8 + 24 + 6);
  nextButton.size(140, 22);
}

function buildOrder() {
  order = [];
  for (let i = 0; i < scenarioBank.length; i++) order.push(i);
  // Fisher-Yates shuffle
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = order[i]; order[i] = order[j]; order[j] = t;
  }
  orderPos = 0;
}

function loadNext() {
  if (orderPos >= order.length) {
    buildOrder(); // reshuffle when exhausted
  }
  current = order[orderPos];
  orderPos++;
  answered = false;
  chosenKey = '';
  isCorrect = false;
}

function nextScenario() {
  loadNext();
}

function answerScenario(key) {
  if (answered) return; // one answer per scenario
  chosenKey = key;
  answered = true;
  attemptCount++;
  isCorrect = (key === scenarioBank[current].best);
  if (isCorrect) correctCount++;
  // Auto-expand the panel of the correct answer so the learner sees the rationale.
  selectedPanel = serviceIndexByKey(scenarioBank[current].best);
}

function serviceIndexByKey(k) {
  for (let i = 0; i < services.length; i++) if (services[i].key === k) return i;
  return -1;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy'); textAlign(CENTER, TOP); textSize(18);
  text('Sexual Health Service Types Explorer', canvasWidth / 2, 8);

  let topY = 36;
  let leftW = Math.floor((canvasWidth - margin * 2) * 0.55);
  let rightX = margin + leftW + 12;
  let rightW = canvasWidth - rightX - margin;

  drawServicePanels(margin, topY, leftW);
  drawRightColumn(rightX, topY, rightW);

  // hint line about clicking panels
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Tip: click a service name on the left to see an example.',
    margin, drawHeight - 18, canvasWidth - margin * 2, 16);
}

function drawServicePanels(x, y, w) {
  panelRects = [];
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text('Service Types', x, y);
  let py = y + 20;
  let n = services.length;
  let gap = 8;
  // reserve room at bottom for the tip line
  let regionH = (drawHeight - 24) - py;
  let baseH = Math.floor((regionH - gap * (n - 1)) / n);

  for (let i = 0; i < n; i++) {
    let s = services[i];
    let expanded = (selectedPanel === i);
    let h = baseH;
    let rx = x, ry = py, rw = w, rh = h;
    panelRects.push({ x: rx, y: ry, w: rw, h: rh, i: i });

    let highlightBest = (answered && s.key === scenarioBank[current].best);
    let strokeC = highlightBest ? 'seagreen' : 'steelblue';
    let fillC = highlightBest ? 'honeydew' : (expanded ? 'lavender' : 'white');
    strokeWeight(highlightBest ? 2.5 : 1.2);
    stroke(strokeC); fill(fillC);
    rect(rx, ry, rw, rh, 6);

    noStroke();
    fill(highlightBest ? 'seagreen' : 'navy'); textAlign(LEFT, TOP); textSize(12);
    text(s.name, rx + 8, ry + 5, rw - 16, 16);

    fill('black'); textSize(10);
    let body = expanded ? (s.desc + '  ' + s.example) : s.desc;
    text(body, rx + 8, ry + 21, rw - 16, rh - 26);

    py += h + gap;
  }
}

function drawRightColumn(x, y, w) {
  // Score
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text('Which service fits best?', x, y);

  fill('dimgray'); textSize(11); textAlign(RIGHT, TOP);
  text('Correct: ' + correctCount + ' / ' + attemptCount, x + w, y + 2);

  // Scenario card
  let cardY = y + 22;
  let cardH = 132;
  strokeWeight(1.5); stroke('goldenrod'); fill('cornsilk');
  rect(x, cardY, w, cardH, 8);
  noStroke(); fill('goldenrod'); textAlign(LEFT, TOP); textSize(11);
  text('SCENARIO', x + 10, cardY + 8);
  fill('black'); textSize(13);
  text(scenarioBank[current].scenario, x + 10, cardY + 26, w - 20, cardH - 34);

  // Feedback card
  let fbY = cardY + cardH + 12;
  let fbH = drawHeight - 24 - fbY;
  if (!answered) {
    strokeWeight(1.2); stroke('silver'); fill('white');
    rect(x, fbY, w, fbH, 8);
    noStroke(); fill('gray'); textAlign(CENTER, CENTER); textSize(12);
    text('Choose a service type below to check your answer.',
      x + 10, fbY + 8, w - 20, fbH - 16);
  } else {
    let col = isCorrect ? 'seagreen' : 'indianred';
    let bg = isCorrect ? 'honeydew' : 'mistyrose';
    strokeWeight(2); stroke(col); fill(bg);
    rect(x, fbY, w, fbH, 8);
    noStroke(); fill(col); textAlign(LEFT, TOP); textSize(14);
    text(isCorrect ? 'Correct!' : 'Not the best fit', x + 10, fbY + 8);

    let bestName = services[serviceIndexByKey(scenarioBank[current].best)].name;
    fill('black'); textSize(11);
    let msg;
    if (isCorrect) {
      msg = scenarioBank[current].explanation;
    } else {
      let chosenName = chosenKey ? services[serviceIndexByKey(chosenKey)].name : '';
      msg = 'You chose ' + chosenName + '. Best fit: ' + bestName + '. ' +
        scenarioBank[current].explanation;
    }
    text(msg, x + 10, fbY + 30, w - 20, fbH - 38);
  }
}

function mousePressed() {
  // Click a service panel to expand/collapse its description and example.
  for (let i = 0; i < panelRects.length; i++) {
    let r = panelRects[i];
    if (pointInRect(mouseX, mouseY, r)) {
      selectedPanel = (selectedPanel === i) ? -1 : i;
      return;
    }
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
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
