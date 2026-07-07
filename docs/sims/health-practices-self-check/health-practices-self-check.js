// Health Practices Self-Check - MicroSim (rate everyday practices)
// CANVAS_HEIGHT: 492
// Grade 3, Analyze (L4): students examine everyday health practices across categories and
// identify which they do well and which they might improve. Non-graded reflection.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let summaryButton;
let resetButton;

let practices = ['Eating balanced meals', 'Staying active', 'Getting enough sleep', 'Washing hands',
  'Using safety gear', 'Talking about feelings', 'Being kind to others', 'Following safety plans'];
let options = ['Going Well', 'Could Improve', 'Not Sure'];
let optColors = ['seagreen', 'goldenrod', 'gray'];

let ratings = new Array(8).fill(-1);
let showSummary = false;
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  summaryButton = createButton('See My Summary');
  summaryButton.mousePressed(() => { showSummary = true; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { ratings = new Array(8).fill(-1); showSummary = false; });
  positionControls();
  describe('Eight everyday health-practice cards, each with a Going Well, Could Improve, or ' +
    'Not Sure selector. A non-graded summary shows where the student feels strong and where ' +
    'they might grow.', LABEL);
}

function positionControls() {
  summaryButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Health Practices Self-Check', canvasWidth / 2, 8);

  if (showSummary) { drawSummary(); return; }

  optRects = [];
  let ch = 44, gap = 6, y0 = 40;
  for (let i = 0; i < 8; i++) {
    let y = y0 + i * (ch + gap);
    noStroke(); fill('white'); stroke('silver'); strokeWeight(1); rect(margin, y, canvasWidth - margin * 2, ch, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12); text(practices[i], margin + 8, y + 14, canvasWidth * 0.4, 20);
    // 3 option buttons
    let bx = canvasWidth * 0.42, bw = (canvasWidth - margin - bx) / 3 - 4;
    for (let j = 0; j < 3; j++) {
      let x = bx + j * (bw + 4);
      optRects.push({ x: x, y: y + 8, w: bw, h: 28, i: i, j: j });
      let on = ratings[i] === j;
      strokeWeight(on ? 2.5 : 1); stroke(optColors[j]);
      fill(on ? lerpColor(color(optColors[j]), color('white'), 0.6) : 'white');
      rect(x, y + 8, bw, 28, 5);
      noStroke(); fill(optColors[j]); textAlign(CENTER, CENTER); textSize(9.5); text(options[j], x + bw / 2, y + 22);
    }
  }
  cursor(overAny() ? HAND : ARROW);
}

function drawSummary() {
  let well = ratings.filter(r => r === 0).length;
  let imp = ratings.filter(r => r === 1).length;
  let unsure = ratings.filter(r => r === 2).length;
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(15);
  text('Your Self-Check Summary', canvasWidth / 2, 44);
  textAlign(LEFT, TOP); textSize(14);
  fill('seagreen'); text('Going Well: ' + well, margin + 20, 84);
  fill('darkgoldenrod'); text('Could Improve: ' + imp, margin + 20, 114);
  fill('gray'); text('Not Sure: ' + unsure, margin + 20, 144);
  fill('black'); textSize(13);
  text("This is not a grade — it's a way to notice your strengths and pick one practice to grow.",
    margin + 20, 186, canvasWidth - margin * 2 - 40, 60);
  // list "could improve" items as growth ideas
  fill('darkgoldenrod'); textSize(12);
  let y = 236; text('Practices to grow:', margin + 20, y); y += 20;
  fill('black'); textSize(11);
  let any = false;
  for (let i = 0; i < 8; i++) if (ratings[i] === 1) { text('• ' + practices[i], margin + 24, y); y += 18; any = true; }
  if (!any) { fill('seagreen'); text('You feel good about all of them — keep it up!', margin + 24, y); }
}

function overAny() { for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (showSummary) return;
  for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) { ratings[r.i] = r.j; return; }
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
