// Technology Safety Rules Checklist - MicroSim (Safe vs. Not Safe recognizer)
// CANVAS_HEIGHT: 492
// Grade 1, Remember (L1): students identify which everyday technology scenarios
// follow technology safety rules and which do not. One scenario shows at a time
// with a simple flat icon; students tap Safe or Not Safe and get calm, gentle
// feedback. Eight varied scenarios help students generalize the pattern.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Each scenario: caption, safe (true = follows the safety rules), icon type,
// explain (shown on a correct answer), hint (gentle correction on a wrong answer).
let scenarios = [
  { caption: 'Playing a learning game a parent installed', safe: true, icon: 'game',
    explain: 'Correct! A trusted adult chose this game, so it follows technology safety rules.',
    hint: 'Look again. A trusted adult picked this game, so it is safe.' },
  { caption: 'Messaging a stranger who asked for your home address', safe: false, icon: 'stranger',
    explain: "Correct! Never share your address with someone you don't know. Tell a trusted adult if this happens.",
    hint: "Look again. We keep our home address private from people we don't know." },
  { caption: 'Video-calling grandma with a parent nearby', safe: true, icon: 'family',
    explain: 'Correct! Video-calling family with a trusted adult close by is a safe way to stay connected.',
    hint: 'Look again. Calling family with a trusted adult nearby is safe.' },
  { caption: 'Clicking a pop-up that says you won a prize', safe: false, icon: 'popup',
    explain: "Correct! Surprise prize pop-ups are usually tricks. It's safest to close them and tell a trusted adult.",
    hint: 'Look again. Surprise prize pop-ups are usually tricks, so we do not click them.' },
  { caption: 'Using a tablet timer set by a trusted adult', safe: true, icon: 'timer',
    explain: 'Correct! A timer set by a trusted adult helps you take healthy breaks from the screen.',
    hint: 'Look again. A timer from a trusted adult helps you take healthy breaks.' },
  { caption: 'Sharing a school photo with someone met only online', safe: false, icon: 'photo',
    explain: "Correct! It's safest not to share photos with people you only know online. Check with a trusted adult first.",
    hint: 'Look again. We do not share photos with people we only know online.' },
  { caption: 'Asking a parent before downloading a new app', safe: true, icon: 'download',
    explain: 'Correct! Checking with a trusted adult before downloading is a great safety habit.',
    hint: 'Look again. Asking a trusted adult before downloading is a safe habit.' },
  { caption: "Chatting with someone you don't know who wants to be friends", safe: false, icon: 'message',
    explain: "Correct! It's safest not to chat with people you don't know online. Tell a trusted adult if a stranger messages you.",
    hint: "Look again. We do not chat with people we don't know online." }
];

let idx = 0;
let chosen = -1;      // -1 none, 0 = Safe, 1 = Not Safe
let locked = false;   // true once the correct answer is chosen
let solved = [];      // which scenarios have been answered correctly
let btnRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('One technology scenario shows at a time with a simple icon and a caption. ' +
    'Students tap a green "Safe" button or an orange "Not Safe" button and receive ' +
    'calm feedback explaining the safety rule.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 150, drawHeight + 12);
}

function resetAll() {
  idx = 0;
  chosen = -1;
  locked = false;
  solved = [];
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  chosen = -1;
  locked = false;
}

function draw() {
  updateCanvasSize();

  // panels
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('#1a3a6c'); textAlign(CENTER, TOP); textSize(18);
  text('Technology Safety Rules Checklist', margin, 8, canvasWidth - margin * 2, 26);

  let scen = scenarios[idx];

  // scenario banner: icon on the left, caption on the right
  let by = 40, bh = 96;
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(margin, by, canvasWidth - margin * 2, bh, 12);
  noStroke();
  drawSceneIcon(scen.icon, margin + 46, by + bh / 2, 58);
  fill('black'); textAlign(LEFT, CENTER); textSize(15);
  text(scen.caption, margin + 86, by + 8, canvasWidth - margin * 2 - 96, bh - 16);

  // two large answer targets
  drawAnswers(scen);

  // feedback infobox
  let iy = 270, ih = 150;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, iy, canvasWidth - margin * 2, ih, 10);
  noStroke();
  textAlign(LEFT, TOP);
  if (chosen < 0) {
    fill('dimgray'); textSize(14);
    text('Does this follow our technology safety rules? Tap Safe or Not Safe.',
      margin + 12, iy + 12, canvasWidth - margin * 2 - 24, ih - 24);
  } else if (locked) {
    fill('seagreen'); textSize(15);
    text(scen.explain, margin + 12, iy + 12, canvasWidth - margin * 2 - 24, ih - 24);
  } else {
    fill('darkorange'); textSize(15);
    text(scen.hint + ' Try the other choice.', margin + 12, iy + 12, canvasWidth - margin * 2 - 24, ih - 24);
  }

  // progress
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(13);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length + '   •   Solved ' +
    solved.length + ' of ' + scenarios.length, margin, drawHeight - 8);

  cursor(overAnswer() && !locked ? HAND : ARROW);
}

function drawAnswers(scen) {
  btnRects = [];
  let ay = 150, ah = 104, gap = 14;
  let bw = (canvasWidth - margin * 2 - gap) / 2;
  let labels = ['Safe', 'Not Safe'];
  let mainColors = ['seagreen', 'darkorange'];
  for (let i = 0; i < 2; i++) {
    let x = margin + i * (bw + gap);
    btnRects.push({ x: x, y: ay, w: bw, h: ah, i: i });
    let isCorrectBtn = (i === 0) === scen.safe;
    let hover = pointInRect(mouseX, mouseY, btnRects[i]);

    strokeWeight(3); stroke(mainColors[i]);
    if (locked && isCorrectBtn) { fill('palegreen'); strokeWeight(5); }
    else if (locked) fill('white');
    else if (chosen === i && !isCorrectBtn) fill('mistyrose');
    else if (hover) fill(i === 0 ? 'honeydew' : 'antiquewhite');
    else fill('white');
    rect(x, ay, bw, ah, 12);

    // symbol
    let cx = x + bw / 2, sy = ay + 34;
    if (i === 0) {
      // green check mark
      stroke('seagreen'); strokeWeight(7); noFill();
      line(cx - 16, sy, cx - 5, sy + 12);
      line(cx - 5, sy + 12, cx + 17, sy - 12);
    } else {
      // orange question mark inside a circle
      noStroke(); fill('darkorange'); textAlign(CENTER, CENTER); textSize(40);
      text('?', cx, sy + 2);
    }
    noStroke();
    fill(mainColors[i]); textAlign(CENTER, CENTER); textSize(20);
    text(labels[i], cx, ay + ah - 26);
  }
}

// Simple, non-scary flat icons drawn inside a box centered at (x, y) of size s.
function drawSceneIcon(type, x, y, s) {
  push();
  translate(x, y);
  let h = s / 2;
  rectMode(CENTER);
  if (type === 'game') {
    fill('mediumpurple'); noStroke();
    rect(0, 0, s, s * 0.6, 16);
    fill('white'); circle(-s * 0.22, 0, 8); circle(s * 0.22, -6, 8); circle(s * 0.3, 6, 8);
    stroke('white'); strokeWeight(3); line(-s * 0.28, -6, -s * 0.16, -6); line(-s * 0.22, -12, -s * 0.22, 0);
  } else if (type === 'stranger') {
    fill('silver'); noStroke();
    circle(0, -h * 0.5, s * 0.42);
    arc(0, h * 0.55, s * 0.8, s * 0.7, PI, TWO_PI);
    fill('darkorange'); textAlign(CENTER, CENTER); textSize(s * 0.5); text('?', h * 0.7, -h * 0.5);
  } else if (type === 'family') {
    fill('goldenrod'); noStroke(); circle(-s * 0.2, -h * 0.3, s * 0.36);
    fill('seagreen'); circle(s * 0.22, -h * 0.15, s * 0.3);
    fill('mediumseagreen'); arc(0, h * 0.7, s * 0.95, s * 0.8, PI, TWO_PI);
  } else if (type === 'popup') {
    fill('white'); stroke('gray'); strokeWeight(2); rect(0, 2, s * 0.85, s * 0.62, 4);
    noStroke(); fill('crimson'); rect(0, -h * 0.42, s * 0.85, s * 0.16);
    fill('gold'); textAlign(CENTER, CENTER); textSize(s * 0.42); text('!', 0, 6);
  } else if (type === 'timer') {
    fill('lightblue'); stroke('steelblue'); strokeWeight(3); circle(0, 4, s * 0.8);
    stroke('navy'); strokeWeight(3); line(0, 4, 0, 4 - s * 0.24); line(0, 4, s * 0.16, 4);
    noStroke(); fill('steelblue'); rect(0, -h * 0.72, s * 0.28, s * 0.14, 3);
  } else if (type === 'photo') {
    fill('white'); stroke('gray'); strokeWeight(2); rect(0, 0, s * 0.85, s * 0.66, 4);
    noStroke(); fill('gold'); circle(-s * 0.2, -h * 0.28, s * 0.16);
    fill('seagreen'); triangle(-s * 0.3, h * 0.28, 0, -h * 0.05, s * 0.12, h * 0.28);
    fill('mediumseagreen'); triangle(-s * 0.02, h * 0.28, s * 0.2, -h * 0.12, s * 0.4, h * 0.28);
  } else if (type === 'download') {
    fill('mediumseagreen'); noStroke(); rect(0, -h * 0.2, s * 0.2, s * 0.5);
    triangle(-s * 0.24, h * 0.02, s * 0.24, h * 0.02, 0, h * 0.4);
    stroke('seagreen'); strokeWeight(4); noFill(); line(-s * 0.35, h * 0.55, s * 0.35, h * 0.55);
  } else { // message
    fill('cornflowerblue'); noStroke(); rect(0, -2, s * 0.85, s * 0.6, 12);
    triangle(-s * 0.2, h * 0.28, -s * 0.05, h * 0.28, -s * 0.05, h * 0.55);
    fill('white'); circle(-s * 0.18, -2, 7); circle(0, -2, 7); circle(s * 0.18, -2, 7);
  }
  pop();
  rectMode(CORNER);
}

function overAnswer() { for (let r of btnRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (locked) return;
  if (mouseY > drawHeight) return; // ignore the control strip
  for (let r of btnRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      chosen = r.i;
      let correct = (r.i === 0) === scenarios[idx].safe;
      if (correct) {
        locked = true;
        if (!solved.includes(idx)) solved.push(idx);
      }
      return;
    }
  }
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
