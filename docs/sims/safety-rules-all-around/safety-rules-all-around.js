// Safety Rules All Around - MicroSim (click-to-reveal hotspots)
// CANVAS_HEIGHT: 500
// Kindergarten, Remember (L1): children tap glowing spots in three scenes
// (home, school, community) to find and name a safety rule in each place.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// Three scenes, each with two safety-rule hotspots.
// fx/fy are fractions WITHIN that scene's panel so everything resizes.
let scenes = [
  {
    name: 'At Home',
    sky: 'lavender',
    ground: 'wheat',
    spots: [
      { fx: 0.30, fy: 0.60, label: 'Hold the stair rail',
        info: 'At home: always hold the rail on the stairs!' },
      { fx: 0.72, fy: 0.42, label: 'Stay back from the hot stove',
        info: 'At home: stay back from the hot stove!' }
    ]
  },
  {
    name: 'At School',
    sky: 'lightcyan',
    ground: 'moccasin',
    spots: [
      { fx: 0.32, fy: 0.52, label: 'Walk in the hallway',
        info: 'At school: walk, do not run, in the hallway!' },
      { fx: 0.70, fy: 0.66, label: 'Sit safely in your chair',
        info: 'At school: sit down safely in your chair!' }
    ]
  },
  {
    name: 'In the Community',
    sky: 'honeydew',
    ground: 'darkseagreen',
    spots: [
      { fx: 0.30, fy: 0.58, label: "Hold a grown-up's hand",
        info: "Outside: hold a grown-up's hand when you cross!" },
      { fx: 0.72, fy: 0.44, label: 'Wear a bike helmet',
        info: 'Outside: always wear your bike helmet!' }
    ]
  }
];

// Flattened list of hotspot screen positions rebuilt each frame.
let spotScreen = [];
// Message currently shown in the infobox (last rule tapped).
let currentInfo = "Tap a glowing dot to find a safety rule!";
let foundCount = 0;
let allFound = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSim);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('Three side-by-side scenes — home, school, and community — each with ' +
    'two glowing dots on a child following a safety rule. Tapping a dot reveals ' +
    'and names the rule and turns the dot green. A counter shows how many of the ' +
    'six rules have been found.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 15);
}

function resetSim() {
  for (let s of scenes) {
    for (let sp of s.spots) sp.found = false;
  }
  foundCount = 0;
  allFound = false;
  currentInfo = "Tap a glowing dot to find a safety rule!";
}

function draw() {
  updateCanvasSize();

  // Backgrounds
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
  textSize(clampSize(24, 20));
  text('Safety Rules All Around', canvasWidth / 2, 10);

  // Layout regions
  let titleH = 44;
  let infoH = 78;
  let counterH = 34;
  let sceneTop = titleH;
  let sceneBottom = drawHeight - infoH - counterH;
  let sceneH = sceneBottom - sceneTop;
  let panelW = canvasWidth / 3;

  spotScreen = [];
  for (let i = 0; i < scenes.length; i++) {
    let px = i * panelW;
    drawScene(scenes[i], px, sceneTop, panelW, sceneH);
  }

  drawCounter(sceneBottom, counterH);
  drawInfoBox(sceneBottom + counterH, infoH);
}

function drawScene(sc, px, py, pw, ph) {
  let pad = 4;
  let x = px + pad;
  let y = py;
  let w = pw - pad * 2;

  // Sky and ground for this panel
  noStroke();
  fill(sc.sky);
  rect(x, y, w, ph * 0.62, 6);
  fill(sc.ground);
  rect(x, y + ph * 0.60, w, ph * 0.40, 6);

  // Simple child figure in the middle of the panel
  drawChild(x + w / 2, y + ph * 0.66, ph * 0.30);

  // Scene name banner at top of panel
  noStroke();
  fill(255, 255, 255, 210);
  let bh = 22;
  rect(x + 3, y + 3, w - 6, bh, 5);
  fill('navy');
  textAlign(CENTER, CENTER);
  textSize(clampSize(13, 10));
  text(sc.name, x + 3, y + 3, w - 6, bh);

  // Hotspots
  for (let sp of sc.spots) {
    let hx = x + sp.fx * w;
    let hy = y + sp.fy * ph;
    let r = clampSize(15, 12);
    spotScreen.push({ x: hx, y: hy, r: r, sp: sp });
    drawHotspot(hx, hy, r, sp);
  }
}

// A tiny, friendly stick-style child so no external art is needed.
function drawChild(cx, cy, h) {
  let headR = h * 0.22;
  let bodyTop = cy - h * 0.30;
  let bodyBot = cy + h * 0.30;
  noStroke();
  // body
  fill('steelblue');
  rect(cx - h * 0.12, bodyTop, h * 0.24, bodyBot - bodyTop, h * 0.10);
  // head
  fill('navajowhite');
  stroke('burlywood');
  strokeWeight(1);
  circle(cx, bodyTop - headR * 0.7, headR * 2);
  noStroke();
  // legs
  stroke('navy');
  strokeWeight(Math.max(2, h * 0.05));
  line(cx - h * 0.05, bodyBot, cx - h * 0.10, bodyBot + h * 0.22);
  line(cx + h * 0.05, bodyBot, cx + h * 0.10, bodyBot + h * 0.22);
  noStroke();
}

function drawHotspot(hx, hy, r, sp) {
  let hover = dist(mouseX, mouseY, hx, hy) < r + 3;
  if (sp.found) {
    // Found: solid green with a check
    stroke('darkgreen');
    strokeWeight(3);
    fill('mediumseagreen');
    circle(hx, hy, r * 2);
    noStroke();
    stroke('white');
    strokeWeight(3);
    line(hx - r * 0.4, hy, hx - r * 0.1, hy + r * 0.4);
    line(hx - r * 0.1, hy + r * 0.4, hx + r * 0.5, hy - r * 0.4);
    noStroke();
  } else {
    // Unfound: pulsing gold glow
    let pulse = 3 + 2 * sin(frameCount * 0.12);
    noStroke();
    fill(255, 215, 0, 90);
    circle(hx, hy, (r + pulse + 6) * 2);
    stroke(hover ? 'orangered' : 'goldenrod');
    strokeWeight(3);
    fill(hover ? 'gold' : 'yellow');
    circle(hx, hy, r * 2);
    noStroke();
    // little "?" cue
    fill('saddlebrown');
    textAlign(CENTER, CENTER);
    textSize(clampSize(16, 13));
    text('?', hx, hy - 1);
  }
}

function drawCounter(y, h) {
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(clampSize(20, 16));
  if (allFound) {
    fill('seagreen');
    text('You found all 6 safety rules!', canvasWidth / 2, y + h / 2);
  } else {
    fill('darkslategray');
    text('You found ' + foundCount + ' of 6!', canvasWidth / 2, y + h / 2);
  }
}

function drawInfoBox(y, h) {
  let boxX = margin;
  let boxW = canvasWidth - margin * 2;
  let boxH = h - 8;
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(2);
  rect(boxX, y, boxW, boxH, 10);
  noStroke();

  textAlign(CENTER, CENTER);
  let msg = currentInfo;
  if (allFound) {
    msg = 'You found safety rules at home, at school, and in the community!';
    fill('seagreen');
  } else {
    fill('black');
  }
  textSize(clampSize(20, 15));
  // Center text inside the box: pass the box's own left/top, never x+w/2.
  text(msg, boxX + 12, y + 6, boxW - 24, boxH - 12);
}

function mousePressed() {
  if (mouseY > drawHeight) return; // ignore taps in control strip
  for (let s of spotScreen) {
    if (dist(mouseX, mouseY, s.x, s.y) < s.r + 4) {
      if (!s.sp.found) {
        s.sp.found = true;
        foundCount++;
        if (foundCount >= 6) allFound = true;
      }
      currentInfo = s.sp.info;
      return;
    }
  }
}

// Shrink text a step on very narrow (phone) widths so it never overflows.
function clampSize(big, small) {
  return canvasWidth < 360 ? small : big;
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
