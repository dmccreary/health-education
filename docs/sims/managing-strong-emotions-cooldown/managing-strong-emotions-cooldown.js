// Cooling Down a Big Feeling - MicroSim (feelings thermometer step-through)
// CANVAS_HEIGHT: 452
// Grade 2, Understand (L2): students explain how a calming strategy lowers a strong
// emotion over time by stepping through a feelings-thermometer scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, backButton;

// level 0-100 (100 = very upset), face state
let steps = [
  { level: 95, face: 'upset', cap: 'Max feels very upset — his tower fell down. The feeling is near the top.' },
  { level: 75, face: 'upset', cap: 'Max stops and takes one slow, deep breath. The feeling starts to come down.' },
  { level: 50, face: 'calming', cap: 'Max takes a few more breaths and counts to five. The feeling keeps cooling.' },
  { level: 25, face: 'calming', cap: 'Max thinks, "I can build it again." The feeling is much lower now.' },
  { level: 8, face: 'calm', cap: 'Max feels calm and ready to try again. A calming strategy lowered the big feeling!' }
];

let step = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next ▶'); nextButton.mousePressed(() => { if (step < steps.length - 1) step++; });
  backButton = createButton('◀ Back'); backButton.mousePressed(() => { if (step > 0) step--; });
  positionControls();
  describe('A feelings thermometer beside a character. Stepping forward shows a calming ' +
    'strategy lowering the emotion from very upset toward calm.', LABEL);
}
function positionControls() { backButton.position(10, drawHeight + 12); nextButton.position(canvasWidth - 80, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(20); text('Cooling Down a Big Feeling', canvasWidth / 2, 8);

  // thermometer (left)
  let tx = margin + 30, tTop = 60, tBot = 300, tw = 34;
  stroke('gray'); strokeWeight(2); fill('white'); rect(tx, tTop, tw, tBot - tTop, 16); circle(tx + tw / 2, tBot + 6, 40);
  let lvl = steps[step].level;
  let fillTop = map(lvl, 0, 100, tBot, tTop);
  noStroke(); let col = lerpColor(color('royalblue'), color('crimson'), lvl / 100);
  fill(col); rect(tx + 4, fillTop, tw - 8, tBot - fillTop); circle(tx + tw / 2, tBot + 6, 32);
  fill('crimson'); textAlign(LEFT, CENTER); textSize(10); text('very upset', tx + tw + 6, tTop + 6);
  fill('royalblue'); text('calm', tx + tw + 6, tBot - 6);

  // character (right)
  let cx = canvasWidth * 0.62, cy = 160;
  drawFace(cx, cy, steps[step].face);

  // step dots
  for (let i = 0; i < steps.length; i++) { fill(i <= step ? 'seagreen' : 'gainsboro'); circle(canvasWidth * 0.62 - (steps.length - 1) * 12 + i * 24, 250, 12); }

  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(14); text(steps[step].cap, canvasWidth * 0.42, 290, canvasWidth * 0.58 - margin, 100);
  fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Step ' + (step + 1) + ' of ' + steps.length, canvasWidth * 0.42, 270);
}
function drawFace(x, y, state) {
  stroke('goldenrod'); strokeWeight(3); fill('lightyellow'); circle(x, y, 90);
  noStroke(); fill('sienna'); circle(x - 18, y - 10, 9); circle(x + 18, y - 10, 9);
  noFill(); stroke('sienna'); strokeWeight(3);
  if (state === 'upset') { arc(x, y + 30, 40, 24, PI + 0.1 * PI, TWO_PI - 0.1 * PI); line(x - 28, y - 24, x - 10, y - 18); line(x + 28, y - 24, x + 10, y - 18); }
  else if (state === 'calming') line(x - 16, y + 16, x + 16, y + 16);
  else arc(x, y + 8, 40, 26, 0.1 * PI, 0.9 * PI);
  noStroke();
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
