// Health Influence Manager - MicroSim (match an influence to a managing strategy)
// CANVAS_HEIGHT: 492
// Grade 5, Analyze (L4): students match health-behavior influences to the strategies and
// resources that best manage them.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton;
let roundButton;

let strategies = [
  'Pause before reacting',
  'Ask whose idea it is',
  'Talk to a trusted adult',
  'Suggest an alternative',
  'Seek supportive influences'
];
// influence: text, acceptable strategy indices, reason
let influences = [
  { t: 'Ad for sugary cereal', ok: [1, 3], r: 'Notice it is an ad, then suggest a healthier choice.' },
  { t: 'Friend says homework can wait', ok: [0, 1], r: 'Pause and ask if this is really their best idea.' },
  { t: 'Family always orders fast food on Fridays', ok: [3, 2], r: 'Suggest an alternative or talk with family.' },
  { t: 'Feeling stressed before a test', ok: [0, 2], r: 'Pause to breathe, or talk to a trusted adult.' },
  { t: 'Group chat pressures you to stay up late', ok: [0, 2], r: 'Pause, and involve a trusted adult if needed.' },
  { t: 'You only see junk-food snacks at home', ok: [3, 4], r: 'Suggest an alternative or seek supportive options.' },
  { t: 'A video says a fad diet is "amazing"', ok: [1, 4], r: 'Ask whose idea it is and seek trustworthy sources.' },
  { t: 'You keep choosing screens over play', ok: [4, 0], r: 'Seek supportive influences and pause to choose activity.' }
];

let order = [];
let selInf = -1;
let assign = [];      // strategy index per influence, or -1
let feedback = 'Tap an influence, then tap the strategy that best manages it.';
let feedbackColor = 'dimgray';
let infRects = [], stratRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Match');
  checkButton.mousePressed(check);
  roundButton = createButton('New Round');
  roundButton.mousePressed(reset);
  positionControls();
  reset();
  describe('Eight influence cards and five strategy cards. Students tap an influence, tap ' +
    'the strategy that best manages it, and check whether the match makes sense.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 12);
  roundButton.position(150, drawHeight + 12);
}

function reset() {
  order = [...Array(influences.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  assign = new Array(influences.length).fill(-1);
  selInf = -1; feedback = 'Tap an influence, then tap a strategy.'; feedbackColor = 'dimgray';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Health Influence Manager', canvasWidth / 2, 6);

  // influences (left)
  infRects = [];
  let lw = canvasWidth * 0.54;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Influences:', margin, 30);
  let y0 = 46, ih = 40, gap = 4;
  for (let k = 0; k < order.length; k++) {
    let i = order[k];
    let y = y0 + k * (ih + gap);
    infRects.push({ x: margin, y: y, w: lw - margin, h: ih, i: i });
    let sel = selInf === i;
    let a = assign[i];
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : (a >= 0 ? 'seagreen' : 'gray'));
    fill(sel ? 'lightyellow' : (a >= 0 ? 'honeydew' : 'white'));
    rect(margin, y, lw - margin, ih, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(10.5); text(influences[i].t, margin + 6, y + ih / 2, lw - margin - 12, ih);
    if (a >= 0) { textAlign(RIGHT, CENTER); textSize(9); fill('seagreen'); text('→ ' + (a + 1), margin + lw - margin - 6, y + ih / 2); }
  }

  // strategies (right)
  stratRects = [];
  let rx = lw + 4, rw = canvasWidth - rx - margin;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Strategies:', rx, 30);
  for (let i = 0; i < 5; i++) {
    let y = 46 + i * 46;
    stratRects.push({ x: rx, y: y, w: rw, h: 40, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: rx, y: y, w: rw, h: 40 });
    strokeWeight(1.5); stroke('mediumpurple'); fill(hover && selInf >= 0 ? 'lavender' : 'white');
    rect(rx, y, rw, 40, 6);
    noStroke(); fill('indigo'); textAlign(LEFT, CENTER); textSize(10.5); text((i + 1) + '. ' + strategies[i], rx + 6, y + 20, rw - 12, 40);
  }
  cursor(overAny() ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor);
  text(feedback, margin, drawHeight - 26, canvasWidth - margin * 2, 24);
}

function overAny() {
  for (let r of infRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of stratRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of infRects) if (pointInRect(mouseX, mouseY, r)) { selInf = r.i; return; }
  if (selInf >= 0) for (let r of stratRects) if (pointInRect(mouseX, mouseY, r)) {
    assign[selInf] = r.i;
    let ok = influences[selInf].ok.includes(r.i);
    feedback = (ok ? '✓ Good match! ' : 'Reconsider — ') + influences[selInf].r;
    feedbackColor = ok ? 'seagreen' : 'darkgoldenrod';
    selInf = -1;
    return;
  }
}

function check() {
  let matched = assign.filter((a, i) => a >= 0 && influences[i].ok.includes(a)).length;
  let done = assign.filter(a => a >= 0).length;
  feedback = 'Good matches: ' + matched + ' of ' + done + ' placed. Match all 8 to finish.';
  feedbackColor = matched === influences.length ? 'seagreen' : 'navy';
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
