// Refusal Skills Role-Play Branching Scenario - MicroSim
// CANVAS_HEIGHT: 512
// Grade 4, Apply (L3): students rehearse refusal-skill scripts by choosing
// responses in a branching peer-pressure dialogue that always resolves safely.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let startOverButton;
let scenarioButton;

// ---- Scenario data ---------------------------------------------------------
// Each scenario is a small tree of nodes keyed by id.
// node: { line, options:[{skill, phrase, next}] }
//   next === 'resolve'  -> friend backs off (safe ending)
//   next === 'adult'    -> tell a trusted adult (supportive ending)
//   otherwise           -> id of a follow-up node (pressure continues once)
let scenarios = [
  {
    title: 'The Bike Helmet',
    scene: 'You are about to ride bikes. Jordan is not wearing a helmet.',
    friend: 'Jordan',
    start: 'n1',
    nodes: {
      n1: {
        line: 'Come on, take off your helmet. It looks kind of silly.',
        options: [
          { skill: 'Direct No', phrase: 'No thanks, I keep my helmet on.', next: 'resolve' },
          { skill: 'Blame a Rule', phrase: 'My family rule is helmet every ride.', next: 'resolve' },
          { skill: 'Suggest Alternative', phrase: "Let's both wear ours and race!", next: 'n2' },
          { skill: 'Broken Record', phrase: 'I am wearing my helmet.', next: 'n2' }
        ]
      },
      n2: {
        line: 'Nobody else wears one though. Just for today?',
        options: [
          { skill: 'Broken Record', phrase: 'I am wearing my helmet.', next: 'resolve' },
          { skill: 'Walk Away', phrase: "I'll ride over here where it's safe.", next: 'resolve' },
          { skill: 'Tell a Trusted Adult', phrase: "Let's ask a grown-up what's safe.", next: 'adult' }
        ]
      }
    }
  },
  {
    title: 'Leaving Someone Out',
    scene: 'Recess is starting. Sam wants to keep Alex out of the game.',
    friend: 'Sam',
    start: 'n1',
    nodes: {
      n1: {
        line: "Let's not let Alex play. It's more fun without them.",
        options: [
          { skill: 'Direct No', phrase: "No, that's not kind. Alex can play.", next: 'resolve' },
          { skill: 'Suggest Alternative', phrase: "Let's make teams so everyone plays.", next: 'resolve' },
          { skill: 'Broken Record', phrase: 'I want everyone to get a turn.', next: 'n2' },
          { skill: 'Blame a Rule', phrase: 'Our class rule is include everyone.', next: 'n2' }
        ]
      },
      n2: {
        line: 'Ugh, fine, but you always ruin the fun.',
        options: [
          { skill: 'Broken Record', phrase: 'I want everyone to get a turn.', next: 'resolve' },
          { skill: 'Walk Away', phrase: "I'll go play with Alex then.", next: 'resolve' },
          { skill: 'Tell a Trusted Adult', phrase: 'I can ask a teacher to help us share.', next: 'adult' }
        ]
      }
    }
  },
  {
    title: 'Going Off Without Telling',
    scene: "You're at the park. Riley wants to leave without telling an adult.",
    friend: 'Riley',
    start: 'n1',
    nodes: {
      n1: {
        line: "Let's go to the store. Don't tell anyone, it's fine.",
        options: [
          { skill: 'Direct No', phrase: 'No, I always tell an adult first.', next: 'resolve' },
          { skill: 'Blame a Rule', phrase: 'My rule is a grown-up has to know.', next: 'resolve' },
          { skill: 'Suggest Alternative', phrase: "Let's ask my mom to take us.", next: 'n2' },
          { skill: 'Broken Record', phrase: 'I need to tell an adult first.', next: 'n2' }
        ]
      },
      n2: {
        line: "Come on, we'll be right back. Don't be scared.",
        options: [
          { skill: 'Broken Record', phrase: 'I need to tell an adult first.', next: 'resolve' },
          { skill: 'Walk Away', phrase: "I'm staying here where it's safe.", next: 'resolve' },
          { skill: 'Tell a Trusted Adult', phrase: "Let's go ask an adult together.", next: 'adult' }
        ]
      }
    }
  }
];

// ---- State -----------------------------------------------------------------
let sIndex = 0;
let stage = 'prompt';   // 'prompt' -> options shown; 'result' -> reply shown; 'done' -> recap
let curNode = 'n1';
let lastChoice = null;  // the option object just chosen
let outcome = '';       // 'stopped' | 'continued' | 'adult'
let rounds = 0;         // rounds of pressure navigated
let usedSkills = [];    // skill names used this scenario

// hit-test rects for the response cards, rebuilt each frame
let cardRects = [];
// the "Next" button-style rect drawn on the result screen (content region, not a control)
let continueRect = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  startOverButton = createButton('Start Over');
  startOverButton.mousePressed(startOver);
  startOverButton.parent(document.querySelector('main'));

  scenarioButton = createButton('Try a Different Scenario');
  scenarioButton.mousePressed(nextScenario);
  scenarioButton.parent(document.querySelector('main'));

  positionControls();
  describe('A branching peer-pressure role-play. A classmate pressures you and you ' +
    'tap a refusal script (direct no, broken record, suggest an alternative, blame a ' +
    'rule, walk away, or tell a trusted adult). Every path resolves safely.', LABEL);
  beginScenario();
}

function positionControls() {
  startOverButton.position(margin, drawHeight + 14);
  scenarioButton.position(margin + 100, drawHeight + 14);
}

// ---- Flow helpers ----------------------------------------------------------
function beginScenario() {
  stage = 'prompt';
  curNode = scenarios[sIndex].start;
  lastChoice = null;
  outcome = '';
  rounds = 0;
  usedSkills = [];
}

function startOver() { beginScenario(); }

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  beginScenario();
}

function chooseOption(opt) {
  lastChoice = opt;
  usedSkills.push(opt.skill);
  rounds++;
  if (opt.next === 'adult') outcome = 'adult';
  else if (opt.next === 'resolve') outcome = 'stopped';
  else outcome = 'continued';
  stage = 'result';
}

function continueFlow() {
  if (outcome === 'continued') {
    curNode = lastChoice.next;
    stage = 'prompt';
  } else {
    stage = 'done';
  }
}

// ---- Draw ------------------------------------------------------------------
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
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Refusal Skills Role-Play', canvasWidth / 2, 8);

  // Scenario name + progress tracker row
  noStroke();
  fill('slategray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Scene: ' + sc.title, margin, 34);
  drawProgress(rounds);

  if (stage === 'done') {
    drawRecap(sc);
    return;
  }

  drawScene(sc);

  if (stage === 'prompt') {
    drawOptions(sc);
  } else {
    drawResult(sc);
  }
}

function drawProgress(r) {
  // small dots showing rounds navigated (max 3 shown)
  let n = 3;
  let dotR = 9;
  let gap = 6;
  let totalW = n * dotR + (n - 1) * gap;
  let x0 = canvasWidth - margin - totalW;
  let y = 40;
  noStroke();
  fill('slategray');
  textAlign(RIGHT, CENTER);
  textSize(11);
  text('Rounds:', x0 - 8, y);
  for (let i = 0; i < n; i++) {
    let cx = x0 + i * (dotR + gap) + dotR / 2;
    if (i < r) { fill('mediumseagreen'); stroke('seagreen'); }
    else { fill('white'); stroke('silver'); }
    strokeWeight(1.5);
    ellipse(cx, y, dotR, dotR);
  }
  noStroke();
}

function drawScene(sc) {
  // Scene description strip
  let sy = 56;
  fill('lavender');
  stroke('mediumpurple');
  strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 34, 6);
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(12.5);
  text(sc.scene, margin + 8, sy + 17, canvasWidth - margin * 2 - 16, 30);

  // Two simple flat characters
  let charY = 118;
  drawFriend(margin + 44, charY, sc.friend);
  drawYou(canvasWidth - margin - 44, charY);

  // Speech bubble from the friend
  let line = (stage === 'prompt') ? sc.nodes[curNode].line : lastChoice.phrase;
  let speaker = (stage === 'prompt') ? sc.friend : 'You';
  let fromLeft = (stage === 'prompt');
  drawSpeechBubble(line, speaker, fromLeft, charY);
}

function drawFriend(cx, cy, name) {
  // ordinary classmate, calm colors
  noStroke();
  fill('goldenrod');
  ellipse(cx, cy - 14, 30, 30);            // head
  fill('cornflowerblue');
  rect(cx - 17, cy + 2, 34, 30, 8);        // body
  // simple friendly face
  fill('black');
  ellipse(cx - 6, cy - 16, 3.5, 3.5);
  ellipse(cx + 6, cy - 16, 3.5, 3.5);
  noFill();
  stroke('black');
  strokeWeight(1.5);
  arc(cx, cy - 10, 12, 8, 0, PI);
  noStroke();
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(12);
  text(name, cx, cy + 36);
}

function drawYou(cx, cy) {
  noStroke();
  fill('sandybrown');
  ellipse(cx, cy - 14, 30, 30);            // head
  fill('mediumseagreen');
  rect(cx - 17, cy + 2, 34, 30, 8);        // body
  fill('black');
  ellipse(cx - 6, cy - 16, 3.5, 3.5);
  ellipse(cx + 6, cy - 16, 3.5, 3.5);
  noFill();
  stroke('black');
  strokeWeight(1.5);
  arc(cx, cy - 10, 12, 8, 0, PI);
  noStroke();
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('You', cx, cy + 36);
}

function drawSpeechBubble(msg, speaker, fromLeft, charY) {
  let bx = margin + 6;
  let by = 168;
  let bw = canvasWidth - margin * 2 - 12;
  let bh = 60;
  fill(fromLeft ? 'lightyellow' : 'honeydew');
  stroke(fromLeft ? 'goldenrod' : 'seagreen');
  strokeWeight(1.5);
  rect(bx, by, bw, bh, 10);
  // little tail pointing toward the speaker
  let tailX = fromLeft ? (margin + 44) : (canvasWidth - margin - 44);
  noStroke();
  fill(fromLeft ? 'lightyellow' : 'honeydew');
  triangle(tailX - 7, by, tailX + 7, by, tailX, by - 10);
  stroke(fromLeft ? 'goldenrod' : 'seagreen');
  strokeWeight(1.5);
  line(tailX - 7, by, tailX, by - 10);
  line(tailX + 7, by, tailX, by - 10);

  noStroke();
  fill(fromLeft ? 'darkgoldenrod' : 'seagreen');
  textAlign(LEFT, TOP);
  textSize(11);
  text(speaker + ' says:', bx + 10, by + 6);
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13.5);
  text('"' + msg + '"', bx + 10, by + 22, bw - 20, bh - 26);
}

function drawOptions(sc) {
  cardRects = [];
  let opts = sc.nodes[curNode].options;
  let topY = 238;
  let availH = drawHeight - topY - 8;
  let gap = 7;
  let n = opts.length;
  let cardH = (availH - (n - 1) * gap) / n;
  cardH = Math.min(cardH, 46);

  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Tap the reply you want to try:', margin, topY - 18);

  for (let i = 0; i < n; i++) {
    let o = opts[i];
    let x = margin;
    let y = topY + i * (cardH + gap);
    let w = canvasWidth - margin * 2;
    let r = { x: x, y: y, w: w, h: cardH, opt: o };
    cardRects.push(r);
    let hover = pointInRect(mouseX, mouseY, r);
    stroke(hover ? 'navy' : 'steelblue');
    strokeWeight(hover ? 2.5 : 1.5);
    fill(hover ? 'lightcyan' : 'white');
    rect(x, y, w, cardH, 8);
    // skill-type pill on the left
    noStroke();
    fill('steelblue');
    let pillW = 118;
    rect(x + 6, y + 6, pillW, cardH - 12, 6);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(11);
    text(o.skill, x + 6, y + 6, pillW, cardH - 12);
    // example phrase
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(12);
    text('"' + o.phrase + '"', x + pillW + 16, y + 6, w - pillW - 26, cardH - 12);
  }
}

function drawResult(sc) {
  // Feedback box below the speech bubble, plus a Continue chip
  let ry = 238;
  let rw = canvasWidth - margin * 2;
  let rh = 118;
  let boxFill, boxStroke, header, body;

  if (outcome === 'stopped') {
    boxFill = 'honeydew'; boxStroke = 'seagreen';
    header = 'It worked. ' + sc.friend + ' backed off.';
    body = 'You used "' + lastChoice.skill + '." ' + sc.friend +
      ' listened and stopped pushing. Saying it calmly worked.';
  } else if (outcome === 'adult') {
    boxFill = 'aliceblue'; boxStroke = 'steelblue';
    header = 'Asking an adult always helps.';
    body = 'You chose to tell a trusted adult. A grown-up can help keep ' +
      'everyone safe. This is always a good, respectful choice.';
  } else {
    boxFill = 'cornsilk'; boxStroke = 'goldenrod';
    header = 'Still pushing. That is okay.';
    body = 'You used "' + lastChoice.skill + '." Sometimes one reply is not ' +
      'enough. You can repeat it, walk away, or tell a trusted adult.';
  }

  fill(boxFill);
  stroke(boxStroke);
  strokeWeight(1.5);
  rect(margin, ry, rw, rh, 8);
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(13);
  text(header, margin + 10, ry + 10, rw - 20, 24);
  textStyle(NORMAL);
  textSize(12);
  text(body, margin + 10, ry + 34, rw - 20, rh - 44);

  // Continue chip (content-region button, hit-tested in mousePressed)
  let cw = 150;
  let ch = 34;
  let cx = canvasWidth / 2 - cw / 2;
  let cy = ry + rh + 10;
  continueRect = { x: cx, y: cy, w: cw, h: ch };
  let hover = pointInRect(mouseX, mouseY, continueRect);
  stroke('seagreen');
  strokeWeight(2);
  fill(hover ? 'palegreen' : 'mediumseagreen');
  rect(cx, cy, cw, ch, 8);
  noStroke();
  fill(hover ? 'darkgreen' : 'white');
  textAlign(CENTER, CENTER);
  textSize(14);
  let label = (outcome === 'continued') ? 'What happens next  >' : 'See Recap  >';
  text(label, cx, cy, cw, ch);
}

function drawRecap(sc) {
  let ry = 60;
  let rw = canvasWidth - margin * 2;
  fill('honeydew');
  stroke('seagreen');
  strokeWeight(1.5);
  rect(margin, ry, rw, 330, 10);
  noStroke();

  fill('seagreen');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(18);
  text('Nice work!', canvasWidth / 2, ry + 14);
  textStyle(NORMAL);

  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text('You kept yourself safe in the "' + sc.title + '" scene.',
    margin + 14, ry + 46, rw - 28, 40);

  // list of scripts used
  fill('navy');
  textStyle(BOLD);
  textSize(13);
  text('Refusal scripts you used:', margin + 14, ry + 84);
  textStyle(NORMAL);
  fill('black');
  textSize(13);
  let ly = ry + 108;
  for (let i = 0; i < usedSkills.length; i++) {
    text('•  ' + usedSkills[i], margin + 24, ly, rw - 40, 22);
    ly += 24;
  }

  // affirming message
  fill('darkslategray');
  textSize(13);
  let msgY = ly + 10;
  text('Remember: any of these scripts works when you stay calm and repeat ' +
    'it if you need to. Walking away or telling a trusted adult are always ' +
    'good choices too. All of them are respectful.',
    margin + 14, msgY, rw - 28, 120);

  // Try again hint
  fill('slategray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Use the buttons below to start over or try a different scene.',
    margin + 14, ry + 300, rw - 28, 40);
}

// ---- Input -----------------------------------------------------------------
function mousePressed() {
  if (stage === 'prompt') {
    for (let r of cardRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        chooseOption(r.opt);
        return;
      }
    }
  } else if (stage === 'result') {
    if (continueRect && pointInRect(mouseX, mouseY, continueRect)) {
      continueFlow();
      return;
    }
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

// ---- Resize ----------------------------------------------------------------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
