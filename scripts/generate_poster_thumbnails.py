#!/usr/bin/env python3
"""Generate lightweight thumbnails for the poster index grid.

The poster index page (docs/posters/index.md) displays every poster's
full-size PNG (typically 1536x1024, 2-3 MB each) in a 3-column CSS grid
where each card renders at ~600px wide. That means ~88 posters x ~2.5MB
loads on a single page. This script generates a compressed JPEG
thumbnail next to each full-size PNG and rewrites index.md to reference
the thumbnail instead. Poster detail pages (main.html) are untouched and
keep using the full-size PNG for the interactive callout overlay.

Usage:
    python3 scripts/generate_poster_thumbnails.py [--width 900] [--quality 82]
    python3 scripts/generate_poster_thumbnails.py --dry-run
"""

import argparse
import re
from pathlib import Path

from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
POSTERS_DIR = REPO_ROOT / "docs" / "posters"
INDEX_MD = POSTERS_DIR / "index.md"
THUMB_SUFFIX = "-thumb.jpg"


def find_posters():
    """Yield (slug, full_png_path) for every poster directory that has a
    full-size PNG matching its directory name."""
    for entry in sorted(POSTERS_DIR.iterdir()):
        if not entry.is_dir():
            continue
        slug = entry.name
        full_png = entry / f"{slug}.png"
        if full_png.exists():
            yield slug, full_png


def generate_thumbnail(full_png: Path, width: int, quality: int) -> Path:
    thumb_path = full_png.with_name(full_png.stem + THUMB_SUFFIX)
    with Image.open(full_png) as img:
        img = img.convert("RGB")
        if img.width > width:
            height = round(img.height * (width / img.width))
            img = img.resize((width, height), Image.LANCZOS)
        img.save(thumb_path, "JPEG", quality=quality, optimize=True)
    return thumb_path


def update_index_md():
    """Point every poster card image at its -thumb.jpg instead of the
    full-size .png. The link that wraps the image (to index.md) is left
    untouched because it matches a different pattern."""
    text = INDEX_MD.read_text()
    pattern = re.compile(r"\(\./([a-z0-9-]+)/\1\.png\)")
    new_text, count = pattern.subn(rf"(./\1/\1{THUMB_SUFFIX})", text)
    INDEX_MD.write_text(new_text)
    return count


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--width", type=int, default=900, help="Thumbnail width in pixels (default: 900)")
    parser.add_argument("--quality", type=int, default=82, help="JPEG quality 1-95 (default: 82)")
    parser.add_argument("--dry-run", action="store_true", help="Report what would happen without writing files")
    parser.add_argument("--skip-index-update", action="store_true", help="Only generate thumbnails, don't rewrite index.md")
    args = parser.parse_args()

    posters = list(find_posters())
    if not posters:
        print(f"No posters found under {POSTERS_DIR}")
        return

    total_before = 0
    total_after = 0
    for slug, full_png in posters:
        before = full_png.stat().st_size
        total_before += before
        if args.dry_run:
            print(f"[dry-run] would generate thumbnail for {slug} ({before / 1024:.0f} KB source)")
            continue
        thumb_path = generate_thumbnail(full_png, args.width, args.quality)
        after = thumb_path.stat().st_size
        total_after += after
        print(f"{slug}: {before / 1024:.0f} KB -> {after / 1024:.0f} KB  ({thumb_path.relative_to(REPO_ROOT)})")

    print(f"\n{len(posters)} posters processed.")
    if not args.dry_run:
        print(f"Full-size total: {total_before / 1024 / 1024:.1f} MB")
        print(f"Thumbnail total: {total_after / 1024 / 1024:.1f} MB")

        if not args.skip_index_update:
            count = update_index_md()
            print(f"Updated {count} image reference(s) in {INDEX_MD.relative_to(REPO_ROOT)}")


if __name__ == "__main__":
    main()
