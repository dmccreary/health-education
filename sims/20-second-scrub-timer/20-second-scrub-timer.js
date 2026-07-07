// 20-Second Scrub Timer - MicroSim (timed step-through sequence)
// CANVAS_HEIGHT: 480
// Kindergarten, Apply (L3): children practice the handwashing routine by
// following a step-by-step, timed scrubbing sequence in the correct order.
// Timed animation is appropriate here because order + duration are the targets.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;

let startButton;
let resetButton;

// Ordered handwashing steps with durations (seconds) and friendly labels
let steps = [
  { name: 'Wet', label: 'Wet your hands', dur: 2 },
  { name: 'Soap', label: 'Add soap', dur: 2 },
  { name: 'Scrub', label: 'Now we scrub!', dur: 20 },
  { name: 'Rinse', label: 'Rinse them off', dur: 3 },
  { name: 'Dry', label: 'Dry your hands', dur: 3 }
];

let isRunning = false;
let stepIndex = 0;      // current step
let stepStart = 0;      // millis() when current step began
let finished = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  startButton = createButton('Start Scrubbing!');
  startButton.mousePressed(startScrub);

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetScrub);

  positionControls();
  describe('A handwashing timer for young children. Five numbered steps (wet, soap, ' +
    'scrub, rinse, dry) light up in order while a countdown ring shows the time for ' +
    'each step. The scrub step lasts a full 20 seconds.', LABEL);
}

function positionControls() {
  startButton.position(10, drawHeight + 15);
  resetButton.position(170, drawHeight + 15);
}

function draw() {
  updateCanvasSize();

  // Regions
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
  textSize(26);
  text('Wash Your Hands!', canvasWidth / 2, 10);

  // Advance the timed sequence
  let remaining = 0;
  if (isRunning) {
    let elapsed = (millis() - stepStart) / 1000;
    remaining = steps[stepIndex].dur - elapsed;
    if (remaining <= 0) {
      stepIndex++;
      if (stepIndex >= steps.length) {
        isRunning = false;
        finished = true;
        stepIndex = steps.length - 1;
      } else {
        stepStart = millis();
      }
    }
  }

  drawStepIcons();
  drawHands();
  drawCountdownRing(remaining);

  // Current step label / celebration message
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  if (finished) {
    fill('seagreen');
    text('Clean hands, healthy you!', canvasWidth / 2, drawHeight - 30);
    textSize(18);
    text('You scrubbed for the full 20 seconds.', canvasWidth / 2, drawHeight - 6);
  } else if (isRunning) {
    fill('navy');
    text(steps[stepIndex].label, canvasWidth / 2, drawHeight - 20);
  } else {
    fill('gray');
    text('Press Start Scrubbing! to begin.', canvasWidth / 2, drawHeight - 20);
  }
}

// Five numbered step icons across the top, current one glows
function drawStepIcons() {
  let n = steps.length;
  let slotW = canvasWidth / n;
  let y = 70;
  for (let i = 0; i < n; i++) {
    let cx = slotW * i + slotW / 2;
    let active = isRunning && i === stepIndex;
    let done = i < stepIndex || finished;
    strokeWeight(active ? 4 : 2);
    stroke(active ? 'darkorange' : (done ? 'seagreen' : 'steelblue'));
    fill(active ? 'gold' : (done ? 'honeydew' : 'white'));
    circle(cx, y, 46);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(20);
    text(i + 1, cx, y);
    textSize(14);
    text(steps[i].name, cx, y + 36);
  }
}

// Simple friendly hands with soap bubbles (bubbles grow during the scrub step)
function drawHands() {
  let cx = canvasWidth / 2;
  let cy = 210;
  // palms
  stroke('peru');
  strokeWeight(2);
  fill('wheat');
  ellipse(cx - 34, cy, 70, 100);
  ellipse(cx + 34, cy, 70, 100);
  noStroke();

  // Bubbles: number scales with progress within the scrub step
  let bubbleCount = 6;
  if (isRunning && steps[stepIndex].name === 'Scrub') {
    let prog = (millis() - stepStart) / 1000 / steps[stepIndex].dur;
    bubbleCount = 6 + Math.floor(prog * 24);
  } else if (finished) {
    bubbleCount = 20;
  }
  fill(255, 255, 255, 200);
  stroke('lightskyblue');
  strokeWeight(1);
  randomSeed(42); // stable bubble placement
  for (let i = 0; i < bubbleCount; i++) {
    let bx = cx + random(-55, 55);
    let by = cy + random(-55, 55);
    circle(bx, by, random(6, 16));
  }
  noStroke();
}

// Circular countdown ring for the current step
function drawCountdownRing(remaining) {
  let cx = canvasWidth / 2;
  let cy = 320;
  let r = 34;
  noFill();
  stroke('gainsboro');
  strokeWeight(8);
  circle(cx, cy, r * 2);

  if (isRunning) {
    let frac = constrain(remaining / steps[stepIndex].dur, 0, 1);
    stroke(steps[stepIndex].name === 'Scrub' ? 'darkorange' : 'steelblue');
    strokeWeight(8);
    let a = -HALF_PI;
    arc(cx, cy, r * 2, r * 2, a, a + TWO_PI * frac);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(22);
    text(Math.ceil(remaining), cx, cy);
  } else {
    noStroke();
    fill('gray');
    textAlign(CENTER, CENTER);
    textSize(16);
    text(finished ? 'Done' : '20s', cx, cy);
  }
}

function startScrub() {
  if (isRunning) return;
  isRunning = true;
  finished = false;
  stepIndex = 0;
  stepStart = millis();
}

function resetScrub() {
  isRunning = false;
  finished = false;
  stepIndex = 0;
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
