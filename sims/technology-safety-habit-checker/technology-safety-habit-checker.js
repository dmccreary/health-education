// Technology Safety Habit Checker - MicroSim (mock settings screen with six toggles)
// CANVAS_HEIGHT: 522
// Grades 6-8, Apply (L3): students apply technology harm-prevention strategies by
// evaluating a mock app-settings screen and flipping each toggle to the safer or
// riskier position. "Check My Settings" reveals a score out of 6 with explanations;
// "Try a New Scenario" loads a new random profile (3 safer / 3 riskier to start).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let newButton;

// Each setting: label, safeWord/riskyWord (the value shown for each position),
// safeExplain/riskyExplain (why the current position is safer or riskier).
// state.safe = true means the toggle is currently in the safer position.
let settings = [
  { label: 'Account privacy', safeWord: 'Private', riskyWord: 'Public',
    safeExplain: 'Only people you approve can see your account.',
    riskyExplain: 'Anyone online can see everything you post.' },
  { label: 'Location sharing', safeWord: 'Off', riskyWord: 'On',
    safeExplain: "Strangers can't see where you are.",
    riskyExplain: 'Your location could show strangers where you are.' },
  { label: 'Who can message you', safeWord: 'Friends only', riskyWord: 'Everyone',
    safeExplain: 'Only people you know can message you.',
    riskyExplain: 'Anyone, including strangers, can message you.' },
  { label: 'Personal info in bio', safeWord: 'Hidden', riskyWord: 'Shown',
    safeExplain: 'Your school, address, and phone stay private.',
    riskyExplain: 'Your school or phone number is visible to everyone.' },
  { label: 'Screen time limit', safeWord: 'On', riskyWord: 'Off',
    safeExplain: 'A daily limit helps you take healthy breaks.',
    riskyExplain: 'With no limit it is easy to lose track of time.' },
  { label: 'Unknown contact requests', safeWord: 'Review first', riskyWord: 'Auto-accept',
    safeExplain: 'You decide before adding someone you do not know.',
    riskyExplain: 'People you do not know get added automatically.' }
];

let state = [];       // booleans: is each setting in the safer position?
let lastTouched = -1; // most recently flipped row (for the live caption)
let showScore = false;
let rowRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Settings');
  checkButton.mousePressed(() => { showScore = true; });
  newButton = createButton('Try a New Scenario');
  newButton.mousePressed(newScenario);

  positionControls();
  newScenario();
  describe('A mock app-settings screen with six toggle switches (account privacy, ' +
    'location sharing, who can message you, personal info in bio, screen time limit, ' +
    'and unknown contact requests). Each toggle shows Safer in green or Riskier in ' +
    'orange. Students flip toggles, then check their score out of six.', LABEL);
}

function positionControls() {
  checkButton.position(margin, drawHeight + 12);
  newButton.position(margin + 160, drawHeight + 12);
}

// Start with exactly 3 safer and 3 riskier settings, in a random arrangement.
function newScenario() {
  let flags = [true, true, true, false, false, false];
  for (let i = flags.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [flags[i], flags[j]] = [flags[j], flags[i]];
  }
  state = flags;
  lastTouched = -1;
  showScore = false;
}

function layout() {
  // Side-by-side on wide canvases; stacked (panel below) on narrow ones.
  let wide = canvasWidth >= 560;
  let panelW = wide ? 200 : canvasWidth - margin * 2;
  let listX = margin;
  let listY = 44;
  let listW = wide ? canvasWidth - panelW - margin * 3 : canvasWidth - margin * 2;
  let rowH = 44, rowGap = 6;
  let listH = settings.length * rowH + (settings.length - 1) * rowGap;
  let panelX = wide ? canvasWidth - panelW - margin : margin;
  let panelY = wide ? listY : listY + listH + 12;
  let panelH = wide ? listH : drawHeight - panelY - margin;
  return { wide, listX, listY, listW, rowH, rowGap, panelX, panelY, panelW, panelH };
}

function draw() {
  updateCanvasSize();

  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c'); textAlign(LEFT, TOP); textSize(18);
  text('Technology Safety Habit Checker', margin, 8);
  fill('dimgray'); textSize(12);
  text('Tap a toggle to flip it between Safer and Riskier.', margin, 30);

  let L = layout();
  drawRows(L);
  drawPanel(L);

  cursor(overRow(L) ? HAND : ARROW);
}

function drawRows(L) {
  rowRects = [];
  for (let i = 0; i < settings.length; i++) {
    let y = L.listY + i * (L.rowH + L.rowGap);
    rowRects.push({ x: L.listX, y: y, w: L.listW, h: L.rowH, i: i });
    let safe = state[i];

    // row background; when the score is shown, tint by correctness
    strokeWeight(1.5); stroke('#c9d6e5');
    if (showScore) fill(safe ? '#e9f7ef' : '#fdeee0');
    else fill('white');
    rect(L.listX, y, L.listW, L.rowH, 8);

    // label + current value word
    noStroke(); fill('#212529'); textAlign(LEFT, TOP); textSize(13);
    text(settings[i].label, L.listX + 12, y + 7, L.listW - 90, 20);
    fill(safe ? 'seagreen' : 'darkorange'); textSize(11);
    text((safe ? settings[i].safeWord : settings[i].riskyWord), L.listX + 12, y + 25, L.listW - 90, 16);

    // toggle switch on the right
    let tw = 46, th = 22;
    let tx = L.listX + L.listW - tw - 14;
    let ty = y + L.rowH / 2 - th / 2;
    noStroke(); fill(safe ? 'mediumseagreen' : 'sandybrown');
    rect(tx, ty, tw, th, th / 2);
    fill('white');
    let knobX = safe ? tx + tw - th / 2 : tx + th / 2;
    circle(knobX, ty + th / 2, th - 6);

    // Safer/Riskier tag when checked
    if (showScore) {
      textAlign(RIGHT, CENTER); textSize(9);
      fill(safe ? 'seagreen' : 'darkorange');
      text(safe ? 'Safer' : 'Riskier', tx - 6, y + L.rowH / 2);
    }
  }
}

function drawPanel(L) {
  fill('white'); stroke('#b8c4d0'); strokeWeight(1.5);
  rect(L.panelX, L.panelY, L.panelW, L.panelH, 10);
  noStroke();
  let px = L.panelX + 12, pw = L.panelW - 24, py = L.panelY + 10;

  let safeCount = state.filter(Boolean).length;

  if (showScore) {
    fill('#1a3a6c'); textAlign(LEFT, TOP); textSize(14);
    text('Your score: ' + safeCount + ' of 6 safer', px, py, pw, 22);
    let riskyNames = settings.filter((s, i) => !state[i]).map(s => s.label);
    fill(safeCount === 6 ? 'seagreen' : 'darkorange'); textSize(12);
    if (safeCount === 6) {
      text('All six settings are in the safer position. Nice work protecting yourself!',
        px, py + 26, pw, L.panelH - 40);
    } else {
      text('Still riskier: ' + riskyNames.join(', ') + '. Flip each one to make it safer.',
        px, py + 26, pw, L.panelH - 40);
    }
  } else if (lastTouched >= 0) {
    let s = settings[lastTouched];
    let safe = state[lastTouched];
    fill(safe ? 'seagreen' : 'darkorange'); textAlign(LEFT, TOP); textSize(13);
    text(s.label + ': ' + (safe ? s.safeWord : s.riskyWord), px, py, pw, 20);
    fill('#212529'); textSize(12);
    text(safe ? s.safeExplain : s.riskyExplain, px, py + 22, pw, L.panelH - 34);
  } else {
    fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
    text('Set each toggle to the safer choice, then press "Check My Settings" to see ' +
      'your score. Tap a toggle to read why it matters.', px, py, pw, L.panelH - 20);
  }
}

function overRow(L) { for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let r of rowRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      state[r.i] = !state[r.i];
      lastTouched = r.i;
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
