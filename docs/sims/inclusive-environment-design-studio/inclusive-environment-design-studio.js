// Inclusive Environment Design Studio - MicroSim (design systemic inclusion interventions)
// CANVAS_HEIGHT: 512
// Grades 9-12, Create (L6): students design policy, physical-space, and norm interventions
// that systemically build inclusion, beyond individual acts of kindness.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let envSelect;
let policyInput, spaceInput, normsInput;
let exampleButton;

let envs = [
  { name: 'Classroom', risks: 'Group work uses the same self-selected teams; some students always left out.' },
  { name: 'Sports team', risks: 'Starters get most attention; newer players rarely get real minutes.' },
  { name: 'Club', risks: 'Meetings assume everyone can attend after school; some cannot.' }
];
let examples = [
  ['Rotate assigned groups each unit', 'Arrange desks in mixed pods', 'Norm: every voice heard before deciding'],
  ['Set minimum-minutes rule for all', 'Reserve equal warm-up space', 'Norm: captains include newcomers'],
  ['Offer virtual + recorded meetings', 'Pick an accessible location', 'Norm: welcome and introduce newcomers']
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  envSelect = createSelect(); envSelect.parent(document.querySelector('main'));
  for (let i = 0; i < envs.length; i++) envSelect.option(envs[i].name, i);
  policyInput = mk('Policy intervention...'); spaceInput = mk('Physical-space intervention...'); normsInput = mk('Norm intervention...');
  exampleButton = createButton('Show Example'); exampleButton.mousePressed(showExample);
  positionControls();
  describe('An environment with named exclusion risks and three design columns — policy, ' +
    'physical space, and norms. Students type an intervention for each to systemically ' +
    'build inclusion.', LABEL);
}
function mk(ph) { let i = createInput(''); i.parent(document.querySelector('main')); i.attribute('placeholder', ph); return i; }
function positionControls() {
  let w = canvasWidth - margin * 2 - 8;
  envSelect.position(margin, 70); envSelect.size(150);
  policyInput.position(margin, 150); policyInput.size(w);
  spaceInput.position(margin, 216); spaceInput.size(w);
  normsInput.position(margin, 282); normsInput.size(w);
  exampleButton.position(10, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(16); text('Inclusive Environment Design Studio', canvasWidth / 2, 6);

  let e = envs[int(envSelect.value())];
  noStroke(); fill('navy'); textAlign(LEFT, BOTTOM); textSize(11); text('Environment:', margin, 68);
  fill('firebrick'); textAlign(LEFT, TOP); textSize(11); text('Exclusion risk: ' + e.risks, margin, 100, canvasWidth - margin * 2, 44);
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Policy:', margin, 148); text('Physical Space:', margin, 214); text('Norms:', margin, 280);

  // completion note
  let filled = [policyInput, spaceInput, normsInput].filter(inp => inp.value().trim()).length;
  fill(filled === 3 ? 'seagreen' : 'dimgray'); textAlign(LEFT, TOP); textSize(12);
  text(filled === 3 ? '✓ A three-part systemic inclusion design — policy + space + norms work together.' : filled + ' of 3 interventions written. Systemic change needs all three.', margin, 318, canvasWidth - margin * 2, 60);
}
function showExample() { let ex = examples[int(envSelect.value())]; policyInput.value(ex[0]); spaceInput.value(ex[1]); normsInput.value(ex[2]); }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
