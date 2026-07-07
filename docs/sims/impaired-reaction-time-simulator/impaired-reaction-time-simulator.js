// Impaired Reaction Time Simulator - MicroSim (impairment -> stopping distance)
// CANVAS_HEIGHT: 447
// Grades 6-8, Analyze (L4): students compare reaction time and total stopping distance at
// several illustrative impairment levels.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 360;
let controlHeight = 85;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;
let sliderLeftMargin = 150;

let impairSlider;

let speed = 44;          // ft/s (~30 mph)
let brakingDist = 45;    // ft (illustrative, fixed)
let hazardDist = 200;    // ft to hazard
let levels = [
  { name: 'Sober', rt: 0.75 },
  { name: 'Mildly impaired', rt: 1.3 },
  { name: 'More impaired', rt: 2.0 },
  { name: 'Heavily impaired', rt: 2.8 }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  impairSlider = createSlider(0, 3, 0, 1);
  impairSlider.parent(document.querySelector('main'));
  layoutControls();
  describe('A top-down roadway with a car and a hazard at a fixed distance. An impairment ' +
    'slider increases reaction time, extending the reaction and braking zones and showing ' +
    'whether the car stops in time.', LABEL);
}
function layoutControls() { impairSlider.position(sliderLeftMargin, drawHeight + 14); impairSlider.size(canvasWidth - sliderLeftMargin - margin); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Impaired Reaction Time', canvasWidth / 2, 8);

  let lvl = levels[impairSlider.value()];
  let reactionDist = speed * lvl.rt;
  let total = reactionDist + brakingDist;

  // roadway (vertical, scaled: hazardDist maps to roadTop..roadBottom)
  let roadX = canvasWidth * 0.5, roadW = 70;
  let roadTop = 40, roadBottom = 320;
  let ftToPx = (roadBottom - roadTop) / hazardDist;
  noStroke(); fill('dimgray'); rect(roadX - roadW / 2, roadTop, roadW, roadBottom - roadTop);
  // lane dashes
  stroke('white'); strokeWeight(2); for (let y = roadTop; y < roadBottom; y += 24) line(roadX, y, roadX, y + 12);
  // hazard at top
  noStroke(); fill('crimson'); triangle(roadX - 14, roadTop + 4, roadX + 14, roadTop + 4, roadX, roadTop - 14);
  fill('crimson'); textAlign(CENTER, TOP); textSize(10); text('hazard', roadX - 30, roadTop - 28, 60, 12);
  // car at bottom
  fill('royalblue'); rect(roadX - 12, roadBottom - 26, 24, 26, 4);
  // reaction zone (yellow) + braking zone (orange) extending UP from car
  let carFront = roadBottom - 26;
  let ry = carFront - reactionDist * ftToPx;
  let by = ry - brakingDist * ftToPx;
  fill(255, 215, 0, 120); rect(roadX - roadW / 2, ry, roadW, carFront - ry);
  fill(255, 140, 0, 130); rect(roadX - roadW / 2, by, roadW, ry - by);
  // stop point marker
  let crash = total > hazardDist;
  stroke(crash ? 'red' : 'seagreen'); strokeWeight(3); line(roadX - roadW / 2 - 4, by, roadX + roadW / 2 + 4, by);

  // readout (left)
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill('black'); text(lvl.name, margin, 60);
  text('Reaction time: ' + lvl.rt.toFixed(2) + ' s', margin, 84);
  fill('darkgoldenrod'); text('Reaction dist: ' + Math.round(reactionDist) + ' ft', margin, 108);
  fill('darkorange'); text('Braking dist: ' + brakingDist + ' ft', margin, 128);
  fill('black'); textSize(13); text('Total stop: ' + Math.round(total) + ' ft', margin, 152);
  fill('dimgray'); textSize(11); text('Hazard at ' + hazardDist + ' ft', margin, 176);
  fill(crash ? 'red' : 'seagreen'); textSize(14); text(crash ? '✗ Cannot stop in time!' : '✓ Stops in time', margin, 200, canvasWidth * 0.4, 40);

  // slider label
  fill('black'); textAlign(LEFT, CENTER); textSize(14); text('Impairment: ' + lvl.name, 10, drawHeight + 22);
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); layoutControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
