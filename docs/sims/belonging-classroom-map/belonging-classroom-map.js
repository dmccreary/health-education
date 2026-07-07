// Belonging Classroom Map - MicroSim (clickable character explorer)
// CANVAS_HEIGHT: 492
// Grade 1, Understand (L2): students identify visible signs that a classroom
// character feels a sense of belonging (or not yet) and describe the caring
// relationship that helps. Every situation is gentle and fixable.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let signsButton;
let resetButton;

// characters positioned as fractions of the scene
let chars = [
  { name: 'Sam', fx: 0.18, fy: 0.30, belong: true, clue: 'smiling, sitting with friends',
    text: 'Sam is smiling and sitting with friends — that caring friendship helps Sam feel like they belong.' },
  { name: 'Priya', fx: 0.48, fy: 0.24, belong: false, clue: 'standing at the edge of a game',
    text: 'Priya is waiting at the edge of the game. Inviting Priya to join could help her feel like she belongs too.' },
  { name: 'Marco', fx: 0.78, fy: 0.32, belong: true, clue: 'reading with a buddy',
    text: 'Marco shares a book with a buddy — reading together helps Marco feel included.' },
  { name: 'Lena', fx: 0.28, fy: 0.66, belong: true, clue: 'laughing with the teacher',
    text: 'Lena is laughing with the teacher — a caring adult helps Lena feel she belongs.' },
  { name: 'Theo', fx: 0.55, fy: 0.70, belong: false, clue: 'sitting alone at a table',
    text: 'Theo is sitting by himself. Asking Theo to sit with you could help him feel welcome.' },
  { name: 'Aria', fx: 0.82, fy: 0.64, belong: true, clue: 'high-fiving a classmate',
    text: 'Aria high-fives a friend — small kind moments build belonging.' }
];

let selected = -1;
let showSigns = false;
let charScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  signsButton = createButton('Show Signs');
  signsButton.mousePressed(() => { showSigns = !showSigns; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showSigns = false; });
  positionControls();
  describe('A classroom scene with six characters. Clicking a character shows whether ' +
    'they feel a sense of belonging and the caring relationship behind it. Characters who ' +
    'do not yet belong come with a kind next step to help.', LABEL);
}

function positionControls() {
  signsButton.position(10, drawHeight + 11);
  resetButton.position(120, drawHeight + 11);
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
  text('Belonging Classroom Map', canvasWidth / 2, 8);

  let sceneY = 40, sceneH = 300;
  // scene backdrop
  noStroke();
  fill('cornsilk'); rect(0, sceneY, canvasWidth, sceneH);
  fill('bisque'); rect(0, sceneY + sceneH - 60, canvasWidth, 60);
  // simple furniture hints
  fill('burlywood');
  rect(canvasWidth * 0.12, sceneY + sceneH * 0.42, 70, 12, 3);
  rect(canvasWidth * 0.62, sceneY + sceneH * 0.42, 70, 12, 3);

  drawChars(sceneY, sceneH);
  drawInfoStrip();
}

function drawChars(sceneY, sceneH) {
  charScreen = [];
  for (let i = 0; i < chars.length; i++) {
    let x = chars[i].fx * canvasWidth;
    let y = sceneY + chars[i].fy * sceneH;
    charScreen.push({ x: x, y: y, r: 22 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 24;
    // highlight ring when Show Signs or selected
    if ((showSigns || sel)) {
      noFill();
      stroke(chars[i].belong ? 'seagreen' : 'darkorange');
      strokeWeight(3);
      circle(x, y, 52);
    }
    // body
    stroke(sel ? 'darkorange' : 'gray');
    strokeWeight(sel ? 2.5 : 1.5);
    fill(chars[i].belong ? 'lightgreen' : 'moccasin');
    circle(x, y - 8, 22);           // head
    // simple smile / neutral
    stroke('black'); strokeWeight(1.5); noFill();
    if (chars[i].belong) arc(x, y - 6, 12, 10, 0.15 * PI, 0.85 * PI);
    else line(x - 5, y - 4, x + 5, y - 4);
    noStroke();
    fill('black');
    textAlign(CENTER, TOP); textSize(12);
    text(chars[i].name, x, y + 8);
    if (showSigns) {
      fill(chars[i].belong ? 'seagreen' : 'darkorange');
      textSize(10);
      text(chars[i].clue, x - 55, y + 24, 110, 30);
    }
  }
}

function drawInfoStrip() {
  let sy = drawHeight - 92;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 84, 8);
  noStroke();
  textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) {
    fill('dimgray');
    text('Click a classmate to see how they feel and what caring connection helps.',
      margin + 12, sy + 12, canvasWidth - margin * 2 - 24, 60);
  } else {
    fill(chars[selected].belong ? 'seagreen' : 'darkorange');
    textSize(13);
    text((chars[selected].belong ? 'Feels they belong: ' : 'Not yet — but easy to help: '),
      margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 20);
    fill('black');
    text(chars[selected].text, margin + 12, sy + 30, canvasWidth - margin * 2 - 24, 50);
  }
}

function mousePressed() {
  for (let i = 0; i < charScreen.length; i++) {
    let c = charScreen[i];
    if (dist(mouseX, mouseY, c.x, c.y) < c.r + 4) { selected = i; return; }
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
