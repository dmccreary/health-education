// Buckle Up and Gear Up - MicroSim (drag the right safety gear to the activity)
// CANVAS_HEIGHT: 502
// Kindergarten, Apply (L3): children match injury-prevention gear (helmet, seatbelt,
// handrail) to an activity (bike, car, stairs) by dragging it onto the child.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let checkButton;
let resetButton;

// activities cycle; correct gear id for each
let activities = [
  { name: 'Riding a bike', gear: 'helmet', ok: 'Yes! A helmet protects your head while biking.' },
  { name: 'Riding in a car', gear: 'seatbelt', ok: 'Yes! A seatbelt keeps you safe in the car.' },
  { name: 'Going down stairs', gear: 'handrail', ok: 'Yes! Holding the handrail keeps you steady on stairs.' }
];

let gearList = ['helmet', 'seatbelt', 'handrail'];
let actIndex = 0;
let matched = [false, false, false]; // per activity
let dragging = -1;      // index into gearList being dragged
let dragPos = null;
let gearHome = [];      // home positions
let message = '';
let messageColor = 'dimgray';
let childRect = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Next Activity');
  checkButton.mousePressed(nextActivity);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A child ready for an activity — biking, riding in a car, or going down ' +
    'stairs — with three gear icons to drag: a helmet, a seatbelt, and a handrail. ' +
    'Dragging the correct gear onto the child snaps it into place.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 11);
  resetButton.position(140, drawHeight + 11);
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
  textSize(24);
  text('Buckle Up and Gear Up', canvasWidth / 2, 8);

  // activity banner
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 44, canvasWidth - margin * 2, 36, 8);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(18);
  text('Activity: ' + activities[actIndex].name, canvasWidth / 2, 62);

  // child + activity scene
  let cx = canvasWidth / 2, cy = 190;
  childRect = { x: cx - 60, y: cy - 60, w: 120, h: 140 };
  drawChildScene(cx, cy);

  // gear tray
  gearHome = [];
  let n = gearList.length;
  let gy = 320, gw = 90, gh = 70;
  let totalW = n * gw + (n - 1) * 20;
  let startX = (canvasWidth - totalW) / 2;
  textSize(12);
  for (let i = 0; i < n; i++) {
    let hx = startX + i * (gw + 20);
    gearHome.push({ x: hx, y: gy, w: gw, h: gh });
    // if this gear is already matched to a prior/this activity, keep it drawn on child if current
    let pos = (dragging === i && dragPos) ? { x: dragPos.x - gw / 2, y: dragPos.y - gh / 2 } : { x: hx, y: gy };
    drawGear(gearList[i], pos.x, pos.y, gw, gh, dragging === i);
  }

  // feedback
  noStroke(); textAlign(CENTER, TOP); textSize(16);
  fill(messageColor);
  let m = message || 'Drag the gear that keeps you safe onto the child.';
  text(m, margin, 404, canvasWidth - margin * 2, 44);
}

function drawChildScene(cx, cy) {
  let a = activities[actIndex];
  let done = matched[actIndex];
  // child body
  stroke('burlywood'); strokeWeight(3); fill('navajowhite');
  circle(cx, cy - 40, 56);
  noStroke(); fill('sienna'); circle(cx - 10, cy - 44, 6); circle(cx + 10, cy - 44, 6);
  noFill(); stroke('sienna'); strokeWeight(2); arc(cx, cy - 34, 22, 14, 0.1 * PI, 0.9 * PI);
  stroke('mediumpurple'); strokeWeight(3); fill('plum');
  rect(cx - 26, cy - 12, 52, 64, 14);

  // activity prop
  noStroke();
  if (a.gear === 'helmet') { // bike wheels
    stroke('dimgray'); strokeWeight(3); noFill();
    circle(cx - 40, cy + 70, 40); circle(cx + 40, cy + 70, 40);
  } else if (a.gear === 'seatbelt') { // car seat
    noStroke(); fill('lightsteelblue'); rect(cx - 50, cy + 40, 100, 40, 8);
  } else { // stairs
    noStroke(); fill('bisque');
    for (let s = 0; s < 3; s++) rect(cx - 60 + s * 20, cy + 40 + s * 14, 120 - s * 20, 14);
  }

  // if matched, show gear on child
  if (done) {
    drawGear(a.gear, cx - 30, cy - 78, 60, 46, false, true);
    noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(20);
    text('✓', cx + 44, cy - 40);
  }
}

function drawGear(type, x, y, w, h, active, small) {
  push();
  translate(x, y);
  strokeWeight(2);
  let cx = w / 2, cy = h / 2;
  if (type === 'helmet') {
    stroke('firebrick'); fill(active ? 'salmon' : 'tomato');
    arc(cx, cy + 6, w * 0.7, h * 0.9, PI, TWO_PI);
    rect(cx - w * 0.35, cy + 4, w * 0.7, 5, 2);
  } else if (type === 'seatbelt') {
    stroke('dimgray'); fill(active ? 'gray' : 'silver');
    rect(cx - 16, cy - 16, 32, 24, 4);
    stroke('goldenrod'); strokeWeight(4); line(cx - 14, cy - 14, cx + 14, cy + 8);
  } else { // handrail
    stroke('saddlebrown'); fill(active ? 'burlywood' : 'tan');
    rect(cx - 20, cy - 4, 40, 8, 4);
    line(cx - 16, cy + 4, cx - 16, cy + 16); line(cx + 16, cy + 4, cx + 16, cy + 16);
  }
  if (!small) {
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(11);
    text(type, cx - w / 2, h - 14, w, 14);
  }
  pop();
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let i = 0; i < gearHome.length; i++) {
    if (pointInRect(mouseX, mouseY, gearHome[i])) { dragging = i; dragPos = { x: mouseX, y: mouseY }; return; }
  }
}
function mouseDragged() {
  if (dragging >= 0) dragPos = { x: mouseX, y: mouseY };
}
function mouseReleased() {
  if (dragging < 0) return;
  // dropped on child?
  if (dragPos && pointInRect(dragPos.x, dragPos.y, childRect)) {
    if (gearList[dragging] === activities[actIndex].gear) {
      matched[actIndex] = true;
      message = activities[actIndex].ok;
      messageColor = 'seagreen';
      if (matched.every(m => m)) message = 'You know how to gear up and stay safe every time!';
    } else {
      message = 'That gear is for a different activity. Try the one that fits!';
      messageColor = 'darkorange';
    }
  }
  dragging = -1; dragPos = null;
}

function nextActivity() {
  actIndex = (actIndex + 1) % activities.length;
  message = ''; messageColor = 'dimgray';
}
function resetAll() {
  actIndex = 0; matched = [false, false, false]; message = ''; messageColor = 'dimgray';
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
