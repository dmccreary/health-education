// Safe Touch or Unwanted Touch? - MicroSim (Grade 2, Remember L1)
// CANVAS_HEIGHT: 526
// Students read a calm, non-graphic touch scenario and choose "Safe and Wanted"
// or "Unwanted -- Tell a Trusted Adult," using their own feelings as the guide.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 56;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// safe:true  -> Safe and Wanted   |   safe:false -> Unwanted, tell a trusted adult
// icon: 'wave' 'hug' 'pat' 'caution' 'secret' 'stop'
let scenarios = [
  { t: 'A high-five from a friend after a game.',
    safe: true, icon: 'wave',
    fb: "That's right. A high-five you enjoy is a safe, wanted touch." },
  { t: 'A hug from a parent at bedtime that feels good.',
    safe: true, icon: 'hug',
    fb: "That's right. A hug that feels good and is welcome is a safe, wanted touch." },
  { t: 'Someone touches you in a way that feels confusing and asks you to keep it a secret.',
    safe: false, icon: 'secret',
    fb: "That's right. Any touch that feels confusing, or comes with a request to keep a secret, is a sign to tell a trusted adult right away." },
  { t: 'A pat on the back from a coach during practice that feels fine.',
    safe: true, icon: 'pat',
    fb: "That's right. A pat on the back that feels fine to you is a safe, wanted touch." },
  { t: 'Someone touches a private part of your body and it feels wrong.',
    safe: false, icon: 'caution',
    fb: "That's right. A touch on a private part of your body that feels wrong is unwanted. Tell a trusted adult." },
  { t: 'A relative keeps tickling you even after you said stop.',
    safe: false, icon: 'stop',
    fb: "That's right. When someone keeps touching you after you said stop, that touch is unwanted. It is okay to tell a trusted adult." }
];

let idx = 0;
let choice = null;          // true/false once answered
let feedback = '';
let feedbackColor = 'dimgray';

// choice-button hit rects (rebuilt each frame)
let safeRect = null;
let unwantedRect = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  resetAll();
  describe('A body-safety sorting game. A calm caption describes a touch, and the ' +
    'student taps the green heart (Safe and Wanted) or the orange stop-hand ' +
    '(Unwanted -- Tell a Trusted Adult). Feedback stays gentle and reassuring.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 130, drawHeight + 12);
}

function resetAll() {
  idx = 0;
  choice = null;
  feedback = 'Read the scenario. How would it feel? Then tap the green heart or the orange hand.';
  feedbackColor = 'dimgray';
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  choice = null;
  feedback = 'Read the scenario. How would it feel? Then tap the green heart or the orange hand.';
  feedbackColor = 'dimgray';
}

function draw() {
  updateCanvasSize();

  // panels
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title (wrap box: x is LEFT edge, so pass margin not canvasWidth/2)
  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Safe Touch or Unwanted Touch?', margin, 8, canvasWidth - margin * 2, 28);

  let sc = scenarios[idx];

  // ----- scenario banner (calm caption + neutral icon) -----
  let bannerY = 44, bannerH = 112;
  fill('lavender'); stroke('lightsteelblue'); strokeWeight(1.5);
  rect(margin, bannerY, canvasWidth - margin * 2, bannerH, 10);
  noStroke();

  // neutral icon on the left of the banner
  drawIcon(sc.icon, margin + 40, bannerY + bannerH / 2, 30);

  // caption text (wrapped) to the right of the icon
  fill('midnightblue'); textAlign(LEFT, CENTER); textSize(17);
  let capX = margin + 78;
  text(sc.t, capX, bannerY + 8, canvasWidth - margin - capX - 8, bannerH - 16);

  // scenario counter
  noStroke(); fill('slategray'); textAlign(RIGHT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length, canvasWidth - margin, bannerY - 20);

  // ----- two large choice buttons -----
  let btnTop = bannerY + bannerH + 16;
  let btnH = 84;
  let gap = 14;
  let btnW = (canvasWidth - margin * 2 - gap) / 2;

  safeRect = { x: margin, y: btnTop, w: btnW, h: btnH };
  unwantedRect = { x: margin + btnW + gap, y: btnTop, w: btnW, h: btnH };

  drawChoiceButton(safeRect, true, sc);
  drawChoiceButton(unwantedRect, false, sc);

  cursor((pointInRect(mouseX, mouseY, safeRect) || pointInRect(mouseX, mouseY, unwantedRect)) ? HAND : ARROW);

  // ----- infobox (calm feedback) -----
  let infoY = btnTop + btnH + 16;
  let infoH = drawHeight - infoY - margin;
  fill('white'); stroke('lightsteelblue'); strokeWeight(1.5);
  rect(margin, infoY, canvasWidth - margin * 2, infoH, 8);
  noStroke();
  fill(feedbackColor); textAlign(LEFT, TOP); textSize(15);
  text(feedback, margin + 12, infoY + 10, canvasWidth - margin * 2 - 24, infoH - 20);
}

// Draw one large choice button (drawn shape, hit-tested in mousePressed)
function drawChoiceButton(r, isSafe, sc) {
  let answered = choice !== null;
  let picked = answered && (choice === isSafe);
  let correctChoice = isSafe === sc.safe;
  let hover = pointInRect(mouseX, mouseY, r);

  let base = isSafe ? 'seagreen' : 'darkorange';
  let soft = isSafe ? 'honeydew' : 'oldlace';

  strokeWeight(3);
  if (picked) {
    // highlight the button the student pressed
    stroke(correctChoice ? 'seagreen' : 'indianred');
    fill(correctChoice ? 'palegreen' : 'mistyrose');
  } else {
    stroke(base);
    fill(hover && !answered ? soft : 'white');
  }
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke();

  // icon (heart for safe, stop-hand for unwanted) centered near top
  let cx = r.x + r.w / 2;
  if (isSafe) drawHeart(cx, r.y + 26, 15, base);
  else drawStopHand(cx, r.y + 26, 15, base);

  // label under the icon, wrapped inside the button
  fill(base); textAlign(CENTER, TOP); textSize(13);
  let label = isSafe ? 'Safe and Wanted' : 'Unwanted --\nTell a Trusted Adult';
  text(label, r.x + 4, r.y + 46, r.w - 8, r.h - 46);

  // check / x badge after an answer
  if (answered && picked) {
    fill(correctChoice ? 'seagreen' : 'indianred'); textAlign(LEFT, TOP); textSize(18);
    text(correctChoice ? '✓' : '✗', r.x + 8, r.y + 6);
  }
}

// ---------- neutral banner icons (abstract, non-graphic) ----------
function drawIcon(kind, cx, cy, s) {
  push();
  translate(cx, cy);
  strokeWeight(3); noFill();
  if (kind === 'wave') {            // raised open hand (high-five)
    stroke('steelblue');
    ellipse(0, 4, s * 1.1, s * 1.2);
    stroke('steelblue'); strokeWeight(3);
    for (let i = -1; i <= 2; i++) line(i * (s * 0.22), -s * 0.5, i * (s * 0.22), -s * 0.05);
  } else if (kind === 'hug') {      // two overlapping arcs (embrace)
    stroke('mediumpurple'); strokeWeight(4);
    arc(-s * 0.18, 0, s, s * 1.3, radians(300), radians(150));
    arc(s * 0.18, 0, s, s * 1.3, radians(30), radians(240));
  } else if (kind === 'pat') {      // hand + shoulder line
    stroke('steelblue');
    line(-s * 0.7, s * 0.4, s * 0.7, s * 0.4);
    ellipse(s * 0.2, -s * 0.1, s * 0.9, s);
  } else if (kind === 'caution' || kind === 'stop') { // caution triangle with !
    stroke('goldenrod'); strokeWeight(3); strokeJoin(ROUND);
    triangle(0, -s, -s, s * 0.8, s, s * 0.8);
    stroke('goldenrod'); strokeWeight(3);
    line(0, -s * 0.35, 0, s * 0.25);
    noStroke(); fill('goldenrod'); ellipse(0, s * 0.55, 4, 4);
  } else if (kind === 'secret') {   // simple keyhole / lock
    stroke('slateblue'); strokeWeight(3);
    arc(0, -s * 0.1, s, s, radians(180), radians(360));
    line(-s * 0.5, -s * 0.1, -s * 0.5, s * 0.6);
    line(s * 0.5, -s * 0.1, s * 0.5, s * 0.6);
    line(-s * 0.5, s * 0.6, s * 0.5, s * 0.6);
  }
  pop();
}

function drawHeart(cx, cy, s, col) {
  push(); translate(cx, cy); noStroke(); fill(col);
  beginShape();
  vertex(0, s * 0.3);
  bezierVertex(-s * 1.1, -s * 0.6, -s * 0.5, -s * 1.2, 0, -s * 0.45);
  bezierVertex(s * 0.5, -s * 1.2, s * 1.1, -s * 0.6, 0, s * 0.3);
  endShape(CLOSE);
  pop();
}

function drawStopHand(cx, cy, s, col) {
  push(); translate(cx, cy);
  noFill(); stroke(col); strokeWeight(3);
  // open palm: rounded rect + four fingers + thumb
  rectMode(CENTER);
  rect(0, s * 0.15, s * 1.1, s * 1.0, 4);
  strokeWeight(3);
  for (let i = -1; i <= 1; i++) line(i * (s * 0.32), -s * 0.35, i * (s * 0.32), -s * 0.75);
  line(s * 0.55, s * 0.0, s * 0.85, -s * 0.25); // thumb
  rectMode(CORNER);
  pop();
}

// ---------- interaction ----------
function pointInRect(px, py, r) {
  return r && px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (choice !== null) return; // already answered this scenario; use Next
  let sc = scenarios[idx];
  let hitSafe = pointInRect(mouseX, mouseY, safeRect);
  let hitUnwanted = pointInRect(mouseX, mouseY, unwantedRect);
  if (!hitSafe && !hitUnwanted) return;

  choice = hitSafe ? true : false;
  let correct = (choice === sc.safe);
  if (correct) {
    feedback = sc.fb;
    feedbackColor = 'seagreen';
  } else {
    // gentle correction that always ends by affirming telling a trusted adult
    let right = sc.safe
      ? 'This one is a safe, wanted touch. '
      : 'This one is an unwanted touch. ';
    feedback = right + sc.fb +
      '  Remember: your own feeling matters, and telling a trusted adult is always okay.';
    feedbackColor = 'indianred';
  }
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
