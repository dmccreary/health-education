// Who Is My Trusted Adult? - MicroSim (drag-and-drop, one person, three bins)
// CANVAS_HEIGHT: 480
// Remember (L1): pre-readers identify and name trusted adults at home, at school,
// and in the community by dragging one person at a time into the correct labeled
// bin. Some people (like a doctor) fit more than one bin and any reasonable choice
// is accepted. Large read-aloud captions; gentle, forgiving feedback.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton, nextButton;

// Bins: 0 = At Home (warm yellow), 1 = At School (blue), 2 = In the Community (green)
let bins = [
  { label: 'At Home', color: '#f4b400', tint: '#fdf3d6', icon: 'house' },
  { label: 'At School', color: '#3f7cc4', tint: '#e3edf9', icon: 'school' },
  { label: 'In the Community', color: '#4e9a6b', tint: '#e2f1e8', icon: 'street' }
];

// Fixed friendly order (not randomized) so a teacher can predict what comes next.
// bins[] lists every bin that is a reasonable answer.
let people = [
  { name: 'Parent',        emoji: '👩',  bins: [0],    why: 'A parent takes care of you at home.' },
  { name: 'Grandparent',   emoji: '👵',  bins: [0],    why: 'Grandparents help take care of you, often at home.' },
  { name: 'Guardian',      emoji: '🧑',  bins: [0],    why: 'A guardian is a grown-up who cares for you at home.' },
  { name: 'Teacher',       emoji: '👩‍🏫', bins: [1],    why: 'Your teacher helps you learn at school.' },
  { name: 'School Nurse',  emoji: '🩺',  bins: [1],    why: 'The school nurse helps you feel better at school.' },
  { name: 'Bus Driver',    emoji: '🚌',  bins: [1, 2], why: 'A bus driver keeps you safe getting to school and around town.' },
  { name: 'Doctor',        emoji: '🩹',  bins: [1, 2], why: 'A doctor helps you stay healthy — in the community or visiting your school.' },
  { name: 'Police Officer',emoji: '👮',  bins: [2],    why: 'Police officers help keep the community safe.' },
  { name: 'Firefighter',   emoji: '🚒',  bins: [2],    why: 'Firefighters help keep the community safe.' }
];

let idx = 0;                // current person
let sorted = 0;            // how many placed so far
let placed = false;       // current person placed correctly?
let placedBin = -1;       // which bin it settled into
let feedback = '';        // caption text
let feedbackGood = true;

// draggable person token (card center)
let person = { x: 0, y: 0, homeX: 0, homeY: 0, dragging: false, dx: 0, dy: 0, returning: false };
let binRects = [];
let audioCtx = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Person ▶');
  nextButton.mousePressed(nextPerson);
  nextButton.parent(document.querySelector('main'));
  nextButton.hide();

  positionControls();
  resetPersonHome();
  describe('One friendly person is shown at the top with a large caption such as ' +
    '"Teacher" or "Grandparent". Below are three labeled bins: At Home, At School, ' +
    'and In the Community. The child drags the person into the bin where that ' +
    'trusted adult is found. Correct drops are celebrated; mismatches slide gently ' +
    'back to try again.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 10);
  nextButton.position(margin + 90, drawHeight + 10);
}

function resetPersonHome() {
  person.homeX = canvasWidth / 2;
  person.homeY = 92;
  person.x = person.homeX;
  person.y = person.homeY;
  person.dragging = false;
  person.returning = false;
}

function draw() {
  updateCanvasSize();
  // keep the token's home centered if the canvas was resized
  if (!person.dragging) {
    person.homeX = canvasWidth / 2;
    if (!placed && !person.returning) person.x = lerp(person.x, person.homeX, 0.2);
  }

  fill('#f7fbff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title + score
  fill('#12506b');
  textAlign(LEFT, TOP);
  textSize(20);
  text('Who Is My Trusted Adult?', margin, 8);
  fill('#2e6b4a');
  textAlign(RIGHT, TOP);
  textSize(15);
  text('You found ' + sorted + ' of ' + people.length, canvasWidth - margin, 12);

  drawBins();

  // return animation
  if (person.returning) {
    person.x = lerp(person.x, person.homeX, 0.25);
    person.y = lerp(person.y, person.homeY, 0.25);
    if (dist(person.x, person.y, person.homeX, person.homeY) < 1) {
      person.x = person.homeX; person.y = person.homeY; person.returning = false;
    }
  }

  drawPersonToken();

  // feedback caption
  textAlign(CENTER, TOP);
  textSize(15);
  let fy = 360;
  if (sorted === people.length && placed) {
    fill('#2e6b4a');
    textSize(16);
    text('Great job! You know so many trusted adults!', margin, fy, canvasWidth - 2 * margin, 40);
  } else if (feedback) {
    fill(feedbackGood ? '#2e6b4a' : '#b5691f');
    text(feedback, margin, fy, canvasWidth - 2 * margin, 40);
  } else {
    fill('#5a6b75');
    text('Drag the person to the bin where you would find them.',
         margin, fy, canvasWidth - 2 * margin, 40);
  }
}

function drawBins() {
  binRects = [];
  let n = 3, gap = 8;
  let bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let by = 150, bh = 200;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    let r = { x: x, y: by, w: bw, h: bh, i: i };
    binRects.push(r);

    let glow = placed && placedBin === i;
    let hover = person.dragging && pointInRect(person.x, person.y, r);
    strokeWeight(glow || hover ? 4 : 2);
    stroke(bins[i].color);
    fill(glow ? '#d7f0dd' : (hover ? '#fffbe6' : bins[i].tint));
    rect(x, by, bw, bh, 12);

    drawBinIcon(bins[i].icon, x + bw / 2, by + 52, bins[i].color);

    noStroke();
    fill('#2b3a42');
    textAlign(CENTER, TOP);
    textSize(min(17, bw / 5.5));
    text(bins[i].label, x + 4, by + bh - 52, bw - 8, 46);

    // settled person + check
    if (glow) {
      textAlign(CENTER, CENTER);
      textSize(30);
      text(people[idx].emoji, x + bw / 2, by + 118);
      fill('#2e8b57');
      textSize(26);
      text('✓', x + bw / 2, by + 150);
    }
  }
}

function drawBinIcon(kind, cx, cy, col) {
  push();
  noFill();
  stroke(col);
  strokeWeight(3);
  if (kind === 'house') {
    rect(cx - 16, cy - 4, 32, 22, 2);
    line(cx - 22, cy - 4, cx, cy - 22);
    line(cx, cy - 22, cx + 22, cy - 4);
  } else if (kind === 'school') {
    rect(cx - 20, cy - 6, 40, 24, 2);
    line(cx, cy - 6, cx, cy - 24);
    fill(col); noStroke();
    triangle(cx, cy - 24, cx, cy - 15, cx + 12, cy - 19);
  } else { // street / neighborhood
    line(cx - 24, cy + 18, cx + 24, cy + 18);
    rect(cx - 22, cy - 2, 16, 20, 1);
    rect(cx + 4, cy - 10, 18, 28, 1);
  }
  pop();
}

function drawPersonToken() {
  if (placed) return;             // it now lives in the bin
  let cardW = 150, cardH = 92;
  let x = person.x, y = person.y;
  rectMode(CENTER);
  stroke(person.dragging ? '#f4b400' : '#9bb7c9');
  strokeWeight(person.dragging ? 3 : 2);
  fill('white');
  rect(x, y, cardW, cardH, 12);
  rectMode(CORNER);
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(40);
  text(people[idx].emoji, x, y - 14);
  fill('#12506b');
  textSize(people[idx].name.length > 12 ? 20 : 24);
  text(people[idx].name, x - cardW / 2, y + 22, cardW, 30);
  cursor(overPerson() ? HAND : ARROW);
}

function overPerson() {
  return abs(mouseX - person.x) < 78 && abs(mouseY - person.y) < 48;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (placed) return;
  if (mouseY > drawHeight) return;
  if (overPerson()) {
    person.dragging = true;
    person.returning = false;
    person.dx = mouseX - person.x;
    person.dy = mouseY - person.y;
    feedback = '';
  }
}

function mouseDragged() {
  if (person.dragging) {
    person.x = mouseX - person.dx;
    person.y = mouseY - person.dy;
  }
}

function mouseReleased() {
  if (!person.dragging) return;
  person.dragging = false;
  // which bin (if any) is the token centered over?
  let dropped = -1;
  for (let r of binRects) if (pointInRect(person.x, person.y, r)) { dropped = r.i; break; }

  if (dropped >= 0 && people[idx].bins.includes(dropped)) {
    placed = true;
    placedBin = dropped;
    sorted++;
    feedback = people[idx].why;
    feedbackGood = true;
    playChime();
    if (sorted < people.length) nextButton.show();
  } else {
    // gentle slide back; no harsh feedback
    person.returning = true;
    if (dropped >= 0) { feedback = 'Hmm, where else might you find them? Try again.'; feedbackGood = false; }
  }
}

function nextPerson() {
  if (idx < people.length - 1) idx++;
  placed = false;
  placedBin = -1;
  feedback = '';
  resetPersonHome();
  nextButton.hide();
}

function resetAll() {
  idx = 0;
  sorted = 0;
  placed = false;
  placedBin = -1;
  feedback = '';
  resetPersonHome();
  nextButton.hide();
}

function playChime() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let o = audioCtx.createOscillator();
    let g = audioCtx.createGain();
    o.type = 'sine';
    o.connect(g); g.connect(audioCtx.destination);
    let t0 = audioCtx.currentTime;
    o.frequency.setValueAtTime(660, t0);
    o.frequency.setValueAtTime(880, t0 + 0.12);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.38);
    o.start(t0);
    o.stop(t0 + 0.4);
  } catch (e) { /* audio is a nice-to-have; ignore if unavailable */ }
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
