// The Social Pain of Exclusion - MicroSim (step-through comparison of belonging)
// CANVAS_HEIGHT: 512
// Grades 6-8, Analyze (L4): students play two scenario logs step by step and
// distinguish a single exclusion incident from a repeated, cumulative pattern
// by comparing how each affects a "Sense of Belonging" gauge over time.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let playSingleButton;
let playRepeatedButton;
let compareButton;
let resetButton;

// Each log is an array of steps. Each step: entry text, belonging value AFTER
// that entry, and the likely emotional effect named at that step.
let singleLog = [
  { when: 'One Tuesday', entry: 'The group picks teams and you are left out this one time.',
    belong: 75, effect: 'Feeling: a sting of hurt and disappointment.' }
];

let repeatedLog = [
  { when: 'Week 1', entry: 'The group picks teams and you are left out.',
    belong: 75, effect: 'Feeling: a sting of hurt and disappointment.' },
  { when: 'Week 2', entry: 'The same group leaves you out again at lunch.',
    belong: 62, effect: 'Feeling: confused, and starting to wonder why.' },
  { when: 'Week 3', entry: 'They plan a project group and skip you a third time.',
    belong: 50, effect: 'Feeling: lonelier, less sure you belong here.' },
  { when: 'Week 4', entry: 'You are left out again and stop trying to join in.',
    belong: 40, effect: 'Feeling: withdrawn, low mood, self-doubt building up.' }
];

let START_BELONG = 85;

// revealed count for each log (0 = not started). idx of last shown = count-1
let singleShown = 0;
let repeatedShown = 0;
let showCompare = false;
let lastActed = 'none';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  playSingleButton = createButton('Play Single');
  playSingleButton.parent(document.querySelector('main'));
  playSingleButton.mousePressed(playSingle);

  playRepeatedButton = createButton('Play Repeated');
  playRepeatedButton.parent(document.querySelector('main'));
  playRepeatedButton.mousePressed(playRepeated);

  compareButton = createButton('Compare Results');
  compareButton.parent(document.querySelector('main'));
  compareButton.mousePressed(doCompare);

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(reset);

  positionControls();
  describe('Two side-by-side scenario logs about being left out. One shows a ' +
    'single incident; the other shows the same student excluded four weeks in a ' +
    'row. Students play each log step by step and watch a Sense of Belonging ' +
    'gauge fall, then compare the final results to see why a repeated pattern ' +
    'harms mental health more than one isolated event.', LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  playSingleButton.position(margin, y);
  playRepeatedButton.position(margin + 96, y);
  compareButton.position(margin + 210, y);
  resetButton.position(margin + 330, y);
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

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('The Social Pain of Exclusion', canvasWidth / 2, 8);

  if (showCompare) {
    drawCompare();
    return;
  }

  // subtitle
  fill('dimgray');
  textSize(12);
  text('Play each log to see how being left out changes belonging.', canvasWidth / 2, 32);

  // two columns
  let colGap = 12;
  let colW = (canvasWidth - margin * 2 - colGap) / 2;
  let colX0 = margin;
  let colX1 = margin + colW + colGap;

  drawColumn(colX0, colW, 'Single Incident', 'steelblue', singleLog, singleShown);
  drawColumn(colX1, colW, 'Repeated Exclusion', 'mediumpurple', repeatedLog, repeatedShown);

  // caption strip (current emotional effect of the most recently played step)
  drawCaption();
}

function drawColumn(x, w, heading, headColor, log, shown) {
  // heading
  noStroke();
  fill(headColor);
  textAlign(CENTER, TOP);
  textSize(14);
  text(heading, x + w / 2, 52);

  // log entries area
  let logTop = 74;
  let entryH = 40;
  let gap = 6;
  for (let i = 0; i < log.length; i++) {
    let ey = logTop + i * (entryH + gap);
    let revealed = i < shown;
    stroke(revealed ? headColor : 'gainsboro');
    strokeWeight(1.5);
    fill(revealed ? 'white' : 'whitesmoke');
    rect(x, ey, w, entryH, 6);
    noStroke();
    if (revealed) {
      fill('gray');
      textAlign(LEFT, TOP);
      textSize(10);
      text(log[i].when, x + 7, ey + 4);
      fill('black');
      textSize(10.5);
      text(log[i].entry, x + 7, ey + 16, w - 12, entryH - 18);
    } else {
      fill('silver');
      textAlign(CENTER, CENTER);
      textSize(11);
      text('• • •', x + w / 2, ey + entryH / 2);
    }
    textAlign(LEFT, TOP);
  }

  // gauge below the log area (reserve space for 4 entries so columns align)
  let gaugeTop = logTop + repeatedLog.length * (entryH + gap) + 8;
  let belong = shown > 0 ? log[shown - 1].belong : START_BELONG;
  drawGauge(x, gaugeTop, w, belong, shown > 0);
}

function drawGauge(x, y, w, value, played) {
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(11);
  text('Sense of Belonging', x + w / 2, y);

  let barY = y + 18;
  let barH = 20;
  // track
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(x, barY, w, barH, 5);
  // fill
  let frac = constrain(value / 100, 0, 1);
  let fillColor = value >= 70 ? 'seagreen' : (value >= 50 ? 'goldenrod' : 'indianred');
  noStroke();
  fill(fillColor);
  if (frac > 0) {
    rect(x + 1, barY + 1, (w - 2) * frac, barH - 2, 4);
  }
  // number
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(16);
  text(value, x + w / 2, barY + barH + 4);
  fill('gray');
  textSize(9);
  text(played ? '(started at 85)' : 'not played yet', x + w / 2, barY + barH + 24);
}

function drawCaption() {
  let cy = 386;
  let ch = 56;
  // pick the caption from whichever log was most recently advanced
  let msg = 'Press Play Single or Play Repeated to reveal the first entry.';
  let col = 'dimgray';
  let last = lastAction();
  if (last === 'single' && singleShown > 0) {
    msg = 'Single incident, ' + singleLog[singleShown - 1].when + ': ' +
      singleLog[singleShown - 1].effect;
    col = 'steelblue';
  } else if (last === 'repeated' && repeatedShown > 0) {
    msg = 'Repeated exclusion, ' + repeatedLog[repeatedShown - 1].when + ': ' +
      repeatedLog[repeatedShown - 1].effect;
    col = 'mediumpurple';
  }
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1);
  rect(margin, cy, canvasWidth - margin * 2, ch, 8);
  noStroke();
  fill(col);
  textAlign(LEFT, TOP);
  textSize(12);
  text(msg, margin + 10, cy + 8, canvasWidth - margin * 2 - 20, ch - 14);
}

// which log was advanced most recently (for the caption)
function lastAction() { return lastActed; }

function drawCompare() {
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Final Sense of Belonging — one event vs. a repeated pattern', canvasWidth / 2, 32);

  let colGap = 16;
  let colW = (canvasWidth - margin * 2 - colGap) / 2;
  let x0 = margin;
  let x1 = margin + colW + colGap;

  drawCompareBar(x0, colW, 'Single Incident', 'steelblue', singleLog[singleLog.length - 1].belong);
  drawCompareBar(x1, colW, 'Repeated Exclusion', 'mediumpurple', repeatedLog[repeatedLog.length - 1].belong);

  // explanation box
  let ey = 300;
  let eh = drawHeight - ey - 12;
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1);
  rect(margin, ey, canvasWidth - margin * 2, eh, 8);
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Why repetition matters', margin + 10, ey + 8);
  fill('darkslateblue');
  textSize(12);
  text('One time being left out stings, but belonging usually bounces back. ' +
    'When exclusion repeats week after week, the small hurts add up. The gauge ' +
    'keeps dropping, and the effects grow: loneliness, low mood, and self-doubt. ' +
    'A cumulative pattern harms mental health far more than a single isolated event.',
    margin + 10, ey + 30, canvasWidth - margin * 2 - 20, eh - 38);
}

function drawCompareBar(x, w, heading, headColor, value) {
  noStroke();
  fill(headColor);
  textAlign(CENTER, TOP);
  textSize(13);
  text(heading, x + w / 2, 62);

  // vertical bar
  let top = 92;
  let bottom = 272;
  let barW = min(w * 0.5, 70);
  let bx = x + (w - barW) / 2;
  let fullH = bottom - top;

  // track
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(bx, top, barW, fullH, 6);

  let frac = constrain(value / 100, 0, 1);
  let fh = fullH * frac;
  let fillColor = value >= 70 ? 'seagreen' : (value >= 50 ? 'goldenrod' : 'indianred');
  noStroke();
  fill(fillColor);
  rect(bx + 1, bottom - fh, barW - 2, fh - 1, 5);

  // start marker line at 85
  let startY = bottom - fullH * (START_BELONG / 100);
  stroke('gray');
  strokeWeight(1);
  drawingContext.setLineDash([4, 3]);
  line(x, startY, x + w, startY);
  drawingContext.setLineDash([]);
  noStroke();
  fill('gray');
  textAlign(LEFT, TOP);
  textSize(9);
  text('start 85', x, startY - 12);

  // value label
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(22);
  text(value, x + w / 2, bottom + 6);
}

function playSingle() {
  if (showCompare) return;
  if (singleShown < singleLog.length) singleShown++;
  lastActed = 'single';
}

function playRepeated() {
  if (showCompare) return;
  if (repeatedShown < repeatedLog.length) repeatedShown++;
  lastActed = 'repeated';
}

function doCompare() {
  // reveal all so the final readings are meaningful
  singleShown = singleLog.length;
  repeatedShown = repeatedLog.length;
  showCompare = true;
}

function reset() {
  singleShown = 0;
  repeatedShown = 0;
  showCompare = false;
  lastActed = 'none';
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
