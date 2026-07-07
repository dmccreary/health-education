// Supporting an Elder With Dementia - Scenario Simulator
// CANVAS_HEIGHT: 540
// Grade 9-12, Apply (L3): students choose a respectful support strategy for a
// realistic family scenario, then read why it protects dignity and eases distress.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 485;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let explainButton;
let nextButton;
let resetButton;

// Each scenario: a respectful family moment, four support-strategy options,
// the most supportive one, and an explanation. More than one response can be
// compassionate; the explanation says so where that is true.
let scenarios = [
  {
    scenario: 'On a visit, your grandmother asks where her late husband is for the third time. She looks calm but expectant.',
    options: [
      'Gently join her world: talk warmly about him and how much he cared for her.',
      'Correct her firmly: remind her that he passed away several years ago.',
      'Change the subject quickly so she forgets she asked.',
      'Tell her you already answered that a moment ago.'
    ],
    best: 0,
    explanation: 'Meeting her where she is keeps her calm and preserves the loving feelings tied to him. Repeating the loss can re-open grief again and again. Gently redirecting to a warm memory can also work well.'
  },
  {
    scenario: 'Your grandfather insists it is time to leave for work, though he retired long ago and it is evening.',
    options: [
      'Acknowledge the feeling, then walk with him and ease into another activity.',
      'Explain that he has been retired for fifteen years.',
      'Laugh and say he is confused about the time.',
      'Ignore him until the idea passes on its own.'
    ],
    best: 0,
    explanation: 'Validating the urge to be responsible, then gently redirecting, respects his sense of purpose without an argument. Facts about retirement can feel like a correction and raise distress. A calm walk together often settles the moment.'
  },
  {
    scenario: 'Your aunt with dementia struggles to find words at dinner and grows quiet and frustrated.',
    options: [
      'Wait patiently, offer a simple choice, and let her take her time.',
      'Finish her sentences quickly to move things along.',
      'Ask her several rapid questions to help her focus.',
      'Suggest she rest instead so she does not have to talk.'
    ],
    best: 0,
    explanation: 'Slowing down and offering simple choices supports her dignity and keeps her included. Rushing or rapid questions add pressure. Patience communicates that she still belongs at the table.'
  },
  {
    scenario: 'Your grandmother wants to wear the same favorite sweater she wore yesterday for a family photo.',
    options: [
      'Let her wear it; comfort and choice matter more than the outfit.',
      'Insist she change into something that matches the occasion.',
      'Hide the sweater so she picks a different one.',
      'Tell her the sweater is dirty even though it is clean.'
    ],
    best: 0,
    explanation: 'Honoring a small, harmless preference preserves her autonomy and comfort. Overriding it can create needless conflict. Offering two clean choices she likes is another respectful option.'
  },
  {
    scenario: 'During a visit your grandfather becomes anxious in the late afternoon and paces near the door.',
    options: [
      'Stay calm, keep your voice soft, and invite him to a quiet, familiar activity.',
      'Point out that there is nothing to worry about.',
      'Turn on bright lights and the TV to distract him.',
      'Tell him to sit down and relax until it passes.'
    ],
    best: 0,
    explanation: 'A calm presence and a soothing routine help ease late-day restlessness. Loud stimulation or commands can heighten anxiety. Gentle reassurance and a familiar comfort item can help too.'
  },
  {
    scenario: 'You feel unsure how to help your family care for your grandmother day to day.',
    options: [
      'Ask a doctor or a local caregiver support group for guidance and resources.',
      'Handle everything on your own without asking for help.',
      'Wait until a crisis forces a decision.',
      'Search random online forums and follow the first advice you see.'
    ],
    best: 0,
    explanation: 'Connecting with trusted professionals and support groups links your family to real help and eases the load on everyone. Going it alone risks burnout. Reliable resources make dignified care sustainable.'
  }
];

let idx = 0;
let picked = -1;
let revealed = false;
let completed = {}; // scenarios where explanation was shown
let optionRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  explainButton = createButton('Show Explanation');
  explainButton.mousePressed(showExplanation);
  explainButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A realistic family scenario about supporting an elder with dementia, with four ' +
    'response-strategy cards. The student selects the most supportive response, then reveals an ' +
    'explanation of why it protects dignity and eases distress. A counter tracks scenarios ' +
    'completed out of six.', LABEL);
}

function positionControls() {
  explainButton.position(10, drawHeight + 12);
  nextButton.position(150, drawHeight + 12);
  resetButton.position(285, drawHeight + 12);
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
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Supporting an Elder With Dementia', canvasWidth / 2, 8);

  // Progress line
  let done = Object.keys(completed).length;
  noStroke();
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length + '   •   Completed: ' + done + '/' + scenarios.length,
    canvasWidth / 2, 32);

  let sc = scenarios[idx];

  // Scenario card
  let cy = 50;
  let ch = 80;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(11);
  text('A moment with your family', margin + 12, cy + 8);
  fill('black');
  textSize(13.5);
  text(sc.scenario, margin + 12, cy + 26, canvasWidth - margin * 2 - 24, ch - 32);

  // Response-strategy cards
  optionRects = [];
  let oy = cy + ch + 12;
  let oh = 48;
  let gap = 7;
  for (let i = 0; i < sc.options.length; i++) {
    let y = oy + i * (oh + gap);
    let r = { x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i };
    optionRects.push(r);
    let hover = pointInRect(mouseX, mouseY, r);
    let isSel = picked === i;
    let isBest = sc.best === i;

    let fillCol = 'white';
    let strokeCol = 'mediumpurple';
    let sw = 1.5;
    if (revealed) {
      if (isBest) { fillCol = 'honeydew'; strokeCol = 'seagreen'; sw = 3; }
      else if (isSel) { fillCol = 'seashell'; strokeCol = 'indianred'; sw = 2.5; }
      else { fillCol = 'whitesmoke'; strokeCol = 'silver'; sw = 1; }
    } else if (isSel) {
      fillCol = 'lavender'; strokeCol = 'mediumpurple'; sw = 3;
    } else if (hover) {
      fillCol = 'lavender';
    }
    stroke(strokeCol);
    strokeWeight(sw);
    fill(fillCol);
    rect(r.x, r.y, r.w, r.h, 8);

    // marker after reveal
    noStroke();
    if (revealed && isBest) {
      fill('seagreen');
      textAlign(LEFT, CENTER);
      textSize(15);
      text('✓', r.x + 8, r.y + oh / 2);
    } else if (revealed && isSel && !isBest) {
      fill('indianred');
      textAlign(LEFT, CENTER);
      textSize(15);
      text('○', r.x + 8, r.y + oh / 2);
    }

    fill('black');
    textAlign(LEFT, CENTER);
    textSize(12);
    let tx = (revealed && (isBest || isSel)) ? r.x + 26 : r.x + 12;
    let tw = r.w - (tx - r.x) - 12;
    text(sc.options[i], tx, r.y + 2, tw, oh - 4);
  }
  cursor(!revealed && overAnyOption() ? HAND : ARROW);

  // Feedback / explanation area
  let fy = oy + sc.options.length * (oh + gap) + 4;
  let fh = drawHeight - fy - 10;
  noStroke();
  if (!revealed) {
    fill(picked < 0 ? 'white' : 'cornsilk');
    stroke(picked < 0 ? 'silver' : 'goldenrod');
    strokeWeight(1.5);
    rect(margin, fy, canvasWidth - margin * 2, fh, 8);
    noStroke();
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(12.5);
    let msg = picked < 0
      ? 'Choose the response you believe is most supportive, then press "Show Explanation".'
      : 'Response selected. Press "Show Explanation" to see why it supports dignity.';
    text(msg, margin + 10, fy + 8, canvasWidth - margin * 2 - 20, fh - 16);
  } else {
    let correct = picked === sc.best;
    fill('honeydew');
    stroke('seagreen');
    strokeWeight(1.5);
    rect(margin, fy, canvasWidth - margin * 2, fh, 8);
    noStroke();
    fill('seagreen');
    textAlign(LEFT, TOP);
    textSize(12);
    let head = correct
      ? 'A supportive, respectful choice:'
      : 'A gentler approach protects dignity here:';
    text(head, margin + 10, fy + 8, canvasWidth - margin * 2 - 20, 16);
    fill('black');
    textSize(12);
    text(sc.explanation, margin + 10, fy + 26, canvasWidth - margin * 2 - 20, fh - 34);
  }
}

function overAnyOption() {
  for (let r of optionRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (revealed) return;
  for (let r of optionRects) {
    if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
  }
}

function showExplanation() {
  if (picked < 0) return;
  revealed = true;
  completed[idx] = true;
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
  revealed = false;
}

function resetAll() {
  idx = 0;
  picked = -1;
  revealed = false;
  completed = {};
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
