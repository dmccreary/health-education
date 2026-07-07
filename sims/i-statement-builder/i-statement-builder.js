// I-Statement Builder - MicroSim (assemble a four-part I-statement)
// CANVAS_HEIGHT: 512
// Grade 3, Apply (L3): students construct I-statements using the frame
// "I feel ___ when ___, because ___. Could you ___?"

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let sayButton, nextButton;

let scenarios = [
  { ctx: 'Your friend keeps interrupting you at lunch.',
    parts: [['frustrated', 'ignored', 'upset'], ['you interrupt me', 'I can\'t finish', 'you talk over me'], ['I want to share too', 'my ideas matter', 'I feel unheard'], ['let me finish', 'take turns talking', 'wait until I\'m done']] },
  { ctx: "A classmate borrowed your marker and hasn't returned it.",
    parts: [['annoyed', 'worried', 'disappointed'], ["my marker isn't back", "I can't find it", 'you still have it'], ['I need it for class', "it's mine", 'I want it back'], ['return my marker', 'ask me next time', 'bring it tomorrow']] },
  { ctx: 'Your sibling changed the TV channel while you were watching.',
    parts: [['upset', 'frustrated', 'annoyed'], ['you change my show', "I can't watch", 'you take the remote'], ['I was watching it', "it's my turn", 'I want to finish'], ['ask me first', 'take turns', 'let me finish my show']] },
  { ctx: 'A friend did not include you in a game.',
    parts: [['left out', 'sad', 'hurt'], ["I'm not included", 'you play without me', 'I get left behind'], ['I want to join', 'I like playing too', 'we are friends'], ['include me next time', 'let me play', 'ask me to join']] }
];
let labels = ['I feel...', 'when...', 'because...', 'Could you...'];

let sIndex = 0;
let sel = [-1, -1, -1, -1];
let partRects = [[], [], [], []];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sayButton = createButton('🔊 Say It'); sayButton.mousePressed(sayIt);
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { sIndex = (sIndex + 1) % scenarios.length; sel = [-1, -1, -1, -1]; });
  positionControls();
  describe('A scenario and four parts to build an I-statement: I feel ___ when ___, ' +
    'because ___. Could you ___? Students pick a chip for each part and hear the sentence.', LABEL);
}
function positionControls() { sayButton.position(10, drawHeight + 14); nextButton.position(100, drawHeight + 14); }

function sentence() {
  let p = scenarios[sIndex].parts;
  let g = i => sel[i] >= 0 ? p[i][sel[i]] : '___';
  return 'I feel ' + g(0) + ' when ' + g(1) + ', because ' + g(2) + '. Could you ' + g(3) + '?';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(18); text('I-Statement Builder', canvasWidth / 2, 6);

  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5); rect(margin, 30, canvasWidth - margin * 2, 40, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(13); text(scenarios[sIndex].ctx, margin + 10, 50, canvasWidth - margin * 2 - 20, 36);

  let py = 78;
  partRects = [[], [], [], []];
  for (let pi = 0; pi < 4; pi++) {
    noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text(labels[pi], margin, py);
    let chipY = py + 16, chipH = 30, gap = 6, cols = 3, cw = (canvasWidth - margin * 2 - gap * 2) / cols;
    let arr = scenarios[sIndex].parts[pi];
    for (let o = 0; o < arr.length; o++) {
      let x = margin + o * (cw + gap);
      partRects[pi].push({ x: x, y: chipY, w: cw, h: chipH, pi: pi, o: o });
      let chosen = sel[pi] === o, hover = pointInRect(mouseX, mouseY, { x: x, y: chipY, w: cw, h: chipH });
      strokeWeight(chosen ? 3 : 1.5); stroke(chosen ? 'darkorange' : 'mediumpurple'); fill(chosen ? 'gold' : (hover ? 'lavender' : 'white'));
      rect(x, chipY, cw, chipH, 6);
      noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(10); text(arr[o], x + 3, chipY, cw - 6, chipH);
    }
    py = chipY + chipH + 10;
  }
  cursor(overAny() ? HAND : ARROW);

  let ready = sel.every(s => s >= 0);
  let by = py + 2, bh = drawHeight - by - 10;
  fill(ready ? 'honeydew' : 'white'); stroke(ready ? 'seagreen' : 'silver'); strokeWeight(1.5); rect(margin, by, canvasWidth - margin * 2, bh, 8);
  noStroke(); textAlign(LEFT, TOP); fill(ready ? 'black' : 'gray'); textSize(ready ? 14 : 12);
  text(ready ? '"' + sentence() + '"' : 'Pick a chip for each of the four parts.', margin + 10, by + 8, canvasWidth - margin * 2 - 20, bh - 16);
}
function overAny() { for (let a of partRects) for (let r of a) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { for (let a of partRects) for (let r of a) if (pointInRect(mouseX, mouseY, r)) { sel[r.pi] = r.o; return; } }
function sayIt() { if (!sel.every(s => s >= 0)) return; try { let u = new SpeechSynthesisUtterance(sentence()); u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } catch (e) {} }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
