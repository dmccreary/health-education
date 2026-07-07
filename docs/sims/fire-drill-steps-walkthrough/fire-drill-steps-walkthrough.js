// Fire Drill Steps Walkthrough - MicroSim (step-through in order)
// CANVAS_HEIGHT: 452
// Grade 1, Understand (L2): students explain the steps of a school fire drill in order
// using a step-through walkthrough with a classroom scene at each stage.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let prevButton;

let steps = [
  { scene: 'alarm', cap: 'The fire alarm rings. Stop what you are doing and listen.' },
  { scene: 'lineup', cap: 'Line up calmly and quietly at the classroom door.' },
  { scene: 'lead', cap: 'Follow your teacher out of the classroom.' },
  { scene: 'walk', cap: 'Walk to the safe spot outside — no running.' },
  { scene: 'check', cap: 'Your teacher checks that everyone is safe.' }
];

let step = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Step ▶');
  nextButton.mousePressed(() => { if (step < steps.length - 1) step++; });
  prevButton = createButton('◀ Previous Step');
  prevButton.mousePressed(() => { if (step > 0) step--; });
  positionControls();
  describe('A five-step fire-drill walkthrough with a classroom scene at each stage — ' +
    'alarm, line up, follow the teacher, walk to the safe spot, and teacher checks everyone.', LABEL);
}

function positionControls() {
  prevButton.position(10, drawHeight + 12);
  nextButton.position(canvasWidth - 110, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Fire Drill Steps', canvasWidth / 2, 8);

  // step counter + progress dots
  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(14);
  text('Step ' + (step + 1) + ' of ' + steps.length, canvasWidth / 2, 38);
  for (let i = 0; i < steps.length; i++) {
    fill(i <= step ? 'seagreen' : 'gainsboro');
    circle(canvasWidth / 2 - (steps.length - 1) * 12 + i * 24, 66, 14);
  }

  // scene
  let sx = margin, sy = 84, sw = canvasWidth - margin * 2, sh = 220;
  fill('honeydew'); stroke('silver'); strokeWeight(1); rect(sx, sy, sw, sh, 8);
  drawScene(steps[step].scene, sx + sw / 2, sy + sh / 2, sw);

  // caption
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(15);
  text(steps[step].cap, margin, 314, canvasWidth - margin * 2, 76);
}

function drawScene(type, cx, cy, sw) {
  push();
  if (type === 'alarm') {
    // alarm bell + sound waves
    noStroke(); fill('red'); arc(cx, cy - 10, 40, 40, PI, TWO_PI); rect(cx - 4, cy + 8, 8, 6);
    noFill(); stroke('orangered'); strokeWeight(3);
    for (let i = 1; i <= 3; i++) { arc(cx - 40, cy - 20, i * 20, i * 20, -0.4 * PI, 0.4 * PI); arc(cx + 40, cy - 20, i * 20, i * 20, 0.6 * PI, 1.4 * PI); }
  } else if (type === 'lineup') {
    drawKidRow(cx - 60, cy + 20, 4);
    noStroke(); fill('saddlebrown'); rect(cx + 70, cy - 40, 14, 90); // door
  } else if (type === 'lead') {
    drawKidRow(cx - 40, cy + 20, 4);
    noStroke(); fill('mediumpurple'); circle(cx + 70, cy - 6, 20); rect(cx + 62, cy + 6, 16, 34, 4); // teacher leading
  } else if (type === 'walk') {
    noStroke(); fill('yellowgreen'); rect(cx - sw / 2 + 10, cy + 40, sw - 20, 14); // grass
    drawKidRow(cx - 60, cy + 20, 5);
    fill('gold'); noStroke(); circle(cx + 90, cy - 50, 30); // sun
  } else {
    drawKidRow(cx - 50, cy + 20, 5);
    noStroke(); fill('mediumpurple'); circle(cx + 80, cy - 10, 20); rect(cx + 72, cy + 2, 16, 34, 4);
    fill('seagreen'); textAlign(CENTER, CENTER); textSize(22); text('✓', cx + 80, cy - 40);
  }
  pop();
}

function drawKidRow(x, y, n) {
  for (let i = 0; i < n; i++) {
    noStroke(); fill('plum'); circle(x + i * 26, y - 10, 16); rect(x + i * 26 - 6, y, 12, 26, 3);
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
