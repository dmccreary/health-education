// Allergic Reaction Signs Explorer - MicroSim (figure hotspots)
// CANVAS_HEIGHT: 490
// Grade 5, Remember (L1): students identify signs of an allergic reaction across
// skin, breathing, digestion, and the whole body, and recognize emergency signs.
// Click-to-reveal labeling builds a clear factual list (no animation).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let showAllButton;
let resetButton;

// Hotspots: dx/dy offsets from figure anchor; severity 'mild' or 'emergency'
let hotspots = [
  { key: 'Eyes & nose', dx: -2, dy: -212, sign: 'Itchy, watery eyes or runny nose', sev: 'mild',
    desc: 'Your eyes or nose react to the allergen. This sign is usually mild.' },
  { key: 'Face & lips', dx: 0, dy: -182, sign: 'Swelling of face, lips, or tongue', sev: 'emergency',
    desc: 'Swelling of the face, lips, or tongue can block breathing. This is an emergency — get help right away.' },
  { key: 'Throat', dx: 0, dy: -150, sign: 'Throat tightness', sev: 'emergency',
    desc: 'A tight throat can make it hard to breathe or swallow. This is an emergency.' },
  { key: 'Chest', dx: -16, dy: -108, sign: 'Coughing, wheezing, trouble breathing', sev: 'emergency',
    desc: 'Coughing, wheezing, or trouble breathing affects the lungs. This is an emergency.' },
  { key: 'Skin', dx: -74, dy: -92, sign: 'Hives or redness', sev: 'mild',
    desc: 'Hives or red bumps on the skin are common and usually mild to moderate.' },
  { key: 'Stomach', dx: 6, dy: -60, sign: 'Cramps, nausea, vomiting', sev: 'mild',
    desc: 'Cramps, nausea, or vomiting are mild-to-moderate digestive signs.' },
  { key: 'Hands', dx: 74, dy: -40, sign: 'Tingling or swelling of the hands', sev: 'mild',
    desc: 'Tingling or swelling of the hands is usually mild to moderate.' },
  { key: 'Whole body', dx: 96, dy: -150, sign: 'Dizziness or weakness', sev: 'emergency',
    desc: 'Feeling dizzy or weak all over can mean a serious, whole-body reaction. This is an emergency.' }
];

let selected = null;
let showAll = false;
let hotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showAllButton = createButton('Show All Signs');
  showAllButton.mousePressed(() => { showAll = !showAll; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = null; showAll = false; });
  positionControls();
  describe('An illustrated person with eight clickable hotspots for allergic-reaction ' +
    'signs, color-coded yellow for mild and red for emergency. Clicking a hotspot shows ' +
    'the sign, its severity, and a short description in the panel below.', LABEL);
}

function positionControls() {
  showAllButton.position(10, drawHeight + 10);
  resetButton.position(150, drawHeight + 10);
}

function sevColor(sev, bright) {
  if (sev === 'emergency') return bright ? 'crimson' : color(220, 20, 60, 150);
  return bright ? 'gold' : color(255, 215, 0, 150);
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
  textSize(20);
  text('Allergic Reaction Signs', canvasWidth / 2, 8);

  let fx = canvasWidth * 0.42;
  let baseY = 300;
  drawFigure(fx, baseY);
  drawHotspots(fx, baseY);
  drawLegend();
  drawInfoStrip();
}

function drawFigure(fx, baseY) {
  noStroke();
  fill('antiquewhite');
  stroke('tan');
  strokeWeight(2);
  circle(fx, baseY - 200, 56);            // head
  rect(fx - 10, baseY - 174, 20, 16);     // neck
  rect(fx - 42, baseY - 160, 84, 120, 18);// torso
  rect(fx - 64, baseY - 156, 20, 100, 10);// left arm
  rect(fx + 44, baseY - 156, 20, 100, 10);// right arm
  rect(fx - 36, baseY - 44, 28, 90, 10);  // left leg
  rect(fx + 8, baseY - 44, 28, 90, 10);   // right leg
  noStroke();
}

function drawHotspots(fx, baseY) {
  hotScreen = [];
  for (let h of hotspots) {
    let x = fx + h.dx, y = baseY + h.dy, r = 15;
    hotScreen.push({ x: x, y: y, r: r, h: h });
    let sel = selected === h.key;
    let hover = dist(mouseX, mouseY, x, y) < r + 2;
    strokeWeight(sel ? 3 : 1.5);
    stroke(sevColor(h.sev, true));
    fill(sel || hover ? sevColor(h.sev, true) : sevColor(h.sev, false));
    circle(x, y, r * 2);
    if (sel || showAll) {
      noStroke();
      fill('black');
      textAlign(LEFT, CENTER);
      textSize(12);
      let lx = x + r + 4;
      // keep labels on-canvas
      if (lx + 90 > canvasWidth) { textAlign(RIGHT, CENTER); lx = x - r - 4; }
      text(h.key, lx, y);
    }
  }
}

function drawLegend() {
  let lx = margin, ly = 42;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(12);
  fill('gold'); stroke('goldenrod'); strokeWeight(1);
  circle(lx + 8, ly, 16); noStroke(); fill('black');
  text('Mild', lx + 20, ly);
  fill('crimson'); stroke('darkred'); strokeWeight(1);
  circle(lx + 8, ly + 22, 16); noStroke(); fill('black');
  text('Emergency', lx + 20, ly + 22);
}

function drawInfoStrip() {
  let sy = drawHeight - 92;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 84, 8);
  noStroke();
  if (!selected) {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click a colored spot to learn the sign. Red spots are emergencies.',
      margin + 12, sy + 12, canvasWidth - margin * 2 - 24, 60);
    return;
  }
  let h = hotspots.find(q => q.key === selected);
  fill(h.sev === 'emergency' ? 'crimson' : 'darkgoldenrod');
  textAlign(LEFT, TOP);
  textSize(16);
  text(h.sign + '  (' + (h.sev === 'emergency' ? 'Emergency' : 'Mild to moderate') + ')',
    margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 26);
  fill('black');
  textSize(13);
  text(h.desc, margin + 12, sy + 40, canvasWidth - margin * 2 - 24, 40);
}

function mousePressed() {
  for (let s of hotScreen) {
    if (dist(mouseX, mouseY, s.x, s.y) < s.r + 2) { selected = s.h.key; return; }
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
