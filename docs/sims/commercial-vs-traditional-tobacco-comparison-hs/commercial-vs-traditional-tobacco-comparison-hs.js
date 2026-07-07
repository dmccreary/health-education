// Commercial vs. Traditional Tobacco Comparison Tool (HS) - MicroSim (paired rows + reflection)
// CANVAS_HEIGHT: 512
// Grades 9-12, Evaluate (L5): students evaluate why commercial tobacco addiction and
// traditional/ceremonial tobacco use are distinct across purpose, preparation, frequency,
// and meaning, and justify why public health messaging separates the two.
// Text-only, respectful: no depiction of products, actions, or ceremonial objects.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton;
let justInput;
let resetButton;

let rows = [
  { label: 'Purpose',
    com: 'Manufactured and marketed for profit and repeated use.',
    trad: 'Ceremonial and spiritual — offered in prayer or to mark meaningful events.' },
  { label: 'Preparation',
    com: 'Mass-produced with additives engineered to increase addiction.',
    trad: 'Prepared with care in specific cultural ways, often by hand.' },
  { label: 'Frequency',
    com: 'Used repeatedly, often many times a day, driving dependence.',
    trad: 'Used rarely — only at specific ceremonies or occasions.' },
  { label: 'Meaning',
    com: 'A consumer product with no deeper meaning.',
    trad: 'A sacred practice carrying deep cultural and spiritual meaning.' }
];
let whyText = 'The term "commercial tobacco" exists specifically to target manufactured, ' +
  'addiction-engineered products in public-health messaging — without stigmatizing sacred ' +
  'practice. Conflating the two is factually wrong and disrespects Indigenous tradition.';

let selected = -1;
let showWhy = false;
let rowRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  whyButton = createButton('Why Does Public Health Separate These?');
  whyButton.mousePressed(() => { showWhy = true; selected = -1; });
  justInput = createInput('');
  justInput.parent(document.querySelector('main'));
  justInput.attribute('placeholder', 'In your own words: why is conflating the two inaccurate?');
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showWhy = false; justInput.value(''); });
  positionControls();
  describe('Two columns — commercial and traditional tobacco — with four clickable rows ' +
    '(purpose, preparation, frequency, meaning). Clicking a row compares both side by side. ' +
    'A reflection box invites students to justify why the two should not be conflated.', LABEL);
}

function positionControls() {
  justInput.position(10, drawHeight + 12);
  justInput.size(canvasWidth - 220);
  whyButton.position(10, drawHeight - 2); // sits just above input? no — place in draw area
  whyButton.position(canvasWidth - 190, drawHeight + 12);
  // resetButton placed within the input row's right side
  resetButton.position(canvasWidth - 60, drawHeight + 12);
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

  fill('black');
  textAlign(CENTER, TOP);
  textSize(16);
  text('Commercial vs. Traditional Tobacco (Compare)', canvasWidth / 2, 8);

  let colW = (canvasWidth - margin * 2) / 2;
  noStroke();
  fill('slategray'); rect(margin, 34, colW, 26, 4, 0, 0, 0);
  fill('sienna'); rect(margin + colW, 34, colW, 26, 0, 4, 0, 0);
  fill('white'); textAlign(CENTER, CENTER); textSize(12);
  text('Commercial Tobacco', margin + colW / 2, 47);
  text('Traditional Tobacco', margin + colW + colW / 2, 47);

  rowRects = [];
  let y0 = 64, rh = 38, gap = 5;
  for (let i = 0; i < rows.length; i++) {
    let y = y0 + i * (rh + gap);
    rowRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: rh, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, rowRects[i]);
    strokeWeight(sel ? 2.5 : 1); stroke(sel ? 'black' : 'silver');
    fill(sel ? 'lightslategray' : (hover ? 'gainsboro' : 'lightsteelblue')); rect(margin, y, colW, rh);
    fill(sel ? 'peru' : (hover ? 'antiquewhite' : 'burlywood')); rect(margin + colW, y, colW, rh);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(13);
    text(rows[i].label, margin + canvasWidth / 2 - margin, y + rh / 2);
  }
  cursor(overAnyRow() ? HAND : ARROW);

  // infobox
  let py = y0 + rows.length * (rh + gap) + 4;
  let ph = drawHeight - py - 44;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (showWhy) {
    fill('darkslateblue'); text(whyText, margin + 10, py + 10, canvasWidth - margin * 2 - 20, ph - 20);
  } else if (selected >= 0) {
    fill('slategray'); text('Commercial — ' + rows[selected].com, margin + 10, py + 10, canvasWidth - margin * 2 - 20, 48);
    fill('sienna'); text('Traditional — ' + rows[selected].trad, margin + 10, py + 58, canvasWidth - margin * 2 - 20, 48);
  } else {
    fill('dimgray'); text('Click a row to compare commercial and traditional tobacco use.',
      margin + 10, py + 12, canvasWidth - margin * 2 - 20, 40);
  }
  // reflection prompt label
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11);
  text('Reflection: justify your reasoning in the box below.', margin, drawHeight - 40, canvasWidth - margin * 2, 16);
}

function overAnyRow() {
  for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) { selected = r.i; showWhy = false; return; }
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
