// Practice Setting a Boundary - MicroSim
// CANVAS_HEIGHT: 532
// Grade 3, Apply (L3): students pick the best boundary-setting response in
// short, everyday scenarios, then see a calm outcome and explanation.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showButton;
let nextButton;

// Each scenario: prompt, two character labels, and three responses.
// kind: 'clear' = strong boundary, 'quiet' = say nothing, 'unkind' = mean.
let scenarios = [
  {
    prompt: 'A cousin wants to borrow your favorite toy without asking.',
    you: 'You', other: 'Cousin',
    responses: [
      { kind: 'clear', text: 'Please ask me first before you take my toy.',
        outcome: 'Clear and kind! You told your cousin exactly what you need. That is a strong way to set a boundary.' },
      { kind: 'quiet', text: 'Say nothing and let them take it.',
        outcome: 'Staying quiet is okay, but your cousin cannot know what you need. Using clear words usually works better.' },
      { kind: 'unkind', text: 'Yell, "You are so annoying!"',
        outcome: 'Yelling can hurt feelings. A calm, clear sentence tells your cousin what you need without being mean.' }
    ]
  },
  {
    prompt: 'A friend keeps tickling you after you asked them to stop.',
    you: 'You', other: 'Friend',
    responses: [
      { kind: 'clear', text: 'Please stop. I do not like being tickled.',
        outcome: 'Great choice! Saying "Please stop, I do not like that" is clear and respectful. It tells your friend exactly what you need.' },
      { kind: 'quiet', text: 'Laugh even though you want them to stop.',
        outcome: 'Laughing can make your friend think it is okay. Clear words help your friend understand what you really want.' },
      { kind: 'unkind', text: 'Push them away hard.',
        outcome: 'Pushing can hurt someone. Using clear words first is a safer, kinder way to set your boundary.' }
    ]
  },
  {
    prompt: 'A classmate stands very close and it makes you uncomfortable.',
    you: 'You', other: 'Classmate',
    responses: [
      { kind: 'clear', text: 'Can you please give me a little space?',
        outcome: 'Well done! Asking for space in a calm way is clear and polite. Everyone gets to decide about their own space.' },
      { kind: 'quiet', text: 'Step back but do not say anything.',
        outcome: 'Moving away helps, but your classmate may not know why. A few clear words can help them understand.' },
      { kind: 'unkind', text: 'Say, "Get away from me, weirdo!"',
        outcome: 'Name-calling can hurt. A friendly sentence asking for space works better and keeps the friendship kind.' }
    ]
  },
  {
    prompt: 'A relative wants a big hug, but you do not feel like hugging.',
    you: 'You', other: 'Aunt',
    responses: [
      { kind: 'clear', text: 'No thank you. Can we high-five instead?',
        outcome: 'Perfect! You can say no to a hug and offer another way to be friendly. Your body belongs to you.' },
      { kind: 'quiet', text: 'Hug them even though you do not want to.',
        outcome: 'You do not have to hug if you do not want to. Using kind, clear words lets you choose what feels right.' },
      { kind: 'unkind', text: 'Make a mean face and turn away.',
        outcome: 'A mean face can hurt feelings. Saying "No thank you" politely is a clear and caring way to set your boundary.' }
    ]
  }
];

let sIndex = 0;
let choice = -1;      // which response is selected (0..2)
let revealed = false; // has "Show What Happens" been pressed
let respRects = [];   // hit boxes for the three response chips

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showButton = createButton('Show What Happens');
  showButton.mousePressed(showOutcome);
  showButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  positionControls();
  describe('A boundary-setting practice game. A short everyday scenario appears ' +
    'with two friendly characters. The student taps one of three responses, then ' +
    'presses "Show What Happens" to see a calm outcome and explanation. "Next ' +
    'Scenario" loads a new situation. After four scenarios a Boundary-Setting Star ' +
    'message appears.', LABEL);
}

function positionControls() {
  showButton.position(margin, drawHeight + 10);
  nextButton.position(margin + 170, drawHeight + 10);
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
  text('Practice Setting a Boundary', canvasWidth / 2, 8);

  let done = sIndex >= scenarios.length;
  if (done) {
    drawStar();
    updateButtonState();
    return;
  }

  let sc = scenarios[sIndex];

  // Scenario counter
  noStroke();
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Scenario ' + (sIndex + 1) + ' of ' + scenarios.length, canvasWidth / 2, 36);

  // Illustration with two friendly characters
  let sceneY = 58;
  let sceneH = 92;
  drawScene(margin, sceneY, canvasWidth - margin * 2, sceneH, sc);

  // Scenario prompt card
  let promptY = sceneY + sceneH + 10;
  let promptH = 54;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, promptY, canvasWidth - margin * 2, promptH, 8);
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(15);
  text(sc.prompt, margin + 10, promptY + 4, canvasWidth - margin * 2 - 20, promptH - 8);

  // Instruction line
  let instrY = promptY + promptH + 8;
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(13);
  text(revealed ? 'What happens next:' : 'What could you say or do? Tap your choice.',
    canvasWidth / 2, instrY);

  // Three response chips
  let chipTop = instrY + 22;
  let chipGap = 8;
  let chipH = 42;
  let chipW = canvasWidth - margin * 2;
  respRects = [];
  for (let i = 0; i < sc.responses.length; i++) {
    let y = chipTop + i * (chipH + chipGap);
    respRects.push({ x: margin, y: y, w: chipW, h: chipH, i: i });
    let chosen = choice === i;
    let hover = !revealed && pointInRect(mouseX, mouseY, respRects[i]);

    // Border/fill color: after reveal, mark chosen chip by kind.
    let fillCol = 'white';
    let strokeCol = 'slategray';
    let sw = 1.5;
    if (revealed && chosen) {
      let k = sc.responses[i].kind;
      if (k === 'clear') { fillCol = 'honeydew'; strokeCol = 'seagreen'; sw = 3; }
      else { fillCol = 'oldlace'; strokeCol = 'goldenrod'; sw = 3; }
    } else if (chosen) {
      fillCol = 'gold'; strokeCol = 'darkorange'; sw = 3;
    } else if (hover) {
      fillCol = 'lightyellow';
    }
    stroke(strokeCol);
    strokeWeight(sw);
    fill(fillCol);
    rect(margin, y, chipW, chipH, 8);

    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(14);
    text(sc.responses[i].text, margin + 12, y + 3, chipW - 46, chipH - 6);

    // Result mark after reveal
    if (revealed && chosen) {
      let k = sc.responses[i].kind;
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(k === 'clear' ? 'seagreen' : 'goldenrod');
      text(k === 'clear' ? '✓' : '→', margin + chipW - 22, y + chipH / 2);
    }
  }
  cursor(!revealed && overAnyChip() ? HAND : ARROW);

  // Outcome / explanation box
  let outY = chipTop + 3 * (chipH + chipGap) + 4;
  let outH = drawHeight - outY - 8;
  if (revealed && choice >= 0) {
    let r = sc.responses[choice];
    let good = r.kind === 'clear';
    fill(good ? 'honeydew' : 'oldlace');
    stroke(good ? 'seagreen' : 'goldenrod');
    strokeWeight(1.5);
    rect(margin, outY, canvasWidth - margin * 2, outH, 8);
    noStroke();
    fill('black');
    textAlign(LEFT, TOP);
    textSize(14);
    text(r.outcome, margin + 12, outY + 8, canvasWidth - margin * 2 - 24, outH - 16);
  }

  updateButtonState();
}

// Draw a simple two-character scene inside the given box.
function drawScene(x, y, w, h, sc) {
  // background panel
  fill('honeydew');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, h, 8);
  noStroke();
  // ground line
  stroke('darkseagreen');
  strokeWeight(2);
  line(x + 8, y + h - 14, x + w - 8, y + h - 14);
  noStroke();

  let cy = y + h / 2 + 4;
  drawCharacter(x + w * 0.32, cy, 'steelblue', sc.you);
  drawCharacter(x + w * 0.68, cy, 'mediumpurple', sc.other);
}

// A friendly stick-style character: head, body, simple smile, name label.
function drawCharacter(cx, cy, col, label) {
  let headR = 15;
  let bodyH = 26;
  // body
  stroke(col);
  strokeWeight(6);
  line(cx, cy - bodyH / 2, cx, cy + bodyH / 2);
  // arms
  strokeWeight(4);
  line(cx, cy - 4, cx - 12, cy + 6);
  line(cx, cy - 4, cx + 12, cy + 6);
  // legs
  line(cx, cy + bodyH / 2, cx - 9, cy + bodyH / 2 + 12);
  line(cx, cy + bodyH / 2, cx + 9, cy + bodyH / 2 + 12);
  noStroke();
  // head
  fill(col);
  circle(cx, cy - bodyH / 2 - headR + 2, headR * 2);
  // smile
  stroke('white');
  strokeWeight(2);
  noFill();
  arc(cx, cy - bodyH / 2 - headR + 4, 12, 10, 0.15 * PI, 0.85 * PI);
  noStroke();
  // name label
  fill('black');
  textAlign(CENTER, TOP);
  textSize(12);
  text(label, cx, cy + bodyH / 2 + 15);
}

// Celebration screen after all scenarios.
function drawStar() {
  let cx = canvasWidth / 2;
  let topY = 70;

  // star shape
  push();
  translate(cx, topY + 46);
  fill('gold');
  stroke('goldenrod');
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let ang = -HALF_PI + i * TWO_PI / 10;
    let rad = (i % 2 === 0) ? 40 : 17;
    vertex(cos(ang) * rad, sin(ang) * rad);
  }
  endShape(CLOSE);
  pop();

  noStroke();
  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Boundary-Setting Star!', cx, topY + 100);

  fill('black');
  textSize(15);
  text('You practiced using clear, kind words to set boundaries in four ' +
    'everyday situations. Great work!',
    margin + 10, topY + 138, canvasWidth - margin * 2 - 20, 80);

  // Trusted-adult reminder card
  let cardY = topY + 224;
  let cardH = drawHeight - cardY - 16;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, cardY, canvasWidth - margin * 2, cardH, 8);
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Remember', cx, cardY + 10);
  fill('black');
  textSize(14);
  text('If someone does not respect your boundary, you can always ask a ' +
    'trusted adult for help.',
    margin + 12, cardY + 32, canvasWidth - margin * 2 - 24, cardH - 42);
}

function updateButtonState() {
  let done = sIndex >= scenarios.length;
  if (done) {
    showButton.hide();
    nextButton.hide();
    return;
  }
  showButton.show();
  nextButton.show();
  // "Show What Happens" only active once a choice is made and not yet revealed.
  if (choice >= 0 && !revealed) {
    showButton.removeAttribute('disabled');
  } else {
    showButton.attribute('disabled', '');
  }
  // "Next Scenario" only active after the outcome is revealed.
  if (revealed) {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.attribute('disabled', '');
  }
}

function overAnyChip() {
  for (let r of respRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (sIndex >= scenarios.length) return;
  if (revealed) return; // choices locked after reveal
  for (let r of respRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      choice = r.i;
      return;
    }
  }
}

function showOutcome() {
  if (choice >= 0) revealed = true;
}

function nextScenario() {
  if (!revealed) return;
  sIndex++;
  choice = -1;
  revealed = false;
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
