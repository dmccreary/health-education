// Sort the Peer Relationship - MicroSim (classify a scene into the peer type)
// CANVAS_HEIGHT: 522
// Grade 2, Understand (L2): students classify everyday scenes into classmate, friend,
// teammate, or neighbor/cousin, then read a reason and a short compare line.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Four peer-relationship types (bin index order matters for scene.c)
let types = ['Classmate', 'Friend', 'Teammate', 'Neighbor/Cousin'];
let typeColors = ['steelblue', 'seagreen', 'goldenrod', 'mediumpurple'];

// 8 scenes, two per type. c = correct type index.
// reason = one sentence why. compare = short compare line for stage 3.
let scenes = [
  { c: 0, kind: 'read',
    caption: 'Two children share a reading table in class.',
    reason: 'They learn together in the same classroom.',
    compare: 'A classmate shares your room. A friend is someone you also choose to be with.' },
  { c: 1, kind: 'fort',
    caption: 'Two children build a blanket fort together at home.',
    reason: 'They chose to play and have fun together.',
    compare: 'A friend is someone you pick. A classmate you may not have picked.' },
  { c: 2, kind: 'soccer',
    caption: 'A soccer team huddles up before the game.',
    reason: 'They play on the same team and share a goal.',
    compare: 'Teammates share a game. A teammate can also be your friend!' },
  { c: 3, kind: 'picnic',
    caption: 'Two cousins play together at a family picnic.',
    reason: 'They are family who see each other at home events.',
    compare: 'A cousin is family. A friend is someone you choose.' },
  { c: 0, kind: 'lineup',
    caption: 'Two children line up for lunch in the same class.',
    reason: 'They spend the school day in one classroom.',
    compare: 'Classmates share the school day. Friends share free time too.' },
  { c: 2, kind: 'relay',
    caption: 'Two runners pass the baton in a relay race.',
    reason: 'They are on the same team working together.',
    compare: 'Teammates play the same game together.' },
  { c: 3, kind: 'nextdoor',
    caption: 'Two children wave hello over the backyard fence.',
    reason: 'They live near each other as neighbors.',
    compare: 'A neighbor lives close by. A classmate sits close by in school.' },
  { c: 1, kind: 'share',
    caption: 'Two children share a snack and laugh at the park.',
    reason: 'They chose to spend fun time together.',
    compare: 'A friend is someone you choose to be with.' }
];

let idx = 0;
let picked = -1;    // bin the student tapped, -1 = not yet
let correctCt = 0;
let seen = [];      // scenes answered correctly at least once
let binRects = [];
let done = false;   // all scenes finished

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scene');
  nextButton.mousePressed(nextScene);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  describe('One everyday scene at a time and four labeled bins: Classmate, Friend, ' +
    'Teammate, and Neighbor or Cousin. A child taps the bin that matches the scene, ' +
    'then reads why it fits and a short compare line.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(120, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black'); textAlign(CENTER, TOP); textSize(21);
  text('Sort the Peer Relationship', canvasWidth / 2, 8);

  if (done) { drawSummary(); updateCursor(); return; }

  // Scene box (top area ~150px)
  let sx = margin, sy = 38, sw = canvasWidth - margin * 2, sh = 150;
  fill('lavenderblush'); stroke('lightgray'); strokeWeight(2);
  rect(sx, sy, sw, sh, 14);
  drawScene(scenes[idx].kind, sx, sy, sw, sh);

  // Scene caption
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(16);
  text(scenes[idx].caption, margin + 6, sy + sh + 6, sw - 12, 40);

  // Four bins in a 2x2 grid
  binRects = [];
  let gx = 8, gy = 8, cols = 2;
  let bw = (canvasWidth - margin * 2 - gx) / cols;
  let bh = 52;
  let by0 = sy + sh + 50;
  for (let i = 0; i < 4; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (bw + gx);
    let y = by0 + r * (bh + gy);
    binRects.push({ x: x, y: y, w: bw, h: bh, i: i });
    drawBin(i, x, y, bw, bh);
  }

  // Feedback / instruction area
  let fy = by0 + 2 * bh + gy + 10;
  noStroke(); textAlign(CENTER, TOP);
  if (picked === -1) {
    fill('dimgray'); textSize(15);
    text('Which kind of peer is this? Tap a bin.', margin, fy, canvasWidth - margin * 2, 24);
  } else if (picked === scenes[idx].c) {
    fill('seagreen'); textSize(15);
    text('Yes! ' + scenes[idx].reason, margin, fy, canvasWidth - margin * 2, 40);
    fill('navy'); textSize(14);
    text(scenes[idx].compare, margin, fy + 42, canvasWidth - margin * 2, 40);
  } else {
    fill('darkorange'); textSize(15);
    text('Look again — where do these two usually spend time together?',
      margin, fy, canvasWidth - margin * 2, 44);
  }

  // Progress
  noStroke(); fill('gray'); textAlign(RIGHT, TOP); textSize(12);
  text('Scene ' + (idx + 1) + ' of ' + scenes.length, canvasWidth - margin, 12);

  updateCursor();
}

function drawBin(i, x, y, w, h) {
  let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });
  let col = typeColors[i];
  let isPick = picked === i;
  let correctPick = isPick && i === scenes[idx].c;
  let wrongPick = isPick && i !== scenes[idx].c;
  // glow the correct bin once answered correctly
  let glow = picked === scenes[idx].c && i === scenes[idx].c;

  strokeWeight(glow ? 4 : (isPick ? 3 : 2));
  stroke(col);
  if (correctPick || glow) fill('honeydew');
  else if (wrongPick) fill('mistyrose');
  else if (hover && picked === -1) fill('lightyellow');
  else fill(lerpColor(color(col), color('white'), 0.85));
  rect(x, y, w, h, 10);

  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(16);
  text(types[i], x + 4, y, w - 8, h);

  if (glow) {
    noStroke(); fill('seagreen'); textAlign(LEFT, CENTER); textSize(18);
    text('✓', x + 8, y + h / 2);
  }
}

// Simple flat illustrations. Two child figures + a context prop, centered in the box.
function drawScene(kind, x, y, w, h) {
  let cx = x + w / 2, cy = y + h / 2;
  noStroke();

  if (kind === 'read') {
    // table with an open book, two kids seated
    fill('peru'); rect(cx - 60, cy + 24, 120, 12, 3);           // table top
    fill('sienna'); rect(cx - 52, cy + 36, 8, 20); rect(cx + 44, cy + 36, 8, 20); // legs
    fill('white'); stroke('gray'); strokeWeight(1);
    rect(cx - 26, cy + 14, 24, 14); rect(cx + 2, cy + 14, 24, 14); // book pages
    noStroke();
    child(cx - 46, cy - 6, 'indianred', 'navy');
    child(cx + 46, cy - 6, 'mediumseagreen', 'saddlebrown');
  } else if (kind === 'fort') {
    // blanket fort (triangle drape) with two kids peeking
    fill('cornflowerblue'); triangle(cx - 66, cy + 34, cx + 66, cy + 34, cx, cy - 34);
    fill('lightsteelblue'); triangle(cx - 40, cy + 34, cx + 40, cy + 34, cx, cy - 6); // opening
    child(cx - 24, cy + 8, 'gold', 'purple');
    child(cx + 24, cy + 8, 'tomato', 'teal');
  } else if (kind === 'soccer') {
    // soccer ball on grass, team of small figures in a huddle arc
    fill('yellowgreen'); rect(x + 8, cy + 40, w - 16, 14, 4);   // grass strip
    for (let i = 0; i < 5; i++) {
      let px = cx - 88 + i * 44;
      child(px, cy - 6, i % 2 ? 'orangered' : 'darkorange', 'navy', 0.85);
    }
    fill('white'); stroke('black'); strokeWeight(1); circle(cx, cy + 46, 20);
    noStroke(); fill('black'); circle(cx, cy + 46, 6);
  } else if (kind === 'picnic') {
    // picnic blanket (checker) with basket, two cousins
    fill('indianred'); rect(cx - 70, cy + 26, 140, 30, 4);
    fill('mistyrose');
    for (let i = 0; i < 7; i++) rect(cx - 70 + i * 20, cy + 26, 10, 30);
    fill('saddlebrown'); rect(cx - 12, cy + 14, 24, 16, 3);      // basket
    child(cx - 44, cy - 4, 'hotpink', 'darkgreen');
    child(cx + 44, cy - 4, 'goldenrod', 'indigo');
  } else if (kind === 'lineup') {
    // classroom door + two kids standing in line
    fill('burlywood'); rect(x + 14, cy - 44, 34, 96, 3);        // door
    fill('gold'); circle(x + 42, cy + 4, 6);                    // knob
    child(cx + 6, cy - 4, 'steelblue', 'firebrick');
    child(cx + 52, cy - 4, 'mediumseagreen', 'navy');
  } else if (kind === 'relay') {
    // running track with baton pass
    fill('coral'); rect(x + 8, cy + 40, w - 16, 14, 4);         // track
    child(cx - 40, cy - 6, 'royalblue', 'orange');
    child(cx + 40, cy - 6, 'crimson', 'gold');
    stroke('dimgray'); strokeWeight(5); line(cx - 14, cy + 4, cx + 14, cy + 4); // baton
    noStroke();
  } else if (kind === 'nextdoor') {
    // fence between two yards, kids waving
    fill('saddlebrown');
    for (let i = 0; i < 9; i++) rect(x + 12 + i * ((w - 24) / 9), cy + 6, 10, 46, 2);
    fill('saddlebrown'); rect(x + 12, cy + 16, w - 24, 8);      // fence rail
    child(cx - 60, cy - 8, 'darkorange', 'teal');
    child(cx + 60, cy - 8, 'mediumpurple', 'seagreen');
  } else if (kind === 'share') {
    // park bench with two kids sharing a snack
    fill('sienna'); rect(cx - 70, cy + 22, 140, 12, 3);         // bench seat
    fill('saddlebrown'); rect(cx - 66, cy + 34, 8, 18); rect(cx + 58, cy + 34, 8, 18);
    fill('orange'); circle(cx, cy + 8, 16);                     // shared snack
    child(cx - 40, cy - 6, 'deeppink', 'navy');
    child(cx + 40, cy - 6, 'seagreen', 'chocolate');
  }
}

// A tiny child figure: head + body. bodyCol shirt, headCol hair-ish accent.
function child(fx, fy, bodyCol, headCol, scl) {
  let s = scl || 1;
  noStroke();
  fill('navajowhite'); circle(fx, fy - 16 * s, 20 * s);        // face
  fill(headCol); arc(fx, fy - 16 * s, 20 * s, 20 * s, PI, TWO_PI); // hair
  fill(bodyCol); rect(fx - 11 * s, fy - 6 * s, 22 * s, 26 * s, 6 * s); // body
  fill('black');
  circle(fx - 5 * s, fy - 18 * s, 3 * s); circle(fx + 5 * s, fy - 18 * s, 3 * s); // eyes
}

function drawSummary() {
  let bx = margin, by = 60, bw = canvasWidth - margin * 2, bh = drawHeight - 80;
  fill('honeydew'); stroke('seagreen'); strokeWeight(2);
  rect(bx, by, bw, bh, 16);
  noStroke();

  fill('seagreen'); textAlign(CENTER, TOP); textSize(22);
  text('Great sorting!', bx, by + 22, bw, 30);

  fill('black'); textSize(17);
  text('You sorted ' + correctCt + ' of ' + scenes.length + ' scenes.',
    bx + 12, by + 66, bw - 24, 30);

  fill('navy'); textSize(16);
  text('One person can be more than one type of peer at the same time. ' +
    'A teammate can also be your friend. A neighbor can be a classmate too!',
    bx + 16, by + 108, bw - 32, 140);

  fill('dimgray'); textSize(14);
  text('Tap Reset to sort again.', bx, by + bh - 40, bw, 24);
}

function updateCursor() {
  let over = false;
  if (!done && picked === -1) {
    for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) { over = true; break; }
  }
  cursor(over ? HAND : ARROW);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function nextScene() {
  if (done) return;
  if (idx >= scenes.length - 1) {
    done = true;
    return;
  }
  idx++;
  picked = -1;
}

function resetAll() {
  idx = 0;
  picked = -1;
  correctCt = 0;
  seen = [];
  done = false;
}

function mousePressed() {
  if (done || picked !== -1) return;
  for (let r of binRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      picked = r.i;
      if (r.i === scenes[idx].c && !seen.includes(idx)) {
        seen.push(idx);
        correctCt++;
      }
      return;
    }
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
