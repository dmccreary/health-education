// Who Can I Tell? - MicroSim (scenario choice, every answer affirmed)
// CANVAS_HEIGHT: 490
// Pre-K / Kindergarten, Apply (L3): children practice asking for help by choosing a
// trusted adult to tell about a strong feeling. Every reasonable choice is affirmed,
// because the goal is building the habit of telling — not picking one "right" person.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let tellButton, resetButton;

let adults = ['Teacher', 'Parent', 'School Nurse'];

let scenarios = [
  { mood: 'scared',  cue: 'storm',  caption: 'This child feels scared during a loud thunderstorm. Who can they tell?' },
  { mood: 'sad',     cue: 'alone',  caption: 'This child feels sad after being left out at recess. Who can they tell?' },
  { mood: 'worried', cue: 'test',   caption: 'This child feels worried about a big test. Who can they tell?' },
  { mood: 'angry',   cue: 'toy',    caption: 'This child feels angry because a friend broke their toy. Who can they tell?' },
  { mood: 'unwell',  cue: 'tummy',  caption: "This child's tummy hurts and they feel unwell. Who can they tell?" },
  { mood: 'nervous', cue: 'school', caption: 'This child feels nervous about their first day at a new school. Who can they tell?' }
];

let affirm = 'Great choice! Telling a trusted adult about a strong feeling always helps.';
let celebrate = 'You know just what to do with a big feeling — tell someone you trust!';

let idx = 0;
let phase = 'choose';   // 'choose' -> 'told' -> ('choose' | 'done')
let selectedAdult = -1;
let visited = {};
let adultRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  tellButton = createButton('Tell Them!');
  tellButton.mousePressed(onTell);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  updateTellLabel();
  describe('A simple scene shows a child with a strong feeling and a read-aloud ' +
    'caption. Below are three trusted adults — a teacher, a parent, and a school ' +
    'nurse. The child picks one and presses "Tell Them!" Every choice is affirmed.', LABEL);
}

function positionControls() {
  tellButton.position(10, drawHeight + 10);
  resetButton.position(130, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#eef6ff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Who Can I Tell?', canvasWidth / 2, 8);

  let sc = scenarios[idx];

  // Scene box
  let boxY = 38, boxH = 114;
  fill('#fbfdff');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, boxY, canvasWidth - 2 * margin, boxH, 10);
  noStroke();
  drawCue(sc.cue, canvasWidth - margin - 60, boxY + boxH / 2);
  drawChild(margin + 70, boxY + boxH / 2 + 6, sc.mood);

  // Read-aloud caption
  fill('#243b53');
  textAlign(CENTER, TOP);
  textSize(16);
  text(sc.caption, margin, 158, canvasWidth - 2 * margin, 40);

  // Three trusted adults
  adultRects = [];
  let n = 3, gap = 12;
  let cw = (canvasWidth - 2 * margin - gap * (n - 1)) / n;
  let cy = 202, ch = 138;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (cw + gap);
    adultRects.push({ x: x, y: cy, w: cw, h: ch, i: i });
    let sel = selectedAdult === i;
    let hover = phase === 'choose' && pointInRect(mouseX, mouseY, adultRects[i]);
    strokeWeight(sel ? 4 : 2);
    stroke(sel ? 'goldenrod' : '#9db4c8');
    fill(sel ? '#fff6d8' : (hover ? '#eef7ff' : 'white'));
    rect(x, cy, cw, ch, 10);
    drawAdult(i, x + cw / 2, cy + ch / 2 - 6, sel);
    noStroke();
    fill('#243b53');
    textAlign(CENTER, BOTTOM);
    textSize(14);
    text(adults[i], x, cy + ch - 22, cw, 20);
  }
  cursor(phase === 'choose' && overAnyAdult() ? HAND : ARROW);

  // Feedback / affirmation band
  let fy = 348;
  let fh = drawHeight - fy - 8;
  noStroke();
  textAlign(CENTER, CENTER);
  if (phase === 'done') {
    fill('seagreen');
    textSize(17);
    text(celebrate, margin, fy, canvasWidth - 2 * margin, fh);
  } else if (phase === 'told') {
    // trusted adult kneels down to listen (drawn small, warm)
    fill('seagreen');
    textSize(15);
    text(affirm, margin, fy, canvasWidth - 2 * margin, fh);
  } else if (selectedAdult >= 0) {
    fill('#5a6b7b');
    textSize(15);
    text('Press "Tell Them!" to tell the ' + adults[selectedAdult].toLowerCase() + '.',
      margin, fy, canvasWidth - 2 * margin, fh);
  } else {
    fill('#5a6b7b');
    textSize(15);
    text('Pick a trusted adult this child could tell.',
      margin, fy, canvasWidth - 2 * margin, fh);
  }

  // progress dots
  drawProgress();
}

function drawProgress() {
  let done = Object.keys(visited).length;
  let dotY = drawHeight - 6;
  let total = scenarios.length;
  let spacing = 16;
  let startX = canvasWidth / 2 - (total - 1) * spacing / 2;
  for (let i = 0; i < total; i++) {
    noStroke();
    fill(i < done ? 'seagreen' : '#cdd6df');
    circle(startX + i * spacing, dotY, 8);
  }
}

function drawChild(cx, cy, mood) {
  push();
  // body
  noStroke();
  fill('#7fb0dd');
  rect(cx - 15, cy - 6, 30, 38, 8);
  // head
  stroke('#c98a52');
  strokeWeight(1);
  fill('#f4c592');
  circle(cx, cy - 22, 32);
  // face by mood
  noStroke();
  fill('black');
  let ex = 7;
  if (mood === 'scared') {
    fill('white'); circle(cx - ex, cy - 24, 9); circle(cx + ex, cy - 24, 9);
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    noFill(); stroke('black'); strokeWeight(2); circle(cx, cy - 12, 8);
  } else if (mood === 'sad') {
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    noFill(); stroke('black'); strokeWeight(2); arc(cx, cy - 10, 14, 10, PI, TWO_PI);
    noStroke(); fill('#4fa3e0'); ellipse(cx + ex, cy - 18, 4, 7);   // tear
  } else if (mood === 'worried') {
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    stroke('black'); strokeWeight(2); noFill();
    line(cx - ex - 4, cy - 30, cx - ex + 3, cy - 32);
    line(cx + ex + 4, cy - 30, cx + ex - 3, cy - 32);
    line(cx - 6, cy - 12, cx + 6, cy - 14);
  } else if (mood === 'angry') {
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    stroke('black'); strokeWeight(2); noFill();
    line(cx - ex - 4, cy - 30, cx - ex + 3, cy - 26);
    line(cx + ex + 4, cy - 30, cx + ex - 3, cy - 26);
    arc(cx, cy - 8, 14, 10, PI, TWO_PI);
  } else if (mood === 'unwell') {
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    stroke('black'); strokeWeight(2); line(cx - 6, cy - 12, cx + 6, cy - 12);
    noStroke(); fill('#a5d6a7'); arc(cx, cy - 22, 30, 30, PI * 0.15, PI * 0.5); // slight green cheek
  } else { // nervous
    fill('black'); circle(cx - ex, cy - 24, 4); circle(cx + ex, cy - 24, 4);
    stroke('black'); strokeWeight(2); noFill(); line(cx - 5, cy - 12, cx + 5, cy - 12);
    noStroke(); fill('#4fa3e0'); ellipse(cx + 13, cy - 26, 4, 7); // sweat drop
  }
  pop();
}

function drawCue(cue, cx, cy) {
  push();
  if (cue === 'storm') {
    fill('#9aa7b3'); noStroke();
    ellipse(cx, cy - 8, 46, 26); ellipse(cx - 16, cy - 4, 26, 20); ellipse(cx + 16, cy - 4, 26, 20);
    fill('#ffd54f'); triangle(cx - 2, cy + 6, cx + 8, cy + 6, cx - 4, cy + 22);
  } else if (cue === 'alone') {
    stroke('#b0bcc7'); strokeWeight(2); noFill();
    for (let i = 0; i < 3; i++) circle(cx + i * 10 - 10, cy, 14);
  } else if (cue === 'test') {
    fill('white'); stroke('#9db4c8'); strokeWeight(2); rect(cx - 14, cy - 18, 28, 36, 3);
    noStroke(); fill('#5a6b7b'); textAlign(CENTER, CENTER); textSize(20); text('?', cx, cy);
  } else if (cue === 'toy') {
    fill('#e57373'); noStroke(); rect(cx - 12, cy - 6, 10, 12, 2);
    fill('#4fc3f7'); rect(cx + 3, cy - 2, 10, 12, 2);
    stroke('#8a5a24'); strokeWeight(2); line(cx, cy - 12, cx + 2, cy + 10);
  } else if (cue === 'tummy') {
    fill('#f4c592'); stroke('#c98a52'); strokeWeight(1); ellipse(cx, cy, 34, 30);
    noFill(); stroke('#b5651d'); strokeWeight(2); arc(cx, cy + 2, 16, 12, 0, PI);
  } else if (cue === 'school') {
    fill('#d9a066'); stroke('#b07a3a'); strokeWeight(1.5); rect(cx - 18, cy - 4, 36, 22, 2);
    triangle(cx - 22, cy - 4, cx + 22, cy - 4, cx, cy - 20);
  }
  pop();
}

function drawAdult(kind, cx, cy, sel) {
  push();
  let listening = sel && phase === 'told';
  let bodyCol = kind === 0 ? '#8e6fb3' : (kind === 1 ? '#4fa3a0' : '#e0e0e0');
  // body
  noStroke();
  fill(bodyCol);
  if (listening) {
    // kneel: shorter, leaning in
    rect(cx - 16, cy + 4, 32, 24, 8);
  } else {
    rect(cx - 15, cy - 2, 30, 40, 8);
  }
  // head
  stroke('#c98a52'); strokeWeight(1); fill('#f4c592');
  circle(cx, cy - (listening ? 8 : 20), 28);
  // simple smile
  noStroke(); fill('black');
  let hy = cy - (listening ? 8 : 20);
  circle(cx - 6, hy - 2, 3); circle(cx + 6, hy - 2, 3);
  noFill(); stroke('black'); strokeWeight(1.5); arc(cx, hy + 3, 12, 8, 0, PI);
  // role marker
  noStroke();
  if (kind === 0) { // teacher: a book
    fill('#c0392b'); rect(cx - 22, cy + 6, 12, 9, 1);
  } else if (kind === 2) { // nurse: a red cross
    fill('#c0392b');
    rect(cx + 10, cy - 4, 4, 12); rect(cx + 6, cy, 12, 4);
  }
  pop();
}

function overAnyAdult() {
  for (let r of adultRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (phase !== 'choose') return;
  if (mouseY > drawHeight) return;
  for (let r of adultRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selectedAdult = r.i;
      return;
    }
  }
}

function onTell() {
  if (phase === 'choose') {
    if (selectedAdult < 0) return;      // must pick someone first
    phase = 'told';
    visited[idx] = true;
  } else if (phase === 'told') {
    if (Object.keys(visited).length >= scenarios.length) {
      phase = 'done';
    } else {
      // advance to the next unvisited scenario
      let next = idx;
      for (let k = 1; k <= scenarios.length; k++) {
        let cand = (idx + k) % scenarios.length;
        if (!visited[cand]) { next = cand; break; }
      }
      idx = next;
      phase = 'choose';
      selectedAdult = -1;
    }
  } else { // done
    resetAll();
  }
  updateTellLabel();
}

function updateTellLabel() {
  if (phase === 'choose') tellButton.html('Tell Them!');
  else if (phase === 'told') {
    tellButton.html(Object.keys(visited).length >= scenarios.length ? 'Finish' : 'Next Feeling');
  } else tellButton.html('Start Over');
}

function resetAll() {
  idx = 0;
  phase = 'choose';
  selectedAdult = -1;
  visited = {};
  updateTellLabel();
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
