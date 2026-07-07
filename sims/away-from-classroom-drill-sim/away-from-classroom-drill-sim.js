// Following the Drill Away From Your Classroom - MicroSim (ordered sequence)
// CANVAS_HEIGHT: 497
// Grade 2, Apply (L3): students practice the correct four-step drill sequence in
// different school locations. Tone stays plainly sincere and reassuring.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let startButton;
let nextButton;
let resetButton;

let locations = ['Hallway', 'Cafeteria', 'Playground', 'Bathroom Hallway'];
let actions = [
  { label: 'Stop and Listen', e: 'First, stop what you are doing and listen for directions.' },
  { label: 'Find the Adult in Charge', e: 'Look for the nearest adult in charge and go toward them.' },
  { label: 'Follow Directions', e: 'Do exactly what that adult tells you to do.' },
  { label: 'Move Calmly', e: 'Move calmly and quietly — no running or pushing.' }
];

let locIndex = 0;
let drillActive = false;
let nextStep = 0;      // index of next expected action
let completed = false;
let message = '';
let signalPulse = 0;
let actionRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  startButton = createButton('Start Drill');
  startButton.mousePressed(startDrill);
  nextButton = createButton('Next Location');
  nextButton.mousePressed(nextLocation);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A school-location scene with a student and an adult in charge and a drill ' +
    'signal. After starting the drill, students click four action buttons in the correct ' +
    'order — stop and listen, find the adult, follow directions, move calmly.', LABEL);
}

function positionControls() {
  startButton.position(10, drawHeight + 14);
  nextButton.position(110, drawHeight + 14);
  resetButton.position(240, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  if (drillActive && !completed) signalPulse += 0.15;

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Following the Drill Away From Class', canvasWidth / 2, 8);

  // location banner
  fill('lightsteelblue');
  rect(margin, 38, canvasWidth - margin * 2, 40, 8);
  noStroke();
  fill('midnightblue');
  textAlign(CENTER, CENTER);
  textSize(17);
  text('Location: ' + locations[locIndex] + '  (' + (locIndex + 1) + ' of 4)',
    margin, 38, canvasWidth - margin * 2, 40);

  // scene: student + adult + signal
  let sceneY = 90, sceneH = 120;
  fill('honeydew'); stroke('silver'); strokeWeight(1);
  rect(margin, sceneY, canvasWidth - margin * 2, sceneH, 8);
  drawPerson(margin + 60, sceneY + sceneH - 20, 'cornflowerblue', 'You');
  drawPerson(canvasWidth - margin - 70, sceneY + sceneH - 20, 'mediumpurple', 'Adult');
  // signal icon
  let sigOn = drillActive;
  let sx = canvasWidth / 2, sy = sceneY + 34;
  strokeWeight(2); stroke('gray');
  fill(sigOn ? color(255, 140, 0, 150 + 100 * (0.5 + 0.5 * Math.sin(signalPulse))) : 'lightgray');
  circle(sx, sy, 34);
  noStroke(); fill(sigOn ? 'white' : 'gray');
  textAlign(CENTER, CENTER); textSize(16);
  text('🔔', sx, sy);

  // action buttons (clicked in order)
  actionRects = [];
  let ay0 = sceneY + sceneH + 12, ah = 40, gap = 8;
  let aw = (canvasWidth - margin * 2 - gap) / 2;
  for (let i = 0; i < 4; i++) {
    let c = i % 2, r = Math.floor(i / 2);
    let x = margin + c * (aw + gap);
    let y = ay0 + r * (ah + gap);
    actionRects.push({ x: x, y: y, w: aw, h: ah, i: i });
    let done = i < nextStep;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: aw, h: ah });
    strokeWeight(done ? 2.5 : 1.5);
    stroke(done ? 'seagreen' : 'steelblue');
    fill(done ? 'palegreen' : (drillActive && hover ? 'lightyellow' : 'white'));
    rect(x, y, aw, ah, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(13);
    text((done ? '✓ ' : (i + 1) + '. ') + actions[i].label, x + 4, y, aw - 8, ah);
  }
  cursor(drillActive && !completed && overAnyAction() ? HAND : ARROW);

  // infobox
  let iy = ay0 + 2 * (ah + gap) + 4;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(13);
  fill(completed ? 'seagreen' : 'black');
  let msg = message;
  if (!drillActive) msg = 'Press Start Drill to hear the signal for the ' + locations[locIndex] + '.';
  text(msg, margin, iy, canvasWidth - margin * 2, drawHeight - iy - 6);
}

function drawPerson(x, y, col, label) {
  push();
  stroke(col); strokeWeight(3); fill(col);
  circle(x, y - 34, 18);
  noFill();
  line(x, y - 25, x, y - 6);
  line(x, y - 20, x - 10, y - 12);
  line(x, y - 20, x + 10, y - 12);
  line(x, y - 6, x - 8, y + 8);
  line(x, y - 6, x + 8, y + 8);
  noStroke(); fill('black');
  textAlign(CENTER, TOP); textSize(12);
  text(label, x, y + 10);
  pop();
}

function overAnyAction() {
  for (let a of actionRects) if (pointInRect(mouseX, mouseY, a)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function startDrill() {
  drillActive = true;
  completed = false;
  nextStep = 0;
  message = 'The drill signal just started. What do you do first?';
}

function mousePressed() {
  if (!drillActive || completed) return;
  for (let a of actionRects) {
    if (pointInRect(mouseX, mouseY, a)) {
      if (a.i === nextStep) {
        message = actions[a.i].e;
        nextStep++;
        if (nextStep >= 4) {
          completed = true;
          message = 'Great job! You followed all four steps calmly. The same four steps work in any location.';
        }
      } else {
        message = 'Almost — the next step is "' + actions[nextStep].label + '". Try that one.';
      }
      return;
    }
  }
}

function nextLocation() {
  locIndex = (locIndex + 1) % locations.length;
  drillActive = false; completed = false; nextStep = 0; message = '';
}
function resetAll() {
  locIndex = 0; drillActive = false; completed = false; nextStep = 0; message = '';
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
