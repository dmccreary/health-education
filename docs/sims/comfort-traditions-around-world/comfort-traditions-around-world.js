// Comfort Traditions Around the World - MicroSim (warm click-to-reveal gallery)
// CANVAS_HEIGHT: 490
// Grade 1, Understand (L2): students describe several cultural and family comfort
// practices, recognizing that many caring approaches exist and all are respected.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let resetButton;

let scenes = [
  { title: 'A comfort meal', icon: 'meal', accent: 'peachpuff',
    cap: 'Sharing a comfort meal together — food made with care helps people feel loved.' },
  { title: 'A soft song', icon: 'song', accent: 'lightblue',
    cap: 'A grandparent singing softly — a gentle voice can soothe and reassure.' },
  { title: 'A told story', icon: 'story', accent: 'palegreen',
    cap: 'An elder telling a story — stories share wisdom and comfort.' },
  { title: 'Family together', icon: 'family', accent: 'thistle',
    cap: 'An extended family gathered — being surrounded by family brings belonging.' },
  { title: 'A quiet walk', icon: 'walk', accent: 'khaki',
    cap: 'A quiet walk together — calm time side by side helps worries ease.' },
  { title: 'A caring phrase', icon: 'blessing', accent: 'lightpink',
    cap: 'A comforting phrase or blessing — shared words remind us we are cared for.' }
];

let selected = -1;
let tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; });
  positionControls();
  describe('A warm gallery of six family comfort practices from diverse communities — a ' +
    'comfort meal, a soft song, a told story, family together, a quiet walk, and a caring ' +
    'phrase. Clicking a scene reveals how it helps someone feel supported.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  fill('oldlace');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('sienna');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Ways Families Show They Care', canvasWidth / 2, 8);

  // 3x2 grid of scene tiles
  tileRects = [];
  let cols = 3, rows = 2, gap = 10;
  let tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let th = 118;
  let y0 = 40;
  for (let i = 0; i < 6; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap);
    let y = y0 + r * (th + gap);
    tileRects.push({ x: x, y: y, w: tw, h: th, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th });
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'darkorange' : 'burlywood');
    fill(sel || hover ? scenes[i].accent : 'seashell');
    rect(x, y, tw, th, 10);
    drawSceneIcon(scenes[i].icon, x + tw / 2, y + 44);
    noStroke(); fill('saddlebrown'); textAlign(CENTER, TOP); textSize(12);
    text(scenes[i].title, x + 4, y + th - 30, tw - 8, 28);
  }
  cursor(overAnyTile() ? HAND : ARROW);

  // caption panel
  let py = y0 + 2 * (th + gap) + 6;
  fill('white'); stroke('burlywood'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 10);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) {
    fill('gray');
    text('Tap a scene to learn how families comfort each other. Every caring way is respected.',
      margin + 12, py + 10, canvasWidth - margin * 2 - 24, 60);
  } else {
    fill('black');
    text(scenes[selected].cap, margin + 12, py + 10, canvasWidth - margin * 2 - 24, 60);
  }
}

function drawSceneIcon(type, x, y) {
  push();
  strokeWeight(2);
  if (type === 'meal') { stroke('chocolate'); fill('white'); circle(x, y, 40); noStroke(); fill('tomato'); circle(x, y, 16); }
  else if (type === 'song') { stroke('steelblue'); fill('lightskyblue'); circle(x - 8, y, 26); noStroke(); fill('navy'); textAlign(CENTER, CENTER); textSize(16); text('♪', x + 14, y); }
  else if (type === 'story') { stroke('seagreen'); fill('white'); rect(x - 20, y - 14, 40, 28, 3); line(x, y - 14, x, y + 14); }
  else if (type === 'family') { stroke('purple'); fill('plum'); circle(x - 12, y, 18); circle(x + 6, y, 22); circle(x + 20, y + 2, 14); }
  else if (type === 'walk') { stroke('darkgoldenrod'); fill('wheat'); circle(x - 8, y - 6, 16); circle(x + 10, y + 2, 20); }
  else { stroke('palevioletred'); fill('mistyrose'); beginShape(); vertex(x, y + 10); bezierVertex(x - 18, y - 8, x - 6, y - 20, x, y - 8); bezierVertex(x + 6, y - 20, x + 18, y - 8, x, y + 10); endShape(CLOSE); }
  pop();
}

function overAnyTile() {
  for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) { selected = t.i; return; }
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
