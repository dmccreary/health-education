// Health Message Design Studio - MicroSim (compose a fact-supported message)
// CANVAS_HEIGHT: 512
// Grades 6-8, Create (L6): students design a health message by choosing topic, audience,
// and composing parts, guided by five design principles.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let topicSelect, audienceSelect;
let openingInput, factInput, ctaInput;
let clearButton;

let principles = ['Audience-first opening', 'Cited fact (with source)', 'Matched topic & audience', 'Clear call to action', 'No scare tactics'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  topicSelect = createSelect(); topicSelect.parent(document.querySelector('main'));
  ['Sleep', 'Vaping Prevention', 'Nutrition', 'Stress Management'].forEach(t => topicSelect.option(t));
  audienceSelect = createSelect(); audienceSelect.parent(document.querySelector('main'));
  ['Classmates', 'Younger Students', 'Parents/Family', 'School Community'].forEach(a => audienceSelect.option(a));
  openingInput = mkInput('Opening hook for your audience...');
  factInput = mkInput('Key fact + source (e.g., "CDC says...")');
  ctaInput = mkInput('Clear call to action...');
  clearButton = createButton('Clear'); clearButton.mousePressed(() => { openingInput.value(''); factInput.value(''); ctaInput.value(''); });
  positionControls();
  describe('Topic and audience dropdowns and three composition fields — opening hook, key ' +
    'fact with source, and call to action — with a live preview and a design-principles ' +
    'checklist that fills in as the message is built.', LABEL);
}

function mkInput(ph) { let i = createInput(''); i.parent(document.querySelector('main')); i.attribute('placeholder', ph); return i; }

function positionControls() {
  let lw = canvasWidth * 0.5;
  topicSelect.position(margin, 54); topicSelect.size(lw - margin - 8);
  audienceSelect.position(margin, 100); audienceSelect.size(lw - margin - 8);
  openingInput.position(margin, 160); openingInput.size(lw - margin - 8);
  factInput.position(margin, 214); factInput.size(lw - margin - 8);
  ctaInput.position(margin, 268); ctaInput.size(lw - margin - 8);
  clearButton.position(10, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Health Message Design Studio', canvasWidth / 2, 6);

  let lw = canvasWidth * 0.5;
  noStroke(); fill('navy'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Topic:', margin, 52); text('Audience:', margin, 98);
  text('Opening Hook:', margin, 158); text('Key Fact + Source:', margin, 212); text('Call To Action:', margin, 266);

  // live preview (right top)
  let rx = lw + 4, rw = canvasWidth - rx - margin;
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5); rect(rx, 30, rw, 200, 8);
  noStroke(); fill('saddlebrown'); textAlign(LEFT, TOP); textSize(11); text('Live Preview', rx + 8, 36);
  fill('black'); textSize(11);
  let msg = (openingInput.value() || '[opening]') + '\n\n' + (factInput.value() || '[fact + source]') + '\n\n' + (ctaInput.value() || '[call to action]');
  text('To ' + audienceSelect.value() + ' about ' + topicSelect.value() + ':\n\n' + msg, rx + 8, 54, rw - 16, 170);

  // principles checklist (right bottom)
  let checks = [openingInput.value().trim() !== '', factInput.value().trim().length > 4, topicSelect.value() && audienceSelect.value(), ctaInput.value().trim() !== '', true];
  fill('white'); stroke('silver'); strokeWeight(1); rect(rx, 238, rw, drawHeight - 238 - 10, 8);
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11); text('Design Principles', rx + 8, 244);
  for (let i = 0; i < 5; i++) {
    let y = 262 + i * 26;
    fill(checks[i] ? 'seagreen' : 'silver'); textSize(13); text(checks[i] ? '☑' : '☐', rx + 8, y);
    fill('black'); textSize(10); text(principles[i], rx + 26, y + 2, rw - 34, 22);
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
