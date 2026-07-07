// Message Effectiveness Reflection Rubric - MicroSim
// CANVAS_HEIGHT: 530
// Grades 6-8, Evaluate (L5): students rate their delivered health message against four
// reflection criteria, average an effectiveness snapshot, and name one specific change.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let changeInput;
let exampleButton;
let finalizeButton;
let resetButton;

// Four reflection criteria (short label + guiding question)
let criteria = [
  { label: 'Audience understanding', q: 'Did the audience understand my message?' },
  { label: 'Realistic call to action', q: 'Was the action I asked for doable?' },
  { label: 'Specific feedback gathered', q: 'Did I collect real feedback?' },
  { label: 'Planned improvement', q: 'Did I plan a next step?' }
];

// Worked example: the sleep-message case study
let example = {
  topic: 'Getting enough sleep',
  audience: '6th graders in homeroom',
  format: 'Poster + 60-second talk',
  ratings: [4, 3, 4, 5],
  change: 'Add one clear bedtime tip so the action is easier to remember.'
};

let ratings = [3, 3, 3, 3];   // learner's ratings, start at midpoint
let dotRects = [];
let showExample = false;
let finalized = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  changeInput = createInput('');
  changeInput.parent(document.querySelector('main'));
  changeInput.attribute('placeholder', 'One specific change for next time...');

  exampleButton = createButton('View Worked Example');
  exampleButton.parent(document.querySelector('main'));
  exampleButton.mousePressed(toggleExample);

  finalizeButton = createButton('Finalize Reflection');
  finalizeButton.parent(document.querySelector('main'));
  finalizeButton.mousePressed(finalize);

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(reset);

  positionControls();
  describe('A reflection rubric for a delivered health message. Four criteria each get a ' +
    '1 to 5 effectiveness rating by clicking dots. An effectiveness snapshot averages the ' +
    'four ratings. A required text field asks for one specific change, then Finalize shows a ' +
    'summary card. A worked example uses a sleep message.', LABEL);
}

function positionControls() {
  // Two rows of controls in the control strip.
  changeInput.position(10, drawHeight + 12);
  changeInput.size(canvasWidth - 20 - 12);
  exampleButton.position(10, drawHeight + 40);
  finalizeButton.position(178, drawHeight + 40);
  resetButton.position(canvasWidth - 62, drawHeight + 40);
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
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(18);
  text('Message Effectiveness Reflection', canvasWidth / 2, 8);

  let cw = canvasWidth - margin * 2;

  // ---- Message summary box ----
  let sy = 34, sh = 66;
  fill(showExample ? 'lavender' : 'white');
  stroke('mediumpurple');
  strokeWeight(1.5);
  rect(margin, sy, cw, sh, 8);
  noStroke();
  fill('mediumpurple');
  textAlign(LEFT, TOP);
  textSize(12);
  text(showExample ? 'WORKED EXAMPLE — my message' : 'My message', margin + 10, sy + 6);
  fill('black');
  textSize(13);
  let src = showExample ? example : { topic: '(your topic)', audience: '(your audience)', format: '(your format)' };
  text('Topic: ' + src.topic, margin + 10, sy + 24);
  text('Audience: ' + src.audience, margin + 10, sy + 41);
  text('Format: ' + src.format, margin + 10 + cw / 2, sy + 41);

  // ---- Four criteria rows with 1-5 rating dots ----
  dotRects = [];
  let ry = sy + sh + 12;
  let rowH = 48;
  let vals = showExample ? example.ratings : ratings;
  for (let c = 0; c < 4; c++) {
    let y = ry + c * rowH;
    // label + guiding question
    noStroke();
    fill('black');
    textAlign(LEFT, TOP);
    textSize(13);
    text(criteria[c].label, margin, y);
    fill('dimgray');
    textSize(11);
    text(criteria[c].q, margin, y + 17, cw - 175, 16);

    // rating dots 1..5 on the right
    let dotStartX = canvasWidth - margin - 5 * 26 + 6;
    for (let s = 1; s <= 5; s++) {
      let cx = dotStartX + (s - 1) * 26;
      let cy = y + 12;
      dotRects.push({ x: cx - 11, y: cy - 11, w: 22, h: 22, c: c, s: s });
      let filled = vals[c] >= s;
      stroke('goldenrod');
      strokeWeight(1.2);
      fill(filled ? 'gold' : 'white');
      circle(cx, cy, 18);
      noStroke();
      fill(filled ? 'saddlebrown' : 'silver');
      textAlign(CENTER, CENTER);
      textSize(10);
      text(s, cx, cy + 1);
    }
    // numeric value under the dots
    noStroke();
    fill('goldenrod');
    textAlign(RIGHT, TOP);
    textSize(11);
    text(vals[c] + '/5', canvasWidth - margin, y + 26);
  }
  cursor(!showExample && overAnyDot() ? HAND : ARROW);

  // ---- Effectiveness Snapshot ----
  let snapY = ry + 4 * rowH + 4;
  drawSnapshot(snapY, cw, vals);

  // control-strip hint
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(10);
}

function drawSnapshot(y, cw, vals) {
  let avg = (vals[0] + vals[1] + vals[2] + vals[3]) / 4;
  let h = 74;
  // panel
  let col = showExample ? 'lightyellow' : (finalized ? 'honeydew' : 'whitesmoke');
  stroke(finalized ? 'seagreen' : 'silver');
  strokeWeight(finalized ? 2 : 1);
  fill(col);
  rect(margin, y, cw, h, 8);
  noStroke();

  // label
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Effectiveness Snapshot', margin + 10, y + 8);

  // big average number
  fill(avg >= 4 ? 'seagreen' : (avg >= 2.5 ? 'goldenrod' : 'indianred'));
  textAlign(LEFT, CENTER);
  textSize(30);
  text(avg.toFixed(1), margin + 12, y + 46);
  fill('dimgray');
  textSize(12);
  text('/ 5 average', margin + 66, y + 48);

  // meter bar
  let barX = margin + 150, barW = cw - 150 - 12, barY = y + 30, barH = 14;
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(barX, barY, barW, barH, 7);
  noStroke();
  fill(avg >= 4 ? 'seagreen' : (avg >= 2.5 ? 'gold' : 'indianred'));
  rect(barX, barY, barW * (avg / 5), barH, 7);

  // status / required-change reminder
  textAlign(LEFT, TOP);
  textSize(11);
  if (showExample) {
    fill('saddlebrown');
    text('Model change: ' + example.change, barX, y + 48, barW, 24);
  } else if (finalized) {
    fill('seagreen');
    text('Finalized. Next change: ' + shorten(changeInput.value(), 46), barX, y + 48, barW, 24);
  } else if (changeInput.value().trim() === '') {
    fill('indianred');
    text('Add "one specific change" below, then Finalize.', barX, y + 48, barW, 24);
  } else {
    fill('dimgray');
    text('Ready to Finalize your reflection.', barX, y + 48, barW, 24);
  }
}

function shorten(s, n) {
  s = s.trim();
  if (s.length <= n) return s;
  return s.substring(0, n - 1) + '…';
}

function overAnyDot() {
  for (let d of dotRects) if (pointInRect(mouseX, mouseY, d)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (showExample) return;           // ratings locked while viewing example
  for (let d of dotRects) {
    if (pointInRect(mouseX, mouseY, d)) {
      ratings[d.c] = d.s;
      finalized = false;             // changing a rating unlocks the snapshot
      return;
    }
  }
}

function toggleExample() {
  showExample = !showExample;
}

function finalize() {
  if (showExample) return;
  if (changeInput.value().trim() === '') {
    finalized = false;               // required field not complete
    return;
  }
  finalized = true;
}

function reset() {
  ratings = [3, 3, 3, 3];
  changeInput.value('');
  finalized = false;
  showExample = false;
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
