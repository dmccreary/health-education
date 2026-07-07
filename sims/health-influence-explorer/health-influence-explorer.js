// Who Shapes My Health Choices? - MicroSim (six influence sources in a ring)
// CANVAS_HEIGHT: 490
// Grade 3, Understand (L2): students classify scenarios into the source of influence and
// explain whether each nudges a health behavior in a helpful or unhelpful direction.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

let sources = [
  { name: 'Family', color: 'salmon', def: 'The people you live with and relatives.',
    scen: [{ t: 'Your family walks together after dinner.', good: true, e: 'This nudges you toward healthy activity.' }, { t: 'Your family often skips breakfast in a rush.', good: false, e: 'This can nudge you away from a healthy habit.' }] },
  { name: 'Friends', color: 'goldenrod', def: 'Kids you play and spend time with.',
    scen: [{ t: 'A friend invites you to play outside.', good: true, e: 'A helpful nudge toward being active.' }, { t: 'A friend dares you to skip washing hands.', good: false, e: 'An unhelpful nudge — better to wash up.' }] },
  { name: 'School', color: 'seagreen', def: 'Teachers, rules, and lessons at school.',
    scen: [{ t: 'Your school teaches a handwashing song.', good: true, e: 'A helpful nudge toward good hygiene.' }, { t: 'A long class means little movement.', good: false, e: 'Sitting a lot is an unhelpful nudge — add movement breaks.' }] },
  { name: 'Community', color: 'steelblue', def: 'Your neighborhood and local places.',
    scen: [{ t: 'A safe park nearby invites play.', good: true, e: 'A helpful nudge toward activity.' }, { t: 'Only fast food is close by.', good: false, e: 'This can nudge choices away from healthy food.' }] },
  { name: 'Media', color: 'mediumpurple', def: 'TV, videos, games, and ads.',
    scen: [{ t: 'A show teaches a fun exercise.', good: true, e: 'A helpful nudge toward moving.' }, { t: 'An ad makes candy look amazing.', good: false, e: 'Ads can nudge you toward sugary treats.' }] },
  { name: 'Culture', color: 'coral', def: 'Traditions and foods you grow up with.',
    scen: [{ t: 'A tradition shares fresh, home-cooked meals.', good: true, e: 'A helpful nudge toward nourishing food.' }, { t: 'A celebration has lots of sweets.', good: false, e: 'Enjoy in moderation — this can nudge toward too much sugar.' }] }
];

let selected = -1;
let openScen = -1;
let bubbleScreen = [], scenRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; openScen = -1; });
  positionControls();
  describe('A child surrounded by six influence bubbles — family, friends, school, ' +
    'community, media, and culture. Clicking a bubble shows what it is and two example ' +
    'scenarios you can open to see if each nudges toward or away from health.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Who Shapes My Health Choices?', canvasWidth / 2, 8);

  // ring of bubbles around center child
  let cx = canvasWidth / 2, cy = 150, R = 96;
  noStroke(); fill('navajowhite'); circle(cx, cy, 54);
  fill('sienna'); textAlign(CENTER, CENTER); textSize(11); text('You', cx, cy);
  bubbleScreen = [];
  for (let i = 0; i < 6; i++) {
    let a = -HALF_PI + i * TWO_PI / 6;
    let x = cx + cos(a) * R, y = cy + sin(a) * R;
    bubbleScreen.push({ x: x, y: y, r: 30 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 32;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'white');
    fill(sel || hover ? sources[i].color : lerpColor(color(sources[i].color), color('white'), 0.4));
    circle(x, y, 58);
    noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(11); text(sources[i].name, x, y);
  }

  // infobox
  let py = 248, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); scenRects = [];
  if (selected < 0) { fill('dimgray'); textAlign(LEFT, TOP); textSize(13); text('Click a bubble to see what it means and two example nudges.', margin + 10, py + 10, canvasWidth - margin * 2 - 20, 40); }
  else {
    let s = sources[selected];
    fill(s.color); textAlign(LEFT, TOP); textSize(14); text(s.name + ': ', margin + 10, py + 8);
    fill('black'); textSize(12); text(s.def, margin + 60, py + 10, canvasWidth - margin * 2 - 70, 24);
    for (let j = 0; j < 2; j++) {
      let y = py + 40 + j * 62;
      scenRects.push({ x: margin + 10, y: y, w: canvasWidth - margin * 2 - 20, h: 56, j: j });
      let open = openScen === j;
      let sc = s.scen[j];
      strokeWeight(1.5); stroke(open ? (sc.good ? 'seagreen' : 'darkorange') : 'gray');
      fill(open ? (sc.good ? 'honeydew' : 'navajowhite') : 'white');
      rect(margin + 10, y, canvasWidth - margin * 2 - 20, 56, 6);
      noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(11); text(sc.t, margin + 18, y + 6, canvasWidth - margin * 2 - 70, 24);
      textAlign(RIGHT, TOP); textSize(16); fill(open ? (sc.good ? 'seagreen' : 'darkorange') : 'gray'); text(open ? (sc.good ? '👍' : '👎') : 'tap', canvasWidth - margin - 18, y + 6);
      if (open) { fill(sc.good ? 'seagreen' : 'darkorange'); textAlign(LEFT, TOP); textSize(11); text(sc.e, margin + 18, y + 30, canvasWidth - margin * 2 - 40, 24); }
    }
  }
  cursor(overAny() ? HAND : ARROW);
}

function overAny() {
  for (let b of bubbleScreen) if (dist(mouseX, mouseY, b.x, b.y) < b.r) return true;
  for (let r of scenRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let i = 0; i < bubbleScreen.length; i++) { let b = bubbleScreen[i]; if (dist(mouseX, mouseY, b.x, b.y) < b.r) { selected = i; openScen = -1; return; } }
  for (let r of scenRects) if (pointInRect(mouseX, mouseY, r)) { openScen = r.j; return; }
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
