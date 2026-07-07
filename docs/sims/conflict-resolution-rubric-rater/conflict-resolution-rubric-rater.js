// Conflict-Resolution Skill Rubric Rater - MicroSim (rate a dialogue against a rubric)
// CANVAS_HEIGHT: 512
// Grades 9-12, Evaluate (L5): students rate a scripted conflict-resolution dialogue
// against a four-criterion rubric and compare their ratings to an expert model.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let compareButton;
let justInput;
let resetButton;

let criteria = ['Stayed on the issue', 'Listened actively', 'Checked understanding', 'Reached a mutual solution'];

let transcripts = [
  { name: 'Chore conflict',
    lines: ['A: The kitchen is a mess again.', 'B: I did the dishes yesterday, so it is not on me.',
      'A: I am talking about today, not yesterday.', 'B: Fine. What exactly do you want?',
      'A: Can we split it — you wash, I dry?', 'B: Okay, that works.'],
    expert: [3, 1, 1, 3] },
  { name: 'Group project',
    lines: ['A: You changed the plan without asking.', 'B: Tell me what part bothered you.',
      'A: I felt cut out of the decision.', 'B: I hear you — I should have checked first.',
      'A: Thanks. Can we vote on big changes?', 'B: Agreed, we vote from now on.'],
    expert: [4, 4, 4, 4] },
  { name: 'Friend-group exclusion',
    lines: ['A: You left me out of the plans again.', 'B: We just forgot, no big deal.',
      'A: It felt like a big deal to me.', 'B: Whatever, you are too sensitive.',
      'A: So can you add me next time?', 'B: Maybe.'],
    expert: [3, 1, 2, 1] }
];

let tIndex = 0;
let ratings = [0, 0, 0, 0];
let showCompare = false;
let starRects = [];
let tabRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  compareButton = createButton('Compare to Expert Rating');
  compareButton.mousePressed(() => { showCompare = true; });
  justInput = createInput('');
  justInput.parent(document.querySelector('main'));
  justInput.attribute('placeholder', 'Justify your ratings...');
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('A scripted conflict dialogue and a four-criterion rubric with 1-4 star ratings ' +
    'per criterion. Students rate each criterion, justify it, and compare to an expert ' +
    'rating that highlights matches and gaps.', LABEL);
}

function positionControls() {
  justInput.position(10, drawHeight + 14);
  justInput.size(canvasWidth - 240);
  compareButton.position(canvasWidth - 220, drawHeight + 14);
  resetButton.position(canvasWidth - 56, drawHeight + 14);
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
  textSize(17);
  text('Conflict-Resolution Rubric Rater', canvasWidth / 2, 6);

  // scenario tabs
  tabRects = [];
  let tw = (canvasWidth - margin * 2) / 3;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * tw;
    tabRects.push({ x: x, y: 28, w: tw, h: 22, i: i });
    let on = tIndex === i;
    noStroke(); fill(on ? 'slateblue' : 'gainsboro');
    rect(x + 1, 28, tw - 2, 22, 4);
    fill(on ? 'white' : 'dimgray'); textAlign(CENTER, CENTER); textSize(11);
    text(transcripts[i].name, x + 2, 39, tw - 4, 22);
  }

  // transcript panel
  let tp = 56, th = 150;
  fill('whitesmoke'); stroke('silver'); strokeWeight(1);
  rect(margin, tp, canvasWidth - margin * 2, th, 6);
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
  let ly = tp + 8;
  for (let line of transcripts[tIndex].lines) {
    text(line, margin + 10, ly, canvasWidth - margin * 2 - 20, 20);
    ly += 22;
  }

  // rubric with stars
  starRects = [];
  let ry = tp + th + 10, rowH = 46;
  for (let c = 0; c < 4; c++) {
    let y = ry + c * rowH;
    noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
    text(criteria[c], margin, y);
    // stars
    for (let s = 1; s <= 4; s++) {
      let x = margin + 8 + (s - 1) * 30;
      let sy = y + 18;
      starRects.push({ x: x - 12, y: sy - 12, w: 26, h: 26, c: c, s: s });
      let filled = ratings[c] >= s;
      drawStar(x, sy, 10, filled ? 'gold' : 'white', 'goldenrod');
    }
    // expert compare
    if (showCompare) {
      let ex = transcripts[tIndex].expert[c];
      let match = ratings[c] === ex;
      noStroke(); textAlign(LEFT, CENTER); textSize(11);
      fill(match ? 'seagreen' : 'crimson');
      text('expert: ' + ex + (match ? ' ✓' : ' (yours: ' + ratings[c] + ')'), margin + 140, y + 18);
    }
  }
  cursor(overAnyStar() || overAnyTab() ? HAND : ARROW);

  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text(showCompare ? 'Compare your stars to the expert rating for each row.'
    : 'Rate each criterion 1-4 stars, then justify and compare.',
    margin, ry + 4 * rowH - 2, canvasWidth - margin * 2, 20);
}

function drawStar(cx, cy, r, fillCol, strokeCol) {
  push(); translate(cx, cy); stroke(strokeCol); strokeWeight(1); fill(fillCol);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let ang = -HALF_PI + i * PI / 5;
    let rad = i % 2 === 0 ? r : r * 0.45;
    vertex(cos(ang) * rad, sin(ang) * rad);
  }
  endShape(CLOSE); pop();
}

function overAnyStar() { for (let s of starRects) if (pointInRect(mouseX, mouseY, s)) return true; return false; }
function overAnyTab() { for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) return true; return false; }
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) { tIndex = t.i; ratings = [0, 0, 0, 0]; showCompare = false; return; }
  for (let s of starRects) if (pointInRect(mouseX, mouseY, s)) { ratings[s.c] = s.s; return; }
}

function reset() {
  ratings = [0, 0, 0, 0]; showCompare = false; justInput.value('');
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
