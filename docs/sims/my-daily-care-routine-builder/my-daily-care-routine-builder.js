// My Daily Care Routine Builder - MicroSim (drag hygiene icons into routines)
// CANVAS_HEIGHT: 592
// Grade 1, Apply (L3): children drag daily care icons into a Morning track and a
// Bedtime track (3 slots each), then Check to confirm each choice fits that time.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 540;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let resetButton;

// Six personal-care items. fit: 'am' morning, 'pm' bedtime, 'both' either time.
let items = [
  { name: 'Wash hands', icon: 'hands', fit: 'both',
    am: 'Washing your hands in the morning fights germs before you eat!',
    pm: 'Washing your hands at night rinses off the day\'s germs!' },
  { name: 'Brush teeth', icon: 'teeth', fit: 'both',
    am: 'Brushing in the morning gives you a fresh, clean smile!',
    pm: 'Brushing before bed keeps your smile healthy overnight!' },
  { name: 'Comb hair', icon: 'comb', fit: 'am',
    am: 'Combing your hair in the morning helps you feel ready for the day!',
    pm: 'Combing your hair works best in the morning to get ready.' },
  { name: 'Take a bath', icon: 'bath', fit: 'pm',
    am: 'A bath can wake you up, but many families bathe at night.',
    pm: 'A warm bath at night helps you get clean and cozy for sleep!' },
  { name: 'Clean clothes', icon: 'shirt', fit: 'am',
    am: 'Putting on clean clothes in the morning helps you feel fresh!',
    pm: 'Clean clothes are usually for the morning; pajamas are for night.' },
  { name: 'Wash face', icon: 'face', fit: 'both',
    am: 'Washing your face in the morning helps you feel awake!',
    pm: 'Washing your face at night takes off the day\'s dirt!' }
];

// slots: 3 morning + 3 bedtime. each holds an item index or -1.
let morning = [-1, -1, -1];
let bedtime = [-1, -1, -1];

let slotRects = [];   // {x,y,w,h, track:'am'|'pm', pos:0..2}
let trayRects = [];   // {x,y,w,h, i} home tiles in the tray

let dragging = -1;    // index of item being dragged, or -1
let dragPos = null;   // {x,y} pointer while dragging
let fromSlot = null;  // {track,pos} if the drag started from a filled slot

let checked = false;
let message = 'Drag each care picture into a Morning or Bedtime spot.';
let messageColor = 'dimgray';

let tileW = 84, tileH = 78;   // recomputed each frame from width

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Routine');
  checkButton.mousePressed(checkRoutine);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  describe('A routine builder with two tracks: a Morning track under a sun and a ' +
    'Bedtime track under a moon, each with three empty spots. Below is a tray of six ' +
    'personal-care pictures (wash hands, brush teeth, comb hair, take a bath, clean ' +
    'clothes, wash face). Drag a picture into a spot, then press Check My Routine to ' +
    'confirm each choice fits that time of day.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 11);
  resetButton.position(165, drawHeight + 11);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(22);
  text('My Daily Care Routine', canvasWidth / 2, 8);

  // layout: two tracks stacked, then the tray, then feedback
  slotRects = [];
  let usableW = canvasWidth - margin * 2;
  tileW = Math.min(96, Math.max(70, (usableW - 2 * 10) / 3));
  tileH = 76;

  let amTop = 42;
  drawTrack('am', morning, amTop, 'Morning', 'lightgoldenrodyellow', 'goldenrod');

  let pmTop = amTop + 24 + tileH + 20;
  drawTrack('pm', bedtime, pmTop, 'Bedtime', 'lavender', 'mediumpurple');

  // tray (label sits 18px above trayTop; two rows of tiles below)
  let trayTop = pmTop + 24 + tileH + 30;
  drawTray(trayTop);

  // feedback box at the bottom of the draw area
  let fy = drawHeight - 72;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, 66, 8);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  fill(messageColor);
  text(message, margin + 10, fy + 8, canvasWidth - margin * 2 - 20, 52);

  // draw the item being dragged on top, following the pointer
  if (dragging >= 0 && dragPos) {
    drawTile(dragPos.x - tileW / 2, dragPos.y - tileH / 2, tileW, tileH, dragging, true, false, '');
  }

  cursor((dragging >= 0 || overAnyDraggable()) ? HAND : ARROW);
}

function drawTrack(track, slots, top, label, headFill, headStroke) {
  // header row: icon (sun or moon) + label
  noStroke();
  let iconX = margin + 14;
  let iconY = top + 12;
  if (track === 'am') drawSun(iconX, iconY, 12);
  else drawMoon(iconX, iconY, 12);
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(17);
  text(label + ' Routine', iconX + 22, iconY);

  // three slots
  let slotTop = top + 24;
  let gap = 10;
  let totalW = tileW * 3 + gap * 2;
  let startX = (canvasWidth - totalW) / 2;
  for (let p = 0; p < 3; p++) {
    let x = startX + p * (tileW + gap);
    let r = { x: x, y: slotTop, w: tileW, h: tileH, track: track, pos: p };
    slotRects.push(r);

    let over = dragging >= 0 && dragPos && pointInRect(dragPos.x, dragPos.y, r);
    // slot outline
    strokeWeight(over ? 4 : 2);
    stroke(over ? 'seagreen' : headStroke);
    fill(slots[p] === -1 ? headFill : 'white');
    rect(x, slotTop, tileW, tileH, 12);

    if (slots[p] === -1) {
      // empty hint
      noStroke();
      fill(headStroke);
      textAlign(CENTER, CENTER);
      textSize(26);
      text('+', x + tileW / 2, slotTop + tileH / 2 - 2);
    } else if (!(dragging >= 0 && fromSlot && fromSlot.track === track && fromSlot.pos === p)) {
      // filled: draw the item (unless it is the one currently lifted out)
      let showCheck = checked;
      let good = checked && fitsTime(slots[p], track);
      drawTile(x, slotTop, tileW, tileH, slots[p], false, showCheck, good ? 'good' : (checked ? 'soft' : ''));
    }
  }
}

function drawTray(top) {
  trayRects = [];
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Care Tray  —  drag a picture up to a spot', margin, top - 18);

  let gap = 10;
  let cols = 3;
  let totalW = tileW * cols + gap * (cols - 1);
  let startX = (canvasWidth - totalW) / 2;
  let rows = 2;
  for (let i = 0; i < items.length; i++) {
    let c = i % cols, rw = Math.floor(i / cols);
    let x = startX + c * (tileW + gap);
    let y = top + rw * (tileH + gap);
    let r = { x: x, y: y, w: tileW, h: tileH, i: i };
    trayRects.push(r);
    let usedUp = isPlaced(i);
    if (dragging === i) {
      // ghost outline where it came from
      stroke('lightgray'); strokeWeight(2); fill('aliceblue');
      rect(x, y, tileW, tileH, 12);
    } else if (usedUp) {
      // placed elsewhere: faded empty home
      stroke('gainsboro'); strokeWeight(2); fill('aliceblue');
      rect(x, y, tileW, tileH, 12);
      noStroke(); fill('silver'); textAlign(CENTER, CENTER); textSize(12);
      text('placed', x + tileW / 2, y + tileH / 2);
    } else {
      drawTile(x, y, tileW, tileH, i, false, false, '');
    }
  }
}

// Draw one item tile with icon + label. badge: '' none, 'good' green check, 'soft' hint dot.
function drawTile(x, y, w, h, i, lifted, showCheck, badge) {
  strokeWeight(lifted ? 4 : 2);
  stroke(lifted ? 'seagreen' : 'slateblue');
  fill('white');
  rect(x, y, w, h, 12);

  // icon in upper part
  drawIcon(items[i].icon, x + w / 2, y + 26, 34);

  // name label along the bottom
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(12);
  text(items[i].name, x + 3, y + h - 26, w - 6, 24);

  // badge in the top-right corner
  if (showCheck && badge === 'good') {
    drawCheck(x + w - 15, y + 15, 9);
  } else if (showCheck && badge === 'soft') {
    noStroke();
    fill('goldenrod');
    circle(x + w - 15, y + 15, 16);
    fill('white'); textAlign(CENTER, CENTER); textSize(13);
    text('~', x + w - 15, y + 14);
  }
}

// ---- named-color icon art (friendly, flat) ----
function drawIcon(type, cx, cy, s) {
  push();
  translate(cx, cy);
  strokeWeight(2.5);
  if (type === 'hands') {
    // two hands under blue water drops
    stroke('lightslategray'); fill('navajowhite');
    ellipse(-s * 0.28, s * 0.28, s * 0.55, s * 0.4);
    ellipse(s * 0.28, s * 0.28, s * 0.55, s * 0.4);
    noStroke(); fill('deepskyblue');
    circle(0, -s * 0.35, s * 0.22);
    circle(-s * 0.22, -s * 0.15, s * 0.16);
    circle(s * 0.22, -s * 0.15, s * 0.16);
  } else if (type === 'teeth') {
    // toothbrush with a dab of paste
    stroke('deepskyblue'); fill('lightskyblue');
    rect(-s * 0.5, s * 0.1, s * 1.0, s * 0.2, s * 0.1);   // handle
    noStroke(); fill('white'); stroke('silver');
    rect(-s * 0.5, -s * 0.15, s * 0.35, s * 0.3, 3);       // bristles
    noStroke(); fill('mediumseagreen');
    ellipse(-s * 0.32, -s * 0.28, s * 0.3, s * 0.18);      // paste
  } else if (type === 'comb') {
    // comb
    stroke('mediumpurple'); fill('plum');
    rect(-s * 0.5, -s * 0.3, s * 1.0, s * 0.28, 4);         // spine
    stroke('mediumpurple'); strokeWeight(3);
    for (let k = -4; k <= 4; k++) {
      line(k * s * 0.11, -s * 0.02, k * s * 0.11, s * 0.4); // teeth
    }
  } else if (type === 'bath') {
    // bathtub with bubbles
    stroke('steelblue'); fill('white');
    arc(0, s * 0.05, s * 1.05, s * 0.8, 0, PI);            // tub
    line(-s * 0.52, s * 0.05, -s * 0.52, -s * 0.12);
    line(s * 0.52, s * 0.05, s * 0.52, -s * 0.12);
    noStroke(); fill('lightskyblue');
    circle(-s * 0.18, -s * 0.12, s * 0.2);
    circle(s * 0.12, -s * 0.2, s * 0.26);
    circle(s * 0.34, -s * 0.05, s * 0.16);
  } else if (type === 'shirt') {
    // t-shirt
    stroke('seagreen'); fill('mediumseagreen');
    beginShape();
    vertex(-s * 0.5, -s * 0.2); vertex(-s * 0.2, -s * 0.4);
    vertex(s * 0.2, -s * 0.4); vertex(s * 0.5, -s * 0.2);
    vertex(s * 0.32, -s * 0.02); vertex(s * 0.32, s * 0.45);
    vertex(-s * 0.32, s * 0.45); vertex(-s * 0.32, -s * 0.02);
    endShape(CLOSE);
    noStroke(); fill('honeydew');
    arc(0, -s * 0.4, s * 0.4, s * 0.3, 0, PI);              // collar
  } else if (type === 'face') {
    // smiling face with a water splash
    stroke('peru'); fill('navajowhite');
    circle(0, 0, s * 0.95);
    noStroke(); fill('black');
    circle(-s * 0.18, -s * 0.1, s * 0.1);
    circle(s * 0.18, -s * 0.1, s * 0.1);
    stroke('black'); strokeWeight(2); noFill();
    arc(0, s * 0.06, s * 0.4, s * 0.34, 0.15, PI - 0.15);
    noStroke(); fill('deepskyblue');
    circle(s * 0.42, -s * 0.34, s * 0.14);
  }
  pop();
}

function drawSun(cx, cy, r) {
  push();
  translate(cx, cy);
  stroke('goldenrod'); strokeWeight(2);
  for (let a = 0; a < TWO_PI; a += PI / 4) {
    line(cos(a) * r * 1.4, sin(a) * r * 1.4, cos(a) * r * 1.9, sin(a) * r * 1.9);
  }
  noStroke(); fill('gold');
  circle(0, 0, r * 2);
  pop();
}

function drawMoon(cx, cy, r) {
  push();
  translate(cx, cy);
  noStroke();
  fill('gold');
  circle(0, 0, r * 2);
  fill('lavender');           // overlap to carve a crescent
  circle(r * 0.6, -r * 0.4, r * 1.7);
  pop();
}

function drawCheck(cx, cy, s) {
  push();
  translate(cx, cy);
  noStroke(); fill('seagreen');
  circle(0, 0, s * 2);
  stroke('white'); strokeWeight(2.5); noFill();
  line(-s * 0.45, 0, -s * 0.1, s * 0.4);
  line(-s * 0.1, s * 0.4, s * 0.5, -s * 0.4);
  pop();
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function isPlaced(i) {
  return morning.includes(i) || bedtime.includes(i);
}

function fitsTime(i, track) {
  let f = items[i].fit;
  return f === 'both' || f === track;
}

function overAnyDraggable() {
  // over an unplaced tray tile, or over a filled slot
  for (let t of trayRects) if (!isPlaced(t.i) && pointInRect(mouseX, mouseY, t)) return true;
  for (let s of slotRects) {
    let arr = s.track === 'am' ? morning : bedtime;
    if (arr[s.pos] !== -1 && pointInRect(mouseX, mouseY, s)) return true;
  }
  return false;
}

function mousePressed() {
  // pick up from a filled slot first (they sit above the tray)
  for (let s of slotRects) {
    let arr = s.track === 'am' ? morning : bedtime;
    if (arr[s.pos] !== -1 && pointInRect(mouseX, mouseY, s)) {
      dragging = arr[s.pos];
      fromSlot = { track: s.track, pos: s.pos };
      dragPos = { x: mouseX, y: mouseY };
      return;
    }
  }
  // otherwise pick up an unplaced tray tile
  for (let t of trayRects) {
    if (!isPlaced(t.i) && pointInRect(mouseX, mouseY, t)) {
      dragging = t.i;
      fromSlot = null;
      dragPos = { x: mouseX, y: mouseY };
      return;
    }
  }
}

function mouseDragged() {
  if (dragging >= 0) dragPos = { x: mouseX, y: mouseY };
}

function mouseReleased() {
  if (dragging < 0) { return; }

  // find a slot under the drop point
  let target = null;
  for (let s of slotRects) {
    if (dragPos && pointInRect(dragPos.x, dragPos.y, s)) { target = s; break; }
  }

  if (target) {
    let arr = target.track === 'am' ? morning : bedtime;
    let occupant = arr[target.pos];
    // clear the item from its previous home
    removeFromSlots(dragging);
    if (occupant !== -1 && occupant !== dragging) {
      // send the displaced item back to the tray (drop it out)
      removeFromSlots(occupant);
    }
    arr[target.pos] = dragging;
    checked = false;
    message = 'Nice! Add more, or press Check My Routine.';
    messageColor = 'dimgray';
  } else {
    // dropped outside any slot: if it came from a slot, it returns to the tray
    if (fromSlot) {
      removeFromSlots(dragging);
      checked = false;
      message = 'Sent back to the tray. Drag it wherever you like!';
      messageColor = 'dimgray';
    }
  }

  dragging = -1;
  dragPos = null;
  fromSlot = null;
}

function removeFromSlots(i) {
  for (let p = 0; p < 3; p++) {
    if (morning[p] === i) morning[p] = -1;
    if (bedtime[p] === i) bedtime[p] = -1;
  }
}

function checkRoutine() {
  let placedCount = 0;
  for (let p = 0; p < 3; p++) {
    if (morning[p] !== -1) placedCount++;
    if (bedtime[p] !== -1) placedCount++;
  }
  if (placedCount === 0) {
    checked = false;
    message = 'Your tracks are empty. Drag a few care pictures into the spots first!';
    messageColor = 'darkorange';
    return;
  }

  checked = true;
  // build one friendly caption from a well-fitting placement
  let caption = '';
  for (let p = 0; p < 3 && !caption; p++) {
    if (morning[p] !== -1 && fitsTime(morning[p], 'am')) caption = items[morning[p]].am;
  }
  for (let p = 0; p < 3 && !caption; p++) {
    if (bedtime[p] !== -1 && fitsTime(bedtime[p], 'pm')) caption = items[bedtime[p]].pm;
  }

  // count how many placements clearly fit their time
  let goodCount = 0;
  for (let p = 0; p < 3; p++) {
    if (morning[p] !== -1 && fitsTime(morning[p], 'am')) goodCount++;
    if (bedtime[p] !== -1 && fitsTime(bedtime[p], 'pm')) goodCount++;
  }

  if (goodCount === placedCount) {
    message = 'Great routine! Every picture fits its time. ' + caption;
    messageColor = 'seagreen';
  } else {
    message = 'Good start! Green checks fit that time. A ~ means it usually fits the other time. ' +
      (caption ? caption : '');
    messageColor = 'darkgoldenrod';
  }
}

function resetAll() {
  morning = [-1, -1, -1];
  bedtime = [-1, -1, -1];
  dragging = -1;
  dragPos = null;
  fromSlot = null;
  checked = false;
  message = 'Drag each care picture into a Morning or Bedtime spot.';
  messageColor = 'dimgray';
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
