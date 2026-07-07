// Name That Feeling! - MicroSim (click-to-match feeling faces for pre-readers)
// CANVAS_HEIGHT: 512
// Kindergarten, Remember (L1): students name the feeling on a large friendly
// face by tapping the matching word+icon button — Happy, Sad, Mad, Scared, Calm.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 462;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;
let nextButton;

// Five feelings: 0 Happy, 1 Sad, 2 Mad, 3 Scared, 4 Calm
let feelings = ['Happy', 'Sad', 'Mad', 'Scared', 'Calm'];
let feelColors = ['gold', 'steelblue', 'indianred', 'mediumpurple', 'seagreen'];
let feelSoft = ['lightyellow', 'lightcyan', 'mistyrose', 'lavender', 'honeydew'];
let feelIcons = ['☺', '☂', '⚡', '!', '🌿'];

// Fixed friendly order — each feeling appears at least twice across 10 faces.
let order = [0, 1, 2, 3, 4, 0, 2, 1, 3, 4];

let idx = 0;          // which face in the order
let picked = -1;      // button the child last pressed this face (-1 none)
let solved = false;   // this face answered correctly
let score = 0;        // number of feelings named correctly
let done = false;     // all faces shown -> celebration
let btnRects = [];

// small animation state
let nodT = 0;         // >0 while nodding (correct)
let shakeT = 0;       // >0 while shaking (wrong)

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Face ▶');
  nextButton.mousePressed(nextFace);
  nextButton.parent(document.querySelector('main'));

  positionControls();
  describe('A large friendly cartoon face shows one feeling — happy, sad, mad, ' +
    'scared, or calm. The child taps the matching word-and-icon button below the ' +
    'face. Correct answers nod and add to the score; wrong answers gently shake ' +
    'and the right button glows.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 10);
  // Next Face sits on the right side of the control strip.
  nextButton.position(canvasWidth - 130, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  // background regions
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(26);
  text('Name That Feeling!', canvasWidth / 2, 8);

  if (done) {
    drawCelebration();
    updateAnim();
    layoutButtons();      // keep hit rects sane even if hidden
    updateControlStrip();
    return;
  }

  // instruction line
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(16);
  let msg;
  if (solved) msg = 'You named it! Press Next Face.';
  else if (picked >= 0) msg = 'Not quite — the glowing button is the answer. Try it!';
  else msg = 'How does this face feel? Tap the word.';
  text(msg, margin, 42, canvasWidth - 2 * margin, 44);

  // the big face
  let feel = order[idx];
  let faceCX = canvasWidth / 2;
  let faceCY = 180;
  drawFace(faceCX, faceCY, feel);

  // the five feeling buttons
  layoutButtons();
  drawButtons();

  updateAnim();
  updateControlStrip();
}

// ----- layout of the five clickable feeling buttons -----
function layoutButtons() {
  btnRects = [];
  let n = 5;
  let gap = 8;
  let bw = (canvasWidth - 2 * margin - (n - 1) * gap) / n;
  bw = Math.min(bw, 110);
  let totalW = n * bw + (n - 1) * gap;
  let startX = (canvasWidth - totalW) / 2;
  let by = 322;
  let bh = 120;
  for (let i = 0; i < n; i++) {
    let x = startX + i * (bw + gap);
    btnRects.push({ x: x, y: by, w: bw, h: bh, i: i });
  }
}

function drawButtons() {
  let feel = order[idx];
  for (let b of btnRects) {
    let i = b.i;
    let hover = pointInRect(mouseX, mouseY, b);
    // glow the correct button after a wrong guess
    let glow = (picked >= 0 && !solved && i === feel);

    // fill
    if (solved && i === feel) fill(feelSoft[i]);
    else if (glow) fill(feelSoft[i]);
    else if (hover) fill(feelSoft[i]);
    else fill('white');

    // border
    stroke(feelColors[i]);
    strokeWeight((glow || (solved && i === feel)) ? 5 : 3);
    rect(b.x, b.y, b.w, b.h, 14);

    // colored icon chip near the top of the button
    noStroke();
    fill(feelColors[i]);
    circle(b.x + b.w / 2, b.y + 34, 46);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(26);
    text(feelIcons[i], b.x + b.w / 2, b.y + 33);

    // word label under the icon
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(20);
    text(feelings[i], b.x, b.y + 74, b.w, 40);
  }
  cursor(overAnyBtn() && !solved ? HAND : ARROW);
}

// ----- the friendly cartoon face -----
function drawFace(x, y, feel) {
  push();
  // nod = small vertical bob; shake = small horizontal wiggle
  let dy = 0, dx = 0;
  if (nodT > 0) dy = sin((60 - nodT) * 0.5) * 6;
  if (shakeT > 0) dx = sin((40 - shakeT) * 0.9) * 7;
  translate(x + dx, y + dy);

  // head
  stroke('goldenrod');
  strokeWeight(4);
  fill('navajowhite');
  circle(0, 0, 200);

  // eyes + mouth per feeling
  noStroke();
  if (feel === 0) {          // Happy
    fill('sienna');
    circle(-38, -22, 22);
    circle(38, -22, 22);
    noFill(); stroke('sienna'); strokeWeight(7);
    arc(0, 12, 96, 84, 0.12 * PI, 0.88 * PI);   // big smile
    // rosy cheeks
    noStroke(); fill('lightpink');
    circle(-62, 20, 26); circle(62, 20, 26);
  } else if (feel === 1) {   // Sad
    fill('sienna');
    circle(-38, -18, 20);
    circle(38, -18, 20);
    noFill(); stroke('sienna'); strokeWeight(7);
    arc(0, 62, 90, 70, 1.12 * PI, 1.88 * PI);   // down-turned mouth
    // a tear
    noStroke(); fill('deepskyblue');
    ellipse(-46, 6, 12, 20);
  } else if (feel === 2) {   // Mad
    // angled brows
    stroke('sienna'); strokeWeight(8);
    line(-54, -44, -22, -30);
    line(54, -44, 22, -30);
    noStroke(); fill('sienna');
    circle(-38, -14, 20);
    circle(38, -14, 20);
    noFill(); stroke('sienna'); strokeWeight(7);
    arc(0, 66, 74, 46, 1.15 * PI, 1.85 * PI);   // frown
  } else if (feel === 3) {   // Scared
    fill('white'); stroke('sienna'); strokeWeight(3);
    circle(-38, -20, 34);                        // wide eyes
    circle(38, -20, 34);
    noStroke(); fill('sienna');
    circle(-38, -18, 14);
    circle(38, -18, 14);
    // raised brows
    stroke('sienna'); strokeWeight(6); noFill();
    arc(-38, -46, 34, 22, 1.05 * PI, 1.95 * PI);
    arc(38, -46, 34, 22, 1.05 * PI, 1.95 * PI);
    // small open mouth (worried)
    noStroke(); fill('sienna');
    ellipse(0, 56, 30, 40);
  } else {                   // Calm
    // relaxed closed/soft eyes
    stroke('sienna'); strokeWeight(6); noFill();
    arc(-38, -18, 34, 22, 0.08 * PI, 0.92 * PI);
    arc(38, -18, 34, 22, 0.08 * PI, 0.92 * PI);
    strokeWeight(6);
    arc(0, 34, 70, 40, 0.15 * PI, 0.85 * PI);    // gentle soft smile
    noStroke(); fill('lightpink');
    circle(-62, 16, 22); circle(62, 16, 22);
  }
  pop();
}

// ----- celebration screen -----
function drawCelebration() {
  noStroke();
  fill('seagreen');
  textAlign(CENTER, CENTER);
  textSize(64);
  text('🎉', canvasWidth / 2, 150);
  fill('navy');
  textSize(24);
  text('Great job!', canvasWidth / 2, 232);
  fill('dimgray');
  textSize(18);
  text('You know so many feeling words!', margin, 262, canvasWidth - 2 * margin, 40);
  fill('seagreen');
  textSize(20);
  text('You named ' + score + ' feelings!', canvasWidth / 2, 322);
  fill('dimgray');
  textSize(15);
  text('Press Reset to play again.', canvasWidth / 2, 360);
}

// ----- score / Reset visibility in the control strip -----
function updateControlStrip() {
  // score text drawn in the white control region
  noStroke();
  fill('seagreen');
  textAlign(CENTER, CENTER);
  textSize(18);
  let scoreLabel = 'You named ' + score + ' feeling' + (score === 1 ? '' : 's') + '!';
  text(scoreLabel, canvasWidth / 2, drawHeight + controlHeight / 2);

  // Next Face only useful once this face is solved (or on wrong tries, to move on)
  if (done) {
    nextButton.hide();
  } else if (picked >= 0) {
    nextButton.show();
  } else {
    nextButton.hide();
  }
}

function updateAnim() {
  if (nodT > 0) nodT--;
  if (shakeT > 0) shakeT--;
}

// ----- hit testing -----
function overAnyBtn() {
  for (let b of btnRects) if (pointInRect(mouseX, mouseY, b)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (done) return;
  let feel = order[idx];
  for (let b of btnRects) {
    if (pointInRect(mouseX, mouseY, b)) {
      if (solved) return;                 // already got it, wait for Next Face
      if (b.i === feel) {
        if (picked !== b.i || !solved) {
          solved = true;
          score++;
          nodT = 60;                      // nod
          playChime();
        }
      } else {
        picked = b.i;                     // remember wrong pick; glow correct one
        shakeT = 40;                      // gentle shake
      }
      return;
    }
  }
}

// ----- gentle cheerful chime (simple, forgiving) -----
function playChime() {
  try {
    let AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!window._nf_ac) window._nf_ac = new AC();
    let ac = window._nf_ac;
    if (ac.state === 'suspended') ac.resume();
    let now = ac.currentTime;
    let notes = [523.25, 659.25, 783.99]; // C5 E5 G5 — cheerful
    notes.forEach((f, k) => {
      let o = ac.createOscillator();
      let g = ac.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      let t0 = now + k * 0.09;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.28);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + 0.3);
    });
  } catch (e) { /* audio optional; ignore */ }
}

// ----- navigation -----
function nextFace() {
  if (done) return;
  if (idx >= order.length - 1) {
    done = true;
    nextButton.hide();
    return;
  }
  idx++;
  picked = -1;
  solved = false;
  nodT = 0;
  shakeT = 0;
}

function resetAll() {
  idx = 0;
  picked = -1;
  solved = false;
  score = 0;
  done = false;
  nodT = 0;
  shakeT = 0;
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
