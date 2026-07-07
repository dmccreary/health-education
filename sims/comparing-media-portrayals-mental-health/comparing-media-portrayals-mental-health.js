// Comparing Media Portrayals of Mental Health - MicroSim (evaluate stigma framing)
// CANVAS_HEIGHT: 502
// Grades 6-8, Evaluate (L5): students judge paired fictional media descriptions of the
// same topic and rate which reduces vs. reinforces stigma, with justified feedback.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// each pair: topic, two clips (harmful, accurate) with the framing words
let pairs = [
  { topic: 'Anxiety',
    A: { text: 'A character with anxiety is shown as "crazy" and "out of control," played for laughs.', reduces: false, why: 'Words like "crazy" and mocking humor reinforce stigma.' },
    B: { text: 'A character manages anxiety with coping skills and support, shown as capable.', reduces: true, why: 'Showing coping and capability reduces stigma.' } },
  { topic: 'Depression',
    A: { text: 'A show says someone "just needs to try harder" to get over depression.', reduces: false, why: '"Just try harder" frames a health condition as a personal failing.' },
    B: { text: 'A show treats depression as a real condition helped by care and support.', reduces: true, why: 'Framing it as a treatable condition reduces stigma.' } },
  { topic: 'Therapy',
    A: { text: 'A film jokes that only "weak" people go to therapy.', reduces: false, why: 'Calling help-seeking "weak" discourages getting support.' },
    B: { text: 'A film shows therapy as a normal, healthy choice for many people.', reduces: true, why: 'Normalizing help-seeking reduces stigma.' } },
  { topic: 'Recovery',
    A: { text: 'A story implies people with mental illness "never get better."', reduces: false, why: '"Never get better" spreads hopelessness and stigma.' },
    B: { text: 'A story shows recovery as possible with time and support.', reduces: true, why: 'Showing recovery is possible reduces stigma.' } },
  { topic: 'Everyday portrayal',
    A: { text: 'A character is defined only by their diagnosis, nothing else.', reduces: false, why: 'Reducing a person to a label is dehumanizing.' },
    B: { text: 'A character has a full life; their condition is one part of who they are.', reduces: true, why: 'Full, human portrayals reduce stigma.' } }
];

let idx = 0;
let rating = [0, 0]; // 0 unrated, 1 reduces, 2 reinforces (for A and B)
let btnRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Pair');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('Two fictional media descriptions of the same mental-health topic — one ' +
    'harmful, one accurate. Students rate each as reducing or reinforcing stigma and get ' +
    'feedback naming the specific words that drive the framing.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(120, drawHeight + 12);
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
  textSize(17);
  text('Comparing Media Portrayals', canvasWidth / 2, 6);
  fill('dimgray'); textSize(13);
  text('Topic: ' + pairs[idx].topic + '  (Pair ' + (idx + 1) + ' of ' + pairs.length + ')', canvasWidth / 2, 28);

  btnRects = [];
  drawClip('Clip A', pairs[idx].A, 0, 50);
  drawClip('Clip B', pairs[idx].B, 1, 232);
  cursor(overAny() ? HAND : ARROW);
}

function drawClip(name, clip, ci, y) {
  let bothRated = rating[0] > 0 && rating[1] > 0;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, y, canvasWidth - margin * 2, 170, 8);
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text(name, margin + 10, y + 8);
  fill('black'); textSize(13);
  text(clip.text, margin + 10, y + 28, canvasWidth - margin * 2 - 20, 56);

  // rating buttons
  let labels = ['Reduces stigma', 'Reinforces stigma'];
  let bw = (canvasWidth - margin * 2 - 30) / 2;
  for (let r = 0; r < 2; r++) {
    let bx = margin + 10 + r * (bw + 10), by = y + 90, bh = 30;
    btnRects.push({ x: bx, y: by, w: bw, h: bh, ci: ci, val: r + 1 });
    let chosen = rating[ci] === r + 1;
    let correctChoice = (r === 0) === clip.reduces;
    strokeWeight(chosen ? 2.5 : 1.5);
    if (bothRated) stroke(correctChoice ? 'seagreen' : 'gray'); else stroke(r === 0 ? 'seagreen' : 'indianred');
    fill(chosen ? (correctChoice && bothRated ? 'honeydew' : (bothRated ? 'mistyrose' : 'lightyellow')) : 'white');
    rect(bx, by, bw, bh, 6);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(12);
    text(labels[r], bx, by, bw, bh);
  }
  // feedback once both rated
  if (bothRated) {
    let correct = (rating[ci] === 1) === clip.reduces;
    noStroke(); fill(correct ? 'seagreen' : 'indianred'); textAlign(LEFT, TOP); textSize(11);
    text((correct ? '✓ ' : '✗ ') + clip.why, margin + 10, y + 126, canvasWidth - margin * 2 - 20, 40);
  }
}

function overAny() {
  for (let b of btnRects) if (pointInRect(mouseX, mouseY, b)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let b of btnRects) if (pointInRect(mouseX, mouseY, b)) { rating[b.ci] = b.val; return; }
}

function next() { idx = (idx + 1) % pairs.length; rating = [0, 0]; }
function reset() { idx = 0; rating = [0, 0]; }

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
