// Coping Strategies Around the World - MicroSim (warm click-to-reveal gallery)
// CANVAS_HEIGHT: 492
// Grade 2, Understand (L2): students describe a range of coping strategies, including
// cultural practices, and explain how each helps a person feel calmer or supported.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let anotherButton;
let resetButton;

// alt = optional second example (cultural cards)
let cards = [
  { label: 'Deep Breathing', color: 'lightblue', ex: 'Taking slow, deep breaths helps your body feel calm.' },
  { label: 'Counting Calmly', color: 'lightyellow', ex: 'Counting slowly to ten gives big feelings time to settle.' },
  { label: 'Drawing Feelings', color: 'palegreen', ex: 'Drawing how you feel lets the feeling out in a safe way.' },
  { label: 'Quiet Hug Time', color: 'mistyrose', ex: 'A gentle hug can help you feel safe and cared for.' },
  { label: 'Family Storytelling', color: 'wheat', ex: 'Some families share stories to feel close and comforted.', alt: 'Elders may tell stories that pass on comfort and wisdom.' },
  { label: 'Community Ceremony', color: 'thistle', ex: 'Some families gather for a ceremony to feel connected and supported.', alt: 'A community may hold a ceremony to care for each other.' },
  { label: 'Music and Dance', color: 'peachpuff', ex: 'Traditional music and dance can lift a heavy feeling.', alt: 'Some families sing and dance together to feel joyful and close.' },
  { label: 'Sharing a Meal', color: 'lightcyan', ex: 'Eating together helps people feel warm and connected.', alt: 'A shared meal is a way many families show they care.' }
];

let selected = -1;
let showAlt = false;
let tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  anotherButton = createButton("Show Me Another Family's Way");
  anotherButton.mousePressed(() => { showAlt = !showAlt; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showAlt = false; });
  positionControls();
  describe('A warm gallery of eight coping strategies — from breathing and drawing to ' +
    'storytelling, ceremony, music, and shared meals. Tapping a card explains the practice ' +
    'and how it helps someone feel calmer or supported.', LABEL);
}

function positionControls() {
  anotherButton.position(10, drawHeight + 14);
  resetButton.position(canvasWidth - 70, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('lightcyan');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('teal');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Ways to Feel Calm and Cared For', canvasWidth / 2, 8);

  // 4x2 grid
  tileRects = [];
  let cols = 4, gap = 8;
  let tw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let th = 86, y0 = 38;
  for (let i = 0; i < 8; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (tw + gap);
    let y = y0 + r * (th + gap);
    tileRects.push({ x: x, y: y, w: tw, h: th, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: tw, h: th });
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'cadetblue');
    fill(sel || hover ? cards[i].color : 'seashell');
    rect(x, y, tw, th, 8);
    noStroke(); fill('cadetblue'); circle(x + tw / 2, y + 30, 30);
    fill('teal'); textAlign(CENTER, TOP); textSize(10);
    text(cards[i].label, x + 3, y + 52, tw - 6, 32);
  }
  cursor(overAny() ? HAND : ARROW);

  // caption
  let py = y0 + 2 * (th + gap) + 6;
  fill('white'); stroke('cadetblue'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) {
    fill('gray'); text('Tap a card to learn a way to feel calm. Every way is respected.', margin + 12, py + 12, canvasWidth - margin * 2 - 24, 50);
  } else {
    fill('black');
    let c = cards[selected];
    let txt = (showAlt && c.alt) ? c.alt : c.ex;
    text(c.label + ': ' + txt, margin + 12, py + 12, canvasWidth - margin * 2 - 24, 60);
    if (c.alt) { fill('teal'); textSize(11); text('(Tap "Show Me Another Family\'s Way" for more.)', margin + 12, py + (drawHeight - py - 10) - 26, canvasWidth - margin * 2 - 24, 20); }
  }
}

function overAny() { for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) { selected = t.i; showAlt = false; return; }
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
