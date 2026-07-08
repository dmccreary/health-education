#!/usr/bin/env python3
"""Fix callout panel assignments for "top-bottom" interactive infographic posters.

Background
----------
Some posters in ``docs/posters/*/data.json`` use ``"layout": "top-bottom"``,
which places callout labels along the top and bottom edges of the image. The
generator skill assigned panels by *parity* (even ids on top, odd ids on the
bottom, or vice-versa), so a label often landed on whichever strip had nothing
to do with where its marker actually sits.

This script rewrites the ``panel`` field of every callout by *vertical
proximity*: the markers in the upper half of the image (smallest ``y``) go on
``"top"`` and the lower half go on ``"bottom"``, so each label sits on the strip
closest to its marker and the leader line stays short. The split is at the
median -- ceil(N/2) markers on top -- so the two strips stay balanced. This is
the same rule the interactive-infographic-overlay skill now documents for
generating new posters.

Only the *value* of each ``panel`` field is changed, via a targeted text
substitution -- ``x``, ``y``, colors, prose, and even the exact byte encoding
of every other line (e.g. ``\\u2019`` vs a literal apostrophe) are left
untouched, so the diff contains nothing but panel flips.

Usage
-----
    # Preview every top-bottom poster without writing anything:
    python3 scripts/fix_top_bottom_panels.py --dry-run

    # Fix a single poster:
    python3 scripts/fix_top_bottom_panels.py docs/posters/feelings-weather-station/data.json

    # Fix every poster under docs/posters:
    python3 scripts/fix_top_bottom_panels.py
"""

from __future__ import annotations

import argparse
import glob
import json
import os
import re
import sys

# Matches a JSON `"panel": "top"` / `"panel": "bottom"` line and isolates the
# value in group 2. Anchored to a newline + indentation so it can only match
# the object key, never the substring "panel" inside prose.
PANEL_RE = re.compile(r'(\n[ \t]*"panel":[ \t]*")(top|bottom)(")')


def compute_panels(callouts):
    """Return {id: panel} placing each label on the strip nearest its marker.

    Assignment is by vertical position ``y`` (0 = top of image). The callouts
    with the smallest ``y`` -- the upper ceil(N/2) markers -- are assigned
    ``"top"``; the rest are assigned ``"bottom"``. Splitting at the median keeps
    the two strips balanced while still placing every label on its closer edge,
    which minimizes the leader-line length. Ties are broken by ``x`` then ``id``
    so the result is deterministic regardless of the callouts' order in the file.
    """
    ordered = sorted(callouts, key=lambda c: (c["y"], c["x"], c["id"]))
    n = len(ordered)
    cut = (n + 1) // 2  # ceil(N/2): upper half (incl. the extra one for odd N) on top
    top_ids = {c["id"] for c in ordered[:cut]}
    return {c["id"]: ("top" if c["id"] in top_ids else "bottom") for c in callouts}


def fix_file(path, dry_run):
    """Flip panel assignments in one data.json. Returns True if it changed."""
    with open(path, encoding="utf-8") as fh:
        text = fh.read()

    data = json.loads(text)
    if data.get("layout") != "top-bottom":
        return None  # not a top-bottom poster; skip

    callouts = data.get("callouts", [])
    if not callouts:
        return None

    new_panels = compute_panels(callouts)
    # Desired panel for each callout in the order the objects appear in the
    # file -- that is the same order the "panel" lines appear in the text.
    desired = [new_panels[c["id"]] for c in callouts]

    name = os.path.basename(os.path.dirname(path))

    # Guard: the number of panel lines in the text must match the callout count,
    # otherwise the positional mapping below would be wrong. Bail loudly instead.
    found = len(PANEL_RE.findall(text))
    if found != len(callouts):
        print(f"  !!  {name}: found {found} panel lines but {len(callouts)} "
              f"callouts -- skipped for safety")
        return None

    state = {"i": 0, "changes": []}

    def repl(m):
        i = state["i"]
        state["i"] += 1
        old = m.group(2)
        new = desired[i]
        if old != new:
            state["changes"].append((callouts[i]["id"], old, new))
        return f"{m.group(1)}{new}{m.group(3)}"

    new_text = PANEL_RE.sub(repl, text)
    changes = state["changes"]

    if not changes:
        print(f"  ok  {name}: already correct ({len(callouts)} callouts)")
        return False

    verb = "would change" if dry_run else "changed"
    detail = ", ".join(f"#{cid} {old}->{new}" for cid, old, new in changes)
    print(f"  fix {name}: {verb} {len(changes)}/{len(callouts)} -> {detail}")

    if not dry_run:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(new_text)
    return True


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.strip().splitlines()[0])
    parser.add_argument(
        "paths",
        nargs="*",
        help="data.json files to fix (default: every docs/posters/*/data.json)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="report what would change without writing any files",
    )
    args = parser.parse_args(argv)

    paths = args.paths or sorted(glob.glob("docs/posters/*/data.json"))
    if not paths:
        print("No data.json files found.", file=sys.stderr)
        return 1

    print(f"{'DRY RUN: ' if args.dry_run else ''}scanning {len(paths)} file(s)...")
    changed = skipped = correct = 0
    for path in paths:
        result = fix_file(path, args.dry_run)
        if result is None:
            skipped += 1
        elif result:
            changed += 1
        else:
            correct += 1

    print(
        f"\nSummary: {changed} {'to change' if args.dry_run else 'changed'}, "
        f"{correct} already correct, {skipped} skipped (not top-bottom)."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
