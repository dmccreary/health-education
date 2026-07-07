// Spot the Empathetic Response - MicroSim (choose the most caring reply to a friend)
// CANVAS_HEIGHT: 512
// Grade 3, Apply (L3): a friend says something; students pick the most empathetic
// reply from three options and read one-sentence feedback explaining why.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Each scenario: what the friend says, and three replies.
// correct: index of the most empathetic reply. why: one-sentence explanation.
let scenarios = [
  {
    friend: "I didn't make the team.",
    replies: [
      "That's really disappointing. Do you want to talk about it?",
      "Oh well, teams aren't a big deal anyway.",
      "I made my team, so I'm going to practice now."
    ],
    correct: 0,
    why: "It names your friend's feeling and offers to listen, which shows you care."
  },
  {
    friend: "I got a new puppy!",
    replies: [
      "My dog is way cuter than any puppy.",
      "That's so exciting! What is your puppy like?",
      "Puppies chew everything, you know."
    ],
    correct: 1,
    why: "Empathy also means sharing a friend's happiness and wanting to hear more."
  },
  {
    friend: "I'm nervous about the test.",
    replies: [
      "You'll be fine, stop worrying about it.",
      "I'm not nervous. I always do great on tests.",
      "Feeling nervous makes sense. Want to study together?"
    ],
    correct: 2,
    why: "It accepts the worried feeling and offers help instead of brushing it aside."
  },
  {
    friend: "My best friend is moving away.",
    replies: [
      "People move all the time, it's normal.",
      "That sounds really hard. I'm here if you're sad.",
      "At least you still have me to hang out with."
    ],
    correct: 1,
    why: "It shows you understand the sadness and stay close while your friend feels it."
  },
  {
    friend: "I lost my favorite bracelet.",
    replies: [
      "You should have been more careful with it.",
      "I never lose my things.",
      "I'm sorry, that stinks. Want help looking for it?"
    ],
    correct: 2,
    why: "It shares your friend's disappointment and offers to help fix the problem."
  }
];

let idx = 0;
let picked = -1;       // which reply the student clicked (-1 = none yet)
let solved = {};       // scenarios where the empathetic reply has been found
let replyRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));
  positionControls();
  describe('A friend makes a statement in a speech bubble. Students choose the most ' +
    'empathetic reply from three options. After choosing, feedback tells whether it was ' +
    'the most caring choice and explains why. Next Scenario and Reset buttons are provided.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 140, drawHeight + 12);
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
  textSize(22);
  text('Spot the Empathetic Response', canvasWidth / 2, 8);

  let sc = scenarios[idx];
  let innerW = canvasWidth - margin * 2;

  // Scenario counter
  noStroke();
  fill('steelblue');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Your friend says   (' + (idx + 1) + ' of ' + scenarios.length + ')', canvasWidth / 2, 38);

  // Speech-bubble card with the friend's statement
  let by = 58, bh = 74;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(2);
  rect(margin, by, innerW, bh, 14);
  // little speech-bubble tail
  noStroke();
  fill('lightyellow');
  triangle(margin + 34, by + bh - 1, margin + 54, by + bh - 1, margin + 30, by + bh + 14);
  stroke('goldenrod');
  strokeWeight(2);
  line(margin + 34, by + bh, margin + 30, by + bh + 14);
  line(margin + 54, by + bh, margin + 30, by + bh + 14);
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(19);
  text('"' + sc.friend + '"', margin + 12, by, innerW - 24, bh);

  // Prompt above the choices
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Which reply shows the most empathy? Tap one.', canvasWidth / 2, by + bh + 20);

  // Reply choice cards
  replyRects = [];
  let ry0 = by + bh + 42;
  let rh = 54, gap = 9;
  for (let i = 0; i < sc.replies.length; i++) {
    let y = ry0 + i * (rh + gap);
    let r = { x: margin, y: y, w: innerW, h: rh, i: i };
    replyRects.push(r);
    let hover = picked < 0 && pointInRect(mouseX, mouseY, r);
    let isPicked = picked === i;
    let isRight = i === sc.correct;

    // colors: after a pick, correct -> green, chosen-wrong -> red, others -> dim
    let fillCol = 'white';
    let strokeCol = 'mediumpurple';
    let sw = 1.5;
    if (picked >= 0) {
      if (isRight) { fillCol = 'honeydew'; strokeCol = 'seagreen'; sw = 3; }
      else if (isPicked) { fillCol = 'mistyrose'; strokeCol = 'indianred'; sw = 3; }
      else { fillCol = 'whitesmoke'; strokeCol = 'lightgray'; sw = 1.5; }
    } else if (hover) {
      fillCol = 'lavender';
    }
    stroke(strokeCol);
    strokeWeight(sw);
    fill(fillCol);
    rect(r.x, r.y, r.w, r.h, 8);

    // check / x badge after a pick
    if (picked >= 0 && (isRight || isPicked)) {
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(isRight ? 'seagreen' : 'indianred');
      text(isRight ? '✓' : '✗', r.x + r.w - 20, r.y + r.h / 2);
    }

    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(15);
    let textRight = (picked >= 0 && (isRight || isPicked)) ? 40 : 20;
    text('"' + sc.replies[i] + '"', r.x + 12, r.y, r.w - 12 - textRight, r.h);
  }
  cursor(picked < 0 && overAnyReply() ? HAND : ARROW);

  // Feedback panel
  let fy = ry0 + sc.replies.length * (rh + gap) + 4;
  let fh = drawHeight - fy - 8;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  if (picked < 0) {
    fill('dimgray');
    text('Read what your friend says, then tap the kindest reply.',
      margin, fy, innerW, fh);
  } else if (picked === sc.correct) {
    fill('seagreen');
    text('Yes! Most empathetic. ' + sc.why, margin, fy, innerW, fh);
  } else {
    fill('indianred');
    text('Not the most caring reply. The green one is best: ' +
      lowerFirst(sc.why), margin, fy, innerW, fh);
  }
}

function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function overAnyReply() {
  for (let r of replyRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked >= 0) return; // lock in the first choice until Next/Reset
  for (let r of replyRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      picked = r.i;
      if (r.i === scenarios[idx].correct) solved[idx] = true;
      return;
    }
  }
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
}

function resetAll() {
  idx = 0;
  picked = -1;
  solved = {};
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
