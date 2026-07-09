// CANVAS_HEIGHT: 630
// Health Message Campaign Builder - MicroSim (four-stage capstone builder)
// Grade 9-12, Create (L6): formulate a fact-based health message, justify it with
// evidence, tailor it to an audience/channel, and evaluate its likely effectiveness.
// Tone is plainly sincere: issues include vaping prevention and consent.
// All stages start blank to require original composition.

// ---------- layout ----------
let containerWidth;
let canvasWidth = 820;
let drawHeight = 578;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let lastLayoutWidth = -1;

// Shared vertical coordinates used by BOTH draw() and layoutControls() so the
// canvas labels and the DOM controls always line up.
const LY = {
  headY: 96,
  instrY: 120,
  // Formulate
  f_issueLabel: 158, f_issueCtrl: 178,
  f_msgLabel: 226, f_msgCtrl: 248,
  f_tip: 300,
  // Justify
  j_colHead: 156, j_cardsTop: 180, j_cardH: 50, j_cardGap: 8,
  j_explainLabel: 476, j_explainCtrl: 498, j_status: 540,
  // Tailor
  t_audLabel: 158, t_audCtrl: 178,
  t_guide: 216,
  t_msgLabel: 372, t_msgCtrl: 394,
  t_chanLabel: 438, t_chanCtrl: 458,
  // Evaluate
  e_rowsTop: 160, e_rowH: 60,
  e_total: 466,
  e_notesLabel: 490, e_notesCtrl: 512
};

// ---------- state ----------
let stage = 0;                 // 0=Formulate 1=Justify 2=Tailor 3=Evaluate
let showSummary = false;
const stageNames = ['Formulate', 'Justify', 'Tailor', 'Evaluate'];

const PLACEHOLDER_AUD = 'Select an audience…';
const PLACEHOLDER_CHAN = 'Select a channel…';
const DEFAULT_ISSUE = 'Vaping prevention';

// ---------- content data ----------
// Illustrative, qualitative facts for learning. They never describe how to obtain,
// use, dose, or conceal any substance.
const issues = {
  'Vaping prevention': [
    'Most e-cigarettes deliver nicotine, which is highly addictive.',
    'The brain keeps developing into the mid-20s, so nicotine can affect attention, learning, and mood.',
    'Nicotine exposure during adolescence is linked to a higher risk of future addiction.',
    'Many teens underestimate how much nicotine vaping products contain.',
    'Vaping aerosol is not harmless water vapor and can contain harmful chemicals.'
  ],
  'Mental health stigma reduction': [
    'Mental health conditions are common among teens and are treatable.',
    'Fear of judgment is a major reason people delay seeking help.',
    'Talking openly about mental health makes peers more likely to seek support.',
    'Asking for help is a sign of strength, not weakness.',
    'Getting support early tends to improve outcomes.'
  ],
  'Hydration & sugary-drink choices': [
    'Water is the body’s best everyday source of hydration.',
    'Sugary drinks are a leading source of added sugar in teen diets.',
    'Regular sugary-drink intake is linked to higher risk of tooth decay.',
    'Thirst is often mistaken for hunger, so reaching for water first can help.',
    'Many “energy” and sports drinks contain added sugar and caffeine.'
  ],
  'Consent & healthy relationships': [
    'Consent must be freely given, and it can be withdrawn at any time.',
    'Consent to one thing is not consent to everything.',
    'Healthy relationships are built on respect, honesty, and clear communication.',
    'Pressure, guilt, or coercion mean consent is not freely given.',
    'A person who is asleep or incapacitated cannot give consent.'
  ]
};
const issueList = Object.keys(issues);

const audienceGuidance = {
  'Younger students': {
    priority: 'Concrete, immediate relevance.',
    tone: 'Simple, encouraging language; do not frighten.',
    channels: 'Best channels: a hallway poster or a short video, ideally from a near-peer messenger.'
  },
  'Peers (same age)': {
    priority: 'Credibility and a non-preachy tone.',
    tone: 'Honest and respectful; avoid lecturing.',
    channels: 'Best channels: a social-post style message or real, relatable stories.'
  },
  'Parents / caregivers': {
    priority: 'Practical guidance for supporting a teen.',
    tone: 'Informative and supportive.',
    channels: 'Best channels: a handout or a presentation with talking points and warning signs.'
  },
  'School board / policymakers': {
    priority: 'Data, local relevance, and cost vs. benefit.',
    tone: 'Formal and evidence-first.',
    channels: 'Best channels: a presentation with citations, local statistics, and a clear ask.'
  }
};
const audienceList = Object.keys(audienceGuidance);
const channelList = ['Poster', 'Social post', 'Short video script', 'Presentation'];

const criteria = [
  { name: 'Clarity', desc: 'Could the audience restate the core message accurately?' },
  { name: 'Evidence strength', desc: 'Do the facts hold up to source-checking?' },
  { name: 'Audience fit', desc: 'Do tone, vocabulary, and channel match the audience?' },
  { name: 'Call to action', desc: 'Is there something specific the audience can do?' },
  { name: 'Believability', desc: 'Would this audience find it credible, not preachy?' }
];

// current issue's evidence cards + selection order (indices into evidenceCards)
let evidenceCards = [];
let selectedOrder = [];

// hit regions rebuilt each frame
let bankRects = [];
let selectedRects = [];
let progRects = [];

// ---------- DOM controls ----------
let issueSelect, messageInput;
let explainInput;
let audienceSelect, reviseInput, channelSelect;
let sliders = [];
let notesInput;
let backButton, nextButton, generateButton, editButton, restartButton;

// ============================================================
function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial, Helvetica, sans-serif');

  // Stage 1 - Formulate
  issueSelect = createSelect();
  for (const iss of issueList) issueSelect.option(iss);
  issueSelect.selected(DEFAULT_ISSUE);
  issueSelect.changed(onIssueChange);
  styleSelect(issueSelect);

  messageInput = createInput('');
  messageInput.attribute('placeholder', 'Type one clear, specific sentence (name a fact and one action)…');
  styleInput(messageInput);

  // Stage 2 - Justify
  explainInput = createInput('');
  explainInput.attribute('placeholder', 'Explain how your chosen evidence supports the message…');
  styleInput(explainInput);

  // Stage 3 - Tailor
  audienceSelect = createSelect();
  audienceSelect.option(PLACEHOLDER_AUD);
  for (const a of audienceList) audienceSelect.option(a);
  audienceSelect.selected(PLACEHOLDER_AUD);
  styleSelect(audienceSelect);

  reviseInput = createInput('');
  reviseInput.attribute('placeholder', 'Revise the message so it fits this audience…');
  styleInput(reviseInput);

  channelSelect = createSelect();
  channelSelect.option(PLACEHOLDER_CHAN);
  for (const c of channelList) channelSelect.option(c);
  channelSelect.selected(PLACEHOLDER_CHAN);
  styleSelect(channelSelect);

  // Stage 4 - Evaluate
  sliders = [];
  for (let i = 0; i < criteria.length; i++) {
    const s = createSlider(0, 4, 0, 1); // 0 = not yet rated
    s.style('width', '170px');
    sliders.push(s);
  }
  notesInput = createInput('');
  notesInput.attribute('placeholder', 'What would you revise next, and why?');
  styleInput(notesInput);

  // Navigation
  backButton = createButton('‹ Back');
  backButton.mousePressed(goBack);
  stylePill(backButton, false);

  nextButton = createButton('Next ›');
  nextButton.mousePressed(goNext);
  stylePill(nextButton, false);

  generateButton = createButton('Generate my campaign summary');
  generateButton.mousePressed(generateSummary);
  stylePill(generateButton, true);

  editButton = createButton('‹ Back to edit');
  editButton.mousePressed(function () { showSummary = false; stage = 3; updateControlVisibility(); });
  stylePill(editButton, false);

  restartButton = createButton('Start over');
  restartButton.mousePressed(resetAll);
  stylePill(restartButton, false);

  onIssueChange();      // build evidence cards for the default issue
  layoutControls();
  updateControlVisibility();

  describe('An interactive four-stage builder for designing a fact-based health message. ' +
    'Stage 1 Formulate: choose a health issue and draft a one-sentence message. ' +
    'Stage 2 Justify: choose at least two evidence cards and explain how they support the message. ' +
    'Stage 3 Tailor: choose an audience and channel and revise the message for them. ' +
    'Stage 4 Evaluate: rate the message on five criteria and note revisions. ' +
    'Completing all four stages unlocks a compiled campaign summary.', LABEL);
}

// ---------- control styling ----------
function styleInput(inp) {
  inp.style('font-size', '13px');
  inp.style('padding', '5px 8px');
  inp.style('border', '1px solid #94a3b8');
  inp.style('border-radius', '5px');
  inp.style('font-family', 'Arial, Helvetica, sans-serif');
  inp.style('box-sizing', 'border-box');
  inp.style('background', 'white');
}
function styleSelect(sel) {
  sel.style('font-size', '13px');
  sel.style('padding', '4px 6px');
  sel.style('border', '1px solid #94a3b8');
  sel.style('border-radius', '5px');
  sel.style('font-family', 'Arial, Helvetica, sans-serif');
  sel.style('background', 'white');
}
function stylePill(b, primary) {
  b.style('font-size', '13px');
  b.style('padding', '6px 14px');
  b.style('border-radius', '14px');
  b.style('font-family', 'Arial, Helvetica, sans-serif');
  b.style('cursor', 'pointer');
  if (primary) {
    b.style('border', '1px solid navy');
    b.style('background', 'navy');
    b.style('color', 'white');
  } else {
    b.style('border', '1px solid silver');
    b.style('background', '#f1f5f9');
    b.style('color', '#334155');
  }
}

// ---------- layout of DOM controls ----------
function layoutControls() {
  const fullW = canvasWidth - 2 * margin;

  // Formulate
  issueSelect.position(margin, LY.f_issueCtrl);
  issueSelect.style('width', Math.min(340, fullW) + 'px');
  messageInput.position(margin, LY.f_msgCtrl);
  messageInput.style('width', fullW + 'px');

  // Justify
  explainInput.position(margin, LY.j_explainCtrl);
  explainInput.style('width', fullW + 'px');

  // Tailor
  audienceSelect.position(margin, LY.t_audCtrl);
  audienceSelect.style('width', Math.min(300, fullW) + 'px');
  reviseInput.position(margin, LY.t_msgCtrl);
  reviseInput.style('width', fullW + 'px');
  channelSelect.position(margin, LY.t_chanCtrl);
  channelSelect.style('width', Math.min(300, fullW) + 'px');

  // Evaluate
  const sliderX = Math.min(canvasWidth * 0.56, canvasWidth - margin - 210);
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].position(sliderX, LY.e_rowsTop + i * LY.e_rowH + 8);
  }
  notesInput.position(margin, LY.e_notesCtrl);
  notesInput.style('width', fullW + 'px');

  // Navigation strip
  const navY = drawHeight + 12;
  backButton.position(margin, navY);
  nextButton.position(margin + 84, navY);
  generateButton.position(Math.max(margin + 180, canvasWidth - margin - 250), navY);
  editButton.position(margin, navY);
  restartButton.position(margin + 122, navY);

  lastLayoutWidth = canvasWidth;
}

function updateControlVisibility() {
  // hide everything, then show what this view needs
  const all = [issueSelect, messageInput, explainInput, audienceSelect, reviseInput,
    channelSelect, notesInput, backButton, nextButton, generateButton,
    editButton, restartButton];
  for (const c of all) c.hide();
  for (const s of sliders) s.hide();

  if (showSummary) {
    editButton.show();
    restartButton.show();
    return;
  }

  // stage-specific
  if (stage === 0) { issueSelect.show(); messageInput.show(); }
  else if (stage === 1) { explainInput.show(); }
  else if (stage === 2) { audienceSelect.show(); reviseInput.show(); channelSelect.show(); }
  else if (stage === 3) { for (const s of sliders) s.show(); notesInput.show(); }

  // navigation
  if (stage > 0) backButton.show();
  if (stage < 3) nextButton.show();
  if (stage === 3) generateButton.show();
}

// ---------- issue / navigation handlers ----------
function onIssueChange() {
  const iss = issueSelect.value();
  evidenceCards = issues[iss].map(function (t) { return { text: t }; });
  selectedOrder = [];
}
function goNext() {
  if (stage < 3) { stage++; updateControlVisibility(); }
}
function goBack() {
  if (stage > 0) { stage--; updateControlVisibility(); }
}
function generateSummary() {
  if (!allComplete()) return;
  showSummary = true;
  updateControlVisibility();
}
function resetAll() {
  issueSelect.selected(DEFAULT_ISSUE);
  onIssueChange();
  messageInput.value('');
  explainInput.value('');
  reviseInput.value('');
  notesInput.value('');
  audienceSelect.selected(PLACEHOLDER_AUD);
  channelSelect.selected(PLACEHOLDER_CHAN);
  for (const s of sliders) s.value(0);
  stage = 0;
  showSummary = false;
  updateControlVisibility();
}

// ---------- completion logic ----------
function stageComplete(s) {
  if (s === 0) return messageInput.value().trim().length >= 12;
  if (s === 1) return selectedOrder.length >= 2 && explainInput.value().trim().length >= 12;
  if (s === 2) {
    return audienceSelect.value() !== PLACEHOLDER_AUD &&
      channelSelect.value() !== PLACEHOLDER_CHAN &&
      reviseInput.value().trim().length >= 12;
  }
  if (s === 3) {
    let rated = true;
    for (const sl of sliders) if (int(sl.value()) < 1) rated = false;
    return rated && notesInput.value().trim().length >= 8;
  }
  return false;
}
function allComplete() {
  return stageComplete(0) && stageComplete(1) && stageComplete(2) && stageComplete(3);
}

// ============================================================
function draw() {
  updateCanvasSize();
  if (canvasWidth !== lastLayoutWidth) layoutControls();

  // panels
  stroke('silver'); strokeWeight(1);
  fill('white'); rect(0, 0, canvasWidth, drawHeight);
  fill('#f1f5f9'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  drawTitle();
  drawProgressBar();

  if (showSummary) {
    drawSummary();
  } else {
    if (stage === 0) drawFormulate();
    else if (stage === 1) drawJustify();
    else if (stage === 2) drawTailor();
    else if (stage === 3) drawEvaluate();
    drawDisclaimer();
  }

  updateButtonStates();
}

function drawTitle() {
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(18);
  text('Health Message Campaign Builder', canvasWidth / 2, 8);
  textStyle(NORMAL);
}

function drawProgressBar() {
  progRects = [];
  const top = 44, h = 26;
  const segW = (canvasWidth - 2 * margin) / 4;
  textAlign(CENTER, CENTER);
  textSize(12);
  for (let i = 0; i < 4; i++) {
    const x = margin + i * segW;
    const w = segW - 6;
    const done = stageComplete(i);
    const current = (i === stage && !showSummary);
    if (done) fill('seagreen');
    else if (current) fill('#dbeafe');
    else fill('#e2e8f0');
    stroke(current ? color('navy') : color('silver'));
    strokeWeight(current ? 2.5 : 1);
    rect(x, top, w, h, 6);
    noStroke();
    fill(done ? color('white') : (current ? color('navy') : color('#475569')));
    textStyle(current ? BOLD : NORMAL);
    const label = (done ? '✓ ' : (i + 1) + '. ') + stageNames[i];
    text(label, x + w / 2, top + h / 2 + 1);
    textStyle(NORMAL);
    progRects.push({ x: x, y: top, w: w, h: h, i: i });
  }
}

function drawDisclaimer() {
  noStroke();
  fill('#94a3b8');
  textAlign(CENTER, BOTTOM);
  textSize(10);
  text('Facts shown are illustrative for learning. Verify every claim against a current, credible source before using it in a real campaign.',
    canvasWidth / 2, drawHeight - 6, canvasWidth - 2 * margin, 30);
}

// ---------- Stage 1: Formulate ----------
function drawFormulate() {
  stageHeader('Stage 1 — Formulate your message',
    'Choose a health issue, then draft ONE clear, specific sentence. Name a fact and one concrete action — avoid vague topics like “this is bad.”');

  noStroke();
  fill('#334155');
  textAlign(LEFT, BOTTOM);
  textSize(13);
  textStyle(BOLD);
  text('Health issue', margin, LY.f_issueLabel);
  text('Your one-sentence message', margin, LY.f_msgLabel);
  textStyle(NORMAL);

  // tip box
  infoBox(margin, LY.f_tip, canvasWidth - 2 * margin, 74, '#0369a1',
    'What makes a strong message',
    'Weak: “Vaping is bad.”  →  Strong: name a specific mechanism or fact AND a clear call to action, ' +
    'for example something the audience can actually do after reading it. You will justify the facts in the next stage.');

  stageStatusLine(stageComplete(0),
    'Draft a full sentence (at least 12 characters) to complete this stage.',
    'This stage is complete. Choose Next to justify your message with evidence.',
    LY.f_tip + 92);
}

// ---------- Stage 2: Justify ----------
function drawJustify() {
  stageHeader('Stage 2 — Justify with evidence',
    'Click facts to move them into “Supporting evidence.” Choose at least two, then explain how they back up your message.');

  const colGap = 18;
  const colW = (canvasWidth - 2 * margin - colGap) / 2;
  const leftX = margin;
  const rightX = margin + colW + colGap;

  // column headers
  noStroke();
  textAlign(LEFT, BOTTOM);
  textSize(13);
  textStyle(BOLD);
  fill('#475569');
  text('Evidence bank (' + issueSelect.value() + ')', leftX, LY.j_colHead);
  fill(selectedOrder.length >= 2 ? color('seagreen') : color('#b45309'));
  text('Supporting evidence (' + selectedOrder.length + ' chosen — need 2+)', rightX, LY.j_colHead);
  textStyle(NORMAL);

  bankRects = [];
  selectedRects = [];

  // bank = cards not selected
  let bankRow = 0;
  for (let i = 0; i < evidenceCards.length; i++) {
    if (selectedOrder.indexOf(i) !== -1) continue;
    const y = LY.j_cardsTop + bankRow * (LY.j_cardH + LY.j_cardGap);
    drawEvidenceCard(leftX, y, colW, LY.j_cardH, evidenceCards[i].text, false);
    bankRects.push({ x: leftX, y: y, w: colW, h: LY.j_cardH, idx: i });
    bankRow++;
  }
  if (bankRow === 0) {
    noStroke(); fill('#94a3b8'); textAlign(CENTER, CENTER); textSize(12);
    text('All facts chosen', leftX + colW / 2, LY.j_cardsTop + 24);
  }

  // selected column
  if (selectedOrder.length === 0) {
    noStroke();
    stroke('#cbd5e1'); strokeWeight(1.5); drawingContext.setLineDash([5, 4]);
    fill('#f8fafc');
    rect(rightX, LY.j_cardsTop, colW, LY.j_cardH * 2 + LY.j_cardGap, 8);
    drawingContext.setLineDash([]);
    noStroke(); fill('#94a3b8'); textAlign(CENTER, CENTER); textSize(12);
    text('Click facts on the left to add them here', rightX + colW / 2, LY.j_cardsTop + LY.j_cardH);
  }
  for (let r = 0; r < selectedOrder.length; r++) {
    const idx = selectedOrder[r];
    const y = LY.j_cardsTop + r * (LY.j_cardH + LY.j_cardGap);
    drawEvidenceCard(rightX, y, colW, LY.j_cardH, evidenceCards[idx].text, true);
    selectedRects.push({ x: rightX, y: y, w: colW, h: LY.j_cardH, idx: idx });
  }

  // explanation
  noStroke();
  fill('#334155'); textAlign(LEFT, BOTTOM); textSize(13); textStyle(BOLD);
  text('How does this evidence support your message?', margin, LY.j_explainLabel);
  textStyle(NORMAL);

  stageStatusLine(stageComplete(1),
    'Choose 2+ facts and write at least one sentence linking them to your message.',
    'This stage is complete. Choose Next to tailor the message to an audience.',
    LY.j_status);
}

function drawEvidenceCard(x, y, w, h, txt, selected) {
  const hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });
  strokeWeight(selected ? 2 : 1.4);
  stroke(selected ? color('seagreen') : (hover ? color('#2563eb') : color('#cbd5e1')));
  fill(selected ? color('#eaf7ee') : (hover ? color('#eff6ff') : color('white')));
  rect(x, y, w, h, 8);
  noStroke();
  // marker
  fill(selected ? color('seagreen') : color('#94a3b8'));
  textAlign(CENTER, CENTER); textSize(15);
  text(selected ? '✓' : '+', x + 15, y + h / 2);
  // text
  fill('#1e293b');
  textAlign(LEFT, CENTER); textSize(12);
  text(txt, x + 28, y + 2, w - 36, h - 6);
}

// ---------- Stage 3: Tailor ----------
function drawTailor() {
  stageHeader('Stage 3 — Tailor to your audience',
    'Choose who will receive the message. The guidance updates to show the tone and channels that fit. Then revise the message and pick a channel.');

  noStroke();
  fill('#334155'); textAlign(LEFT, BOTTOM); textSize(13); textStyle(BOLD);
  text('Target audience', margin, LY.t_audLabel);
  text('Revise the message for this audience', margin, LY.t_msgLabel);
  text('Delivery channel', margin, LY.t_chanLabel);
  textStyle(NORMAL);

  // audience guidance box
  const aud = audienceSelect.value();
  if (aud !== PLACEHOLDER_AUD && audienceGuidance[aud]) {
    const g = audienceGuidance[aud];
    infoBox(margin, LY.t_guide, canvasWidth - 2 * margin, 132, '#0d9488',
      'Guidance for: ' + aud,
      'Priority: ' + g.priority + '\nTone: ' + g.tone + '\n' + g.channels +
      '\nKeep the facts the same — change only the wording, emphasis, and format.');
  } else {
    infoBox(margin, LY.t_guide, canvasWidth - 2 * margin, 132, '#94a3b8',
      'Choose an audience above',
      'Tailoring means adjusting tone, vocabulary, and channel for a specific audience — without changing the underlying facts.');
  }

  stageStatusLine(stageComplete(2),
    'Choose an audience and a channel, then revise the message (12+ characters).',
    'This stage is complete. Choose Next to evaluate the message.',
    LY.t_chanCtrl + 44);
}

// ---------- Stage 4: Evaluate ----------
function drawEvaluate() {
  stageHeader('Stage 4 — Evaluate effectiveness',
    'Rate your message honestly on each criterion (1 = weak, 4 = strong). A low score is not failure — it points to what to revise next.');

  const sliderX = Math.min(canvasWidth * 0.56, canvasWidth - margin - 210);
  let total = 0, allRated = true;
  for (let i = 0; i < criteria.length; i++) {
    const y = LY.e_rowsTop + i * LY.e_rowH;
    const v = int(sliders[i].value());
    if (v < 1) allRated = false; else total += v;

    noStroke();
    fill('#1e293b'); textAlign(LEFT, TOP); textSize(13); textStyle(BOLD);
    text(criteria[i].name, margin, y);
    textStyle(NORMAL);
    fill('#64748b'); textSize(11);
    text(criteria[i].desc, margin, y + 17, sliderX - margin - 12, 34);

    // rating readout to the right of the slider
    fill(v < 1 ? color('#b45309') : color('seagreen'));
    textAlign(LEFT, CENTER); textSize(13); textStyle(BOLD);
    text(v < 1 ? 'not rated' : v + ' / 4', sliderX + 182, y + 14);
    textStyle(NORMAL);
  }

  // total
  noStroke();
  textAlign(LEFT, TOP); textSize(13); textStyle(BOLD);
  fill(allRated ? color('navy') : color('#94a3b8'));
  text('Self-evaluation total: ' + (allRated ? total + ' / 20' : '— (rate all five)'), margin, LY.e_total);
  textStyle(NORMAL);

  fill('#334155'); textAlign(LEFT, BOTTOM); textSize(13); textStyle(BOLD);
  text('Revision notes', margin, LY.e_notesLabel);
  textStyle(NORMAL);

  if (allComplete()) {
    noStroke(); fill('seagreen'); textAlign(RIGHT, CENTER); textSize(12); textStyle(BOLD);
    text('All stages complete — you can generate your summary ↓', canvasWidth - margin, LY.e_notesLabel - 4);
    textStyle(NORMAL);
  }
}

// ---------- Summary ----------
function drawSummary() {
  const x = margin;
  const w = canvasWidth - 2 * margin;
  let y = LY.headY - 6;

  noStroke();
  fill('navy'); textAlign(LEFT, TOP); textSize(16); textStyle(BOLD);
  text('Your Health Message Campaign', x, y);
  textStyle(NORMAL);
  y += 26;

  const issue = issueSelect.value();
  const finalMsg = reviseInput.value().trim() || messageInput.value().trim();
  const revised = reviseInput.value().trim().length > 0 &&
    reviseInput.value().trim() !== messageInput.value().trim();
  const evidence = selectedOrder.map(function (i) { return evidenceCards[i].text; });
  const explanation = explainInput.value().trim();
  const aud = audienceSelect.value();
  const chan = channelSelect.value();
  const notes = notesInput.value().trim();
  let total = 0; for (const s of sliders) total += int(s.value());

  y = summarySection(x, y, w, 'Health issue', issue);
  y = summarySection(x, y, w, 'Message' + (revised ? ' (tailored for the audience)' : ''), finalMsg);

  // evidence bullets
  y = summaryHeader(x, y, 'Supporting evidence');
  fill('#1e293b'); textSize(12);
  for (const e of evidence) {
    const lines = wrapLines('• ' + e, w - 8);
    for (const ln of lines) { text(ln, x + 6, y); y += 15; }
  }
  y += 4;
  y = summarySection(x, y, w, 'Why this evidence supports the message', explanation);
  y = summarySection(x, y, w, 'Audience & channel', aud + '  ·  ' + chan);

  // self-evaluation compact
  y = summaryHeader(x, y, 'Self-evaluation (' + total + ' / 20)');
  fill('#1e293b'); textSize(12);
  let parts = [];
  for (let i = 0; i < criteria.length; i++) parts.push(criteria[i].name + ' ' + int(sliders[i].value()) + '/4');
  const evalLines = wrapLines(parts.join('   ·   '), w - 4);
  for (const ln of evalLines) { text(ln, x + 2, y); y += 15; }
  y += 4;
  y = summarySection(x, y, w, 'Revision notes', notes);

  // footer hint
  noStroke(); fill('#94a3b8'); textAlign(LEFT, TOP); textSize(10);
  text('Tip: use your browser’s Print command to save this summary as a PDF. Facts are illustrative — verify sources before real use.',
    x, drawHeight - 26, w, 24);
}

function summaryHeader(x, y, title) {
  noStroke();
  fill('navy'); textAlign(LEFT, TOP); textSize(12.5); textStyle(BOLD);
  text(title, x, y);
  textStyle(NORMAL);
  return y + 17;
}
function summarySection(x, y, w, title, body) {
  y = summaryHeader(x, y, title);
  fill('#1e293b'); textSize(12);
  const lines = wrapLines(body && body.length ? body : '(not provided)', w - 4);
  for (const ln of lines) { text(ln, x + 2, y); y += 15; }
  return y + 6;
}

// ---------- small drawing helpers ----------
function stageHeader(title, instr) {
  noStroke();
  fill('#0f172a'); textAlign(LEFT, TOP); textSize(15); textStyle(BOLD);
  text(title, margin, LY.headY - 4);
  textStyle(NORMAL);
  fill('#475569'); textSize(12);
  text(instr, margin, LY.instrY, canvasWidth - 2 * margin, 40);
}

function stageStatusLine(complete, todo, doneMsg, y) {
  noStroke();
  textAlign(LEFT, TOP); textSize(12);
  if (complete) { fill('seagreen'); text('✓ ' + doneMsg, margin, y, canvasWidth - 2 * margin, 30); }
  else { fill('#b45309'); text('○ ' + todo, margin, y, canvasWidth - 2 * margin, 30); }
}

function infoBox(x, y, w, h, accent, title, body) {
  noStroke();
  fill('#f8fafc'); rect(x, y, w, h, 4);
  fill(accent); rect(x, y, 4, h, 4);
  fill(accent); textAlign(LEFT, TOP); textSize(12); textStyle(BOLD);
  text(title, x + 12, y + 8);
  textStyle(NORMAL);
  fill('#334155'); textSize(12);
  text(body, x + 12, y + 26, w - 22, h - 30);
}

function wrapLines(str, maxW) {
  const words = String(str).split(' ');
  const lines = [];
  let cur = '';
  for (const wd of words) {
    const test = cur ? cur + ' ' + wd : wd;
    if (textWidth(test) > maxW && cur) { lines.push(cur); cur = wd; }
    else cur = test;
  }
  if (cur) lines.push(cur);
  return lines;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

// ---------- button state (enable/disable) ----------
function updateButtonStates() {
  const ready = allComplete();
  generateButton.elt.disabled = !ready;
  if (ready) {
    generateButton.style('background', 'navy');
    generateButton.style('color', 'white');
    generateButton.style('border', '1px solid navy');
    generateButton.style('cursor', 'pointer');
    generateButton.style('opacity', '1');
  } else {
    generateButton.style('background', '#e2e8f0');
    generateButton.style('color', '#94a3b8');
    generateButton.style('border', '1px solid #cbd5e1');
    generateButton.style('cursor', 'not-allowed');
    generateButton.style('opacity', '1');
  }
}

// ---------- interaction ----------
function mousePressed() {
  // progress bar jump (works from any view)
  for (const p of progRects) {
    if (pointInRect(mouseX, mouseY, p)) {
      stage = p.i; showSummary = false; updateControlVisibility(); return;
    }
  }
  if (showSummary) return;

  if (stage === 1) {
    // click bank card -> select (max 5)
    for (const r of bankRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        if (selectedOrder.length < 5) selectedOrder.push(r.idx);
        return;
      }
    }
    // click selected card -> deselect
    for (const r of selectedRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        const k = selectedOrder.indexOf(r.idx);
        if (k !== -1) selectedOrder.splice(k, 1);
        return;
      }
    }
  }
}

// ---------- responsive ----------
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
