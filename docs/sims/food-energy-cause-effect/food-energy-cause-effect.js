// Where Does Your Energy Come From? - MicroSim (step-through energy across a day)
// CANVAS_HEIGHT: 452
// Grade 2, Understand (L2): students explain the cause-and-effect relationship between
// eating food and having energy to grow, move, and think, across a school day.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let backButton;

let moments = [
  { name: 'Breakfast', energy: 90, state: 'eat', cap: 'You eat breakfast. Food gives your body energy — the battery fills up!' },
  { name: 'Morning Class', energy: 65, state: 'think', cap: 'Thinking and learning use energy, so the battery goes down a little.' },
  { name: 'Recess', energy: 38, state: 'run', cap: 'Running and playing use lots of energy — the battery drops more.' },
  { name: 'Afternoon Snack', energy: 78, state: 'eat', cap: 'A healthy snack refills your energy so you can finish the day strong.' }
];

let m = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next ▶');
  nextButton.mousePressed(() => { if (m < moments.length - 1) m++; });
  backButton = createButton('◀ Back');
  backButton.mousePressed(() => { if (m > 0) m--; });
  positionControls();
  describe('A four-moment school day — breakfast, morning class, recess, afternoon snack — ' +
    'with a battery-style energy meter that rises when you eat and falls when you move and ' +
    'think, showing food gives energy.', LABEL);
}

function positionControls() {
  backButton.position(10, drawHeight + 12);
  nextButton.position(canvasWidth - 90, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(19);
  text('Where Does Your Energy Come From?', canvasWidth / 2, 8);

  // timeline strip
  let tw = (canvasWidth - margin * 2) / 4;
  for (let i = 0; i < 4; i++) {
    let x = margin + i * tw;
    noStroke(); fill(i === m ? 'gold' : (i < m ? 'khaki' : 'gainsboro'));
    rect(x + 2, 38, tw - 4, 30, 5);
    fill(i === m ? 'black' : 'dimgray'); textAlign(CENTER, CENTER); textSize(10);
    text(moments[i].name, x + 2, 53, tw - 4, 30);
  }

  // character
  let cx = canvasWidth * 0.32, cy = 180;
  drawCharacter(cx, cy, moments[m].state);

  // energy battery
  drawBattery(canvasWidth * 0.68, 130, moments[m].energy);

  // caption
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(15);
  text(moments[m].cap, margin, 296, canvasWidth - margin * 2, 90);
}

function drawCharacter(x, y, state) {
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(x, y - 40, 44);
  noStroke(); fill('sienna'); circle(x - 9, y - 44, 5); circle(x + 9, y - 44, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  if (state === 'run') arc(x, y - 34, 18, 12, 0.1 * PI, 0.9 * PI);
  else if (state === 'think') line(x - 8, y - 30, x + 8, y - 30);
  else arc(x, y - 34, 20, 14, 0.1 * PI, 0.9 * PI);
  stroke('mediumpurple'); strokeWeight(3); fill('plum');
  rect(x - 20, y - 20, 40, 54, 12);
  noStroke();
  if (state === 'run') { stroke('mediumpurple'); strokeWeight(3); line(x - 20, y + 34, x - 34, y + 54); line(x + 20, y + 34, x + 34, y + 44); }
  if (state === 'think') { noStroke(); fill('gold'); textAlign(CENTER, CENTER); textSize(16); text('?', x + 30, y - 50); }
  if (state === 'eat') { noStroke(); fill('tomato'); circle(x + 28, y - 10, 12); }
  noStroke();
}

function drawBattery(x, y, energy) {
  let bw = 60, bh = 120;
  stroke('gray'); strokeWeight(2); fill('white'); rect(x, y, bw, bh, 6);
  fill('gray'); noStroke(); rect(x + bw / 2 - 10, y - 8, 20, 8, 3); // terminal
  let fillH = (energy / 100) * (bh - 8);
  fill(energy > 60 ? 'seagreen' : (energy > 35 ? 'goldenrod' : 'indianred'));
  rect(x + 4, y + bh - 4 - fillH, bw - 8, fillH, 4);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(12); text('Energy', x, y + bh + 6, bw, 16);
  fill('white'); textAlign(CENTER, CENTER); textSize(14); text(energy + '%', x + bw / 2, y + bh - fillH / 2 - 4);
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
