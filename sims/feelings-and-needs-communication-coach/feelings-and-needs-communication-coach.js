// Feelings and Needs Communication Coach - MicroSim (build feel/because/need sentence)
// CANVAS_HEIGHT: 512
// Grade 1, Apply (L3): students demonstrate healthy communication by building an
// "I feel ___ because ___. I need ___." sentence from a picture prompt.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let sayButton;
let nextButton;

let feelings = ['happy', 'sad', 'tired', 'frustrated', 'worried', 'excited'];
let scenes = [
  { desc: 'Recess is rained out.', reasons: ['because recess is cancelled', 'because I wanted to play outside'], needs: ['a fun indoor game', 'to talk about it'] },
  { desc: 'The classroom is very loud.', reasons: ['because it is so noisy', 'because I can\'t think'], needs: ['some quiet', 'a break'] },
  { desc: 'The homework is hard.', reasons: ['because I don\'t understand it', 'because it is tricky'], needs: ['help', 'to try again'] },
  { desc: 'You were left out of a game.', reasons: ['because I got left out', 'because no one picked me'], needs: ['a turn to join', 'to talk to a friend'] },
  { desc: 'You feel worn out after lunch.', reasons: ['because I am so tired', 'because it was a long morning'], needs: ['rest', 'a calm moment'] },
  { desc: 'You got a great grade!', reasons: ['because I did really well', 'because I worked hard'], needs: ['to share the news', 'a high-five'] }
];

let sIndex = 0;
let selFeel = -1, selReason = -1, selNeed = -1;
let feelRects = [], reasonRects = [], needRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sayButton = createButton('🔊 Say My Sentence');
  sayButton.mousePressed(sayIt);
  nextButton = createButton('Next Scene');
  nextButton.mousePressed(next);
  positionControls();
  describe('A picture prompt and word-bank tiles to build an "I feel ___ because ___. I ' +
    'need ___." sentence — grouped into feeling, reason, and need tiles.', LABEL);
}

function positionControls() {
  sayButton.position(10, drawHeight + 12);
  nextButton.position(180, drawHeight + 12);
}

function sentence() {
  let f = selFeel >= 0 ? feelings[selFeel] : '___';
  let r = selReason >= 0 ? scenes[sIndex].reasons[selReason] : '___';
  let n = selNeed >= 0 ? scenes[sIndex].needs[selNeed] : '___';
  return 'I feel ' + f + ' ' + r + '. I need ' + n + '.';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Feelings & Needs Coach', canvasWidth / 2, 6);

  // scene
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 32, canvasWidth - margin * 2, 40, 8);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(15);
  text('Scene ' + (sIndex + 1) + ': ' + scenes[sIndex].desc, margin + 8, 52, canvasWidth - margin * 2 - 16, 34);

  // feeling tiles (2 rows of 3)
  feelRects = drawGroup('I feel...', feelings, 80, 3, 34, 'feel');
  // reason tiles (2)
  reasonRects = drawGroup('because...', scenes[sIndex].reasons, 168, 2, 42, 'reason');
  // need tiles (2)
  needRects = drawGroup('I need...', scenes[sIndex].needs, 236, 2, 42, 'need');
  cursor(overAny() ? HAND : ARROW);

  // sentence
  let by = 306;
  let ready = selFeel >= 0 && selReason >= 0 && selNeed >= 0;
  fill(ready ? 'honeydew' : 'white'); stroke(ready ? 'seagreen' : 'silver'); strokeWeight(1.5);
  rect(margin, by, canvasWidth - margin * 2, drawHeight - by - 10, 10);
  noStroke(); textAlign(CENTER, CENTER); fill(ready ? 'black' : 'gray'); textSize(ready ? 17 : 13);
  text(ready ? '"' + sentence() + '"' : 'Tap a feeling, a reason, and a need.', margin + 8, by, canvasWidth - margin * 2 - 16, drawHeight - by - 10);
}

function drawGroup(label, arr, y, cols, th, tag) {
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text(label, margin, y);
  let rects = [];
  let gap = 8, tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let sel = tag === 'feel' ? selFeel : (tag === 'reason' ? selReason : selNeed);
  for (let i = 0; i < arr.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap), yy = y + 16 + r * (th + 6);
    rects.push({ x: x, y: yy, w: tw, h: th, i: i, tag: tag });
    let chosen = sel === i;
    strokeWeight(chosen ? 3 : 1.5); stroke(chosen ? 'darkorange' : 'mediumpurple');
    let hover = pointInRect(mouseX, mouseY, { x: x, y: yy, w: tw, h: th });
    fill(chosen ? 'gold' : (hover ? 'lavender' : 'white'));
    rect(x, yy, tw, th, 7);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11);
    text(arr[i], x + 4, yy, tw - 8, th);
  }
  return rects;
}

function overAny() {
  for (let a of [feelRects, reasonRects, needRects]) for (let r of a) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of feelRects) if (pointInRect(mouseX, mouseY, r)) { selFeel = r.i; return; }
  for (let r of reasonRects) if (pointInRect(mouseX, mouseY, r)) { selReason = r.i; return; }
  for (let r of needRects) if (pointInRect(mouseX, mouseY, r)) { selNeed = r.i; return; }
}

function sayIt() {
  if (selFeel < 0 || selReason < 0 || selNeed < 0) return;
  try { let u = new SpeechSynthesisUtterance(sentence()); u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } catch (e) {}
}

function next() { sIndex = (sIndex + 1) % scenes.length; selFeel = -1; selReason = -1; selNeed = -1; }

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
