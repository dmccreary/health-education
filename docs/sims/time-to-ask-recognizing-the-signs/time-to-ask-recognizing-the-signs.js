// Time to Ask? Recognizing the Signs - MicroSim (click-to-reveal scene)
// CANVAS_HEIGHT: 490
// Grade 1, Understand (L2): students recognize when help is needed and who can
// support a decision. A warm everyday scene shows four clickable characters, each
// in a relatable moment. Clicking a character reveals the sign that it is time to
// ask for help and a matching helper suggestion. A counter tracks how many of the
// four signs have been explored; "Show All Signs" lists them together.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

// Four everyday situations. fx/fy are fractions of the scene rectangle.
let chars = [
  { label: 'Tying a shoe', type: 'shoe', col: '#5c9ead', face: 'neutral', fx: 0.16, fy: 0.62,
    sign: 'This task feels too hard alone.',
    helper: 'A family member can show you how.' },
  { label: 'A big worry', type: 'worry', col: '#c98bb9', face: 'worried', fx: 0.40, fy: 0.40,
    sign: 'This feeling is very big.',
    helper: 'A teacher or trusted adult can help you feel calmer.' },
  { label: 'A high shelf', type: 'shelf', col: '#e6a15c', face: 'neutral', fx: 0.65, fy: 0.40,
    sign: "I can't do this safely by myself.",
    helper: 'Ask school staff or an adult to reach it for you.' },
  { label: 'A friend alone', type: 'friend', col: '#7bb47b', face: 'sad', fx: 0.86, fy: 0.62,
    sign: 'My friend might need help too.',
    helper: 'Tell a trusted adult, or gently invite your friend to join in.' }
];

let selected = -1;
let visited = {};
let showAll = false;
let charScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showAllButton = createButton('Show All Signs');
  showAllButton.mousePressed(toggleShowAll);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('A warm everyday scene with four clickable characters: a student tying a ' +
    'shoe, a student with a big worried feeling before a test, a student reaching for ' +
    'a high shelf, and a student noticing a friend sitting alone. Clicking a character ' +
    'reveals the sign that it is time to ask for help and who can help.', LABEL);
}

function positionControls() {
  showAllButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 145, drawHeight + 10);
}

function resetAll() { selected = -1; visited = {}; showAll = false; showAllButton.html('Show All Signs'); }

function toggleShowAll() {
  showAll = !showAll;
  showAllButton.html(showAll ? 'Hide Summary' : 'Show All Signs');
  if (showAll) for (let i = 0; i < chars.length; i++) visited[i] = true;
}

function draw() {
  updateCanvasSize();

  fill('#fff6ea'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c'); textAlign(CENTER, TOP); textSize(18);
  text('Time to Ask? Recognizing the Signs', margin, 8, canvasWidth - margin * 2, 24);

  let sceneY = 40, sceneH = 300;
  if (showAll) {
    drawSummary(sceneY, sceneH);
  } else {
    drawScene(sceneY, sceneH);
    drawCharacters(sceneY, sceneH);
  }
  drawInfoStrip();

  let over = false;
  for (let s of charScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) over = true;
  cursor(over && !showAll ? HAND : ARROW);
}

function drawScene(sceneY, sceneH) {
  // warm room: wall then floor
  noStroke();
  fill('#ffe9cf'); rect(0, sceneY, canvasWidth, sceneH * 0.6);
  fill('#f3d3a5'); rect(0, sceneY + sceneH * 0.6, canvasWidth, sceneH * 0.4);
  // a soft rug
  fill('#f7c59f'); ellipse(canvasWidth * 0.5, sceneY + sceneH * 0.86, canvasWidth * 0.7, sceneH * 0.22);
  // a shelf on the wall near character 3
  fill('#c89a6a'); rect(canvasWidth * 0.58, sceneY + sceneH * 0.18, canvasWidth * 0.18, 8, 2);
  fill('#8bbf9f'); rect(canvasWidth * 0.60, sceneY + sceneH * 0.18 - 14, 14, 14, 2);
  fill('#d98c8c'); rect(canvasWidth * 0.66, sceneY + sceneH * 0.18 - 16, 12, 16, 2);
}

function drawCharacters(sceneY, sceneH) {
  charScreen = [];
  for (let i = 0; i < chars.length; i++) {
    let x = chars[i].fx * canvasWidth;
    let y = sceneY + chars[i].fy * sceneH;
    let r = 42;
    charScreen.push({ x: x, y: y, r: r });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < r;

    // gentle highlight ring
    if (sel || hover) {
      noStroke(); fill(sel ? 'rgba(255,193,7,0.35)' : 'rgba(255,193,7,0.18)');
      circle(x, y, r * 2 + 10);
    }

    drawKid(x, y, 46, chars[i].col, chars[i].face);
    drawProp(chars[i].type, x, y, 46);

    // number badge
    noStroke(); fill(sel ? 'darkorange' : '#1a3a6c');
    circle(x + 26, y - 30, 22);
    fill('white'); textAlign(CENTER, CENTER); textSize(13); text(i + 1, x + 26, y - 30);

    // label when hovered, selected, or already visited
    if (hover || sel || visited[i]) {
      fill('#3a2a12'); textAlign(CENTER, TOP); textSize(11);
      text(chars[i].label, x - 55, y + r + 2, 110, 20);
    }
  }
}

function drawKid(x, y, s, col, face) {
  // body
  noStroke(); fill(col);
  rectMode(CENTER);
  rect(x, y + s * 0.45, s * 0.8, s * 0.7, 10);
  rectMode(CORNER);
  arc(x, y + s * 0.12, s * 0.8, s * 0.8, PI, TWO_PI);
  // head
  fill('#f6c89a'); circle(x, y - s * 0.12, s * 0.62);
  // face
  fill('#3a2a12');
  circle(x - s * 0.12, y - s * 0.15, 4);
  circle(x + s * 0.12, y - s * 0.15, 4);
  noFill(); stroke('#3a2a12'); strokeWeight(2);
  if (face === 'sad') arc(x, y + s * 0.06, s * 0.28, s * 0.24, PI + 0.3, TWO_PI - 0.3);
  else if (face === 'worried') line(x - s * 0.1, y + s * 0.02, x + s * 0.1, y + s * 0.02);
  else arc(x, y - s * 0.02, s * 0.28, s * 0.22, 0.2, PI - 0.2);
  noStroke();
}

function drawProp(type, x, y, s) {
  push();
  if (type === 'shoe') {
    fill('#6b4f2a'); noStroke();
    ellipse(x, y + s * 0.95, s * 0.5, s * 0.24);
    rect(x - s * 0.24, y + s * 0.78, s * 0.3, s * 0.16, 4);
  } else if (type === 'worry') {
    // thought bubble with a big feeling
    fill('white'); stroke('#c98bb9'); strokeWeight(2);
    circle(x + s * 0.5, y - s * 0.7, s * 0.7);
    noStroke(); fill('#b05a9c'); textAlign(CENTER, CENTER); textSize(s * 0.5);
    text('!', x + s * 0.5, y - s * 0.68);
  } else if (type === 'shelf') {
    // raised arm reaching up
    stroke('#f6c89a'); strokeWeight(6); noFill();
    line(x + s * 0.2, y + s * 0.1, x + s * 0.42, y - s * 0.5);
  } else if (type === 'friend') {
    // the noticing student sees a small sad friend sitting nearby
    noStroke(); fill('#9aa7b0');
    circle(x - s * 0.55, y + s * 0.35, s * 0.42);
    rect(x - s * 0.78, y + s * 0.5, s * 0.46, s * 0.35, 6);
  }
  pop();
}

function drawSummary(sceneY, sceneH) {
  fill('white'); stroke('#e0b980'); strokeWeight(1.5);
  rect(margin, sceneY, canvasWidth - margin * 2, sceneH, 10);
  noStroke();
  fill('#8a5a1a'); textAlign(CENTER, TOP); textSize(14);
  text('Four Signs It May Be Time to Ask for Help', margin, sceneY + 10, canvasWidth - margin * 2, 22);

  let x = margin + 16, w = canvasWidth - margin * 2 - 32;
  let rowH = (sceneH - 44) / chars.length;
  let y = sceneY + 38;
  textAlign(LEFT, TOP);
  for (let i = 0; i < chars.length; i++) {
    fill('#1a3a6c'); textSize(12.5); textStyle(BOLD);
    text((i + 1) + '. ' + chars[i].sign, x, y, w, 18);
    textStyle(NORMAL);
    fill('#4a4a4a'); textSize(11.5);
    text('Who can help: ' + chars[i].helper, x, y + 18, w, rowH - 20);
    y += rowH;
  }
}

function drawInfoStrip() {
  let sy = drawHeight - 92;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 84, 8);
  noStroke();
  let ix = margin + 12, iw = canvasWidth - margin * 2 - 24;

  textAlign(LEFT, TOP);
  if (showAll) {
    fill('dimgray'); textSize(13);
    text('These are everyday moments. Noticing the sign and asking a helper is a strong, ' +
      'healthy choice.', ix, sy + 12, iw, 60);
  } else if (selected < 0) {
    fill('dimgray'); textSize(13);
    text("Click each person to find the sign that it's time to ask for help, and who can help.",
      ix, sy + 12, iw, 60);
  } else {
    fill('#1a3a6c'); textSize(13.5); textStyle(BOLD);
    text('Sign: ' + chars[selected].sign, ix, sy + 10, iw, 22);
    textStyle(NORMAL);
    fill('seagreen'); textSize(13);
    text('Who can help: ' + chars[selected].helper, ix, sy + 34, iw, 44);
  }

  let count = Object.keys(visited).length;
  fill('navy'); textAlign(RIGHT, BOTTOM); textSize(12);
  text('Explored ' + count + ' of ' + chars.length, canvasWidth - margin - 8, sy + 78);
}

function mousePressed() {
  if (showAll) return;
  if (mouseY > drawHeight) return;
  for (let i = 0; i < charScreen.length; i++) {
    let s = charScreen[i];
    if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; visited[i] = true; return; }
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
