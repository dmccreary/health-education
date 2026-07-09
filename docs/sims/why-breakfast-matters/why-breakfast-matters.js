// Why Breakfast? Cause and Effect - MicroSim (side-by-side comparison)
// CANVAS_HEIGHT: 490
// Grade 1-2, Understand (L2): students explain why breakfast matters by comparing the
// same student's morning with breakfast (energetic, focused) and without (tired,
// distracted). Clicking a scene reveals its caption and animates an energy meter once.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let toggleButton, resetButton;

let scenes = [
  { title: 'With Breakfast', target: 1.0, meterCol: '#43a047',
    caption: 'With breakfast, this student has fuel for their body and brain. They can run, play, and stay focused in class all morning.' },
  { title: 'Without Breakfast', target: 0.3, meterCol: '#e08a2e',
    caption: 'Without breakfast, this student runs low on fuel. They feel tired, and it is harder to focus until lunch.' }
];

let summary = 'Breakfast fuels your body and brain for the whole morning.';

let activeSide = -1;
let viewed = [false, false];
let animProgress = [1, 1];   // 1 = meter resting at its value; <1 = animating
let sceneRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  toggleButton = createButton('Toggle Scene');
  toggleButton.mousePressed(toggleScene);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('Two side-by-side morning scenes of the same student: one with breakfast ' +
    '(energetic, full energy meter) and one without breakfast (tired, low energy ' +
    'meter). Clicking a scene reveals a caption explaining the cause and effect.', LABEL);
}

function positionControls() {
  toggleButton.position(10, drawHeight + 10);
  resetButton.position(130, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#eef6ff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Why Breakfast? Cause and Effect', canvasWidth / 2, 8);

  // advance meter animations
  for (let i = 0; i < 2; i++) {
    if (animProgress[i] < 1) animProgress[i] = min(1, animProgress[i] + 0.05);
  }

  // two scenes
  sceneRects = [];
  let gap = 16;
  let sceneW = (canvasWidth - 2 * margin - gap) / 2;
  let sceneTop = 80, sceneH = 216;
  for (let i = 0; i < 2; i++) {
    let x = margin + i * (sceneW + gap);
    sceneRects.push({ x: x, y: sceneTop, w: sceneW, h: sceneH, i: i });
    drawScene(i, x, sceneTop, sceneW, sceneH);
    drawMeter(i, x, 44, sceneW);
  }
  cursor(overAnyScene() ? HAND : ARROW);

  drawCaption(sceneTop + sceneH + 12);
}

function drawScene(i, x, y, w, h) {
  let sc = scenes[i];
  let active = activeSide === i;

  // scene panel
  strokeWeight(active ? 4 : 1.5);
  stroke(active ? 'goldenrod' : 'cadetblue');
  fill(i === 0 ? '#fbfff4' : '#fff8ef');
  rect(x, y, w, h, 10);
  noStroke();

  // title
  fill('#333');
  textAlign(CENTER, TOP);
  textSize(15);
  text(sc.title, x, y + 8, w, 20);

  let cx = x + w / 2;
  let cy = y + h * 0.55;

  if (i === 0) {
    // sun for the bright, energetic morning
    fill('#ffd54f');
    circle(x + w - 24, y + 34, 26);
    drawStudent(cx, cy, true);
  } else {
    drawStudent(cx, cy, false);
    // small "zzz" to suggest tiredness (not illness)
    fill('#9aa0a6');
    textAlign(LEFT, CENTER);
    textSize(13);
    text('z', cx + 24, cy - 34);
    textSize(16);
    text('z', cx + 30, cy - 42);
  }
}

function drawStudent(cx, cy, energetic) {
  push();
  // head
  stroke('#c98a52');
  strokeWeight(1);
  fill('#f4c592');
  circle(cx, cy - 40, 34);
  // body
  noStroke();
  fill(energetic ? '#4fa3e0' : '#8aa1b0');
  rect(cx - 16, cy - 24, 32, 42, 8);

  // arms
  stroke(energetic ? '#4fa3e0' : '#8aa1b0');
  strokeWeight(8);
  strokeCap(ROUND);
  if (energetic) {
    // arms raised, active
    line(cx - 14, cy - 16, cx - 30, cy - 34);
    line(cx + 14, cy - 16, cx + 30, cy - 34);
    // legs mid-stride
    stroke('#33475b');
    line(cx - 8, cy + 18, cx - 18, cy + 40);
    line(cx + 8, cy + 18, cx + 16, cy + 40);
  } else {
    // arms down, resting
    line(cx - 14, cy - 14, cx - 20, cy + 8);
    line(cx + 14, cy - 14, cx + 20, cy + 8);
    stroke('#33475b');
    line(cx - 8, cy + 18, cx - 10, cy + 40);
    line(cx + 8, cy + 18, cx + 10, cy + 40);
  }

  // face
  noStroke();
  fill('black');
  if (energetic) {
    circle(cx - 8, cy - 44, 4);
    circle(cx + 8, cy - 44, 4);
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(cx, cy - 36, 16, 12, 0, PI);       // smile
  } else {
    // droopy, tired eyes and flat mouth
    stroke('black');
    strokeWeight(2);
    noFill();
    arc(cx - 8, cy - 42, 8, 6, PI, TWO_PI);
    arc(cx + 8, cy - 42, 8, 6, PI, TWO_PI);
    line(cx - 7, cy - 32, cx + 7, cy - 32);   // flat mouth
  }
  pop();
}

function drawMeter(i, x, y, w) {
  let sc = scenes[i];
  let shown = lerp(0, sc.target, easeAnim(i));
  let mw = w * 0.72, mh = 16;
  let mx = x + (w - mw) / 2;

  // label
  noStroke();
  fill('#555');
  textAlign(CENTER, BOTTOM);
  textSize(11);
  text('Energy', mx + mw / 2, y - 2);

  // track
  stroke('#bbb');
  strokeWeight(1.5);
  fill('#eceff1');
  rect(mx, y, mw, mh, 8);
  // fill
  noStroke();
  fill(sc.meterCol);
  if (shown > 0.01) rect(mx, y, mw * shown, mh, 8);
  // battery nub
  fill('#bbb');
  rect(mx + mw, y + mh * 0.25, 4, mh * 0.5, 2);
}

function easeAnim(i) {
  // when resting, animProgress = 1 -> full value; while animating, ease in
  let p = animProgress[i];
  return p * p * (3 - 2 * p); // smoothstep
}

function drawCaption(cy) {
  let ch = drawHeight - cy - margin;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, cy, canvasWidth - 2 * margin, ch, 8);
  noStroke();

  let bothViewed = viewed[0] && viewed[1];
  textAlign(LEFT, TOP);
  if (activeSide < 0) {
    fill('dimgray');
    textSize(14);
    text('Click a scene to see what happens, or press "Toggle Scene" to compare both.',
      margin + 12, cy + 12, canvasWidth - 2 * margin - 24, ch - 24);
  } else {
    fill(activeSide === 0 ? '#2e7d32' : '#b5651d');
    textSize(13.5);
    let boxH = bothViewed ? ch - 46 : ch - 24;
    text(scenes[activeSide].caption, margin + 12, cy + 10, canvasWidth - 2 * margin - 24, boxH);
    if (bothViewed) {
      fill('#1a3a6c');
      textSize(14);
      textAlign(CENTER, BOTTOM);
      text(summary, margin + 12, cy + ch - 32, canvasWidth - 2 * margin - 24, 28);
    }
  }
}

function selectSide(i) {
  activeSide = i;
  viewed[i] = true;
  animProgress[i] = 0;   // replay the fill/drain flourish once
}

function overAnyScene() {
  for (let r of sceneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let r of sceneRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selectSide(r.i);
      return;
    }
  }
}

function toggleScene() {
  selectSide(activeSide === 0 ? 1 : 0);
}

function resetAll() {
  activeSide = -1;
  viewed = [false, false];
  animProgress = [1, 1];
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
