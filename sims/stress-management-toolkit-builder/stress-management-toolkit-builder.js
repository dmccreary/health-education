// Stress Management Toolkit Builder - MicroSim (drag a coping strategy onto a stress scenario)
// CANVAS_HEIGHT: 530
// Grade 6-8, Apply (L3): students match realistic stress scenarios to substance-free coping
// strategies by dragging a strategy tile onto the scenario card, then build a personal top-3 toolkit.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 472;
let controlHeight = 58;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let prevButton;
let nextButton;
let modeButton;

// The five substance-free strategies. Each carries a short "why" that is tailored per scenario below.
let strategies = [
  { id: 'physical', label: 'Physical Activity', color: 'seagreen' },
  { id: 'creative', label: 'Creative Expression', color: 'mediumpurple' },
  { id: 'talk', label: 'Talk To Someone', color: 'steelblue' },
  { id: 'mindful', label: 'Mindfulness / Breathing', color: 'goldenrod' },
  { id: 'nature', label: 'Culture / Nature Connection', color: 'indianred' }
];

// 8 realistic stress scenarios. `why` maps each strategy id to a 1-2 sentence reason it can help.
// The design point: MORE THAN ONE strategy is valid for each scenario (open-ended validity).
let scenarios = [
  {
    text: 'You have a big test tomorrow and feel overwhelmed.',
    why: {
      physical: 'A short walk or stretch break clears your head so you can study with more focus.',
      creative: 'Sketching or making a study-guide doodle turns nervous energy into something useful.',
      talk: 'Asking a teacher or friend to review a hard topic makes the work feel more manageable.',
      mindful: 'A few slow breaths lowers that overwhelmed feeling so your mind can settle.',
      nature: 'Stepping outside for fresh air for a minute helps reset before you keep studying.'
    }
  },
  {
    text: 'You had an argument with a close friend.',
    why: {
      physical: 'Moving your body helps release tension so you can think about it more calmly.',
      creative: 'Writing or drawing how you feel can help you sort out what you want to say.',
      talk: 'Talking it through with a trusted adult or another friend helps you find the words.',
      mindful: 'Pausing to breathe keeps you from reacting in a way you might regret.',
      nature: 'Sitting somewhere peaceful gives you space to cool down before you reconnect.'
    }
  },
  {
    text: 'You feel anxious before a big game or performance.',
    why: {
      physical: 'A proper warm-up burns off jitters and gets your body ready to do its best.',
      creative: 'Picturing or humming your routine can calm the pre-game nerves.',
      talk: 'A quick pep talk from a coach or teammate reminds you that you are prepared.',
      mindful: 'Slow breathing steadies your heartbeat so the nerves feel smaller.',
      nature: 'A quiet moment to yourself helps you focus before you step out.'
    }
  },
  {
    text: 'Your schedule is packed and you feel like there is no free time.',
    why: {
      physical: 'Even a five-minute movement break gives your brain a rest and more energy.',
      creative: 'A short creative hobby you enjoy can recharge you between tasks.',
      talk: 'Asking family for help planning your week can make the load feel lighter.',
      mindful: 'Pausing to breathe helps you slow down instead of rushing through everything.',
      nature: 'A brief step outside reminds you to take real breaks, not just power through.'
    }
  },
  {
    text: 'You keep replaying an embarrassing moment from earlier today.',
    why: {
      physical: 'Getting active shifts your attention away from the loop in your head.',
      creative: 'Journaling about it can help you let the moment go.',
      talk: 'Sharing it with someone you trust often makes it feel much smaller.',
      mindful: 'Noticing the thought and returning to your breath breaks the replay cycle.',
      nature: 'Changing your surroundings and getting some air helps interrupt the worry.'
    }
  },
  {
    text: 'You are worried about problems happening at home.',
    why: {
      physical: 'Movement is a healthy way to release the stress you are carrying.',
      creative: 'Expressing your feelings through art or music can be a safe outlet.',
      talk: 'Talking with a trusted adult, counselor, or helpline is an important step.',
      mindful: 'Grounding breaths can help when the worry feels like too much.',
      nature: 'A calm, familiar place can give you a sense of steadiness.'
    }
  },
  {
    text: 'Friends are pressuring you and you feel tense about it.',
    why: {
      physical: 'Walking away to move your body gives you space and a clear head.',
      creative: 'Putting your thoughts into words or art helps you know your own mind.',
      talk: 'Talking to a trusted adult can help you plan how to handle the pressure.',
      mindful: 'A slow breath buys you a moment to make a choice that is right for you.',
      nature: 'Getting to a calmer setting makes it easier to stand by your decision.'
    }
  },
  {
    text: 'You cannot fall asleep because your mind is racing.',
    why: {
      physical: 'Gentle stretching earlier in the evening helps your body wind down.',
      creative: 'Writing down tomorrow’s worries can get them out of your head and onto paper.',
      talk: 'Mentioning it to a parent can lead to helpful bedtime routines.',
      mindful: 'Slow, counted breaths signal your body that it is time to rest.',
      nature: 'A quiet, dim, calming space helps your mind settle for sleep.'
    }
  }
];

let order = [];         // randomized scenario order (indices)
let pos = 0;            // position within order
let mode = 'match';    // 'match' or 'toolkit'

// drag state
let tileRects = [];    // resting rects of the 5 strategy tiles
let dragging = -1;     // index of strategy being dragged, -1 if none
let dragPos = null;    // {x,y} pointer while dragging
let dropCard = {};     // scenario card rect (also the drop target)
let feedback = '';
let feedbackColor = 'dimgray';
let activeStrategy = -1; // last strategy dropped on card (for highlight)

// toolkit state
let picks = [0, 3, 2];        // strategy indices chosen (max 3)  [TEMP seeded for screenshot]

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  prevButton = createButton('‹ Prev');
  prevButton.mousePressed(prevScenario);
  prevButton.parent(document.querySelector('main'));

  nextButton = createButton('Next ›');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  modeButton = createButton('Build My Toolkit');
  modeButton.mousePressed(toggleMode);
  modeButton.parent(document.querySelector('main'));

  buildOrder();
  positionControls();

  describe('One realistic stress scenario card is shown with five strategy tiles below: ' +
    'Physical Activity, Creative Expression, Talk To Someone, Mindfulness/Breathing, and ' +
    'Culture/Nature Connection. Drag a tile onto the card to read why that healthy, ' +
    'substance-free strategy could help. More than one strategy works for each scenario. ' +
    'A Build My Toolkit button lets you save your top three preferred strategies.', LABEL);
}

function buildOrder() {
  order = [];
  for (let i = 0; i < scenarios.length; i++) order.push(i);
  // Fisher-Yates shuffle so the deck order is randomized each session.
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = order[i]; order[i] = order[j]; order[j] = t;
  }
  pos = 0;
}

function positionControls() {
  let y = drawHeight + 14;
  prevButton.position(margin, y);
  nextButton.position(margin + 78, y);
  // right-align the mode button
  modeButton.position(canvasWidth - 152, y);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Stress Management Toolkit Builder', margin, 8, canvasWidth - margin * 2, 26);

  if (mode === 'match') {
    drawMatchMode();
  } else {
    drawToolkitMode();
  }
}

// ---------------- MATCH MODE ----------------
function drawMatchMode() {
  let sc = scenarios[order[pos]];

  // progress line
  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('dimgray');
  text('Scenario ' + (pos + 1) + ' of ' + scenarios.length +
    '  •  Drag a strategy onto the card', margin, 36, canvasWidth - margin * 2, 18);

  // scenario card = drop target
  let cardX = margin;
  let cardY = 58;
  let cardW = canvasWidth - margin * 2;
  let cardH = 92;
  dropCard = { x: cardX, y: cardY, w: cardW, h: cardH };

  let over = dragging >= 0 && dragPos && pointInRect(dragPos.x, dragPos.y, dropCard);
  strokeWeight(over ? 4 : 2);
  stroke(over ? 'seagreen' : 'slateblue');
  fill(over ? 'honeydew' : 'white');
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();
  // small label tab
  fill(over ? 'seagreen' : 'slateblue');
  textAlign(LEFT, TOP);
  textSize(11);
  text('STRESS SITUATION', cardX + 12, cardY + 8);
  fill('black');
  textAlign(LEFT, TOP);
  textSize(16);
  text(sc.text, cardX + 12, cardY + 26, cardW - 24, cardH - 34);

  // feedback panel
  let fbY = cardY + cardH + 10;
  let fbH = 118;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fbY, canvasWidth - margin * 2, fbH, 10);
  noStroke();
  if (activeStrategy >= 0) {
    // colored chip showing which strategy this feedback is about
    let s = strategies[activeStrategy];
    fill(s.color);
    rect(margin + 10, fbY + 10, 12, 12, 3);
    fill(s.color);
    textAlign(LEFT, TOP);
    textSize(14);
    text(s.label, margin + 28, fbY + 8, canvasWidth - margin * 2 - 40, 20);
  }
  textAlign(LEFT, TOP);
  textSize(14);
  fill(feedbackColor);
  let msgY = activeStrategy >= 0 ? fbY + 32 : fbY + 12;
  let msg = feedback ||
    'Every one of these strategies is healthy and substance-free. Drag a tile up to see how it could help here.';
  text(msg, margin + 12, msgY, canvasWidth - margin * 2 - 24, fbH - (msgY - fbY) - 12);

  // reminder that several strategies fit
  if (feedback) {
    noStroke();
    textAlign(LEFT, BOTTOM);
    textSize(11);
    fill('seagreen');
    text('Tip: more than one strategy can work — try another!',
      margin + 12, fbY + fbH - 6, canvasWidth - margin * 2 - 24, 16);
  }

  // strategy tiles tray at the bottom of the draw area
  drawTiles(fbY + fbH + 10);

  cursor((dragging >= 0 || overAnyTile()) ? HAND : ARROW);

  // draw the dragged tile on top, following the pointer
  if (dragging >= 0 && dragPos) {
    let s = strategies[dragging];
    let tw = tileRects[dragging].w;
    let th = tileRects[dragging].h;
    drawTile(dragPos.x - tw / 2, dragPos.y - th / 2, tw, th, s, true, false);
  }
}

function drawTiles(trayY) {
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);
  fill('navy');
  text('Coping strategies (drag one up):', margin, trayY);

  let gridY = trayY + 20;
  let cols = 2;
  let gap = 8;
  let tw = (canvasWidth - margin * 2 - gap) / cols;
  let th = 34;
  tileRects = [];
  for (let i = 0; i < strategies.length; i++) {
    let c = i % cols;
    let r = Math.floor(i / cols);
    let x = margin + c * (tw + gap);
    let y = gridY + r * (th + gap);
    tileRects.push({ x: x, y: y, w: tw, h: th });
    if (i === dragging) continue; // hide resting tile while dragging
    let hover = pointInRect(mouseX, mouseY, tileRects[i]);
    drawTile(x, y, tw, th, strategies[i], false, hover);
  }
}

function drawTile(x, y, w, h, s, active, hover) {
  strokeWeight(active ? 3 : 1.5);
  stroke(s.color);
  fill(active ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
  rect(x, y, w, h, 8);
  noStroke();
  fill(s.color);
  circle(x + 15, y + h / 2, 12);
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(12.5);
  text(s.label, x + 28, y + h / 2, w - 34, h);
}

// ---------------- TOOLKIT MODE ----------------
function drawToolkitMode() {
  noStroke();
  textAlign(CENTER, TOP);
  textSize(14);
  fill('dimgray');
  text('Pick your top 3 strategies to keep in your personal toolkit.',
    margin, 38, canvasWidth - margin * 2, 20);

  // selectable list of the 5 strategies
  let listY = 66;
  let rowH = 40;
  let gap = 8;
  tileRects = [];
  for (let i = 0; i < strategies.length; i++) {
    let x = margin;
    let y = listY + i * (rowH + gap);
    let w = canvasWidth - margin * 2;
    tileRects.push({ x: x, y: y, w: w, h: rowH });
    let s = strategies[i];
    let chosen = picks.includes(i);
    let full = picks.length >= 3 && !chosen;
    let hover = !full && pointInRect(mouseX, mouseY, tileRects[i]);
    strokeWeight(chosen ? 3 : 1.5);
    stroke(s.color);
    fill(chosen ? 'honeydew' : (full ? 'whitesmoke' : (hover ? 'lightyellow' : 'white')));
    rect(x, y, w, rowH, 9);
    noStroke();
    fill(s.color);
    circle(x + 20, y + rowH / 2, 16);
    if (chosen) {
      // ranking number inside the dot
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(13);
      text(picks.indexOf(i) + 1, x + 20, y + rowH / 2 + 1);
    }
    fill(full ? 'gray' : 'black');
    textAlign(LEFT, CENTER);
    textSize(14);
    text(s.label, x + 40, y + rowH / 2, w - 100, rowH);
    // status word on the right
    textAlign(RIGHT, CENTER);
    textSize(12);
    fill(chosen ? 'seagreen' : (full ? 'silver' : 'steelblue'));
    text(chosen ? 'in toolkit' : (full ? '' : 'tap to add'), x + w - 12, y + rowH / 2);
  }

  // summary panel at the bottom
  let sumY = listY + strategies.length * (rowH + gap) + 6;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, sumY, canvasWidth - margin * 2, drawHeight - sumY - 10, 10);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(13);
  fill('navy');
  text('My Stress Toolkit  (' + picks.length + '/3)', margin + 12, sumY + 8);
  textSize(13);
  if (picks.length === 0) {
    fill('dimgray');
    text('Tap up to three strategies above to save them here.',
      margin + 12, sumY + 30, canvasWidth - margin * 2 - 24, 30);
  } else {
    let ly = sumY + 30;
    for (let k = 0; k < picks.length; k++) {
      let s = strategies[picks[k]];
      fill(s.color);
      circle(margin + 22, ly + 7, 12);
      fill('black');
      textAlign(LEFT, TOP);
      textSize(13);
      text((k + 1) + '. ' + s.label, margin + 34, ly, canvasWidth - margin * 2 - 46, 18);
      ly += 22;
    }
    if (picks.length === 3) {
      fill('seagreen');
      textAlign(LEFT, TOP);
      textSize(12);
      text('Nice! Keep these healthy go-to strategies ready for stressful moments.',
        margin + 12, ly + 2, canvasWidth - margin * 2 - 24, 30);
    }
  }
  cursor(overAnyTile() && !(picks.length >= 3) ? HAND : (overAnyPickable() ? HAND : ARROW));
}

// ---------------- shared helpers ----------------
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function overAnyTile() {
  for (let i = 0; i < tileRects.length; i++) {
    if (i === dragging) continue;
    if (pointInRect(mouseX, mouseY, tileRects[i])) return true;
  }
  return false;
}

function overAnyPickable() {
  for (let i = 0; i < tileRects.length; i++) {
    let chosen = picks.includes(i);
    if (picks.length >= 3 && !chosen) continue;
    if (pointInRect(mouseX, mouseY, tileRects[i])) return true;
  }
  return false;
}

function mousePressed() {
  if (mode === 'match') {
    for (let i = 0; i < tileRects.length; i++) {
      if (pointInRect(mouseX, mouseY, tileRects[i])) {
        dragging = i;
        dragPos = { x: mouseX, y: mouseY };
        return;
      }
    }
  } else {
    // toolkit: tap to add/remove a pick (respecting max of 3)
    for (let i = 0; i < tileRects.length; i++) {
      if (pointInRect(mouseX, mouseY, tileRects[i])) {
        let k = picks.indexOf(i);
        if (k >= 0) {
          picks.splice(k, 1);
        } else if (picks.length < 3) {
          picks.push(i);
        }
        return;
      }
    }
  }
}

function mouseDragged() {
  if (mode === 'match' && dragging >= 0) {
    dragPos = { x: mouseX, y: mouseY };
  }
}

function mouseReleased() {
  if (mode !== 'match' || dragging < 0) return;
  if (dragPos && pointInRect(dragPos.x, dragPos.y, dropCard)) {
    let sc = scenarios[order[pos]];
    let s = strategies[dragging];
    activeStrategy = dragging;
    feedback = sc.why[s.id];
    feedbackColor = 'seagreen';
  }
  dragging = -1;
  dragPos = null;
}

function prevScenario() {
  if (mode !== 'match') return;
  pos = (pos - 1 + scenarios.length) % scenarios.length;
  clearFeedback();
}

function nextScenario() {
  if (mode !== 'match') return;
  pos = (pos + 1) % scenarios.length;
  clearFeedback();
}

function clearFeedback() {
  feedback = '';
  feedbackColor = 'dimgray';
  activeStrategy = -1;
  dragging = -1;
  dragPos = null;
}

function toggleMode() {
  if (mode === 'match') {
    mode = 'toolkit';
    modeButton.html('‹ Back to Scenarios');
    prevButton.hide();
    nextButton.hide();
  } else {
    mode = 'match';
    modeButton.html('Build My Toolkit');
    prevButton.show();
    nextButton.show();
    clearFeedback();
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
