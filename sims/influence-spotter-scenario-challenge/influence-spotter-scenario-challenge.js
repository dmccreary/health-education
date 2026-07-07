// Influence Spotter Scenario Challenge - MicroSim (classify the influence source)
// CANVAS_HEIGHT: 472
// Grades 6-8, Analyze (L4): students classify the primary source of health influence in
// each of 10 scenarios.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;

let cats = ['Social Norm', 'Public Health Policy', 'Family/Culture', 'Peer', 'Media'];
let deck = [
  { t: '"Everyone at school brings a reusable water bottle, so you do too."', a: 0, e: 'Doing what "everyone" does is a social norm.' },
  { t: 'The city bans smoking in all public parks.', a: 1, e: 'A law or rule is a public-health policy.' },
  { t: 'Your family always shares a home-cooked meal on Sundays.', a: 2, e: 'A family tradition is a family/culture influence.' },
  { t: 'A friend convinces you to join the running club.', a: 3, e: 'A friend directly influencing you is a peer influence.' },
  { t: 'An ad makes an energy drink look exciting and cool.', a: 4, e: 'Advertising and screens are media influences.' },
  { t: 'A new law requires helmets for bike riders under 18.', a: 1, e: 'A required rule is a public-health policy.' },
  { t: 'Your grandmother teaches a traditional healthy recipe.', a: 2, e: 'Passed-down cultural practices are family/culture.' },
  { t: '"It just feels normal here to walk to school."', a: 0, e: 'An unspoken "what people around here do" is a social norm.' },
  { t: 'A classmate dares you to skip breakfast to look a certain way.', a: 3, e: 'Direct pressure from a classmate is a peer influence.' },
  { t: 'A viral video promotes a risky trend.', a: 4, e: 'Content on screens spreading a trend is media.' }
];

let idx = 0, picked = -1, correctCount = 0;
let catRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { if (idx < deck.length - 1) { idx++; picked = -1; } });
  positionControls();
  describe('Ten scenarios, each classified into one of five influence sources — social ' +
    'norm, public-health policy, family/culture, peer, or media — with a progress bar and ' +
    'explanations.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Influence Spotter Challenge', canvasWidth / 2, 8);

  // progress bar
  noStroke(); fill('gainsboro'); rect(margin, 34, canvasWidth - margin * 2, 10, 5);
  fill('seagreen'); rect(margin, 34, (canvasWidth - margin * 2) * (idx + 1) / deck.length, 10, 5);
  fill('dimgray'); textAlign(RIGHT, TOP); textSize(11); text('Scenario ' + (idx + 1) + '/' + deck.length + '  ·  Correct: ' + correctCount, canvasWidth - margin, 48);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, 66, canvasWidth - margin * 2, 76, 10);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14); text(deck[idx].t, margin + 12, 104, canvasWidth - margin * 2 - 24, 66);

  catRects = [];
  let oy = 152, oh = 34, gap = 6;
  for (let i = 0; i < 5; i++) {
    let y = oy + i * (oh + gap);
    catRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, catRects[i]); let isA = deck[idx].a === i;
    strokeWeight(1.5); stroke('mediumpurple');
    if (picked < 0) fill(hover ? 'lavender' : 'white');
    else if (isA) { fill('honeydew'); stroke('seagreen'); strokeWeight(2.5); }
    else if (i === picked) { fill('mistyrose'); stroke('indianred'); strokeWeight(2.5); }
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, oh, 7);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(13); text(cats[i], margin, y, canvasWidth - margin * 2, oh);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  let fy = oy + 5 * (oh + gap) + 2;
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (picked < 0) { fill('dimgray'); text('Which source of influence is this? Click one.', margin, fy, canvasWidth - margin * 2, 30); }
  else { let ok = picked === deck[idx].a; fill(ok ? 'seagreen' : 'indianred'); text((ok ? '✓ ' : '✗ It\'s ' + cats[deck[idx].a] + '. ') + deck[idx].e, margin, fy, canvasWidth - margin * 2, 40); }
}
function overAny() { for (let r of catRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked >= 0) return; for (let r of catRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; if (r.i === deck[idx].a) correctCount++; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
