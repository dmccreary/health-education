// The Ripple Effect - MicroSim (concentric-circle click-to-reveal)
// CANVAS_HEIGHT: 490
// Grade 3, Understand (L2): students explain how teasing, exclusion, or bullying
// ripples outward from the person targeted to bystanders to the whole community.
// Calm, factual tone; every path ends with a reminder that trusted adults help.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let helpButton;
let resetButton;

let rings = [
  { key: 'center', label: 'Person Targeted', color: 'lightskyblue',
    effect: 'The person targeted may feel sadness, fear, loneliness, trouble sleeping, or even stomachaches.' },
  { key: 'middle', label: 'Bystanders', color: 'mediumaquamarine',
    effect: 'Bystanders may feel unsafe, guilty, or unsure about what to do.' },
  { key: 'outer', label: 'Whole Classroom', color: 'darkseagreen',
    effect: 'The whole community can have lower trust and less willingness to speak up.' }
];
let helpText = 'What helps: telling a trusted adult, including others, and treating everyone with ' +
  'kindness and respect. These actions stop the ripple.';

let selected = -1;   // 0 center, 1 middle, 2 outer
let showHelp = false;
let cx, cy, rOuter, rMid, rCenter;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  helpButton = createButton('What Helps');
  helpButton.mousePressed(() => { showHelp = true; selected = -1; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showHelp = false; });
  positionControls();
  describe('Three calm concentric circles — person targeted, bystanders, and whole ' +
    'classroom. Clicking each ring reveals how the effects of bullying ripple outward. ' +
    'A What Helps button shows supportive actions.', LABEL);
}

function positionControls() {
  helpButton.position(10, drawHeight + 10);
  resetButton.position(120, drawHeight + 10);
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

  fill('navy');
  textAlign(CENTER, TOP);
  textSize(20);
  text('The Ripple Effect', canvasWidth / 2, 8);

  cx = canvasWidth * 0.34; cy = 230; rOuter = 150; rMid = 108; rCenter = 60;

  // outer -> middle -> center
  drawRing(2, rOuter);
  drawRing(1, rMid);
  drawRing(0, rCenter);

  drawPanel();
}

function drawRing(idx, r) {
  let sel = selected === idx;
  strokeWeight(sel ? 4 : 2);
  stroke(sel ? 'darkorange' : 'white');
  fill(rings[idx].color);
  circle(cx, cy, r * 2);
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(12);
  // label near the top edge of each ring band
  let ly = idx === 0 ? cy - 8 : cy - r + 8;
  text(rings[idx].label, cx - r, ly, r * 2, 20);
}

function drawPanel() {
  let px = canvasWidth * 0.62, pw = canvasWidth - px - margin, py = 44, ph = drawHeight - py - 12;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(px, py, pw, ph, 10);
  noStroke();
  textAlign(LEFT, TOP); textSize(14);
  if (showHelp) {
    fill('darkgoldenrod'); text('What Helps', px + 10, py + 10);
    fill('black'); textSize(13);
    text(helpText, px + 10, py + 34, pw - 20, ph - 80);
  } else if (selected >= 0) {
    fill('navy'); text(rings[selected].label, px + 10, py + 10);
    fill('black'); textSize(13);
    text(rings[selected].effect, px + 10, py + 34, pw - 20, ph - 80);
  } else {
    fill('dimgray'); textSize(13);
    text('Click a circle to see how the effects ripple outward — from one person to the whole class.',
      px + 10, py + 12, pw - 20, ph - 60);
  }
  // persistent reminder
  fill('seagreen'); textAlign(LEFT, BOTTOM); textSize(12);
  text('A trusted adult can always help.', px + 10, py + ph - 10, pw - 20, 40);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, cx, cy);
  if (d <= rCenter) { selected = 0; showHelp = false; }
  else if (d <= rMid) { selected = 1; showHelp = false; }
  else if (d <= rOuter) { selected = 2; showHelp = false; }
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
