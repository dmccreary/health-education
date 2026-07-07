// Goal Plan Builder - MicroSim (fill five goal-plan elements)
// CANVAS_HEIGHT: 512
// Grades 6-8, Create (L6): students construct a complete, specific health-goal plan by
// filling in five required elements for a health area of their choice.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let inputs = [];
let exampleButton;
let clearButton;

let fields = [
  { label: '1. Target (specific goal)', ph: 'e.g., Drink water instead of soda on weekdays' },
  { label: '2. Steps & Timeframe', ph: 'e.g., Swap one soda for water each day for 3 weeks' },
  { label: "3. Supports I'll Use", ph: 'e.g., Keep a water bottle in my bag; ask a friend' },
  { label: '4. Barriers & My Plan', ph: 'e.g., Vending machine tempts me — bring water from home' },
  { label: "5. How I'll Track", ph: 'e.g., Tally each water-swap on my phone calendar' }
];
let example = [
  'Drink water instead of soda on weekdays',
  'Swap one soda for water each day for 3 weeks',
  'Keep a water bottle in my bag; ask a friend to remind me',
  'Vending machine tempts me — bring water from home',
  'Tally each water-swap on my phone calendar'
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  for (let i = 0; i < 5; i++) {
    let inp = createInput('');
    inp.parent(document.querySelector('main'));
    inp.attribute('placeholder', fields[i].ph);
    inputs.push(inp);
  }
  exampleButton = createButton('Show Example');
  exampleButton.mousePressed(showExample);
  clearButton = createButton('Clear');
  clearButton.mousePressed(() => { for (let inp of inputs) inp.value(''); });
  positionControls();
  describe('A five-part health-goal-plan form: target, steps and timeframe, supports, ' +
    'barriers and responses, and tracking method. As students type, a live summary card ' +
    'assembles the complete plan. Show Example fills a worked example.', LABEL);
}

function positionControls() {
  let lw = canvasWidth * 0.54;
  for (let i = 0; i < 5; i++) {
    inputs[i].position(margin, 52 + i * 44);
    inputs[i].size(lw - margin - 8);
  }
  exampleButton.position(10, drawHeight + 14);
  clearButton.position(130, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Goal Plan Builder', canvasWidth / 2, 6);

  // field labels above each input
  let lw = canvasWidth * 0.54;
  noStroke(); fill('navy'); textAlign(LEFT, BOTTOM); textSize(11);
  for (let i = 0; i < 5; i++) text(fields[i].label, margin, 50 + i * 44);

  // live summary card (right)
  let rx = lw + 4, rw = canvasWidth - rx - margin;
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5); rect(rx, 30, rw, drawHeight - 40, 10);
  noStroke(); fill('saddlebrown'); textAlign(LEFT, TOP); textSize(12); text('My Goal Plan', rx + 10, 38);
  fill('black'); textSize(10);
  let filled = inputs.filter(inp => inp.value().trim()).length;
  let y = 58;
  let labels = ['Target:', 'Plan:', 'Supports:', 'Barriers:', 'Track:'];
  for (let i = 0; i < 5; i++) {
    let v = inputs[i].value().trim();
    fill(v ? 'seagreen' : 'silver'); text(labels[i], rx + 10, y);
    fill(v ? 'black' : 'lightgray'); text(v || '(not yet)', rx + 10, y + 12, rw - 20, 46);
    y += 62;
  }
  fill(filled === 5 ? 'seagreen' : 'dimgray'); textAlign(LEFT, BOTTOM); textSize(11);
  text(filled === 5 ? '✓ Complete 5-part plan!' : filled + ' of 5 parts filled', rx + 10, drawHeight - 16, rw - 20, 20);
}

function showExample() { for (let i = 0; i < 5; i++) inputs[i].value(example[i]); }

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
