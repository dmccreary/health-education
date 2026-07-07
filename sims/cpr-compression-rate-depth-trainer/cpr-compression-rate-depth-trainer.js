// CPR Compression Rate and Depth Trainer - MicroSim (tap-timing rhythm trainer)
// CANVAS_HEIGHT: 497
// Grades 9-12, Apply (L3): students practice compression rate (100-120/min) and depth
// (>= 2 inches) by tapping in rhythm with a metronome. Awareness/rhythm practice only —
// NOT a substitute for certified hands-on CPR training.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 97;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;
let sliderLeftMargin = 150;

let compressButton;
let startButton;
let resetButton;
let depthSlider;

let tapTimes = [];        // recent tap timestamps (ms)
let trialActive = false;
let trialStart = 0;
let trialTaps = [];
let trialDepthGood = 0;
let summary = '';
let targetBpm = 110;      // metronome guide tempo

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  compressButton = createButton('COMPRESS (tap)');
  compressButton.mousePressed(tap);
  startButton = createButton('Start 30-Second Trial');
  startButton.mousePressed(startTrial);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  depthSlider = createSlider(0, 3, 2, 0.1);
  depthSlider.parent(document.querySelector('main'));
  layoutControls();
  describe('A metronome tempo bar highlighting the 100-120 per-minute CPR target (the ' +
    'tempo of "Stayin\' Alive"), a tap button that reads out compressions per minute, and ' +
    'a depth slider with a 2-inch target. A 30-second trial summarizes rate and depth.', LABEL);
}

function layoutControls() {
  compressButton.position(10, drawHeight + 10);
  startButton.position(150, drawHeight + 10);
  resetButton.position(canvasWidth - 60, drawHeight + 10);
  depthSlider.position(sliderLeftMargin, drawHeight + 52);
  depthSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function currentRate() {
  if (tapTimes.length < 2) return 0;
  let recent = tapTimes.slice(-6);
  let intervals = [];
  for (let i = 1; i < recent.length; i++) intervals.push(recent[i] - recent[i - 1]);
  let avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  return avg > 0 ? Math.round(60000 / avg) : 0;
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
  textSize(18);
  text('CPR Rate & Depth Trainer', canvasWidth / 2, 8);

  // trial timing
  if (trialActive) {
    let elapsed = (millis() - trialStart) / 1000;
    if (elapsed >= 30) endTrial();
  }

  drawMetronome();
  drawTempoBar();
  drawDepthGauge();
  drawReadouts();

  // persistent disclaimer (placed in the empty lower-left of the draw area)
  noStroke(); fill('firebrick'); textAlign(LEFT, TOP); textSize(10);
  text('For awareness and rhythm practice only — get certified hands-on training (e.g., American Heart Association or Red Cross).',
    margin, 320, canvasWidth * 0.52, 74);
}

function drawMetronome() {
  let cx = canvasWidth * 0.27, cy = 130;
  let beatMs = 60000 / targetBpm;
  let phase = (millis() % beatMs) / beatMs;
  let pulse = 1 - Math.abs(0.5 - phase) * 2; // 0..1..0
  noStroke(); fill(255, 140, 0, 60); circle(cx, cy, 70 + pulse * 30);
  fill('darkorange'); circle(cx, cy, 40 + pulse * 16);
  noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(11);
  text('beat', cx, cy);
  fill('dimgray'); textAlign(CENTER, TOP); textSize(11);
  text('Tap with the beat', cx - 60, cy + 44, 120, 20);
  text('(~110/min, like "Stayin\' Alive")', cx - 80, cy + 60, 160, 24);
}

function drawTempoBar() {
  let bx = margin, bw = canvasWidth * 0.5, by = 220, bh = 22;
  // scale 60..160 bpm
  let lo = 60, hi = 160;
  noStroke(); fill('gainsboro'); rect(bx, by, bw, bh, 4);
  // target zone 100-120
  let zx = bx + (100 - lo) / (hi - lo) * bw;
  let zw = (120 - 100) / (hi - lo) * bw;
  fill('palegreen'); rect(zx, by, zw, bh, 2);
  noStroke(); fill('seagreen'); textAlign(CENTER, TOP); textSize(9);
  text('100-120 target', zx + zw / 2 - 40, by + bh + 2, 80, 12);
  // current rate marker
  let r = currentRate();
  if (r > 0) {
    let mx = bx + constrain((r - lo) / (hi - lo), 0, 1) * bw;
    stroke('crimson'); strokeWeight(3); line(mx, by - 4, mx, by + bh + 4);
    noStroke();
  }
}

function drawDepthGauge() {
  let gx = canvasWidth * 0.62, gy = 110, gw = 40, gh = 150;
  stroke('gray'); strokeWeight(1); fill('white'); rect(gx, gy, gw, gh, 4);
  // target line at 2 inches (scale 0..3)
  let d = depthSlider.value();
  let ty = gy + gh - (2 / 3) * gh;
  stroke('seagreen'); strokeWeight(2); line(gx - 4, ty, gx + gw + 4, ty);
  noStroke(); fill('seagreen'); textAlign(LEFT, CENTER); textSize(10); text('2"', gx + gw + 6, ty);
  // fill
  let fillH = (d / 3) * gh;
  fill(d >= 2 ? 'seagreen' : 'goldenrod');
  rect(gx, gy + gh - fillH, gw, fillH, 4);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(11);
  text('Depth', gx - 10, gy - 16, gw + 20, 14);
  text(d.toFixed(1) + '"', gx - 10, gy + gh + 4, gw + 20, 14);
}

function drawReadouts() {
  let rx = canvasWidth * 0.62;
  noStroke(); textAlign(LEFT, TOP);
  let r = currentRate();
  fill('black'); textSize(20);
  text(r > 0 ? r + ' /min' : '-- /min', rx, 270);
  let zone = r === 0 ? 'Tap to start' : (r < 100 ? 'Too slow' : (r > 120 ? 'Too fast' : 'In range!'));
  fill(r >= 100 && r <= 120 ? 'seagreen' : (r === 0 ? 'dimgray' : 'darkorange'));
  textSize(14); text(zone, rx, 296);

  if (trialActive) {
    let left = Math.max(0, 30 - (millis() - trialStart) / 1000);
    fill('crimson'); textSize(13); text('Trial: ' + left.toFixed(0) + 's left', rx, 318);
  } else if (summary) {
    fill('navy'); textSize(11); text(summary, rx, 316, canvasWidth - rx - margin, 60);
  }
}

function tap() {
  let t = millis();
  tapTimes.push(t);
  if (tapTimes.length > 12) tapTimes.shift();
  if (trialActive) {
    trialTaps.push(t);
    if (depthSlider.value() >= 2) trialDepthGood++;
  }
}

function keyPressed() {
  if (key === ' ') { tap(); return false; }
}

function startTrial() {
  trialActive = true; trialStart = millis(); trialTaps = []; trialDepthGood = 0; summary = ''; tapTimes = [];
}

function endTrial() {
  trialActive = false;
  let n = trialTaps.length;
  let avgRate = 0;
  if (n >= 2) {
    let dur = (trialTaps[n - 1] - trialTaps[0]) / 60000;
    avgRate = dur > 0 ? Math.round((n - 1) / dur) : 0;
  }
  let depthPct = n > 0 ? Math.round(100 * trialDepthGood / n) : 0;
  summary = 'Trial done: avg ' + avgRate + '/min, ' + depthPct + '% at good depth. Aim for 100-120/min and full recoil.';
}

function reset() {
  tapTimes = []; trialActive = false; trialTaps = []; trialDepthGood = 0; summary = '';
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
