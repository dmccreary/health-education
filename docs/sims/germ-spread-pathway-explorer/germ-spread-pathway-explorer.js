// Germ Spread Pathway Explorer - MicroSim (five spread pathways + prevention tips)
// CANVAS_HEIGHT: 490
// Grade 4, Understand (L2): students identify and explain the five common pathways germs
// use to spread between people, surfaces, and hosts.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

let paths = [
  { key: 'Direct Contact', fx: 0.2, fy: 0.35, desc: 'Germs spread by touching, like shaking hands.', tip: 'Wash your hands often.' },
  { key: 'Respiratory Droplets', fx: 0.5, fy: 0.22, desc: 'Coughs and sneezes send germs into the air.', tip: 'Cover coughs with your elbow.' },
  { key: 'Contaminated Surfaces', fx: 0.8, fy: 0.35, desc: 'Germs live on doorknobs and objects you touch.', tip: 'Clean shared surfaces; wash hands after.' },
  { key: 'Contaminated Food/Water', fx: 0.35, fy: 0.62, desc: 'Germs can be in unclean food or water.', tip: 'Rinse food and drink clean water.' },
  { key: 'Insect/Animal Bites', fx: 0.68, fy: 0.62, desc: 'Some germs spread through bites, like mosquitoes.', tip: 'Use bug protection outdoors.' }
];

let selected = -1;
let showAll = false;
let spotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showAllButton = createButton('Show All Pathways');
  showAllButton.mousePressed(() => { showAll = !showAll; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showAll = false; });
  positionControls();
  describe('A classroom/home scene with five hotspots for how germs spread — direct ' +
    'contact, respiratory droplets, contaminated surfaces, contaminated food or water, and ' +
    'insect or animal bites. Clicking each shows a description and a prevention tip.', LABEL);
}

function positionControls() {
  showAllButton.position(10, drawHeight + 10);
  resetButton.position(170, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Germ Spread Pathway Explorer', canvasWidth / 2, 8);

  // scene backdrop
  let sceneY = 40, sceneH = 230;
  noStroke(); fill('honeydew'); rect(margin, sceneY, canvasWidth - margin * 2, sceneH, 8);
  fill('bisque'); rect(margin, sceneY + sceneH - 40, canvasWidth - margin * 2, 40, 8);

  // hotspots
  spotScreen = [];
  for (let i = 0; i < paths.length; i++) {
    let x = margin + paths[i].fx * (canvasWidth - margin * 2);
    let y = sceneY + paths[i].fy * sceneH;
    spotScreen.push({ x: x, y: y, r: 20 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 22;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'crimson');
    fill(sel ? 'gold' : (hover ? 'mistyrose' : color(220, 20, 60, 150)));
    circle(x, y, 40);
    noStroke(); fill(sel || hover ? 'black' : 'white'); textAlign(CENTER, CENTER); textSize(12); text(i + 1, x, y);
    if (showAll || sel || hover) { fill('black'); textAlign(CENTER, TOP); textSize(9); text(paths[i].key, x - 48, y + 20, 96, 24); }
  }
  cursor(overAny() ? HAND : ARROW);

  // infobox
  let py = 282, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (selected < 0) { fill('dimgray'); text('Click a red hotspot to learn how germs spread that way — and one way to stop it.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else {
    fill('crimson'); text(paths[selected].key, margin + 12, py + 8);
    fill('black'); textSize(12); text(paths[selected].desc, margin + 12, py + 28, canvasWidth - margin * 2 - 24, 30);
    fill('seagreen'); text('Prevention: ' + paths[selected].tip, margin + 12, py + 58, canvasWidth - margin * 2 - 24, 30);
  }
}

function overAny() { for (let s of spotScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; return false; }

function mousePressed() {
  for (let i = 0; i < spotScreen.length; i++) { let s = spotScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; } }
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
