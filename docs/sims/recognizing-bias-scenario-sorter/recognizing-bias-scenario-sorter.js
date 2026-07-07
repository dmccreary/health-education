// Recognizing Bias in Everyday Scenarios - MicroSim (scenario sorter)
// CANVAS_HEIGHT: 520
// Grade 4, Analyze (L4): students read a short classroom scenario and sort it into
// "Fair Judgment" (based on direct evidence) or "Biased Assumption" (based on a
// stereotype or limited information), then read a calm explanation.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let whyButton;
let resetButton;

// answer: 'fair' or 'biased'
let scenarios = [
  {
    text: 'Maya solved every problem on the last three math quizzes correctly, so her teacher moved her to the challenge group.',
    answer: 'fair',
    why: 'This is a fair judgment. The decision is based on direct evidence: three quizzes Maya actually completed.'
  },
  {
    text: 'A new student is quiet on the first day, so a classmate decides the student is unfriendly and will not want to play.',
    answer: 'biased',
    why: 'This is a biased assumption. Being quiet on one new day is very little information. Many reasons can make someone quiet.'
  },
  {
    text: "Liam wears glasses, so his group assumes he is the best speller and puts him in charge of the spelling part.",
    answer: 'biased',
    why: 'This is a biased assumption. Wearing glasses tells us nothing about spelling. It is a stereotype, not evidence.'
  },
  {
    text: 'Priya has finished her science project early every week this month, so her teacher trusts her to help others who are stuck.',
    answer: 'fair',
    why: 'This is a fair judgment. It is based on a clear pattern of work the teacher has seen many times.'
  },
  {
    text: 'A student cheers loudly at recess, so a classmate assumes that student is bad at reading and quiet activities.',
    answer: 'biased',
    why: 'This is a biased assumption. Being loud at recess says nothing about reading. Behavior in one place is limited information.'
  },
  {
    text: 'Sam raised his hand and gave the correct answer three times today, so the teacher calls on him to explain the idea to the class.',
    answer: 'fair',
    why: 'This is a fair judgment. It is based on what Sam actually did in class today, which is direct evidence.'
  },
  {
    text: 'Ava likes drawing, so her teammate assumes she must be careless with math and does not let her check the numbers.',
    answer: 'biased',
    why: 'This is a biased assumption. Enjoying art does not mean someone is careless with math. That is a stereotype.'
  },
  {
    text: 'Noah returned the class library book on time every week this term, so the librarian lets him borrow two books at once.',
    answer: 'fair',
    why: 'This is a fair judgment. It rests on a record of Noah returning books on time, which is real evidence.'
  }
];

let order = [];
let pos = 0;          // index into order
let chosen = null;    // 'fair' | 'biased' | null
let showWhy = false;
let results = {};     // scenarioOriginalIndex -> true(correct)/false(missed)

let fairRect = {};
let biasRect = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  whyButton = createButton('Why?');
  whyButton.mousePressed(toggleWhy);
  whyButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  buildOrder();
  positionControls();
  describe('A card shows a short classroom scenario. Two zones below, Fair Judgment and ' +
    'Biased Assumption, are tapped to sort the scenario. After sorting, a calm explanation ' +
    'appears and a Why button reveals more detail.', LABEL);
}

function buildOrder() {
  order = [];
  for (let i = 0; i < scenarios.length; i++) order.push(i);
  // shuffle
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = order[i]; order[i] = order[j]; order[j] = t;
  }
  pos = 0;
  chosen = null;
  showWhy = false;
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  whyButton.position(150, drawHeight + 12);
  resetButton.position(230, drawHeight + 12);
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

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(21);
  text('Recognizing Bias', canvasWidth / 2, 10);

  let allDone = Object.keys(results).length === scenarios.length;
  if (allDone && chosen === null) {
    drawSummary();
    drawBins(true);
    return;
  }

  let sIdx = order[pos];
  let sc = scenarios[sIdx];

  // Progress line
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(13);
  let doneCount = Object.keys(results).length;
  text('Scenario ' + (pos + 1) + ' of ' + scenarios.length +
       '   (sorted ' + doneCount + ')', canvasWidth / 2, 38);

  // Scenario card
  let cardX = margin;
  let cardY = 60;
  let cardW = canvasWidth - 2 * margin;
  let cardH = 128;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Read the scenario:', cardX + 14, cardY + 10);
  fill('black');
  textSize(15);
  text(sc.text, cardX + 14, cardY + 32, cardW - 28, cardH - 42);

  // Prompt
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(14);
  if (chosen === null) {
    text('Is this a fair judgment or a biased assumption?', canvasWidth / 2, cardY + cardH + 12);
  } else {
    text('Tap Next Scenario to continue.', canvasWidth / 2, cardY + cardH + 12);
  }

  // Bins
  drawBins(false, sc);

  // Explanation / feedback panel
  let panelY = 366;
  let panelH = drawHeight - panelY - 12;
  if (chosen !== null) {
    let correct = chosen === sc.answer;
    fill(correct ? 'honeydew' : 'oldlace');
    stroke(correct ? 'seagreen' : 'goldenrod');
    strokeWeight(1.5);
    rect(margin, panelY, canvasWidth - 2 * margin, panelH, 8);
    noStroke();

    textAlign(LEFT, TOP);
    textSize(15);
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    let head = correct
      ? '✓ Nice thinking — you sorted this one correctly.'
      : '↻ Not quite — a learning moment. Here is why.';
    text(head, margin + 12, panelY + 10, canvasWidth - 2 * margin - 24, 22);

    fill('black');
    textSize(14);
    if (showWhy) {
      text(sc.why, margin + 12, panelY + 34, canvasWidth - 2 * margin - 24, panelH - 42);
    } else {
      fill('dimgray');
      text('Tap the "Why?" button to read the explanation.',
           margin + 12, panelY + 36, canvasWidth - 2 * margin - 24, panelH - 42);
    }
  }

  cursor((chosen === null && overBins()) ? HAND : ARROW);
}

function drawBins(dim, sc) {
  let binY = 232;
  let binH = 118;
  let gap = 16;
  let binW = (canvasWidth - 2 * margin - gap) / 2;

  fairRect = { x: margin, y: binY, w: binW, h: binH, key: 'fair' };
  biasRect = { x: margin + binW + gap, y: binY, w: binW, h: binH, key: 'biased' };

  drawOneBin(fairRect, 'Fair Judgment', 'Based on direct evidence',
             'steelblue', 'aliceblue', dim, sc);
  drawOneBin(biasRect, 'Biased Assumption', 'Based on a stereotype or too little info',
             'goldenrod', 'cornsilk', dim, sc);
}

function drawOneBin(r, label, sub, edge, fillCol, dim, sc) {
  let hover = !dim && chosen === null && pointInRect(mouseX, mouseY, r);
  let isChosen = !dim && chosen === r.key;
  let isAnswer = !dim && chosen !== null && sc && sc.answer === r.key;

  strokeWeight(isChosen || isAnswer ? 4 : 2);
  stroke(isAnswer ? 'seagreen' : edge);
  fill(hover ? 'lightyellow' : fillCol);
  rect(r.x, r.y, r.w, r.h, 10);

  noStroke();
  fill(edge === 'steelblue' ? 'steelblue' : 'darkgoldenrod');
  textAlign(CENTER, TOP);
  textSize(16);
  text(label, r.x + 6, r.y + 14, r.w - 12, 24);

  fill('dimgray');
  textSize(12);
  text(sub, r.x + 8, r.y + 44, r.w - 16, 40);

  // marker when chosen / answer
  if (isAnswer) {
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text('correct group', r.x + r.w / 2, r.y + r.h - 8);
  } else if (isChosen && (!sc || sc.answer !== r.key)) {
    fill('darkgoldenrod');
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text('you chose this', r.x + r.w / 2, r.y + r.h - 8);
  }
}

function drawSummary() {
  let correct = 0, total = scenarios.length, missed = [];
  for (let i = 0; i < total; i++) {
    if (results[i]) correct++;
    else missed.push(i);
  }
  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(18);
  text('All done! You sorted ' + correct + ' of ' + total + ' correctly.',
       canvasWidth / 2, 46, canvasWidth - 2 * margin, 50);

  noStroke();
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);
  let msg = (missed.length === 0)
    ? 'You told fair judgments and biased assumptions apart every time.'
    : 'Tap Reset to review the scenarios again and rethink the tricky ones.';
  text(msg, margin, 96, canvasWidth - 2 * margin, 60);

  fill('slategray');
  textSize(13);
  text('Fair judgments rest on direct evidence. Biased assumptions rest on ' +
       'stereotypes or too little information.',
       margin, 150, canvasWidth - 2 * margin, 56);
}

function overBins() {
  return pointInRect(mouseX, mouseY, fairRect) || pointInRect(mouseX, mouseY, biasRect);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // ignore clicks in control strip
  if (mouseY >= drawHeight) return;
  let allDone = Object.keys(results).length === scenarios.length;
  if (allDone && chosen === null) return; // summary showing
  if (chosen !== null) return;            // already sorted this one

  let sIdx = order[pos];
  if (pointInRect(mouseX, mouseY, fairRect)) {
    chosen = 'fair';
  } else if (pointInRect(mouseX, mouseY, biasRect)) {
    chosen = 'biased';
  } else {
    return;
  }
  showWhy = true; // reveal explanation right away; Why button can re-toggle
  results[sIdx] = (chosen === scenarios[sIdx].answer);
}

function nextScenario() {
  if (chosen === null) return; // must sort before moving on
  if (pos < order.length - 1) {
    pos++;
    chosen = null;
    showWhy = false;
  } else {
    // reached end; if all sorted, chosen=null triggers summary
    chosen = null;
    showWhy = false;
  }
}

function toggleWhy() {
  if (chosen === null) return;
  showWhy = !showWhy;
}

function resetAll() {
  results = {};
  buildOrder();
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
