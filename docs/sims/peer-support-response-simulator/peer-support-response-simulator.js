// Peer Support Response Simulator - MicroSim
// CANVAS_HEIGHT: 556
// Grade 9-12, Evaluate (L5): students rate four peer responses to a friend
// disclosing ongoing depression/anxiety, then compare to a model rating set.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 500;
let controlHeight = 56;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let rationaleButton;
let scenarioButton;
let resetButton;

// Rating scale: 0 = Not Helpful, 1 = Somewhat Helpful, 2 = Very Helpful
let ratingLabels = ['Not', 'Somewhat', 'Very'];
let ratingFull = ['Not Helpful', 'Somewhat Helpful', 'Very Helpful'];
let ratingColors = ['indianred', 'goldenrod', 'seagreen'];

// Scenario bank. Each option: {text, model (0-2), rationale}.
// Content is limited to ongoing (non-crisis) depression/anxiety support.
let scenarios = [
  {
    friend: 'A close friend tells you: "For the last few weeks I have just felt ' +
      'down all the time. Nothing seems fun anymore and I am always tired."',
    options: [
      { text: '"You are overthinking it. Just try to cheer up and you will be fine."',
        model: 0,
        rationale: 'Dismisses their feelings and skips listening. It sends the message ' +
          'that their struggle is not real or not worth talking about.' },
      { text: '"That sounds like persistent low mood. You may be showing symptoms ' +
        'consistent with a depressive episode."',
        model: 1,
        rationale: 'Well-meaning, but labeling and diagnosing is not a peer\'s role. ' +
          'It can feel clinical and distancing instead of caring.' },
      { text: '"Thank you for telling me. That sounds really hard. I am here for you, ' +
        'and it might help to talk with the school counselor too."',
        model: 2,
        rationale: 'Listens, validates the feeling, and gently refers to a trusted ' +
          'adult. This matches all five peer-support steps.' },
      { text: '"Let\'s go get ice cream and watch a funny movie right now, that will fix it!"',
        model: 1,
        rationale: 'Kind and caring, but rushing to "fix" the mood can skip listening. ' +
          'Ongoing feelings usually need more than a quick distraction.' }
    ]
  },
  {
    friend: 'A teammate says: "I keep worrying about everything. My heart races before ' +
      'class and I have felt anxious like this for over a month now."',
    options: [
      { text: '"Everybody gets nervous. You are being dramatic, just relax about it."',
        model: 0,
        rationale: 'Minimizes and blames them. Telling someone to "just relax" ignores ' +
          'that ongoing anxiety is not a choice they can flip off.' },
      { text: '"I hear you, and that sounds exhausting. I am glad you told me. Would it ' +
        'help to talk to a counselor together?"',
        model: 2,
        rationale: 'Reflects back, validates, stays present, and offers a supported ' +
          'referral. This is strong, respectful peer support.' },
      { text: '"You probably have generalized anxiety disorder. You should get medication."',
        model: 1,
        rationale: 'Diagnosing and prescribing is beyond a peer\'s role. Suggesting ' +
          'specific treatment can feel presumptuous and unhelpful.' },
      { text: '"Just stop thinking about it and it will go away on its own, trust me."',
        model: 0,
        rationale: 'Waves off the problem and gives no support. "Just stop thinking ' +
          'about it" is not something an anxious person can simply do.' }
    ]
  },
  {
    friend: 'A friend messages: "I have been feeling empty and hopeless for weeks. I do ' +
      'not really want to hang out with anyone anymore."',
    options: [
      { text: '"That is so hard, and I am really glad you trusted me with it. You are not ' +
        'alone. Can we look up who to talk to together?"',
        model: 2,
        rationale: 'Warm validation, presence, and a shared next step toward help. ' +
          'This reflects supportive listening and appropriate referral.' },
      { text: '"Wow, that is really dark. I do not know what to say, maybe do not tell ' +
        'people that stuff."',
        model: 0,
        rationale: 'Shames them for opening up and shuts the conversation down. This ' +
          'makes it less likely they will reach out again.' },
      { text: '"You need therapy and probably a diagnosis. Here are three disorders it ' +
        'could be."',
        model: 1,
        rationale: 'Jumping to labels and diagnoses is not a peer\'s job. It can feel ' +
          'clinical and overwhelming rather than caring.' },
      { text: '"Come on, let\'s throw a big party this weekend, that will snap you right ' +
        'out of it!"',
        model: 1,
        rationale: 'Caring intent, but trying to instantly "fix" deep feelings skips ' +
          'listening. Weeks of hopelessness needs real support, not just fun.' }
    ]
  },
  {
    friend: 'A classmate says quietly: "I have been really down since the move. I cry a lot ' +
      'and I feel like I do not fit in here at all."',
    options: [
      { text: '"You will get over it eventually. New schools are always weird, no big deal."',
        model: 0,
        rationale: 'Brushes off a real, ongoing struggle. "No big deal" tells them ' +
          'their pain does not matter, which discourages sharing.' },
      { text: '"That makes total sense, moving is a huge change. Thank you for telling me. ' +
        'A counselor could also really help, want me to go with you?"',
        model: 2,
        rationale: 'Validates the cause, thanks them, and offers a supported referral. ' +
          'It listens first, then gently points to help.' },
      { text: '"This sounds like clinical depression. You should start treatment right away."',
        model: 1,
        rationale: 'Naming a diagnosis and directing treatment is beyond a peer\'s role. ' +
          'It can feel alarming instead of supportive.' },
      { text: '"Let\'s just get you invited to every party so you make friends fast!"',
        model: 1,
        rationale: 'Kind, but rushing to fix loneliness skips listening to how they ' +
          'feel. Ongoing sadness needs care, not only a busy social calendar.' }
    ]
  }
];

// Scenario ordering: shuffle, cycle without repeat, reshuffle when exhausted.
let order = [];
let orderPos = 0;
let sIndex = 0;

let ratings = [-1, -1, -1, -1]; // student rating per option
let showRationale = false;

// Layout rects computed each frame
let optionRects = [];   // {x,y,w,h, seg:[{x,y,w,h,val}], idx}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  rationaleButton = createButton('Show Rationale');
  rationaleButton.mousePressed(toggleRationale);
  rationaleButton.parent(document.querySelector('main'));

  scenarioButton = createButton('New Scenario');
  scenarioButton.mousePressed(newScenario);
  scenarioButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset Ratings');
  resetButton.mousePressed(resetRatings);
  resetButton.parent(document.querySelector('main'));

  buildOrder();
  sIndex = order[orderPos];
  positionControls();
  describe('A friend shares ongoing depression or anxiety symptoms on the left. On the ' +
    'right are four possible peer responses. The student rates each one Not, Somewhat, or ' +
    'Very Helpful, then reveals the rationale and compares to the model ratings.', LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  rationaleButton.position(margin, y);
  scenarioButton.position(margin + 132, y);
  resetButton.position(margin + 250, y);
}

function buildOrder() {
  order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  orderPos = 0;
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
  textSize(19);
  text('Peer Support Response Simulator', canvasWidth / 2, 6);

  let topY = 32;

  // Column geometry: left 55%, right 45%
  let gap = 12;
  let leftW = Math.floor((canvasWidth - margin * 2 - gap) * 0.55);
  let rightX = margin + leftW + gap;
  let rightW = canvasWidth - margin - rightX;

  drawScenario(margin, topY, leftW, drawHeight - topY - 10);
  drawOptions(rightX, topY, rightW, drawHeight - topY - 10);

  cursor(overAnySegment() ? HAND : ARROW);
}

function drawScenario(x, y, w, h) {
  let sc = scenarios[sIndex];

  // Prompt banner
  noStroke();
  fill('steelblue');
  textAlign(LEFT, TOP);
  textSize(13);
  text('A friend confides in you:', x, y);

  // Friend disclosure card
  let cardY = y + 22;
  let cardH = 150;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(x, cardY, w, cardH, 10);
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(14);
  text(sc.friend, x + 12, cardY + 12, w - 24, cardH - 24);

  // Task instructions
  let insY = cardY + cardH + 14;
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Your task:', x, insY);
  noStroke();
  fill('dimgray');
  textSize(12.5);
  let taskTxt = showRationale
    ? 'The model ratings and reasons are shown. Compare them to your own ' +
      'choices, then justify what makes a response supportive.'
    : 'Rate each response on the right. Aim for supportive listening, ' +
      'validation, and a gentle referral to a trusted adult. Then press ' +
      '"Show Rationale".';
  text(taskTxt, x, insY + 18, w, 96);

  // Score summary (Stage 4) once rationale is shown
  if (showRationale) {
    let match = 0;
    let rated = 0;
    for (let i = 0; i < 4; i++) {
      if (ratings[i] >= 0) rated++;
      if (ratings[i] === scenarios[sIndex].options[i].model) match++;
    }
    let sy = insY + 116;
    let sh = drawHeight - sy - 12;
    if (sh > 30) {
      fill('honeydew');
      stroke('seagreen');
      strokeWeight(1.5);
      rect(x, sy, w, sh, 10);
      noStroke();
      fill('seagreen');
      textAlign(LEFT, TOP);
      textSize(13);
      text('Your ratings vs. the model', x + 12, sy + 8);
      fill('black');
      textSize(20);
      textAlign(LEFT, TOP);
      text(match + ' of 4 match', x + 12, sy + 28);
      fill('dimgray');
      textSize(11.5);
      let note = rated < 4
        ? 'Rate all four to fully compare. Matching is not the goal by itself.'
        : 'There is no single script. A good response listens, validates, and refers.';
      text(note, x + 12, sy + 54, w - 24, sh - 60);
    }
  }
}

function drawOptions(x, y, w, h) {
  noStroke();
  fill('steelblue');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Possible responses:', x, y);

  optionRects = [];
  let listY = y + 20;
  let n = scenarios[sIndex].options.length;
  let cardGap = 8;
  let cardH = (h - 20 - cardGap * (n - 1)) / n;

  for (let i = 0; i < n; i++) {
    let cy = listY + i * (cardH + cardGap);
    drawOptionCard(x, cy, w, cardH, i);
  }
}

function drawOptionCard(x, y, w, h, idx) {
  let opt = scenarios[sIndex].options[idx];
  let studentR = ratings[idx];
  let modelR = opt.model;
  let correct = showRationale && studentR === modelR;

  // Card background
  let borderCol = 'silver';
  let bg = 'white';
  if (showRationale) {
    borderCol = ratingColors[modelR];
    bg = 'white';
  } else if (studentR >= 0) {
    borderCol = ratingColors[studentR];
    bg = 'white';
  }
  fill(bg);
  stroke(borderCol);
  strokeWeight(showRationale ? 2 : 1.5);
  rect(x, y, w, h, 8);

  // Response text (full width in both modes; no overlapping chip)
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(11.5);
  let textH = showRationale ? h * 0.30 : h * 0.52;
  text(opt.text, x + 9, y + 7, w - 18, textH);

  // Rating segments row
  let segY = y + (showRationale ? h * 0.33 : h * 0.55);
  let segH = showRationale ? h * 0.17 : h * 0.36;
  let segGap = 5;
  let segW = (w - 16 - segGap * 2) / 3;
  let segs = [];
  for (let v = 0; v < 3; v++) {
    let sx = x + 8 + v * (segW + segGap);
    segs.push({ x: sx, y: segY, w: segW, h: segH, val: v });
    let chosen = studentR === v;
    let isModel = showRationale && modelR === v;
    let hover = pointInRect(mouseX, mouseY, { x: sx, y: segY, w: segW, h: segH });
    // fill: student's pick colored; otherwise white/hover
    if (chosen) {
      fill(ratingColors[v]);
    } else if (isModel) {
      fill('white');
    } else {
      fill(hover && !showRationale ? 'whitesmoke' : 'white');
    }
    // border: model segment gets a bold navy ring in rationale mode
    if (isModel) {
      stroke('navy');
      strokeWeight(3);
    } else if (chosen) {
      stroke(ratingColors[v]);
      strokeWeight(2.5);
    } else {
      stroke('silver');
      strokeWeight(1);
    }
    rect(sx, segY, segW, segH, 5);
    noStroke();
    fill(chosen ? 'white' : (isModel ? 'navy' : 'dimgray'));
    textAlign(CENTER, CENTER);
    textSize(11);
    text(ratingLabels[v], sx, segY, segW, segH);
  }
  optionRects.push({ x: x, y: y, w: w, h: h, seg: segs, idx: idx });

  // Rationale + model marker (Stage 3)
  if (showRationale) {
    let markY = segY + segH + 4;
    // legend/match line under the segments
    textAlign(LEFT, TOP);
    textSize(10.5);
    if (studentR < 0) {
      fill('navy');
      text('Navy ring = model rating (you did not rate this one)', x + 9, markY, w - 18, 24);
    } else {
      fill('navy');
      text('Navy = model', x + 9, markY);
      fill(correct ? 'seagreen' : 'indianred');
      textAlign(RIGHT, TOP);
      text(correct ? 'matches your rating' : 'differs from yours', x + w - 9, markY);
      textAlign(LEFT, TOP);
    }
    // rationale text
    noStroke();
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(10.5);
    let ratY = markY + 16;
    text(opt.rationale, x + 9, ratY, w - 18, y + h - ratY - 6);
  }
}

function overAnySegment() {
  if (showRationale) return false;
  for (let o of optionRects) {
    for (let s of o.seg) {
      if (pointInRect(mouseX, mouseY, s)) return true;
    }
  }
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (showRationale) return; // ratings locked while reviewing
  for (let o of optionRects) {
    for (let s of o.seg) {
      if (pointInRect(mouseX, mouseY, s)) {
        ratings[o.idx] = s.val;
        return;
      }
    }
  }
}

function toggleRationale() {
  showRationale = !showRationale;
  rationaleButton.html(showRationale ? 'Hide Rationale' : 'Show Rationale');
}

function newScenario() {
  orderPos++;
  if (orderPos >= order.length) buildOrder();
  sIndex = order[orderPos];
  resetRatings();
}

function resetRatings() {
  ratings = [-1, -1, -1, -1];
  showRationale = false;
  rationaleButton.html('Show Rationale');
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
