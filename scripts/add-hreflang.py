#!/usr/bin/env python3
"""Insert hreflang links (vodds.fr <-> vodds.com) into the <head> of mapped pages.

Source: "Vodds.fr _ Internal Linking Plan" -> sheet "hreflang".
The same clusters are emitted on vodds.com by the vodds_main theme
(functions.php, vodds_fr_hreflang_map) - keep both maps in sync.

Idempotent: the block between the markers is replaced on every run.
Usage: python3 scripts/add-hreflang.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FR = "https://vodds.fr/"
COM = "https://vodds.com/"

# fr slug -> vodds.com path. Pages left out of the map get their block removed.
CLUSTERS = {
    "": "",
    "bookmakers/": "bookmakers/",
    "comparateur-de-cotes/": "odds-scanner/",
    "paiements/": "payment-policy/",
    "promotions/": "promotions/",
    "contact/": "contact-us/",
    "conditions-generales/": "terms-and-conditions/",
    "a-propos/": "about-us/",
}

START, END = "<!-- hreflang:start -->", "<!-- hreflang:end -->"
BLOCK_RE = re.compile(re.escape(START) + r".*?" + re.escape(END) + r"\n?", re.S)
CANONICAL_RE = re.compile(r'^<link rel="canonical"[^>]*>\n', re.M)


def build_block(fr_slug, com_path):
    alts = [
        ("fr", FR + fr_slug),
        ("en", COM + com_path),
        ("es", COM + "es/" + com_path),
        ("ru", COM + "ru/" + com_path),
        ("x-default", COM + com_path),
    ]
    lines = [f'<link rel="alternate" hreflang="{lang}" href="{url}">' for lang, url in alts]
    return "\n".join([START, *lines, END]) + "\n"


def files_for(fr_slug):
    if fr_slug == "":
        # accueil.html is kept in sync with the served homepage (index.html)
        return [ROOT / "index.html", ROOT / "accueil.html"]
    return [ROOT / fr_slug / "index.html"]


def main():
    mapped = {path for fr_slug in CLUSTERS for path in files_for(fr_slug)}
    for path in sorted({*ROOT.glob("*.html"), *ROOT.glob("*/index.html")} - mapped):
        html = path.read_text(encoding="utf-8")
        if START in html:
            path.write_text(BLOCK_RE.sub("", html), encoding="utf-8")
            print(f"{path.relative_to(ROOT)}: hreflang removed")

    for fr_slug, com_path in CLUSTERS.items():
        block = build_block(fr_slug, com_path)
        for path in files_for(fr_slug):
            html = BLOCK_RE.sub("", path.read_text(encoding="utf-8"))
            canonical = CANONICAL_RE.search(html)
            if not canonical:
                raise SystemExit(f"no canonical in {path}")
            html = html[: canonical.end()] + block + html[canonical.end():]
            path.write_text(html, encoding="utf-8")
            print(f"{path.relative_to(ROOT)}: {block.count('hreflang=')} hreflang")


if __name__ == "__main__":
    main()
