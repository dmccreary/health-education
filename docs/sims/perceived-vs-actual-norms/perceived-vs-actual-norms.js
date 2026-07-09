// Perceived Versus Actual Norms Simulator
// CANVAS_HEIGHT: 500
// Grade 9-12, Analyze (L4): predict-then-reveal the gap between perceived social
// norms and actual survey-measured behavior, and explain why closing it changes behavior.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 390;
let controlHeight = 110;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

// Illustrative rates (%) based on patterns common in Monitoring the Future-style surveys.
const behaviors = {
  'Vaping (past 30 days)':        { perceived: 65, actual: 19 },
  'Alcohol use (past 30 days)':   { perceived: 60, actual: 22 },
  'Exercising 5+ days per week':  { perceived: 30, actual: 45 }
};
const behaviorNames = Object.keys(behaviors);

let behaviorSelect, guessSlider, revealButton, resetButton;
let stage = 0;           // 0 guess, 1 perceived, 2 actual, 3 gap
let currentBehavior = behaviorNames[0];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  behaviorSelect = createSelect();
  behaviorNames.forEach(n => behaviorSelect.option(n));
  behaviorSelect.changed(onBehaviorChange);

  guessSlider = createSlider(0, 100, 50, 1);

  revealButton = createButton('Reveal actual data');
  revealButton.mousePressed(advance);

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSim);

  positionControls();
  describe('A prediction activity: guess what percent of peers do a behavior, then step ' +
    'through reveals showing the perceived rate, the actual survey rate, and the gap between them.', LABEL);
}

function positionControls() {
  behaviorSelect.position(margin, drawHeight + 14);
  behaviorSelect.style('width', (canvasWidth * 0.5 - margin - 6) + 'px');
  guessSlider.position(margin, drawHeight + 58);
  guessSlider.style('width', (canvasWidth * 0.5 - margin - 6) + 'px');
  revealButton.position(canvasWidth * 0.5 + 6, drawHeight + 14);
  resetButton.position(canvasWidth * 0.5 + 6, drawHeight + 58);
}

function onBehaviorChange() { currentBehavior = behaviorSelect.value(); stage = 0; guessSlider.elt.disabled = false; }
function advance() { if (stage < 3) stage++; if (stage >= 1) guessSlider.elt.disabled = true; }
function resetSim() { stage = 0; guessSlider.elt.disabled = false; }

function draw() {
  updateCanvasSize();
  if (width !== canvasWidth) resizeCanvas(canvasWidth, canvasHeight);

  background('white');
  // panels
  noStroke();
  fill('aliceblue'); rect(0, 0, canvasWidth, drawHeight);
  fill('#f8fafc'); rect(0, drawHeight, canvasWidth, controlHeight);
  stroke('silver'); strokeWeight(1); noFill(); rect(0.5, 0.5, canvasWidth - 1, drawHeight - 1);

  const d = behaviors[currentBehavior];
  const guess = guessSlider.value();

  // Title
  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(17);
  text('Perceived vs. Actual: ' + currentBehavior, canvasWidth / 2, 10);
  fill('dimgray'); textSize(12);
  text(stagePrompt(stage), canvasWidth / 2, 34, canvasWidth - 40, 34);

  // Chart geometry (left ~58%)
  const chartX = margin, chartTop = 78, chartBottom = drawHeight - 34;
  const chartW = canvasWidth * 0.58 - margin;
  const chartH = chartBottom - chartTop;

  // y gridlines every 25%
  textAlign(RIGHT, CENTER); textSize(10); fill('gray'); stroke('#e2e8f0'); strokeWeight(1);
  for (let p = 0; p <= 100; p += 25) {
    const y = chartBottom - (p / 100) * chartH;
    stroke('#e2e8f0'); line(chartX, y, chartX + chartW, y);
    noStroke(); fill('gray'); text(p + '%', chartX - 4, y);
    stroke('#e2e8f0');
  }
  noStroke(); fill('black'); textAlign(LEFT, BOTTOM); textSize(11);

  const bars = [
    { label: 'Your guess',      val: guess,      color: '#94a3b8', show: true },
    { label: 'What peers think', val: d.perceived, color: '#e08a2e', show: stage >= 1 },
    { label: 'Actual (survey)',  val: d.actual,    color: '#3aa564', show: stage >= 2 }
  ];
  const slotW = chartW / bars.length;
  const bw = slotW * 0.5;
  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const cx = chartX + slotW * (i + 0.5);
    if (b.show) {
      const bh = (b.val / 100) * chartH;
      fill(b.color); noStroke();
      rect(cx - bw / 2, chartBottom - bh, bw, bh, 4);
      fill('black'); textAlign(CENTER, BOTTOM); textSize(13);
      text(b.val + '%', cx, chartBottom - bh - 3);
    } else {
      fill('#cbd5e1'); textAlign(CENTER, CENTER); textSize(11);
      text('?', cx, chartBottom - 14);
    }
    fill('#334155'); textAlign(CENTER, TOP); textSize(11);
    text(b.label, cx - slotW / 2 + 4, chartBottom + 6, slotW - 8, 30);
  }

  // Gap bracket at final stage
  if (stage >= 3) {
    const gap = d.perceived - d.actual;
    const cxP = chartX + slotW * 1.5, cxA = chartX + slotW * 2.5;
    const yP = chartBottom - (d.perceived / 100) * chartH;
    const yA = chartBottom - (d.actual / 100) * chartH;
    stroke('crimson'); strokeWeight(2);
    line(cxP, yP, cxP, yP - 16); line(cxA, yA, cxA, yP - 16); line(cxP, yP - 16, cxA, yP - 16);
    noStroke(); fill('crimson'); textAlign(CENTER, BOTTOM); textSize(12);
    text('Gap: ' + Math.abs(gap) + ' points', (cxP + cxA) / 2, yP - 18);
  }

  // Explanation panel (right ~40%)
  const panelX = canvasWidth * 0.60, panelW = canvasWidth - panelX - margin;
  fill('#334155'); textAlign(LEFT, TOP); textSize(12.5);
  text(explanation(stage, d), panelX, chartTop, panelW, chartH + 20);

  // Control labels
  noStroke(); fill('#334155'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Choose a behavior:', margin, drawHeight + 12);
  text('Your guess: ' + guess + '%', margin, drawHeight + 56);
}

function stagePrompt(s) {
  return ['First, predict: move the slider to guess the real rate, then reveal.',
          'This is what surveyed students THINK their peers do.',
          'This is the ACTUAL measured rate from the survey.',
          'The perception gap is the difference between belief and reality.'][s];
}

function explanation(s, d) {
  if (s === 0) return 'Predict first. Use the slider to estimate what percent of students actually do this, then press "Reveal actual data" to check yourself one step at a time.';
  if (s === 1) return 'Surveys find that students often believe a behavior is far more (or less) common than it is. This is the perceived norm.';
  if (s === 2) return 'Here is the rate the survey actually measured. Compare it to what students believed — and to your own guess.';
  const gap = d.perceived - d.actual;
  if (gap > 0) return 'Students greatly OVERESTIMATE how common this is. Believing "everyone does it" can pressure people toward the behavior. Correcting the perception — showing the real, lower rate — is linked to lower personal use.';
  return 'Students UNDERESTIMATE how many peers make this healthy choice. Seeing the real, higher rate makes the healthy behavior feel more normal and easier to choose.';
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
