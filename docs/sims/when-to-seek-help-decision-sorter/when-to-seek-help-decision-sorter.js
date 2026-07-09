// When To Seek Help Decision Sorter - MicroSim (judgment sorter)
// CANVAS_HEIGHT: 500
// Grade 4-6, Evaluate (L5): students read a symptom scenario and judge how soon to
// get help — rest at home, tell an adult and see a doctor soon, or seek emergency
// help now. Feedback stays calm and non-alarmist and explains the reasoning.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton, nextButton, resetButton;

// Three response categories (the "how soon" judgment).
let cats = ['Rest\nAt Home', 'Tell an Adult\nSoon', 'Emergency —\nAct Now'];
let catColors = ['seagreen', 'goldenrod', 'crimson'];

// Nine scenarios, three per category: mild illness, worsening illness, emergencies.
let scenarios = [
  { text: 'You have a mild runny nose and feel a little tired.', cat: 0,
    why: 'Mild cold symptoms usually just need rest, fluids, and time — but still mention it to a trusted adult.' },
  { text: "You've had a fever that keeps getting worse for three days.", cat: 1,
    why: 'A fever that lasts several days or keeps climbing is your body asking for help. Tell a trusted adult so a doctor can check it soon.' },
  { text: "A friend with asthma is wheezing and can't catch their breath.", cat: 2,
    why: "When a breathing problem suddenly gets much worse and someone can't catch their breath, that's an emergency. Get help right away or call 911." },
  { text: 'You have a small paper cut that stopped bleeding quickly.', cat: 0,
    why: 'A tiny cut just needs to be washed and covered. Clean hands and a bandage are usually all it takes.' },
  { text: "You've had a sore throat and mild cough for a whole week.", cat: 1,
    why: 'Symptoms that stick around for a week deserve a check-up. Tell a trusted adult so a doctor can see what is going on.' },
  { text: "Someone suddenly can't be woken up and won't respond.", cat: 2,
    why: "If a person can't be woken up or won't respond, that's an emergency. Call 911 or have an adult call right away." },
  { text: 'You have a mild headache after a long day of screens.', cat: 0,
    why: 'A mild headache often eases with a screen break, some water, and rest. Let a trusted adult know if it does not go away.' },
  { text: 'Your tummy has hurt more and more since yesterday, now on the lower right.', cat: 1,
    why: 'Belly pain that keeps getting worse — especially on the lower right — should be checked by a doctor soon. Tell a trusted adult.' },
  { text: 'A classmate is having a hard time breathing and their lips look blue.', cat: 2,
    why: "Blue lips mean the body isn't getting enough oxygen. That's an emergency — call 911 right away." }
];

let order = [];
let idx = 0;
let picked = -1;      // category the student chose for this scenario
let showWhy = false;  // reveal the reasoning paragraph
let catRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  whyButton = createButton('Why?');
  whyButton.mousePressed(() => { if (picked >= 0) showWhy = !showWhy; });
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('A symptom scenario card with three response choices: Rest At Home, ' +
    'Tell an Adult Soon, and Emergency — Act Now. Students judge how soon to get ' +
    'help and read calm, reasoning-based feedback.', LABEL);
}

function positionControls() {
  whyButton.position(10, drawHeight + 10);
  nextButton.position(70, drawHeight + 10);
  resetButton.position(200, drawHeight + 10);
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
  textSize(20);
  text('When To Seek Help', canvasWidth / 2, 8);

  let sc = scenarios[order[idx]];

  // Scenario card
  let cardX = margin, cardY = 40;
  let cardW = canvasWidth - 2 * margin, cardH = 96;
  fill('white');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length, cardX + 12, cardY + 8);
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(17);
  text(sc.text, cardX + 12, cardY + 20, cardW - 24, cardH - 28);

  // Prompt
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('How soon should you get help? Tap a choice.', margin, 146, canvasWidth - 2 * margin, 20);

  // Three category choices
  catRects = [];
  let n = cats.length, gap = 10;
  let zw = (canvasWidth - 2 * margin - gap * (n - 1)) / n;
  let zy = 172, zh = 96;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (zw + gap);
    catRects.push({ x: x, y: zy, w: zw, h: zh, i: i });
    let correctPick = picked === i && i === sc.cat;
    let wrongPick = picked === i && i !== sc.cat;
    let isAnswer = picked >= 0 && i === sc.cat;
    let hover = picked < 0 && pointInRect(mouseX, mouseY, catRects[i]);
    strokeWeight(correctPick || isAnswer ? 4 : 2);
    stroke(catColors[i]);
    if (correctPick || (isAnswer && wrongPickExists())) fill('palegreen');
    else if (wrongPick) fill('mistyrose');
    else if (hover) fill('lightyellow');
    else fill(lerpColor(color(catColors[i]), color('white'), 0.78));
    rect(x, zy, zw, zh, 8);
    noStroke();
    fill(catColors[i]);
    textAlign(CENTER, CENTER);
    textSize(15);
    text(cats[i], x, zy + zh / 2 - 8, zw, zh);
    if (isAnswer) {
      fill('seagreen');
      textAlign(CENTER, BOTTOM);
      textSize(20);
      text('✓', x + zw / 2, zy + zh - 4);
    }
  }
  cursor(overAnyCat() && picked < 0 ? HAND : ARROW);

  // Feedback panel
  let fy = 284;
  let fh = drawHeight - fy - margin;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fy, canvasWidth - 2 * margin, fh, 8);
  noStroke();
  textAlign(LEFT, TOP);
  if (picked < 0) {
    fill('dimgray');
    textSize(14);
    text('Read the scenario, then decide how soon this person should get help. ' +
      'There is no need to feel alarmed — take your time and think it through.',
      margin + 12, fy + 12, canvasWidth - 2 * margin - 24, fh - 24);
  } else {
    let correct = picked === sc.cat;
    fill(correct ? 'seagreen' : 'darkorange');
    textSize(15);
    text(correct ? 'Good thinking!' : "Let's look again.",
      margin + 12, fy + 10, canvasWidth - 2 * margin - 24, 22);
    fill('black');
    textSize(14);
    text('Best choice: ' + cats[sc.cat].replace('\n', ' ') + '.',
      margin + 12, fy + 34, canvasWidth - 2 * margin - 24, 22);
    if (showWhy) {
      fill('#333');
      textSize(13.5);
      text(sc.why, margin + 12, fy + 58, canvasWidth - 2 * margin - 24, fh - 66);
    } else {
      fill('teal');
      textSize(13);
      text('Tap "Why?" to see the reason.', margin + 12, fy + 58, canvasWidth - 2 * margin - 24, 22);
    }
  }
}

function wrongPickExists() {
  return picked >= 0 && picked !== scenarios[order[idx]].cat;
}

function overAnyCat() {
  for (let r of catRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked >= 0) return;              // one choice per scenario
  if (mouseY > drawHeight) return;      // ignore the control strip
  for (let r of catRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      picked = r.i;
      showWhy = false;
      return;
    }
  }
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
  showWhy = false;
}

function resetAll() {
  order = [...Array(scenarios.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // Start on the reassuring runny-nose scenario.
  let zero = order.indexOf(0);
  [order[0], order[zero]] = [order[zero], order[0]];
  idx = 0;
  picked = -1;
  showWhy = false;
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
