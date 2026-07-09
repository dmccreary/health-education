// Unsafe Situation Signal Explorer - MicroSim (categorized click-to-reveal grid)
// CANVAS_HEIGHT: 480
// Analyze (L4): students examine situations across Relationships, Technology, and
// Physical Safety and distinguish which signals indicate an unsafe situation worth
// reporting. A 3-column grid of nine clickable signal cards reveals a description
// and why it is worth acting on. "Show All Signals" highlights the full set.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let showAllButton, resetButton;
let showAll = false;

let columns = [
  { name: 'Relationships',   color: '#c0577b', tint: '#f7e6ec' },
  { name: 'Technology',      color: '#3f7cc4', tint: '#e4edf8' },
  { name: 'Physical Safety', color: '#4e9a6b', tint: '#e5f1ea' }
];

// col: 0 Relationships, 1 Technology, 2 Physical Safety ; row: 0..2
let signals = [
  { col: 0, row: 0, label: 'Isolation', emoji: '🚷',
    desc: 'A friend or older person tries to keep you away from other people.',
    why: 'Being cut off from others is a warning sign. Stay connected and tell a trusted adult.' },
  { col: 0, row: 1, label: 'Repeated Pressure', emoji: '🔁',
    desc: 'Someone keeps pushing you to do something after you already said no.',
    why: "Someone continuing to ask after you've said no is coercion. You can say no and walk away." },
  { col: 0, row: 2, label: 'Ignored "No"', emoji: '🚫',
    desc: "You say no, but the other person acts like they didn't hear you.",
    why: 'When someone ignores your no, they are not respecting your boundary. Tell a trusted adult.' },
  { col: 1, row: 0, label: 'Stranger Contact', emoji: '📱',
    desc: "Someone you don't know messages you online or asks to meet.",
    why: "Strangers who reach out online can be unsafe. Don't reply, and tell a trusted adult." },
  { col: 1, row: 1, label: 'Photo Shared', emoji: '📷',
    desc: 'A picture of you is shared without you saying it is okay.',
    why: 'Sharing images without permission is not okay. Report it to a trusted adult.' },
  { col: 1, row: 2, label: 'Secret Message', emoji: '🤫',
    desc: 'Someone tells you to keep your chats a secret from your family.',
    why: 'Being asked to hide messages from trusted adults is a warning sign. Tell someone you trust.' },
  { col: 2, row: 0, label: 'Unknown Adult', emoji: '🚶',
    desc: "An adult you don't know is somewhere they shouldn't be at school.",
    why: 'An unknown adult in a student space is worth reporting to a teacher or staff member.' },
  { col: 2, row: 1, label: 'Uneasy Feeling', emoji: '😟',
    desc: "Something just feels wrong, even if you can't say why.",
    why: 'Trust this feeling — tell a trusted adult.' },
  { col: 2, row: 2, label: 'Routine Mismatch', emoji: '🚨',
    desc: "Someone's plan doesn't match the safety rules you were taught.",
    why: "When a plan doesn't match the safety routine you know, pause and check with a trusted adult." }
];

let selected = -1;
let visited = {};
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showAllButton = createButton('Show All Signals');
  showAllButton.mousePressed(toggleAll);
  showAllButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A three-column grid of nine warning-signal cards grouped under ' +
    'Relationships, Technology, and Physical Safety. Clicking a signal reveals a ' +
    'short description and why it is worth telling a trusted adult about. ' +
    '"Show All Signals" highlights every card at once.', LABEL);
}

function positionControls() {
  showAllButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 140, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#f7fbff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#12506b');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Unsafe Situation Signal Explorer', canvasWidth / 2, 8);

  drawGrid();
  drawInfo();
}

function drawGrid() {
  cardRects = [];
  let n = 3, gap = 8;
  let colW = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let headerY = 36;
  let cardTop = 60;
  let cardH = 62, rowGap = 8;

  for (let ci = 0; ci < n; ci++) {
    let x = margin + ci * (colW + gap);
    // column header
    noStroke();
    fill(columns[ci].color);
    textAlign(CENTER, TOP);
    textSize(min(14, colW / 7));
    text(columns[ci].name, x, headerY, colW, 20);
  }

  for (let s of signals) {
    let x = margin + s.col * (colW + gap);
    let y = cardTop + s.row * (cardH + rowGap);
    let r = { x: x, y: y, w: colW, h: cardH, key: s.col * 3 + s.row };
    cardRects.push({ rect: r, sig: s });

    let sel = selected === (s.col * 3 + s.row);
    let seen = showAll || visited[s.col * 3 + s.row];
    let hover = pointInRect(mouseX, mouseY, r);
    strokeWeight(sel ? 4 : 2);
    stroke(columns[s.col].color);
    fill(sel ? columns[s.col].tint : (hover ? '#fffbe6' : (seen ? columns[s.col].tint : 'white')));
    rect(x, y, colW, cardH, 8);

    noStroke();
    textAlign(CENTER, TOP);
    textSize(22);
    text(s.emoji, x, y + 6, colW, 26);
    fill('#2b3a42');
    textSize(min(12.5, colW / 8));
    text(s.label, x + 3, y + 32, colW - 6, 28);

    if (seen && !sel) {
      fill(columns[s.col].color);
      textAlign(RIGHT, TOP);
      textSize(12);
      text('✓', x + colW - 6, y + 4);
    }
  }
  cursor(overAnyCard() ? HAND : ARROW);
}

function drawInfo() {
  let px = margin, py = 292, pw = canvasWidth - 2 * margin, ph = drawHeight - py - 10;
  fill('white');
  stroke('#9bb7c9');
  strokeWeight(1.5);
  rect(px, py, pw, ph, 10);
  noStroke();
  textAlign(LEFT, TOP);

  if (showAll) {
    fill('#12506b');
    textSize(15);
    text('Every signal here is worth acting on', px + 12, py + 10);
    fill('black');
    textSize(13);
    text('When a situation in a relationship, online, or around you feels unsafe, ' +
         'you do not have to sort it out alone — tell a trusted adult. Speaking up is ' +
         'the right move for any of these signals.', px + 12, py + 34, pw - 24, ph - 44);
  } else if (selected >= 0) {
    let s = signals.find(q => q.col * 3 + q.row === selected);
    fill(columns[s.col].color);
    textSize(15);
    text(columns[s.col].name + ': ' + s.label, px + 12, py + 10);
    fill('#333');
    textSize(13);
    text(s.desc, px + 12, py + 34, pw - 24, 34);
    fill('#12506b');
    textSize(13);
    text(s.why, px + 12, py + 70, pw - 24, ph - 78);
  } else {
    fill('#40525c');
    textAlign(CENTER, CENTER);
    textSize(14);
    text("Click any signal to learn why it's worth acting on.",
         px + 12, py + 8, pw - 24, ph - 16);
  }
}

function overAnyCard() {
  for (let c of cardRects) if (pointInRect(mouseX, mouseY, c.rect)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let c of cardRects) {
    if (pointInRect(mouseX, mouseY, c.rect)) {
      selected = c.rect.key;
      visited[c.rect.key] = true;
      showAll = false;
      showAllButton.html('Show All Signals');
      return;
    }
  }
}

function toggleAll() {
  showAll = !showAll;
  showAllButton.html(showAll ? 'Hide Signals' : 'Show All Signals');
  if (showAll) {
    selected = -1;
    for (let s of signals) visited[s.col * 3 + s.row] = true;
  }
}

function resetAll() {
  selected = -1;
  visited = {};
  showAll = false;
  showAllButton.html('Show All Signals');
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
