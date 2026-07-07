// The Five Requirements of Consent - MicroSim (classify examples per requirement)
// CANVAS_HEIGHT: 492
// Grades 9-12, Understand (L2): students classify example statements as meeting or
// failing each of the five consent requirements, building a transferable definition.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let meetsButton;
let failsButton;
let nextButton;

let reqs = [
  { name: 'Freely Given', def: 'A choice made without pressure, guilt, or fear.' },
  { name: 'Reversible', def: 'Anyone can change their mind at any time.' },
  { name: 'Informed', def: 'Everyone knows what they are actually agreeing to.' },
  { name: 'Enthusiastic', def: 'A genuine, willing yes — not a reluctant one.' },
  { name: 'Specific', def: 'Yes to one thing is not yes to everything.' }
];
// examples: req index, text, meets bool, explanation
let bank = [
  { r: 0, t: '"Okay, fine, just stop asking me!"', meets: false, e: 'Given only to stop pressure — not freely given.' },
  { r: 0, t: '"Yes, I\'d be glad to help you move."', meets: true, e: 'A willing choice with no pressure.' },
  { r: 0, t: '"I said yes because I was scared to say no."', meets: false, e: 'Fear removes free choice.' },
  { r: 1, t: '"Actually, I\'ve changed my mind — please stop."', meets: true, e: 'Consent can be withdrawn at any time.' },
  { r: 1, t: '"You already said yes, so you can\'t back out now."', meets: false, e: 'Consent must stay reversible.' },
  { r: 1, t: '"I\'m not comfortable anymore, let\'s stop." "Okay."', meets: true, e: 'Respecting a change of mind honors reversibility.' },
  { r: 2, t: 'Agreeing to share a photo, not knowing it will be posted publicly.', meets: false, e: 'Not informed about what they agreed to.' },
  { r: 2, t: '"I understand this text will be forwarded to the group, and that\'s fine."', meets: true, e: 'Fully informed about what happens.' },
  { r: 2, t: 'Signing up without being told the real cost.', meets: false, e: 'Missing information means not informed.' },
  { r: 3, t: '"Yes! I\'d love to."', meets: true, e: 'A clear, enthusiastic yes.' },
  { r: 3, t: 'A quiet "...I guess," while looking away.', meets: false, e: 'Reluctance is not enthusiastic consent.' },
  { r: 3, t: '"Absolutely, count me in."', meets: true, e: 'Genuine willingness.' },
  { r: 4, t: '"You can borrow my pencil" — then someone takes the whole case.', meets: false, e: 'Yes to one thing is not yes to more.' },
  { r: 4, t: '"You can tag me in this one photo, just this one."', meets: true, e: 'Specific to a single, clear thing.' },
  { r: 4, t: 'Agreeing to a hug, then being grabbed for more.', meets: false, e: 'Consent was specific, not general.' }
];

let order = [];
let pos = 0;
let picked = -1; // 0 fails, 1 meets
let correctCount = 0;
let totalAnswered = 0;
let panelRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  meetsButton = createButton('Meets This Requirement');
  meetsButton.mousePressed(() => judge(1));
  failsButton = createButton('Fails This Requirement');
  failsButton.mousePressed(() => judge(0));
  nextButton = createButton('Next Example');
  nextButton.mousePressed(next);
  positionControls();
  reshuffle();
  describe('Five consent-requirement panels — freely given, reversible, informed, ' +
    'enthusiastic, specific — with definitions. An example is tested against the active ' +
    'requirement; students judge whether it meets or fails it, with a running score.', LABEL);
}

function positionControls() {
  meetsButton.position(10, drawHeight + 14);
  failsButton.position(180, drawHeight + 14);
  nextButton.position(canvasWidth - 120, drawHeight + 14);
}

function reshuffle() {
  order = [...Array(bank.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  pos = 0; picked = -1;
}

function activeReq() { return bank[order[pos]].r; }

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
  text('The Five Requirements of Consent', canvasWidth / 2, 6);

  // requirement panels (left)
  panelRects = [];
  let lw = canvasWidth * 0.54;
  let y0 = 34, ph = 76, gap = 4;
  for (let i = 0; i < 5; i++) {
    let y = y0 + i * (ph + gap);
    panelRects.push({ x: margin, y: y, w: lw - margin, h: ph, i: i });
    let active = activeReq() === i;
    strokeWeight(active ? 3 : 1); stroke(active ? 'darkorange' : 'silver');
    fill(active ? 'lightyellow' : 'white');
    rect(margin, y, lw - margin, ph, 6);
    noStroke(); fill(active ? 'darkorange' : 'navy'); textAlign(LEFT, TOP); textSize(13);
    text((i + 1) + '. ' + reqs[i].name, margin + 8, y + 6);
    fill('black'); textSize(11);
    text(reqs[i].def, margin + 8, y + 26, lw - margin - 16, 46);
  }

  // example card (right)
  let rx = lw + 6, rw = canvasWidth - rx - margin;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(rx, 34, rw, 150, 8);
  noStroke(); fill('darkorange'); textAlign(LEFT, TOP); textSize(12);
  text('Test against: ' + reqs[activeReq()].name, rx + 10, 42, rw - 20, 30);
  fill('black'); textSize(13);
  text(bank[order[pos]].t, rx + 10, 68, rw - 20, 108);

  // feedback + score
  let fy = 194;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(rx, fy, rw, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (picked < 0) {
    fill('dimgray'); text('Does this meet or fail the requirement?', rx + 8, fy + 8, rw - 16, 60);
  } else {
    let ex = bank[order[pos]];
    let correct = (picked === 1) === ex.meets;
    fill(correct ? 'seagreen' : 'indianred');
    text((correct ? '✓ ' : '✗ ') + ex.e, rx + 8, fy + 8, rw - 16, 90);
  }
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Score: ' + correctCount + ' / ' + totalAnswered, rx + 8, fy + (drawHeight - fy - 10) - 8);
}

function judge(val) {
  if (picked >= 0) return;
  picked = val;
  totalAnswered++;
  if ((val === 1) === bank[order[pos]].meets) correctCount++;
}

function next() {
  pos++;
  if (pos >= order.length) reshuffle();
  picked = -1;
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
