// Family and Peer Influence Sorter - MicroSim (two-stage classify)
// CANVAS_HEIGHT: 472
// Grade 5, Analyze (L4): students differentiate whether a decision is influenced mainly
// by family, mainly by peers, or both, and whether the influence pushes toward or away
// from health.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// src: 'family'/'peer'/'both'; health: 'toward'/'away'
let deck = [
  { t: 'Your older sister always packs a water bottle, so you started too.', src: 'family', health: 'toward' },
  { t: 'Your friends dared you to try a vape at a party.', src: 'peer', health: 'away' },
  { t: 'Your family walks the dog together every evening.', src: 'family', health: 'toward' },
  { t: 'A classmate convinced the group to leave someone out at recess.', src: 'peer', health: 'away' },
  { t: 'Your parents and friends both encourage you to join the swim team.', src: 'both', health: 'toward' },
  { t: 'Your friends want you to stay up late gaming on a school night.', src: 'peer', health: 'away' },
  { t: 'Your grandma teaches you to cook a healthy meal.', src: 'family', health: 'toward' },
  { t: 'Friends and family both cheer you on to finish your homework.', src: 'both', health: 'toward' },
  { t: 'A friend pressures you to skip breakfast to look a certain way.', src: 'peer', health: 'away' },
  { t: 'Your family reminds you to wear a helmet when biking.', src: 'family', health: 'toward' }
];

let idx = 0;
let srcPick = '';
let healthPick = '';
let srcRects = [], healthRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { idx = 0; srcPick = ''; healthPick = ''; });
  positionControls();
  describe('A scenario about a decision. Students first sort whether the influence is ' +
    'mainly family, mainly peers, or both, then judge whether it pushes toward or away ' +
    'from health, with feedback.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Family & Peer Influence Sorter', canvasWidth / 2, 8);

  let d = deck[idx];
  // scenario speech bubble
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 38, canvasWidth - margin * 2, 90, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 46);
  fill('black'); textSize(15); text(d.t, margin + 12, 64, canvasWidth - margin * 2 - 24, 60);

  // stage 1: source
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text('1. Who is the main influence?', margin, 138);
  srcRects = drawButtons(['Family', 'Peer', 'Both'], ['family', 'peer', 'both'], 158, srcPick, srcCorrect());

  // stage 2: health (only after source chosen)
  fill('navy'); text('2. Does it push toward or away from health?', margin, 214);
  if (srcPick) healthRects = drawButtons(['Toward Health', 'Away From Health'], ['toward', 'away'], 234, healthPick, healthCorrect());
  else { healthRects = []; noStroke(); fill('lightgray'); textAlign(LEFT, TOP); textSize(12); text('(choose the influence first)', margin, 238); }
  cursor(overAny() ? HAND : ARROW);

  // feedback
  let fy = 296;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (!srcPick) { fill('dimgray'); text('Start by choosing the main influence.', margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 40); }
  else if (!healthPick) {
    let sc = srcPick === d.src;
    fill(sc ? 'seagreen' : 'darkgoldenrod');
    text((sc ? '✓ Right — ' : 'Actually ' + d.src + ' — ') + 'now judge the health direction.', margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 40);
  } else {
    let sc = srcPick === d.src, hc = healthPick === d.health;
    fill(sc && hc ? 'seagreen' : 'darkgoldenrod');
    text((sc && hc ? '✓ Correct on both! ' : 'Answer: ' + d.src + ', ' + d.health + ' health. ') +
      'This influence is mainly from ' + d.src + ' and pushes ' + d.health + ' health.', margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 60);
  }
}

function srcCorrect() { return srcPick ? deck[idx].src : null; }
function healthCorrect() { return healthPick ? deck[idx].health : null; }

function drawButtons(labels, vals, y, pick, correctVal) {
  let rects = [];
  let n = labels.length, gap = 8;
  let bw = (canvasWidth - margin * 2 - gap * (n - 1)) / n, bh = 40;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    rects.push({ x: x, y: y, w: bw, h: bh, val: vals[i] });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: bw, h: bh });
    let chosen = pick === vals[i];
    let done = pick !== '';
    strokeWeight(chosen ? 3 : 1.5); stroke('mediumpurple');
    if (done && vals[i] === correctVal) fill('honeydew');
    else if (chosen) fill('mistyrose');
    else fill(hover && !done ? 'lavender' : 'white');
    rect(x, y, bw, bh, 8);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(12);
    text(labels[i], x + 4, y, bw - 8, bh);
  }
  return rects;
}

function overAny() {
  for (let r of srcRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of healthRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (!srcPick) { for (let r of srcRects) if (pointInRect(mouseX, mouseY, r)) { srcPick = r.val; return; } }
  else if (!healthPick) { for (let r of healthRects) if (pointInRect(mouseX, mouseY, r)) { healthPick = r.val; return; } }
}

function next() { idx = (idx + 1) % deck.length; srcPick = ''; healthPick = ''; }

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
