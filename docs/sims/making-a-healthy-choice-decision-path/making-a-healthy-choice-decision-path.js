// Making a Healthy Choice Decision Path - MicroSim (step-through)
// CANVAS_HEIGHT: 452
// Grade 1, Understand (L2): students explain the steps of making a health decision —
// notice the influence, think about the choice, ask for help if needed.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, backButton;

let steps = [
  { title: 'Notice the influence', scene: 'offer', cap: 'A friend offers you a sugary snack at lunch. Notice: someone is influencing your choice.' },
  { title: 'Think about the choice', scene: 'think', cap: 'Ask yourself: is this a healthy choice for my body right now?' },
  { title: 'Decide', scene: 'decide', cap: 'You decide: "I\'ll have my fruit first, thank you." You made a healthy choice!' },
  { title: 'Ask for help if needed', scene: 'help', cap: 'If a choice feels tricky, you can always ask a trusted adult for help.' }
];

let step = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Step ▶'); nextButton.mousePressed(() => { if (step < steps.length - 1) step++; });
  backButton = createButton('◀ Previous'); backButton.mousePressed(() => { if (step > 0) step--; });
  positionControls();
  describe('A four-step walkthrough of making a health decision — notice the influence, ' +
    'think about the choice, decide, and ask for help if needed.', LABEL);
}
function positionControls() { backButton.position(10, drawHeight + 12); nextButton.position(canvasWidth - 110, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(19); text('Making a Healthy Choice', canvasWidth / 2, 8);

  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(13); text('Step ' + (step + 1) + ' of ' + steps.length + ': ' + steps[step].title, canvasWidth / 2, 38);
  for (let i = 0; i < steps.length; i++) { fill(i <= step ? 'seagreen' : 'gainsboro'); circle(canvasWidth / 2 - (steps.length - 1) * 14 + i * 28, 66, 14); }

  // scene
  let sy = 84, sh = 200; fill('honeydew'); stroke('silver'); strokeWeight(1); rect(margin, sy, canvasWidth - margin * 2, sh, 8);
  drawScene(steps[step].scene, canvasWidth / 2, sy + sh / 2);

  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(14); text(steps[step].cap, margin, 294, canvasWidth - margin * 2, 96);
}
function drawScene(type, x, y) {
  push();
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(x - 30, y, 44);
  noStroke(); fill('sienna'); circle(x - 38, y - 6, 5); circle(x - 22, y - 6, 5);
  if (type === 'offer') { noStroke(); fill('tomato'); circle(x + 40, y, 20); fill('black'); textAlign(CENTER, CENTER); textSize(10); text('snack', x + 40, y + 30); }
  else if (type === 'think') { noStroke(); fill('white'); stroke('gray'); ellipse(x + 40, y - 20, 60, 34); noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(9); text('healthy?', x + 40, y - 20); }
  else if (type === 'decide') { noFill(); stroke('seagreen'); strokeWeight(4); arc(x - 30, y + 6, 22, 14, 0.1 * PI, 0.9 * PI); noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(24); text('✓', x + 40, y); }
  else { noStroke(); fill('mediumpurple'); circle(x + 40, y - 6, 20); rect(x + 32, y + 4, 16, 24, 4); fill('black'); textAlign(CENTER, TOP); textSize(9); text('adult', x + 40, y + 30); }
  pop();
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
