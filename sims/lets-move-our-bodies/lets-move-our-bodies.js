// Let's Move Our Bodies! - MicroSim (movement buttons + happy energy meter)
// CANVAS_HEIGHT: 502
// Kindergarten, Understand (L2): students explain why daily movement helps the body feel
// good by moving a character and watching a happy-energy meter respond.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let runBtn, jumpBtn, danceBtn, climbBtn, resetBtn;

let move = 'idle';   // run, jump, dance, climb, idle
let energy = 0;
let phase = 0;
let messages = {
  run: 'Running gets your heart pumping!',
  jump: 'Jumping makes you strong and happy!',
  dance: 'Dancing is a fun way to move!',
  climb: 'Climbing builds strong muscles!',
  idle: 'Press a button to move and fill your energy!'
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  runBtn = createButton('Run'); runBtn.mousePressed(() => doMove('run'));
  jumpBtn = createButton('Jump'); jumpBtn.mousePressed(() => doMove('jump'));
  danceBtn = createButton('Dance'); danceBtn.mousePressed(() => doMove('dance'));
  climbBtn = createButton('Climb'); climbBtn.mousePressed(() => doMove('climb'));
  resetBtn = createButton('Reset'); resetBtn.mousePressed(() => { move = 'idle'; energy = 0; });
  positionControls();
  describe('A friendly character that runs, jumps, dances, or climbs when a button is ' +
    'pressed, and a Happy Energy meter that fills as the character moves.', LABEL);
}
function positionControls() {
  let bw = (canvasWidth - margin * 2 - 3 * 8) / 4;
  runBtn.position(margin, drawHeight + 12); jumpBtn.position(margin + (bw + 8), drawHeight + 12);
  danceBtn.position(margin + 2 * (bw + 8), drawHeight + 12); climbBtn.position(margin + 3 * (bw + 8), drawHeight + 12);
  resetBtn.position(canvasWidth - 56, drawHeight + 12);
}
function doMove(m) { move = m; energy = Math.min(100, energy + 20); }

function draw() {
  updateCanvasSize();
  phase += 0.15;
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(24); text("Let's Move Our Bodies!", canvasWidth / 2, 8);

  // character
  let cx = canvasWidth / 2, cy = 220;
  let bounce = move !== 'idle' ? Math.abs(Math.sin(phase)) * 24 : 0;
  drawKid(cx, cy - bounce, move, phase);

  // energy meter
  let mx = margin, my = 320, mw = canvasWidth - margin * 2, mh = 34;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(14); text('Happy Energy Meter', mx, my - 22);
  stroke('gray'); strokeWeight(1); fill('white'); rect(mx, my, mw, mh, 8);
  noStroke(); fill(energy >= 80 ? 'seagreen' : (energy >= 40 ? 'gold' : 'orange'));
  rect(mx, my, mw * energy / 100, mh, 8);
  fill('black'); textAlign(CENTER, CENTER); textSize(14); text(energy + '%', mx + mw / 2, my + mh / 2);

  // message
  noStroke(); fill('seagreen'); textAlign(CENTER, TOP); textSize(15); text(messages[move], margin, 372, canvasWidth - margin * 2, 40);
}
function drawKid(x, y, m, ph) {
  push();
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(x, y - 40, 46);
  noStroke(); fill('sienna'); circle(x - 10, y - 44, 5); circle(x + 10, y - 44, 5);
  noFill(); stroke('sienna'); strokeWeight(2); arc(x, y - 34, 20, 14, 0.1 * PI, 0.9 * PI);
  stroke('mediumpurple'); strokeWeight(4); fill('plum'); rect(x - 18, y - 18, 36, 46, 12);
  // arms/legs animate by move
  stroke('mediumpurple'); strokeWeight(4);
  let s = Math.sin(ph) * 14;
  if (m === 'jump') { line(x - 18, y - 6, x - 30, y - 24); line(x + 18, y - 6, x + 30, y - 24); line(x - 10, y + 28, x - 16, y + 48); line(x + 10, y + 28, x + 16, y + 48); }
  else if (m === 'dance') { line(x - 18, y - 6, x - 30, y - 8 + s); line(x + 18, y - 6, x + 30, y - 8 - s); line(x - 10, y + 28, x - 20 + s, y + 48); line(x + 10, y + 28, x + 20 + s, y + 48); }
  else if (m === 'climb') { line(x - 18, y - 6, x - 26, y - 26); line(x + 18, y - 6, x + 26, y - 26 + s); line(x - 10, y + 28, x - 14, y + 48 - s); line(x + 10, y + 28, x + 14, y + 48); }
  else { line(x - 18, y - 6, x - 28 + s, y + 8); line(x + 18, y - 6, x + 28 - s, y + 8); line(x - 10, y + 28, x - 14 - s, y + 48); line(x + 10, y + 28, x + 14 + s, y + 48); }
  pop();
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
