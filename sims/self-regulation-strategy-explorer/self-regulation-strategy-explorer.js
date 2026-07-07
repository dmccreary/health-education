// Self-Regulation Strategy Explorer - MicroSim
// CANVAS_HEIGHT: 512
// Grade 4, Apply (L3): match a strong-feeling scenario to a calming strategy and
// watch the feeling-intensity thermometer come down with an affirming explanation.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Each scenario is an ordinary school/home situation with a strong feeling.
let scenarios = [
  { text: 'You got a lower grade than you hoped on a spelling test.',
    feeling: 'disappointed' },
  { text: 'Your friend borrowed your marker and lost it.',
    feeling: 'frustrated' },
  { text: 'Recess is canceled because it started to rain.',
    feeling: 'let down' },
  { text: 'You have been waiting a long time in a slow line.',
    feeling: 'impatient' },
  { text: 'A change of plans means you cannot visit the park today.',
    feeling: 'upset' },
  { text: 'You made a mistake during a class presentation.',
    feeling: 'embarrassed' }
];

// Four healthy strategies. Every one is a valid, healthy choice.
let strategies = [
  { name: 'Deep Breaths', icon: 'lungs',
    why: 'Slow, deep breaths calm your heart rate and give your brain a moment to think clearly.' },
  { name: 'Count to Ten', icon: 'numbers',
    why: 'Counting slowly gives the strong feeling time to pass before you decide what to do.' },
  { name: 'Take a Break', icon: 'footprint',
    why: 'Stepping away for a short break lets your body settle so you can come back calmer.' },
  { name: 'Talk It Out', icon: 'speech',
    why: 'Talking with a trusted person helps you feel heard and find a helpful next step.' }
];

let sIndex = 0;
let chosen = -1;          // which strategy was chosen for this scenario, or -1
let intensity = 1.0;      // 0..1, starts high
let targetIntensity = 1.0;
let stratRects = [];      // hit-test rects for the four strategy chips
let tried = [];           // strategy indices tried, for the summary

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSim);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A short scenario shows a strong feeling with a feeling-intensity ' +
    'thermometer. Pick one of four calming strategies (deep breaths, count to ten, ' +
    'take a break, talk it out) to see the feeling ease and read why the strategy helps.',
    LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 14);
  resetButton.position(margin + 150, drawHeight + 14);
}

function draw() {
  updateCanvasSize();

  // panels
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
  text('Self-Regulation Strategy Explorer', canvasWidth / 2, 8);

  // ease the thermometer toward its target
  intensity += (targetIntensity - intensity) * 0.12;

  let topY = 38;
  let colGap = 12;
  let thermoW = 62;
  let leftX = margin;
  let leftW = canvasWidth - margin * 2 - thermoW - colGap;

  drawScenarioCard(leftX, topY, leftW);
  drawThermometer(leftX + leftW + colGap, topY, thermoW);
  drawStrategies(leftX, topY + 92, canvasWidth - margin * 2);

  cursor(overAnyStrategy() ? HAND : ARROW);
}

function drawScenarioCard(x, y, w) {
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(x, y, w, 84, 8);
  noStroke();

  fill('steelblue');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Scenario ' + (sIndex + 1) + ' of ' + scenarios.length, x + 10, y + 8);

  fill('black');
  textAlign(LEFT, TOP);
  textSize(15);
  text(scenarios[sIndex].text, x + 10, y + 26, w - 20, 54);
}

function drawThermometer(x, y, w) {
  let cx = x + w / 2;
  let barTop = y + 20;
  let barBottom = y + 74;
  let barH = barBottom - barTop;
  let barW = 16;
  let bulbR = 13;

  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(11);
  text('Feeling', cx, y);

  // tube outline + bulb
  stroke('slategray');
  strokeWeight(1.5);
  fill('white');
  rect(cx - barW / 2, barTop, barW, barH, barW / 2);
  ellipse(cx, barBottom + bulbR - 2, bulbR * 2, bulbR * 2);

  // fill level (high = red, low = green)
  let fillH = barH * constrain(intensity, 0, 1);
  let levelColor = intensityColor(intensity);
  noStroke();
  fill(levelColor);
  ellipse(cx, barBottom + bulbR - 2, bulbR * 2 - 4, bulbR * 2 - 4);
  if (fillH > 1) {
    rect(cx - (barW - 5) / 2, barBottom - fillH, barW - 5, fillH, (barW - 5) / 2);
  }

  // zone label under the bulb
  noStroke();
  fill(levelColor);
  textAlign(CENTER, TOP);
  textSize(11);
  let zone = intensity > 0.66 ? 'High' : (intensity > 0.33 ? 'Medium' : 'Calm');
  text(zone, cx, barBottom + bulbR * 2 - 1);
}

function intensityColor(t) {
  if (t > 0.66) return color('indianred');
  if (t > 0.33) return color('goldenrod');
  return color('seagreen');
}

function drawStrategies(x, y, w) {
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  let heading = chosen < 0 ? 'Pick a calming strategy:' : 'You chose a healthy strategy:';
  text(heading, x, y);

  // 2 x 2 grid of strategy chips
  let gridY = y + 20;
  let gap = 10;
  let cw = (w - gap) / 2;
  let ch = 46;
  stratRects = [];
  for (let i = 0; i < strategies.length; i++) {
    let col = i % 2;
    let row = floor(i / 2);
    let cxr = x + col * (cw + gap);
    let cyr = gridY + row * (ch + gap);
    stratRects.push({ x: cxr, y: cyr, w: cw, h: ch, i: i });

    let isChosen = chosen === i;
    let hover = pointInRect(mouseX, mouseY, { x: cxr, y: cyr, w: cw, h: ch });
    strokeWeight(isChosen ? 3 : 1.5);
    stroke(isChosen ? 'seagreen' : 'steelblue');
    fill(isChosen ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
    rect(cxr, cyr, cw, ch, 8);

    // icon on the left of the chip
    drawIcon(strategies[i].icon, cxr + 24, cyr + ch / 2, isChosen ? 'seagreen' : 'steelblue');

    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(14);
    text(strategies[i].name, cxr + 46, cyr, cw - 52, ch);
  }

  // feedback panel below the grid
  let fbY = gridY + 2 * ch + gap + 8;
  let fbH = drawHeight - fbY - 10;
  drawFeedback(x, fbY, w, fbH);
}

function drawFeedback(x, y, w, h) {
  if (h < 20) return;
  let done = allTried();
  if (chosen >= 0) {
    fill('honeydew');
    stroke('seagreen');
  } else {
    fill('white');
    stroke('silver');
  }
  strokeWeight(1.5);
  rect(x, y, w, h, 8);
  noStroke();

  if (chosen >= 0) {
    fill('seagreen');
    textAlign(LEFT, TOP);
    textSize(13);
    text('✓ ' + strategies[chosen].name + ' — the feeling is easing.',
      x + 10, y + 8, w - 20, 20);
    fill('black');
    textSize(13);
    text(strategies[chosen].why, x + 10, y + 30, w - 20, h - 58);

    // progress line: how many strategies tried so far
    fill('dimgray');
    textSize(12);
    let line = done
      ? 'Nice work! You tried all four strategies. Any healthy choice helps.'
      : 'Strategies tried: ' + tried.length + ' of 4. Try "Next Scenario".';
    text(line, x + 10, y + h - 24, w - 20, 20);
  } else {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(13);
    text('Every strategy here is a healthy choice. Tap one to see the feeling ease ' +
      'and read why it helps.', x + 10, y + 10, w - 20, h - 18);
  }
}

// --- simple icons drawn from primitives, centered at (cx, cy) ---
function drawIcon(kind, cx, cy, col) {
  push();
  translate(cx, cy);
  stroke(col);
  strokeWeight(2);
  noFill();
  if (kind === 'lungs') {
    fill(col);
    noStroke();
    ellipse(-5, 2, 9, 13);
    ellipse(5, 2, 9, 13);
    stroke(col);
    strokeWeight(2);
    line(0, -8, 0, 2);
  } else if (kind === 'numbers') {
    noStroke();
    fill(col);
    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);
    text('123', 0, 0);
    textStyle(NORMAL);
  } else if (kind === 'footprint') {
    fill(col);
    noStroke();
    ellipse(0, 2, 10, 15);
    ellipse(-4, -7, 4, 5);
    ellipse(0, -8, 4, 5);
    ellipse(4, -7, 4, 5);
  } else if (kind === 'speech') {
    fill(col);
    noStroke();
    rect(-9, -8, 18, 13, 4);
    triangle(-4, 5, -4, 10, 3, 5);
  }
  pop();
}

function overAnyStrategy() {
  for (let r of stratRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of stratRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      chosen = r.i;
      targetIntensity = 0.28; // any healthy strategy lowers the feeling
      if (!tried.includes(r.i)) tried.push(r.i);
      return;
    }
  }
}

function allTried() {
  return tried.length >= strategies.length;
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  chosen = -1;
  intensity = 1.0;
  targetIntensity = 1.0;
}

function resetSim() {
  sIndex = 0;
  chosen = -1;
  intensity = 1.0;
  targetIntensity = 1.0;
  tried = [];
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
