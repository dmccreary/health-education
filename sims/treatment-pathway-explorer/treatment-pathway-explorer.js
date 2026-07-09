// Treatment Pathway Explorer - MicroSim (click-to-reveal radial explorer)
// CANVAS_HEIGHT: 480
// Understand (L2): students explain the purpose of four treatment categories
// (counseling/therapy, medical support, support groups, inpatient/outpatient
// programs) and describe how a treatment team combines them based on need.
// A central "Getting Help" node is ringed by four clickable treatment nodes;
// each opens an infobox. "How They Work Together" reveals a summary. Warm,
// hopeful blue/green palette. Nodes rearrange into a vertical list on narrow screens.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let togetherButton, resetButton;
let showTogether = false;

// Four treatment types. angle is used only in the radial layout, measured
// clockwise from straight up (12 o'clock); the diagonals keep nodes clear of
// the central figure, the title, and the infobox.
let topics = [
  {
    key: 'counseling', name: 'Counseling\nand Therapy', color: '#3f7cac',
    angle: -PI * 0.75,
    text: 'Talking with a trained counselor or therapist helps a person understand ' +
          'their feelings and learn healthier ways to cope. Sessions can be one-on-one ' +
          'or with family, and they build skills that support lasting recovery.'
  },
  {
    key: 'medical', name: 'Medical\nSupport', color: '#4e9a6b',
    angle: -PI * 0.25,
    text: 'Doctors and nurses care for the physical side of substance use, easing ' +
          'withdrawal safely and looking after overall health. Sometimes medicine is ' +
          'used to reduce cravings so the other kinds of help can work even better.'
  },
  {
    key: 'groups', name: 'Support\nGroups', color: '#5b9bd5',
    angle: PI * 0.75,
    text: 'In a support group, people who are recovering meet to share encouragement ' +
          'and advice. Knowing you are not alone — and hearing from others who truly ' +
          'understand — makes staying on track feel possible.'
  },
  {
    key: 'programs', name: 'Inpatient &\nOutpatient', color: '#6aa84f',
    angle: PI * 0.25,
    text: 'Programs give recovery a clear structure. Inpatient programs offer ' +
          'round-the-clock care at a treatment center for a while, while outpatient ' +
          'programs let a person get regular help while still living at home.'
  }
];

let selected = null;      // topic key currently open
let visited = {};         // topics the student has opened
let nodeScreen = {};      // key -> hit region {shape, x, y, r | w, h}
let pulse = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  togetherButton = createButton('How They Work Together');
  togetherButton.mousePressed(toggleTogether);
  togetherButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A central node labeled "Getting Help" is ringed by four clickable ' +
    'treatment nodes: Counseling and Therapy, Medical Support, Support Groups, and ' +
    'Inpatient & Outpatient Programs. Clicking a node opens an infobox describing ' +
    'that treatment type. A "How They Work Together" button explains that a ' +
    'treatment team combines options based on what each person needs.', LABEL);
}

function positionControls() {
  togetherButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 200, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  pulse += 0.05;

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('#12506b');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Treatment Pathway Explorer', canvasWidth / 2, 8);

  if (canvasWidth < 470) drawList();
  else drawRadial();

  drawPanel();
}

function drawRadial() {
  let cx = canvasWidth / 2;
  let cy = 165;
  let ringR = min(120, (canvasWidth - 2 * (margin + 50)) / 2);
  ringR = max(ringR, 96);
  let nodeR = 46;

  // spokes from center to each node
  nodeScreen = {};
  stroke('#9dc3d6');
  strokeWeight(2);
  for (let t of topics) {
    let nx = cx + cos(t.angle) * ringR;
    let ny = cy + sin(t.angle) * ringR;
    nodeScreen[t.key] = { shape: 'circle', x: nx, y: ny, r: nodeR };
    line(cx, cy, nx, ny);
  }
  noStroke();

  drawCenter(cx, cy, 46);

  let invite = !selected && !showTogether && Object.keys(visited).length === 0;
  for (let t of topics) {
    let s = nodeScreen[t.key];
    let isSel = selected === t.key && !showTogether;
    let hover = dist(mouseX, mouseY, s.x, s.y) < s.r;
    let extra = invite ? map(sin(pulse), -1, 1, 0, 5) : 0;

    strokeWeight(isSel ? 4 : 2.5);
    stroke(t.color);
    if (isSel) fill(t.color);
    else if (hover) fill('#fffbe6');
    else if (visited[t.key]) fill('#eaf4ea');
    else fill('white');
    circle(s.x, s.y, s.r * 2 + extra);

    noStroke();
    fill(isSel ? 'white' : '#213b45');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    text(t.name, s.x, s.y);
  }
  cursor(overAnyNode() ? HAND : ARROW);
}

function drawList() {
  // Narrow screens: central banner on top, four stacked rectangular nodes.
  nodeScreen = {};
  let bx = margin, bw = canvasWidth - 2 * margin;

  // "Getting Help" banner
  fill('#e6f5f5');
  stroke('#2e8b8b');
  strokeWeight(2.5);
  rect(bx, 40, bw, 34, 10);
  noStroke();
  fill('#0f5c5c');
  textAlign(CENTER, CENTER);
  textSize(16);
  text('Getting Help', canvasWidth / 2, 40 + 17);

  let y = 84, h = 44, gap = 6;
  for (let t of topics) {
    nodeScreen[t.key] = { shape: 'rect', x: bx, y: y, w: bw, h: h };
    let isSel = selected === t.key && !showTogether;
    let hover = pointInRect(mouseX, mouseY, nodeScreen[t.key]);
    strokeWeight(isSel ? 4 : 2.5);
    stroke(t.color);
    if (isSel) fill(t.color);
    else if (hover) fill('#fffbe6');
    else if (visited[t.key]) fill('#eaf4ea');
    else fill('white');
    rect(bx, y, bw, h, 10);
    noStroke();
    fill(isSel ? 'white' : '#213b45');
    textAlign(CENTER, CENTER);
    textSize(15);
    text(t.name.replace('\n', ' '), bx, y, bw, h);
    y += h + gap;
  }
  cursor(overAnyNode() ? HAND : ARROW);
}

function drawCenter(cx, cy, r) {
  push();
  stroke('#2e8b8b');
  strokeWeight(3);
  fill('#e6f5f5');
  circle(cx, cy, r * 2);
  noStroke();
  fill('#0f5c5c');
  textAlign(CENTER, CENTER);
  textSize(15);
  text('Getting\nHelp', cx, cy);
  pop();
}

function drawPanel() {
  let px = margin;
  let py = 300;
  let pw = canvasWidth - 2 * margin;
  let ph = drawHeight - py - margin;

  fill('white');
  stroke('#4e9a6b');
  strokeWeight(1.5);
  rect(px, py, pw, ph, 10);
  noStroke();

  if (showTogether) {
    fill('#12506b');
    textAlign(LEFT, TOP);
    textSize(15);
    text('How They Work Together', px + 14, py + 10);
    fill('black');
    textSize(13);
    text('A treatment team often combines more than one of these — maybe counseling ' +
         'plus a support group, or medical care plus an outpatient program. The mix is ' +
         'matched to what each person needs, because recovery is not one-size-fits-all.',
         px + 14, py + 34, pw - 28, ph - 44);
  } else if (selected) {
    let t = topics.find(q => q.key === selected);
    fill(t.color);
    textAlign(LEFT, TOP);
    textSize(15);
    text(t.name.replace('\n', ' '), px + 14, py + 10);
    fill('black');
    textSize(13);
    text(t.text, px + 14, py + 34, pw - 28, ph - 44);
  } else {
    fill('#2e6b7d');
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Click a treatment type to learn how it helps.',
         px + 14, py + 8, pw - 28, ph - 16);
  }
}

function overAnyNode() {
  for (let k in nodeScreen) if (hitNode(nodeScreen[k])) return true;
  return false;
}

function hitNode(s) {
  if (!s) return false;
  if (s.shape === 'circle') return dist(mouseX, mouseY, s.x, s.y) < s.r;
  return pointInRect(mouseX, mouseY, s);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;   // ignore clicks in the control strip
  for (let t of topics) {
    if (hitNode(nodeScreen[t.key])) {
      selected = t.key;
      visited[t.key] = true;
      showTogether = false;
      return;
    }
  }
}

function toggleTogether() {
  showTogether = !showTogether;
  togetherButton.html(showTogether ? 'Hide Summary' : 'How They Work Together');
  if (showTogether) selected = null;
}

function resetAll() {
  selected = null;
  visited = {};
  showTogether = false;
  togetherButton.html('How They Work Together');
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
