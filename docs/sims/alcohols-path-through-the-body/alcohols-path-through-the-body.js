// Alcohol's Path Through the Body - MicroSim (clickable body regions)
// CANVAS_HEIGHT: 490
// Grades 6-8, Understand (L2): students identify body systems affected by alcohol
// and explain the effect on each, with emphasis on adolescent development.
// Content restriction: no depiction of containers, consumption, or quantities —
// only labeled body systems and factual effect text.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let resetButton;

// Body regions with normal function + alcohol effect. Brain has dev/adult variants.
let regions = [
  { key: 'brain', name: 'Brain', dx: 0, dy: -170, rw: 46, rh: 42,
    normal: 'Your brain controls thinking, memory, balance, and decisions.',
    effect: 'Alcohol slows communication between brain cells, affecting judgment, coordination, and memory.',
    dev: 'Because the teen brain is still developing, alcohol can have a stronger, longer-lasting effect on learning and self-control.',
    adult: 'In a mature adult brain the effects are still real, but the brain has finished building its core connections.' },
  { key: 'heart', name: 'Heart', dx: -14, dy: -60, rw: 40, rh: 40,
    normal: 'The heart pumps blood and oxygen through your whole body.',
    effect: 'Alcohol can raise blood pressure and, over time, weaken the heart muscle and its rhythm.' },
  { key: 'liver', name: 'Liver', dx: 26, dy: -8, rw: 44, rh: 34,
    normal: 'The liver filters waste and breaks down substances in your blood.',
    effect: 'The liver breaks down alcohol slowly; heavy use over time can scar and damage liver tissue.' },
  { key: 'stomach', name: 'Stomach', dx: -8, dy: 26, rw: 40, rh: 34,
    normal: 'The stomach and digestive system break down food for energy.',
    effect: 'Alcohol irritates the stomach lining and can cause nausea and interfere with absorbing nutrients.' }
];

let selected = null;
let devView = true; // brain toggle: true = Developing (Adolescent), false = Adult
let regionScreen = {};
let toggleRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = null; });
  positionControls();
  describe('A neutral gray body silhouette with four clickable regions — brain, heart, ' +
    'liver, and stomach. Clicking a region explains what it does and how alcohol affects ' +
    'it. For the brain, a toggle compares the adult and developing-adolescent body.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
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
  text("Alcohol's Path Through the Body", canvasWidth / 2, 8);

  let fx = canvasWidth * 0.26;
  let baseY = 250;
  drawSilhouette(fx, baseY);
  drawRegions(fx, baseY);
  drawInfoPanel();
}

function drawSilhouette(fx, baseY) {
  noStroke();
  fill('lightgray');
  // head
  circle(fx, baseY - 180, 52);
  // neck
  rect(fx - 8, baseY - 156, 16, 16);
  // torso
  rect(fx - 40, baseY - 142, 80, 130, 20);
  // arms
  rect(fx - 62, baseY - 138, 20, 96, 10);
  rect(fx + 42, baseY - 138, 20, 96, 10);
  // legs
  rect(fx - 34, baseY - 16, 26, 96, 10);
  rect(fx + 8, baseY - 16, 26, 96, 10);
}

function drawRegions(fx, baseY) {
  regionScreen = {};
  for (let r of regions) {
    let x = fx + r.dx, y = baseY + r.dy;
    regionScreen[r.key] = { x: x, y: y, rw: r.rw, rh: r.rh };
    let sel = selected === r.key;
    let hover = insideEllipse(mouseX, mouseY, x, y, r.rw, r.rh);
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'steelblue' : 'slategray');
    fill(sel ? color(135, 206, 250, 220) : (hover ? color(173, 216, 230, 160) : color(255, 255, 255, 150)));
    ellipse(x, y, r.rw * 2, r.rh * 2);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(r.name, x, y);
  }
}

function drawInfoPanel() {
  let px = canvasWidth * 0.52;
  let pw = canvasWidth - px - margin;
  let py = 46;
  let ph = drawHeight - py - 12;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(px, py, pw, ph, 10);
  noStroke();

  toggleRects = [];
  if (!selected) {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click a body system to learn how alcohol affects it.', px + 12, py + 14, pw - 24, ph - 28);
    return;
  }

  let r = regions.find(q => q.key === selected);
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(16);
  text(r.name, px + 12, py + 12);

  let y = py + 40;
  fill('black');
  textSize(13);
  text('What it does: ' + r.normal, px + 12, y, pw - 24, 70);
  y += 66;
  text('Effect of alcohol: ' + r.effect, px + 12, y, pw - 24, 84);
  y += 80;

  if (r.key === 'brain') {
    // segmented toggle (drawn, content-level)
    let labels = ['Developing (Teen)', 'Adult'];
    let tw = (pw - 24) / 2;
    for (let i = 0; i < 2; i++) {
      let tx = px + 12 + i * tw;
      let ty = y;
      toggleRects.push({ x: tx, y: ty, w: tw, h: 28, dev: i === 0 });
      let on = (i === 0) === devView;
      stroke('mediumseagreen');
      strokeWeight(1.5);
      fill(on ? 'mediumseagreen' : 'white');
      rect(tx, ty, tw, 28, 6);
      noStroke();
      fill(on ? 'white' : 'seagreen');
      textAlign(CENTER, CENTER);
      textSize(12);
      text(labels[i], tx + tw / 2, ty + 14);
    }
    y += 36;
    fill('darkslateblue');
    textAlign(LEFT, TOP);
    textSize(13);
    text(devView ? r.dev : r.adult, px + 12, y, pw - 24, ph - (y - py) - 12);
  }
}

function insideEllipse(px, py, cx, cy, rw, rh) {
  let dx = (px - cx) / rw, dy = (py - cy) / rh;
  return dx * dx + dy * dy <= 1;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let t of toggleRects) {
    if (pointInRect(mouseX, mouseY, t)) { devView = t.dev; return; }
  }
  for (let r of regions) {
    let s = regionScreen[r.key];
    if (s && insideEllipse(mouseX, mouseY, s.x, s.y, s.rw, s.rh)) {
      selected = r.key;
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
