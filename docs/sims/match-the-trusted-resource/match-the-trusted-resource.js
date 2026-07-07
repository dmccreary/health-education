// Match the Trusted Resource - MicroSim (choose & justify the right helper)
// CANVAS_HEIGHT: 512
// Grade 5, Evaluate (L5): students weigh four trusted resources for a health
// situation, pick the best fit, and read why that choice fits best.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Four resources; index used as the option id.
let resources = ['School Nurse', 'Counselor', 'Parent/Guardian', 'Teacher'];

// best: index of best-fit resource. good: array of reasonable second-best ids.
// why: keyed by resource id -> explanation shown after that pick.
let scenarios = [
  {
    tag: 'Physical health',
    text: "You've had a stomachache for three days and it keeps getting worse.",
    best: 0,
    good: [2],
    why: {
      0: 'Right call. A school nurse can check your symptoms and help contact a parent or doctor if you need more care.',
      1: 'A counselor helps with feelings, not body symptoms. For pain that keeps getting worse, start with the school nurse.',
      2: 'Reasonable. A parent or guardian should know, and can take you to a doctor. At school, the nurse can also assess it right away.',
      3: 'A teacher can send you to the nurse, but the school nurse is the one trained to check symptoms like this.'
    }
  },
  {
    tag: 'Emotional health',
    text: "You've felt sad and worried most days for the past two weeks and don't know why.",
    best: 1,
    good: [2],
    why: {
      0: 'The nurse can help, but ongoing sad or worried feelings are best matched to the school counselor.',
      1: 'Right call. A counselor is trained to help you talk through feelings that last a long time and make a plan.',
      2: 'Reasonable. A trusted parent or guardian should know how you feel. A counselor can also give extra support at school.',
      3: 'A teacher may notice something is wrong, but a counselor is the best fit for feelings that last for weeks.'
    }
  },
  {
    tag: 'Friend safety',
    text: 'A friend tells you they have been thinking about hurting themselves.',
    best: 1,
    good: [3],
    why: {
      0: 'This needs a helper trained for safety and feelings. Tell a counselor right away.',
      1: 'Right call. Tell a counselor now. A friend in this much pain needs a trained adult, and telling is the caring choice.',
      2: 'A parent can help, but at school the fastest trained helper is the counselor. Tell one right away.',
      3: 'Reasonable. Any trusted adult, like a teacher, can get help fast. A counselor is trained for exactly this.'
    }
  },
  {
    tag: 'Academic safety',
    text: 'Someone keeps sending you mean messages online and it is making school hard.',
    best: 3,
    good: [1, 2],
    why: {
      0: 'The nurse is not the best fit here. A teacher can act on what happens at school and stop it.',
      1: 'Reasonable. A counselor can help you cope. A teacher can also step in to stop the messages at school.',
      2: 'Reasonable. A parent or guardian should know. A teacher can act quickly on what is happening at school.',
      3: 'Right call. A teacher can step in, keep records, and involve other adults to stop the messages.'
    }
  },
  {
    tag: 'Physical health',
    text: 'You got a deep cut on the playground and it will not stop bleeding.',
    best: 0,
    good: [3],
    why: {
      0: 'Right call. A school nurse can treat the cut and decide if you need more care.',
      1: 'A counselor helps with feelings, not injuries. For a cut that keeps bleeding, get the nurse.',
      2: 'A parent should be told, but they are not at school. Get the nurse first for a bleeding cut.',
      3: 'Reasonable. Tell a teacher, who will send you straight to the nurse for treatment.'
    }
  },
  {
    tag: 'Family stress',
    text: 'Your parents argue a lot lately and it is hard to focus on schoolwork.',
    best: 1,
    good: [3],
    why: {
      0: 'The nurse is not the match here. A counselor can help you handle stress at home.',
      1: 'Right call. A counselor helps you cope with stress at home and stay focused at school.',
      2: 'This is about your parents, so another trusted adult at school fits better. A counselor is a good first step.',
      3: 'Reasonable. A trusted teacher can listen and connect you to the counselor for more support.'
    }
  },
  {
    tag: 'Academic help',
    text: 'You keep falling behind in math and feel embarrassed to admit it.',
    best: 3,
    good: [1],
    why: {
      0: 'The nurse is not the fit for schoolwork. A teacher can help you catch up in math.',
      1: 'Reasonable. A counselor can help with the worry. Your teacher is the best fit to help with the math itself.',
      2: 'A parent can encourage you, but your teacher is the one who can help you learn the math.',
      3: 'Right call. A teacher can find the gaps and help you catch up. Asking is a strong, healthy choice.'
    }
  },
  {
    tag: 'Personal safety',
    text: 'An older person you know keeps asking to keep a secret that makes you uncomfortable.',
    best: 2,
    good: [1, 3],
    why: {
      0: 'The nurse is not the best match. A trusted parent or guardian should know about this.',
      1: 'Reasonable. A counselor can help. A parent or guardian should also know, because this is about your safety.',
      2: 'Right call. A safe secret is one you can share. Tell a trusted parent or guardian who can keep you safe.',
      3: 'Reasonable. Any trusted adult, like a teacher, can help. Make sure a parent or guardian knows too.'
    }
  }
];

let idx = 0;
let picked = -1;          // resource id the student chose
let showWhy = false;      // reveal the "Why?" panel
let optRects = [];
let whyBtn = null;        // the on-canvas "Why?" hotspot

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Situation');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));
  positionControls();
  describe('A health situation card with four trusted resources: School Nurse, ' +
    'Counselor, Parent or Guardian, and Teacher. Students pick the best-fit ' +
    'helper, then reveal Why to see if it fits best and read the reasoning. ' +
    'Next Situation cycles through eight situations.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 14);
  resetButton.position(150, drawHeight + 14);
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
  textSize(21);
  text('Match the Trusted Resource', canvasWidth / 2, 8);

  let s = scenarios[idx];
  let innerW = canvasWidth - margin * 2;

  // Scenario card
  let cy = 38, ch = 96;
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, cy, innerW, ch, 10);
  noStroke();
  fill('teal'); textAlign(LEFT, TOP); textSize(12);
  text('Situation ' + (idx + 1) + ' of ' + scenarios.length + '  •  ' + s.tag,
       margin + 12, cy + 9);
  fill('black'); textSize(16);
  text(s.text, margin + 12, cy + 30, innerW - 24, ch - 38);

  // Prompt
  fill('dimgray'); textAlign(LEFT, TOP); textSize(13);
  text('Who is the best fit to help? Tap one, then reveal Why.',
       margin, cy + ch + 8, innerW, 20);

  // Four resource options in a 2x2 grid
  optRects = [];
  let gx = 8, gy = 8;
  let colW = (innerW - gx) / 2;
  let optH = 46;
  let oy0 = cy + ch + 30;
  for (let i = 0; i < resources.length; i++) {
    let col = i % 2;
    let row = Math.floor(i / 2);
    let x = margin + col * (colW + gx);
    let y = oy0 + row * (optH + gy);
    let r = { x: x, y: y, w: colW, h: optH, i: i };
    optRects.push(r);

    let hover = picked < 0 && pointInRect(mouseX, mouseY, r);
    let sel = picked === i;
    let isBest = i === s.best;
    let isGood = s.good.indexOf(i) !== -1;

    strokeWeight(sel ? 3 : 1.5);
    if (showWhy && sel) {
      stroke(isBest ? 'seagreen' : (isGood ? 'goldenrod' : 'indianred'));
    } else {
      stroke(sel ? 'steelblue' : 'mediumpurple');
    }
    if (showWhy && sel) {
      fill(isBest ? 'honeydew' : (isGood ? 'lightyellow' : 'mistyrose'));
    } else {
      fill(sel ? 'lightsteelblue' : (hover ? 'lavender' : 'white'));
    }
    rect(x, y, colW, optH, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(15);
    text(resources[i], x + 4, y, colW - 8, optH);
  }

  // Why? button hotspot (on-canvas), enabled only after a pick
  let by = oy0 + 2 * (optH + gy) + 8;
  let bw = 150, bh = 34;
  let bx = margin;
  whyBtn = { x: bx, y: by, w: bw, h: bh };
  let whyEnabled = picked >= 0 && !showWhy;
  let whyHover = whyEnabled && pointInRect(mouseX, mouseY, whyBtn);
  strokeWeight(1.5);
  stroke(whyEnabled ? 'goldenrod' : 'silver');
  fill(whyEnabled ? (whyHover ? 'gold' : 'lightgoldenrodyellow') : 'whitesmoke');
  rect(bx, by, bw, bh, 8);
  noStroke();
  fill(whyEnabled ? 'saddlebrown' : 'darkgray');
  textAlign(CENTER, CENTER);
  textSize(15);
  text('Why?', bx + bw / 2, by + bh / 2);

  // cursor feedback
  let overClickable = (picked < 0 && overAnyOption()) || whyHover;
  cursor(overClickable ? HAND : ARROW);

  // Why / feedback panel
  let py = by + bh + 10;
  let ph = drawHeight - py - 10;
  if (showWhy && picked >= 0) {
    let isBest = picked === s.best;
    let isGood = s.good.indexOf(picked) !== -1;
    let head, headCol, panelBg, panelStroke;
    if (isBest) {
      head = 'Best fit!'; headCol = 'seagreen';
      panelBg = 'honeydew'; panelStroke = 'seagreen';
    } else if (isGood) {
      head = 'Good thinking'; headCol = 'darkgoldenrod';
      panelBg = 'lightyellow'; panelStroke = 'goldenrod';
    } else {
      head = 'Try another helper'; headCol = 'indianred';
      panelBg = 'mistyrose'; panelStroke = 'indianred';
    }
    stroke(panelStroke); strokeWeight(1.5); fill(panelBg);
    rect(margin, py, innerW, ph, 10);
    noStroke();
    textAlign(LEFT, TOP);
    fill(headCol); textSize(15);
    text(head, margin + 12, py + 9);
    fill('black'); textSize(14);
    text(s.why[picked], margin + 12, py + 30, innerW - 24, ph - 40);
  } else {
    stroke('gainsboro'); strokeWeight(1.5); fill('white');
    rect(margin, py, innerW, ph, 10);
    noStroke();
    fill('gray'); textAlign(CENTER, CENTER); textSize(13);
    let hint = picked < 0
      ? 'Pick the helper you think fits best.'
      : 'Now tap "Why?" to see if it fits best.';
    text(hint, margin + 12, py, innerW - 24, ph);
  }
}

function overAnyOption() {
  for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // Why? hotspot first
  if (whyBtn && picked >= 0 && !showWhy && pointInRect(mouseX, mouseY, whyBtn)) {
    showWhy = true;
    return;
  }
  // Resource options (only selectable before revealing Why)
  if (!showWhy) {
    for (let r of optRects) {
      if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
    }
  }
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
  showWhy = false;
}
function resetAll() {
  idx = 0; picked = -1; showWhy = false;
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
