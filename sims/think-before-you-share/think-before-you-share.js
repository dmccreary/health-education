// Think Before You Share - MicroSim (three-bin sharing sorter)
// CANVAS_HEIGHT: 502
// Grade 1-3, Understand (L2): students explain how sharing a message, image, or
// video could affect themselves or others by classifying short scenarios as
// "Safe to Share," "Ask First," or "Don't Share." One card shows at a time;
// students tap a bin, then see whether it matches and a one-sentence reason.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

let bins = ['Safe to Share', 'Ask First', "Don't Share"];
let binColors = ['seagreen', 'goldenrod', 'indianred'];

// cat: 0 = Safe to Share, 1 = Ask First, 2 = Don't Share
let scenarios = [
  { text: 'You want to send a birthday message to your grandma.', cat: 0,
    reason: 'A kind birthday message to family is a friendly, safe thing to share.' },
  { text: 'You want to post a photo that has your friend in it.', cat: 1,
    reason: "This includes a friend's face, so it's kind to ask them first." },
  { text: 'You want to share a funny video of a friend tripping and looking embarrassed.', cat: 2,
    reason: 'This could embarrass your friend, so it is kinder not to share it.' },
  { text: 'You want to post your home address in a game chat so a friend can visit.', cat: 2,
    reason: 'Your home address is private — never post it where others can see it.' },
  { text: 'You want to send a thank-you note to your teacher.', cat: 0,
    reason: 'A kind thank-you message is a safe and friendly thing to send.' },
  { text: 'You want to share a group photo from the class field trip.', cat: 1,
    reason: 'Other people are in this photo, so ask them or a trusted adult first.' },
  { text: 'You want to share a drawing you made all by yourself.', cat: 0,
    reason: 'Your own artwork is yours to share — that is a safe choice.' },
  { text: 'You want to forward a mean message someone sent about a classmate.', cat: 2,
    reason: 'Passing along a mean message can hurt someone. It is best not to share and to tell a trusted adult.' }
];

let idx = 0;
let chosenBin = -1;   // which bin was last tapped
let locked = false;   // true once placed in the correct bin
let solved = [];
let binRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('One sharing scenario card shows at a time above three labeled bins: ' +
    '"Safe to Share," "Ask First," and "Don\'t Share." Students tap the bin they ' +
    'think fits and see whether it matches, plus a one-sentence reason.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 150, drawHeight + 12);
}

function resetAll() { idx = 0; chosenBin = -1; locked = false; solved = []; }
function nextScenario() { idx = (idx + 1) % scenarios.length; chosenBin = -1; locked = false; }

function draw() {
  updateCanvasSize();

  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c'); textAlign(CENTER, TOP); textSize(18);
  text('Think Before You Share', margin, 8, canvasWidth - margin * 2, 24);

  let scen = scenarios[idx];

  // scenario card
  let cy = 38, ch = 110;
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(margin, cy, canvasWidth - margin * 2, ch, 12);
  noStroke();
  fill('black'); textAlign(CENTER, CENTER); textSize(16);
  text(scen.text, margin + 14, cy, canvasWidth - margin * 2 - 28, ch);

  // three bins
  drawBins(scen);

  // feedback + reminder
  let fy = 322;
  textAlign(LEFT, TOP);
  if (solved.length === scenarios.length && locked) {
    fill('seagreen'); textSize(15);
    text('You sorted them all! Remember to pause and think before you share.',
      margin, fy, canvasWidth - margin * 2, 44);
  } else if (chosenBin < 0) {
    fill('dimgray'); textSize(14);
    text('Tap the bin that fits best.', margin, fy, canvasWidth - margin * 2, 24);
  } else if (locked) {
    fill('seagreen'); textSize(14);
    text('Yes — ' + scen.reason, margin, fy, canvasWidth - margin * 2, 48);
  } else {
    fill('darkorange'); textSize(14);
    text("Look again — think about who could see this and how they'd feel.",
      margin, fy, canvasWidth - margin * 2, 48);
  }

  // persistent reminder question
  fill('slateblue'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Ask yourself: would the person in it be okay, and would a trusted adult be okay with this?',
    margin, drawHeight - 26, canvasWidth - margin * 2, 20);
  fill('navy'); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length + '   •   Sorted ' + solved.length,
    margin, drawHeight - 6);

  cursor(overBin() && !locked ? HAND : ARROW);
}

function drawBins(scen) {
  binRects = [];
  let n = 3, gap = 10;
  let bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let by = 160, bh = 150;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    binRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let correctBin = i === scen.cat;
    let hover = pointInRect(mouseX, mouseY, binRects[i]);

    strokeWeight(2); stroke(binColors[i]);
    if (locked && correctBin) { fill('palegreen'); strokeWeight(4); }
    else if (!locked && chosenBin === i) fill('mistyrose');
    else if (hover && !locked) fill('lightyellow');
    else fill(lerpColor(color(binColors[i]), color('white'), 0.82));
    rect(x, by, bw, bh, 10);

    drawBinIcon(i, x + bw / 2, by + 44, 40);
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(13);
    text(bins[i], x + 4, by + 84, bw - 8, 44);

    if (locked && correctBin) {
      fill('seagreen'); textAlign(CENTER, CENTER); textSize(26);
      text('✓', x + bw / 2, by + bh - 22);
    }
  }
}

function drawBinIcon(cat, x, y, s) {
  push();
  if (cat === 0) { // heart
    noStroke(); fill('seagreen');
    circle(x - s * 0.2, y - s * 0.08, s * 0.5);
    circle(x + s * 0.2, y - s * 0.08, s * 0.5);
    triangle(x - s * 0.42, y + s * 0.02, x + s * 0.42, y + s * 0.02, x, y + s * 0.55);
  } else if (cat === 1) { // question mark in a circle
    noStroke(); fill('gold'); circle(x, y, s * 1.1);
    fill('darkgoldenrod'); textAlign(CENTER, CENTER); textSize(s * 0.9); text('?', x, y + 1);
  } else { // stop octagon
    noStroke(); fill('indianred');
    beginShape();
    for (let k = 0; k < 8; k++) {
      let a = PI / 8 + k * TWO_PI / 8;
      vertex(x + cos(a) * s * 0.6, y + sin(a) * s * 0.6);
    }
    endShape(CLOSE);
    stroke('white'); strokeWeight(5); line(x - s * 0.3, y, x + s * 0.3, y);
  }
  pop();
}

function overBin() { for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (locked) return;
  if (mouseY > drawHeight) return;
  for (let r of binRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      chosenBin = r.i;
      if (r.i === scenarios[idx].cat) {
        locked = true;
        if (!solved.includes(idx)) solved.push(idx);
      }
      return;
    }
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
