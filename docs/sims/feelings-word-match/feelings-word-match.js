// Feelings Word Match - MicroSim (match feeling faces to words)
// CANVAS_HEIGHT: 452
// Kindergarten, Remember (L1): students expand emotions vocabulary by matching
// feeling-word cards to picture cards showing a face with that expression.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let emotions = ['happy', 'excited', 'frustrated', 'proud', 'lonely'];
let pastels = ['lightyellow', 'peachpuff', 'lightpink', 'palegreen', 'lightblue'];

let wordOrder = [];      // scrambled emotion indices for the word column
let matched = new Array(5).fill(false);  // matched[emotionIndex]
let selLeft = -1;        // selected picture (emotion index)
let flash = 0;
let leftRects = [], rightRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  reset();
  describe('Five picture cards showing feeling faces and five scrambled word cards. ' +
    'Children tap a face, then tap the word that matches; correct pairs connect and share ' +
    'a color.', LABEL);
}

function reset() {
  wordOrder = [0, 1, 2, 3, 4];
  for (let i = wordOrder.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [wordOrder[i], wordOrder[j]] = [wordOrder[j], wordOrder[i]]; }
  matched = new Array(5).fill(false);
  selLeft = -1; flash = 0;
  resetButton.position(10, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Feelings Word Match', canvasWidth / 2, 8);

  let colW = canvasWidth * 0.4;
  let ch = 56, gap = 8, y0 = 44;
  let leftX = margin, rightX = canvasWidth - margin - colW;

  // connecting lines for matched pairs (draw first)
  for (let e = 0; e < 5; e++) {
    if (matched[e]) {
      let ly = y0 + e * (ch + gap) + ch / 2;
      let wpos = wordOrder.indexOf(e);
      let ry = y0 + wpos * (ch + gap) + ch / 2;
      stroke('seagreen'); strokeWeight(2);
      line(leftX + colW, ly, rightX, ry);
    }
  }

  // left picture cards (fixed order)
  leftRects = [];
  for (let e = 0; e < 5; e++) {
    let y = y0 + e * (ch + gap);
    leftRects.push({ x: leftX, y: y, w: colW, h: ch, e: e });
    let sel = selLeft === e;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'gray');
    fill(matched[e] ? pastels[e] : 'white');
    rect(leftX, y, colW, ch, 8);
    drawFace(leftX + 28, y + ch / 2, e);
  }

  // right word cards (scrambled)
  rightRects = [];
  for (let i = 0; i < 5; i++) {
    let e = wordOrder[i];
    let y = y0 + i * (ch + gap);
    rightRects.push({ x: rightX, y: y, w: colW, h: ch, e: e });
    let hover = pointInRect(mouseX, mouseY, { x: rightX, y: y, w: colW, h: ch });
    strokeWeight(1.5); stroke('mediumpurple');
    fill(matched[e] ? pastels[e] : (hover && selLeft >= 0 ? 'lavender' : 'white'));
    rect(rightX, y, colW, ch, 8);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(15);
    text(emotions[e], rightX, y, colW, ch);
  }
  cursor(overAny() ? HAND : ARROW);

  // score
  let done = matched.filter(Boolean).length;
  noStroke(); textAlign(CENTER, BOTTOM); textSize(15);
  fill(done === 5 ? 'seagreen' : 'navy');
  text(done === 5 ? 'All 5 matched! Great job!' : done + ' of 5 matched!', margin, drawHeight - 8, canvasWidth - margin * 2, 24);
}

function drawFace(x, y, e) {
  stroke('goldenrod'); strokeWeight(2); fill('lightyellow'); circle(x, y, 40);
  noStroke(); fill('sienna'); circle(x - 8, y - 4, 5); circle(x + 8, y - 4, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  if (e === 0 || e === 1 || e === 3) arc(x, y + 4, 18, 12, 0.1 * PI, 0.9 * PI); // happy/excited/proud smile
  else if (e === 2) line(x - 8, y + 8, x + 8, y + 8);                          // frustrated line
  else arc(x, y + 12, 18, 10, PI + 0.1 * PI, TWO_PI - 0.1 * PI);               // lonely frown
  if (e === 1) { noStroke(); fill('gold'); textAlign(CENTER, CENTER); textSize(10); text('!', x + 16, y - 12); }
  noStroke();
}

function overAny() {
  for (let r of leftRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of rightRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of leftRects) if (pointInRect(mouseX, mouseY, r) && !matched[r.e]) { selLeft = r.e; return; }
  if (selLeft >= 0) {
    for (let r of rightRects) {
      if (pointInRect(mouseX, mouseY, r) && !matched[r.e]) {
        if (r.e === selLeft) matched[selLeft] = true;
        selLeft = -1;
        return;
      }
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  resetButton.position(10, drawHeight + 12);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
