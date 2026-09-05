# TODO

<!-- p5js-v2-audit-2026-09-05 -->
## p5.js 2.x Upgrade: MicroSim Fixes Needed (2026-09-05)

A static scan of this repo's `docs/sims/` MicroSims found **7 sim(s)** using p5.js v1-only APIs that will break if upgraded to p5.js 2.x (the microsim-generator skill's templates now default to p5@2.3.2). Fix these before bumping this repo's MicroSims past p5@1.x.

- [ ] **body-safety-rules-interactive-guide** (`docs/sims/body-safety-rules-interactive-guide/`)
    - `body-safety-rules-interactive-guide.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **comfort-traditions-around-world** (`docs/sims/comfort-traditions-around-world/`)
    - `comfort-traditions-around-world.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **need-it-or-want-it** (`docs/sims/need-it-or-want-it/`)
    - `need-it-or-want-it.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **one-of-a-kind-classroom-gallery** (`docs/sims/one-of-a-kind-classroom-gallery/`)
    - `one-of-a-kind-classroom-gallery.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **positive-or-negative-influence-sorter** (`docs/sims/positive-or-negative-influence-sorter/`)
    - `positive-or-negative-influence-sorter.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **safe-or-unwanted-touch-sorter** (`docs/sims/safe-or-unwanted-touch-sorter/`)
    - `safe-or-unwanted-touch-sorter.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **vitamin-mineral-matcher** (`docs/sims/vitamin-mineral-matcher/`)
    - `vitamin-mineral-matcher.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.

Reference: [p5.js Teachers' Guide to v2 transition](https://p5js.org/tutorials/v2_transition/)
