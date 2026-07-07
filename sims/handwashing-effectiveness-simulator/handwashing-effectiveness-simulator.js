// Handwashing Effectiveness Simulator - MicroSim (technique -> germ removal)
// CANVAS_HEIGHT: 472
// Grades 6-8, Apply (L3): students apply handwashing parameters (duration, soap use,
// coverage) and observe how each affects a simplified germ-removal outcome.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 360;
let controlHeight = 112;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;
let sliderLeftMargin = 200;

let durationSlider;
let soapCheckbox;
let scrubCheckbox;
let washButton;
let resetButton;

let germs = 100;         // current germ count shown
let targetGerms = 100;   // computed remaining after a wash
let washing = false;
let lastScore = -1;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  durationSlider = createSlider(0, 30, 5, 1);
  durationSlider.parent(document.querySelector('main'));
  soapCheckbox = createCheckbox(' Used soap', false);
  soapCheckbox.parent(document.querySelector('main'));
  scrubCheckbox = createCheckbox(' Scrubbed between fingers & under nails', false);
  scrubCheckbox.parent(document.querySelector('main'));
  washButton = createButton('Wash Hands');
  washButton.mousePressed(runWash);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  layoutControls();
  describe('An illustrated pair of hands with a germ count, plus controls for wash ' +
    'duration, soap use, and scrubbing coverage. Running a wash shows germs decreasing and ' +
    'a technique score based on the parameters chosen.', LABEL);
}

function layoutControls() {
  durationSlider.position(sliderLeftMargin, drawHeight + 10);
  durationSlider.size(canvasWidth - sliderLeftMargin - margin);
  soapCheckbox.position(10, drawHeight + 40);
  scrubCheckbox.position(140, drawHeight + 40);
  washButton.position(10, drawHeight + 74);
  resetButton.position(110, drawHeight + 74);
}

function effectiveness() {
  let e = (soapCheckbox.checked() ? 0.45 : 0.1) + (durationSlider.value() / 30) * 0.35 + (scrubCheckbox.checked() ? 0.2 : 0);
  return Math.min(e, 0.98);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Handwashing Effectiveness', canvasWidth / 2, 8);

  // hands with germ dots
  let cx = canvasWidth * 0.32, cy = 180;
  stroke('peru'); strokeWeight(2); fill('wheat');
  ellipse(cx - 26, cy, 66, 100); ellipse(cx + 26, cy, 66, 100);
  noStroke();
  if (washing) { germs += (targetGerms - germs) * 0.08; if (Math.abs(germs - targetGerms) < 0.5) { germs = targetGerms; washing = false; } }
  let dots = Math.round(germs / 2);
  randomSeed(7);
  fill('olivedrab');
  for (let i = 0; i < dots; i++) {
    let side = i % 2 === 0 ? -26 : 26;
    circle(cx + side + random(-24, 24), cy + random(-40, 40), 5);
  }
  // soap bubbles if washing with soap
  if (washing && soapCheckbox.checked()) { fill(255, 255, 255, 180); stroke('lightskyblue'); strokeWeight(1); for (let i = 0; i < 14; i++) circle(cx + random(-50, 50), cy + random(-45, 45), random(5, 12)); noStroke(); }

  // readouts (right)
  let rx = canvasWidth * 0.6;
  fill('black'); textAlign(LEFT, TOP); textSize(14);
  text('Germs left:', rx, 90); textSize(24); fill(germs < 20 ? 'seagreen' : (germs < 55 ? 'goldenrod' : 'indianred')); text(Math.round(germs), rx, 110);
  fill('black'); textSize(14); text('Technique score:', rx, 156);
  textSize(24); fill(lastScore < 0 ? 'gray' : (lastScore >= 80 ? 'seagreen' : (lastScore >= 50 ? 'goldenrod' : 'indianred')));
  text(lastScore < 0 ? '--' : lastScore + '%', rx, 176);
  fill('dimgray'); textSize(11);
  text(lastScore < 0 ? 'Set your technique, then Wash Hands.' :
    (lastScore >= 80 ? 'Great technique! Soap + time + coverage.' : 'Try more time, soap, and scrubbing coverage.'), rx, 214, canvasWidth - rx - margin, 60);

  // control labels
  fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Wash time: ' + durationSlider.value() + 's', 10, drawHeight + 18);
}

function runWash() {
  let e = effectiveness();
  targetGerms = Math.round(100 * (1 - e));
  germs = 100; washing = true;
  lastScore = Math.round(e * 100);
}

function reset() {
  germs = 100; targetGerms = 100; washing = false; lastScore = -1;
  durationSlider.value(5); soapCheckbox.checked(false); scrubCheckbox.checked(false);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  layoutControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
