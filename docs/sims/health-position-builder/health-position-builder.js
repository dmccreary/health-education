// Health Position Builder - MicroSim (assemble claim + evidence + reasoning)
// CANVAS_HEIGHT: 512
// Grade 4, Create (L6): students construct a health position by placing a claim, matching
// evidence, and connecting reasoning from provided tiles.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton;
let resetButton;

let topic = 'Should kids get enough sleep?';
let snippets = [
  { src: 'Doctor', t: 'Kids ages 6-12 need 9-12 hours of sleep each night.' },
  { src: 'Health agency', t: 'Enough sleep helps memory, mood, and staying healthy.' },
  { src: 'Community member', t: 'Our school moved start times later and kids felt better.' }
];
// slots: Claim, Evidence, Reasoning ; tiles tagged with slot (0/1/2) or distractor(-1)
let slots = ['Claim', 'Evidence', 'Reasoning'];
let tiles = [
  { t: 'Kids should get enough sleep every night.', slot: 0 },
  { t: 'Doctors say kids need 9-12 hours of sleep.', slot: 1 },
  { t: 'Because sleep helps memory, mood, and health.', slot: 2 },
  { t: 'Sleep is boring and a waste of time.', slot: -1 },
  { t: 'Everyone likes video games.', slot: -1 },
  { t: 'The sky is blue.', slot: -1 }
];

let placed = [-1, -1, -1];   // tile index in each slot
let selSlot = -1;
let checked = false;
let slotRects = [], tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Position');
  checkButton.mousePressed(() => { checked = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { placed = [-1, -1, -1]; selSlot = -1; checked = false; });
  positionControls();
  describe('A research topic with three source snippets, three build slots — claim, ' +
    'evidence, reasoning — and a bank of sentence tiles (some correct, some distractors). ' +
    'Students place the right tile in each slot and check their position.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  resetButton.position(170, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Health Position Builder', canvasWidth / 2, 6);

  // topic + snippets
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text('Topic: ' + topic, margin, 30);
  let sw = (canvasWidth - margin * 2 - 12) / 3;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (sw + 6);
    fill('whitesmoke'); stroke('silver'); strokeWeight(1); rect(x, 48, sw, 66, 4);
    noStroke(); fill('teal'); textAlign(LEFT, TOP); textSize(9); text(snippets[i].src, x + 4, 50);
    fill('black'); textSize(9); text(snippets[i].t, x + 4, 62, sw - 8, 50);
  }

  // slots
  slotRects = [];
  let y0 = 124, sh = 42, gap = 6;
  for (let i = 0; i < 3; i++) {
    let y = y0 + i * (sh + gap);
    slotRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: sh, i: i });
    let sel = selSlot === i;
    let ti = placed[i];
    let correct = checked && ti >= 0 && tiles[ti].slot === i;
    let wrong = checked && ti >= 0 && tiles[ti].slot !== i;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : (correct ? 'seagreen' : (wrong ? 'indianred' : 'slateblue')));
    fill(correct ? 'honeydew' : (wrong ? 'mistyrose' : (ti >= 0 ? 'lightyellow' : 'white')));
    rect(margin, y, canvasWidth - margin * 2, sh, 6);
    noStroke(); fill('slateblue'); textAlign(LEFT, TOP); textSize(11); text(slots[i] + ':', margin + 6, y + 4);
    fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(ti >= 0 ? tiles[ti].t : '(tap a slot, then a tile)', margin + 70, y + sh / 2, canvasWidth - margin * 2 - 80, sh);
  }

  // tile bank
  tileRects = [];
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Tiles:', margin, y0 + 3 * (sh + gap) + 2);
  let ty0 = y0 + 3 * (sh + gap) + 18, th = 30, cols = 2, tw = (canvasWidth - margin * 2 - 8) / cols;
  for (let i = 0; i < tiles.length; i++) {
    let used = placed.includes(i);
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + 8), y = ty0 + r * (th + 5);
    tileRects.push({ x: x, y: y, w: tw, h: th, i: i, used: used });
    strokeWeight(1.5); stroke('mediumpurple');
    fill(used ? 'gainsboro' : (pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th }) && selSlot >= 0 ? 'lavender' : 'white'));
    rect(x, y, tw, th, 5);
    noStroke(); fill(used ? 'gray' : 'black'); textAlign(LEFT, CENTER); textSize(9.5); text(tiles[i].t, x + 5, y + th / 2, tw - 10, th);
  }
  cursor(overAny() ? HAND : ARROW);

  if (checked) {
    let n = placed.filter((ti, i) => ti >= 0 && tiles[ti].slot === i).length;
    noStroke(); fill(n === 3 ? 'seagreen' : 'darkgoldenrod'); textAlign(LEFT, TOP); textSize(11);
    text(n === 3 ? '✓ Strong position! Claim, evidence, and reasoning all fit.' : n + ' of 3 slots correct — check the mismatches.', margin, drawHeight - 20, canvasWidth - margin * 2, 18);
  }
}

function overAny() {
  for (let r of slotRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of tileRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of slotRects) if (pointInRect(mouseX, mouseY, r)) { selSlot = r.i; return; }
  if (selSlot >= 0) for (let r of tileRects) if (pointInRect(mouseX, mouseY, r) && !r.used) {
    for (let s = 0; s < 3; s++) if (placed[s] === r.i) placed[s] = -1;
    placed[selSlot] = r.i; selSlot = -1; return;
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
