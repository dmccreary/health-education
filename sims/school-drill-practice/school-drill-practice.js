// School Drill Practice - MicroSim (step-through fire drill sequence)
// CANVAS_HEIGHT: 480
// Kindergarten, Apply (L3): students practice the three steps of a fire drill by
// advancing a calm classroom scene one step at a time. Tone stays plainly sincere.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Stage 0 = alarm, 1 = line up, 2 = walk outside, 3 = done (after step 3)
let stage = 0;

let steps = [
  {
    icon: '🔔',
    name: 'Alarm',
    caption: "The alarm sounds. It's time for a fire drill!"
  },
  {
    icon: '🧍',
    name: 'Line Up',
    caption: 'Everyone lines up quietly and listens to the teacher.'
  },
  {
    icon: '🚪',
    name: 'Go Outside',
    caption: 'The class walks calmly to the safe outdoor spot.'
  }
];

let doneCaption = 'Great job practicing! Now everyone knows just what to do.';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Step');
  nextButton.mousePressed(nextStep);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetDrill);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A calm classroom fire-drill scene with a teacher and children. Press Next ' +
    'Step to move through three steps in order: the alarm sounds, everyone lines up ' +
    'quietly, and the class walks to the safe outdoor spot.', LABEL);
}

function positionControls() {
  let by = drawHeight + 14;
  nextButton.position(margin, by);
  nextButton.style('font-size', '18px');
  nextButton.style('padding', '6px 16px');
  resetButton.position(margin + 150, by);
  resetButton.style('font-size', '18px');
  resetButton.style('padding', '6px 16px');
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
  textSize(24);
  text('Fire Drill Practice', canvasWidth / 2, 10);

  // Layout bands
  let sceneY = 46;
  let sceneH = 214;
  let iconY = sceneY + sceneH + 10;   // 270
  let iconH = 58;
  let capY = iconY + iconH + 8;        // 336

  drawScene(margin, sceneY, canvasWidth - margin * 2, sceneH);
  drawStepIcons(margin, iconY, canvasWidth - margin * 2, iconH);
  drawCaption(margin, capY, canvasWidth - margin * 2, drawHeight - capY - 8);

  cursor(ARROW);
}

// --- Classroom scene, changes per stage ---
function drawScene(x, y, w, h) {
  push();
  // Room walls
  fill('lavender');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, h, 10);

  // Floor
  noStroke();
  fill('wheat');
  rect(x, y + h - 42, w, 42, 0, 0, 10, 10);

  let cx = x + w / 2;
  let floorY = y + h - 42;

  if (stage === 0) {
    // Alarm sounds: red alarm light on the wall glowing, children at desks
    // Wall alarm
    let ax = x + w - 46;
    let ay = y + 34;
    let glow = 0.5 + 0.5 * Math.sin(frameCount * 0.15);
    noStroke();
    fill(255, 120, 100, 90 + 120 * glow);
    circle(ax, ay, 46);
    fill('firebrick');
    stroke('darkred');
    strokeWeight(2);
    rect(ax - 16, ay - 11, 32, 22, 5);
    noStroke();
    fill(255, 230, 180);
    textAlign(CENTER, CENTER);
    textSize(15);
    text('🔔', ax, ay);

    // Two children seated at small desks
    drawChild(cx - 55, floorY - 6, 'cornflowerblue');
    drawDesk(cx - 55, floorY);
    drawChild(cx + 15, floorY - 6, 'mediumpurple');
    drawDesk(cx + 15, floorY);
    // Teacher standing
    drawTeacher(x + 48, floorY);
  } else if (stage === 1) {
    // Line up quietly: children in a neat row facing the teacher
    drawTeacher(x + 48, floorY);
    let startX = cx - 30;
    let cols = ['cornflowerblue', 'mediumpurple', 'seagreen'];
    for (let i = 0; i < cols.length; i++) {
      drawChild(startX + i * 42, floorY, cols[i]);
    }
    // quiet indicator
    noStroke();
    fill('steelblue');
    textAlign(CENTER, CENTER);
    textSize(20);
    text('🤫', x + w - 44, y + 40);
  } else {
    // Walk to safe outdoor spot: door open, children walking out, sun/tree outside
    // Open door on the right wall leading outside
    let doorX = x + w - 70;
    fill('skyblue');
    noStroke();
    rect(doorX, y + 12, 60, h - 54, 6);
    // sun
    fill('gold');
    circle(doorX + 44, y + 34, 26);
    // tree / safe spot
    fill('saddlebrown');
    rect(doorX + 12, y + h - 90, 8, 40);
    fill('forestgreen');
    circle(doorX + 16, y + h - 96, 34);
    // safe-spot sign
    noStroke();
    fill('seagreen');
    rect(doorX + 2, y + 18, 56, 20, 4);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(11);
    text('SAFE SPOT', doorX + 30, y + 28);

    // Teacher near the door guiding
    drawTeacher(doorX - 34, floorY);
    // Children walking calmly toward the door
    let cols = ['cornflowerblue', 'mediumpurple', 'seagreen'];
    for (let i = 0; i < cols.length; i++) {
      drawChild(x + 46 + i * 40, floorY, cols[i]);
    }
  }
  pop();
}

function drawChild(x, footY, col) {
  push();
  stroke(col);
  strokeWeight(3);
  fill(col);
  let headY = footY - 34;
  circle(x, headY, 15);
  noFill();
  line(x, headY + 8, x, footY - 12);       // body
  line(x, headY + 12, x - 8, headY + 20);  // arms
  line(x, headY + 12, x + 8, headY + 20);
  line(x, footY - 12, x - 7, footY);       // legs
  line(x, footY - 12, x + 7, footY);
  pop();
}

function drawTeacher(x, footY) {
  push();
  let col = 'saddlebrown';
  stroke(col);
  strokeWeight(3);
  fill(col);
  let headY = footY - 46;
  circle(x, headY, 19);
  noFill();
  line(x, headY + 10, x, footY - 16);        // body
  line(x, headY + 14, x - 11, headY + 24);   // arms
  line(x, headY + 14, x + 11, headY + 24);
  line(x, footY - 16, x - 9, footY);         // legs
  line(x, footY - 16, x + 9, footY);
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(11);
  text('Teacher', x, footY + 2);
  pop();
}

function drawDesk(x, floorY) {
  push();
  noStroke();
  fill('burlywood');
  rect(x - 16, floorY - 12, 32, 6, 2);
  fill('peru');
  rect(x - 14, floorY - 6, 4, 8);
  rect(x + 10, floorY - 6, 4, 8);
  pop();
}

// --- Three step icons that light as the drill advances ---
function drawStepIcons(x, y, w, h) {
  let n = steps.length;
  let gap = 10;
  let cw = (w - gap * (n - 1)) / n;
  for (let i = 0; i < n; i++) {
    let ix = x + i * (cw + gap);
    let completed = stage > i;
    push();
    strokeWeight(completed ? 3 : (stage === i ? 3 : 1.5));
    stroke(completed ? 'seagreen' : (stage === i ? 'goldenrod' : 'silver'));
    fill(completed ? 'honeydew' : (stage === i ? 'lightyellow' : 'white'));
    rect(ix, y, cw, h, 8);
    noStroke();
    // icon
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(22);
    text(steps[i].icon, ix + cw / 2, y + h / 2 - 8);
    // label
    textSize(12);
    fill(completed ? 'seagreen' : (stage === i ? 'goldenrod' : 'gray'));
    text((completed ? '✓ ' : (i + 1) + '. ') + steps[i].name,
      ix + 3, y + h - 16, cw - 6, 14);
    pop();
  }
}

// --- Caption naming the current step ---
function drawCaption(x, y, w, h) {
  push();
  let done = stage >= steps.length;
  let cap = done ? doneCaption : steps[stage].caption;
  // caption panel
  strokeWeight(2);
  stroke(done ? 'seagreen' : 'lightsteelblue');
  fill(done ? 'honeydew' : 'white');
  rect(x, y, w, h, 8);
  noStroke();
  fill(done ? 'seagreen' : 'midnightblue');
  textAlign(CENTER, CENTER);
  textSize(19);
  text(cap, x + 12, y + 6, w - 24, h - 12);
  pop();
}

function nextStep() {
  if (stage < steps.length) {
    stage++;
  }
}

function resetDrill() {
  stage = 0;
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
