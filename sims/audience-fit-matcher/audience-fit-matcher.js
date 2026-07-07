// Audience Fit Matcher - MicroSim (judge best message for an audience)
// CANVAS_HEIGHT: 487
// Grade 5, Evaluate (L5): students judge which version of a health message best
// fits a given audience and justify why wording and format matter.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let whyButton;
let nextButton;
let resetButton;

// Each audience: label, icon, desc, three message versions {text, fit, reason}
let audiences = [
  { label: 'Kindergarten class', icon: 'kids',
    versions: [
      { text: 'Wash your hands! Scrub, scrub — get the germs off!', fit: true, reason: 'Right fit — short words and a fun picture keep young kids engaged.' },
      { text: 'Handwashing stops germs from spreading to you and your friends.', fit: false, reason: 'A bit wordy — kindergartners do best with the simplest wording.' },
      { text: 'Regular handwashing reduces transmission of common pathogens.', fit: false, reason: 'Too complex — kindergartners need simple, concrete language.' }
    ] },
  { label: 'Your own 5th-grade class', icon: 'peers',
    versions: [
      { text: 'Wash your hands! Scrub, scrub — get the germs off!', fit: false, reason: 'Too babyish — 5th graders may tune out wording made for little kids.' },
      { text: 'Washing your hands keeps germs from spreading to you and your friends.', fit: true, reason: 'Right fit — clear, peer-level wording your classmates relate to.' },
      { text: 'Regular handwashing reduces transmission of common pathogens.', fit: false, reason: 'Too formal — sounds like a science report, not a message to peers.' }
    ] },
  { label: 'School staff meeting', icon: 'staff',
    versions: [
      { text: 'Wash your hands! Scrub, scrub — get the germs off!', fit: false, reason: 'Too playful for adults in a professional meeting.' },
      { text: 'Washing your hands keeps germs from spreading to you and your friends.', fit: false, reason: 'A little casual — staff expect a more informative tone.' },
      { text: 'Regular handwashing reduces the spread of common illnesses at school.', fit: true, reason: 'Right fit — clear, factual wording suits an adult, professional audience.' }
    ] },
  { label: 'Younger siblings at home', icon: 'kids',
    versions: [
      { text: 'Wash your hands! Scrub, scrub — get the germs off!', fit: true, reason: 'Right fit — playful, simple wording works well for little kids at home.' },
      { text: 'Washing your hands keeps germs from spreading to you and your friends.', fit: false, reason: 'Fine, but a bit long for very young siblings.' },
      { text: 'Regular handwashing reduces the spread of common illnesses.', fit: false, reason: 'Too formal for young children.' }
    ] },
  { label: 'Newsletter for families', icon: 'staff',
    versions: [
      { text: 'Wash your hands! Scrub, scrub — get the germs off!', fit: false, reason: 'Too playful for a message meant to inform parents.' },
      { text: 'Washing your hands keeps germs from spreading to you and your friends.', fit: false, reason: 'Friendly, but families expect clearer, more complete information.' },
      { text: 'Regular handwashing reduces the spread of common illnesses — please remind your child.', fit: true, reason: 'Right fit — informative and respectful for a family audience.' }
    ] }
];

let aIndex = 0;
let picked = -1;
let showWhy = false;
let verRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  whyButton = createButton('Why?');
  whyButton.mousePressed(() => { showWhy = true; });
  nextButton = createButton('Next Audience');
  nextButton.mousePressed(nextAudience);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('An audience card on the left and three versions of the same health message ' +
    'on the right. Students pick the best-fit version for the audience; the Why button ' +
    'explains why that version fits and why the other two do not.', LABEL);
}

function positionControls() {
  whyButton.position(10, drawHeight + 14);
  nextButton.position(80, drawHeight + 14);
  resetButton.position(210, drawHeight + 14);
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
  text('Audience Fit Matcher', canvasWidth / 2, 8);

  let aud = audiences[aIndex];

  // audience card (left)
  let ax = margin, ay = 42, aw = canvasWidth * 0.36, ah = 200;
  fill('lavender'); stroke('slateblue'); strokeWeight(1.5);
  rect(ax, ay, aw, ah, 10);
  drawIcon(aud.icon, ax + aw / 2, ay + 54);
  noStroke();
  fill('slateblue'); textAlign(CENTER, TOP); textSize(12);
  text('Audience ' + (aIndex + 1) + ' of ' + audiences.length, ax + 6, ay + 10, aw - 12, 18);
  fill('black'); textSize(15);
  text(aud.label, ax + 8, ay + 100, aw - 16, ah - 110);

  // message version buttons (right)
  verRects = [];
  let vx = ax + aw + 14;
  let vw = canvasWidth - vx - margin;
  let vy0 = 42, vh = 58, gap = 10;
  for (let i = 0; i < 3; i++) {
    let y = vy0 + i * (vh + gap);
    verRects.push({ x: vx, y: y, w: vw, h: vh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: vx, y: y, w: vw, h: vh });
    let sel = picked === i;
    strokeWeight(sel ? 3 : 1.5);
    if (picked >= 0 && showWhy) {
      stroke(aud.versions[i].fit ? 'seagreen' : 'indianred');
      fill(aud.versions[i].fit ? 'honeydew' : 'mistyrose');
    } else {
      stroke(sel ? 'darkorange' : 'gray');
      fill(sel ? 'lightyellow' : (hover ? 'floralwhite' : 'white'));
    }
    rect(vx, y, vw, vh, 8);
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(13);
    text('"' + aud.versions[i].text + '"', vx + 10, y + vh / 2, vw - 20, vh - 8);
  }
  cursor(picked < 0 && overAnyVer() ? HAND : ARROW);

  // Why / feedback panel
  let fy = vy0 + 3 * (vh + gap) + 2;
  textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) {
    fill('dimgray');
    text('Which version best fits this audience? Click one, then press Why?',
      margin, fy, canvasWidth - margin * 2, 40);
  } else if (!showWhy) {
    let f = audiences[aIndex].versions[picked].fit;
    fill(f ? 'seagreen' : 'darkorange');
    text((f ? '✓ Good fit! ' : 'Hmm — press Why? to compare all three.'),
      margin, fy, canvasWidth - margin * 2, 40);
  } else {
    let y = fy;
    for (let i = 0; i < 3; i++) {
      fill(audiences[aIndex].versions[i].fit ? 'seagreen' : 'indianred');
      text((audiences[aIndex].versions[i].fit ? '✓ ' : '• ') + audiences[aIndex].versions[i].reason,
        margin, y, canvasWidth - margin * 2, 26);
      y += 24;
    }
  }
}

function overAnyVer() {
  for (let v of verRects) if (pointInRect(mouseX, mouseY, v)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function drawIcon(type, x, y) {
  push();
  strokeWeight(2);
  if (type === 'kids') { stroke('orange'); fill('gold'); circle(x - 10, y, 26); circle(x + 12, y + 4, 20); }
  else if (type === 'peers') { stroke('teal'); fill('paleturquoise'); circle(x - 12, y, 24); circle(x + 6, y, 24); circle(x + 22, y + 2, 20); }
  else { stroke('slategray'); fill('lightsteelblue'); rect(x - 22, y - 14, 44, 30, 4); noStroke(); fill('slategray'); circle(x - 10, y, 8); circle(x + 8, y, 8); }
  pop();
}

function mousePressed() {
  if (picked >= 0) return;
  for (let v of verRects) {
    if (pointInRect(mouseX, mouseY, v)) { picked = v.i; return; }
  }
}

function nextAudience() {
  aIndex = (aIndex + 1) % audiences.length;
  picked = -1; showWhy = false;
}
function resetAll() {
  aIndex = 0; picked = -1; showWhy = false;
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
