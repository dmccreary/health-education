// Situational Awareness Scene Explorer - MicroSim
// CANVAS_HEIGHT: 512
// Grade 4, Understand (L2): tap four hotspots in a calm everyday scene to notice
// people nearby, exits, the mood of the room, and how your own body feels.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let newSceneButton;
let resetButton;

// The four situational-awareness clue types. Every scene has all four.
// key -> checklist label + which hotspot it belongs to.
let clueTypes = [
  { key: 'people', label: 'People Nearby',    color: 'steelblue' },
  { key: 'exit',   label: 'Exit / Way Out',   color: 'seagreen' },
  { key: 'mood',   label: 'Mood of the Room', color: 'mediumpurple' },
  { key: 'body',   label: 'How My Body Feels', color: 'goldenrod' }
];

// Scene bank. Each scene is calm and ordinary (never a danger scenario).
// Hotspots use fractions of the scene box (fx, fy in 0..1) so they scale.
// The draw<Name> function paints the flat illustration for that scene.
let scenes = [
  {
    name: 'School Hallway',
    sub: 'Between classes',
    draw: 'hallway',
    clues: {
      people: 'A few classmates walk by with backpacks. Nobody is in a hurry.',
      exit:   'The double doors at the end lead outside. You know the way out.',
      mood:   'Calm and everyday. People chat quietly and keep moving.',
      body:   'Your shoulders feel loose and your breathing is easy. You feel okay.'
    },
    hotspots: {
      people: { fx: 0.30, fy: 0.55 },
      exit:   { fx: 0.86, fy: 0.42 },
      mood:   { fx: 0.55, fy: 0.24 },
      body:   { fx: 0.16, fy: 0.78 }
    }
  },
  {
    name: 'City Park',
    sub: 'A sunny afternoon',
    draw: 'park',
    clues: {
      people: 'Families sit on benches and kids play on the grass nearby.',
      exit:   'The park gate and sidewalk are close by if you want to leave.',
      mood:   'Relaxed and friendly. You hear birds and quiet talking.',
      body:   'You feel warm and calm. Your hands are relaxed at your sides.'
    },
    hotspots: {
      people: { fx: 0.68, fy: 0.60 },
      exit:   { fx: 0.12, fy: 0.50 },
      mood:   { fx: 0.42, fy: 0.22 },
      body:   { fx: 0.30, fy: 0.80 }
    }
  },
  {
    name: 'Bus Stop',
    sub: 'Waiting in the morning',
    draw: 'busstop',
    clues: {
      people: 'Two people wait under the shelter, checking their phones.',
      exit:   'The sidewalk behind you leads back toward home and shops.',
      mood:   'Quiet and ordinary. Everyone is just waiting for the bus.',
      body:   'You feel steady. Your breathing is slow and even.'
    },
    hotspots: {
      people: { fx: 0.34, fy: 0.52 },
      exit:   { fx: 0.85, fy: 0.70 },
      mood:   { fx: 0.58, fy: 0.22 },
      body:   { fx: 0.16, fy: 0.80 }
    }
  },
  {
    name: 'Cafeteria',
    sub: 'Lunchtime',
    draw: 'cafeteria',
    clues: {
      people: 'Friends sit at tables eating lunch and talking together.',
      exit:   'The open doorway leads back to the hallway and the exits.',
      mood:   'Busy but friendly. There is a happy buzz of voices.',
      body:   'You feel hungry and cheerful. Your body feels relaxed.'
    },
    hotspots: {
      people: { fx: 0.40, fy: 0.62 },
      exit:   { fx: 0.87, fy: 0.30 },
      mood:   { fx: 0.60, fy: 0.20 },
      body:   { fx: 0.15, fy: 0.82 }
    }
  }
];

let sceneIndex = 0;
let found = {};          // key -> true once its hotspot has been clicked
let activeClue = null;   // key of the clue currently shown in the infobox
let hotRects = [];       // computed each frame for hit-testing

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  newSceneButton = createButton('New Scene');
  newSceneButton.parent(document.querySelector('main'));
  newSceneButton.mousePressed(newScene);

  resetButton = createButton('Reset Checklist');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetChecklist);

  positionControls();
  describe('A calm everyday scene such as a school hallway, park, bus stop, or ' +
    'cafeteria fills the left side. Four numbered circles mark clues to notice: ' +
    'people nearby, the exit or way out, the mood of the room, and how your own ' +
    'body feels. Tapping a circle shows that clue in a box on the right and checks ' +
    'it off a list. When all four are found, a message says the student practiced ' +
    'situational awareness. Buttons load a New Scene or Reset the checklist.', LABEL);
}

function positionControls() {
  newSceneButton.position(margin, drawHeight + 14);
  resetButton.position(margin + 120, drawHeight + 14);
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

  // Title (centered wrap box: left edge = margin so CENTER align does not overflow)
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Situational Awareness Scene Explorer', margin, 8, canvasWidth - margin * 2, 28);

  // Layout columns
  let topY = 42;
  let colGap = 12;
  let leftW = Math.floor((canvasWidth - margin * 2 - colGap) * 0.60);
  // Keep the right panel wide enough to read on wide canvases.
  if (canvasWidth - margin * 2 - colGap - leftW < 210) {
    leftW = canvasWidth - margin * 2 - colGap - 210;
  }
  let rightX = margin + leftW + colGap;
  let rightW = canvasWidth - margin - rightX;
  let bottomY = drawHeight - margin;
  let panelH = bottomY - topY;

  let sc = scenes[sceneIndex];

  // ---- LEFT: illustrated scene ----
  let sceneX = margin;
  let sceneY = topY;
  let sceneW = leftW;
  let sceneH = panelH;

  drawScene(sc, sceneX, sceneY, sceneW, sceneH);

  // ---- Hotspots on top of the scene ----
  hotRects = [];
  let r = 18; // radius: large tap target for Grade 4
  for (let i = 0; i < clueTypes.length; i++) {
    let ct = clueTypes[i];
    let hs = sc.hotspots[ct.key];
    let cx = sceneX + hs.fx * sceneW;
    let cy = sceneY + hs.fy * sceneH;
    hotRects.push({ key: ct.key, cx: cx, cy: cy, r: r });

    let isFound = found[ct.key];
    let hover = pointInCircle(mouseX, mouseY, cx, cy, r);

    // soft halo
    noStroke();
    fill(isFound ? 'rgba(46,139,87,0.20)' : 'rgba(255,255,255,0.55)');
    ellipse(cx, cy, r * 2 + 12, r * 2 + 12);

    stroke('white');
    strokeWeight(3);
    fill(isFound ? 'seagreen' : (hover ? ct.color : 'white'));
    ellipse(cx, cy, r * 2, r * 2);

    noStroke();
    if (isFound) {
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(18);
      text('✓', cx, cy - 1);
    } else {
      fill(hover ? 'white' : ct.color);
      textAlign(CENTER, CENTER);
      textSize(16);
      textStyle(BOLD);
      text(i + 1, cx, cy);
      textStyle(NORMAL);
    }
  }

  cursor(overHotspot() ? HAND : ARROW);

  // ---- RIGHT: infobox + checklist ----
  // Infobox (top of right column)
  let infoH = Math.floor(panelH * 0.46);
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(rightX, topY, rightW, infoH, 8);
  noStroke();

  fill('navy');
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text('What I Notice', rightX + 10, topY + 8);
  textStyle(NORMAL);

  if (activeClue) {
    let ct = clueTypeFor(activeClue);
    // colored clue title
    noStroke();
    fill(ct.color);
    textSize(13);
    textStyle(BOLD);
    text(ct.label, rightX + 10, topY + 30, rightW - 20, 20);
    textStyle(NORMAL);

    fill('black');
    textSize(13);
    text(sc.clues[activeClue], rightX + 10, topY + 52, rightW - 20, infoH - 60);
  } else {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(13);
    text('Tap a numbered circle in the scene to notice a clue.',
      rightX + 10, topY + 34, rightW - 20, infoH - 42);
  }

  // Checklist (below the infobox)
  let listY = topY + infoH + 10;
  let listH = bottomY - listY;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(rightX, listY, rightW, listH, 8);
  noStroke();

  fill('navy');
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text('Clues Found', rightX + 10, listY + 8);
  textStyle(NORMAL);

  let foundCount = clueTypes.filter(c => found[c.key]).length;
  noStroke();
  fill('dimgray');
  textAlign(RIGHT, TOP);
  textSize(12);
  text(foundCount + ' / 4', rightX + rightW - 10, listY + 10);

  // checklist rows
  let rowY = listY + 30;
  let rowH = 26;
  for (let i = 0; i < clueTypes.length; i++) {
    let ct = clueTypes[i];
    let done = found[ct.key];

    // check box
    stroke(done ? 'seagreen' : 'silver');
    strokeWeight(1.5);
    fill(done ? 'seagreen' : 'white');
    rect(rightX + 10, rowY + 3, 16, 16, 3);
    if (done) {
      noStroke();
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(13);
      text('✓', rightX + 18, rowY + 10);
    }

    noStroke();
    fill(done ? 'black' : 'gray');
    textAlign(LEFT, CENTER);
    textSize(13);
    text((i + 1) + '. ' + ct.label, rightX + 34, rowY + 11);
    rowY += rowH;
  }

  // ---- Final summary message once all four found ----
  if (foundCount === 4) {
    let msgY = rowY + 4;
    let msgH = bottomY - msgY - 6;
    if (msgH > 30) {
      noStroke();
      fill('honeydew');
      stroke('seagreen');
      strokeWeight(1.5);
      rect(rightX + 6, msgY, rightW - 12, msgH, 6);
      noStroke();
      fill('darkgreen');
      textAlign(LEFT, TOP);
      textSize(11.5);
      text('You just practiced situational awareness — noticing people, ' +
        'exits, mood, and your own feelings.',
        rightX + 12, msgY + 6, rightW - 24, msgH - 10);
    }
  }
}

// ---------- Scene illustrations (flat shapes) ----------

function drawScene(sc, x, y, w, h) {
  push();
  // clip drawing to the scene box using a rounded frame
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (sc.draw === 'hallway') drawHallway(x, y, w, h);
  else if (sc.draw === 'park') drawPark(x, y, w, h);
  else if (sc.draw === 'busstop') drawBusStop(x, y, w, h);
  else if (sc.draw === 'cafeteria') drawCafeteria(x, y, w, h);

  // frame + label
  noFill();
  stroke('silver');
  strokeWeight(1.5);
  rect(x, y, w, h, 8);

  noStroke();
  fill('white');
  rect(x + 8, y + 8, min(150, w - 16), 34, 6);
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text(sc.name, x + 14, y + 11);
  textStyle(NORMAL);
  fill('gray');
  textSize(10);
  text(sc.sub, x + 14, y + 27);
  pop();
}

// draw a simple flat person: head + body, at (px, baseY) with given height
function person(px, baseY, ph, bodyCol) {
  let headR = ph * 0.28;
  noStroke();
  fill(bodyCol);
  // body (rounded)
  rect(px - ph * 0.18, baseY - ph * 0.62, ph * 0.36, ph * 0.62, ph * 0.14);
  // head
  fill('bisque');
  ellipse(px, baseY - ph * 0.62 - headR * 0.7, headR * 2, headR * 2);
}

function drawHallway(x, y, w, h) {
  // floor + walls
  fill('antiquewhite');
  rect(x, y, w, h * 0.62);
  fill('wheat');
  rect(x, y + h * 0.62, w, h * 0.38);
  // lockers along the top wall
  fill('lightsteelblue');
  let lockerY = y + h * 0.20;
  let lockerH = h * 0.30;
  let n = 6;
  let lw = (w - 20) / n;
  for (let i = 0; i < n; i++) {
    fill(i % 2 === 0 ? 'lightsteelblue' : 'cornflowerblue');
    rect(x + 10 + i * lw, lockerY, lw - 4, lockerH, 3);
    fill('gray');
    ellipse(x + 10 + i * lw + lw - 12, lockerY + lockerH / 2, 3, 3);
  }
  // exit doors at the right end
  fill('burlywood');
  rect(x + w * 0.78, y + h * 0.22, w * 0.18, h * 0.42, 4);
  stroke('sienna');
  strokeWeight(1);
  line(x + w * 0.87, y + h * 0.22, x + w * 0.87, y + h * 0.64);
  noStroke();
  fill('lightskyblue');
  rect(x + w * 0.80, y + h * 0.26, w * 0.14, h * 0.10, 2);
  // people walking
  person(x + w * 0.30, y + h * 0.72, h * 0.34, 'indianred');
  person(x + w * 0.46, y + h * 0.70, h * 0.30, 'mediumseagreen');
}

function drawPark(x, y, w, h) {
  // sky + grass
  fill('lightskyblue');
  rect(x, y, w, h * 0.55);
  fill('yellowgreen');
  rect(x, y + h * 0.55, w, h * 0.45);
  // sun
  fill('gold');
  ellipse(x + w * 0.80, y + h * 0.18, 34, 34);
  // gate on the left
  fill('tan');
  rect(x + w * 0.06, y + h * 0.34, 8, h * 0.30);
  rect(x + w * 0.16, y + h * 0.34, 8, h * 0.30);
  stroke('tan');
  strokeWeight(3);
  line(x + w * 0.06, y + h * 0.36, x + w * 0.18, y + h * 0.36);
  noStroke();
  // tree
  fill('saddlebrown');
  rect(x + w * 0.40, y + h * 0.30, 12, h * 0.30);
  fill('forestgreen');
  ellipse(x + w * 0.42, y + h * 0.26, 70, 60);
  // bench
  fill('sienna');
  rect(x + w * 0.60, y + h * 0.58, w * 0.22, 8, 2);
  rect(x + w * 0.60, y + h * 0.62, 6, h * 0.10);
  rect(x + w * 0.60 + w * 0.20, y + h * 0.62, 6, h * 0.10);
  // people
  person(x + w * 0.68, y + h * 0.72, h * 0.28, 'orchid');
  person(x + w * 0.30, y + h * 0.86, h * 0.26, 'steelblue');
}

function drawBusStop(x, y, w, h) {
  // sky + sidewalk
  fill('lightblue');
  rect(x, y, w, h * 0.60);
  fill('lightgray');
  rect(x, y + h * 0.60, w, h * 0.40);
  // road at the bottom
  fill('dimgray');
  rect(x, y + h * 0.86, w, h * 0.14);
  fill('gold');
  for (let i = 0; i < 6; i++) {
    rect(x + 10 + i * (w / 6), y + h * 0.92, w / 12, 3);
  }
  // shelter
  fill('slategray');
  rect(x + w * 0.20, y + h * 0.24, w * 0.40, 8, 2);      // roof
  rect(x + w * 0.20, y + h * 0.24, 6, h * 0.44);          // post
  rect(x + w * 0.56, y + h * 0.24, 6, h * 0.44);          // post
  fill('lightcyan');
  rect(x + w * 0.26, y + h * 0.34, w * 0.28, h * 0.22, 2); // glass back
  // bus stop sign
  fill('white');
  rect(x + w * 0.80, y + h * 0.30, 6, h * 0.44);
  fill('steelblue');
  ellipse(x + w * 0.80 + 3, y + h * 0.30, 26, 26);
  // people waiting
  person(x + w * 0.34, y + h * 0.66, h * 0.28, 'teal');
  person(x + w * 0.48, y + h * 0.66, h * 0.28, 'indianred');
}

function drawCafeteria(x, y, w, h) {
  // wall + floor
  fill('linen');
  rect(x, y, w, h * 0.58);
  fill('navajowhite');
  rect(x, y + h * 0.58, w, h * 0.42);
  // doorway on the right
  fill('burlywood');
  rect(x + w * 0.80, y + h * 0.16, w * 0.16, h * 0.44, 3);
  fill('lightyellow');
  rect(x + w * 0.83, y + h * 0.20, w * 0.10, h * 0.30, 2);
  // window on the left wall
  fill('lightskyblue');
  rect(x + w * 0.08, y + h * 0.14, w * 0.20, h * 0.22, 3);
  stroke('white');
  strokeWeight(2);
  line(x + w * 0.18, y + h * 0.14, x + w * 0.18, y + h * 0.36);
  noStroke();
  // long table
  fill('sandybrown');
  rect(x + w * 0.18, y + h * 0.60, w * 0.55, h * 0.10, 4);
  fill('peru');
  rect(x + w * 0.22, y + h * 0.70, 8, h * 0.14);
  rect(x + w * 0.65, y + h * 0.70, 8, h * 0.14);
  // trays
  fill('tomato');
  rect(x + w * 0.30, y + h * 0.61, 22, 12, 2);
  fill('mediumseagreen');
  rect(x + w * 0.52, y + h * 0.61, 22, 12, 2);
  // seated people
  person(x + w * 0.36, y + h * 0.62, h * 0.26, 'cornflowerblue');
  person(x + w * 0.58, y + h * 0.62, h * 0.26, 'orchid');
}

// ---------- Helpers & interaction ----------

function clueTypeFor(key) {
  for (let c of clueTypes) if (c.key === key) return c;
  return clueTypes[0];
}

function overHotspot() {
  for (let hr of hotRects) if (pointInCircle(mouseX, mouseY, hr.cx, hr.cy, hr.r)) return true;
  return false;
}

function pointInCircle(px, py, cx, cy, r) {
  let dx = px - cx;
  let dy = py - cy;
  return dx * dx + dy * dy <= r * r;
}

function mousePressed() {
  for (let hr of hotRects) {
    if (pointInCircle(mouseX, mouseY, hr.cx, hr.cy, hr.r)) {
      found[hr.key] = true;
      activeClue = hr.key;
      return;
    }
  }
}

function newScene() {
  sceneIndex = (sceneIndex + 1) % scenes.length;
  found = {};
  activeClue = null;
}

function resetChecklist() {
  found = {};
  activeClue = null;
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
