// Feelings Face Matcher - MicroSim (identify feeling + reason about cause)
// CANVAS_HEIGHT: 472
// Grade 1, Understand (L2): students identify a feeling from a face and scene, then
// explain what likely caused it.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

let feelings = ['Happy', 'Sad', 'Angry', 'Scared', 'Excited', 'Calm'];
let scenes = [
  { desc: 'Opening a birthday present.', feel: 0, cause: 'Getting a gift can make you feel happy.' },
  { desc: 'Hugging a fun new puppy.', feel: 4, cause: 'Something new and fun can make you excited.' },
  { desc: 'Ice cream fell on the ground.', feel: 1, cause: 'Losing something you liked can make you sad.' },
  { desc: 'Hearing loud thunder.', feel: 3, cause: 'Loud, surprising sounds can make you scared.' },
  { desc: 'A block tower was knocked over.', feel: 2, cause: 'When something feels unfair, you might feel angry.' },
  { desc: 'Slow breaths in a cozy corner.', feel: 5, cause: 'Quiet, cozy time can help you feel calm.' },
  { desc: 'Waiting for a turn, jumping up and down.', feel: 4, cause: 'Looking forward to fun feels exciting.' },
  { desc: "Can't find a favorite toy.", feel: 1, cause: 'Not finding something you love can make you sad.' }
];

let sIndex = 0;
let picked = -1;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scene');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { sIndex = 0; picked = -1; });
  positionControls();
  describe('A cartoon face and a short situation. Students pick the feeling word that ' +
    'matches, then see what likely caused that feeling.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Feelings Face Matcher', canvasWidth / 2, 8);

  // scene (left): big face + description
  let sw = canvasWidth * 0.5;
  let fx = sw / 2 + 6, fy = 150;
  drawFace(fx, fy, scenes[sIndex].feel);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(14);
  text(scenes[sIndex].desc, margin, 226, sw - margin, 60);

  // feeling cards (right, 2 cols x 3)
  cardRects = [];
  let rx = sw + 6, rw = canvasWidth - rx - margin;
  let cols = 2, gap = 8, cw = (rw - gap) / cols, ch = 48;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = rx + c * (cw + gap), y = 44 + r * (ch + 8);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: i });
    let sel = picked === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: cw, h: ch });
    let showRes = picked >= 0;
    strokeWeight(sel ? 3 : 1.5);
    if (showRes && i === scenes[sIndex].feel) { stroke('seagreen'); strokeWeight(2.5); fill('honeydew'); }
    else if (sel) { stroke('indianred'); fill('mistyrose'); }
    else { stroke('mediumpurple'); fill(hover && !showRes ? 'lavender' : 'white'); }
    rect(x, y, cw, ch, 8);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(14);
    text(feelings[i], x, y, cw, ch);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  // feedback
  let fy2 = 288;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, fy2, canvasWidth - margin * 2, drawHeight - fy2 - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (picked < 0) { fill('dimgray'); text('How does this child feel? Tap a feeling word.', margin + 10, fy2 + 10, canvasWidth - margin * 2 - 20, 40); }
  else {
    let correct = picked === scenes[sIndex].feel;
    fill(correct ? 'seagreen' : 'darkorange');
    text((correct ? '✓ Yes — ' + feelings[scenes[sIndex].feel] + '. ' : 'Look at the face again. It is ' + feelings[scenes[sIndex].feel] + '. ') + scenes[sIndex].cause,
      margin + 10, fy2 + 10, canvasWidth - margin * 2 - 20, 70);
  }
}

function drawFace(x, y, feel) {
  stroke('goldenrod'); strokeWeight(3); fill('lightyellow'); circle(x, y, 110);
  noStroke(); fill('sienna');
  // eyes
  if (feel === 3) { circle(x - 22, y - 12, 16); circle(x + 22, y - 12, 16); } // scared: big eyes
  else { circle(x - 22, y - 12, 10); circle(x + 22, y - 12, 10); }
  // mouth
  noFill(); stroke('sienna'); strokeWeight(3);
  if (feel === 0 || feel === 4) arc(x, y + 8, 44, 30, 0.1 * PI, 0.9 * PI);       // happy/excited: smile
  else if (feel === 1) arc(x, y + 30, 44, 26, PI + 0.1 * PI, TWO_PI - 0.1 * PI);  // sad: frown
  else if (feel === 2) { line(x - 18, y + 16, x + 18, y + 22); }                  // angry: slanted
  else if (feel === 3) ellipse(x, y + 18, 20, 24);                               // scared: O
  else if (feel === 5) line(x - 16, y + 16, x + 16, y + 16);                      // calm: gentle line
  // extras
  if (feel === 2) { stroke('sienna'); strokeWeight(2); line(x - 30, y - 26, x - 14, y - 20); line(x + 30, y - 26, x + 14, y - 20); } // angry brows
  if (feel === 4) { noStroke(); fill('gold'); textAlign(CENTER, CENTER); textSize(16); text('!', x + 40, y - 34); }
  noStroke();
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked >= 0) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
}

function next() { sIndex = (sIndex + 1) % scenes.length; picked = -1; }

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
