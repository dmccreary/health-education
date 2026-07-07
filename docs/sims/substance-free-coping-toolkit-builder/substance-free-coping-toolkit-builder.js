// Substance-Free Coping Toolkit Builder - MicroSim (drag strategies onto stress scenarios)
// CANVAS_HEIGHT: 512
// Grades 9-12, Apply (L3): students drag an evidence-based, substance-free coping strategy
// onto a realistic high-school stress scenario to see why it could help, then build a
// personal top-3 toolkit. Many strategies can be valid; there is no single right answer.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let toolkitButton;
let resetButton;

// Eight realistic high-school stress scenarios. Each strategy key maps to a short reason
// it can help in that situation. Every strategy is valid for every scenario (coping is
// flexible); the reasons are tailored so feedback feels specific.
let scenarios = [
  {
    title: 'Overwhelmed before finals',
    text: 'You have three exams this week and the work feels like too much all at once.',
    why: {
      activity: 'A short walk or workout burns off stress hormones and clears your head before you study.',
      creative: 'Doodling or playing music for a few minutes resets your focus so studying feels doable.',
      talk: 'Telling a friend or teacher you feel buried can lead to a study plan or a lighter load.',
      mind: 'Slow breathing lowers exam anxiety so your working memory can do its job.',
      rest: 'Real sleep locks in what you studied; all-nighters usually hurt your score.'
    }
  },
  {
    title: 'A friend-group conflict',
    text: 'Two people in your friend group are fighting and it is stressing you out.',
    why: {
      activity: 'Moving your body gives you space to cool down before you react to the drama.',
      creative: 'Writing or art helps you name what you feel without taking a side.',
      talk: 'A trusted adult or outside friend can help you think through the conflict calmly.',
      mind: 'Pausing to breathe keeps you from sending a message you would regret.',
      rest: 'A good night of rest makes tomorrow feel less tangled than it does tonight.'
    }
  },
  {
    title: 'Pressure to fit in at a party',
    text: 'You feel pressure at a gathering to do something you are not comfortable with.',
    why: {
      activity: 'Stepping outside for air or a walk gives you a reason to leave the moment.',
      creative: 'Focusing on music or taking photos gives you something to do with your hands.',
      talk: 'Texting a trusted friend or family member for a ride is always an option.',
      mind: 'One slow breath buys you a second to remember what you actually want.',
      rest: 'Choosing to head home early protects tomorrow-you and your goals.'
    }
  },
  {
    title: 'Anxious about a big decision',
    text: 'You are anxious about a college choice or a job decision and cannot stop worrying.',
    why: {
      activity: 'Exercise lowers anxiety and often shakes loose a clearer perspective.',
      creative: 'Journaling the pros and cons turns a swirling worry into something you can see.',
      talk: 'A counselor, mentor, or family member can help you weigh the options out loud.',
      mind: 'A few minutes of mindful breathing calms the what-ifs so you can think.',
      rest: 'Sleeping on it really works; a rested brain makes steadier choices.'
    }
  },
  {
    title: 'Left out and lonely',
    text: 'You saw friends hang out without you and now you feel left out and low.',
    why: {
      activity: 'A quick run or bike ride lifts your mood through your body, not your phone.',
      creative: 'Making something you enjoy reminds you that you are more than one moment.',
      talk: 'Reaching out to one caring person can shrink the loneliness fast.',
      mind: 'Noticing the feeling without judging it helps it pass more gently.',
      rest: 'Being tired makes everything feel worse; rest first, then decide.'
    }
  },
  {
    title: 'Slammed by a heavy schedule',
    text: 'School, a job, and practice all landed on the same week and you feel stretched thin.',
    why: {
      activity: 'Even a 10-minute stretch break resets your energy between commitments.',
      creative: 'A short creative outlet gives your mind a real break, not just more screens.',
      talk: 'Asking a coach or boss for flexibility is a strength, not a failure.',
      mind: 'Breathing between tasks keeps the busy day from tipping into panic.',
      rest: 'Protecting your sleep is what keeps a packed week from breaking you.'
    }
  },
  {
    title: 'Bad news at home',
    text: 'Something hard is happening at home and it is weighing on you all day.',
    why: {
      activity: 'Movement releases tension your body is holding from the stress.',
      creative: 'Expressing it through words or art can make a heavy feeling lighter.',
      talk: 'A trusted adult, counselor, or helpline can support you through it.',
      mind: 'Grounding breaths help you stay steady when things feel out of control.',
      rest: 'Rest gives your mind and body the recovery hard days demand.'
    }
  },
  {
    title: 'Frustrated after a setback',
    text: 'You worked hard on something and it did not go the way you hoped.',
    why: {
      activity: 'Physical activity works off the frustration so it does not build up.',
      creative: 'Channeling it into something you make turns the setback into fuel.',
      talk: 'Talking it over with someone who believes in you rebuilds your confidence.',
      mind: 'A mindful pause separates the setback from the story you tell about yourself.',
      rest: 'A fresh, rested start tomorrow beats stewing on it tonight.'
    }
  }
];

// Five evidence-based, substance-free coping strategies.
let strategies = [
  { key: 'activity', name: 'Physical Activity', icon: 'run',   color: 'seagreen' },
  { key: 'creative', name: 'Creative Expression', icon: 'art', color: 'mediumpurple' },
  { key: 'talk',     name: 'Talk to Someone',   icon: 'talk',  color: 'steelblue' },
  { key: 'mind',     name: 'Mindful Breathing', icon: 'mind',  color: 'goldenrod' },
  { key: 'rest',     name: 'Rest / Sleep',      icon: 'rest',  color: 'indianred' }
];

let order = [];        // shuffled scenario indices
let cardIdx = 0;       // which position in order is showing

let mode = 'match';    // 'match' = drag onto scenario; 'toolkit' = pick top 3
let dragging = -1;     // strategy index being dragged, or -1
let dragPos = null;    // {x,y}
let dropped = -1;      // strategy index currently matched to the shown card, or -1
let feedback = '';     // reason text shown in the feedback panel

let toolkit = [];      // up to 3 chosen strategy indices (toolkit mode)

let scenarioRect = null;   // {x,y,w,h}
let tileRects = [];        // {x,y,w,h,i}
let navPrev = null, navNext = null; // small on-canvas arrow hotspots

let tileW = 128, tileH = 44;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  toolkitButton = createButton('Build My Toolkit');
  toolkitButton.mousePressed(toggleToolkit);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  shuffleDeck();

  describe('A coping-skills builder. On the left is one high-school stress scenario card ' +
    'with arrows to browse a deck of eight. On the right are five draggable strategy tiles: ' +
    'physical activity, creative expression, talking to someone, mindful breathing, and ' +
    'rest or sleep. Drag a strategy onto the scenario to read why it can help; many ' +
    'strategies are valid. The Build My Toolkit button lets you save your top three.', LABEL);
}

function positionControls() {
  toolkitButton.position(10, drawHeight + 15);
  resetButton.position(170, drawHeight + 15);
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
  text('Substance-Free Coping Toolkit', canvasWidth / 2, 8);

  if (mode === 'match') drawMatchMode();
  else drawToolkitMode();

  // dragged tile follows the pointer, on top of everything
  if (dragging >= 0 && dragPos) {
    drawTile(dragPos.x - tileW / 2, dragPos.y - tileH / 2, tileW, tileH, dragging, true, false);
  }

  cursor((dragging >= 0 || overInteractive()) ? HAND : ARROW);
}

// ---------------- MATCH MODE ----------------
function drawMatchMode() {
  let topY = 40;
  let leftW = Math.floor(canvasWidth * 0.55) - margin;
  let leftX = margin;

  // --- left: scenario card ---
  let cardX = leftX, cardY = topY + 22, cardW = leftW, cardH = 232;
  scenarioRect = { x: cardX, y: cardY, w: cardW, h: cardH };
  let sc = scenarios[order[cardIdx]];

  // deck header with count + arrows
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Stress scenario ' + (cardIdx + 1) + ' of ' + order.length, leftX, topY);

  // Prev / Next arrow hotspots on the right of the header
  let arrW = 24, arrH = 18, arrY = topY - 2;
  navNext = { x: leftX + leftW - arrW, y: arrY, w: arrW, h: arrH };
  navPrev = { x: navNext.x - arrW - 6, y: arrY, w: arrW, h: arrH };
  drawArrow(navPrev, '<');
  drawArrow(navNext, '>');

  // card body
  let matched = dropped >= 0;
  let overCard = dragging >= 0 && dragPos && pointInRect(dragPos.x, dragPos.y, scenarioRect);
  strokeWeight(overCard ? 4 : 2);
  stroke(overCard ? 'seagreen' : (matched ? strategies[dropped].color : 'slateblue'));
  fill('white');
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();

  // scenario title
  fill('midnightblue');
  textAlign(LEFT, TOP);
  textSize(15);
  text(sc.title, cardX + 12, cardY + 12, cardW - 24, 48);

  // scenario detail
  fill('dimgray');
  textSize(12);
  text(sc.text, cardX + 12, cardY + 56, cardW - 24, 60);

  // drop zone / matched result inside the lower part of the card
  let dzY = cardY + 122, dzH = cardH - 122 - 12;
  if (!matched) {
    stroke('lightsteelblue');
    strokeWeight(1.5);
    drawingContext.setLineDash([5, 4]);
    fill('aliceblue');
    rect(cardX + 12, dzY, cardW - 24, dzH, 8);
    drawingContext.setLineDash([]);
    noStroke();
    fill('cornflowerblue');
    textAlign(CENTER, CENTER);
    textSize(12);
    text('Drag a strategy here', cardX + 12, dzY, cardW - 24, dzH);
  } else {
    let st = strategies[dropped];
    noStroke();
    fill(st.color);
    rect(cardX + 12, dzY, cardW - 24, dzH, 8);
    // strategy name badge
    fill('white');
    textAlign(LEFT, TOP);
    textSize(13);
    drawIcon(st.icon, cardX + 26, dzY + 16, 18, 'white');
    text(st.name, cardX + 44, dzY + 9, cardW - 60, 22);
  }

  // --- right: strategy tiles ---
  let rightX = leftX + leftW + margin;
  let rightW = canvasWidth - rightX - margin;
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Drag a strategy:', rightX, topY);

  tileRects = [];
  tileW = rightW;
  tileH = 42;
  let gap = 8;
  let ty0 = topY + 20;
  for (let i = 0; i < strategies.length; i++) {
    let y = ty0 + i * (tileH + gap);
    let r = { x: rightX, y: y, w: tileW, h: tileH, i: i };
    tileRects.push(r);
    if (dragging === i) {
      // ghost where it came from
      stroke('lightgray'); strokeWeight(2); fill('aliceblue');
      rect(r.x, r.y, r.w, r.h, 10);
    } else {
      drawTile(r.x, r.y, r.w, r.h, i, false, dropped === i);
    }
  }

  // --- feedback panel across the bottom ---
  let fy = topY + 22 + cardH + 14;
  let fh = drawHeight - fy - 12;
  stroke('silver'); strokeWeight(1); fill('white');
  rect(margin, fy, canvasWidth - margin * 2, fh, 8);
  noStroke();
  if (feedback) {
    fill('darkslategray');
    textAlign(LEFT, TOP);
    textSize(13);
    text(feedback, margin + 12, fy + 8, canvasWidth - margin * 2 - 24, fh - 16);
  } else {
    fill('gray');
    textAlign(CENTER, CENTER);
    textSize(12);
    text('Drop a strategy on the scenario to see why it can help. More than one can work.',
      margin + 12, fy, canvasWidth - margin * 2 - 24, fh);
  }
}

// ---------------- TOOLKIT MODE ----------------
function drawToolkitMode() {
  let topY = 40;
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Tap up to 3 strategies for your personal toolkit', canvasWidth / 2, topY);

  // strategy tiles as a selectable list (single column, centered)
  tileRects = [];
  let listW = Math.min(300, canvasWidth - margin * 2);
  let listX = (canvasWidth - listW) / 2;
  tileW = listW;
  tileH = 44;
  let gap = 10;
  let ty0 = topY + 26;
  for (let i = 0; i < strategies.length; i++) {
    let y = ty0 + i * (tileH + gap);
    let r = { x: listX, y: y, w: tileW, h: tileH, i: i };
    tileRects.push(r);
    let chosen = toolkit.includes(i);
    drawTile(r.x, r.y, r.w, r.h, i, false, chosen);
    if (chosen) {
      // order number badge on the right
      noStroke();
      fill('white');
      circle(r.x + r.w - 22, r.y + r.h / 2, 24);
      fill(strategies[i].color);
      textAlign(CENTER, CENTER);
      textSize(14);
      text(toolkit.indexOf(i) + 1, r.x + r.w - 22, r.y + r.h / 2);
    }
  }

  // saved summary card
  let sy = ty0 + strategies.length * (tileH + gap) + 8;
  let sh = drawHeight - sy - 12;
  stroke('seagreen'); strokeWeight(2); fill('honeydew');
  rect(margin, sy, canvasWidth - margin * 2, sh, 10);
  noStroke();
  fill('darkgreen');
  textAlign(LEFT, TOP);
  textSize(14);
  text('My Coping Toolkit', margin + 12, sy + 10);

  textSize(12);
  fill('darkslategray');
  if (toolkit.length === 0) {
    fill('gray');
    text('Choose the strategies you would actually reach for.', margin + 12, sy + 34,
      canvasWidth - margin * 2 - 24, sh - 40);
  } else {
    let lines = '';
    for (let k = 0; k < toolkit.length; k++) {
      lines += (k + 1) + '. ' + strategies[toolkit[k]].name + '\n';
    }
    text(lines, margin + 12, sy + 34, canvasWidth - margin * 2 - 24, sh - 40);
    if (toolkit.length === 3) {
      fill('seagreen');
      textAlign(RIGHT, BOTTOM);
      textSize(11);
      text('Toolkit ready — keep these handy!', canvasWidth - margin - 12, sy + sh - 8);
    }
  }
}

// ---------------- shared drawing ----------------
function drawTile(x, y, w, h, i, lifted, selected) {
  let st = strategies[i];
  strokeWeight(lifted ? 4 : (selected ? 3 : 1.5));
  stroke(lifted ? 'seagreen' : st.color);
  fill(selected ? st.color : 'white');
  rect(x, y, w, h, 10);
  // icon
  drawIcon(st.icon, x + 20, y + h / 2, 15, selected ? 'white' : st.color);
  // label
  noStroke();
  fill(selected ? 'white' : 'black');
  textAlign(LEFT, CENTER);
  textSize(12.5);
  text(st.name, x + 38, y + h / 2);
}

function drawArrow(r, glyph) {
  let hot = pointInRect(mouseX, mouseY, r);
  stroke('steelblue');
  strokeWeight(1.5);
  fill(hot ? 'lightsteelblue' : 'white');
  rect(r.x, r.y, r.w, r.h, 4);
  noStroke();
  fill('steelblue');
  textAlign(CENTER, CENTER);
  textSize(14);
  text(glyph, r.x + r.w / 2, r.y + r.h / 2 - 1);
}

// Simple flat icons drawn with named colors.
function drawIcon(type, cx, cy, s, col) {
  push();
  translate(cx, cy);
  noFill();
  stroke(col);
  strokeWeight(2.2);
  if (type === 'run') {
    // running figure: head + limbs
    fill(col); noStroke();
    circle(0, -s * 0.7, s * 0.5);
    stroke(col); strokeWeight(2.2); noFill();
    line(0, -s * 0.45, s * 0.1, s * 0.1);      // torso
    line(s * 0.1, s * 0.1, s * 0.5, s * 0.45);  // back leg
    line(s * 0.1, s * 0.1, -s * 0.35, s * 0.5); // front leg
    line(0, -s * 0.2, s * 0.45, -s * 0.35);     // front arm
    line(0, -s * 0.2, -s * 0.4, 0);             // back arm
  } else if (type === 'art') {
    // paint palette
    fill(col); noStroke();
    ellipse(0, 0, s * 1.6, s * 1.3);
    fill('white');
    circle(0, s * 0.2, s * 0.5);                // thumb hole
    fill('white');
    circle(-s * 0.4, -s * 0.3, s * 0.28);
    circle(s * 0.35, -s * 0.35, s * 0.28);
    circle(s * 0.5, s * 0.1, s * 0.28);
  } else if (type === 'talk') {
    // speech bubble
    fill(col); noStroke();
    rect(-s * 0.8, -s * 0.7, s * 1.6, s * 1.1, s * 0.35);
    triangle(-s * 0.3, s * 0.4, -s * 0.55, s * 0.85, -s * 0.05, s * 0.4);
    fill('white');
    circle(-s * 0.35, -s * 0.15, s * 0.22);
    circle(0, -s * 0.15, s * 0.22);
    circle(s * 0.35, -s * 0.15, s * 0.22);
  } else if (type === 'mind') {
    // lotus / breathing petals
    noFill(); stroke(col); strokeWeight(2.2);
    ellipse(0, s * 0.1, s * 0.55, s * 1.3);
    ellipse(-s * 0.5, s * 0.2, s * 0.5, s * 1.0);
    ellipse(s * 0.5, s * 0.2, s * 0.5, s * 1.0);
    line(-s * 0.9, s * 0.7, s * 0.9, s * 0.7);
  } else if (type === 'rest') {
    // crescent moon with Z
    fill(col); noStroke();
    arc(0, 0, s * 1.7, s * 1.7, HALF_PI * 0.5, HALF_PI * 0.5 + PI + HALF_PI, PIE);
    fill('white');
    arc(s * 0.3, -s * 0.15, s * 1.5, s * 1.5, HALF_PI * 0.5, HALF_PI * 0.5 + PI + HALF_PI, PIE);
  }
  pop();
}

// ---------------- interaction ----------------
function pointInRect(px, py, r) {
  return r && px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function overInteractive() {
  for (let t of tileRects) if (pointInRect(mouseX, mouseY, t)) return true;
  if (mode === 'match') {
    if (pointInRect(mouseX, mouseY, navPrev)) return true;
    if (pointInRect(mouseX, mouseY, navNext)) return true;
  }
  return false;
}

function mousePressed() {
  if (mode === 'match') {
    // deck navigation
    if (pointInRect(mouseX, mouseY, navPrev)) { stepCard(-1); return; }
    if (pointInRect(mouseX, mouseY, navNext)) { stepCard(1); return; }
    // pick up a strategy tile to drag
    for (let t of tileRects) {
      if (pointInRect(mouseX, mouseY, t)) {
        dragging = t.i;
        dragPos = { x: mouseX, y: mouseY };
        return;
      }
    }
  } else {
    // toolkit mode: tap to select / deselect (max 3)
    for (let t of tileRects) {
      if (pointInRect(mouseX, mouseY, t)) {
        let k = toolkit.indexOf(t.i);
        if (k >= 0) toolkit.splice(k, 1);
        else if (toolkit.length < 3) toolkit.push(t.i);
        return;
      }
    }
  }
}

function mouseDragged() {
  if (dragging >= 0) dragPos = { x: mouseX, y: mouseY };
}

function mouseReleased() {
  if (dragging < 0) return;
  // drop onto the scenario card?
  if (dragPos && pointInRect(dragPos.x, dragPos.y, scenarioRect)) {
    dropped = dragging;
    let sc = scenarios[order[cardIdx]];
    let st = strategies[dropped];
    feedback = st.name + ': ' + sc.why[st.key] +
      '  (This is one good option — several strategies here could help.)';
  }
  dragging = -1;
  dragPos = null;
}

function stepCard(dir) {
  cardIdx = (cardIdx + dir + order.length) % order.length;
  dropped = -1;
  feedback = '';
}

function toggleToolkit() {
  mode = (mode === 'match') ? 'toolkit' : 'match';
  toolkitButton.html(mode === 'match' ? 'Build My Toolkit' : 'Back to Scenarios');
  dragging = -1;
  dragPos = null;
}

function shuffleDeck() {
  order = scenarios.map((s, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  cardIdx = 0;
}

function resetAll() {
  shuffleDeck();
  mode = 'match';
  toolkitButton.html('Build My Toolkit');
  dragging = -1;
  dragPos = null;
  dropped = -1;
  feedback = '';
  toolkit = [];
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
