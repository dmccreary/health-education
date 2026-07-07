// Health Claim Evaluator Rubric Rater - MicroSim (5-question validity rubric)
// CANVAS_HEIGHT: 482
// Grades 6-8, Evaluate (L5): students assess health claims against a five-question rubric
// and reach a validity verdict.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let nextButton;
let resetButton;

let questions = [
  { q: 'Credible author/reviewer?', good: 'yes' },
  { q: 'Evidence cited?', good: 'yes' },
  { q: 'Funding transparent?', good: 'yes' },
  { q: 'Regularly updated?', good: 'yes' },
  { q: 'Is a product being sold?', good: 'no' }
];

let claims = [
  { t: "CDC page: 'Wash hands to prevent flu.' Reviewed by doctors, cites studies, public funding, updated yearly, nothing sold.", src: 'Government source' },
  { t: "Influencer post: 'This tea melts fat fast!' No sources, sells the tea, no reviewer named.", src: 'Social media / influencer' },
  { t: 'University health site: authors listed, cites research, funding shown, updated, no product.', src: 'Institutional source' },
  { t: "Anonymous social post: a scary health claim with no evidence, never updated, unknown author.", src: 'Unverified social media' },
  { t: 'Government nutrition guide: named authors, evidence, transparent funding, updated, no product.', src: 'Government source' },
  { t: "Ad blog: 'Our supplement cures colds!' vague sources, sells the supplement.", src: 'Sponsored / selling' }
];

let idx = 0;
let answers = ['', '', '', '', ''];  // 'yes'/'no'
let toggleRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Claim');
  nextButton.mousePressed(() => { idx = (idx + 1) % claims.length; answers = ['', '', '', '', '']; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { answers = ['', '', '', '', '']; });
  positionControls();
  describe('A health claim with its source type, and five rubric toggles — credible author, ' +
    'evidence cited, transparent funding, regularly updated, and product being sold. A live ' +
    'validity score and verdict update as toggles are set.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(120, drawHeight + 12);
}

function score() {
  let s = 0;
  for (let i = 0; i < 5; i++) if (answers[i] && answers[i] === questions[i].good) s++;
  return s;
}
function answeredAll() { return answers.every(a => a !== ''); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Health Claim Evaluator', canvasWidth / 2, 6);

  // claim card
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 30, canvasWidth - margin * 2, 96, 8);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Source: ' + claims[idx].src, margin + 10, 36);
  fill('black'); textSize(13); text(claims[idx].t, margin + 10, 54, canvasWidth - margin * 2 - 20, 70);

  // 5 toggle questions
  toggleRects = [];
  let y0 = 136, rh = 40;
  for (let i = 0; i < 5; i++) {
    let y = y0 + i * rh;
    noStroke(); fill('navy'); textAlign(LEFT, CENTER); textSize(12);
    text(questions[i].q, margin, y + 14, canvasWidth * 0.6, 24);
    // Yes / No toggle
    let bx = canvasWidth - margin - 120;
    for (let j = 0; j < 2; j++) {
      let val = j === 0 ? 'yes' : 'no';
      let x = bx + j * 60;
      toggleRects.push({ x: x, y: y + 2, w: 56, h: 26, i: i, val: val });
      let on = answers[i] === val;
      strokeWeight(on ? 2.5 : 1); stroke(val === 'yes' ? 'seagreen' : 'indianred');
      fill(on ? (val === 'yes' ? 'honeydew' : 'mistyrose') : 'white');
      rect(x, y + 2, 56, 26, 5);
      noStroke(); fill(val === 'yes' ? 'seagreen' : 'indianred'); textAlign(CENTER, CENTER); textSize(12);
      text(val === 'yes' ? 'Yes' : 'No', x + 28, y + 15);
    }
  }
  cursor(overAny() ? HAND : ARROW);

  // verdict
  let vy = y0 + 5 * rh + 4;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, vy, canvasWidth - margin * 2, drawHeight - vy - 10, 8);
  noStroke(); textAlign(LEFT, CENTER); textSize(14);
  if (!answeredAll()) { fill('dimgray'); text('Answer all five, using the source info, to get a verdict.', margin + 10, vy + (drawHeight - vy - 10) / 2, canvasWidth - margin * 2 - 20, 40); }
  else {
    let s = score();
    let verdict = s >= 4 ? 'Likely Valid' : (s >= 2 ? 'Use Caution' : 'Likely Not Valid');
    let col = s >= 4 ? 'seagreen' : (s >= 2 ? 'darkgoldenrod' : 'indianred');
    fill(col); textSize(16); text('Validity Score: ' + s + '/5 — ' + verdict, margin + 10, vy + (drawHeight - vy - 10) / 2, canvasWidth - margin * 2 - 20, 40);
  }
}

function overAny() { for (let r of toggleRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of toggleRects) if (pointInRect(mouseX, mouseY, r)) { answers[r.i] = r.val; return; }
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
