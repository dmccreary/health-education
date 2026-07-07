// Decision Consequence Explorer - MicroSim (compare short/long-term consequences)
// CANVAS_HEIGHT: 482
// Grade 5, Analyze (L4): students examine options for a health situation and compare the
// likely short-term and long-term consequences of each.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let compareButton;
let newButton;

let situations = [
  { s: 'Your team invites you to walk home instead of riding the bus, but you arrive 20 minutes later.',
    opts: [
      { label: 'Walk with the team', short: 'More physical activity and time with friends.', long: 'Arriving later means less time for homework tonight.' },
      { label: 'Ride the bus', short: 'Home sooner with more free time now.', long: 'You miss some activity and social time.' }
    ] },
  { s: 'You could stay up late watching videos or go to bed on time.',
    opts: [
      { label: 'Stay up late', short: 'More fun and screen time tonight.', long: 'Tired and less focused at school tomorrow.' },
      { label: 'Go to bed on time', short: 'Less screen time right now.', long: 'Rested, focused, and ready tomorrow.' }
    ] },
  { s: 'At snack time you can choose chips or fruit.',
    opts: [
      { label: 'Chips', short: 'Tasty and salty right away.', long: 'Less lasting energy and fewer nutrients.' },
      { label: 'Fruit', short: 'Sweet and refreshing now.', long: 'Steady energy and vitamins for your body.' }
    ] },
  { s: 'You have free time: play a game outside or scroll on a tablet.',
    opts: [
      { label: 'Play outside', short: 'Active and fun in the moment.', long: 'Better mood, energy, and sleep later.' },
      { label: 'Scroll a tablet', short: 'Relaxing and easy right now.', long: 'Long screen time can leave you restless.' }
    ] },
  { s: 'You broke a class rule by accident. Tell a trusted adult or stay quiet?',
    opts: [
      { label: 'Tell a trusted adult', short: 'A little nervous to speak up.', long: 'Builds trust and usually solves it faster.' },
      { label: 'Stay quiet', short: 'Avoids the moment now.', long: 'The problem can grow and trust can suffer.' }
    ] },
  { s: 'A friend disagrees with you. Talk it out or ignore them?',
    opts: [
      { label: 'Talk it out', short: 'Takes courage and effort now.', long: 'The friendship stays strong and clear.' },
      { label: 'Ignore them', short: 'Easier to avoid right now.', long: 'The disagreement can linger and grow.' }
    ] }
];

let sIndex = 0;
let selected = -1;
let compareAll = false;
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  compareButton = createButton('Compare Both');
  compareButton.mousePressed(() => { compareAll = true; selected = -1; });
  newButton = createButton('New Situation');
  newButton.mousePressed(next);
  positionControls();
  describe('A health situation with two option branches. Clicking an option shows its ' +
    'short-term and long-term consequences; Compare Both shows the options side by side.', LABEL);
}

function positionControls() {
  compareButton.position(10, drawHeight + 12);
  newButton.position(130, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(19);
  text('Decision Consequence Explorer', canvasWidth / 2, 8);

  let sit = situations[sIndex];
  // situation card
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 66, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Situation ' + (sIndex + 1) + '/6: ' + sit.s, margin + 12, 73, canvasWidth - margin * 2 - 24, 60);

  // option branch buttons
  optRects = [];
  let n = sit.opts.length;
  let bw = (canvasWidth - margin * 2 - 12 * (n - 1)) / n;
  let by = 118, bh = 40;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + 12);
    optRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: by, w: bw, h: bh });
    let sel = selected === i;
    strokeWeight(sel ? 3 : 1.5); stroke('mediumpurple');
    fill(sel ? 'lavender' : (hover ? 'floralwhite' : 'white'));
    rect(x, by, bw, bh, 8);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(13);
    text(sit.opts[i].label, x + 4, by, bw - 8, bh);
  }
  cursor(overAny() ? HAND : ARROW);

  // consequence panel(s)
  let py = 170, ph = drawHeight - py - 10;
  if (compareAll) {
    let colW = (canvasWidth - margin * 2 - 10) / n;
    for (let i = 0; i < n; i++) {
      let x = margin + i * (colW + 10);
      drawConsequence(x, py, colW, ph, sit.opts[i]);
    }
  } else {
    fill('white'); stroke('silver'); strokeWeight(1);
    rect(margin, py, canvasWidth - margin * 2, ph, 8);
    noStroke();
    if (selected < 0) {
      fill('dimgray'); textAlign(LEFT, TOP); textSize(13);
      text('Click an option to see its consequences, or Compare Both.', margin + 12, py + 12, canvasWidth - margin * 2 - 24, 40);
    } else {
      drawConsequenceText(margin + 12, py + 10, canvasWidth - margin * 2 - 24, sit.opts[selected]);
    }
  }
}

function drawConsequence(x, y, w, h, opt) {
  fill('white'); stroke('silver'); strokeWeight(1); rect(x, y, w, h, 8);
  noStroke(); fill('indigo'); textAlign(LEFT, TOP); textSize(12);
  text(opt.label, x + 8, y + 8, w - 16, 28);
  drawConsequenceText(x + 8, y + 32, w - 16, opt);
}

function drawConsequenceText(x, y, w, opt) {
  noStroke();
  fill('darkgoldenrod'); textAlign(LEFT, TOP); textSize(11);
  text('Short-term: ' + opt.short, x, y, w, 60);
  fill('teal');
  text('Long-term: ' + opt.long, x, y + 62, w, 70);
}

function overAny() { for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) { selected = r.i; compareAll = false; return; }
}

function next() { sIndex = (sIndex + 1) % situations.length; selected = -1; compareAll = false; }

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
