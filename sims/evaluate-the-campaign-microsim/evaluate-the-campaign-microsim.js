// Evaluate the Campaign - MicroSim (critique a campaign against criteria)
// CANVAS_HEIGHT: 502
// Grades 9-12, Evaluate (L5): students critique fictional mental-health awareness
// campaigns and assess whether each likely reduces or reinforces stigma, using four
// criteria. Text only, no crisis content.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let reducesButton;
let reinforcesButton;
let compareButton;
let nextButton;

let criteria = ['Lived experience', 'Concrete next step', 'Non-sensationalized language', 'Measured outcomes'];

let campaigns = [
  { d: "Shares a real person's recovery story and lists a hotline and one first step to get help.", met: [0, 1, 2], reduces: true,
    m: 'Strong: lived experience, a concrete next step, and calm language reduce stigma. Adding measured outcomes would make it even stronger.' },
  { d: "An ad uses dramatic music and scary images, calls people 'crazy,' and offers no resources.", met: [], reduces: false,
    m: 'Weak: sensational language and no next step reinforce stigma.' },
  { d: 'A poster gives treatment-success statistics and a clear step to talk to a counselor, in calm language.', met: [1, 2, 3], reduces: true,
    m: 'Strong on a concrete step, calm language, and measured outcomes; adding lived experience would help.' },
  { d: 'A viral post jokes about anxiety as a quirky personality trait, minimizing it.', met: [], reduces: false,
    m: 'Minimizing a real condition as a quirk reinforces stigma.' },
  { d: 'A video features people with lived experience and avoids sensational language, but gives no next step or data.', met: [0, 2], reduces: true,
    m: 'Good lived experience and calm tone reduce stigma; a concrete step and outcomes would strengthen it.' }
];

let idx = 0;
let rating = '';           // 'reduces' / 'reinforces'
let userCriteria = [false, false, false, false];
let showModel = false;
let evaluated = 0;
let critRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  reducesButton = createButton('Likely Reduces');
  reducesButton.mousePressed(() => { if (!rating) { rating = 'reduces'; evaluated++; } });
  reinforcesButton = createButton('Likely Reinforces');
  reinforcesButton.mousePressed(() => { if (!rating) { rating = 'reinforces'; evaluated++; } });
  compareButton = createButton('Compare to Model');
  compareButton.mousePressed(() => { showModel = true; });
  nextButton = createButton('Next');
  nextButton.mousePressed(next);
  positionControls();
  describe('A fictional awareness-campaign description with four evaluation criteria to ' +
    'check off and a rating of whether it likely reduces or reinforces stigma. Compare to ' +
    'Model reveals an expert assessment.', LABEL);
}

function positionControls() {
  reducesButton.position(10, drawHeight + 14);
  reinforcesButton.position(115, drawHeight + 14);
  compareButton.position(235, drawHeight + 14);
  nextButton.position(canvasWidth - 50, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Evaluate the Campaign', canvasWidth / 2, 6);

  let c = campaigns[idx];
  // description
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 32, canvasWidth - margin * 2, 84, 8);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Campaign ' + (idx + 1) + ' of ' + campaigns.length + ':', margin + 10, 38);
  fill('black'); textSize(13); text(c.d, margin + 10, 56, canvasWidth - margin * 2 - 20, 56);

  // criteria checkboxes
  critRects = [];
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text('Which criteria does it meet?', margin, 124);
  let y0 = 142, ch = 26;
  for (let i = 0; i < 4; i++) {
    let y = y0 + i * (ch + 4);
    critRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let checked = userCriteria[i];
    let actuallyMet = c.met.includes(i);
    strokeWeight(1.5); stroke('slateblue');
    fill(showModel ? (actuallyMet ? 'honeydew' : 'white') : 'white');
    rect(margin, y, 20, 20, 4);
    if (checked) { noStroke(); fill('slateblue'); textAlign(CENTER, CENTER); textSize(14); text('✓', margin + 10, y + 9); }
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(criteria[i], margin + 28, y + 10);
    if (showModel) { fill(actuallyMet ? 'seagreen' : 'gray'); textAlign(RIGHT, CENTER); textSize(10); text(actuallyMet ? 'met ✓' : 'not met', canvasWidth - margin - 6, y + 10); }
  }
  cursor(overCrit() ? HAND : ARROW);

  // rating + model
  let fy = y0 + 4 * (ch + 4) + 6;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 8, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (!rating) { fill('dimgray'); text('Check the criteria, then rate: does it reduce or reinforce stigma?', margin + 8, fy + 8, canvasWidth - margin * 2 - 16, 40); }
  else if (!showModel) {
    fill('navy'); text('Your rating: likely ' + rating + ' stigma. Press Compare to Model.', margin + 8, fy + 8, canvasWidth - margin * 2 - 16, 40);
  } else {
    let correct = (rating === 'reduces') === c.reduces;
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    text('Model: likely ' + (c.reduces ? 'reduces' : 'reinforces') + ' stigma. ' + c.m, margin + 8, fy + 8, canvasWidth - margin * 2 - 16, 80);
  }
  fill('navy'); textAlign(RIGHT, BOTTOM); textSize(11); text('Evaluated: ' + evaluated, canvasWidth - margin - 6, drawHeight - 12);
}

function overCrit() { for (let r of critRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of critRects) if (pointInRect(mouseX, mouseY, r)) { userCriteria[r.i] = !userCriteria[r.i]; return; }
}

function next() {
  idx = (idx + 1) % campaigns.length;
  rating = ''; userCriteria = [false, false, false, false]; showModel = false;
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
