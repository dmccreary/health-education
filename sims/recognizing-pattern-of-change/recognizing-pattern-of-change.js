// Recognizing a Pattern of Change - MicroSim (weekly log analysis)
// CANVAS_HEIGHT: 560
// Grade 6-8, Analyze (L4): students read a 4-week log of a friend's mood, sleep,
// and social activity and distinguish an ordinary bad day from a lasting pattern.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 500;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let scenarioSelect;
let nextButton;

// Each scenario: 4 weeks of {mood, sleep, friends}, the correct answer,
// and feedback for the pattern reading.
// answer: 'bad'  = one rough stretch, not a lasting pattern
//         'pattern' = a genuine multi-week change worth caring about
let scenarios = [
  {
    name: 'Maya',
    weeks: [
      { mood: 'Cheerful, laughing at lunch', sleep: 'Sleeping well', friends: 'Hanging out with friends' },
      { mood: 'Rough Monday after a big test', sleep: 'One late night', friends: 'Skipped one hangout' },
      { mood: 'Back to joking around', sleep: 'Sleeping well', friends: 'Back with the group' },
      { mood: 'Excited about the weekend', sleep: 'Rested', friends: 'Made weekend plans' }
    ],
    answer: 'bad',
    why: 'Week 2 was a single rough stretch — one hard test, one late night. By Week 3 Maya is back to her usual self. This looks like an ordinary bad day, not a lasting change.'
  },
  {
    name: 'Jordan',
    weeks: [
      { mood: 'Upbeat, into video games', sleep: 'Sleeping well', friends: 'Group chat active' },
      { mood: 'Quieter than usual', sleep: 'Up late, hard to wake', friends: 'Slower to reply' },
      { mood: 'Seems flat, low energy', sleep: 'Still not sleeping well', friends: 'Skipping hangouts' },
      { mood: 'Withdrawn, little joy', sleep: 'Tired all day', friends: 'Mostly alone now' }
    ],
    answer: 'pattern',
    why: 'The change builds across all four weeks and shows up in mood, sleep, AND friendships at the same time. A shift this steady and this broad is a pattern worth caring about.'
  },
  {
    name: 'Sam',
    weeks: [
      { mood: 'Loves art club', sleep: 'Rested', friends: 'Lots of friends around' },
      { mood: 'Losing interest in art', sleep: 'Sleeping much more', friends: 'Turning down invites' },
      { mood: 'Says nothing is fun', sleep: 'Oversleeping, still tired', friends: 'Eating lunch alone' },
      { mood: 'Flat, quick to tears', sleep: 'Exhausted', friends: 'Rarely joins in' }
    ],
    answer: 'pattern',
    why: 'Losing interest in something loved, sleeping far more, and pulling away from friends — sustained for weeks — is a lasting change. This deserves a caring, serious response.'
  },
  {
    name: 'Alex',
    weeks: [
      { mood: 'Relaxed and friendly', sleep: 'Sleeping well', friends: 'Playing on the team' },
      { mood: 'Grumpy, sprained ankle', sleep: 'Sore, restless night', friends: 'Missed a game' },
      { mood: 'Happier, ankle healing', sleep: 'Sleeping better', friends: 'Cheering from the bench' },
      { mood: 'Back to normal', sleep: 'Rested', friends: 'Back on the team' }
    ],
    answer: 'bad',
    why: 'A sprained ankle explains the rough Week 2, and Alex bounces back as it heals. A short dip with a clear reason that fades is an ordinary rough patch, not a lasting pattern.'
  }
];

let sIndex = 0;
let choice = null;      // 'bad' or 'pattern' once the student clicks
let optionRects = [];   // the two clickable answer cards

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  scenarioSelect = createSelect();
  scenarioSelect.parent(document.querySelector('main'));
  for (let i = 0; i < scenarios.length; i++) {
    scenarioSelect.option(scenarios[i].name + "'s log", i);
  }
  scenarioSelect.changed(onSelect);

  nextButton = createButton('Next log');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);

  positionControls();
  describe('A four-week log of a friend\'s mood, sleep, and social activity. Students ' +
    'pick a scenario from a dropdown, read across the weeks, and click whether it shows ' +
    'one bad day or a lasting pattern worth caring about. Feedback explains why and ' +
    'reminds them to respond with care, never judgment.', LABEL);
}

function positionControls() {
  scenarioSelect.position(10, drawHeight + 16);
  scenarioSelect.size(150);
  nextButton.position(canvasWidth - 90, drawHeight + 16);
}

function onSelect() {
  sIndex = int(scenarioSelect.value());
  choice = null;
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  scenarioSelect.selected(str(sIndex));
  choice = null;
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

  let sc = scenarios[sIndex];

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Recognizing a Pattern of Change', canvasWidth / 2, 8);
  noStroke();
  fill('dimgray');
  textSize(13);
  text('Read across all 4 weeks of ' + sc.name + "'s log.", canvasWidth / 2, 32);

  // ---- Weekly log table ----
  let tableX = margin;
  let tableW = canvasWidth - margin * 2;
  let tableY = 54;
  let headH = 26;
  let rowH = 52;
  let labelColW = 58;
  let colW = (tableW - labelColW) / 3;
  let colHeaders = ['Mood', 'Sleep', 'Friends'];

  // Header row
  fill('steelblue');
  noStroke();
  rect(tableX, tableY, tableW, headH, 6, 6, 0, 0);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('Week', tableX + labelColW / 2, tableY + headH / 2);
  for (let c = 0; c < 3; c++) {
    let cx = tableX + labelColW + c * colW;
    text(colHeaders[c], cx + colW / 2, tableY + headH / 2);
  }

  // Data rows
  for (let w = 0; w < 4; w++) {
    let ry = tableY + headH + w * rowH;
    // row background (alternating)
    noStroke();
    fill(w % 2 === 0 ? 'white' : 'ghostwhite');
    rect(tableX, ry, tableW, rowH);
    // week label cell
    fill('lightsteelblue');
    rect(tableX, ry, labelColW, rowH);
    noStroke();
    fill('navy');
    textAlign(CENTER, CENTER);
    textSize(14);
    text('Week\n' + (w + 1), tableX + labelColW / 2, ry + rowH / 2);
    // three entry cells
    let entry = sc.weeks[w];
    let vals = [entry.mood, entry.sleep, entry.friends];
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(11);
    for (let c = 0; c < 3; c++) {
      let cx = tableX + labelColW + c * colW;
      text(vals[c], cx + 4, ry + 3, colW - 8, rowH - 6);
    }
  }

  // table grid lines
  stroke('lightgray');
  strokeWeight(1);
  noFill();
  let tableH = headH + 4 * rowH;
  // vertical lines
  line(tableX + labelColW, tableY, tableX + labelColW, tableY + tableH);
  for (let c = 1; c < 3; c++) {
    let vx = tableX + labelColW + c * colW;
    line(vx, tableY + headH, vx, tableY + tableH);
  }
  // horizontal lines between rows
  for (let w = 0; w <= 4; w++) {
    let ly = tableY + headH + w * rowH;
    line(tableX, ly, tableX + tableW, ly);
  }
  // outer border
  stroke('steelblue');
  strokeWeight(1.5);
  rect(tableX, tableY, tableW, tableH, 6);
  noStroke();

  // ---- Question prompt ----
  let qy = tableY + tableH + 12;
  fill('black');
  textAlign(CENTER, TOP);
  textSize(14);
  text('What does this log show?', canvasWidth / 2, qy);

  // ---- Two answer option cards ----
  let optY = qy + 24;
  let optH = 44;
  let gap = 12;
  let optW = (tableW - gap) / 2;
  optionRects = [
    { x: tableX, y: optY, w: optW, h: optH, val: 'bad', label: 'One Bad Day' },
    { x: tableX + optW + gap, y: optY, w: optW, h: optH, val: 'pattern', label: 'A Pattern Worth\nCaring About' }
  ];
  for (let o of optionRects) {
    let picked = choice === o.val;
    let correct = o.val === sc.answer;
    let hover = pointInRect(mouseX, mouseY, o);
    if (picked) {
      stroke(correct ? 'seagreen' : 'indianred');
      strokeWeight(3);
      fill(correct ? 'honeydew' : 'mistyrose');
    } else {
      stroke('slategray');
      strokeWeight(1.5);
      fill(hover && choice === null ? 'lightyellow' : 'white');
    }
    rect(o.x, o.y, o.w, o.h, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(o.label, o.x + 4, o.y + 2, o.w - 8, o.h - 4);
  }
  cursor(overAnyOption() && choice === null ? HAND : ARROW);

  // ---- Feedback box ----
  let fy = optY + optH + 12;
  let fh = drawHeight - fy - 10;
  if (choice === null) {
    stroke('silver');
    strokeWeight(1.5);
    fill('white');
    rect(tableX, fy, tableW, fh, 8);
    noStroke();
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Look for changes that last across weeks and show up in more than one area.',
      tableX + 12, fy + 6, tableW - 24, fh - 12);
  } else {
    let correct = choice === sc.answer;
    stroke(correct ? 'seagreen' : 'goldenrod');
    strokeWeight(1.5);
    fill(correct ? 'honeydew' : 'lightyellow');
    rect(tableX, fy, tableW, fh, 8);
    noStroke();
    // heading line
    fill(correct ? 'seagreen' : 'goldenrod');
    textAlign(LEFT, TOP);
    textSize(13);
    let head = correct ? '✓ Good analysis.' : 'Look again — read across the weeks.';
    text(head, tableX + 12, fy + 8);
    // explanation
    fill('black');
    textSize(12);
    text(sc.why, tableX + 12, fy + 28, tableW - 24, fh - 54);
    // reassurance line, always shown
    fill('navy');
    textAlign(LEFT, BOTTOM);
    textSize(11.5);
    text('Either way, the response is the same: notice with care, never with judgment.',
      tableX + 12, fy + 8, tableW - 24, fh - 12);
  }
}

function overAnyOption() {
  for (let o of optionRects) if (pointInRect(mouseX, mouseY, o)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (choice !== null) return; // lock after answering; use Next or dropdown to move on
  for (let o of optionRects) {
    if (pointInRect(mouseX, mouseY, o)) {
      choice = o.val;
      return;
    }
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
