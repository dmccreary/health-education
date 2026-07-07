// Feeling Sentence Builder - MicroSim (assemble "I feel ___ because ___")
// CANVAS_HEIGHT: 482
// Grade 1, Apply (L3): students practice communicating a feeling by assembling an
// "I feel ___ because ___" sentence from tiles for a scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let sayButton;
let nextButton;

let feelings = ['happy', 'sad', 'angry', 'scared', 'excited', 'calm'];
let scenes = [
  { desc: "A child's block tower fell down.", reasons: ['because it fell down', 'because it was so tall', 'because I worked hard on it'] },
  { desc: 'A child is petting a soft new puppy.', reasons: ['because the puppy is soft', 'because I love animals', 'because it is so cute'] },
  { desc: "It is the child's turn on the swings.", reasons: ['because it is my turn now', 'because swinging is fun', 'because I waited nicely'] },
  { desc: 'A loud thunderstorm is outside.', reasons: ['because it is very loud', 'because of the thunder', 'because the sky is dark'] },
  { desc: 'A child finished a hard puzzle.', reasons: ['because I finished it', 'because it was tricky', 'because I did it myself'] }
];

let sIndex = 0;
let selFeel = -1, selReason = -1;
let feelRects = [], reasonRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sayButton = createButton('🔊 Say It!');
  sayButton.mousePressed(sayIt);
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(next);
  positionControls();
  describe('A scenario picture and tiles to build an "I feel ___ because ___" sentence — a ' +
    'row of feeling words and a row of reason tiles that match the scene.', LABEL);
}

function positionControls() {
  sayButton.position(10, drawHeight + 12);
  nextButton.position(120, drawHeight + 12);
}

function sentence() {
  let f = selFeel >= 0 ? feelings[selFeel] : '___';
  let r = selReason >= 0 ? scenes[sIndex].reasons[selReason] : '___';
  return 'I feel ' + f + ' ' + r + '.';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Feeling Sentence Builder', canvasWidth / 2, 8);

  // scene
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 50, 10);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(15);
  text(scenes[sIndex].desc, margin + 10, 65, canvasWidth - margin * 2 - 20, 44);

  // feeling tiles (2 rows of 3)
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13); text('I feel...', margin, 98);
  feelRects = [];
  let cols = 3, gap = 8;
  let tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols, th = 40;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap), y = 118 + r * (th + 8);
    feelRects.push({ x: x, y: y, w: tw, h: th, i: i });
    drawTile(x, y, tw, th, feelings[i], selFeel === i);
  }

  // reason tiles (1 row of 3)
  fill('navy'); textAlign(LEFT, TOP); textSize(13); text('because...', margin, 220);
  reasonRects = [];
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (tw + gap), y = 240;
    reasonRects.push({ x: x, y: y, w: tw, h: 50, i: i });
    drawTile(x, y, tw, 50, scenes[sIndex].reasons[i], selReason === i);
  }
  cursor(overAny() ? HAND : ARROW);

  // assembled sentence
  let by = 302;
  let ready = selFeel >= 0 && selReason >= 0;
  fill(ready ? 'honeydew' : 'white'); stroke(ready ? 'seagreen' : 'silver'); strokeWeight(1.5);
  rect(margin, by, canvasWidth - margin * 2, drawHeight - by - 10, 10);
  noStroke(); textAlign(CENTER, CENTER); fill(ready ? 'black' : 'gray'); textSize(ready ? 19 : 14);
  text(ready ? '"' + sentence() + '"' : 'Tap a feeling and a reason.', margin + 8, by, canvasWidth - margin * 2 - 16, drawHeight - by - 10);
}

function drawTile(x, y, w, h, label, sel) {
  strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'mediumpurple');
  let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });
  fill(sel ? 'gold' : (hover ? 'lavender' : 'white'));
  rect(x, y, w, h, 8);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(12);
  text(label, x + 4, y, w - 8, h);
}

function overAny() {
  for (let r of feelRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of reasonRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of feelRects) if (pointInRect(mouseX, mouseY, r)) { selFeel = r.i; return; }
  for (let r of reasonRects) if (pointInRect(mouseX, mouseY, r)) { selReason = r.i; return; }
}

function sayIt() {
  if (selFeel < 0 || selReason < 0) return;
  try { let u = new SpeechSynthesisUtterance(sentence()); u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } catch (e) {}
}

function next() { sIndex = (sIndex + 1) % scenes.length; selFeel = -1; selReason = -1; }

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
