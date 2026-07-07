// Safe and Unsafe Behavior Explorer - MicroSim (scene hotspots, three settings)
// CANVAS_HEIGHT: 520
// Grade 1, Analyze (L4): students distinguish safe from unsafe behaviors in
// Home, School, and Community scenes by tapping illustrated hotspots. Each tap
// reveals a Safe or Unsafe label and a short reason; a tally counts each scene.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let homeButton, schoolButton, communityButton, resetButton;

// Three scenes laid out as a 2x2 grid of behavior cards. fx = fraction of canvas
// width for the card center; row = 0 (top) or 1 (bottom). safe flag, short title,
// and a one-sentence reason. seen = whether the child has tapped it this session.
let scenes = {
  Home: [
    { fx: 0.30, row: 0, safe: true,  title: 'Washing hands',
      reason: 'Washing hands before dinner keeps germs away.' },
    { fx: 0.70, row: 0, safe: false, title: 'Cleaning supplies',
      reason: 'Cleaning bottles can be harmful. Leave them closed and tell an adult.' },
    { fx: 0.30, row: 1, safe: true,  title: 'Bike helmet',
      reason: 'A helmet protects your head when you ride a bike.' },
    { fx: 0.70, row: 1, safe: false, title: 'A lighter',
      reason: 'Lighters can start fires. Do not touch. Tell a grown-up.' }
  ],
  School: [
    { fx: 0.30, row: 0, safe: true,  title: 'Walking calmly',
      reason: 'Walking in the hallway keeps everyone safe.' },
    { fx: 0.70, row: 0, safe: false, title: 'Pushing on stairs',
      reason: 'Pushing near stairs can make someone fall. Keep hands to yourself.' },
    { fx: 0.30, row: 1, safe: true,  title: 'Raising a hand',
      reason: 'Ask before you leave so your teacher knows where you are.' },
    { fx: 0.70, row: 1, safe: false, title: 'Door for a stranger',
      reason: 'Do not open the outside door for someone you do not know.' }
  ],
  Community: [
    { fx: 0.30, row: 0, safe: true,  title: 'Holding a hand',
      reason: 'Hold a grown-up\'s hand to cross the street safely.' },
    { fx: 0.70, row: 0, safe: false, title: 'Wandering off',
      reason: 'Stay with your group at the park so you do not get lost.' },
    { fx: 0.30, row: 1, safe: true,  title: 'Scooter helmet',
      reason: 'A helmet keeps you safe when you ride a scooter.' },
    { fx: 0.70, row: 1, safe: false, title: 'A ride from a stranger',
      reason: 'Never go with someone your family does not know.' }
  ]
};

let current = 'Home';
let selected = null;   // index into current scene's hotspots
let hotScreen = [];    // screen-space hit boxes rebuilt each frame

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  homeButton = createButton('Home');
  homeButton.mousePressed(() => switchScene('Home'));
  schoolButton = createButton('School');
  schoolButton.mousePressed(() => switchScene('School'));
  communityButton = createButton('Community');
  communityButton.mousePressed(() => switchScene('Community'));
  resetButton = createButton('Start Over');
  resetButton.mousePressed(resetAll);

  homeButton.parent(document.querySelector('main'));
  schoolButton.parent(document.querySelector('main'));
  communityButton.parent(document.querySelector('main'));
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('Three setting tabs — Home, School, and Community. Each scene shows ' +
    'four tappable pictures of children. Tapping one reveals whether it is a Safe ' +
    'or Unsafe behavior with a short reason. A tally counts safe and unsafe finds.',
    LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  homeButton.position(margin, y);
  schoolButton.position(margin + 76, y);
  communityButton.position(margin + 158, y);
  resetButton.position(canvasWidth - margin - 90, y);
}

function switchScene(name) {
  current = name;
  selected = null;
}

function resetAll() {
  selected = null;
  for (let key in scenes) {
    for (let h of scenes[key]) h.seen = false;
  }
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

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Safe or Unsafe? Tap to Explore', canvasWidth / 2, 10);

  drawTabsBar();
  drawTally();
  drawScene();
  drawInfoStrip();
}

function drawTabsBar() {
  // A small label strip under the title showing the active setting.
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  fill('dimgray');
  text('Setting: ' + current, canvasWidth / 2, 40);
}

function drawTally() {
  let list = scenes[current];
  let safeCount = 0, unsafeCount = 0;
  for (let h of list) {
    if (h.seen && h.safe) safeCount++;
    if (h.seen && !h.safe) unsafeCount++;
  }
  let totalSafe = list.filter(h => h.safe).length;
  let totalUnsafe = list.filter(h => !h.safe).length;

  let boxW = 150, boxH = 30, gap = 12;
  let totalW = boxW * 2 + gap;
  let x0 = (canvasWidth - totalW) / 2;
  let y0 = 62;

  // Safe tally box
  fill('honeydew');
  stroke('seagreen');
  strokeWeight(2);
  rect(x0, y0, boxW, boxH, 8);
  noStroke();
  fill('seagreen');
  textAlign(CENTER, CENTER);
  textSize(15);
  text('Safe found: ' + safeCount + ' / ' + totalSafe, x0 + boxW / 2, y0 + boxH / 2);

  // Unsafe tally box
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(2);
  rect(x0 + boxW + gap, y0, boxW, boxH, 8);
  noStroke();
  fill('darkgoldenrod');
  text('Unsafe found: ' + unsafeCount + ' / ' + totalUnsafe,
    x0 + boxW + gap + boxW / 2, y0 + boxH / 2);
}

function drawScene() {
  let list = scenes[current];
  hotScreen = [];
  let boxW = min(canvasWidth * 0.40, 200);
  let boxH = 108;
  let rowY = [124, 244];

  for (let i = 0; i < list.length; i++) {
    let h = list[i];
    let cx = canvasWidth * h.fx;
    let x = cx - boxW / 2;
    let y = rowY[h.row];
    hotScreen.push({ x: x, y: y, w: boxW, h: boxH, idx: i });

    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: boxW, h: boxH });

    // Card background. Glow green (safe) or amber (unsafe) only once revealed.
    if (h.seen) {
      fill(h.safe ? 'honeydew' : 'cornsilk');
      stroke(h.safe ? 'seagreen' : 'goldenrod');
    } else {
      fill(hover ? 'lavender' : 'white');
      stroke(sel ? 'steelblue' : 'silver');
    }
    strokeWeight(h.seen || sel ? 3 : 1.5);
    rect(x, y, boxW, boxH, 12);

    // Simple flat icon per behavior.
    drawIcon(h, cx, y + 36, h.seen);

    // Title text under the icon (wrapped inside the card).
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(14);
    text(h.title, x + 6, y + 66, boxW - 12, 38);

    // Corner badge once revealed.
    if (h.seen) {
      noStroke();
      fill(h.safe ? 'seagreen' : 'goldenrod');
      circle(x + boxW - 16, y + 16, 22);
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(15);
      text(h.safe ? '✓' : '!', x + boxW - 16, y + 15);
    }
  }
}

// A tiny, non-frightening flat icon suggesting each behavior.
function drawIcon(h, cx, cy, revealed) {
  push();
  translate(cx, cy);
  noStroke();
  // Child figure base (used by most icons)
  let skin = 'peachpuff';
  let shirt = revealed ? (h.safe ? 'seagreen' : 'goldenrod') : 'steelblue';

  if (h.title === 'Washing hands') {
    // basin + hands
    fill('lightsteelblue'); rect(-18, 2, 36, 12, 4);
    fill(skin); circle(-8, 0, 12); circle(8, 0, 12);
    stroke('steelblue'); strokeWeight(2); noFill();
    arc(0, -8, 20, 16, PI, TWO_PI);
  } else if (h.title === 'Cleaning supplies') {
    fill('mediumpurple'); rect(-14, -12, 12, 26, 3); // bottle
    fill('white'); rect(-13, -16, 10, 6, 2);         // cap
    fill('indianred'); rect(4, -8, 12, 22, 3);        // bottle 2
    fill('white'); rect(5, -12, 10, 6, 2);
  } else if (h.title === 'Bike helmet' || h.title === 'Scooter helmet') {
    fill(skin); circle(0, -4, 22);                    // head
    fill('crimson'); arc(0, -6, 26, 22, PI, TWO_PI);  // helmet dome
    fill('crimson'); rect(-13, -6, 26, 4);            // brim
  } else if (h.title === 'A lighter') {
    fill('dimgray'); rect(-6, -2, 12, 16, 2);         // body
    fill('gold'); ellipse(0, -8, 6, 12);              // flame
  } else if (h.title === 'Walking calmly') {
    fill(skin); circle(0, -14, 14);                   // head
    fill(shirt); rect(-8, -6, 16, 20, 4);             // body
    stroke(shirt); strokeWeight(3);
    line(-4, 14, -8, 24); line(4, 14, 8, 24);         // legs walking
  } else if (h.title === 'Pushing on stairs') {
    fill('gainsboro'); // steps
    rect(-18, 8, 12, 6); rect(-6, 2, 12, 6); rect(6, -4, 12, 6);
    fill(skin); circle(-6, -12, 12);
    fill(shirt); rect(-12, -6, 12, 14, 3);
  } else if (h.title === 'Raising a hand') {
    fill(skin); circle(0, -12, 14);                   // head
    fill(shirt); rect(-8, -4, 16, 18, 4);             // body
    stroke(shirt); strokeWeight(3);
    line(6, 0, 12, -14);                              // raised arm
    fill(skin); noStroke(); circle(12, -14, 7);       // hand
  } else if (h.title === 'Door for a stranger') {
    fill('sienna'); rect(-14, -16, 20, 30, 2);        // door
    fill('gold'); circle(2, 0, 4);                    // knob
    fill(skin); circle(14, -6, 12);                   // person outside
  } else if (h.title === 'Holding a hand') {
    fill(skin); circle(-8, -10, 12); circle(8, -12, 14); // child + adult heads
    fill('mediumpurple'); rect(-13, -3, 10, 16, 3);
    fill('steelblue'); rect(3, -5, 11, 18, 3);
    fill(skin); noStroke(); circle(0, 4, 6);          // joined hands
  } else if (h.title === 'Wandering off') {
    fill('forestgreen'); ellipse(-14, 10, 20, 10);    // grass patch
    fill(skin); circle(10, -10, 12);                  // lone child far
    fill(shirt); rect(4, -3, 12, 14, 3);
  } else if (h.title === 'A ride from a stranger') {
    fill('lightslategray'); rect(-18, -4, 34, 14, 4); // car body
    fill('lightsteelblue'); rect(-12, -12, 18, 10, 3);// window
    fill('dimgray'); circle(-10, 12, 8); circle(8, 12, 8); // wheels
  } else {
    fill(shirt); circle(0, 0, 22);
  }
  pop();
}

function drawInfoStrip() {
  let sy = drawHeight - 96;
  let sw = canvasWidth - margin * 2;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, sy, sw, 84, 10);
  noStroke();

  if (selected === null) {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(15);
    text('Tap a picture to find out if it is a Safe or Unsafe behavior.',
      margin + 12, sy + 14, sw - 24, 60);
    return;
  }

  let h = scenes[current][selected];
  // Big label line
  fill(h.safe ? 'seagreen' : 'darkgoldenrod');
  textAlign(LEFT, TOP);
  textSize(18);
  text(h.safe ? 'Safe Behavior' : 'Unsafe Behavior', margin + 12, sy + 10, sw - 24, 24);
  // Reason line
  fill('black');
  textSize(14);
  text(h.reason, margin + 12, sy + 40, sw - 24, 40);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let s of hotScreen) {
    if (pointInRect(mouseX, mouseY, s)) {
      selected = s.idx;
      scenes[current][s.idx].seen = true;
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
