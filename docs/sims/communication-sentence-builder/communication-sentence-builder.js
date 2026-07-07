// Finish the Sentence - Communication Practice - MicroSim (tile sentence builder)
// CANVAS_HEIGHT: 484
// Grade 1, Apply (L3): students demonstrate healthy communication by completing a
// sentence-starter with feeling and request tiles. Multiple valid completions accepted.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 432;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let hearButton;
let nextButton;

let scenes = [
  { desc: 'You feel left out at recess.', icon: 'recess',
    feelings: ['left out', 'sad', 'lonely'], requests: ['Will you play with me?', 'Can I join in?', 'May I play too?'] },
  { desc: 'Your zipper is stuck and you need help.', icon: 'zipper',
    feelings: ['stuck', 'frustrated', 'unsure'], requests: ['Can you help me?', 'Will you help my zipper?', 'Can you show me?'] },
  { desc: "It's a fire drill and you feel scared.", icon: 'drill',
    feelings: ['scared', 'nervous', 'worried'], requests: ['Can you stay near me?', 'Can I hold your hand?', 'Will you help me feel safe?'] },
  { desc: 'You want a turn with a toy.', icon: 'turn',
    feelings: ['excited', 'ready', 'hopeful'], requests: ['Can I have a turn?', 'May I try next?', 'Can we share?'] },
  { desc: "You don't understand the directions.", icon: 'confused',
    feelings: ['confused', 'unsure', 'mixed up'], requests: ['Can you show me?', 'Will you explain?', 'Can you say it again?'] },
  { desc: 'You feel tired and need a break.', icon: 'tired',
    feelings: ['tired', 'sleepy', 'worn out'], requests: ['Can I take a break?', 'May I rest?', 'Can I sit down?'] }
];

let sIndex = 0;
let selFeel = -1, selReq = -1;
let feelRects = [], reqRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  hearButton = createButton('🔊 Hear My Sentence');
  hearButton.mousePressed(hearIt);
  nextButton = createButton('Next Scene');
  nextButton.mousePressed(nextScene);
  positionControls();
  describe('A scene with a child in a situation and a sentence frame — "I feel ___." plus ' +
    'a request. Students tap a feeling tile and a request tile to build a healthy ' +
    'communication sentence, shown large for read-aloud.', LABEL);
}

function positionControls() {
  hearButton.position(10, drawHeight + 12);
  nextButton.position(170, drawHeight + 12);
}

function sentence() {
  let sc = scenes[sIndex];
  let f = selFeel >= 0 ? sc.feelings[selFeel] : '___';
  let r = selReq >= 0 ? sc.requests[selReq] : '___';
  return 'I feel ' + f + '. ' + r;
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
  textSize(20);
  text('Finish the Sentence', canvasWidth / 2, 8);

  // scene
  let sc = scenes[sIndex];
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 70, 10);
  drawIcon(sc.icon, margin + 36, 75);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(16);
  text(sc.desc, margin + 72, 75, canvasWidth - margin * 2 - 84, 60);

  // feeling tiles
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(14);
  text('I feel...', margin, 120);
  feelRects = drawTiles(sc.feelings, 140, selFeel, 'feel');
  // request tiles
  fill('navy'); textAlign(LEFT, TOP); textSize(14);
  text('Then I can ask...', margin, 196);
  reqRects = drawTiles(sc.requests, 216, selReq, 'req');
  cursor(overTiles() ? HAND : ARROW);

  // built sentence
  let by = 288;
  let ready = selFeel >= 0 && selReq >= 0;
  fill(ready ? 'honeydew' : 'white'); stroke(ready ? 'seagreen' : 'silver'); strokeWeight(1.5);
  rect(margin, by, canvasWidth - margin * 2, drawHeight - by - 10, 10);
  noStroke(); textAlign(CENTER, CENTER);
  fill(ready ? 'black' : 'gray'); textSize(ready ? 20 : 15);
  text(ready ? '"' + sentence() + '"' : 'Tap a feeling and a way to ask.',
    margin + 10, by, canvasWidth - margin * 2 - 20, drawHeight - by - 10);
}

function drawTiles(opts, y, sel, tag) {
  let rects = [];
  let n = opts.length, gap = 8;
  let tw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let th = 44;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (tw + gap);
    rects.push({ x: x, y: y, w: tw, h: th, i: i, tag: tag });
    let chosen = sel === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th });
    strokeWeight(chosen ? 3 : 1.5);
    stroke(chosen ? 'darkorange' : 'mediumpurple');
    fill(chosen ? 'gold' : (hover ? 'lavender' : 'white'));
    rect(x, y, tw, th, 8);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(13);
    text(opts[i], x + 4, y, tw - 8, th);
  }
  return rects;
}

function drawIcon(type, x, y) {
  push(); strokeWeight(2); stroke('slateblue'); fill('lavender');
  circle(x, y - 6, 26); rect(x - 10, y + 4, 20, 16, 4);
  noStroke(); fill('slateblue'); textAlign(CENTER, CENTER); textSize(12);
  pop();
}

function overTiles() {
  for (let r of feelRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of reqRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of feelRects) if (pointInRect(mouseX, mouseY, r)) { selFeel = r.i; return; }
  for (let r of reqRects) if (pointInRect(mouseX, mouseY, r)) { selReq = r.i; return; }
}

function hearIt() {
  if (selFeel < 0 || selReq < 0) return;
  try {
    let u = new SpeechSynthesisUtterance(sentence());
    u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  } catch (e) { /* no speech */ }
}

function nextScene() {
  sIndex = (sIndex + 1) % scenes.length;
  selFeel = -1; selReq = -1;
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
