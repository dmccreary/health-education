// Commercial vs. Traditional Tobacco Comparison - MicroSim (paired-row comparison)
// CANVAS_HEIGHT: 490
// Grades 6-8, Analyze (L4): students differentiate commercial tobacco addiction from
// traditional/ceremonial tobacco use across purpose, preparation, frequency, and meaning.
// Text-only and respectful: no depiction of products, actions, or ceremonial objects.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton;
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
let whyText = 'Public health uses the term "commercial tobacco" specifically to name manufactured, ' +
  'addiction-driven products without casting judgment on sacred cultural practice. Treating the two ' +
  'as the same thing is inaccurate and disrespectful.';

let selected = -1;
let showWhy = false;
let rowRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  whyButton = createButton('Why This Distinction Matters');
  whyButton.mousePressed(() => { showWhy = true; selected = -1; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showWhy = false; });
  positionControls();
  describe('Two columns — commercial tobacco and traditional tobacco use — with four ' +
    'clickable rows: purpose, preparation, frequency, and meaning. Clicking a row shows ' +
    'both columns side by side for direct comparison.', LABEL);
}

function positionControls() {
  whyButton.position(10, drawHeight + 11);
  resetButton.position(240, drawHeight + 11);
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
  textSize(18);
  text('Commercial vs. Traditional Tobacco', canvasWidth / 2, 8);

  let colW = (canvasWidth - margin * 2) / 2;
  // column headers
  noStroke();
  fill('slategray'); rect(margin, 36, colW, 26, 4, 0, 0, 0);
  fill('sienna'); rect(margin + colW, 36, colW, 26, 0, 4, 0, 0);
  fill('white'); textAlign(CENTER, CENTER); textSize(12);
  text('Commercial Tobacco', margin + colW / 2, 49);
  text('Traditional Tobacco Use', margin + colW + colW / 2, 49);

  // rows
  rowRects = [];
  let y0 = 66, rh = 40, gap = 6;
  for (let i = 0; i < rows.length; i++) {
    let y = y0 + i * (rh + gap);
    rowRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: rh, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, rowRects[i]);
    // two halves
    strokeWeight(sel ? 2.5 : 1); stroke(sel ? 'black' : 'silver');
    fill(sel ? 'lightslategray' : (hover ? 'gainsboro' : 'lightsteelblue')); rect(margin, y, colW, rh);
    fill(sel ? 'peru' : (hover ? 'antiquewhite' : 'burlywood')); rect(margin + colW, y, colW, rh);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(13);
    text(rows[i].label, margin + canvasWidth / 2 - margin, y + rh / 2);
  }
  cursor(overAnyRow() ? HAND : ARROW);

  // infobox
  let py = y0 + rows.length * (rh + gap) + 4;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (showWhy) {
    fill('darkslateblue');
    text(whyText, margin + 10, py + 10, canvasWidth - margin * 2 - 20, drawHeight - py - 26);
  } else if (selected >= 0) {
    fill('slategray'); text('Commercial — ' + rows[selected].com, margin + 10, py + 10, canvasWidth - margin * 2 - 20, 60);
    fill('sienna'); text('Traditional — ' + rows[selected].trad, margin + 10, py + 62, canvasWidth - margin * 2 - 20, 60);
  } else {
    fill('dimgray');
    text('Click a row to compare commercial and traditional tobacco use.',
      margin + 10, py + 12, canvasWidth - margin * 2 - 20, 40);
  }
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
