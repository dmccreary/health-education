// Health Source Credibility Checklist - MicroSim (five credibility characteristics)
// CANVAS_HEIGHT: 492
// Grades 6-8, Understand (L2): students identify the five characteristics of a valid
// health source and exemplify each with realistic source types.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let revealButton;
let resetButton;

let chars = ['Expertise-based', 'Evidence-based', 'Transparent funding', 'Regularly updated', 'No product-selling conflict'];
// sources: meets = which char indices it actually meets
let sources = [
  { t: 'Government public health agency page', meets: [0, 1, 2, 3, 4] },
  { t: "Influencer's paid product post", meets: [] },
  { t: 'Hospital patient-education page', meets: [0, 1, 3, 4] },
  { t: 'Blog selling a supplement it recommends', meets: [3] },
  { t: 'Peer-reviewed medical journal', meets: [0, 1, 2, 3, 4] },
  { t: 'Anonymous forum post', meets: [] }
];

let selSource = -1;
let marks = [false, false, false, false, false];
let reveal = false;
let sourceRects = [], charRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  revealButton = createButton('Reveal Answer');
  revealButton.mousePressed(() => { reveal = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selSource = -1; marks = [false, false, false, false, false]; reveal = false; });
  positionControls();
  describe('Five credibility characteristics and six example source cards. Students pick a ' +
    'source, mark which characteristics it meets, and see the score and correct answer.', LABEL);
}

function positionControls() {
  revealButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(16);
  text('Health Source Credibility Checklist', canvasWidth / 2, 6);

  // source cards (left)
  sourceRects = [];
  let lw = canvasWidth * 0.5;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Pick a source:', margin, 28);
  let y0 = 44, sh = 44, gap = 4;
  for (let i = 0; i < sources.length; i++) {
    let y = y0 + i * (sh + gap);
    sourceRects.push({ x: margin, y: y, w: lw - margin, h: sh, i: i });
    let sel = selSource === i;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'gray');
    fill(sel ? 'lightyellow' : 'white');
    rect(margin, y, lw - margin, sh, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(10); text(sources[i].t, margin + 6, y + sh / 2, lw - margin - 12, sh);
  }

  // characteristics (right)
  charRects = [];
  let rx = lw + 4, rw = canvasWidth - rx - margin;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Does it meet each?', rx, 28);
  for (let i = 0; i < 5; i++) {
    let y = 44 + i * 40;
    charRects.push({ x: rx, y: y, w: rw, h: 34, i: i });
    let checked = marks[i];
    let actual = selSource >= 0 && sources[selSource].meets.includes(i);
    strokeWeight(1.5); stroke('slateblue');
    fill(reveal ? (actual ? 'honeydew' : 'white') : 'white');
    rect(rx, y, rw, 34, 5);
    // checkbox
    fill(checked ? 'seagreen' : 'white'); stroke('seagreen'); rect(rx + 6, y + 9, 16, 16, 3);
    if (checked) { noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(12); text('✓', rx + 14, y + 17); }
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(9.5); text(chars[i], rx + 28, y + 17, rw - 34, 30);
    if (reveal) { textAlign(RIGHT, CENTER); textSize(9); fill(actual ? 'seagreen' : 'indianred'); text(actual ? 'meets' : 'no', rx + rw - 4, y + 17); }
  }
  cursor(overAny() ? HAND : ARROW);

  // score
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (selSource < 0) { fill('dimgray'); text('Pick a source, then check the characteristics it meets.', margin, drawHeight - 30, canvasWidth - margin * 2, 24); }
  else {
    let count = marks.filter(Boolean).length;
    let actualCount = sources[selSource].meets.length;
    fill('navy'); text('You marked ' + count + '/5' + (reveal ? '  •  Actually meets ' + actualCount + '/5' : ''), margin, drawHeight - 30, canvasWidth - margin * 2, 24);
  }
}

function overAny() {
  for (let r of sourceRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of charRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of sourceRects) if (pointInRect(mouseX, mouseY, r)) { selSource = r.i; marks = [false, false, false, false, false]; reveal = false; return; }
  if (selSource >= 0) for (let r of charRects) if (pointInRect(mouseX, mouseY, r)) { marks[r.i] = !marks[r.i]; return; }
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
