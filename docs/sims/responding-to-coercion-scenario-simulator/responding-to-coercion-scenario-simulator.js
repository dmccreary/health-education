// Responding to Coercion Scenario Simulator - MicroSim (branching dialogue)
// CANVAS_HEIGHT: 620
// Grade 6-8, Apply (L3): students apply the five-strategy framework for
// responding to coercion by choosing a response at each stage of an unfolding
// scenario (friend, family, early-dating) and seeing a realistic, non-punitive
// consequence. Plain-text dialogue only. Tone: plainly sincere and supportive.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 560;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

// ---- layout constants (within drawHeight) ----
const TITLE_Y = 8;
const HEADER_Y = 38;
const CARD_Y = 62;
const CARD_H = 138;
const PROMPT_Y = 206;
const OPT_Y0 = 228;
const OPT_H = 60;
const OPT_GAP = 10;
const ENDING_CARD_H = 156;
const TRACK_Y = 466;

// ---- colors ----
const NAVY = '#1f2d5a';
const SLATE = '#26313f';
const CARD_FILL = '#eef4fb';
const CARD_STROKE = '#b8cfe0';
const POS_FILL = '#eaf7ef';
const POS_STROKE = '#2e7d5b';
const REF_FILL = '#fff7e6';
const REF_STROKE = '#c98a1e';

// ---- the five strategies (from the chapter "Responding To Coercion" list) ----
const STRATEGIES = [
  { id: 'name',    short: 'Name it' },
  { id: 'sayno',   short: 'Say no clearly' },
  { id: 'repeat',  short: 'Repeat boundary' },
  { id: 'leave',   short: 'Remove yourself' },
  { id: 'support', short: 'Trusted adult' }
];

function strategyShort(id) {
  for (let s of STRATEGIES) if (s.id === id) return s.short;
  return '';
}

// ---- scenario trees ----
// Node (branch): { label, text, options: [ { label, strategy, next } ] }
// Node (ending): { label, ending:true, tone:'positive'|'reflective', text, note }
let scenarios = [
  {
    key: 'friend',
    name: 'A Friend',
    who: 'Jordan, a friend',
    start: 'f0',
    nodes: {
      f0: {
        text: 'Jordan, a friend, texts you: "You studied for tomorrow’s math quiz, right? Just send me a photo of your notes. Come on — if you were really my friend, you’d help me out."',
        options: [
          { label: 'Think to yourself: "This is pressure, not a fair request."', strategy: 'name', next: 'f_named' },
          { label: '"No, I’m not sending my notes."', strategy: 'sayno', next: 'f_no' },
          { label: '"Ugh, fine — just this once."', strategy: null, next: 'f_gavein' }
        ]
      },
      f_named: {
        text: 'You recognize the "a real friend would" line for what it is: guilt meant to make saying no feel unfair. Jordan waits. "Well? You gonna send it or not?"',
        options: [
          { label: '"No. I’m not sharing my notes."', strategy: 'sayno', next: 'f_no' },
          { label: '"I’ve got to get to class. See you later." (walk away)', strategy: 'leave', next: 'f_left' }
        ]
      },
      f_no: {
        text: 'Jordan pushes again: "Seriously? It’s one photo. Why are you being so difficult about this?"',
        options: [
          { label: '"No. Same answer."', strategy: 'repeat', next: 'f_repeat' },
          { label: '"I’m not changing my mind. Catch you later." (leave)', strategy: 'leave', next: 'f_left' }
        ]
      },
      f_repeat: {
        ending: true, tone: 'positive',
        text: 'Jordan shrugs. "Fine, whatever." The subject drops. The next day you take the quiz having actually studied — and your friendship is still fine. A real friend gets over a no.'
      },
      f_left: {
        ending: true, tone: 'positive',
        text: 'You head to class. Later, Jordan texts: "sorry, that was kind of uncool of me." Stepping away ended the pressure without a fight. Leaving a conversation is a valid choice, not a failure to handle it.'
      },
      f_gavein: {
        ending: true, tone: 'reflective',
        text: 'You send the photo. "Thanks!" Jordan says, and the pushing stops — for now. But you’re left with an uneasy feeling.',
        note: 'Giving in can make pressure stop in the moment, yet it often invites more of it later. Which of the five strategies could you have used instead? Try a different path and practice one.'
      }
    }
  },
  {
    key: 'family',
    name: 'A Family Member',
    who: 'Alex, an older cousin',
    start: 'm0',
    nodes: {
      m0: {
        text: 'Your older cousin Alex is watching you tonight. "Some friends want me to drive over and hang out — you’ll come with. And don’t tell your mom, okay? Our secret. Don’t make it weird."',
        options: [
          { label: 'Think: "‘Our secret’ and ‘don’t make it weird’ are pressure — not a fair ask."', strategy: 'name', next: 'm_named' },
          { label: '"No. I don’t want to go, and I’m not keeping it secret."', strategy: 'sayno', next: 'm_no' },
          { label: '"Um... okay, I won’t say anything."', strategy: null, next: 'm_gavein' }
        ]
      },
      m_named: {
        text: 'You notice that "our secret" is there to keep you quiet. Alex is waiting for an answer.',
        options: [
          { label: '"No. I’m not comfortable with this."', strategy: 'sayno', next: 'm_no' },
          { label: '"I’m going to call my mom and ask."', strategy: 'support', next: 'm_adult' }
        ]
      },
      m_no: {
        text: '"Come on, don’t be a baby. It’s not a big deal — and now you’re going to get me in trouble."',
        options: [
          { label: '"I’ve said no. I’m staying home."', strategy: 'repeat', next: 'm_repeat' },
          { label: '"I’m calling my mom."', strategy: 'support', next: 'm_adult' }
        ]
      },
      m_repeat: {
        ending: true, tone: 'positive',
        text: 'Alex grumbles but drops it and stays in. Calmly restating your boundary — without apologizing for it — outlasted the pushing. You didn’t have to win an argument, just hold your ground.'
      },
      m_adult: {
        ending: true, tone: 'positive',
        text: 'You call your mom and tell her what’s happening. She thanks you and handles it with Alex. Telling a trusted adult isn’t tattling or a last resort — when someone keeps pushing a boundary, especially about safety, it is exactly the right move.'
      },
      m_gavein: {
        ending: true, tone: 'reflective',
        text: 'You agree to stay quiet. The evening passes and nothing obvious goes wrong — but you spend it anxious, pulled into keeping a secret you never chose.',
        note: 'Agreeing to a secret you’re uncomfortable with can leave you carrying someone else’s risk. Which strategy might have helped — and who is a trusted adult you could tell? Try a different path and practice one.'
      }
    }
  },
  {
    key: 'dating',
    name: 'Early Dating',
    who: 'Riley, someone you like',
    start: 'd0',
    nodes: {
      d0: {
        text: 'Riley, who you’ve been texting and really like, writes: "Send me a photo. If you actually liked me, you’d do it. Don’t you trust me?"',
        options: [
          { label: 'Think: "‘If you liked me you’d’ is pressure — trust isn’t proven by giving in."', strategy: 'name', next: 'd_named' },
          { label: '"No, I’m not comfortable sending that."', strategy: 'sayno', next: 'd_no' },
          { label: '"...okay, fine."', strategy: null, next: 'd_gavein' }
        ]
      },
      d_named: {
        text: 'You recognize that tying "liking someone" to doing what they want is manipulation, not affection. Riley is typing...',
        options: [
          { label: '"No. I like you — and I’m still not sending it."', strategy: 'sayno', next: 'd_no' },
          { label: '"I’m putting my phone down for tonight."', strategy: 'leave', next: 'd_left' }
        ]
      },
      d_no: {
        text: '"Wow. I thought you were different. Everyone else does it."',
        options: [
          { label: '"My answer is still no."', strategy: 'repeat', next: 'd_repeat' },
          { label: '"I’m going to talk to someone I trust about this."', strategy: 'support', next: 'd_adult' }
        ]
      },
      d_repeat: {
        ending: true, tone: 'positive',
        text: 'Riley goes quiet, then: "...ok. Sorry." Someone who respects you accepts your no. If they had kept pushing, that would tell you something important about how they treat you.'
      },
      d_left: {
        ending: true, tone: 'positive',
        text: 'You set your phone down. Pressure can’t reach you when you step away, and you don’t owe anyone an instant reply. How Riley acts later — respecting your space, or guilt-tripping you more — will tell you a lot.'
      },
      d_adult: {
        ending: true, tone: 'positive',
        text: 'You talk it through with a trusted adult, who reminds you that no one who respects you makes "proof" a condition of liking you. Bringing a trusted adult into relationship pressure is a strong, healthy move — never an overreaction.'
      },
      d_gavein: {
        ending: true, tone: 'reflective',
        text: 'You send it. "Knew you would," Riley replies. The uneasy feeling doesn’t go away — and once something is sent, you can’t control where it goes.',
        note: '"Proving" you like someone by giving in to pressure isn’t a fair deal — real liking doesn’t come with conditions. Which strategy could you try instead? Try a different path and practice one. And remember: telling a trusted adult is always okay.'
      }
    }
  }
];

// ---- state ----
let scenarioIndex = 0;
let currentId;
let trail = [];          // [ { fromId, optionIndex, strategy } ]
let optionRects = [];

let scenarioSelect, restartButton, tryButton;

function currentScenario() { return scenarios[scenarioIndex]; }
function currentNode() { return currentScenario().nodes[currentId]; }
function atEnding() { const n = currentNode(); return !!(n && n.ending); }
function isStartNode() { return currentId === currentScenario().start; }

function usedStrategies() {
  let set = {};
  for (let t of trail) if (t.strategy) set[t.strategy] = true;
  return set;
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  scenarioSelect = createSelect();
  scenarios.forEach((s, i) => scenarioSelect.option('Scenario ' + (i + 1) + ': ' + s.name));
  scenarioSelect.selected('Scenario 1: ' + scenarios[0].name);
  scenarioSelect.changed(onScenarioChange);

  restartButton = createButton('Restart Scenario');
  restartButton.mousePressed(restartScenario);

  tryButton = createButton('Try a Different Path');
  tryButton.mousePressed(tryDifferentPath);

  currentId = currentScenario().start;
  trail = [];

  positionControls();
  updateButtons();

  describe('A branching dialogue simulator for practicing responses to social ' +
    'pressure (coercion). A scenario card shows what another person says. Below it, ' +
    '2-3 response options each tagged with one of five strategies: name it, say no ' +
    'clearly, repeat the boundary, remove yourself, or seek a trusted adult. Clicking ' +
    'an option advances the story and shows a realistic, non-punitive outcome. A ' +
    'Strategies Used tracker records which strategies you drew on. Choose a scenario ' +
    '(friend, family, or early dating) and use Restart Scenario or Try a Different ' +
    'Path to explore other responses.', LABEL);
}

function positionControls() {
  scenarioSelect.position(margin, drawHeight + 16);
  restartButton.position(margin + 190, drawHeight + 16);
  tryButton.position(margin + 320, drawHeight + 16);
}

function updateButtons() {
  if (atEnding()) {
    tryButton.removeAttribute('disabled');
  } else {
    tryButton.attribute('disabled', '');
  }
}

function onScenarioChange() {
  const label = scenarioSelect.value();
  for (let i = 0; i < scenarios.length; i++) {
    if (('Scenario ' + (i + 1) + ': ' + scenarios[i].name) === label) {
      scenarioIndex = i;
      break;
    }
  }
  restartScenario();
}

function restartScenario() {
  currentId = currentScenario().start;
  trail = [];
  updateButtons();
}

function tryDifferentPath() {
  if (trail.length > 0) {
    const last = trail.pop();
    currentId = last.fromId;
  } else {
    currentId = currentScenario().start;
  }
  updateButtons();
}

function draw() {
  updateCanvasSize();
  if (width !== canvasWidth) resizeCanvas(canvasWidth, canvasHeight);

  // panels
  noStroke();
  fill('aliceblue');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  drawTitle();
  drawHeaderRow();

  if (atEnding()) {
    drawEnding();
    optionRects = [];
  } else {
    drawBranch();
  }

  drawTracker();
  drawDisclaimer();

  cursor(overAnyOption() ? HAND : ARROW);
}

function drawTitle() {
  noStroke();
  fill(NAVY);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(19);
  text('Responding to Coercion', canvasWidth / 2, TITLE_Y);
  textStyle(NORMAL);
}

function drawHeaderRow() {
  const sc = currentScenario();
  noStroke();
  fill('#3a4a63');
  textAlign(LEFT, CENTER);
  textSize(12.5);
  text('Scenario ' + (scenarioIndex + 1) + ' of 3  ·  ' + sc.name + '  ·  ' + sc.who,
    margin, HEADER_Y + 6);
  drawPathDots();
}

function drawPathDots() {
  const n = trail.length + 1;
  const dotY = HEADER_Y + 6;
  const d = 8, gap = 6;
  let totalW = n * d + (n - 1) * gap;
  let startX = canvasWidth - margin - totalW;
  for (let i = 0; i < n; i++) {
    const cx = startX + i * (d + gap) + d / 2;
    noStroke();
    if (i === n - 1 && atEnding()) fill(POS_STROKE);
    else fill(i === n - 1 ? '#3a4a63' : '#9db4cc');
    circle(cx, dotY, d);
  }
}

function drawBranch() {
  const node = currentNode();

  // dialogue card
  drawCard(CARD_Y, CARD_H, CARD_FILL, CARD_STROKE,
    isStartNode() ? 'THE SITUATION' : 'WHAT HAPPENS NEXT', node.text, SLATE, '#5b6b82');

  // prompt
  noStroke();
  fill('#3a4a63');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(13.5);
  text('How do you respond?', margin, PROMPT_Y);
  textStyle(NORMAL);

  // options
  optionRects = [];
  const cardW = canvasWidth - 2 * margin;
  let oy = OPT_Y0;
  for (let i = 0; i < node.options.length; i++) {
    const opt = node.options[i];
    const r = { x: margin, y: oy, w: cardW, h: OPT_H, i: i };
    optionRects.push(r);
    drawOption(r, opt);
    oy += OPT_H + OPT_GAP;
  }
}

function drawOption(r, opt) {
  const hover = pointInRect(mouseX, mouseY, r);
  stroke(hover ? NAVY : '#9db4cc');
  strokeWeight(hover ? 2 : 1.3);
  fill(hover ? '#fffdf2' : 'white');
  rect(r.x, r.y, r.w, r.h, 8);

  // strategy badge (right). The "give in" option has no strategy and no badge.
  let textW = r.w - 24;
  if (opt.strategy) {
    const badge = strategyShort(opt.strategy);
    textSize(11.5);
    const bw = textWidth(badge) + 16;
    const bx = r.x + r.w - bw - 10;
    const by = r.y + r.h / 2 - 10;
    noStroke();
    fill('#e6ecfa');
    rect(bx, by, bw, 20, 10);
    fill(NAVY);
    textAlign(CENTER, CENTER);
    text(badge, bx + bw / 2, by + 10);
    textW = bx - r.x - 22;
  }

  noStroke();
  fill(SLATE);
  textAlign(LEFT, CENTER);
  textSize(13.5);
  text(opt.label, r.x + 12, r.y + r.h / 2, textW, r.h - 12);
}

function drawEnding() {
  const node = currentNode();
  const isPos = node.tone === 'positive';
  const fillC = isPos ? POS_FILL : REF_FILL;
  const strokeC = isPos ? POS_STROKE : REF_STROKE;

  drawCard(CARD_Y, ENDING_CARD_H, fillC, strokeC, 'HOW IT PLAYS OUT', node.text, SLATE, strokeC);

  const boxY = CARD_Y + ENDING_CARD_H + 12;
  if (node.tone === 'reflective') {
    drawInfobox(boxY, 'A moment to reflect', node.note, REF_STROKE, '#fffaf0');
  } else {
    drawInfobox(boxY, 'A healthy outcome',
      'You handled the pressure using a strategy — not by giving in. See which of the five strategies you used below. Using more than one together is often most effective.',
      POS_STROKE, '#f1faf4');
  }

  // navigation hint
  noStroke();
  fill('#6b7688');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Use "Try a Different Path" to return to your last choice, or "Restart Scenario" to begin again. You can also switch scenarios below.',
    margin, boxY + 118, canvasWidth - 2 * margin, 40);
}

// generic titled card with a small label and wrapped body text
function drawCard(y, h, fillC, strokeC, label, bodyText, bodyColor, labelColor) {
  const x = margin, w = canvasWidth - 2 * margin;
  fill(fillC);
  stroke(strokeC);
  strokeWeight(1.4);
  rect(x, y, w, h, 8);
  noStroke();
  fill(labelColor);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(10.5);
  text(label, x + 14, y + 10);
  textStyle(NORMAL);
  fill(bodyColor);
  textSize(14.5);
  text(bodyText, x + 14, y + 28, w - 28, h - 38);
}

// left-border infobox (shared style)
function drawInfobox(y, title, body, accent, fillC) {
  const x = margin, w = canvasWidth - 2 * margin, h = 98;
  fill(fillC);
  stroke(accent);
  strokeWeight(1);
  rect(x, y, w, h, 4);
  noStroke();
  // accent left bar
  fill(accent);
  rect(x, y, 4, h, 4, 0, 0, 4);
  fill(accent);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(12.5);
  text(title, x + 14, y + 9);
  textStyle(NORMAL);
  fill('#3a4657');
  textSize(12.5);
  text(body, x + 14, y + 28, w - 26, h - 34);
}

function drawTracker() {
  const used = usedStrategies();
  const x0 = margin;
  noStroke();
  fill('#3a4a63');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(12.5);
  const usedCount = Object.keys(used).length;
  text('Strategies Used  (' + usedCount + ' / 5)', x0, TRACK_Y);
  textStyle(NORMAL);

  let cx = x0;
  let cy = TRACK_Y + 20;
  textSize(11.5);
  for (let s of STRATEGIES) {
    const on = !!used[s.id];
    const label = (on ? '✓ ' : '') + s.short;
    const w = textWidth(label) + 18;
    if (cx + w > canvasWidth - margin) { cx = x0; cy += 26; }
    if (on) {
      noStroke();
      fill(NAVY);
      rect(cx, cy, w, 20, 10);
      fill('white');
    } else {
      stroke('#c3cede');
      strokeWeight(1);
      fill('white');
      rect(cx, cy, w, 20, 10);
      noStroke();
      fill('#8a97a8');
    }
    textAlign(CENTER, CENTER);
    text(label, cx + w / 2, cy + 10);
    cx += w + 8;
  }
}

function drawDisclaimer() {
  noStroke();
  fill('#8a97a8');
  textAlign(CENTER, BOTTOM);
  textSize(10.5);
  text('Practice scenarios for learning. If someone keeps pressuring you, telling a trusted adult is always a valid choice.',
    canvasWidth / 2, drawHeight - 6, canvasWidth - 2 * margin, 24);
}

function overAnyOption() {
  for (let r of optionRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (atEnding()) return;
  const node = currentNode();
  for (let r of optionRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      const opt = node.options[r.i];
      trail.push({ fromId: currentId, optionIndex: r.i, strategy: opt.strategy });
      currentId = opt.next;
      updateButtons();
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
